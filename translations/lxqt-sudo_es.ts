<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="14"/>
        <source>LXQt sudo</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>Comando:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Contraseña:</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; necesita privilegios de administrador.
Introduzca su contraseña.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="41"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; necesita privilegios administrativos.&lt;br&gt;Introduzca su contraseña.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="52"/>
        <source>Attempt #%1</source>
        <translation>Intento número %1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="67"/>
        <source>Usage: %1 option [command [arguments...]]

GUI frontend for %2/%3

Arguments:
  option:
    -h|--help      Print this help.
    -v|--version   Print version information.
    -s|--su        Use %3(1) as backend.
    -d|--sudo      Use %2(8) as backend.
  command          Command to run.
  arguments        Optional arguments for command.

</source>
        <translation>Uso: %1 opción [comando [argumentos...]]

Interfaz gráfica para %2/%3

Argumentos:
  opción:
    -h|--help      Muestra esta ayuda.
    -v|--version   Muestra la información de versión.
    -s|--su        Use %3(1) como aplicación de fondo.
    -d|--sudo      Use %2(8) como aplicación de fondo.
  command          El comando a ejecutar.
  arguments        Argumentos opcionales para el comando.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 versión %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="170"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: ¡no se ha dado ningún comando!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="177"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: ¡no se ha elegido ninguna aplicación de fondo!</translation>
    </message>
    <message>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation type="vanished">%1: aviso - hay varios argumentos para la aplicación de fondo%2; se reducen a uno: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="197"/>
        <source>Failed to fork: %1</source>
        <translation>Fallo al bifurcar: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="240"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exitting!
</source>
        <translation>%1: Detectado un intento de inyectar un comando con privilegios vía LC_ALL env(%2). ¡Saliendo!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="259"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Ha fallado al ejecutar &apos;%2&apos;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="282"/>
        <source>Failed to set non-block: %1</source>
        <translation>Fallo al intentar no bloquear: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="290"/>
        <source>Failed to fdopen: %1</source>
        <translation>Fallo en fdopen: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="321"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>¡El proceso hijo &apos;%1&apos; ha fallado!
%2</translation>
    </message>
</context>
</TS>
