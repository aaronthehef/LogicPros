Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

 = New-Object System.Drawing.Bitmap(.Height)
)
.Location, [System.Drawing.Point]::Empty, .Save('C:\Users\aaron\Projects\test\homepage_screenshot.png', [System.Drawing.Imaging.ImageFormat]::Png)
.Dispose()
Write-Host 'Screenshot saved to homepage_screenshot.png'
