---
title: Menschliche Prüfung für KI-Entscheidungen in Copilot Studio
description: Mit Copilot Studio und SharePoint werden nicht zugeordnete Kreditzwecke
  per Outlook oder Teams zur Prüfung weitergeleitet und Entscheidung sowie Begründung
  gespeichert.
date: '2026-09-27T22:56:07Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
- ownership
content_type: curated_summary
curation_id: 0ef9c7863178b432cf0fbe98
image:
  path: "/assets/img/curated/0ef9c7863178b432cf0fbe98.png"
  alt: 'Governance-Karte: Risky AI decisions need a human in the loop. Unexpected
    cases should not pass unattended.'
permalink: "/de/posts/add-human-review-to-copilot-studio-ai-decisions-0ef9c786/"
translation_url: "/en/posts/add-human-review-to-copilot-studio-ai-decisions-0ef9c786/"
source_url: https://www.matthewdevaney.com/copilot-studio-ask-for-human-review-on-ai-decisions/
source_site_url: https://www.matthewdevaney.com/
source_title: 'Copilot Studio: Ask For Human Review On AI Decisions'
source_name: Matthew Devaney
source_language: en
source_language_name: English
source_author: Matthew Devaney
source_published_at: '2026-09-27'
source_type: article
faq:
  - question: "Wie entscheidet der Agent im Kreditbeispiel, wann ein Mensch prüfen muss?"
    answer: "Der Agent vergleicht den angegebenen Kreditzweck mit einer Liste vorbewerteter Zwecke. Gibt es einen passenden Eintrag, liefert er genau diesen Zweck und dessen Kategorie zurück. Gibt es keinen, liefert er einen leeren Text und die Kategorie Human-Review. Ein Bedingungsblock im Flow prüft dann, ob die Kategorie Human-Review lautet, und leitet nur diese Anträge an einen Kreditsachbearbeiter weiter."
  - question: "Welche SharePoint-Listen braucht der Flow zur Kreditprüfung?"
    answer: "Zwei Listen. Die Antragsliste enthält den vollständigen Namen, den beantragten Betrag und den Kreditzweck. Die Zweckliste enthält neun vorbewertete Zwecke mit der Kategorie Allowed oder Flagged, etwa Weiterbildung als erlaubt und Kryptowährungshandel als markiert. Nach der Prüfung kommen drei Spalten für Entscheidung, Kennzeichen menschlicher Prüfung und Begründung dazu."
  - question: "Was erfasst die menschliche Prüfaktion und wie erreicht sie die zuständige Person?"
    answer: "Der Flow sendet eine Outlook-Nachricht mit dem Betreff Action Required und dem Namen des Antragstellers. Sie nennt den nicht zuordenbaren Kreditzweck und bittet um eine Entscheidung mit Ja zum Genehmigen oder Nein zum Markieren. Die Person füllt zwei Felder aus, die Entscheidung und eine Begründung. Beide Eingaben setzen den Flow fort und werden danach festgehalten."
  - question: "Wie hält der Flow Entscheidungen von Mensch und Agent in SharePoint fest?"
    answer: "Nach einer menschlichen Prüfung setzt eine Formel das Feld Entscheidung auf Allowed bei Ja und sonst auf Flagged, das Kennzeichen menschlicher Prüfung auf Ja, und die Begründung wird übernommen. Im Else-Zweig übernimmt der Flow die Kategorie des Agenten, setzt das Kennzeichen auf Nein und lässt die Begründung leer. Beide Zweige aktualisieren denselben Antrag in der SharePoint-Liste."
  - question: "Was passiert im Test des Autors zur menschlichen Prüfung?"
    answer: "Der Autor reicht einen Kreditantrag ein, und der Workflow entscheidet, dass eine menschliche Prüfung nötig ist. Der Kreditsachbearbeiter erhält eine E-Mail mit einem Formular, füllt Entscheidung und Begründung aus und sendet es ab. Der Agent wartet auf diese Antwort und macht dann weiter. Zum Schluss hält der Flow die Kreditentscheidung, den Prüfstatus und die Begründung in der SharePoint-Liste fest."
---

## TL;DR

Copilot Studio vergleicht einen Kreditzweck mit einer SharePoint-Liste erlaubter und markierter Kategorien. Bei fehlender Übereinstimmung gibt der Agent Human-Review zurück, sendet eine Prüfungsanfrage per Outlook oder Teams, wartet auf Ja oder Nein samt Begründung und aktualisiert den SharePoint-Eintrag.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erlaubte und markierte Kategorien klar definieren und bei fehlender Übereinstimmung Human-Review zurückgeben, damit unsichere Fälle nicht unbeaufsichtigt entschieden werden.
- Admins/CoE: Die menschliche Prüfaktion einer benannten prüfenden Person zuweisen und Entscheidung, Prüfstatus sowie Begründung in SharePoint speichern, damit der Ablauf nachvollziehbar bleibt.
- Leadership/Business: Entscheidungen bestimmen, die ein Agent nicht allein treffen darf, und sicherstellen, dass prüfende Personen antworten können, bevor der Prozess fortgesetzt wird.
