---
title: Menschliche Eskalationen für Copilot Studio gestalten
description: Copilot-Grenzen, Eskalationsauslöser, Verantwortlichkeiten und Datenschutzkontrollen
  für klare, kontextreiche und messbare Übergaben festlegen.
date: '2026-10-20T10:46:45Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- copilot-studio
content_type: curated_summary
curation_id: 2e3f29133ab449825e50bfe9
image:
  path: "/assets/img/curated/2e3f29133ab449825e50bfe9.png"
  alt: 'Governance-Karte: Human escalation is a design rule, not a backup plan.'
permalink: "/de/posts/design-human-escalation-for-copilot-studio-handoffs-2e3f2913/"
translation_url: "/en/posts/design-human-escalation-for-copilot-studio-handoffs-2e3f2913/"
source_url: https://softchief.com/human-escalation-in-copilot-solutions/
source_site_url: https://softchief.com/
source_title: Human escalation in Copilot solutions
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-10-20'
source_type: article
faq:
- question: Wie übergibt Copilot Studio Gesprächskontext an Mitarbeitende?
  answer: Copilot Studio kann Gesprächsverlauf und relevante Variablen an einen verbundenen
    Engagement Hub senden. Der Übergabefluss kann auch eine private Nachricht für
    die zuständige Person enthalten.
- question: Welche Copilot-Anfragen müssen an einen Menschen eskaliert werden?
  answer: Mehrdeutige, unvollständige, nicht abgedeckte, wiederholt missverstandene,
    sensible, folgenschwere oder richtlinienbeschränkte Anfragen sollen eskaliert
    werden. Nutzende brauchen zudem eine klare Option für menschliche Hilfe.
- question: Welche Kennzahlen messen die Qualität von Copilot-Übergaben?
  answer: Messen Sie erfolgreiche Übergaben, Zeit bis zu einer Person, Lösungszeit,
    wiederholte Kontakte, abgebrochene Gespräche und Nutzerfeedback. Prüfen Sie auch,
    ob Mitarbeitende ausreichend Kontext erhalten.
---

## TL;DR

Legen Sie Copilot-Grenzen und Eskalationsauslöser vor der Veröffentlichung fest. Copilot Studio kann bei Übergaben Gesprächsverlauf und relevante Variablen an einen verbundenen Engagement Hub senden. Übermitteln Sie nur aufgabenbezogenen Kontext, benennen Sie Verantwortliche für Ausnahmen und testen Sie mehrdeutige, sensible und unterbrochene Übergaben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Legen Sie die Grenzen des Copiloten fest und bieten Sie nach ungelösten oder risikoreichen Anfragen einen sichtbaren Weg zu menschlicher Hilfe.
- Admins/CoE: Benennen Sie Verantwortliche, leiten Sie Fälle nach Thema und Dringlichkeit weiter und testen Sie den konfigurierten Übergabepfad vor dem Start sowie nach grossen Änderungen.
- Security/Compliance: Koppeln Sie sensible und richtlinienbeschränkte Anfragen an menschliche Prüfung, begrenzen Sie übertragene Daten auf den Aufgabenbedarf und beachten Sie Datenschutz-, Zugriffs- und Aufbewahrungsregeln.
