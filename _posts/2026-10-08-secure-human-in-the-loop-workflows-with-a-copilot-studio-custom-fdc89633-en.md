---
title: Secure Human-in-the-Loop Workflows with a Copilot Studio Custom Connector
description: A webhook action lets Copilot Studio workflows pause for human input,
  resume through a custom UI, and protect callback URLs with production controls.
date: '2026-10-08T16:51:36Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- power-automate
- security
content_type: curated_summary
curation_id: fdc89633319eccb2a91703f6
image:
  path: "/assets/img/curated/fdc89633319eccb2a91703f6.png"
  alt: 'Governance card: Anyone with the callback URL can resume the flow. Keep it
    server-side.'
permalink: "/en/posts/secure-human-in-the-loop-workflows-with-a-copilot-studio-custom-fdc89633/"
translation_url: "/de/posts/secure-human-in-the-loop-workflows-with-a-copilot-studio-custom-fdc89633/"
source_url: https://microsoft.github.io/mcscatblog/posts/human-in-the-loop-custom-connector/
source_site_url: https://microsoft.github.io/
source_title: Building a Custom Human-in-the-Loop Experience for Copilot Studio Workflows
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-05-20'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: What does x-ms-notification-url do in a Copilot Studio custom connector?
  answer: It tells Power Platform to generate a callback URL and inject it into the
    connector request for later workflow resumption.
- question: How does a Copilot Studio webhook action resume a paused workflow?
  answer: The backend posts the human response to notificationUrl, causing Power Platform
    to rehydrate the flow and continue with the response data.
- question: How should a Human-in-the-Loop connector protect notificationUrl in production?
  answer: Keep the SAS-signed notificationUrl server-side and never expose it to browsers
    or end users, because anyone with it can resume the flow.
---

## TL;DR

A Copilot Studio custom connector can pause a workflow through a webhook action and resume it when the backend posts to the generated notificationUrl. The flow dehydrates while waiting. The OpenAPI definition needs x-ms-notification-url, x-ms-notification-content, no x-ms-trigger, and a DELETE unsubscribe endpoint.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use the Human-in-the-Loop connector action when built-in email or Teams responses create workflow noise, and shape the custom UI around the process.
- Admins/CoE: Replace in-memory storage and dev tunnels before production, using persistent storage and HTTPS hosting for the backend.
- Security/Compliance: Keep the SAS-signed notificationUrl server-side and add OAuth plus user authorization, because anyone with the URL can resume the flow.
