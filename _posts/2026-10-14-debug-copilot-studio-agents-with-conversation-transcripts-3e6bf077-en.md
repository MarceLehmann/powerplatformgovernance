---
title: Debug Copilot Studio Agents with Conversation Transcripts
description: Use test pane snapshots, Application Insights and Dataverse transcripts
  to trace routing, tools, knowledge sources, latency and outcomes.
date: '2026-10-14T17:00:04Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- dataverse
- power-apps
- governance
content_type: curated_summary
curation_id: 3e6bf07757d12cef165b0e63
image:
  path: "/assets/img/curated/3e6bf07757d12cef165b0e63.png"
  alt: 'Governance card: Copilot Studio transcripts reveal the path, not the full
    prompt.'
permalink: "/en/posts/debug-copilot-studio-agents-with-conversation-transcripts-3e6bf077/"
translation_url: "/de/posts/debug-copilot-studio-agents-with-conversation-transcripts-3e6bf077/"
source_url: https://microsoft.github.io/mcscatblog/posts/open-the-hood-copilot-studio-transcripts/
source_site_url: https://microsoft.github.io/
source_title: 'Open the Hood: What Your Copilot Studio Agent Is Really Doing'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Roel Schenk
source_published_at: '2026-03-19'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I save a Copilot Studio botcontent transcript snapshot from the
    test pane?
  answer: Select the three dots beside Test your agent, choose Save snapshot, then
    open dialog.json inside the downloaded botcontent zip.
- question: When should I use Application Insights versus the Dataverse ConversationTranscript
    table for Copilot Studio troubleshooting?
  answer: Use Application Insights for near real-time errors, latency and dependency
    failures; use Dataverse transcripts for orchestration, knowledge-source and session
    context.
- question: Why can Copilot Studio transcripts omit system prompts and SharePoint
    grounded responses?
  answer: Full system prompts are withheld as a security safeguard, and responses
    using sensitive SharePoint data may be excluded as a privacy safeguard.
---

## TL;DR

Copilot Studio conversation transcripts expose topic routing, tool calls, knowledge searches, orchestration plans, timestamps and session outcomes. Makers can save a botcontent snapshot from the test pane, while support teams can combine Application Insights with Dataverse transcripts. Analysts can use built-in Analytics, the Copilot Studio Kit or Fabric for larger-scale trends.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Save a botcontent snapshot from the test pane and inspect dialog.json to identify routing, tool, knowledge-source and latency problems with evidence.
- Admins/CoE: Connect production agents to Application Insights, then use the conversation ID to locate errors and pull the Dataverse transcript when deeper context is needed.
- Security/Compliance: Remember that full system prompts and some SharePoint responses containing sensitive data are excluded, so transcripts do not represent every model input or output.
