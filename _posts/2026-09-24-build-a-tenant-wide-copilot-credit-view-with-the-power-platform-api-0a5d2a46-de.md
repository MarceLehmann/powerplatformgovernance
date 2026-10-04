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
permalink: "/de/posts/build-a-tenant-wide-copilot-credit-view-with-the-power-platform-api-0a5d2a46/"
translation_url: "/en/posts/build-a-tenant-wide-copilot-credit-view-with-the-power-platform-api-0a5d2a46/"
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
faq:
  - question: "Welcher Endpunkt der Power-Platform-API liefert die Copilot-Credit-Kapazität des Tenants?"
    answer: "Die Route für MCSMessages unter licensing und entitlements liefert Werte für berechtigt, zugewiesen, verbraucht, verfügbar und Status. Die Antwort enthält zusätzlich das Datum der letzten abgeschlossenen Nutzung und zeigt damit, wie aktuell die Verbrauchsdetails sind. Pro Agent und Tag gibt es einen zweiten Endpunkt für Ressourcen, der mit Datumsbereich, Seitengrösse und Fortsetzungstoken abgefragt wird."
  - question: "Wie baut man mit der Ressourcen-Abfrage eine saubere tägliche Verbrauchshistorie auf?"
    answer: "Man fragt jeweils einzelne Tage ab, damit pro Tag sauber getrennte Datensätze entstehen. Die Seitengrösse lässt sich auf 5000 setzen, grössere Ergebnisse werden per Fortsetzungstoken geholt. Umgebungsnamen stehen nicht in den Verbrauchszeilen und werden über einen separaten Endpunkt der Umgebungsverwaltung aufgelöst. Weil dieselbe Kombination mehrfach auftauchen kann, müssen Zeilen später aggregiert werden."
  - question: "Warum reichen die Berichte im Admin Center für den Copilot-Credit-Verbrauch manchmal nicht?"
    answer: "Die Standardberichte unter Licensing und Copilot Studio erlauben es nicht, Daten umzuformen, eigene Datensätze zu besitzen oder Verläufe über das Standardfenster hinaus zu halten. Dazu kommt, dass der GitHub-Copilot-Harness Credits schon beim Bauen, Testen und Auswerten von Agenten verbraucht, nicht nur im Produktivbetrieb. Die Quelle empfiehlt, mit den Admin-Center-Berichten zu starten und nur bei konkretem Bedarf selbst zu bauen."
  - question: "Aus welchen Bausteinen besteht die Community-Lösung für Copilot-Credit-Verbrauch in Dataverse?"
    answer: "Die Lösung in Version 2.0.0 umfasst einen täglichen Power-Automate-Flow, drei Dataverse-Tabellen für Verbrauchshistorie, Kapazitäts-Snapshots und Synchronisationsstatus, eine Nur-Lese-Sicherheitsrolle und eine Power-Apps-Code-App als Dashboard. Der erste Lauf importiert bis zu 180 Tage Historie, spätere Läufe aktualisieren die letzten sieben Tage. Alles lässt sich als einzelnes Solution-Paket importieren."
  - question: "Welche Einschränkungen gelten für die Daten der Copilot-Credit-Verbrauchs-API?"
    answer: "Die API kann für einen Agenten am selben Tag mehrere Zeilen liefern, wenn sich Kanal, Funktion, Modell oder Umgebung unterscheiden. Agenten mit GitHub-Copilot-Harness melden die Funktion als Process Agent und liefern keine Werte für Tool, Modell oder Wissensquelle. Einige optionale Metadaten sind in der öffentlichen Referenz nicht vollständig beschrieben, die benötigten Felder sollte man deshalb selbst testen."
---
## TL;DR

Die Power-Platform-API liefert Copilot-Credit-Kapazität und Ressourcenverbrauch pro Agent, darunter Umgebung, Datum, abgerechnete und nicht abgerechnete Credits sowie verfügbare Dimensionen. Ein geplanter Power-Automate-Flow kann tägliche Seiten mit Fortsetzungstoken abrufen und zunächst 180 Tage, danach sieben aktualisierte Tage in Dataverse speichern.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: den geplanten Flow bauen, der tageweise über Fortsetzungstoken abruft, aber zuerst PPAC nutzen und die Daten nur dann in Dataverse persistieren, wenn eigene Historien oder Analysen das wirklich erfordern.
- Security/Compliance: Lesezugriff auf die gespeicherten Dataverse-Datensätze setzen und die Aufbewahrung nach Richtlinie festlegen, da hier laufend Verbrauchsdaten über bis zu 180 Tage anfallen.
- Leadership/Business: ein tenantweites Credit-Dashboard ist damit erreichbar, aber mit laufendem Pflegeaufwand einplanen — Umgebungs-IDs müssen separat aufgelöst werden und optionale Antwortfelder können sich ändern, das ist also kein einmaliger Aufbau.
