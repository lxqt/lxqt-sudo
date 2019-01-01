<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="lt">
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
        <translation>Komanda:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Slaptažodis:</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="41"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; reikalauja administratoriaus teisių.&lt;br&gt;Prašome įrašyti savo slaptažodį.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="52"/>
        <source>Attempt #%1</source>
        <translation>Bandymas #%1</translation>
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
        <translation>Naudojimas: %1 parametras [komanda [argumentai...]]

Grafinė naudotojo sąsaja, skirta %2/%3

Argumentai:
  parametras:
    -h|--help      Išvesti šią pagalbą.
    -v|--version   Išvesti versijos informacija.
    -s|--su        Naudoti %3(1) kaip vidinę pusę.
    -d|--sudo      Naudoti %2(8) kaip vidinę pusę.
  command          Komanda, kurią vykdyti.
  arguments        Pasirinktini argumentai komandai.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 versija %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="170"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: nepateikta komanda, kurią vykdyti!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="177"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: nepasirinkta vidinė pusė!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="197"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Syscall klaida, nepavyko atšakoti: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="240"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Aptiktas bandymas įskiepyti privilegijuotą komandą per LC_ALL env(%2). Išeinama!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="282"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Syscall klaida, nepavyko pristatyti pty į neblokavimo veikseną: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="290"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Syscall klaida, nepavyko atlikti fdopen pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="259"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Nepavyko įvykdyti &quot;%2&quot;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="321"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Vyksnis &quot;%1&quot; nepavyko!
%2</translation>
    </message>
</context>
</TS>
