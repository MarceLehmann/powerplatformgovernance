---
title: Copilot Studio Agenten mit automatisierten Azure DevOps Tests absichern
description: Die Copilot Studio Evaluation API testet Entwurfsagenten aus dem Quellcode
  und blockiert Pull Requests, wenn die Qualität unter den Schwellenwert fällt.
date: '2026-10-10T16:54:16Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- copilot-studio
- dataverse
- environments
content_type: curated_summary
curation_id: eca764107e31cbaa07a73d51
image:
  path: "/assets/img/curated/eca764107e31cbaa07a73d51.png"
  alt: 'Governance-Karte: Test draft agents before merge. Block the PR when quality
    falls below threshold.'
permalink: "/de/posts/gate-copilot-studio-agent-merges-with-automated-azure-devops-eca76410/"
translation_url: "/en/posts/gate-copilot-studio-agent-merges-with-automated-azure-devops-eca76410/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-eval-gate-azure-devops/
source_site_url: https://microsoft.github.io/
source_title: 'Quality Gates for Copilot Studio: Automated Evaluations in Azure DevOps'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-04-19'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie testet die Copilot Studio Evaluation API Entwurfsagenten in Azure
    DevOps?
  answer: Die Evaluation API startet Läufe gegen Entwurfsagenten, überwacht deren
    Abschluss und liefert Metrikergebnisse für jeden Testfall zurück.
- question: Was packt EvalGateADO vor dem Test eines Copilot Studio Agenten?
  answer: EvalGateADO packt den src Ordner des PR Branches als nicht verwaltete Lösung
    und importiert ihn anschliessend in eine eigene CI Dev Umgebung.
- question: Wie blockiert Azure DevOps einen Copilot Studio Pull Request bei fehlgeschlagenen
    Tests?
  answer: Die Pipeline vergleicht bestandene Tests mit einem konfigurierbaren Schwellenwert
    und schlägt fehl, wenn die Erfolgsquote darunter liegt, wodurch der Merge blockiert
    wird.
animation:
  src: /assets/img/animations/eca764107e31cbaa07a73d51-de.gif
  poster: /assets/img/animations/eca764107e31cbaa07a73d51-de.poster.png
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt, wie EvalGateADO den PR Quellcode mit pac packt, in eine eigene CI Umgebung importiert, den Entwurfsagenten mit der Evaluation API prueft und den Azure DevOps Merge bei verfehltem Schwellenwert blockiert."
---

## TL;DR

Die Copilot Studio Evaluation API führt Tests gegen Entwurfsagenten aus und liefert Ergebnisse pro Metrik. Die EvalGateADO Pipeline packt den PR Quellcode mit pac, importiert ihn in eine eigene CI Umgebung, prüft den Entwurf und blockiert den Azure DevOps Merge bei unterschrittener konfigurierbarer Erfolgsquote.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Committen Sie Agent Quellcode und Testsets mit jeder Änderung, weil die Pipeline den PR Stand statt nicht gespeicherter Sandbox Änderungen prüft.
- Admins/CoE: Stellen Sie eine eigene CI Umgebung bereit und konfigurieren Sie den Import, damit Tests immer gegen ein konsistentes Laufzeitziel laufen.
- Security/Compliance: Schützen Sie das delegierte Authentifizierungs Refresh Token in Key Vault und beachten Sie den Ablauf nach Inaktivität, weil die Evaluation API keinen App only Pfad bietet.
- Leadership/Business: Verlangen Sie das Evaluations Gate vor dem Merge, damit Qualitätsfehler während der Prüfung statt nach der Veröffentlichung erkannt werden.
