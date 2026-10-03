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
faq:
  - question: "Welche Einstellung schaltet Zu OneDrive hinzufügen für den ganzen SharePoint-Tenant ab?"
    answer: "Die Einstellung heisst DisableAddToOneDrive und wird auf True gesetzt. Sie gilt auf Tenant-Ebene, nicht pro Site, und wird mit einem PnP-PowerShell-Skript gesetzt. Damit lässt sich die Funktion, mit der Nutzer Verknüpfungen von SharePoint-Ordnern in ihr OneDrive legen, organisationsweit steuern, wenn du sie aus Governance- oder Supportgründen einschränken möchtest."
  - question: "Warum ein Skript statt manueller Verwaltung für diese SharePoint-Einstellung?"
    answer: "Der Autor wollte die Einstellung weder manuell noch pro Site verwalten, denn gefordert war eine Änderung auf Tenant-Ebene. Die Microsoft-365-Oberfläche war zudem nicht ideal für etwas Wiederholbares, das sich in einen administrativen Ablauf einbinden lässt, und die Anmeldung musste ohne interaktive Administrator-Anmeldung funktionieren. Ein Skript erfüllt diese Anforderungen."
  - question: "Wie meldet sich das Skript ohne interaktive Anmeldung beim Tenant an?"
    answer: "Es nutzt zertifikatsbasierte, nicht interaktive Authentifizierung über eine Azure-AD-App-Registrierung. Dafür brauchst du die Client-ID, den Fingerabdruck des Zertifikats und die Tenant-Kennung. Das Verfahren passt gut zu Umgebungen, in denen die Microsoft-365-Verwaltung bereits mit Zertifikaten arbeitet, und macht das Skript für Automatisierungen tauglich."
  - question: "Welche Schritte führt das Skript für die Einstellung DisableAddToOneDrive aus?"
    answer: "Es verbindet sich mit der SharePoint-Online-Verwaltungsseite des Tenants, meldet sich per Zertifikat an, protokolliert Startzeit und ausführenden Administrator, deaktiviert die Funktion auf Tenant-Ebene, meldet Erfolg oder Fehler und trennt die Verbindung. In der Struktur aus try, catch und finally versucht der finally-Block, die Verbindung unabhängig vom Ergebnis zu trennen. Die Konfigurationswerte stehen am Anfang des Skripts."
  - question: "Welche Verbesserungen schlägt der Autor für das Skript zu Zu OneDrive hinzufügen vor?"
    answer: "Er nennt als mögliche Erweiterungen eine detailliertere Protokollierung, eine Prüfung der Konfigurationswerte, strukturierte Ausgaben für Automatisierungsplattformen und das Anzeigen der aktuellen Tenant-Einstellung vor jeder Änderung. Das vollständige Skript liegt auf GitHub im PnP-Script-Samples-Repository, im Beispiel zum Deaktivieren der SharePoint-Online-Funktion Zu OneDrive hinzufügen."
---

## TL;DR

Mit DisableAddToOneDrive = True wird Add Shortcut to OneDrive in SharePoint Online auf Mandantenebene deaktiviert. Der beschriebene PnP-PowerShell-Ablauf verbindet sich per Azure-AD-App-Registrierung und Zertifikat mit der SharePoint-Administration, protokolliert die Ausführung, meldet Erfolg oder Fehler und trennt die Verbindung sauber.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Die Einstellung DisableAddToOneDrive per fokussiertem PnP-PowerShell-Skript auf Mandantenebene anwenden, wenn manuelle oder standortweise Verwaltung nicht ausreicht.
- Security/Compliance: Die beschriebene nicht-interaktive App-Registrierung mit Zertifikat und die Ausführungsprotokollierung für einen wiederholbaren Verwaltungsprozess nutzen.
- Leadership/Business: Abwägen, ob der Komfort von SharePoint-Verknüpfungen Governance- und Support-Risiken überwiegt, da die Einstellung die Funktion im gesamten Mandanten entfernt.
