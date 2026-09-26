---
title: Add Shortcut to OneDrive mit einer mandantenweiten Einstellung steuern
description: Ein fokussiertes PnP-PowerShell-Skript deaktiviert Add Shortcut to OneDrive
  in SharePoint Online mandantenweit per zertifikatsbasierter Authentifizierung.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
content_type: curated_summary
curation_id: e21cc5a0f1ec41f0a51b1b10
image:
  path: "/assets/img/curated/e21cc5a0f1ec41f0a51b1b10.png"
  alt: 'Governance-Karte: Tenant settings need control. Disable unwanted shortcuts
    consistently.'
permalink: "/de/posts/control-add-shortcut-to-onedrive-with-a-tenant-level-setting-e21cc5a0/"
translation_url: "/en/posts/control-add-shortcut-to-onedrive-with-a-tenant-level-setting-e21cc5a0/"
source_url: https://pnp.github.io/blog/post/taking-control-of-add-shortcut-to-onedrive-in-sharepoint-online/
source_site_url: https://pnp.github.io/
source_title: Taking Control of Add Shortcut to OneDrive in SharePoint Online
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Josiah Opiyo
source_published_at: '2026-09-04'
source_type: article
---

## TL;DR

Mit DisableAddToOneDrive = True wird Add Shortcut to OneDrive in SharePoint Online auf Mandantenebene deaktiviert. Der beschriebene PnP-PowerShell-Ablauf verbindet sich per Azure-AD-App-Registrierung und Zertifikat mit der SharePoint-Administration, protokolliert die Ausführung, meldet Erfolg oder Fehler und trennt die Verbindung sauber.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Die Einstellung DisableAddToOneDrive per fokussiertem PnP-PowerShell-Skript auf Mandantenebene anwenden, wenn manuelle oder standortweise Verwaltung nicht ausreicht.
- Security/Compliance: Die beschriebene nicht-interaktive App-Registrierung mit Zertifikat und die Ausführungsprotokollierung für einen wiederholbaren Verwaltungsprozess nutzen.
- Leadership/Business: Abwägen, ob der Komfort von SharePoint-Verknüpfungen Governance- und Support-Risiken überwiegt, da die Einstellung die Funktion im gesamten Mandanten entfernt.
