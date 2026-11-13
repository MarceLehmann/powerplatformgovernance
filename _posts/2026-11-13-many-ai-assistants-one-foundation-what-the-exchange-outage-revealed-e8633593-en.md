---
title: 'Many AI assistants, one foundation: what the Exchange outage revealed about
  shared AI dependencies'
description: The November 2026 Exchange Online outage showed that Copilot, Claude
  and ChatGPT all depend on the same Microsoft 365 estate of data, permissions and
  availability.
date: '2026-11-13T16:43:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- ownership
- security
content_type: curated_summary
curation_id: e86335935b78e723b0c6dc1d
image:
  path: "/assets/img/curated/e86335935b78e723b0c6dc1d.png"
  alt: 'Governance card: Every AI assistant inherits your permissions and your downtime.
    The models differ, the foundation does not.'
permalink: "/en/posts/many-ai-assistants-one-foundation-what-the-exchange-outage-revealed-e8633593/"
translation_url: "/de/posts/many-ai-assistants-one-foundation-what-the-exchange-outage-revealed-e8633593/"
source_url: https://rencore.com/en/blog/many-ai-assistants-one-foundation/
source_site_url: https://rencore.com/
source_title: Many AI assistants, one foundation
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Matthias Einig
source_published_at: '2026-11-13'
source_updated_at: '2026-11-13'
source_type: article
faq:
- question: Did the November 2026 Exchange Online outage affect Claude and ChatGPT
    access to Microsoft 365?
  answer: According to reports, the Microsoft 365 connectors those assistants use
    to reach mail and files were affected, and Microsoft 365 Copilot was listed among
    the affected services.
- question: Who should own an app or AI agent when the builder has left the company?
  answer: An active, named owner today, not the departed builder. A review that needs
    a week to assemble the inventory has found a governance gap, not a resilience
    one.
- question: What share of organizations lack the governance controls to deploy AI
    agents at scale?
  answer: Gartner reports that 80 percent of organizations say they lack the governance
    controls to deploy AI agents at scale.
---

## TL;DR

During the 16-hour Exchange Online outage of 12 November 2026, Microsoft 365 Copilot was listed as affected, and connectors other assistants use for mail and files were reportedly affected too. Claude and ChatGPT reach the same SharePoint sites, mailboxes and Entra ID identities as Copilot, so three assistants mean one shared dependency. Gartner: 26% versus 3% Copilot value, 80% lack agent governance controls.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Widen post-incident reviews to three questions: what is built on Microsoft 365 including flows, apps and agents built outside IT, what each reaches, and who actively owns it today.
- Security/Compliance: Assistants read at the access you already grant, so every oversharing gap becomes an AI risk; fix permissions before rolling out more assistants.
- Leadership/Business: Adding Claude or ChatGPT beside Copilot does not diversify vendors while everything runs on one Microsoft 365 estate; Gartner links strong Microsoft 365 governance to 26% versus 3% Copilot value realization.
- Makers: Name an active, current owner for every flow, app and agent you build, so recovery does not stall on someone who has left.
