---
title: Vier Sicherheitsstufen für agentische Power Platform Entwicklung
description: Ein praktisches Modell dafür, worauf Claude Code in Power Platform Umgebungen,
  Pipelines, lokalen Dateien und getrennten Mandanten zugreifen darf.
date: '2026-11-09T04:35:25Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- alm
- environments
- governance
- copilot-studio
content_type: curated_summary
curation_id: e75efea9297c84fb95bfc650
image:
  path: "/assets/img/curated/e75efea9297c84fb95bfc650.png"
  alt: 'Governance-Karte: Open the smallest door the agent needs. Keep the customer
    key with a person.'
permalink: "/de/posts/four-security-levels-for-agentic-power-platform-development-e75efea9/"
translation_url: "/en/posts/four-security-levels-for-agentic-power-platform-development-e75efea9/"
source_url: https://www.karlex.fi/is-it-ok-if-i-build-this-agentically-four-levels-of-security-for-agentic-power-platform-development/
source_site_url: https://www.karlex.fi/
source_title: "“Is it ok if I build this agentically?” Four levels of security for
  agentic Power Platform development"
source_name: Karlex
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-11-09'
source_type: article
faq:
- question: Wie verändert eine delegierte Bereitstellung die Sicherheit einer Power
    Platform Pipeline?
  answer: Bei delegierter Bereitstellung verwendet die Pipeline ihre eigene Identität
    statt des Entwicklerkontos, und jede Bereitstellung wartet auf eine Freigabe.
- question: Was geschieht beim Klonen eines Copilot Studio Agents in lokale YAML Dateien?
  answer: Der Agent bearbeitet lokale YAML Dateien ohne Umgebungs Token. Ein Mensch
    lädt Änderungen herunter und zurück, nachdem er Konflikte geprüft hat.
- question: Wann laufen Kundenanmeldungen auf dem Server des Agenten ab?
  answer: Kundenanmeldungen werden nach 30 Minuten ohne Aktivität und um 17:00 Uhr
    abgemeldet; eine zusätzliche Prüfung erfasst festhängende Sitzungen.
---

## TL;DR

Claude Code kann Power Platform Entwicklung über vier Zugriffsstufen unterstützen: Service Principal, Entwicklerkonto nur für die Entwicklungsumgebung, lokale Copilot Studio YAML Dateien oder ein separater Mandant. Stufen 3 und 4 halten Kundenverbindungen beim Menschen, während Kundenanmeldungen nach 30 Minuten Inaktivität und um 17:00 Uhr ablaufen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Security/Compliance: Wählt die Zugriffsstufe je Kunde und macht den möglichen Schadensradius sichtbar, weil Service Principals und Entwicklerkonten den Kundenmandanten erreichen können.
- Admins/CoE: Nutzt delegierte Power Platform Pipelines mit Freigabe von Entwicklung über Test nach Produktion, weil die Pipeline Identität dasselbe verwaltete Artefakt bereitstellt.
- Makers: Prüft geklonte YAML Dateien vor dem Zurückschreiben und testet Änderungen selbst, weil ein Pull trotz Konflikt erfolgreich melden kann und der Agent menschliche Verantwortung nicht ersetzt.
