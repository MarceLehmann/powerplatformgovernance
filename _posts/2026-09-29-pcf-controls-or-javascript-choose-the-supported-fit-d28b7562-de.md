---
title: 'PCF-Steuerelemente oder JavaScript in Dynamics 365: Die passende Wahl'
description: PCF oder JavaScript sollte nach Benutzererlebnis, App-Kontext, Wartbarkeit
  und Sicherheitsanforderungen ausgewählt werden.
date: '2026-09-29T11:14:41Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- security
- ownership
- power-apps
content_type: curated_summary
curation_id: d28b756205bcef8a79a30efd
image:
  path: "/assets/img/curated/d28b756205bcef8a79a30efd.png"
  alt: 'Governance-Karte: Use the smallest supported tool. Client-side checks do not
    secure critical data.'
permalink: "/de/posts/pcf-controls-or-javascript-choose-the-supported-fit-d28b7562/"
translation_url: "/en/posts/pcf-controls-or-javascript-choose-the-supported-fit-d28b7562/"
source_url: https://softchief.com/pcf-controls-vs-javascript-in-dynamics-365-which-customization-approach-should-you-use/
source_site_url: https://softchief.com/
source_title: 'PCF Controls vs JavaScript in Dynamics 365: Which Customization Approach
  Should You Use?'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-09-29'
source_type: article
---

## TL;DR

PCF eignet sich für wiederverwendbare Benutzeroberflächen wie Schieberegler, Wählräder, Kalender, Karten oder spezielle Datenansichten. JavaScript passt zu unterstützten Formularereignissen in modellgesteuerten Apps, etwa Laden, Ändern und Speichern. App- und Feldkompatibilität prüfen, Releases paketieren und testen sowie kritische Regeln serverseitig durchsetzen, da clientseitige Logik Daten nicht absichert.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: PCF für wiederverwendbare Oberflächen und JavaScript für gezieltes Formularverhalten wählen; unterstützte APIs nutzen und direkte DOM-Änderungen vermeiden.
- Admins/CoE: Ziel-App, Feldunterstützung, Lösungspaketierung, Umgebungseinstellungen, Freigaben und langfristige Eigentümerschaft vor der Umsetzung dokumentieren; importierte Releases in der Zielumgebung testen.
- Security/Compliance: Ausgeblendete Felder und Browser-Prüfungen nur als Benutzerführung behandeln; Berechtigungen und serverseitige Durchsetzung für kritische Datenregeln einsetzen.
