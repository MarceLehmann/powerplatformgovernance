---
title: Copilot Studio Agents brauchen klare Sicherheitsgrenzen
description: Copilot Studio Agents verbinden KI mit Daten und Aktionen. Prüft Zugriffe,
  Konnektoren, Authentifizierung und Freigaben, um Datenexposition zu begrenzen.
date: '2026-11-07T23:03:00Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- governance
- dlp
- copilot-studio
content_type: curated_summary
curation_id: 7bfbae7b2fb0b14c91bc32c5
image:
  path: "/assets/img/curated/7bfbae7b2fb0b14c91bc32c5.png"
  alt: 'Governance-Karte: Every agent needs a boundary. Review what it can reach before
    data is exposed.'
permalink: "/de/posts/copilot-studio-agents-need-clear-security-boundaries-7bfbae7b/"
translation_url: "/en/posts/copilot-studio-agents-need-clear-security-boundaries-7bfbae7b/"
source_url: https://www.spreaker.com/episode/copilot-studio-agents-security-boundaries-and-data-exposure--75992163
source_site_url: https://www.spreaker.com/
source_title: 'Copilot Studio Agents: Security Boundaries and Data Exposure'
source_name: m365 FM
source_language: en
source_language_name: English
source_author: Mirko Peters M365, Azure & AI
source_published_at: '2026-11-07'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wie prüfe ich, welche Ressourcen ein Copilot Studio Agent erreichen kann?
  answer: Prüfe Datenzugriff, Konnektoren, Authentifizierung und Freigaben des Agents,
    um seine erreichbaren Ressourcen und das Expositionsrisiko zu verstehen.
- question: Welche Bedeutung haben Konnektoren für die Sicherheit von Copilot Studio
    Agents?
  answer: Konnektoren bilden einen Teil der Zugriffsgrenze eines Agents. Ihre Reichweite
    muss bei der Bewertung möglicher Datenexposition geprüft werden.
- question: Warum ist Authentifizierung bei Copilot Studio Agents wichtig?
  answer: Authentifizierung beeinflusst, wie ein Agent auf verbundene Daten und Aktionen
    zugreift, und gehört deshalb zur Festlegung seiner Sicherheitsgrenzen.
---

## TL;DR

Copilot Studio Agents verbinden KI mit Daten und Aktionen. Teams sollen Zugriffsgrenzen festlegen, Datenzugriffe und Konnektoren prüfen, Authentifizierung und Freigaben betrachten und die erreichbaren Ressourcen jedes Agents bewerten, um Datenexposition zu begrenzen und Makers sicher produktiv zu halten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Prüft, welche Daten und Aktionen jeder Copilot Studio Agent erreichen kann, damit seine Grenzen vor der Nutzung klar sind.
- Admins/CoE: Legt Agent-Grenzen fest und untersucht Konnektoren, Authentifizierung und Freigaben, damit Makers produktiv und sicher arbeiten.
- Security/Compliance: Bewertet erreichbare Ressourcen und das Expositionsrisiko, weil die Sicherheitsgrenzen eines Agents Teil der Gesamtarchitektur werden.
