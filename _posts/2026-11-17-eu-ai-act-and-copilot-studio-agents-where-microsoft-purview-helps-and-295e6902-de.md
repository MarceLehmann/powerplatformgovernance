---
title: 'EU AI Act und Copilot Studio Agents: Wo Microsoft Purview hilft und wo es
  endet'
description: Die Frist für Hochrisiko-KI hat sich verschoben, doch die Transparenzregeln
  für Chatbots und Agents gelten weiter. Purview deckt Datenkontrollen ab, nicht Inventar
  und Ownership von Agents.
date: '2026-11-17T10:40:07Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- compliance
- dlp
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 295e69025542da0e52768e2d
image:
  path: "/assets/img/curated/295e69025542da0e52768e2d.png"
  alt: 'Governance-Karte: The high-risk deadline moved, but agents must still disclose
    they are AI.'
permalink: "/de/posts/eu-ai-act-and-copilot-studio-agents-where-microsoft-purview-helps-and-295e6902/"
translation_url: "/en/posts/eu-ai-act-and-copilot-studio-agents-where-microsoft-purview-helps-and-295e6902/"
source_url: https://rencore.com/en/blog/tackling-eu-ai-act-what-microsoft-purview-can-and-cant-do-for-you/
source_site_url: https://rencore.com/
source_title: 'Tackling the EU AI Act: What Microsoft Purview can (and can''t) do
  for you'
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Jasper Oosterveld
source_published_at: '2026-11-17'
source_type: article
faq:
- question: Müssen in Copilot Studio gebaute Chatbots sich unter dem EU AI Act als
    KI zu erkennen geben?
  answer: Ja. Die Leitlinien der Kommission verlangen, dass Agents, die mit Menschen
    interagieren, sich von Anfang an zu erkennen geben; eine Begrüssung ohne KI-Hinweis
    genügt womöglich nicht.
- question: Was kann Microsoft Purview bei der Governance von Copilot Studio Agents
    nicht leisten?
  answer: Es zeigt, wenn ein Agent eine vertrauliche Datei öffnet, aber nicht, wer
    ihn gebaut hat, ob diese Person noch angestellt ist, wann er zuletzt genutzt wurde
    oder wie viele Kopien existieren.
- question: Wie lange speichert Microsoft Purview Audit Protokolle zu Copilot- und
    Agent-Interaktionen?
  answer: Audit Standard speichert Einträge 180 Tage, Audit Premium kann Einträge
    aus Exchange Online, SharePoint, OneDrive und Entra für lizenzierte Nutzer ein
    Jahr aufbewahren. Bereits aufgezeichnete Einträge behalten ihr ursprüngliches
    Ablaufdatum.
---

## TL;DR

Die Frist für Hochrisiko-KI verschob sich auf den 2. Dezember 2027, die Transparenzregeln blieben: Seit dem 2. August 2026 müssen Agents und Chatbots sich als KI zu erkennen geben. Purview DSPM listet KI-Apps auf, Vertraulichkeitsbezeichnungen und DLP steuern, was Copilot lesen darf, und Auditprotokolle bleiben 180 Tage bis ein Jahr erhalten. Purview kann dennoch keine Agent-Eigner benennen oder ein Inventar führen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Ein Copilot-Studio-Agent ohne Freigabe, etwa mit HR-Daten für die Bewerbendenauswahl, kann das Unternehmen in Richtung Anbieter-Pflichten und Hochrisiko bringen; Agents vorab prüfen lassen.
- Admins/CoE: Jede veröffentlichte Agent-Begrüssung prüfen, Audit-Aufbewahrung vor neuer Aktivität festlegen, da Änderungen nicht rückwirkend gelten, und prüfen, ob Purview Risky Agents-Warnungen bereits erzeugt.
- Security/Compliance: DLP prüft keine Dateien, die Nutzer direkt an einen Copilot-Prompt anhängen, und ohne integrierte Geräte plus Browsererweiterung bleibt die Nutzung unverwalteter KI-Apps unsichtbar.
- Leadership/Business: Geldbussen erreichen 15 Millionen Euro oder 3 Prozent des weltweiten Umsatzes, und Beschaffende fragen nach KI-Governance; Investitionen in Agent-Inventar und Ownership sichern Abschlüsse und Vertrauen.
