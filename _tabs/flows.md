---
layout: page
title: Admin Flows
icon: fas fa-bolt
order: 2
permalink: /flows/
lang: en
translation_url: "/de/flows/"
toc: true
description: "The ten AdminHelper starter flows for Power Platform admins: inventories for environments, apps, flows and Copilot Studio agents, DLP snapshots, unblockable connectors, capacity and agent authentication. Standard licence only, read-only, free by e-mail."
---

The AdminHelper starter set consists of ten Power Automate flows that look at your tenant and report by e-mail: four inventories (environments, apps, cloud flows, Copilot Studio agents), a daily list of newly created environments, a DLP policy snapshot with change log, a weekly report on connectors that DLP cannot block, a list of flows the platform has suspended, a capacity warning and a check for agents without authentication. Two helper flows come with them: F00 checks your configuration and F51 prepares the storage folders. All ten work with the Standard licence and only read from your tenant. The only thing they write is a daily DLP snapshot file into your own SharePoint library.

[Diese Seite auf Deutsch](/de/flows/)

The starter set is free. You get it by e-mail on [kmupower.com](https://kmupower.com/vorlagen#adminhelper). If you want more, see the [offers](/offers/): Standard (35 flows, CHF 49), Full (51 flows, CHF 99) and the Default environment package (CHF 49). Each paid package is also available with remote setup (CHF 449, CHF 899 and CHF 449).

## Your first 10 flows

**Before you start:** none of the ten needs a Premium licence or a custom Dataverse table. They use the **Power Platform for Admins**, **Power Platform for Admins V2**, **Office 365 Outlook** and (for the DLP snapshot) **SharePoint** connectors. The Power Platform admin inventory, the same data source behind the admin center, delivers environments, apps, flows and agents tenant-wide in one paged query. The account that owns the connections needs the Power Platform administrator role and a mailbox for the reports. All flows arrive switched off. Run F51 and F00 first, set the environment variables, then switch the flows on one by one.

### Starter flow 1: F01 Environment inventory

<!-- autogif:flows-1 -->
{% include animation.html src="/assets/img/animations/flows-1-en.gif" poster="/assets/img/animations/flows-1-en.poster.png" width=800 height=450 alt="Five stages of the environment inventory flow: daily trigger, read all environments, normalise the fields, build an HTML table, send it to the admin." %}

**What it does:** Reads every environment of your tenant once a day (type, region, managed status, Dataverse, creation date) and sends the inventory to the admin team.

**Who needs it:** Admins and CoE teams who want a reliable answer to "how many environments do we have".

**Why it matters:** DLP, backups, capacity and security reviews are all scoped per environment. If the list is incomplete, everything built on it inherits the gap.

**Schedule:** daily at 01:30. **Licence:** Standard. **Needs:** `pp_AdminMail`.

### Starter flow 2: F02 Detect new environments

**What it does:** Reports every morning which environments were created the previous day, with type, region, creation time and managed status. If there were none, it stays silent.

**Who needs it:** Admins who want to notice shadow environments within a day, not at the next audit.

**Why it matters:** A new environment is where new apps, flows and data appear. Seeing it early lets you decide on a DLP policy and an owner before it grows.

**Schedule:** daily at 02:30. **Licence:** Standard. **Needs:** `pp_AdminMail`, and a connection owned by a Power Platform administrator, because the inventory can only be read with a user sign-in.

### Starter flow 3: F08 Capacity warning

**What it does:** Checks tenant capacity (database, file, log) every day against a threshold you set and writes to you only when the threshold is reached or a value is missing.

**Who needs it:** Admins who want to hear about a capacity shortage before environments get blocked.

**Why it matters:** Missing capacity stops new environments and can block Dataverse operations. A flow that speaks only when it matters gets read, and missing data is reported instead of being treated as fine.

**Schedule:** daily at 07:00. **Licence:** Standard. **Needs:** `pp_AdminMail`, `pp_CapacityWarnPercent`. Power Platform administrator role.

### Starter flow 4: F11 DLP policy snapshot

**What it does:** Reads all DLP policies every night, stores them as a daily file in your SharePoint library and compares them with the last snapshot. New, deleted and changed policies are reported by e-mail.

**Who needs it:** Admins who want a history of their DLP policies and a notice when someone changes one.

**Why it matters:** A changed connector group can suspend flows or open a data path unnoticed. The daily files show the state before a change.

**Schedule:** daily at 01:00. **Licence:** Standard. **Needs:** `pp_AdminMail`, `pp_SharePointSite`, `pp_SharePointLibrary` (F51 prepares both). It changes no policy and writes only the snapshot file. Restrict access to the folder, because the files contain the names of policy editors.

### Starter flow 5: F13 Unblockable connectors report

**What it does:** Reports every week which connectors cannot be blocked with a DLP policy, with licence tier and usage in canvas apps and flows.

**Who needs it:** Admins who plan DLP policies and want to know where a block is not possible.

**Why it matters:** A policy that looks complete but cannot cover certain connectors gives false comfort. The report shows where the gaps are and which of your apps and flows use them.

**Schedule:** Mondays at 10:00. **Licence:** Standard. **Needs:** `pp_AdminMail`. Power Platform administrator role.

### Starter flow 6: F15 Report suspended flows

**What it does:** Reads every day all cloud flows and agent flows that the platform has suspended and reports them with environment, link and last save. Flows saved in the last 24 hours are marked. Without suspended flows it stays silent.

**Who needs it:** Admins who need to know when business processes stop without any noise, for example after a DLP change.

**Why it matters:** A suspended flow does not run and nobody is told. The inventory says that a flow is suspended, but not why. The report therefore does not claim DLP as the cause and points to the flow details page, where the platform shows the reason.

**Schedule:** daily at 06:45. **Licence:** Standard. **Needs:** `pp_AdminMail`, user sign-in for the inventory.

### Starter flow 7: F17 App inventory

**What it does:** Reads all canvas, model-driven and code apps once a day and reports totals, apps per environment and the apps that need a look first: in quarantine or not modified for a long time.

**Who needs it:** Admins who want an app list without clicking through every environment.

**Why it matters:** You cannot govern what you cannot see. If the inventory cannot be read in full, the flow says so instead of reporting a partial list.

**Schedule:** daily at 01:45. **Licence:** Standard. **Needs:** `pp_AdminMail`, `pp_InactivityDays`. The inventory shows changes with a delay of up to 15 minutes and holds no sharing counts or usage.

### Starter flow 8: F24 Flow inventory

**What it does:** Reads all cloud flows and agent flows once a day and reports key figures by type, status and trigger, flows per environment and the flows the platform has suspended.

**Who needs it:** Admins who want to know what runs in the tenant.

**Why it matters:** Flow sprawl grows unnoticed. Real numbers every day turn it into a routine check, and an incomplete read is reported as a failure.

**Schedule:** daily at 02:00. **Licence:** Standard. **Needs:** `pp_AdminMail`, user sign-in for the inventory.

### Starter flow 9: F31 Agent inventory

**What it does:** Reads all Copilot Studio agents once a day and reports the inventory, agents per environment and the agents that are in quarantine, never or not recently published, or shared with the whole tenant.

**Who needs it:** Admins who want a tenant-wide agent list without opening every environment.

**Why it matters:** Agents multiply once Copilot Studio is on. A forgotten, unpublished or over-shared agent is a risk nobody sees until something breaks.

**Schedule:** daily at 02:15. **Licence:** Standard. **Needs:** `pp_AdminMail`, `pp_InactivityDays`.

### Starter flow 10: F32 Agents without authentication

**What it does:** Reads all Copilot Studio agents once a day and reports agents with no authentication or with authentication that cannot be read, sorted by severity: published agents before unpublished ones. It writes only when something was found.

**Who needs it:** Admins who must make sure no agent answers anonymous users by accident.

**Why it matters:** An agent without authentication can be reached by anyone who has the link. A published one is the urgent case, so it comes first.

**Schedule:** daily at 06:15. **Licence:** Standard. **Needs:** `pp_AdminMail`.

### Setup helpers: F00 and F51

**F51 Set up and check** is a manual flow. It checks your SharePoint site and library, creates the storage folders if they are missing and sends you a mail with the values for the environment variables. You can run it as often as you like.

**F00 Check configuration** is also manual. It tests every connection with one harmless read action, checks the required settings and mails you the result. It changes nothing.

---

## Connectors and licences

| Flow | Connector(s) | Licence |
|---|---|---|
| F01 Environment inventory | Power Platform for Admins, Office 365 Outlook | Standard |
| F02 Detect new environments | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F08 Capacity warning | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F11 DLP policy snapshot | Power Platform for Admins, SharePoint, Office 365 Outlook | Standard |
| F13 Unblockable connectors report | Power Platform for Admins, Office 365 Outlook | Standard |
| F15 Report suspended flows | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F17 App inventory | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F24 Flow inventory | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F31 Agent inventory | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F32 Agents without authentication | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F00, F51 Setup | SharePoint, Office 365 Outlook | Standard |

Microsoft licences are not included. The flows are not a backup system, and they have not yet run for weeks in long-term production with a real configuration. Test the reports first. A production admin flow reads the current state completely, checks that the read was not cut off and reports only then. An incomplete read is a failure, not "nothing found".

## Get more than the starter set

The packages Standard (35 flows) and Full (51 flows) add reports on sharing, agents and connections, clean-up flows for inactive apps and old flows, owner reassignment and role audits. Prices, delivery and the setup option are on the [offers page](/offers/).

## Further reading

- [Microsoft Power Platform API reference](https://learn.microsoft.com/en-us/rest/api/power-platform/)
- [Power Platform inventory API](https://learn.microsoft.com/en-us/power-platform/admin/inventory-api)
- [Power Platform inventory sample queries](https://learn.microsoft.com/en-us/power-platform/admin/inventory-sample-queries)
- [Power Platform for Admins V2 connector reference](https://learn.microsoft.com/en-us/connectors/powerplatformadminv2/)
- [Data loss prevention policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
