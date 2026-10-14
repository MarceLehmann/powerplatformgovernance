---
title: Nicht authentifizierte Dataverse-Suche in Copilot Studio absichern
description: Nutzen Sie Dataverse searchQuery mit Maker-Anmeldedaten, klar begrenzten
  Tabellen und Spalten sowie einem schreibgeschützten Anwendungsbenutzer.
date: '2026-10-14T17:00:04Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
- copilot-studio
- power-apps
- environments
content_type: curated_summary
curation_id: 9070f59cbcc4d13d157ec145
image:
  path: "/assets/img/curated/9070f59cbcc4d13d157ec145.png"
  alt: 'Governance-Karte: Unauthenticated search exposes everything the service principal
    can read.'
permalink: "/de/posts/secure-unauthenticated-dataverse-search-in-copilot-studio-9070f59c/"
translation_url: "/en/posts/secure-unauthenticated-dataverse-search-in-copilot-studio-9070f59c/"
source_url: https://microsoft.github.io/mcscatblog/posts/dataverse-search-in-copilot-studio-unauthenticated-structured-data/
source_site_url: https://microsoft.github.io/
source_title: 'Structured Data with Zero User Auth: Dataverse searchQuery in Copilot
  Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Karima Kanji-Tajdin
source_published_at: '2026-03-20'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie funktioniert Copilot Studio searchQuery ohne Benutzeranmeldung?
  answer: Die Funktion nutzt vom Maker bereitgestellte Dataverse-Anmeldedaten eines
    Service Principals. Der Agent ruft searchQuery mit dieser Identität statt mit
    der Identität des Endbenutzers auf.
- question: Welche Dataverse-Berechtigungen steuern die Ergebnisse von unauthentifiziertem
    searchQuery?
  answer: Die Dataverse-Sicherheitsrolle des Anwendungsbenutzers steuert den Datenzugriff.
    Sie sollte nur Leserechte für Tabellen und Spalten enthalten, die öffentlich gezeigt
    werden dürfen.
- question: Warum liefert ein Copilot-Studio-searchQuery-Tool keine Dataverse-Ergebnisse?
  answer: Dataverse Search oder die Tabellenindexierung können fehlen, oder die entities-JSON
    enthält falsche logische Namen. Diese Konfigurationsfehler können ohne Fehlermeldung
    leere Ergebnisse erzeugen.
---

## TL;DR

Copilot Studio kann die ungebundene Dataverse-Aktion searchQuery mit vom Maker bereitgestellten Service-Principal-Anmeldedaten aufrufen, ohne Benutzeranmeldung. Die Dataverse-Sicherheitsrolle des Anwendungsbenutzers bestimmt alle für jeden Benutzer sichtbaren Ergebnisse. Aktivieren Sie Dataverse Search, indexieren Sie die Tabelle, konfigurieren Sie Quick Find und geben Sie nur ausgewählte Spalten zurück.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Konfigurieren Sie searchQuery mit Maker-Anmeldedaten sowie klaren SearchColumns und SelectColumns, weil fehlende oder falsche logische Namen stillschweigend leere Ergebnisse liefern können.
- Admins/CoE: Aktivieren Sie Dataverse Search, nehmen Sie Tabellen in den Suchindex der Umgebung auf und veröffentlichen Sie Quick-Find-Einstellungen vor dem Test.
- Security/Compliance: Geben Sie dem Service Principal nur Leserechte auf öffentlich sichere Tabellen und Spalten, weil alle nicht authentifizierten Benutzer dieselbe Sicht erhalten.
