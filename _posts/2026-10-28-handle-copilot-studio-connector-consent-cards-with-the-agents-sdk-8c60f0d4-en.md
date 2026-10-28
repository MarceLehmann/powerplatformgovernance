---
title: Handle Copilot Studio connector consent cards with the Agents SDK
description: Detect consent Adaptive Cards, present their security details, and return
  the user's Allow or Cancel choice through the Agents SDK.
date: '2026-10-28T17:03:17Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- copilot-studio
- governance
content_type: curated_summary
curation_id: 8c60f0d48a86607f01fd8c05
image:
  path: "/assets/img/curated/8c60f0d48a86607f01fd8c05.png"
  alt: 'Governance card: Consent must be captured before end user authentication connectors
    run.'
permalink: "/en/posts/handle-copilot-studio-connector-consent-cards-with-the-agents-sdk-8c60f0d4/"
translation_url: "/de/posts/handle-copilot-studio-connector-consent-cards-with-the-agents-sdk-8c60f0d4/"
source_url: https://microsoft.github.io/mcscatblog/posts/connector-consent-card-obo/
source_site_url: https://microsoft.github.io/
source_title: Intercepting and Responding to Connector Consent Cards via the Agents
  SDK
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-09-21'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How can an Agents SDK client identify a Copilot Studio connector consent
    card?
  answer: Check for a TextBlock containing Connect to continue and Action.Submit buttons
    titled Allow and Cancel. This heuristic identifies the consent payload without
    a dedicated event type.
- question: What payload does Copilot Studio expect after an Allow or Cancel choice?
  answer: Send a message activity with channelData.postBack set to true and value
    containing the selected action, id submit, and shouldAwaitUserInput true.
- question: Which connectors show the Copilot Studio consent card instead of connection
    manager?
  answer: Connectors that natively support Entra ID authentication can show it, while
    custom connectors and other connectors use the more disruptive connection manager
    experience.
animation:
  src: /assets/img/animations/8c60f0d48a86607f01fd8c05-en.gif
  poster: /assets/img/animations/8c60f0d48a86607f01fd8c05-en.poster.png
  width: 800
  height: 450
  alt: "A 3 step sequence shows detecting a Copilot Studio consent card, presenting its security details with Allow or Cancel, and returning the selected action as a message activity with postBack true."
---

## TL;DR

Copilot Studio requires end user consent before invoking connectors with end user authentication. In custom Agents SDK interfaces, detect cards using the Connect to continue text and Allow and Cancel buttons, then return a message activity with postBack true and the selected action.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Render the consent Adaptive Card in custom interfaces and capture the user&\#39;s Allow or Cancel choice, because end user authentication blocks connector invocation without consent.
- Admins/CoE: Treat native Entra ID connector consent separately from connection manager behavior, because custom connectors and other unsupported connectors use the more disruptive connection manager experience.
- Security/Compliance: Preserve the capability lines and privacy warning when presenting consent, because the card explains credential use and potential data exposure risks.
