---
title: Benutzerdefinierte, rollenabhängige Übersetzungen in Power Pages
description: Eine Dataverse-Tabelle, Liquid-FetchXML und JavaScript liefern mehrsprachige
  Inhalte mit Auswahl nach Rolle sowie Seiten- und Benutzereigenschaften.
date: '2026-09-24T02:53:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
- ownership
content_type: curated_summary
curation_id: 1bf11ae60f6a42ddf14c4917
permalink: "/de/posts/custom-role-aware-content-translations-in-power-pages-1bf11ae6/"
translation_url: "/en/posts/custom-role-aware-content-translations-in-power-pages-1bf11ae6/"
source_url: https://www.itaintboring.com/power-platform/content-translations-in-power-pages/
source_site_url: https://www.itaintboring.com/
source_title: Content translations in Power Pages – the custom way
source_name: It Ain't Boring
source_language: en
source_language_name: English
source_author: Alex Shlega
source_published_at: '2025-09-22'
---
## TL;DR

Eine benutzerdefinierte Power-Pages-Site speichert englische und französische Beschriftungen in einer Dataverse-Tabelle. Liquid-FetchXML lädt aktive Datensätze in ein JavaScript-Objekt, und Elemente mit content-key werden anhand der ausgewählten Sprache ersetzt. Rollen sowie Seiten- und Benutzereigenschaften können die Auswahl beeinflussen; Header-Caching kann dabei zu ungeeigneten Inhalten führen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: content-key sowie Sprach- und Auswahlregeln sorgfältig definieren, wenn Beschriftungen von Rollen oder Seiteneigenschaften abhängen.
- Admins/CoE: die benutzerdefinierte Inhaltstabelle, ihre Verknüpfungen und den Bereitstellungsweg steuern, weil Business-Anwender die Übersetzungsdaten pflegen.
- Security/Compliance: Rollenabgleich und Header-Caching mit angemeldeten Benutzern testen, da Caching die passende Inhaltsauswahl beeinträchtigen kann.
