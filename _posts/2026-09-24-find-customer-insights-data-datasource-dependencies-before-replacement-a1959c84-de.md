---
title: Datenquellenabhängigkeiten in Customer Insights – Data ermitteln
description: Das API-Testtool von Customer Insights – Data findet Abhängigkeiten von
  Measures und Segmenten, bevor eine Datenquelle ersetzt oder entfernt wird.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- dataverse
content_type: curated_summary
curation_id: a1959c84a8dc9afdd70a8d03
permalink: "/de/posts/find-customer-insights-data-datasource-dependencies-before-replacement-a1959c84/"
translation_url: "/en/posts/find-customer-insights-data-datasource-dependencies-before-replacement-a1959c84/"
source_url: https://powerplatform.se/find-datasource-dependencies-in-ci-d/
source_site_url: https://powerplatform.se/
source_title: Find datasource dependencies in CI-D
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-05-06'
faq:
  - question: "Warum Abhängigkeiten prüfen, bevor ich in Customer Insights Data eine Power-Query-Datenquelle ersetze?"
    answer: "Measures und Segmente können noch von der Datenquelle abhängen, und der Artikel warnt, dass Abhängigkeiten von extern genutzten Tabellen bestehen bleiben können. Die vorherige Prüfung mit dem API-Werkzeug zeigt, welche Measures und Segmente die alte Datenquelle referenzieren, sodass man entscheiden kann, ob man sie entfernt oder auf die neue Delta-Datenquelle umleitet."
  - question: "Wie öffne ich die API-Liste, die Datenquellen-Abhängigkeiten zeigt?"
    answer: "In Customer Insights Data zu Permissions gehen und den Tab API öffnen, dann die einzig verfügbare API Customer insights v1 wählen. Nach ListAll suchen und ListAllMeasuresMetadata auswählen, später ListAllSegments. Mit dem grünen Button Try it wird der Aufruf im API-Testwerkzeug ausgeführt."
  - question: "Welche Eingaben braucht der Try-it-Aufruf, um die Kennzahlen aufzulisten?"
    answer: "Im Dropdown Authorization implicit wählen und die Instance ID eintragen, die man aus der URL holen kann, wenn man Customer Insights Data in der normalen Oberfläche nutzt. Dann nach unten scrollen und Send drücken. Anschliessend mit der Browsersuche in der JSON-Antwort alle Vorkommen der Datenquelle finden."
  - question: "Welche Optionen gibt es für eine Kennzahl, die noch die alte Datenquelle nutzt?"
    answer: "Man kann das Measure entfernen oder alle seine Abhängigkeiten auf eine andere Datenquelle umstellen, im Artikel eine Delta-Datenquelle, und es aktualisieren. Danach die Abfrage erneut senden und prüfen, ob die alte Datenquelle nicht mehr erscheint. Der Artikel weist darauf hin, dass Abhängigkeiten von extern genutzten Tabellen übrig bleiben können."
  - question: "Welche Kennzahlen und Segmente deckt diese Methode ab?"
    answer: "Der Artikel nutzt zwei API-Aufrufe, ListAllMeasuresMetadata für Measures und ListAllSegments für Segmente. In der JSON-Ausgabe beider Aufrufe wird nach der Datenquelle gesucht. Der Artikel warnt, dass weiterhin Abhängigkeiten an der Datenquelle bestehen können, etwa von Dingen, die die Tabelle extern nutzen, man sollte also auch externe Nutzer prüfen."
---
## TL;DR

In Customer Insights – Data unter Berechtigungen &gt; API die Option Customer insights – v1 und ListAllMeasuresMetadata wählen, implizite Autorisierung sowie die Instanz-ID eingeben und die JSON-Antwort durchsuchen. Abhängige Measures auf eine Delta-Datenquelle umleiten, aktualisieren und anschliessend mit ListAllSegments die Segmentabhängigkeiten prüfen. Externe API-Nutzer können nach dem Entfernen ausfallen.

{% include curated-attribution.html %}

## Bedeutung für Governance

Admins/CoE sollten vor dem Löschen einer Datenquelle mit ListAllMeasuresMetadata und ListAllSegments alle Abhängigkeiten erfassen, die Datenquelle aktualisieren und die Abfragen zur Kontrolle erneut senden. Makers sollten abhängige Measures und Segmente prüfen und ungenutzte Elemente entfernen oder aktive Verweise auf die Ersatzquelle umleiten. Admins/CoE sollten ausserdem externe Tabellennutzer ermitteln, da das Entfernen trotz fehlender API-Sperre deren Integrationen beendet.
