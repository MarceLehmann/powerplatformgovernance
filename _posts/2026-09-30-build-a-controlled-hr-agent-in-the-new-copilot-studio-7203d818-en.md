---
title: Build a controlled HR agent in the new Copilot Studio
description: Disable default web search, require source-based answers, test with credits
  in Preview, and roll out a Teams agent gradually.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
- security
- environments
content_type: curated_summary
curation_id: 7203d8188b84342719e7a4be
image:
  path: "/assets/img/curated/7203d8188b84342719e7a4be.png"
  alt: 'Governance card: Turn off web search when policy answers must stay inside
    approved knowledge.'
permalink: "/en/posts/build-a-controlled-hr-agent-in-the-new-copilot-studio-7203d818/"
translation_url: "/de/posts/build-a-controlled-hr-agent-in-the-new-copilot-studio-7203d818/"
source_url: https://www.andersjensen.org/en/articles/build-your-first-agent-new-copilot-studio/
source_site_url: https://www.andersjensen.org/
source_title: Build Your First Agent in the New Copilot Studio
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-08-13'
source_type: article
---

## TL;DR

For an HR agent in the new Copilot Studio, upload the approved handbook under Knowledge and remove the default Search all websites source. Set instructions to cite handbook chapters, never guess, and route gaps to the correct contact. Preview test chats consume credits before publication, so use a development environment with a small credit allocation and publish privately in Teams before sharing broadly.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Remove Search all websites and instruct the agent to cite the handbook, never guess, and ask for missing values so policy responses stay verifiable.
- Admins/CoE: Use a development environment with a small credit allocation because Preview test chats consume credits before publication.
- Leadership/Business: Keep the Teams agent private initially, test it in the user channel, then share it with the organisation to limit the impact of instruction errors.
