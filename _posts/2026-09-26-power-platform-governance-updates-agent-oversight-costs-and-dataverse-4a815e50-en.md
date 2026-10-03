---
title: 'Power Platform governance updates: agent oversight, costs and Dataverse retirement'
description: Weekly Power Platform updates cover agent governance, AI spending controls,
  browser permissions, Work IQ, and the retirement of Dataverse Global Discovery Service
  APIs.
date: '2026-09-26T02:15:24Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- dlp
- ownership
- dataverse
content_type: curated_summary
curation_id: 4a815e508d8e70fb32f77d66
image:
  path: "/assets/img/curated/4a815e508d8e70fb32f77d66.png"
  alt: 'Governance card: Agent governance must track ownership, access, usage, cost,
    and behaviour.'
permalink: "/en/posts/power-platform-governance-updates-agent-oversight-costs-and-dataverse-4a815e50/"
translation_url: "/de/posts/power-platform-governance-updates-agent-oversight-costs-and-dataverse-4a815e50/"
source_url: https://flowaltdelete.ca/2026/09/25/microsoft-ai-power-platform-weekly-update-september-21-2026/
source_site_url: https://flowaltdelete.ca/
source_title: 'AI Weekly: Copilot’s Super App, Work IQ, and New Models'
source_name: Flow Alt Delete
source_language: en
source_language_name: English
source_author: Josh Cook
source_published_at: '2026-09-25'
source_updated_at: '2026-09-25'
source_type: article
faq:
  - question: "What is Work IQ and when does its public preview start?"
    answer: "Work IQ connects Dynamics 365 and Power Platform data to Copilot and agents, and its public preview begins on September 30. It relies on semantic models built from selected tables, columns, relationships, views, forms and business terms. Dataverse stores the models, and makers can refine and reuse definitions across agents. Finance and Operations support follows in late October."
  - question: "What does Copilot Managed Runtime offer for apps built with AI?"
    answer: "It is Microsoft-operated hosting for applications created in Cowork, Code and Copilot Studio, and it entered public preview on September 25. The update lists Entra identity integration, governed data connections, Git-backed source control and usage and health monitoring in the Microsoft 365 admin center."
  - question: "Which new spending controls does Agent 365 cost management add?"
    answer: "The cost management expands across Code, Managed Runtime, Cowork and Work IQ APIs. New capabilities are model access controls that decide which model families groups may use, spending policies that can be managed through the Microsoft Graph API, credit consumption that users can see in Copilot, and value reporting that links spending to work produced. Copilot Studio support is planned for October."
  - question: "What changed for the Global Discovery Service REST API in Dataverse?"
    answer: "Its end-of-support date was reached on September 21. Anything that still calls it has to migrate to the Power Platform List Environments API. The weekly update lists this among its administrative dates, so integrations and scripts that enumerate environments through the old interface are worth reviewing."
  - question: "Does a Microsoft 365 Copilot license cover Copilot Studio agents on the GitHub Copilot harness?"
    answer: "No. Agents on the GitHub Copilot harness consume credits while they are built, tested, evaluated and run, and the Microsoft 365 Copilot license does not cover that usage. Three roadmap items targeted for September 2026 promise cost visibility for preview and testing consumption, for agent evaluations and for monitoring per agent."
---
## TL;DR

Admins should review advanced-package upload permissions before October 25, configure GitHub Copilot feature defaults before October 22, and govern agent ownership, access, usage, cost, and behaviour. Cowork browser automation requires separate permission and spending controls, while custom calls to the retired Global Discovery Service must move to the Power Platform List Environments API.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Review advanced-package upload permissions before October 25 because uploads remain allowed by default without a decision.
- Security/Compliance: Pilot Cowork browser use with a small approved group, then inspect Conditional Access, DLP, audit, and consumption records.
- Makers: Search custom integrations and ALM scripts for globaldisco.crm.dynamics.com and migrate affected calls to the Power Platform List Environments API.
- Leadership/Business: Require agent monitoring for ownership, access, usage, cost, and behaviour so existing risk policies can drive decisions.
