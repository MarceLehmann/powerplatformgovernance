---
title: Connect custom knowledge sources to Copilot Studio
description: Use the OnKnowledgeRequested trigger to call a search endpoint, transform
  results, and provide Copilot Studio with usable knowledge snippets.
date: '2026-10-28T17:03:12Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
content_type: curated_summary
curation_id: 1d40539e59571a0fded3e376
image:
  path: "/assets/img/curated/1d40539e59571a0fded3e376.png"
  alt: 'Governance card: Custom knowledge needs a contract. Return the right fields,
    then keep the total to 15 snippets.'
permalink: "/en/posts/connect-custom-knowledge-sources-to-copilot-studio-1d40539e/"
translation_url: "/de/posts/connect-custom-knowledge-sources-to-copilot-studio-1d40539e/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-custom-knowledge-source/
source_site_url: https://microsoft.github.io/
source_title: Connecting to Custom Knowledge Sources in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-09-24'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I create an OnKnowledgeRequested topic in Copilot Studio?
  answer: Create a topic, switch to code view, and define the OnKnowledgeRequested
    trigger in YAML. The source says UI designer support was unavailable as of September
    2025.
- question: Which Copilot Studio variables support a custom search endpoint?
  answer: System.SearchQuery provides a semantic-search rewrite, System.KeywordSearchQuery
    provides a keyword-search rewrite, and System.SearchResults stores formatted results.
- question: How many custom knowledge snippets can Copilot Studio use?
  answer: Copilot Studio uses up to 15 snippets across all knowledge topics combined.
    Return or rank the strongest results before assigning them to System.SearchResults.
animation:
  src: /assets/img/animations/1d40539e59571a0fded3e376-en.gif
  poster: /assets/img/animations/1d40539e59571a0fded3e376-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows creating a Copilot Studio topic in code view, defining the OnKnowledgeRequested trigger in YAML, calling a search endpoint, and mapping results into System.SearchResults."
---

## TL;DR

Copilot Studio custom knowledge topics use the OnKnowledgeRequested trigger, currently configured in YAML code view. Query variables provide rewritten semantic or keyword searches, while System.SearchResults must receive Content, ContentLocation and Title fields. Copilot Studio uses up to 15 snippets across all knowledge topics, so results should be ranked or limited.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Create the OnKnowledgeRequested topic in code view, call the search endpoint, and map API fields into the required result format.
- Admins/CoE: Treat the 15-snippet ceiling as shared across knowledge topics, and require relevance sorting or response limits to control which evidence reaches the agent.
