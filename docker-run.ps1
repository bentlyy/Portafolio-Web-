$projectPath = "C:\Users\garay\OneDrive\Escritorio\Nueva carpeta\Proyectos\portafolio"
$containerName = "portfolio"
$hostPort = 8080

Write-Host "=== Portfolio Web - Docker ===" -ForegroundColor Cyan
Write-Host "Puerto: $hostPort" -ForegroundColor Yellow
Write-Host ""

# 1. Build el proyecto
Write-Host "[1/3] Compilando proyecto Next.js..." -ForegroundColor Cyan
Set-Location $projectPath
npm run build
if (-not $?) {
    Write-Host "ERROR: Falló la compilación" -ForegroundColor Red
    exit 1
}

# 2. Construir imagen Docker
Write-Host "[2/3] Construyendo imagen Docker..." -ForegroundColor Cyan
docker build -t portfolio:latest .
if (-not $?) {
    Write-Host "ERROR: Falló la construcción de la imagen" -ForegroundColor Red
    exit 1
}

# 3. Detener contenedor anterior si existe y ejecutar nuevo
Write-Host "[3/3] Iniciando contenedor..." -ForegroundColor Cyan
docker stop $containerName 2>$null
docker rm $containerName 2>$null

docker run -d `
    --name $containerName `
    -p "${hostPort}:80" `
    --restart unless-stopped `
    --memory 64m `
    --cpus 0.5 `
    portfolio:latest

if ($?) {
    Write-Host ""
    Write-Host "✓ Portfolio disponible en: http://localhost:$hostPort" -ForegroundColor Green
    Write-Host "  Para verlo desde otro dispositivo en tu red: http://<TU-IP>:$hostPort" -ForegroundColor Green
    Write-Host ""
    Write-Host "Comandos útiles:" -ForegroundColor Cyan
    Write-Host "  docker stop portfolio    - Detener" -ForegroundColor Gray
    Write-Host "  docker start portfolio   - Iniciar" -ForegroundColor Gray
    Write-Host "  docker logs portfolio    - Ver logs" -ForegroundColor Gray
} else {
    Write-Host "ERROR: Falló al iniciar el contenedor" -ForegroundColor Red
}
