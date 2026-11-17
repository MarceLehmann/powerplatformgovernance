---
title: 'EU AI Act and Copilot Studio agents: where Microsoft Purview helps and where
  it stops'
description: The EU AI Act high-risk deadline moved to December 2027, but transparency
  rules for chatbots and agents still apply. Purview covers data controls, not agent
  inventory or ownership.
date: '2026-11-17T10:40:07Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- compliance
- dlp
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 295e69025542da0e52768e2d
image:
  path: "/assets/img/curated/295e69025542da0e52768e2d.png"
  alt: 'Governance card: The high-risk deadline moved, but agents must still disclose
    they are AI.'
permalink: "/en/posts/eu-ai-act-and-copilot-studio-agents-where-microsoft-purview-helps-and-295e6902/"
translation_url: "/de/posts/eu-ai-act-and-copilot-studio-agents-where-microsoft-purview-helps-and-295e6902/"
source_url: https://rencore.com/en/blog/tackling-eu-ai-act-what-microsoft-purview-can-and-cant-do-for-you/
source_site_url: https://rencore.com/
source_title: 'Tackling the EU AI Act: What Microsoft Purview can (and can''t) do
  for you'
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Jasper Oosterveld
source_published_at: '2026-11-17'
source_type: article
faq:
- question: Do chatbots built in Copilot Studio need to identify themselves under
    the EU AI Act?
  answer: Yes. The Commission's transparency guidance says agents designed to interact
    with people must disclose it upfront, so a greeting that never mentions being
    AI may not suffice.
- question: What can Microsoft Purview not do for Copilot Studio agent governance?
  answer: It shows when an agent opened a confidential file but not who built it,
    whether that person still works for you, when it was last used, or how many copies
    exist.
- question: How long does Microsoft Purview Audit retain Copilot and AI agent interaction
    logs?
  answer: Audit Standard retains records for 180 days and Audit Premium can keep Exchange
    Online, SharePoint, OneDrive and Entra records for one year for licensed users.
    Records already written keep their original expiry date.
---

## TL;DR

The high-risk AI deadline moved to 2 December 2027, but transparency rules stayed: since 2 August 2026, agents and chatbots must tell people they are AI. Purview DSPM lists AI apps, sensitivity labels and DLP control what Copilot reads, and audit logs last 180 days to one year. Purview still cannot name agent owners or inventory them.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: an unapproved Copilot Studio agent aimed at HR data for shortlisting can pull your organization toward provider obligations and high-risk classification, so review agents before publishing.
- Admins/CoE: review every published agent greeting, set audit retention before new activity since changes are not retroactive, and check the Risky Agents alerts Purview may already generate.
- Security/Compliance: DLP does not inspect files users attach straight to a Copilot prompt, and without onboarded devices and the browser extension, unmanaged AI app use stays invisible.
- Leadership/Business: fines reach 15 million euros or 3 percent of worldwide turnover, and procurement now asks suppliers to disclose AI use, so funding agent inventory and ownership protects deals and Copilot trust.
