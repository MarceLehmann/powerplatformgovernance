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
    answer: "It is a review tool for Copilot Studio agents before release and part of the Copilot Agent Kit. It is available through the Microsoft Marketplace. At the time of the post on August 18, 2026, it was a preview experience. The workspace has three sections: Review, Agent map, and Cost and efficiency."
  - question: "By which four criteria does the tool judge the quality of instructions?"
    answer: "The instruction rating follows four dimensions: Clarity, Actionability, Scope discipline and Composability. In the GitHub Copilot context the post adds that a skill must distinguish itself from all alternatives so the agent selects it reliably. The post walks through these four dimensions with a fictional retail agent and shows how the findings change after a rewrite."
  - question: "How did the results change in the example after the rework?"
    answer: "The fictional ZAVA Visual Merchandiser started with 63 percent, 39 of 54 checks passed, 8 errors and 7 warnings. After the rework it showed 67 percent, 51 of 54 checks, no errors and 2 warnings. Average skill quality rose from 64 to 90 percent. Evaluation coverage stayed at 0 of 7."
  - question: "How is the score built, and what role does AI play in it?"
    answer: "The score rests on rule-based pillars for evaluation readiness and instructions, so it is deterministic. The evaluation pillar enters with a fixed weight of 30 percent. AI-assisted findings appear only as supporting evidence and do not change the deterministic scores."
  - question: "What does the agent map show, and which flaw did the tool find in the example?"
    answer: "The agent map shows the reviewed configuration as a map or list of skills, tools, knowledge sources and other components, without proving that anything ran. In the example, the display-audit skill named two capabilities, Merchandising Scorecard and Regional Escalation Agent, that the agent did not have configured. The author rewrote the skill to use only configured capabilities."
---
## TL;DR

Agent Review Tool in Copilot Agent Kit combines deterministic checks with AI-supported analysis across findings, skill quality, evaluation coverage and agent architecture. Establish a baseline, investigate evidence by severity and skill, inspect related capabilities in Agent map, make one focused correction, rerun evaluations and review again. A ZAVA example improved from 63% and 39/54 checks passing to 67% and 51/54, while evaluation coverage remained 0/7.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: building or fixing an agent should follow the tool's actual workflow — baseline, investigate by severity and skill, inspect related capabilities in Agent map, make one focused correction, then rerun evaluations — rather than chasing the percentage directly.
- Leadership/Business: don't read an improved score alone as proof of readiness — in the ZAVA example the check-pass rate rose from 39/54 to 51/54 while evaluation coverage stayed at 0/7, meaning runtime behavior was never actually verified.
- Admins/CoE: treat any Agent Review score as triage input for release decisions, not a certification gate, since the tool finds configuration issues but doesn't prove an agent invokes correctly in production.
