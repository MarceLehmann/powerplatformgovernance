---
layout: page
title: "Fünf DLP-Vorlagen für KMU"
description: "Fünf fertige Richtlinien-Vorlagen für Default-Umgebung, Produktiv- und Entwickler-Umgebungen, je mit und ohne Copilot Studio, und warum du die Auswirkung prüfst, bevor du auf Erstellen klickst."
lang: de
toc: true
permalink: "/de/knowledge/dlp-templates-smb/"
translation_url: "/knowledge/dlp-templates-smb/"
last_reviewed: "2026-11-14"
---

Fünf Richtlinien-Vorlagen, die die meisten kleinen und mittleren Tenants abdecken: zwei für die Default-Umgebung, zwei für Team- und Produktiv-Umgebungen, eine für Entwickler- und Sandbox-Umgebungen. Dazu der eine Schritt, der dir kaputte Flows erspart: die Auswirkung prüfen, bevor du etwas anlegst.

[Read this article in English](/knowledge/dlp-templates-smb/) | [Zurück zur Wissensübersicht](/de/knowledge/)

## TL;DR

Microsoft empfiehlt zwei Ebenen: eine restriktive Richtlinie für die Default-Umgebung (Microsoft 365 und Standarddienste, alles andere blockiert) und eine offenere für gemeinsame Team-Umgebungen. Dazu kommen Entwickler-Umgebungen mit kleinem Maker-Kreis, das sind drei Stufen. Copilot Studio ist pro Stufe eine echte Ja-Nein-Frage, darum gibt es zwei der drei Stufen in zwei Varianten. Das ergibt fünf Vorlagen. Bevor du eine anlegst, prüfst du, welche bestehenden Apps, Flows und Agents sie blockieren würde. Eine neue Richtlinie wird innerhalb von 24 Stunden gegen alle aktiven Flows durchgesetzt.

Die Connector-Zahlen in diesem Beitrag stammen aus einem Entwurf vom 26.10.2026 und ändern sich, sobald Microsoft Connectors ergänzt. Nimm sie als Grössenordnung, nicht als feste Liste.

## Warum aus drei Stufen fünf Vorlagen werden

- **Default-Umgebung.** Hier kann jede Person im Tenant bauen. Halte die Connector-Liste kurz: Microsoft 365 und Standarddienste. Microsoft nennt das den Ausgangspunkt für gemeinsame Umgebungen für Benutzer- und Team-Produktivität.
- **Team- und Produktiv-Umgebungen.** Maker brauchen mehr: HTTP und einige weitere Dienste. Produktiv-Umgebungen stimmst du mit dem Fachbereich ab.
- **Entwickler- und Sandbox-Umgebungen.** Ein kleiner Kreis baut und testet hier, auch Agents und Azure-Dienste.
- **Copilot Studio** ist eine eigene Entscheidung. In der Prüfung eines Tenants lagen 40 KI-Objekte (Agents und KI-Flows) in der Default-Umgebung und 23 in allen anderen. Ohne Copilot-Variante musst du entweder alle Agents sperren oder die Copilot-Kanäle für alle öffnen. Für die Entwickler-Stufe gibt es keine Variante ohne Copilot, weil dort gebaut wird und Agents getestet werden sollen.

## Die fünf Vorlagen

Alle fünf setzen die Standardgruppe für neue und nicht aufgeführte Connectors auf **Blocked**. Jede Vorlage ist damit eine Positivliste. Die Zahlen sind Connectors je Gruppe im Entwurf.

| Nr. | Vorlage | Business | Non-Business | Blocked | Einsatz |
|---|---|---|---|---|---|
| 1 | Default-Umgebung streng | 28 | 0 | 37 | Default-Umgebung ohne Agents und KI |
| 2 | Default-Umgebung streng mit Copilot | 34 | 0 | 31 | Default-Umgebung, wenn Mitarbeitende Agents für Teams und Microsoft 365 bauen dürfen |
| 3 | KMU-Standard | 38 | 5 | 22 | Produktiv- und Team-Umgebungen ohne Agents |
| 4 | KMU-Standard mit Copilot | 47 | 5 | 13 | Produktiv-Umgebungen mit Agents |
| 5 | Entwickler und Sandbox | 60 | 5 | 9 | Entwickler- und Sandbox-Umgebungen mit kleinem Maker-Kreis |

Was sich in der Praxis unterscheidet:

- **1 und 2** blockieren HTTP in allen vier Formen, private Microsoft-Dienste und Cloud-Dienste für Privatpersonen (zum Beispiel Gmail, Dropbox, Google Drive, X, Facebook). Vorlage 2 öffnet zusätzlich die Kanäle für Teams und SharePoint, Wissen aus SharePoint und Dokumenten sowie generative Aktionen.
- **3 und 4** erlauben die HTTP-Connectors (HTTP, Request-Trigger, HTTP mit Microsoft Entra ID) und legen fünf risikoarme private Dienste in Non-Business. Vorlage 4 öffnet Copilot Studio mit internen Kanälen, Direct Line und Wissensquellen inklusive öffentlicher Websites.
- **5** ergänzt Azure Blob Storage, SQL Server, Key Vault, Azure DevOps, GitHub, Desktop-Flows, Dataflows, HTTP Webhook, Azure OpenAI und AI Foundry. Kanäle ohne Anmeldung und externe Messaging-Kanäle bleiben blockiert.

## Was Microsoft Learn belegt und was diese Vorlagen entscheiden

**Von Microsoft dokumentiert**

- Ohne Konfiguration hat ein Tenant keine Richtlinie. Connectors liegen in Business, Non-Business oder Blocked. Standard-Connectors von Microsoft und Dataverse lassen sich nicht blockieren.
- Eine Richtlinie über alle Umgebungen ausser ausgewählten, beschränkt auf Microsoft 365 und Standarddienste, ist der empfohlene Start für gemeinsame Umgebungen. Sie gilt auch für die Default-Umgebung und für jede neue Umgebung.
- Gelten mehrere Richtlinien für eine Umgebung, gewinnt die strengste Kombination.
- Neue oder geänderte Richtlinien werden innerhalb von 24 Stunden gegen alle aktiven Flows geprüft. Gesperrte Cloud-Flows der letzten sieben Tage werden von selbst wieder aktiv, sobald sie nicht mehr verstossen.
- Child Flows hängen intern am HTTP-Connector. Die Gruppe von HTTP entscheidet darum, ob Child Flows laufen.
- Ohne erlaubten Kanal lässt sich kein Agent veröffentlichen. Die Connectors von Copilot Studio (Wissensquellen, Kanäle, Skills, Ereignis-Trigger) werden wie jeder andere Connector klassifiziert.

**Entscheid in diesen Vorlagen (nicht Wortlaut von Microsoft)**

- **Standardgruppe Blocked in jeder Vorlage. Das ist die Empfehlung.** Neue Connectors sind erst nutzbar, wenn jemand sie bewusst einordnet. So landet nichts ungeprüft in der Firma, und bei wenigen Makern bleibt der Pflegeaufwand klein. Microsoft schlägt [standardmässig Non-Business vor](https://learn.microsoft.com/de-de/power-platform/admin/dlp-connector-classification).
- **Nicht blockierbare Connectors immer ausdrücklich in Business.** Ist die Standardgruppe Blocked, landen neue nicht blockierbare Connectors automatisch in Non-Business, und die Mischung mit Business würde Flows brechen. Die ausdrückliche Zuordnung verhindert das.
- **«Ohne Copilot» heisst nicht null KI.** Der Kern-Connector von Copilot Studio und AI Builder (Teil von Dataverse) lassen sich per Richtlinie nicht blockieren. Die Vorlagen sperren Kanäle, Wissensquellen, Skills, Ereignis-Trigger, generative Aktionen und Azure OpenAI. AI Builder begrenzt du mit der Tenant-Einstellung für nicht zugewiesene AI-Builder-Credits, nicht mit DLP.

## Prüfen vor dem Klick

Eine Richtlinie ist nicht harmlos. Schau zuerst, was sie blockieren würde.

1. **Liste die Connectors auf, die deine Apps, Flows und Agents heute nutzen.** Das Power-Platform-Inventar zeigt sie je Ressource (Preview, bei grossen Tenants kann die Liste unvollständig sein).
2. **Vergleiche jede Vorlage mit dieser Liste.** Je Ressource gibt es drei Ergebnisse: in Ordnung, blockiert (mindestens ein Connector ist blockiert oder nicht aufgeführt, solange die Standardgruppe Blocked ist) oder gemischt (Business und Non-Business in einer Ressource).
3. **Prüfe Überschneidungen.** Eine Umgebung unter zwei Richtlinien bekommt die strengere Kombination.
4. **Führe in dieser Reihenfolge ein:** zuerst die Default-Umgebung, dann Team- und Produktiv-Umgebungen, zuletzt Entwickler-Umgebungen.

Ein Beispiel aus einem echten kleinen Tenant: Vorlage 2 für die Default-Umgebung hätte 10 bestehende Objekte blockiert, darunter Copilot-Agents mit GitHub- und MCP-Connectors. Ohne die Prüfung wären diese Agents innerhalb eines Tages ausgefallen. Mit ihr entscheidet der Admin vorher: Connector öffnen, Agent in eine Entwickler-Umgebung verschieben oder die Sperre akzeptieren.

## Grenzen dieses Vorgehens

- Die Connector-Zahlen oben ändern sich mit jedem Microsoft-Release. Prüfe die aktuelle Klassifizierung im Admin Center, bevor du eine Liste übernimmst.
- Custom Connectors, Connector-Aktionen und Endpunktfilter gehören nicht zu den Vorlagen. Setze sie bei Bedarf separat.
- Mehrere Richtlinien anzulegen ist nicht transaktional. Scheitert die zweite, bleibt die erste bestehen.
- Vorlagen ersetzen keine Environment-Strategie. Entscheide zuerst, wie deine Umgebungen aufgebaut sind, und wähle dann die Vorlagen. Siehe [fünf Environment-Strategien](/de/knowledge/environment-strategies/) und die Wissensseite zu [DLP-Richtlinien](/de/knowledge/dlp-policies/).

## Weiterlesen

- [DLP-Richtlinien: was ihr zwingend einstellen müsst](/de/knowledge/dlp-policies/)
- [Fünf Environment-Strategien im Vergleich](/de/knowledge/environment-strategies/)
- [Governance-Strategie: die 25 Fragen](/de/knowledge/governance-questions-top-25/)

## Quellen

Aussagen am 14.11.2026 gegen Microsoft Learn geprüft. Die Zahlen aus dem Entwurf stammen von einem Vorlagen-Entwurf vom 26.10.2026 und sind als solche markiert. Punkte unter «Entscheid in diesen Vorlagen» sind Empfehlungen aus der Praxis, nicht Wortlaut von Microsoft.

- [Microsoft Learn: Implement a data policy strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy)
- [Microsoft Learn: Connector classification](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification)
- [Microsoft Learn: Manage data policies](https://learn.microsoft.com/en-us/power-platform/admin/prevent-data-loss)
- [Microsoft Learn: Combined effect of multiple data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-combined-effect-multiple-policies)
- [Microsoft Learn: Data loss prevention (DLP) policy creation in Power Automate](https://learn.microsoft.com/en-us/power-automate/prevent-data-loss)
- [Microsoft Learn: Configure data policies for agents in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)
- [Microsoft Learn: Known limitations of data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-known-issues)
- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)
- [Microsoft Learn: AI Builder credit management](https://learn.microsoft.com/en-us/ai-builder/credit-management)

Nur Orientierung, keine Rechts- oder Lizenzberatung. Prüfe Lizenz und Produktdetails, bevor du umsetzt.
