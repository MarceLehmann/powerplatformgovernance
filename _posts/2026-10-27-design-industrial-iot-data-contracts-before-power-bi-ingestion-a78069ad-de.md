---
title: Industrielle IoT-Datenverträge vor der Power-BI-Aufnahme entwerfen
description: Stabile Identitäten, Einheiten, Qualitätscodes, Zeitstempel und Fehlerregeln
  definieren, bevor industrielle IoT-Signale Power BI erreichen.
date: '2026-10-27T04:50:00Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- compliance
content_type: curated_summary
curation_id: a78069ad0761a52048c4e2c3
image:
  path: "/assets/img/curated/a78069ad0761a52048c4e2c3.png"
  alt: 'Governance-Karte: Power BI cannot correct flawed machine data. Define signal
    rules before ingestion.'
permalink: "/de/posts/design-industrial-iot-data-contracts-before-power-bi-ingestion-a78069ad/"
translation_url: "/en/posts/design-industrial-iot-data-contracts-before-power-bi-ingestion-a78069ad/"
source_url: https://www.m365.fm/blog/designing-data-contracts-industrial-iot-signals-power-bi/
source_site_url: https://www.m365.fm/
source_title: Designing Data Contracts for Industrial IoT Signals Before Power BI
  Ingestion
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Was muss ein industrieller IoT-Datenvertrag vor der Power-BI-Aufnahme
    festlegen?
  answer: Er muss Anlagenidentität, Messpunkte, Datentypen, technische Einheiten,
    Qualitätsstatus, Übertragungsmuster und die Bedeutung von Zeitstempeln festlegen.
- question: Wie sollen Power-BI-Pipelines veraltete zwischengespeicherte Sensorwerte
    behandeln?
  answer: Sie sollen prüfen, ob sich der Maschinenzustand geändert hat, gegebenenfalls
    einen Status für veraltete Werte auslösen und zwischengespeicherte Werte nicht
    als aktuellen Zustand darstellen.
- question: Warum benötigen industrielle IoT-Datenverträge Versionen und Wirksamkeitsdaten?
  answer: Versionen bewahren die Definitionen und Verarbeitungsregeln historischer
    Datensätze, wenn sich Maschinenprogramme oder die Bedeutung eines Signals ändern.
---

## TL;DR

Industrielle IoT-Datenverträge sollen stabile Anlagenreferenzen, Messpunkte, Datentypen, technische Einheiten, Qualitätsstatus, Übertragungsmuster und Zeitstempel vor der Power-BI-Aufnahme festlegen. Sie müssen Nullwerte von fehlgeschlagenen Messungen unterscheiden, veraltete zwischengespeicherte Werte erkennen, Schätzungen kennzeichnen und Änderungen versionieren, damit historische Produktionsanalysen konsistent bleiben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Qualitätsstatus aus der Quelle erhalten, echte Nullwerte von Nullangaben und fehlgeschlagenen Messungen unterscheiden und zwischengespeicherte Werte nicht als aktuelle Messungen behandeln.
- Admins/CoE: Versionierte Signalverträge vor der Power-BI-Aufnahme verlangen, einschliesslich stabiler Anlagenreferenzen, Einheiten, Übertragungsmuster und Zeitstempelregeln.
- Security/Compliance: Prüfen, ob durch das Entfernen von Unsicherheits- oder Statuscodes unbestätigte Messwerte entstehen.
- Leadership/Business: Abweichungen in Dashboards als Daten-Governance-Risiko bewerten, weil fehlerhafte Maschinendaten die Produktionsleistung falsch darstellen können.
