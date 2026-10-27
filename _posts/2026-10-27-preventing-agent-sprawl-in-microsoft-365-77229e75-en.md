---
title: Preventing Agent Sprawl in Microsoft 365
description: A centralized Agent Registry, unique identities, least privilege and
  quarantine workflows help control unmanaged AI workers.
date: '2026-10-27T16:41:04Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- compliance
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 77229e75ec9bfec0ed2cbbb2
image:
  path: "/assets/img/curated/77229e75ec9bfec0ed2cbbb2.png"
  alt: 'Governance card: Every agent needs an identity and an owner. Unmanaged automation
    creates hidden access doors.'
permalink: "/en/posts/preventing-agent-sprawl-in-microsoft-365-77229e75/"
translation_url: "/de/posts/preventing-agent-sprawl-in-microsoft-365-77229e75/"
source_url: https://www.m365.fm/blog/preventing-agent-sprawl-in-microsoft-365/
source_site_url: https://www.m365.fm/
source_title: Preventing Agent Sprawl in Enterprise Microsoft 365 Environments
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-27'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: How should an Agent Registry track Microsoft 365 AI agents?
  answer: An Agent Registry should inventory native, partner, sanctioned internal
    and locally shared agents in one management pane. It can expose active, orphaned
    and shadow agents.
- question: Why should Microsoft 365 AI agents use separate identities?
  answer: Separate identities let administrators recognize each bot, apply scoped
    permissions and revoke access when anomalous behavior suggests compromise. Creator
    logins are treated as an insecure shadow proxy model.
- question: What does quarantining a risky AI agent do?
  answer: Quarantine blocks the agent from discovering company resources or communicating
    with other bots. Surrounding business workflows can continue while security teams
    investigate.
---

## TL;DR

Low-code tools can create unmanaged AI agents that access email, files and business systems. The source recommends an Agent Registry covering native, partner, sanctioned internal and locally shared agents, plus unique identities, least-privilege permissions and quarantine workflows for risky automation.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Create one Agent Registry for native, partner, sanctioned internal and locally shared agents, so orphaned and shadow agents become visible.
- Security/Compliance: Give every agent a unique identity and least-privilege permissions, then quarantine risky agents while investigations continue without disrupting surrounding workflows.
- Leadership/Business: Avoid blanket AI bans because employees may bypass them; support centralized controls that preserve automation while protecting enterprise data.
