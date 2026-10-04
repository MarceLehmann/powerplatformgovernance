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
  - question: "What does Copilot Managed Runtime offer for apps built with AI?"
    answer: "Microsoft-operated hosting for applications created in Cowork, Code and Copilot Studio, in public preview since September 25. The update lists Entra identity integration, governed data connections and usage monitoring."
  - question: "Which new spending controls does Agent 365 cost management add?"
    answer: "New capabilities are model access controls, spending policies manageable through the Microsoft Graph API, credit consumption visible in Copilot and value reporting. Copilot Studio support is planned for October."
  - question: "Does a Microsoft 365 Copilot license cover Copilot Studio agents on the GitHub Copilot harness?"
    answer: "No. Agents on the GitHub Copilot harness consume credits while they are built, tested, evaluated and run, and the Microsoft 365 Copilot license does not cover that usage."
---
## TL;DR

Admins should review advanced-package upload permissions before October 25, configure GitHub Copilot feature defaults before October 22, and govern agent ownership, access, usage, cost, and behaviour. Cowork browser automation requires separate permission and spending controls, while custom calls to the retired Global Discovery Service must move to the Power Platform List Environments API.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Review advanced-package upload permissions before October 25 because uploads remain allowed by default without a decision.
- Security/Compliance: Pilot Cowork browser use with a small approved group, then inspect Conditional Access, DLP, audit, and consumption records.
- Makers: Search custom integrations and ALM scripts for globaldisco.crm.dynamics.com and migrate affected calls to the Power Platform List Environments API.
- Leadership/Business: Require agent monitoring for ownership, access, usage, cost, and behaviour so existing risk policies can drive decisions.
