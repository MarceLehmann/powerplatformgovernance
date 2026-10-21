---
title: Was Purview DLP in Copilot wirklich kontrolliert
description: Purview DLP kann Websuche, Prompts, gelabelte Dateien und externe E-Mails
  für Copilot steuern, ersetzt aber keine Berechtigungen und prüft Uploads nicht inhaltlich.
date: '2026-10-21T10:58:42Z'
author: governance_editorial
lang: de
toc: false
tags:
- dlp
- security
- compliance
content_type: curated_summary
curation_id: b4c5acf47a3089a3d862cd8a
image:
  path: "/assets/img/curated/b4c5acf47a3089a3d862cd8a.png"
  alt: 'Governance-Karte: DLP is not a universal AI switch. Match each control to
    the processing step it must restrict.'
permalink: "/de/posts/what-purview-dlp-really-controls-in-copilot-b4c5acf4/"
translation_url: "/en/posts/what-purview-dlp-really-controls-in-copilot-b4c5acf4/"
source_url: https://www.mvptreff.de/2026/10/21/purview-dlp-copilot-was-wirklich-kontrolliert/
source_site_url: https://www.mvptreff.de/
source_title: 'PURVIEW & COPILOT: WAS DLP WIRKLICH KONTROLLIERT – UND WAS NICHT'
source_name: MVPTreff
source_language: de
source_language_name: Deutsch
source_author: Julian Kusenberg
source_published_at: '2026-10-21'
source_type: article
faq:
- question: Wie verhindert Purview DLP die externe Websuche von Microsoft 365 Copilot?
  answer: Purview prüft den Prompt auf definierte Sensitive Information Types und
    verhindert bei einem Treffer die externe Websuche. Eine interne Antwort kann weiterhin
    möglich sein.
- question: Was passiert bei einem Microsoft 365 Copilot Prompt mit einem Sensitive
    Information Type?
  answer: Ein passender Sensitive Information Type kann verhindern, dass Copilot den
    Prompt beantwortet. Ein anderer Prompt ohne sensible Information bleibt möglicherweise
    möglich.
- question: Prüft Copilot DLP eine direkt an einen Copilot Prompt angehängte Datei?
  answer: Nein. Diese Copilot-DLP-Location prüft den eingegebenen Prompt-Text, nicht
    den Dateiinhalt auf Sensitive Information Types.
---

## TL;DR

Microsoft Purview DLP nutzt getrennte Kontrollen für Microsoft 365 Copilot: Es kann externe Websuche verhindern, sensible Prompts blockieren, gelabelte Dateien oder E-Mails ausschliessen und externe E-Mail-Quellen sperren. Die Richtlinien-Location korrigiert keine Berechtigungen und prüft direkt hochgeladene Dateien nicht auf Sensitive Information Types.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Ordnet jede DLP-Regel dem Verarbeitungsschritt zu, den sie einschränken soll, weil Websuche, Prompt-Verarbeitung, gelabelte Elemente und externe E-Mail-Quellen unterschiedlich wirken.
- Security/Compliance: Behaltet Berechtigungen als erste Kontrolle bei und ergänzt DLP für die Copilot-Verarbeitung, da DLP zu weit gefasste SharePoint-Zugriffe nicht korrigiert.
- Makers: Geht nicht davon aus, dass ein sensibler Direkt-Upload durch die Copilot-DLP-Location erkannt wird, weil der Dateiinhalt nicht auf Sensitive Information Types geprüft wird.
