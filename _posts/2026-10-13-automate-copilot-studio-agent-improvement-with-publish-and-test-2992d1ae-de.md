---
title: Copilot Studio Agents mit Publish und Test automatisiert verbessern
description: Ein Copilot Studio Plugin automatisiert Bearbeitung, Push, Veröffentlichung,
  Tests und die Verbesserung von Agents anhand von Testergebnissen.
date: '2026-10-13T16:58:32Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- dataverse
- copilot-studio
content_type: curated_summary
curation_id: 2992d1ae8503e82690f6d166
image:
  path: "/assets/img/curated/2992d1ae8503e82690f6d166.png"
  alt: 'Governance-Karte: Publish, test, learn, repeat. Small instruction sets make
    agent improvement more stable.'
permalink: "/de/posts/automate-copilot-studio-agent-improvement-with-publish-and-test-2992d1ae/"
translation_url: "/en/posts/automate-copilot-studio-agent-improvement-with-publish-and-test-2992d1ae/"
source_url: https://microsoft.github.io/mcscatblog/posts/agentic-improvement-loop/
source_site_url: https://microsoft.github.io/
source_title: 'Closing the Loop: Automated Agent Improvement with Publish and Test'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-03-29'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie veröffentlicht das Copilot Studio Plugin einen aktualisierten Agent
    beim automatisierten Testen?
  answer: Der Manage Sub-Agent ruft die gebundene Dataverse Aktion PvaPublish auf
    und prüft den Zeitstempel publishedon, bis der Entwurf live ist.
- question: Warum sollten Copilot Studio Testfälle getrennte Unterhaltungen verwenden?
  answer: Getrennte Unterhaltungen verhindern, dass eine falsche Antwort spätere Fragen
    beeinflusst, und ermöglichen genauere Bewertungen einzelner Testfälle.
- question: Wie viele Copilot Studio Anweisungsregeln waren im Versuch stabil?
  answer: Sieben kurze Regeln waren stabil. Eine Erweiterung auf vierzehn Regeln verursachte
    eine Verschlechterung von 3/5 auf 1/5.
---

## TL;DR

Das Copilot Studio Plugin ergänzt einen Publish-Befehl für eine vollständige Schleife aus Bearbeiten, Pushen, Veröffentlichen und Testen. Ein D&amp;D-Regelagent stieg nach sieben Durchläufen von 40 Prozent auf stabile 60 Prozent. Sieben fokussierte Anweisungen waren stabiler als vierzehn, während gemeinsame Sitzungen spätere Tests beeinflussten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Haltet Copilot Studio Anweisungen kurz und überschneidungsfrei, denn der Testagent fiel mit 14 statt 7 Regeln von 3/5 auf 1/5.
- Admins/CoE: Führt Pull, Push und Publish in dieser Reihenfolge aus und testet den veröffentlichten Agent. Separate Sitzungen verhindern, dass eine falsche Antwort spätere Bewertungen verfälscht.
