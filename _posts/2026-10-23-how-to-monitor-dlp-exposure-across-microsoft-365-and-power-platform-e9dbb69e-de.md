---
title: DLP-Überwachung in Microsoft 365 und der Power Platform
description: Überwache externe Freigaben, Mail-Weiterleitungen, Power Apps und Power
  Automate-Connectoren rund um Microsoft Purview DLP und weise Funde Verantwortlichen
  zu.
date: '2026-10-23T16:43:31Z'
author: governance_editorial
lang: de
toc: false
tags:
- dlp
- security
- compliance
- power-apps
- power-automate
content_type: curated_summary
curation_id: e9dbb69edd9aa308cc9cf9f3
image:
  path: "/assets/img/curated/e9dbb69edd9aa308cc9cf9f3.png"
  alt: 'Governance-Karte: DLP policies are not enough. Monitor the paths around them.'
permalink: "/de/posts/how-to-monitor-dlp-exposure-across-microsoft-365-and-power-platform-e9dbb69e/"
translation_url: "/en/posts/how-to-monitor-dlp-exposure-across-microsoft-365-and-power-platform-e9dbb69e/"
source_url: https://rencore.com/en/blog/monitor-dlp-microsoft-365/
source_site_url: https://rencore.com/
source_title: How to monitor data loss prevention across Microsoft 365
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Was erkennt Microsoft Purview DLP bei der Überwachung von Microsoft 365
    nicht?
  answer: Microsoft Purview DLP prüft Inhalte und reagiert auf Richtlinien-Treffer,
    benötigt aber zusätzliche Kontrollen für Freigaben, Weiterleitungen und Connector-Datenpfade.
- question: Welche Power Platform-Konfigurationen können DLP-Risiken erzeugen?
  answer: Für alle freigegebene Power Apps und Power Automate-Flows mit Connectoren
    zu externen Diensten können Datenpfade ausserhalb der DLP-Richtlinie entstehen.
- question: Wie oft sollten externe Freigaben und Mail-Weiterleitungen auf DLP-Risiken
    geprüft werden?
  answer: Weiterleitungen und externe Freigaben sensibler Sites sollten mindestens
    monatlich, der übrige Mandant vierteljährlich geprüft und mit Verantwortlichen
    dokumentiert werden.
---

## TL;DR

Microsoft Purview DLP prüft Inhalte und blockiert bekannte Muster, erkennt aber nicht jeden möglichen Datenabfluss. Prüfe externe Freigaben, externe Mail-Weiterleitungen, für alle freigegebene Power Apps und Power Automate-Connectoren, die Daten aus dem Mandanten bewegen. Bewerte Funde nach Sensibilität, weise Verantwortliche zu, dokumentiere Korrekturen und wiederhole die Prüfung regelmässig.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Erfasse sensible Sites und OneDrive-Freigaben als Ausgangslage und überwache externe Freigaben, Weiterleitungen, Power Apps und Power Automate-Connectoren, damit Konfigurationsänderungen keine neue Offenlegung verursachen.
- Security/Compliance: Priorisiere gekennzeichnete oder vertrauliche Inhalte und behandle Sites ohne Sensibilitätslabel als eigenen Fund, damit Prüfungen nachvollziehbar bleiben.
- Makers: Prüfe Flows und Connectoren, die Dateien an externe Dienste kopieren, weil dadurch Datenpfade ausserhalb der DLP-Richtlinie entstehen können.
- Leadership/Business: Fordere Verantwortliche, Fristen und wiederkehrende Prüfungen, damit Freigaben auch bei veränderter Zusammenarbeit kontrolliert bleiben.
