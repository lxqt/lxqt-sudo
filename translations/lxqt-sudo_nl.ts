<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>LXQt-sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>Opdracht kopiëren naar klembord</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Deze actie vereist beheerdersrechten.&lt;br&gt;Voer uw wachtwoord in.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>LXQt-sudo-backend</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>Het programma dat LXQt-sudo op de achtergrond aanroept om meer rechten te verlenen.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Opdracht:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Wachtwoord:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Voer uw wachtwoord in</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Poging #%1</translation>
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
    -s|--su        Use %3(1) as backend.
    -d|--sudo      Use %2(8) as backend.
    -a|--doas      Use %4(1) as backend.
  command          Command to run.
  arguments        Optional arguments for command.

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="96"/>
        <source>%1 version %2
</source>
        <translation>%1 versie %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="205"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: geen uit te voeren opdracht opgegeven!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="212"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: geen achtergronddienst gekozen!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="229"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Syscall-fout; kan niet worden geprepareerd: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="257"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>niet ingesteld</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="323"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Gedetecteerde poging om bevoorrechte opdracht te injecteren via LC_ALL env(%2). Afsluiten!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="365"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Syscall-fout, mislukt om pty naar niet-blokkeermodus aan te passen: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="373"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Syscall-fout, niet in geslaagd om pty te fdopen: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="342"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Kon &apos;%2&apos; niet uitvoeren: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="407"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Afgeleid proces &apos;%1&apos; is mislukt.
%2</translation>
    </message>
</context>
</TS>
