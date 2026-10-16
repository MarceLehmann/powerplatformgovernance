---
title: Choose the right Copilot Studio integration path for your agent
description: A decision guide compares Teams, hosted and self-hosted WebChat, custom
  UIs, mobile SDKs, Direct Line, and server-side connectors.
date: '2026-10-16T17:02:29Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
- compliance
- governance
content_type: curated_summary
curation_id: a5c64ead3cf1c3155572159e
image:
  path: "/assets/img/curated/a5c64ead3cf1c3155572159e.png"
  alt: 'Governance card: Choose the integration path that matches identity, audience,
    and control needs.'
permalink: "/en/posts/choose-the-right-copilot-studio-integration-path-for-your-agent-a5c64ead/"
translation_url: "/de/posts/choose-the-right-copilot-studio-integration-path-for-your-agent-a5c64ead/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-api-decision-guide/
source_site_url: https://microsoft.github.io/
source_title: Every Path to Integrating Your Copilot Studio Agent
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-03-02'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Which Copilot Studio integration provides Entra ID SSO for employee-facing
    WebChat?
  answer: The M365 Agents SDK client provides seamless Entra ID SSO for employee-facing
    WebChat when the agent uses Authenticate with Microsoft.
- question: Why does Microsoft-hosted Copilot Studio WebChat not provide seamless
    SSO?
  answer: The hosted WebChat embed uses manual authentication with a copied validation
    code, so users cannot receive seamless SSO through that embed.
- question: What authentication limitation affects the Copilot Studio native mobile
    SDK?
  answer: The native mobile SDK currently requires No Authentication, while its Entra
    ID configuration fields are not functional yet.
---

## TL;DR

Copilot Studio integration depends on audience, authentication, and control needs. Teams requires no API, hosted WebChat is no-code but cannot provide SSO, the M365 Agents SDK supports Entra ID SSO and streaming for employee scenarios, while Direct Line supports customer and non-Entra scenarios.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Match the agent experience to its audience, using Teams for internal users, M365 Agents SDK WebChat for employee SSO, and Direct Line for customer or non-Entra access.
- Admins/CoE: Record the authentication mode and integration pattern before deployment, because hosted WebChat has no SSO and the native mobile SDK currently requires No Authentication.
- Security/Compliance: Use a server-side layer when sanitization, compliance enforcement, or response transformation is required, while recognizing that Direct Line interception adds routing complexity and latency.
