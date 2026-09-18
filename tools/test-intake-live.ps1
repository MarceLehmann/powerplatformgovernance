param([string]$FlowId = 'b8c08dea-43e2-43e2-90ce-e5c8e3fe3671')

$ErrorActionPreference = 'Stop'
$tenant = '25561124-bd58-4eba-99ac-9e8b9cd32b13'
$root = 'https://kmupower.crm17.dynamics.com/api/data/v9.2'
$flowRoot = 'https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/7bf06bc7-6b19-e10e-ade3-9337f010d45e/flows/' + $FlowId
$testBase = 'https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-56-empowering-tools-in-coe/?intake_check=' + [guid]::NewGuid().ToString()
$records = @()
$initialState = $null
$activated = $false
$checkCount = 0

function Send-Submission($Payload, [int]$ExpectedStatus) {
    try {
        $response = Invoke-WebRequest -Uri $callback -Method Post -ContentType 'application/json' -Body ($Payload | ConvertTo-Json -Compress) -SkipHttpErrorCheck -TimeoutSec 90
    } catch {
        throw 'Webhook request could not complete. Callback URL intentionally withheld.'
    }
    if ([int]$response.StatusCode -ne $ExpectedStatus) { throw "Unexpected intake HTTP status: $($response.StatusCode); expected $ExpectedStatus." }
    $result = $response.Content | ConvertFrom-Json
    if ($result.accepted -ne ($ExpectedStatus -eq 202)) { throw 'Unexpected intake acceptance value.' }
    $script:checkCount++
}

try {
    $dataverseToken = az account get-access-token --resource https://kmupower.crm17.dynamics.com --tenant $tenant --query accessToken -o tsv
    if ($LASTEXITCODE -ne 0) { throw 'Dataverse login required.' }
    $flowToken = az account get-access-token --resource https://service.flow.microsoft.com/ --tenant $tenant --query accessToken -o tsv
    if ($LASTEXITCODE -ne 0) { throw 'Power Automate login required.' }
    $headers = @{ Authorization = "Bearer $dataverseToken"; Accept = 'application/json' }
    $flowHeaders = @{ Authorization = "Bearer $flowToken"; Accept = 'application/json' }
    $existing = Invoke-RestMethod -Uri ($root + '/workflows(' + $FlowId + ')?$select=statecode') -Headers $headers
    $initialState = $existing.statecode
    if ($initialState -ne 0) { throw 'Stop the intake flow before running isolated live tests.' }
    Invoke-RestMethod -Uri ($root + '/workflows(' + $FlowId + ')') -Headers $headers -Method Patch -ContentType 'application/json' -Body '{"statecode":1,"statuscode":2}' | Out-Null
    $activated = $true
    $callbackResult = Invoke-RestMethod -Uri ($flowRoot + '/triggers/manual/listCallbackUrl?api-version=2016-11-01') -Headers $flowHeaders -Method Post -ContentType 'application/json' -Body '{}'
    $callback = $callbackResult.response.value
    if (!$callback) { $callback = $callbackResult.value }
    if (!$callback -or ([uri]$callback).Scheme -ne 'https') { throw 'No valid callback returned. Response intentionally withheld.' }

    Send-Submission @{ content_url = $testBase; submitter_name = 'PRIVATE INTAKE TEST'; publish_credit = '' } 202
    Send-Submission @{ content_url = $testBase + '#duplicate'; submitter_name = 'SHOULD NOT REPLACE'; publish_credit = 'yes' } 202
    $stored = Invoke-RestMethod -Uri ($root + '/new_governancesources?$filter=' + [uri]::EscapeDataString("new_contenturl eq '$testBase'")) -Headers $headers
    $records += $stored.value.new_governancesourceid
    if ($stored.value.Count -ne 1) { throw 'Duplicate submission created more than one source.' }
    $record = $stored.value[0]
    if ($record.new_enabled -ne $false -or $record.new_approval -ne 100000000 -or $record.new_processing -ne 100000002) { throw 'Submission escaped approval gates.' }
    if ($record.new_publishcredit -ne $false -or $record.new_submittername -or $record.new_submitterlinkedin) { throw 'Private contributor data was stored or overwritten by duplicate.' }

    $creditUrl = $testBase + '-credit'
    Send-Submission @{ content_url = $creditUrl; submitter_name = 'Marcel Lehmann'; submitter_linkedin = 'https://www.linkedin.com/in/marcelehmann/'; publish_credit = 'yes' } 202
    $credit = Invoke-RestMethod -Uri ($root + '/new_governancesources?$filter=' + [uri]::EscapeDataString("new_contenturl eq '$creditUrl'")) -Headers $headers
    $records += $credit.value.new_governancesourceid
    if ($credit.value.Count -ne 1 -or $credit.value[0].new_publishcredit -ne $true -or $credit.value[0].new_submittername -ne 'Marcel Lehmann') { throw 'Explicit credit was not stored correctly.' }

    foreach ($invalid in @(
        @{},
        @{ content_url = $testBase; new_enabled = $true },
        @{ content_url = $testBase; new_approval = 100000001 },
        @{ content_url = $testBase; publish_credit = $true },
        @{ content_url = $testBase; website = 'spam' },
        @{ content_url = 'https://localhost/' },
        @{ content_url = 'http://powerplatformtip.com/' },
        @{ content_url = $testBase; submitter_linkedin = 'https://linkedin.com.evil.org/in/person' }
    )) { Send-Submission $invalid 400 }
    "Live intake checks passed: $checkCount HTTP assertions; pending/disabled, duplicate safety and consent verified."
} finally {
    if ($headers) {
        if ($activated) {
            Invoke-RestMethod -Uri ($root + '/workflows(' + $FlowId + ')') -Headers $headers -Method Patch -ContentType 'application/json' -Body '{"statecode":0,"statuscode":1}' | Out-Null
        }
        $remaining = Invoke-RestMethod -Uri ($root + '/new_governancesources?$select=new_governancesourceid&$filter=' + [uri]::EscapeDataString("startswith(new_contenturl,'$testBase')")) -Headers $headers
        $records += $remaining.value.new_governancesourceid
        foreach ($recordId in @($records | Where-Object { $_ } | Select-Object -Unique)) {
            Invoke-RestMethod -Uri ($root + '/new_governancesources(' + $recordId + ')') -Headers $headers -Method Delete | Out-Null
        }
    }
    $callback = $null
    $callbackResult = $null
    $headers = $null
    $flowHeaders = $null
    $dataverseToken = $null
    $flowToken = $null
}