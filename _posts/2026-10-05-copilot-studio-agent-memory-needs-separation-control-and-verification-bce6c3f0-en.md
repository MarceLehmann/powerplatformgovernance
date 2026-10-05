---
title: Copilot Studio agent memory needs separation, control and verification
description: Copilot Studio stores agent memories per user, lets makers enable Memory,
  and requires testing for stale recall, hallucination and appropriate abstention.
date: '2026-10-05T16:37:54Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
- ownership
content_type: curated_summary
curation_id: bce6c3f02cb6a067f939cff8
image:
  path: "/assets/img/curated/bce6c3f02cb6a067f939cff8.png"
  alt: 'Governance card: Memory must remember the right things and know what it does
    not know.'
permalink: "/en/posts/copilot-studio-agent-memory-needs-separation-control-and-verification-bce6c3f0/"
translation_url: "/de/posts/copilot-studio-agent-memory-needs-separation-control-and-verification-bce6c3f0/"
source_url: https://microsoft.github.io/mcscatblog/posts/agent-memory/
source_site_url: https://microsoft.github.io/
source_title: 'Memory in Copilot Studio: How Agents Carry Knowledge Across Conversations'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Kaashyap Murali, Michal Sroka
source_published_at: '2026-10-05'
source_type: article
faq:
- question: How does Copilot Studio store agent memory for individual users?
  answer: Copilot Studio stores each user’s memories as files in a dedicated folder
    within Microsoft-managed storage for that agent. Other users and the maker cannot
    view them.
- question: How can users review or clear Copilot Studio agent memories?
  answer: Users can review or clear memories through the memory portal. In chat, they
    can also ask the agent to describe, update or forget stored information.
- question: What should teams test before expanding Copilot Studio Memory?
  answer: Teams should test recall, negative recall, abstention and hallucination.
    Memory should improve later recall without making the agent confidently repeat
    stale information or invent details.
---

## TL;DR

Copilot Studio Memory can be enabled from the Build tab. It captures relevant context, stores it as files in a dedicated Microsoft-managed folder for each user and agent, then applies it in later interactions. Users can inspect, update or clear memories through chat or a memory portal, while teams test recall and hallucination risks.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Enable Memory from the Build tab only when the agent needs continuity, then account for how captured context will influence later responses.
- Admins/CoE: Confirm that each user has a separate memory folder and that users can inspect, update or clear their own memories through chat or the memory portal.
- Security/Compliance: Treat memory as a quiet risk surface and validate stale recall, negative recall, abstention and hallucination before widening use.
- Leadership/Business: Measure whether memory improves recall without reducing the agent&\#39;s willingness to say it does not know.
