---
title: Copilot Studio Agenten für zuverlässige Teams-Bereitstellung entwerfen
description: Acht Copilot Studio Muster behandeln Neuinstallationen, dauerhafte Unterhaltungen,
  veralteten Kontext, Zurücksetzen, Fehler, Diagnose und vorgeschlagene Eingaben in
  Teams.
date: '2026-10-12T16:57:20Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- environments
- alm
content_type: curated_summary
curation_id: d797cc5f2b191718f0c9ccd8
image:
  path: "/assets/img/curated/d797cc5f2b191718f0c9ccd8.png"
  alt: 'Governance-Karte: Teams agents need reset paths. Persistent context and stale
    sessions become production risks.'
permalink: "/de/posts/design-copilot-studio-agents-for-reliable-teams-deployment-d797cc5f/"
translation_url: "/en/posts/design-copilot-studio-agents-for-reliable-teams-deployment-d797cc5f/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-teams-agent-patterns/
source_site_url: https://microsoft.github.io/
source_title: Design Copilot Studio Agents for Teams (Because Test Chat Was Too Easy)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Henry Jammes
source_published_at: '2026-04-07'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie behandelt Copilot Studio die Neuinstallation einer Teams App?
  answer: Ein InstallationUpdate-Trigger kann den Agenten zu Conversation Start weiterleiten,
    weil Conversation Start nach einer Neuinstallation nicht automatisch ausgeführt
    wird.
- question: Welche Inaktivitätsdauer verwendet das Copilot Studio Beispiel für Teams?
  answer: Das Beispiel verwendet durationInSeconds 43200, also zwölf Stunden, und
    löscht danach Unterhaltungsverlauf sowie Variablen vor der Kennzeichnung als inaktiv.
- question: Welche Diagnoseangaben kann eine Copilot Studio Start Over Karte anzeigen?
  answer: Die Adaptive Card kann Umgebungs-, Mandanten-, Agenten-, Benutzer- und Unterhaltungskennungen
    sowie den aktuellen UTC-Zeitstempel anzeigen.
---

## TL;DR

Copilot Studio Agenten in Teams sollten InstallationUpdate-Ereignisse behandeln, veraltete Unterhaltungen nach Inaktivität löschen, globalen Kontext erneut setzen und die Themen Reset Conversation sowie Start Over anpassen. Das Beispiel nutzt zwölf Stunden Inaktivität, Adaptive Cards für Hinweise und Diagnose sowie das Verhalten für die sofortige Verwendung der neuesten veröffentlichten Version.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: InstallationUpdate- und Inaktivitätsthemen hinzufügen und das Zurücksetzen in Teams testen, weil Test Chat dauerhafte Sitzungen und Neuinstallationen nicht abbildet.
- Admins/CoE: Das Verhalten für veröffentlichte Inhalte auf relevante Themen anwenden und Diagnoseangaben über Start Over nur bei echtem Supportbedarf bereitstellen, damit veralteter Zustand behoben und Fehler einheitlich untersucht werden können.
