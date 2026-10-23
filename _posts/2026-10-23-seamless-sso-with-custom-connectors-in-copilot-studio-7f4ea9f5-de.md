---
title: Nahtloses SSO mit Custom Connectors in Copilot Studio
description: Konfigurieren Sie Entra ID OAuth, Azure API Connections und die Connector-Sicherheit,
  damit Copilot Studio Nutzer ohne Connection Manager authentifiziert.
date: '2026-10-23T17:13:22Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- environments
- copilot-studio
content_type: curated_summary
curation_id: 7f4ea9f5a9135d2bd1741847
image:
  path: "/assets/img/curated/7f4ea9f5a9135d2bd1741847.png"
  alt: 'Governance-Karte: Configure the connector chain, not just the OAuth screen.
    Missing Azure API Connections can break SSO for other users.'
permalink: "/de/posts/seamless-sso-with-custom-connectors-in-copilot-studio-7f4ea9f5/"
translation_url: "/en/posts/seamless-sso-with-custom-connectors-in-copilot-studio-7f4ea9f5/"
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
- question: Wie funktioniert die Zustimmung bei Entra ID OAuth Custom Connectors in
    Copilot Studio?
  answer: Nutzer bestätigen die Zustimmung beim ersten Einsatz eines Tools mit ihren
    Zugangsdaten. Diese Abfrage ist erwartet und derzeit unvermeidbar.
- question: Warum funktioniert Custom Connector SSO beim Maker, aber nicht bei einem
    anderen Copilot Studio Nutzer?
  answer: Der Dienst Azure API Connections wurde möglicherweise nicht als autorisierter
    Client hinzugefügt. Dadurch kann die Verbindung für andere Nutzer nicht im Hintergrund
    erstellt werden.
- question: Was erstellt der MCP Onboarding Wizard für die Copilot Studio Authentifizierung?
  answer: Der Wizard erstellt im Hintergrund einen Custom Connector. Schliessen Sie
    zuerst die Authentifizierung im Wizard ab und ändern Sie danach die Sicherheitsinformationen
    des Connectors.
---

## TL;DR

Microsoft Copilot Studio ermöglicht SSO für Entra ID OAuth geschützte Custom APIs und MCP Server über Custom Connectors. Dafür werden App-Registrierungen, Berechtigungen, die Autorisierung von Azure API Connections und OAuth-Einstellungen benötigt. Nutzer bestätigen die Zustimmung einmal, danach wird die Verbindung im Hintergrund erstellt und authentifiziert.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Konfiguriert beide App-Registrierungen, delegierte Berechtigungen, die Autorisierung von Azure API Connections und die OAuth-Einstellungen des Custom Connectors. Fehlt der autorisierte Client, kann SSO beim Maker funktionieren und bei anderen Nutzern scheitern.
- Admins/CoE: Stellt sicher, dass Nutzer in der Umgebung vorhanden sind und Zugriff auf den Custom Connector haben. Das unterstützt die Erstellung der Verbindung im Hintergrund beim Aufruf des Tools.
