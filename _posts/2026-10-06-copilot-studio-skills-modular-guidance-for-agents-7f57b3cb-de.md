---
title: 'Copilot Studio Skills: Situative Anleitung für Agents'
description: Copilot Studio Skills laden szenariospezifische Anweisungen und Ressourcen
  nach Bedarf. Präzise Beschreibungen steuern die Auswahl, während externe Skills
  eine Vertrauensprüfung erfordern.
date: '2026-10-06T16:58:56Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- alm
- security
- governance
content_type: curated_summary
curation_id: 7f57b3cbe68b609e605dbf3a
image:
  path: "/assets/img/curated/7f57b3cbe68b609e605dbf3a.png"
  alt: 'Governance-Karte: Put situational guidance in Skills. Keep always-on rules
    in instructions.'
permalink: "/de/posts/copilot-studio-skills-modular-guidance-for-agents-7f57b3cb/"
translation_url: "/en/posts/copilot-studio-skills-modular-guidance-for-agents-7f57b3cb/"
source_url: https://microsoft.github.io/mcscatblog/posts/modern-mcs-agent-skills/
source_site_url: https://microsoft.github.io/
source_title: Agents Have Skills Now — Here's How They Work in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Roel Schenk
source_published_at: '2026-06-15'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie entscheidet Copilot Studio, wann ein Skill geladen wird?
  answer: Copilot Studio vergleicht Name und Beschreibung des Skills mit der Unterhaltung
    und lädt die vollständigen Anweisungen bei passendem Szenario.
- question: Welche Dateien kann ein Copilot Studio Skill enthalten?
  answer: Ein Skill kann SKILL.md sowie optionale Referenzen, Assets, Vorlagen, Beispiele
    und ausführbare Skripte in seinem Ordner oder Upload enthalten.
- question: Warum sollte ich einen Copilot Studio Skill vor dem Hinzufügen prüfen?
  answer: Skills beeinflussen das Agentenverhalten und können Skripte enthalten. Prüft
    sie daher auf Prompt Injection, Tool-Missbrauch und Inhalte ausserhalb ihres beschriebenen
    Zwecks.
animation:
  src: /assets/img/animations/7f57b3cbe68b609e605dbf3a-de.gif
  poster: /assets/img/animations/7f57b3cbe68b609e605dbf3a-de.poster.png
  width: 800
  height: 450
  alt: "Eine 3-Schritt-Abfolge zeigt, wie Copilot Studio Name und Beschreibung eines Skills mit dem Szenario abgleicht und dann die vollstaendigen Anweisungen bei Bedarf laedt."
---

## TL;DR

Copilot Studio Skills bündeln szenariospezifische Anweisungen und optionale Ressourcen wie Skripte, Referenzen, Vorlagen und Beispiele. Der Agent nutzt Name und Beschreibung zur Auswahl und lädt den vollständigen Inhalt bei Bedarf. Dauerhafte Regeln gehören in die Agentenanweisungen, situative Abläufe in Skills.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Beschreibt präzise, wann ein Skill verwendet oder nicht verwendet werden soll, weil diese Angaben die Auswahl durch den Agenten steuern.
- Admins/CoE: Fügt Skills zu Power Platform-Lösungen hinzu, damit sie den Agenten durch den ALM-Lebenszyklus begleiten, und beachtet ihre Bindung an einen einzelnen Agenten.
- Security/Compliance: Prüft externe, KI-generierte oder wiederverwendete Skills auf Prompt Injection, missbräuchliche Tool-Nutzung und widersprüchliches Verhalten.
