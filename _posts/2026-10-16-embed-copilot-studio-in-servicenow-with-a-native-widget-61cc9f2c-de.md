---
title: Copilot Studio mit einem nativen Widget in ServiceNow einbetten
description: Ein natives Service-Portal-Widget verbindet Copilot Studio über WebChat,
  MSAL und das M365 Agents SDK, ohne Iframe oder Virtual-Agent-Zwischenschicht.
date: '2026-10-16T17:02:32Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- alm
- copilot-studio
content_type: curated_summary
curation_id: 61cc9f2c463eeb6cb9c1a32f
image:
  path: "/assets/img/curated/61cc9f2c463eeb6cb9c1a32f.png"
  alt: 'Governance-Karte: Decouple portal login from agent access. Let MSAL handle
    Entra authentication inside the widget.'
permalink: "/de/posts/embed-copilot-studio-in-servicenow-with-a-native-widget-61cc9f2c/"
translation_url: "/en/posts/embed-copilot-studio-in-servicenow-with-a-native-widget-61cc9f2c/"
source_url: https://microsoft.github.io/mcscatblog/posts/servicenow-copilot-studio-widget/
source_site_url: https://microsoft.github.io/
source_title: Embedding Copilot Studio Directly in ServiceNow (And Why Auth Was the
  Easy Part)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-02-24'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie authentifiziert das ServiceNow-Copilot-Studio-Widget Benutzer mit
    MSAL?
  answer: Das Widget verwendet eine eigene MSAL-Instanz, findet zwischengespeicherte
    Entra-ID-Token oder zeigt einmalig ein Entra-Anmeldefenster an.
- question: Warum sollte Copilot Studio in ServiceNow als natives Widget statt als
    Iframe eingebettet werden?
  answer: Ein natives Widget kann auf ServiceNow-Seitenkontext, Benutzeridentität
    und Rollen zugreifen, während ein Iframe in einem isolierten Ursprung läuft.
- question: Welche ServiceNow-Komponenten erstellt das Bereitstellungsskript für Copilot
    Studio?
  answer: Das Skript erstellt über die ServiceNow-Table-API Systemeigenschaften, Widget-Datensätze,
    Anhänge, JavaScript Includes, Abhängigkeiten und zugehörige Datensätze.
---

## TL;DR

Ein ServiceNow-Service-Portal-Widget lädt MSAL, WebChat und ein eigenes Bundle und verbindet sich über das M365 Agents SDK direkt mit Copilot Studio. Die separate MSAL-Instanz ruft Entra-ID-Token ab, sodass PingFederate, Okta, SAML oder lokale ServiceNow-Anmeldungen keine Föderation mit Entra erfordern.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt ein natives Service-Portal-Widget, wenn der Agent Seitenkontext, Identität oder Rollen aus ServiceNow benötigt, weil ein Iframe isoliert läuft.
- Admins/CoE: Speichert die Agent-Konfiguration in ServiceNow-Systemeigenschaften und verwendet das idempotente Bereitstellungsskript für erforderliche Datensätze.
- Security/Compliance: Prüft den Widget-Zugriff als unabhängigen Entra-Anmeldefluss, weil die ServiceNow-Anmeldung den MSAL-Tokenlebenszyklus nicht steuert.
