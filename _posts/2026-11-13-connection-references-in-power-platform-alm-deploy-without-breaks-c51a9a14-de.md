---
title: 'Power Platform ALM: Verbindungsverweise ohne Deployment-Ausfälle verwalten'
description: Lösungen transportieren Flows und Verweise, nicht die Autorisierung dahinter.
  Zielverbindungen vorbereiten, Verweise korrekt zuordnen und Flows nach dem Import
  testen.
date: '2026-11-13T16:53:15Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- environments
- ownership
- power-automate
content_type: curated_summary
curation_id: c51a9a140e9489d69975e234
image:
  path: "/assets/img/curated/c51a9a140e9489d69975e234.png"
  alt: 'Governance-Karte: A solution can import cleanly and still fail when the flow
    runs. Credentials never travel with the package.'
permalink: "/de/posts/connection-references-in-power-platform-alm-deploy-without-breaks-c51a9a14/"
translation_url: "/en/posts/connection-references-in-power-platform-alm-deploy-without-breaks-c51a9a14/"
source_url: https://softchief.com/power-platform-alm-manage-connection-references-across-environments-without-deployment-breaks/
source_site_url: https://softchief.com/
source_title: 'Power Platform ALM: Manage Connection References Across Environments
  Without Deployment Breaks'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_published_at: '2026-11-13'
source_type: article
faq:
- question: Werden Zugangsdaten beim Export einer Power Platform Lösung in eine andere
    Umgebung mitgenommen?
  answer: Nein. Lösungen enthalten nur Komponenten und Verweise. Die autorisierte
    Verbindung mit Anmeldedaten und Zustimmung muss in jeder Zielumgebung neu angelegt
    werden.
- question: Wie lege ich bei pac solution import die Verbindungsverweise über eine
    Settingsdatei fest?
  answer: Mit pac solution create-settings eine Datei erzeugen, die Zielmappings für
    Verweise und Umgebungsvariablen eintragen und die Datei dem Importbefehl übergeben.
- question: Warum läuft ein Flow nach dem Lösungsimport nicht, obwohl der Import erfolgreich
    war?
  answer: Der Import bestätigt nur die Annahme des Pakets. Fehlende, falsch verknüpfte
    oder nicht berechtigte Verbindungen können abhängige Flows weiter blockieren.
---

## TL;DR

Lösungen transportieren Flows und Verbindungsverweise zwischen Umgebungen, niemals aber die autorisierten Verbindungen selbst. Vor jedem Import die Zielverbindungen anlegen und anmelden, jeden Verweis der richtigen Identität zuordnen, Verbindungsmappings von Umgebungsvariablen getrennt halten und Bereitstellungen mit Power Platform Pipelines oder einer mit pac solution create-settings erzeugten Settingsdatei automatisieren. Danach Flows per Funktionstest prüfen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Flows und ihre Verbindungsverweise vor dem Export in die Release-Lösung aufnehmen, Verweise klar benennen und ein Inventar mit Konnektor, abhängigen Komponenten und Zielverbindung führen.
- Admins/CoE: Den Bereitstellungspfad in Pipelines festlegen, im Voraus klären, wem Produktivverbindungen gehören, und Mappings bei Besitzwechsel oder Abgängen erneut prüfen.
- Security/Compliance: Settingsdateien als Konfiguration behandeln, keine Passwörter darin ablegen und den Zugriff auf Dateien mit internen Umgebungsdetails beschränken.
