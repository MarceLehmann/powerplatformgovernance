---
title: Secure Copilot Studio agents with architecture and DLP
description: Use one-way agent flows, restrictive connector allowlists and repeatable
  attack tests to reduce Copilot Studio agent risk.
date: '2026-10-25T04:46:15Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- copilot-studio
- dlp
- dataverse
- power-automate
content_type: curated_summary
curation_id: 41467ec334df3b58ecd0467f
image:
  path: "/assets/img/curated/41467ec334df3b58ecd0467f.png"
  alt: 'Governance card: Prompts can slow attacks. Architecture can stop them.'
permalink: "/en/posts/secure-copilot-studio-agents-with-architecture-and-dlp-41467ec3/"
translation_url: "/de/posts/secure-copilot-studio-agents-with-architecture-and-dlp-41467ec3/"
source_url: https://www.karlex.fi/it-used-to-work-hacking-my-own-copilot-studio-agent-again-at-experts-live-sweden/
source_site_url: https://www.karlex.fi/
source_title: 'It used to work: hacking my own Copilot Studio agent again at Experts
  Live Sweden'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-25'
source_type: article
faq:
- question: How can a Copilot Studio agent prevent applicants from reading other Dataverse
    applications?
  answer: Use a one-way agent flow that writes applicant data to Dataverse without
    giving the agent a route to read it back. Avoid connecting the agent directly
    to the table.
- question: Which Copilot Studio settings help defend against CV prompt injection?
  answer: Add rules in the generative answers node and agent generative AI settings,
    then set moderation to high. These controls help reject instructions embedded
    in submitted content.
- question: Why should DLP allowlist connectors for Copilot Studio agents?
  answer: An allowlist limits agents to trusted connectors. A connector that can read
    or act, such as an environment deletion action, can create serious risk when exposed
    to an agent.
animation:
  src: /assets/img/animations/41467ec334df3b58ecd0467f-en.gif
  poster: /assets/img/animations/41467ec334df3b58ecd0467f-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows securing a Copilot Studio agent by sending applicant data one way to Dataverse, limiting tool calls, setting moderation to high, and allowlisting trusted connectors in DLP."
---

## TL;DR

A Copilot Studio job application agent resisted most CV prompt injections, but a polite request exposed a tool-instruction summary in one of two runs and rapid requests still consumed credits. Send applicant data one way to Dataverse through an agent flow, limit tool calls in flows, use high moderation, and allowlist trusted connectors in DLP.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep secrets, keys and internal URLs out of agent instructions, then test prompt injection and instruction-summary attempts after model changes.
- Admins/CoE: Use DLP allowlists for agent connectors, especially where connectors can read or act on sensitive resources such as environments.
- Security/Compliance: Design one-way agent flows to Dataverse and restrict repeated tool calls, because prompts alone do not prevent abusive actions or costs.
- Leadership/Business: Make secure agent-building paths easy to use, because insecure solutions created in the tenant remain an organisational responsibility.
