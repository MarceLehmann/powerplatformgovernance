---
title: Copilot Studio Agents mit YAML erstellen und prüfen
description: Das experimentelle Skills for Copilot Studio Plugin ermöglicht Erstellen,
  Testen, Fehleranalyse und Übertragen von Agenten-YAML über Claude Code oder GitHub
  Copilot CLI.
date: '2026-10-15T17:01:22Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- copilot-studio
- governance
- ownership
content_type: curated_summary
curation_id: 750a45203ab9ba723b016a17
image:
  path: "/assets/img/curated/750a45203ab9ba723b016a17.png"
  alt: 'Governance-Karte: Generated YAML still needs human review. The schema may
    change without notice.'
permalink: "/de/posts/build-and-review-copilot-studio-agents-from-yaml-with-skills-for-750a4520/"
translation_url: "/en/posts/build-and-review-copilot-studio-agents-from-yaml-with-skills-for-750a4520/"
source_url: https://microsoft.github.io/mcscatblog/posts/skills-for-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'Skills for Copilot Studio: Build agents from YAML code, up to 20x Faster'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2026-03-10'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie prüft das Skills for Copilot Studio Plugin erzeugten YAML-Code?
  answer: Das Plugin nutzt Kenntnisse des Copilot Studio Schemas und Validierungslogik,
    um erzeugten YAML-Code vor dem Portal-Übertragen zu prüfen.
- question: Welche Aufgabe hat die VS Code Copilot Studio Erweiterung in diesem Ablauf?
  answer: Die Erweiterung klont einen bestehenden Agenten in einen lokalen Ordner
    und überträgt später geprüfte YAML-Änderungen zurück zu Copilot Studio.
- question: Welche Befehle bietet Skills for Copilot Studio für die Agentenentwicklung?
  answer: Author bearbeitet YAML, Test bewertet veröffentlichte Agenten und Troubleshoot
    untersucht Routing, Validierungsfehler sowie unerwartetes Verhalten.
---

## TL;DR

Skills for Copilot Studio verbindet Claude Code und GitHub Copilot CLI mit Copilot Studio YAML-Abläufen. Makers klonen einen bestehenden Agenten mit der VS Code Erweiterung und nutzen Author, Test oder Troubleshoot. Vor dem Übertragen muss der erzeugte YAML-Code geprüft werden, da Fehler und nicht unterstützte Muster möglich sind.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Einen bestehenden Agenten mit der VS Code Copilot Studio Erweiterung klonen und danach Author, Test sowie Troubleshoot nutzen, um die Entwicklungsrückmeldung zu beschleunigen.
- Admins/CoE: Erzeugten YAML-Code vor dem Übertragen in eine Umgebung prüfen lassen, weil sich das Schema ohne Ankündigung ändern kann und KI-Ausgaben nicht unterstützte Muster enthalten können.
