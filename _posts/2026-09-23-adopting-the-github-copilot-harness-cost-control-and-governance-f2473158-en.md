---
title: 'Adopting the GitHub Copilot Harness: Cost Control and Governance'
description: How to find GitHub Copilot harness agents in a tenant and cap their Copilot
  Credit consumption at the environment and agent level.
date: '2026-09-23T23:53:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- copilot-studio
content_type: curated_summary
curation_id: f247315811797320ffc7f424
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-44.png
  alt: Governance card about controlling Copilot agent credit costs.
permalink: "/en/posts/adopting-the-github-copilot-harness-cost-control-and-governance-f2473158/"
translation_url: "/de/posts/adopting-the-github-copilot-harness-cost-control-and-governance-f2473158/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-harness-cost-governance/
source_site_url: https://microsoft.github.io/
source_title: 'Adopting the GitHub Copilot Harness: Cost Control and Governance in
  Copilot Studio'
source_name: The Custom Engine
source_author: Lewis Baybutt
source_language: en
source_language_name: English
source_published_at: '2026-08-07'
source_updated_at: '2026-08-13'
faq:
  - question: "Why do GitHub Copilot harness agents consume credits while still being built?"
    answer: "Makers can consume Copilot Credits while building, previewing and evaluating agents, before those agents reach a formal production lifecycle. That moves cost control earlier. Development environments incur cost during the experimentation phase, not only once users start using the agent."
  - question: "How do I find all harness agents in my tenant?"
    answer: "Query the Power Platform Inventory API with a POST, filter on the Copilot Studio agent resource type and set the isCLIAgent property to true. You get the name, display name, environment ID, owner ID and the flag itself. That shows which agents run in which environments, who owns them and which ones can consume credits."
  - question: "How should I classify environments for harness agents?"
    answer: "Into two types: maker development for exploration and preview, where deliberate boundaries are needed, and funded production with accountable ownership and intentional funding. Each type gets controls matching its purpose. That keeps experiments possible without silently draining capacity meant for production agents."
  - question: "What do the four enforcement rules for credit allocations mean?"
    answer: "Alert notifies administrators as capacity nears its limit. TenantPool controls whether an environment may draw unallocated capacity from the pool. PayGo enables pay-as-you-go billing through approved Azure subscriptions. Deny blocks further consumption once capacity is exhausted. Each rule is set through the API with a ruleType and an enabled flag."
  - question: "How do I set a monthly credit limit for a single agent?"
    answer: "With a PUT to the threshold endpoint for the agent's resource, API version 2024-10-01. You specify the monthly limit, whether to notify when over capacity, at what percentage, and whether usage stops at the limit. The example uses 1,000 credits, a notification at 80 percent and a stop at the limit. The stopResource parameter stays false, otherwise the agent is suspended immediately."
---
## TL;DR

GitHub Copilot harness agents draw from the same Copilot Credit pool as regular agents but are easy to miss in an audit — find them via the isCLIAgent property in Power Platform inventory, then split maker-development environments from funded production ones. Environment-level controls (Admin Center > Copilot Studio > Manage Copilot Credits) set allocation, tenant-pool access and pay-as-you-go; agent-level limits can cap an individual agent at, for example, 1,000 credits with an 80% alert.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: run the isCLIAgent inventory check now — harness agents draw from the same credit pool as regular agents but don't surface in a normal agent audit.
- Security/Compliance: treat that audit gap as the finding itself — a cost review that doesn't separately query for isCLIAgent misses these agents entirely, not just undercounts them.
- Leadership/Business: fund a notification path to agent owners, not just admins, since the built-in 80% alert reaching only admins means a production agent can quietly run past its own limit while the environment keeps paying.
