---
title: Per-App-Benutzer vor der ersten Anmeldung in Dataverse provisionieren
description: Ein Sicherheitsgruppen-Trigger und Force Sync user im Power Platform
  for Admins Connector provisionieren Per-App-Benutzer vor Zugriffsfehlern.
date: '2026-10-29T10:34:38Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- dataverse
- power-automate
content_type: curated_summary
curation_id: '0698abef7fa3372fde475a2a'
image:
  path: "/assets/img/curated/0698abef7fa3372fde475a2a.png"
  alt: 'Governance-Karte: Per-app users are not synced automatically. Provision them
    before first login.'
permalink: "/de/posts/provision-per-app-users-in-dataverse-before-their-first-login-0698abef/"
translation_url: "/en/posts/provision-per-app-users-in-dataverse-before-their-first-login-0698abef/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-175-force-sync-per-app-users-dataverse-power-automate/
source_site_url: https://www.powerplatformtip.com/
source_title: Force-Sync Per-App-Licensed Users into Dataverse with Power Automate
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-10-29'
source_updated_at: '2026-10-28'
source_type: article
faq:
- question: Wie provisioniere ich Per-App-Benutzer mit Force Sync user in Dataverse?
  answer: Startet einen Flow beim Beitritt zur Umgebungssicherheitsgruppe und ruft
    danach Force Sync user mit Umgebungs-ID und Entra-Objekt-ID auf.
- question: Warum fehlen Per-App-lizenzierte Benutzer in der Dataverse-SystemUser-Tabelle?
  answer: Per-App-Benutzer werden in einer Dataverse-Umgebung nur bei Bedarf angelegt,
    während Premium-Benutzer durch die regelmässige Hintergrundsynchronisierung erfasst
    werden.
- question: Vergibt Dataverse Force Sync user automatisch Sicherheitsrollen?
  answer: Nein. Force Sync user erstellt oder aktualisiert den SystemUser-Eintrag;
    Berechtigungen benötigen zusätzlich eine Teamzuweisung oder direkte Sicherheitsrollenzuweisung.
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
animation:
  src: /assets/img/animations/0698abef7fa3372fde475a2a-de.gif
  poster: /assets/img/animations/0698abef7fa3372fde475a2a-de.poster.png
  width: 800
  height: 450
  alt: "Die Abfolge zeigt den Beitritt eines Benutzers zur Umgebungssicherheitsgruppe, einen Power-Automate-Flow mit Force Sync user und den Benutzer in Dataverse vor der ersten Anmeldung."
---

## TL;DR

In verwalteten Produktionsumgebungen mit Per-App-Lizenzierung werden Benutzer nicht durch die Hintergrundsynchronisierung in Dataverse angelegt. Ein Power-Automate-Flow reagiert auf den Beitritt zur Umgebungsgruppe und ruft Force Sync user mit Umgebungs-ID und Entra-Objekt-ID vor der ersten Anmeldung auf.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Prüft, ob neue Per-App-Benutzer vor dem App-Start in Dataverse erscheinen, weil fehlende SystemUser-Einträge Organisationszugriffsfehler auslösen können.
- Admins/CoE: Löst Force Sync user über die Sicherheitsgruppenmitgliedschaft aus und verwaltet Zielumgebungen mit Environment Groups für einheitliches Onboarding.
- Security/Compliance: Verwendet die Umgebungssicherheitsgruppe als verbindliches Mitgliedersignal und keine rollenfähigen Gruppen, da der beschriebene Trigger diese nicht unterstützt.
- Leadership/Business: Erwartet ein schnelleres Onboarding ohne manuelle Aktualisierung, aber beachtet, dass die Synchronisierung allein keine Sicherheitsrollen vergibt.
