---
title: Require Microsoft authentication to protect Copilot Studio agents
description: The new environment-level control forces integrated Microsoft authentication,
  blocking unauthenticated Direct Line content while preserving the M365 Agents SDK
  path.
date: '2026-10-06T16:59:37Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- dlp
- environments
- copilot-studio
content_type: curated_summary
curation_id: 2846036e40d3dc9cc1e5b17b
image:
  path: "/assets/img/curated/2846036e40d3dc9cc1e5b17b.png"
  alt: 'Governance card: Require Microsoft authentication closes the pre-authentication
    surface.'
permalink: "/en/posts/require-microsoft-authentication-to-protect-copilot-studio-agents-2846036e/"
translation_url: "/de/posts/require-microsoft-authentication-to-protect-copilot-studio-agents-2846036e/"
source_url: https://microsoft.github.io/mcscatblog/posts/agent-authentication-controls/
source_site_url: https://microsoft.github.io/
source_title: The Admin Control That Closes the Door Before "Hello"
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-06-14'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: What does Require Microsoft authentication do for Copilot Studio agents?
  answer: It forces makers to use Authenticate with Microsoft, so unauthenticated
    Direct Line clients receive an error before any agent content is shared.
- question: Why should I keep Direct Line channels enabled for the M365 Agents SDK?
  answer: The SDK client uses the same Direct Line channel lever, so disabling that
    channel would break its delegated-auth integration path.
- question: How can I find Copilot Studio agents affected by the authentication policy?
  answer: Use Copilot Studio Kit inventory and filter Dataverse Agent Details by End
    User Authentication Type. Anything other than Integrated is affected.
---

## TL;DR

In Power Platform admin center, Security &gt; Identity and access, Require Microsoft authentication forces Copilot Studio makers to use Authenticate with Microsoft. Raw Direct Line clients receive an error before content is shared, while the M365 Agents SDK continues working. Existing non-Integrated agents stop responding until makers update them.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Set Require Microsoft authentication for employee-facing environments to close the pre-authentication content surface without disabling the M365 Agents SDK.
- Security/Compliance: Treat the setting as an identity control rather than a DLP channel toggle, because blocking Direct Line also breaks the SDK client path.
- Makers: Update agents using anything other than Integrated authentication before enforcement, because noncompliant published agents stop responding and cannot republish.
- Leadership/Business: Separate employee-facing and customer-facing agents into different environments so stricter authentication does not create avoidable disruption.
