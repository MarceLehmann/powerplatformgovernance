---
title: 'Microsoft Fabric Kapazitätsverwaltung: F SKUs, Bursting und Schulden'
description: Fabric-Kapazitätseinheiten bilden einen gemeinsamen Compute-Pool. F SKUs,
  Bursting, Glättung und die Capacity Metrics-App bestimmen die Governance von Leistung
  und Kosten.
date: '2026-10-29T16:45:04Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
content_type: curated_summary
curation_id: 7b957908fa26a7ebcd3c9011
image:
  path: "/assets/img/curated/7b957908fa26a7ebcd3c9011.png"
  alt: 'Governance-Karte: Shared capacity creates shared risk. Watch the debt before
    performance drops.'
permalink: "/de/posts/microsoft-fabric-capacity-governance-f-skus-bursting-and-debt-7b957908/"
translation_url: "/en/posts/microsoft-fabric-capacity-governance-f-skus-bursting-and-debt-7b957908/"
source_url: https://www.m365.fm/blog/microsoft-fabric-capacity-units-f-skus-guide/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft Fabric Capacity Units Explained: A Guide to F SKUs and Carry
  Forward Debt'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-29'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wie beeinflusst eine gemeinsame Microsoft Fabric-Kapazität verschiedene
    Workspaces?
  answer: Alle Workspaces nutzen denselben Kapazitätspool, sodass ein intensiver Notebook-Job
    in einer Abteilung Berichte einer anderen Abteilung beeinflussen kann.
- question: Was überwacht die Microsoft Fabric Capacity Metrics-App?
  answer: Die App zeigt Auslastungstrends, Übertragsschulden und besonders verbrauchende
    semantische Modelle, Pipelines oder Notebooks für die Leistungsanalyse.
- question: Wie wirken sich Übertragsschulden auf die Berichtsleistung in Fabric aus?
  answer: Bursting über die gekaufte Kapazität erzeugt Schulden, die spätere Compute-Zyklen
    zurückzahlen müssen und interaktive Berichte vorübergehend drosseln können.
---

## TL;DR

Microsoft Fabric bündelt Kapazitätseinheiten über mehrere Workspaces in einem gemeinsamen Compute-Pool. F SKUs lassen sich pausieren und fortsetzen, während Bursting Übertragsschulden erzeugt. Interaktive Vorgänge werden über wenige Minuten, Hintergrundlasten über 24 Stunden geglättet. Die Capacity Metrics-App zeigt Auslastung, Schulden und Hauptverbraucher; Warnungen können bei ungefähr 80 Prozent beginnen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Überwacht den gemeinsamen Pool mit der Microsoft Fabric Capacity Metrics-App, einschliesslich Auslastung, Übertragsschulden und meistverbrauchenden Modellen, Pipelines oder Notebooks.
- Admins/CoE: Prüft F SKU-Grösse und geerbte P SKUs, weil gemeinsame Lasten und alte Kapazitäten Leistung und Migrationsplanung beeinflussen.
- Leadership/Business: Behandelt die Kapazität als bereichsübergreifende Ressource, weil intensive Arbeit in einem Workspace unabhängige Berichte und die Kostenkontrolle beeinträchtigen kann.
