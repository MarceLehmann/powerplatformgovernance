---
title: Dynamische Wissens-URLs für gezielte Copilot Studio Agenten
description: Variablen in Copilot Studio wählen Wissens-URLs nach Produkt, Region,
  Sprache oder Umgebung und reduzieren Quellenvielfalt sowie ALM-Aufwand.
date: '2026-10-17T17:03:22Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- alm
- environments
- governance
content_type: curated_summary
curation_id: 5e6685c0e510fef814667566
image:
  path: "/assets/img/curated/5e6685c0e510fef814667566.png"
  alt: 'Governance-Karte: One variable keeps agent knowledge on the right path. Broad
    grounding creates noise, latency, and maintenance.'
permalink: "/de/posts/use-dynamic-knowledge-urls-to-scope-copilot-studio-agents-5e6685c0/"
translation_url: "/en/posts/use-dynamic-knowledge-urls-to-scope-copilot-studio-agents-5e6685c0/"
source_url: https://microsoft.github.io/mcscatblog/posts/dynamic-knowledge-urls-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'Zero Noise, Maximum Relevance: Dynamic Knowledge URLs in Copilot Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Doug Bellingeri
source_published_at: '2026-02-11'
source_updated_at: '2026-03-10'
source_type: article
faq:
- question: Wie funktionieren dynamische Wissens-URL-Variablen in Copilot Studio?
  answer: Copilot Studio löst die Variable beim Aufruf des Wissens zur Laufzeit auf
    und begrenzt die Grounding-Suche, bis sich die Variable ändert oder die Unterhaltung
    zurückgesetzt wird.
- question: Können Umgebungsvariablen in Copilot Studio nach einer Bereitstellung
    eine andere Wissenswebsite auswählen?
  answer: Ja. Eine Textumgebungsvariable kann die Website-URL enthalten und nach der
    Lösungsbereitstellung in der Zielumgebung angepasst werden.
- question: Welche SharePoint-Wissensmethode unterstützt dynamische URL-Variablen
    in Copilot Studio?
  answer: Die SharePoint-Methode Connector Powered by Work IQ unterstützt Variablen.
    Upload File und Dataverse-Synchronisierung unterstützen diese Funktion nicht.
---

## TL;DR

Copilot Studio kann eine Variable in eine URL für öffentliche Websites oder SharePoint über Connector Powered by Work IQ einsetzen. Die Variable kommt etwa aus Topic-Eingaben, der Benutzersprache oder Umgebungsvariablen und wird zur Laufzeit aufgelöst. Die Begrenzung der öffentlichen Website auf zwei Ebenen bleibt bestehen. Upload File und Dataverse-Synchronisierung unterstützen Variablen nicht.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Verwendet eine globale Zeichenfolgenvariable, Topic-Eingaben und eine Produktpfad-Tabelle, wenn der Agent fokussiertes Wissen auswählen soll, ohne viele Quellen zu pflegen.
- Admins/CoE: Speichert umgebungsspezifische Website-URLs in Lösungsumgebungsvariablen, damit dieselbe Agentenkonfiguration über mehrere Umgebungen eingesetzt werden kann.
- Security/Compliance: Prüft den URL-Bereich, weil eine zu breite Grounding-Suche irrelevante Inhalte einbeziehen kann. Regionszuordnungen können ausserdem zu länder- oder regulatorisch passenden Seiten führen.
