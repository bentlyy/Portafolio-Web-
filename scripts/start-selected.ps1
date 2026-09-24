param(
    [switch]$AgroBot,
    [switch]$Taller,
    [switch]$ML,
    [switch]$All,
    [switch]$List,
    [switch]$Stop
)

$root = "C:\Users\garay\OneDrive\Escritorio\Nueva carpeta\Proyectos"

if ($List) {
    Write-Host "Proyectos disponibles:" -ForegroundColor Cyan
    Write-Host "  -AgroBot   (mysql + backend + frontend)" -ForegroundColor Yellow
    Write-Host "  -Taller    (postgres + app + frontend)" -ForegroundColor Yellow
    Write-Host "  -ML        (ml-service + backend + frontend)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Ejemplo: .\start-selected.ps1 -AgroBot -Taller" -ForegroundColor Green
    exit
}

if ($Stop) {
    Write-Host "Deteniendo todos los contenedores..." -ForegroundColor Cyan
    docker compose -f "$root\AgroBot-Alert\docker-compose.yml" down 2>$null
    docker compose -f "$root\TallerMecanico\docker-compose.yml" down 2>$null
    docker compose -f "$root\ml-portafolio\infra\docker\docker-compose.yml" down 2>$null
    Write-Host "  ✓ Todo detenido" -ForegroundColor Green
    exit
}

if (-not ($All -or $AgroBot -or $Taller -or $ML)) {
    Write-Host "Usa -All para levantar todo, o selecciona:" -ForegroundColor Yellow
    Write-Host "  .\start-selected.ps1 -AgroBot -Taller" -ForegroundColor Cyan
    exit
}

if ($All) {
    $AgroBot = $true; $Taller = $true; $ML = $true
}

if ($AgroBot) {
    Write-Host "[AgroBot-Alert] Levantando..." -ForegroundColor Yellow
    Push-Location "$root\AgroBot-Alert"
    docker compose up -d 2>$null
    if ($?) { Write-Host "  ✓ AgroBot en http://localhost:5173" -ForegroundColor Green }
    Pop-Location
}

if ($Taller) {
    Write-Host "[TallerMecanico] Levantando (sin monitoring)..." -ForegroundColor Yellow
    Push-Location "$root\TallerMecanico"
    docker compose up -d db app frontend 2>$null
    if ($?) { Write-Host "  ✓ Taller en http://localhost:3043" -ForegroundColor Green }
    Pop-Location
}

if ($ML) {
    Write-Host "[ML-Portafolio] Levantando..." -ForegroundColor Yellow
    Push-Location "$root\ml-portafolio\infra\docker"
    docker compose up -d 2>$null
    if ($?) { Write-Host "  ✓ ML Portafolio en http://localhost:3001" -ForegroundColor Green }
    Pop-Location
}

Write-Host ""
Write-Host "Resumen:" -ForegroundColor Cyan
if ($AgroBot) { Write-Host "  AgroBot:  http://localhost:5173" -ForegroundColor Gray }
if ($Taller)  { Write-Host "  Taller:   http://localhost:3043" -ForegroundColor Gray }
if ($ML)      { Write-Host "  ML:       http://localhost:3001" -ForegroundColor Gray }
Write-Host ""
Write-Host "RAM usada aproximadamente:" -ForegroundColor Cyan
docker stats --no-stream --format "table {{.Name}}\t{{.MemUsage}}" 2>$null
