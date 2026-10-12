---
title: Copilot Studio Agents mit gesteuertem ALM in Teams bereitstellen
description: Der Beitrag vergleicht Direktinstallation, Maker-Einreichung und Admin-Bereitstellung
  sowie Umgebungskennzeichnung, Manifest-Anpassung, Setup Policies und M365 Copilot.
date: '2026-10-12T16:57:15Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- environments
- copilot-studio
- security
content_type: curated_summary
curation_id: 01b8133b73a48f4d63347975
image:
  path: "/assets/img/curated/01b8133b73a48f4d63347975.png"
  alt: 'Governance-Karte: Production agents need admin control. Setup Policies make
    installation and pinning predictable.'
permalink: "/de/posts/deploy-copilot-studio-agents-to-teams-with-governed-alm-01b8133b/"
translation_url: "/en/posts/deploy-copilot-studio-agents-to-teams-with-governed-alm-01b8133b/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-teams-deployment/
source_site_url: https://microsoft.github.io/
source_title: 'From DEV to PROD: Deploying Copilot Studio Agents to Teams and Microsoft
  365 Copilot'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Henry Jammes
source_published_at: '2026-04-07'
source_updated_at: '2026-08-05'
source_type: article
faq:
- question: Was bewirken Installed apps und Pinned apps in Teams Setup Policies für
    Copilot Studio Agents?
  answer: Installed apps installieren den Agent automatisch für Zielbenutzer. Pinned
    apps heften ihn an einer festgelegten Position in der Teams-Seitenleiste an.
- question: Wie unterscheide ich DEV- und TEST-Copilot-Studio-Agents in Teams?
  answer: Verwende das Vorschaufeature für den Channel-Namenszusatz mit einer Umgebungsvariablen
    oder passe das Teams-Manifest mit Namen, Symbolen und Farben an.
- question: Was passiert bei widersprüchlichen Teams Setup Policies für Copilot Studio
    Agents?
  answer: Setup Policies werden nicht zusammengeführt. Bei widersprüchlichen Gruppenzuweisungen
    gilt die höchstrangige Zuweisung, daher müssen Administratoren Überschneidungen
    prüfen.
---

## TL;DR

Copilot Studio bietet Direktinstallation für Entwicklung, Maker-Einreichung mit Admin-Freigabe für Tests und Admin-Bereitstellung für Produktion. Setup Policies im Teams Admin Center installieren und heften Agents für Sicherheitsgruppen automatisch an. Das Vorschaufeature für Namenszusätze kennzeichnet Umgebungen ohne Manifestbearbeitung.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt die Direktinstallation für Entwicklung und Tests. Kennzeichnet DEV- und TEST-Agents mit Namenszusatz oder angepasstem Manifest, damit sie nicht verwechselt werden.
- Admins/CoE: Nutzt Maker-Einreichung für kontrollierte Releases oder die Admin-Bereitstellung für Produktion. Konfiguriert Verfügbarkeit, automatische Installation und Anheften im Teams Admin Center.
- Security/Compliance: Steuert Zugriff und Verteilung über Sicherheitsgruppen. Prüft widersprüchliche Setup Policies, da die höchstrangige Gruppenzuweisung gewinnt.
- Leadership/Business: Validiert Agents unabhängig in Teams und Microsoft 365 Copilot, weil sich die Kanäle unterschiedlich verhalten können.
