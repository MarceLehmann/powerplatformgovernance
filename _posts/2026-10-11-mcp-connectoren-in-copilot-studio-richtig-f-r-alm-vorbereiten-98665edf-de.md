---
title: MCP-Connectoren in Copilot Studio für ALM und Umgebungen vorbereiten
description: Beim Hinzufügen eines MCP-Servers erstellt Copilot Studio einen benutzerdefinierten
  Connector und eine Verbindungsreferenz. Die Laufzeitverbindung muss in jeder Zielumgebung
  separat erstellt werden.
date: '2026-10-11T16:55:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- alm
- environments
- dlp
content_type: curated_summary
curation_id: 98665edf6a6340f68d73d168
image:
  path: "/assets/img/curated/98665edf6a6340f68d73d168.png"
  alt: 'Governance-Karte: A connector is not a connection. Separate the solution components
    before moving agents across environments.'
permalink: "/de/posts/mcp-connectoren-in-copilot-studio-richtig-f-r-alm-vorbereiten-98665edf/"
translation_url: "/en/posts/mcp-connectoren-in-copilot-studio-richtig-f-r-alm-vorbereiten-98665edf/"
source_url: https://microsoft.github.io/mcscatblog/posts/hello-world-mcp-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Five Minutes to Your First MCP Connector in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Chris Garty
source_published_at: '2026-04-10'
source_updated_at: '2026-08-05'
source_type: article
faq:
- question: Was erstellt Copilot Studio beim Hinzufügen eines MCP-Servers?
  answer: Copilot Studio erstellt einen benutzerdefinierten Connector mit der OpenAPI-Aktion
    InvokeServer sowie eine Verbindungsreferenz.
- question: Was passiert mit einer MCP-Verbindung beim Import in eine andere Power-Platform-Umgebung?
  answer: Die Verbindungsreferenz wird mit der Lösung übertragen, die tatsächliche
    Verbindung jedoch nicht. Sie muss in der Zielumgebung erstellt werden.
- question: Warum muss ein MCP-Connector vor dem Wechsel der Umgebung in eine eigene
    Lösung?
  answer: Für den Wechsel zwischen Umgebungen müssen benutzerdefinierte Connectoren
    in einer eigenen Lösung liegen, obwohl der Assistent sie zunächst der Agentenlösung
    hinzufügt.
---

## TL;DR

Copilot Studio erstellt beim Hinzufügen eines MCP-Servers einen benutzerdefinierten Connector mit der OpenAPI-Aktion InvokeServer, eine Verbindungsreferenz und eine umgebungsspezifische Verbindung. Connector und Referenz werden mit der Lösung exportiert, die Verbindung jedoch nicht. Für den Einsatz in einer anderen Umgebung muss der Connector in eine eigene Lösung verschoben werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Prüft Connector, Verbindungsreferenz und Verbindung getrennt, damit Agenten in Zielumgebungen korrekt verbunden werden.
- Admins/CoE: Plant beim Import oder bei Pipelines die Erstellung der Verbindung in der Zielumgebung ein, weil sie nicht Teil der Lösung ist.
- Security/Compliance: Bewertet MCP-Connectoren mit den vorhandenen DLP-Kontrollen, einschliesslich der Endpoint-Filterung für benutzerdefinierte Connectoren.
