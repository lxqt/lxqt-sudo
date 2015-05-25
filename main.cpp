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
#include "communication.h"
#include <QFileInfo>
#include <QDir>
#include <QProcess>
#include <QTimer>
#include <QMessageBox>
#include <iostream>
#include <signal.h>
#include <sstream>
#include <QDebug>

const QString app_master{QStringLiteral(LXQTSUDO)};
const QString install_dir{QStringLiteral(LXQTSUDO_INSTALL_DIR)};
const QString app_slave{QStringLiteral(LXQTSUDO_HELPER)};
#define ENV_SUDO_ASKPASS "SUDO_ASKPASS"
#define ENV_PID "LXQTSUDO_PID"

void termSignalHandler(int signal)
{
    if (QApplication::instance())
        QApplication::instance()->quit();
}

int master(int argc, char **argv)
{
    //master
    LxQt::Application app(argc, argv);
    app.setQuitOnLastWindowClosed(false);
    QString pid = QStringLiteral("%1").arg(app.applicationPid());
    Communication comm(QStringLiteral("%1/%2").arg(app_master).arg(pid), true/*master*/);
    if (!comm.valid())
        return 1;

    //set environment for child
    QProcessEnvironment env = QProcessEnvironment::systemEnvironment();
    env.insert(ENV_PID, pid);
    QFileInfo fi(argv[0]);
    if (nullptr != strchr(argv[0], '/'))
        fi.setFile(fi.dir(), app_slave);
    else
        fi.setFile(QDir(install_dir), app_slave);
    env.insert(ENV_SUDO_ASKPASS, fi.filePath());

    QStringList args = app.arguments();
    //XXX: check?!? if there is something to run args.size() > 1
    args.removeAt(0);
    PasswordDialog dlg(args);
    dlg.setModal(true);
    dlg.setWindowIcon(QIcon::fromTheme("security-high"));
    app.setActiveWindow(&dlg);

    QScopedPointer<QProcess> sudo{new QProcess};
    QObject::connect(&comm, &Communication::passwordNeeded, [&dlg, &comm, &sudo]
        {
            dlg.show();
        });
    QObject::connect(&dlg, &QDialog::finished, [&comm, &sudo, &dlg] (int result)
        {
            if (QDialog::Accepted == result)
            {
                comm.setPassword(dlg.password());
                comm.waitForReady();
            } else
            {
                sudo->terminate();
                if (!sudo->waitForFinished(1000))
                    sudo->kill();
            }
        });
    comm.waitForReady();

    //start background process -> sudo
    sudo->setProcessEnvironment(env);
    sudo->setInputChannelMode(QProcess::ForwardedInputChannel);
    sudo->setProcessChannelMode(QProcess::ForwardedOutputChannel);
    sudo->setReadChannel(QProcess::StandardError);

    QString last_line;
    int ret;
    QObject::connect(sudo.data(), static_cast<void (QProcess::*)(int, QProcess::ExitStatus)>(&QProcess::finished)
            , [&app, &ret, &last_line, &dlg] (int exitCode, QProcess::ExitStatus exitStatus)
        {
            ret = QProcess::NormalExit == exitStatus ? exitCode : 255;
            if (0 != ret && last_line.startsWith(QStringLiteral("sudo:")))
            {
                QMessageBox b(QMessageBox::Critical, dlg.windowTitle()
                        , QObject::tr("Child 'sudo' process failed!\n%1").arg(last_line), QMessageBox::Ok);
                b.exec();
            }
            app.quit();
        });

    QObject::connect(sudo.data(), &QProcess::readyReadStandardError, [&sudo, &last_line]
        {
            QByteArray err = sudo->readAllStandardError();
            std::cerr << err.constData();
            std::cerr.flush();
            int nl_pos = err.lastIndexOf('\n');
            if (-1 == nl_pos)
                last_line += err;
            else
            {
                if (err.endsWith('\n'))
                    err.remove(err.size() - 1, 1);
                nl_pos = err.lastIndexOf('\n');
                if (-1 != nl_pos)
                    err.remove(0, nl_pos + 1);
                last_line = err;
            }
        });

    sudo->start(QStringLiteral(LXQTSUDO_SUDO), QStringList() << QStringLiteral("-A")
            << args);
    app.exec();

    sudo->waitForFinished(-1);
    return ret;
}

int slave(int argc, char **argv)
{
    //slave
    QApplication app(argc, argv);
    QByteArray pid = qgetenv(ENV_PID);
    Q_ASSERT(!pid.isEmpty());
    Communication comm(QStringLiteral("%1/%2").arg(app_master).arg(pid.constData()), false/*slave*/);
    if (!comm.valid())
        return 1;

    QObject::connect(&comm, &Communication::passwordReady, [&app] (QString passwd)
        {
            std::cout << passwd.toUtf8().constData() << std::endl;
            app.quit();
        });
    comm.needPassword();
    comm.waitForReady();
    //check also if master is alive
    //Note: in case dialog is 'cancel'-ed sudo (for unknown reason)
    // doesn't stop(kill) our ASKPASS helper
    std::istringstream is(pid.constData());
    pid_t master_pid;
    is >> master_pid;
    QTimer t;
    t.setInterval(250);
    QObject::connect(&t, &QTimer::timeout, [&app, &t, &master_pid]
        {
            if (0 != kill(master_pid, 0))
                app.quit();
            else
                t.start();
        });
    t.start();
    return app.exec();
}

int main(int argc, char **argv)
{
    // Quit gracefully
    ::signal(SIGALRM, termSignalHandler);
    ::signal(SIGTERM, termSignalHandler);
    ::signal(SIGINT, termSignalHandler);
    ::signal(SIGQUIT, termSignalHandler);
    ::signal(SIGHUP, termSignalHandler);
    ::signal(SIGSTOP, termSignalHandler);
    ::signal(SIGTSTP, termSignalHandler);

    QFileInfo fi(argv[0]); //first argument (executable) is there always
    if (app_master == fi.fileName())
        return master(argc, argv);
    else
        return slave(argc, argv);
}
