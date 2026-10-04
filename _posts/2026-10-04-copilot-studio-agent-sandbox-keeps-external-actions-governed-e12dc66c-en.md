---
title: Copilot Studio agent sandbox keeps external actions governed
description: Copilot Studio agents run code in a temporary sandbox with no network
  egress. Knowledge and configured Tools are the only external paths.
date: '2026-10-04T16:57:02Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- alm
- copilot-studio
content_type: curated_summary
curation_id: e12dc66c0b192535992e37bc
image:
  path: "/assets/img/curated/e12dc66c0b192535992e37bc.png"
  alt: 'Governance card: Sandbox code cannot reach the network. External actions stay
    governed.'
permalink: "/en/posts/copilot-studio-agent-sandbox-keeps-external-actions-governed-e12dc66c/"
translation_url: "/de/posts/copilot-studio-agent-sandbox-keeps-external-actions-governed-e12dc66c/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-agent-sandbox/
source_site_url: https://microsoft.github.io/
source_title: The New Copilot Studio Agent Sandbox
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Chris Garty
source_published_at: '2026-07-20'
source_updated_at: '2026-08-11'
source_type: article
faq:
- question: Can Copilot Studio agent sandbox code call an API or send email?
  answer: No. The sandbox has no outbound network route, so external API calls and
    email cannot leave the environment.
- question: How do Copilot Studio agents access external data from the sandbox?
  answer: They use configured Knowledge sources for grounded information and Tools
    such as connectors or MCP servers for live data and actions.
- question: Where should a Copilot Studio sandbox file be saved for later use?
  answer: Return the file to the user or save it through a configured Tool. Sandbox
    storage does not persist across conversations.
---

## TL;DR

Copilot Studio agents using the GitHub Copilot harness run Python and shell work in a managed, temporary container. The sandbox has no outbound network access, so API calls, email, and SharePoint writes cannot leave it. External access occurs only through configured Knowledge sources and Tools, which remain subject to governance controls and data policies.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use reviewed Skill scripts for repeatable file or calculation work, while allowing generated code for novel tasks.
- Admins/CoE: Configure Knowledge and Tools deliberately because they are the only routes for agent access beyond the sandbox.
- Security/Compliance: Treat the lack of sandbox network egress as a boundary, then govern configured external paths through data policies.
- Leadership/Business: Do not rely on sandbox files as storage because the work area is temporary and outputs must be returned or saved through a configured Tool.
