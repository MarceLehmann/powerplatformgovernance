---
title: 'Dynamics 365 CE: Dublettenregeln für echte Kundendaten gestalten'
description: Erstellen Sie gezielte Dublettenregeln in Dynamics 365 CE, testen Sie
  jeden Erfassungsweg und regeln Sie die Prüfung klar.
date: '2026-11-03T10:44:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- dataverse
- ownership
content_type: curated_summary
curation_id: 42a32165b9652dee1bf7a98a
image:
  path: "/assets/img/curated/42a32165b9652dee1bf7a98a.png"
  alt: 'Governance-Karte: Duplicate detection finds possible matches. It does not
    enforce uniqueness.'
permalink: "/de/posts/dynamics-365-ce-duplicate-detection-rules-for-real-customer-data-42a32165/"
translation_url: "/en/posts/dynamics-365-ce-duplicate-detection-rules-for-real-customer-data-42a32165/"
source_url: https://softchief.com/dynamics-365-ce-design-duplicate-detection-rules-that-fit-real-customer-data/
source_site_url: https://softchief.com/
source_title: 'Dynamics 365 CE: Design Duplicate Detection Rules That Fit Real Customer
  Data'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-11-03'
source_type: article
faq:
- question: Was macht die Dynamics 365 CE Dublettenerkennung nach einem gefundenen
    Treffer?
  answer: Sie kennzeichnet mögliche Übereinstimmungen, führt jedoch keine Zusammenführung
    durch. Mitarbeitende müssen Ergebnisse prüfen und Datensätze nach einem freigegebenen
    Prozess korrigieren oder zusammenführen.
- question: Wann sollte ich einen Dataverse Alternativschlüssel statt der Dublettenerkennung
    verwenden?
  answer: Verwenden Sie einen Alternativschlüssel, wenn konfigurierte Spaltenwerte
    strikt eindeutig sein müssen. Bei einem Nullwert in einer Schlüsselspalte wird
    die Eindeutigkeit nicht erzwungen.
- question: Welche Erfassungswege müssen für die Dynamics 365 CE Dublettenerkennung
    getestet werden?
  answer: Formulare, Raster, Importe und Integrationen müssen separat getestet werden.
    Der Warnhinweis erscheint nicht in jedem Prozess, etwa bei durch Workflows erstellten
    Datensätzen.
---

## TL;DR

Konfigurieren Sie die Dublettenerkennung in Dynamics 365 CE anhand echter Kundendaten und gezielter Kriterien je Tabelle. Regeln müssen vor der Nutzung veröffentlicht werden, und gleichzeitig sind höchstens fünf Regeln pro Basistabelle veröffentlichbar. Testen Sie alle Erfassungswege, benennen Sie Verantwortliche für Prüfung und Bereinigung und nutzen Sie Dataverse Alternativschlüssel bei strikter Eindeutigkeit.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Definieren Sie Dubletten je Tabelle, erstellen Sie gezielte Regeln und testen Sie Formulare, Raster, Importe und Integrationen, weil Prüfungen und Warnungen nicht auf jedem Datenweg gleich funktionieren.
- Security/Compliance: Wählen Sie stabile, geeignete Vergleichsfelder und behandeln Sie sensible Werte besonders sorgfältig, damit der Abgleich einem klaren Geschäftszweck und den Datenregeln der Organisation entspricht.
- Makers: Prüfen Sie markierte Datensätze in einem freigegebenen Bereinigungsprozess, denn die Dublettenerkennung findet mögliche Treffer, führt aber keine Zusammenführung durch und garantiert keine Eindeutigkeit.
