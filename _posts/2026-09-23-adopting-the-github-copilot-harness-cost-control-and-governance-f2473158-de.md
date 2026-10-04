---
title: 'GitHub-Copilot-Harness einführen: Kostenkontrolle und Governance'
description: Wie man GitHub-Copilot-Harness-Agents im Tenant findet und ihren Copilot-Credit-Verbrauch
  auf Umgebungs- und Agent-Ebene deckelt.
date: '2026-09-23T23:53:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- copilot-studio
content_type: curated_summary
curation_id: f247315811797320ffc7f424
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-44.png
  alt: Governance-Karte zur Kostenkontrolle von Copilot-Agent-Credits.
permalink: "/de/posts/adopting-the-github-copilot-harness-cost-control-and-governance-f2473158/"
translation_url: "/en/posts/adopting-the-github-copilot-harness-cost-control-and-governance-f2473158/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-harness-cost-governance/
source_site_url: https://microsoft.github.io/
source_title: 'Adopting the GitHub Copilot Harness: Cost Control and Governance in
  Copilot Studio'
source_name: The Custom Engine
source_author: Lewis Baybutt
source_language: en
source_language_name: English
source_published_at: '2026-08-07'
source_updated_at: '2026-08-13'
faq:
  - question: "Warum verbrauchen Agenten mit GitHub-Copilot-Harness schon beim Bauen Credits?"
    answer: "Makers können Copilot Credits schon beim Erstellen, Testen in der Vorschau und Auswerten verbrauchen, noch bevor ein Agent einen formalen Produktivbetrieb erreicht. Dadurch verschiebt sich der Zeitpunkt der Kostenkontrolle nach vorn."
  - question: "Wie finde ich alle Harness-Agenten in meinem Tenant?"
    answer: "Frage das Power Platform Inventory API per POST ab, filtere den Ressourcentyp der Copilot-Studio-Agenten und setze die Eigenschaft isCLIAgent auf wahr."
  - question: "Was bedeuten die vier Durchsetzungsregeln für Credit-Zuteilungen?"
    answer: "Alert warnt Administratoren bei nahendem Limit, TenantPool erlaubt einer Umgebung nicht zugeteilte Kapazität aus dem Pool, PayGo aktiviert Abrechnung nach Verbrauch über freigegebene Azure-Abonnements, und Deny stoppt den Verbrauch bei erschöpfter Kapazität."
---
## TL;DR

GitHub-Copilot-Harness-Agents greifen auf denselben Copilot-Credit-Pool wie normale Agents zu, fallen bei einem Audit aber leicht durchs Raster — auffindbar über die isCLIAgent-Eigenschaft im Power-Platform-Inventory. Danach Maker-Entwicklungsumgebungen von finanzierten Produktivumgebungen trennen: Auf Umgebungsebene (Admin Center > Copilot Studio > Manage Copilot Credits) werden Zuteilung, Tenant-Pool-Zugriff und Pay-as-you-go geregelt; Agent-Limits können z. B. bei 1'000 Credits mit 80-%-Warnung greifen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: die isCLIAgent-Inventarprüfung jetzt durchführen — Harness-Agents greifen auf denselben Credit-Pool zu wie normale Agents, tauchen in einem gewöhnlichen Agent-Audit aber nicht auf.
- Security/Compliance: genau diese Prüflücke als Befund werten — ein Kosten-Review ohne separate isCLIAgent-Abfrage übersieht diese Agents komplett, statt sie nur zu unterzählen.
- Leadership/Business: einen Benachrichtigungsweg zu den Agent-Besitzern finanzieren, nicht nur zu Admins, denn wenn die eingebaute 80-%-Warnung nur Admins erreicht, kann ein Produktiv-Agent unbemerkt über sein eigenes Limit laufen, während die Umgebung weiterzahlt.
