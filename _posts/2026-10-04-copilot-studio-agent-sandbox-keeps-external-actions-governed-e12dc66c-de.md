---
title: Copilot Studio Agent Sandbox hält externe Aktionen unter Governance
description: Copilot Studio Agents führen Code in einer temporären Sandbox ohne Netzwerkzugang
  aus. Knowledge und konfigurierte Tools sind die einzigen externen Wege.
date: '2026-10-04T16:57:02Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- alm
- copilot-studio
content_type: curated_summary
curation_id: e12dc66c0b192535992e37bc
image:
  path: "/assets/img/curated/e12dc66c0b192535992e37bc.png"
  alt: 'Governance-Karte: Sandbox code cannot reach the network. External actions
    stay governed.'
permalink: "/de/posts/copilot-studio-agent-sandbox-keeps-external-actions-governed-e12dc66c/"
translation_url: "/en/posts/copilot-studio-agent-sandbox-keeps-external-actions-governed-e12dc66c/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-agent-sandbox/
source_site_url: https://microsoft.github.io/
source_title: The New Copilot Studio Agent Sandbox
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Chris Garty
source_published_at: '2026-07-20'
source_updated_at: '2026-08-11'
source_type: article
faq:
- question: Kann Code in der Copilot Studio Agent Sandbox eine API aufrufen oder E-Mails
    senden?
  answer: Nein. Die Sandbox hat keinen ausgehenden Netzwerkpfad, daher können API-Aufrufe
    und E-Mails die Umgebung nicht verlassen.
- question: Wie greifen Copilot Studio Agents aus der Sandbox auf externe Daten zu?
  answer: Sie nutzen konfigurierte Knowledge-Quellen für Informationen und Tools wie
    Connectors oder MCP-Server für Live-Daten und Aktionen.
- question: Wo müssen Dateien aus der Copilot Studio Sandbox für die spätere Nutzung
    gespeichert werden?
  answer: Die Datei muss an den Benutzer zurückgegeben oder über ein konfiguriertes
    Tool gespeichert werden. Sandbox-Speicher bleibt nicht über Gespräche hinweg erhalten.
---

## TL;DR

Copilot Studio Agents mit GitHub Copilot Harness führen Python und Shell-Aufgaben in einem verwalteten, temporären Container aus. Die Sandbox hat keinen ausgehenden Netzwerkzugang, daher können API-Aufrufe, E-Mails und SharePoint-Schreibvorgänge sie nicht verlassen. Externer Zugriff erfolgt nur über konfigurierte Knowledge-Quellen und Tools und unterliegt damit Governance-Kontrollen und Datenrichtlinien.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzen Sie geprüfte Skill-Skripte für wiederholbare Datei- und Rechenaufgaben, während generierter Code für neue Aufgaben möglich bleibt.
- Admins/CoE: Konfigurieren Sie Knowledge und Tools bewusst, weil sie die einzigen Wege für Agent-Zugriff ausserhalb der Sandbox sind.
- Security/Compliance: Behandeln Sie den fehlenden ausgehenden Netzwerkzugang als Sicherheitsgrenze und steuern Sie externe Pfade über Datenrichtlinien.
- Leadership/Business: Planen Sie Sandbox-Dateien nicht als Speicher ein, weil der Arbeitsbereich temporär ist und Ergebnisse zurückgegeben oder gespeichert werden müssen.
