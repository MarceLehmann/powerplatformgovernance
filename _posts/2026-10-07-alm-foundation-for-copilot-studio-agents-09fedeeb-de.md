---
title: ALM-Grundlage für Copilot Studio Agents
description: Umgebungen, Lösungen, Herausgeber, Pipelines, Konfiguration und Evaluierungen
  ermöglichen sichere Bereitstellungen von Copilot Studio Agents bis in die Produktion.
date: '2026-10-07T17:03:57Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- copilot-studio
- environments
- ownership
content_type: curated_summary
curation_id: '09fedeebbd585d5ecfe4664a'
image:
  path: "/assets/img/curated/09fedeebbd585d5ecfe4664a.png"
  alt: 'Governance-Karte: Move agents through Dev, Test, and Production. Keep production
    stable with managed solutions and pipelines.'
permalink: "/de/posts/alm-foundation-for-copilot-studio-agents-09fedeeb/"
translation_url: "/en/posts/alm-foundation-for-copilot-studio-agents-09fedeeb/"
source_url: https://microsoft.github.io/mcscatblog/posts/alm-copilot-studio-agents-foundation/
source_site_url: https://microsoft.github.io/
source_title: 'ALM for Copilot Studio Agents: The Foundation'
source_name: Microsoft Copilot Studio CAT
source_language: en
source_language_name: English
source_author: James Papadimitriou
source_published_at: '2026-06-03'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie werden Copilot Studio Agents zwischen Entwicklung, Test und Produktion
    verschoben?
  answer: Verwenden Sie verwaltete Lösungen und eine Power Platform Pipeline, um dasselbe
    Artefakt von der Entwicklung über den Test in die Produktion zu bringen.
- question: Was bewirkt die Einstellung zum Blockieren nicht verwalteter Anpassungen
    in Power Platform Umgebungen?
  answer: Sie hilft, lokale Änderungen an verwalteten Komponenten in Test und Produktion
    zu verhindern und überschreibbare Abweichungen zu reduzieren.
- question: Wo sollen API-Schlüssel und Token für Copilot Studio Agents gespeichert
    werden?
  answer: Speichern Sie Geheimnisse in Azure Key Vault und referenzieren Sie sie über
    geheime Umgebungsvariablen, sodass eine Schlüsselrotation ohne erneute Bereitstellung
    möglich ist.
---

## TL;DR

Copilot Studio Agents sollten über verwaltete Lösungen und Power Platform Pipelines von Entwicklung über Test bis Produktion gelangen. Erstellen Sie zuerst einen benutzerdefinierten Herausgeber, bündeln Sie alle Komponenten in einer bevorzugten Lösung, speichern Sie umgebungsspezifische Werte in Umgebungsvariablen, schützen Sie Geheimnisse mit Azure Key Vault und führen Sie Evaluierungen vor und nach der Bereitstellung aus.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erstellen Sie Herausgeber und bevorzugte Lösung vor den Agent-Komponenten, damit diese einen bewussten Präfix erhalten und bereitstellbar bleiben.
- Admins/CoE: Trennen Sie Entwicklung, Test und Produktion, richten Sie Power Platform Pipelines ein und blockieren Sie nicht verwaltete Anpassungen in Test und Produktion.
- Security/Compliance: Speichern Sie Zugangsdaten in Azure Key Vault und verwenden Sie geheime Umgebungsvariablen, weil Pipelines nur Referenzen je Umgebung zuordnen.
- Leadership/Business: Verlangen Sie Evaluierungen vor dem Export und nach dem Import, damit Bereitstellung und Agent-Verhalten geprüft werden.
