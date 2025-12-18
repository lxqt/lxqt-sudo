<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="lg">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo (funa buyinza bwa muteesiteesi)</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>Ekiragiro kikwate</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Koppa</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Ekikolwa ky&apos;oyagala kyetaagisa buyinza bwa muteesiteesi. &lt;br&gt;Wandika akasumuluzo ko.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>Puloguramu LXQt gy&apos;ekozesa</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>Puloguramu LXQt sudo gy&apos;ekozesa okukufunira obuyinza obutali bwa bulijjo.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Kiragiro:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Kasumuluzo:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Wandika akasumuluzo</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Okugezako kwa murundi #%1</translation>
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
        <translation>Enkozesa entuufu eri: %1 kawayiro [kiragiro [agumenti...]]

Obufugiro bwa %2/%3 obulabika

Agumenti:
  kawayiro:
    -h|--help      Kaleetera lxqt-sudo okukoma ku kuwandika obuyambi buno.
    -v|--version   Kaleetera lxqt-sudo okukoma ku kulaga olwandika lwa yo.
    -q|--quiet     Kakendeeza obubaka obuva mu %1.
    -s|--su        Kaleetera lxqt-sudo okukozesa %3(1) okutuukiriza omulimu gwa yo.
    -d|--sudo      Kaleetera lxqt-sudo okukozesa %2(8) okutuukiriza omulimu gwa yo.
    -a|--doas      Kategeka %4(1) nga ye puloguramu ey&apos;oku musingi.
  kiragiro          ekiragiro lxqt-sudo ky&apos;eba etandika.
  agumenti        Agumenti ezisobola okuwebwa ekiragiro.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="97"/>
        <source>%1 version %2
</source>
        <translation>%1 luwandika %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="211"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: kubulako ekiragiro ekiba kikolebwako!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="218"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: lxqt-sudo tennaba kulonderwa puloguramu gy&apos;eba ekozesa!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="235"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Kiremya, ekiragiro ekya sisitemu kiremedwa okwekolamu koppi: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="263"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>tegekurula</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="329"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Nkwatirizza ekigeza okuyitira mu LC_ALL env(%2) okutandika ekiragiro n&apos;obuyinza obw&apos;enjawulo. Nkoma!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="371"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Kiremya, ekiragiro kya sisitemu kiremedwa okutegeka pty obutakigaana kukola ku birala: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="379"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Kiremya, ekiragiro kya sisitemu kiremeredwa mu kukozesa fdopen okubikkula pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="348"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Nemedwa okutandika &apos;%2&apos;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="413"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Koppi y&apos;omulimu &apos;%1&apos; egaanye!
%2</translation>
    </message>
</context>
</TS>
