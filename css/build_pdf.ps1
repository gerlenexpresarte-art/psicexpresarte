$edgePath = (Get-ChildItem -Path "C:\Program Files (x86)\Microsoft\" -Recurse -Filter "msedge.exe" -ErrorAction SilentlyContinue | Select-Object -First 1).FullName
if ($edgePath) {
    & $edgePath --headless --disable-gpu --print-to-pdf="..\recurso-arteterapia.pdf" "..\recurso-arteterapia.html"
} else {
    $chromePath1 = (Get-ChildItem -Path "C:\Program Files\" -Recurse -Filter "chrome.exe" -ErrorAction SilentlyContinue | Select-Object -First 1).FullName
    $chromePath2 = (Get-ChildItem -Path "C:\Program Files (x86)\" -Recurse -Filter "chrome.exe" -ErrorAction SilentlyContinue | Select-Object -First 1).FullName
    if ($chromePath1) { & $chromePath1 --headless --disable-gpu --print-to-pdf="..\recurso-arteterapia.pdf" "..\recurso-arteterapia.html" }
    elseif ($chromePath2) { & $chromePath2 --headless --disable-gpu --print-to-pdf="..\recurso-arteterapia.pdf" "..\recurso-arteterapia.html" }
}
