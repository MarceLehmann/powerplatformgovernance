---
title: 'Power Pages BYOC: React-Websites mit Dataverse-Zugriff absichern'
description: Eine Anleitung für React-Code in Power Pages mit Web-API-Freigaben, CSRF-Schutz,
  Authentifizierung und Dataverse-Berechtigungen.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- environments
- dataverse
- power-apps
- ownership
content_type: curated_summary
curation_id: c1329ce18ed5992ab5d172ac
image:
  path: "/assets/img/curated/c1329ce18ed5992ab5d172ac.png"
  alt: 'Governance-Karte: Power Pages security follows the data path. Lock down Web
    API fields, table permissions, and user access.'
permalink: "/de/posts/power-pages-byoc-secure-react-sites-with-dataverse-access-controls-c1329ce1/"
translation_url: "/en/posts/power-pages-byoc-secure-react-sites-with-dataverse-access-controls-c1329ce1/"
source_url: https://readyxrm.blog/2026/01/02/power-pages-bring-your-own-code/
source_site_url: https://readyxrm.blog/
source_title: 'Power Pages: Bring your own code! (Tutorial)'
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-01-02'
source_updated_at: '2026-01-02'
source_type: article
faq:
  - question: "Wie erlaube ich einer React-Single-Page-App, Dataverse-Daten zu lesen?"
    answer: "Jede Tabelle wird über die Websiteeinstellung Webapi/tablename/enabled mit dem Wert true freigegeben, und die Spalten werden in Webapi/tablename/fields namentlich aufgeführt."
  - question: "Wie begrenzt das Tutorial, welche Datensätze ein angemeldeter Benutzer sieht?"
    answer: "Das Tutorial konfiguriert Tabellenberechtigungen und Webrollen so, dass nur authentifizierte Benutzer ihre eigenen Sitzungsdatensätze sehen."
  - question: "Welche Einschränkungen nennt der Artikel für BYOC-Code-Sites?"
    answer: "Die lokale Vorschau erreicht Dataverse nicht, daher testet man die Integration nach dem Hochladen auf Power Pages. Das Design Studio deaktiviert für Code-Sites die Arbeitsbereiche für Seiten und Stile."
---

## TL;DR

Power Pages Single-Page-Anwendungen können eine React-Website hosten und gleichzeitig die Power-Pages-Authentifizierung sowie Dataverse-Sicherheit nutzen. Die Anleitung aktiviert nur benötigte Tabellen und Spalten für die Web-API, verwendet ein CSRF-Token, konfiguriert Tabellenberechtigungen und Webrollen, ergänzt Entra External ID und begrenzt Datensätze auf den angemeldeten Benutzer.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: React-Websites in einer Nicht-Produktionsumgebung bauen und testen und den erzeugten Code sowie das Verhalten der Web-API vor der Bereitstellung prüfen.
- Admins/CoE: Nur benötigte Dataverse-Tabellen und Spalten aktivieren, keinen Stern für alle Felder verwenden und Tabellenberechtigungen sowie Webrollen ausdrücklich konfigurieren.
- Security/Compliance: CSRF-Token für Web-API-Aufrufe verlangen und den Zugriff ohne Anmeldung, mit Anmeldung und nach der Abmeldung testen, damit Benutzer keine fremden Datensätze abrufen können.
- Leadership/Business: Die programmierte Oberfläche als Erweiterung der Power-Pages-Kontrollen behandeln, nicht als Ersatz für Hosting, Authentifizierung und Datensicherheit.
