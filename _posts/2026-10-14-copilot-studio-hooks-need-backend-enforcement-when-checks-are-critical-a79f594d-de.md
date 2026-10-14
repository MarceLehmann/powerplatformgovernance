---
title: Copilot-Studio-Hooks brauchen bei kritischen Prüfungen Backend-Kontrollen
description: Copilot-Studio-Hooks ergänzen Kontext, schwärzen Prompts und prüfen Tool-Aufrufe.
  Bei Fehlern kann die Ausführung jedoch fortgesetzt werden, wenn das Backend die
  Regel nicht erzwingt.
date: '2026-10-14T16:30:00Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- copilot-studio
content_type: curated_summary
curation_id: a79f594d6a7f837a3004526b
image:
  path: "/assets/img/curated/a79f594d6a7f837a3004526b.png"
  alt: 'Governance-Karte: Hooks fail open. Critical checks still belong in the backend.'
permalink: "/de/posts/copilot-studio-hooks-need-backend-enforcement-when-checks-are-critical-a79f594d/"
translation_url: "/en/posts/copilot-studio-hooks-need-backend-enforcement-when-checks-are-critical-a79f594d/"
source_url: https://microsoft.github.io/mcscatblog/posts/hooks-in-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'Hooks in Copilot Studio: Give Your Agent More Than Instructions'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Petros Feleskouras
source_published_at: '2026-10-12'
source_type: article
faq:
- question: Wie reagieren Copilot-Studio-Hooks auf einen fehlgeschlagenen oder abgelaufenen
    Workflow?
  answer: Bei Fehlern, Zeitüberschreitungen oder unlesbaren Antworten läuft die Ausführung
    mit dem Standardverhalten weiter. Kritische Kontrollen brauchen deshalb eine unabhängige
    Durchsetzung.
- question: Kann ein Copilot-Studio-Pre-Tool-Hook eine Buchung über dem Budget blockieren?
  answer: Ja, ein Pre-Tool-Hook kann bei erfolgreicher Richtlinienprüfung eine Ablehnung
    mit Begründung zurückgeben und den geplanten Aufruf stoppen. Eine Backend-Prüfung
    bleibt erforderlich.
- question: An welchen Stellen können Copilot-Studio-Hooks Informationen vor der Verarbeitung
    schwärzen?
  answer: Hooks können den Benutzer-Prompt, Tool-Parameter oder ein erfolgreiches
    Tool-Ergebnis über modifiedPrompt, modifiedParameters oder modifiedResult ersetzen.
    Gespeicherte Originale benötigen eigene Aufbewahrungskontrollen.
---

## TL;DR

Copilot-Studio-Hooks laufen bei Ereignissen wie Sitzungsbeginn, Prompt-Eingabe und vor einem Tool-Aufruf. Sie können Kontext ergänzen, Text schwärzen oder einen Aufruf ablehnen. Da die aktuelle Laufzeit bei Fehlern und Zeitüberschreitungen offen weiterläuft, müssen kritische Prüfungen zusätzlich im Tool oder Backend erfolgen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Verknüpft Hooks mit klar abgegrenzten Ereignissen und testet erfolgreiche, fehlgeschlagene und zeitüberschrittene Workflows, weil die Standardausführung weiterlaufen kann.
- Admins/CoE: Prüft die Verfügbarkeit der Hooks in der Umgebung und kontrolliert Verbindungen, Protokolle, Transkripte und Aufbewahrung, weil Hooks Originaldaten nicht löschen.
- Security/Compliance: Verlangt unabhängige Backend-Prüfungen für sensible Daten, Berechtigungen, DLP und Richtlinien, weil ein Hook-Fehler Daten offenlegen oder blockierte Aktionen erlauben kann.
- Leadership/Business: Bewertet Preview-Hooks als zusätzliche Kontrollebene und nicht als sichere Sperre, besonders bei Buchungen und anderen geschützten Transaktionen.
