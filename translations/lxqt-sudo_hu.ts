<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="hu">
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
        <translation>Parancs:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Jelszó:</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="41"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="52"/>
        <source>Attempt #%1</source>
        <translatorcomment>Próba #%1</translatorcomment>
        <translation></translation>
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
        <translation>Használat: %1 opció [parancs [paraméterek...]]

A %2/%3 grafikus felhasználói felülete

paraméterek:
  Opciók:
    -h|--help      Ez a segítő szöveg.
    -v|--version   Verziószám.
    -s|--su        %3(1) a végrehajtó.
    -d|--sudo      %2(8) a végrehajtó.
  parancs           A végrehajtandó parancs.
  paraméterek        Választható paraméterek.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 verzió %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="170"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: nincs végrehajtandó parancs!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="177"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: nincs végrehajtó választva!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="197"/>
        <source>Failed to fork: %1</source>
        <translation>A  %1 elindítása nem sikerült</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="240"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exitting!
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="259"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: A  %2:%3 végrehajtása sikertelen
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="282"/>
        <source>Failed to set non-block: %1</source>
        <translation>A %1 beállítása nem blokként sikertelen</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="290"/>
        <source>Failed to fdopen: %1</source>
        <translation>A %1 megnyitása sikertelen</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="321"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>A &apos;%1&apos; alfolyamat végrehajtása nem sikerült!
%2</translation>
    </message>
</context>
</TS>
