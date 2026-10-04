---
title: Secure Dataverse secrets with Azure Key Vault
description: Move API keys from text environment variables to Azure Key Vault and
  retrieve them securely in Power Automate.
date: '2026-10-04T10:36:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- power-automate
- environments
- governance
content_type: curated_summary
curation_id: 84cc3df8e2477676fc9806aa
image:
  path: "/assets/img/curated/84cc3df8e2477676fc9806aa.png"
  alt: 'Governance card: Text environment variables can expose API keys. Store secrets
    in Azure Key Vault instead.'
permalink: "/en/posts/secure-dataverse-secrets-with-azure-key-vault-84cc3df8/"
translation_url: "/de/posts/secure-dataverse-secrets-with-azure-key-vault-84cc3df8/"
source_url: https://jonasr.app/secret-environment-variables/?utm_source=rss&utm_medium=rss&utm_campaign=secret-environment-variables
source_site_url: https://jonasr.app/
source_title: Using Secret Environment Variables in Dataverse
source_name: JonasR.app
source_language: en
source_language_name: English
source_author: Jonas Rapp
source_published_at: '2026-10-04'
source_type: article
---

## TL;DR

Store sensitive Dataverse environment variable values in Azure Key Vault rather than Text variables. Create a Secret variable with Azure Key Vault as its secret store, set an environment-specific current value reference, then use the Dataverse RetrieveEnvironmentVariableSecretValue action in a cloud flow with Secure Outputs enabled.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use Secret environment variables and RetrieveEnvironmentVariableSecretValue instead of placing API keys in flows or Text variables.
- Admins/CoE: Configure the Dataverse identity as Key Vault Secrets User and register Microsoft.PowerPlatform for the subscription.
- Security/Compliance: Avoid default references across environments and enable Secure Outputs so retrieved secrets are hidden in run history.
