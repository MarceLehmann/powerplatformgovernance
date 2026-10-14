---
title: 'Copilot Studio Topics: Logging Reasoning and Capturing Conversation History'
description: Use Copilot Studio topics to surface orchestrator steps or capture conversation
  history, while controlling credit use and protecting sensitive transcript data.
date: '2026-10-14T17:00:06Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- compliance
- copilot-studio
- dataverse
- governance
content_type: curated_summary
curation_id: 6b21ea5feb67814ca2e65e4a
image:
  path: "/assets/img/curated/6b21ea5feb67814ca2e65e4a.png"
  alt: 'Governance card: Conversation history is best effort, not a compliance record.
    Protect transcripts as sensitive data.'
permalink: "/en/posts/copilot-studio-topics-logging-reasoning-and-capturing-conversation-6b21ea5f/"
translation_url: "/de/posts/copilot-studio-topics-logging-reasoning-and-capturing-conversation-6b21ea5f/"
source_url: https://microsoft.github.io/mcscatblog/posts/power-of-topics-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'The Orchestrator’s Secrets: Chain-of-Thought & Transcript on Demand'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Remi Dyon
source_published_at: '2026-03-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How can a Copilot Studio topic expose orchestrator reasoning after each
    tool call?
  answer: Create a non prompting logging topic with an input variable and message
    node, then instruct the agent to call it after each step.
- question: Does Copilot Studio conversationHistory provide a verbatim transcript
    for compliance records?
  answer: No. The variable contains a best effort reconstruction, so dedicated logging
    is needed when compliance requires an accurate record.
- question: How should Copilot Studio transcript data be protected before sending
    it to Dataverse or email?
  answer: Treat transcripts as sensitive data, obtain consent, send only necessary
    content, apply retention policies and limit access to authorised apps and people.
---

## TL;DR

Copilot Studio can call a non prompting logging topic after each tool or step to surface orchestrator reasoning, but this increases Copilot credits. A second topic can capture a best effort conversation transcript in a variable for summaries, tickets, Dataverse or escalation, though compliance grade records require dedicated logging and privacy controls.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Add non prompting topics and explicit input descriptions to log steps or capture history, then guard against recursive logging.
- Admins/CoE: Limit reasoning logging with debug modes, selected channels or long running tasks because each extra call increases Copilot credits.
- Security/Compliance: Treat captured transcripts as sensitive data, obtain consent, minimise content, enforce retention and restrict access.
- Leadership/Business: Use dedicated logging for compliance grade records because the runtime transcript is best effort rather than verbatim.
