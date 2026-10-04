---
title: Review Copilot Studio Agents Before Release with Agent Review Tool
description: Use Agent Review Tool to inspect findings, skill quality, evaluation
  coverage and configuration relationships before releasing a Copilot Studio agent.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
content_type: curated_summary
curation_id: 3544e541766d31b93320ee59
permalink: "/en/posts/review-copilot-studio-agents-before-release-with-agent-review-tool-3544e541/"
translation_url: "/de/posts/review-copilot-studio-agents-before-release-with-agent-review-tool-3544e541/"
source_url: https://microsoft.github.io/mcscatblog/posts/agent-review-tool/
source_site_url: https://microsoft.github.io/
source_title: 'Review Before Release: Using Agent Review Tool for Copilot Studio Agents'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Ramakrishnan Raman
source_published_at: '2026-08-18'
faq:
  - question: "What is the Agent Review Tool and where do you get it?"
    answer: "It is a review tool for Copilot Studio agents before release and part of the Copilot Agent Kit. It is available through the Microsoft Marketplace."
  - question: "By which four criteria does the tool judge the quality of instructions?"
    answer: "The instruction rating follows four dimensions: Clarity, Actionability, Scope discipline and Composability."
  - question: "How did the results change in the example after the rework?"
    answer: "The fictional ZAVA Visual Merchandiser started with 63 percent, 39 of 54 checks passed, 8 errors and 7 warnings."
---
## TL;DR

Agent Review Tool in Copilot Agent Kit combines deterministic checks with AI-supported analysis across findings, skill quality, evaluation coverage and agent architecture. Establish a baseline, investigate evidence by severity and skill, inspect related capabilities in Agent map, make one focused correction, rerun evaluations and review again. A ZAVA example improved from 63% and 39/54 checks passing to 67% and 51/54, while evaluation coverage remained 0/7.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: building or fixing an agent should follow the tool's actual workflow — baseline, investigate by severity and skill, inspect related capabilities in Agent map, make one focused correction, then rerun evaluations — rather than chasing the percentage directly.
- Leadership/Business: don't read an improved score alone as proof of readiness — in the ZAVA example the check-pass rate rose from 39/54 to 51/54 while evaluation coverage stayed at 0/7, meaning runtime behavior was never actually verified.
- Admins/CoE: treat any Agent Review score as triage input for release decisions, not a certification gate, since the tool finds configuration issues but doesn't prove an agent invokes correctly in production.
