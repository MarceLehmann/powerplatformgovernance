---
title: Give Copilot Studio owners visibility of shared environment credits
description: A maker-only credit view can show environment allocation, monthly consumption,
  daily use and per-agent billed credits.
date: '2026-10-20T04:36:23Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
- copilot-studio
- power-automate
- ownership
content_type: curated_summary
curation_id: 66fd559e7358e278a71e1236
image:
  path: "/assets/img/curated/66fd559e7358e278a71e1236.png"
  alt: 'Governance card: Agent owners need visibility of the shared environment credit
    pool.'
permalink: "/en/posts/give-copilot-studio-owners-visibility-of-shared-environment-credits-66fd559e/"
translation_url: "/de/posts/give-copilot-studio-owners-visibility-of-shared-environment-credits-66fd559e/"
source_url: https://www.karlex.fi/__trashed-8/
source_site_url: https://www.karlex.fi/
source_title: Agent owners should follow environment Copilot Credit usage – not the
  admins
source_name: Karlex Oy
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-20'
source_type: article
faq:
- question: Who should see Copilot Studio environment credit usage?
  answer: Environment Makers and users with higher roles should see it. Basic Users
    who only run an app do not need the environment credit view.
- question: How does the Copilot credit view decide which environments to show?
  answer: It matches a user's Microsoft Entra group memberships with group teams holding
    Environment Maker or higher roles. Directly assigned roles are intentionally excluded.
- question: What Copilot Studio credit data does Get All Resource Thresholds return?
  answer: It returns month-to-date billed credits per agent. It lists only agents
    that have a threshold row, which the view should disclose.
---

## TL;DR

Copilot Studio agent owners can see their own agent&\#39;s consumption, but shared environment credit allocation and other agents&\#39; use are normally available only to admins. A custom view should show makers their eligible environments, usage against each allocation, daily consumption and per-agent billed credits.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Review usage against the environment allocation and identify agents consuming shared credits before the environment limit is reached.
- Admins/CoE: Grant maker rights through Microsoft Entra group teams and expose credit data only where users hold Environment Maker or higher.
- Security/Compliance: Account for known collection limits, including 403 responses from Entitlement Insight and resource thresholds that omit agents without threshold rows.
