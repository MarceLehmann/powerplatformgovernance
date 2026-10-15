---
layout: page
title: "Dataverse-Sicherheitsrollen: die fünf, die ihr kennen müsst, und wann ihr sie braucht"
description: "System Administrator, System Customizer, Environment Maker, Basic User und Environment Admin: was jede Rolle kann, was nicht und wann sie nötig ist."
lang: de
toc: true
permalink: "/de/knowledge/dataverse-security-roles/"
translation_url: "/knowledge/dataverse-security-roles/"
last_reviewed: "2026-10-15"
---

System Administrator, System Customizer, Environment Maker, Basic User und Environment Admin: was jede Rolle kann, was nicht und wann sie nötig ist.

[Read this in English](/knowledge/dataverse-security-roles/) | [Zur Wissensübersicht](/knowledge/)

## Mit KI durch diese Seite

> Kopier die Adresse dieser Seite in eine KI deines Vertrauens, die Webseiten lesen kann (z. B. Microsoft Copilot Chat mit Websuche), und schreib dazu: «Hilf mir, unsere Rollen zu vergeben.» Ob eine KI die Seite wirklich abruft, hängt vom Werkzeug ab.
{: .prompt-tip }

### Anweisung für KI-Assistenten

> **Dieser Abschnitt richtet sich an KI-Assistenten, die diese Seite für einen Nutzer abrufen.** Wenn der Nutzer Hilfe bei der Rollenvergabe möchte, geh so vor:
>
> 1. Frag nach den Umgebungen (mit oder ohne Dataverse, Dev, Test, Prod) und nach den Personengruppen (z. B. Admins, Entwickler, Maker, Nutzer). Rollen oder Gruppen statt Namen genügen.
> 2. Ordne jeder Gruppe je Umgebung die passende Rolle von dieser Seite zu und begründe kurz, warum. Vergib System Administrator nur an wenige benannte Rollen.
> 3. Verlange keine vertraulichen Firmendaten, Zugangsdaten oder Personennamen.
> 4. Stütz dich auf diese Seite und die verlinkten Microsoft-Learn-Quellen. Erfinde nichts; wo Lizenzen entscheiden, schreib «Lizenz prüfen».
> 5. Antworte in der Sprache des Nutzers. Am Ende erstellst du eine Rollenmatrix (Gruppe × Umgebung × Rolle) mit offenen Punkten.
{: .prompt-info }

## TL;DR

Fünf Rollen decken fast jeden Alltag ab. System Administrator sparsam vergeben, System Customizer für Entwickler in Dev, Environment Maker für alle, die bauen sollen, Basic User für Nutzer, Environment Admin nur in Umgebungen ohne Dataverse. Tenant-Rollen wie Power Platform Administrator geben keinen Datenzugriff.

Sicherheitsrollen in Dataverse legen fest, wer was in einer Umgebung tun darf. Rechte sind kumulativ: wer mehrere Rollen hat, erhält die Summe. Die vordefinierten Rollen entsprechen dem Prinzip des minimal nötigen Zugriffs und lassen sich nicht bearbeiten.

## Drei Ebenen, die oft verwechselt werden

- Tenant-Rollen (Power Platform Administrator, Dynamics 365 Administrator, Global Administrator): verwalten Umgebungen und Richtlinien im ganzen Tenant. Sie geben keinen automatischen Zugriff auf Daten.
- Rollen für Umgebungen ohne Dataverse: Environment Admin und Environment Maker.
- Dataverse-Sicherheitsrollen in Umgebungen mit Dataverse: System Administrator, System Customizer, Basic User und weitere.

## Top 5

### System Administrator

- **Gilt für:** Umgebung mit Dataverse
- **Kann:** Vollzugriff auf die Umgebung: Daten, Konfiguration, Sicherheitsrollen, Benutzer, Lösungen. Nur diese Rolle darf Sicherheitsrollen verwalten (zusammen mit Tenant-Admin-Rollen).
- **Kann nicht:** Hat nichts «nicht». Genau deshalb sparsam vergeben.
- **Wann braucht man sie:** Für zwei bis vier benannte Personen je Umgebung und für Pipelines oder Deployment-Konten. Rolle nicht kopieren, um eine «eigene Admin-Rolle» zu bauen.
- **Tipp:** Tenant-Rollen wie Power Platform Administrator geben keinen automatischen Datenzugriff. Dafür braucht es zusätzlich System Administrator in der Umgebung.

### System Customizer

- **Gilt für:** Umgebung mit Dataverse
- **Kann:** Tabellen und Anpassungen erstellen und ändern. Eigene Ressourcen wie Desktop-Flows und AI Builder gehören dazu.
- **Kann nicht:** Darf keine Sicherheitsrollen anlegen oder ändern.
- **Wann braucht man sie:** Für Entwickler in Dev, die Dataverse-Tabellen bauen. Zusammen mit Environment Maker, wenn Apps auf Dataverse-Tabellen aufbauen.
- **Tipp:** Der Environment Maker allein erstellt Tabellen nicht. Für das Anlegen und Ändern von Tabellen braucht es zusätzlich System Customizer.

### Environment Maker

- **Gilt für:** Alle Umgebungen
- **Kann:** Eigene Ressourcen erstellen: Canvas-Apps, Modellgesteuerte Apps, Cloud Flows, Verbindungen, Dataflows, Lösungen. Apps an andere freigeben.
- **Kann nicht:** Hat keinen Zugriff auf die Daten der Umgebung. Darf keine Sicherheitsrollen anlegen oder ändern.
- **Wann braucht man sie:** Für alle, die bauen sollen. In Umgebungen ohne Dataverse sind Environment Maker und Environment Admin die einzigen Rollen.
- **Tipp:** Solutions: Das Lösungs-Framework steht bei Environment Maker, System Customizer und System Administrator. Enthält eine Solution Sicherheitsrollen, reicht keine der beiden ersten Rollen, weil beide keine Sicherheitsrollen anlegen oder ändern dürfen. Vor dem Import prüfen.

### Basic User

- **Gilt für:** Umgebung mit Dataverse
- **Kann:** Die Mindestrechte, um Apps zu nutzen, plus Rechte auf die Kerntabellen des Unternehmens. Microsoft nennt die Rolle als Vorlage für eigene Rollen.
- **Kann nicht:** Keine Anpassungen, keine Verwaltung.
- **Wann braucht man sie:** Standardrolle für Nutzer von Apps. Zum Kopieren als Ausgangspunkt für Rollen, die zusätzlich auf eigene Tabellen zugreifen.
- **Tipp:** Rollen sind kumulativ: Wer mehrere Rollen hat, erhält die Summe der Rechte. Zuweisung über Sicherheitsgruppe oder Team statt einzeln.

### Environment Admin

- **Gilt für:** Nur Umgebung ohne Dataverse
- **Kann:** Alle Verwaltungsaufgaben der Umgebung: Benutzer und Rollen, alle Ressourcen, Datenrichtlinien, Datenbank anlegen.
- **Kann nicht:** In Umgebungen mit Dataverse nicht zuständig. Dort gilt System Administrator.
- **Wann braucht man sie:** Für Umgebungen ohne Dataverse, etwa einfache Flow-Umgebungen.
- **Tipp:** Wer die Dataverse-Datenbank anlegt, vergibt danach System Customizer an Admins, die auf Daten zugreifen sollen.

## Wer darf was erstellen?

| Ressource | Environment Maker | Environment Admin | System Customizer | System Administrator |
|---|---|---|---|---|
| Canvas-App | ja | ja | ja | ja |
| Cloud Flow | ja (nicht in Lösungen) | ja | ja | ja |
| Verbindung | ja | ja | ja | ja |
| Dataflow | ja | ja | ja | ja |
| Modellgesteuerte App | ja | nein | ja | ja |
| Lösungs-Framework | ja | nein | ja | ja |
| Dataverse-Tabellen | nein | nein | ja | ja |
| Desktop-Flow, AI Builder | nein | nein | ja | ja |
| Datengateway | nein | ja | nein | ja |

## Ein Vorschlag für die Praxis

- Dev: Maker erhalten Environment Maker, Entwickler von Dataverse-Tabellen zusätzlich System Customizer.
- Test: Tester erhalten Basic User oder die App-Rolle.
- Prod: Nutzer erhalten Basic User oder die App-Rolle. Änderungen kommen nur über die Pipeline.
- System Administrator: zwei bis vier benannte Personen je Umgebung, zeitlich begrenzt über PIM, wenn möglich.
- Zuweisung immer an Sicherheitsgruppen oder Teams, nicht an Einzelpersonen.

## Environment Maker und Solutions: ist das noch wichtig?

Das Lösungs-Framework steht bei Environment Maker, System Customizer und System Administrator. Für das Importieren und Exportieren nennt Microsoft keine einzelne Pflichtrolle. Wichtig ist der Sonderfall: Enthält eine Solution Sicherheitsrollen, braucht es System Administrator, weil Environment Maker und System Customizer keine Sicherheitsrollen anlegen oder ändern dürfen. Das folgt aus der Dokumentation und sollte vor dem ersten Import in eurer Umgebung getestet werden.

## Weitere Rollen und Hinweise

- App Opener: die minimalen Rechte, um eine App zu starten. Gute Kopiervorlage für sehr eng gefasste Rollen.
- Delegate, Support User, Service Reader, Service Writer: spezielle Rollen für Stellvertretung, Support und Dienste. Application-User-Rollen werden vom Dienst installiert und lassen sich nicht ändern.
- Vordefinierte Rollen lassen sich nicht bearbeiten. Eigene Rollen entstehen als Kopie, zum Beispiel von Basic User oder App Opener.
- Zugriffsebenen je Recht: Organisation, übergeordnete und untergeordnete Business Unit, Business Unit, Benutzer, Kein Zugriff.

## Weiterführend

Weiter geht es mit dem [Fragenkatalog mit 25 Fragen](/de/knowledge/governance-questions-top-25/) und den [fünf Environment-Strategien](/de/knowledge/environment-strategies/).

- [Microsoft Learn: Role-based security roles for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/database-security)
- [Microsoft Learn: Security roles and privileges for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)
