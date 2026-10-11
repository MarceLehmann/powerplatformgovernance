---
title: Design AI agents so independent controls can stop them
description: Treat AI agents as potential insider risks, limit their permissions,
  and separate model intelligence from authorization, auditing, observability, and
  interruption controls.
date: '2026-10-11T10:35:19Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- governance
- copilot-studio
- dataverse
- power-apps
content_type: curated_summary
curation_id: 57fd953f49be484b32598f3d
image:
  path: "/assets/img/curated/57fd953f49be484b32598f3d.png"
  alt: 'Governance card: Trust less. Control more. Keep AI authority outside the model.'
permalink: "/en/posts/design-ai-agents-so-independent-controls-can-stop-them-57fd953f/"
translation_url: "/de/posts/design-ai-agents-so-independent-controls-can-stop-them-57fd953f/"
source_url: https://www.consultor365.com/ia/la-ia-mas-segura-es-la-que-mejor-podemos-controlar/
source_site_url: https://www.consultor365.com/
source_title: La IA más segura es la que mejor podemos controlar
source_name: Consultor 365
source_language: es
source_language_name: es
source_author: Ramón Rautenstrauch
source_published_at: '2026-10-11'
source_updated_at: '2026-10-11'
source_type: article
faq:
- question: How should a Dynamics 365 Sales agent be permissioned?
  answer: A Dynamics 365 Sales agent should receive only the access required for its
    function, with extra validation for sensitive operations.
- question: Why should AI agent authorization stay outside the model prompt?
  answer: External authorization can reject an action or require human approval even
    when the model requests an operation beyond policy.
- question: Does a Chain of Thought trace independently audit an AI agent?
  answer: No. A reasoning trace is not independent proof, so operational evidence
    must show requests, controls applied, and actions executed.
---

## TL;DR

AI agents connected to Dynamics 365, Copilot Studio, or Power Platform should receive only necessary permissions. Independent authorization must reject actions outside policy, while observability, continuous testing, auditing, and interruption controls record and constrain execution. Microsoft Agent 365 is presented as a governance and security control plane for compatible enterprise agents.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Give agents only the permissions they need and require extra validation for sensitive actions, reducing the impact of mistakes and prompt injection.
- Admins/CoE: Keep authorization, auditing, observability, and interruption controls outside model reasoning so operations can be reconstructed and stopped.
- Security/Compliance: Record tool use, data access, changes, and outcomes as protected evidence, and test malicious inputs, integration failures, configuration changes, and unauthorized tool use.
