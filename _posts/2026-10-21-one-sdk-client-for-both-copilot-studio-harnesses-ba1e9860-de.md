---
title: Ein SDK-Client für beide Copilot-Studio-Harnesses
description: Die Copilot-Studio-Clients für JavaScript und .NET verbinden eigene Apps
  per Entra ID mit Standard- und GitHub-Copilot-Harnesses.
date: '2026-10-21T22:39:34Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
content_type: curated_summary
curation_id: ba1e9860d921c0f0cebbb1f8
image:
  path: "/assets/img/curated/ba1e9860d921c0f0cebbb1f8.png"
  alt: 'Governance-Karte: One client can serve both Copilot Studio harnesses. Preview
    support still needs early release testing.'
permalink: "/de/posts/one-sdk-client-for-both-copilot-studio-harnesses-ba1e9860/"
translation_url: "/en/posts/one-sdk-client-for-both-copilot-studio-harnesses-ba1e9860/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-sdk-both-harnesses/
source_site_url: https://microsoft.github.io/
source_title: One SDK Client for Both Copilot Studio Harnesses (Preview)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-10-21'
source_updated_at: '2026-10-21'
source_type: article
faq:
- question: Wie verbindet CopilotStudioClient beide Copilot-Studio-Harnesses?
  answer: Der Client verwendet Umgebungs-ID und Agent-Schemaname und nutzt danach
    für beide Harnesses dieselben Konversationsmethoden.
- question: Welche Microsoft-Entra-Berechtigung braucht das Copilot-Studio-React-WebChat-Beispiel?
  answer: Die App-Registrierung benötigt die delegierte Power-Platform-API-Berechtigung
    CopilotStudio.Copilots.Invoke, mit Zustimmung der Organisation nach Bedarf.
- question: Aktiviert showReasoning das Reasoning eines Copilot-Studio-Agents?
  answer: Nein. showReasoning zeigt nur vom Dienst gesendetes Reasoning an. Harness
    und Modell bestimmen, welche Inhalte der Client empfängt.
---

## TL;DR

Der Copilot-Studio-Client verwendet dieselben Konversationsmethoden für Standard- und GitHub-Copilot-Harnesses, wenn Umgebungs-ID und Agent-Schemaname übergeben werden. JavaScript und .NET werden unterstützt, Python ist geplant. Die Unterstützung des GitHub-Copilot-Harnesses bleibt eine Vorschau, während Endpunkte regional ausgerollt werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Testet den Client in einer Umgebung mit frühem Release, da die Endpunkte des GitHub-Copilot-Harnesses noch regional ausgerollt werden.
- Security/Compliance: Richtet eine Entra-App-Registrierung mit der delegierten Berechtigung CopilotStudio.Copilots.Invoke ein und speichert kein Clientgeheimnis im Browser.
- Makers: Verwendet die Umgebungs-ID und den korrekten Agent-Schemanamen. Der Agent muss veröffentlicht sein und Authenticate with Microsoft verwenden.
