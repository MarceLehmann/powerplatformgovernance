param([switch]$Enable)

$ErrorActionPreference = 'Stop'
Push-Location (Split-Path $PSScriptRoot -Parent)
try {
    $generated = node --input-type=module -e "import {config} from './tools/automation.mjs'; import {intakeName,intakeDefinition} from './tools/intake.mjs'; console.log(JSON.stringify({config,name:intakeName,definition:intakeDefinition()}))"
    if ($LASTEXITCODE -ne 0) { throw 'Cannot generate intake definition.' }
    $manifest = $generated | ConvertFrom-Json -Depth 100
    $token = az account get-access-token --resource $manifest.config.organization --tenant 25561124-bd58-4eba-99ac-9e8b9cd32b13 --query accessToken -o tsv
    if ($LASTEXITCODE -ne 0) { throw 'Dataverse login required.' }
    $root = $manifest.config.organization + '/api/data/v9.2'
    $headers = @{ Authorization = "Bearer $token"; Accept = 'application/json'; 'MSCRM.SolutionUniqueName' = $manifest.config.solution.ToLowerInvariant() }
    $references = Invoke-RestMethod -Uri ($root + '/connectionreferences?$select=connectionreferencelogicalname,connectionid&$filter=connectionreferencelogicalname eq ''new_governance_dataverse''') -Headers $headers
    if (!$references.value[0].connectionid) { throw 'Bound governance Dataverse connection required.' }
    $flows = Invoke-RestMethod -Uri ($root + '/workflows?$select=workflowid,name,statecode&$filter=category eq 5 and name eq ''' + $manifest.name.Replace("'", "''") + '''') -Headers $headers
    if ($flows.value.Count -gt 1) { throw 'Multiple matching intake flows. Resolve before deploying.' }
    if ($flows.value.Count -eq 1 -and $flows.value[0].statecode -ne 0) { throw 'Stop the intake flow before replacing its definition.' }
    $flowId = if ($flows.value.Count -eq 1) { $flows.value[0].workflowid } else { [guid]::NewGuid().ToString() }
    $clientData = @{
        properties = @{
            connectionReferences = @{ dataverse = @{ runtimeSource = 'embedded'; connection = @{ connectionReferenceLogicalName = 'new_governance_dataverse' }; api = @{ name = 'shared_commondataserviceforapps' } } }
            definition = $manifest.definition
        }
        schemaVersion = '1.0.0.0'
    } | ConvertTo-Json -Depth 100 -Compress
    $body = @{ clientdata = $clientData }
    if ($flows.value.Count -eq 0) {
        $body.name = $manifest.name
        $body.workflowid = $flowId
        $body.category = 5
        $body.type = 1
        $body.primaryentity = 'none'
        Invoke-RestMethod -Uri ($root + '/workflows') -Headers $headers -Method Post -ContentType 'application/json' -Body ($body | ConvertTo-Json -Depth 100) | Out-Null
    } else {
        Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')') -Headers $headers -Method Patch -ContentType 'application/json' -Body ($body | ConvertTo-Json -Depth 100) | Out-Null
    }
    $stored = Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')?$select=clientdata,statecode') -Headers $headers
    $actual = ($stored.clientdata | ConvertFrom-Json -Depth 100).properties.definition | ConvertTo-Json -Depth 100 -Compress
    $expected = $manifest.definition | ConvertTo-Json -Depth 100 -Compress
    if ($actual -ne $expected) { throw 'Stored intake definition differs. Flow was not activated.' }
    if ($Enable) {
        Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')') -Headers $headers -Method Patch -ContentType 'application/json' -Body '{"statecode":1,"statuscode":2}' | Out-Null
    }
    $state = Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')?$select=name,statecode') -Headers $headers
    [pscustomobject]@{ FlowId = $flowId; Flow = $state.name; Enabled = ($state.statecode -eq 1); DefinitionVerified = $true }
} finally {
    $token = $null
    $headers = $null
    Pop-Location
}