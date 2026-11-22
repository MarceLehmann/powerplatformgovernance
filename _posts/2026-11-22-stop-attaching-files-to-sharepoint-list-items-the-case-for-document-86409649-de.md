---
title: Warum Dateien nicht an SharePoint-Listeneinträge gehören und Bibliotheken besser
  sind
description: Listenanhänge verstecken Dateien in Systemordnern, ohne Versionierung
  und ohne Purview-Aufbewahrung. Dokumentbibliotheken mit Nachschlagespalte halten
  Dateien automatisierbar und auffindbar.
date: '2026-11-22T16:49:51Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- compliance
- security
- power-automate
- copilot-studio
content_type: curated_summary
curation_id: 8640964915902fecaede98af
image:
  path: "/assets/img/curated/8640964915902fecaede98af.png"
  alt: 'Governance-Karte: Attachments hide files from flows, versioning and Purview.
    Working files belong in a library.'
permalink: "/de/posts/stop-attaching-files-to-sharepoint-list-items-the-case-for-document-86409649/"
translation_url: "/en/posts/stop-attaching-files-to-sharepoint-list-items-the-case-for-document-86409649/"
source_url: https://www.mvptreff.de/2026/11/22/finger-weg-von-der-bueroklammer-warum-dateien-nicht-an-sharepoint-listeneintraege-gehoeren/
source_site_url: https://www.mvptreff.de/
source_title: 'Finger weg von der Büroklammer: Warum Dateien nicht an SharePoint-Listeneinträge
  gehören'
source_name: MVPTreff
source_language: de
source_language_name: Deutsch
source_author: Ferdi Lethen-Oellers
source_published_at: '2026-11-22'
source_type: article
faq:
- question: Wie komme ich in Power Automate an die Anhänge eines SharePoint-Listeneintrags?
  answer: Du rufst zuerst die Anlagen ab, läufst in einer Schleife über jeden Anhang
    und holst den Inhalt einzeln. Eine Dokumentbibliothek mit Nachschlagespalte erspart
    dir diesen Umweg.
- question: Kann ein Copilot Agent SharePoint-Listenanhänge als Wissensquelle lesen?
  answer: Nein, der Agent Builder unterstützt für Listen derzeit weder Anhänge noch
    Nachschlagespalten. Dateien in Dokumentbibliotheken lassen sich als Wissensquelle
    einbinden.
- question: Greift eine Purview-Aufbewahrungsrichtlinie auch für SharePoint-Listenanhänge?
  answer: Nein, Aufbewahrungsrichtlinien unterstützen keine Listenelemente. Nur ein
    Label, das den Eintrag als Datensatz kennzeichnet, nimmt den Anhang mit.
---

## TL;DR

SharePoint-Listenanhänge liegen in versteckten Ordnern, erben die Rechte des Eintrags und werden nicht versioniert; ein einzelner Anhang darf höchstens 250 MB gross sein. Power Automate braucht zwei Aktionen plus Schleife, Graph liefert nur Ja oder Nein, Purview-Aufbewahrung greift nicht für Listenelemente, und Copilot Agents sehen Anhänge nicht. Dokumentbibliotheken mit Nachschlagespalte bieten Versionierung, Metadaten, Aufbewahrung und Agent-Zugriff.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Power Automate braucht für Listenanhänge zwei Aktionen plus Schleife, und Graph kann Anhänge nicht laden. Eine Dokumentbibliothek mit Nachschlagespalte liefert Datei und Metadaten in einem Schritt.
- Admins/CoE: Erhebe mit PnP PowerShell (seit September 2024 mit eigener Entra-App-Registrierung), welche Listen Anhänge nutzen, plane Umwandlung oder Nachschlageanbindung und deaktiviere Anlagen erst nach geprüfter Migration in einer Testkopie.
- Security/Compliance: Aufbewahrungsrichtlinien greifen nicht für Listenelemente, Standard-Vertraulichkeitslabels gibt es nur pro Bibliothek, und Anhänge erben die Rechte des Eintrags. Dateien in Bibliotheken schliessen diese Lücken.
