---
title: Get Conversation IDs for Copilot Studio Agents
description: Use the correct debug command to retrieve a Conversation ID from custom
  or declarative agents and give support teams the details they need.
date: '2026-10-19T16:55:56Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
- ownership
content_type: curated_summary
curation_id: ff37005e9e42ea140df8f5f4
image:
  path: "/assets/img/curated/ff37005e9e42ea140df8f5f4.png"
  alt: 'Governance card: Every agent chat needs a traceable identifier. Get the Conversation
    ID before asking for help.'
permalink: "/en/posts/get-conversation-ids-for-copilot-studio-agents-ff37005e/"
translation_url: "/de/posts/get-conversation-ids-for-copilot-studio-agents-ff37005e/"
source_url: https://microsoft.github.io/mcscatblog/posts/conversationid-users/
source_site_url: https://microsoft.github.io/
source_title: How to Get Your Conversation ID When Chatting with Agents
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Chris Garty
source_published_at: '2026-01-24'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I retrieve a Conversation ID for a custom Copilot Studio agent?
  answer: Type /debug conversationid in the chat; the agent displays the Conversation
    ID for that specific session.
- question: Which command reveals a Conversation ID for a declarative agent in Microsoft
    365 Copilot?
  answer: Type /debug in Microsoft 365 Copilot; the declarative agent shows a debugging
    card that includes the Conversation ID.
- question: What details should I send with a Copilot Studio Conversation ID when
    requesting support?
  answer: Include the Conversation ID, where and when you used the agent, and what
    you expected compared with what happened.
animation:
  src: /assets/img/animations/ff37005e9e42ea140df8f5f4-en.gif
  poster: /assets/img/animations/ff37005e9e42ea140df8f5f4-en.poster.png
  width: 800
  height: 450
  alt: "Sequence shows entering the debug command in chat, receiving the Conversation ID or debugging card, and sending the ID with location, time, and expected versus actual behaviour to support."
---

## TL;DR

Custom agents show a Conversation ID after users type /debug conversationid in Microsoft 365 Copilot, Teams, or another chat experience. Declarative agents use /debug in Microsoft 365 Copilot and return a debugging card containing the identifier. Users should share the ID, usage location and time, and expected versus actual behaviour.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use the Conversation ID to locate the exact agent session connected to a reported problem, especially when investigating user interactions.
- Admins/CoE: Ask for the identifier, chat surface, timing, and expected versus actual result so support can locate and investigate the relevant conversation.
- Security/Compliance: Treat full conversation access as permission controlled. Makers can view conversations for agents they own, while administrators and support staff need appropriate assigned roles or data access.
