---
title: Einen sicheren Ort zum Bauen schaffen
description: Eine gesteuerte Maker-Umgebung braucht abgestimmte DLP-Richtlinien, gezielten
  Zugriff, Dataverse-Kontrollen, Lösungen, Monitoring und einen klaren Weg in die
  Produktion.
date: '2026-09-26T16:34:03Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- dlp
- environments
- dataverse
- alm
content_type: curated_summary
curation_id: 0d1f39bd2335ec69749c07f5
image:
  path: "/assets/img/curated/0d1f39bd2335ec69749c07f5.png"
  alt: 'Governance-Karte: Restriction without an alternative creates workarounds.
    Give makers a governed place to build.'
permalink: "/de/posts/create-one-safe-place-to-build-0d1f39bd/"
translation_url: "/en/posts/create-one-safe-place-to-build-0d1f39bd/"
source_url: https://www.michaelroth42.com/post/2026-02-23-a-safe-place-to-build/
source_site_url: https://www.michaelroth42.com/
source_title: Create One Safe Place to Build
source_name: MichaelRoth42 Blog
source_language: en
source_language_name: English
source_author: Michael Roth
source_published_at: '2026-03-16'
source_type: article
submitted_by:
  publish_credit: true
  name: Michael Roth
  linkedin: https://www.linkedin.com/in/michaelroth42/
faq:
  - question: "Warum sollte die DLP-Richtlinie einer Maker-Umgebung der Produktion ähneln?"
    answer: "Weil Maker sonst mit Möglichkeiten bauen, die es in der Produktion nicht gibt, und später enttäuscht werden. Sind Custom Connectors oder HTTP-Aufrufe in der Produktion eingeschränkt, sollte das auch im Maker Lab gelten. Die Richtlinie darf etwas grosszügiger sein, aber nicht dramatisch. Für Experimente mit gesperrten Connectors empfiehlt die Quelle ein separates Advanced Maker Lab mit strengerem Zugang."
  - question: "Wie sollte der Zugang zu einer Maker-Umgebung geregelt werden?"
    answer: "Nicht automatisch für alle im Verzeichnis, sondern über Kompetenz. Die Quelle schlägt ein Lernmodul von etwa 30 Minuten vor, das erklärt, was Power Platform ist und was nicht, wie Connectors eingeschränkt sind, wofür Dataverse dient und welche Erwartungen ans Maker Lab gelten. Nach Abschluss erfolgt der Zugang über eine Sicherheitsgruppe, die das Governance-Team oder die IT verwaltet."
  - question: "Wann lohnt es sich, ein Maker Lab in mehrere Umgebungen aufzuteilen?"
    answer: "Standardmässig genügt ein allgemeines Maker Lab. Aufgeteilt wird erst, wenn eine von drei Bedingungen zutrifft: Fortgeschrittene Fälle brauchen Connectors, die für den allgemeinen Zugang zu riskant sind, einzelne Fachbereiche haben dauerhaft ein hohes Maker-Volumen, oder Maker bauen Model-Driven Apps mit echter Geschäftslogik oder nutzen Standardtabellen für reale Abläufe. Jede zusätzliche Umgebung erhöht den Verwaltungsaufwand."
  - question: "Welche Umgebungseinstellungen empfiehlt die Quelle für ein Maker Lab?"
    answer: "Vier Einstellungen: eine Sicherheitsgruppe für den Zugang, Dataverse Audit mit 30 Tagen Aufbewahrung, damit Maker lernen, dass ihre Aktionen nachvollziehbar sind, die Vorgabe, Flows und Apps standardmässig in Lösungen zu erstellen, sowie eine Kapazitätsüberwachung. Audit hält fest, wer was geändert hat, verhindert aber keine Fehler und ersetzt keine Sicherung. Lösungen, die 90 Tage unberührt blieben, werden entfernt, sobald die Verantwortlichen bestätigen, dass sie nicht mehr gebraucht werden."
  - question: "Was sollten Maker über den Lebenszyklus ihrer Lab-Lösungen wissen?"
    answer: "Das Maker Lab ist keine Produktionsumgebung. Apps und Flows können bei Richtlinienverstössen oder Verwaisung gelöscht werden, es gibt keine Verfügbarkeitszusage, und die Verantwortung bleibt beim Maker, sodass die Lösungen eventuell nicht mehr gepflegt werden, wenn jemand geht. Geschäftskritische Lösungen müssen in die Produktion migriert werden. Maker müssen wissen, wie sie das beantragen, und der Prozess sollte dokumentiert und leicht auffindbar sein."
---

## TL;DR

Eine Maker-Umgebung soll eine gesteuerte Alternative zur eingeschränkten Standardumgebung bieten. Ihre DLP-Richtlinie sollte an der Produktion ausgerichtet sein. Der Zugriff erfolgt über eine Sicherheitsgruppe nach einer kurzen Schulung. 30 Tage Dataverse-Audit, Lösungen für neue Apps und Flows, Kapazitätsüberwachung und eine Migration ausgereifter Lösungen in die Produktion gehören zum empfohlenen Basismodell.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Die kurze Lernschulung absolvieren und in der Maker-Umgebung von Anfang an Lösungen verwenden, damit Experimente portierbar und für eine Migration vorbereitet sind.
- Admins/CoE: Die DLP-Richtlinie der Maker-Umgebung an die Produktion angleichen, den Zugriff über eine Sicherheitsgruppe steuern, Nutzung und Kapazität überwachen und Umgebungen nur bei begründetem Bedarf aufteilen.
- Security/Compliance: Dataverse-Audit mit 30 Tagen Aufbewahrung aktivieren, um Datenänderungen nachvollziehen zu können. Audit verhindert Fehler nicht, stellt Daten nicht automatisch wieder her und ersetzt keine Backups.
- Leadership/Business: Einen klaren Migrationsweg für wichtige Lösungen bereitstellen, weil Einschränkungen ohne Alternative Umgehungen und Frustration fördern.
