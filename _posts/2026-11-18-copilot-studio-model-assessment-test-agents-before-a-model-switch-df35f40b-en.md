---
title: 'Copilot Studio Model Assessment: test agents before a model switch'
description: Model Assessment in Copilot Agent Kit compares an agent across models
  using shared evaluation checks, model history and reported Copilot Credits before
  a model change.
date: '2026-11-18T16:33:02Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
- alm
- environments
content_type: curated_summary
curation_id: df35f40be83dfcf777dc4e5e
image:
  path: "/assets/img/curated/df35f40be83dfcf777dc4e5e.png"
  alt: 'Governance card: Switching a model takes a few clicks. Proving it was the
    right switch takes evidence.'
permalink: "/en/posts/copilot-studio-model-assessment-test-agents-before-a-model-switch-df35f40b/"
translation_url: "/de/posts/copilot-studio-model-assessment-test-agents-before-a-model-switch-df35f40b/"
source_url: https://microsoft.github.io/mcscatblog/posts/model-assessment/
source_site_url: https://microsoft.github.io/
source_title: 'Before you switch models: Assess your Copilot Studio agent with Model
  Assessment'
source_name: The Custom Engine (Microsoft Copilot Studio CAT team blog)
source_language: en
source_language_name: English
source_author: Ravikiran Patil
source_published_at: '2026-11-12'
source_updated_at: '2026-11-12'
source_type: article
faq:
- question: How do I set up Copilot Studio evaluations for Model Assessment?
  answer: Create evaluation test sets whose names include MODELCHECK, keep them active,
    and capture a baseline first. The tool sits under Advanced Testing in Copilot
    Agent Kit.
- question: What does a Model Assessment cost in Copilot Credits?
  answer: Observed AI analysis used around 120-150 Copilot Credits per assessment,
    separate from the answering and scoring credits the test cases report. Kit tests
    report no credits.
- question: Why does Model Assessment show a recommendation when the run status is
    Critical?
  answer: The recommendation compares the two selected runs, while Critical is each
    run's own status. In the example the preferred model still had four failing classification
    checks.
---

## TL;DR

Model Assessment in Copilot Agent Kit tests a Copilot Studio agent on evaluation test sets before a model switch. The example compares GPT-6 Luna, 14 passed checks, with GPT-6.1 Sol, 12, recommending Luna at Medium confidence while both runs stay Critical. Credits appear per run and per test case, a partial flag blocks savings claims, and AI analysis consumed around 120-150 Copilot Credits per assessment.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Capture a baseline assessment before any model change, keep instructions, knowledge, tools and test sets stable, and reproduce changed checks in a development or test environment, because a switch made through Model Assessment is saved to the source agent and the Kit path publishes it.
- Admins/CoE: Budget around 120-150 Copilot Credits per assessment for AI analysis, note that Kit tests report no credits, and resolve partial consumption reporting before any cost-based model decision.
- Leadership/Business: Review the model recommendation together with its confidence level and the PDF export, and remember both example runs stayed Critical, so a preferred model still leaves failures to fix.
