---
title: Microsoft Foundry Agenten sicher mit Copilot Studio verbinden
description: Eine praktische Demo zeigt die Verbindung von Azure AI Foundry Agenten
  mit Copilot Studio über Microsoft Entra ID und nachvollziehbare Aufrufe.
date: '2026-10-21T17:09:20Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- copilot-studio
content_type: curated_summary
curation_id: c300889910a697c434c2f9f3
image:
  path: "/assets/img/curated/c300889910a697c434c2f9f3.png"
  alt: 'Governance-Karte: Connect external agents through Entra ID and inspect the
    trace.'
permalink: "/de/posts/connect-microsoft-foundry-agents-securely-in-copilot-studio-c3008899/"
translation_url: "/en/posts/connect-microsoft-foundry-agents-securely-in-copilot-studio-c3008899/"
source_url: https://microsoft.github.io/mcscatblog/posts/connect-foundry-agents-in-copilotstudio/
source_site_url: https://microsoft.github.io/
source_title: 'Video Demo: Connect a Microsoft Foundry agent in Copilot Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Jay Padimiti
source_published_at: '2025-12-16'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie verbinde ich einen Azure AI Foundry Agenten mit Copilot Studio?
  answer: Wähle Connect to an external agent und Microsoft Foundry, melde dich über
    Entra ID an und trage die Foundry-Endpunkt-URL ein.
- question: Wie wählt Copilot Studio bei verbundenen Agenten den passenden Agenten
    aus?
  answer: Copilot Studio nutzt die Metadaten des Agenten und leitet Fachfragen ohne
    eigene Routing-Logik an den passenden Agenten weiter.
- question: Welche Informationen zeigt die Foundry-Traceansicht bei einem Copilot-Aufruf?
  answer: Sie zeigt empfangene Eingaben, erzeugte Ausgaben, Gesprächs- oder Korrelations-IDs
    und Abschlusszeitpunkte zur Fehlersuche.
animation:
  video: /assets/img/animations/c300889910a697c434c2f9f3-de.mp4
  poster: /assets/img/animations/c300889910a697c434c2f9f3-de.poster.webp
  width: 800
  height: 450
  alt: "Eine Abfolge mit vier Schritten zeigt, wie ein Azure AI Foundry Agent in Copilot Studio verbunden wird: externen Agenten waehlen, Microsoft Foundry auswaehlen, mit Entra ID anmelden und den Endpunkt senden, danach Trace-Details pruefen."
---

## TL;DR

Copilot Studio verbindet einen Azure AI Foundry Agenten über Agentenname und Endpunkt-URL. Dazu wird Connect to an external agent mit Microsoft Foundry gewählt, die Anmeldung über Microsoft Entra ID durchgeführt und der Endpunkt eingetragen. Foundry zeigt danach Eingaben, Ausgaben, IDs und Abschlusszeitpunkte im Trace.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt verbundene Agenten, wenn ein einzelner Agent schwer wartbar wird, damit Fachagenten klar abgegrenzte Aufgaben übernehmen.
- Admins/CoE: Erfasst den Foundry Agentennamen und Endpunkt und richtet die externe Verbindung über Microsoft Entra ID ein.
- Security/Compliance: Prüft die authentifizierte Kommunikation zwischen Agenten sowie Foundry-Trace-Daten wie Eingaben, Ausgaben, Korrelations-IDs und Zeitstempel.
