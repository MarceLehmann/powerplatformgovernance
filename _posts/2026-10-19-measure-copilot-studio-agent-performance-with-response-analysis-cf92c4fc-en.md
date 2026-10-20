---
title: Measure Copilot Studio Agent Performance with Response Analysis
description: Use the M365 Agents SDK, Python DataFrames and Gradio to measure latency,
  inspect planner activity and visualize Copilot Studio agent execution.
date: '2026-10-19T16:55:57Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- copilot-studio
content_type: curated_summary
curation_id: cf92c4fc56714df93d079ba6
image:
  path: "/assets/img/curated/cf92c4fc56714df93d079ba6.png"
  alt: 'Governance card: Never commit access tokens or credentials to source control.
    Store them securely instead.'
permalink: "/en/posts/measure-copilot-studio-agent-performance-with-response-analysis-cf92c4fc/"
translation_url: "/de/posts/measure-copilot-studio-agent-performance-with-response-analysis-cf92c4fc/"
source_url: https://microsoft.github.io/mcscatblog/posts/response-analysis-copilot-tool/
source_site_url: https://microsoft.github.io/
source_title: 'Agentic Tooling: Making Agent Performance Transparent and Measurable'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Vineet Kaul
source_published_at: '2026-01-16'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does the M365 Agents SDK measure Copilot Studio response latency?
  answer: It records timestamps for message Activities and calculates elapsed time,
    then aggregates mean, median, standard deviation, maximum, and correlation metrics.
- question: What does the Response Analysis tool capture from Copilot Studio Activity
    events?
  answer: It records planner steps, tool calls, and execution details from event Activities,
    while message Activities provide final response text.
- question: How should Copilot Studio access tokens be stored when using the analysis
    tool?
  answer: Store tokens in environment variables or secure credential stores, never
    source control, and implement proper token refresh logic.
animation:
  src: /assets/img/animations/cf92c4fc56714df93d079ba6-en.gif
  poster: /assets/img/animations/cf92c4fc56714df93d079ba6-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows the Response Analysis tool sending test utterances to a Copilot Studio agent, capturing Activities, calculating latency statistics, and streaming metrics and planner data to Gradio."
---

## TL;DR

The Response Analysis tool uses the M365 Agents SDK to send test utterances to a Copilot Studio agent, capture message and event Activities, calculate latency statistics with Python DataFrames, and stream metrics and planner data to a Gradio dashboard. The implementation is limited to single-session analysis and requires secure token handling.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Run single-session tests with the Response Analysis tool to isolate telemetry and refine agent instructions using measured behavior.
- Admins/CoE: Verify environment prerequisites before setup and account for the tool&\#39;s single-session limitation when planning testing workflows.
- Security/Compliance: Keep access tokens out of source control, use environment variables or secure credential stores, and implement token refresh logic.
