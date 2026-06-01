# ──────────────────────────────────────────────────────
# Oracle Cloud Free Tier - Guía de configuración
# ──────────────────────────────────────────────────────
# 1. Ve a https://www.oracle.com/cloud/free/
# 2. Haz clic en "Iniciar gratis"
# 3. Registro: necesitas tarjeta de crédito (solo verifican,
#    no cobran si usas solo recursos Always Free)
# 4. Región: elige la más cercana (Sao Paulo, Santiago a veces)
#    o usa "São Paulo" (latencia ~20ms desde Chile)
# 5. Después del registro, crea una VM Ampere A1:
#    - Shape: VM.Standard.A1.Flex
#    - OCPUs: 4
#    - RAM: 24 GB
#    - OS: Ubuntu 22.04 (o Ubuntu 24.04)
#    - Disco: 200 GB
# 6. Guarda la clave SSH que te descarguen
# 7. Conéctate por SSH:
#    ssh -i tu-clave.pem ubuntu@<IP-PUBLICA>

Write-Host "Oracle Cloud Free Tier Setup" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Recursos gratuitos que obtendras:" -ForegroundColor Yellow
Write-Host "- 4 cores ARM" -ForegroundColor Gray
Write-Host "- 24 GB RAM" -ForegroundColor Gray
Write-Host "- 200 GB disco" -ForegroundColor Gray
Write-Host "- 10 TB transferencia/mes" -ForegroundColor Gray
Write-Host "- IP publica estatica" -ForegroundColor Gray
Write-Host ""
Write-Host "Instrucciones:" -ForegroundColor Yellow
Write-Host "1. Registrate en https://www.oracle.com/cloud/free/" -ForegroundColor White
Write-Host "2. Crea una VM con Ubuntu 22.04 o 24.04" -ForegroundColor White
Write-Host "3. Guarda la clave SSH que te descarguen" -ForegroundColor White
Write-Host "4. Vuelve a ejecutar este script con -SSH y la IP" -ForegroundColor White
Write-Host ""
Write-Host "Ejemplo:" -ForegroundColor Yellow
Write-Host "  .\scripts\oracle-cloud-setup.ps1 -SSH ubuntu@123.456.789.0" -ForegroundColor Cyan
