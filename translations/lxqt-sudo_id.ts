<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="id">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>sudo LXQt</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>Salin ke papan klip</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>Salin</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Tindakan yang diminta memerlukan hak administratif. &lt;br&gt; Silakan masukkan kata sandi Anda.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>backend sudo LXQt</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>Program sudo LXQt dipanggil di latar belakang untuk menaikkan hak akses.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Perintah:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Kata sandi:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Masukkan password</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Mencoba #%1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="75"/>
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
        <translation>Penggunaan: %1 opsi [perintah [argumen...]]

Antarmuka GUI untuk %2/%3

Argumen:
  opsi:
    -h|--help      Mencetak bantuan ini.
    -v|--version   Mencetak informasi versi.
    -s|--su        Menggunakan %3(1) sebagai backend.
    -d|--sudo      Menggunakan %2(8) sebagai backend.
  perintah         Perintah untuk dijalankan.
  argumen          Argumen opsional untuk perintah.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="92"/>
        <source>%1 version %2
</source>
        <translation>%1 versi %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="195"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: tidak tersedia perintah untuk dijalankan!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="202"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: tidak ada backend yang dipilih!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="219"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Kesalahan Syscall, gagal melakukan fork: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="246"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>belum diset</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="295"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Upaya yang terdeteksi untuk menyuntikkan perintah istimewa melalui LC_ALL env (%2). Menutup!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="337"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Kesalahan Syscall, gagal membawa pty ke mode non-blok: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="345"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Kesalahan Syscall, gagal melakukan fdopen pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="314"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Gagal mengeksekusi &apos;%2&apos;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="376"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Proses &apos;%1&apos; child gagal!
%2</translation>
    </message>
</context>
</TS>
