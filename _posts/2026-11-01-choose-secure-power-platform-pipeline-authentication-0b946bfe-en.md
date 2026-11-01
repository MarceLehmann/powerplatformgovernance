---
title: Choose secure Power Platform pipeline authentication
description: Compare client secrets, managed identities and workload identity federation
  for Azure DevOps Power Platform service connections.
date: '2026-11-01T16:40:45Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- security
- governance
- dataverse
- environments
content_type: curated_summary
curation_id: 0b946bfed2b376e0bfe6a874
image:
  path: "/assets/img/curated/0b946bfed2b376e0bfe6a874.png"
  alt: 'Governance card: Choose the pipeline identity deliberately. A secretless connection
    still needs governance.'
permalink: "/en/posts/choose-secure-power-platform-pipeline-authentication-0b946bfe/"
translation_url: "/de/posts/choose-secure-power-platform-pipeline-authentication-0b946bfe/"
source_url: https://aidevme.com/power-platform-service-connection-authentication/
source_site_url: https://aidevme.com/
source_title: 'Power Platform Service Connections: Client Secret, Managed Identity
  or Workload Identity Federation?'
source_name: Practical AI, Copilot & Modern Development Insights
source_language: en
source_language_name: English
source_author: Zsolt Zombik
source_published_at: '2026-11-01'
source_updated_at: '2026-11-01'
source_type: article
faq:
- question: How does workload identity federation authenticate a Power Platform service
    connection?
  answer: It exchanges a short-lived Azure DevOps OIDC token with Entra. The application
    needs a federated credential and must exist as a Dataverse application user.
- question: Why cannot Microsoft-hosted agents use Azure Managed Identity for Power
    Platform Build Tools?
  answer: Microsoft-hosted agents do not support managed identities. This option requires
    a self-hosted Azure VM agent or an agent pool with the relevant identity.
- question: What issuer and subject should I use for a federated Power Platform service
    connection?
  answer: Use the issuer and subject shown by Azure DevOps on the connection. Older
    published values may not match newly created connections.
---

## TL;DR

Power Platform Build Tools service connections support client secrets, Azure Managed Identity and workload identity federation. Federation uses a short-lived Azure DevOps token and needs a federated credential plus a Dataverse application user. Managed identity requires a self-hosted Azure agent, while client secrets require expiry management.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Create a Dataverse application user with an appropriate role for every target environment, regardless of the connection method.
- Security/Compliance: Prefer short-lived federation where policy allows, and review preview approval requirements before production use.
- Admins/CoE: Keep Grant access permission to all pipelines unchecked and authorize pipelines individually.
- Makers: Check PowerPlatformSetConnectionVariables and direct pac scripts before moving a pipeline to federation.
