---
layout: page
title: "Governance-Fragen an Power Platform Admin in Cowork stellen"
description: "Welche Fragen sich lohnen, was du vorher einrichtest, wie du die Copilot Credits im Griff behältst und wo du eine Antwort prüfst, bevor du handelst."
lang: de
toc: true
permalink: "/de/knowledge/cowork-governance-questions/"
translation_url: "/knowledge/cowork-governance-questions/"
last_reviewed: "2026-11-15"
---

Mit Power Platform Admin in Cowork fragst du deinen Tenant in normaler Sprache: was neu ist, was niemand mehr nutzt, wo der Speicher knapp wird. Diese Seite ordnet ein, welche Fragen sich für ein KMU lohnen, was das kostet und wo du die Antwort gegenprüfst.

[Read this page in English](/knowledge/cowork-governance-questions/) | [Zurück zur Wissensübersicht](/de/knowledge/)

## TL;DR

Power Platform Admin ist ein Plugin für Microsoft Copilot Cowork und in Preview. Es liest Inventar, Nutzung und Besitz über deine Umgebungen und antwortet auf Fragen. Es ändert nichts im Tenant. Jede Frage verbraucht Copilot Credits. Die Antworten sind KI-generiert und können von Lauf zu Lauf abweichen. Microsoft verlangt darum, Befunde zu prüfen, bevor du Maker anschreibst oder Richtlinien, Umgebungen oder Ressourcen änderst. Starte mit zwei oder drei festen Fragen, lass sie einen Monat laufen und entscheide danach anhand des Verbrauchs.

## Was du vorher brauchst

1. **Installation durch einen Microsoft-365-Admin.** Im Microsoft 365 Admin Center unter **Agents** > **Tools** > **Registry** das Plugin «Power Platform Admin (preview)» installieren, für alle oder für ausgewählte Personen.
2. **Zugang zu Cowork.** Die Installation des Plugins gibt keinen Zugang zu Cowork. Den regelst du separat über eine Ausgabenrichtlinie, die Cowork einschliesst.
3. **Die richtige Rolle.** Das Konto, mit dem du das Plugin verbindest, braucht Global Administrator, Power Platform Administrator oder Dynamics 365 Administrator. Ohne diese Rolle liefert das Plugin keine Daten.
4. **Verbindung herstellen.** In Cowork unter **Customize** das Plugin wählen, **Connect** und mit OAuth anmelden. Dahinter steht eine Verbindung zum Connector Power Platform for Admins V2.

Managed Environments sind für Fragen nicht nötig. Bei der ersten Abfrage zeigt Cowork eine Freigabekarte. Sieh dir die Details an, bevor du zustimmst.

## Fragen, die sich lohnen

Die Prompts stammen aus der Prompt-Bibliothek von Microsoft und sind dort auf Englisch dokumentiert. Passe Zeitraum, Umgebung und Schwellenwert an.

| Was du wissen willst | Prompt aus Microsoft Learn | Was du mit der Antwort machst |
|---|---|---|
| Was ist neu? | `What happened in my Power Platform tenant in the last week?` und danach `Who created them?` | Neue Maker ansprechen, unbekannte Projekte klären |
| Was nutzt niemand mehr? | `Which apps haven't been used in the last 30 days?` | Aufräumliste, Rückfrage an die Besitzer |
| Was hat keinen Besitzer mehr? | `Show me the apps and flows whose owner has left the organization.` | Neuen Besitzer bestimmen, bevor etwas ausfällt |
| Was ist der Default-Umgebung entwachsen? | `Which apps in the default environment are used by more than 10 people? Give me the owner and a link to each.` | Umzug in eine verwaltete Umgebung planen |
| Was trifft eine neue Sperre? | `If I block the [connector name] connector, which apps, flows, and agents would be affected, and who owns them?` | Auswirkung kennen, bevor du eine Datenrichtlinie änderst |
| Wo wird Speicher knapp? | `Show me which environments have limited Dataverse capacity.` | Aufräumen oder Kapazität planen, bevor Vorgänge gesperrt werden |

Microsoft gibt vier Hinweise für gute Ergebnisse. Konkret fragen, mit Zeitraum, Umgebung, Schwellenwert und gewünschtem Format. Nachfragen, weil die zweite und dritte Frage oft die nützlichere Antwort bringt. Auch fragen, wenn du unsicher bist, ob das Plugin die Antwort kennt, denn die Abdeckung wächst. Prompts speichern, die funktionieren.

## Was die Credits kosten

Fragen verbrauchen Copilot Credits. Einen festen Betrag je Frage nennt die Anleitung von Microsoft nicht. Für die Planung empfiehlt Microsoft dieses Vorgehen:

1. **Pilot fahren.** Zwei oder drei Szenarien einen Monat lang nach Zeitplan laufen lassen und das Budget aus dem tatsächlichen Verbrauch ableiten.
2. **Ausgabenrichtlinien setzen.** Im Microsoft 365 Admin Center festlegen, wer Cowork nutzen darf und wie viel ausgegeben wird.
3. **Verbrauch beobachten.** Ebenfalls im Microsoft 365 Admin Center.

Empfehlung aus der Praxis: Leg den Pilot auf die drei Fragen, die du heute von Hand beantwortest. Dann vergleichst du den Verbrauch mit der Zeit, die du sparst.

## Wo du die Antwort prüfst

Die Antwort ist ein Hinweis, kein Beleg. Bevor du handelst, schau an der Quelle nach.

| Antwort zu | Gegenprüfen in |
|---|---|
| Inventar, neue Ressourcen, Connectors | Admin Center, **Manage** > **Inventory** |
| Besitzer von Flows | Flow selbst öffnen. Das Inventar zeigt bei Flows die Person, die ihn erstellt hat, und nicht den aktuellen Besitzer |
| Speicher | Admin Center, **Licensing** > **Dataverse** |
| Auswirkung einer Connector-Sperre | Spalte **Connectors** im Inventar, danach Test in einer Umgebung |

Die Zuordnung in der Tabelle ist eine Empfehlung aus der Praxis. Stell dieselbe Frage bei einem wichtigen Befund ein zweites Mal. Weichen die Antworten ab, zählt die Quelle.

## Vom Befund zum Bericht

Cowork kann aus einer Antwort im selben Gespräch einen Bericht machen, zum Beispiel eine HTML-Seite mit filterbaren Tabellen, und den Prompt nach Zeitplan wiederholen. Geplante Abfragen verwaltest du in Cowork unter **Automations**. Bevor Cowork eine E-Mail sendet oder in Teams postet, wartet es auf deine Freigabe. Lass E-Mails an Besitzer als Entwurf speichern, dann liest du jede Nachricht vor dem Versand.

Weil jede Frage Credits verbraucht, ist auch bei jedem geplanten Lauf mit Verbrauch zu rechnen. Plane darum wenige, feste Abfragen statt vieler.

## Wann der Flow die bessere Wahl ist

Empfehlung aus der Praxis. Beides hat seinen Platz.

- **Cowork** passt für Fragen, die du noch nicht kennst: Rückfragen, Auswirkungsanalysen, ein Bericht für die Geschäftsleitung.
- **Ein fester Flow** passt für Meldungen, die jeden Tag gleich aussehen sollen und ohne Credits laufen. Das kostenlose [AdminHelper-Starter-Set](/de/flows/) liefert Inventar, neue Umgebungen und Kapazität per E-Mail und liest dieselbe Datenquelle.

## Datenschutz und Compliance

Microsoft empfiehlt, vor einem breiten Einsatz die Sicherheits- und Compliance-Hinweise zu Cowork und die Responsible-AI-Unterlage mit dem Compliance-Team durchzugehen und unterstützte Regionen sowie KI-Unterauftragsverarbeiter für deinen Einsatz zu bestätigen. Füge keine Passwörter, Tokens oder Client Secrets in ein Gespräch ein.

## Weiterlesen

- [Schatten-IT in der Power Platform erkennen und messen](/de/knowledge/detect-shadow-it/)
- [Speicher überschritten: was mit deinen Umgebungen passiert](/de/knowledge/storage-overage/)
- [KI-Kosten im Vergleich](/de/knowledge/ai-cost-comparison/)
- [Power Platform Governance-Konzept: wo du anfängst](/de/knowledge/governance-concept/)

## Quellen

Aussagen am 15.11.2026 gegen Microsoft Learn geprüft. Power Platform Admin in Cowork ist in Preview, Funktionen und Voraussetzungen können sich ändern.

- [Microsoft Learn: Agentic governance with Power Platform Admin in Cowork](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance)
- [Microsoft Learn: Governance prompt library for Power Platform Admin in Cowork](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance-prompts)
- [Microsoft Learn: Turn governance answers into reports and automations](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance-reports)
- [Microsoft Learn: Power Platform Admin in Cowork (preview)](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-admin-cowork)
- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)

Nur Orientierung, keine Rechts- oder Lizenzberatung. Prüfe Lizenz und Produktdetails, bevor du umsetzt.
