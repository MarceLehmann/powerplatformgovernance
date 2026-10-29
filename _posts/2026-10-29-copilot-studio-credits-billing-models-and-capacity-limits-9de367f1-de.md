---
title: Copilot Studio Credits, Abrechnung und Kapazitätsgrenzen
description: Copilot Studio nutzt organisationsweit gebündelte Credits. Die Kosten
  hängen von der Operation ab, und eigene Agents können bei überschrittener Kapazität
  deaktiviert werden.
date: '2026-10-29T04:34:07Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- copilot-studio
- compliance
content_type: curated_summary
curation_id: 9de367f18963c3486b5ecef4
image:
  path: "/assets/img/curated/9de367f18963c3486b5ecef4.png"
  alt: 'Governance-Karte: Copilot Studio costs stack. Capacity limits can stop custom
    agents.'
permalink: "/de/posts/copilot-studio-credits-billing-models-and-capacity-limits-9de367f1/"
translation_url: "/en/posts/copilot-studio-credits-billing-models-and-capacity-limits-9de367f1/"
source_url: https://www.m365.fm/blog/copilot-studio-pricing-guide-credits/
source_site_url: https://www.m365.fm/
source_title: 'Copilot Studio Pricing Guide: Calculating Credits & Avoiding Bill Shocks'
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
- question: Wie viele Copilot Studio Credits benötigt eine geerdete KI-generierte
    Antwort?
  answer: Eine geerdete KI-generierte Antwort benötigt 12 Credits, bestehend aus 10
    Credits für interne Daten und 2 Credits für die Generierung.
- question: Was passiert bei 125 Prozent der vorausbezahlten Copilot Studio Kapazität?
  answer: Eigene Agents werden bei 125 Prozent der vorausbezahlten Kapazität deaktiviert.
    Laufende Gespräche enden, spätere Interaktionen werden mit Abrechnungs- oder Verfügbarkeitsfehlern
    abgewiesen.
- question: Wann verbrauchen interne Copilot Studio Agents keine zusätzlichen Credits?
  answer: Interne Agents verbrauchen keine zusätzlichen Copilot Studio Credits, wenn
    sie ausschliesslich von Mitarbeitenden mit Microsoft 365 Copilot Lizenzen genutzt
    werden.
---

## TL;DR

Copilot Studio verwendet organisationsweit gebündelte Credits: Skriptantworten kosten 1, KI-generierte Antworten 2, Aktionen 5 und die Nutzung interner Daten 10. Eine geerdete, generierte Antwort kostet 12 Credits. Kapazitätspakete bieten 25.000 Credits für 200 Dollar monatlich, während Pay as you go 1 Cent je Credit kostet. Bei 125 Prozent werden eigene Agents deaktiviert.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Plant gestapelte Operationen ein, weil Generierung, Aktionen und Datennutzung die Kosten eines einzelnen Nutzerturns erhöhen können.
- Admins/CoE: Richtet Abrechnungswarnungen im Power Platform Admin Center ein, prüft den Verbrauch wöchentlich und haltet Reservekapazität gegen Ausfälle vor.
- Leadership/Business: Ordnet Kapazitätspakete planbaren Lasten und Pay as you go schwankendem Traffic zu. Trennt interne und externe Bereitstellungen für bessere Kostenkontrolle.
