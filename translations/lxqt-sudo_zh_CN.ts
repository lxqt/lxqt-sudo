<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
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
        <translation>命令:</translation>
    </message>
    <message>
        <location filename="../../passworddialog.ui" line="84"/>
        <source>Password:</source>
        <translation>密码:</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="43"/>
        <source>&lt;b&gt;%1&lt;/b&gt; needs administrative privileges.
Please enter your password.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 需要管理特权
请输入您的密码。</translation>
    </message>
    <message>
        <location filename="../../passworddialog.cpp" line="54"/>
        <source>Attempt #%1</source>
        <translation>尝试 #%1</translation>
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
        <translation>用法: %1 选项 [命令 [参数...]]

%2/%3 的 GUI 前端

参数:
  选项:
    -h|--help      显示此帮助。
    -v|--version   显示版本信息。
    -s|--su        以 %3(1) 为后端。
    -d|--sudo      以 %2(8) 为后端。
  command          欲运行的命令。
  arguments        命令的可选参数。

</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="80"/>
        <source>%1 version %2
</source>
        <translation>%1 版本 %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../../sudo.cpp" line="135"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: 没有提供欲运行的命令！</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="142"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: 没有选择后端！</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="147"/>
        <source>%1: warning - got multiple arguments for %2 backend, squashing into one: %3</source>
        <translation>%1: 警告 - 获得了多个给 %2 后端的参数，挤进：%3</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="162"/>
        <source>Failed to fork: %1</source>
        <translation>分支失败: %1</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="205"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: 运行命令 &apos;%2&apos; 失败: %3
</translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="234"/>
        <source>Failed to set non-block: %1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="242"/>
        <source>Failed to fdopen: %1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../../sudo.cpp" line="275"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>子进程 &apos;%1&apos; 失败！
%2</translation>
    </message>
</context>
</TS>
