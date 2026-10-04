---
title: Copilot-Studio-Agenten vor der Freigabe mit Agent Review prüfen
description: Agent Review Tool prüft Befunde, Skill-Qualität, Evaluationsabdeckung
  und Konfigurationsbeziehungen vor der Freigabe eines Copilot-Studio-Agenten.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
content_type: curated_summary
curation_id: 3544e541766d31b93320ee59
permalink: "/de/posts/review-copilot-studio-agents-before-release-with-agent-review-tool-3544e541/"
translation_url: "/en/posts/review-copilot-studio-agents-before-release-with-agent-review-tool-3544e541/"
source_url: https://microsoft.github.io/mcscatblog/posts/agent-review-tool/
source_site_url: https://microsoft.github.io/
source_title: 'Review Before Release: Using Agent Review Tool for Copilot Studio Agents'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Ramakrishnan Raman
source_published_at: '2026-08-18'
faq:
  - question: "Was ist das Agent Review Tool und wo bekommt man es?"
    answer: "Es ist ein Prüfwerkzeug für Copilot-Studio-Agenten vor der Veröffentlichung und Teil des Copilot Agent Kit. Es ist über den Microsoft Marketplace verfügbar. Zum Zeitpunkt des Beitrags vom 18. August 2026 war es eine Preview. Der Arbeitsbereich besteht aus drei Bereichen: Review, Agent map sowie Cost and efficiency."
  - question: "Nach welchen vier Kriterien bewertet das Tool die Qualität von Anweisungen?"
    answer: "Die Bewertung der Anweisungen folgt vier Dimensionen: Clarity, Actionability, Scope discipline und Composability. Im Kontext des GitHub-Copilot-Harness ergänzt der Beitrag, dass sich ein Skill von allen Alternativen unterscheiden muss, damit der Agent ihn zuverlässig auswählt. Der Beitrag führt die vier Dimensionen an einem fiktiven Einzelhandels-Agenten vor und zeigt, wie sich die Befunde nach einer Überarbeitung ändern."
  - question: "Wie veränderten sich die Ergebnisse im Beispiel nach der Überarbeitung?"
    answer: "Der fiktive ZAVA Visual Merchandiser startete mit 63 Prozent, 39 von 54 bestandenen Prüfungen, 8 Fehlern und 7 Warnungen. Nach der Überarbeitung waren es 67 Prozent, 51 von 54 Prüfungen, keine Fehler und 2 Warnungen. Die durchschnittliche Skill-Qualität stieg von 64 auf 90 Prozent. Die Evaluationsabdeckung blieb bei 0 von 7."
  - question: "Wie entsteht der Score und welche Rolle spielt KI dabei?"
    answer: "Die Punktzahl beruht auf regelbasierten Säulen für Evaluationsreife und Anweisungen, sie ist also deterministisch. Die Säule Evaluation geht mit einem festen Gewicht von 30 Prozent in die Punktzahl ein. KI-gestützte Befunde erscheinen nur als ergänzende Belege und verändern die deterministischen Werte nicht."
  - question: "Was zeigt die Agent-Karte und welchen Fehler fand das Tool im Beispiel?"
    answer: "Die Agent map zeigt die geprüfte Konfiguration als Karte oder Liste von Skills, Tools, Wissensquellen und weiteren Komponenten, ohne zu belegen, dass etwas ausgeführt wurde. Im Beispiel nannte der Skill display-audit zwei Fähigkeiten, Merchandising Scorecard und Regional Escalation Agent, die der Agent nicht konfiguriert hatte. Der Autor schrieb den Skill so um, dass er nur konfigurierte Fähigkeiten verwendet."
---
## TL;DR

Agent Review Tool im Copilot Agent Kit verbindet deterministische Prüfungen mit KI-gestützter Analyse von Befunden, Skill-Qualität, Evaluationsabdeckung und Agentenarchitektur. Eine Baseline festhalten, Befunde nach Schweregrad und Skill untersuchen, verbundene Fähigkeiten in Agent map prüfen, gezielt ändern und erneut bewerten. Im ZAVA-Beispiel stieg das Ergebnis von 63 % und 39/54 bestandenen Prüfungen auf 67 % und 51/54; die Abdeckung blieb 0/7.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: die einen Agenten bauen oder korrigieren, sollten dem tatsächlichen Workflow des Tools folgen — Baseline festhalten, nach Schweregrad und Skill untersuchen, verbundene Fähigkeiten in Agent map prüfen, eine gezielte Korrektur vornehmen und dann neu bewerten — statt direkt auf die Prozentzahl zu optimieren.
- Leadership/Business: eine verbesserte Punktzahl allein nicht als Beleg für Produktionsreife werten — im ZAVA-Beispiel stieg die Quote bestandener Prüfungen von 39/54 auf 51/54, während die Evaluationsabdeckung bei 0/7 blieb, das Laufzeitverhalten wurde also nie tatsächlich geprüft.
- Admins/CoE: jeden Agent-Review-Wert als Triage-Eingabe für Freigabeentscheidungen behandeln, nicht als Zertifizierung, denn das Tool findet Konfigurationsprobleme, beweist aber keinen korrekten Aufruf in Produktion.
