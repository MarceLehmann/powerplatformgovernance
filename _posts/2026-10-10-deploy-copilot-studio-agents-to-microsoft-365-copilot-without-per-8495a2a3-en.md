---
title: Deploy Copilot Studio Agents to Microsoft 365 Copilot Without Per User Licenses
description: Copilot Chat users can access Copilot Studio agents through Copilot Credits,
  while admins govern deployment, capacity allocation and channel behavior.
date: '2026-10-10T16:54:15Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- alm
- environments
- copilot-studio
content_type: curated_summary
curation_id: 8495a2a359157ea44e96b43d
image:
  path: "/assets/img/curated/8495a2a359157ea44e96b43d.png"
  alt: 'Governance card: A Copilot license is not the gate. Capacity and channel behavior
    are.'
permalink: "/en/posts/deploy-copilot-studio-agents-to-microsoft-365-copilot-without-per-8495a2a3/"
translation_url: "/de/posts/deploy-copilot-studio-agents-to-microsoft-365-copilot-without-per-8495a2a3/"
source_url: https://microsoft.github.io/mcscatblog/posts/no-copilot-license-m365-channel/
source_site_url: https://microsoft.github.io/
source_title: No, You Don't Need a Copilot License to Deploy Agents to Microsoft 365
  Copilot
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Henry Jammes
source_published_at: '2026-04-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I make a Copilot Studio agent available in Microsoft 365 Copilot?
  answer: Connect the Teams and Microsoft 365 Copilot channel, then enable Make agent
    available in Microsoft 365 Copilot. Users can select it with @.
- question: Do Copilot Chat users need a Microsoft 365 Copilot license for Copilot
    Studio agents?
  answer: No. Copilot Chat is sufficient, and agent consumption can be covered through
    Copilot Credits rather than per user Copilot licensing.
- question: Why does Conversation Start not work for a Copilot Studio agent in Microsoft
    365 Copilot?
  answer: Microsoft 365 Copilot does not support the Conversation Start system topic.
    Use an Activity Event triggered topic when context values are unknown.
---

## TL;DR

Copilot Studio agents can be published to Microsoft 365 Copilot through the Make agent available in Microsoft 365 Copilot toggle. Copilot Chat users do not need a Microsoft 365 Copilot license, because usage can use Copilot Credits. From April 20, 2026, standalone prepaid capacity packs no longer require an Azure subscription.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Enable the Microsoft 365 Copilot channel and replace Conversation Start logic with an Activity Event trigger, because Conversation Start is unsupported there.
- Admins/CoE: Use Copilot Credit Policies for Entra ID groups and pin agents for target users, so capacity and rollout can be managed centrally.
- Security/Compliance: Test agents in both Teams and Microsoft 365 Copilot, because features such as embedded URLs, Adaptive Cards, hand-off and feedback behave differently.
