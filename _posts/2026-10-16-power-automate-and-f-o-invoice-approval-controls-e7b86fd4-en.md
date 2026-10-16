---
title: Power Automate and F&O invoice approval controls
description: Keep F&O posting blocks while routing vendor invoice approvals through
  Power Automate and Teams.
date: '2026-10-16T06:11:54Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- compliance
- dataverse
- copilot-studio
content_type: curated_summary
curation_id: e7b86fd4d679a211229e84be
image:
  path: "/assets/img/curated/e7b86fd4d679a211229e84be.png"
  alt: 'Governance card: Keep F&O posting controls. Put approvals in Teams.'
permalink: "/en/posts/power-automate-and-f-o-invoice-approval-controls-e7b86fd4/"
translation_url: "/de/posts/power-automate-and-f-o-invoice-approval-controls-e7b86fd4/"
source_url: https://www.karlex.fi/power-automate-approvals-vs-fo-workflows-three-ways-to-approve-the-same-invoice/
source_site_url: https://www.karlex.fi/
source_title: 'Power Automate approvals vs F&O workflows: three ways to approve the
  same invoice'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-16'
source_type: article
faq:
- question: How does the F&O workflow and Power Automate business event pattern handle
    vendor invoice approval?
  answer: It uses the when a business event occurs trigger while the F&O workflow
    retains posting control.
- question: Why must a Power Automate approval use the actual approver's context for
    an F&O vendor invoice?
  answer: The approval record can otherwise create an auditing problem, even though
    F&O retains its own workflow history.
- question: What is the Power Automate approval limit described for vendor invoice
    decisions?
  answer: Power Automate approvals stop after 30 days, so long-running decisions may
    need a new approval started on day 29.
---

## TL;DR

For vendor invoices, keep the F&amp;O workflow to prevent posting until approval, trigger Power Automate from its business event, and send the decision to Teams. Virtual Dataverse tables can retrieve vendor details without copying data. Ensure approvals run in the actual approver&\#39;s context, respect F&amp;O licensing, and plan for the 30-day approval limit.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Keep the F&amp;O workflow in place when using Power Automate, because it enforces the posting block and preserves F&amp;O workflow history.
- Security/Compliance: Ensure the flow approves in the actual approver&\#39;s context, or the approval trail creates an auditing problem.
- Leadership/Business: Account for F&amp;O team member licensing when managers approve in Teams, because licensing follows the data accessed.
