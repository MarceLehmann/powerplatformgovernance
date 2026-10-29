---
title: Microsoft Graph Statuscodes in Power Automate richtig behandeln
description: Statuscodes helfen bei der Diagnose von Authentifizierung, Berechtigungen
  und Drosselung in Power Automate und verhindern doppelte Datensätze durch unsichere
  Wiederholungen.
date: '2026-10-29T16:45:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- power-automate
- security
content_type: curated_summary
curation_id: c5232ae6008d52c592ca5007
image:
  path: "/assets/img/curated/c5232ae6008d52c592ca5007.png"
  alt: 'Governance-Karte: Retries can create duplicates. Know which requests are safe
    to repeat.'
permalink: "/de/posts/microsoft-graph-http-status-codes-in-power-automate-c5232ae6/"
translation_url: "/en/posts/microsoft-graph-http-status-codes-in-power-automate-c5232ae6/"
source_url: https://www.m365.fm/blog/microsoft-graph-http-status-codes-troubleshooting/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft Graph HTTP Status Codes: A Troubleshooting Guide for Power
  Automate'
source_name: M365 FM
source_language: en
source_language_name: English
source_published_at: '2026-10-29'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wie sollte Power Automate auf eine Microsoft Graph 429 Antwort reagieren?
  answer: Der Flow sollte den retry-after Header auslesen und vor der nächsten Anfrage
    warten. Sofortige Wiederholungen können die Drosselung verschärfen.
- question: Was ist der Unterschied zwischen Microsoft Graph Fehler 401 und 403?
  answer: 401 bedeutet, dass die Authentifizierung fehlgeschlagen ist oder das Token
    ungültig beziehungsweise abgelaufen ist. 403 bedeutet, dass erforderliche API
    Berechtigungen fehlen.
- question: Wie verhindert Power Automate doppelte Datensätze nach Wiederholungen
    von Microsoft Graph POST Anfragen?
  answer: Idempotenzschlüssel oder eine gezielte Fehlerbehandlung schützen POST Wiederholungen.
    Nicht idempotente Anfragen können sonst doppelte E-Mails, Datenbankzeilen oder
    Bestellungen erzeugen.
---

## TL;DR

Power Automate Flows mit Microsoft Graph sollten 401 Authentifizierungsfehler von 403 Berechtigungsfehlern unterscheiden, nach 429 Drosselung den retry-after Header abwarten und Wiederholungen von POST oder PATCH mit Idempotenzschlüsseln oder Fehlerbehandlung absichern. Kurzlebige OAuth 2.0 Bearer Tokens verringern das Risiko gegenüber statischen API-Schlüsseln.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: GET, HEAD, PUT und DELETE gelten als idempotent. POST und PATCH brauchen bei Wiederholungen Idempotenzschlüssel oder Prüfungen, weil sonst doppelte E-Mails, Zeilen oder Bestellungen entstehen können.
- Admins/CoE: 401 über Anmeldung oder Token, 403 über Entra ID Berechtigungen und 429 über retry-after behandeln. So erholen sich Flows ohne unnötige Passwortänderungen, weitere Anfragen oder zusätzliche Drosselung.
