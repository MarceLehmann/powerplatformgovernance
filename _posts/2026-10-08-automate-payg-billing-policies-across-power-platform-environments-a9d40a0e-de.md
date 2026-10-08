---
title: PAYG-Abrechnungsrichtlinien in Power Platform automatisiert verwalten
description: Ein PowerShell-Skript weist Umgebungen gesammelt zu. Eine Kette aus Azure
  Budget, Automation und Power Automate trennt Umgebungen bei überschrittenem Schwellenwert.
date: '2026-10-08T16:51:42Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- power-automate
- alm
content_type: curated_summary
curation_id: a9d40a0e6e5f7a4c29d125cc
image:
  path: "/assets/img/curated/a9d40a0e6e5f7a4c29d125cc.png"
  alt: 'Governance-Karte: Automate the billing guardrail before the budget breach
    becomes a surprise.'
permalink: "/de/posts/automate-payg-billing-policies-across-power-platform-environments-a9d40a0e/"
translation_url: "/en/posts/automate-payg-billing-policies-across-power-platform-environments-a9d40a0e/"
source_url: https://microsoft.github.io/mcscatblog/posts/managing-spend-pay-as-you-go/
source_site_url: https://microsoft.github.io/
source_title: 'Herding Clouds: Taming Pay-As-You-Go Billing Policies in Power Platform
  at Scale'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Rahul Ranjit Kannathusseril, Zeki Tekin
source_published_at: '2026-05-13'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie löst bulk-assign-billing-policy.ps1 eine leere EnvironmentID auf?
  answer: Das Skript fragt die Umgebungen im Mandanten ab, ordnet sie anhand des Anzeigenamens
    zu und schreibt ID sowie Ergebnis in die CSV-Statusspalte.
- question: Welche Power-Platform-Umgebungen dürfen PAYG-Abrechnungsrichtlinien verwenden?
  answer: Nur Produktions- und Sandbox-Umgebungen sind dafür berechtigt. Entwickler-,
    Test- und Standardumgebungen werden als nicht unterstützt gekennzeichnet und nicht
    verknüpft.
- question: Wie startet ein Azure Budget die automatische Trennung von Power-Platform-Umgebungen?
  answer: Ein Azure-Budgetalarm ruft ein Automation-Runbook auf. Dieses verwendet
    eine verwaltete Identität für Power Automate, wo die Richtlinie gesucht und ihre
    Umgebungen getrennt werden.
---

## TL;DR

Das Skript bulk-assign-billing-policy.ps1 weist Umgebungen anhand exakter Namen PAYG-Abrechnungsrichtlinien zu, unterstützt -DryRun und schreibt Ergebnisse in eine CSV-Datei. Ein separates Azure Budget mit Automation-Runbook und Power-Automate-Flow kann Umgebungen bei Schwellenüberschreitung automatisch trennen. Azure Cost Management kann Daten jedoch um 8 bis 24 Stunden verzögert liefern.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Verwendet das PowerShell-Skript mit exakten Richtliniennamen, einer Dry-Run-Vorschau und CSV-Statusausgabe, um Zuweisungen skalierbar und nachvollziehbar zu verwalten.
- Security/Compliance: Vergebt der verwalteten Identität des Automation-Kontos die nötigen Power-Platform-Adminrechte und vermeidet gespeicherte Geheimnisse. Prüft zusätzlich die separate Power-Automate-Verbindungsgrenze.
- Leadership/Business: Betrachtet das automatische Trennen als verzögerten Schutz, weil Azure-Cost-Management-Daten 8 bis 24 Stunden hinterherhinken können und schneller Verbrauch das Budget vorher überschreiten kann.
