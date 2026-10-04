---
title: Copilot Cowork mit Pilotgruppen und Kreditlimits steuern
description: Copilot Cowork über nutzungsbasierte Abrechnung aktivieren und den Zugriff
  mit Sicherheitsgruppe, Monatslimits und Warnungen begrenzen.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- ownership
content_type: curated_summary
curation_id: af997403a85f6d95bea431d9
image:
  path: "/assets/img/curated/af997403a85f6d95bea431d9.png"
  alt: 'Governance-Karte: Set limits before access. Pilot groups prevent a surprise
    Copilot bill.'
permalink: "/de/posts/control-copilot-cowork-access-with-pilot-groups-and-credit-limits-af997403/"
translation_url: "/en/posts/control-copilot-cowork-access-with-pilot-groups-and-credit-limits-af997403/"
source_url: https://www.andersjensen.org/en/articles/copilot-cowork-access-pilot-group/
source_site_url: https://www.andersjensen.org/
source_title: 'Copilot Cowork: How to give access with a pilot group'
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-07-12'
source_type: article
faq:
  - question: "Wie lange dauert die Einrichtung der Ausgabenkontrolle für Copilot Cowork?"
    answer: "Der Artikel nennt etwa 15 Minuten für die Einrichtung, danach 20 bis 30 Minuten bis zur Aktivierung. Der Weg im Microsoft-365-Admincenter lautet Copilot, dann Kostenverwaltung, dann Erste Schritte. Nötig ist eine Microsoft-365-Copilot-Lizenz, und die Cowork-Nutzung wird getrennt in Copilot Credits abgerechnet."
  - question: "Welche Administratorrollen braucht es für Cowork-Abrechnung und Ausgabenrichtlinien?"
    answer: "Ein globaler Administrator oder Abrechnungsadministrator wählt die Abrechnungsmethode, während ein KI-Administrator Ausgabenrichtlinien erstellen und Limits setzen kann. Diese Aufteilung lässt die Finanzseite über die Bezahlung entscheiden und den KI-Verantwortlichen über die Kontingente. Kläre vor dem Start, wer welche Rolle hält."
  - question: "Lässt sich die Abrechnungsmethode einer Cowork-Ausgabenrichtlinie später ändern?"
    answer: "Nicht direkt. Die Wahl zwischen vorausbezahlten Kapazitätspaketen und Azure Pay-as-you-go lässt sich nur ändern, indem man die Richtlinie löscht und neu anlegt. Entscheide das Abrechnungsmodell deshalb vor dem Pilot, denn ein Wechsel bedeutet, Richtlinie und Limits von Grund auf neu aufzubauen."
  - question: "Wie beschränke ich Cowork auf eine Pilotgruppe statt auf die ganze Organisation?"
    answer: "Standardmässig gilt der Geltungsbereich für die ganze Organisation. Wähle Einrichtung anpassen, öffne Benutzer- und Gruppenzugriff und nimm Bestimmte Gruppen. Richtlinien funktionieren nur mit Sicherheitsgruppen, die Zuweisung einzelner Personen ist als demnächst verfügbar angekündigt. Lege die Pilot-Sicherheitsgruppe zuerst an, damit sie zur Auswahl steht."
  - question: "Was passiert, wenn jemand das Credit-Limit erreicht?"
    answer: "Der Zugriff entfällt bis zum Ersten des nächsten Monats. Das Beispiel im Artikel nennt 20000 Credits monatlich, 16000 pro Person und eine Warnung bei 15000, die sofort und danach wöchentlich bis zum Ersten per E-Mail kommt. Der Verbrauch erscheint unter Kostenverwaltung und wird etwa alle 2 Stunden aktualisiert, Anfragen stehen unter Credit-Anfragen."
---

## TL;DR

Copilot Cowork benötigt im Microsoft 365 Admin Center eine nutzungsbasierte Abrechnung, auch für Nutzer mit Microsoft 365 Copilot-Lizenz. Eine Sicherheitsgruppe als Pilotgruppe erstellen, eine Ausgabenrichtlinie mit monatlichen und nutzerbezogenen Copilot-Credit-Limits sowie Warnungen konfigurieren, den Zugriff auf diese Gruppe begrenzen und Verbrauchsdaten vor dem breiten Rollout prüfen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Eine Sicherheitsgruppe für den Pilot erstellen und Spezifische Gruppen statt Alle Benutzer wählen, damit Cowork-Zugriff von Beginn an begrenzt bleibt.
- Security/Compliance: Monatliche Richtlinien- und Nutzerlimits mit Warnung vor der Aktivierung setzen; Limits werden hart durchgesetzt und Nutzer verlieren nach Erreichen ihres Limits den Zugriff.
- Leadership/Business: Nach dem Pilot den Verbrauch in Cost Management prüfen und Limits vor einem breiteren Rollout anpassen, um Überraschungen bei nutzungsbasierter Abrechnung zu vermeiden.
