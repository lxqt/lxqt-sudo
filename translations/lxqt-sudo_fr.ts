<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr">
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
        <translation>Commande :</translation>
    </message>
    <message>
        <location filename="../../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Mot de passe :</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="43"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;nécessite les droits de l&apos;administrateur.
Entrez son mot de passe.</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="54"/>
        <source>Attempt #%1</source>
        <translation>Essai #%1</translation>
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
        <translation>Usage: %1 Option [Commande [Arguments...]]

Interface graphique pour %2/%3

Arguments:
  Option:
    -h|--help      Affiche cette aide.
    -v|--version   Affiche la version.
    -s|--su        Utilise %3(1) comme Backend.
    -d|--sudo      Utilise %2(8) comme Backend.
  ommande           Commande à exécuter.
  Arguments        Arguments de la commande à exécuterl.

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
        <location filename="../../sudo.cpp" line="135"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: aucune commande à exécuter n&apos;a été spécifiée !</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="142"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: aucun Backend n&apos;a été choisi !</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="147"/>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation>%1: Attention - plusieurs arguments pour le backend %2. %3 sera utilisé</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="162"/>
        <source>Failed to fork: %1</source>
        <translation>Impossible de créer un embranchement de processus (fork) de : %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="205"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Impossible d&apos;exécuter &apos;%2&apos; :
%3</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="234"/>
        <source>Failed to set non-block: %1</source>
        <translation>Echec de l&apos;option O_NONBLOCK l: %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="242"/>
        <source>Failed to fdopen: %1</source>
        <translation>Echec de l&apos;ouverture : %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="275"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Echec du processus fils &apos;%1&apos; !
%2</translation>
    </message>
</context>
</TS>
