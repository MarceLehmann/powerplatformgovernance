---
layout: page
title: Admin Flows
icon: fas fa-bolt
order: 2
permalink: /flows/
toc: true
description: "50 ready-to-adapt Power Automate flow patterns for Power Platform and Copilot Studio admins, covering environments, DLP, apps, flows, Copilot Studio and Dataverse."
---

Fifty flow ideas built specifically for **Power Platform admins**, with a focus on governance, Copilot Studio and AI. Each one shows a `GET` call to read the current state and a `PATCH`/`POST`/`DELETE` call to change or create something. These are patterns to adapt, not copy-paste production code — test every one in a sandbox first, and validate preview or undocumented endpoints against current Microsoft documentation before relying on them.

## Base URLs, authentication and a few notes

To keep the examples short, these shorthand labels are used throughout:

| Label | Base URL | Audience (for OAuth) | api-version |
|---|---|---|---|
| `{bap}` | `https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin` | `https://service.powerapps.com/` | `2021-04-01` |
| `{pa}` | `https://api.powerapps.com/providers/Microsoft.PowerApps/scopes/admin/environments/{env}` | `https://service.powerapps.com/` | `2016-11-01` |
| `{flow}` | `https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/scopes/admin/environments/{env}` | `https://service.flow.microsoft.com/` | `2016-11-01` |
| `{ppapi}` | `https://api.powerplatform.com` | `https://api.powerplatform.com` | `2022-03-01-preview` |
| `{dv}` | `https://{org}.crm.dynamics.com/api/data/v9.2` | `https://{org}.crm.dynamics.com` | – |
| `{graph}` | `https://graph.microsoft.com/v1.0` | `https://graph.microsoft.com` | – |

For authentication, use "Active Directory OAuth" in the HTTP action with an app registration (client credentials, secret pulled from Azure Key Vault). For a service principal to call the BAP, Power Apps and Flow admin APIs, register it once via PowerShell: `New-PowerAppManagementApp -ApplicationId <appId>`. For Dataverse, it additionally needs an application user in every environment (see #49). Many of the `GET` calls also exist as ready-made actions in the **Power Platform for Admins V2**, **Power Apps for Admins** and **Power Automate for Admins** connectors. Some endpoints below are preview or not officially documented — sandbox-test those first.

A production admin flow generally follows this shape: trigger (recurrence, Dataverse, or request) → `GET`/inventory read of current state → filter and compare against target state → approval or adaptive card for risky changes → `POST`/`PATCH`/admin-connector action → logging with a correlation ID and before/after state → error handling, retry and notification.

---

## Environments and tenant (1–10)

### 1. Environment inventory
Write every environment's type, region, Dataverse URL and managed status into an inventory table daily.
```http
GET  {bap}/environments?api-version=2021-04-01&$expand=properties.capacity
POST {dv}/cr_environments   {"cr_name":"PROJ-FIN-DEV","cr_envid":"<envId>","cr_sku":"Sandbox"}
```

### 2. Environment request with approval and creation
A form triggers an approval, then the environment is created with Dataverse.
```http
POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/environments?api-version=2021-04-01
{"location":"switzerland","properties":{"displayName":"PROJ-FIN-DEV","environmentSku":"Sandbox","databaseType":"CommonDataService",
 "linkedEnvironmentMetadata":{"baseLanguage":1033,"currency":{"code":"CHF"},"domainName":"proj-fin-dev","securityGroupId":"<groupId>"}}}
GET  {bap}/environments/{env}?api-version=2021-04-01   → poll properties.provisioningState until "Succeeded"
```

### 3. Enforce a security group
Detect environments with no security group and set the correct one.
```http
GET   {bap}/environments?api-version=2021-04-01   → is linkedEnvironmentMetadata.securityGroupId empty?
PATCH {bap}/environments/{env}?api-version=2021-04-01
{"properties":{"linkedEnvironmentMetadata":{"securityGroupId":"<groupId>"}}}
```

### 4. Auto-enable Managed Environments
Detect production environments without managed status and turn it on.
```http
GET   {bap}/environments/{env}?api-version=2021-04-01   → properties.governanceConfiguration.protectionLevel
PATCH {bap}/environments/{env}?api-version=2021-04-01
{"properties":{"governanceConfiguration":{"protectionLevel":"Standard"}}}
```

### 5. Sharing limits in Managed Environments
Make sure canvas apps can't be shared with security groups or with more than X people.
```http
GET   {bap}/environments/{env}?api-version=2021-04-01   → governanceConfiguration.settings.extendedSettings
PATCH {bap}/environments/{env}?api-version=2021-04-01
{"properties":{"governanceConfiguration":{"protectionLevel":"Standard","settings":{"extendedSettings":
 {"limitSharingMode":"excludeSharingToSecurityGroups","maxLimitUserSharing":"20"}}}}}
```

### 6. Assign environment groups
Automatically assign new environments to an environment group with predefined rules, based on naming prefix.
```http
GET  {ppapi}/environmentmanagement/environmentGroups?api-version=2022-03-01-preview
POST {ppapi}/environmentmanagement/environmentGroups/{groupId}/addEnvironment/{envId}?api-version=2022-03-01-preview
```

### 7. Backup before deployments
Create a labeled manual backup before every production deployment.
```http
GET  https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/environments/{env}/backups?api-version=2021-04-01
POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/environments/{env}/backups?api-version=2021-04-01
{"label":"Pre-deployment 2026-09-24"}
```

### 8. Capacity warning
Monitor database, file and log capacity per environment and warn at 80%.
```http
GET  {bap}/environments?api-version=2021-04-01&$expand=properties.capacity   → capacityType, actualConsumption
POST {dv}/cr_capacityalerts   {"cr_envid":"<envId>","cr_type":"Database","cr_usedmb":8200}
```
The notification itself is easiest via the Teams connector's "Post message in a chat or channel" action.

### 9. Tenant settings drift
Compare tenant settings against a saved baseline daily, and reset or flag deviations.
```http
POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/listTenantSettings?api-version=2020-10-01   {}
POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/updateTenantSettings?api-version=2020-10-01
{"disableTrialEnvironmentCreationByNonAdminUsers":true}
```
Note: reading tenant settings is actually a `POST`.

### 10. Monitor tenant isolation
Check the tenant isolation policy and allowed partner tenants for changes.
```http
GET https://api.bap.microsoft.com/providers/PowerPlatform.Governance/v1/tenants/{tenantId}/tenantIsolationPolicy?api-version=2020-06-01
PUT (same URL)   {"properties":{"isDisabled":false,"allowedTenants":[{"tenantId":"<partnerTenant>","direction":{"inbound":true,"outbound":false}}]}}
```

## DLP and connectors (11–16)

### 11. DLP snapshot and change log
Back up every DLP policy daily and report differences from the previous day.
```http
GET  https://api.bap.microsoft.com/providers/PowerPlatform.Governance/v2/policies
POST SharePoint "Create file" → /DLP-Backups/2026-09-24.json
```

### 12. Auto-assign a new environment to a DLP policy
As soon as flow #2 creates an environment, add it to the matching policy.
```http
GET   https://api.bap.microsoft.com/providers/PowerPlatform.Governance/v2/policies/{policyId}
PATCH https://api.bap.microsoft.com/providers/PowerPlatform.Governance/v2/policies/{policyId}
{"environments":[…existing…,{"id":"/providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{env}","name":"{env}","type":"Microsoft.BusinessAppPlatform/scopes/environments"}]}
```

### 13. Review custom connectors
Catch new custom connectors and route them into a security review.
```http
GET  {pa}/apis?api-version=2016-11-01   → isCustomApi, properties.createdBy
POST {dv}/cr_connectorreviews   {"cr_name":"<connector>","cr_status":"Open","cr_owner":"<upn>"}
```

### 14. Remove orphaned connections
Find connections owned by departed users and delete them after a grace period.
```http
GET    {pa}/connections?api-version=2016-11-01   → check properties.createdBy.id against Entra
DELETE {pa}/apis/{connectorId}/connections/{connectionName}?api-version=2016-11-01
```

### 15. Flows suspended by DLP
Detect flows suspended for a DLP violation and notify the owner with an explanation.
```http
GET  {flow}/v2/flows?api-version=2016-11-01   → properties.state = "Suspended", flowSuspensionReason
POST {dv}/cr_dlpviolations   {"cr_flowid":"<flowId>","cr_reason":"<reason>","cr_owner":"<upn>"}
```

### 16. Detect flows with HTTP actions
Search flow definitions for HTTP actions or external endpoints.
```http
GET  {dv}/workflows?$filter=category eq 5&$select=name,clientdata,_ownerid_value
POST {dv}/cr_flowreviews   {"cr_flowid":"<workflowId>","cr_finding":"HTTP action to an external URL"}
```
`category eq 5` returns modern cloud flows; `clientdata` holds the JSON definition, where you search for `"type":"Http"`.

## Apps (17–22)

### 17. App inventory
Collect all canvas apps with owner, connectors and last-modified date.
```http
GET  {pa}/apps?api-version=2016-11-01   → properties.owner, connectionReferences, lastModifiedTime
POST {dv}/cr_appinventories   {"cr_appid":"<appId>","cr_name":"<displayName>","cr_owner":"<upn>"}
```

### 18. Remove tenant-wide sharing
Find apps shared with "everyone in the organization" and remove that share after approval.
```http
GET  {pa}/apps/{appId}/permissions?api-version=2016-11-01   → principal.type = "Tenant"
POST {pa}/apps/{appId}/modifyPermissions?api-version=2016-11-01   {"delete":[{"id":"<roleAssignmentId>"}]}
```

### 19. Reassign orphaned apps
Transfer apps of departed owners to their manager.
```http
GET  {graph}/users/{ownerId}?$select=accountEnabled   → 404 or false = orphaned
POST {pa}/apps/{appId}/modifyAppOwner?api-version=2016-11-01
{"roleForOldAppOwner":"CanView","newAppOwner":"<managerObjectId>"}
```

### 20. Delete inactive apps
Present apps with no change in 180 days to their owner for confirmation, delete after rejection or a deadline.
```http
GET    {pa}/apps?api-version=2016-11-01   → lastModifiedTime < today-180
DELETE {pa}/apps/{appId}?api-version=2016-11-01
```
Usage data isn't available via this API — the CoE Starter Kit or Admin Center analytics cover that instead.

### 21. Roles for model-driven apps
Make sure model-driven apps are only assigned their intended security roles.
```http
GET  {dv}/appmodules?$select=name,uniquename&$expand=appmoduleroles_association($select=name)
POST {dv}/appmodules(<appModuleId>)/appmoduleroles_association/$ref   {"@odata.id":"{dv}/roles(<roleId>)"}
```

### 22. Review Power Pages sites
Detect public sites and document them so they go through review.
```http
GET  {ppapi}/powerpages/environments/{env}/websites?api-version=2022-03-01-preview   → siteVisibility
POST {dv}/cr_sitereviews   {"cr_siteurl":"<url>","cr_visibility":"Public"}
```

## Cloud flows and desktop flows (23–30)

### 23. Flow inventory
Capture every flow per environment with state, trigger and owner.
```http
GET  {flow}/v2/flows?api-version=2016-11-01
POST {dv}/cr_flowinventories   {"cr_flowid":"<flowId>","cr_state":"Started","cr_owner":"<upn>"}
```

### 24. Daily error report
Summarize failed runs from the Dataverse flow-runs table.
```http
GET  {dv}/flowruns?$filter=status eq 'Failed' and starttime ge 2026-09-23T00:00:00Z&$select=name,starttime,errorcode,errormessage,_workflow_value
POST {dv}/cr_dailyerrorreports   {"cr_date":"2026-09-24","cr_failedcount":17}
```
The `flowruns` table only contains runs from flows saved in Dataverse (solution-aware flows).

### 25. Restart suspended flows
Once the root cause is fixed (say, a DLP adjustment), automatically re-enable the affected flows.
```http
GET  {flow}/v2/flows?api-version=2016-11-01   → state = "Suspended"
POST {flow}/flows/{flowId}/start?api-version=2016-11-01
```

### 26. Reassign orphaned flows
Transfer solution-aware flows of departed employees to their manager.
```http
GET   {dv}/workflows?$filter=category eq 5&$expand=ownerid($select=isdisabled,fullname)
PATCH {dv}/workflows(<workflowId>)   {"ownerid@odata.bind":"/systemusers(<managerSystemUserId>)"}
```

### 27. Service account as co-owner
Automatically add a service account as co-owner on business-critical flows.
```http
GET  {flow}/flows/{flowId}/permissions?api-version=2016-11-01
POST {flow}/flows/{flowId}/modifyPermissions?api-version=2016-11-01
{"put":[{"properties":{"principal":{"id":"<serviceAccountObjectId>","type":"User"},"roleName":"CanEdit"}}]}
```

### 28. Emergency stop
Stop a flow instantly via a Teams adaptive card — useful for infinite loops or a data leak in progress.
```http
GET  {flow}/flows/{flowId}?api-version=2016-11-01
POST {flow}/flows/{flowId}/stop?api-version=2016-11-01
```

### 29. Clean up old disabled flows
Delete flows disabled for more than 90 days, after checking with the owner.
```http
GET    {flow}/v2/flows?api-version=2016-11-01   → state = "Stopped", lastModifiedTime < today-90
DELETE {flow}/flows/{flowId}?api-version=2016-11-01
```

### 30. Monitor desktop flows and machines
Report offline machines and failed desktop-flow sessions.
```http
GET  {dv}/flowmachines?$select=name,statuscode,lastheartbeatdate
GET  {dv}/flowsessions?$filter=statuscode eq <Failed>&$select=startedon,errorcode,_regardingobjectid_value
POST {dv}/cr_rpaincidents   {"cr_machine":"<name>","cr_issue":"No heartbeat for 2h"}
```

## Copilot Studio and AI (31–43)

### 31. Agent inventory
Capture every Copilot Studio agent per environment with owner, publish date and authentication mode.
```http
GET  {dv}/bots?$select=name,schemaname,publishedon,statecode,authenticationmode,accesscontrolpolicy,_ownerid_value
POST {dv}/cr_agentinventories   {"cr_botid":"<botId>","cr_name":"<name>","cr_publishedon":"<date>"}
```

### 32. Agents without authentication
Detect agents reachable without Entra ID sign-in and raise a security ticket.
```http
GET  {dv}/bots?$filter=authenticationmode eq 1&$select=name,_ownerid_value
POST {dv}/cr_securitytickets   {"cr_title":"Agent without authentication","cr_botid":"<botId>"}
```
Verify the exact option-set value for "no authentication" in your own environment.

### 33. Review and revoke agent shares
Regularly check who an agent is shared with and remove unwanted shares.
```http
GET  {dv}/RetrieveSharedPrincipalsAndAccess(Target=@t)?@t={'@odata.id':'bots(<botId>)'}
POST {dv}/RevokeAccess
{"Target":{"botid":"<botId>","@odata.type":"Microsoft.Dynamics.CRM.bot"},
 "Revokee":{"systemuserid":"<userId>","@odata.type":"Microsoft.Dynamics.CRM.systemuser"}}
```

### 34. Review on publish
A Dataverse "row modified" trigger on the `bot` table's `publishedon` column starts a review of topics and knowledge sources.
```http
GET  {dv}/botcomponents?$filter=_parentbotid_value eq <botId>&$select=name,componenttype,schemaname,data
POST {dv}/cr_agentreviews   {"cr_botid":"<botId>","cr_trigger":"Published","cr_status":"Open"}
```

### 35. Public websites as knowledge source
Detect agents using public websites as a knowledge source and check those against an allowlist.
```http
GET  {dv}/botcomponents?$filter=_parentbotid_value eq <botId>&$select=name,data   → evaluate URLs inside data
POST {dv}/cr_knowledgefindings   {"cr_botid":"<botId>","cr_url":"https://…","cr_allowed":false}
```

### 36. Archive and analyze conversation transcripts
Export transcripts before the default 30-day retention expires, and analyze them for topics or escalations.
```http
GET  {dv}/conversationtranscripts?$filter=createdon lt 2026-08-30T00:00:00Z&$select=name,content,conversationstarttime,_bot_conversationtranscriptid_value
POST SharePoint/Azure Blob "Create file" → /Transcripts/<botName>/<id>.json
```

### 37. Usage metrics per agent
Store the weekly session count per agent as a trend.
```http
GET  {dv}/conversationtranscripts?$apply=filter(createdon ge 2026-09-17T00:00:00Z)/groupby((_bot_conversationtranscriptid_value),aggregate($count as sessions))
POST {dv}/cr_agentkpis   {"cr_botid":"<botId>","cr_week":"2026-39","cr_sessions":412}
```
Sessions aren't the same as billed consumption (Copilot Credits) — see actual consumption in the Power Platform admin center under Licensing and Capacity.

### 38. Monitor tenant AI and Copilot settings
Check the Copilot and AI-related keys in tenant settings (e.g. under `powerPlatform.intelligence`) against a baseline.
```http
POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/listTenantSettings?api-version=2020-10-01   {}
POST https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/updateTenantSettings?api-version=2020-10-01   {…deviating key reset to baseline…}
```
For EU-region tenants, the cross-geography data movement setting for generative AI is also worth checking directly in the admin center.

### 39. Reassign agent ownership
Transfer agents of departed employees to their manager or a team account.
```http
GET   {dv}/bots?$select=name&$expand=owninguser($select=isdisabled,fullname)
PATCH {dv}/bots(<botId>)   {"ownerid@odata.bind":"/systemusers(<newOwnerId>)"}
```

### 40. Inactive or never-published agents
Present agents unpublished for 90+ days to their owner, and revoke all shares if there's no response.
```http
GET  {dv}/bots?$filter=publishedon lt 2026-06-26T00:00:00Z or publishedon eq null&$select=name,_ownerid_value
POST {dv}/RevokeAccess   (as in #33, per shared principal)
```
Actual deletion is worth doing manually in Copilot Studio, so every component is removed cleanly.

### 41. AI Builder models and consumption
Capture models with owner and status, and reassign orphaned models.
```http
GET   {dv}/msdyn_aimodels?$select=msdyn_name,statecode,_ownerid_value
GET   {dv}/msdyn_aievents?$filter=createdon ge 2026-09-01T00:00:00Z   → consumption per model
PATCH {dv}/msdyn_aimodels(<modelId>)   {"ownerid@odata.bind":"/systemusers(<newOwnerId>)"}
```

### 42. Expiring secrets on agent app registrations
Agents using manual Entra authentication break when their client secret expires; this flow warns in time and creates a new secret.
```http
GET  {graph}/applications?$select=displayName,appId,passwordCredentials   → endDateTime < today+30
POST {graph}/applications/{objectId}/addPassword   {"passwordCredential":{"displayName":"rotated-2026-09"}}
```
The new secret still needs to be entered in the agent's authentication settings afterward.

### 43. DLP baseline for Copilot Studio
Make sure Copilot Studio connectors like "Chat without Microsoft Entra ID authentication in Copilot Studio" or "Knowledge source with public websites and data" are blocked in every non-sandbox environment.
```http
GET   https://api.bap.microsoft.com/providers/PowerPlatform.Governance/v2/policies/{policyId}   → check connectorGroups
PATCH https://api.bap.microsoft.com/providers/PowerPlatform.Governance/v2/policies/{policyId}
{"connectorGroups":[…,{"classification":"Blocked","connectors":[…,{"id":"<connectorId>","name":"<name>","type":"Microsoft.PowerApps/apis"}]}]}
```

## Dataverse, ALM and security (44–50)

### 44. Solution backup
Export key solutions nightly and store them in SharePoint or Git.
```http
POST {dv}/ExportSolution   {"SolutionName":"CoreApps","Managed":false}   → ExportSolutionFile (Base64)
PUT  https://api.github.com/repos/{org}/{repo}/contents/solutions/CoreApps.zip   {"message":"Nightly backup","content":"<base64>","sha":"<sha>"}
```

### 45. Set environment variables after deployment
Automatically fill in missing values for the target environment after import.
```http
GET   {dv}/environmentvariabledefinitions?$select=schemaname&$expand=environmentvariabledefinition_environmentvariablevalue($select=value)
POST  {dv}/environmentvariablevalues   {"value":"https://prod.contoso.ch","EnvironmentVariableDefinitionId@odata.bind":"/environmentvariabledefinitions(<defId>)"}
PATCH {dv}/environmentvariablevalues(<valueId>)   {"value":"https://prod.contoso.ch"}
```

### 46. Link connection references
After an import, link unconnected connection references to the service account's connections.
```http
GET   {dv}/connectionreferences?$filter=connectionid eq null&$select=connectionreferencelogicalname,connectorid
PATCH {dv}/connectionreferences(<refId>)   {"connectionid":"<connectionName>"}
```

### 47. Audit the System Administrator role
Monthly, list all System Admins per environment and remove any unapproved assignments.
```http
GET    {dv}/roles?$filter=name eq 'System Administrator'&$expand=systemuserroles_association($select=fullname,domainname)
DELETE {dv}/systemusers(<userId>)/systemuserroles_association/$ref?$id={dv}/roles(<roleId>)
```

### 48. Maker onboarding in development environments
After an approved request, sync the user into the environment immediately and grant the Environment Maker role.
```http
POST {bap}/environments/{env}/addUser?api-version=2020-10-01   {"ObjectId":"<entraObjectId>"}
GET  {dv}/systemusers?$filter=azureactivedirectoryobjectid eq <entraObjectId>&$select=systemuserid
POST {dv}/systemusers(<userId>)/systemuserroles_association/$ref   {"@odata.id":"{dv}/roles(<envMakerRoleId>)"}
```

### 49. Provision the application user
Automatically create the application user for your admin app registration in every new environment.
```http
GET  {dv}/businessunits?$filter=_parentbusinessunitid_value eq null&$select=businessunitid
POST {dv}/systemusers   {"applicationid":"<appId>","businessunitid@odata.bind":"/businessunits(<rootBuId>)"}
```
Assign a security role afterward, the same way as in #48.

### 50. Enforce auditing
In production environments, make sure auditing and user-access auditing are on and retention is correct.
```http
GET   {dv}/organizations?$select=isauditenabled,isuseraccessauditenabled,auditretentionperiodv2
PATCH {dv}/organizations(<orgId>)   {"isauditenabled":true,"isuseraccessauditenabled":true,"auditretentionperiodv2":365}
```

---

## Suggested build order

Every write action should run in **report-only mode** first. Only enable `PATCH`, `PUT`, create or quarantine actions once detection has proven stable — and any destructive or security-relevant action belongs behind an approval, with a full audit record in the flow.

1. **#1, 17, 23 and 31** — full inventory as the data foundation
2. **#14, 19 and 39** — orphaned resources and agents
3. **#11, 13, 15 and 41** — DLP and connector risk
4. **#24 and 8** — operations and capacity
5. **#32, 34, 36, 42 and 43** — Copilot Studio governance

## Further reading

Microsoft's own reference documentation for the Power Platform API, the inventory API, and the Copilot Studio REST API is worth keeping close while adapting these:

- [Microsoft Power Platform API reference](https://learn.microsoft.com/en-us/rest/api/power-platform/)
- [Power Platform inventory API](https://learn.microsoft.com/en-us/power-platform/admin/inventory-api)
- [Power Platform inventory sample queries](https://learn.microsoft.com/en-us/power-platform/admin/inventory-sample-queries)
- [Power Platform for Admins V2 connector reference](https://learn.microsoft.com/en-us/connectors/powerplatformadminv2/)
- [Power Apps for Admins connector reference](https://learn.microsoft.com/en-us/connectors/powerappsforadmins/)
- [Bots (Copilot Studio) REST API reference](https://learn.microsoft.com/en-us/rest/api/power-platform/copilotstudio/bots)
- [Agent (bot) table reference](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/bot)
- [Data loss prevention policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
