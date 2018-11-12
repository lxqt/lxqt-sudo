<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="14"/>
        <source>LXQt sudo</source>
        <translation>sudo di LXQt</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>Comando:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Password:</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; richiede privilegi di amministratore.
Digita la tua password.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="41"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; richiede privilegi di amministratore.&lt;br&gt;Inserire il password per favore.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="52"/>
        <source>Attempt #%1</source>
        <translation>Tentativo #%1</translation>
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
        <translation>Uso: %1 opzione [comando [argomenti...]]

Frontend grafico per  %2/%3

Argomenti:
··opzioni:
··· -h|--help     Mostra questo aiuto.
····-v|--version   Mostra versione.
····-s|--su        Usa %3(1) come backend.
····-d|--sudo      Usa %2(8) come backend.
··command          Comando da eseguire.
··arguments        Argomenti opzionali per il comando.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 versione %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="170"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: non è stato fornito alcun comando da eseguire!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="177"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: selezionato nessun backend!</translation>
    </message>
    <message>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation type="vanished">%1: avviso - argomenti multipli per il backend %2, riunendo in uno: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="197"/>
        <source>Failed to fork: %1</source>
        <translation>Fork fallito: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="240"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exitting!
</source>
        <translation>%1: Rilevato tentativo di inserimento di un commando con privilegi tramite LC_ALL env(%2). Esco!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="259"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Esecuzione di &apos;%2&apos; fallita: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="282"/>
        <source>Failed to set non-block: %1</source>
        <translation>Settaggio non-block fallito: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="290"/>
        <source>Failed to fdopen: %1</source>
        <translation>Fallito fdopen: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="321"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Processo figlio %1 non riuscito!
%2</translation>
    </message>
</context>
</TS>
