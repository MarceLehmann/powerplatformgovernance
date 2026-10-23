---
title: Power Platform Datenrichtlinien erstellen, ohne Benutzer-Apps zu beschädigen
description: Business-, Nicht geschäftlich- und Blockiert-Gruppen, getrennte Umgebungen
  und Überwachung schützen Daten, ohne Schatten-IT zu fördern.
date: '2026-10-23T04:42:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- dlp
- security
- environments
- coe
- dataverse
content_type: curated_summary
curation_id: a30d51f658eea807ac7ee994
image:
  path: "/assets/img/curated/a30d51f658eea807ac7ee994.png"
  alt: 'Governance-Karte: Connector categories are governance boundaries. Business
    data must not mix with Non-Business services.'
permalink: "/de/posts/how-to-build-power-platform-data-policies-without-breaking-user-apps-a30d51f6/"
translation_url: "/en/posts/how-to-build-power-platform-data-policies-without-breaking-user-apps-a30d51f6/"
source_url: https://www.m365.fm/blog/power-platform-data-policies-guide/
source_site_url: https://www.m365.fm/
source_title: How to Build Data Policies in Power Platform Without Breaking User Apps
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-22'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wie funktionieren Business- und Nicht geschäftlich-Connectorgruppen in
    Power Platform DLP-Richtlinien?
  answer: Business-Connectors dürfen Daten mit anderen Business-Connectors teilen,
    aber nicht mit Nicht geschäftlich-Connectors. Dadurch wird die Weitergabe an öffentliche
    Dienste begrenzt.
- question: Was passiert, wenn eine Power Platform DLP-Richtlinie einen Connector
    als Blockiert einstuft?
  answer: Apps oder Cloud-Flows, die einen blockierten Connector aufrufen, scheitern
    sofort. Admins können diese Gruppe für unerlaubte Dateifreigaben oder ungeprüfte
    KI-Tools verwenden.
- question: Wie können sich Power Platform DLP-Richtlinien zwischen Entwickler- und
    Produktionsumgebungen unterscheiden?
  answer: Admins können DLP-Richtlinien auf bestimmte Umgebungen begrenzen. Entwickler-Sandboxes
    können lockerere Regeln nutzen, während Produktionsumgebungen stärkere Kontrollen
    erzwingen.
animation:
  src: /assets/img/animations/a30d51f658eea807ac7ee994-de.gif
  poster: /assets/img/animations/a30d51f658eea807ac7ee994-de.poster.png
  width: 800
  height: 450
  alt: "Eine Abfolge mit 3 Schritten zeigt die DLP-Richtlinieneinrichtung: Connectors klassifizieren, unterschiedliche Regeln fuer Entwickler- und Produktionsumgebungen anwenden und die Durchsetzung mit Reporting ueberwachen."
---

## TL;DR

Power Platform DLP-Richtlinien teilen Connectors in Business, Nicht geschäftlich oder Blockiert ein. Business-Connectors dürfen keine Daten mit Nicht geschäftlich-Connectors teilen, während blockierte Connectors Apps und Flows scheitern lassen. Admins können Entwickler- und Produktionsumgebungen trennen und die Durchsetzung mit dem CoE Starter Kit sowie Berichten im Admin Center überwachen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Connectors in Business, Nicht geschäftlich oder Blockiert einordnen und neue Connectors regelmässig prüfen, um unsichere Datenflüsse zu verhindern.
- Makers: Für Experimente vorgesehene Entwickler-Sandboxes verwenden und beim Übergang in die Produktion mit strengeren Richtlinien rechnen.
- Security/Compliance: Telemetrie und Berichte auf Richtlinienverstösse, beschädigte Apps sowie zu strenge oder zu lockere Regeln prüfen.
