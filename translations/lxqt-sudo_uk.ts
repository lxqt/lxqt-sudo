<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="uk">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>sudo для LXQT</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>Скопіювати команду до буфера обміну</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Копіювати</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Запитувана дія потребує адміністративних привілеїв. &lt;br&gt;Введіть свій пароль.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>LXQt sudo backend</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate privileges.</source>
        <translation>Програма LXQt sudo викликається у фоновому режимі для підвищення привілеїв.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Команда:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Пароль:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Введіть пароль</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Спроба #%1</translation>
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
        <translation type="unfinished">Використання: %1 опція [команда [аргументи...]]

Графічний інтерфейс для %2/%3/%4

Аргументи:

    опція:

        -h|--help — Вивести цю довідку.

        -v|--version — Вивести інформацію про версію.
    -q|--quiet     Make %1 less verbose.

        -s|--su — Використовувати %3(1) як бекенд.

        -d|--sudo — Використовувати %2(8) як бекенд.

        -a|--doas — Використовувати %4(1) як бекенд.

    команда — Команда для виконання.

    аргументи — Необов’язкові аргументи для команди.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="97"/>
        <source>%1 version %2
</source>
        <translation>%1 версія %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="211"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: не вказано команди для запуску!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="218"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: не вибрано бекенд!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="235"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Помилка Syscall, відгалуження не вдалося: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="263"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>не вибрано</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="329"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Виявлено спробу ввести привілейовану команду через LC_ALL env(%2). Виходимо!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="371"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Помилка Syscall, не вдалося перевести pty у не блоковий режим: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="379"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Помилка Syscall, не вдалося виконати fdopen pty: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="348"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Помилка запуску &apos;%2&apos;: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="413"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Підпроцес &apos;%1&apos; помилково завершився!
%2</translation>
    </message>
</context>
</TS>
