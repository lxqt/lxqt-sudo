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

#include "passworddialog.h"
#include "ui_passworddialog.h"
#include <QProcess>
#include <QMessageBox>
#include "communication.h"
#include <QDebug>

PasswordDialog::PasswordDialog(QStringList argv
        , Communication & comm
        , QProcess & sudo
        , QWidget * parent/* = 0*/
        , Qt::WindowFlags f/* = 0*/)
    : QDialog(parent, f)
    , ui(new Ui::PasswordDialog)
    , mComm(comm)
    , mSudo(sudo)
{
    ui->setupUi(this);

    ui->commandL->setText(argv.replaceInStrings(QRegExp(QStringLiteral("^(.*)$")), "'\\1'").join(QStringLiteral(" ")));
    QString cmd;
    if (0 < argv.size())
        cmd = argv[0];
    ui->descriptionL->setText(tr("<b>%1</b> needs administrative privileges. Please enter your password.").arg(cmd));


    connect(&mSudo, static_cast<void (QProcess::*)(int, QProcess::ExitStatus)>(&QProcess::finished), [this] (int exitCode, QProcess::ExitStatus exitStatus)
        {
            if (!isVisible())
                return;

            if (QProcess::NormalExit == exitStatus && 0 == exitCode)
                QDialog::accept(); //sudo succeeded (with or w/o password)
            else
            {
                QMessageBox b(QMessageBox::Critical, windowTitle()
                        , tr("Child 'sudo' process failed!\n%1").arg(mSudo.readAllStandardError().constData()), QMessageBox::Ok);
                b.exec();
                reject();
            }
        });
    mSudo.start();

    connect(&mComm, &Communication::passwordNeeded, [this]
        {
            ui->passwordLE->setEnabled(true);
        });
    mComm.waitForReady();
}

PasswordDialog::~PasswordDialog()
{
}

void PasswordDialog::accept()
{
    if (ui->passwordLE->isEnabled())
    {
        mComm.setPassword(ui->passwordLE->text());
        ui->passwordLE->setEnabled(false);
        mComm.waitForReady();
    } else
        reject();
}

void PasswordDialog::hideEvent(QHideEvent * event)
{
    if (QProcess::Running == mSudo.state())
    {
        mSudo.terminate();
        mSudo.waitForFinished(1000);
        mSudo.kill();
    }
    return QDialog::hideEvent(event);
}
