---
title: KI-erstellte Power Pages brauchen weiterhin Governance-Prüfungen
description: Ein Claude-Code-Plugin in der Power-Pages-Vorschau erstellte und veröffentlichte
  eine Site, übersah aber Tabellenberechtigungen, eine WebAPI-Einstellung und Schritte
  für andere Authentifizierung.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- environments
- dataverse
- alm
- power-apps
content_type: curated_summary
curation_id: 9000beb8409355095e4ca2f6
image:
  path: "/assets/img/curated/9000beb8409355095e4ca2f6.png"
  alt: 'Governance-Karte: AI can deploy Power Pages, but it can miss permissions.'
permalink: "/de/posts/ai-built-power-pages-still-need-governance-checks-9000beb8/"
translation_url: "/en/posts/ai-built-power-pages-still-need-governance-checks-9000beb8/"
source_url: https://readyxrm.blog/2026/02/26/the-end-of-power-pages-as-we-know-it/
source_site_url: https://readyxrm.blog/
source_title: The end of Power Pages? (As we know it?)
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-02-26'
source_type: article
faq:
  - question: "Was kann das Power-Pages-Plugin für Claude Code ohne manuelle Einrichtung bauen?"
    answer: "Im Test des Autors entstand aus einem Prompt eine komplette Power-Pages-Seite mit Datenmodell, Dataverse-Tabellen, Beziehungen und Authentifizierung, danach folgten Bereitstellung und Aktivierung."
  - question: "Welche Konfigurationslücken fand der Autor in der KI-gebauten Power-Pages-Seite?"
    answer: "Das Plugin ist nicht solution-aware, bei den Tabellenberechtigungen fehlten wichtige Teile (eine Tabelle wurde vergessen), und eine Web-API-Websiteeinstellung fehlte. Jede Authentifizierung ausser Microsoft Entra ID muss manuell eingerichtet werden."
  - question: "Was sollte eine Prüfung kontrollieren, bevor eine KI-generierte Power-Pages-Seite live geht?"
    answer: "Prüfen, ob die Seite solution-aware ist, ob die Tabellenberechtigungen vollständig sind, ob die Web-API-Websiteeinstellung gesetzt ist und ob jede Authentifizierung ausser Microsoft Entra ID manuell eingerichtet wurde."
---

## TL;DR

Das Vorschau-Plugin für Claude Code und Power Pages erstellte und veröffentlichte eine Site mit Dataverse-Tabellen, Beziehungen, Authentifizierung und aktivierter Umgebung. Der Test enthielt menschliche Freigaben, verbrauchte aber drei Tageskontingente und erforderte ein Upgrade von Pro auf Max. Tabellenberechtigungen, eine WebAPI-Siteeinstellung und nicht auf Entra ID basierende Authentifizierung wurden übersehen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Menschliche Freigaben im Erstellungsprozess beibehalten, weil die Vorschau trotz einer funktionierenden Site wichtige Konfiguration übersehen kann.
- Admins/CoE: Tabellenberechtigungen, WebAPI-Siteeinstellungen und Authentifizierung vor der Aktivierung in einer Umgebung prüfen.
- Security/Compliance: Authentifizierung ausserhalb von Entra ID als manuellen Kontrollpunkt behandeln und Berechtigungen vor der Bereitstellung prüfen.
