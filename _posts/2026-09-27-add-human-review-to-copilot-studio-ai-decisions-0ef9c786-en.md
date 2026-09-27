---
title: Add human review to Copilot Studio AI decisions
description: Use Copilot Studio and SharePoint to route unmatched loan purposes to
  a human reviewer through Outlook or Teams, then record the decision and rationale.
date: '2026-09-27T22:56:07Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
- ownership
content_type: curated_summary
curation_id: 0ef9c7863178b432cf0fbe98
image:
  path: "/assets/img/curated/0ef9c7863178b432cf0fbe98.png"
  alt: 'Governance card: Risky AI decisions need a human in the loop. Unexpected cases
    should not pass unattended.'
permalink: "/en/posts/add-human-review-to-copilot-studio-ai-decisions-0ef9c786/"
translation_url: "/de/posts/add-human-review-to-copilot-studio-ai-decisions-0ef9c786/"
source_url: https://www.matthewdevaney.com/copilot-studio-ask-for-human-review-on-ai-decisions/
source_site_url: https://www.matthewdevaney.com/
source_title: 'Copilot Studio: Ask For Human Review On AI Decisions'
source_name: Matthew Devaney
source_language: en
source_language_name: English
source_author: Matthew Devaney
source_published_at: '2026-09-27'
source_type: article
---

## TL;DR

Copilot Studio can compare a loan purpose with a SharePoint list of Allowed and Flagged categories. If no match exists, the agent returns Human-Review, sends an Outlook or Teams review request, waits for a Yes or No decision and rationale, and updates the SharePoint application record.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Define explicit Allowed and Flagged categories, and configure the agent to return Human-Review when no exact match exists so uncertain cases do not receive an unattended decision.
- Admins/CoE: Assign the human review action to a named reviewer and store the decision, review status, and rationale in SharePoint so the workflow remains traceable.
- Leadership/Business: Identify decisions that are too risky for an agent to make alone and ensure reviewers can respond before the process continues.
