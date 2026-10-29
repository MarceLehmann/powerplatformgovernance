---
title: 'Dataflows Gen1 und Gen2: Speicher, Staging und Fabric-Kapazität'
description: Dataflows Gen2 schreibt nach OneLake und in Fabric-Lakehouse-Tabellen.
  Falsches Staging kann jedoch gemeinsame Kapazität belasten und Power-BI-Berichte
  beeinträchtigen.
date: '2026-10-29T04:34:06Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
content_type: curated_summary
curation_id: 44aacb42189acb815db4576e
image:
  path: "/assets/img/curated/44aacb42189acb815db4576e.png"
  alt: 'Governance-Karte: Gen2 staging shapes capacity use. Misconfiguration can throttle
    shared workloads.'
permalink: "/de/posts/dataflows-gen1-vs-gen2-storage-staging-and-fabric-capacity-choices-44aacb42/"
translation_url: "/en/posts/dataflows-gen1-vs-gen2-storage-staging-and-fabric-capacity-choices-44aacb42/"
source_url: https://www.m365.fm/blog/dataflows-gen1-vs-gen2-fabric-architecture/
source_site_url: https://www.m365.fm/
source_title: 'Dataflows Gen1 vs Gen2 in Microsoft Fabric: Choosing the Right Staging
  and Compute Architecture'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-28'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wie speichert Dataflows Gen2 bereinigte Daten in Microsoft Fabric?
  answer: Dataflows Gen2 schreibt bereinigte Daten über OneLake in Delta-Parquet-Tabellen
    eines Fabric Lakehouse. Dadurch stehen sie nachgelagerten Fabric-Workloads zur
    Verfügung.
- question: Welche Folgen kann falsches Staging bei Dataflows Gen2 für Fabric-Kapazität
    haben?
  answer: Falsches Staging kann grosse Datenmengen wiederholt in den Speicher laden
    und dadurch zusätzlichen Rechenaufwand sowie einen schnelleren Verbrauch der Fabric-Kapazität
    verursachen.
- question: Wie sollten Teams schwere Dataflows-Gen2-Aktualisierungen planen?
  answer: Schwere ETL-Aufträge sollten in geeigneten dedizierten Workspaces oder ausserhalb
    der Geschäftszeiten laufen, damit interaktive Workloads weniger beeinträchtigt
    werden.
---

## TL;DR

Dataflows Gen1 speichert transformierte Daten im internen Power-BI-Speicher. Dataflows Gen2 schreibt sie über OneLake in Delta-Parquet-Tabellen eines Fabric Lakehouse. Staging und Transformationen verbrauchen Fabric Capacity Units. Wiederholte Verarbeitung oder Aktualisierungen zu Spitzenzeiten können andere Workloads drosseln und die Berichtsdarstellung beeinträchtigen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Staging und Transformationen sorgfältig konfigurieren, weil wiederholte Verarbeitung unnötigen Rechenaufwand erzeugen kann.
- Admins/CoE: Fabric Capacity Units überwachen und schwere ETL-Aufträge in geeigneten Workspaces oder ausserhalb der Spitzenzeiten ausführen, um gemeinsame Workloads zu schützen.
- Leadership/Business: Bereinigte Daten in Lakehouse-Tabellen standardisieren, um widersprüchliche Zahlen zu reduzieren und das Vertrauen in Dashboards zu stärken.
