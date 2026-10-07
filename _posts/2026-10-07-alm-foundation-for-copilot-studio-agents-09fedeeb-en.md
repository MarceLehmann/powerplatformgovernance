---
title: ALM Foundation for Copilot Studio Agents
description: Use environments, solutions, publishers, pipelines, configuration and
  evaluations to move Copilot Studio agents safely from development to production.
date: '2026-10-07T17:03:57Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- copilot-studio
- environments
- ownership
content_type: curated_summary
curation_id: '09fedeebbd585d5ecfe4664a'
image:
  path: "/assets/img/curated/09fedeebbd585d5ecfe4664a.png"
  alt: 'Governance card: Move agents through Dev, Test, and Production. Keep production
    stable with managed solutions and pipelines.'
permalink: "/en/posts/alm-foundation-for-copilot-studio-agents-09fedeeb/"
translation_url: "/de/posts/alm-foundation-for-copilot-studio-agents-09fedeeb/"
source_url: https://microsoft.github.io/mcscatblog/posts/alm-copilot-studio-agents-foundation/
source_site_url: https://microsoft.github.io/
source_title: 'ALM for Copilot Studio Agents: The Foundation'
source_name: Microsoft Copilot Studio CAT
source_language: en
source_language_name: English
source_author: James Papadimitriou
source_published_at: '2026-06-03'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How should Copilot Studio agents move between Development, Test, and Production?
  answer: Use managed solutions and a Power Platform Pipeline to promote the same
    artifact from Development through Test to Production.
- question: What does the block unmanaged customizations setting do in Power Platform
    environments?
  answer: It helps prevent local edits to managed components in Test and Production,
    reducing changes that deployments could silently overwrite.
- question: Where should Copilot Studio agent API keys and tokens be stored?
  answer: Store secrets in Azure Key Vault and reference them through secret environment
    variables, allowing key rotation without redeployment.
---

## TL;DR

Copilot Studio agents should move from Development to Test to Production through managed solutions and Power Platform Pipelines. Create a custom publisher first, keep all assets in a preferred solution, store environment-specific values in environment variables, protect secrets with Azure Key Vault, block unmanaged customizations downstream, and run evaluations before and after deployment.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Create the custom publisher and preferred solution before authoring agent assets, so components receive a deliberate prefix and remain deployable.
- Admins/CoE: Separate Development, Test, and Production, configure Power Platform Pipelines, and block unmanaged customizations in Test and Production to protect live agents.
- Security/Compliance: Keep credentials in Azure Key Vault through secret environment variables, because pipelines map references without storing secret values.
- Leadership/Business: Require evaluations before export and after import, so promotion confirms both deployment integrity and agent behavior.
