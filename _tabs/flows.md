---
layout: page
title: Admin Flows
icon: fas fa-bolt
order: 2
permalink: /flows/
toc: true
description: "Five free Power Automate flows for Power Platform admins: a complete inventory of environments, apps, flows and Copilot Studio agents, plus one security check, as a starting point for admin automation."
---

Five flows to start automating Power Platform administration: four inventories (environments, apps, cloud flows, Copilot Studio agents) plus one security check (System Administrator role audit). Build them in this order and you already have more visibility into your tenant than most CoE teams manage in a year. Each one below is spelled out completely — the Dataverse table to create, every action in the flow, and the JSON schema to parse — not just a pattern to figure out yourself.

This is the free starter set. The full **AdminHelper** package — all 50 flows, covering DLP monitoring, ownership and offboarding automation, Copilot Studio governance, ALM safeguards and Dataverse security — is a paid, ready-to-import solution available via [KMUpower](https://kmupower.com/) or [Power Platform Academy](https://www.powerplatformacademy.online/).

## Your first 5 flows

**Before you start:** create one solution to hold everything (e.g. "Admin Starter Kit"), and inside it the five tables below. Each flow uses the **Recurrence** trigger (daily, early morning) and the **Power Platform for Admins V2** / **Power Apps for Admins** connectors where available, falling back to a raw HTTP action with Azure AD OAuth for anything those connectors don't cover.

### Starter flow 1: Environment inventory

- **What it does:** reads every environment in the tenant daily — type, region, whether it has Dataverse — and writes it into one table you control.
- **Who needs it:** any admin who has ever answered "how many environments do we actually have?" with a guess.
- **Why it matters:** every other governance control — DLP, backups, security review — is scoped per environment. If the environment list is incomplete or stale, everything built on top of it inherits that blind spot.

1. **Create table** `cr_environment` with columns: `cr_name` (primary, text), `cr_environmentid` (text), `cr_type` (choice: Production / Sandbox / Trial / Developer / Default), `cr_region` (text), `cr_hasdataverse` (yes/no), `cr_lastsyncedon` (date/time).
2. **Trigger:** Recurrence — daily, 06:00.
3. **HTTP action** — `GET {bap}/environments?api-version=2021-04-01&$expand=properties.capacity` (Azure AD OAuth, audience `https://service.powerapps.com/`).
4. **Parse JSON** the response body with a schema built from a sample response (use "Generate from sample" in the flow designer and paste one real environment object).
5. **Apply to each** `value` in the parsed array → **Add a new row** (or **Update a row** if `cr_environmentid` already exists — check first with **List rows**, filter `cr_environmentid eq '<id>'`) in `cr_environment`, mapping `properties.displayName`, `name` (the environment ID), `properties.environmentSku`, `properties.location`, and whether `properties.linkedEnvironmentMetadata` is present.
6. **Error handling:** set the Apply-to-each's concurrency to sequential while testing, add a **Scope** around steps 3–5 with a parallel **Configure run after** branch on "has failed" that posts to a Teams channel with the error.

### Starter flow 2: App inventory

- **What it does:** loops through every environment and lists every canvas app, with its owner and last-modified date.
- **Who needs it:** CoE teams who need to answer "who owns this app" before that person leaves the company, not after.
- **Why it matters:** apps outlive the makers who build them. Without a standing inventory, "who owns this" turns into a Teams-channel archaeology exercise every time it comes up — usually at the worst moment.

1. **Create table** `cr_appinventory` with columns: `cr_name` (primary, text), `cr_appid` (text), `cr_owner` (text, UPN), `cr_environmentid` (text), `cr_lastmodifiedon` (date/time).
2. **Trigger:** Recurrence — daily, following the environment inventory flow.
3. **Apply to each** environment from `cr_environment` (List rows) → inside it, **HTTP**: `GET {pa}/apps?api-version=2016-11-01` (replace `{env}` with the current row's `cr_environmentid`).
4. **Parse JSON**, then **Apply to each** app → upsert into `cr_appinventory`, mapping `properties.displayName`, `name`, `properties.owner.email`, and `properties.lastModifiedTime`.
5. **Note:** this is a nested loop (environments → apps per environment) — watch the connector's throttling limits on large tenants and consider a **Delay** action between environment iterations.

### Starter flow 3: Cloud flow inventory

- **What it does:** the same pattern as the app inventory, but for cloud flows — captures state, owner and environment for every flow in the tenant.
- **Who needs it:** whoever gets paged when "a flow just stopped working" and has no way to check whether it was already known about.
- **Why it matters:** a suspended or stopped flow is invisible unless someone happens to open it. This turns that into a queryable table instead of a mystery — and it's what the "orphaned flow" and "flow suspended by DLP" flows later in the full 50 build on.

1. **Create table** `cr_flowinventory` with columns: `cr_name` (primary, text), `cr_flowid` (text), `cr_state` (choice: Started / Stopped / Suspended), `cr_owner` (text), `cr_environmentid` (text).
2. **Trigger:** Recurrence — daily.
3. **Apply to each** environment → **HTTP**: `GET {flow}/v2/flows?api-version=2016-11-01`.
4. **Parse JSON**, **Apply to each** flow → upsert into `cr_flowinventory`, mapping `properties.displayName`, `name`, `properties.state`, and the owner from `properties.creator.userId` (resolve to a UPN via a Microsoft Entra "Get user" action if you want a readable name instead of a GUID).
5. **Flag for follow-up:** add a condition — if `properties.state` equals `Suspended`, also write a row into a simple `cr_flowreview` table (or just send a Teams notification) so suspended flows don't silently disappear into the inventory unnoticed.

### Starter flow 4: Copilot Studio agent inventory

- **What it does:** pulls every Copilot Studio agent from Dataverse's `bot` table, including its authentication mode, owner and publish date.
- **Who needs it:** Security/Compliance teams who don't yet have a tenant-wide answer to "which of our agents can be reached without signing in."
- **Why it matters:** agents are the newest resource type on the platform and the easiest to lose track of — most CoE teams already have solid app and flow inventories, but nothing for Copilot Studio yet. This closes that gap before it becomes the next shadow-IT surface. Note this one looks different from the previous three: agents are Dataverse rows, not admin-API resources.

1. **Create table** `cr_agentinventory` with columns: `cr_name` (primary, text), `cr_botid` (text), `cr_publishedon` (date/time), `cr_authenticationmode` (text), `cr_owner` (text), `cr_environmentid` (text).
2. **Trigger:** Recurrence — daily.
3. **Apply to each** environment → **HTTP** (Dataverse Web API, OAuth audience is the environment's own URL): `GET {dv}/bots?$select=name,schemaname,publishedon,authenticationmode,_ownerid_value`.
4. **Parse JSON**, **Apply to each** agent → upsert into `cr_agentinventory`.
5. **The one check worth adding immediately:** a condition on `authenticationmode` — flag (Teams message or a review row) any agent whose value indicates no Entra ID authentication is configured. Verify the exact option-set value in your own environment first; it varies by Copilot Studio version.

### Starter flow 5: System Administrator role audit

- **What it does:** lists everyone holding the System Administrator role in every environment, monthly, and flags anyone not already reviewed.
- **Who needs it:** Security/Compliance and whoever owns access reviews — this is the one flow in the kit that's a control, not just visibility.
- **Why it matters:** System Administrator is full access to everything in an environment. That list only ever grows unless someone actively looks at it, so by the time an audit asks "who has admin and why," you want an answer that already exists instead of a scramble to produce one.

1. **Create table** `cr_adminroleaudit` with columns: `cr_name` (primary, text — e.g. "`<user> – <environment> – <date>`"), `cr_user` (text), `cr_environmentid` (text), `cr_flaggedon` (date/time), `cr_reviewed` (yes/no, default no).
2. **Trigger:** Recurrence — monthly is enough for this one; it doesn't change as often as the inventories.
3. **Apply to each** environment → **HTTP**: `GET {dv}/roles?$filter=name eq 'System Administrator'&$expand=systemuserroles_association($select=fullname,domainname)`.
4. **Parse JSON**, **Apply to each** user in the expanded association → **List rows** on `cr_adminroleaudit` filtered by that user and environment; if no existing unreviewed row, **Add a new row** with `cr_reviewed` = no.
5. **The actual governance step:** send the *new* rows (not the ones already reviewed last month) to whoever owns this decision — a Teams adaptive card with Approve/Revoke buttons is the natural next step once the basic flow is working, but even a plain summary email beats not looking at this list at all.

---

**Want the other 45?** These five cover inventory and one security check. The full **AdminHelper** package extends this into DLP monitoring, ownership and offboarding automation, Copilot Studio governance, ALM safeguards and Dataverse security — all 50 flows as one importable solution, built on the same five tables you just created. Find it via [KMUpower](https://kmupower.com/) or [Power Platform Academy](https://www.powerplatformacademy.online/), or get in touch at [info@kmupower.com](mailto:info@kmupower.com) for early access.

## Base URLs, authentication and a few notes

To keep the examples short, these shorthand labels are used throughout:

| Label | Base URL | Audience (for OAuth) | api-version |
|---|---|---|---|
| `{bap}` | `https://api.bap.microsoft.com/providers/Microsoft.BusinessAppPlatform/scopes/admin` | `https://service.powerapps.com/` | `2021-04-01` |
| `{pa}` | `https://api.powerapps.com/providers/Microsoft.PowerApps/scopes/admin/environments/{env}` | `https://service.powerapps.com/` | `2016-11-01` |
| `{flow}` | `https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/scopes/admin/environments/{env}` | `https://service.flow.microsoft.com/` | `2016-11-01` |
| `{dv}` | `https://{org}.crm.dynamics.com/api/data/v9.2` | `https://{org}.crm.dynamics.com` | – |

For authentication, use "Active Directory OAuth" in the HTTP action with an app registration (client credentials, secret pulled from Azure Key Vault). For a service principal to call the BAP, Power Apps and Flow admin APIs, register it once via PowerShell: `New-PowerAppManagementApp -ApplicationId <appId>`. For Dataverse, it additionally needs an application user in every environment. Many of the `GET` calls also exist as ready-made actions in the **Power Platform for Admins V2**, **Power Apps for Admins** and **Power Automate for Admins** connectors.

A production admin flow generally follows this shape: trigger (recurrence, Dataverse, or request) → `GET`/inventory read of current state → filter and compare against target state → approval or adaptive card for risky changes → `POST`/`PATCH`/admin-connector action → logging with a correlation ID and before/after state → error handling, retry and notification. Every write action should run in **report-only mode** first — only enable `PATCH`, `PUT` or create actions once detection has proven stable, and put any destructive or security-relevant action behind an approval with a full audit record.

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
