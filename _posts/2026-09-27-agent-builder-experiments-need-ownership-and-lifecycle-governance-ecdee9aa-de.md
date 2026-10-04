---
title: Agent-Builder-Experimente brauchen Besitzer und Lebenszyklus-Governance
description: Mit Agent Builder lassen sich schnell Experimente erstellen, doch unverwaltete
  Agents erzeugen Inventarprobleme. Agent 365, Graph API und Power Automate unterstützen
  eine schlanke Nachverfolgung.
date: '2026-09-27T05:05:52Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- coe
- copilot-studio
content_type: curated_summary
curation_id: ecdee9aa3975f30a023eae1a
image:
  path: "/assets/img/curated/ecdee9aa3975f30a023eae1a.png"
  alt: 'Governance-Karte: Easy creation still needs an owner and a lifecycle.'
permalink: "/de/posts/agent-builder-experiments-need-ownership-and-lifecycle-governance-ecdee9aa/"
translation_url: "/en/posts/agent-builder-experiments-need-ownership-and-lifecycle-governance-ecdee9aa/"
source_url: https://www.karlex.fi/the-first-experiment-is-cheap-what-building-too-many-agent-builder-agents-teaches-you/
source_site_url: https://www.karlex.fi/
source_title: 'The first experiment is cheap: what building too many Agent Builder
  agents teaches you'
source_name: karlex.fi
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-09-27'
source_type: article
faq:
  - question: "Welche Governance-Lücken zeigten sich nach den vielen Agent-Builder-Experimenten?"
    answer: "Jeder konnte Agenten erstellen, und als sie im Admin Center auftauchten, waren es schon Hunderte. Gelöscht wurde kaum etwas, auch weil die Löschfunktion so versteckt liegt, dass man den Leuten zeigen muss, wo sie ist. Die Folge war ein Inventarproblem. Agent 365 verbesserte später die Sicht darauf, welche Agenten existieren, wie sie geteilt sind, wie viele Personen sie nutzen und wie viele Antworten sie gegeben haben, nicht aber die Antwortqualität."
  - question: "Wie funktioniert der selbst gebaute Governance-Ablauf für Agent-Builder-Agenten?"
    answer: "Die Graph-API erkennt neue Agenten und schreibt sie in eine SharePoint-Liste. Power Automate schickt dem Besitzer eine Teams-Karte mit Fragen: Hast du die Spielregeln gelesen, hast du den Agenten geteilt, wofür dient er? Ein Agent, der 60 Tage ungenutzt bleibt, löst eine weitere Karte aus, mit der der Besitzer ihn löschen oder das Behalten begründen kann."
  - question: "Nach wie vielen Tagen ohne Nutzung werden Agenten im Beispiel gemeldet?"
    answer: "Nach 60 Tagen Inaktivität. Dann erhält der Besitzer eine Karte mit der Wahl, den Agenten zu löschen oder zu begründen, warum er bleiben soll. Der Ablauf zielt nicht aufs Sperren, sondern darauf, Leute mit guten Ideen zu finden und weiterzuführen. Zu grosse Anwendungsfälle werden im Gespräch auf passendere Plattformen gelenkt."
  - question: "Was war für die Qualität der Agenten wichtiger als clevere Anweisungen?"
    answer: "Gutes Wissen. Frühe Agenten mit einem Absatz Anweisungen scheiterten laufend, und die Lösung lag oft im SharePoint-Inhalt statt in der Agentenlogik. Dazu kommt die Grenze von 8000 Zeichen für Anweisungen, bei der acht Rollen in einem Agenten unübersichtlich werden. Ausserdem folgen Agenten nicht automatisch Links, die Menschen selbstverständlich weiterlesen würden."
  - question: "Welche Lizenz braucht der Governance-Ablauf für Agent-Builder-Agenten?"
    answer: "Im Beispiel liefert schon eine einzige Agent-365-Lizenz in der Organisation zusätzlich den Zugriff auf die Graph-API. Auf dieser Basis baute der Referent seinen Ablauf aus Graph-API, einer SharePoint-Liste als minimalem Backend, Power Automate und adaptiven Teams-Karten. Er hielt den Aufbau bewusst klein, damit er sich wegwerfen lässt, sobald Agent 365 aufgeholt hat."
---

## TL;DR

Microsoft 365 Copilot Agent Builder ermöglicht lizenzierten Nutzern die schnelle Erstellung von Agents, doch Hunderte können sich ansammeln, bevor Admins sie sehen. Agent 365 verbessert die Übersicht. Ein Workflow mit Graph API, SharePoint, Power Automate und Teams fragt Besitzer nach Zweck und Freigabe und fordert nach 60 Tagen ohne Nutzung zur Löschung auf.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Gebt jedem Agent einen klaren Zweck, einen Besitzer und einen Freigabekontext und prüft regelmässig seinen Nutzen. Die Quelle betont, dass Agents einen Lebenszyklus haben und Löschen dazugehört.
- Admins/CoE: Erstellt mit Agent 365 oder einer schlanken Kombination aus Graph API, SharePoint, Power Automate und Teams ein Inventar. Fragt Besitzer nach Grundregeln und markiert Agents, die 60 Tage ungenutzt bleiben.
- Leadership/Business: Führt grössere Anwendungsfälle zum passenden Tool, statt Agent Builder über seine Grenzen hinaus einzusetzen. Ein Lösungsberater kann zwischen Microsoft 365, Power Automate, Copilot und Agent-Szenarien unterscheiden.
