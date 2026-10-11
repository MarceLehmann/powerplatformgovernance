---
title: 'Copilot Studio Agent Flows: Errors, Ownership and Reliable Patterns'
description: Practical controls for agent flows covering visibility, 100-second timeouts,
  schema refreshes, maker credentials, co-ownership and agent handoffs.
date: '2026-10-11T16:55:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- power-automate
- ownership
- security
- alm
content_type: curated_summary
curation_id: c10d15ef4876b33a3497f43b
image:
  path: "/assets/img/curated/c10d15ef4876b33a3497f43b.png"
  alt: 'Governance card: Agent flows need guardrails. A hidden timeout or stale schema
    can break the handoff.'
permalink: "/en/posts/copilot-studio-agent-flows-errors-ownership-and-reliable-patterns-c10d15ef/"
translation_url: "/de/posts/copilot-studio-agent-flows-errors-ownership-and-reliable-patterns-c10d15ef/"
source_url: https://microsoft.github.io/mcscatblog/posts/combining-agent-flows-and-agents-gotchas-errors-and-patterns/
source_site_url: https://microsoft.github.io/
source_title: 'Combining Agent Flows with Agents: Gotchas, Errors, and Patterns'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Petros Feleskouras
source_published_at: '2026-04-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Why does my Copilot Studio agent flow not appear as a tool?
  answer: The flow needs the When an agent calls the flow trigger, Respond to the
    agent action, synchronous response mode, Solution placement and the Copilot Studio
    plan.
- question: How can I avoid the 100-second FlowActionTimedOut error in Copilot Studio?
  answer: Respond before 100 seconds, then continue approvals or human input asynchronously
    and call the agent again with Execute Agent and the Conversation ID.
- question: Where do I set maker credentials for actions inside a Copilot Studio agent
    flow?
  answer: Update each Connection Reference inside Power Automate. The maker credential
    setting on the agent tool does not change authentication for flow actions.
---

## TL;DR

Copilot Studio agent flows need the When an agent calls the flow trigger, Respond to the agent action, asynchronous response set to Off, Solution placement and the Copilot Studio plan to appear as tools. Synchronous calls have a 100-second limit, while schema changes require refreshing the flow node.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep agent flows in a Solution with the required trigger and response action, and refresh the Copilot Studio node after changing parameters so tools remain available and schemas match.
- Admins/CoE: Review flow co-owners and Connection References separately from agent tool credentials, because access and runtime identity are configured in different places.
- Security/Compliance: Use scoped co-ownership and controlled storage links for larger images, since flow access can be granted without exposing the agent and cloud storage enables access control.
