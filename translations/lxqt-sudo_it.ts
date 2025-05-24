<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it">
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
        <translation>Copia comando negli appunti</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Copia</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Le azioni richieste richiedono i privilegi di amministratore.&lt;br&gt; Per favore inserisci la tua password.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>Backend sudo LXQt</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>Chiamata in background da un programma a LXQt sudo per elevare i privilegi.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Comando:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Password:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Inserisci la password</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Tentativo #%1</translation>
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
        <translation>Utilizzo: %1 opzione [comando [argomenti...]]

Interfaccia GUI per %2/%3/%4

Argomenti:
opzione:
-h|--help         Stampa questa guida.
-v|--version   Stampa le informazioni sulla versione.
-s|--su              Utilizza %3(1) come backend.
-d|--sudo        Utilizza %2(8) come backend.
-a|--doas         Utilizza %4(1) come backend.
comando      Comando da eseguire.
argomenti     Argomenti facoltativi per il comando.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="96"/>
        <source>%1 version %2
</source>
        <translation>%1 versione %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="205"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: non è stato fornito alcun comando da eseguire!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="212"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: selezionato nessun backend!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="229"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Errore Syscall, fork fallito: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="257"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>non settato</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="323"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Rilevato tentativo di immissione comando privilegiato via LC_ALL env(%2). Uscita!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="365"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Errore syscall, fallimento nel portare pty alla modalità non-block: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="373"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Errore syscall, errore durante fdopen pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="342"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Esecuzione di &apos;%2&apos; fallita: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="407"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Processo figlio %1 non riuscito!
%2</translation>
    </message>
</context>
</TS>
