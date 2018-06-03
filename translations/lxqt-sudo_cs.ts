<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="cs">
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
        <translation>Příkaz:</translation>
    </message>
    <message>
        <location filename="../../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Heslo:</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="43"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; vyžaduje oprávnění správce (superuživatele).
Zadejte, prosím, své heslo.</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="54"/>
        <source>Attempt #%1</source>
        <translation>Pokus #%1</translation>
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
        <translation>Použití: %1 volba [příkaz [argumenty...]]

Uživatelské rozhraní pro %2/%3

Argumenty:
  volba:
    -h|--help      Zobrazí tuto nápovědu.
    -v|--version   Zobrazí informace o verzi.
    -s|--su        Použít %3(1) jako podpůrnou vrstvu.
    -d|--sudo      Použít %2(8) podpůrnou vrstvu.
  command          Příkaz ke spuštění.
  arguments        Volitelné argumenty pro příkaz.

</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="80"/>
        <source>%1 version %2
</source>
        <translation>%1 Verze %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../../sudo.cpp" line="135"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: nezadán žádný spustitelný příkaz!</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="142"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: nevybrána žádná podpůrná vrstva!</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="147"/>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation>%1: varování - obdrženo několik argumentů pro podpůrnou vrstvu %2, použije se: %3</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="162"/>
        <source>Failed to fork: %1</source>
        <translation>Nepodařilo se odnožit proces:%1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="205"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Nepodařilo se spustit &apos;%2&apos;:
%3</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="234"/>
        <source>Failed to set non-block: %1</source>
        <translation>Nepodařilo se nastavit volbu O_NONBLOCK: %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="242"/>
        <source>Failed to fdopen: %1</source>
        <translation>Nepodařilo se otevřít: %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="275"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Selhal podřízený proces &apos;%1!
%2</translation>
    </message>
</context>
</TS>
