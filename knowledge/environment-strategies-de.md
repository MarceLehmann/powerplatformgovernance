---
layout: page
title: "Fünf Environment-Strategien für Power Platform im Vergleich"
description: "Von schlank bis regulatorisch getrennt: fünf Strategien mit Aufbau, Rollen, Default-Umgebung, DLP, ALM, Aufwand und Risiken."
lang: de
toc: true
permalink: "/de/knowledge/environment-strategies/"
translation_url: "/knowledge/environment-strategies/"
last_reviewed: "2026-10-21"
---

Von schlank bis regulatorisch getrennt: fünf Strategien mit Aufbau, Rollen, Default-Umgebung, DLP, ALM, Aufwand und Risiken.

[Read this in English](/knowledge/environment-strategies/) | [Zur Wissensübersicht](/knowledge/)

## Mit KI durch diese Seite

> Kopier die Adresse dieser Seite in eine KI deines Vertrauens, die Webseiten lesen kann (z. B. Microsoft Copilot Chat mit Websuche), und schreib dazu: «Führ mich durch diese Seite.» Ob eine KI die Seite wirklich abruft, hängt vom Werkzeug ab. Falls deine KI keine Webseiten liest: Prompt unten kopieren und die Strategien von dieser Seite einfügen.
{: .prompt-tip }

### Anweisung für KI-Assistenten

> **Dieser Abschnitt richtet sich an KI-Assistenten, die diese Seite für einen Nutzer abrufen.** Wenn der Nutzer dich bittet, ihn durch diese Seite zu führen, geh so vor:
>
> 1. Erklär in zwei Sätzen das Ziel: eine begründete Empfehlung für eine der fünf Environment-Strategien auf dieser Seite und danach der Aufbau dieser Strategie.
> 2. Frag die Kriterien aus der Tabelle «Welche Strategie passt zu euch?» einzeln ab: Grösse der Organisation und Zahl der Geschäftslösungen, unternehmenskritische Lösungen und Zahl der Teams, Zahl der Maker, die lernen sollen, unterschiedlicher Schutzbedarf von Bereichen, Pflicht, Daten in einer Region zu halten. Stell Rückfragen, wenn eine Antwort unklar ist.
> 3. Empfiehl eine Strategie und begründe sie mit den Antworten und den Angaben «Passt, wenn», «Aufwand» und «Risiken» dieser Seite. Passen zwei Strategien, nenne beide mit dem, was dafür und dagegen spricht, und lass den Nutzer wählen.
> 4. Erarbeite danach mit dem Nutzer den Aufbau der gewählten Strategie, ein Punkt auf einmal: Aufbau, Rollen, Default-Umgebung, DLP, ALM.
> 5. Verlange keine vertraulichen Firmendaten wie Namen von Personen, Kunden oder Systemen, Zugangsdaten oder interne Zahlen. Frag nur nach dem, was der Nutzer teilen will.
> 6. Stütz dich auf die Inhalte und die Microsoft-Learn-Quellen dieser Seite. Erfinde nichts. Nenne keine Preise und keine Lizenzdetails, die hier nicht stehen; wo Lizenzen entscheiden, schreib «Lizenz prüfen».
> 7. Antworte in der Sprache des Nutzers.
> 8. Zum Schluss: Fass die Empfehlung zusammen mit einer Tabelle der Environments (Name, Typ, Zweck), Rollen, DLP und ALM, dazu offene Punkte und nächste Schritte auf Basis der «Ersten Schritte» der gewählten Strategie.
{: .prompt-info }

## TL;DR

Es gibt nicht die eine richtige Environment-Strategie. Fünf Muster decken die meisten Fälle ab: schlank mit einer Produktion, drei Stufen je Lösung, Maker-Sandkasten mit Routing, nach Abteilung und regional getrennt. Die Tabelle hilft bei der Wahl, die Abschnitte darunter liefern die Details.

## Welche Strategie passt zu euch?

| Kriterium | Strategie |
|---|---|
| Kleine Organisation, wenige Geschäftslösungen | 1. Schlank: Default und eine Produktion |
| Unternehmenskritische Lösungen, mehrere Teams | 2. Drei Stufen je Lösung: Dev, Test, Prod |
| Viele Maker, die lernen sollen | 3. Maker-Sandkasten mit Routing und Gruppen |
| Bereiche mit unterschiedlichem Schutzbedarf | 4. Nach Abteilung oder Geschäftsbereich |
| Daten müssen in einer Region bleiben | 5. Regional oder regulatorisch getrennt |

## 1. Schlank: Default und eine Produktion

Der Einstieg für kleine Organisationen, die klar trennen wollen, ohne ein Regelwerk aufzubauen.

**Passt, wenn:** Bis zu wenigen Dutzend Makern, wenige Geschäftslösungen, kein eigenes CoE-Team.

**Aufbau**

- Default-Umgebung, umbenannt in «Personal Productivity», nur für persönliche Produktivität
- Eine Produktionsumgebung mit Dataverse für Geschäftslösungen
- Eine Sandbox oder Developer Environment zum Bauen und Testen

- **Rollen:** Maker: Environment Maker in der Sandbox. Nutzer: Basic User in der Produktion. System Administrator: zwei benannte Personen.
- **Default-Umgebung:** Freigabe an «Everyone» aus, strenge DLP, Willkommenstext mit Regeln und Ansprechperson.
- **DLP:** Eine Richtlinie für den Tenant, eine strengere für die Default-Umgebung.
- **ALM:** Solutions manuell exportieren und importieren. Solution Checker vor jedem Import.
- **Aufwand:** Aufbau gering, Betrieb gering.
- **Risiken:** Alle Geschäftslösungen teilen sich eine Produktion. Apps können sich gegenseitig stören.
- **Erste Schritte:** Inventar erstellen, Default umbenennen, DLP setzen, Produktion und Sandbox anlegen.

## 2. Drei Stufen je Lösung: Dev, Test, Prod

Eine Lösung wandert durch getrennte Umgebungen, jede Änderung ist nachvollziehbar.

**Passt, wenn:** Unternehmenskritische Lösungen, mehrere Teams, hohe Anforderungen an Nachvollziehbarkeit.

**Aufbau**

- Pro wichtiger Lösung oder Lösungsfamilie ein Dev, ein Test und ein Prod
- Pipeline-Host-Umgebung für Power Platform Pipelines
- Managed Environments mindestens für Test und Prod

- **Rollen:** Entwickler: Environment Maker plus System Customizer in Dev. Tester: Basic User in Test. Prod: Pipeline und Admin, keine direkte Bearbeitung.
- **Default-Umgebung:** Wie bei allen Strategien: nur Produktivität, kein Geschäftsbetrieb.
- **DLP:** Richtlinie je Stufe: Dev offener, Prod strenger.
- **ALM:** Power Platform Pipelines, Solution Checker als Pflicht, Genehmigung vor Prod.
- **Aufwand:** Aufbau mittel, Betrieb mittel.
- **Risiken:** Viele Umgebungen und Kapazität. Jede Umgebung ausser Trial und Developer beansprucht zu Beginn 1 GB.
- **Erste Schritte:** Eine Pilotlösung nehmen, Pipeline bauen, Rollen je Stufe festlegen, dann auf weitere Lösungen übertragen.

## 3. Maker-Sandkasten mit Routing und Gruppen

Maker bekommen automatisch ein persönliches Developer Environment, Regeln gelten über Environment Groups.

**Passt, wenn:** Viele Maker, die lernen und ausprobieren sollen, bei klaren Leitplanken.

**Aufbau**

- Default-Umgebung nur für Produktivität
- Environment Routing leitet Maker in persönliche Developer Environments
- Environment Groups: Development, Shared Development, Test, Production
- Sicherheitsgruppe legt fest, wer geroutet wird

- **Rollen:** Maker sind Admin ihres eigenen Developer Environments, dürfen die Gruppenregeln aber nicht ändern.
- **Default-Umgebung:** Maker verlassen die Default-Umgebung, sobald sie geroutet werden. Dort bleibt nur Produktivität.
- **DLP:** Regeln über Environment Groups, damit jedes neue Environment sofort abgedeckt ist.
- **ALM:** Pipelines von Dev über Test nach Prod. Shared Development für Projekte mit mehreren Makern.
- **Aufwand:** Aufbau mittel, Betrieb mittel.
- **Risiken:** Developer Environments werden nach 30 Tagen ohne Aktivität deaktiviert, verwaltete nach 60 Tagen, und 15 Tage nach der Deaktivierung gelöscht. Gruppen und Routing setzen Managed Environments voraus. Lizenzfrage prüfen.
- **Erste Schritte:** Sicherheitsgruppe anlegen, Gruppe «Development» mit Regeln erstellen, Routing aktivieren, Maker informieren.

## 4. Nach Abteilung oder Geschäftsbereich

Jeder Bereich bekommt eigene Umgebungen und eigene Regeln.

**Passt, wenn:** Bereiche mit unterschiedlichem Schutzbedarf, zum Beispiel HR und Finance gegenüber Marketing.

**Aufbau**

- Je Bereich eigene Umgebungen (Dev und Prod)
- Environment Group je Bereich mit eigenen Regeln
- Namensregel mit Stufe, Region, Bereich und Zweck, zum Beispiel Prod-CH-Finance-Payroll

- **Rollen:** Fachliche Verantwortliche je Bereich, System Administrator zentral. Rollen je Bereich getrennt vergeben.
- **Default-Umgebung:** Nur Produktivität. Fachlösungen wandern in die Bereichsumgebungen.
- **DLP:** Strengere Richtlinien für Bereiche mit sensiblen Daten.
- **ALM:** Pipelines je Bereich oder gemeinsam, je nach Teamgrösse.
- **Aufwand:** Aufbau mittel, Betrieb mittel bis hoch.
- **Risiken:** Daten über Bereiche hinweg zu teilen wird mühsam. Mehr Umgebungen, mehr Admins, mehr Kapazität.
- **Erste Schritte:** Bereiche nach Schutzbedarf einteilen, ein Pilot-Bereich, danach schrittweise erweitern.

## 5. Regional oder regulatorisch getrennt

Umgebungen folgen der Region oder der Regulierung, nicht der Organisation.

**Passt, wenn:** Daten müssen in einer Region bleiben, mehrere Länder, Konzernstrukturen oder Kundenvorgaben.

**Aufbau**

- Je Region eigene Umgebungen, dieselbe Lösung wird je Region ausgerollt
- Environment Groups je Region
- Tenant Isolation und strenge Regeln für Datenflüsse zwischen Regionen

- **Rollen:** Regionale Administratoren, zentrale Governance. Zugriff auf Daten nur in der eigenen Region.
- **Default-Umgebung:** Nur Produktivität, ohne Anbindung an regulierte Daten.
- **DLP:** Je Region eigene Richtlinie, grenzüberschreitende Konnektoren blockiert oder geprüft.
- **ALM:** Eine zentrale Entwicklung, Auslieferung je Region über Pipelines.
- **Aufwand:** Aufbau hoch, Betrieb hoch.
- **Risiken:** Doppelte Pflege, Versionsunterschiede zwischen Regionen, höherer Aufwand für Support.
- **Erste Schritte:** Datenhaltungspflichten klären, Regionen festlegen, eine Lösung pilotweise in zwei Regionen ausrollen.

## Prompt für die KI eures Vertrauens

Für KI-Werkzeuge, die keine Webseiten lesen: Kopiert den Prompt, ersetzt die letzte Zeile durch den Text dieser Seite von «Welche Strategie passt zu euch?» bis zur fünften Strategie und gebt ihn in eure KI. Prüft das Ergebnis im Team, bevor ihr es umsetzt.

```text
Du bist ein erfahrener Berater für Microsoft Power Platform Governance. Hilf mir, eine der fünf Environment-Strategien unten zu wählen und aufzubauen.

Vorgehen:
1. Frag mich die Kriterien aus der Tabelle «Welche Strategie passt zu euch?» einzeln ab. Stell Rückfragen, wenn eine Antwort unklar ist.
2. Empfiehl eine Strategie und begründe sie mit meinen Antworten und den Angaben «Passt, wenn», «Aufwand» und «Risiken».
3. Erarbeite mit mir den Aufbau der gewählten Strategie, ein Punkt auf einmal: Aufbau, Rollen, Default-Umgebung, DLP, ALM.
4. Fass am Ende zusammen: Environments als Tabelle (Name, Typ, Zweck), Rollen, DLP, ALM, offene Punkte und nächste Schritte.

Regeln:
- Verwende ausschliesslich meine Antworten, den Text unten und gesichertes Wissen zu Power Platform. Erfinde nichts.
- Frag nicht nach vertraulichen Firmendaten. Ich teile, was ich teilen will.
- Nenne keine Preise und erfinde keine Lizenzdetails. Wo Lizenzen entscheidend sind, schreibe «Lizenz prüfen».
- Schreibe auf Deutsch, in Schweizer Schreibweise, klar und ohne Floskeln. Fachbegriffe wie Environment, Dataverse, DLP und Managed Environment bleiben englisch.

Die fünf Strategien:
[Hier den Text dieser Seite von «Welche Strategie passt zu euch?» bis zur fünften Strategie einfügen.]
```

## Quellen

- [Microsoft Learn: Role-based security roles for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/database-security)
- [Microsoft Learn: Security roles and privileges for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)
- [Microsoft Learn: Develop a tenant environment strategy to adopt Power Platform at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
- [Microsoft Learn: Automatic environment cleanup](https://learn.microsoft.com/en-us/power-platform/admin/automatic-environment-cleanup#developer-environments)

Wer Maker in Stufen einordnen will, findet den Ablauf im Guide [Citizen-Developer im Unternehmen](/de/knowledge/citizen-developer-guide/).

Orientierungshilfe, keine Rechts- oder Lizenzberatung. Prüfe Lizenz- und Produktdetails vor der Umsetzung.
