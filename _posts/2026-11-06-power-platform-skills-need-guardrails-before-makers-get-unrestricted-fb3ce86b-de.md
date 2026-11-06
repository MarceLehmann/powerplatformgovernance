---
title: Power Platform Skills brauchen Schutzmassnahmen vor uneingeschränktem Agentenzugriff
description: Power Platform Skills können Genehmigungsabfragen entfernen und Agents
  den Zugriff des angemeldeten Benutzers auf Umgebungen und verbundene Dienste geben.
date: '2026-11-06T10:40:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- governance
- environments
content_type: curated_summary
curation_id: fb3ce86bc68922e9d90b9ae6
image:
  path: "/assets/img/curated/fb3ce86bc68922e9d90b9ae6.png"
  alt: 'Governance-Karte: Auto approval gives the agent your access. Use it only in
    trusted or sandboxed environments.'
permalink: "/de/posts/power-platform-skills-need-guardrails-before-makers-get-unrestricted-fb3ce86b/"
translation_url: "/en/posts/power-platform-skills-need-guardrails-before-makers-get-unrestricted-fb3ce86b/"
source_url: https://brightideasagency.com/blog/power-platform-skills-and-ai-coding-agents
source_site_url: https://brightideasagency.com/
source_title: 'Power Platform Skills and AI Coding Agents: Balancing Maker Productivity
  with Security'
source_name: Bright Ideas Agency
source_language: en
source_language_name: English
source_author: Sadie Pepperrell
source_published_at: '2026-11-06'
source_type: article
faq:
- question: Was ändert die Power Platform Skills Option Running Without Interruption?
  answer: Die README bietet zwei Möglichkeiten, Genehmigungsabfragen zu reduzieren
    oder vollständig zu entfernen; die zweite Option beseitigt sie ganz.
- question: Welche Berechtigungen erhält ein Power Platform Skills Agent bei automatischer
    Genehmigung?
  answer: Die automatische Genehmigung gibt dem Agenten denselben Zugriff wie dem
    angemeldeten Benutzer auf diesem Computer.
- question: Warum sind Maker-Konten bei automatisch genehmigten Power Platform Skills
    Befehlen riskant?
  answer: Ein Maker mit eigenem Konto kann dem Agenten dadurch Zugriff auf jede erreichbare
    Umgebung sowie verbundene SharePoint-Websites oder Postfächer geben.
---

## TL;DR

Power Platform Skills können über die README-Optionen unter Running Without Interruption Genehmigungsabfragen reduzieren oder entfernen. Bei automatischer Genehmigung erhält der Agent den Zugriff des Benutzers auf dem Computer und kann dadurch erreichbare Umgebungen, SharePoint-Websites oder Postfächer nutzen. Vor einer breiteren Einführung sind vertrauenswürdige oder abgeschottete Umgebungen nötig.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Genehmigungsabfragen beibehalten, ausser der Agent läuft in einer vertrauenswürdigen oder abgeschotteten Umgebung, weil er sonst deinen Zugriff nutzt.
- Admins/CoE: Schutzmassnahmen vor einer Einführung über professionelle Entwickler hinaus schaffen, da angemeldete Makers erreichbare Umgebungen und Dienste freigeben können.
- Security/Compliance: Jede entfernte Genehmigung als verlorenen Prüfpunkt bewerten und mögliche Störungen durch die Benutzerberechtigungen prüfen.
