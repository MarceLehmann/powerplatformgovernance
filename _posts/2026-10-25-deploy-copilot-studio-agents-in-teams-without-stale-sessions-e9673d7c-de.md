---
title: Copilot Studio Agents zuverlässig in Microsoft Teams bereitstellen
description: Persistente Teams-Sitzungen, Inaktivitäts-Resets, Connector-Anmeldung,
  Suchtransparenz, Versionierung und erzwungene Aktualisierungen für Copilot Studio
  verwalten.
date: '2026-10-25T16:57:19Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
- alm
- governance
content_type: curated_summary
curation_id: e9673d7c084b125524396184
image:
  path: "/assets/img/curated/e9673d7c084b125524396184.png"
  alt: 'Governance-Karte: Teams sessions persist. Reset stale state before it causes
    trouble.'
permalink: "/de/posts/deploy-copilot-studio-agents-in-teams-without-stale-sessions-e9673d7c/"
translation_url: "/en/posts/deploy-copilot-studio-agents-in-teams-without-stale-sessions-e9673d7c/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-teams-deployment-ux/
source_site_url: https://microsoft.github.io/
source_title: Best Practices for Deploying Copilot Studio Agents in Microsoft Teams
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Remi Dyon
source_published_at: '2025-11-14'
source_updated_at: '2026-08-05'
source_type: article
faq:
- question: Wie richte ich einen Inaktivitäts-Reset für einen Copilot Studio Agenten
    in Teams ein?
  answer: Verwende The user is inactive for awhile, lege die Zeit fest, lösche Variablen
    und Verlauf und beende anschliessend die Unterhaltung.
- question: Was bewirkt /debug clearstate in einer Copilot Studio Teams-Unterhaltung?
  answer: Der Befehl löscht den Gesprächszustand, entfernt zwischengespeicherte Connector-Informationen,
    authentifiziert Connectoren erneut und lädt die aktuelle Agent-Version.
- question: Was bewirkt Force newest version bei einem Copilot Studio Agenten in Teams?
  answer: Die nächste Nachricht verwendet die zuletzt veröffentlichte Version, allerdings
    kann das Erzwingen einer Aktualisierung eine laufende Unterhaltung unterbrechen.
animation:
  video: /assets/img/animations/e9673d7c084b125524396184-de.mp4
  poster: /assets/img/animations/e9673d7c084b125524396184-de.poster.webp
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt \"The user is inactive for awhile\", das Festlegen der Zeit, das Loeschen von Variablen und Verlauf und danach das Beenden der Unterhaltung."
---

## TL;DR

Copilot Studio Agents behalten in Teams den Gesprächszustand. Konfiguriere deshalb The user is inactive for awhile zum Löschen von Variablen und Verlauf, bitte nach einem Reset um hello, dokumentiere /debug clearstate, prüfe Suchumschreibungen mit OnKnowledgeRequested und nutze Force newest version bei Veröffentlichungen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Konfiguriert den Inaktivitäts-Trigger, löscht Variablen und Verlauf und erklärt den Neustart mit hello, damit alte Kontexte den Agenten nicht verwirren.
- Admins/CoE: Prüft Versionen, persistente Chats sowie Desktop- und Mobile-Tests und setzt Force newest version mit Bedacht ein, weil Aktualisierungen laufende Unterhaltungen unterbrechen können.
- Security/Compliance: Testet ablaufende Connector-Anmeldungen und dokumentiert /debug clearstate, weil lange Sitzungen eine erneute Authentifizierung benötigen können.
