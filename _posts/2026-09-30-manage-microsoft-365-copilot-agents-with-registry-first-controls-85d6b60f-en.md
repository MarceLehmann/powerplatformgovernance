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
faq:
  - question: "Where can admins see every agent in a Microsoft 365 tenant?"
    answer: "In the Microsoft 365 admin center, open Agents, then All agents and the Registry tab. It lists each agent with its status, platform and publisher, and you can filter by status, publisher type, platform and channel. Clicking an agent opens a detail panel with users, data and tools, and permissions. A small company with five Copilot users still saw 356 agents in the registry."
  - question: "What happens when an admin blocks an agent in the Microsoft 365 registry?"
    answer: "Nobody in the organization can install or use the agent any more, and it is also removed from users who already installed it. The admin clicks Block at the top of the agent panel and can enter a reason before confirming. The author advises always writing the reason down, so a successor later understands why the agent was blocked."
  - question: "How do I limit a Microsoft 365 Copilot agent to a pilot group?"
    answer: "Open the agent in the registry, go to the Users tab and choose Available to. The options are All users, No users or Specific users or groups. Pick the last one, add the pilot groups and save. No users is useful for parking an agent while you decide. Scoping new agents to a pilot before a wide rollout is the recommended path."
  - question: "Why can Researcher and Analyst not be scoped to selected users?"
    answer: "Both are license-managed agents. They are installed automatically for licensed users and governed by the license, so the Users tab for them is informational only and offers no scoping. The author lists this among the common pitfalls. Padlock icons in the same screens mean a feature needs Agent 365, which is a paid control plane, and are not errors."
  - question: "How can I verify that agent scoping and blocking actually work?"
    answer: "Open the Agent Store in Microsoft 365 Copilot and compare it with your decisions. Blocked agents should be gone and scoped agents should only show for the right groups. The article advises signing in as a user outside a pilot group and confirming that the scoped agent does not appear for that person."
---

## TL;DR

In the Microsoft 365 admin center, Agents &gt; All agents lists tenant agents by status, platform and publisher. Review each agent&\#39;s data access and permissions, block unwanted agents with a recorded reason, or scope installation to groups. Use Agent Management Rules to transfer ownerless Agent Builder agents to the previous owner&\#39;s manager.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Start with the All agents registry, filter by publisher, platform and status, then review agent data access and permissions before rollout.
- Security/Compliance: Block unsuitable agents and record the reason; blocking removes the agent from users who already installed it.
- Admins/CoE: Use Specific users or groups for pilot rollout, and verify outside-pilot users cannot see scoped agents.
- Leadership/Business: Schedule quarterly reviews because Frontier-labelled controls, Agent 365 features and interface details change frequently.
