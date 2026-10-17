---
title: Use dynamic knowledge URLs to scope Copilot Studio agents
description: Copilot Studio variables can select product, region, language, or environment-specific
  knowledge URLs while reducing source sprawl and simplifying ALM.
date: '2026-10-17T17:03:22Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- alm
- environments
- governance
content_type: curated_summary
curation_id: 5e6685c0e510fef814667566
image:
  path: "/assets/img/curated/5e6685c0e510fef814667566.png"
  alt: 'Governance card: One variable keeps agent knowledge on the right path. Broad
    grounding creates noise, latency, and maintenance.'
permalink: "/en/posts/use-dynamic-knowledge-urls-to-scope-copilot-studio-agents-5e6685c0/"
translation_url: "/de/posts/use-dynamic-knowledge-urls-to-scope-copilot-studio-agents-5e6685c0/"
source_url: https://microsoft.github.io/mcscatblog/posts/dynamic-knowledge-urls-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'Zero Noise, Maximum Relevance: Dynamic Knowledge URLs in Copilot Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Doug Bellingeri
source_published_at: '2026-02-11'
source_updated_at: '2026-03-10'
source_type: article
faq:
- question: How do dynamic knowledge URL variables work in Copilot Studio?
  answer: Copilot Studio resolves the variable at runtime when knowledge is called,
    then keeps grounding within that URL scope until the variable changes or the conversation
    resets.
- question: Can Copilot Studio environment variables select a different knowledge
    website after deployment?
  answer: Yes. A text environment variable can hold the website URL, with its value
    updated in the target environment after the solution is deployed.
- question: Which SharePoint knowledge method supports dynamic URL variables in Copilot
    Studio?
  answer: The Connector Powered by Work IQ SharePoint method supports variables. The
    Upload File and Dataverse sync method does not support them.
---

## TL;DR

Copilot Studio can insert a variable into a public website or Connector Powered by Work IQ SharePoint knowledge URL. Set the variable from topic inputs, user language, tools, or environment variables, then resolve the scoped source at runtime. The two-level public website indexing limitation remains, and SharePoint Upload File or Dataverse sync does not support variables.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use a global string variable, topic inputs, and a product to path mapping when an agent must select focused knowledge without maintaining many separate sources.
- Admins/CoE: Store environment-specific website URLs in solution environment variables so deployments can reuse the same agent configuration across environments.
- Security/Compliance: Review the selected URL scope because overly broad grounding can expose irrelevant content, while regional mappings can direct users to regulatory or availability-specific pages.
