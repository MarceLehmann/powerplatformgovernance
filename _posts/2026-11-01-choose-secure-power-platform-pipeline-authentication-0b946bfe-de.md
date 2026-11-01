---
title: Sichere Anmeldung für Power Platform Pipelines wählen
description: Client Secrets, Managed Identities und Workload Identity Federation für
  Azure DevOps Power Platform Service Connections vergleichen.
date: '2026-11-01T16:40:45Z'
author: governance_editorial
lang: de
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
  alt: 'Governance-Karte: Choose the pipeline identity deliberately. A secretless
    connection still needs governance.'
permalink: "/de/posts/choose-secure-power-platform-pipeline-authentication-0b946bfe/"
translation_url: "/en/posts/choose-secure-power-platform-pipeline-authentication-0b946bfe/"
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
- question: Wie authentifiziert Workload Identity Federation eine Power Platform Service
    Connection?
  answer: Sie tauscht einen kurzlebigen Azure DevOps OIDC Token mit Entra aus. Die
    Anwendung benötigt eine federierte Anmeldeinformation und einen Dataverse Anwendungsbenutzer.
- question: Warum können Microsoft-gehostete Agents keine Azure Managed Identity für
    Power Platform Build Tools nutzen?
  answer: Microsoft-gehostete Agents unterstützen keine Managed Identities. Diese
    Option benötigt einen selbstgehosteten Azure VM Agent oder einen Agent Pool mit
    der betreffenden Identität.
- question: Welchen Issuer und welches Subject brauche ich für eine federierte Power
    Platform Service Connection?
  answer: Verwenden Sie Issuer und Subject, die Azure DevOps in der Connection anzeigt.
    Ältere veröffentlichte Werte können bei neuen Connections nicht mehr passen.
---

## TL;DR

Power Platform Build Tools Service Connections unterstützen Client Secrets, Azure Managed Identity und Workload Identity Federation. Federation nutzt einen kurzlebigen Azure DevOps Token und benötigt eine federierte Anmeldeinformation sowie einen Dataverse Anwendungsbenutzer. Managed Identity braucht einen selbstgehosteten Azure Agent, Client Secrets müssen vor Ablauf erneuert werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Für jede Zielumgebung einen Dataverse Anwendungsbenutzer mit passender Rolle einrichten, unabhängig von der Anmeldemethode.
- Security/Compliance: Wenn die Richtlinie es erlaubt, kurzlebige Federation bevorzugen und die Freigabe für Preview in Produktion prüfen.
- Admins/CoE: Grant access permission to all pipelines deaktiviert lassen und Pipelines einzeln autorisieren.
- Makers: PowerPlatformSetConnectionVariables und direkte pac Skripte vor einer Umstellung auf Federation prüfen.
