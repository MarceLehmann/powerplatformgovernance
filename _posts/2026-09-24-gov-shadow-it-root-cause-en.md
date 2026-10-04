---
title: "Shadow IT Isn't a Discipline Problem, It's a Latency Problem"
description: "Why demand for a tool doesn't disappear when IT says no, why the business/IT split itself manufactures workarounds, and why a slow yes creates exactly as much shadow IT as a silent no."
date: "2026-09-24T09:00:00Z"
author: marcel_lehmann
lang: en
toc: true
tags:
  - governance
  - shadow-it
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-05.png"
  alt: "Governance card: On the Road — the fastest legal path beats any lockdown."
permalink: "/en/posts/gov-shadow-it-root-cause/"
translation_url: "/de/posts/gov-shadow-it-root-cause/"
faq:
  - question: "Why do employees buy tools on a personal credit card instead of waiting for IT?"
    answer: "Because the legal path is slower than the illegal one. A request that takes six weeks does not make the business need go away, it makes someone solve it without you."
  - question: "How does the catalog in Power Platform reduce shadow IT?"
    answer: "It lets makers discover and reuse already-approved components instead of starting from a purchase decision."
  - question: "Is a fast no better than a slow maybe for IT requests?"
    answer: "Yes. The failure mode is the absence of an answer, not a decline."
---

## TL;DR

Shadow IT isn't caused by makers ignoring rules — it's caused by a **legal path that's slower than an illegal one**. A request that takes six weeks doesn't make the underlying business need go away; it makes someone buy a tool on a personal credit card instead. Microsoft's own low-code adoption guidance names the structural cause directly: an organizational gap between business and IT that neither side can close alone, closed instead by pairing a maker with an IT partner on every project rather than routing requests across a fence. And the fix that actually works isn't a faster "yes" — it's a fast **answer**, because a silent "still pending" creates exactly as much shadow IT as an explicit "no."

## Demand doesn't disappear when you say no — it changes tools

A request that sits unanswered for months doesn't resolve itself; the person with the business problem still has the business problem, and eventually they solve it without you. That's the mechanic behind unmanaged, unlicensed tools showing up on expense reports: not malice, not a training gap, but a business need that outran the response time of the process meant to handle it. The fix Microsoft's platform actually offers for this isn't a bigger warning banner — it's the [catalog in Power Platform](https://learn.microsoft.com/power-apps/maker/data-platform/catalog-overview), a mechanism specifically for makers to discover and reuse **already-approved** components instead of starting from a purchase decision. A catalog with real content in it competes on speed with an unauthorized tool in a way that a policy document never will, because it turns "find something that already works" into the fast option instead of the slow, unauthorized purchase.

## Fusion teams close the gap that shadow IT lives in

Microsoft's guidance on low-code co-development is explicit that the tension here is structural, not personal: the ability for business users to start prototyping in isolation is exactly what creates siloing and shadow IT growth in the first place, and the fix is a **fusion team** model — pro developers, makers, and admins working together on the same solution rather than business handing IT a spec across a wall. This matters because "IT is too slow" and "the business builds junk" can both be true at the same time without either side being wrong: they're two symptoms of the same missing connective tissue. Pairing a maker with an IT partner on a project, rather than routing a request through a queue, removes the handoff point where the gap actually opens up — there's no fence left for the request to wait at.

## A fast no beats a slow maybe every time

The distinction worth being precise about: the failure mode isn't "IT said no." It's **the absence of an answer**, in either direction. A request that gets an explicit decline in three days is a closed loop — the requester knows where they stand and can escalate or move on. A request that sits in "under review" for months is an open loop that eventually resolves itself, just not through the channel anyone wanted it to. This is exactly the reasoning behind Microsoft's own DLP exception-handling guidance, which treats response time as *part of* the policy rather than separate from it: an exception process is only as protective as its slowest response, because every unanswered request is an incentive to stop asking. The operational fix is small and specific — a request form, a standing weekly decision slot, and a committed answer within days, with "no" being an entirely acceptable outcome as long as it arrives on schedule.

## Who this matters to

- Leadership/Business: fund the fast path, not just the lockdown — a catalog of pre-approved components and a committed multi-day response time cost less than the audit trail gap an unauthorized purchase creates.
- Admins/CoE: pair a named IT contact with each new maker project instead of routing it through a request queue — the fusion-team model closes the exact structural gap that produces both "IT is too slow" and "the business builds junk" complaints.
- Makers: a fast "no" from an official channel is a better outcome than a fast "yes" from a personal credit card — the first keeps the data inside a contract with logs, the second doesn't.
