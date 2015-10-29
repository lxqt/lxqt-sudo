<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sk">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="20"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>Príkaz:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Heslo:</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="43"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; vyžaduje práva administrátora.
Prosím, zadajte svoje heslo.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="54"/>
        <source>Attempt #%1</source>
        <translation>Pokus č. %1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="63"/>
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
        <translation>Použitie: %1 option [command [arguments...]]

GUI frontend pre %2/%3

Parametre:
  option:
    -h|--help      Zobraziť pomoc.
    -v|--version   Zobraziť verziu.
    -s|--su        Použiť %3(1) ako backend.
    -d|--sudo      Použíť %2(8) ako backend.
  command        Príkaz na spustenie.
  arguments      Parametre príkazu.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="80"/>
        <source>%1 version %2
</source>
        <translation>%1 verzia %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="128"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: žiaden príkaz na spustenie!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="135"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: nevybratý backend!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="140"/>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation>%1: upozornenie - zadaných viacero parametrov pre %2 backend, zlúčené do jedného: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="155"/>
        <source>Failed to fork: %1</source>
        <translation>Zlyhal fork: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="193"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Zlyhal exec &apos;%2&apos;: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="222"/>
        <source>Failed to set non-block: %1</source>
        <translation>Zlyhalo nastavenie non-block: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="230"/>
        <source>Failed to fdopen: %1</source>
        <translation>Zlyhal fdopen: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="263"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Dcérsky &apos;%1&apos; process zlyhal!
%2</translation>
    </message>
</context>
</TS>
