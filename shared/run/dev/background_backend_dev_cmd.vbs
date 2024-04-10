Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c background_backend_dev.bat", 0
Set WshShell = Nothing