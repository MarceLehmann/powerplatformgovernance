---
title: Governance as code after the CoE Starter Kit
description: Use PAC CLI inventory APIs, versioned governance rules and repeatable
  capture to track Power Platform tenant risks.
date: '2026-10-01T05:02:30Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- coe
- environments
- alm
- power-apps
content_type: curated_summary
curation_id: ea3f5c6a5b9fcea34ee7e4b0
image:
  path: "/assets/img/curated/ea3f5c6a5b9fcea34ee7e4b0.png"
  alt: 'Governance card: AI can query governance, but deterministic capture must run
    every time.'
permalink: "/en/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
translation_url: "/de/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
source_url: https://www.karlex.fi/governance-as-code-life-after-the-coe-starter-kit/
source_site_url: https://www.karlex.fi/
source_title: 'Governance as code: life after the CoE Starter Kit'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-01'
source_type: article
faq:
  - question: "What happened to the CoE Starter Kit, and what gap remains?"
    answer: "Microsoft archived the repository in July. The speaker had used the kit since 2020 and describes keeping up with its releases as nearly full-time work. As a replacement, the Copilot agent kit covers only agents and now needs Copilot Studio credits. Microsoft announced an API-first direction, but no tooling replaces the administrative functions the kit provided."
  - question: "Which three stages does the maturity ladder for governance as code describe?"
    answer: "Stage one is the PAC CLI in the terminal, combined with AI chat. Stage two runs existing community code, such as the Power Platform Control Hub Code App, which shows inventory and admin API data in dashboards. Stage three is a custom solution of a ledger and a workbench that adds context like purpose, policies and ownership, which a dashboard alone does not provide."
  - question: "Which warnings apply when using the PAC CLI with an AI agent?"
    answer: "Keep the CLI current, since recent updates added fifteen new command groups, mostly in preview. Verify the active authentication profile, because the speaker accidentally enabled features in the wrong tenant while talking to Claude. And the pac MCP server matters less, as agents read the CLI help on their own."
  - question: "How are the ledger and workbench built in the custom governance solution?"
    answer: "The ledger stores the automatically captured tenant state in a SQLite database inside a Git repository, together with rules and schemas. The workbench is the interface for findings and actions, built with Lovable Cloud with data in Supabase. A single prompt refreshes the capture. Running the same deterministic capture every time keeps the agent from inventing actions."
  - question: "How do I write governance rules that an AI agent can follow?"
    answer: "Write them so agents can read them, because AI interprets rules literally. Ambiguous or contradictory rules cannot be delegated to agents. The speaker also warns that coding agents are eager to do more than they are allowed to, so humans must set the boundaries. For quickly prompt-built artifacts he has no governance solution yet."
---

## TL;DR

PAC CLI inventory APIs can show apps, flows and agents by environment within minutes, without the CoE Starter Kit database and nightly sync flows. Keep PAC CLI updated, verify the active authentication profile, and validate community code in a sandbox before any production use. Store environment zones, governance rules and captured tenant state in versioned, repeatable controls.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Use PAC CLI inventory data to identify environment sprawl and keep the active authentication profile under review.
- Admins/CoE: Turn on Managed Environments, but do not rely on weekly digests as a complete operations tool.
- Security/Compliance: Validate third-party packages and community dashboards in a sandbox before connecting them to production.
- Leadership/Business: Define clear, non-contradictory governance rules and retain human decisions for actions affecting tenant solutions.
