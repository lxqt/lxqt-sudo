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
#include <QFileInfo>
#include <QDir>
#include <QProcess>
#include <QTimer>
#include <QMessageBox>
#include <QSocketNotifier>
#include <sstream>
#include <QDebug>

const QString app_master{QStringLiteral(LXQTSUDO)};
const QString app_version{QStringLiteral(LXQT_VERSION)};
const QString install_dir{QStringLiteral(LXQTSUDO_INSTALL_DIR)};
const QString sudo_prog{QStringLiteral(LXQTSUDO_SUDO)};
const QString sudo_pwd_prompt{QStringLiteral("Password:\n")};

void usage(QString const & err = QString())
{
    if (!err.isEmpty())
        QTextStream(stderr) << err << '\n';
    QTextStream(stdout)
        << QObject::tr("Usage: %1 command [arguments...]\n\n"
                "GUI frontend for %2\n\n"
                "Arguments:\n"
                "  command        Command to run.\n"
                "  arguments      Optional arguments for command.\n\n").arg(app_master).arg(sudo_prog);
    if (!err.isEmpty())
        QMessageBox(QMessageBox::Critical, app_master, err, QMessageBox::Ok).exec();
}

void version()
{
    QTextStream(stdout)
        << QObject::tr("%1 version %2\n").arg(app_master).arg(app_version);
}

int master(int argc, char **argv)
{
    //master
    LxQt::Application app(argc, argv, true);
    app.setQuitOnLastWindowClosed(false);

    if (1 >= argc)
    {
        usage(QObject::tr("%1: no command to run provided!").arg(app_master));
        return 1;
    } else
    {
        //simple help check
        std::string arg1(argv[1]);
        if ("-h" == arg1 || "--help" == arg1)
        {
            usage();
            return 0;
        } else if ("-v" == arg1 || "--version" == arg1)
        {
            version();
            return 0;
        }
        //any other arguments we simply forward to sudo
    }

    QStringList args = app.arguments();
    //check for provided command is done before
    args.removeAt(0);
    PasswordDialog dlg(args);
    dlg.setModal(true);
    app.setActiveWindow(&dlg);

    QScopedPointer<QProcess> sudo{new QProcess};
    QObject::connect(&dlg, &QDialog::finished, [&sudo, &dlg] (int result)
        {
            if (QDialog::Accepted == result)
            {
                sudo->write(QByteArray{}.append(dlg.password().append('\n')));
            } else
            {
                sudo->terminate();
                if (!sudo->waitForFinished(1000))
                    sudo->kill();
            }
        });

    //start background process -> sudo
    sudo->setProcessChannelMode(QProcess::ForwardedOutputChannel);
    sudo->setReadChannel(QProcess::StandardError);

    QString last_line;
    int ret;
    QObject::connect(sudo.data(), static_cast<void (QProcess::*)(int, QProcess::ExitStatus)>(&QProcess::finished)
            , [&app, &ret, &last_line, &dlg] (int exitCode, QProcess::ExitStatus exitStatus)
        {
            ret = QProcess::NormalExit == exitStatus ? exitCode : 255;
            if (0 != ret && last_line.startsWith(QStringLiteral("%1:").arg(sudo_prog)))
                QMessageBox(QMessageBox::Critical, dlg.windowTitle()
                        , QObject::tr("Child '%1' process failed!\n%2").arg(sudo_prog).arg(last_line), QMessageBox::Ok).exec();
            app.quit();
        });

    QObject::connect(sudo.data(), &QProcess::readyReadStandardError, [&sudo, &dlg, &last_line]
        {
            QByteArray err = sudo->readAllStandardError();
            if (sudo_pwd_prompt == err.constData())
            {
                dlg.show();
                return;
            }

            QTextStream{stderr, QIODevice::WriteOnly} << err;
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

    //forward all stdin to child
    QTextStream std_in{stdin, QIODevice::ReadOnly};
    QSocketNotifier stdin_watcher{0/*stdin*/, QSocketNotifier::Read};
    QObject::connect(&stdin_watcher, &QSocketNotifier::activated, [&std_in, &sudo]
        {
            QString line{std_in.readLine()};
            if (!std_in.atEnd())
                line += QLatin1Char('\n');
            sudo->write(line.toStdString().c_str());
            if (std_in.atEnd())
                sudo->closeWriteChannel();
        });

    sudo->start(sudo_prog, QStringList() << QStringLiteral("-S")
            << QStringLiteral("-p") << sudo_pwd_prompt
            << args);
    app.exec();

    sudo->waitForFinished(-1);
    return ret;
}

int main(int argc, char **argv)
{
    return master(argc, argv);
}
