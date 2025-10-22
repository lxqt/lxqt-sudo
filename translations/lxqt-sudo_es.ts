<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>Copiar el comando al portapapeles</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>La acción solicitada necesita privilegios de administrador.&lt;br&gt;Introduzca la contraseña.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>Comando de LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>Programa que invoca LXQt sudo en segundo plano para adquirir privilegios.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Comando:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Contraseña:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Introduzca la contraseña</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Intento número %1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="78"/>
        <source>Usage: %1 option [command [arguments...]]

GUI frontend for %2/%3/%4

Arguments:
  option:
    -h|--help      Print this help.
    -v|--version   Print version information.
    -q|--quiet     Make %1 less verbose.
    -s|--su        Use %3(1) as backend.
    -d|--sudo      Use %2(8) as backend.
    -a|--doas      Use %4(1) as backend.
  command          Command to run.
  arguments        Optional arguments for command.

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="97"/>
        <source>%1 version %2
</source>
        <translation>%1 versión %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="211"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: ¡no se ha dado ningún comando!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="218"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: ¡no se ha elegido ninguna aplicación de fondo!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="235"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Error de llamada al sistema, no se ha podido crear el subproceso: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="263"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>indefinido</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="329"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Se ha detectado un intento de inyectar un comando con privilegios mediante LC_ALL env(%2). ¡Saliendo!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="371"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Error de llamada al sistema, no se ha podido poner pty en modo desbloqueado: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="379"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Error de llamada al sistema, no se ha podido hacer fdopen de pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="348"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Error al ejecutar &apos;%2&apos;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="413"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>¡El proceso hijo &apos;%1&apos; ha fallado!
%2</translation>
    </message>
</context>
</TS>
