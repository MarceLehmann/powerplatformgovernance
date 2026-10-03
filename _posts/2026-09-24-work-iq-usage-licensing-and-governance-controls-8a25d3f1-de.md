---
title: 'Work IQ: Nutzung, Lizenzierung und Governance-Kontrollen'
description: Erklärt die Nutzung von Work IQ in Copilot Studio und eigenen Anwendungen,
  den Einsatz von Copilot Credits sowie Kontrollen in den Microsoft 365- und Power-Platform-Admincentern.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- copilot-studio
- environments
- ownership
content_type: curated_summary
curation_id: 8a25d3f16c942fd312018c4c
permalink: "/de/posts/work-iq-usage-licensing-and-governance-controls-8a25d3f1/"
translation_url: "/en/posts/work-iq-usage-licensing-and-governance-controls-8a25d3f1/"
source_url: https://microsoft.github.io/mcscatblog/posts/work-iq-context-layer-you-already-have/
source_site_url: https://microsoft.github.io/
source_title: 'Work IQ: How It''s Used, Licensed, and Controlled'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Anders Fjordhoj
source_published_at: '2026-08-24'
faq:
  - question: "Verbrauchen eigene Anwendungen, die die Work-IQ-API direkt aufrufen, Copilot Credits?"
    answer: "Ja, sobald nutzungsbasierte Abrechnung aktiviert ist, verbrauchen direkte Work-IQ-API-Aufrufe aus eigenen Lösungen Copilot Credits. Eine Microsoft-365-Copilot-Lizenz ist für diesen Weg nicht nötig. Die Ausgabenrichtlinie für solche Aufrufe legst du im Microsoft-365-Admincenter fest, das auch Cowork abdeckt. Dort beginnt also die Kostenkontrolle für eigene Clients."
  - question: "Ist Work IQ in Agenten enthalten, die ich mit dem Agent Builder erstelle?"
    answer: "Grösstenteils ja. Deklarative Agenten aus dem Agent Builder mit unterstützten Wissensquellen wie SharePoint nutzen das eingebaute Copilot-Grounding. Es ist für berechtigte Benutzer mit Microsoft-365-Copilot-Lizenz in Microsoft-Kanälen enthalten, unter dokumentierten Bedingungen und Fair-Use-Regeln. Agenten, die über das Manifest des Microsoft 365 Agents Toolkit entstehen, folgen derselben Logik."
  - question: "Warum kostet der GitHub-Copilot-Harness in Copilot Studio trotz Lizenz weiterhin Credits?"
    answer: "In diesem Harness verbraucht die einheitliche Work-IQ-Anbindung über Model-Context-Protocol-Tools Copilot Credits, auch wenn die Person eine Microsoft-365-Copilot-Lizenz besitzt. Das native Work-IQ-Grounding in Microsoft 365 Copilot deckt die Lizenz ab. Hier liegt also eine gemessene Ausnahme vor. Der Standard-Harness unterstützt die einheitliche Anbindung gar nicht."
  - question: "Welches Admincenter steuert Work-IQ-Ausgaben und welches die Agentenlimits?"
    answer: "Im Microsoft-365-Admincenter liegen die Ausgabenrichtlinien für Work IQ, mit Geltungsbereich nach Benutzer oder Gruppe, Abrechnungsmethode, Monats- und Benutzerlimits sowie Schwellenwert-Warnungen. Das Power Platform Admin Center verwaltet Umgebungskapazität, vorausbezahlte Credits und monatliche Agentenlimits von Copilot Studio. Beide laufen getrennt, daher sollten die zuständigen Teams Agenten, Umgebungen und vorgesehene Nutzer abstimmen."
  - question: "Stoppen Cowork-Ausgabenlimits den Credit-Verbrauch genau an der Schwelle?"
    answer: "Nicht zuverlässig. Ausgabenrichtlinien setzen Grenzen, reservieren aber kein Guthaben, und die Durchsetzung kann dem tatsächlichen Verbrauch hinterherhinken. Nach Erreichen einer Schwelle können deshalb noch weitere Aufgaben starten. Eine Cowork-Richtlinie gibt zudem allen Personen im Geltungsbereich Zugriff, egal welches Limit gesetzt ist. Freigegebene Ausgaben gewähren auch keinen Datenzugriff, denn Mandantenfreigabe und Zustimmung sind eigene Voraussetzungen."
---
## TL;DR

Work IQ nutzt berechtigte Informationen aus E-Mails, Besprechungen, Chats und Dateien zur Antwortgenerierung. Die native Microsoft-365-Copilot-Nutzung ist für geeignete lizenzierte Benutzer enthalten; GitHub-Copilot-Harness-Agenten in Copilot Studio, Cowork und eigene API-Clients verbrauchen Copilot Credits. Microsoft 365 steuert Benutzerausgaben, PPAC Umgebungskapazität und Agentenlimits.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: beide Admincenter vor dem Rollout konfigurieren — Work-IQ-Ausgabenrichtlinien im Microsoft-365-Admincenter setzen, Umgebungskapazität in PPAC zuweisen und Stop usage für Agentenlimits aktivieren.
- Leadership/Business: ein niedriges Cowork-Limit nicht als harte Grenze verstehen — der Zugriff bleibt trotzdem bestehen, und die Durchsetzung kann dem Verbrauch hinterherhinken, sodass Credits über das gesetzte Limit hinaus verbraucht werden können.
