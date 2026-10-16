---
title: Den passenden Integrationsweg für Ihren Copilot Studio Agent wählen
description: Der Leitfaden vergleicht Teams, gehostetes und selbst gehostetes WebChat,
  eigene Oberflächen, mobile SDKs, Direct Line und serverseitige Verbindungen.
date: '2026-10-16T17:02:29Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
- compliance
- governance
content_type: curated_summary
curation_id: a5c64ead3cf1c3155572159e
image:
  path: "/assets/img/curated/a5c64ead3cf1c3155572159e.png"
  alt: 'Governance-Karte: Choose the integration path that matches identity, audience,
    and control needs.'
permalink: "/de/posts/choose-the-right-copilot-studio-integration-path-for-your-agent-a5c64ead/"
translation_url: "/en/posts/choose-the-right-copilot-studio-integration-path-for-your-agent-a5c64ead/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-api-decision-guide/
source_site_url: https://microsoft.github.io/
source_title: Every Path to Integrating Your Copilot Studio Agent
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-03-02'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Welche Copilot Studio Integration bietet Entra ID SSO für internes WebChat?
  answer: Der M365 Agents SDK Client bietet nahtloses Entra ID SSO für internes WebChat,
    wenn der Agent Authenticate with Microsoft verwendet.
- question: Warum bietet gehostetes Copilot Studio WebChat kein nahtloses SSO?
  answer: Das gehostete WebChat verwendet bei manueller Authentifizierung einen kopierten
    Validierungscode, daher ist über dieses Embed kein nahtloses SSO möglich.
- question: Welche Authentifizierungsbeschränkung hat das native Copilot Studio Mobile
    SDK?
  answer: Das native Mobile SDK benötigt derzeit No Authentication, während seine
    Konfigurationsfelder für Entra ID noch nicht funktionieren.
---

## TL;DR

Die Copilot Studio Integration hängt von Zielgruppe, Authentifizierung und Kontrollbedarf ab. Teams benötigt keine API, gehostetes WebChat bietet keinen nahtlosen SSO, das M365 Agents SDK unterstützt Entra ID SSO und Streaming für Mitarbeiterszenarien, während Direct Line Kunden- und Nicht-Entra-Szenarien unterstützt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Die Oberfläche an die Zielgruppe anpassen, Teams für interne Nutzer, M365 Agents SDK WebChat für Mitarbeiter mit SSO und Direct Line für Kunden oder Nicht-Entra-Zugriffe verwenden.
- Admins/CoE: Authentifizierungsmodus und Integrationsmuster vor der Bereitstellung dokumentieren, weil gehostetes WebChat kein SSO bietet und das mobile SDK derzeit No Authentication verlangt.
- Security/Compliance: Eine serverseitige Schicht für Bereinigung, Compliance-Regeln oder Antworttransformation einsetzen, dabei aber den zusätzlichen Routingaufwand und die Latenz von Direct Line berücksichtigen.
