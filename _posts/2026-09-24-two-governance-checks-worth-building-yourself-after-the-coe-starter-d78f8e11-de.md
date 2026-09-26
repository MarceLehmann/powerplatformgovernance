---
title: Zwei Governance-Checks, die sich nach dem CoE Starter Kit selbst zu bauen lohnen
description: Abhängigkeitsprüfung vor der Stilllegung und automatische Erkennung inaktiver
  Flow-Besitzer - zwei konkrete Ideen, unabhängig vom eingesetzten Tool.
date: '2026-09-24T00:11:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- coe
content_type: curated_summary
curation_id: d78f8e117156bc1885dcdd38
permalink: "/de/posts/two-governance-checks-worth-building-yourself-after-the-coe-starter-d78f8e11/"
translation_url: "/en/posts/two-governance-checks-worth-building-yourself-after-the-coe-starter-d78f8e11/"
source_url: https://rencore.com/en/blog/power-platform-governance-coe-starter-kit-questions/
source_site_url: https://rencore.com/
source_title: Power Platform Governance After CoE Starter Kit Retirement
source_name: Rencore
source_author: Matthias Einig
source_language: en
source_language_name: English
source_published_at: '2026-06-23'
---
## TL;DR

Nach dem Wegfall des CoE Starter Kits lohnt es sich, zwei konkrete Governance-Lücken selbst zu schliessen: Vor dem Entfernen einer SharePoint-Site oder Umgebung prüfen, welche Flows, Reports oder Agents tatsächlich davon abhängen; und für ausgeschiedene Mitarbeitende automatisch Flows mit inaktiven Besitzern erkennen und die Neuzuweisung an eine feste Admin-Adresse weiterleiten, statt sie stillschweigend ausfallen zu lassen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: beide Prüfungen allein mit Power Automate und den Admin-Connectors bauen, ganz ohne separates Governance-Produkt — angefangen mit einer Abhängigkeitskontrolle vor jeder Stilllegung.
- Maker: profitieren direkt vom Scan auf inaktive Besitzer — der Flow einer ausgeschiedenen Kollegin wird an eine feste Admin-Adresse weitergeleitet, statt beim nächsten Lauf still zu scheitern.
- Security/Compliance: sich gezielt für die Stilllegungsprüfung einsetzen, denn eine Site oder Umgebung ohne Prüfung abhängiger Flows, Reports oder Agents zu entfernen ist genau die Art Lücke, die zu einem ungeplanten Ausfall führt.
