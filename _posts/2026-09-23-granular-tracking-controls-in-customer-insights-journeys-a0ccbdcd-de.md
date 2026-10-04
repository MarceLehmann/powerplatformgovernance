---
title: Granulare Tracking-Kontrollen in Customer Insights – Journeys
description: Warum ein einziger Schalter für fünf Tracking-Mechanismen regulierte
  Organisationen zur Alles-oder-nichts-Entscheidung zwingt.
date: '2026-09-23T22:00:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- compliance
- governance
content_type: curated_summary
curation_id: a0ccbdcdeeb8ead763b43829
permalink: "/de/posts/granular-tracking-controls-in-customer-insights-journeys-a0ccbdcd/"
translation_url: "/en/posts/granular-tracking-controls-in-customer-insights-journeys-a0ccbdcd/"
source_url: https://powerplatform.se/granular-tracking-controls-in-customer-insights-journeys-a-privacy-first-must-for-regulated-organizations/
source_site_url: https://powerplatform.se/
source_title: 'Granular Tracking Controls in Customer Insights – Journeys: A Privacy-First
  Must for Regulated Organizations'
source_name: powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2026-02-14'
faq:
  - question: "Welche fünf Verhaltensweisen bündelt der einzelne Tracking-Schalter in Customer Insights?"
    answer: "Eine globale Einstellung schaltet fünf Dinge gemeinsam: das E-Mail-Öffnungspixel, das Verfolgen von Link-Klicks, das Web-Tracking, das Vorausfüllen von Formularen und das automatische Anhängen von UTM-Parametern. Wer sie aus Datenschutzgründen ausschaltet, deaktiviert also auch Funktionen, die ein Team behalten möchte. Der Artikel schlägt getrennte Schalter vor."
  - question: "Wie könnte ein Datenschutzteam Klick-Tracking behalten, aber das Öffnungspixel abschalten?"
    answer: "Heute nicht, denn der einzelne Schalter deckt beides ab. Der Autor schlägt getrennte Schalter vor, mit denen Administratoren jeden Mechanismus einzeln aktivieren oder deaktivieren können, während seltener genutzte oder erweiterte Einstellungen über OrgDBOrgSettings verwaltet würden. So könnte das Klick-Tracking an bleiben, während der Öffnungspixel aus ist. Die Idee ist als Feature Request im Dynamics-365-Ideas-Portal eingereicht."
  - question: "Warum sind Öffnungsraten aus dem Tracking-Pixel unzuverlässig?"
    answer: "Mailclients verfälschen das Signal. Outlook lädt Bilder nur nach Zustimmung des Nutzers herunter, daher kann eine Mail gelesen werden, ohne dass der Pixel auslöst. Apple iCloud lädt alle Bilder immer herunter, daher kann der Pixel auslösen, ohne dass jemand die Mail liest. Laut Artikel verzerren beide Clients die Öffnungsstatistik."
  - question: "Was steuert das Tracking in Customer Insights Journeys ausser E-Mails?"
    answer: "Derselbe einzelne Schalter steuert Website-Tracking, das Vorausfüllen von Formularen und das Anhängen von UTM-Parametern an Links, er reicht also über die E-Mail-Analyse hinaus. Kollidiert allein das Tracking per E-Mail-Pixel mit den Einwilligungsregeln einer Rechtsordnung, bleibt aktuell nur, alle fünf Verhalten abzuschalten, womit auch legitime Analysen wegfallen."
  - question: "Wie kann ich feinere Tracking-Einstellungen in Customer Insights Journeys unterstützen?"
    answer: "Der Autor hat den Vorschlag als Feature Request im Dynamics-365-Ideas-Portal eingereicht und verlinkt ihn, sodass Leser dafür abstimmen können. Solange es keine getrennten Schalter gibt, bleibt der globale Schalter ein Alles-oder-nichts-Entscheid für den gesamten Tenant. Ein Konflikt mit den Einwilligungsregeln in einer einzigen Rechtsordnung bedeutet derzeit, alle fünf Verhalten gemeinsam abzuschalten."
---
## TL;DR

Customer Insights – Journeys bündelt aktuell fünf Tracking-Mechanismen — E-Mail-Öffnungspixel, Link-Klicks, Web-Tracking, Formular-Vorbefüllung und UTM-Tagging — hinter einem einzigen globalen Schalter. Verstösst allein das E-Mail-Pixel-Tracking gegen die Einwilligungsregeln einer Jurisdiktion, bleibt aktuell nur, alle fünf gemeinsam abzuschalten und damit auch legitime Analysen zu verlieren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Security/Compliance: jetzt prüfen, welche der fünf gebündelten Mechanismen — E-Mail-Pixel, Link-Klicks, Web-Tracking, Formular-Vorbefüllung, UTM-Tagging — die Organisation tatsächlich braucht, denn eine rechtliche Prüfung, die nur einen davon beanstandet, schaltet die anderen vier gleich mit ab.
- Admins/CoE: diese Abwägung jetzt dokumentieren, bevor sie zur Notfallentscheidung unter Compliance-Druck wird.
- Leadership/Business: wissen, dass es noch keine getrennten Schalter gibt — ein Einwilligungskonflikt in nur einer Jurisdiktion bedeutet aktuell eine Alles-oder-nichts-Entscheidung für den gesamten Tenant.
