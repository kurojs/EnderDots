' YASB source launcher: runs the opencode custom widget build hidden (no console)
' Singleton: if a pythonw running src\main.py already exists, do nothing (avoids double bar)
Set fso = CreateObject("Scripting.FileSystemObject")
Set wmi = GetObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\cimv2")
Set procs = wmi.ExecQuery("SELECT ProcessId FROM Win32_Process WHERE Name='pythonw.exe' AND CommandLine LIKE '%src\\main.py%' AND CommandLine LIKE '%Documents\\Work\\yasb%'")
If procs.Count > 0 Then
  WScript.Quit
End If

Set ws = CreateObject("WScript.Shell")
ws.Environment("PROCESS")("YASB_CONFIG_HOME") = "C:\Users\kuuro\.config\yasb"
ws.CurrentDirectory = "C:\Users\kuuro\Documents\Work\yasb"
ws.Run """C:\Users\kuuro\Documents\Work\yasb\.venv\Scripts\pythonw.exe"" ""C:\Users\kuuro\Documents\Work\yasb\src\main.py""", 0, False