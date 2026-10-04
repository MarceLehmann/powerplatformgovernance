---
title: Copilot Studio KI-Entwicklung braucht weiterhin menschliche Prüfung
description: KI-Coding-Agenten können Copilot-Studio-Änderungen erzeugen und testen.
  Anforderungen, Architektur, Sicherheitsprüfung und Bereitstellung bleiben menschliche
  Aufgaben.
date: '2026-10-02T04:59:52Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- alm
- dataverse
- copilot-studio
content_type: curated_summary
curation_id: 1662ecb06a7785e9c8e1329b
image:
  path: "/assets/img/curated/1662ecb06a7785e9c8e1329b.png"
  alt: 'Governance-Karte: AI can generate and test. Humans must own the requirement,
    review and deployment.'
permalink: "/de/posts/copilot-studio-ai-development-still-requires-human-review-1662ecb0/"
translation_url: "/en/posts/copilot-studio-ai-development-still-requires-human-review-1662ecb0/"
source_url: https://www.karlex.fi/ai-driven-does-not-mean-ai-autonomous-what-copilot-studio-development-looks-like-now/
source_site_url: https://www.karlex.fi/
source_title: 'AI-driven does not mean AI-autonomous: what Copilot Studio development
  looks like now'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-02'
source_type: article
faq:
  - question: "Wie unterscheidet sich der Ablauf mit Coding-Agent von klassischer Copilot-Studio-Entwicklung?"
    answer: "Laut Koskinen sind die Schritte nicht verschwunden, sondern verschoben. Low-Code läuft über Anforderung, Designer öffnen, Komponente finden, ändern und testen. Mit Coding-Agent folgen Anforderung, generierte Lösung prüfen, Änderung beschreiben, Agent passt die Umsetzung an und validieren. Das zweite Modell ersetzt das erste nicht, es verlagert die manuelle Arbeit, und Validierung sowie Plattformwissen bleiben wichtig."
  - question: "Was überlässt Koskinen der KI und was bleibt beim Menschen?"
    answer: "Die KI kann Kontext, Erzeugung und Tests übernehmen, dazu Dokumentationssuche und das Prüfen von Schemata. Beim Menschen bleiben Anforderung, Hinterfragen, Prüfung und Bereitstellung, ausserdem validiert er Architektur, Geschäftslogik, Sicherheit, Authentifizierung und Randfälle. Als Warnung nennt er den Replit-Vorfall des Vorjahres, bei dem ein Agent trotz ausdrücklichem Freeze eine Produktionsdatenbank löschte. Für Übertragungen in die Produktion hoben im Saal nur ein bis zwei Personen die Hand."
  - question: "Mit welcher Werkzeugkombination arbeitet Koskinen für Copilot Studio?"
    answer: "Sein Setup besteht aus dem Maker-Portal, Visual Studio Code mit der Copilot-Studio-Erweiterung, GitHub Copilot und Claude Code. Dazu kommen Skills und MCP-Server als Wissens- und Zugriffsschicht. Das erste Demo-Thema entstand mit dem Coding-Agenten in rund 12 Minuten. In einer zweiten Demo leitete der Agent die Branche eines Kunden selbst aus dessen Verlauf ab."
  - question: "Welche Grenzen haben Coding-Agenten bei Copilot Studio aktuell?"
    answer: "Coding-Agenten können in Themen noch keine Tool-Referenzen anlegen. Von Agenten erstellte Power-Automate-Flows können ihre Verbindungen erzeugen, Themen können das nicht, die Verbindung muss daher manuell in der Oberfläche angelegt werden. Im Keynote-Beispiel schrieb der Agent über einen Power-Automate-Flow statt über den Dataverse-MCP nach Dataverse, und Koskinen bezeichnet eine solche Wahl als menschliche Entscheidung."
  - question: "Wie ging Koskinen beim hartnäckigen Filterfehler in der Demo vor?"
    answer: "Die zurückgegebene Projekthistorie zeigte konstant sechs Projekte, obwohl kein Fehler gemeldet wurde. Er konsultierte GitHub Copilot dreimal zur Filterung, doch jede gemeldete Korrektur wirkte nicht. Claude Code, als zweiter Agent eingesetzt, fand die Ursache ebenfalls nicht, lieferte aber Tests, die sie schliesslich offenlegten: Die API akzeptierte falsche Filterkombinationen, ohne einen Fehler zu melden."
---

## TL;DR

Coding-Agenten für Copilot Studio können Dataverse-Schemas prüfen, Topics erzeugen und Änderungen testen, ersetzen aber weder technische Kontrollen noch menschliche Verantwortung. Menschen behalten Anforderungen, kritische Prüfung, Review und Bereitstellung. Erforderliche Toolverbindungen müssen in Copilot Studio manuell erstellt, KI-Logik validiert und Architekturentscheidungen geprüft werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Generierte Topics und Geschäftslogik validieren, besonders wenn ein Agent Werte ableitet statt Nutzende zu fragen.
- Admins/CoE: Zwischen Entwicklung und Test einen Architektur-Review einplanen, wenn Coding-Agenten Integrationen oder Muster wählen.
- Security/Compliance: Agentenanweisungen nicht als Kontrollen behandeln; Sicherheits-, Authentifizierungs- und Plattformgrenzen menschlich validieren.
- Leadership/Business: Use-Case-Verantwortliche einbinden, damit KI-generierte Entscheidungen fachlich geprüft werden.
