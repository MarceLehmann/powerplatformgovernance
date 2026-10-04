---
title: Niedrige Konfidenzwerte in Document AI und Power Platform behandeln
description: Feldbezogene Schwellenwerte, Geschäftsprüfungen, Dataverse-Auditdaten
  und Power Apps für die Nachprüfung verhindern, dass unzuverlässige Dokumentdaten
  weiterverarbeitet werden.
date: '2026-09-27T00:08:18Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- compliance
- dataverse
- power-apps
- power-automate
content_type: curated_summary
curation_id: '07590603bd21e1820466890c'
image:
  path: "/assets/img/curated/07590603bd21e1820466890c.png"
  alt: 'Governance-Karte: Confidence is not correctness. Validate critical fields
    before they enter enterprise systems.'
permalink: "/de/posts/handle-low-confidence-scores-in-document-ai-and-power-platform-07590603/"
translation_url: "/en/posts/handle-low-confidence-scores-in-document-ai-and-power-platform-07590603/"
source_url: https://www.m365.fm/blog/handling-low-confidence-scores-document-ai-power-platform/
source_site_url: https://www.m365.fm/
source_title: How to Handle Low Confidence Scores in Document AI and Power Platform
source_name: M365 FM
source_language: en
source_language_name: English
source_published_at: '2026-09-18'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
  - question: "Warum sollte man Konfidenzwerte pro Feld statt pro Dokument bewerten?"
    answer: "Die Werte gelten feldweise: Der Lieferantenname kann 99 Prozent erreichen, die Rechnungsnummer nur 65 Prozent. Ein einziges Urteil pro Dokument führt entweder zu zu vielen Ablehnungen oder zu gefährlichen Fehlern."
  - question: "Garantiert ein Konfidenzwert von 98 Prozent beim Rechnungsbetrag, dass die Daten stimmen?"
    answer: "Nein. Der Wert sagt nur, wie sicher das Modell beim Lesen der Zeichen ist, nicht ob die Zahl geschäftlich gültig ist."
  - question: "Wie sollte ein Power-Automate-Flow auf Pflichtfelder mit niedriger Konfidenz reagieren?"
    answer: "Der Flow bewertet die Konfidenz jedes Pflichtfelds gegen vordefinierte Schwellen. Fällt eines darunter, legt er den Datensatz nicht automatisch an, sondern leitet die Datei in eine eigene Prüfwarteschlange."
---

## TL;DR

Microsoft Content Understanding und AI Builder bewerten Konfidenzwerte für einzelne Felder, nicht für ganze Dokumente. Power Automate soll kritische Felder gegen Geschäftsregeln prüfen, die Datensatzerstellung bei Fehlern pausieren und Ausnahmen zur manuellen Prüfung weiterleiten. Dataverse speichert Extraktions- und Korrekturverläufe, während Power Apps die Prüfung im Vergleich mit dem Original unterstützt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erstellt Power Apps Prüfoberflächen, die das Quelldokument neben den extrahierten Feldern anzeigen, damit Ausnahmen effizient korrigiert werden können.
- Admins/CoE: Definiert feldbezogene Schwellenwerte und leitet fehlgeschlagene Prüfungen über Power Automate weiter, statt die Datensatzerstellung zu erzwingen.
- Security/Compliance: Speichert Konfidenzwerte, Modellläufe, Prüfungen und Korrekturen in Dataverse, um die Nachvollziehbarkeit zu sichern.
- Leadership/Business: Verlangt Geschäftsprüfungen für kritische Werte wie Rechnungsbeträge und freigegebene Lieferanten, weil ein hoher KI-Konfidenzwert keine fachliche Richtigkeit beweist.
