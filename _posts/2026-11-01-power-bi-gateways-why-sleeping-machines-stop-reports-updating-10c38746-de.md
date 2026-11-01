---
title: 'Power BI Gateways: Warum schlafende Rechner Berichte stoppen'
description: Power BI Gateways verbinden Cloud-Berichte mit Datenquellen und müssen
  verfügbar bleiben, damit Aktualisierungen funktionieren.
date: '2026-11-01T23:01:16Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
content_type: curated_summary
curation_id: 10c3874618a3a5a0453de162
image:
  path: "/assets/img/curated/10c3874618a3a5a0453de162.png"
  alt: 'Governance-Karte: A sleeping gateway can stop reports from updating.'
permalink: "/de/posts/power-bi-gateways-why-sleeping-machines-stop-reports-updating-10c38746/"
translation_url: "/en/posts/power-bi-gateways-why-sleeping-machines-stop-reports-updating-10c38746/"
source_url: https://www.spreaker.com/episode/power-bi-gateways-simply-explained--75938689
source_site_url: https://www.spreaker.com/
source_title: Power BI Gateways - Simply Explained
source_name: M365.FM
source_language: en
source_language_name: English
source_author: Mirko Peters
source_published_at: '2026-11-01'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Warum aktualisiert sich ein Power BI-Bericht nicht, wenn der Gateway-Rechner
    schläft?
  answer: Der Bericht erhält keine aktualisierten Daten, weil der Gateway-Rechner
    die Verbindung hält und nicht mehr verfügbar ist.
- question: Welche Aufgabe hat ein Power BI Gateway zwischen lokaler Datenquelle und
    Cloud?
  answer: Ein Gateway überträgt die Datenverbindung zwischen einer Quelle, die nicht
    direkt senden kann, und dem Cloud-Bericht.
- question: Wie viele Power BI Gateway-Arten behandelt diese Folge?
  answer: Die Folge behandelt drei Gateway-Arten und erklärt ihre Einordnung in Microsoft
    365 und Azure.
---

## TL;DR

Power BI Gateways verbinden Cloud-Berichte mit Datenquellen, die Daten nicht direkt in die Cloud senden können. Der Gateway-Rechner muss verfügbar bleiben, denn im Schlafmodus können Aktualisierungen stoppen. Die Folge behandelt den Datenweg, drei Gateway-Arten, die Einordnung in Microsoft 365 und Azure, Planungsgrenzen und häufige Fehler.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Haltet den Gateway-Rechner verfügbar, weil Energiesparmodus oder andere Verfügbarkeitsprobleme dazu führen können, dass Power BI-Berichte veraltete Daten anzeigen.
- Leadership/Business: Bezieht die Gateway-Verfügbarkeit in die Zuverlässigkeit von Berichten ein, weil ein Finanzdashboard bei einer unterbrochenen Verbindung Daten vom vorherigen Tag zeigen kann.
- Security/Compliance: Berücksichtigt Gateway-Platzierung und Betriebsgrenzen bei der Planung, weil die Folge diese Punkte vor einer Skalierung als wichtig nennt.
