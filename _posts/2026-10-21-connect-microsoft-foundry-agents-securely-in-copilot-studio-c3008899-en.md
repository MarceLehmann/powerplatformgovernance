---
title: Connect Microsoft Foundry agents securely in Copilot Studio
description: A practical demo shows how to connect Azure AI Foundry agents to Copilot
  Studio with Entra ID authentication and traceable calls.
date: '2026-10-21T17:09:20Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- copilot-studio
content_type: curated_summary
curation_id: c300889910a697c434c2f9f3
image:
  path: "/assets/img/curated/c300889910a697c434c2f9f3.png"
  alt: 'Governance card: Connect external agents through Entra ID and inspect the
    trace.'
permalink: "/en/posts/connect-microsoft-foundry-agents-securely-in-copilot-studio-c3008899/"
translation_url: "/de/posts/connect-microsoft-foundry-agents-securely-in-copilot-studio-c3008899/"
source_url: https://microsoft.github.io/mcscatblog/posts/connect-foundry-agents-in-copilotstudio/
source_site_url: https://microsoft.github.io/
source_title: 'Video Demo: Connect a Microsoft Foundry agent in Copilot Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Jay Padimiti
source_published_at: '2025-12-16'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I connect a Microsoft Foundry agent to Copilot Studio?
  answer: Select Connect to an external agent, choose Microsoft Foundry, authenticate
    through Entra ID, and enter the Foundry endpoint URL.
- question: How does Copilot Studio choose between connected Foundry and Copilot agents?
  answer: It selects the appropriate agent from metadata, routing biology and algebra
    questions without custom routing logic.
- question: What does the Foundry trace view show after Copilot Studio calls an agent?
  answer: It shows the received input, generated output, conversation or correlation
    IDs, and completion timestamps for debugging.
animation:
  video: /assets/img/animations/c300889910a697c434c2f9f3-en.mp4
  poster: /assets/img/animations/c300889910a697c434c2f9f3-en.poster.webp
  width: 800
  height: 450
  alt: "A four step sequence shows connecting an Azure AI Foundry agent in Copilot Studio by choosing an external agent, selecting Microsoft Foundry, signing in with Entra ID, and submitting the endpoint, then reviewing trace details."
---

## TL;DR

Copilot Studio connects an Azure AI Foundry agent by using its agent name and endpoint URL, selecting Connect to an external agent, choosing Microsoft Foundry, authenticating through Microsoft Entra ID, and submitting the endpoint. Foundry traces then expose inputs, outputs, IDs, and completion timestamps.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use connected agents when one agent becomes difficult to manage, so domain specialists can handle focused tasks.
- Admins/CoE: Capture the Foundry agent name and endpoint, then configure the external connection through Microsoft Entra ID.
- Security/Compliance: Review authenticated cross-agent communication and Foundry trace data, including inputs, outputs, correlation IDs, and timestamps.
