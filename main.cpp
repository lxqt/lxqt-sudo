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
#include <QTextStream>
#include <QMessageBox>
#include <QFileInfo>

extern const QString app_master;
const QString app_master{QStringLiteral(LXQTSUDO)};
static const QString app_version{QStringLiteral(LXQT_VERSION)};
static const QString app_lxsu{QStringLiteral(LXQTSUDO_LXSU)};
static const QString app_lxsudo{QStringLiteral(LXQTSUDO_LXSUDO)};

extern const QString sudo_prog;
extern int sudo(QStringList const & args, PasswordDialog & dlg);

extern const QString su_prog;
extern int su(QStringList const & args, PasswordDialog & dlg);

static void usage(QString const & err = QString())
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

static void version()
{
    QTextStream(stdout)
        << QObject::tr("%1 version %2\n").arg(app_master).arg(app_version);
}

enum backend_t
{
    BACK_NONE
        , BACK_SUDO
        , BACK_SU
};

int main(int argc, char **argv)
{
    LXQt::Application app(argc, argv, true);
    app.setQuitOnLastWindowClosed(false);

    QStringList args = app.arguments();
    QString cmd = QFileInfo(args[0]).fileName();
    args.removeAt(0);
    backend_t backend = (app_lxsu == cmd ? BACK_SU : (app_lxsudo == cmd ? BACK_SUDO : BACK_NONE));
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
        } else if ("-s" == arg1 || "--su" == arg1)
        {
            backend = BACK_SU;
            args.removeAt(0);
        } else if ("-d" == arg1 || "--sudo" == arg1)
        {
            backend = BACK_SUDO;
            args.removeAt(0);
        }
        //any other arguments we simply forward to sudo
    }

    PasswordDialog dlg(args);
    dlg.setModal(true);
    lxqtApp->setActiveWindow(&dlg);

    switch (backend)
    {
        case BACK_NONE:
            usage(QObject::tr("%1: no backend choosen!").arg(app_master));
            return 1;
        case BACK_SUDO:
            return sudo(args, dlg);
        case BACK_SU:
            return su(args, dlg);
    }
}
