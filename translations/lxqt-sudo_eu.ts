<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="eu">
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
        <translation>Kopiatu komandoa arbelean</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiatu</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Eskatutako ekintzak administratzaile-pribilegioak behar ditu.&lt;br&gt;Mesedez, idatzi zure pasahitza.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>LXQt sudo backend-a</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>LXQt-ek sudo-k atzeko planoan deitzen duen programa bat pribilegioak igotzeko</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Agindua:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Pasahitza:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Sartu pasahitza</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Saiakera #%1</translation>
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
        <translation>Erabilera: %1 aukera [komandoa [argumentuak...]]

%2/%3/%4(r)ako interfaze grafikoa

Argumentuak:
  aukera:
    -h|--help      Inprimatu laguntza hau.
    -v|--version   Inprimatu bertsioari buruzko informazioa.
    -q|--quiet     Egin %1 gutxiago berritsua.
    -s|--su        Erabili %3(1) back-end gisa.
    -d|--sudo      Erabili %2(8) back-end gisa.
    -a|--doas      Erabili %4(1) back-end gisa.
  komandoa          Exekutatu beharreko komandoa.
  argumentuak       Komandorako aukerako argumentuak.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="97"/>
        <source>%1 version %2
</source>
        <translation>%1 bertsioa %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="211"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: ez da exekutatzeko komandorik eman!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="218"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: ez da back-endik aukeratu!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="235"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Sistemako deiaren errorea, fork egiteak huts egin du: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="263"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>unset</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="329"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: pribilegio handiko komando bat LC_ALL ingurune-aldagaiaren bidez txertatzeko saiakera hauteman da (%2). Amaitzen!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="371"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Sistemako deiaren errorea, pty modu ez-blokeatzailean jartzeak huts egin du: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="379"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Sistemako deiaren errorea, pty-rako fdopen egiteak huts egin du: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="348"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: ezin izan da &apos;%2&apos; exekutatu: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="413"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>&apos;%1&apos; prozesu umeak huts egin du!
%2</translation>
    </message>
</context>
</TS>
