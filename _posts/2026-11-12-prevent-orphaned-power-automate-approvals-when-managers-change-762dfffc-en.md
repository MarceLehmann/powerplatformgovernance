---
title: Prevent orphaned Power Automate approvals when managers change
description: Manager updates may not change active approvals. Validate approvers,
  record requests, monitor pending work and document safe reassignment or restart
  procedures.
date: '2026-11-12T10:51:05Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- ownership
- security
- power-automate
content_type: curated_summary
curation_id: 762dfffcf908fe278b9e4b27
image:
  path: "/assets/img/curated/762dfffcf908fe278b9e4b27.png"
  alt: 'Governance card: A manager change does not reassign an active approval. Build
    the recovery path before the request stalls.'
permalink: "/en/posts/prevent-orphaned-power-automate-approvals-when-managers-change-762dfffc/"
translation_url: "/de/posts/prevent-orphaned-power-automate-approvals-when-managers-change-762dfffc/"
source_url: https://softchief.com/power-automate-prevent-orphaned-approval-requests-when-managers-change/
source_site_url: https://softchief.com/
source_title: 'Power Automate: Prevent Orphaned Approval Requests When Managers Change'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_published_at: '2026-11-12'
source_type: article
faq:
- question: What does Get manager (V2) return when a Power Automate user has no manager?
  answer: Get manager (V2) can return No manager found when Microsoft Entra ID has
    no configured manager. The flow needs fallback handling.
- question: How should a pending Power Automate approval be handled after a manager
    changes roles?
  answer: Compare pending requests with current manager data, then reassign where
    supported or cancel and replace the approval while preserving the original audit
    trail.
- question: Why can Create an approval and Wait for an approval leave a Power Automate
    flow stuck?
  answer: A quick response can arrive before the wait action starts, leaving the flow
    stuck. Keep the actions close together or test this pattern carefully.
---

## TL;DR

Power Automate does not necessarily reassign an active approval when a manager changes. Use Get manager (V2), validate the returned email, UPN or Entra ID, provide a named fallback, store request and approval references separately, and monitor pending work alongside flow history.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Resolve and validate the current manager before creating an approval, then include fallback logic for missing or invalid recipients.
- Admins/CoE: Keep request records with approvers, approval references, statuses and routing changes, then monitor approval age alongside flow run history.
- Security/Compliance: Restrict access to approval records and document who may reassign, cancel or restart requests so decisions remain traceable.
