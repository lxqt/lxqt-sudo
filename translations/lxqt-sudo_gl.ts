<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="gl">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="14"/>
        <source>LXQt sudo</source>
        <translation>«sudo» doLXQt</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>Orde:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Contrasinal:</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="41"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; necesita privilexios administrativos.&lt;br&gt;Introduza o seu contrasinal.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="52"/>
        <source>Attempt #%1</source>
        <translation>Intento núm. %1</translation>
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
        <translation>Uso: %1 opción [orde [argumentos...]]

Interface gráfica para %2/%3

Argumentos:
  opción:
    -h|--help       Amosa esta axuda.
    -v|--version    Amosa a información da versión.
    -s|--su         Use %3(1) como infraestrutura.
    -d|--sudo       Use %2(8)  como infraestrutura.
  orde              Orde a executar.
  argumentos        Argumentos opcionais para a orde.

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
        <translation>%1: non forneceu ningunha orde!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="177"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: non se escolleu ningunha infraestrutura!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="197"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Produciuse un erro de «syscal», non se puido bifurcar: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="240"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Detectouse un intento para inxectar ordes privilexiadas a través de LC_ALL env(%2). Saíndo!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="282"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Produciuse un erro de «syscal», non se puido levar a pty a modo de non bloqueo: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="290"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Produciuse un erro de «syscall», non se puido aplicar fdopen a pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="259"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Produciuse un fallo ao executar «%2»: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="321"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Produciuse un fallo no proceso fillo «%1»!
%2</translation>
    </message>
</context>
</TS>
