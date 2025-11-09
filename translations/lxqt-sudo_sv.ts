<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sv">
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
        <translation>Kopiera till urklipp</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiera</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Denna handling kräver administratörsrättigheter.&lt;br&gt;Vänligen ange ditt lösenord.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>LXQt sudo-backend</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>Ett program LXQt sudo anropar i bakgrunden för att upphöja privilegier.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Kommando:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Lösenord:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Ange lösenord</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Försök #%1</translation>
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
        <translation>Användning: %1 flaggor [kommando [argument...]]

Grafiskt användargränssnitt för %2/%3/%4

Argument:
  flaggor:
    -h|--help      Skriv ut denna hjälptext.
    -v|--version   Skriv ut programversion.
    -q|--quiet     Make %1 less verbose.
    -s|--su        Använd %3(1) som backend.
    -d|--sudo      Använd %2(8) som backend.
    -a|--doas      Använd %4(1) som backend.
  kommando          Kommando som ska köras.
  argument        Valfria argument till kommandot.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="97"/>
        <source>%1 version %2
</source>
        <translation>%1 version %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="211"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: Inga kommandon har angetts för körning!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="218"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: ingen backend har valts!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="235"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Syscall-fel: Misslyckades med förgrening: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="263"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>nollställ</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="329"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Registrerade försök till att lägga in privilegierat kommando via LC_ALL env(%2). Avslutar!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="371"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Syscall-fel: kunde inte häva blockering för pty. %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="379"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>SysCall-fel: kunde inte köra fdopen pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="348"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Det gick inte att köra &apos;%2&apos;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="413"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Underordnad process &apos;%1&apos; misslyckades!
%2</translation>
    </message>
</context>
</TS>
