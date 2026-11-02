---
title: Connector-Einwilligungskarten mit dem Agents SDK verarbeiten
description: Consent Adaptive Cards erkennen, Sicherheitsinformationen anzeigen und
  die Auswahl Allow oder Cancel über das Agents SDK zurücksenden.
date: '2026-10-28T17:03:17Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- copilot-studio
- governance
content_type: curated_summary
curation_id: 8c60f0d48a86607f01fd8c05
image:
  path: "/assets/img/curated/8c60f0d48a86607f01fd8c05.png"
  alt: 'Governance-Karte: Consent must be captured before end user authentication
    connectors run.'
permalink: "/de/posts/handle-copilot-studio-connector-consent-cards-with-the-agents-sdk-8c60f0d4/"
translation_url: "/en/posts/handle-copilot-studio-connector-consent-cards-with-the-agents-sdk-8c60f0d4/"
source_url: https://microsoft.github.io/mcscatblog/posts/connector-consent-card-obo/
source_site_url: https://microsoft.github.io/
source_title: Intercepting and Responding to Connector Consent Cards via the Agents
  SDK
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-09-21'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie erkennt ein Agents SDK Client eine Connector-Einwilligungskarte in
    Copilot Studio?
  answer: Prüfe einen TextBlock mit Connect to continue sowie Action.Submit-Schaltflächen
    mit Allow und Cancel. Diese Heuristik erkennt die Einwilligungskarte ohne speziellen
    Ereignistyp.
- question: Welche Activity muss nach Allow oder Cancel an Copilot Studio gesendet
    werden?
  answer: Sende eine Message Activity mit channelData.postBack true sowie value mit
    der Auswahl, id submit und shouldAwaitUserInput true.
- question: Welche Connectoren verwenden in Copilot Studio die Einwilligungskarte
    statt des Verbindungsmanagers?
  answer: Native Connectoren mit Entra ID-Authentifizierung können die Karte anzeigen.
    Custom Connectoren und andere Connectoren verwenden stattdessen den aufwendigeren
    Verbindungsmanager.
animation:
  video: /assets/img/animations/8c60f0d48a86607f01fd8c05-de.mp4
  poster: /assets/img/animations/8c60f0d48a86607f01fd8c05-de.poster.webp
  width: 800
  height: 450
  alt: "Eine Abfolge in 3 Schritten zeigt das Erkennen einer Copilot Studio Einwilligungskarte, das Anzeigen der Sicherheitsdetails mit Allow oder Cancel und das Zuruecksenden der Auswahl als Message Activity mit postBack true."
---

## TL;DR

Copilot Studio benötigt die Einwilligung des Endbenutzers, bevor Connectoren mit Endbenutzerauthentifizierung aufgerufen werden. In eigenen Agents SDK-Oberflächen werden Karten über Connect to continue sowie die Schaltflächen Allow und Cancel erkannt und die Auswahl als Message Activity mit postBack true zurückgesendet.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Rendert die Consent Adaptive Card in eigenen Oberflächen und erfasst Allow oder Cancel, weil Connectoren mit Endbenutzerauthentifizierung ohne Einwilligung nicht aufgerufen werden.
- Admins/CoE: Trennt die Einwilligung für native Entra ID-Connectoren vom Verbindungsmanager, weil Custom Connectoren und andere nicht unterstützte Connectoren die aufwendigere Verbindungsverwaltung verwenden.
- Security/Compliance: Erhaltet die Fähigkeitszeilen und den Datenschutzwarnhinweis, weil die Karte über Credential-Nutzung und mögliche Risiken für die Datenexposition informiert.
