---
layout: page
title: Admin Flows
icon: fas fa-bolt
order: 2
permalink: /flows/
toc: true
description: "Ten free Power Automate flows for Power Platform admins: inventories for environments, apps, flows and Copilot Studio agents, plus a System Administrator role audit, DLP visibility, orphaned-resource reassignment and capacity monitoring, as a starting point for admin automation."
---

Ten flows to start automating Power Platform administration: four inventories (environments, apps, cloud flows, Copilot Studio agents), a security check (System Administrator role audit), DLP policy change tracking, automatic reassignment for orphaned apps and flows, DLP suspension notifications, and capacity warnings. Build them in this order and you already have more visibility into your tenant than most CoE teams manage in a year. Each one below spells out what it actually does, the exact actions involved, and what it needs — these are the same 10 flows, unchanged, as they ship inside the full AdminHelper solution, not a simplified stand-in for it.

## Your first 10 flows

**Before you start:** eight of these ten need nothing but the free **Power Platform for Admins**, **Power Platform for Admins V2**, **Power Apps for Admins**, **Power Automate for Admins** and **Microsoft Teams** connectors — no custom Dataverse tables, no premium licence. The Power Platform admin inventory (the same data source behind `pac admin list-environments` and the Power Platform admin center) already gives you environments, apps, flows and Copilot Studio agents tenant-wide in one paged query, so there is nothing to build to hold that data yourself. Two flows (owner reassignment for apps and flows) call Microsoft Graph through your own app registration, which Power Automate treats as a premium action. One flow (the System Administrator role audit) needs the Dataverse connector, because role assignments are Dataverse data that no admin API exposes. Where a flow needs an environment variable (a Teams channel ID, a threshold, an account to protect from changes), the step below names it.

### Starter flow 1: Environment inventory

**What it does:** Reads every environment in your tenant once a day - type, region, whether it is managed, whether it has Dataverse, when it was created - and posts an inventory table to Teams.

**Who needs it:** Power Platform admins and CoE teams who want a daily, reliable answer to "how many environments do we actually have" instead of a guess.

**Why it matters:** Every other governance control - DLP, backups, capacity, security review - is scoped per environment. If the environment list is incomplete or stale, everything built on top of it inherits that blind spot.

**Flow steps:**

1. Runs daily at 01:30.
2. Reads all environments of the tenant through the Power Platform for Admins connector, with paging.
3. Normalises each environment into name, type, region, managed status, Dataverse status and creation date.
4. Builds an HTML table with the first rows and a note on how many more exist.
5. Posts the inventory to the admin Teams channel (or a flow bot chat).

**Permissions and licence:** Standard licence, no Premium connector. The connection account needs a Power Platform administrator role. Teams posting needs a Teams connection. The flow is read-only and stores nothing.

### Starter flow 2: App inventory

**What it does:** Reads every canvas app, model-driven app and code app in your tenant from the Power Platform inventory once a night and posts a report to Teams: totals by type, apps per environment, and the apps that need a look first (quarantined or not modified for a long time).

**Who needs it:** Power Platform admins and CoE teams who want an up-to-date app list without clicking through every environment in the admin center.

**Why it matters:** You cannot govern what you cannot see. A daily inventory shows where apps pile up, which ones are quarantined or have not been touched for months, and keeps the list complete: if the inventory cannot be read in full, the flow says so instead of reporting a partial list.

**Flow steps:**

1. Runs daily at 01:45 and stops safely if the inactivity threshold or the notification target is missing or invalid.
2. Reads all canvas, model-driven and code apps tenant-wide in one query, page by page, with the environment name joined in.
3. Checks that every row was read by comparing the count with the total reported by the inventory, and stops with a message if rows are missing.
4. Normalises the data and flags apps in quarantine and apps not modified for longer than your threshold.
5. Sorts the list so that the apps that need attention come first.
6. Counts apps by type, by environment and by finding.
7. Posts the key figures, an apps-per-environment table and an app table to the admin Teams channel (or a flow bot chat), and keeps the full list in the run result.
8. Reports errors to the admin team.

**Permissions and licence:** Standard licence, no Premium connector. The connection account needs a Power Platform administrator role. Teams posting needs a Teams connection. The flow is read-only. The inventory shows changes with a delay of up to 15 minutes and does not contain sharing counts or usage.

### Starter flow 3: Cloud flow inventory

**What it does:** Reads every cloud flow and agent flow of your tenant from the Power Platform inventory once a day and posts a compact inventory to Teams: how many flows exist, how many are active, turned off or suspended, how they are triggered, which environments hold the most flows and which flows the platform has suspended.

**Who needs it:** Power Platform admins and CoE teams who want to know what is running in their tenant, and who need to hear about suspended flows before a business process silently stops.

**Why it matters:** Nobody can govern flows they cannot count. Suspended flows stop working without any noise, and flow sprawl grows unnoticed. A short daily report with real numbers turns that into a routine check, and an incomplete read is reported as a failure instead of showing wrong figures.

**Flow steps:**

1. Runs daily at 02:00 and stops safely if no Teams target is configured.
2. Reads all cloud flows and agent flows of the tenant from the Power Platform inventory, page by page.
3. Adds the environment name to every flow, sorts the query so that paging is stable, and checks that no flows are missing compared with the total of the inventory (and that the inventory is not empty). Otherwise it stops and reports.
4. Translates status and trigger type into plain labels and collects the suspended flows.
5. Counts flows by type, status, trigger and environment, plus the number of distinct owners, without any loops.
6. Builds HTML tables: flows per environment (top 50) and suspended flows (up to 50).
7. Posts the report to the admin Teams channel (or a flow bot chat).
8. Reports errors to the admin team and records the key figures in the run result.

**Permissions and licence:** Standard licence, no Premium connector. The connection account needs a Power Platform administrator role and a user sign-in (service principals are not supported by the inventory action). Teams posting needs a Teams connection. The flow is read-only and stores nothing.

### Starter flow 4: Copilot Studio agent inventory

**What it does:** Reads every Copilot Studio agent in your tenant from the Power Platform inventory once a day and posts a report to Teams: how many agents exist, how many are quarantined, managed (built-in) or shared with the whole tenant, and which agents have never been published or not republished in a while.

**Who needs it:** Power Platform admins and CoE teams who want a daily, tenant-wide list of Copilot Studio agents without opening every environment, and who need a starting point before running the more specialised agent flows (authentication, sharing, publishing, ownership).

**Why it matters:** Agents multiply fast once Copilot Studio is switched on, and a forgotten, unpublished or over-shared agent is a governance risk nobody sees until something breaks. A daily inventory keeps the list complete: if the inventory cannot be read in full, the flow says so instead of reporting a partial list.

**Flow steps:**

1. Runs daily at 02:15 and stops safely if the inactivity threshold or the notification target is missing or invalid.
2. Reads all Copilot Studio agents tenant-wide in one query, page by page, with the environment name joined in.
3. Checks that every row was read by comparing the count with the total reported by the inventory, and stops with a message if rows are missing.
4. Normalises the data and flags agents in quarantine, never published, or not republished for longer than your threshold.
5. Sorts the list so that the agents that need attention come first.
6. Counts agents by environment, quarantine status, managed status, publishing status and sharing with the whole tenant.
7. Posts the key figures, an agents-per-environment table and an agent table to the admin Teams channel (or a flow bot chat), and keeps the full list in the run result.
8. Reports errors to the admin team.

**Permissions and licence:** Standard licence, no Premium connector. The connection account needs a Power Platform administrator role. Teams posting needs a Teams connection. The flow is read-only. The inventory shows changes with a delay of up to 15 minutes, does not contain an access policy field, and reports only the last publish date, not a general last-modified date.

### Starter flow 5: System Administrator role audit

**What it does:** Checks, once a month, who holds the System Administrator security role in every Dataverse environment of your tenant (users and teams, across all business units) and compares the holders with an approved list you maintain. It posts a summary to Teams every month, even when nothing is wrong, so you have proof the check ran.

**Who needs it:** Power Platform admins and CoE teams who need a recurring, tenant-wide answer to "who can do anything in this environment" without opening the security role of every environment by hand.

**Why it matters:** System Administrator is the most powerful role in an environment. Role assignments drift over time as people change teams or leave projects, and a stale assignment is easy to miss in a busy tenant. A short monthly report that only speaks up about unapproved holders, and says "all clear" otherwise, gets read and keeps the role's membership accountable.

**Flow steps:**

1. Runs monthly on day 2 at 10:00 and stops safely if the notification target or the approved list format is invalid.
2. Reads all environments and keeps the ones with a Dataverse database that are provisioned and running.
3. In each of those environments, reads the System Administrator role for every business unit, together with its user and team members, with paging and a safety check against Dataverse's per-relationship row limit.
4. Sorts members into users, teams, application users, non-interactive/support accounts, delegated admin accounts and disabled accounts; only users and teams are compared against the approved list.
5. Flags every user or team whose Entra object ID is not on the approved list (a missing ID counts as not approved).
6. Builds an overview table per environment (holders, evaluated, not approved) and a table of the specific accounts and teams that are not approved.
7. Posts the summary to the admin Teams channel (or a flow bot chat) every month, with counts even when there is no finding.
8. Reports errors per environment without losing the results of the other environments, and records all counts in the run result.

**Permissions and licence:** Premium licence (Dataverse connector). The connection account needs an Application User with read access to `roles`, `systemuserroles` and `teamroles` in every environment that should be checked, plus the Power Platform administrator role used by the other connections. Teams posting needs a Teams connection. The flow is read-only; it never changes a role assignment.

### Starter flow 6: DLP policy snapshot and change log

**What it does:** Reads all DLP policies of your tenant every night, stores them as a daily snapshot file in SharePoint and compares them with the previous snapshot. It posts new, deleted and changed policies to Teams, and stays quiet when nothing changed.

**Who needs it:** Power Platform admins and CoE teams who want a history of their DLP policies and want to know when someone changes them, without checking the admin center by hand.

**Why it matters:** DLP policies decide which connectors makers can combine. A changed connector group can suspend flows or open a data path unnoticed. The daily files give you the state before a change, so you can see what happened and put it back.

**Flow steps:**

1. Runs daily at 01:00 and stops safely if the SharePoint site, library, alert target or limit is missing or invalid.
2. Reads all DLP policies through the Power Platform for Admins connector and stops instead of comparing if the list is incomplete.
3. Checks the DLP-Snapshots folder and picks the newest earlier snapshot as the comparison base. The first run has none and is announced as such.
4. Compares by policy ID: new policies, deleted policies, and changed policies with the affected areas (connector groups, environments, name or default class).
5. Builds HTML tables with the last editor and posts to the admin Teams channel (or a flow bot chat) only if something differs, or on the first run.
6. Stops with a message if more policies disappeared than the limit allows, so a partial list never replaces the comparison base.
7. Saves the daily snapshot file, only when the test mode is off and only once per day.
8. Reports errors to the admin team and records all counts in the run result.

**Permissions and licence:** Standard licence, no Premium connector. The connection account needs a Power Platform administrator role for the policies and write access to the snapshot folder in SharePoint. Teams posting needs a Teams connection. The flow changes no policy and only writes the snapshot file. Restrict access to the folder, because the files contain the display names of policy creators and editors.

### Starter flow 7: Reassign orphaned apps

**What it does:** Finds canvas apps whose owner account was deleted or disabled in Microsoft Entra, and adds the former owner's manager (or a configured fallback owner) as the new owner, so the app stays maintainable.

**Who needs it:** Power Platform admins and CoE teams who want to catch orphaned apps before they fail silently because nobody can open or reconfigure them after the original maker has left.

**Why it matters:** People leave, and their apps do not. An app with a deleted or deactivated owner keeps running on borrowed connections until it breaks, and then nobody has the rights to fix it. Catching this automatically, with a manager or a named fallback stepping in, keeps the app alive instead of discovering the gap during an incident.

**Flow steps:**

1. Runs daily at 07:45 and stops safely if the fallback owner setting is missing or invalid.
2. Reads every canvas app of the tenant from every environment, with its owner.
3. Checks every owner ID against Microsoft Entra to find deleted or disabled accounts, and builds today's candidate list from apps whose current owner is still orphaned - an app already transferred to an active successor on a previous run is automatically excluded, because its owner is no longer deleted or disabled.
4. Looks up the manager of a disabled owner, or falls back to the configured fallback owner if there is none or the account is fully deleted.
5. Transfers ownership to the successor for the remaining candidates, behind a dry-run switch, a circuit breaker and a protected-accounts list. The previous owner keeps view access unless their account no longer exists.
6. Posts a report to the admin Teams channel (or a flow bot chat) with counts and the affected apps, and a note that the new owner still needs to reconnect the app's connections.

**Permissions and licence:** Premium, because the flow calls Microsoft Graph through an app registration (client ID, tenant ID and client secret as environment variables, application permission Directory.Read.All with admin consent). The Power Platform connection needs an administrator role. No Dataverse connector is used.

### Starter flow 8: Reassign orphaned flows

**What it does:** Finds cloud flows whose owner account was deleted or disabled in Microsoft Entra, and adds the former owner's manager (or a configured fallback owner) as a co-owner with edit rights, so the flow stays maintainable.

**Who needs it:** Power Platform admins and CoE teams who want to catch orphaned flows before they fail silently because nobody can open, fix or reconnect them after the original maker has left the organisation.

**Why it matters:** People leave, and their flows do not. A flow with a deleted or deactivated owner can keep running on borrowed connections until it breaks, and then nobody has the rights to repair it. Catching this automatically, with a manager or a named fallback stepping in as co-owner, keeps business processes alive instead of discovering the gap during an incident.

**Flow steps:**

1. Runs daily at 08:15 and stops safely if the configuration (report target, fallback owner, Microsoft Graph app registration) is incomplete.
2. Reads every cloud flow of the tenant from the Power Platform inventory, with its owner ID, environment and status.
3. Checks every owner ID against Microsoft Entra to find deleted or disabled accounts.
4. Looks up the manager of a disabled owner, or falls back to the configured fallback owner if there is none.
5. Skips flows that are part of a Dataverse solution (only counts and reports them) and flows that are turned off.
6. Checks whether the successor is already a co-owner before writing anything, so repeated runs do not repeat work.
7. Adds the successor as a co-owner (edit rights) for the remaining candidates, behind a dry-run switch, a circuit breaker and a protected-accounts list, and re-checks the result after a short delay.
8. Posts a report to the admin Teams channel (or a flow bot chat) with counts, the affected flows and a note about solution-bound flows that need a manual owner change in Dataverse.

**Permissions and licence:** Premium, because the flow calls Microsoft Graph through an app registration (client ID, tenant ID and client secret as environment variables, application permission Directory.Read.All with admin consent, required because the flow calls `/directoryObjects/getByIds`). The Power Platform connection needs an administrator role. No Dataverse connector is used.

### Starter flow 9: Flag flows suspended by DLP

**What it does:** Every morning, reads all cloud flows and agent flows of your tenant that the platform has suspended from the Power Platform inventory and posts them to Teams: flow name with a direct link, environment, type, trigger, date of the last save and days since then, with a marker for flows saved in the last 24 hours.

**Who needs it:** Power Platform admins and CoE teams who need to know when business processes stop without any noise, for example after a change to a DLP policy.

**Why it matters:** A suspended flow does not run any more and nobody is told. DLP enforcement, permanent errors, too many API calls or a missing licence can all switch a flow off. A daily list with a link per flow turns that into a routine check instead of a surprise. An incomplete read is reported as a failure, and a connection that sees no flows is reported as well, so silence really means that nothing is suspended.

**Honest scope:** The Power Platform inventory tells you that a flow is suspended, but not why and not when. The report therefore does not claim that DLP is the cause. It lists every suspended flow and points to the flow details page, where the platform shows the reason. Filtering for DLP violations only would need the Power Automate Management connector ("List flows as Admin"), which is not part of this solution.

**Flow steps:**

1. Runs daily at 06:45 and stops safely if no Teams target is configured.
2. Checks that the connection account sees flows at all, otherwise it stops and reports.
3. Reads only the suspended cloud flows and agent flows of the tenant from the Power Platform inventory, page by page, with the environment name and a stable sort order.
4. Compares the number of rows read with the total of the inventory. If flows are missing, it stops and reports instead of sending a partial list.
5. Builds a clear list: escaped name, environment, link to the details page, days since the last save and a marker for the last 24 hours.
6. Posts the report to the admin Teams channel (or a flow bot chat), up to 30 rows with the remaining count. If nothing is suspended, it stays quiet.
7. Reports errors to the admin team and records the key figures in the run result.

**Permissions and licence:** Standard licence, no Premium connector. The connection account needs a Power Platform administrator role and a user sign-in (service principals are not supported by the inventory action). Teams posting needs a Teams connection. The flow is read-only and stores nothing.

### Starter flow 10: Capacity warning

**What it does:** Checks your tenant's Dataverse capacity (database, file and log) every morning and compares the usage with a threshold you define. It posts to Teams only when a threshold is reached or a value is missing.

**Who needs it:** Power Platform admins and CoE teams who want to hear about capacity shortages before environments get blocked, without checking the admin center every day.

**Why it matters:** Running out of capacity stops new environments and can block Dataverse operations. A quiet flow that speaks up only when it matters gets read, and missing data is reported instead of being treated as fine.

**Flow steps:**

1. Runs daily at 07:00 and stops safely if the threshold setting is missing or invalid.
2. Reads the tenant capacity through the Power Platform for Admins connector.
3. Picks the database, file and log entries and checks that each one has exactly one entry with usable numbers in MB.
4. Calculates the usage in percent of the entitled capacity for each type.
5. Sets the status per type: warning, ok, not used or not assessable.
6. Builds an HTML table with usage and capacity in GB, usage in percent and status.
7. Posts to the admin Teams channel (or a flow bot chat) only if a type reaches the threshold or cannot be assessed.
8. Reports errors to the admin team and records all values in the run result.

**Permissions and licence:** Standard licence, no Premium connector. The connection account needs a Power Platform administrator role (verified with an admin account). Teams posting needs a Teams connection. The flow is read-only. The used API action is currently in preview.

---

## Connectors and authentication

| Flow | Connector(s) | Licence |
|---|---|---|
| 1 Environment inventory | Power Platform for Admins | Standard |
| 2 App inventory | Power Platform for Admins V2 | Standard |
| 3 Cloud flow inventory | Power Platform for Admins V2 | Standard |
| 4 Copilot Studio agent inventory | Power Platform for Admins V2 | Standard |
| 5 System Administrator role audit | Power Platform for Admins, **Dataverse** | Premium |
| 6 DLP policy snapshot | Power Platform for Admins, SharePoint | Standard |
| 7 Reassign orphaned apps | Power Platform for Admins, Power Apps for Admins, **Microsoft Graph (HTTP)** | Premium |
| 8 Reassign orphaned flows | Power Platform for Admins V2, Power Automate for Admins, **Microsoft Graph (HTTP)** | Premium |
| 9 Flag flows suspended by DLP | Power Platform for Admins V2 | Standard |
| 10 Capacity warning | Power Platform for Admins V2 | Standard |

All ten post their reports through **Microsoft Teams** (a channel, or a 1:1 chat with the flow bot if no channel is configured).

For flows 7 and 8, Microsoft Graph is called with the built-in **HTTP with Microsoft Entra ID** action or a plain **HTTP** action with Azure AD OAuth — not a dedicated Graph connector. Register an app with the application permission `Directory.Read.All` (admin consent required) and store its tenant ID, client ID and client secret as environment variables; never paste a secret directly into an action. For flow 5, the connection account needs an **application user** in Dataverse with read access to `roles`, `systemuserroles` and `teamroles` in every environment you want audited.

A production admin flow generally follows this shape: trigger (recurrence or manual) → read the current state completely, with a check that the read was not cut off → filter and compare against your target or baseline → report, and only act behind a dry-run switch, a protected-accounts list and a circuit breaker once you trust the report. Treat an incomplete read as a failure, not as "nothing found" — a flow that silently reports a partial list is worse than one that stops and says so.

## Further reading

Microsoft's own reference documentation for the Power Platform admin APIs and the Copilot Studio REST API is worth keeping close while adapting these:

- [Microsoft Power Platform API reference](https://learn.microsoft.com/en-us/rest/api/power-platform/)
- [Power Platform inventory API](https://learn.microsoft.com/en-us/power-platform/admin/inventory-api)
- [Power Platform inventory sample queries](https://learn.microsoft.com/en-us/power-platform/admin/inventory-sample-queries)
- [Power Platform for Admins V2 connector reference](https://learn.microsoft.com/en-us/connectors/powerplatformadminv2/)
- [Power Apps for Admins connector reference](https://learn.microsoft.com/en-us/connectors/powerappsforadmins/)
- [Microsoft Graph users API reference](https://learn.microsoft.com/en-us/graph/api/resources/user)
- [Data loss prevention policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
