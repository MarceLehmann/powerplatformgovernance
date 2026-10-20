---
title: Generischen Custom Connector vor der Freigabe absichern
description: Ein dynamischer Custom Connector zentralisiert die API-Authentifizierung,
  doch DLP gilt für den gesamten Connector und nicht für einzelne Endpunkte.
date: '2026-10-20T16:37:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- dlp
- alm
- copilot-studio
content_type: curated_summary
curation_id: 2f86687dce48bf8ab640fbd2
image:
  path: "/assets/img/curated/2f86687dce48bf8ab640fbd2.png"
  alt: 'Governance-Karte: DLP applies to the whole connector, not each endpoint. A
    generic connector can reach any REST API.'
permalink: "/de/posts/govern-a-generic-custom-connector-before-sharing-it-2f86687d/"
translation_url: "/en/posts/govern-a-generic-custom-connector-before-sharing-it-2f86687d/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-172-generic-custom-connector-dynamic-http-request/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 172: One Custom Connector, Any Endpoint, Central
  Auth with a Dynamic HTTP Request"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-10-20'
source_updated_at: '2026-10-17'
source_type: article
faq:
- question: Wie hält ein Power Platform Custom Connector den API-Schlüssel aus Flows
    heraus?
  answer: Der API-Schlüssel wird einmal in der verschlüsselten Verbindung hinterlegt.
    Flows übergeben danach nur relativen Pfad, Abfrage und Body.
- question: Wie gilt DLP für einen generischen Custom Connector mit dynamischen Endpunkten?
  answer: DLP gilt für den gesamten Connector und nicht für einzelne Endpunkte. Da
    er jede REST-API erreichen kann, muss die Freigabe vertrauenswürdig gesteuert
    werden.
- question: Wie kann ein Custom Connector verschachtelte API-Ressourcen wie Projekte
    und Aufgaben aufrufen?
  answer: Schrägstriche in Pfadparametern werden kodiert. Für verschachtelte Ressourcen
    ist daher eine eigene parametrisierte Aktion oder benutzerdefinierter Connector-Code
    nötig.
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
---

## TL;DR

Ein Custom Connector kann einen API-Schlüssel in einer verschlüsselten Verbindung speichern und generische Aktionen mit relativePath, Abfrage und Body ausführen. DLP gilt für den gesamten Connector. Deshalb sollte ein Connector, der jede REST-API erreichen kann, vor der produktiven Freigabe gesteuert werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Übergebt relativePath, Abfrage und Body an die generische Aktion, während die gemeinsame Verbindung den API-Schlüssel aus der Flow-Logik heraushält.
- Admins/CoE: Klassifiziert und steuert den gesamten Connector vor dem Rollout, weil sein dynamisches Design jede REST-API erreichen kann.
- Leadership/Business: Plant Premium-Berechtigungen für jede Person ein, die einen Flow oder eine App mit diesem Connector ausführt.
