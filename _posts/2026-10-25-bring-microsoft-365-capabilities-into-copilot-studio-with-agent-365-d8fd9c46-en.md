---
title: Bring Microsoft 365 capabilities into Copilot Studio with Agent 365 MCP servers
description: Agent 365 MCP servers connect Copilot Studio agents to Microsoft 365
  data and actions through deterministic, auditable tools under existing security
  and compliance boundaries.
date: '2026-10-25T16:57:11Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- compliance
- copilot-studio
- dataverse
content_type: curated_summary
curation_id: d8fd9c46ff1dd7146b320135
image:
  path: "/assets/img/curated/d8fd9c46ff1dd7146b320135.png"
  alt: 'Governance card: Agent 365 tools stay within Microsoft 365 security and compliance
    boundaries. Govern every action through Copilot Studio.'
permalink: "/en/posts/bring-microsoft-365-capabilities-into-copilot-studio-with-agent-365-d8fd9c46/"
translation_url: "/de/posts/bring-microsoft-365-capabilities-into-copilot-studio-with-agent-365-d8fd9c46/"
source_url: https://microsoft.github.io/mcscatblog/posts/a365-mcp-servers-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Bringing Microsoft 365 Copilot into Copilot Studio with Agent 365 MCP
  Servers
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2025-11-19'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: What prerequisites are required for Agent 365 MCP servers in Copilot Studio?
  answer: The tenant must be enrolled in Frontier, and users need a full Microsoft
    365 Copilot license. Administrators may also need to enable Frontier features.
- question: How do Agent 365 MCP servers control access to Microsoft 365 data?
  answer: They provide secure, user-scoped access on behalf of the signed-in user
    and follow the security and compliance boundaries applied to Microsoft 365 Copilot.
- question: Which Copilot Studio tools can automate a briefing with Agent 365 MCP
    servers?
  answer: Copilot Search can research content, Word can create a briefing, Outlook
    Mail can send it, and Outlook Calendar can schedule a review meeting.
animation:
  src: /assets/img/animations/d8fd9c46ff1dd7146b320135-en.gif
  poster: /assets/img/animations/d8fd9c46ff1dd7146b320135-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows Copilot Search researching content, Word creating a briefing, Outlook Mail sending it, and Outlook Calendar scheduling a review meeting."
---

## TL;DR

Copilot Studio agents can use Agent 365 MCP servers for user-scoped Microsoft 365 Search, SharePoint, OneDrive, Outlook, Word, Dataverse and other workloads. The capability requires a Frontier-enrolled tenant and a full Microsoft 365 Copilot license, while administrators may need to enable Frontier features in the Microsoft Admin Center.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Select only the Agent 365 MCP servers needed for the agent, then add orchestration instructions that keep users informed about documents, recipients and meetings.
- Admins/CoE: Enroll the tenant in Frontier and enable Frontier features in the Microsoft Admin Center before expecting the Agents area and A365 servers to appear.
- Security/Compliance: Treat the servers as user-scoped, deterministic and auditable, while retaining Microsoft 365 security, licensing and compliance boundaries.
