---
title: 'Copilot Studio Memory: Trennung, Kontrolle und zuverlässige Prüfung'
description: Copilot Studio speichert Erinnerungen getrennt pro Benutzer, lässt Maker
  Memory aktivieren und verlangt Prüfungen auf veraltete Rückrufe, Halluzinationen
  und angemessene Zurückhaltung.
date: '2026-10-05T16:37:54Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
- ownership
content_type: curated_summary
curation_id: bce6c3f02cb6a067f939cff8
image:
  path: "/assets/img/curated/bce6c3f02cb6a067f939cff8.png"
  alt: 'Governance-Karte: Memory must remember the right things and know what it does
    not know.'
permalink: "/de/posts/copilot-studio-agent-memory-needs-separation-control-and-verification-bce6c3f0/"
translation_url: "/en/posts/copilot-studio-agent-memory-needs-separation-control-and-verification-bce6c3f0/"
source_url: https://microsoft.github.io/mcscatblog/posts/agent-memory/
source_site_url: https://microsoft.github.io/
source_title: 'Memory in Copilot Studio: How Agents Carry Knowledge Across Conversations'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Kaashyap Murali, Michal Sroka
source_published_at: '2026-10-05'
source_type: article
faq:
- question: Wie speichert Copilot Studio Erinnerungen getrennt für einzelne Benutzer?
  answer: Copilot Studio speichert die Erinnerungen jedes Benutzers als Dateien in
    einem eigenen Ordner im von Microsoft verwalteten Speicher des Agents. Andere
    Benutzer und der Maker können sie nicht sehen.
- question: Wie können Benutzer Copilot Studio Erinnerungen prüfen oder löschen?
  answer: Benutzer können Erinnerungen im Memory-Portal prüfen oder vollständig löschen.
    Im Chat können sie den Agent ausserdem nach Erinnerungen fragen, einzelne Einträge
    ändern oder etwas vergessen lassen.
- question: Welche Prüfungen braucht Copilot Studio Memory vor einer breiteren Nutzung?
  answer: Teams sollten Rückruf, negative Rückmeldung, Zurückhaltung und Halluzinationen
    testen. Memory soll spätere Antworten verbessern, ohne veraltete Angaben selbstsicher
    zu wiederholen oder Details zu erfinden.
---

## TL;DR

Copilot Studio Memory wird im Build-Tab aktiviert. Der Agent erfasst relevanten Kontext, speichert ihn als Dateien in einem eigenen Microsoft-verwalteten Ordner je Benutzer und Agent und nutzt ihn später wieder. Benutzer können Erinnerungen im Chat oder Portal prüfen, ändern und löschen. Teams testen Rückruf, veraltete Informationen und Halluzinationen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Memory im Build-Tab nur aktivieren, wenn der Agent Gesprächskontinuität benötigt, und die Wirkung gespeicherter Informationen auf spätere Antworten berücksichtigen.
- Admins/CoE: Prüfen, dass jeder Benutzer je Agent einen getrennten Speicherordner hat und eigene Erinnerungen im Chat oder Portal einsehen, ändern und löschen kann.
- Security/Compliance: Memory als stille Risikofläche behandeln und Rückruf, negative Rückmeldung, Zurückhaltung und Halluzinationen vor einer breiteren Nutzung testen.
- Leadership/Business: Nachweisen, dass Memory den Rückruf verbessert, ohne die Bereitschaft des Agents zu schwächen, Unwissen offen zu benennen.
