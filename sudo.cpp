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
#include <QProcess>
#include <QMessageBox>
#include <QSocketNotifier>
#include <QDebug>

extern const QString sudo_prog;
const QString sudo_prog{QStringLiteral(LXQTSUDO_SUDO)};
const QString sudo_pwd_prompt{QStringLiteral("Password:\n")};

int sudo(QStringList const & args, PasswordDialog & dlg)
{
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
            , [&ret, &last_line, &dlg] (int exitCode, QProcess::ExitStatus exitStatus)
        {
            ret = QProcess::NormalExit == exitStatus ? exitCode : 255;
            if (0 != ret && last_line.startsWith(QStringLiteral("%1:").arg(sudo_prog)))
                QMessageBox(QMessageBox::Critical, dlg.windowTitle()
                        , QObject::tr("Child '%1' process failed!\n%2").arg(sudo_prog).arg(last_line), QMessageBox::Ok).exec();
            lxqtApp->quit();
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
    lxqtApp->exec();

    sudo->waitForFinished(-1);
    return ret;
}

