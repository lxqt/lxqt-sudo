<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_TW">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="20"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="77"/>
        <source>Command:</source>
        <translation>指令：</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>密碼：</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="44"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 需要管理員權限
請輸入您的密碼 </translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="55"/>
        <source>Attempt #%1</source>
        <translation>嘗試 %1</translation>
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
        <translation>使用方式：%1 選項 [指令 [參數...]]

GUI 前端 %2/%3

參數：
  選項：
    -h|--help      顯示此幫助訊息。
    -v|--version  顯示版本訊息。
    -s|--su       使用 %3(1) 當後端。
    -d|--sudo     使用 %2(8) 當後端。
  指令            要執行的指令。
  參數            可選的指令參數。

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="80"/>
        <source>%1 version %2
</source>
        <translation>%1 版本 %s</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="135"/>
        <source>%1: no command to run provided!</source>
        <translation>%1：沒有可執行的指令！</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="142"/>
        <source>%1: no backend chosen!</source>
        <translation>%1：沒有選擇後端！</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="147"/>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation>%1：警告 - %2 後端得到多項參數，壓縮成一個：%3</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="162"/>
        <source>Failed to fork: %1</source>
        <translation>分岔失敗：%1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="205"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1：執行 &apos;%2&apos; 失敗：%3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="234"/>
        <source>Failed to set non-block: %1</source>
        <translation>設定非阻塞失敗：%1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="242"/>
        <source>Failed to fdopen: %1</source>
        <translation>執行fdopen失敗：%1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="275"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>子執行序&apos;%1&apos;執行失敗！
%2</translation>
    </message>
</context>
</TS>
