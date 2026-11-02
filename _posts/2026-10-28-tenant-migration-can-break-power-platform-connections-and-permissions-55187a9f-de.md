---
title: 'Tenantwechsel: Power Platform Verbindungen und Berechtigungen können brechen'
description: Bei einem Tenantwechsel können Teams-Chats, Berechtigungen, Power Automate
  Verbindungen und Power Apps Abhängigkeiten getrennt werden und müssen gezielt neu
  aufgebaut werden.
date: '2026-10-28T16:43:13Z'
author: governance_editorial
lang: de
toc: false
tags:
- environments
- alm
- power-apps
- power-automate
content_type: curated_summary
curation_id: 55187a9f2f752480b9465ebe
image:
  path: "/assets/img/curated/55187a9f2f752480b9465ebe.png"
  alt: 'Governance-Karte: Tenant moves break the wiring. Reconnect every dependency
    before cutover.'
permalink: "/de/posts/tenant-migration-can-break-power-platform-connections-and-permissions-55187a9f/"
translation_url: "/en/posts/tenant-migration-can-break-power-platform-connections-and-permissions-55187a9f/"
source_url: https://www.m365.fm/blog/m365-tenant-to-tenant-migration-teams-chat-history/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft 365 Tenant-to-Tenant Migration Chat History: What Survives
  and What Breaks'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-28'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Was passiert mit Power Automate Verbindungsreferenzen nach einem Tenantwechsel?
  answer: Power Automate Verbindungsreferenzen zeigen auf den alten Tenant und brechen
    nach der Migration. Entwickler müssen sich neu anmelden und jeden Trigger sowie
    jede Aktion verbinden.
- question: Warum müssen Teams-Kanalberechtigungen nach einem Tenantwechsel neu aufgebaut
    werden?
  answer: Teams-Kanalberechtigungen werden nicht automatisch über Tenant-Grenzen kopiert.
    Administratoren müssen den Zugriff in der Zielumgebung bewusst zuordnen und neu
    erstellen.
- question: Migrieren native Microsoft-Tools vollständige Teams-Chatverläufe?
  answer: Native Tools verarbeiten Kernbereiche wie Postfächer und grundlegende OneDrive-Inhalte.
    Komplexe Teams-Chatverläufe benötigen in der Regel spezialisierte Drittanbieter-Lösungen.
animation:
  video: /assets/img/animations/55187a9f2f752480b9465ebe-de.mp4
  poster: /assets/img/animations/55187a9f2f752480b9465ebe-de.poster.webp
  width: 800
  height: 450
  alt: "Die Animation zeigt, wie ein Tenantwechsel alte Power Automate Verweise bricht, dann jeden Trigger und jede Aktion neu authentifiziert werden und danach Berechtigungen fuer Teams und SharePoint neu zugeordnet werden."
---

## TL;DR

Power Automate Flows und Power Apps sind an Benutzerkonten und SharePoint-Site-IDs des Ursprungstenants gebunden. Nach dem Wechsel brechen Verbindungsreferenzen. Entwickler müssen deshalb jeden Trigger und jede Aktion im Zieltenant erneut authentifizieren. Berechtigungen für Teams-Kanäle und SharePoint-Sites müssen ebenfalls neu zugeordnet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Jeden Power Automate Trigger und jede Aktion nach der Migration neu verbinden, weil übertragene Flow-Definitionen mit Verweisen auf den alten Tenant weiterhin ausfallen können.
- Admins/CoE: Zielberechtigungen planen und Zugriffe für Teams-Kanäle, SharePoint-Sites und Dokumente neu aufbauen, weil Tenant-Grenzen die Verknüpfungen nicht automatisch übertragen.
- Security/Compliance: Chatverläufe, geteilte Links und Berechtigungen als Migrationsrisiken behandeln, weil die Tenant-Isolation historischen Kontext trennen und den Zugriff auf wichtige Daten verhindern kann.
- Leadership/Business: Ein geplantes Freeze- und Cutover-Verfahren verlangen, weil Datenabweichungen und ausgefallene Automatisierungen die Geschäftskontinuität nach einer Fusion oder Abspaltung stören können.
