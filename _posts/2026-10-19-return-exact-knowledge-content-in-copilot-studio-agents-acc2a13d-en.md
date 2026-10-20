---
title: Return Exact Knowledge Content in Copilot Studio Agents
description: Three Copilot Studio methods help agents return verbatim knowledge excerpts
  when summarization could weaken approved policy or benefits content.
date: '2026-10-19T16:55:53Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- compliance
- dataverse
content_type: curated_summary
curation_id: acc2a13dfa6884faa27bfc2e
image:
  path: "/assets/img/curated/acc2a13dfa6884faa27bfc2e.png"
  alt: 'Governance card: Approved content must stay exact. Do not let the agent summarize
    what users need verbatim.'
permalink: "/en/posts/return-exact-knowledge-content-in-copilot-studio-agents-acc2a13d/"
translation_url: "/de/posts/return-exact-knowledge-content-in-copilot-studio-agents-acc2a13d/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-defeating-oversummarization/
source_site_url: https://microsoft.github.io/
source_title: 'Defeating Oversummarization in AI Agents: How to Deliver Exact Content
  from Knowledge Sources'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Doug Bellingeri
source_published_at: '2026-01-23'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How can Copilot Studio return verbatim SharePoint knowledge results?
  answer: Use Custom Search with an AI Prompt that receives the search results and
    instructs the agent to quote them verbatim without summarizing. The flow can also
    include citations.
- question: What does the Generate a Search Query node do in Copilot Studio?
  answer: It rewrites a user query with relevant conversation context before sending
    it to an AI Prompt. This helps the prompt process a more specific request.
- question: Which Copilot Studio oversummarization method is most consistent?
  answer: Custom Search with a topic and AI Prompt was most consistent in the described
    testing. It also offered the most granular control over search, query generation,
    and prompting.
animation:
  src: /assets/img/animations/acc2a13dfa6884faa27bfc2e-en.gif
  poster: /assets/img/animations/acc2a13dfa6884faa27bfc2e-en.poster.png
  width: 800
  height: 450
  alt: "A 3 step Copilot Studio flow rewrites the user query with context, runs Custom Search, then sends results to an AI Prompt that returns verbatim excerpts with citations."
---

## TL;DR

Copilot Studio can return verbatim knowledge excerpts through custom search with an AI Prompt, agent instructions alone, or instructions combined with an AI Prompt. Method 1 gave the most consistent results and granular control, while Method 2 was less consistent and could add a summary. Model, speed, and cost can affect the choice.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use Custom Search, Generate a Search Query, and an AI Prompt when exact excerpts and citations matter, because this method provided the most consistent control.
- Admins/CoE: Test the selected model and orchestration pattern, because response adherence varies and the methods differ in setup complexity, speed, and agent cost.
- Security/Compliance: Preserve approved policy and benefits wording by preventing summarization where unchanged content is required.
