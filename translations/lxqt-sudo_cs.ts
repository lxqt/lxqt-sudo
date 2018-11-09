<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="cs">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="14"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>Příkaz:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Heslo:</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; vyžaduje oprávnění na úrovni správce.
Zadejte své heslo.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="41"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; potřebuje oprávnění správce.&lt;br&gt;Zadejte své heslo.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="52"/>
        <source>Attempt #%1</source>
        <translation>Pokus číslo %1</translation>
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
        <translation>Použití: %1 volba [příkaz [argumenty…]]

Grafická nadstavba pro %2/%3

Argumenty:
  volba:
    -h|--help      Zobrazí tuto nápovědu.
    -v|--version   Zobrazí informace o verzi.
    -s|--su        Použít %3(1) jako podpůrnou vrstvu.
    -d|--sudo      Použít %2(8) jako podpůrnou vrstvu.
  command          Příkaz ke spuštění.
  arguments        Volitelné argumenty pro příkaz.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 verze %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="170"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: nezadán žádný příkaz ke spuštění!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="177"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: nevybrána žádná podpůrná vrstva!</translation>
    </message>
    <message>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation type="vanished">%1: varování – obdrženo vícero argumentů pro podpůrnou vrstvu %2, použije se pouze: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="197"/>
        <source>Failed to fork: %1</source>
        <translation>Nepodařilo se vytvořit rozvětvení procesu: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="240"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exitting!
</source>
        <translation>%1: Zjištěn pokus o vpravení privilegovaného příkazu prostřednictvím LC_ALL env(%2). Ukončuje se!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="259"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Nepodařilo se spustit „%2“: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="282"/>
        <source>Failed to set non-block: %1</source>
        <translation>Nepodařilo se nastavit volbu O_NONBLOCK: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="290"/>
        <source>Failed to fdopen: %1</source>
        <translation>Nepodařilo se otevřít popisovač souboru: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="321"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Nezdar v podřízeném procesu „%1“!
%2</translation>
    </message>
</context>
</TS>
