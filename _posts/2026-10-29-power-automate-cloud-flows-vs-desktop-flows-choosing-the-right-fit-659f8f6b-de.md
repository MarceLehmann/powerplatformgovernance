---
title: Power Automate Cloud-Flows und Desktop-Flows richtig auswählen
description: Cloud-Flows verbinden moderne Dienste über APIs. Desktop-Flows automatisieren
  ältere Oberflächen. Hybride Abläufe kombinieren beide Ansätze für robuste Automatisierung.
date: '2026-10-29T16:45:02Z'
author: governance_editorial
lang: de
toc: false
tags:
- power-automate
- environments
- security
- ownership
content_type: curated_summary
curation_id: 659f8f6b48c0bcbf15d1ae94
image:
  path: "/assets/img/curated/659f8f6b48c0bcbf15d1ae94.png"
  alt: 'Governance-Karte: Use APIs in the cloud. Use desktop flows for legacy screens.'
permalink: "/de/posts/power-automate-cloud-flows-vs-desktop-flows-choosing-the-right-fit-659f8f6b/"
translation_url: "/en/posts/power-automate-cloud-flows-vs-desktop-flows-choosing-the-right-fit-659f8f6b/"
source_url: https://www.m365.fm/blog/power-automate-desktop-vs-cloud-flows/
source_site_url: https://www.m365.fm/
source_title: 'Power Automate Desktop vs Cloud Flows: Which One Do You Actually Need?'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-29'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wann sollte Power Automate einen Cloud-Flow statt eines Desktop-Flows
    verwenden?
  answer: Ein Cloud-Flow eignet sich für APIs, Microsoft 365, Konnektoren und Cloud-Orchestrierung.
    Ein Desktop-Flow ist für ältere Oberflächen ohne moderne Integrationsschnittstellen
    gedacht.
- question: Was unterscheidet beaufsichtigte und unbeaufsichtigte Power Automate Desktop-Flows?
  answer: Beaufsichtigte Flows laufen neben einer Person, die sie startet und überwacht.
    Unbeaufsichtigte Flows laufen autonom nach Zeitplan oder Backend-Ereignis ohne
    angemeldeten Bediener.
- question: Wie kann ein Power Automate Cloud-Flow Arbeit an einen Desktop-Flow übergeben?
  answer: Ein Cloud-Flow erfasst ein Ereignis, prüft Daten und steuert Genehmigungen.
    Danach kann er Transaktionsdaten für die Eingabe in ein älteres System übergeben.
animation:
  video: /assets/img/animations/659f8f6b48c0bcbf15d1ae94-de.mp4
  poster: /assets/img/animations/659f8f6b48c0bcbf15d1ae94-de.poster.webp
  width: 800
  height: 450
  alt: "Eine hybride Power Automate Abfolge erfasst ein Ereignis, prueft Daten, steuert Genehmigungen in der Cloud und uebergibt dann Transaktionsdaten an einen Desktop-Flow fuer die Eingabe in ein aelteres System."
---

## TL;DR

Power Automate Cloud-Flows laufen in Microsofts Cloud und verbinden APIs, Microsoft 365, SharePoint, Dataverse und Teams. Desktop-Flows laufen auf Computern oder virtuellen Maschinen und simulieren Benutzeraktionen in älteren Anwendungen ohne APIs. Hybride Abläufe prüfen und genehmigen Daten in der Cloud, bevor ein unbeaufsichtigter Desktop-Flow sie verarbeitet.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Cloud-Flows für API-vernetzte Dienste und Desktop-Flows für ältere Oberflächen ohne APIs auswählen, um fragile Abläufe zu vermeiden.
- Admins/CoE: Zwischen beaufsichtigter und unbeaufsichtigter Ausführung unterscheiden und Überwachung sowie Fehlerbehandlung für autonome Abläufe einplanen.
- Security/Compliance: Richtlinienprüfungen und menschliche Weiterleitung in der Cloud nutzen, bevor Desktop-Bots genehmigte Daten in ältere Systeme eintragen.
