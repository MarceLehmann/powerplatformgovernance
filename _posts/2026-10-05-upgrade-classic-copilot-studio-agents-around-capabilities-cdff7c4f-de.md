---
title: Klassische Copilot Studio Agenten für moderne Orchestrierung migrieren
description: Das Copilot Studio Plugin analysiert Fähigkeiten klassischer Agenten,
  schlägt eine moderne Architektur vor und erzeugt Skills und Tools zur anschliessenden
  Prüfung.
date: '2026-10-05T16:57:59Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
content_type: curated_summary
curation_id: cdff7c4f4014d05893f741eb
image:
  path: "/assets/img/curated/cdff7c4f4014d05893f741eb.png"
  alt: 'Governance-Karte: Upgrade capabilities, not components. Review every generated
    Skill and tool before trusting the result.'
permalink: "/de/posts/upgrade-classic-copilot-studio-agents-around-capabilities-cdff7c4f/"
translation_url: "/en/posts/upgrade-classic-copilot-studio-agents-around-capabilities-cdff7c4f/"
source_url: https://microsoft.github.io/mcscatblog/posts/migration-plugin-video-demo/
source_site_url: https://microsoft.github.io/
source_title: 'Video Demo: Upgrading a Classic Agent to Modern Orchestration'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2026-07-14'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Was macht das Copilot Studio Migrationsplugin mit einem klassischen Agenten?
  answer: Es ruft den klassischen Agenten ab, analysiert seine Fähigkeiten, schlägt
    ein modernes Design vor und erzeugt den aktualisierten Agenten.
- question: Muss jeder klassische Copilot Studio Child Agent zu einer Skill werden?
  answer: Nein. Im Reiseszenario wurde der Reiseberatungsagent zu einer Skill, doch
    ein anderer Child Agent kann eine andere Architektur benötigen.
- question: Wie prüfe ich einen mit dem Copilot Studio Plugin migrierten Agenten?
  answer: Vergleichen Sie das Verhalten, prüfen Sie jede erzeugte Skill und jedes
    Tool, testen Sie Eingaben und bestätigen Sie Schutzvorkehrungen für Aktionen.
---

## TL;DR

Der Migrationsbefehl des Copilot Studio Plugins ruft einen klassischen Agenten ab, analysiert seine Fähigkeiten, schlägt ein modernes Design vor und erzeugt den aktualisierten Agenten. In der Demo wird ein Reiseberatungsagent zu einer Skill. Das Plugin ist experimentell, daher müssen Verhalten, Skills, Tools, Eingaben und Aktionsschutz geprüft werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Den Migrationsbefehl als Ausgangspunkt nutzen, Fähigkeiten statt Komponenten eins zu eins neu zu strukturieren und den modernen Agenten fachlich zu prüfen.
- Admins/CoE: Die Power Platform CLI neuer als Version 2.9.3 installieren, das aktuelle Plugin hinzufügen und beim Migrationsaufruf die IDs der Umgebung, des Agenten und des Mandanten verwenden.
- Security/Compliance: Die Ausgabe als ersten Entwurf behandeln, jede erzeugte Skill und jedes Tool prüfen, erwartete und unerwartete Eingaben testen und Schutzvorkehrungen für Aktionen bestätigen, weil das Plugin experimentell und nicht offiziell unterstützt ist.
