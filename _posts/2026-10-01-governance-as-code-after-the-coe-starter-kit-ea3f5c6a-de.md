---
title: Governance as Code nach dem CoE Starter Kit
description: PAC CLI-Inventar-APIs, versionierte Regeln und wiederholbare Erfassung
  helfen, Risiken im Power-Platform-Mandanten zu verfolgen.
date: '2026-10-01T05:02:30Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- coe
- environments
- alm
- power-apps
content_type: curated_summary
curation_id: ea3f5c6a5b9fcea34ee7e4b0
image:
  path: "/assets/img/curated/ea3f5c6a5b9fcea34ee7e4b0.png"
  alt: 'Governance-Karte: AI can query governance, but deterministic capture must
    run every time.'
permalink: "/de/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
translation_url: "/en/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
source_url: https://www.karlex.fi/governance-as-code-life-after-the-coe-starter-kit/
source_site_url: https://www.karlex.fi/
source_title: 'Governance as code: life after the CoE Starter Kit'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-01'
source_type: article
---

## TL;DR

PAC CLI-Inventar-APIs zeigen Apps, Flows und Agents je Umgebung innerhalb weniger Minuten, ohne CoE-Starter-Kit-Datenbank und nächtliche Sync-Flows. PAC CLI soll aktuell bleiben und das aktive Authentifizierungsprofil muss geprüft werden. Community-Code ist vor dem Produktionseinsatz in einer Sandbox zu validieren. Umgebungszonen, Regeln und erfasster Mandantenstatus sollen versioniert und wiederholbar verwaltet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: PAC CLI-Inventardaten nutzen, um unkontrollierte Umgebungen zu erkennen, und das aktive Authentifizierungsprofil prüfen.
- Admins/CoE: Managed Environments aktivieren, aber wöchentliche Digests nicht als vollständiges Betriebswerkzeug behandeln.
- Security/Compliance: Drittanbieterpakete und Community-Dashboards in einer Sandbox validieren, bevor sie Produktion kontaktieren.
- Leadership/Business: Klare, widerspruchsfreie Governance-Regeln festlegen und Entscheidungen zu Mandantenaktionen bei Menschen belassen.
