---
title: Automate Copilot Studio Agent Improvement with Publish and Test
description: A Copilot Studio plugin now automates editing, pushing, publishing, testing
  and refining agents from test feedback.
date: '2026-10-13T16:58:32Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- dataverse
- copilot-studio
content_type: curated_summary
curation_id: 2992d1ae8503e82690f6d166
image:
  path: "/assets/img/curated/2992d1ae8503e82690f6d166.png"
  alt: 'Governance card: Publish, test, learn, repeat. Small instruction sets make
    agent improvement more stable.'
permalink: "/en/posts/automate-copilot-studio-agent-improvement-with-publish-and-test-2992d1ae/"
translation_url: "/de/posts/automate-copilot-studio-agent-improvement-with-publish-and-test-2992d1ae/"
source_url: https://microsoft.github.io/mcscatblog/posts/agentic-improvement-loop/
source_site_url: https://microsoft.github.io/
source_title: 'Closing the Loop: Automated Agent Improvement with Publish and Test'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-03-29'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does the Copilot Studio plugin publish an updated agent during automated
    testing?
  answer: The manage sub-agent calls the Dataverse PvaPublish bound action and checks
    the publishedon timestamp until the draft is live.
- question: Why should Copilot Studio agent test cases use separate conversations?
  answer: Separate conversations prevent a wrong response from carrying confusion
    into later questions, producing more accurate per-question scores.
- question: How many Copilot Studio instruction rules were stable in the trial?
  answer: Seven concise rules were stable, while increasing the set to fourteen caused
    a regression from 3/5 to 1/5.
---

## TL;DR

The Copilot Studio plugin adds a publish command that completes an edit, push, publish and test loop. A D&amp;D rules agent improved from 40% to a stable 60% pass rate after seven iterations. Seven focused instruction rules outperformed fourteen, while shared conversation context caused later tests to inherit earlier errors.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep Copilot Studio instructions concise and non-overlapping, because expanding from 7 to 14 rules reduced the trial agent from 3/5 to 1/5.
- Admins/CoE: Sequence pull, push and publish, then test the published agent; run each case in a separate conversation to prevent one wrong response from contaminating later scores.
