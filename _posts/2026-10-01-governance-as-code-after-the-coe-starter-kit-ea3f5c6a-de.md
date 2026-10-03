---
title: Governance as Code nach dem CoE Starter Kit
description: PAC CLI-Inventar-APIs, versionierte Regeln und wiederholbare Erfassung
  helfen, Risiken im Power-Platform-Mandanten zu verfolgen.
date: '2026-10-01T05:02:30Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- coe
- environments
- alm
- power-apps
content_type: curated_summary
curation_id: ea3f5c6a5b9fcea34ee7e4b0
image:
  path: "/assets/img/curated/ea3f5c6a5b9fcea34ee7e4b0.png"
  alt: 'Governance-Karte: AI can query governance, but deterministic capture must
    run every time.'
permalink: "/de/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
translation_url: "/en/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
source_url: https://www.karlex.fi/governance-as-code-life-after-the-coe-starter-kit/
source_site_url: https://www.karlex.fi/
source_title: 'Governance as code: life after the CoE Starter Kit'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-01'
source_type: article
faq:
  - question: "Was ist mit dem CoE Starter Kit passiert, und was bleibt als Lücke?"
    answer: "Microsoft hat das Repository im Juli archiviert. Der Redner nutzte das Kit seit 2020 und beschreibt, dass die Pflege der Releases fast eine Vollzeitaufgabe war. Als Ersatz taugt das Copilot Agent Kit nur für Agenten und braucht jetzt Copilot-Studio-Credits. Microsoft kündigte API-first an, doch für Verwaltungsaufgaben des Kits fehlt noch ein Werkzeug-Ersatz."
  - question: "Welche drei Stufen beschreibt die Reifeleiter für Governance as Code?"
    answer: "Stufe eins ist die PAC-CLI im Terminal, kombiniert mit KI-Chat. Stufe zwei führt vorhandenen Community-Code aus, etwa das Power Platform Control Hub als Code App, das Inventar- und Admin-API-Daten in Dashboards zeigt. Stufe drei ist eine eigene Lösung aus Ledger und Workbench, die Kontext wie Zweck, Richtlinien und Verantwortliche ergänzt, den ein Dashboard allein nicht liefert."
  - question: "Welche Warnungen gelten beim Arbeiten mit der PAC-CLI und einem KI-Agenten?"
    answer: "Halte die CLI aktuell, denn neuere Versionen brachten fünfzehn neue Befehlsgruppen, meist in der Vorschau. Prüfe das aktive Authentifizierungsprofil, weil der Redner im Gespräch mit Claude versehentlich Funktionen im falschen Tenant aktivierte. Und der PAC-MCP-Server ist weniger nötig, da Agenten die CLI-Hilfe selbst lesen."
  - question: "Wie sind Ledger und Workbench in der selbst gebauten Governance-Lösung aufgebaut?"
    answer: "Das Ledger speichert den automatisch erfassten Tenant-Zustand in einer SQLite-Datenbank in einem Git-Repository, samt Regeln und Schemata. Die Workbench ist die Oberfläche für Befunde und Aktionen, gebaut mit Lovable Cloud und Daten in Supabase. Ein einzelner Prompt aktualisiert die Erfassung. Die immer gleiche deterministische Erfassung verhindert, dass der Agent Aktionen erfindet."
  - question: "Wie schreibe ich Governance-Regeln, die ein KI-Agent befolgen kann?"
    answer: "Schreibe sie so, dass Agenten sie lesen können, denn KI legt Regeln wörtlich aus. Mehrdeutige oder widersprüchliche Regeln lassen sich nicht an Agenten delegieren. Der Redner warnt ausserdem, dass Coding-Agenten gern mehr ausführen als erlaubt, weshalb Menschen die Grenzen setzen müssen. Für schnell per Prompt gebaute Artefakte hat er noch keine Governance-Lösung."
---

## TL;DR

PAC CLI-Inventar-APIs zeigen Apps, Flows und Agents je Umgebung innerhalb weniger Minuten, ohne CoE-Starter-Kit-Datenbank und nächtliche Sync-Flows. PAC CLI soll aktuell bleiben und das aktive Authentifizierungsprofil muss geprüft werden. Community-Code ist vor dem Produktionseinsatz in einer Sandbox zu validieren. Umgebungszonen, Regeln und erfasster Mandantenstatus sollen versioniert und wiederholbar verwaltet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: PAC CLI-Inventardaten nutzen, um unkontrollierte Umgebungen zu erkennen, und das aktive Authentifizierungsprofil prüfen.
- Admins/CoE: Managed Environments aktivieren, aber wöchentliche Digests nicht als vollständiges Betriebswerkzeug behandeln.
- Security/Compliance: Drittanbieterpakete und Community-Dashboards in einer Sandbox validieren, bevor sie Produktion kontaktieren.
- Leadership/Business: Klare, widerspruchsfreie Governance-Regeln festlegen und Entscheidungen zu Mandantenaktionen bei Menschen belassen.
