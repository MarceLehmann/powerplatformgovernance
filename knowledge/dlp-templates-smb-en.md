---
layout: page
title: "Five DLP templates for small and mid-sized companies"
description: "Five ready-made data policy templates for the default environment, production and developer environments, each with and without Copilot Studio, and why you should review the impact before you click Create."
lang: en
toc: true
permalink: "/knowledge/dlp-templates-smb/"
translation_url: "/de/knowledge/dlp-templates-smb/"
last_reviewed: "2026-11-14"
---

Five data policy templates that cover most small and mid-sized tenants: two for the default environment, two for team and production environments, one for developer and sandbox environments. Plus the one step that saves you from broken flows: review the impact before you create anything.

[Diesen Beitrag auf Deutsch lesen](/de/knowledge/dlp-templates-smb/) | [Back to the knowledge overview](/knowledge/)

## TL;DR

Microsoft recommends two levels of policies: a restrictive policy for the default environment (Microsoft 365 and standard services, everything else blocked) and a more permissive one for shared team environments. Add developer environments with a small maker group and you have three levels. Copilot Studio is a real yes or no question per level, so two of the three levels come in two variants. That gives five templates. Before you create one, check which existing apps, flows and agents it would block. A policy you create today is enforced against all active flows within 24 hours.

The numbers of connectors per group in this article are from a working design of 26.10.2026 and change whenever Microsoft adds connectors. Treat them as an order of magnitude, not as a fixed list.

## Why three levels become five templates

- **Default environment.** Everybody in the tenant can build here. Keep the connector list short: Microsoft 365 and standard services. Microsoft describes this as the starting point for shared user and team productivity environments.
- **Team and production environments.** Makers need more: HTTP, a few more services. Production environments are managed together with the business unit.
- **Developer and sandbox environments.** A small group builds and tests here, including agents and Azure services.
- **Copilot Studio** is a separate decision. In a review of one tenant, 40 AI objects (agents and AI-related flows) sat in the default environment and 23 in all other environments. Without a Copilot variant you must either block every agent or open the Copilot channels for everybody. The developer level has no variant without Copilot, because people who build there should be able to test agents.

## The five templates

All five set the default group for new and unlisted connectors to **Blocked**, so each template works as an allow list. The counts are connectors per group in the design.

| No. | Template | Business | Non-business | Blocked | Use for |
|---|---|---|---|---|---|
| 1 | Default environment, strict | 28 | 0 | 37 | Default environment without agents and AI |
| 2 | Default environment, strict, with Copilot | 34 | 0 | 31 | Default environment when staff may build agents for Teams and Microsoft 365 |
| 3 | SMB standard | 38 | 5 | 22 | Production and team environments without agents |
| 4 | SMB standard, with Copilot | 47 | 5 | 13 | Production environments with agents |
| 5 | Developer and sandbox | 60 | 5 | 9 | Developer and sandbox environments with a small maker group |

What differs in practice:

- **1 and 2** block HTTP in all four forms, private Microsoft services and consumer cloud services (for example Gmail, Dropbox, Google Drive, X, Facebook). Template 2 additionally opens the Teams and SharePoint channels, knowledge from SharePoint and documents, and generative actions.
- **3 and 4** allow the HTTP connectors (HTTP, request trigger, HTTP with Microsoft Entra ID) and put five low-risk personal services into Non-business. Template 4 opens Copilot Studio with internal channels, Direct Line and knowledge sources including public websites.
- **5** adds Azure Blob Storage, SQL Server, Key Vault, Azure DevOps, GitHub, desktop flows, dataflows, HTTP Webhook, Azure OpenAI and AI Foundry. Channels without sign-in and external messaging channels stay blocked.

## What Microsoft Learn documents and what these templates decide

**Documented by Microsoft**

- Without configuration a tenant has no data policy. Connectors are grouped as Business, Non-business or Blocked. Microsoft-owned standard connectors and Dataverse cannot be blocked.
- A policy that spans all environments except selected ones, limited to Microsoft 365 and standard services, is the recommended starting point for shared environments. It also covers the default environment and any new environment.
- If several policies apply to one environment, the most restrictive combination wins.
- New or changed policies are checked against all active flows within 24 hours. Blocked cloud flows from the last seven days come back by themselves once they no longer violate a policy.
- Child flows rely on the HTTP connector internally. The group of HTTP can therefore affect whether child flows run.
- Agents cannot be published without an allowed channel. Copilot Studio connectors (knowledge sources, channels, skills, event triggers) are classified like any other connector.

**Decision in these templates (not Microsoft wording)**

- **Default group Blocked in every template. This is the recommendation.** New connectors are only usable once someone classifies them on purpose. Nothing enters the company unreviewed, and with a handful of makers the upkeep stays small. As a general rule Microsoft advises to [keep Non-business as the default group](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification). For the default environment Microsoft itself recommends [Blocked as the default group](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment). Templates 1 and 2 therefore follow Microsoft, for templates 3 to 5 Blocked is the decision of these templates.
- **Always list the unblockable connectors in Business.** If the default group is Blocked, new unblockable connectors land in Non-business automatically, and mixing them with Business would break flows. Listing them explicitly in Business avoids that.
- **"Without Copilot" does not mean zero AI.** The core Copilot Studio connector and AI Builder (part of Dataverse) cannot be blocked by a data policy. The templates block channels, knowledge sources, skills, event triggers, generative actions and Azure OpenAI. AI Builder is limited with the tenant setting for unassigned AI Builder credits, not with DLP.

## Review before you click

A data policy is not harmless. Look at what it would block first.

1. **List the connectors your apps, flows and agents use today.** The Power Platform inventory shows them per resource (built-in actions such as the HTTP action do not appear there as connectors).
2. **Compare each template against that list.** For every resource the result is one of three: fine, blocked (at least one connector is blocked or unlisted while the default group is Blocked) or mixed (Business and Non-business in one resource).
3. **Check overlaps.** An environment under two policies gets the stricter combination.
4. **Roll out in this order:** default environment first, then team and production environments, last developer environments.

An example from a real small tenant: template 2 for the default environment would have blocked 10 existing objects, among them Copilot agents that use GitHub and MCP connectors. Without the review those agents would have stopped within a day. With it, the admin decides beforehand: open the connector, move the agent to a developer environment, or accept the block.

## Limits of this approach

- The connector counts above change with every Microsoft release. Check the current classification in the admin center before you copy any list.
- Custom connectors, connector actions and endpoint filters are not part of the templates. Set them separately where you need them.
- Creating several policies is not transactional. If the second fails, the first stays.
- Templates replace no environment strategy. Decide first how your environments are set up, then pick the templates. See [five environment strategies](/knowledge/environment-strategies/) and the knowledge page on [DLP policies](/knowledge/dlp-policies/).

## Further reading

- [DLP policies: what you must configure](/knowledge/dlp-policies/)
- [Five environment strategies compared](/knowledge/environment-strategies/)
- [The 25 governance strategy questions](/knowledge/governance-questions-top-25/)

## Sources

Statements checked against Microsoft Learn on 14.11.2026. The design numbers come from a template design of 26.10.2026 and are marked as such. Points under "Decision in these templates" are recommendations from practice, not Microsoft wording.

- [Microsoft Learn: Implement a data policy strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy)
- [Microsoft Learn: Connector classification](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
- [Microsoft Learn: Manage data policies](https://learn.microsoft.com/en-us/power-platform/admin/prevent-data-loss)
- [Microsoft Learn: Combined effect of multiple data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-combined-effect-multiple-policies)
- [Microsoft Learn: Data loss prevention (DLP) policy creation in Power Automate](https://learn.microsoft.com/en-us/power-automate/prevent-data-loss)
- [Microsoft Learn: Configure data policies for agents in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)
- [Microsoft Learn: Known limitations of data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-known-issues)
- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)
- [Microsoft Learn: AI Builder credit management](https://learn.microsoft.com/en-us/ai-builder/credit-management)

Guidance only, not legal or licensing advice. Check licence and product details before you implement.
