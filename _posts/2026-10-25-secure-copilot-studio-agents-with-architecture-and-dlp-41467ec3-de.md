---
title: Copilot Studio Agents mit Architektur und DLP absichern
description: Einweg-Agent-Flows, restriktive Connector-Positivlisten und wiederholbare
  Angriffstests senken Risiken bei Copilot Studio Agents.
date: '2026-10-25T04:46:15Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- copilot-studio
- dlp
- dataverse
- power-automate
content_type: curated_summary
curation_id: 41467ec334df3b58ecd0467f
image:
  path: "/assets/img/curated/41467ec334df3b58ecd0467f.png"
  alt: 'Governance-Karte: Prompts can slow attacks. Architecture can stop them.'
permalink: "/de/posts/secure-copilot-studio-agents-with-architecture-and-dlp-41467ec3/"
translation_url: "/en/posts/secure-copilot-studio-agents-with-architecture-and-dlp-41467ec3/"
source_url: https://www.karlex.fi/it-used-to-work-hacking-my-own-copilot-studio-agent-again-at-experts-live-sweden/
source_site_url: https://www.karlex.fi/
source_title: 'It used to work: hacking my own Copilot Studio agent again at Experts
  Live Sweden'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-25'
source_type: article
faq:
- question: Wie verhindert ein Copilot Studio Agent den Zugriff auf andere Dataverse
    Bewerbungen?
  answer: Nutze einen Einweg-Agent-Flow, der Bewerberdaten nach Dataverse schreibt,
    ohne dem Agent einen Rückleseweg zu geben. Verbinde den Agent nicht direkt mit
    der Tabelle.
- question: Welche Copilot Studio Einstellungen helfen gegen Prompt Injection in CVs?
  answer: Füge Regeln im Knoten für generative Antworten und in den generativen KI-Einstellungen
    des Agents hinzu und setze die Moderation auf hoch. Das hilft gegen Anweisungen
    in eingereichten Inhalten.
- question: Warum sollten DLP-Richtlinien Connectoren für Copilot Studio Agents per
    Positivliste erlauben?
  answer: Eine Positivliste beschränkt Agents auf vertrauenswürdige Connectoren. Ein
    Connector mit Lese- oder Aktionsrechten, etwa zum Löschen von Umgebungen, kann
    über einen Agent ein hohes Risiko schaffen.
---

## TL;DR

Ein Copilot Studio Bewerbungsagent widerstand den meisten Prompt-Injection-Angriffen in CVs, gab aber bei einer höflichen Anfrage in einem von zwei Durchläufen eine Zusammenfassung von Tool-Anweisungen preis. Sende Bewerberdaten über einen Einweg-Agent-Flow an Dataverse, begrenze Tool-Aufrufe, nutze hohe Moderation und erlaube per DLP nur vertrauenswürdige Connectoren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Halte Geheimnisse, Schlüssel und interne URLs aus Agent-Anweisungen heraus und teste Prompt Injections sowie Anfragen nach Anweisungszusammenfassungen nach Modelländerungen.
- Admins/CoE: Nutzt DLP-Positivlisten für Agent-Connectoren, besonders wenn Connectoren sensible Ressourcen wie Umgebungen lesen oder verändern können.
- Security/Compliance: Entwerft Einweg-Agent-Flows zu Dataverse und begrenzt wiederholte Tool-Aufrufe, denn Prompts allein verhindern missbräuchliche Aktionen und Kosten nicht.
- Leadership/Business: Macht sichere Wege zum Erstellen von Agents einfach nutzbar, denn unsichere Lösungen in der Umgebung bleiben eine Verantwortung der Organisation.
