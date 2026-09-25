param(
    [string]$GitHubConnection,
    [switch]$Enable
)

$ErrorActionPreference = 'Stop'
Push-Location (Split-Path $PSScriptRoot -Parent)
try {
    $generated = node --input-type=module -e "import {config,flowDefinition,connectionReferences} from './tools/automation.mjs'; console.log(JSON.stringify({config,definition:flowDefinition(),references:connectionReferences({})}))"
    if ($LASTEXITCODE -ne 0) { throw 'Cannot generate automation definition.' }
    $manifest = $generated | ConvertFrom-Json -Depth 100
    $config = $manifest.config
    $tenant = '25561124-bd58-4eba-99ac-9e8b9cd32b13'
    $dataverseToken = az account get-access-token --resource $config.organization --tenant $tenant --query accessToken -o tsv
    if ($LASTEXITCODE -ne 0) { throw 'Dataverse login required.' }
    $powerAppsToken = az account get-access-token --resource https://service.powerapps.com/ --tenant $tenant --query accessToken -o tsv
    if ($LASTEXITCODE -ne 0) { throw 'Power Apps login required.' }
    $dataverseHeaders = @{ Authorization = "Bearer $dataverseToken"; Accept = 'application/json' }
    $powerAppsHeaders = @{ Authorization = "Bearer $powerAppsToken"; Accept = 'application/json' }
    $root = $config.organization + '/api/data/v9.2'
    $connections = @()
    $next = 'https://api.powerapps.com/providers/Microsoft.PowerApps/connections?api-version=2016-11-01&$filter=' + [uri]::EscapeDataString("environment eq '$($config.environment)'")
    while ($next) {
        $page = Invoke-RestMethod -Uri $next -Headers $powerAppsHeaders
        $connections += $page.value
        $next = $page.nextLink
    }
    $github = @($connections | Where-Object {
        $_.properties.apiId -eq '/providers/Microsoft.PowerApps/apis/shared_github' -and
        'Connected' -in $_.properties.statuses.status -and
        (!$GitHubConnection -or $_.name -eq $GitHubConnection)
    })
    if ($github.Count -ne 1) {
        throw 'Exactly one connected GitHub connection is required. Sign in in Power Automate, or select it with -GitHubConnection. No flow changes were made.'
    }
    $references = Invoke-RestMethod -Uri ($root + '/connectionreferences?$select=connectionreferenceid,connectionreferencelogicalname,connectionid&$filter=startswith(connectionreferencelogicalname,''new_governance_'')') -Headers $dataverseHeaders
    $githubReference = $references.value | Where-Object connectionreferencelogicalname -eq 'new_governance_github'
    if (!$githubReference) { throw 'Governance solution connection references are missing.' }
    $workflowReferences = @{}
    foreach ($property in $manifest.references.PSObject.Properties) {
        $reference = $references.value | Where-Object connectionreferencelogicalname -eq $property.Value.connectionReferenceLogicalName
        if (!$reference) { throw "Missing connection reference: $($property.Name)" }
        if ($property.Name -ne 'github' -and !$reference.connectionid) { throw "Unbound connection: $($property.Name)" }
        $workflowReferences[$property.Name] = @{
            runtimeSource = 'embedded'
            connection = @{ connectionReferenceLogicalName = $property.Value.connectionReferenceLogicalName }
            api = @{ name = ($property.Value.id -split '/')[-1] }
        }
    }
    $flowId = 'fbbf117b-3bb3-f111-aaac-70a8a505a30e'
    $existing = Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')?$select=statecode') -Headers $dataverseHeaders
    if ($existing.statecode -ne 0) { throw 'Stop the flow before deploying a new definition.' }

    # Stopping the flow does not touch a run that was already in progress at that moment - it's
    # left stranded in Running with no end time. Since the trigger's concurrency is capped at 1,
    # a stranded run silently blocks every future scheduled trigger from starting at all, with no
    # error anywhere, until someone notices and cancels it by hand (this happened for real during
    # this project's first deployment). Cancel any such leftover run automatically, every time,
    # so a deployment can never reintroduce that problem.
    $flowToken = az account get-access-token --resource https://service.flow.microsoft.com/ --tenant $tenant --query accessToken -o tsv
    if ($LASTEXITCODE -ne 0) { throw 'Power Automate (Flow) login required.' }
    $flowHeaders = @{ Authorization = "Bearer $flowToken"; Accept = 'application/json' }
    $runsUri = "https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/$($config.environment)/flows/$flowId/runs?api-version=2016-11-01&`$top=10"
    $recentRuns = Invoke-RestMethod -Uri $runsUri -Headers $flowHeaders
    $stranded = @($recentRuns.value | Where-Object { $_.properties.status -in @('Running', 'Waiting') })
    foreach ($run in $stranded) {
        Write-Warning "Cancelling a run left stranded by the previous stop: $($run.name)"
        Invoke-RestMethod -Uri "https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/$($config.environment)/flows/$flowId/runs/$($run.name)/cancel?api-version=2016-11-01" -Headers $flowHeaders -Method Post | Out-Null
    }

    Invoke-RestMethod -Uri ($root + '/connectionreferences(' + $githubReference.connectionreferenceid + ')') -Headers $dataverseHeaders -Method Patch -ContentType 'application/json' -Body (@{ connectionid = $github[0].name } | ConvertTo-Json) | Out-Null
    $clientData = @{ properties = @{ connectionReferences = $workflowReferences; definition = $manifest.definition }; schemaVersion = '1.0.0.0' } | ConvertTo-Json -Depth 100 -Compress
    Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')') -Headers $dataverseHeaders -Method Patch -ContentType 'application/json' -Body (@{ clientdata = $clientData } | ConvertTo-Json -Depth 100) | Out-Null
    $stored = Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')?$select=clientdata,statecode') -Headers $dataverseHeaders
    $actual = ($stored.clientdata | ConvertFrom-Json -Depth 100).properties.definition | ConvertTo-Json -Depth 100 -Compress
    $expected = $manifest.definition | ConvertTo-Json -Depth 100 -Compress
    if (![System.Text.Json.Nodes.JsonNode]::DeepEquals([System.Text.Json.Nodes.JsonNode]::Parse($actual), [System.Text.Json.Nodes.JsonNode]::Parse($expected))) {
        throw 'Stored definition differs from the local definition. Flow was not activated.'
    }
    if ($Enable) {
        Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')') -Headers $dataverseHeaders -Method Patch -ContentType 'application/json' -Body '{"statecode":1,"statuscode":2}' | Out-Null
    }
    $state = Invoke-RestMethod -Uri ($root + '/workflows(' + $flowId + ')?$select=name,statecode') -Headers $dataverseHeaders
    [pscustomobject]@{ Flow = $state.name; Enabled = ($state.statecode -eq 1); DefinitionVerified = $true }
} finally {
    $dataverseToken = $null
    $powerAppsToken = $null
    Pop-Location
}