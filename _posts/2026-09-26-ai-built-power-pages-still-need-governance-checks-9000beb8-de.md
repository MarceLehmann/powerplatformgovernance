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
    answer: "Im Test des Autors entstand aus einem Prompt eine komplette Power-Pages-Seite mit Datenmodell, Dataverse-Tabellen, Beziehungen und Authentifizierung, danach folgten Bereitstellung und Aktivierung. Der Autor genehmigte vor allem Pläne und gab die Richtung vor. Das Plugin ist in der öffentlichen Preview, arbeitet mit Freigabepunkten und erkannte bestehende Tabellen wie Contact."
  - question: "Welche Konfigurationslücken fand der Autor in der KI-gebauten Power-Pages-Seite?"
    answer: "Das Plugin ist nicht solution-aware; der Autor reagiert im Artikel mit 'Not solution aware! Arg! What?!?'. Zudem fehlten wichtige Teile bei den Tabellenberechtigungen, eine Tabelle wurde vergessen, und eine Web-API-Websiteeinstellung fehlte. Bei jeder Authentifizierung ausser Microsoft Entra ID muss die Konfiguration manuell erfolgen."
  - question: "Geht der Aufbau einer Power-Pages-Seite mit KI schneller als im Design Studio?"
    answer: "Nicht unbedingt. Laut Autor wäre die Arbeit mit dem Design Studio und der Verwaltungs-App etwas schneller gewesen. Das KI-Ergebnis war optisch ansprechender und flexibler, der Prozess aber ressourcenhungrig: Das Tageskontingent war dreimal aufgebraucht, bevor er vom Pro- auf den Max-Plan wechselte."
  - question: "Machen KI-gestützte Methoden die klassischen Power-Pages-Werkzeuge überflüssig?"
    answer: "Nein. Der Autor schliesst, dass es weiterhin einen Platz für die klassischen Power-Pages-Werkzeuge zum Bauen und Konfigurieren von Seiten gibt. Er hält es für interessant zu sehen, wie sich die Technik in den nächsten Monaten entwickelt und durchsetzt. Single-Page-Apps auf Power Pages behalten die Vorteile von Dataverse-Anbindung, Hosting und Sicherheit."
  - question: "Was sollte eine Prüfung kontrollieren, bevor eine KI-generierte Power-Pages-Seite live geht?"
    answer: "Die Punkte prüfen, an denen der Test Lücken zeigte: ob die Seite solution-aware ist, ob Tabellenberechtigungen vorhanden und vollständig sind, ob die Web-API-Websiteeinstellung gesetzt ist und ob jede Authentifizierung ausser Microsoft Entra ID von Hand eingerichtet wurde. Das Plugin erstellt Aktionspläne und fragt nach Freigabe, sodass ein Mensch eingebunden bleibt."
---

## TL;DR

Das Vorschau-Plugin für Claude Code und Power Pages erstellte und veröffentlichte eine Site mit Dataverse-Tabellen, Beziehungen, Authentifizierung und aktivierter Umgebung. Der Test enthielt menschliche Freigaben, verbrauchte aber drei Tageskontingente und erforderte ein Upgrade von Pro auf Max. Tabellenberechtigungen, eine WebAPI-Siteeinstellung und nicht auf Entra ID basierende Authentifizierung wurden übersehen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Menschliche Freigaben im Erstellungsprozess beibehalten, weil die Vorschau trotz einer funktionierenden Site wichtige Konfiguration übersehen kann.
- Admins/CoE: Tabellenberechtigungen, WebAPI-Siteeinstellungen und Authentifizierung vor der Aktivierung in einer Umgebung prüfen.
- Security/Compliance: Authentifizierung ausserhalb von Entra ID als manuellen Kontrollpunkt behandeln und Berechtigungen vor der Bereitstellung prüfen.
