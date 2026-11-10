---
title: Fabric Link kann unerwartete Dataverse-Speicherkosten erzeugen
description: Das Aktivieren von Fabric Link für die Dataverse-Tabelle annotation,
  angezeigt als Notes, erzeugte 180 GB Datenbankspeicher trotz einer Quelltabellengrösse
  von 3 GB.
date: '2026-11-10T16:37:54Z'
author: governance_editorial
lang: de
toc: false
tags:
- dataverse
- governance
content_type: curated_summary
curation_id: fa9573dbdeff8b472b9c2826
image:
  path: "/assets/img/curated/fa9573dbdeff8b472b9c2826.png"
  alt: 'Governance-Karte: Fabric Link can turn a small Notes table into a huge storage
    bill.'
permalink: "/de/posts/fabric-link-can-create-unexpected-dataverse-storage-costs-fa9573db/"
translation_url: "/en/posts/fabric-link-can-create-unexpected-dataverse-storage-costs-fa9573db/"
source_url: https://powerplatform.se/be-careful-when-enabling-fabric-link/
source_site_url: https://powerplatform.se/
source_title: Be careful when enabling Fabric Link
source_name: powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2026-11-10'
source_type: article
faq:
- question: Was geschah beim Aktivieren von Fabric Link für die Dataverse-Tabelle
    annotation?
  answer: Fabric Link erzeugte eine Tabelle annotation-analytics mit 180 GB Datenbankspeicher,
    obwohl die annotation-Tabelle selbst 3 GB gross war.
- question: Wo prüfe ich den durch Dataverse Fabric Link erzeugten Speicher?
  answer: Prüfe den Speicherverbrauch im Power Platform Admin Center unter Lizenzierung,
    Dataverse. Dort werden Analytics-Tabellen im Speicherverbrauch angezeigt.
- question: Wie entferne ich annotation aus einem Dataverse Fabric Link?
  answer: Die annotation-Tabelle konnte nicht einzeln entfernt werden. Deshalb wurde
    der gesamte Fabric Link gelöscht und ohne annotation neu erstellt.
animation:
  video: /assets/img/animations/fa9573dbdeff8b472b9c2826-de.mp4
  poster: /assets/img/animations/fa9573dbdeff8b472b9c2826-de.poster.webp
  width: 800
  height: 450
  alt: "Die Abfolge zeigt das Aktivieren von Fabric Link fuer annotation, das Pruefen des Speichers im Power Platform Admin Center unter Lizenzierung und Dataverse und das Neuerstellen des Fabric Link ohne annotation."
---

## TL;DR

Das Aktivieren von Fabric Link für die Dataverse-Tabelle annotation, angezeigt als Notes, erzeugte eine Tabelle annotation-analytics mit 180 GB Datenbankspeicher. Die Quelltabelle war 3 GB gross. Das Entfernen der Tabelle war nicht möglich, daher musste der gesamte Fabric Link ohne annotation neu erstellt werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Prüft nach der Aktivierung von Fabric Link den Speicher unter Lizenzierung, Dataverse, weil annotation eine deutlich grössere analytics-Tabelle erzeugen kann.
- Leadership/Business: Hinterfragt Tabellen, die nur für eine mögliche spätere Nutzung aktiviert werden, weil der zusätzliche Datenbankspeicher erhebliche Kosten verursachen kann.
