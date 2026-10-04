---
title: "Der Governance-Bericht, den ihr nicht selbst bauen müsst"
description: "Der eingebaute Wochendigest beantwortet bereits das meiste, was ein CoE-Dashboard-Projekt bauen soll: Nutzung, inaktive Ressourcen und die meistgenutzten Apps, Flows und Maker. Ihn zu aktivieren ist ein Häkchen, kein Projekt."
date: "2026-09-24T08:40:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - coe
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-45.png"
  alt: "Governance-Karte: Die Anzeigetafel — zwei Kennzahlen schlagen jedes Governance-Deck."
permalink: "/de/posts/gov-weekly-coe-rhythm/"
translation_url: "/en/posts/gov-weekly-coe-rhythm/"
faq:
  - question: "Was enthält der Wochendigest der Managed Environments?"
    answer: "Drei Teile: eine Nutzungsübersicht des letzten Monats, eine Liste von Apps und Flows, die eine Weile nicht gestartet wurden, und die beliebtesten Apps und Flows samt Top-Makern."
  - question: "Wie aktiviere ich den Wochendigest für eine Umgebung?"
    answer: "Aktiviere zuerst die Tenant-Level-Analytics, denn Usage Insights hängen davon ab."
  - question: "Brauche ich das CoE Starter Kit, wenn ich den Wochendigest nutze?"
    answer: "Nein, der Digest setzt kein CoE Starter Kit voraus, und genau deshalb lohnt sich die Aktivierung unabhängig davon."
---

## TL;DR

Bevor ein eigenes Reporting-Dashboard gebaut wird, lohnt sich der Blick auf das, was schon da ist: Der **Wochendigest** in Managed Environments verschickt wöchentlich Nutzungszahlen, inaktive Apps und Flows sowie die meistgenutzten Ressourcen und Top-Maker — ganz ohne Dashboard-Projekt. Er ist standardmässig pro Umgebung deaktiviert, geht ohne weitere Empfänger nur an Power-Platform- und Dynamics-365-Administratoren, und funktioniert nicht in Sovereign Clouds — für die meisten Tenants ist die Aktivierung aber eine Fünf-Minuten-Einstellung, die einen echten Teil dessen abdeckt, was ein Governance-Reporting-Projekt eigentlich bauen soll.

## Was tatsächlich drinsteckt

Der Digest hat drei Teile. Erstens eine Nutzungsübersicht: wie viele Apps genutzt wurden und wie viele aktive Benutzer es in den Managed Environments im letzten Monat gab. Zweitens eine Liste von Apps und Flows, die **eine Weile nicht gestartet** wurden — wurde eine Ressource noch nie gestartet, steht in der Spalte "Letzter Start" schlicht "None", ein so direktes Signal, wie Governance-Daten es liefern können. Drittens die beliebtesten Apps und Flows nach Sitzungs- und Ausführungszahl, dazu die Top-Maker nach Gesamtsitzungen über alle ihre Ressourcen hinweg. Nichts davon braucht einen Power-BI-Report, einen Datenexport oder ein CoE-Starter-Kit — es wird automatisch erzeugt und zugestellt, sobald die Einstellung aktiv ist.

## Aktivierung

Zuerst **Tenant-Level-Analytics** aktivieren — Usage Insights hängen davon ab und füllen sich sonst nicht. Dann pro Managed Environment: **Power Platform Admin Center → Verwalten → Umgebungen** → Umgebung auswählen → **Managed Environment bearbeiten** → unter **Usage Insights** die Option **Diese Umgebung im wöchentlichen E-Mail-Digest einschliessen** aktivieren. Das wird **pro Umgebung** gesetzt, nicht einmal für den ganzen Tenant — eine vergessene Umgebung hat schlicht keine wöchentliche Sichtbarkeit, ganz still.

## Wer ihn tatsächlich bekommt, und wie man das erweitert

Standardmässig geht der Digest an alle mit der Rolle **Power Platform Administrator** oder **Dynamics 365 Service Administrator** — nicht an Umgebungsbesitzer, nicht an Maker, nicht an wen auch immer sich tatsächlich für die Akzeptanz einer bestimmten App interessiert. Weitere Empfänger lassen sich über dieselben Usage-Insights-Einstellungen oder per PowerShell hinzufügen:

```powershell
$tenantSettings = Get-TenantSettings
($tenantSettings.powerPlatform.governance) | Add-Member -MemberType NoteProperty -Name additionalAdminDigestEmailRecipients -Value 'name@contoso.com;other@contoso.com'
Set-TenantSettings -RequestBody $tenantSettings
```

## Der Posteingang ist nicht die Gewohnheit

Den Digest zugestellt zu bekommen ist der leichte Teil — die eigentliche Governance-Gewohnheit ist, was danach damit passiert. Eine App, die drei Digests in Folge "None" unter Letzter Start zeigt, ist kein Datenpunkt, sondern eine Entscheidung, die getroffen werden will: archivieren, neu zuweisen, oder bewusst als ruhend bestätigen. Ist bereits ein CoE Starter Kit im Einsatz, decken dessen Power-BI-Dashboard und der Inaktivitäts-Benachrichtigungsprozess mehr ab (Massenanpassung von Berechtigungen, Maker-Umfragen, ROI-Tracking) — aber der Wochendigest braucht nichts davon, um zu existieren, und genau deshalb lohnt sich seine Aktivierung unabhängig davon.

## Wen betrifft das

- Admins/CoE: den Wochendigest für jede Managed Environment einzeln aktivieren, statt einen tenantweiten Standard anzunehmen — er ist pro Umgebung Opt-in, ein teilweises Rollout erzeugt also genau in der vergessenen Umgebung einen blinden Fleck.
- Leadership/Business: zwei der eigenen Kennzahlen dieses Digests — aktive Nutzer und inaktive Ressourcen — sind bereits der ehrliche, wiederkehrende Bericht, den ein Governance-Dashboard-Projekt bauen soll; dieses Projekt muss nicht erst stattfinden, bevor gemessen wird, denn hier wird bereits gemessen.
- Maker: eine App, die der Digest mit "None" unter Letzter Start zeigt, wirkt in der Aussenwirkung wie gar keine App, nur weniger sichtbar — die eigenen Ressourcen prüfen, bevor es der Bericht von jemand anderem tut.
