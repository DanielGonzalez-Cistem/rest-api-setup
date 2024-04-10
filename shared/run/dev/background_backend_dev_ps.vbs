Set WshShell = CreateObject("WScript.Shell")
WshShell.Run chr(34) & "background_backend_dev.bat" & Chr(34), 0
Set WshShell = Nothing