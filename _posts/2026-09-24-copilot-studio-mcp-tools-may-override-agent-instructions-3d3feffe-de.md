---
title: MCP-Tools können Anweisungen eines Copilot-Studio-Agenten übersteuern
description: Ein benutzerdefinierter MCP-Server veranlasste einen Copilot-Studio-Agenten
  zu einer Antwort auf eine fremde Frage, obwohl die Unterhaltung auf einen Trainingskurs
  begrenzt war.
date: '2026-09-24T02:53:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
content_type: curated_summary
curation_id: 3d3feffe84d4963384edd009
permalink: "/de/posts/copilot-studio-mcp-tools-may-override-agent-instructions-3d3feffe/"
translation_url: "/en/posts/copilot-studio-mcp-tools-may-override-agent-instructions-3d3feffe/"
source_url: https://www.itaintboring.com/ai/youve-added-instructions-to-your-copilot-studio-agent-what-happens-next/
source_site_url: https://www.itaintboring.com/
source_title: You’ve added instructions to your Copilot Studio agent. What happens
  next?
source_name: It Ain’t Boring
source_language: en
source_language_name: English
source_author: Alex Shlega
source_published_at: '2025-11-09'
---
## TL;DR

Ein Copilot-Studio-Agent lehnte zunächst Fragen ausserhalb eines Trainingskurses ab. Nachdem ein passendes benutzerdefiniertes MCP-Tool Zahlen zurückgab, beantwortete der Agent jedoch eine solche Frage. Daraus leitet der Autor ab, dass MCP-Tools möglicherweise Vorrang vor Agentenanweisungen haben und ihre Antworten eine Unterhaltung trotz gesetzter Einschränkungen fortsetzen können.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: jede Agentenanweisung in Copilot Studio zusammen mit allen konfigurierten Tools testen, besonders mit benutzerdefinierten MCP-Servern, weil ein passendes Tool den Antwortpfad verändern kann.
- Security/Compliance: Einschränkungen durch Anweisungen allein nicht als ausreichende Kontrolle betrachten, solange Tool-Aufrufe und deren Antworten nicht geprüft wurden; das Beispiel zeigt eine Fortsetzung einer fremden Unterhaltung nach einer MCP-Antwort.
