---
title: Choose Copilot Studio harnesses by identity, predictability and cost
description: Use organisation identities, DLP and least privilege for autonomous agents.
  Match deterministic work to the standard harness and exception handling to the Microsoft
  Copilot harness.
date: '2026-11-03T04:43:45Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- dlp
- alm
- copilot-studio
content_type: curated_summary
curation_id: b0fd668e07c2fb65146d602a
image:
  path: "/assets/img/curated/b0fd668e07c2fb65146d602a.png"
  alt: 'Governance card: Permissions are the wall. Instructions are only requests.'
permalink: "/en/posts/choose-copilot-studio-harnesses-by-identity-predictability-and-cost-b0fd668e/"
translation_url: "/de/posts/choose-copilot-studio-harnesses-by-identity-predictability-and-cost-b0fd668e/"
source_url: https://www.karlex.fi/five-microsoft-agent-tools-one-licence-review-on-whose-behalf-and-how-predictably/
source_site_url: https://www.karlex.fi/
source_title: 'Five Microsoft agent tools, one licence review: on whose behalf, and
  how predictably?'
source_name: Karlex
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-11-03'
source_type: article
faq:
- question: How do Copilot Studio standard and Microsoft Copilot harnesses differ?
  answer: The standard harness follows maker-defined topics, tools, flows and variables.
    The Microsoft Copilot harness plans its own route, retains memory and handles
    errors.
- question: Can a Copilot Studio hook be the only protection against protected-group
    licence removals?
  answer: No, a hook cannot be the only safeguard because a failed hook lets the action
    proceed. The agent account should lack permission to change licences for protected
    groups.
- question: When does a Copilot Studio licence-review flow consume Copilot Credits?
  answer: A recurrence-triggered or autonomous flow consumes credits at the standard
    rate. The zero-rated flow case requires a licensed user interacting through the
    agent trigger.
---

## TL;DR

Copilot Chat, Agent Builder and Cowork run on an individual user&\#39;s identity, while Copilot Studio harnesses create organisation agents with separate publishing, DLP and ALM. Use the standard harness for deterministic workflows and the Microsoft Copilot harness for reasoning-heavy exceptions. Autonomous and recurrence-triggered flows consume Copilot Credits.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose the standard harness when the same input must produce the same output, and reserve the Microsoft Copilot harness for exceptions requiring reasoning.
- Admins/CoE: Build organisation-owned licence-review workflows with Dataverse, DLP and ALM instead of relying on one person&\#39;s Cowork.
- Security/Compliance: Prevent protected-group licence changes through the agent account&\#39;s permissions, because instructions and failed hooks are not sufficient safeguards.
- Leadership/Business: Compare Copilot Credit costs with licence savings before automating a licence review.
