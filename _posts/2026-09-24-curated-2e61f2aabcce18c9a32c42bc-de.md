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
permalink: "/de/posts/2e61f2aabcce18c9a32c42bc/"
translation_url: "/en/posts/2e61f2aabcce18c9a32c42bc/"
source_url: https://powerplatform.se/customer-address-revisited/
source_site_url: https://powerplatform.se/
source_title: Customer Address revisited
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-03-16'
---

## TL;DR

Dataverse speichert Adressen von Konten und Kontakten in customeraddress sowie Leadadressen in leadaddress. Standardmässig entstehen zwei customeraddress-Datensätze pro Konto, drei pro Kontakt und zwei leadaddress-Datensätze pro Lead. Eine neue Einstellung verzögert die Erstellung, bis tatsächlich Adressdaten vorhanden sind; eine weitere löscht bestehende Adressdatensätze ohne den übergeordneten Datensatz zu entfernen.

{% include curated-attribution.html %}

## Bedeutung für Governance

Admins/CoE sollten die verzögerte Erstellung von Adressdatensätzen für neue Dataverse-Datensätze prüfen, besonders in Marketingumgebungen mit Millionen weitgehend leerer Leads, weil unterstützende Standarddatensätze Speicher belegen. Admins/CoE sollten vor dem Löschen bestehender customeraddress- oder leadaddress-Datensätze eine erzwungene Instanzsicherung erstellen und das Ergebnis in Test und Produktion sorgfältig prüfen; die Quelle warnt vor sehr ungewöhnlichen fehlenden Adressdatensätzen in lokalen Systemen.
