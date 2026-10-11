---
title: Legacy-Desktop-Apps mit RPA und CUA an Copilot Studio anbinden
description: Der Beitrag vergleicht Power Automate RPA mit Computer Use Agents und
  zeigt Dataverse-Abruf, Maschinenkonfiguration, Umgebungsanforderungen und Vorschau-Risiken.
date: '2026-10-11T16:55:45Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- power-automate
- environments
- security
- dataverse
content_type: curated_summary
curation_id: 3413ed85bc9da811e13ca849
image:
  path: "/assets/img/curated/3413ed85bc9da811e13ca849.png"
  alt: 'Governance-Karte: Computer Use changes the machine pool. Check every desktop
    flow before enabling it.'
permalink: "/de/posts/connecting-legacy-desktop-apps-to-copilot-studio-with-rpa-and-cua-3413ed85/"
translation_url: "/en/posts/connecting-legacy-desktop-apps-to-copilot-studio-with-rpa-and-cua-3413ed85/"
source_url: https://microsoft.github.io/mcscatblog/posts/connecting-legacy-desktop-apps-to-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'Bridging the Gap: Connecting Legacy Desktop Applications to Copilot
  Studio Agents'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: James Papadimitriou
source_published_at: '2026-04-15'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Was passiert, wenn eine Power-Automate-Maschine für Computer Use aktiviert
    wird?
  answer: Die Maschine wird aus Standardverbindungen für Desktop-Flows entfernt. Bestehende
    Verbindungen, die an diese Maschine gebunden sind, werden dadurch unterbrochen.
- question: Welche Power-Platform-Umgebung benötigt Copilot Studio Computer Use?
  answer: Computer Use benötigt derzeit eine US-basierte Power-Platform-Umgebung.
    Zusätzlich muss die Zielmaschine über die Power-Automate-Machine-Runtime registriert
    sein.
- question: Ist Copilot Studio Computer Use für geschäftskritische Produktionssysteme
    geeignet?
  answer: Nein. Computer Use befindet sich in der Vorschau, bietet keine SLA-Zusagen
    und wird nicht für geschäftskritische Produktionslasten empfohlen.
---

## TL;DR

Copilot Studio kann Daten aus Legacy-Desktop-Apps über einen geplanten Cloud-Flow, einen Power-Automate-Desktop-Flow und eine eigene Dataverse-Tabelle nutzen. Computer Use Agents ermöglichen dagegen direkte, bildbasierte Interaktion. Dafür sind eine US-basierte Power-Platform-Umgebung, eine konfigurierte Maschine und ein eigenes Konto nötig. Das Aktivieren von Computer Use entfernt die Maschine aus Standardverbindungen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt deterministisches RPA für stabile, umfangreiche oder geschäftskritische Oberflächen. Setzt Computer Use ein, wenn sich Bildschirme ändern oder visuelle Entscheidungen nötig sind.
- Admins/CoE: Prüft die US-basierte Umgebung, registriert die Maschine, aktiviert Computer Use in den Power-Automate-Einstellungen und kontrolliert vorher bestehende Verbindungen.
- Security/Compliance: Verwendet ein eigenes Computer-Use-Konto und berücksichtigt Vorschau-Status, fehlende SLA-Zusagen und unterbrochene Maschinenverbindungen als Bereitstellungsrisiken.
