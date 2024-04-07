Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c file.bat", 0
Set WshShell = Nothing