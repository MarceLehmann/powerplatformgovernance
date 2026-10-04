---
title: Gleiche Punktzahl kann gegensätzliche Copilot-Ergebnisse verdecken
description: Ein gesteuertes Copilot-Studio-Design nutzt eine kuratierte SharePoint-Bibliothek,
  benannte Verantwortliche, Power-Automate-Lebenszyklusregeln und wiederholte Tests.
date: '2026-09-30T05:01:27Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- copilot-studio
- power-automate
- ownership
- security
content_type: curated_summary
curation_id: 0a64d278e63b59585ac3ed4d
image:
  path: "/assets/img/curated/0a64d278e63b59585ac3ed4d.png"
  alt: 'Governance-Karte: An approved source can still give a wrong answer. Test the
    meaning, not just the score.'
permalink: "/de/posts/same-score-can-hide-opposite-copilot-studio-outcomes-0a64d278/"
translation_url: "/en/posts/same-score-can-hide-opposite-copilot-studio-outcomes-0a64d278/"
source_url: https://www.karlex.fi/same-score-opposite-meaning-what-my-nordic-summit-demo-actually-proved/
source_site_url: https://www.karlex.fi/
source_title: 'Same score, opposite meaning: what my Nordic Summit demo actually proved'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-09-30'
source_type: article
faq:
  - question: "Warum kann eine Bewertung mit gutem Ergebnis trotzdem falsche Agentenantworten durchwinken?"
    answer: "Weil der General-Qualitätsprüfer Relevanz, Abdeckung und Verankerung in den Quellen misst, die Antwort aber nicht mit der erwarteten Antwort vergleicht. Im Beispiel lieferte der Agent bei der Frage nach offenem Feuer im Stall eine zitierte, auf eine freigegebene Quelle zurückführbare Antwort, die das Gegenteil des Erwarteten sagte. Die Bewertung liess sie trotzdem als bestanden durch."
  - question: "Was zeigte der Vergleich zweier Testläufe mit fast gleichem Punktestand?"
    answer: "Im ersten Lauf erreichte der Agent 7 von 20 Punkten, obwohl vier Dokumente nie hätten freigegeben werden dürfen, etwa eine überholte Richtlinie und ein ausdrücklich nicht gültiger Entwurf, und drei korrekte aktuelle Dokumente fehlten. Ein zweiter Lauf mit nur sechs freigegebenen Dokumenten kam auf etwa 6 von 20 und lehnte Entwürfe korrekt ab. Gleiche Punktzahl, entgegengesetzte Bedeutung."
  - question: "Wie funktioniert die kuratierte Bibliothek, aus der der Agent ausschliesslich antwortet?"
    answer: "Teams erstellen Inhalte in einer Dokumentbibliothek. Setzt eine benannte Person in einer Ja-Nein-Spalte ein Häkchen, kopiert ein Power-Automate-Flow die Datei samt Eigentümer in die kuratierte Bibliothek, beim Entfernen des Häkchens wird die Kopie gelöscht. Der Agent greift nur auf diese Bibliothek zu, Modellwissen und Websuche sind in seiner YAML-Konfiguration abgeschaltet."
  - question: "Was prüfen die monatlichen Audits der kuratierten Bibliothek?"
    answer: "Drei Prüfungen suchen nach veralteten Dateien, verwaisten Dateien ohne Eigentümer, der dafür einsteht, und nach ausgeschiedenen Eigentümern, deren Profilabfrage fehlschlägt. Jeder Fund erzeugt eine Adaptive Card im Governance-Kanal in Teams, die das zuständige Team nennt und eine namentlich genannte Person auffordert, das Quelldokument zu aktualisieren oder zu streichen. Die Automatisierung erzwingt die Entscheidung, trifft sie aber nicht."
  - question: "Warum ist ein Kontrolllauf beim Testen eines Copilot-Studio-Agenten sinnvoll?"
    answer: "Ein Kontrolllauf wiederholt die Auswertung ohne Änderung am Agenten. Bei einem Produktivagenten stieg der Punktestand so von 24 auf 31 von 43, obwohl nichts verändert wurde. Ohne diese Wiederholung wäre das Rauschen in einer Woche als Rückschritt und in der nächsten als Verbesserung gelesen worden. Die Reihenfolge lautet erst wiederholen, dann diagnostizieren, dann ändern."
---

## TL;DR

Nutze zwei SharePoint-Bibliotheken, damit ein Copilot-Studio-Agent nur freigegebene Dateien in der Curated Library lesen kann. Eine benannte Person steuert ein Ja/Nein-Freigabefeld; Power Automate kopiert oder entfernt Dateien, und monatliche Audits melden veraltete, verwaiste und Dateien von ausgeschiedenen Verantwortlichen. Wiederhole Auswertungen: Ein unveränderter Agent stieg von 24 auf 31 von 43 Treffern.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Begrenze den Agenten auf die Curated Library und behandle eine Ablehnung als korrekt, wenn keine freigegebene Quelle eine Antwort stützt.
- Admins/CoE: Nutzt das Ja/Nein-Freigabefeld mit Verantwortlichen, den Power-Automate-Grenzfluss und monatliche Teams-Auditkarten für veraltete, verwaiste und herrenlose Inhalte.
- Security/Compliance: Fordert benannte Verantwortlichkeit und Lebenszyklusprüfungen, denn eine Freigabe kann dennoch überholte, vorläufige oder widersprüchliche Inhalte zulassen.
- Leadership/Business: Bewertet, welche Fragen bestehen, nicht nur die Gesamtpunktzahl, weil gleiche Werte gegensätzliche Qualitätsresultate bedeuten können.
