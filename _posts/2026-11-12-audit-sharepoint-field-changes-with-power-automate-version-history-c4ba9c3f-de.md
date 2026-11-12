---
title: SharePoint-Feldänderungen mit Power Automate und Versionsverlauf prüfen
description: Der SharePoint-REST-Endpunkt für Versionen vergleicht die zwei neuesten
  Elementversionen und erfasst Änderungen mit alten und neuen Feldwerten.
date: '2026-11-12T10:41:06Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- compliance
- power-automate
content_type: curated_summary
curation_id: c4ba9c3f9a7ebd12ade35b6f
image:
  path: "/assets/img/curated/c4ba9c3f9a7ebd12ade35b6f.png"
  alt: 'Governance-Karte: SharePoint versions reveal the old value. Compare them before
    your flow writes the audit trail.'
permalink: "/de/posts/audit-sharepoint-field-changes-with-power-automate-version-history-c4ba9c3f/"
translation_url: "/en/posts/audit-sharepoint-field-changes-with-power-automate-version-history-c4ba9c3f/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-177-sharepoint-version-changes-power-automate/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 177: See What Actually Changed Between SharePoint
  Versions with Power Automate"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-11-12'
source_type: article
faq:
- question: Wie ruft Send an HTTP request to SharePoint frühere Feldwerte ab?
  answer: Eine GET-Anfrage an den Endpunkt /versions des Elements liefert die Feldwerte
    jeder gespeicherten SharePoint-Version. Der Flow vergleicht diese Einträge.
- question: Wie vergleicht Power Automate die zwei neuesten SharePoint-Versionen?
  answer: Sortiere die zurückgegebenen Versionen absteigend nach VersionId, speichere
    die ersten zwei Einträge in Variablen und vergleiche ausgewählte interne Spaltennamen.
- question: Warum muss die SharePoint-Versionsverwaltung für den Vergleich aktiviert
    sein?
  answer: Die Versionsverwaltung muss für Liste oder Bibliothek aktiviert sein, weil
    /versions die historischen Einträge für den Vergleich alter und neuer Werte liefert.
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
---

## TL;DR

Verwende in Power Automate Send an HTTP request to SharePoint mit einer GET-Anfrage an den Endpunkt /versions des Elements. Sortiere nach VersionId, vergleiche die zwei neuesten Einträge für ausgewählte interne Spaltennamen und speichere alte und neue Werte. Die Versionsverwaltung muss aktiviert sein, und mindestens zwei Versionen müssen vorhanden sein.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Vergleicht ausgewählte interne Spaltennamen zwischen den zwei neuesten Versionen, damit für jedes überwachte Feld alte und neue Werte erkennbar sind.
- Admins/CoE: Aktiviert die Versionsverwaltung für relevante SharePoint-Listen und Bibliotheken und schützt den Flow vor Elementen mit weniger als zwei Versionen.
- Security/Compliance: Speichert oder verteilt die erzeugten Feldänderungen als Prüfspur, weil der Standardtrigger nur den neuen Zustand liefert.
