---
title: 'Copilot Studio Knowledge Tuning: Wenn sichere Antworten falsch sind'
description: Ein Copilot Studio Agent kann sicher klingen und trotzdem falsch antworten,
  wenn er aus Allgemeinwissen oder einem unbeabsichtigten Dokument schöpft. Wissensquellen
  und eine Einstellung entscheiden.
date: '2026-11-14T10:54:43Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
- security
content_type: curated_summary
curation_id: 91dd214894f1e50b030a300b
image:
  path: "/assets/img/curated/91dd214894f1e50b030a300b.png"
  alt: 'Governance-Karte: A Copilot agent can sound completely sure and still be wrong.
    Confident is not the same as correct.'
permalink: "/de/posts/copilot-studio-knowledge-tuning-stop-confident-wrong-answers-91dd2148/"
translation_url: "/en/posts/copilot-studio-knowledge-tuning-stop-confident-wrong-answers-91dd2148/"
source_url: https://www.spreaker.com/episode/microsoft-copilot-studio-knowledge-tuning-simply-explained--75937322
source_site_url: https://www.spreaker.com/
source_title: Microsoft Copilot Studio Knowledge Tuning - Simply Explained
source_name: M365.FM - Simply Explained
source_language: en
source_language_name: English
source_author: Mirko Peters
source_published_at: '2026-11-14'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Warum klingt mein Copilot Studio Agent so überzeugt und antwortet trotzdem
    falsch?
  answer: Weil die Antwort aus der falschen Quelle kommt, aus Allgemeinwissen statt
    aus deinen Dokumenten, oder aus einer Datei, die nie als Quelle gedacht war. Sicherheit
    allein beweist nichts.
- question: Wie verhindere ich, dass mein Copilot Studio Agent einfach raten kann?
  answer: Indem du die eine Einstellung steuerst, die festlegt, ob der Agent raten
    darf. Richte sie so ein, dass Antworten nur aus verbundenen Wissensquellen kommen.
- question: Was passiert mit meinen Dateien, wenn ich sie als Wissen in Copilot Studio
    hinterlege?
  answer: Der Agent durchsucht die verbundenen Quellen und macht aus dem Dateiinhalt
    Antworten. Die gewählten Quellen bestimmen daher, was der Agent beantworten kann.
animation:
  video: /assets/img/animations/91dd214894f1e50b030a300b-de.mp4
  poster: /assets/img/animations/91dd214894f1e50b030a300b-de.poster.webp
  width: 800
  height: 450
  alt: "Drei Schritte zeigen das Knowledge Tuning in Copilot Studio: festlegen, welche Quellen der Agent durchsuchen darf, Dateien als Wissensquelle nutzen und die Einstellung zum Raten steuern."
---

## TL;DR

Ein Copilot Studio Agent kann sehr sicher klingen und trotzdem falsch antworten, weil er aus seinem Allgemeinwissen oder aus einem ungeeigneten Dokument schöpft. Knowledge Tuning bedeutet festzulegen, welche Quellen der Agent durchsucht, wie Dateien zu Antworten werden und die eine Einstellung zu kontrollieren, die entscheidet, ob der Agent raten darf. Manche Fehlerquellen und Grenzen bleiben auch bei gutem Design bestehen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: Prüfe, welche Wissensquellen dein Agent tatsächlich durchsucht, und steuere die eine Einstellung, die entscheidet, ob er raten darf, denn auch eine sichere Antwort kann aus dem Allgemeinwissen stammen.
- Admins/CoE: Behandelt Agenten ohne getunte Wissensbasis als Betriebsrisiko, denn eine überzeugende falsche Antwort aus Allgemeinwissen oder einer unbeabsichtigten Datei bleibt unbemerkt.
- Security/Compliance: Legt fest, welche Quellen jeder Agent durchsuchen darf, damit Dokumente, die nie einbezogen werden sollten, nicht in Antworten landen.
