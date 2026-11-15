---
layout: page
title: "Schatten-IT in der Power Platform erkennen und messen"
description: "So findest du mit dem Inventar im Admin Center, was in den letzten 30 Tagen neu entstanden ist, und welche drei Zahlen du jeden Monat verfolgst, damit aus einem Gefühl eine Kennzahl wird."
lang: de
toc: true
permalink: "/de/knowledge/detect-shadow-it/"
translation_url: "/knowledge/detect-shadow-it/"
last_reviewed: "2026-11-15"
---

Schatten-IT in der Power Platform sind Apps, Flows, Agents und Umgebungen, von denen die zuständige Person nichts weiss. Diese Seite zeigt, wie du sie mit dem Inventar im Power Platform Admin Center in zehn Minuten sichtbar machst und mit drei Zahlen über die Monate verfolgst.

[Read this page in English](/knowledge/detect-shadow-it/) | [Zurück zur Wissensübersicht](/de/knowledge/)

## TL;DR

Das Inventar unter **Manage** > **Inventory** zeigt alle Agents, Apps, Flows und Umgebungen des Tenants in einer Liste. Filtere nach dem Erstelldatum der letzten 30 Tage und du siehst, was neu ist. Notiere jeden Monat drei Zahlen: neue Ressourcen je Typ, Ressourcen in der Default-Umgebung und Connectors in Gebrauch, die du nicht freigegeben hast. Steigt eine Zahl, ohne dass du den Grund kennst, hast du deinen Befund. Warum Schatten-IT entsteht, erklärt der Beitrag [Schatten-IT ist kein Disziplinproblem, sondern ein Latenzproblem](/de/posts/gov-shadow-it-root-cause/). Hier geht es um das Erkennen.

## Was das Inventar zeigt

- **Ressourcen:** Agents aus Copilot Studio und dem Agent Builder von Microsoft 365 Copilot, Canvas-, Model-driven- und Code-Apps, Cloud-Flows und Agent-Flows, Power-Pages-Websites (Preview), Connectors, Umgebungen und Environment Groups.
- **Aktualität:** Neu erstellte, geänderte oder gelöschte Ressourcen erscheinen laut Microsoft innerhalb von 15 Minuten.
- **Zugriff:** Du brauchst eine der Microsoft-Entra-Rollen Global Administrator, Power Platform Administrator, Dynamics 365 Administrator oder Global Reader. AI Administrator und AI Reader sehen nur die KI-Ressourcen. Power-Pages-Websites sieht der Global Reader nicht.
- **Connectors:** Die Spalte **Connectors** zeigt je Ressource, welche Connectors und Aktionen sie nutzt.

## In zehn Minuten: was ist neu seit 30 Tagen?

1. Öffne das [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/) und wähle **Manage** > **Inventory**.
2. Wähle die Spalte **Created on** und setze den Datumsfilter auf die letzten 30 Tage. Oben links über der Tabelle steht die Zahl der Treffer.
3. Filtere zusätzlich nach dem Ressourcentyp und notiere die Zahl je Typ: Umgebungen, Apps, Flows, Agents.
4. Setze den Filter **Environment type** auf **Default**. Jetzt siehst du, was davon in der Default-Umgebung entstanden ist.
5. Sortiere nach **Owner**. Namen, die du keinem Projekt zuordnen kannst, sind deine Gesprächsliste.
6. Wähle **Download**, um die Liste als CSV zu sichern. Der Export enthält das ganze Inventar, nicht nur die geladenen Zeilen.

Wer die Abfrage lieber speichert, nutzt Azure Resource Graph. Microsoft liefert eine Beispielabfrage für die letzten 24 Stunden. Auf 30 Tage angepasst und nach Typ gezählt sieht sie so aus:

```kusto
PowerPlatformResources
| extend properties = parse_json(properties)
| extend createdAt = todatetime(properties.createdAt)
| where createdAt >= ago(30d)
| summarize resourceCount = count() by type
| order by resourceCount desc
```

## Die drei Zahlen für jeden Monat

Die Auswahl ist eine Empfehlung aus der Praxis. Alle drei liest du im Inventar ab.

| Zahl | So misst du sie | Was ein Anstieg bedeutet |
|---|---|---|
| Neue Ressourcen in 30 Tagen, je Typ | Filter **Created on**, Zähler über der Tabelle | Mehr Bautätigkeit. Kennst du die Projekte dahinter? |
| Ressourcen in der Default-Umgebung | Filter **Environment type** = Default | Lösungen wachsen dort, wo jede Person bauen kann und kein Lebenszyklus gilt |
| Connectors in Gebrauch, die nicht auf deiner Freigabeliste stehen | Spalte **Connectors**, Abgleich mit deiner Liste | Daten fliessen in Dienste, über die niemand entschieden hat |

Schreib die Zahlen jeden Monat am selben Tag in dieselbe Tabelle. Der einzelne Wert sagt wenig, der Verlauf über drei Monate zeigt die Richtung.

## Was du mit einem Befund machst

Microsoft führt Ressourcen ohne Besitzer und wichtige Lösungen in der Default-Umgebung als Risiken für die Geschäftskontinuität und verweist für Befunde auf die Seite **Actions** im Admin Center. Für den einzelnen Fall reicht meist ein Gespräch:

1. Sprich die Person an, die im Inventar als Besitzer steht. Frag nach dem Zweck, nicht nach der Erlaubnis.
2. Entscheide gemeinsam: bleibt in der Default-Umgebung, zieht in eine verwaltete Umgebung um oder wird gelöscht.
3. Trag für eine Lösung, die bleibt, zwei Besitzer ein.
4. Besteht ein Sicherheitsverdacht, kannst du einen veröffentlichten Agent oder eine Canvas-App im Inventar mit **Block** sperren. Die Sperre lässt sich wieder aufheben.

## Automatisch statt von Hand

Vier Flows aus dem kostenlosen [AdminHelper-Starter-Set](/de/flows/) lesen dasselbe Inventar und schicken das Ergebnis per E-Mail:

- **F02 Neue Umgebungen erkennen** meldet jeden Morgen die Umgebungen des Vortags und bleibt still, wenn es keine gab.
- **F17 App-Inventar**, **F24 Flow-Inventar** und **F31 Agent-Inventar** schicken einmal täglich die Summen und die Einträge, die zuerst einen Blick brauchen.

Die Verbindung muss mit einem angemeldeten Benutzer laufen. Die Inventarabfrage unterstützt laut Microsoft weder Service Principal noch Managed Identity und antwortet dort mit HTTP 403.

## Grenzen des Inventars

- **Besitzer von Flows:** Die Spalte **Owner** zeigt bei Cloud-Flows und Agent-Flows die Person, die den Flow erstellt hat. Ein Besitzerwechsel erscheint dort nicht.
- **Model-driven Apps** haben keinen Besitzer, und nur veröffentlichte Apps werden erfasst.
- **Klassische Chatbots** fehlen im Inventar. Du findest sie unter **Manage** > **Copilot Studio** > **Classic chatbots**.
- **Filter nach Umgebung:** Der Umgebungsname muss vollständig eingegeben werden, Teiltreffer funktionieren nicht.
- **Ausserhalb der Plattform:** Das Inventar zeigt nur, was auf der Power Platform gebaut ist. Werkzeuge, die jemand mit der eigenen Kreditkarte gekauft hat, findest du dort nicht.

## Weiterlesen

- [Power Platform Governance-Konzept: wo du anfängst](/de/knowledge/governance-concept/)
- [Schatten-IT ist kein Disziplinproblem, sondern ein Latenzproblem](/de/posts/gov-shadow-it-root-cause/)
- [Governance-Fragen an Power Platform Admin in Cowork stellen](/de/knowledge/cowork-governance-questions/)
- [Citizen-Developer im Unternehmen](/de/knowledge/citizen-developer-guide/)

## Quellen

Aussagen am 15.11.2026 gegen Microsoft Learn geprüft. Die drei Zahlen und das Vorgehen bei einem Befund sind Empfehlungen aus der Praxis, nicht Wortlaut von Microsoft.

- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)
- [Microsoft Learn: Power Platform inventory sample queries](https://learn.microsoft.com/en-us/power-platform/admin/inventory-sample-queries)
- [Microsoft Learn: Implement reactive governance controls](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/reactive-governance)

Nur Orientierung, keine Rechts- oder Lizenzberatung. Prüfe Lizenz und Produktdetails, bevor du umsetzt.
