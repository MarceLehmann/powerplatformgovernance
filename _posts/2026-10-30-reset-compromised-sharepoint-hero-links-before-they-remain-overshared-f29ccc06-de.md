---
title: Kompromittierte SharePoint Hero Links zurücksetzen, bevor sie weiter geteilt
  werden
description: SharePoint Hero Links können nicht direkt gelöscht werden. Das Zurücksetzen
  eines Anyone-Links macht die alte URL ungültig, erstellt einen eingeschränkten Ersatz
  und kann den Zugriff entziehen.
date: '2026-10-30T16:47:00Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- governance
content_type: curated_summary
curation_id: f29ccc06144994bfb3b724fb
image:
  path: "/assets/img/curated/f29ccc06144994bfb3b724fb.png"
  alt: 'Governance-Karte: Reset compromised Hero Links before oversharing spreads.'
permalink: "/de/posts/reset-compromised-sharepoint-hero-links-before-they-remain-overshared-f29ccc06/"
translation_url: "/en/posts/reset-compromised-sharepoint-hero-links-before-they-remain-overshared-f29ccc06/"
source_url: https://reshmeeauckloo.com/posts/sharepoint-herolink-reset/
source_site_url: https://reshmeeauckloo.com/
source_title: SharePoint Hero Link reset
source_name: Blog about anything related to my learnings
source_language: en
source_language_name: English
source_published_at: '2026-10-30'
source_type: article
faq:
- question: Wie widerrufe ich einen zu weit freigegebenen SharePoint Hero Link?
  answer: Verwendet für Datei oder Ordner die Option zum Zurücksetzen des Links. Sie
    macht den aktuellen Hero Link ungültig und erstellt einen Ersatz für Nur hinzugefügte
    Personen.
- question: Was geschieht nach dem Zurücksetzen eines SharePoint Hero Links mit den
    Benutzern?
  answer: Personen, die nur über die alte URL Zugriff hatten, verlieren diesen. Das
    Zurücksetzen stellt ihren Zugriff auf das Element nicht wieder her.
- question: Wie setzt PnP-PowerShell SharePoint Hero Links auf einer Site zurück?
  answer: Das Skript prüft Elemente mit eindeutigen Berechtigungen, erkennt Hauptlinks
    mit der Zielgruppe Anyone, setzt sie zurück und exportiert alte sowie neue Details
    als CSV.
animation:
  video: /assets/img/animations/f29ccc06144994bfb3b724fb-de.mp4
  poster: /assets/img/animations/f29ccc06144994bfb3b724fb-de.poster.webp
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt, wie ein Skript Elemente mit eindeutigen Berechtigungen prueft, Anyone Hauptlinks findet, den Link zuruecksetzt und alte sowie neue Details als CSV exportiert."
---

## TL;DR

SharePoint Hero Links lassen sich nicht wie herkömmliche Freigabelinks löschen. Die Option zum Zurücksetzen macht die aktuelle URL ungültig, erstellt einen neuen Link für Nur hinzugefügte Personen und entfernt den Zugriff für Personen, die nur den alten Link hatten. Ein PnP-PowerShell-Skript findet eindeutige Berechtigungen mit Anyone-Links und exportiert alte sowie neue Details als CSV.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Prüft Zielsite und erwartete Zugriffsauswirkungen vor dem Zurücksetzen eines Anyone-Hero-Links, da die alte URL ungültig wird und Link-Nutzer den Zugriff verlieren.
- Security/Compliance: Behandelt einen zu weit freigegebenen Hero Link als Widerrufsfall und bewahrt den CSV-Bericht mit alten und neuen Linkdetails zur Prüfung auf.
