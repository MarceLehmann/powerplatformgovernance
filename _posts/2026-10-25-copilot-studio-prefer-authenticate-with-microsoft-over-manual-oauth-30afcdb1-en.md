---
title: 'Copilot Studio: Prefer Authenticate with Microsoft over manual OAuth'
description: Copilot Studio's built-in Entra ID authentication simplifies employee-facing
  agents, web chat, and custom API access.
date: '2026-10-25T16:57:13Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- alm
- copilot-studio
content_type: curated_summary
curation_id: 30afcdb1dbe6c5a969dd11e3
image:
  path: "/assets/img/curated/30afcdb1dbe6c5a969dd11e3.png"
  alt: 'Governance card: Use Authenticate with Microsoft when Entra ID is enough.
    Manual OAuth adds complexity and exposes tokens.'
permalink: "/en/posts/copilot-studio-prefer-authenticate-with-microsoft-over-manual-oauth-30afcdb1/"
translation_url: "/de/posts/copilot-studio-prefer-authenticate-with-microsoft-over-manual-oauth-30afcdb1/"
source_url: https://microsoft.github.io/mcscatblog/posts/you-dont-need-manual-auth/
source_site_url: https://microsoft.github.io/
source_title: You Probably Don't Need Manual Authentication (And Didn't Even Know
  It)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-11-18'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does Authenticate with Microsoft work for Copilot Studio web chat?
  answer: It uses Entra ID sign-in, token exchange, and authenticated WebChat. A web
    app needs one single-page application registration and the CopilotStudio.Copilots.Invoke
    permission.
- question: What does manual authentication require in Copilot Studio?
  answer: Manual authentication requires two app registrations, complex settings such
    as Token Exchange URL, and manual updates because the setup is not solution-aware
    for ALM.
- question: How do Copilot Studio custom connectors avoid exposing user access tokens?
  answer: Custom connector SSO obtains tokens for the user, calls the configured API,
    and refreshes tokens within the connector framework, so makers do not see them.
---

## TL;DR

For Entra ID scenarios, Copilot Studio&\#39;s Authenticate with Microsoft option avoids manual OAuth complexity. Teams, Microsoft 365 Copilot, and SharePoint need no configuration, while web apps need one SPA app registration and the CopilotStudio.Copilots.Invoke permission. Custom connector SSO keeps tokens out of makers&\#39; hands and supports separate OAuth resources.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use Authenticate with Microsoft for Entra ID agents and web chat, because official samples show authenticated conversations without dual app registrations.
- Admins/CoE: Prefer custom connector SSO for custom APIs, because the connector handles consent, delegated tokens, and refresh without exposing tokens to makers.
- Security/Compliance: Reserve manual authentication for non-Entra providers and assess its single-resource limitation and System.User.AccessToken exposure.
