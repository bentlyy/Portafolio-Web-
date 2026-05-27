# Ejecutar como ADMINISTRADOR para instalar el servicio
$env:TUNNEL_ORIGIN_CERT = "$env:USERPROFILE\.cloudflared\cert.pem"

cloudflared service install

# Luego configurar el servicio para usar nuestro YAML:
# (Esto se hace desde el panel de Servicios o con sc.exe)
Write-Host ""
Write-Host "Servicio instalado. Ahora configura el binario:" -ForegroundColor Yellow
Write-Host "1. Abre SERVICES.MSC" -ForegroundColor Cyan
Write-Host "2. Busca 'cloudflared' service" -ForegroundColor Cyan
Write-Host "3. En 'Path to executable', agrega al final:" -ForegroundColor Cyan
Write-Host "   --config C:\Users\garay\.cloudflared\config-proyectos.yml run" -ForegroundColor Cyan
Write-Host ""
Write-Host "O ejecuta este comando desde PowerShell como ADMIN:" -ForegroundColor Green
Write-Host 'sc.exe config cloudflared binPath= "C:\Users\garay\.cloudflared\cloudflared.exe --config C:\Users\garay\.cloudflared\config-proyectos.yml run"' -ForegroundColor Green
