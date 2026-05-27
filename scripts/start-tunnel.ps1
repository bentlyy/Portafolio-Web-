param(
    [switch]$InstallService
)

$configPath = "$env:USERPROFILE\.cloudflared\config-proyectos.yml"

if ($InstallService) {
    Write-Host "Instalando cloudflared como servicio de Windows..." -ForegroundColor Cyan
    Write-Host "SOLO EJECUTAR COMO ADMINISTRADOR" -ForegroundColor Yellow
    cloudflared service install
    Write-Host ""
    Write-Host "Después de instalar, configurar el servicio con:" -ForegroundColor Green
    Write-Host '  sc.exe config cloudflared binPath= "C:\Users\garay\.cloudflared\cloudflared.exe --config C:\Users\garay\.cloudflared\config-proyectos.yml run"' -ForegroundColor Green
    Write-Host ""
    Write-Host "Luego iniciar el servicio:" -ForegroundColor Green
    Write-Host "  Start-Service cloudflared" -ForegroundColor Green
} else {
    Write-Host "Iniciando Cloudflare Tunnel..." -ForegroundColor Cyan
    Write-Host "Subdominios configurados:" -ForegroundColor Yellow
    Write-Host "  agrobot.amgdeveloper.cl  -> localhost:5173" -ForegroundColor Gray
    Write-Host "  tallerpro.amgdeveloper.cl -> localhost:3043" -ForegroundColor Gray
    Write-Host "  ml.amgdeveloper.cl       -> localhost:3001" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Presiona Ctrl+C para detener el túnel" -ForegroundColor Cyan
    Write-Host ""
    
    cloudflared tunnel --config $configPath run proyectos
}
