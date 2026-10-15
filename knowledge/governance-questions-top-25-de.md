---
layout: page
title: "Governance-Strategie aufbauen: die 25 Fragen, die jede Firma klären muss"
description: "Ein Fragenkatalog zu Environment-Strategie, Default-Umgebung, Daten, Rollen und Betrieb, mit einem Prompt, der aus euren Antworten ein Konzept macht."
lang: de
toc: true
permalink: "/de/knowledge/governance-questions-top-25/"
translation_url: "/knowledge/governance-questions-top-25/"
last_reviewed: "2026-10-15"
---

Ein Fragenkatalog zu Environment-Strategie, Default-Umgebung, Daten, Rollen und Betrieb, mit einem Prompt, der aus euren Antworten ein Konzept macht.

[Read this in English](/knowledge/governance-questions-top-25/) | [Zur Wissensübersicht](/knowledge/)

## TL;DR

Wer Power Platform in einer Firma regeln will, muss 25 Fragen beantworten. Dieser Katalog ordnet sie in sechs Gruppen, mit Hinweis, warum sie wichtig sind und welche Antworten üblich sind. Am Ende steht ein Prompt, mit dem ihr aus den Antworten ein Konzept erstellen lasst.

**[Fragenkatalog als PDF mit Antwortfeldern](/assets/downloads/Governance_Fragenkatalog_Top25_DE.pdf)**

## Ziel und Verantwortung

**1. Wer verantwortet Power Platform im Unternehmen, und wer ist Stellvertretung?**

Ohne benannte Verantwortung bleibt jede Regel Papier. Eine Person genügt, aber mit Vertretung.

*Mögliche Antworten:* Einzelperson in der IT, kleines CoE-Team, externer Partner mit interner Freigabe.

**2. Wofür soll Power Platform eingesetzt werden: persönliche Produktivität, Abteilungslösungen, unternehmenskritische Anwendungen?**

Die Antwort bestimmt, wie streng Regeln sein müssen und wie viele Environments nötig sind.

*Mögliche Antworten:* Nur Produktivität; Produktivität plus Abteilungs-Apps; zusätzlich kritische Kernprozesse.

**3. Wer darf bauen: alle, eine Gruppe, nur nach Schulung?**

Der Zugang zum Bauen ist die wichtigste Stellschraube zwischen Freiheit und Kontrolle.

*Mögliche Antworten:* Alle Mitarbeitenden in der Default-Umgebung; Sicherheitsgruppe «Maker» nach Kurs; nur IT.

**4. Wo liegt die Grenze zwischen Selbstbedienung und IT-Projekt?**

Ohne Grenze wachsen persönliche Bastellösungen still zu Geschäftsprozessen.

*Mögliche Antworten:* Anzahl Nutzer, Datenklasse, Abhängigkeit des Tagesgeschäfts, Schnittstellen zu Fremdsystemen.

**5. Wer entscheidet bei Ausnahmen, und wie schnell?**

Wer auf Ausnahmen wochenlang wartet, baut am Prozess vorbei.

*Mögliche Antworten:* Entscheidung innerhalb von fünf Arbeitstagen durch die verantwortliche Person; Gremium nur bei Datenklasse hoch.

## Environment-Strategie

**6. Welche Environments gibt es heute, und wer hat sie angelegt?**

Ohne Inventar ist jede Strategie eine Annahme. Developer-, Trial- und Teams-Umgebungen gehören dazu.

*Mögliche Antworten:* Liste aus dem Power Platform Admin Center oder CoE Starter Kit, mit Besitzer, Typ, Dataverse ja/nein.

**7. Welche Environment-Typen und Stufen braucht ihr?**

Production, Sandbox, Developer, Trial und Default haben unterschiedliche Eigenschaften und Kosten.

*Mögliche Antworten:* Dev, Test, Prod je Lösung; ein gemeinsames Dev und Prod; persönliche Developer Environments.

**8. Wer bekommt welches Environment, und wer darf neue anlegen?**

Standardmässig dürfen Personen mit Premium- oder Developer-Plan-Lizenz Developer Environments anlegen. Das ist selten gewollt.

*Mögliche Antworten:* Nur Admins; Antragsformular; Routing in persönliche Developer Environments für eine Sicherheitsgruppe.

**9. Was ist die Einheit eines Environments: Lösung, Abteilung, Region oder Lebenszyklus?**

Die Einheit bestimmt, wie viele Environments entstehen und wer was sieht.

*Mögliche Antworten:* Pro Lösung; pro Abteilung; pro Region; pro Lebenszyklus mit Gruppen.

**10. Welche Namensregeln gelten für Environments?**

Namen sind für Admins, Maker und Nutzer sichtbar. Gute Namen sparen Rückfragen und erleichtern Automatisierung.

*Mögliche Antworten:* Beispiel: Stufe, Region, Bereich, Zweck (Prod-CH-Finance-Payroll). Kurz, ohne vertrauliche Angaben.

**11. Gibt es Pflichten zu Datenhaltung oder Region, die Environments trennen?**

Wenn Daten in einer Region bleiben müssen, gehört die Region in die Strategie.

*Mögliche Antworten:* Schweizer Daten nur in Schweizer Region; branchenspezifische Vorgaben; Kundenvorgaben.

## Default-Umgebung

**12. Was ist in der Default-Umgebung erlaubt?**

Alle Mitarbeitenden haben Zugriff auf die Default-Umgebung. Sie ist für persönliche Produktivität gedacht, nicht für dauerhafte Geschäftslösungen.

*Mögliche Antworten:* Nur Microsoft-365-nahe Produktivität; keine Dataverse-Lösungen; keine Anbindung an Fremdsysteme.

**13. Wird die Default-Umgebung umbenannt, und wie erfahren Maker davon?**

Microsoft empfiehlt einen sprechenden Namen wie «Personal Productivity Environment» und eine Willkommensmeldung für Maker.

*Mögliche Antworten:* Umbenennen; Maker-Willkommensinhalt; interne Seite mit Regeln und Ansprechperson.

**14. Was passiert mit Apps und Flows, die schon in der Default-Umgebung liegen?**

Bestehende Lösungen verschwinden nicht von selbst. Jede braucht eine Entscheidung.

*Mögliche Antworten:* Bleiben (persönlich), migrieren (geschäftlich), abschalten (verwaist). Besitzer informieren.

**15. Welche Freigaberegeln gelten, und wer darf an «Everyone» freigeben?**

Die Gruppe «Everyone» enthält alle, die sich je angemeldet haben, auch Gäste, und ihre Mitglieder sind nicht einsehbar.

*Mögliche Antworten:* Freigabe an Everyone aus; Freigabe nur an Sicherheitsgruppen; Sharing-Limits im Managed Environment.

## Daten und Konnektoren

**16. Welche Daten sind sensibel, und wo dürfen sie nicht hinfliessen?**

Datenklassen sind die Grundlage jeder Konnektor-Regel.

*Mögliche Antworten:* Öffentlich, intern, vertraulich, streng vertraulich; Beispiele pro Klasse.

**17. Welche Konnektoren sind Business, Non-Business oder blockiert, und gilt das je Environment?**

Standardmässig landen neue Konnektoren in Non-Business. In der Default-Umgebung sollte ein neuer Konnektor erst nach Prüfung nutzbar sein.

*Mögliche Antworten:* Tenant-Richtlinie plus strengere Richtlinie für Default; Blockiert als Standardgruppe für neue Konnektoren.

**18. Wie gehen wir mit benutzerdefinierten Konnektoren und HTTP-Aktionen um?**

Das sind die Wege, auf denen Daten das Unternehmen verlassen können.

*Mögliche Antworten:* In Default blockieren; in Prod nach Prüfung zulassen; URL-Muster als Regeln.

**19. Welche Verbindungen zu anderen Tenants sind erlaubt?**

Tenant Isolation gilt für alle Environments des Tenants, auch Default.

*Mögliche Antworten:* Standard: eingehend und ausgehend blockieren, einzelne Partner-Tenants ausdrücklich freigeben.

## Sicherheit und Rollen

**20. Wer ist Power Platform Administrator, und wer ist System Administrator in welchem Environment?**

Tenant-Rollen geben keinen automatischen Datenzugriff. Der Zugriff auf Daten braucht in der Umgebung die Rolle System Administrator.

*Mögliche Antworten:* Zwei bis vier Personen mit Tenant-Rolle; zeitlich begrenzte Rechte über PIM; System Administrator je Environment nur nach Bedarf.

**21. Welche Dataverse-Rollen erhalten Maker, Nutzer und Support je Environment?**

Die vordefinierten Rollen decken die meisten Aufgaben ab. Eigene Rollen entstehen am besten als Kopie von Basic User oder App Opener.

*Mögliche Antworten:* Dev: Environment Maker plus System Customizer; Test: Basic User; Prod: Basic User oder App-Rolle.

**22. Wie behandeln wir Gäste, Externe und Dienstkonten?**

Gäste und technische Konten sind die häufigsten Lücken beim Offboarding.

*Mögliche Antworten:* Gäste nur in benannten Environments; Application User oder Service Principal für Automatisierung; Besitzerliste.

## Betrieb und Lizenzen

**23. Wie kommen Lösungen von Dev nach Prod?**

Ohne festen Weg landen Änderungen direkt in der Produktion.

*Mögliche Antworten:* Manueller Export und Import; Power Platform Pipelines; Solution Checker als Pflicht.

**24. Wie laufen Monitoring, Inventar, Besitzerwechsel und Offboarding?**

Flows und Apps ausgeschiedener Mitarbeitender laufen weiter, bis jemand sie bemerkt.

*Mögliche Antworten:* Wöchentliches Inventar; Besitzerwechsel-Prozess; Admin-Flows oder CoE Starter Kit.

**25. Welche Lizenzen sind vorhanden, und wer trägt Kapazität und Kosten?**

Managed Environments, Premium-Konnektoren und Dataverse-Speicher hängen an Lizenzen und Kapazität.

*Mögliche Antworten:* Lizenzübersicht; Kapazitätsbericht; Kostenstelle je Environment; Umgang mit ungenutzten Environments.

## Aus Antworten wird ein Konzept

Kopiert eure Antworten in den Prompt und gebt ihn in eure KI. Prüft das Ergebnis im Team, bevor ihr es freigebt.

```text
Du bist ein erfahrener Berater für Microsoft Power Platform Governance. Erstelle aus meinen Antworten ein Governance-Konzept, das ein Unternehmen direkt umsetzen kann.

Regeln:
- Verwende ausschliesslich meine Antworten und gesichertes Wissen zu Power Platform. Erfinde nichts. Wenn eine Antwort fehlt oder unklar ist, schreibe «offen» und stelle eine Rückfrage am Ende.
- Schreibe auf Deutsch, in Schweizer Schreibweise, klar und ohne Floskeln. Fachbegriffe wie Environment, Dataverse, DLP und Managed Environment bleiben englisch.
- Nenne keine Preise und erfinde keine Lizenzdetails. Wo Lizenzen entscheidend sind, schreibe «Lizenz prüfen».

Erstelle diese Abschnitte:
1. Ziel und Geltungsbereich (drei Sätze)
2. Verantwortlichkeiten (Tabelle: Rolle, Person oder Gruppe, Aufgabe)
3. Environment-Topologie (Tabelle: Name nach Namensregel, Typ, Zweck, Besitzer, Managed Environment ja/nein) und ein Diagramm als Mermaid-Code
4. Regeln für die Default-Umgebung (erlaubt, nicht erlaubt, Umbenennung, Freigabe, Umgang mit Bestehendem)
5. Datenklassen und DLP-Matrix (Konnektor-Gruppen je Environment)
6. Rollenmatrix (Dataverse-Rollen je Environment und Personengruppe)
7. ALM und Freigabeprozess (Dev, Test, Prod, Prüfungen)
8. Betrieb: Monitoring, Inventar, Besitzerwechsel, Offboarding, Lizenzen und Kapazität
9. Umsetzungsplan in drei Phasen (30, 60, 90 Tage) mit je höchstens fünf Aufgaben
10. Offene Punkte und Risiken

Formatiere als Markdown mit Tabellen. Am Ende: eine Liste der Rückfragen, ohne die das Konzept nicht abgeschlossen ist.

Meine Antworten:
[Hier die ausgefüllten 25 Fragen einfügen: Frage, Antwort, pro Zeile.]
```

- [Microsoft Learn: Role-based security roles for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/database-security)
- [Microsoft Learn: Security roles and privileges for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)
- [Microsoft Learn: Develop a tenant environment strategy to adopt Power Platform at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
