---
title: Secure Business Central integrations with clear ownership and recovery
description: Design Business Central integrations with supported interfaces, least
  privilege, safe retries, monitoring, and explicit ownership.
date: '2026-10-08T10:41:09Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- ownership
- environments
- dataverse
content_type: curated_summary
curation_id: 0edb21cfdfdb934301fa8a4b
image:
  path: "/assets/img/curated/0edb21cfdfdb934301fa8a4b.png"
  alt: 'Governance card: Point to point links multiply risk. Design for ownership,
    least privilege, and recovery.'
permalink: "/en/posts/secure-business-central-integrations-with-clear-ownership-and-recovery-0edb21cf/"
translation_url: "/de/posts/secure-business-central-integrations-with-clear-ownership-and-recovery-0edb21cf/"
source_url: https://softchief.com/business-central-external-integration-architecture-build-secure-scalable-connections/
source_site_url: https://softchief.com/
source_title: 'Business Central External Integration Architecture: Build Secure, Scalable
  Connections'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-10-08'
source_type: article
faq:
- question: How should Business Central integrations handle SOAP and OData deprecation?
  answer: Use supported APIs for new designs. Retain SOAP only for compatibility needs
    and plan migration, while Microsoft-owned OData pages require a supported replacement.
- question: What authentication model does Business Central support for unattended
    service integrations?
  answer: Business Central supports OAuth 2.0 client credentials through Microsoft
    Entra ID for applications running without a signed-in user.
- question: How can queued Business Central messages prevent duplicate business outcomes?
  answer: Design for duplicate delivery by using an idempotency key or equivalent
    detection, then provide dead-letter handling and a safe manual recovery path.
---

## TL;DR

Business Central integrations should use supported APIs, least-privilege access, managed secrets, bounded retries, correlation identifiers, and defined recovery paths. Direct links suit small flows, while middleware or queues help coordinate multiple systems or asynchronous work. SOAP is deprecated, and Microsoft-owned pages will no longer be exposable as OData endpoints starting in version 30.0.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Match each interface to the data, timing, and support needs, because direct links can become tightly coupled as systems grow.
- Admins/CoE: Assign only the Business Central permissions required, store secrets in a managed secret store, and monitor failures, retries, queues, and authentication events.
- Security/Compliance: Keep exposed data and logs limited, avoid recording tokens or sensitive payloads, encrypt transport, and define retention periods.
- Leadership/Business: Require clear ownership for records, transformations, schemas, and recovery before expanding beyond a bounded integration flow.
