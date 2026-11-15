---
layout: page
title: "Power Platform Governance-Konzept: wo du anfängst"
description: "Fünf Bausteine in einer festen Reihenfolge: Admin-Rolle, Umgebungsstrategie, Datenrichtlinien, Rollen und Verantwortung, laufende Kontrolle. Mit dem ersten Schritt je Baustein und dem Weg zu allen Anleitungen dieser Website."
lang: de
toc: true
permalink: "/de/knowledge/governance-concept/"
translation_url: "/knowledge/governance-concept/"
last_reviewed: "2026-11-15"
---

Ein Governance-Konzept für die Power Platform besteht aus fünf Entscheiden, die aufeinander aufbauen. Diese Seite bringt sie in eine Reihenfolge, nennt je Baustein den ersten Schritt und führt dich zu den Anleitungen, die ins Detail gehen.

[Read this page in English](/knowledge/governance-concept/) | [Zurück zur Wissensübersicht](/de/knowledge/)

## TL;DR

Fang mit der Person an, die zuständig ist, und nicht mit einem Werkzeug. Danach folgen die Umgebungen, die Datenrichtlinien, die Rollen und zuletzt die laufende Kontrolle. Datenrichtlinien gelten je Umgebung, Rollen wirken in Umgebungen, und kontrollieren kannst du erst, was du festgelegt hast. Daher die Reihenfolge. Ein kleines Unternehmen braucht dafür kein eigenes Team. Es braucht eine benannte Person, eine Seite mit den Entscheiden und einen festen Termin im Monat.

Microsoft beschreibt Governance in der Power-Platform-Dokumentation als Richtlinien, Vorgehen und Werkzeuge, mit denen ein Unternehmen die Nutzung der Plattform steuert, und nennt dafür sieben Praktiken. Die fünf Bausteine unten sind eine Empfehlung aus der Praxis, die diese Praktiken für kleine und mittlere Unternehmen ordnet.

## Die Reihenfolge auf einen Blick

| Schritt | Baustein | Erledigt, wenn |
|---|---|---|
| 1 | Admin-Rolle festlegen | zwei Personen namentlich zuständig sind und ein Vertretungsplan steht |
| 2 | Umgebungsstrategie | klar ist, wofür die Default-Umgebung da ist und wo Geschäftslösungen laufen |
| 3 | Datenrichtlinien | jede Umgebung von mindestens einer Richtlinie abgedeckt ist |
| 4 | Rollen und Verantwortung | jede Geschäftslösung zwei Besitzer hat und Maker den Antragsweg kennen |
| 5 | Laufende Kontrolle | ein monatlicher Termin mit festen Kennzahlen im Kalender steht |

## 1. Admin-Rolle festlegen

Microsoft nennt als erste Praxis, eine zuständige Administratorenrolle zu bestimmen, die den Betrieb überblickt und die Einhaltung der Regeln sicherstellt. Ohne diese Person bleiben die weiteren Entscheide liegen.

**Dein erster Schritt:** Benenne eine Hauptperson und eine Stellvertretung mit der Rolle Power Platform Administrator. Schreib auf, wer über neue Umgebungen und über Connector-Freigaben entscheidet.

- [Governance-Strategie: die 25 Fragen, die jede Firma klären muss](/de/knowledge/governance-questions-top-25/)
- [Drei Zugriffsgewohnheiten, die still alles andere untergraben](/de/posts/gov-access-control-basics/)
- [Teuer ist nicht das Bauen. Teuer ist, es nicht zu wissen.](/de/posts/gov-licensing-governance/)

## 2. Umgebungsstrategie

Die Umgebung ist die Einheit, an der Richtlinien, Sicherungen und Kapazität hängen. Microsoft empfiehlt eine Strategie für das Erstellen, Verwalten und Stilllegen von Umgebungen und führt die Default-Umgebung als eigenen Punkt, weil dort jede Person im Tenant bauen kann.

**Dein erster Schritt:** Entscheide, wofür die Default-Umgebung gedacht ist, und lege eine Produktivumgebung für Geschäftslösungen an. Die Seite mit den fünf Strategien hilft bei der Wahl.

- [Fünf Environment-Strategien im Vergleich](/de/knowledge/environment-strategies/)
- [Einmal konfigurieren, viele regieren: Environment Routing und Environment Groups](/de/posts/gov-environment-lifecycle-automation/)
- [Wer nicht zurückrollen kann, deployt nicht](/de/posts/gov-test-to-prod-discipline/)
- [Qualitätstore statt Qualitätshoffnung: Solution Checker beim Import erzwingen](/de/posts/gov-solution-checker-enforcement/)
- [Speicher überschritten: was mit deinen Umgebungen passiert](/de/knowledge/storage-overage/)

## 3. Datenrichtlinien

Datenrichtlinien legen fest, welche Connectors in welcher Umgebung nutzbar sind. Sie kommen nach der Umgebungsstrategie, weil ihr Geltungsbereich aus Umgebungen besteht. Ohne eigene Einstellung gibt es im Tenant keine Richtlinie.

**Dein erster Schritt:** Lege eine Basis-Richtlinie an, die alle Umgebungen ausser bewusst ausgenommenen abdeckt, und setze die Standard-Gruppe für neue Connectors bewusst.

- [DLP-Richtlinien: was ihr zwingend einstellen müsst](/de/knowledge/dlp-policies/)
- [Von klassischen Datenrichtlinien zu Advanced Connector Policies](/de/knowledge/advanced-connector-policies/)
- [DLP ist eine Leitplanke, keine Mauer](/de/posts/gov-dlp-in-practice/)
- [Dein Daten-Gateway ist ein Single Point of Failure](/de/posts/gov-data-gateway-ownership/)

## 4. Rollen und Verantwortung

Microsoft unterscheidet Power Platform Admins, die Regeln festlegen, Environment Admins, die sie in ihrer Umgebung umsetzen, und Maker, die innerhalb der Regeln bauen. Für ein KMU heisst das: Jede Geschäftslösung hat benannte Besitzer, und Maker wissen, wie sie eine Umgebung oder einen Connector beantragen.

**Dein erster Schritt:** Trag für jede Geschäftslösung zwei Besitzer ein und veröffentliche den Antragsweg an einem Ort, den Maker finden.

- [Dataverse-Sicherheitsrollen: die fünf, die ihr kennen müsst](/de/knowledge/dataverse-security-roles/)
- [Citizen-Developer im Unternehmen: von der persönlichen Umgebung bis zur geteilten Lösung](/de/knowledge/citizen-developer-guide/)
- [Zwei Namen pro Lösung: Besitz, der Offboarding übersteht](/de/posts/gov-ownership-offboarding/)
- [Ein deaktivierter Besitzer deaktiviert nicht den Flow](/de/posts/gov-disabled-owner-zombie-flows/)
- [Das einzige Handbuch, das je existierte, ging um 17 Uhr nach Hause](/de/posts/gov-documentation-debt/)
- [Drei Self-Service-Kontrollen, die die meisten Tenants nie aktivieren](/de/posts/gov-self-service-governance-controls/)
- [Schatten-IT ist kein Disziplinproblem, sondern ein Latenzproblem](/de/posts/gov-shadow-it-root-cause/)

## 5. Laufende Kontrolle

Microsoft nennt das reaktive Governance: beobachten, was im Tenant entsteht, und auf Befunde reagieren. Dazu gehören Ressourcen ohne Besitzer, inaktive Ressourcen und wichtige Lösungen in der Default-Umgebung. Neu ist der Weg, diese Fragen in natürlicher Sprache an Power Platform Admin in Cowork zu stellen.

**Dein erster Schritt:** Setz einen monatlichen Termin und verfolge feste Kennzahlen. Welche das sein können, steht im Artikel zur Schatten-IT.

- [Schatten-IT in der Power Platform erkennen und messen](/de/knowledge/detect-shadow-it/)
- [Governance-Fragen an Power Platform Admin in Cowork stellen](/de/knowledge/cowork-governance-questions/)
- [Der Governance-Bericht, den ihr nicht selbst bauen müsst](/de/posts/gov-weekly-coe-rhythm/)
- [Monitoring, das niemand liest, ist nur Dekoration](/de/posts/gov-monitoring-readiness/)
- [Ein Agent kann jeden Test bestehen und trotzdem falsch antworten](/de/posts/gov-ai-agent-governance/)
- [KI-Kosten im Vergleich: AI Builder, Copilot Credits, Azure AI Foundry, Document Intelligence](/de/knowledge/ai-cost-comparison/)
- [AdminHelper-Starter-Set: zehn Flows, die deinen Tenant per E-Mail berichten](/de/flows/)

## Was auf eine Seite gehört

Ein Konzept, das gelesen wird, passt auf eine Seite. Empfehlung aus der Praxis für den Inhalt:

1. Wer ist Power Platform Administrator, wer vertritt?
2. Welche Umgebungen gibt es und wofür ist jede da?
3. Welche Datenrichtlinie gilt wo, und wer gibt einen neuen Connector frei?
4. Wie beantragt ein Maker eine Umgebung, einen Connector oder eine Lizenz, und wie schnell kommt die Antwort?
5. Welche Kennzahlen schaut sich wer an welchem Tag im Monat an?

Die [25 Fragen zur Governance-Strategie](/de/knowledge/governance-questions-top-25/) liefern die Antworten für diese Seite. Du kannst sie mit einer KI deiner Wahl durcharbeiten und erhältst am Ende einen Entwurf.

## Quellen

Aussagen am 15.11.2026 gegen Microsoft Learn geprüft. Die Reihenfolge der fünf Bausteine, die Spalte «Erledigt, wenn» und der Abschnitt «Was auf eine Seite gehört» sind Empfehlungen aus der Praxis, nicht Wortlaut von Microsoft.

- [Microsoft Learn: Power Platform governance overview and strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/admin-best-practices)
- [Microsoft Learn: Manage Power Platform adoption at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/govern-at-scale)
- [Microsoft Learn: Implement reactive governance controls](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/reactive-governance)
- [Microsoft Learn: Agentic governance with Power Platform Admin in Cowork](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance)
- [Microsoft Learn: Implement a data policy strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy)

Nur Orientierung, keine Rechts- oder Lizenzberatung. Prüfe Lizenz und Produktdetails, bevor du umsetzt.
