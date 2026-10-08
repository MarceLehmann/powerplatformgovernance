---
title: Sichere Business Central Integrationen mit klarer Verantwortung
description: Business Central Integrationen brauchen unterstützte Schnittstellen,
  minimale Berechtigungen, sichere Wiederholungen, Überwachung und klare Verantwortung.
date: '2026-10-08T10:41:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- ownership
- environments
- dataverse
content_type: curated_summary
curation_id: 0edb21cfdfdb934301fa8a4b
image:
  path: "/assets/img/curated/0edb21cfdfdb934301fa8a4b.png"
  alt: 'Governance-Karte: Point to point links multiply risk. Design for ownership,
    least privilege, and recovery.'
permalink: "/de/posts/secure-business-central-integrations-with-clear-ownership-and-recovery-0edb21cf/"
translation_url: "/en/posts/secure-business-central-integrations-with-clear-ownership-and-recovery-0edb21cf/"
source_url: https://softchief.com/business-central-external-integration-architecture-build-secure-scalable-connections/
source_site_url: https://softchief.com/
source_title: 'Business Central External Integration Architecture: Build Secure, Scalable
  Connections'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-10-08'
source_type: article
faq:
- question: Wie sollen Business Central Integrationen mit der SOAP und OData Ablösung
    umgehen?
  answer: Für neue Designs unterstützte APIs verwenden. SOAP nur bei Kompatibilitätsbedarf
    behalten und ablösen, während Microsoft-eigene OData Seiten einen unterstützten
    Ersatz benötigen.
- question: Welche Authentifizierung unterstützt Business Central für unbeaufsichtigte
    Dienstintegrationen?
  answer: Business Central unterstützt OAuth 2.0 Client Credentials über Microsoft
    Entra ID für Anwendungen ohne angemeldeten Benutzer.
- question: Wie verhindern Warteschlangennachrichten in Business Central doppelte
    Geschäftsvorgänge?
  answer: Doppelte Zustellung einplanen, eine Idempotenzkennung oder gleichwertige
    Erkennung verwenden und eine sichere manuelle Wiederherstellung für fehlgeschlagene
    Nachrichten vorsehen.
---

## TL;DR

Business Central Integrationen sollten unterstützte APIs, minimale Berechtigungen, verwaltete Geheimnisse, begrenzte Wiederholungen, Korrelationskennungen und klare Wiederherstellungswege nutzen. Direkte Verbindungen passen zu kleinen Abläufen, Middleware oder Warteschlangen zu mehreren Systemen und asynchroner Arbeit. SOAP ist veraltet, und Microsoft-eigene Seiten können ab Version 30.0 nicht mehr als OData-Endpunkte bereitgestellt werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Die Schnittstelle an Daten, Verzögerung und Supportbedarf anpassen, weil direkte Verbindungen mit wachsender Systemzahl eng gekoppelt werden.
- Admins/CoE: Nur erforderliche Business Central Berechtigungen vergeben, Geheimnisse verwaltet speichern und Fehler, Wiederholungen, Warteschlangen sowie Authentifizierungsereignisse überwachen.
- Security/Compliance: Freigelegte Daten und Protokolle begrenzen, Token und sensible Inhalte nicht protokollieren, Transport verschlüsseln und Aufbewahrungsfristen festlegen.
- Leadership/Business: Verantwortung für Datensätze, Umwandlungen, Schemas und Wiederherstellung vor einer Ausweitung des Integrationsablaufs verbindlich festlegen.
