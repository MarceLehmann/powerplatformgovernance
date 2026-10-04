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
    answer: "Die erste Hürde sind die Websiteeinstellungen pro Tabelle: Webapi/contact/enabled muss auf true stehen, denn der Standard ist False, und die zugehörige Spalteneinstellung braucht eine ausdrückliche Spaltenliste. Die zweite Hürde ist eine Tabellenberechtigung mit passender Zugriffsart: Read für GET, Create für POST, Write für PATCH und Delete für DELETE. Beide müssen offen sein."
  - question: "Warum ist ein Platzhalter in der Spalteneinstellung der Web API in Power Pages gefährlich?"
    answer: "Ein Sternchen in der Spalteneinstellung veröffentlicht jede Spalte der Tabelle. Zusammen mit der Rolle Anonymous Users und einer Tabellenberechtigung mit Global Read können anonyme Anfragen vollständige Namen, E-Mail-Adressen und Datensatz-IDs abrufen, ganz ohne Anmeldung. Microsoft hat den Platzhalter abgekündigt, solche Tabellen scheitern, bis ausdrückliche Spaltennamen gesetzt sind."
  - question: "Was bedeutet anonymer Zugriff für Tabellenberechtigungen in Power Pages?"
    answer: "Anonym heisst Global. Für nicht angemeldete Besucher funktioniert nur der Zugriffstyp Global, denn Contact, Account, Self und Parent brauchen einen angemeldeten Kontakt als Bezug. Berechtigungen addieren sich ausserdem, nichts nimmt eine Freigabe zurück. Die weitestgehende Berechtigung gewinnt, und ein Kontakt erbt, was jede zugewiesene Rolle erlaubt."
  - question: "Was ist am Flag Authenticated Users Role bei eigenen Webrollen riskant?"
    answer: "Steht es auf Yes, wird die eigene Rolle zur Standardrolle für jeden angemeldeten Benutzer, egal ob du ihn ihr zugewiesen hast. Der Artikel rät, das Flag bei allen eigenen Rollen auf No zu lassen. Nur die mitgelieferten Rollen Anonymous Users und Authenticated Users sollen diese Flags tragen."
  - question: "Welche Werkzeuge helfen, eine Power-Pages-Site auf offengelegte Daten zu prüfen?"
    answer: "Der Schnelltest im Power Platform Admin Center meldet, dass anonymer Dataverse-Zugriff existiert, nennt aber keine Tabellen. Der Power Pages Security Agent im Bereich Sicherheit liefert konfigurationsbezogene Ergebnisse und ist in der Vorschau. Du kannst die Site auch mit pac powerpages download laden und in VS Code analysieren. Keines ersetzt, die Tabellenberechtigungen selbst zu lesen."
---

## TL;DR

Der Datenzugriff in Power Pages hängt von Webrollen und Tabellenberechtigungen ab. Die Web-API benötigt zusätzlich aktivierte Tabelleneinstellungen und eine explizite Spaltenliste. Globaler Lesezugriff für Anonymous Users kann zusammen mit aktivierter Web-API und dem Feldwert \* Kontaktdaten ohne Anmeldung offenlegen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Prüfen Sie jede Tabellenberechtigung für Anonymous Users, jeden Global-Zugriff und jede aktivierte Web-API-Tabelle; entfernen Sie unbegründeten öffentlichen Zugriff, weil sich Berechtigungen addieren.
- Security/Compliance: Ersetzen Sie Wildcards in Web-API-Feldlisten durch explizite Spalten, deaktivieren Sie ungenutzte Tabellen und behandeln Sie jede gelistete Spalte als veröffentlicht; so sinkt das Risiko einer Datenoffenlegung.
- Makers: Lassen Sie Authenticated Users Role bei benutzerdefinierten Webrollen auf No und verwenden Sie zugewiesene Kontakte; Yes gewährt die Rolle jedem angemeldeten Benutzer.
