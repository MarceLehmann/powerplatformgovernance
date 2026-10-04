---
title: 'Das CoE Starter Kit ist Geschichte: Was das Power Platform Admin Center nicht
  abdeckt'
description: Eine Zeitlinie zum End-of-Life des CoE Starter Kits und neun Governance-Lücken,
  die das Power Platform Admin Center nicht schliesst.
date: '2026-09-24T00:10:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- coe
- dlp
content_type: curated_summary
curation_id: 5242b99dafd48d185cbd0480
permalink: "/de/posts/the-coe-starter-kit-is-gone-what-the-power-platform-admin-center-5242b99d/"
translation_url: "/en/posts/the-coe-starter-kit-is-gone-what-the-power-platform-admin-center-5242b99d/"
source_url: https://rencore.com/en/blog/power-platform-coe-starter-kit-end-of-life/
source_site_url: https://rencore.com/
source_title: 'Power Platform CoE Starter Kit: End of Life'
source_name: Rencore
source_author: Maximilian Götz
source_language: en
source_language_name: English
source_published_at: '2026-06-03'
faq:
  - question: "Ist das CoE Starter Kit offiziell mit einer Frist zur Migration eingestellt?"
    answer: "Nein, es gibt weder eine formale Einstellungsmeldung noch eine Frist. Das Kit war nie ein offizielles Microsoft-Produkt, sondern ein Beschleuniger aus der Community, der ausserhalb des normalen Produktsupports gepflegt wurde. Die monatlichen Releases endeten im Februar 2026, im Mai 2026 bestätigte Microsoft, dass es keine neuen Funktionen und keine Pflege mehr gibt. Bestehende Installationen laufen weiter, bis etwas bricht."
  - question: "Welche Governance-Lücken lässt das Admin Center gegenüber dem CoE Starter Kit?"
    answer: "Der Beitrag nennt fünf Lücken mit hohem Risiko: Schatten-IT ohne Risikobewertung, Lebenszyklus ohne Workflows für Besitzerwechsel, keine Sicht über mehrere Tenants, DLP-Durchsetzung ohne Alarm bei Verstössen und keine Kontrolle von Qualität und Connector-Missbrauch. Von neun Fähigkeiten ist nur die Umgebungsverwaltung nativ vollständig abgedeckt."
  - question: "Was deckt das Power Platform Admin Center bereits gut ab?"
    answer: "Es liefert ein tenantweites Inventar von Apps, Flows, Connectors und Umgebungen ohne eigene Dataverse-Umgebung, Umgebungsverwaltung samt DLP und Kapazität, Nutzungsauswertungen wie App-Starts und Flow-Läufe sowie Admin-Aktionen wie Besitzer neu zuweisen, verwaiste Apps löschen und Freigaben verwalten. Es zeigt, was existiert, bewertet aber kein Risiko."
  - question: "Was muss ich beim Abschied vom CoE Starter Kit wirklich neu aufbauen?"
    answer: "Die Kontextebene, denn die reine Objektliste liefert jetzt Microsoft selbst. Dazu gehören ein benannter Besitzer pro Ressource, ein Lebenszyklusstatus, eine Compliance-Einstufung und eine Risikoreihenfolge, die zeigt, was zuerst Aufmerksamkeit braucht. Der Artikel rät, den Umstieg um diese Ebene zu planen und nicht um die Objektliste."
  - question: "Warum kann der Weiterbetrieb des ungepflegten CoE Starter Kits teuer werden?"
    answer: "Das Kit brauchte eine eigene Dataverse-Umgebung mit Lizenz- und Wartungsaufwand, seine Flows liefen über Servicekonten mit Premium-Connectors, und Admins mussten Zeit investieren, um es mit Plattformänderungen kompatibel zu halten. Laut Artikel steigen die Betriebskosten eines eingefrorenen Beschleunigers, während seine Abdeckung sinkt. Bei über 50 Umgebungen, mehreren Tenants oder vielen ungesteuerten Apps der letzten drei Jahre ist die Lücke wahrscheinlich erheblich."
---
## TL;DR

Die monatlichen Releases des CoE Starter Kits endeten im Februar 2026, im Mai bestätigte Microsoft, dass es keine neuen Funktionen mehr erhält — es war stets ein community-getragener Accelerator ausserhalb des regulären Supports, kein offizielles Produkt, und es gibt weder eine formale Abkündigung noch eine Migrationsfrist. Microsoft verweist stattdessen auf das Power Platform Admin Center, doch PPAC zeigt nur, was existiert, nicht ob es ein Risiko ist: Schatten-IT-Erkennung, Besitzübertragungs-Workflows, mandantenübergreifende Sichtbarkeit und DLP-Verstoss-Warnungen fehlen dort.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: auflisten, welche der jetzt unbesetzten Lücken des Starter Kits — Schatten-IT-Erkennung, Besitzübertragungs-Workflows, mandantenübergreifende Sichtbarkeit, DLP-Verstoss-Warnungen — die Governance heute tatsächlich noch braucht, denn diese Liste ist der eigentliche Migrationsplan, kein einzelnes Ersatzwerkzeug.
- Security/Compliance: gezielt die Lücke bei DLP-Verstoss-Warnungen markieren, denn PPAC zeigt den Richtlinienstand, nicht wer eine Richtlinie tatsächlich gebrochen hat.
- Leadership/Business: die fehlende formale Abkündigung oder Frist nicht als Grund zum Warten werten, da Microsoft bereits bestätigt hat, dass keine neuen Funktionen mehr kommen.
