---
title: Power-Platform-Bereitstellungen auf verwaltete Lösungen umstellen
description: Anleitung zur Umstellung bestehender nicht verwalteter Lösungen über
  Benutzeroberfläche, PAC, Azure DevOps oder GitHub Actions.
date: '2026-09-24T01:48:20Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- environments
- ownership
content_type: curated_summary
curation_id: d19b662df10e48dd16a2d871
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-48.png
  alt: Governance-Karte zur Umstellung von nicht verwalteten auf verwaltete Lösungen.
permalink: "/de/posts/move-power-platform-deployments-from-unmanaged-to-managed-solutions-d19b662d/"
translation_url: "/en/posts/move-power-platform-deployments-from-unmanaged-to-managed-solutions-d19b662d/"
source_url: https://benediktbergmann.eu/2025/02/04/move-to-managed-solutions/
source_site_url: https://benediktbergmann.eu/
source_title: Move to managed solutions
source_name: Benedikt's Power Platform Blog
source_language: en
source_language_name: English
source_author: Benedikt Bergmann
source_published_at: '2025-02-04'
source_updated_at: '2025-02-04'
faq:
  - question: "Wie wandle ich eine unmanaged Lösung in einer Zielumgebung in eine managed Lösung um?"
    answer: "Du installierst dieselben Komponenten erneut als managed Lösung, dabei schaltet das System sie von unmanaged auf managed um."
  - question: "Welche Fehlermeldung kommt, wenn die unmanaged Lösung noch installiert ist?"
    answer: "Die Meldung besagt, dass die Lösung bereits unmanaged installiert ist und das Paket sie managed installieren will. Deinstalliere zuerst die unmanaged Lösung und importiere danach die managed Version."
  - question: "Mit welchem Parameter erzwinge ich die Umwandlung in managed beim Import per PAC, GitHub oder Azure DevOps?"
    answer: "Bei der Power Platform CLI nutzt du das Flag convert-to-managed mit zwei Bindestrichen beim Import. In GitHub Actions heisst der Parameter convert-to-managed, in Azure DevOps ConvertToManaged."
---
## TL;DR

Verwende verwaltete Lösungen in jeder Power-Platform-Umgebung ausser der Entwicklungsumgebung. Deinstalliere bei einer bestehenden nicht verwalteten Lösung zuerst dieselbe Lösung und importiere sie danach verwaltet, oder importiere dieselben Komponenten als verwaltet. Die Benutzeroberfläche konvertiert automatisch; PAC nutzt --convert-to-managed, GitHub Actions und Azure DevOps verwenden convert-to-managed beziehungsweise ConvertToManaged. Lösungsüberlagerung und Herausgeberkonsistenz beeinflussen das Ergebnis.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: verwaltete Lösungen für jede nachgelagerte Umgebung standardisieren, Herausgeberkonsistenz prüfen und die Komponentenüberlagerung testen, bevor sie einem Konvertierungstool vertrauen. Wer GitHub-Actions- oder Azure-DevOps-Pipelines betreibt, sollte prüfen, ob convert-to-managed in der aktuellen Tool-Version bereits Standard ist, denn ein jetzt überflüssiges oder ein fehlendes, nun erforderliches Flag kann das Pipeline-Verhalten unbemerkt ändern.
- Maker: behalten ihre nicht verwaltete Entwicklungsumgebung unangetastet — diese Umstellung betrifft nie den Ort, an dem aktiv angepasst wird.
