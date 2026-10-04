---
title: Microsoft 365 Copilot-Agents mit Registry-first steuern
description: Die Agent-Registry im Microsoft 365 Admin Center nutzen, um Copilot-Agents
  zu prüfen, zu blockieren, einzugrenzen und zu verwalten.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 85d6b60f7b999d9aa8ddc829
image:
  path: "/assets/img/curated/85d6b60f7b999d9aa8ddc829.png"
  alt: 'Governance-Karte: You cannot govern agents you cannot see. Start with the
    registry.'
permalink: "/de/posts/manage-microsoft-365-copilot-agents-with-registry-first-controls-85d6b60f/"
translation_url: "/en/posts/manage-microsoft-365-copilot-agents-with-registry-first-controls-85d6b60f/"
source_url: https://www.andersjensen.org/en/articles/manage-agents-in-microsoft-365-copilot-admin-guide/
source_site_url: https://www.andersjensen.org/
source_title: 'How to Manage Agents in Microsoft 365 Copilot: Admin Guide'
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-07-24'
source_type: article
faq:
  - question: "Wo sehen Admins alle Agenten eines Microsoft-365-Tenants?"
    answer: "Im Microsoft 365 Admin Center unter Agents auf All agents und dann auf den Reiter Registry. Dort steht jeder Agent mit Status, Plattform und Herausgeber, filterbar nach Status, Herausgebertyp, Plattform und Kanal. Ein Klick auf den Agenten öffnet ein Detailfenster mit Benutzern, Daten und Werkzeugen sowie Berechtigungen. Eine kleine Firma mit fünf Copilot-Benutzern sah in der Registry trotzdem 356 Agenten."
  - question: "Was geschieht, wenn man einen Agenten in der Microsoft-365-Registry blockiert?"
    answer: "Niemand in der Organisation kann den Agenten danach installieren oder nutzen, und bei Personen, die ihn schon installiert hatten, verschwindet er ebenfalls. Im Agentenfenster klickt man oben auf Block und kann vor der Bestätigung einen Grund eintragen. Der Autor rät, den Grund immer festzuhalten, damit ein Nachfolger später versteht, warum der Agent gesperrt wurde."
  - question: "Wie beschränke ich einen Microsoft-365-Copilot-Agenten auf eine Pilotgruppe?"
    answer: "Den Agenten in der Registry öffnen, zum Reiter Users wechseln und Available to wählen. Zur Auswahl stehen All users, No users und Specific users or groups. Für den Pilot nimmt man die dritte Option, ergänzt die Gruppen und speichert. Mit No users parkt man einen Agenten, bis eine Entscheidung steht. Neue Agenten zuerst an einen Pilot zu binden, gilt als empfohlener Weg."
  - question: "Warum lassen sich Researcher und Analyst nicht auf ausgewählte Benutzer begrenzen?"
    answer: "Beide Agenten werden über die Lizenz verwaltet. Sie werden für lizenzierte Benutzer automatisch installiert und folgen der Lizenz, darum ist der Reiter Users bei ihnen nur eine Anzeige ohne Eingrenzung. Der Autor zählt das zu den typischen Stolpersteinen. Schloss-Symbole in denselben Ansichten bedeuten, dass eine Funktion Agent 365 braucht, die kostenpflichtige Steuerungsebene, und sind keine Fehler."
  - question: "Wie prüfe ich, ob Eingrenzung und Sperre von Agenten wirklich greifen?"
    answer: "Im Agent Store von Microsoft 365 Copilot vergleicht man die Anzeige mit den getroffenen Entscheidungen. Blockierte Agenten sollten fehlen und eingegrenzte Agenten nur für die richtigen Gruppen erscheinen. Der Artikel rät, sich mit einem Konto ausserhalb der Pilotgruppe anzumelden und zu bestätigen, dass der eingegrenzte Agent dort nicht auftaucht."
---

## TL;DR

Unter Agents &gt; All agents im Microsoft 365 Admin Center zeigt die Registry alle Tenant-Agents nach Status, Plattform und Herausgeber. Prüfen Sie Datenzugriff und Berechtigungen, blockieren Sie unerwünschte Agents mit dokumentiertem Grund oder begrenzen Sie die Installation auf Gruppen. Agent Management Rules können besitzerlose Agent-Builder-Agents dem Manager des vorherigen Besitzers übertragen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Beginnen Sie mit der All-agents-Registry, filtern Sie nach Herausgeber, Plattform und Status und prüfen Sie Datenzugriff sowie Berechtigungen vor dem Rollout.
- Security/Compliance: Blockieren Sie ungeeignete Agents und dokumentieren Sie den Grund; die Sperre entfernt den Agent auch bei bereits installierten Nutzern.
- Admins/CoE: Nutzen Sie Specific users or groups für Pilotgruppen und prüfen Sie, dass Nutzer ausserhalb des Piloten den eingeschränkten Agent nicht sehen.
- Leadership/Business: Planen Sie vierteljährliche Prüfungen, weil sich Frontier-Funktionen, Agent-365-Optionen und Oberflächendetails häufig ändern.
