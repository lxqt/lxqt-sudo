/* BEGIN_COMMON_COPYRIGHT_HEADER
 * (c)LGPL2+
 *
 * LXQt - a lightweight, Qt based, desktop toolset
 * https://lxqt.org
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
#include <QIcon>

PasswordDialog::PasswordDialog(QStringList argv
        , QWidget * parent/* = 0*/
        , Qt::WindowFlags f/* = 0*/)
    : QDialog(parent, f)
    , ui(new Ui::PasswordDialog)
{
    ui->setupUi(this);

    ui->commandL->setText(argv.join(QStringLiteral(" ")));
    QString cmd;
    if (0 < argv.size())
        cmd = argv[0];
    ui->descriptionL->setText(tr("<b>%1</b> needs administrative privileges.\nPlease enter your password.").arg(cmd));
    ui->iconL->setPixmap(QIcon::fromTheme("dialog-password").pixmap(64, 64));
    setWindowIcon(QIcon::fromTheme("security-high"));
}

PasswordDialog::~PasswordDialog()
{
}

void PasswordDialog::showEvent(QShowEvent * event)
{
    ui->errorL->setText(tr("Attempt #%1").arg(++mAttempt));
    return QDialog::showEvent(event);
}

QString PasswordDialog::password() const
{
    return ui->passwordLE->text();
}

