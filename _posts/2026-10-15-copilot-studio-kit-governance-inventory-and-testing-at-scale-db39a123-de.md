---
title: 'Copilot Studio Kit: Governance, Inventar und Tests im grossen Massstab'
description: Das Copilot Studio Kit ergänzt die Agentenentwicklung um Umgebungsüberblick,
  automatisierte Tests, Compliance-Richtlinien, Analysen und Governance-Workflows.
date: '2026-10-15T17:01:29Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- compliance
- alm
- environments
- copilot-studio
content_type: curated_summary
curation_id: db39a1237f1eb71407c3941e
image:
  path: "/assets/img/curated/db39a1237f1eb71407c3941e.png"
  alt: 'Governance-Karte: Agent governance needs checks that enforce themselves.'
permalink: "/de/posts/copilot-studio-kit-governance-inventory-and-testing-at-scale-db39a123/"
translation_url: "/en/posts/copilot-studio-kit-governance-inventory-and-testing-at-scale-db39a123/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-kit/
source_site_url: https://microsoft.github.io/
source_title: 'Copilot Studio Kit: Beyond Test Automation'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Petri Simolin
source_published_at: '2026-03-06'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie prüft Agent Review einen Copilot Studio Agenten vor der Bereitstellung?
  answer: Agent Review analysiert Agentenkonfigurationen statisch auf fehlende Elemente,
    uneinheitliche Einstellungen und mögliche Betriebsrisiken vor der Bereitstellung.
- question: Welche Informationen zeigt Agent Inventory für Copilot Studio über Umgebungen
    hinweg?
  answer: Agent Inventory bietet einen mandantenweiten Überblick über Konfigurationen,
    Funktionsnutzung, Lizenzen, Credit-Verbrauch und umgebungsübergreifende Einblicke.
- question: Wie setzt Compliance Hub Governance-Richtlinien für Copilot Studio Agenten
    durch?
  answer: Compliance Hub prüft konfigurierte Schwellenwerte, benachrichtigt Makers,
    startet Behebungs-Workflows und kann Durchsetzungsmassnahmen bei ungelösten Verstössen
    anwenden.
---

## TL;DR

Das Copilot Studio Kit bietet mit Agent Inventory einen mandantenweiten Überblick über Konfiguration, Funktionen, Lizenzen und Credit-Verbrauch. Compliance Hub setzt definierte Governance-Schwellenwerte durch, während Test Automation Mehrfachdialoge, adversariales Testen, Regressionstests und End-to-End-Validierung unterstützt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Agent Review und automatisierte Tests vor der Bereitstellung ausführen, um Konfigurationsprobleme und Regressionen zu erkennen.
- Admins/CoE: Agent Inventory für umgebungsübergreifende Einblicke in Konfigurationen, Funktionen, Lizenzen und Credit-Verbrauch nutzen.
- Security/Compliance: Schwellenwerte und Anforderungen im Compliance Hub festlegen, damit Benachrichtigungen, Behebungs-Workflows oder Durchsetzungsmassnahmen nicht konforme Agenten behandeln.
