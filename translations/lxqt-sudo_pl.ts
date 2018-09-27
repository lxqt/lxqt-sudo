<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pl">
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
        <translation>Komenda:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Hasło:</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; potrzebuje uprawnień administratora.
Proszę wprowadź hasło.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="41"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; wymaga uprawnień administratora.&lt;br&gt;Wprowadź swoje hasło.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="52"/>
        <source>Attempt #%1</source>
        <translation>Próba #%1</translation>
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
        <translation>Użycie: %1 opcja [komenda [argumenty…]]

Graficzny front-end dla %2/%3

Argumenty:
  opcja:
    -h|--help      Wyświetla tą informację.
    -v|--version   Wyświetla informacje o wersji.
    -s|--su        Używa %3(1) jako back-end.
    -d|--sudo      Używa %2(8) jako back-end.
  command          Polecenie do uruchomienia.
  arguments        Dodatkowe argumenty dla polecenia.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 w wersji %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="170"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: nie podano komendy do uruchomienia!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="177"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: nie wybrano backendu!</translation>
    </message>
    <message>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation type="vanished">%1: ostrzeżenie – wiele argumentów dla backendu %2, połączono w jeden: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="197"/>
        <source>Failed to fork: %1</source>
        <translation>Nie udało się rozwidlić: %1</translation>
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
        <translation>%1: Nie udało się wykonać  &apos;%2&apos;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="282"/>
        <source>Failed to set non-block: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="290"/>
        <source>Failed to fdopen: %1</source>
        <translation>Nie udało się wykonać fdopen: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="321"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Wykonanie procesu potomnego &apos;%1&apos; nie powiodło się!
%2</translation>
    </message>
</context>
</TS>
