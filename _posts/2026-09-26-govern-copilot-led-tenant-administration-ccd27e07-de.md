---
title: Copilot-gestützte Tenant-Administration wirksam steuern
description: PnP PowerShell mit Copilot übersetzt natürlichsprachige Anfragen in Tenant-Aktionen.
  Deshalb sind Authentifizierung, Berechtigungen und Prüfungen zentrale Schutzmassnahmen.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: ccd27e07a80dd677b450b7fe
image:
  path: "/assets/img/curated/ccd27e07a80dd677b450b7fe.png"
  alt: 'Governance-Karte: Natural language can change tenant configuration. Govern
    it like administration.'
permalink: "/de/posts/govern-copilot-led-tenant-administration-ccd27e07/"
translation_url: "/en/posts/govern-copilot-led-tenant-administration-ccd27e07/"
source_url: https://pnp.github.io/blog/post/copilot-pnp-powershell-and-the-new-shape-of-microsoft-365-administration/
source_site_url: https://pnp.github.io/
source_title: Copilot, PnP PowerShell, and the New Shape of Microsoft 365 Administration
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Josiah Opiyo
source_published_at: '2026-09-10'
source_type: article
faq:
  - question: "Was kann der PnP-PowerShell-Agent für Copilot bei der Tenant-Verwaltung?"
    answer: "Er übersetzt eine Anfrage in normaler Sprache in passende PnP-PowerShell-Befehle, sodass Administratoren das gewünschte Ergebnis beschreiben statt die Syntax auswendig zu kennen. Der Agent arbeitet mit Skills: Ein Setup-Skill übernimmt Installation, Konfiguration und Anmeldung, ein Skill für Microsoft 365 die täglichen Aufgaben wie Sites, Listen, Bibliotheken, Seiten und Berechtigungen. Weitere Skills für Skripte sind geplant."
  - question: "Welche Anmeldearten unterstützt der Setup-Skill des PnP-PowerShell-Agenten?"
    answer: "Der Setup-Skill unterstützt die interaktive Anmeldung und den Weg über eine App-Registrierung, bei der du zwischen Zertifikat und Geheimnis wählst. Der Beitrag betont, dass diese Wahl die Sicherheitslage jeder Automatisierung bestimmt. Entscheide dich deshalb bewusst für ein Verfahren, bevor der Agent Einstellungen im Tenant ändern darf, und nimm nicht einfach die bequemste Variante."
  - question: "Wo lässt sich der PnP-PowerShell-Agent für Copilot installieren?"
    answer: "Der Vortrag zeigte zwei Umgebungen. In VS Code installierst du das Plugin, wechselst zum PnP-PowerShell-Agenten und stellst deine Anfragen im Dialog. Einen ähnlichen Ablauf gibt es für die GitHub Copilot CLI, angepasst an die Kommandozeile. Wähle die Umgebung, in der du ohnehin arbeitest. In beiden Fällen kommt zuerst das Setup und danach die Verwaltung im Gespräch."
  - question: "Macht Verwaltung per natürlicher Sprache Änderungen im Tenant automatisch sicherer?"
    answer: "Nein. Der Beitrag hält fest, dass natürliche Sprache administrative Aktionen nicht von selbst sicher macht. Du musst weiterhin klären, wer den Agenten nutzen darf, wie die erzeugten Aktionen geprüft werden und wie sich das Plugin pflegen lässt, während es sich weiterentwickelt. Offen bleibt die Frage, wie eine solche Verwaltung zu steuern ist, wenn sie die Tenant-Konfiguration verändern kann."
  - question: "Ist der PnP-PowerShell-Agent für Copilot bereits ein fertiges Werkzeug?"
    answer: "Nein. Teile sind noch in Arbeit. Skills zum Erstellen, Bewerten und Aktualisieren von Skripten sind angekündigt, aber nicht fertig, und das Bewertungsverfahren, das den Agenten über die Zeit bewertet und verbessert, ist beobachtenswert. Eine Demo-Anfrage für ein Backup-Skript deutet nur an, was die geplanten Skript-Skills leisten könnten. Behandle die Skript-Funktionen deshalb als noch nicht verfügbar."
---

## TL;DR

Der PnP-PowerShell-Copilot-Agent unterstützt Einrichtung, Authentifizierung und Microsoft-365-Aufgaben wie das Erstellen von Sites, das Konfigurieren von Inhalten, das Aktualisieren von Seiten und die Verwaltung von Berechtigungen. Interaktive Anmeldung oder eine App-Registrierung sind möglich. Skripterstellung und Evaluierung sind noch in Arbeit und sollten vor dem produktiven Einsatz getestet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Beschränkt, wer den Agenten verwenden darf, prüft erzeugte Aktionen und sichert die Wartbarkeit, weil natürlichsprachige Anfragen mehrstufige Tenant-Änderungen auslösen können.
- Security/Compliance: Bewertet interaktive Anmeldung sowie zertifikats- und geheimnisbasierte Authentifizierung und die erforderlichen Berechtigungen, da jede Option die Sicherheitslage der Automatisierung beeinflusst.
