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
faq:
  - question: "Warum nutzt der Autor statt Content Snippets eine eigene Tabelle für Texte?"
    answer: "Content Snippets sind der übliche Weg für Übersetzungen in Power Pages. Bei einer eigenen Seite ohne Entity Forms oder Listen und mit Rendering per JavaScript und Liquid brauchen Snippets laut Autor womöglich Anpassungen, eine eigene Verwaltungsanwendung oder fest eingebaute Texte. Zudem findet er Snippets für Übersetzende und Beteiligte schwer zu verwalten, während sich eine eigene Tabelle zusammen mit anderen Konfigurationsdaten in der modellgesteuerten Hauptapp pflegen lässt."
  - question: "Wie ist die Texttabelle aufgebaut?"
    answer: "Die Tabelle enthält einen Namen als Schlüssel, eine englische und eine französische Bezeichnung, und die Abfrage liest nur aktive Datensätze. Alternativ könnte sie eine einzelne Bezeichnung plus einen Nachschlagewert auf eine Sprachtabelle enthalten. Das Beispiel stammt aus einer eigenen Website auf Basis des GC-Web-Themes der kanadischen Regierung. Der Seitencode findet jeden Text über seinen Schlüssel."
  - question: "Wie gelangen die Texte auf die Seite?"
    answer: "Im Kopfbereich der Seite liest eine FetchXML-Abfrage mit Liquid die Datensätze und füllt ein JavaScript-Objekt mit den Bezeichnungen. Die aktuelle Sprache stammt aus der Variable für die gewählte Website-Sprache. Im Fussbereich ersetzt ein Skript den Inhalt aller Elemente, die ein Attribut namens content-key tragen, durch die passende Bezeichnung."
  - question: "Wie funktionieren rollenabhängige Texte?"
    answer: "Die Texttabelle bekommt ein Feld für die Rolle. Für komplexere Zuordnungen kommt eine zusätzliche Tabelle mit deklarativen Filtern dazu. Damit lassen sich Bezeichnungen abhängig von Eigenschaften der Seite oder der angemeldeten Person anzeigen. Als Beispiel nennt der Autor Texte, die sich nach dem Fahrzeugtyp richten."
  - question: "Welchen Nachteil hat die Lösung?"
    answer: "Weil die Texte erst nach dem Laden der Seite ersetzt werden, kann es gelegentlich flackern, solange der ursprüngliche Inhalt noch sichtbar ist. Der Autor schlägt vor, den Inhalt zunächst mit einem halbtransparenten Element abzudecken und es danach auszublenden, hält das aber nicht für ein grosses Problem. Zudem warnt er, dass das Skript im Kopfbereich bei aktivem Header-Caching zwischengespeichert wird, und nennt Substitution als Ausweg."
---
## TL;DR

Eine benutzerdefinierte Power-Pages-Site speichert englische und französische Beschriftungen in einer Dataverse-Tabelle. Liquid-FetchXML lädt aktive Datensätze in ein JavaScript-Objekt, und Elemente mit content-key werden anhand der ausgewählten Sprache ersetzt. Rollen sowie Seiten- und Benutzereigenschaften können die Auswahl beeinflussen; Header-Caching kann dabei zu ungeeigneten Inhalten führen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: content-key sowie Sprach- und Auswahlregeln sorgfältig definieren, wenn Beschriftungen von Rollen oder Seiteneigenschaften abhängen.
- Admins/CoE: die benutzerdefinierte Inhaltstabelle, ihre Verknüpfungen und den Bereitstellungsweg steuern, weil Business-Anwender die Übersetzungsdaten pflegen.
- Security/Compliance: Rollenabgleich und Header-Caching mit angemeldeten Benutzern testen, da Caching die passende Inhaltsauswahl beeinträchtigen kann.
