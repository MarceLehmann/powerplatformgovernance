---
title: One SDK Client for Both Copilot Studio Harnesses
description: The JavaScript and .NET Copilot Studio clients can connect custom apps
  to standard and GitHub Copilot harnesses with Entra ID.
date: '2026-10-21T22:39:34Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
content_type: curated_summary
curation_id: ba1e9860d921c0f0cebbb1f8
image:
  path: "/assets/img/curated/ba1e9860d921c0f0cebbb1f8.png"
  alt: 'Governance card: One client can serve both Copilot Studio harnesses. Preview
    support still needs early release testing.'
permalink: "/en/posts/one-sdk-client-for-both-copilot-studio-harnesses-ba1e9860/"
translation_url: "/de/posts/one-sdk-client-for-both-copilot-studio-harnesses-ba1e9860/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-sdk-both-harnesses/
source_site_url: https://microsoft.github.io/
source_title: One SDK Client for Both Copilot Studio Harnesses (Preview)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-10-21'
source_updated_at: '2026-10-21'
source_type: article
faq:
- question: How does CopilotStudioClient connect to both Copilot Studio harnesses?
  answer: The client uses the environment ID and agent schema name, then applies the
    same conversation methods to either harness.
- question: Which Microsoft Entra permission does the Copilot Studio React WebChat
    sample require?
  answer: The app registration requires the Power Platform API delegated permission
    CopilotStudio.Copilots.Invoke, with organizational consent as needed.
- question: Does showReasoning enable reasoning in a Copilot Studio agent?
  answer: No. showReasoning displays reasoning already sent by the service, while
    the harness and model determine what the client receives.
---

## TL;DR

The Copilot Studio client uses the same conversation methods for standard and GitHub Copilot harnesses when given an environment ID and agent schema name. JavaScript and .NET support is available, while Python support is planned. GitHub Copilot harness support remains preview, with endpoints rolling out across regions.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Test the client in an early release environment because GitHub Copilot harness endpoints are still rolling out across regions.
- Security/Compliance: Configure an Entra app registration with the CopilotStudio.Copilots.Invoke delegated permission and avoid storing a client secret in the browser.
- Makers: Use the environment ID and correct agent schema name, then keep the agent published with Authenticate with Microsoft enabled.
