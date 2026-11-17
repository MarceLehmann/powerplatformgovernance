---
layout: page
title: Admin Flows
icon: fas fa-bolt
order: 2
permalink: /flows/
lang: en
translation_url: "/de/flows/"
toc: true
description: "Ten free AdminHelper flows e-mail you what exists in your Power Platform tenant, what changed overnight and where a risk appeared."
---

Ten Power Automate flows that watch your Power Platform tenant and send you what matters by e-mail: what exists, what changed overnight and where a risk has appeared. You read a short mail in the morning instead of clicking through the admin center. The flows only read. They change no app, flow, agent or setting, and none of them needs a Premium licence.

[Diese Seite auf Deutsch](/de/flows/)

The starter set is free. You get it by e-mail on [kmupower.com](https://kmupower.com/vorlagen#adminhelper-starter) (page in German). If you want more, see the [offers](/offers/): Standard (35 flows, CHF 49), Full (51 flows, CHF 99) and the Default environment package (CHF 79). Each paid package is also available with remote setup (CHF 449, CHF 899 and CHF 479).

This page describes AdminHelper version 2.1.1 (November 2026).

## What lands in your inbox

| You want to know | Flows | When they write |
|---|---|---|
| What exists in the tenant | F01 environments, F17 apps, F24 flows, F31 agents | every morning |
| What changed since yesterday | F02 new environments, F11 DLP policies, F15 suspended flows | only when something changed |
| Where a risk is building up | F08 capacity, F13 connectors DLP cannot block, F32 agents without sign-in | F13 every Monday, the others only when something was found |

Every flow checks that it has read the complete list before it reports. If a read is cut off, you get an error mail instead of a list that looks complete but is not.

## Your first 10 flows

### Starter flow 1: F01 Environment inventory

<!-- autogif:flows-1 -->
{% include animation.html video="/assets/img/animations/flows-1-en.mp4" poster="/assets/img/animations/flows-1-en.poster.webp" width=800 height=450 alt="Five stages of the environment inventory flow: daily trigger, read all environments, normalise the fields, build an HTML table, send it to the admin." %}

**What you get:** one list of all environments in your tenant every morning, with type, region, managed status, Dataverse and creation date.

**Why it matters:** DLP, backups, capacity and security reviews are all planned per environment. With a reliable list you know what you are planning for.

### Starter flow 2: F02 Detect new environments

**What you get:** a mail in the morning when environments were created the day before, with type, region and managed status. No new environment, no mail.

**Why it matters:** new apps, flows and data appear in a new environment. You notice it within a day and can set a DLP policy and an owner before it grows.

### Starter flow 3: F08 Capacity warning

**What you get:** a warning as soon as database, file or log capacity reaches the threshold you set, or when a value cannot be read.

**Why it matters:** once the tenant runs out of capacity, you can no longer create, copy or restore environments. You hear about it while there is still time to clean up or buy capacity.

### Starter flow 4: F11 DLP policy snapshot

**What you get:** a nightly copy of all DLP policies as a dated file in your SharePoint library, and a mail when a policy was created, deleted or changed.

**Why it matters:** a changed connector group can suspend flows or open a data path. The daily files show what a policy looked like before the change. The flow saves the files once you switch off test mode, and the folder should be visible to admins only, because the files contain the names of policy editors.

### Starter flow 5: F13 Unblockable connectors report

**What you get:** a weekly list of the connectors that a classic DLP policy cannot block, and which of your apps and flows use them.

**Why it matters:** a policy can look complete and still leave these connectors open. The report shows where. In managed environments, advanced connector policies can restrict them as well.

### Starter flow 6: F15 Report suspended flows

**What you get:** a mail with every cloud flow and agent flow the platform has suspended, with environment and direct link. Flows saved in the last 24 hours are marked. No suspended flow, no mail.

**Why it matters:** a suspended flow stops without anyone being told, for example after a DLP change. The mail points to the flow details, where the platform shows the reason.

### Starter flow 7: F17 App inventory

**What you get:** a daily overview of all canvas, model-driven and code apps: totals, apps per environment and the apps to look at first, because they are in quarantine or have not been changed for a long time.

**Why it matters:** you see every app without opening each environment, and old or blocked apps stand out on their own.

### Starter flow 8: F24 Flow inventory

**What you get:** daily figures on all cloud flows and agent flows by type, status and trigger, per environment, including the suspended ones.

**Why it matters:** flow sprawl grows unnoticed. A daily number turns it into a quick routine check.

### Starter flow 9: F31 Agent inventory

**What you get:** a daily list of all Copilot Studio agents per environment, with the ones that need a look marked: in quarantine, never or not recently published, or shared with the whole organisation.

**Why it matters:** agents multiply quickly once Copilot Studio is in use. A forgotten or over-shared agent is a risk nobody sees until something goes wrong.

### Starter flow 10: F32 Agents without authentication

**What you get:** a mail listing agents that have no authentication or whose authentication cannot be read. Published agents come first. Nothing found, no mail.

**Why it matters:** an agent set to "No authentication" can be used by anyone who has the link. Once you know which agents those are, you can decide whether a data policy should require sign-in for all agents.

### Setup helpers: F00 and F51

**F51 Set up and check** prepares your SharePoint library: it checks site and library, creates the missing storage folders and mails you the values for the settings. Since version 2.1.1 it also finishes cleanly on the first run on an empty site. You can run it as often as you like.

**F00 Check configuration** tests every connection with a harmless read and mails you which settings are still missing. It changes nothing.

---

## Setup in five steps

1. Import the solution into a separate governance environment, not the Default environment. All flows arrive switched off.
2. Create the connections with an account that holds the Power Platform administrator role and has a mailbox for the reports.
3. Switch on and run F51, then enter the values from its mail in the environment variables.
4. Run F00 and fix what it reports.
5. Start each flow once by hand, check the mail, then leave it switched on. For F11, switch test mode off once the first report looks right, so that the daily files are saved.

Good to know:

- The inventory behind F02, F13, F15, F17, F24, F31 and F32 is the same one the Power Platform admin center uses. It shows new and changed items within about 15 minutes and can only be read with a signed-in user, not with a service principal.
- If your conditional access requires MFA for Azure Resource Manager, the inventory may not load. Microsoft describes the fix on the [inventory page](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory#known-limitations).
- The flows are not a backup, and they have not yet been proven over weeks of production use with a real configuration. Test the reports first.

## Schedules and connectors

All times are Central European time. All connectors are standard connectors, so a Microsoft 365 licence with Power Automate is enough. Microsoft licences are not included.

| Flow | Runs | Connectors | Settings it needs |
|---|---|---|---|
| F01 Environment inventory | daily 01:30 | Power Platform for Admins, Office 365 Outlook | admin mail |
| F02 Detect new environments | daily 02:30 | Power Platform for Admins V2, Office 365 Outlook | admin mail |
| F08 Capacity warning | daily 07:00 | Power Platform for Admins V2, Office 365 Outlook | admin mail, warning threshold in percent |
| F11 DLP policy snapshot | daily 01:00 | Power Platform for Admins, SharePoint, Office 365 Outlook | admin mail, SharePoint site and library, test mode off |
| F13 Unblockable connectors | Mondays 10:00 | Power Platform for Admins and V2, Office 365 Outlook | admin mail |
| F15 Suspended flows | daily 06:45 | Power Platform for Admins V2, Office 365 Outlook | admin mail |
| F17 App inventory | daily 01:45 | Power Platform for Admins V2, Office 365 Outlook | admin mail, inactivity days |
| F24 Flow inventory | daily 02:00 | Power Platform for Admins V2, Office 365 Outlook | admin mail |
| F31 Agent inventory | daily 02:15 | Power Platform for Admins V2, Office 365 Outlook | admin mail, inactivity days |
| F32 Agents without authentication | daily 06:15 | Power Platform for Admins V2, Office 365 Outlook | admin mail |
| F51 Set up and check | by hand | SharePoint, Office 365 Outlook | none |
| F00 Check configuration | by hand | all of the above plus Power Apps for Admins, Power Automate for Admins and Approvals | none |

## Get more than the starter set

Standard (35 flows) and Full (51 flows) add reports on sharing, connections and roles, clean-up for inactive apps and old flows, and owner reassignment. Flows that change something run in test mode first and only report what they would do. Prices, delivery and the setup option are on the [offers page](/offers/).

## Further reading

- [Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)
- [Power Platform inventory API](https://learn.microsoft.com/en-us/power-platform/admin/inventory-api)
- [Power Platform for Admins V2 connector reference](https://learn.microsoft.com/en-us/connectors/powerplatformadminv2/)
- [Connectors you can't block with data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification#list-of-connectors-that-you-cant-block)
- [Advanced connector policies](https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies)
- [Dataverse capacity: what happens when you exceed it](https://learn.microsoft.com/en-us/power-platform/admin/capacity-storage#changes-for-exceeding-storage-capacity-entitlements)
- [Configure data policies for Copilot Studio agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)
