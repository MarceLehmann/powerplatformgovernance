---
title: Dataverse-Geheimnisse mit Azure Key Vault schützen
description: API-Schlüssel aus Text-Umgebungsvariablen in Azure Key Vault verschieben
  und sicher in Power Automate abrufen.
date: '2026-10-04T10:36:46Z'
author: governance_editorial
lang: de
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
  alt: 'Governance-Karte: Text environment variables can expose API keys. Store secrets
    in Azure Key Vault instead.'
permalink: "/de/posts/secure-dataverse-secrets-with-azure-key-vault-84cc3df8/"
translation_url: "/en/posts/secure-dataverse-secrets-with-azure-key-vault-84cc3df8/"
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

Sensible Werte von Dataverse-Umgebungsvariablen sollen in Azure Key Vault statt in Textvariablen liegen. Eine Secret-Variable mit Azure Key Vault als Secret Store anlegen, je Umgebung eine aktuelle Wertreferenz setzen und in einem Cloud Flow die Dataverse-Aktion RetrieveEnvironmentVariableSecretValue mit aktivierten Secure Outputs verwenden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Secret-Umgebungsvariablen und RetrieveEnvironmentVariableSecretValue nutzen, statt API-Schlüssel in Flows oder Textvariablen abzulegen.
- Admins/CoE: Der Dataverse-Identität die Rolle Key Vault Secrets User geben und Microsoft.PowerPlatform für das Abonnement registrieren.
- Security/Compliance: Keine Standardreferenzen zwischen Umgebungen verwenden und Secure Outputs aktivieren, damit abgerufene Geheimnisse im Ausführungsverlauf verborgen bleiben.
