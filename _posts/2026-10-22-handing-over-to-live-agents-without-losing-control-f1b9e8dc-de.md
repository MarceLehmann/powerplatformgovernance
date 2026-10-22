---
title: Live-Agenten übergeben, ohne die Kontrolle zu verlieren
description: Ein Copilot-Studio-Muster verbindet Live-Chat-Systeme über Skills und
  Teams-Proaktivnachrichten, während Copilot Studio den Kanal weiter steuert.
date: '2026-10-22T17:01:26Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
- environments
- ownership
content_type: curated_summary
curation_id: f1b9e8dc3bfd2877ba540f7b
image:
  path: "/assets/img/curated/f1b9e8dc3bfd2877ba540f7b.png"
  alt: 'Governance-Karte: Keep Copilot Studio in control while live agents respond
    asynchronously. Return the conversation without losing context.'
permalink: "/de/posts/handing-over-to-live-agents-without-losing-control-f1b9e8dc/"
translation_url: "/en/posts/handing-over-to-live-agents-without-losing-control-f1b9e8dc/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-handover-live-agent/
source_site_url: https://microsoft.github.io/
source_title: Handing Over to Live Agents Without Losing Control
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Mateusz Wasilewski
source_published_at: '2025-12-14'
source_updated_at: '2026-08-05'
source_type: article
faq:
- question: Wie führt das Copilot-Studio-Handover-Sample Teams-Gespräche nach einer
    Live-Agenten-Eskalation zurück?
  answer: Der Handover-Skill beendet die Live-Chat-Sitzung, sodass das Gespräch ohne
    separates Widget und ohne verlorenen Kontext zu Copilot Studio zurückkehrt.
- question: Warum funktioniert dieses Copilot-Studio-Muster für Live-Agenten nur in
    Microsoft Teams?
  answer: Es verwendet Teams-Proaktivnachrichten für asynchrone Antworten. Für andere
    Kanäle muss der Nachrichtenmechanismus angepasst werden.
- question: Welche Authentifizierung benötigt HandoverToLiveAgentSample?
  answer: Es benötigt zwei Azure-AD-App-Registrierungen, eine für den Skill und eine
    für den Copilot-Studio-Agenten, der beim Lösungsimport automatisch erstellt wird.
---

## TL;DR

Das Copilot-Studio-Handover-Sample nutzt einen M365-Agents-SDK-Skill als Nachrichtenbroker, Teams-Proaktivnachrichten für asynchrone Antworten und Sitzungszuordnung, um Gespräche an ein Live-Chat-System weiterzuleiten und zu Copilot Studio zurückzuführen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Importiert die vorbereitete Lösung und konfiguriert Eskalationsthemen sowie Umgebungsvariablen, um den Übergabeablauf zu testen.
- Admins/CoE: Plant zwei Azure-AD-App-Registrierungen, lokale Endpunkte und die Authentifizierung, da die Einrichtung vor der Bereitstellung aufwendig ist.
- Security/Compliance: Prüft die Authentifizierung zwischen Copilot Studio, Azure Bot Service und dem Live-Chat-System, bevor Nachrichten weitergeleitet werden.
