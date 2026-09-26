---
title: Copilot-gestützte Tenant-Administration wirksam steuern
description: PnP PowerShell mit Copilot übersetzt natürlichsprachige Anfragen in Tenant-Aktionen.
  Deshalb sind Authentifizierung, Berechtigungen und Prüfungen zentrale Schutzmassnahmen.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: ccd27e07a80dd677b450b7fe
image:
  path: "/assets/img/curated/ccd27e07a80dd677b450b7fe.png"
  alt: 'Governance-Karte: Natural language can change tenant configuration. Govern
    it like administration.'
permalink: "/de/posts/govern-copilot-led-tenant-administration-ccd27e07/"
translation_url: "/en/posts/govern-copilot-led-tenant-administration-ccd27e07/"
source_url: https://pnp.github.io/blog/post/copilot-pnp-powershell-and-the-new-shape-of-microsoft-365-administration/
source_site_url: https://pnp.github.io/
source_title: Copilot, PnP PowerShell, and the New Shape of Microsoft 365 Administration
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Josiah Opiyo
source_published_at: '2026-09-10'
source_type: article
---

## TL;DR

Der PnP-PowerShell-Copilot-Agent unterstützt Einrichtung, Authentifizierung und Microsoft-365-Aufgaben wie das Erstellen von Sites, das Konfigurieren von Inhalten, das Aktualisieren von Seiten und die Verwaltung von Berechtigungen. Interaktive Anmeldung oder eine App-Registrierung sind möglich. Skripterstellung und Evaluierung sind noch in Arbeit und sollten vor dem produktiven Einsatz getestet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Beschränkt, wer den Agenten verwenden darf, prüft erzeugte Aktionen und sichert die Wartbarkeit, weil natürlichsprachige Anfragen mehrstufige Tenant-Änderungen auslösen können.
- Security/Compliance: Bewertet interaktive Anmeldung sowie zertifikats- und geheimnisbasierte Authentifizierung und die erforderlichen Berechtigungen, da jede Option die Sicherheitslage der Automatisierung beeinflusst.
