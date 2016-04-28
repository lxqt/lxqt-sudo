<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../../passworddialog.ui" line="20"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>Befehl:</translation>
    </message>
    <message>
        <location filename="../../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Kennwort:</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="43"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; benötigt root-Rechte.
Bitte Kennwort eingeben.</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="54"/>
        <source>Attempt #%1</source>
        <translation>Versuch #%1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../../sudo.cpp" line="63"/>
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
        <translation>Verwendung: %1 Option [Befehl [Argumente...]]

Graphische Benutzeroberfläche für %2/%3

Argumente:
  Option:
    -h|--help      Gibt diese Hilfe aus.
    -v|--version   Ausgabe der Versionsinformation.
    -s|--su        Verwendet %3(1) als Backend.
    -d|--sudo      Verwendet %2(8) als Backend.
  Befehl           Auszuführender Befehl.
  Argumente        Argumente zum auszuführenden Befehl.

</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="80"/>
        <source>%1 version %2
</source>
        <translation>%1 Version %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../../sudo.cpp" line="128"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: kein auszuführender Befehl angegeben!</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="135"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: kein Backend gewählt!</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="140"/>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation>%1: Warnung - mehrere Argumente für Backend %2 erhalten. %3 wird verwendet</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="155"/>
        <source>Failed to fork: %1</source>
        <translation>Abspalten des Prozesses fehlgeschlagen: %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="193"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Ausführen von &apos;%2&apos; fehlgeschlagen:
%3</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="222"/>
        <source>Failed to set non-block: %1</source>
        <translation>Das Setzen von der Option O_NONBLOCK schlug fehl: %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="230"/>
        <source>Failed to fdopen: %1</source>
        <translation>Das Öffnen schlug fehl: %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="263"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Nachgeordneter Prozess &apos;%1&apos; ist fehlgeschlagen!
%2</translation>
    </message>
</context>
</TS>
