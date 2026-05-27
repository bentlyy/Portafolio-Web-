param(
    [switch]$Dev,       # Modo desarrollo (sin Docker, desde Node)
    [switch]$Tunnel     # Inicia también el túnel Cloudflare
)

$root = "C:\Users\garay\OneDrive\Escritorio\Nueva carpeta\Proyectos"

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "     ORBITAL DEPLOY - Inicio de proyectos" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""

# ─── Gateway ────────────────────────────────────────
Write-Host "[1/4] Gateway (nginx)" -ForegroundColor Yellow
Push-Location "$root\portafolio"
docker compose up -d gateway 2>$null
if ($?) { Write-Host "  ✓ Gateway en http://localhost:8080" -ForegroundColor Green }
Pop-Location

# ─── AgroBot ────────────────────────────────────────
Write-Host "[2/4] AgroBot Alert" -ForegroundColor Yellow
Push-Location "$root\AgroBot-Alert"
if ($Dev) {
    Write-Host "  Modo desarrollo (no implementado)" -ForegroundColor Gray
} else {
    docker compose up -d --build 2>&1 | Out-Null
    if ($?) { Write-Host "  ✓ AgroBot en http://localhost:5173" -ForegroundColor Green }
}
Pop-Location

# ─── Taller Mecánico ────────────────────────────────
Write-Host "[3/4] Taller Mecánico" -ForegroundColor Yellow
Push-Location "$root\TallerMecanico"
if ($Dev) {
    Write-Host "  Modo desarrollo (no implementado)" -ForegroundColor Gray
} else {
    docker compose -f docker-compose.yml -f docker-compose.override.yml up -d --build 2>&1 | Out-Null
    if ($?) { Write-Host "  ✓ TallerPro en http://localhost:3043" -ForegroundColor Green }
}
Pop-Location

# ─── ML Portafolio ──────────────────────────────────
Write-Host "[4/4] ML Portafolio" -ForegroundColor Yellow
Push-Location "$root\ml-portafolio\infra\docker"
if ($Dev) {
    Write-Host "  Modo desarrollo (no implementado)" -ForegroundColor Gray
} else {
    docker compose up -d --build 2>&1 | Out-Null
    if ($?) { Write-Host "  ✓ ML Portafolio en http://localhost:3001" -ForegroundColor Green }
}
Pop-Location

# ─── Tunnel ─────────────────────────────────────────
if ($Tunnel) {
    Write-Host "[*] Cloudflare Tunnel" -ForegroundColor Yellow
    $configPath = "$env:USERPROFILE\.cloudflared\config-proyectos.yml"
    Start-Process -NoNewWindow -FilePath "cloudflared" -ArgumentList "tunnel --config $configPath run proyectos"
    Write-Host "  ✓ Túnel iniciado en segundo plano" -ForegroundColor Green
}

Write-Host ""
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "  Proyectos iniciados. Verifica con:" -ForegroundColor Cyan
Write-Host "  docker ps" -ForegroundColor Gray
Write-Host "==============================================" -ForegroundColor Cyan
