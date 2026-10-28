---
title: Benutzerdefinierte Wissensquellen mit Copilot Studio verbinden
description: Der Trigger OnKnowledgeRequested ruft eine Suchschnittstelle auf, formt
  deren Ergebnisse um und stellt Copilot Studio verwertbare Wissensauszüge bereit.
date: '2026-10-28T17:03:12Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
content_type: curated_summary
curation_id: 1d40539e59571a0fded3e376
image:
  path: "/assets/img/curated/1d40539e59571a0fded3e376.png"
  alt: 'Governance-Karte: Custom knowledge needs a contract. Return the right fields,
    then keep the total to 15 snippets.'
permalink: "/de/posts/connect-custom-knowledge-sources-to-copilot-studio-1d40539e/"
translation_url: "/en/posts/connect-custom-knowledge-sources-to-copilot-studio-1d40539e/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-custom-knowledge-source/
source_site_url: https://microsoft.github.io/
source_title: Connecting to Custom Knowledge Sources in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-09-24'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie erstelle ich ein OnKnowledgeRequested-Thema in Copilot Studio?
  answer: Erstelle ein Thema, wechsle in die Codeansicht und definiere den Trigger
    OnKnowledgeRequested in YAML. Laut Quelle gab es im September 2025 noch keine
    Designerunterstützung.
- question: Welche Copilot-Studio-Variablen braucht eine benutzerdefinierte Suchschnittstelle?
  answer: System.SearchQuery liefert eine semantisch umgeschriebene Anfrage, System.KeywordSearchQuery
    eine Schlüsselwortanfrage und System.SearchResults speichert formatierte Ergebnisse.
- question: Wie viele Wissensauszüge kann Copilot Studio aus benutzerdefinierten Quellen
    verwenden?
  answer: Copilot Studio verwendet höchstens 15 Auszüge über alle Wissensthemen zusammen.
    Die stärksten Ergebnisse sollten vor der Zuweisung an System.SearchResults sortiert
    werden.
animation:
  src: /assets/img/animations/1d40539e59571a0fded3e376-de.gif
  poster: /assets/img/animations/1d40539e59571a0fded3e376-de.poster.png
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt: Thema in Copilot Studio in der Codeansicht erstellen, den Trigger OnKnowledgeRequested in YAML definieren, eine Suchschnittstelle aufrufen und Ergebnisse in System.SearchResults abbilden."
---

## TL;DR

Benutzerdefinierte Wissensthemen in Copilot Studio verwenden den Trigger OnKnowledgeRequested, der laut Quelle im September 2025 nur in der YAML-Codeansicht konfiguriert werden konnte. System.SearchQuery und System.KeywordSearchQuery liefern umgeschriebene Suchanfragen. System.SearchResults erwartet Content, ContentLocation und Title. Insgesamt werden höchstens 15 Auszüge genutzt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Das OnKnowledgeRequested-Thema in der Codeansicht anlegen, die Suchschnittstelle aufrufen und API-Felder in das erforderliche Ergebnisformat abbilden.
- Admins/CoE: Die gemeinsame Grenze von 15 Auszügen über alle Wissensthemen hinweg berücksichtigen und Relevanzsortierung oder Antwortbegrenzungen verlangen.
