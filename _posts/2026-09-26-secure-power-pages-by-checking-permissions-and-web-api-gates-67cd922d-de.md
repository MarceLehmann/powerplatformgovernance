---
title: 'Power Pages absichern: Berechtigungen und Web-API-Zugriff prüfen'
description: Prüfen Sie anonyme Tabellenberechtigungen, Web-API-Einstellungen und
  benutzerdefinierte Webrollen, um eine versehentliche Dataverse-Offenlegung zu verhindern.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
- governance
content_type: curated_summary
curation_id: 67cd922d02144165bc88be66
image:
  path: "/assets/img/curated/67cd922d02144165bc88be66.png"
  alt: 'Governance-Karte: Two open gates can publish your Dataverse data. Check permissions
    and Web API settings together.'
permalink: "/de/posts/secure-power-pages-by-checking-permissions-and-web-api-gates-67cd922d/"
translation_url: "/en/posts/secure-power-pages-by-checking-permissions-and-web-api-gates-67cd922d/"
source_url: https://readyxrm.blog/2026/08/13/is-your-power-pages-site-secure/
source_site_url: https://readyxrm.blog/
source_title: Is your Power Pages site secure?
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-08-13'
source_type: article
faq:
  - question: "Welche zwei Hürden muss eine Web-API-Anfrage in Power Pages passieren?"
    answer: "Die erste Hürde sind die Websiteeinstellungen pro Tabelle: Webapi/contact/enabled muss auf true stehen, denn der Standard ist False, und die zugehörige Spalteneinstellung braucht eine ausdrückliche Spaltenliste."
  - question: "Warum ist ein Platzhalter in der Spalteneinstellung der Web API in Power Pages gefährlich?"
    answer: "Ein Sternchen in der Spalteneinstellung veröffentlicht jede Spalte der Tabelle."
  - question: "Was ist am Flag Authenticated Users Role bei eigenen Webrollen riskant?"
    answer: "Steht es auf Yes, wird die eigene Rolle zur Standardrolle für jeden angemeldeten Benutzer, egal ob du ihn ihr zugewiesen hast."
---

## TL;DR

Der Datenzugriff in Power Pages hängt von Webrollen und Tabellenberechtigungen ab. Die Web-API benötigt zusätzlich aktivierte Tabelleneinstellungen und eine explizite Spaltenliste. Globaler Lesezugriff für Anonymous Users kann zusammen mit aktivierter Web-API und dem Feldwert \* Kontaktdaten ohne Anmeldung offenlegen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Prüfen Sie jede Tabellenberechtigung für Anonymous Users, jeden Global-Zugriff und jede aktivierte Web-API-Tabelle; entfernen Sie unbegründeten öffentlichen Zugriff, weil sich Berechtigungen addieren.
- Security/Compliance: Ersetzen Sie Wildcards in Web-API-Feldlisten durch explizite Spalten, deaktivieren Sie ungenutzte Tabellen und behandeln Sie jede gelistete Spalte als veröffentlicht; so sinkt das Risiko einer Datenoffenlegung.
- Makers: Lassen Sie Authenticated Users Role bei benutzerdefinierten Webrollen auf No und verwenden Sie zugewiesene Kontakte; Yes gewährt die Rolle jedem angemeldeten Benutzer.
