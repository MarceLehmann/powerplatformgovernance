---
title: Microsoft Graph HTTP Status Codes in Power Automate
description: Use Graph status codes to diagnose authentication, permissions and throttling
  issues, while preventing duplicate records from unsafe Power Automate retries.
date: '2026-10-29T16:45:11Z'
author: governance_editorial
lang: en
toc: false
tags:
- power-automate
- security
content_type: curated_summary
curation_id: c5232ae6008d52c592ca5007
image:
  path: "/assets/img/curated/c5232ae6008d52c592ca5007.png"
  alt: 'Governance card: Retries can create duplicates. Know which requests are safe
    to repeat.'
permalink: "/en/posts/microsoft-graph-http-status-codes-in-power-automate-c5232ae6/"
translation_url: "/de/posts/microsoft-graph-http-status-codes-in-power-automate-c5232ae6/"
source_url: https://www.m365.fm/blog/microsoft-graph-http-status-codes-troubleshooting/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft Graph HTTP Status Codes: A Troubleshooting Guide for Power
  Automate'
source_name: M365 FM
source_language: en
source_language_name: English
source_published_at: '2026-10-29'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: How should Power Automate handle a Microsoft Graph 429 response?
  answer: The flow should read the retry-after header and wait before sending the
    request again. Immediate repeated requests can worsen throttling.
- question: What is the difference between Microsoft Graph 401 and 403 errors?
  answer: A 401 means authentication failed or the token is invalid or expired. A
    403 means the identity lacks required API permissions.
- question: How can Power Automate prevent duplicate records after Microsoft Graph
    POST retries?
  answer: Use idempotency keys or error handling for POST retries. Repeated non-idempotent
    requests can create duplicate emails, database rows, or orders.
animation:
  src: /assets/img/animations/c5232ae6008d52c592ca5007-en.gif
  poster: /assets/img/animations/c5232ae6008d52c592ca5007-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows Power Automate handling Microsoft Graph responses by checking 401 auth failures, checking 403 permission failures, waiting on retry-after for 429, and protecting POST or PATCH retries."
---

## TL;DR

Power Automate flows calling Microsoft Graph should distinguish 401 authentication failures from 403 permission failures, wait using retry-after after 429 throttling, and protect non-idempotent POST or PATCH retries with idempotency keys or error handling. OAuth 2.0 short-lived bearer tokens reduce exposure compared with static API keys.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Treat GET, HEAD, PUT, and DELETE as idempotent, but protect POST and PATCH retries with idempotency keys or checks because failures can create duplicate emails, rows, or orders.
- Admins/CoE: Diagnose 401 through sign-in or token validity, 403 through Entra ID permissions, and 429 through retry-after handling so flows recover without repeated requests, unnecessary password resets, or throttling blocks.
