---
title: Govern AI across providers by anchoring governance to identity
description: Rencore recommends matching AI accounts to Entra ID so ownership, permissions,
  activity and access can be governed across providers.
date: '2026-09-25T11:32:53Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: '029320d18687daf7f760dbdb'
image:
  path: "/assets/img/curated/029320d18687daf7f760dbdb.png"
  alt: 'Governance card: Four consoles give four partial answers. Govern the person
    across the estate.'
permalink: "/en/posts/govern-ai-across-providers-by-anchoring-governance-to-identity-029320d1/"
translation_url: "/de/posts/govern-ai-across-providers-by-anchoring-governance-to-identity-029320d1/"
source_url: https://rencore.com/en/blog/four-consoles-one-person/
source_site_url: https://rencore.com/
source_title: Four consoles, one person
source_name: Rencore
source_language: en
source_language_name: English
source_author: Tiina Rytkönen
source_published_at: '2026-09-25'
source_updated_at: '2026-09-25'
source_type: article
faq:
  - question: "Why can a single AI provider's admin console not govern a company's whole AI estate?"
    answer: "Each console only sees its own provider, so none can answer what one person can access across every AI system. The source describes an employee with four accounts, four IDs and four audit trails that nothing connects. Vendors cannot see inside competitors' systems and have little reason to build cross-platform views, which leaves the gap sitting between the consoles."
  - question: "How does identity-based governance link AI accounts from different providers?"
    answer: "It matches every AI account to one person in Entra ID. The same employee then appears once with a combined inventory of everything they can reach, instead of separately in each tool. Users, projects, sessions, settings and spend feed into existing Microsoft 365 governance, so the same policies, automation and access reviews apply. It only works where a directory exists to match against."
  - question: "Why should companies not postpone governing their AI accounts?"
    answer: "Audit logs are not archives, and retention is limited, varying by provider and often by plan. Starting in eighteen months shows today's estate but not how it grew, and the past you did not record is gone. Sprawl also builds every month through new accounts, projects, shared files and permissions that someone has to clean up later."
  - question: "Does identity-based AI governance read prompts or file contents?"
    answer: "No. Conversations, file contents and prompt text are deliberately not examined. The approach looks at four things: who owns something, who can reach it, where it has been shared outside the company and how it is classified. The reasoning in the source is that risk sits in access, and an agent is only as safe as the data it can reach."
  - question: "How large is the governance surface of just one AI provider?"
    answer: "Rencore's analysis of a single provider found 46 organization-level settings, 464 audit log event types and 6 actor categories. According to the source, very little of that lines up with the next provider, and all of it changes when the provider changes its API. That is why the article argues for governance anchored to the person, which stays stable when tools are replaced."
---
## TL;DR

Rencore describes four separate AI accounts for one employee as four IDs and audit trails with no shared view. It recommends matching every AI account to Microsoft Entra ID, then governing users, projects, sessions, settings and spend through a shared inventory, policies, automation and access reviews.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Match AI accounts to Microsoft Entra ID so users, projects, sessions, settings and spend can be governed across providers.
- Security/Compliance: Check each provider&\#39;s finite audit-log retention and preserve records early because older incident history cannot be recovered.
- Leadership/Business: Treat multi-provider AI as an estate-wide governance responsibility because no single provider can answer what one person can reach across all tools.
