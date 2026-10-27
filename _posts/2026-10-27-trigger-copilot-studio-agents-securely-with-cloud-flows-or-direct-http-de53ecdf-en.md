---
title: Trigger Copilot Studio Agents Securely with Cloud Flows or Direct HTTP
description: Use Power Automate or Direct Line to trigger Copilot Studio agents, while
  protecting secrets and secured access.
date: '2026-10-27T17:01:25Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- power-automate
- copilot-studio
content_type: curated_summary
curation_id: de53ecdff734e0f3f760cd98
image:
  path: "/assets/img/curated/de53ecdff734e0f3f760cd98.png"
  alt: 'Governance card: HTTP triggers need guarded secrets. Secure the agent before
    you connect it.'
permalink: "/en/posts/trigger-copilot-studio-agents-securely-with-cloud-flows-or-direct-http-de53ecdf/"
translation_url: "/de/posts/trigger-copilot-studio-agents-securely-with-cloud-flows-or-direct-http-de53ecdf/"
source_url: https://microsoft.github.io/mcscatblog/posts/triggering-copilot-studio-http/
source_site_url: https://microsoft.github.io/
source_title: Triggering Copilot Studio Agents with HTTP Calls
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Roel Schenk
source_published_at: '2025-09-25'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How should a Copilot Studio agent be configured before using Direct Line
    HTTP calls?
  answer: Publish the agent, select No Authentication in Security, copy the Web channel
    security secret, and activate Require secured access.
- question: What four Direct Line requests are needed to send a message and read a
    Copilot Studio response?
  answer: Generate a Direct Line token, start a conversation, post a text message,
    and retrieve conversation activities with the token.
- question: How can teams protect the Direct Line secret in a Python integration?
  answer: Store the secret in environment variables or Azure Key Vault, protect the
    endpoint with access control, rotate secrets, and add retries and timeouts.
---

## TL;DR

Copilot Studio agents can be triggered through a Power Automate Cloud Flow or four Direct Line REST calls. Configure the agent with No Authentication, copy the Web channel security secret, activate Require secured access, and protect the secret with Azure Key Vault or another secure store.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose Cloud Flow for a native Power Platform integration, or Direct Line for a raw REST integration, based on how the agent must be triggered.
- Admins/CoE: Publish the agent, configure its Security settings, and activate Require secured access before allowing external requests.
- Security/Compliance: Store Direct Line secrets securely, enforce endpoint access control, rotate secrets regularly, and add retries, timeouts, and logging for production integrations.
