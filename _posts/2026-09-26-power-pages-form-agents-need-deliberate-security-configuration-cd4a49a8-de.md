---
title: 'Power Pages: Formular-Agenten sicher konfigurieren'
description: Eine Vorschaufunktion wandelt ein Power Pages-Basisformular in einen
  Agenten um. Webrollen, Authentifizierung und die Sichtbarkeit von Web-API-Feldern
  müssen geprüft werden.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
- environments
- copilot-studio
content_type: curated_summary
curation_id: cd4a49a86933c4c3c13243f3
image:
  path: "/assets/img/curated/cd4a49a86933c4c3c13243f3.png"
  alt: 'Governance-Karte: A form agent can expose every table column. Restrict Web
    API fields before you publish.'
permalink: "/de/posts/power-pages-form-agents-need-deliberate-security-configuration-cd4a49a8/"
translation_url: "/en/posts/power-pages-form-agents-need-deliberate-security-configuration-cd4a49a8/"
source_url: https://readyxrm.blog/2025/08/21/power-pages-tired-of-filling-forms-use-an-agent/
source_site_url: https://readyxrm.blog/
source_title: 'Power Pages: Tired of filling forms? Use an agent!'
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2025-08-21'
source_type: article
faq:
  - question: "Welche Voraussetzungen braucht ein Formular-Agent in Power Pages, damit er sichtbar wird?"
    answer: "Copilot muss im Power Platform Admin Center aktiviert sein, der Site-Copilot muss eingeschaltet sein, und man ergänzt die Websiteeinstellung SiteCopilot/EnableNativeControlPVABots mit dem Wert true."
  - question: "Wie verhindere ich, dass ein Formular-Agent alle Spalten einer Tabelle offenlegt?"
    answer: "In der Power-Pages-Verwaltungs-App die Websiteeinstellung für die Web-API-Felder suchen und den Platzhalter durch eine kommagetrennte Liste der Spalten des Formulars ersetzen."
  - question: "Wer sollte auf einen Power-Pages-Formular-Agenten zugreifen dürfen?"
    answer: "Nur die Webrollen, die man im Sicherheits-Tab des Agenten auswählt. Der Autor warnt davor, den Agenten leichtfertig für nicht authentifizierte Benutzer freizugeben."
---

## TL;DR

Power Pages kann ein Basisformular in einen Copilot-Studio-Agenten umwandeln. Die Vorschau aktiviert dabei zunächst alle Tabellenspalten für die Power Pages Web API. Webrollen, Authentifizierung und Spaltenzugriff müssen geprüft werden; die WebAPI-Feldeinstellung sollte den Platzhalter \* durch eine kommagetrennte Liste der tatsächlich benötigten Formularspalten ersetzen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Behandelt den Formular-Agenten als Datenerfassungsoberfläche, testet das Verhalten der Vorschau und bestätigt, dass nur notwendige Felder sichtbar sind, damit keine unbeabsichtigten Daten erfasst oder geändert werden.
- Admins/CoE: Aktiviert Site-Copilot und die Native-Control-Einstellung, weist Webrollen zu, prüft die Authentifizierung und ersetzt den Platzhalter der WebAPI-Felder vor der Veröffentlichung durch eine begrenzte Liste; Entwicklungsumgebungen können nicht öffentlich betrieben werden.
- Security/Compliance: Prüft nicht authentifizierten Zugriff sowie Tabellenberechtigungen, Webrollen, Authentifizierung und sichtbare Spalten, weil die Konvertierung zunächst alle Tabellenspalten aktiviert.
