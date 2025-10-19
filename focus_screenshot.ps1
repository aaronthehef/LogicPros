Add-Type -AssemblyName System.Windows.Forms
# Find Chrome window and bring it to front
$processes = Get-Process chrome | Where-Object { $_.MainWindowTitle -ne "" }
if ($processes) {
    $chrome = $processes[0]
    [Microsoft.VisualBasic.Interaction]::AppActivate($chrome.Id)
    Start-Sleep -Milliseconds 500
}

# Take screenshot
$screen = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds
$bitmap = New-Object System.Drawing.Bitmap($screen.Width, $screen.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.CopyFromScreen($screen.Location, [System.Drawing.Point]::Empty, $screen.Size)
$bitmap.Save("website_screenshot.png", [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
Write-Host "Screenshot saved to website_screenshot.png"
