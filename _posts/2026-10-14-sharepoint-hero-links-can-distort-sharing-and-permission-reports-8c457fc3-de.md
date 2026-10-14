---
title: SharePoint Hero Links verfälschen Berichte zu Freigaben und Berechtigungen
description: Hero-Links können ohne eindeutige Berechtigungen existieren. Inventare
  müssen daher die Vererbung prüfen, bevor jeder Link als bewusste Freigabe gilt.
date: '2026-10-14T10:39:45Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
content_type: curated_summary
curation_id: 8c457fc386f032ccdb0406fe
image:
  path: "/assets/img/curated/8c457fc386f032ccdb0406fe.png"
  alt: 'Governance-Karte: A sharing link is not proof of a permission break. Check
    inheritance before acting.'
permalink: "/de/posts/sharepoint-hero-links-can-distort-sharing-and-permission-reports-8c457fc3/"
translation_url: "/en/posts/sharepoint-hero-links-can-distort-sharing-and-permission-reports-8c457fc3/"
source_url: https://reshmeeauckloo.com/posts/sharepoint-herolink-inventory-powershell/
source_site_url: https://reshmeeauckloo.com/
source_title: SharePoint Sharing/Hero Link inventory
source_name: Blog about anything related to my learnings
source_language: en
source_language_name: English
source_published_at: '2026-10-13'
source_type: article
faq:
- question: Wie verhält sich SharePoint Copy link bei aktivierten Hero-Links?
  answer: Copy link liefert den Hero-Link statt des zugrunde liegenden Pfads, auch
    wenn OnlyPeopleAdded als Standardeinstellung festgelegt ist.
- question: Was zeigt HasUniqueRoleAssignments in einem SharePoint-Freigabeinventar?
  answer: Das Feld zeigt, ob Datei oder Ordner eindeutige Berechtigungen besitzen,
    und trennt dadurch Berechtigungsabweichungen vom Hero-Link-Rauschen.
- question: Warum kann ein SharePoint-Hero-Link als Anonymous mit leeren Benutzern
    erscheinen?
  answer: Hero-Links können den Bereich Anonymous, kein Ablaufdatum und leere Benutzer
    melden, obwohl zusätzliche Benutzer hinzugefügt wurden.
---

## TL;DR

Ein PnP-PowerShell-Inventar listet Datei- und Ordnerfreigaben in SharePoint auf und vergleicht jedes Element mit HasUniqueRoleAssignments. Hero-Links können ohne eindeutige Berechtigungen existieren und als Anonymous, ohne Ablaufdatum, mit leeren Benutzern und dem Typ View erscheinen. Exporte müssen daher vor einer Bereinigung eingeordnet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Führt das Inventar aus und vergleicht jeden Link mit HasUniqueRoleAssignments, weil ein Hero-Link keine unterbrochene Vererbung beweist.
- Security/Compliance: Wertet Anonymous, leere Benutzer und fehlende Ablaufdaten nur als mögliche Hero-Link-Hinweise, nicht als sicheren Nachweis einer bewussten Offenlegung.
- Leadership/Business: Plant für Migration und Bereinigung zusätzlichen Aufwand ein, weil Copy link undurchsichtige Hero-Link-IDs statt verständlicher Pfade liefern kann.
