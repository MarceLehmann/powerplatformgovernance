---
title: Copilot Studio Agenten mit Microsoft-Authentifizierung absichern
description: Die neue Umgebungseinstellung erzwingt integrierte Microsoft-Authentifizierung,
  blockiert nicht authentifizierte Direct-Line-Inhalte und erhält den Pfad über das
  M365 Agents SDK.
date: '2026-10-06T16:59:37Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- dlp
- environments
- copilot-studio
content_type: curated_summary
curation_id: 2846036e40d3dc9cc1e5b17b
image:
  path: "/assets/img/curated/2846036e40d3dc9cc1e5b17b.png"
  alt: 'Governance-Karte: Require Microsoft authentication closes the pre-authentication
    surface.'
permalink: "/de/posts/require-microsoft-authentication-to-protect-copilot-studio-agents-2846036e/"
translation_url: "/en/posts/require-microsoft-authentication-to-protect-copilot-studio-agents-2846036e/"
source_url: https://microsoft.github.io/mcscatblog/posts/agent-authentication-controls/
source_site_url: https://microsoft.github.io/
source_title: The Admin Control That Closes the Door Before "Hello"
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-06-14'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Was bewirkt Microsoft-Authentifizierung erforderlich bei Copilot Studio
    Agenten?
  answer: Die Einstellung erzwingt Authenticate with Microsoft, sodass nicht authentifizierte
    Direct-Line-Clients vor der Freigabe von Agenteninhalten einen Fehler erhalten.
- question: Warum sollen Direct-Line-Kanäle für das M365 Agents SDK aktiviert bleiben?
  answer: Das SDK nutzt denselben Direct-Line-Kanalregler, daher würde seine delegierte
    Authentifizierungsintegration durch die Kanalsperre ausfallen.
- question: Wie finde ich betroffene Copilot Studio Agenten vor der Richtliniendurchsetzung?
  answer: Das Copilot Studio Kit schreibt die Authentifizierungsart nach Dataverse.
    Filtere Agent Details nach End User Authentication Type und prüfe alle Werte ausser
    Integrated.
---

## TL;DR

Im Power Platform Admin Center unter Sicherheit &gt; Identität und Zugriff zwingt Microsoft-Authentifizierung erforderlich Copilot Studio Maker zur integrierten Microsoft-Anmeldung. Nicht authentifizierte Direct-Line-Clients erhalten vor jeder Inhaltsfreigabe einen Fehler, während das M365 Agents SDK weiter funktioniert. Bestehende Agenten ohne integrierte Authentifizierung reagieren danach nicht mehr, bis Maker sie anpassen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Für mitarbeiterorientierte Umgebungen Microsoft-Authentifizierung erforderlich setzen, damit die nicht authentifizierte Inhaltsfläche geschlossen wird und das M365 Agents SDK aktiv bleibt.
- Security/Compliance: Die Einstellung als Identitätskontrolle statt als DLP-Kanalschalter bewerten, weil das Sperren von Direct Line auch den SDK-Integrationspfad unterbricht.
- Makers: Agenten mit einer anderen Authentifizierungsart als Integrated vor der Durchsetzung aktualisieren, weil veröffentlichte, nicht konforme Agenten nicht mehr reagieren und nicht erneut veröffentlicht werden können.
- Leadership/Business: Mitarbeiter- und kundenorientierte Agenten in getrennten Umgebungen betreiben, damit strengere Authentifizierung keine vermeidbaren Ausfälle verursacht.
