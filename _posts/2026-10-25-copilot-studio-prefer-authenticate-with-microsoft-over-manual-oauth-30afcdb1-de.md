---
title: 'Copilot Studio: Authenticate with Microsoft statt manueller OAuth-Konfiguration'
description: Die integrierte Entra-ID-Authentifizierung vereinfacht Copilot-Studio-Agenten
  für Mitarbeitende, Webchat und eigene APIs.
date: '2026-10-25T16:57:13Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- alm
- copilot-studio
content_type: curated_summary
curation_id: 30afcdb1dbe6c5a969dd11e3
image:
  path: "/assets/img/curated/30afcdb1dbe6c5a969dd11e3.png"
  alt: 'Governance-Karte: Use Authenticate with Microsoft when Entra ID is enough.
    Manual OAuth adds complexity and exposes tokens.'
permalink: "/de/posts/copilot-studio-prefer-authenticate-with-microsoft-over-manual-oauth-30afcdb1/"
translation_url: "/en/posts/copilot-studio-prefer-authenticate-with-microsoft-over-manual-oauth-30afcdb1/"
source_url: https://microsoft.github.io/mcscatblog/posts/you-dont-need-manual-auth/
source_site_url: https://microsoft.github.io/
source_title: You Probably Don't Need Manual Authentication (And Didn't Even Know
  It)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-11-18'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie funktioniert Authenticate with Microsoft im Copilot-Studio-Webchat?
  answer: Die Funktion verwendet Entra-ID-Anmeldung, Token-Austausch und authentifizierten
    Webchat. Eine Web-App benötigt eine SPA-Appregistrierung und die Berechtigung
    CopilotStudio.Copilots.Invoke.
- question: Welche Einrichtung benötigt manuelle Authentifizierung in Copilot Studio?
  answer: Manuelle Authentifizierung benötigt zwei Appregistrierungen, komplexe Einstellungen
    wie die Token Exchange URL und manuelle Aktualisierungen, weil die Konfiguration
    nicht ALM-fähig ist.
- question: Wie schützen eigene Copilot-Studio-Konnektoren Benutzerzugriffstokens?
  answer: SSO über eigene Konnektoren ruft Tokens im Namen des Benutzers ab, verwendet
    sie für die konfigurierte API und erneuert sie, ohne sie Makern zu zeigen.
---

## TL;DR

Für Entra-ID-Szenarien vermeidet Authenticate with Microsoft in Copilot Studio die Komplexität manueller OAuth-Konfiguration. Teams, Microsoft 365 Copilot und SharePoint benötigen keine Einrichtung. Web-Apps brauchen eine SPA-Appregistrierung und die Berechtigung CopilotStudio.Copilots.Invoke. SSO über eigene Konnektoren schützt Tokens vor Makern und unterstützt getrennte OAuth-Ressourcen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Authenticate with Microsoft für Entra-ID-Agenten und Webchat einsetzen, weil offizielle Beispiele authentifizierte Unterhaltungen ohne zwei Appregistrierungen zeigen.
- Admins/CoE: SSO über eigene Konnektoren für eigene APIs bevorzugen, weil der Konnektor Zustimmung, delegierte Tokens und Erneuerung übernimmt, ohne Tokens Makern zu zeigen.
- Security/Compliance: Manuelle Authentifizierung auf Anbieter ausserhalb von Entra begrenzen und die einzelne OAuth-Ressource sowie die Offenlegung von System.User.AccessToken bewerten.
