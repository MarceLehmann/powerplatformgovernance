---
title: Work IQ usage, licensing and governance controls
description: Explains how Work IQ is used in Copilot Studio and custom applications,
  when Copilot Credits apply, and how Microsoft 365 and Power Platform administrators
  control consumption.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- copilot-studio
- environments
- ownership
content_type: curated_summary
curation_id: 8a25d3f16c942fd312018c4c
permalink: "/en/posts/work-iq-usage-licensing-and-governance-controls-8a25d3f1/"
translation_url: "/de/posts/work-iq-usage-licensing-and-governance-controls-8a25d3f1/"
source_url: https://microsoft.github.io/mcscatblog/posts/work-iq-context-layer-you-already-have/
source_site_url: https://microsoft.github.io/
source_title: 'Work IQ: How It''s Used, Licensed, and Controlled'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Anders Fjordhoj
source_published_at: '2026-08-24'
faq:
  - question: "Do custom apps that call the Work IQ API directly consume Copilot Credits?"
    answer: "Yes, when usage-based billing is enabled, direct Work IQ API calls from custom solutions consume Copilot Credits. A Microsoft 365 Copilot license is not required for this route. The spending policy for such calls is set in the Microsoft 365 admin center, which also covers Cowork, so cost control for custom clients starts there."
  - question: "Is Work IQ included for declarative agents built in Agent Builder?"
    answer: "Largely yes. Declarative agents built in Agent Builder with supported knowledge sources such as SharePoint use built-in Copilot grounding, which is included for eligible Microsoft 365 Copilot licensed users in Microsoft channels. Conditions and fair usage policies apply. Agents defined through the Microsoft 365 Agents Toolkit manifest follow the same inclusion logic."
  - question: "Why does the GitHub Copilot harness in Copilot Studio still cost credits for licensed users?"
    answer: "In that harness, the unified Work IQ integration through Model Context Protocol tools consumes Copilot Credits even when the user holds a Microsoft 365 Copilot license. Native Work IQ grounding inside Microsoft 365 Copilot is covered by the license, so this is a metered exception. The standard harness does not support the unified integration at all."
  - question: "Which admin center sets Work IQ spending limits and which one handles agent limits?"
    answer: "The Microsoft 365 admin center holds Work IQ spending policies with user or group scope, billing method, monthly and per-user limits and threshold alerts. The Power Platform admin center manages Copilot Studio environment capacity, prepaid credit allocation and monthly agent limits. The two controls run separately, so the teams behind them should share agent names, environments and intended users."
  - question: "Do Cowork spending limits stop credit consumption at the exact threshold?"
    answer: "Not reliably. Spending policies set boundaries but do not reserve credit, and enforcement can lag behind actual consumption, so extra tasks may still start after a threshold is reached. A Cowork policy also grants access to all users in its scope regardless of limits. Approved spending does not grant data access either, because tenant enablement and consent are separate prerequisites."
---
## TL;DR

Work IQ grounds agents with permitted information from email, meetings, chats and files. Native Microsoft 365 Copilot grounding is included for eligible licensed users, while the Copilot Studio GitHub Copilot harness, Cowork and custom API clients consume Copilot Credits. Microsoft 365 controls user spending policies; Power Platform controls environment capacity and agent limits.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: configure both admin centers before rolling this out — set Work IQ spending policies in the Microsoft 365 admin center, allocate environment capacity in PPAC, and turn on Stop usage for agent limits.
- Leadership/Business: don't treat a low Cowork limit as a hard stop — it still grants access, and enforcement can lag behind actual consumption, so credits can burn past the configured limit before it bites.
