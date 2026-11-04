---
title: Choose the right Dataverse extension for transaction risk
description: Match plug-ins, Custom APIs, webhooks and Service Bus to transaction,
  latency, security and ALM requirements.
date: '2026-11-04T16:46:55Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- alm
- dataverse
content_type: curated_summary
curation_id: f42e43db8ccb419bc20050f5
image:
  path: "/assets/img/curated/f42e43db8ccb419bc20050f5.png"
  alt: 'Governance card: Choose the extension by transaction risk, latency and ownership.
    Do not wait for production failures.'
permalink: "/en/posts/choose-the-right-dataverse-extension-for-transaction-risk-f42e43db/"
translation_url: "/de/posts/choose-the-right-dataverse-extension-for-transaction-risk-f42e43db/"
source_url: https://aidevme.com/dataverse-plugins-custom-apis-webhooks-service-bus/
source_site_url: https://aidevme.com/
source_title: Plug-ins, Custom APIs, Webhooks or Service Bus? Choosing the Right Dataverse
  Extension
source_name: AIDevMe
source_language: en
source_language_name: English
source_author: Zsolt Zombik
source_published_at: '2026-11-04'
source_updated_at: '2026-11-04'
source_type: article
faq:
- question: When should a Dataverse plug-in run in PreValidation instead of PreOperation?
  answer: Use PreValidation to reject invalid input before the initial database transaction
    starts. Use PreOperation when the plug-in must change target values before saving.
- question: How can a Dataverse Custom API restrict who can call an agent operation?
  answer: Set an existing Execute Privilege Name on the Custom API. Its plug-in can
    then apply server-side validation within the named, typed operation.
- question: What happens when a Dataverse webhook payload exceeds 256 KB?
  answer: Dataverse adds the x-ms-dynamics-msg-size-exceeded header and removes context,
    input parameters, and image collections. Webhook receivers must account for the
    reduced payload.
---

## TL;DR

Use synchronous plug-ins for validation or data changes that must succeed with a Dataverse save. Use Custom APIs for typed business operations with privilege checks. Use asynchronous Service Bus endpoints for decoupled volume, and webhooks for lightweight HTTPS notifications, while designing receivers for retries, payload limits and idempotency.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use Custom APIs for named business operations instead of exposing arbitrary Dataverse writes to callers or agents.
- Admins/CoE: Add plug-in assemblies and steps to solutions, because secure configuration is not exported with a solution.
- Security/Compliance: Set a Custom API Execute Privilege Name and use server-side validation to restrict and govern who can run sensitive operations.
- Admins/CoE: Monitor Dataverse plug-in execution time, failures and activity in Power Platform admin center analytics.
