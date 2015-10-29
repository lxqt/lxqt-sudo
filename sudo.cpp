/* BEGIN_COMMON_COPYRIGHT_HEADER
 * (c)LGPL2+
 *
 * LXQt - a lightweight, Qt based, desktop toolset
 * http://lxqt.org
 *
 * Copyright: 2015 LXQt team
 * Authors:
 *   Palo Kisa <palo.kisa@gmail.com>
 *
 * This program or library is free software; you can redistribute it
 * and/or modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General
 * Public License along with this library; if not, write to the
 * Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301 USA
 *
 * END_COMMON_COPYRIGHT_HEADER */

#include "sudo.h"
#include "passworddialog.h"

#include <LXQt/Application>

#include <QTextStream>
#include <QMessageBox>
#include <QFileInfo>
#include <QSocketNotifier>
#include <QDebug>
#include <QThread>
#include <pty.h>
#include <unistd.h>
#include <memory>
#include <csignal>
#include <sys/wait.h>
#include <fcntl.h>

namespace
{
    const QString app_master{QStringLiteral(LXQTSUDO)};
    const QString app_version{QStringLiteral(LXQT_VERSION)};
    const QString app_lxsu{QStringLiteral(LXQTSUDO_LXSU)};
    const QString app_lxsudo{QStringLiteral(LXQTSUDO_LXSUDO)};

    const QString su_prog{QStringLiteral(LXQTSUDO_SU)};
    const QString sudo_prog{QStringLiteral(LXQTSUDO_SUDO)};
    const QString pwd_prompt_end{QStringLiteral(": ")};
    const QChar nl{QLatin1Char('\n')};

    void usage(QString const & err = QString())
    {
        if (!err.isEmpty())
            QTextStream(stderr) << err << '\n';
        QTextStream(stdout)
            << QObject::tr("Usage: %1 option [command [arguments...]]\n\n"
                    "GUI frontend for %2/%3\n\n"
                    "Arguments:\n"
                    "  option:\n"
                    "    -h|--help      Print this help.\n"
                    "    -v|--version   Print version information.\n"
                    "    -s|--su        Use %3(1) as backend.\n"
                    "    -d|--sudo      Use %2(8) as backend.\n"
                    "  command          Command to run.\n"
                    "  arguments        Optional arguments for command.\n\n").arg(app_master).arg(sudo_prog).arg(su_prog);
        if (!err.isEmpty())
            QMessageBox(QMessageBox::Critical, app_master, err, QMessageBox::Ok).exec();
    }

    void version()
    {
        QTextStream(stdout)
            << QObject::tr("%1 version %2\n").arg(app_master).arg(app_version);
    }

    inline void env_workarounds()
    {
        //cleanup environment
        //pcmanfm-qt will not start if the DBUS_SESSION_BUS_ADDRESS is preserved
        unsetenv("DBUS_SESSION_BUS_ADDRESS");
    }
}

Sudo::Sudo()
    : mArgs{lxqtApp->arguments()}
    , mBackend{BACK_NONE}
{
    QString cmd = QFileInfo(mArgs[0]).fileName();
    mArgs.removeAt(0);
    if (app_lxsu == cmd)
        mBackend = BACK_SU;
    else if (app_lxsudo == cmd || app_master == cmd)
        mBackend = BACK_SUDO;
}

Sudo::~Sudo()
{
}

int Sudo::main()
{
    if (0 < mArgs.size())
    {
        //simple option check
        QString const & arg1 = mArgs[0];
        if ("-h" == arg1 || "--help" == arg1)
        {
            usage();
            return 0;
        } else if ("-v" == arg1 || "--version" == arg1)
        {
            version();
            return 0;
        } else if ("-s" == arg1 || "--su" == arg1)
        {
            mBackend = BACK_SU;
            mArgs.removeAt(0);
        } else if ("-d" == arg1 || "--sudo" == arg1)
        {
            mBackend = BACK_SUDO;
            mArgs.removeAt(0);
        }
    }
    //any other arguments we simply forward to su/sudo

    if (1 > mArgs.size())
    {
        usage(tr("%1: no command to run provided!").arg(app_master));
        return 1;
    }

    if (BACK_NONE == mBackend)
    {
        //we were invoked through unknown link (or renamed binary)
        usage(tr("%1: no backend chosen!").arg(app_master));
        return 1;
    } else if (BACK_SU == mBackend && 1 < mArgs.size())
    {
        QString cmd = mArgs.replaceInStrings(QRegExp(QStringLiteral("^(.*)$")), "'\\1'").join(QStringLiteral(" "));
        QTextStream(stderr) << tr("%1: warning - got multiple arguments for %2 backend, squashing into one: %3")
            .arg(app_master).arg(su_prog).arg(cmd);
        mArgs.erase(++mArgs.begin(), mArgs.end());
        mArgs[0] = std::move(cmd);
    }

    mDlg.reset(new PasswordDialog{mArgs});
    mDlg->setModal(true);
    lxqtApp->setActiveWindow(mDlg.data());

    mChildPid = forkpty(&mPwdFd, nullptr, nullptr, nullptr);
    if (0 == mChildPid)
        child(); //never returns
    else if (-1 == mChildPid)
        QMessageBox(QMessageBox::Critical, mDlg->windowTitle()
                , tr("Failed to fork: %1").arg(strerror(errno)), QMessageBox::Ok).exec();
    else
        return parent();

    return 1;
}


void Sudo::child()
{
    int params_cnt = 2 //1. su/sudo & last nullptr
        + 1 //-c for su | -E for sudo
        + mArgs.size();
    std::unique_ptr<char const *[]> params{new char const *[params_cnt]};
    const char ** param_arg = params.get() + 1;

    std::string program;
    if (BACK_SU == mBackend)
    {
        program = su_prog.toStdString();
        *(param_arg++) = "-c"; //run command
    } else
    {
        program = sudo_prog.toStdString();
        *(param_arg++) = "-E"; //preserve environment
    }

    params[0] = program.c_str();

    std::vector<std::string> arguments;
    for (const auto & a : mArgs)
        arguments.push_back(a.toStdString());
    for (const auto & a : arguments)
        *(param_arg++) = a.c_str();

    *param_arg = nullptr;

    env_workarounds();

    setsid(); //session leader
    execvp(params[0], const_cast<char **>(params.get()));

    //exec never returns in case of success
    QTextStream{stderr, QIODevice::WriteOnly} << tr("%1: Failed to exec '%2': %3\n").arg(app_master).arg(params[0]).arg(strerror(errno));
    exit(1);
}

void Sudo::stopChild()
{
    close(mPwdFd);
    kill(mChildPid, SIGINT);
    int res, status;
    for (int cnt = 10; 0 == (res = waitpid(mChildPid, &status, WNOHANG)) && 0 < cnt; --cnt)
        QThread::msleep(100);

    if (0 == res)
    {
        kill(mChildPid, SIGKILL);
        mRet = 1;
    } else
    {
        mRet = WIFEXITED(status) ? WEXITSTATUS(status) : 1;
    }
    mChildPid = -1;
}

int Sudo::parent()
{
    //set the FD as non-blocking
    if (0 != fcntl(mPwdFd, F_SETFL, O_NONBLOCK))
    {
        QMessageBox(QMessageBox::Critical, mDlg->windowTitle()
                , tr("Failed to set non-block: %1").arg(strerror(errno)), QMessageBox::Ok).exec();
        return 1;
    }

    FILE * pwd_f = fdopen(mPwdFd, "r+");
    if (nullptr == pwd_f)
    {
        QMessageBox(QMessageBox::Critical, mDlg->windowTitle()
                , tr("Failed to fdopen: %1").arg(strerror(errno)), QMessageBox::Ok).exec();
        return 1;
    }

    QTextStream child_str{pwd_f};

    QObject::connect(mDlg.data(), &QDialog::finished, [&] (int result)
        {
            if (QDialog::Accepted == result)
            {
                child_str << mDlg->password().append(nl);
                child_str.flush();
            } else
            {
                stopChild();
                lxqtApp->quit();
            }
        });

    QString last_line;
    QScopedPointer<QSocketNotifier> pwd_watcher{new QSocketNotifier{mPwdFd, QSocketNotifier::Read}};
    QObject::connect(pwd_watcher.data(), &QSocketNotifier::activated, [&]
        {
            QString line = child_str.readAll();
            if (line.isEmpty())
            {
                pwd_watcher.reset(nullptr);
                QString const & prog = BACK_SU == mBackend ? su_prog : sudo_prog;
                if (last_line.startsWith(QStringLiteral("%1:").arg(prog)))
                {
                    pwd_watcher.reset(nullptr); //stop the notifications events
                    stopChild();
                    QMessageBox(QMessageBox::Critical, mDlg->windowTitle()
                            , tr("Child '%1' process failed!\n%2").arg(prog).arg(last_line), QMessageBox::Ok).exec();
                }
                lxqtApp->quit();
            } else
            {
                if (line.endsWith(pwd_prompt_end))
                {
                    //if now echo is turned off, su/sudo requests password
                    struct termios tios;
                    //loop to be sure we don't miss the flag (we can afford such small delay in "normal" output processing)
                    for (size_t cnt = 10; 0 < cnt && 0 == tcgetattr(mPwdFd, &tios) && (ECHO & tios.c_lflag); --cnt)
                        QThread::msleep(10);
                    if (!(ECHO & tios.c_lflag))
                    {
                        mDlg->show();
                        return;
                    }
                }
                QTextStream{stderr, QIODevice::WriteOnly} << line;
                //assuming text oriented output
                QStringList lines = line.split(nl, QString::SkipEmptyParts);
                last_line = lines.isEmpty() ? QString() : lines.back();
            }

        });

    lxqtApp->exec();

    if (0 < mChildPid)
    {
        int res, status;
        res = waitpid(mChildPid, &status, 0);
        mRet = (mChildPid == res && WIFEXITED(status)) ? WEXITSTATUS(status) : 1;
    }

    return mRet;
}

