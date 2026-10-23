---
title: Seamless SSO with Custom Connectors in Copilot Studio
description: Configure Entra ID OAuth, Azure API Connections and connector security
  so Copilot Studio users can authenticate without the connection manager.
date: '2026-10-23T17:13:22Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- environments
- copilot-studio
content_type: curated_summary
curation_id: 7f4ea9f5a9135d2bd1741847
image:
  path: "/assets/img/curated/7f4ea9f5a9135d2bd1741847.png"
  alt: 'Governance card: Configure the connector chain, not just the OAuth screen.
    Missing Azure API Connections can break SSO for other users.'
permalink: "/en/posts/seamless-sso-with-custom-connectors-in-copilot-studio-7f4ea9f5/"
translation_url: "/de/posts/seamless-sso-with-custom-connectors-in-copilot-studio-7f4ea9f5/"
source_url: https://microsoft.github.io/mcscatblog/posts/obo-for-custom-connectors/
source_site_url: https://microsoft.github.io/
source_title: Seamless SSO with Custom Connectors (Yes It's Possible!)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Dave Burman
source_published_at: '2025-12-05'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does consent work for Entra ID OAuth Custom Connectors in Copilot
    Studio?
  answer: Users approve consent the first time a tool uses their credentials on their
    behalf. The prompt is expected and currently unavoidable.
- question: Why can Custom Connector SSO work for a maker but fail for another Copilot
    Studio user?
  answer: The Azure API Connections service may not have been added as an authorized
    client, causing background connection creation to fail for another user.
- question: What does the MCP Onboarding Wizard create for Copilot Studio authentication?
  answer: The wizard creates a Custom Connector in the background. Complete its initial
    authentication, then update the connector security information.
---

## TL;DR

Microsoft Copilot Studio can provide SSO for Entra ID OAuth custom APIs and MCP servers through Custom Connectors. Configure the server and connector app registrations, permissions, Azure API Connections authorization and connector OAuth settings. Users still approve consent once, after which the connection is created and authenticated in the background.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Configure both app registrations, delegated permissions, Azure API Connections authorization and Custom Connector OAuth settings; skipping the authorized-client step can make SSO work for the maker but fail for other users.
- Admins/CoE: Ensure users exist in the environment and have access to the Custom Connector; this supports background connection creation when they invoke the tool.
