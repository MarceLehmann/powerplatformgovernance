---
title: Attended und unattended in Power Automate Desktop
description: Attended Flows laufen mit menschlicher Aufsicht. Unattended Flows benötigen
  bezahlte Kapazität, saubere Maschinen, passende Auflösung und Standardbenutzerrechte.
date: '2026-10-27T04:50:05Z'
author: governance_editorial
lang: de
toc: false
tags:
- power-automate
- security
- environments
- compliance
content_type: curated_summary
curation_id: fd71fdc6371e2566227b9bc8
image:
  path: "/assets/img/curated/fd71fdc6371e2566227b9bc8.png"
  alt: 'Governance-Karte: Unattended bots need clean machines and controlled permissions.
    Small setup gaps can stop automation.'
permalink: "/de/posts/attended-vs-unattended-power-automate-desktop-automation-fd71fdc6/"
translation_url: "/en/posts/attended-vs-unattended-power-automate-desktop-automation-fd71fdc6/"
source_url: https://www.m365.fm/blog/attended-vs-unattended-power-automate-desktop-modes/
source_site_url: https://www.m365.fm/
source_title: 'Attended vs Unattended RPA: Which Power Automate Desktop Mode Do You
  Need?'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Kann ein Unattended Flow in Power Automate Desktop bei angemeldetem Benutzer
    laufen?
  answer: Nein. Auf der Zielmaschine darf keine aktive Benutzersitzung vorhanden sein,
    auch keine gesperrte, weil der Flow eine eigene Remotedesktopsitzung erstellt.
- question: Unterstützt die kostenlose Power Automate Desktop App Attended Flows?
  answer: Ja. Die kostenlose Windows-App unterstützt lokale Attended-Ausführung, sodass
    Benutzer Desktop-Flows ohne Premium-Lizenz auf ihrem eigenen Rechner starten können.
- question: Warum fehlen bei einem Unattended Flow in Power Automate Desktop manchmal
    Schaltflächen?
  answer: Eine Remote-Sitzung kann eine andere Bildschirmauflösung als die Entwicklungsumgebung
    verwenden. Dadurch liegen Oberflächenelemente ausserhalb des sichtbaren Bereichs
    und der Flow kann scheitern.
---

## TL;DR

Attended Flows in Power Automate Desktop laufen mit einer Person und werden von der kostenlosen Windows-App unterstützt. Unattended Flows laufen auf dedizierten Maschinen ohne Benutzersitzung, benötigen bezahlte Kapazität und können bei abweichender Remote-Auflösung oder Administratorrechten scheitern.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Wählt Attended Flows, wenn eine Person den Ablauf überwachen oder starten muss, weil Unattended Flows keine aktive Benutzersitzung zulassen.
- Admins/CoE: Richtet dedizierte Maschinen, eine konsistente Bildschirmauflösung und Standardbenutzerrechte ein, bevor Unattended Flows geplant werden.
- Leadership/Business: Trennt Lizenzierungs- und Infrastrukturbedarf von Attended und Unattended, damit Kosten und Skalierung realistisch geplant werden.
