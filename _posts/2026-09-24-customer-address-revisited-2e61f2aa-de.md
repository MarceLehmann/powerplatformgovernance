---
title: Kundenadressen in Dataverse erneut betrachtet
description: Erklärt die Speicherung von Kunden- und Leadadressen in Dataverse, neue
  Verwaltungsfunktionen, Speicherauswirkungen und notwendige Sicherungen.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: de
toc: false
tags:
- dataverse
content_type: curated_summary
curation_id: 2e61f2aabcce18c9a32c42bc
permalink: "/de/posts/customer-address-revisited-2e61f2aa/"
translation_url: "/en/posts/customer-address-revisited-2e61f2aa/"
source_url: https://powerplatform.se/customer-address-revisited/
source_site_url: https://powerplatform.se/
source_title: Customer Address revisited
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-03-16'
faq:
  - question: "Wo speichert Dataverse die Adressen von Konten, Kontakten und Leads?"
    answer: "Adressen von Konten und Kontakten liegen nicht in den Haupttabellen, sondern in einer eigenen Tabelle namens customeraddress. Leads verwenden dafür die separate Tabelle leadaddress. Die Daten erscheinen zwar nicht in der gewohnten Bedienung, zählen aber in den Speicherberechnungen des Power Platform Admin Centers mit."
  - question: "Wie viele Adressdatensätze legt Dataverse standardmässig an?"
    answer: "Mit den Standardeinstellungen entstehen pro Konto zwei Adressdatensätze, pro Kontakt drei und pro Lead zwei, auch wenn keine Adressdaten erfasst sind. Felder wie Erstellungszeitpunkt, Änderungszeitpunkt und ändernde Person werden immer angelegt, sodass selbst diese leeren Datensätze Speicher in Dataverse belegen."
  - question: "Warum wird das bei Marketing mit vielen Leads zum Problem?"
    answer: "Weil die leeren Adressen mit der Zahl der Leads wachsen. Bei einer Million Leads entstehen zwei Millionen leere Lead-Adressen. Sie belegen Speicher, obwohl sie keine Information enthalten. Der Beitrag beschreibt das Szenario für Organisationen, die Dataverse im Marketing mit Millionen von Leads einsetzen."
  - question: "Welche neuen Funktionen verbessern den Umgang mit Adressdatensätzen?"
    answer: "Es gibt zwei neue Möglichkeiten. Erstens legt Dataverse customeraddress- und leadaddress-Datensätze nur an, wenn sie tatsächlich Daten enthalten. Zweitens lassen sich customeraddress-Datensätze löschen, ohne dass der zugehörige Kontakt, das Konto oder der Lead gelöscht wird. Beides betrifft den Speicher, den leere Adressdatensätze belegen und der in den Speicherberechnungen des Power Platform Admin Centers erscheint."
  - question: "Wie räumt man bestehende leere Adressen auf und was ist dabei zu beachten?"
    answer: "Die erste Funktion entfernt bestehende leere Datensätze nicht. Die zweite Funktion entfernt customeraddress-Datensätze, ohne den Kontakt, das Konto oder den Lead zu löschen, was der Autor als deutlich einfacher bezeichnet. Als Umweg legt man neue Datensätze mit eingeschalteter erster Funktion an, führt sie mit den alten zusammen und entfernt die alten deaktivierten. Vor solchen Schritten verlangt er eine erzwungene Sicherung der Instanz."
---
## TL;DR

Dataverse speichert Adressen von Konten und Kontakten in customeraddress sowie Leadadressen in leadaddress. Standardmässig entstehen zwei customeraddress-Datensätze pro Konto, drei pro Kontakt und zwei leadaddress-Datensätze pro Lead. Eine neue Einstellung verzögert die Erstellung, bis tatsächlich Adressdaten vorhanden sind; eine weitere löscht bestehende Adressdatensätze ohne den übergeordneten Datensatz zu entfernen.

{% include curated-attribution.html %}

## Bedeutung für Governance

Admins/CoE sollten die verzögerte Erstellung von Adressdatensätzen für neue Dataverse-Datensätze prüfen, besonders in Marketingumgebungen mit Millionen weitgehend leerer Leads, weil unterstützende Standarddatensätze Speicher belegen. Admins/CoE sollten vor dem Löschen bestehender customeraddress- oder leadaddress-Datensätze eine erzwungene Instanzsicherung erstellen und das Ergebnis in Test und Produktion sorgfältig prüfen; die Quelle warnt vor sehr ungewöhnlichen fehlenden Adressdatensätzen in lokalen Systemen.
