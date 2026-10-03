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
    answer: "Der Harness ist die Infrastruktur rund um das KI-Modell, also Werkzeuge, Gedächtnis, Dateihandling und die Schleife, mit der ein Agent selbständig an einer Aufgabe arbeitet, bis sie erledigt ist. Es gibt drei: Copilot Chat, Standard mit Themen und Triggern im klassischen Stil sowie GitHub Copilot, den Standard für neue Agenten seit dem 3. August 2026."
  - question: "Kann ich einen Agenten nach dem Anlegen auf einen anderen Harness umstellen?"
    answer: "Nein, die Wahl ist endgültig. Ein GitHub-Copilot-Agent lässt sich nicht in einen Standard-Agenten umwandeln, und umgekehrt geht es auch nicht. Eine falsche Entscheidung heisst, den Agenten komplett neu zu bauen. Der Autor rät daher, den Harness festzulegen, bevor viel Aufbauarbeit anfällt."
  - question: "Ab wann zählen Credits auf dem GitHub-Copilot-Harness?"
    answer: "Schon ab dem ersten Bauschritt und nicht erst mit der Veröffentlichung. Jeder Testchat in der Vorschau, jede von der KI geschriebene Anweisung und jeder Evaluationslauf verbraucht Credits. Manuelles Konfigurieren und das Bedienen der Oberfläche bleiben kostenlos. Klassische Agenten werden erst bei der Veröffentlichung abgerechnet, das Testen läuft jetzt also auf dem Zähler."
  - question: "Was gilt für Agenten, die vor dem 3. August 2026 erstellt wurden?"
    answer: "Sie behalten ihre bisherige Preisgestaltung bis zum 1. September 2026. Danach laufen alle Agenten über Credits, unabhängig vom Erstellungsdatum, sodass die Kosten ab diesem Stichtag planbar werden. Eine Microsoft-365-Copilot-Lizenz deckt interne Nutzung auf dem Standard-Harness ab, auf dem GitHub-Copilot-Harness aber weder beim Bauen noch im Produktivbetrieb."
  - question: "Was ersetzt die Themen im neuen Copilot Studio?"
    answer: "Skills. Ein Skill besteht aus Name, Beschreibung und Anweisungen in normaler Sprache. Du beschreibst, was der Agent erreichen soll und wann er den Skill einsetzt, und der Agent entscheidet selbst über das Wie, indem er plant, handelt, prüft und weitermacht. Die Oberfläche gliedert sich in die vier Reiter Build, Preview, Evaluate und Monitor."
---

## TL;DR

Der GitHub Copilot Harness ist in Copilot Studio der Standard für neue Agents und Workflows. Copilot Credits fallen beim Erstellen, bei Preview-Tests, Auswertungen und im Betrieb an. Harnesses sind nicht konvertierbar. Die genannte Umstellung bestehender Agents auf Credits zum 1. September 2026 ist inzwischen erfolgt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Standard oder GitHub Copilot Harness vor dem Bau wählen, da Agents nicht konvertierbar sind und eine falsche Wahl einen Neubau erfordert.
- Admins/CoE: Credit-Zuweisungen und Limits je Umgebung setzen, um credit-basierte Agents zu begrenzen; das betrifft jedoch alle so abgerechneten Agents in der Umgebung.
- Leadership/Business: KI-Nutzung im GitHub Copilot Harness für Bau, Tests, Auswertungen und Betrieb budgetieren, nicht erst ab Veröffentlichung.
