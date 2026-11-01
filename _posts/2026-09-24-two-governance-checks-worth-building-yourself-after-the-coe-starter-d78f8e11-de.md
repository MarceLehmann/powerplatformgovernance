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
faq:
  - question: "Wie aktuell ist ein Governance-Inventar für Microsoft 365 und Power Platform?"
    answer: "Nicht in Echtzeit. Die Graph-API-Endpunkte werden gedrosselt, daher sind Live-Daten über viele Dienste bei grösseren Tenants laut Rencore für keinen Anbieter ausser Microsoft technisch machbar."
  - question: "Kann Governance das Erstellen einer App oder eines Flows vor dem Anlegen abfangen?"
    answer: "Nein, nicht im Moment des Entstehens, denn Microsoft stellt dieses Ereignis Drittwerkzeugen nicht zur Verfügung. Möglich ist, neue Apps und Flows danach zu erkennen und den Ersteller zu benachrichtigen."
  - question: "Welche Daten sammelt ein Governance-Werkzeug wie Rencore, und wo werden sie gehostet?"
    answer: "Es sammelt nur Metadaten, keine Dateiinhalte, Nachrichtentexte oder nutzergenerierten Inhalte. Die Daten landen in einer eigenen Azure-Ressourcengruppe pro Kunde, verschlüsselt mit einem kundenspezifischen Schlüssel."
---
## TL;DR

Nach dem Wegfall des CoE Starter Kits lohnt es sich, zwei konkrete Governance-Lücken selbst zu schliessen: Vor dem Entfernen einer SharePoint-Site oder Umgebung prüfen, welche Flows, Reports oder Agents tatsächlich davon abhängen; und für ausgeschiedene Mitarbeitende automatisch Flows mit inaktiven Besitzern erkennen und die Neuzuweisung an eine feste Admin-Adresse weiterleiten, statt sie stillschweigend ausfallen zu lassen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: beide Prüfungen allein mit Power Automate und den Admin-Connectors bauen, ganz ohne separates Governance-Produkt — angefangen mit einer Abhängigkeitskontrolle vor jeder Stilllegung.
- Maker: profitieren direkt vom Scan auf inaktive Besitzer — der Flow einer ausgeschiedenen Kollegin wird an eine feste Admin-Adresse weitergeleitet, statt beim nächsten Lauf still zu scheitern.
- Security/Compliance: sich gezielt für die Stilllegungsprüfung einsetzen, denn eine Site oder Umgebung ohne Prüfung abhängiger Flows, Reports oder Agents zu entfernen ist genau die Art Lücke, die zu einem ungeplanten Ausfall führt.

{% include offers-hint.html topic="checks" %}
