---
title: Relationale Dataverse-Architektur für Qualitätsabweichungs-Apps
description: Verwandte Dataverse-Tabellen trennen Fälle, Fehler, Messungen, betroffene
  Materialien, Entscheidungen und Eindämmungsmassnahmen.
date: '2026-10-29T16:45:08Z'
author: governance_editorial
lang: de
toc: false
tags:
- dataverse
- power-apps
- governance
- compliance
content_type: curated_summary
curation_id: 1ef72f92d4eb41917157a9d7
image:
  path: "/assets/img/curated/1ef72f92d4eb41917157a9d7.png"
  alt: 'Governance-Karte: A case is not a defect. Model both in related Dataverse
    tables.'
permalink: "/de/posts/dataverse-relational-architecture-for-quality-nonconformance-apps-1ef72f92/"
translation_url: "/en/posts/dataverse-relational-architecture-for-quality-nonconformance-apps-1ef72f92/"
source_url: https://www.m365.fm/blog/dataverse-relational-architecture-quality-apps/
source_site_url: https://www.m365.fm/
source_title: Dataverse Relational Architecture for Quality Nonconformance Apps
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
- question: Wie bildet Dataverse mehrere Fehler aus einer Prüfung ab?
  answer: Ein übergeordneter Qualitätsfall erhält eine untergeordnete Fehler-Tabelle.
    Jede Beobachtung bekommt so einen eigenen Datensatz und einen kontrollierten Fehlercode.
- question: Warum müssen Messgrenzen mit Prüfergebnissen gespeichert werden?
  answer: Zahlenwerte, Einheiten und Grenzwerte werden je Messung gespeichert. Dadurch
    bleibt der Prüfkontext erhalten, wenn technische Zeichnungen später geändert werden.
- question: Wie steuern Verknüpfungstabellen in Dataverse betroffene Materialien?
  answer: Verknüpfungstabellen verbinden Entscheidungen und Eindämmungsmassnahmen
    mit bestimmten Chargen, Behältern oder Materialgruppen und schützen dadurch nicht
    betroffene Produktionslinien.
---

## TL;DR

Eine Qualitäts-App in Dataverse sollte Fallkopf, Fehler, Messungen und betroffenes Material in verbundenen Tabellen trennen. Einmal-zu-viele-Beziehungen erlauben mehrere Fehler, während Zahlenwerte, Einheiten und historische Grenzwerte je Messung gespeichert werden. Verknüpfungstabellen bilden Entscheidungen, Massnahmen und Materialgruppen mit vielen Beziehungen ab.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erstellt getrennte Tabellen für Fälle, Fehler, Messungen und betroffenes Material, damit mehrere Probleme, Messwerte und Materialmengen ohne doppelte Daten analysierbar bleiben.
- Admins/CoE: Sichert klare Beziehungen und eigene Statuswerte für Material, Untersuchungen und Korrekturmassnahmen, um unklare Prozessengpässe zu vermeiden.
- Security/Compliance: Speichert Grenzwerte zusammen mit jedem Prüfergebnis, weil spätere Änderungen an Zeichnungen oder Spezifikationen historische Audits verfälschen können.
