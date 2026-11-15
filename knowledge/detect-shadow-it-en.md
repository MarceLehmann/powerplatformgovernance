---
layout: page
title: "Detect and measure shadow IT in Power Platform"
description: "How to use the inventory in the admin center to find what was created in the last 30 days, and which three figures to track every month so that a feeling becomes a number."
lang: en
toc: true
permalink: "/knowledge/detect-shadow-it/"
translation_url: "/de/knowledge/detect-shadow-it/"
last_reviewed: "2026-11-15"
---

Shadow IT in Power Platform means apps, flows, agents and environments the responsible person does not know about. This page shows how to make them visible in ten minutes with the inventory in the Power Platform admin center, and how to track them with three figures over the months.

[Diese Seite auf Deutsch lesen](/de/knowledge/detect-shadow-it/) | [Back to the knowledge overview](/knowledge/)

## TL;DR

The inventory under **Manage** > **Inventory** lists all agents, apps, flows and environments of the tenant in one place. Filter by creation date for the last 30 days and you see what is new. Note three figures every month: new resources per type, resources in the default environment, and connectors in use that you have not approved. If a figure rises and you do not know why, you have your finding. Why shadow IT appears is covered in [Shadow IT isn't a discipline problem, it's a latency problem](/en/posts/gov-shadow-it-root-cause/). This page is about detection.

## What the inventory shows

- **Resources:** agents from Copilot Studio and the Microsoft 365 Copilot Agent Builder, canvas, model-driven and code apps, cloud flows and agent flows, Power Pages sites (preview), connectors, environments and environment groups.
- **Freshness:** According to Microsoft, created, updated or deleted resources appear within 15 minutes.
- **Access:** You need one of the Microsoft Entra roles Global administrator, Power Platform administrator, Dynamics 365 administrator or Global reader. AI administrator and AI reader see AI resources only. Global reader does not see Power Pages sites.
- **Connectors:** The **Connectors** column shows which connectors and operations each resource uses.

## In ten minutes: what is new in the last 30 days?

1. Open the [Power Platform admin center](https://admin.powerplatform.microsoft.com/) and select **Manage** > **Inventory**.
2. Select the **Created on** column and set the date filter to the last 30 days. The number of matches is shown above the table on the top left.
3. Add a filter on the resource type and note the count per type: environments, apps, flows, agents.
4. Set the **Environment type** filter to **Default**. You now see what was created in the default environment.
5. Sort by **Owner**. Names you cannot match to a project are your list of people to talk to.
6. Select **Download** to save the list as CSV. The export contains the entire inventory, not only the loaded rows.

If you prefer a saved query, use Azure Resource Graph. Microsoft provides a sample query for the past 24 hours. Adjusted to 30 days and counted by type it looks like this:

```kusto
PowerPlatformResources
| extend properties = parse_json(properties)
| extend createdAt = todatetime(properties.createdAt)
| where createdAt >= ago(30d)
| summarize resourceCount = count() by type
| order by resourceCount desc
```

## The three figures for every month

The selection is a recommendation from practice. You can read all three from the inventory.

| Figure | How to measure it | What an increase means |
|---|---|---|
| New resources in 30 days, per type | **Created on** filter, counter above the table | More building. Do you know the projects behind it? |
| Resources in the default environment | **Environment type** filter = Default | Solutions grow where everyone can build and no lifecycle applies |
| Connectors in use that are not on your approved list | **Connectors** column, compared with your list | Data flows into services nobody decided on |

Write the figures into the same table on the same day every month. A single value says little, the trend over three months shows the direction.

## What to do with a finding

Microsoft lists ownerless resources and high-value solutions in the default environment as business continuity risks and points to the **Actions** page in the admin center for findings. For a single case a conversation is usually enough:

1. Talk to the person shown as owner in the inventory. Ask about the purpose, not about permission.
2. Decide together: it stays in the default environment, moves to a managed environment, or gets deleted.
3. Record two owners for a solution that stays.
4. If you suspect a security issue, you can block a published agent or canvas app in the inventory with **Block**. The block can be reversed.

## Automated instead of by hand

Four flows from the free [AdminHelper starter set](/flows/) read the same inventory and send the result by email:

- **F02 Detect new environments** reports every morning which environments were created the day before and stays silent if there were none.
- **F17 App inventory**, **F24 Flow inventory** and **F31 Agent inventory** send the totals once a day, plus the entries that need a look first.

The connection has to run as a signed-in user. According to Microsoft the inventory query supports neither service principals nor managed identities and returns HTTP 403 for them.

## Limits of the inventory

- **Flow owners:** For cloud flows and agent flows the **Owner** column shows the user who created the flow. A change of owner does not appear there.
- **Model-driven apps** have no owner, and only published apps are captured.
- **Classic chatbots** are missing from the inventory. You find them under **Manage** > **Copilot Studio** > **Classic chatbots**.
- **Filtering by environment:** You have to enter the full environment name, partial matches do not work.
- **Outside the platform:** The inventory only shows what is built on Power Platform. Tools someone bought with their own credit card are not in it.

## Read on

- [Power Platform governance concept: where to start](/knowledge/governance-concept/)
- [Shadow IT isn't a discipline problem, it's a latency problem](/en/posts/gov-shadow-it-root-cause/)
- [Asking governance questions in Power Platform Admin in Cowork](/knowledge/cowork-governance-questions/)
- [Citizen developers in your organization](/knowledge/citizen-developer-guide/)

## Sources

Statements checked against Microsoft Learn on 15 November 2026. The three figures and the steps for a finding are recommendations from practice, not Microsoft's wording.

- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)
- [Microsoft Learn: Power Platform inventory sample queries](https://learn.microsoft.com/en-us/power-platform/admin/inventory-sample-queries)
- [Microsoft Learn: Implement reactive governance controls](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/reactive-governance)

Orientation only, not legal or licensing advice. Check licence and product details before you implement anything.
