---
title: Benutzerdefinierte Header für MCP-Connectoren in Copilot Studio
description: Serverweiten Kontext für MCP-Connectoren in Copilot Studio einrichten,
  indem OpenAPI-YAML bearbeitet, jeder Agent aktualisiert und der Header als Eingabe
  hinzugefügt wird.
date: '2026-10-27T17:01:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- governance
- environments
- copilot-studio
content_type: curated_summary
curation_id: 29eb3741046c9b9a3c69bb93
image:
  path: "/assets/img/curated/29eb3741046c9b9a3c69bb93.png"
  alt: 'Governance-Karte: Custom headers carry context. Define them in OpenAPI, then
    refresh every agent.'
permalink: "/de/posts/adding-custom-headers-to-mcp-connectors-in-copilot-studio-29eb3741/"
translation_url: "/en/posts/adding-custom-headers-to-mcp-connectors-in-copilot-studio-29eb3741/"
source_url: https://microsoft.github.io/mcscatblog/posts/mcp-custom-headers/
source_site_url: https://microsoft.github.io/
source_title: Adding Custom Headers to MCP Connectors in Copilot Studio
source_name: Microsoft Copilot Studio CAT
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-10-22'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie füge ich einem MCP-Connector in Copilot Studio einen Benutzerlevel-Header
    hinzu?
  answer: Bearbeite das OpenAPI-YAML unter dem POST-Endpunkt /mcp, aktualisiere den
    Connector und stelle den Header anschliessend im Bereich Inputs bereit.
- question: Warum muss ein MCP-Connector nach einer OpenAPI-YAML-Änderung entfernt
    und neu hinzugefügt werden?
  answer: Copilot Studio erkennt den geänderten benutzerdefinierten Header erst, wenn
    der Connector in jedem verwendenden Agenten entfernt und erneut hinzugefügt wurde.
- question: Funktionieren X-präfixierte benutzerdefinierte Header bei MCP-Connectoren
    im Oktober 2025?
  answer: Das dokumentierte Problem vom Oktober 2025 besagt, dass X-präfixierte Header
    nicht funktionieren. Verwende bis zur Behebung Namen ohne X-Präfix.
animation:
  video: /assets/img/animations/29eb3741046c9b9a3c69bb93-de.mp4
  poster: /assets/img/animations/29eb3741046c9b9a3c69bb93-de.poster.webp
  width: 800
  height: 450
  alt: "Eine Abfolge mit vier Schritten zeigt das Bearbeiten des OpenAPI-YAML unter dem POST-Endpunkt /mcp, das Aktualisieren des Connectors, das Entfernen und erneute Hinzufuegen in jedem Agenten und danach das Setzen des Header-Eingabewerts."
---

## TL;DR

MCP-Connectoren in Copilot Studio bieten keine Oberfläche für benutzerdefinierte Header. Definiere sie im OpenAPI-YAML unter dem POST-Endpunkt /mcp, aktualisiere den Connector, entferne ihn aus jedem Agenten und füge ihn erneut hinzu. Danach kann der Header mit einem festen Wert, einer Systemvariable oder PowerFX konfiguriert werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Verwende verifizierten Kontext wie einen Benutzerrang als benutzerdefinierten Header statt als Tool-Eingabe, damit der MCP-Server Aufrufe einheitlich filtert.
- Admins/CoE: Bearbeite das OpenAPI-YAML des benutzerdefinierten Connectors, aktualisiere ihn und füge ihn in jedem betroffenen Agenten neu hinzu, weil eine Aktualisierung allein nicht genügt.
- Security/Compliance: Prüfe Header für Authentifizierung, Rollen, Berechtigungen oder Feature Flags und vermeide X-Präfixe, solange das dokumentierte Connector-Problem besteht.
