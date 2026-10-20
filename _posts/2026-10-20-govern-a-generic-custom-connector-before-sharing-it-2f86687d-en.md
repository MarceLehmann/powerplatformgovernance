---
title: Govern a Generic Custom Connector Before Sharing It
description: A dynamic Custom Connector centralizes API authentication, but DLP governs
  the entire connector rather than individual endpoints.
date: '2026-10-20T16:37:11Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- dlp
- alm
- copilot-studio
content_type: curated_summary
curation_id: 2f86687dce48bf8ab640fbd2
image:
  path: "/assets/img/curated/2f86687dce48bf8ab640fbd2.png"
  alt: 'Governance card: DLP applies to the whole connector, not each endpoint. A
    generic connector can reach any REST API.'
permalink: "/en/posts/govern-a-generic-custom-connector-before-sharing-it-2f86687d/"
translation_url: "/de/posts/govern-a-generic-custom-connector-before-sharing-it-2f86687d/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-172-generic-custom-connector-dynamic-http-request/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 172: One Custom Connector, Any Endpoint, Central
  Auth with a Dynamic HTTP Request"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-10-20'
source_updated_at: '2026-10-17'
source_type: article
faq:
- question: How does a Power Platform Custom Connector keep an API key out of flows?
  answer: The API key is entered once on the encrypted connection, while flows send
    only the relative path, query and body.
- question: How does DLP apply to a generic Custom Connector with dynamic endpoints?
  answer: DLP applies to the entire connector rather than individual endpoints. A
    generic connector can reach any REST API, so trusted sharing is required.
- question: How can a Custom Connector call nested API resources such as projects
    and tasks?
  answer: Path parameters encode slashes, so nested resources need a separate parameterized
    action or URL rewriting through custom connector code.
publisher_disclosure: Both publications are edited by Marcel Lehmann.
---

## TL;DR

A Custom Connector can store an API key on one encrypted connection and expose generic actions that receive relativePath, query and body at runtime. DLP applies to the whole connector, so a connector capable of reaching any REST API should be governed before productive sharing.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Pass relativePath, query and body to the generic action, while the shared connection keeps the API key out of flow logic.
- Admins/CoE: Classify and govern the entire connector before rollout, because its dynamic design can reach any REST API.
- Leadership/Business: Account for Premium rights for every user running a flow or app that uses the connector.
