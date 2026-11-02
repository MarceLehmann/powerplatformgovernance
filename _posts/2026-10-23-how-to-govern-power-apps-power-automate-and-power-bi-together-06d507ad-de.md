---
title: Power Apps, Power Automate und Power BI gemeinsam steuern
description: Eine Governance-Routine für Power Apps, Power Automate und Power BI erfasst
  Assets, Besitzer, Konnektoren, Zugriffe und Lebenszyklus.
date: '2026-10-23T16:43:33Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- environments
- dlp
- power-apps
content_type: curated_summary
curation_id: 06d507ad327cef51124ab72e
image:
  path: "/assets/img/curated/06d507ad327cef51124ab72e.png"
  alt: 'Governance-Karte: Every asset needs an owner. Unreviewed connections and access
    turn low-code speed into exposure.'
permalink: "/de/posts/how-to-govern-power-apps-power-automate-and-power-bi-together-06d507ad/"
translation_url: "/en/posts/how-to-govern-power-apps-power-automate-and-power-bi-together-06d507ad/"
source_url: https://rencore.com/en/blog/govern-power-platform/
source_site_url: https://rencore.com/
source_title: How to govern the Power Platform
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Wie sollten Power BI Arbeitsbereiche auf externen Gastzugriff geprüft
    werden?
  answer: Besitzer sollten Gastzugriffe in regelmässigen Prüfungen bestätigen und
    nicht mehr bestätigte Zugriffe entfernen, besonders nach dem Ende eines Projekts.
- question: Was passiert mit Power Automate Flows, wenn der Ersteller ausscheidet?
  answer: Vor dem Ausscheiden sollte ein Co-Owner oder Dienstkonto zugewiesen werden,
    da Flows sonst ohne verantwortliche Kontrolle weiterlaufen können.
- question: Soll die Power Platform Standardumgebung geschlossen oder eingeschränkt
    werden?
  answer: Riskante Konnektoren sollten per DLP-Richtlinie eingeschränkt werden, während
    Produktions-Apps in getrennten Umgebungen mit Besitzern und Änderungssteuerung
    laufen.
animation:
  video: /assets/img/animations/06d507ad327cef51124ab72e-de.mp4
  poster: /assets/img/animations/06d507ad327cef51124ab72e-de.poster.webp
  width: 800
  height: 450
  alt: "Ein Governance-Ablauf in fuenf Schritten zeigt Erfassen ueber Umgebungen, Besitzer zuweisen, Konnektoren pruefen, Benutzer- und Gastzugriffe pruefen und ungenutzte oder gestoppte Assets stilllegen."
---

## TL;DR

Power Apps, Power Automate und Power BI werden als ein Bestand gesteuert: Assets in allen Umgebungen erfassen, Besitzer zuweisen, Konnektoren prüfen, Benutzer- und Gastzugriffe regelmässig bewerten sowie ungenutzte oder gestoppte Assets stilllegen. DLP-Richtlinien begrenzen riskante Konnektoren, getrennte Umgebungen schützen Produktions-Apps und Co-Owner sichern geschäftskritische Apps und Flows ab.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Einen Co-Owner oder eine Besitzergruppe für geschäftskritische Apps und Flows festlegen, damit ein Ausscheiden weder Verantwortlichkeit noch Geschäftsprozesse gefährdet.
- Admins/CoE: Apps, Flows, Arbeitsbereiche, Makers, Besitzer, Freigaben und Konnektoren umgebungsübergreifend erfassen und regelmässige Zugriffs- und Lebenszyklusprüfungen durchführen.
- Security/Compliance: Riskante Konnektoren per DLP-Richtlinie begrenzen, die Standardumgebung überwachen und externe oder organisationsweite Freigaben prüfen, weil Konnektoren den Datenfluss bestimmen.
