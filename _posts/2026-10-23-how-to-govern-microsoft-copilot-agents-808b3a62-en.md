---
title: How to govern Microsoft Copilot agents
description: Inventory Copilot Studio and SharePoint agents, assign ownership, rank
  risk and retire stale or exposed agents.
date: '2026-10-23T16:43:26Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
- coe
- copilot-studio
content_type: curated_summary
curation_id: 808b3a62f9e38817fca9ae7e
image:
  path: "/assets/img/curated/808b3a62f9e38817fca9ae7e.png"
  alt: 'Governance card: Every agent needs an owner, a risk rank and a review path.'
permalink: "/en/posts/how-to-govern-microsoft-copilot-agents-808b3a62/"
translation_url: "/de/posts/how-to-govern-microsoft-copilot-agents-808b3a62/"
source_url: https://rencore.com/en/blog/govern-copilot-agents/
source_site_url: https://rencore.com/
source_title: How to govern Microsoft Copilot agents
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: How should Copilot Studio and SharePoint agents be inventoried across
    a tenant?
  answer: List every agent in every environment, recording its builder, timing, environment,
    publication status, owner, sources, connectors, actions and sign-in requirement.
- question: What makes an unauthenticated Copilot agent risky?
  answer: An agent published without sign-in can be used by anyone with the link,
    while its risk also depends on data, actions and audience.
- question: When should stale Copilot Studio agents be retired?
  answer: Ask owners to unpublish or delete agents unused for 90 days or drafts left
    unpublished for 30 days, and record each decision.
---

## TL;DR

Inventory every Copilot Studio and SharePoint agent across all environments. Record its owner, knowledge sources, connectors, actions, publication and sign-in status, then rank risk by data sensitivity, action breadth and autonomy. Retire agents unused for 90 days or drafts left unpublished for 30 days.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep creation open in managed environments, assign an owner, and check publishing, reach, sources and sign-in status before agents expose data.
- Admins/CoE: Inventory every Copilot Studio and SharePoint agent across all environments, map sources, connectors, actions and usage, then rank risk and retain decisions.
- Security/Compliance: Prioritize agents with confidential data, broad or autonomous actions, no authentication, no owner or stale activity because these conditions increase exposure and weaken accountability.
- Leadership/Business: Require a second owner for business-critical agents and retire unused agents after 90 days or drafts after 30 days to align access and review effort.
