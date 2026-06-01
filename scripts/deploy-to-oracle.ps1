param(
    [Parameter(Mandatory = $true, HelpMessage = "Usuario@IP de la VM (ej: ubuntu@1.2.3.4)")]
    [string]$Target,
    [Parameter(Mandatory = $true, HelpMessage = "Ruta a tu clave privada SSH (.pem)")]
    [string]$Key,
    [switch]$Setup,
    [switch]$Deploy
)

if ($Setup) {
    Write-Host "=== Configurando servidor Oracle Cloud ===" -ForegroundColor Cyan
    ssh -i $Key -o StrictHostKeyChecking=accept-new $Target @'
        set -e
        echo "=== Actualizando sistema ==="
        sudo apt update && sudo apt upgrade -y

        echo "=== Instalando Docker ==="
        curl -fsSL https://get.docker.com | sudo sh
        sudo usermod -aG docker $USER

        echo "=== Instalando Docker Compose ==="
        sudo apt install -y docker-compose-plugin

        echo "=== Configurando firewall ==="
        sudo ufw allow OpenSSH
        sudo ufw allow 80/tcp
        sudo ufw allow 443/tcp
        sudo ufw --force enable

        echo "=== Verificando ==="
        docker --version
        docker compose version

        echo ""
        echo "✓ Servidor listo! Cierra sesión y vuelve a entrar para que los grupos surtan efecto."
'@
}

if ($Deploy) {
    $root = "C:\Users\garay\OneDrive\Escritorio\Nueva carpeta\Proyectos"

    Write-Host "=== Desplegando proyectos en Oracle Cloud ===" -ForegroundColor Cyan

    # Crear estructura en la VM
    ssh -i $Key $Target "mkdir -p ~/projects"

    # Gateway
    Write-Host "[1/4] Subiendo gateway..." -ForegroundColor Yellow
    scp -i $Key "$root\portafolio\gateway.conf" "$Target:~/projects/"
    scp -i $Key "$root\portafolio\docker-compose.yml" "$Target:~/projects/"

    # AgroBot
    Write-Host "[2/4] Subiendo AgroBot-Alert..." -ForegroundColor Yellow
    ssh -i $Key $Target "mkdir -p ~/projects/AgroBot-Alert"
    scp -i $Key -r "$root\AgroBot-Alert\docker-compose.yml" "$Target:~/projects/AgroBot-Alert/"
    scp -i $Key -r "$root\AgroBot-Alert\backend" "$Target:~/projects/AgroBot-Alert/"
    scp -i $Key -r "$root\AgroBot-Alert\frontend" "$Target:~/projects/AgroBot-Alert/"
    scp -i $Key -r "$root\AgroBot-Alert\database" "$Target:~/projects/AgroBot-Alert/"

    # TallerMecanico
    Write-Host "[3/4] Subiendo TallerMecanico..." -ForegroundColor Yellow
    ssh -i $Key $Target "mkdir -p ~/projects/TallerMecanico"
    scp -i $Key -r "$root\TallerMecanico\docker-compose.yml" "$Target:~/projects/TallerMecanico/"
    scp -i $Key -r "$root\TallerMecanico\Dockerfile" "$Target:~/projects/TallerMecanico/"
    scp -i $Key -r "$root\TallerMecanico\src" "$Target:~/projects/TallerMecanico/"
    scp -i $Key -r "$root\TallerMecanico\prisma" "$Target:~/projects/TallerMecanico/"
    scp -i $Key -r "$root\TallerMecanico\frontend" "$Target:~/projects/TallerMecanico/"
    scp -i $Key -r "$root\TallerMecanico\package.json" "$Target:~/projects/TallerMecanico/"
    scp -i $Key -r "$root\TallerMecanico\entrypoint.sh" "$Target:~/projects/TallerMecanico/"
    scp -i $Key -r "$root\TallerMecanico\healthcheck.js" "$Target:~/projects/TallerMecanico/"

    # ML Portafolio
    Write-Host "[4/4] Subiendo ML-Portafolio..." -ForegroundColor Yellow
    ssh -i $Key $Target "mkdir -p ~/projects/ml-portafolio"
    scp -i $Key -r "$root\ml-portafolio\infra" "$Target:~/projects/ml-portafolio/"
    scp -i $Key -r "$root\ml-portafolio\backend" "$Target:~/projects/ml-portafolio/"
    scp -i $Key -r "$root\ml-portafolio\frontend" "$Target:~/projects/ml-portafolio/"
    scp -i $Key -r "$root\ml-portafolio\ml-services" "$Target:~/projects/ml-portafolio/"

    Write-Host ""
    Write-Host "✓ Proyectos subidos!" -ForegroundColor Green
    Write-Host "Para levantarlos en la VM, corre:" -ForegroundColor Cyan
    Write-Host "  ssh -i $Key $Target" -ForegroundColor Gray
    Write-Host "  cd ~/projects" -ForegroundColor Gray
    Write-Host "  docker compose -f docker-compose.yml up -d  # gateway" -ForegroundColor Gray
    Write-Host "  cd ~/projects/AgroBot-Alert && docker compose up -d" -ForegroundColor Gray
    Write-Host "  cd ~/projects/TallerMecanico && docker compose up -d" -ForegroundColor Gray
    Write-Host "  cd ~/projects/ml-portafolio/infra/docker && docker compose up -d" -ForegroundColor Gray
}

if (-not $Setup -and -not $Deploy) {
    Write-Host "Uso:" -ForegroundColor Cyan
    Write-Host "  1. Crea la VM en Oracle Cloud Console" -ForegroundColor White
    Write-Host "  2. Setup inicial (una vez):" -ForegroundColor Yellow
    Write-Host "     .\scripts\deploy-to-oracle.ps1 -Target ubuntu@<IP> -Key ruta/a/clave.pem -Setup" -ForegroundColor Gray
    Write-Host ""
    Write-Host "  3. Subir proyectos:" -ForegroundColor Yellow
    Write-Host "     .\scripts\deploy-to-oracle.ps1 -Target ubuntu@<IP> -Key ruta/a/clave.pem -Deploy" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Requisitos:" -ForegroundColor Cyan
    Write-Host "  - Tener Git Bash, WSL o PowerShell con ssh/scp" -ForegroundColor Gray
    Write-Host "  - La VM debe tener puerto 22 abierto" -ForegroundColor Gray
}
