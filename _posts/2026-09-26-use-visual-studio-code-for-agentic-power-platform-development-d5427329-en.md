---
title: Use Visual Studio Code for agentic Power Platform development
description: Claude Code, Dataverse skills and PAC tooling can create environments,
  solutions, data models and sample data from prompts.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- environments
- dataverse
- power-apps
content_type: curated_summary
curation_id: d5427329428d394ff6bf698b
image:
  path: "/assets/img/curated/d5427329428d394ff6bf698b.png"
  alt: 'Governance card: Agentic tools do not replace Power Platform knowledge. They
    amplify disciplined ALM.'
permalink: "/en/posts/use-visual-studio-code-for-agentic-power-platform-development-d5427329/"
translation_url: "/de/posts/use-visual-studio-code-for-agentic-power-platform-development-d5427329/"
source_url: https://readyxrm.blog/2026/07/16/ditch-the-power-apps-maker-portal/
source_site_url: https://readyxrm.blog/
source_title: Ditch the Power Apps maker portal!
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-07-16'
source_type: article
faq:
  - question: "What do I need to build Dataverse with VS Code and an AI agent?"
    answer: "You need a Power Platform tenant with an environment, admin-level access to the tenant, an agentic coding tool, a GitHub account for source control and Visual Studio Code, which is free and cross-platform. The author recommends Claude Code but names GitHub Copilot and Codex as alternatives. The environment is still required, only the way you operate it moves out of the maker portal."
  - question: "Which extensions and skills belong to the VS Code setup for Dataverse?"
    answer: "Three extensions form the base: Power Platform Tools, which installs the PAC command-line utilities, Claude Code for VS Code, and optionally GitHub Copilot Chat for cross-checking results. On top you install Microsoft's Dataverse skills from GitHub through plugin commands. They wrap the Dataverse MCP server, the Dataverse CLI and the PAC CLI and give the agent its tools."
  - question: "Is a free AI subscription enough for building Dataverse solutions in VS Code?"
    answer: "Free tiers work, but according to the author you burn through the credits fast. He uses Claude's Max plan himself because he uses Claude Code every day and needs the capacity. For people starting out, he considers the Pro plan a reasonable place to begin and work up from there."
  - question: "Does building with an AI agent in VS Code replace Dataverse knowledge?"
    answer: "No. The author states plainly that you still need to understand how Dataverse works and how apps fit together to build something good. The agent is a tool, not a replacement for knowing your craft. You approve generated commands before they run, and results depend on how precise your prompts are. Different runs can turn out differently."
  - question: "What does the agent create in the expense app example in VS Code?"
    answer: "On request it creates a Dataverse environment, sets up an authentication profile, builds a solution and publisher with the prefix exp and produces a data model with an expense header and expense lines, including status reasons and a file field for receipts. It then loads consistent sample data. It first created decimal instead of currency fields, noticed this and fixed it itself, after a few minutes."
---

## TL;DR

Visual Studio Code with Claude Code and Microsoft Dataverse skills can create a Dataverse environment, connect an auth profile and workspace, create a solution and publisher, build an expense data model, and load sample data from prompts. The setup still requires a tenant, an environment, sufficient admin access and Dataverse expertise.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Learn Dataverse and solution structure before relying on agentic prompts, because the source says the tool does not replace solution architecture knowledge.
- Admins/CoE: Review environment creation, auth profiles, MCP server approval and unmanaged solution use, because the workflow performs administrative setup from Visual Studio Code.
- Security/Compliance: Check how refresh tokens and the local .env file containing environment and tenant details are handled before adopting the workflow.
