<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ast">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>Copiar el comandu al cartafueyu</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>L&apos;aición solicitada precisa privilexos alministrativos.&lt;br&gt;Introduz la contraseña, por favor.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>Backend de LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate priveledges.</source>
        <translation>Un programa que LXQt sudo llama en segundu planu pa ganar privilexos.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Comandu:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Contraseña:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Introduz</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Intentu #%1</translation>
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
        <translation>Usu: %1 opción  [comandu [argumentos...]]

Frontal GUI pa %2/%3

Argumentos:
  optción:
    -h|--help      Amuesa esta ayuda.
    -v|--version   Amuesa la información de la versión.
    -s|--su        Usa %3(1) como backend.
    -d|--sudo      Usa %2(8) como backend.
  comandu          Comandu a executar.
  argumentos        Argumentos opcionales del comandu.

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
        <location filename="../sudo.cpp" line="183"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: ¡nun s&apos;apurrió dengún comandu a executar!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="190"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: ¡nun s&apos;escoyó dengún backend!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="207"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Fallu de llamada al sistema, fallu al biforcar: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="234"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>nun s&apos;afitó</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="270"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Deteutóse un intentu d&apos;inyectar un comandu con privilexos pela variable d&apos;entornu(%2) LC_ALL. ¡Colando!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="314"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Fallu de llamada al sistema, fallu al poner la pty nel mou non-block: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="322"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Fallu de llamada al sistema, fallu al facer fdopen a la pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="291"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Fallu al facer exec a «%2»: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="353"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>¡El procesu fíu «%1» falló!
%2</translation>
    </message>
</context>
</TS>
