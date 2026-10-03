---
title: Use Dataverse state tables for durable Copilot Studio processes
description: Persist long-running work in Dataverse, use guarded agent-flow transitions,
  and route uncertain cases to people instead of relying on chat memory.
date: '2026-09-30T23:42:24Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- dataverse
- copilot-studio
- alm
- ownership
content_type: curated_summary
curation_id: 8ea278de479cfe2e67a1e0ca
image:
  path: "/assets/img/curated/8ea278de479cfe2e67a1e0ca.png"
  alt: 'Governance card: The agent is not the process. Dataverse must remember every
    state.'
permalink: "/en/posts/use-dataverse-state-tables-for-durable-copilot-studio-processes-8ea278de/"
translation_url: "/de/posts/use-dataverse-state-tables-for-durable-copilot-studio-processes-8ea278de/"
source_url: https://holgerimbery.blog/statetable-multi-agent-orchestration
source_site_url: https://holgerimbery.blog/
source_title: 'Long-Running Business Processes in Copilot Studio: State Tables, Agent
  Flows and Multi-Agent Orchestration'
source_name: Holger Imbery - fieldnotes and insights
source_language: en
source_language_name: English
source_author: Holger Imbery
source_published_at: '2026-09-13'
source_type: article
faq:
  - question: "Why should a Copilot Studio agent not hold the state of a long-running process?"
    answer: "The agent is treated as a stateless worker, and the process lives in a persistent Dataverse table. The agent picks up work, does one well-scoped step, records what it did and moves the item on. This suits processes spanning weeks, such as invoices approved days after arrival, and mirrors how workflow engines like Temporal or Durable Functions externalize state."
  - question: "Which columns does the Dataverse state table need for an invoice case?"
    answer: "The example table has CaseId as business key, a State choice column as single source of truth, an optional SubState, AssignedAgent, an Attempts retry counter, NextActionAt, a JSON Payload, Confidence, LastError and an append-only AuditTrail. Together they let agents route work, retry safely and later explain why a case took as long as it did."
  - question: "What does the single-writer rule mean for the State column?"
    answer: "Only one component, a dedicated agent flow, may write the State column, and it validates transitions against an allowed list. Everything else reads the state and proposes transitions. The companion write-before-confirm rule writes every transition before the side effect and confirms it after. If a backend posting fails, the row stays on Posting with an incremented attempt count instead of being marked Approved."
  - question: "How can a process wait several days without keeping a Copilot Studio session open?"
    answer: "Scheduled sweeper flows check the NextActionAt timestamp and pick up cases that are due. An approval agent, for example, writes PendingApproval with a deadline for reminders and then stops, holding no session. The article notes that cloud flow runs are capped at 30 days and conversations time out after 30 minutes, which makes this pattern necessary."
  - question: "What should the orchestrator do when extraction confidence is low?"
    answer: "It moves the case to the NeedsHuman state and notifies the queue owner. Confidence scores are stored in the table and drive routing, so the automation asks for help when unsure instead of confidently posting a wrong result. NeedsHuman becomes a queryable queue, and a model-driven app over the same table can serve as the clerk workspace."
---

## TL;DR

Run long-lived Copilot Studio work from a Dataverse case table rather than a conversation. Use one guarded TransitionCase agent flow to validate state changes, write before side effects and confirm afterward. Store attempts, NextActionAt, confidence and an append-only audit trail; sweep due cases and send low-confidence work to NeedsHuman.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep specialist agents narrow, put deterministic checks in agent flows, and persist confidence so uncertain extraction reaches human review.
- Admins/CoE: Make a single guarded flow the only writer of State, validate allowed transitions, and retain attempts, errors and audit entries for recovery.
- Leadership/Business: Define business states before building, then use the Dataverse table and Power BI to inspect queues, dwell times and recurring exceptions.
