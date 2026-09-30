---
title: Same score can hide opposite Copilot Studio outcomes
description: A governed Copilot Studio design uses a curated SharePoint library, named
  owners, Power Automate lifecycle controls, and repeated evaluations.
date: '2026-09-30T05:01:27Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- copilot-studio
- power-automate
- ownership
- security
content_type: curated_summary
curation_id: 0a64d278e63b59585ac3ed4d
image:
  path: "/assets/img/curated/0a64d278e63b59585ac3ed4d.png"
  alt: 'Governance card: An approved source can still give a wrong answer. Test the
    meaning, not just the score.'
permalink: "/en/posts/same-score-can-hide-opposite-copilot-studio-outcomes-0a64d278/"
translation_url: "/de/posts/same-score-can-hide-opposite-copilot-studio-outcomes-0a64d278/"
source_url: https://www.karlex.fi/same-score-opposite-meaning-what-my-nordic-summit-demo-actually-proved/
source_site_url: https://www.karlex.fi/
source_title: 'Same score, opposite meaning: what my Nordic Summit demo actually proved'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-09-30'
source_type: article
---

## TL;DR

Use two SharePoint libraries so a Copilot Studio agent can read only approved files in the Curated Library. A named owner controls a Yes/No approval field, while Power Automate copies or removes files and monthly audits flag outdated, orphaned, and departed-owner content. Repeat evaluations because one unchanged agent moved from 24 to 31 passes out of 43.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep the agent limited to the Curated Library and treat refusal as the correct response when an approved source cannot support an answer.
- Admins/CoE: Use the owned Yes/No approval field, Power Automate boundary flow, and monthly Teams audit cards to identify stale, orphaned, and departed-owner content.
- Security/Compliance: Require named accountability and content lifecycle checks because approval alone can still admit superseded, draft, or contradictory material.
- Leadership/Business: Review which questions pass, not only the overall score, because equal scores can represent opposite quality outcomes.
