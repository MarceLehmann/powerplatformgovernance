---
title: Choose Copilot Studio's harness before building
description: The GitHub Copilot harness changes Copilot Studio billing, testing costs
  and agent portability. The stated September 2026 pricing transition has passed.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- copilot-studio
- environments
content_type: curated_summary
curation_id: 5118fada3045ab454cf7f717
image:
  path: "/assets/img/curated/5118fada3045ab454cf7f717.png"
  alt: 'Governance card: Choose the harness before you build. You cannot convert later.'
permalink: "/en/posts/choose-copilot-studio-s-harness-before-building-5118fada/"
translation_url: "/de/posts/choose-copilot-studio-s-harness-before-building-5118fada/"
source_url: https://www.andersjensen.org/en/articles/new-copilot-studio-explained/
source_site_url: https://www.andersjensen.org/
source_title: The New Copilot Studio Explained (GitHub Copilot Harness)
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-08-12'
source_type: article
faq:
  - question: "What is a harness in Copilot Studio and which three harnesses exist?"
    answer: "The harness is the infrastructure around the AI model: tools, memory, file handling and the loop that lets an agent work until a task is finished."
  - question: "Can I switch an agent to a different harness after creating it?"
    answer: "No. The harness choice is permanent: a GitHub Copilot agent cannot be converted to Standard, or the reverse, so a wrong choice means rebuilding the agent."
  - question: "When do credits start counting on the GitHub Copilot harness?"
    answer: "From the first build step instead of from publication. Each test chat in Preview, each AI-written instruction and each evaluation run consumes credits, while manual configuration and clicking through the interface stay free."
---

## TL;DR

Copilot Studio&\#39;s GitHub Copilot harness is the default for new agents and workflows. It uses Copilot Credits during building, Preview tests, evaluations and runtime. Harnesses cannot be converted. The stated September 1, 2026 transition of existing agents to credit billing has now passed.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose the Standard or GitHub Copilot harness before building, because agents cannot be converted and a wrong choice requires rebuilding.
- Admins/CoE: Set credit allocations and limits per environment to constrain credit-billed agents, noting this is a blunt control for all credit-billed agents there.
- Leadership/Business: Budget for AI use during build, testing, evaluation and runtime on the GitHub Copilot harness, not only after publication.
