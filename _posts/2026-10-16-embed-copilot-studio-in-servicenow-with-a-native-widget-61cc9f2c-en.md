---
title: Embed Copilot Studio in ServiceNow with a Native Widget
description: A native Service Portal widget connects Copilot Studio through WebChat,
  MSAL and the M365 Agents SDK without an iframe or Virtual Agent middle layer.
date: '2026-10-16T17:02:32Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- alm
- copilot-studio
content_type: curated_summary
curation_id: 61cc9f2c463eeb6cb9c1a32f
image:
  path: "/assets/img/curated/61cc9f2c463eeb6cb9c1a32f.png"
  alt: 'Governance card: Decouple portal login from agent access. Let MSAL handle
    Entra authentication inside the widget.'
permalink: "/en/posts/embed-copilot-studio-in-servicenow-with-a-native-widget-61cc9f2c/"
translation_url: "/de/posts/embed-copilot-studio-in-servicenow-with-a-native-widget-61cc9f2c/"
source_url: https://microsoft.github.io/mcscatblog/posts/servicenow-copilot-studio-widget/
source_site_url: https://microsoft.github.io/
source_title: Embedding Copilot Studio Directly in ServiceNow (And Why Auth Was the
  Easy Part)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-02-24'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does the ServiceNow Copilot Studio widget authenticate users with
    MSAL?
  answer: The widget uses its own MSAL instance to find cached Microsoft Entra ID
    tokens or show a one-time Entra sign-in popup.
- question: Why use a native ServiceNow Service Portal widget instead of an iframe
    for Copilot Studio?
  answer: A native widget can access ServiceNow page context, user identity and roles,
    while an iframe runs in an isolated origin and browsing context.
- question: What does the Copilot Studio ServiceNow deployment script create?
  answer: The script uses the ServiceNow Table API to create system properties, widget
    records, attachments, JavaScript Includes, dependencies and related records.
---

## TL;DR

A ServiceNow Service Portal widget loads MSAL, WebChat and a self-contained bundle, then uses the M365 Agents SDK to connect directly to Copilot Studio. Its MSAL instance independently acquires Microsoft Entra ID tokens, so ServiceNow authentication through PingFederate, Okta, SAML or local accounts does not require federation with Entra.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Prefer a native Service Portal widget when the agent needs ServiceNow page context, identity or role information, because an iframe is isolated.
- Admins/CoE: Store agent configuration in ServiceNow system properties and use the idempotent deployment script to create or update the required records.
- Security/Compliance: Review the widget as an independent Entra authentication flow, because ServiceNow login does not control its MSAL token lifecycle.
