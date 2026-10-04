---
title: "An Agent Can Pass Every Test and Still Give a Bad Answer"
description: "Why agent evaluation proves correctness, not safety, why grounding in permission-scoped data is the actual mitigation for confident-but-wrong output, and why what an agent retains is its own governance decision."
date: "2026-09-24T08:55:00Z"
author: marcel_lehmann
lang: en
toc: true
tags:
  - copilot-studio
  - governance
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-35.png"
  alt: "Governance card: The Oracle — your agent is confident, is it right?"
permalink: "/en/posts/gov-ai-agent-governance/"
translation_url: "/de/posts/gov-ai-agent-governance/"
faq:
  - question: "Can a Copilot Studio agent pass evaluation and still give an inappropriate answer?"
    answer: "Yes. Evaluation measures correctness and performance, not safety, bias or ethics, so a release gate needs a separate responsible AI review step."
  - question: "How do I reduce confidently wrong answers from a Copilot Studio agent?"
    answer: "Ground responses in trusted data sources scoped to what the requesting user may see. An ungoverned knowledge source risks a confidently delivered wrong answer."
  - question: "Why does an agent have a bigger blast radius than a regular app?"
    answer: "An agent acts on incomplete or wrong information immediately and at scale, where a person might have paused to double-check."
---

## TL;DR

Microsoft's own guidance for Copilot Studio makes a distinction worth sitting with: **agent evaluation measures correctness and performance, not AI ethics or safety problems — an agent can pass every test case and still produce an inappropriate answer.** Building an agent responsibly means running the same governance checklist a regular app would need — named owner, defined data boundaries, an escalation path — plus two things specific to agents: grounding every response in data the requesting user is actually permitted to see, and treating what the agent retains as its own governance decision, not a byproduct to worry about later.

## The same five questions, with a bigger blast radius

Microsoft's guidance on defining agent value is explicit that governance isn't a tax layered on top — it's the thing the agent's ROI depends on, and it asks for the same basics any well-governed app needs: a named executive accountable for the agent portfolio, a documented Responsible AI impact assessment before deployment, enforced data residency and sensitivity labels so the agent only surfaces content its users are authorized to see, a visible escalation path to a human, and a decommission criterion decided at build time, not improvised later. None of this is agent-specific in spirit — it's the same ownership and access discipline any solution needs. What's different is the stakes: an agent acts on incomplete or wrong information immediately and at scale, where a person might have paused to double-check.

## Passing evaluation isn't the same as being safe

This is the distinction worth internalizing: evaluation tooling measures whether an agent's answers are *correct* against a test set — and Microsoft's own migration guidance says plainly that this "doesn't report" on safety, bias, or ethics at all. A model change can pass every regression test in the suite and still need a separate responsible AI review before it ships, because the two are checking fundamentally different things. Practically, that means a release gate built entirely on evaluation scores has a real gap in it — safety and compliance need their own explicit review step, not an assumption that a green test run covers it.

## Grounding is what actually reduces confidently-wrong answers

An agent doesn't clean up bad or ambiguous input — it accelerates whatever it's given, confidently. The concrete mitigation Microsoft's own architecture guidance points to isn't a better prompt; it's **grounding responses in trusted data sources scoped to what the requesting user is actually permitted to see**, rather than trusting model-generated content for anything consequential. An agent that pulls from an unscoped or ungoverned knowledge source doesn't just risk a wrong answer — it risks a *confidently delivered* wrong answer, which is a materially different failure mode than a person saying "I'm not sure."

## What the agent keeps is a decision, not a default

Conversation transcripts, by default, aren't kept forever — but "what's the retention period" is a governance question with a real answer, not a technical detail to leave on whatever Microsoft ships as default. Every stored transcript is a copy of what a user told the agent, sitting somewhere it can potentially be accessed improperly. This is a separate lever from Dataverse's own audit log retention (which governs *system change* history, not conversation content) — an agent's transcript retention needs its own explicit decision, made deliberately rather than inherited by default.

## Who this matters to

- Admins/CoE: run the same pre-build governance checklist Microsoft publishes for Copilot Studio agents — named accountable owner, a documented Responsible AI impact assessment, a visible escalation path — before an agent goes live, not after a problem surfaces.
- Security/Compliance: don't treat a passed evaluation run as a safety clearance — evaluation catches wrong answers, not harmful ones, and a responsible AI review is a separate, required step evaluation scores don't substitute for.
- Makers: ground every consequential response in a data source scoped to what the requesting user can actually see, rather than trusting the model's own generated content — an ungrounded agent doesn't just risk being wrong, it risks being confidently wrong.
