---
title: Flow-Besitzer wechseln, ohne den Flow zu brechen
description: Den Flow solutionfähig machen und einen Miteigentümer hinzufügen statt
  zu exportieren und neu zu importieren — Verbindungen und Laufverlauf bleiben unangetastet.
date: '2026-09-24T00:02:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- ownership
- alm
- governance
content_type: curated_summary
curation_id: 6588726d23899ef313976e15
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-49.png
  alt: 'Governance-Karte: Die Staffelübergabe — der Besitzer geht, die Lösung bleibt.'
permalink: "/de/posts/change-a-power-automate-flow-owner-without-breaking-it-6588726d/"
translation_url: "/en/posts/change-a-power-automate-flow-owner-without-breaking-it-6588726d/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-20-change-flow-owner/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 20: Change Flow Owner"
source_name: PowerPlatformTip
source_author: Marcel Lehmann
source_author_url: https://www.powerplatformtip.com/about/
source_language: en
source_language_name: English
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
faq:
  - question: "Lässt sich ein Cloud-Flow ohne Export und Import an eine neue Person übergeben?"
    answer: "Ja, wenn der Flow lösungsfähig ist. Füge ihn in einer Umgebung mit Dataverse zu einer Lösung hinzu, öffne die Details des Flows, wähle Bearbeiten und trage den neuen Besitzer ein."
  - question: "Bleiben der alte und der neue Besitzer beide am Flow?"
    answer: "Ja. Der bisherige und der neue Besitzer werden Miteigentümer, deshalb geht nichts kaputt."
  - question: "Wie lange dauert es, bis die Lizenz des neuen Besitzers bei einem geplanten Flow greift?"
    answer: "Bei geplanten oder automatischen Flows wirkt die Lizenz des neuen Besitzers nach etwa 7 Tagen. Wenn du den Flow bearbeitest und neu speicherst, gilt sie sofort."
---
## TL;DR

Den Flow solutionfähig machen, seine Details öffnen und einen neuen Besitzer hinzufügen — der bisherige und der neue Besitzer werden Miteigentümer, sodass nichts ausfällt, Verbindungsreferenzen und Laufverlauf bleiben erhalten, kein Export/Import nötig. Bei geplanten Flows greift die Lizenz des neuen Besitzers erst nach rund 7 Tagen, ausser man bearbeitet und speichert den Flow erneut.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: beim Offboarding den Export/Import-Ablauf durch diesen Miteigentümer-Schritt ersetzen — er dauert Sekunden und rührt keine Verbindungsreferenzen an. "Hat dieser Flow einen aktiven Besitzer" zu einem prüfbaren Feld machen statt zu einer Suche, die erst startet, wenn jemand schon weg ist.
- Maker: Wer einen Flow übernimmt, behält dessen vollständigen Laufverlauf, statt das Vertrauen in eine frische Kopie neu aufbauen zu müssen.
