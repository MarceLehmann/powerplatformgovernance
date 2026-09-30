---
title: Manage Microsoft 365 Copilot agents with registry-first controls
description: Use the Microsoft 365 admin center registry to review, block, scope and
  govern Copilot agents across the tenant.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 85d6b60f7b999d9aa8ddc829
image:
  path: "/assets/img/curated/85d6b60f7b999d9aa8ddc829.png"
  alt: 'Governance card: You cannot govern agents you cannot see. Start with the registry.'
permalink: "/en/posts/manage-microsoft-365-copilot-agents-with-registry-first-controls-85d6b60f/"
translation_url: "/de/posts/manage-microsoft-365-copilot-agents-with-registry-first-controls-85d6b60f/"
source_url: https://www.andersjensen.org/en/articles/manage-agents-in-microsoft-365-copilot-admin-guide/
source_site_url: https://www.andersjensen.org/
source_title: 'How to Manage Agents in Microsoft 365 Copilot: Admin Guide'
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-07-24'
source_type: article
---

## TL;DR

In the Microsoft 365 admin center, Agents &gt; All agents lists tenant agents by status, platform and publisher. Review each agent&\#39;s data access and permissions, block unwanted agents with a recorded reason, or scope installation to groups. Use Agent Management Rules to transfer ownerless Agent Builder agents to the previous owner&\#39;s manager.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Start with the All agents registry, filter by publisher, platform and status, then review agent data access and permissions before rollout.
- Security/Compliance: Block unsuitable agents and record the reason; blocking removes the agent from users who already installed it.
- Admins/CoE: Use Specific users or groups for pilot rollout, and verify outside-pilot users cannot see scoped agents.
- Leadership/Business: Schedule quarterly reviews because Frontier-labelled controls, Agent 365 features and interface details change frequently.
