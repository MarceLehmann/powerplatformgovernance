---
layout: page
title: "Asking governance questions in Power Platform Admin in Cowork"
description: "Which questions are worth asking, what to set up first, how to keep Copilot Credits under control and where to verify an answer before you act."
lang: en
toc: true
permalink: "/knowledge/cowork-governance-questions/"
translation_url: "/de/knowledge/cowork-governance-questions/"
last_reviewed: "2026-11-15"
---

With Power Platform Admin in Cowork you ask your tenant in plain language: what is new, what nobody uses any more, where storage is running short. This page sorts out which questions are worth it for a small or medium-sized company, what it costs and where you cross-check the answer.

[Diese Seite auf Deutsch lesen](/de/knowledge/cowork-governance-questions/) | [Back to the knowledge overview](/knowledge/)

## TL;DR

Power Platform Admin is a plugin for Microsoft Copilot Cowork and is in preview. It reads inventory, usage and ownership across your environments and answers questions. It changes nothing in the tenant. Every question consumes Copilot Credits. Answers are AI-generated and can vary between runs. Microsoft therefore asks you to validate findings before you contact makers or change policies, environments or resources. Start with two or three fixed questions, run them for a month and then decide based on the consumption.

## What you need first

1. **Installation by a Microsoft 365 admin.** In the Microsoft 365 admin center under **Agents** > **Tools** > **Registry**, install the plugin "Power Platform Admin (preview)" for everyone or for selected people.
2. **Access to Cowork.** Installing the plugin does not grant access to Cowork. You configure that separately through a spending policy that includes Cowork.
3. **The right role.** The account you connect the plugin with needs Global Administrator, Power Platform Administrator or Dynamics 365 Administrator. Without one of these roles the plugin returns no data.
4. **Connect.** In Cowork under **Customize**, select the plugin, choose **Connect** and sign in with OAuth. Behind it is a connection to the Power Platform for Admins V2 connector.

Managed Environments are not required to ask questions. On the first request Cowork shows an approval card. Look at the details before you approve.

## Questions worth asking

The prompts come from Microsoft's prompt library. Adjust the time window, environment and threshold.

| What you want to know | Prompt from Microsoft Learn | What you do with the answer |
|---|---|---|
| What is new? | `What happened in my Power Platform tenant in the last week?` followed by `Who created them?` | Talk to new makers, clarify unknown projects |
| What does nobody use any more? | `Which apps haven't been used in the last 30 days?` | Cleanup list, check back with the owners |
| What no longer has an owner? | `Show me the apps and flows whose owner has left the organization.` | Name a new owner before something fails |
| What has outgrown the default environment? | `Which apps in the default environment are used by more than 10 people? Give me the owner and a link to each.` | Plan the move to a managed environment |
| What would a new block hit? | `If I block the [connector name] connector, which apps, flows, and agents would be affected, and who owns them?` | Know the impact before you change a data policy |
| Where is storage running short? | `Show me which environments have limited Dataverse capacity.` | Clean up or plan capacity before operations are blocked |

Microsoft gives four pointers for good results. Be specific, with time window, environment, threshold and the format you want. Ask follow-up questions, because the second and third question often give the more useful answer. Ask even if you are not sure the plugin knows the answer, because coverage grows over time. Save prompts that work.

## What the credits cost

Questions consume Copilot Credits. Microsoft's guidance does not state a fixed amount per question. For planning, Microsoft recommends this approach:

1. **Run a pilot.** Schedule two or three scenarios for a month and derive the budget from actual consumption.
2. **Set spending policies.** In the Microsoft 365 admin center, define who may use Cowork and how much is spent.
3. **Monitor consumption.** Also in the Microsoft 365 admin center.

A recommendation from practice: build the pilot around the three questions you answer by hand today. Then you can compare consumption with the time you save.

## Where to verify the answer

The answer is a pointer, not evidence. Before you act, look at the source.

| Answer about | Cross-check in |
|---|---|
| Inventory, new resources, connectors | Admin center, **Manage** > **Inventory** |
| Flow owners | Open the flow itself. For flows the inventory shows the person who created it, not the current owner |
| Storage | Admin center, **Licensing** > **Dataverse** |
| Impact of blocking a connector | **Connectors** column in the inventory, then a test in one environment |

The mapping in the table is a recommendation from practice. For an important finding, ask the same question a second time. If the answers differ, the source counts.

## From finding to report

In the same conversation Cowork can turn an answer into a report, for example an HTML page with filterable tables, and repeat the prompt on a schedule. You manage scheduled prompts in Cowork under **Automations**. Before Cowork sends an email or posts in Teams, it waits for your approval. Have emails to owners saved as drafts, then you read each message before it goes out.

Because every question consumes credits, expect each scheduled run to consume some too. Plan a few fixed prompts instead of many.

## When a flow is the better choice

A recommendation from practice. Both have their place.

- **Cowork** fits questions you do not know yet: follow-ups, impact analysis, a report for management.
- **A fixed flow** fits notifications that should look the same every day and run without credits. The free [AdminHelper starter set](/flows/) delivers inventory, new environments and capacity by email and reads the same data source.

## Data protection and compliance

Before a broad rollout Microsoft recommends reviewing the Cowork security and compliance guidance and the responsible AI application card with your compliance team, and confirming supported regions and AI subprocessors for your deployment. Do not paste passwords, tokens or client secrets into a conversation.

## Read on

- [Detect and measure shadow IT in Power Platform](/knowledge/detect-shadow-it/)
- [Storage exceeded: what happens to your environments](/knowledge/storage-overage/)
- [AI costs compared](/knowledge/ai-cost-comparison/)
- [Power Platform governance concept: where to start](/knowledge/governance-concept/)

## Sources

Statements checked against Microsoft Learn on 15 November 2026. Power Platform Admin in Cowork is in preview, so features and prerequisites can change.

- [Microsoft Learn: Agentic governance with Power Platform Admin in Cowork](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance)
- [Microsoft Learn: Governance prompt library for Power Platform Admin in Cowork](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance-prompts)
- [Microsoft Learn: Turn governance answers into reports and automations](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance-reports)
- [Microsoft Learn: Power Platform Admin in Cowork (preview)](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-admin-cowork)
- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)

Orientation only, not legal or licensing advice. Check licence and product details before you implement anything.
