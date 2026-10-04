---
title: KI über Anbieter hinweg steuern und Governance an Identitäten binden
description: Rencore empfiehlt, KI-Konten mit Entra ID abzugleichen, damit Besitz,
  Berechtigungen, Aktivitäten und Zugriffe anbieterübergreifend gesteuert werden können.
date: '2026-09-25T11:32:53Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: '029320d18687daf7f760dbdb'
image:
  path: "/assets/img/curated/029320d18687daf7f760dbdb.png"
  alt: 'Governance-Karte: Four consoles give four partial answers. Govern the person
    across the estate.'
permalink: "/de/posts/govern-ai-across-providers-by-anchoring-governance-to-identity-029320d1/"
translation_url: "/en/posts/govern-ai-across-providers-by-anchoring-governance-to-identity-029320d1/"
source_url: https://rencore.com/en/blog/four-consoles-one-person/
source_site_url: https://rencore.com/
source_title: Four consoles, one person
source_name: Rencore
source_language: en
source_language_name: English
source_author: Tiina Rytkönen
source_published_at: '2026-09-25'
source_updated_at: '2026-09-25'
source_type: article
faq:
  - question: "Warum reicht die Admin-Konsole eines einzelnen KI-Anbieters für die Governance nicht aus?"
    answer: "Jede Konsole sieht nur ihren eigenen Anbieter und kann nicht beantworten, was eine Person über alle KI-Systeme hinweg darf."
  - question: "Wie ordnet ein identitätsbasierter Ansatz KI-Konten verschiedener Anbieter einer Person zu?"
    answer: "Jedes KI-Konto wird einer einzelnen Person in Entra ID zugeordnet. Dieselbe Mitarbeiterin erscheint dann einmal mit einem gebündelten Bestand statt getrennt in jedem Werkzeug."
  - question: "Liest der identitätsbasierte Ansatz Prompts oder Dateiinhalte mit?"
    answer: "Nein. Gespräche, Dateiinhalte und Prompt-Texte werden bewusst nicht ausgewertet."
---
## TL;DR

Rencore beschreibt vier getrennte KI-Konten für eine Person als vier IDs und Prüfpfade ohne gemeinsame Sicht. Empfohlen wird, jedes KI-Konto Microsoft Entra ID zuzuordnen und Benutzer, Projekte, Sitzungen, Einstellungen und Ausgaben mit gemeinsamer Inventarisierung, Richtlinien, Automatisierung und Zugriffsüberprüfungen zu steuern.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: KI-Konten mit Microsoft Entra ID abgleichen, damit Benutzer, Projekte, Sitzungen, Einstellungen und Ausgaben anbieterübergreifend gesteuert werden können.
- Security/Compliance: Die begrenzte Aufbewahrung der Prüfprotokolle jedes Anbieters prüfen und Aufzeichnungen frühzeitig sichern, weil ältere Vorfallhistorien nicht wiederhergestellt werden können.
- Leadership/Business: Mehrere KI-Anbieter als gemeinsame Governance-Aufgabe behandeln, weil kein einzelner Anbieter beantworten kann, worauf eine Person über alle Werkzeuge hinweg zugreifen kann.
