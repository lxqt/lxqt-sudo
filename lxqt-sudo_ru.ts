<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="20"/>
        <source>LXQt sudo</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>Команда:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>Пароль:</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="43"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; нужны права администратора.
Пожалуйста, введите свой пароль.</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="54"/>
        <source>Attempt #%1</source>
        <translation>Попытка № %1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="63"/>
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
        <translation>Использование: %1 опция [команда [аргументы...]]

Пользовательский графический интерфейс для %2/%3

Аргументы:
  опции:
    -h|--help      Напечатать эту справку.
    -v|--version   Напечатать информацию о версии.
    -s|--su        Использовать %3(1) как бэкенд.
    -d|--sudo      Использовать %2(8) как бэкенд.
  command          Запускаемая команда.
  arguments        Дополнительные аргументы для команды.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="80"/>
        <source>%1 version %2</source>
        <translation>%1 версия %2</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="135"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: не указана команда для запуска!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="142"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: бэкенд не выбран!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="147"/>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation>%1: внимание — получено несколько аргументов для бэкенда %2, они были объединены в один: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="162"/>
        <source>Failed to fork: %1</source>
        <translation>Не удалось форкнуть: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="205"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3</source>
        <translation>%1: Не удалось выполнить &apos;%2&apos;: %3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="234"/>
        <source>Failed to set non-block: %1</source>
        <translation>Не удалось сделать не блокирующим: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="242"/>
        <source>Failed to fdopen: %1</source>
        <translation>Не удалось использовать fdopen: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="275"/>
        <source>Child &apos;%1&apos; process failed!%2</source>
        <translation>Дочерний процесс &apos;%1&apos; завершился с ошибкой!%2</translation>
    </message>
</context>
</TS>
