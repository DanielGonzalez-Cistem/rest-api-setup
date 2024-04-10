Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c background_backend_prod.bat", 0
Set WshShell = Nothing