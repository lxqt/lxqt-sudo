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

#include <LXQt/Application>
#include "passworddialog.h"
#include <QMessageBox>
#include <QSocketNotifier>
#include <QDebug>
#include <QThread>
#include <pty.h>
#include <unistd.h>
#include <memory>
#include <csignal>
#include <sys/wait.h>
#include <fcntl.h>

extern const QString app_master;
extern const QString su_prog;
const QString su_prog{QStringLiteral(LXQTSUDO_SU)};
static const QString su_pwd_prompt_end{QStringLiteral(": ")};
static const QChar nl{QLatin1Char('\n')};

static void child(QString const & arg, PasswordDialog & dlg)
{
    std::string s_prog = su_prog.toStdString()
        , s_arg = arg.toStdString();

    char const * params[] = {
        s_prog.c_str()
            , "-c"
            , s_arg.c_str()
            , nullptr
    };

    setsid(); //session leader
    execvp(params[0], const_cast<char **>(params));

    //exec never returns in case of success
    QTextStream{stderr, QIODevice::WriteOnly} << QObject::tr("%1: Failed to exec '%2': %3\n").arg(app_master).arg(su_prog).arg(strerror(errno));
    exit(1);
}

static void stopChild(int & childPid
        , int & pwdFd
        , int & ret)
{
    close(pwdFd);
    kill(childPid, SIGINT);
    int res, status;
    for (int cnt = 10; 0 == (res = waitpid(childPid, &status, WNOHANG)) && 0 < cnt; --cnt)
        QThread::msleep(100);

    if (0 == res)
    {
        kill(childPid, SIGKILL);
        ret = 1;
    } else
    {
        ret = WIFEXITED(status) ? WEXITSTATUS(status) : 1;
    }
    childPid = -1;
}

static int parent(int childPid, int pwdFd, PasswordDialog & dlg)
{
    //set the FD as non-blocking
    if (0 != fcntl(pwdFd, F_SETFL, O_NONBLOCK))
    {
        QMessageBox(QMessageBox::Critical, dlg.windowTitle()
                , QObject::tr("Failed to set non-block: %1").arg(strerror(errno)), QMessageBox::Ok).exec();
        return 1;
    }

    FILE * pwd_f = fdopen(pwdFd, "r+");
    if (nullptr == pwd_f)
    {
        QMessageBox(QMessageBox::Critical, dlg.windowTitle()
                , QObject::tr("Failed to fdopen: %1").arg(strerror(errno)), QMessageBox::Ok).exec();
        return 1;
    }

    QTextStream child_str{pwd_f};

    int ret;
    QObject::connect(&dlg, &QDialog::finished, [&] (int result)
        {
            if (QDialog::Accepted == result)
            {
                child_str << dlg.password().append(nl);
                child_str.flush();
            } else
            {
                stopChild(childPid, pwdFd, ret);
                lxqtApp->quit();
            }
        });

    bool check_pwd = true;
    QString last_line;
    QScopedPointer<QSocketNotifier> pwd_watcher{new QSocketNotifier{pwdFd, QSocketNotifier::Read}};
    QObject::connect(pwd_watcher.data(), &QSocketNotifier::activated, [&]
        {
            QString line = child_str.readAll();
            if (line.isEmpty())
            {
                pwd_watcher.reset(nullptr);
                if (last_line.startsWith(QStringLiteral("%1:").arg(su_prog)))
                {
                    pwd_watcher.reset(nullptr); //stop the notifications events
                    stopChild(childPid, pwdFd, ret);
                    QMessageBox(QMessageBox::Critical, dlg.windowTitle()
                            , QObject::tr("Child '%1' process failed!\n%2").arg(su_prog).arg(last_line), QMessageBox::Ok).exec();
                }
                lxqtApp->quit();
            } else
            {
                if (check_pwd)
                {
                    //check only first output of child(su)
                    check_pwd = false;
                    if (!line.contains(nl) && line.endsWith(su_pwd_prompt_end))
                    {
                        //if now echo is turned off, su requests password struct termios tios;
                        struct termios tios;
                        Q_ASSERT(0 == tcgetattr(pwdFd, &tios));
                        if (!(ECHO & tios.c_lflag))
                        {
                            dlg.show();
                            return;
                        }
                    }
                }
                QTextStream{stderr, QIODevice::WriteOnly} << line;
                //assuming text oriented output
                QStringList lines = line.split(nl, QString::SkipEmptyParts);
                last_line = lines.isEmpty() ? QString() : lines.back();
            }

        });

    lxqtApp->exec();

    if (0 < childPid)
    {
        int res, status;
        res = waitpid(childPid, &status, 0);
        ret = (childPid == res && WIFEXITED(status)) ? WEXITSTATUS(status) : 1;
    }

    return ret;
}

int su(QStringList const & args, PasswordDialog & dlg)
{
    int pid, fd;
    if (1 != args.size())
        QMessageBox(QMessageBox::Critical, dlg.windowTitle()
                , QObject::tr("With %1 backend only one argument/command is supported!").arg(su_prog), QMessageBox::Ok).exec();
    else if (0 == (pid = forkpty(&fd, nullptr, nullptr, nullptr)))
        child(args[0], dlg); //never returns
    else if (-1 == pid)
        QMessageBox(QMessageBox::Critical, dlg.windowTitle()
                , QObject::tr("Failed to fork: %1").arg(strerror(errno)), QMessageBox::Ok).exec();
    else
        return parent(pid, fd, dlg);

    return 1;
}

