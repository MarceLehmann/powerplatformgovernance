---
title: Tenantweite Copilot-Credit-Ansicht mit der Power-Platform-API erstellen
description: Täglichen Copilot-Credit-Verbrauch abrufen, in Dataverse speichern und
  gesteuerte Dashboards für Agents und Umgebungen erstellen.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
- dataverse
- environments
content_type: curated_summary
curation_id: 0a5d2a46aab0efa61b9bb25e
permalink: "/de/posts/0a5d2a46aab0efa61b9bb25e/"
translation_url: "/en/posts/0a5d2a46aab0efa61b9bb25e/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-credit-consumption-api/
source_site_url: https://microsoft.github.io/
source_title: Where Are Your Copilot Credits Going? Build a Tenant-Wide View with
  the Power Platform API
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Petros Feleskouras
source_published_at: '2026-08-25'
source_updated_at: '2026-08-26'
---

## TL;DR

Die Power-Platform-API liefert Copilot-Credit-Kapazität und Ressourcenverbrauch pro Agent, darunter Umgebung, Datum, abgerechnete und nicht abgerechnete Credits sowie verfügbare Dimensionen. Ein geplanter Power-Automate-Flow kann tägliche Seiten mit Fortsetzungstoken abrufen und zunächst 180 Tage, danach sieben aktualisierte Tage in Dataverse speichern.

{% include curated-attribution.html %}

## Bedeutung für Governance

PPAC bleibt der erste Berichtspunkt; für eigene Historien kann die API-Datenspeicherung sinnvoll sein. Lesezugriff auf Dataverse begrenzen, Umgebungs-IDs separat auflösen und optionale Metadaten bei Änderungen testen, da GitHub-Copilot-Harness-Daten eingeschränkt sind.
