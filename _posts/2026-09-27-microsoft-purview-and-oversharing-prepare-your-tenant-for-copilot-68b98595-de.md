---
title: 'Microsoft Purview und Oversharing: Tenant für Copilot vorbereiten'
description: SharePoint-Berechtigungen prüfen, Purview-Labels anwenden, alte Inhalte
  archivieren und Power-Automate-DLP vor dem Copilot-Einsatz erzwingen.
date: '2026-09-27T00:08:18Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- dlp
- power-automate
content_type: curated_summary
curation_id: 68b98595ee13782610d2e7c5
image:
  path: "/assets/img/curated/68b98595ee13782610d2e7c5.png"
  alt: 'Governance-Karte: Copilot respects permissions. It does not repair oversharing.'
permalink: "/de/posts/microsoft-purview-and-oversharing-prepare-your-tenant-for-copilot-68b98595/"
translation_url: "/en/posts/microsoft-purview-and-oversharing-prepare-your-tenant-for-copilot-68b98595/"
source_url: https://www.m365.fm/blog/microsoft-purview-oversharing-copilot-tenant-readiness/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft Purview and Over-Sharing: Preparing Your Tenant for Copilot'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-09-24'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
  - question: "Warum bringt Copilot Dateien ans Licht, die jahrelang unauffindbar blieben?"
    answer: "Copilot sucht in natürlicher Sprache über alles, was ein Benutzer lesen darf, Sicherheit durch Unauffindbarkeit endet damit. Tief vergrabene oder zu weit geteilte Dateien, die per Stichwortsuche niemand fand, sind plötzlich sofort abrufbar. Laut Artikel ist das kein Fehler von Copilot, sondern alte Governance-Nachlässigkeit: Copilot hält sich an Berechtigungen und deckt schwache auf."
  - question: "Welche Purview-Funktionen nennt der Artikel als Mindestanforderung für Copilot?"
    answer: "Vertraulichkeitsbezeichnungen und automatische Klassifizierung. Laut Artikel bestimmen die Bezeichnungen, ob Inhalte von Copilot-Agenten indexiert, zusammengefasst oder herangezogen werden dürfen. Weiter heisst es, Administratoren sollten automatische Kennzeichnungsrichtlinien einsetzen, damit neu erstellte Dokumente mit personenbezogenen Daten oder geistigem Eigentum klassifiziert und eingeschränkt werden."
  - question: "Wie finde ich Oversharing in SharePoint, Teams und OneDrive?"
    answer: "Der Artikel verweist auf die Oversharing-Berichte in den erweiterten SharePoint-Verwaltungsdashboards, die gefährdete Sites in Teams, OneDrive und SharePoint aufzeigen. Zusätzlich empfiehlt er, die globale Freigabe zu prüfen, etwa Alle ausser externen Benutzern und breites Teilen mit Gästen, und abzugleichen, ob das dem tatsächlichen Bedarf entspricht."
  - question: "Welche Rolle spielen DLP-Richtlinien von Power Automate für die Copilot-Bereitschaft?"
    answer: "Copilot erreicht externe Dienste über Connectors, fehlende DLP-Richtlinien in Power Automate können daher interne Daten an Werkzeuge wie Jira abfliessen lassen. Der Artikel empfiehlt ausdrückliche DLP-Richtlinien auf Umgebungsebene, damit KI-gestützte Abläufe nicht sicheren internen Speicher mit unerlaubten externen Zielen verbinden."
  - question: "Sollte ich alte Projekt-Sites vor dem Copilot-Rollout archivieren?"
    answer: "Der Artikel behandelt die Archivierung als Teil des Umgangs mit Altinhalten. Archivierung nimmt inaktive Sites aus dem aktiven Microsoft-Graph-Index, sodass sie nicht mehr in alltäglichen Prompts auftauchen und gesetzliche Aufbewahrungsfristen weiter eingehalten werden. Bei aktiven Sites rät er zu höchstens drei Ordnerebenen sowie verwalteten Metadaten und Inhaltstypen."
---

## TL;DR

Microsoft 365 Copilot verwendet bestehende Microsoft-Graph-Berechtigungen. Dadurch können tief abgelegte oder breit geteilte Inhalte aus SharePoint, Teams und OneDrive in natürlichsprachigen Antworten erscheinen. Prüfen Sie Everyone- und Gastzugriff, nutzen Sie Purview-Sensitivitätslabels und automatische Klassifizierung, archivieren Sie inaktive Sites und konfigurieren Sie umgebungsbezogene Power-Automate-DLP für Connectoren wie Jira.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Prüfen Sie Everyone-, Gast- und Anyone-with-the-link-Berechtigungen sowie SharePoint-Oversharing-Berichte, bevor Copilot-Lizenzen vergeben werden, weil KI übersehene Inhalte leicht auffindbar macht.
- Security/Compliance: Nutzen Sie Purview-Sensitivitätslabels, automatische Klassifizierung und aufbewahrungskonforme Archivierung, damit sensible oder inaktive Inhalte in der aktiven Copilot-Suche eingeschränkt werden.
- Makers: Prüfen Sie Power-Automate-Connectoren und halten Sie umgebungsbezogene DLP-Richtlinien ein, weil Verbindungen zu Jira oder anderen SaaS-Diensten einen unbeabsichtigten Datenabfluss ermöglichen können.
