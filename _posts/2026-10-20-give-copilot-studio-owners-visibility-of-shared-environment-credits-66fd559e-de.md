---
title: Copilot Studio Besitzern Sicht auf gemeinsame Umgebungsguthaben geben
description: Eine Ansicht nur für Maker kann Zuteilung, Monatsverbrauch, Tagesverbrauch
  und abgerechnete Credits je Agent anzeigen.
date: '2026-10-20T04:36:23Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- copilot-studio
- power-automate
- ownership
content_type: curated_summary
curation_id: 66fd559e7358e278a71e1236
image:
  path: "/assets/img/curated/66fd559e7358e278a71e1236.png"
  alt: 'Governance-Karte: Agent owners need visibility of the shared environment credit
    pool.'
permalink: "/de/posts/give-copilot-studio-owners-visibility-of-shared-environment-credits-66fd559e/"
translation_url: "/en/posts/give-copilot-studio-owners-visibility-of-shared-environment-credits-66fd559e/"
source_url: https://www.karlex.fi/__trashed-8/
source_site_url: https://www.karlex.fi/
source_title: Agent owners should follow environment Copilot Credit usage – not the
  admins
source_name: Karlex Oy
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-20'
source_type: article
faq:
- question: Wer soll den Credit-Verbrauch einer Copilot Studio Umgebung sehen?
  answer: Environment Maker und Nutzer mit höheren Rollen sollen ihn sehen. Basic
    User, die nur eine App ausführen, benötigen diese Credit-Ansicht nicht.
- question: Wie bestimmt die Copilot-Credit-Ansicht die sichtbaren Umgebungen?
  answer: Sie gleicht Microsoft Entra-Gruppenmitgliedschaften mit Gruppenteams ab,
    die Environment Maker oder höhere Rollen besitzen. Direkt zugewiesene Rollen werden
    absichtlich ausgeschlossen.
- question: Welche Copilot Studio Credit-Daten liefert Get All Resource Thresholds?
  answer: Der Aufruf liefert je Agent die bisher im Monat abgerechneten Credits. Er
    enthält nur Agents mit einer Threshold-Zeile, was die Ansicht kenntlich machen
    soll.
---

## TL;DR

Besitzer von Copilot Studio Agents sehen den Verbrauch ihres eigenen Agents, aber die gemeinsame Credit-Zuteilung der Umgebung und den Verbrauch anderer Agents liegen normalerweise nur bei Admins. Eine eigene Ansicht soll berechtigten Makern Umgebungen, Verbrauch gegenüber der Zuteilung, Tageswerte und abgerechnete Credits je Agent zeigen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Den Verbrauch gegenüber der Umgebungszuteilung prüfen und Agents mit hohem Shared-Credit-Verbrauch erkennen, bevor das Limit erreicht ist.
- Admins/CoE: Maker-Rechte über Microsoft Entra-Gruppenteams vergeben und Credit-Daten nur für Nutzer mit Environment Maker oder höher bereitstellen.
- Security/Compliance: Bekannte Grenzen der Datensammlung berücksichtigen, darunter 403 bei Entitlement Insight und fehlende Agents ohne Threshold-Zeile.
