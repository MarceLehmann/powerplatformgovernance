---
title: Private Teams-Kanäle mit Power Automate erstellen
description: Microsoft Graph erstellt über HTTP mit Microsoft Entra ID private Teams-Kanäle
  mit Besitzer und festgelegten Mitgliedern.
date: '2026-09-24T15:05:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- ownership
- power-automate
content_type: curated_summary
curation_id: cdee9c2cedb6381cb78dff72
image:
  path: "/assets/img/curated/cdee9c2cedb6381cb78dff72.png"
  alt: 'Governance-Karte: A private channel needs an owner at creation.'
permalink: "/de/posts/create-private-teams-channels-from-power-automate-cdee9c2c/"
translation_url: "/en/posts/create-private-teams-channels-from-power-automate-cdee9c2c/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-162-create-private-teams-channel-from-flow/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 162: Create a Private Teams Channel from a Flow"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-07-09'
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
---
## TL;DR

Der standardmässige Teams-Connector von Power Automate kann keine privaten Kanäle erstellen. Verwende die Aktion HTTP mit Microsoft Entra ID für einen Microsoft-Graph-POST mit membershipType private und einer members-Liste mit mindestens einem Besitzer. Bis zu 200 Mitglieder sind möglich, wobei Berechtigungen und Teams-Richtlinien die Anfrage blockieren können.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Rufe Microsoft Graph über HTTP mit Microsoft Entra ID auf, setze membershipType auf private und füge mindestens einen Besitzer hinzu, damit die Erstellung nicht mit HTTP 400 fehlschlägt.
- Admins/CoE: Prüfe Channel.Create oder Group.ReadWrite.All für die ausführende Identität und erlaube private Kanäle in der Teams-Richtlinie, da sonst trotz gültiger Anfrage ein 403-Fehler entsteht.
- Security/Compliance: Behandle die members-Liste als Zugriffsgrenze, weil private Kanäle nur für aufgeführte Mitglieder sichtbar sind; verwende die zurückgegebene Kanal-ID für kontrollierte Folgeautomatisierung.
