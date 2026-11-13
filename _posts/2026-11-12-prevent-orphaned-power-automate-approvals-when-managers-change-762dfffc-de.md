---
title: Verwaiste Power Automate Genehmigungen bei Managerwechsel verhindern
description: Eine Manageränderung aktualisiert aktive Genehmigungen möglicherweise
  nicht. Prüfen Sie Empfänger, erfassen Sie Anträge, überwachen Sie offene Vorgänge
  und dokumentieren Sie die Wiederherstellung.
date: '2026-11-12T10:51:05Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- security
- power-automate
content_type: curated_summary
curation_id: 762dfffcf908fe278b9e4b27
image:
  path: "/assets/img/curated/762dfffcf908fe278b9e4b27.png"
  alt: 'Governance-Karte: A manager change does not reassign an active approval. Build
    the recovery path before the request stalls.'
permalink: "/de/posts/prevent-orphaned-power-automate-approvals-when-managers-change-762dfffc/"
translation_url: "/en/posts/prevent-orphaned-power-automate-approvals-when-managers-change-762dfffc/"
source_url: https://softchief.com/power-automate-prevent-orphaned-approval-requests-when-managers-change/
source_site_url: https://softchief.com/
source_title: 'Power Automate: Prevent Orphaned Approval Requests When Managers Change'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_published_at: '2026-11-12'
source_type: article
faq:
- question: Was liefert Get manager (V2) bei einem Power Automate Benutzer ohne Manager?
  answer: Get manager (V2) kann No manager found liefern, wenn in Microsoft Entra
    ID kein Manager hinterlegt ist. Der Flow braucht dann einen Fallback.
- question: Wie behandelt man eine offene Power Automate Genehmigung nach einem Managerwechsel?
  answer: Offene Anträge werden mit den aktuellen Managerdaten verglichen. Wo unterstützt,
    wird die Genehmigung neu zugewiesen oder kontrolliert ersetzt und die ursprüngliche
    Historie behalten.
- question: Warum kann Power Automate mit Create an approval und Wait for an approval
    hängen bleiben?
  answer: Eine schnelle Antwort kann eintreffen, bevor die Wait Aktion startet, wodurch
    der Flow hängen bleibt. Die Aktionen sollten eng zusammenliegen oder sorgfältig
    getestet werden.
animation:
  video: /assets/img/animations/762dfffcf908fe278b9e4b27-de.mp4
  poster: /assets/img/animations/762dfffcf908fe278b9e4b27-de.poster.webp
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt das Ermitteln des Managers mit \"Get manager (V2)\", das Pruefen des Empfaengers, das Speichern von Antrag und Genehmigungsreferenzen und das Ueberwachen offener Genehmigungen mit der Flowhistorie."
---

## TL;DR

Power Automate weist eine aktive Genehmigung bei einer Manageränderung nicht unbedingt neu zu. Get manager (V2) soll die aktuelle Person ermitteln, deren E-Mail, UPN oder Entra-ID muss geprüft werden. Fallbacks, separate Antragsdaten und die Kontrolle offener Genehmigungen verhindern verlorene oder blockierte Entscheidungen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Den aktuellen Manager vor dem Erstellen prüfen und eine normale Fallback-Logik für fehlende oder ungültige Empfänger einbauen.
- Admins/CoE: Anträge mit Genehmigungs-ID, Status, Zuständigkeit und Routingänderungen speichern und deren Alter neben der Flowhistorie überwachen.
- Security/Compliance: Zugriffe auf Genehmigungsdaten begrenzen und dokumentieren, wer Vorgänge neu zuweisen, abbrechen oder neu starten darf, damit Entscheidungen nachvollziehbar bleiben.
