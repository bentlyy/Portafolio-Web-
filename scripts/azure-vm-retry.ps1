param()

$az = "C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd"
$temp = "C:\Users\garay\AppData\Local\Temp\opencode"
$stateFile = "$temp\azure-vm-state.txt"
$logFile = "$temp\azure-vm-retry.log"

if (-not (Test-Path $temp)) { New-Item -ItemType Directory -Path $temp -Force | Out-Null }

if (Test-Path $stateFile) {
    exit
}

$regions = @("chilecentral", "brazilsouth", "eastus2", "centralus", "westus2", "southcentralus", "eastus", "northeurope", "westeurope", "uksouth")

foreach ($loc in $regions) {
    $rg = "orbital-rg-$loc"
    & $az group create --name $rg --location $loc -o tsv 2>$null | Out-Null
    & $az vm create --resource-group $rg --name orbital-vm --image Ubuntu2404 --size Standard_B1s --admin-username azureuser --ssh-key-name orbital-ssh --generate-ssh-keys --location $loc *>> "$temp\azure-vm-attempt-$loc.log"
    if ($LASTEXITCODE -eq 0) {
        $ip = (& $az vm show -g $rg -n orbital-vm -d --query publicIps -o tsv 2>$null)
        "REGION=$loc`nRG=$rg`nIP=$ip`nCREATED=$(Get-Date -Format 'yyyy-MM-dd HH:mm')" | Set-Content $stateFile
        "VM CREADA en $loc IP=$ip $(Get-Date -Format 'yyyy-MM-dd HH:mm')" | Add-Content $logFile
        exit 0
    }
}

"Intento fallido $(Get-Date -Format 'yyyy-MM-dd HH:mm')" | Add-Content $logFile
