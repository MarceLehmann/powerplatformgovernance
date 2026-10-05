---
title: Control E3 Agent Creation in Copilot Studio
description: E3 and E5 can include classic Copilot Studio agent creation through Power
  Virtual Agents for Office 365. Disable that service plan per user or by group.
date: '2026-10-05T16:57:58Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- copilot-studio
- environments
- dataverse
- alm
content_type: curated_summary
curation_id: 36e3ff4401291219904663f9
image:
  path: "/assets/img/curated/36e3ff4401291219904663f9.png"
  alt: 'Governance card: A hidden service plan can open agent creation to E3 users.
    Govern the entitlement before agents and environments spread.'
permalink: "/en/posts/control-e3-agent-creation-in-copilot-studio-36e3ff44/"
translation_url: "/de/posts/control-e3-agent-creation-in-copilot-studio-36e3ff44/"
source_url: https://microsoft.github.io/mcscatblog/posts/e3-users-build-agents-turn-it-off/
source_site_url: https://microsoft.github.io/
source_title: Why Your E3 Users Can Suddenly Build Agents in Copilot Studio and How
  to Turn It Off
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Em D'Arcy
source_published_at: '2026-07-09'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How can admins stop E3 users creating classic agents in Copilot Studio?
  answer: Disable the Power Virtual Agents for Office 365 service plan per user or
    through group-based licensing in Microsoft Entra ID.
- question: What does Power Virtual Agents for Office 365 enable for Microsoft 365
    E3 users?
  answer: It enables classic agent creation in Dataverse for Teams environments and
    publishing to Teams, without granting generative orchestration or premium connectors.
- question: Does disabling the service plan delete existing Copilot Studio agents
    or environments?
  answer: No. Disabling it blocks creating and editing for affected users, but does
    not delete existing agents or clean up provisioned Dataverse for Teams environments.
---

## TL;DR

Microsoft 365 E3 and E5 can include classic agent creation through the Power Virtual Agents for Office 365 service plan. Disabling that plan per user or through Microsoft Entra ID group-based licensing blocks creating and editing classic agents, but does not delete existing agents or Dataverse for Teams environments.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Disable Power Virtual Agents for Office 365 per user or through group-based licensing to control classic agent creation consistently.
- Admins/CoE: Audit existing Dataverse for Teams environments before tightening access because disabling the plan does not remove existing agents or environments.
- Security/Compliance: Apply Managed Environments and DLP policies after the access change so permitted makers remain within governance guardrails.
