---
title: Copilot Studio Harness vor dem Bau auswählen
description: Der GitHub Copilot Harness verändert Abrechnung, Testkosten und Übertragbarkeit
  in Copilot Studio. Die genannte Umstellung im September 2026 ist vorbei.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- copilot-studio
- environments
content_type: curated_summary
curation_id: 5118fada3045ab454cf7f717
image:
  path: "/assets/img/curated/5118fada3045ab454cf7f717.png"
  alt: 'Governance-Karte: Choose the harness before you build. You cannot convert
    later.'
permalink: "/de/posts/choose-copilot-studio-s-harness-before-building-5118fada/"
translation_url: "/en/posts/choose-copilot-studio-s-harness-before-building-5118fada/"
source_url: https://www.andersjensen.org/en/articles/new-copilot-studio-explained/
source_site_url: https://www.andersjensen.org/
source_title: The New Copilot Studio Explained (GitHub Copilot Harness)
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-08-12'
source_type: article
faq:
  - question: "Was ist ein Harness in Copilot Studio und welche drei gibt es?"
    answer: "Der Harness ist die Infrastruktur rund um das KI-Modell, also Werkzeuge, Gedächtnis, Dateihandling und die Schleife, mit der ein Agent selbständig an einer Aufgabe arbeitet, bis sie erledigt ist."
  - question: "Kann ich einen Agenten nach dem Anlegen auf einen anderen Harness umstellen?"
    answer: "Nein, die Wahl ist endgültig. Ein GitHub-Copilot-Agent lässt sich nicht in einen Standard-Agenten umwandeln und umgekehrt, eine falsche Entscheidung heisst, den Agenten neu zu bauen."
  - question: "Ab wann zählen Credits auf dem GitHub-Copilot-Harness?"
    answer: "Schon ab dem ersten Bauschritt und nicht erst mit der Veröffentlichung. Jeder Testchat in der Vorschau, jede von der KI geschriebene Anweisung und jeder Evaluationslauf verbraucht Credits."
---

## TL;DR

Der GitHub Copilot Harness ist in Copilot Studio der Standard für neue Agents und Workflows. Copilot Credits fallen beim Erstellen, bei Preview-Tests, Auswertungen und im Betrieb an. Harnesses sind nicht konvertierbar. Die genannte Umstellung bestehender Agents auf Credits zum 1. September 2026 ist inzwischen erfolgt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Standard oder GitHub Copilot Harness vor dem Bau wählen, da Agents nicht konvertierbar sind und eine falsche Wahl einen Neubau erfordert.
- Admins/CoE: Credit-Zuweisungen und Limits je Umgebung setzen, um credit-basierte Agents zu begrenzen; das betrifft jedoch alle so abgerechneten Agents in der Umgebung.
- Leadership/Business: KI-Nutzung im GitHub Copilot Harness für Bau, Tests, Auswertungen und Betrieb budgetieren, nicht erst ab Veröffentlichung.
