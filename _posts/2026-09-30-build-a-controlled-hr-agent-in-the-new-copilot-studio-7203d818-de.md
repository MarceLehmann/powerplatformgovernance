---
title: Kontrollierten HR-Agent im neuen Copilot Studio erstellen
description: Standard-Websuche deaktivieren, quellenbasierte Antworten verlangen,
  kostenpflichtig testen und den Teams-Rollout schrittweise durchführen.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
- security
- environments
content_type: curated_summary
curation_id: 7203d8188b84342719e7a4be
image:
  path: "/assets/img/curated/7203d8188b84342719e7a4be.png"
  alt: 'Governance-Karte: Turn off web search when policy answers must stay inside
    approved knowledge.'
permalink: "/de/posts/build-a-controlled-hr-agent-in-the-new-copilot-studio-7203d818/"
translation_url: "/en/posts/build-a-controlled-hr-agent-in-the-new-copilot-studio-7203d818/"
source_url: https://www.andersjensen.org/en/articles/build-your-first-agent-new-copilot-studio/
source_site_url: https://www.andersjensen.org/
source_title: Build Your First Agent in the New Copilot Studio
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-08-13'
source_type: article
faq:
  - question: "Welche Einstellung schalte ich beim Bau eines dokumentbasierten Agenten im neuen Copilot Studio zuerst aus?"
    answer: "Search all websites. Sie ist standardmässig aktiv, und der Autor nennt das Abschalten den wichtigsten einzelnen Klick der Anleitung. Sonst sucht der Agent im Web, wenn interne Quellen keine Antwort liefern, was bei Richtlinien-Agenten problematisch ist. Ist die Option aus, muss der Agent Wissenslücken eingestehen."
  - question: "Wie formulierte der Autor die Anweisungen für den HR-Agenten von Nordfalk?"
    answer: "In fünf Zeilen: Rolle als HR-Assistent, Antworten ausschliesslich aus dem Mitarbeiterhandbuch mit Nennung des Kapitels, kurzer und freundlicher Ton, Verweis auf die Kontakte in Kapitel 16, wenn das Handbuch nichts hergibt, und das Verbot zu raten. Durch die Kapitelangabe lässt sich jede Antwort nachprüfen."
  - question: "Woraus besteht ein Skill und wie unterscheidet er sich von einem Thema?"
    answer: "Ein Skill hat einen Namen, eine Beschreibung, wann er greift, und Anweisungen in normaler Sprache. Er ersetzt Themen und Dialogbäume. Der Beispiel-Skill entwirft Urlaubsmails, hält die acht Pflichtfelder aus Kapitel 8 ein und verbietet erfundene Werte, deshalb fragt der Agent fehlende Angaben wie die Personalnummer nach."
  - question: "Kosten Tests in der Vorschau schon Credits, bevor ein Agent veröffentlicht ist?"
    answer: "Ja. Jeder Testchat verbraucht Credits, auch vor der Veröffentlichung, nur die manuelle Konfiguration ist gratis. Der Autor rät deshalb, in einer Umgebung mit begrenzter Credit-Zuteilung zu bauen und den Stand vor und nach dem Bau zu notieren, da eine Echtzeitanzeige des Verbrauchs zum Zeitpunkt des Artikels fehlte."
  - question: "Sollte ein interner HR-Agent am ersten Tag firmenweit live gehen?"
    answer: "Der Autor rät davon ab: Am ersten Tag für alle zu veröffentlichen ist der schnellste Weg, dass ein Tippfehler in den Anweisungen zum Problem der ganzen Firma wird. Behalte den Agenten zuerst für dich, teste ihn in Teams und gib ihn dann für die Organisation frei. Das empfohlene Muster lautet Anweisungen, Wissen, ein Skill, veröffentlichen. Bei den Tests weigerte sich der Agent, eine unbekannte Bonusstruktur zu raten."
---

## TL;DR

Für einen HR-Agenten im neuen Copilot Studio wird das genehmigte Handbuch unter Knowledge hochgeladen und die standardmässige Option Search all websites entfernt. Anweisungen sollen Kapitel nennen, Raten verbieten und Lücken an den richtigen Kontakt verweisen. Preview-Testchats verbrauchen schon vor der Veröffentlichung Credits; daher in einer Entwicklungsumgebung mit kleinem Credit-Budget testen und zuerst privat in Teams veröffentlichen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Search all websites entfernen und Kapitelverweise, kein Raten sowie Rückfragen bei fehlenden Werten festlegen, damit Richtlinienantworten prüfbar bleiben.
- Admins/CoE: Eine Entwicklungsumgebung mit kleinem Credit-Budget nutzen, weil Preview-Testchats schon vor der Veröffentlichung Credits verbrauchen.
- Leadership/Business: Den Teams-Agenten zuerst privat testen und erst danach organisationsweit teilen, damit Fehler in Anweisungen begrenzt bleiben.
