---
title: 'Copilot Studio Model Assessment: Agenten vor dem Modellwechsel prüfen'
description: Model Assessment im Copilot Agent Kit vergleicht Agenten über Modelle
  hinweg mit gemeinsamen Evaluationschecks, Modellhistorie und ausgewiesenen Copilot
  Credits.
date: '2026-11-18T16:33:02Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
- alm
- environments
content_type: curated_summary
curation_id: df35f40be83dfcf777dc4e5e
image:
  path: "/assets/img/curated/df35f40be83dfcf777dc4e5e.png"
  alt: 'Governance-Karte: Switching a model takes a few clicks. Proving it was the
    right switch takes evidence.'
permalink: "/de/posts/copilot-studio-model-assessment-test-agents-before-a-model-switch-df35f40b/"
translation_url: "/en/posts/copilot-studio-model-assessment-test-agents-before-a-model-switch-df35f40b/"
source_url: https://microsoft.github.io/mcscatblog/posts/model-assessment/
source_site_url: https://microsoft.github.io/
source_title: 'Before you switch models: Assess your Copilot Studio agent with Model
  Assessment'
source_name: The Custom Engine (Microsoft Copilot Studio CAT team blog)
source_language: en
source_language_name: English
source_author: Ravikiran Patil
source_published_at: '2026-11-12'
source_updated_at: '2026-11-12'
source_type: article
faq:
- question: Wie richte ich Copilot Studio Evaluierungen für Model Assessment ein?
  answer: Erstellen Sie aktive Evaluationstestsets mit MODELCHECK im Namen und erfassen
    Sie zuerst eine Baseline. Das Tool finden Sie unter Advanced Testing im Copilot
    Agent Kit.
- question: Was kostet ein Model Assessment an Copilot Credits?
  answer: Die beobachtete KI-Analyse verbrauchte rund 120-150 Copilot Credits pro
    Assessment, getrennt von den Antwort- und Bewertungs-Credits der Testfälle. Kit-Tests
    melden keine Credits.
- question: Warum zeigt Model Assessment eine Empfehlung, obwohl der Laufstatus Critical
    bleibt?
  answer: Die Empfehlung vergleicht nur die beiden ausgewählten Läufe, Critical ist
    der eigene Status jedes Laufs. Im Beispiel blieben vier Klassifizierungschecks
    auch beim bevorzugten Modell erfolglos.
animation:
  video: /assets/img/animations/df35f40be83dfcf777dc4e5e-de.mp4
  poster: /assets/img/animations/df35f40be83dfcf777dc4e5e-de.poster.webp
  width: 800
  height: 450
  alt: "Die Abfolge zeigt, wie ein Copilot Studio Model Assessment vorbereitet und genutzt wird: Advanced Testing im Copilot Agent Kit oeffnen, aktive MODELCHECK-Testsets erstellen, eine Baseline erfassen und vor dem Modellwechsel Laeufe vergleichen."
---

## TL;DR

Model Assessment im Copilot Agent Kit prüft einen Copilot Studio Agenten vor einem Modellwechsel anhand seiner Evaluationstestsets. Im Beispiel schlägt GPT-6 Luna mit 14 bestandenen Checks GPT-6.1 Sol mit 12 und wird mit mittlerer Konfidenz empfohlen, während beide Läufe Critical bleiben. Der Verbrauch wird pro Lauf und Testfall ausgewiesen, unvollständige Anzeigen verhindern Sparaussagen, und die KI-Analyse verbrauchte rund 120-150 Copilot Credits pro Assessment.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Vor jedem Modellwechsel eine Baseline erfassen, Anweisungen, Wissen, Tools und Testsets stabil halten und geänderte Checks in einer Entwicklungs- oder Testumgebung nachstellen, denn ein Wechsel über Model Assessment wird im Quellagenten gespeichert und über den Kit-Pfad veröffentlicht.
- Admins/CoE: Rund 120-150 Copilot Credits pro Assessment für die KI-Analyse einplanen, daran denken, dass Kit-Tests keine Credits melden, und unvollständige Verbrauchsangaben vor einer kostenbasierten Entscheidung klären.
- Leadership/Business: Die Modellempfehlung gemeinsam mit Konfidenz und PDF-Export prüfen; im Beispiel blieben beide Läufe Critical, eine Empfehlung ersetzt die Fehlerbehebung nicht.
