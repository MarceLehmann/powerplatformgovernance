---
title: Handing Over to Live Agents Without Losing Control
description: A Copilot Studio pattern uses M365 Agents SDK skills and Teams proactive
  messaging to connect live chat systems while retaining channel control.
date: '2026-10-22T17:01:26Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
- environments
- ownership
content_type: curated_summary
curation_id: f1b9e8dc3bfd2877ba540f7b
image:
  path: "/assets/img/curated/f1b9e8dc3bfd2877ba540f7b.png"
  alt: 'Governance card: Keep Copilot Studio in control while live agents respond
    asynchronously. Return the conversation without losing context.'
permalink: "/en/posts/handing-over-to-live-agents-without-losing-control-f1b9e8dc/"
translation_url: "/de/posts/handing-over-to-live-agents-without-losing-control-f1b9e8dc/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-handover-live-agent/
source_site_url: https://microsoft.github.io/
source_title: Handing Over to Live Agents Without Losing Control
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Mateusz Wasilewski
source_published_at: '2025-12-14'
source_updated_at: '2026-08-05'
source_type: article
faq:
- question: How does the Copilot Studio Handover Sample return Teams conversations
    after live-agent escalation?
  answer: The handover skill closes the live chat session, allowing the conversation
    to return to Copilot Studio without a separate widget or lost context.
- question: Why does this Copilot Studio live-agent pattern work only in Microsoft
    Teams?
  answer: It relies on Teams proactive messaging for asynchronous responses. Other
    channels require an adapted messaging mechanism.
- question: What authentication setup does HandoverToLiveAgentSample require?
  answer: It requires two Azure AD app registrations, one for the skill and one for
    the Copilot Studio agent, which is auto-created during solution import.
animation:
  video: /assets/img/animations/f1b9e8dc3bfd2877ba540f7b-en.mp4
  poster: /assets/img/animations/f1b9e8dc3bfd2877ba540f7b-en.poster.webp
  width: 800
  height: 450
  alt: "A four step flow shows Copilot Studio sending through an M365 Agents SDK skill, Teams proactive messaging carrying async replies, session mapping routing to live chat, and the session closing to return to Copilot Studio."
---

## TL;DR

The Copilot Studio Handover Sample uses an M365 Agents SDK skill as a message broker, Teams proactive messaging for asynchronous live-agent replies, and session mapping to route conversations to a third-party live chat system and return users to Copilot Studio.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Import the pre-built solution and configure its escalation topics and environment variables to test the handover flow.
- Admins/CoE: Plan two Azure AD app registrations, local endpoints and authentication configuration before deployment because the sample setup is involved.
- Security/Compliance: Verify authentication between Copilot Studio, Azure Bot Service and the live chat platform before enabling message routing.
