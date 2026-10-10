---
title: Copilot Studio Agents ohne Benutzerlizenz in Microsoft 365 Copilot bereitstellen
description: Copilot Chat Nutzer können Copilot Studio Agents über Copilot Credits
  verwenden. Admins steuern Bereitstellung, Kapazität und kanalabhängiges Verhalten.
date: '2026-10-10T16:54:15Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- alm
- environments
- copilot-studio
content_type: curated_summary
curation_id: 8495a2a359157ea44e96b43d
image:
  path: "/assets/img/curated/8495a2a359157ea44e96b43d.png"
  alt: 'Governance-Karte: A Copilot license is not the gate. Capacity and channel
    behavior are.'
permalink: "/de/posts/deploy-copilot-studio-agents-to-microsoft-365-copilot-without-per-8495a2a3/"
translation_url: "/en/posts/deploy-copilot-studio-agents-to-microsoft-365-copilot-without-per-8495a2a3/"
source_url: https://microsoft.github.io/mcscatblog/posts/no-copilot-license-m365-channel/
source_site_url: https://microsoft.github.io/
source_title: No, You Don't Need a Copilot License to Deploy Agents to Microsoft 365
  Copilot
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Henry Jammes
source_published_at: '2026-04-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie mache ich einen Copilot Studio Agent in Microsoft 365 Copilot verfügbar?
  answer: Den Teams und Microsoft 365 Copilot Kanal verbinden und Make agent available
    in Microsoft 365 Copilot aktivieren. Nutzer wählen den Agent anschliessend mit
    @ aus.
- question: Benötigen Copilot Chat Nutzer eine Microsoft 365 Copilot Lizenz für Copilot
    Studio Agents?
  answer: Nein. Copilot Chat reicht aus, und die Agentennutzung kann über Copilot
    Credits statt über eine Copilot Lizenz pro Nutzer abgedeckt werden.
- question: Warum funktioniert Conversation Start bei einem Copilot Studio Agent in
    Microsoft 365 Copilot nicht?
  answer: Microsoft 365 Copilot unterstützt das Conversation Start Systemthema nicht.
    Bei unbekannten Kontextwerten sollte ein durch Activity Event ausgelöstes Thema
    verwendet werden.
---

## TL;DR

Copilot Studio Agents lassen sich über die Einstellung Make agent available in Microsoft 365 Copilot in Microsoft 365 Copilot veröffentlichen. Copilot Chat Nutzer benötigen keine Microsoft 365 Copilot Lizenz, da die Nutzung über Copilot Credits abgerechnet werden kann. Seit dem 20. April 2026 benötigen eigenständige Prepaid-Kapazitätspakete kein Azure Abonnement mehr.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Den Microsoft 365 Copilot Kanal aktivieren und Conversation Start durch einen Activity Event Trigger ersetzen, weil Conversation Start dort nicht unterstützt wird.
- Admins/CoE: Copilot Credit Policies für Entra ID Gruppen verwenden und Agents für Zielgruppen anheften, damit Kapazität und Rollout zentral gesteuert werden.
- Security/Compliance: Agents in Teams und Microsoft 365 Copilot testen, weil eingebettete URLs, Adaptive Cards, Übergaben und Feedback je Kanal unterschiedlich funktionieren.
