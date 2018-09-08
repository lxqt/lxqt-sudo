/* BEGIN_COMMON_COPYRIGHT_HEADER
 * (c)LGPL2+
 *
 * LXQt - a lightweight, Qt based, desktop toolset
 * https://lxqt.org
 *
 * Copyright: 2015-2018 LXQt team
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
#include <QProcessEnvironment>
#include <QTimer>
#include <pty.h>
#include <unistd.h>
#include <memory>
#include <csignal>
#include <sys/wait.h>
#include <fcntl.h>
#include <iostream>
#include <thread>
#include <QDebug>

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
                    "    -r|--remove    Do not show the command to be executed in the window.\n"
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

    //Note: array must be sorted to allow usage of binary search
    static constexpr char const * const ALLOWED_VARS[] = {
        "DISPLAY"
            , "LANG", "LANGUAGE", "LC_ADDRESS", "LC_ALL", "LC_COLLATE", "LC_CTYPE", "LC_IDENTIFICATION", "LC_MEASUREMENT"
            , "LC_MESSAGES", "LC_MONETARY", "LC_NAME", "LC_NUMERIC", "LC_PAPER", "LC_TELEPHONE", "LC_TIME"
            , "PATH", "QT_PLATFORM_PLUGIN", "QT_QPA_PLATFORMTHEME", "WAYLAND_DISPLAY", "XAUTHORITY"
    };
    static constexpr char const * const * const ALLOWED_END = ALLOWED_VARS + sizeof (ALLOWED_VARS) / sizeof (ALLOWED_VARS[0]);
    struct assert_helper
    {
        assert_helper()
        {
            Q_ASSERT(std::is_sorted(ALLOWED_VARS, ALLOWED_END
                        , [] (char const * const a, char const * const b) { return strcmp(a, b) < 0; }));
        }
    };
    assert_helper h;

    inline void env_workarounds()
    {
        std::cerr << LXQTSUDO << ": Stripping child environment except for: ";
        std::copy(ALLOWED_VARS, ALLOWED_END - 1, std::ostream_iterator<const char *>{std::cerr, ", "});
        std::cerr << *(ALLOWED_END - 1) << '\n'; // printing the last separately to avoid trailing comma
        // cleanup environment, because e.g.:
        // - pcmanfm-qt will not start if the DBUS_SESSION_BUS_ADDRESS is preserved
        // - Qt apps may change user's config files permissions if the XDG_* are preserved
        for (auto const & key : QProcessEnvironment::systemEnvironment().keys())
        {
            auto const & i = std::lower_bound(ALLOWED_VARS, ALLOWED_END, key, [] (char const * const a, QString const & b) {
                return b > a;
            });
            if (i == ALLOWED_END || key != *i)
            {
                unsetenv(key.toStdString().c_str());
            }
        }
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
    QString m_remove;
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
        } else if ("-r" == arg1)
        {
            mArgs.removeAt(0);
            m_remove = "-r";
        }
        else if ("--remove" == arg1)
        {
            mArgs.removeAt(0);
            m_remove = "--remove";
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
    }

    mArgs.replaceInStrings(QStringLiteral("'"), QStringLiteral("'\\''"));
    mSquashedArgs = mArgs.replaceInStrings(QRegExp(QStringLiteral("^(.*)$")), "'\\1'").join(QStringLiteral(" "));

    mChildPid = forkpty(&mPwdFd, nullptr, nullptr, nullptr);
    if (0 == mChildPid)
    {
        child(); // never returns
        return 1; // but for sure
    }

    mDlg.reset(new PasswordDialog{mSquashedArgs,m_remove});
    mDlg->setModal(true);
    lxqtApp->setActiveWindow(mDlg.data());

    if (-1 == mChildPid)
        QMessageBox(QMessageBox::Critical, mDlg->windowTitle()
                , tr("Failed to fork: %1").arg(strerror(errno)), QMessageBox::Ok).exec();
    else
        return parent();

    return 1;
}


void Sudo::child()
{
    int params_cnt = 3 //1. su/sudo & "shell command" & last nullptr
        + (BACK_SU == mBackend ? 1 : 3); //-c for su | -E /bin/sh -c for sudo
    std::unique_ptr<char const *[]> params{new char const *[params_cnt]};
    const char ** param_arg = params.get() + 1;

    std::string program;
    if (BACK_SU == mBackend)
    {
        program = su_prog.toStdString();
    } else
    {
        program = sudo_prog.toStdString();
        *(param_arg++) = "-E"; //preserve environment
        *(param_arg++) = "/bin/sh";
    }
    *(param_arg++) = "-c"; //run command

    params[0] = program.c_str();

    // Note: we force the su/sudo to communicate with us in the simplest
    // locale and then set the locale back for the command
    char const * const env_lc_all = getenv("LC_ALL");
    setenv("LC_ALL", "C", 1);
    std::string command;
    if (env_lc_all == nullptr)
    {
        command = "unset LC_ALL; ";
    } else
    {
        // Note: we need to check if someone is not trying to inject commands
        // for privileged execution via the LC_ALL
        if (nullptr != strchr(env_lc_all, '\''))
        {
            QTextStream{stderr, QIODevice::WriteOnly} << tr("%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exitting!\n").arg(app_master).arg(env_lc_all);
            exit(1);
        }
        command = "LC_ALL='";
        command += env_lc_all;
        command += "' ";
    }
    command += "exec ";
    command += mSquashedArgs.toStdString();
    *(param_arg++) = command.c_str();

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
    kill(mChildPid, SIGINT);
    int res, status;
    for (int cnt = 10; 0 == (res = waitpid(mChildPid, &status, WNOHANG)) && 0 < cnt; --cnt)
        QThread::msleep(100);

    if (0 == res)
    {
        kill(mChildPid, SIGKILL);
    }
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
            }
        });

    QString last_line;
    QScopedPointer<QSocketNotifier> pwd_watcher{new QSocketNotifier{mPwdFd, QSocketNotifier::Read}};
    auto reader = [&]
        {
            QString line = child_str.readAll();
            if (line.isEmpty())
            {
                pwd_watcher.reset(nullptr); //stop the notifications events

                QString const & prog = BACK_SU == mBackend ? su_prog : sudo_prog;
                if (last_line.startsWith(QStringLiteral("%1:").arg(prog)))
                {
                    QMessageBox(QMessageBox::Critical, mDlg->windowTitle()
                            , tr("Child '%1' process failed!\n%2").arg(prog).arg(last_line), QMessageBox::Ok).exec();
                }
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

        };

    QObject::connect(pwd_watcher.data(), &QSocketNotifier::activated, reader);

    std::unique_ptr<std::thread> child_waiter;
    QTimer::singleShot(0, [&child_waiter, this] {
            child_waiter.reset(new std::thread{[this] {
                    int res, status;
                    res = waitpid(mChildPid, &status, 0);
                    mRet = (mChildPid == res && WIFEXITED(status)) ? WEXITSTATUS(status) : 1;
                    lxqtApp->quit();
                }
            });
        });

    lxqtApp->exec();

    child_waiter->join();

    // try to read the last line(s)
    reader();

    fclose(pwd_f);
    close(mPwdFd);

    return mRet;
}

