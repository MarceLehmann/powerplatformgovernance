---
title: 'Secure Inputs und Secure Outputs: Was sie wirklich schützen'
description: Ein Schalter pro Aktion in Power Automate, der Zugangsdaten und Personendaten
  im Laufverlauf und in Logs maskiert, ohne die Ausführung zu verändern.
date: '2026-09-24T00:04:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- compliance
content_type: curated_summary
curation_id: f8720ba2865bc3009c9fb0a4
permalink: "/de/posts/secure-inputs-and-secure-outputs-what-they-actually-protect-f8720ba2/"
translation_url: "/en/posts/secure-inputs-and-secure-outputs-what-they-actually-protect-f8720ba2/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-98-secure-inputs-secure-outputs/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 98: Secure Inputs, Secure Outputs"
source_name: PowerPlatformTip
source_author: Marcel Lehmann
source_author_url: https://www.powerplatformtip.com/about/
source_language: en
source_language_name: English
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
faq:
  - question: "Was verbergen sichere Eingaben und sichere Ausgaben im Flow-Verlauf?"
    answer: "Sie maskieren sensible Werte wie Passwörter, Token und persönliche Angaben im Ausführungsverlauf eines Flows. Wer die Laufhistorie öffnet, sieht an dieser Stelle nur den Hinweis, dass der Inhalt wegen der Sicherheitskonfiguration ausgeblendet ist. So bleiben vertrauliche Informationen in Protokollen vor unbefugtem Zugriff geschützt, was auch Datenschutzvorgaben unterstützt."
  - question: "Was schützen sichere Eingaben und Ausgaben in Power Automate nicht?"
    answer: "Sie verändern nichts an der Verarbeitung. Die Daten werden weiterhin normal verarbeitet, die Maskierung betrifft nur die Anzeige im Protokoll. Der Beitrag ordnet die Einstellung deshalb als einen Teil einer breiteren Datensicherheitsstrategie ein und rät, den gesamten Kontext der Datenverarbeitung zu beachten. Verwandte Tipps behandeln das Maskieren von Trigger-Ausgaben und den Schutz der Anmeldedaten von Dienstkonten als eigene Punkte."
  - question: "Wie aktiviere ich sichere Eingaben oder Ausgaben für eine Aktion?"
    answer: "Öffne die betroffene Aktion in deinem Flow, wechsle in den Bereich Einstellungen, schalte sichere Eingaben, sichere Ausgaben oder beides um und speichere die Änderung. Beide Optionen lassen sich unabhängig voneinander setzen, und zwar pro Aktion. So kannst du gezielt nur dort maskieren, wo wirklich sensible Werte durchlaufen."
  - question: "Bremsen sichere Eingaben und Ausgaben die Ausführung eines Flows?"
    answer: "Kaum. Laut Beitrag ist der Einfluss auf die Ausführungsgeschwindigkeit minimal, weil nur die Protokollierung der Daten angepasst wird und nicht ihre Verarbeitung. Die Geschwindigkeit ist also kein Grund, die Einstellung zu meiden. Beide Optionen lassen sich für jede Aktion einzeln umschalten."
  - question: "Bei welchen Aktionen lohnt sich sichere Eingabe oder Ausgabe besonders?"
    answer: "Aktionen, die sensible Daten wie Passwörter, Token oder persönliche Angaben verarbeiten. Im Beispiel des Beitrags wird ein Bearer-Token im Ausführungsverlauf einer Aktion maskiert, Eingaben und Ausgaben zeigen dann nur den Hinweis, dass der Inhalt ausgeblendet ist. Du kannst pro Aktion Eingaben, Ausgaben oder beides aktivieren, je nach Sicherheitsbedarf."
---
## TL;DR

Secure Inputs und Secure Outputs lassen sich pro Aktion in den Flow-Einstellungen unabhängig voneinander aktivieren und maskieren Passwörter, Tokens und personenbezogene Daten im Laufverlauf und in Logs — statt Klartext erscheint dort ein Hinweis auf ausgeblendete Inhalte. Der Schalter ändert nur die Protokollierung, nicht die Ausführung, daher praktisch kein Performance-Effekt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: den Schalter auf jeder Aktion aktivieren, die mit Passwörtern, Tokens oder Personendaten arbeitet — die Änderung kostet nichts an Performance.
- Security/Compliance: das als reine Protokollierungs-Kontrolle behandeln: Sie verbirgt Werte im Laufverlauf, ändert aber nicht, wie der Flow die Daten tatsächlich verarbeitet, und ersetzt daher nie DLP-Richtlinien oder Zugriffskontrollen.
- Admins/CoE: es als Ein-Zeilen-Punkt in die Flow-Review-Checkliste aufnehmen, da es keine Abwägung braucht, um es zu verlangen.
