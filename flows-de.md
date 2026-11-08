---
layout: page
title: "Admin-Flows"
description: "Die zehn AdminHelper-Starter-Flows für Power-Platform-Admins: Inventare für Umgebungen, Apps, Flows und Copilot-Studio-Agents, DLP-Schnappschuss, nicht blockierbare Connectors, Kapazität und Agents ohne Authentifizierung. Nur Standard-Lizenz, nur lesend, gratis per E-Mail."
lang: de
permalink: "/de/flows/"
translation_url: "/flows/"
toc: true
---

Das AdminHelper-Starter-Set besteht aus zehn Power-Automate-Flows, die deinen Tenant ansehen und per E-Mail berichten: vier Inventare (Umgebungen, Apps, Cloud-Flows, Copilot-Studio-Agents), eine tägliche Liste neu angelegter Umgebungen, ein DLP-Schnappschuss mit Änderungsprotokoll, ein wöchentlicher Bericht über Connectors, die DLP nicht blockieren kann, eine Liste der von der Plattform suspendierten Flows, eine Kapazitätswarnung und eine Prüfung auf Agents ohne Authentifizierung. Dazu kommen zwei Hilfsflows: F00 prüft deine Konfiguration, F51 bereitet die Ablageordner vor. Alle zehn laufen mit der Standard-Lizenz und ändern nichts in deinem Tenant. Geschrieben wird einzig die tägliche DLP-Schnappschuss-Datei in deine eigene SharePoint-Bibliothek.

[This page in English](/flows/)

Das Starter-Set ist gratis. Du bekommst es per E-Mail über [kmupower.com](https://kmupower.com/vorlagen#adminhelper). Wenn du mehr willst, findest du die [Angebote (auf Englisch)](/offers/): Standard (35 Flows, CHF 49), Voll (51 Flows, CHF 99) und das Default-Paket (CHF 79). Jedes bezahlte Paket gibt es auch mit Einrichtung per Fernzugriff (CHF 449, CHF 899 und CHF 479).

## Deine ersten 10 Flows

**Vorher:** Keiner der zehn braucht eine Premium-Lizenz oder eine eigene Dataverse-Tabelle. Sie nutzen die Connectors **Power Platform for Admins**, **Power Platform for Admins V2**, **Office 365 Outlook** und (für den DLP-Schnappschuss) **SharePoint**. Das Admin-Inventar der Power Platform, dieselbe Datenquelle wie im Admin Center, liefert Umgebungen, Apps, Flows und Agents tenantweit in einer seitenweisen Abfrage. Das Konto hinter den Verbindungen braucht die Rolle Power-Platform-Administrator und ein Postfach für die Berichte. Alle Flows kommen ausgeschaltet an. Starte zuerst F51 und F00, setze die Umgebungsvariablen und schalte dann die Flows einzeln ein.

### Starter-Flow 1: F01 Umgebungsinventar

**Was er tut:** Liest einmal täglich jede Umgebung deines Tenants (Typ, Region, Managed-Status, Dataverse, Erstelldatum) und schickt das Inventar ans Admin-Team.

**Wer ihn braucht:** Admins und CoE-Teams, die verlässlich wissen wollen, wie viele Umgebungen es gibt.

**Warum er wichtig ist:** DLP, Backups, Kapazität und Sicherheitsprüfungen beziehen sich alle auf Umgebungen. Ist die Liste unvollständig, erbt alles darauf die Lücke.

**Zeitplan:** täglich 01:30. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`.

### Starter-Flow 2: F02 Neue Umgebungen erkennen

**Was er tut:** Meldet jeden Morgen, welche Umgebungen am Vortag angelegt wurden, mit Typ, Region, Erstellzeit und Managed-Status. Gab es keine, bleibt er still.

**Wer ihn braucht:** Admins, die Schatten-Umgebungen innerhalb eines Tages bemerken wollen und nicht erst beim nächsten Audit.

**Warum er wichtig ist:** In einer neuen Umgebung entstehen neue Apps, Flows und Daten. Wer sie früh sieht, legt DLP-Policy und Besitzer fest, bevor sie wächst.

**Zeitplan:** täglich 02:30. **Lizenz:** Standard. **Braucht:** `pp_AdminMail` und eine Verbindung eines Power-Platform-Administrators, weil das Inventar nur mit Benutzeranmeldung lesbar ist.

### Starter-Flow 3: F08 Kapazitätswarnung

**Was er tut:** Prüft täglich die Tenant-Kapazität (Datenbank, Datei, Log) gegen einen Schwellwert und meldet sich nur, wenn er erreicht ist oder ein Wert fehlt.

**Wer ihn braucht:** Admins, die von einem Engpass hören wollen, bevor Umgebungen blockiert werden.

**Warum er wichtig ist:** Fehlende Kapazität stoppt neue Umgebungen und kann Dataverse-Vorgänge blockieren. Ein Flow, der nur bei Bedarf spricht, wird gelesen, und fehlende Daten gelten nicht als «in Ordnung».

**Zeitplan:** täglich 07:00. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`, `pp_CapacityWarnPercent`. Rolle Power-Platform-Administrator.

### Starter-Flow 4: F11 DLP-Policy-Schnappschuss

**Was er tut:** Liest jede Nacht alle DLP-Policies, legt sie als Tagesdatei in deiner SharePoint-Bibliothek ab und vergleicht mit dem letzten Schnappschuss. Neue, gelöschte und geänderte Policies kommen per E-Mail.

**Wer ihn braucht:** Admins, die einen Verlauf ihrer DLP-Policies wollen und eine Meldung, wenn jemand eine ändert.

**Warum er wichtig ist:** Eine geänderte Connector-Gruppe kann Flows suspendieren oder unbemerkt einen Datenweg öffnen. Die Tagesdateien zeigen den Stand vor der Änderung.

**Zeitplan:** täglich 01:00. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`, `pp_SharePointSite`, `pp_SharePointLibrary` (beides bereitet F51 vor). Er ändert keine Policy und schreibt nur die Schnappschuss-Datei. Beschränke den Zugriff auf den Ordner, weil die Dateien die Namen der Bearbeiter enthalten.

### Starter-Flow 5: F13 Bericht nicht blockierbarer Connectors

**Was er tut:** Meldet jede Woche, welche Connectors sich mit einer DLP-Policy nicht blockieren lassen, mit Lizenzstufe und Nutzung in Canvas-Apps und Flows.

**Wer ihn braucht:** Admins, die DLP-Policies planen und wissen wollen, wo ein Blockieren nicht geht.

**Warum er wichtig ist:** Eine Policy, die vollständig aussieht, aber bestimmte Connectors nicht abdecken kann, gibt falsche Sicherheit. Der Bericht zeigt die Lücken und welche deiner Apps und Flows die Connectors nutzen.

**Zeitplan:** montags 10:00. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`. Rolle Power-Platform-Administrator.

### Starter-Flow 6: F15 Suspendierte Flows melden

**Was er tut:** Liest täglich alle Cloud-Flows und Agent-Flows, die die Plattform suspendiert hat, und meldet sie mit Umgebung, Link und letztem Speichern. Flows, die in den letzten 24 Stunden gespeichert wurden, sind markiert. Gibt es keine, bleibt er still.

**Wer ihn braucht:** Admins, die merken wollen, wenn Geschäftsprozesse lautlos stehen bleiben, etwa nach einer DLP-Änderung.

**Warum er wichtig ist:** Ein suspendierter Flow läuft nicht mehr und niemand erfährt es. Das Inventar sagt, dass ein Flow suspendiert ist, aber nicht warum. Der Bericht behauptet deshalb kein DLP als Ursache und verweist auf die Detailseite des Flows, wo die Plattform den Grund zeigt.

**Zeitplan:** täglich 06:45. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`, Benutzeranmeldung für das Inventar.

### Starter-Flow 7: F17 App-Inventar

**Was er tut:** Liest einmal täglich alle Canvas-, Model-driven- und Code-Apps und meldet Summen, Apps pro Umgebung und die Apps, die zuerst einen Blick brauchen: in Quarantäne oder lange nicht geändert.

**Wer ihn braucht:** Admins, die eine App-Liste wollen, ohne jede Umgebung einzeln zu öffnen.

**Warum er wichtig ist:** Was du nicht siehst, kannst du nicht steuern. Lässt sich das Inventar nicht vollständig lesen, sagt der Flow das, statt eine Teilliste zu melden.

**Zeitplan:** täglich 01:45. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`, `pp_InactivityDays`. Das Inventar zeigt Änderungen mit bis zu 15 Minuten Verzögerung und enthält keine Freigabezahlen oder Nutzung.

### Starter-Flow 8: F24 Flow-Inventar

**Was er tut:** Liest einmal täglich alle Cloud-Flows und Agent-Flows und meldet Kennzahlen nach Typ, Status und Trigger, Flows pro Umgebung und die von der Plattform suspendierten Flows.

**Wer ihn braucht:** Admins, die wissen wollen, was im Tenant läuft.

**Warum er wichtig ist:** Wildwuchs bei Flows wächst unbemerkt. Echte Zahlen jeden Tag machen daraus eine Routineprüfung, und ein unvollständiger Lesevorgang wird als Fehler gemeldet.

**Zeitplan:** täglich 02:00. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`, Benutzeranmeldung für das Inventar.

### Starter-Flow 9: F31 Agent-Inventar

**Was er tut:** Liest einmal täglich alle Copilot-Studio-Agents und meldet das Inventar, Agents pro Umgebung und die Agents, die in Quarantäne sind, nie oder lange nicht veröffentlicht wurden oder mit dem ganzen Tenant geteilt sind.

**Wer ihn braucht:** Admins, die eine tenantweite Agent-Liste wollen, ohne jede Umgebung zu öffnen.

**Warum er wichtig ist:** Agents vermehren sich, sobald Copilot Studio läuft. Ein vergessener, unveröffentlichter oder zu breit geteilter Agent ist ein Risiko, das niemand sieht, bis etwas bricht.

**Zeitplan:** täglich 02:15. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`, `pp_InactivityDays`.

### Starter-Flow 10: F32 Agents ohne Authentifizierung

**Was er tut:** Liest einmal täglich alle Copilot-Studio-Agents und meldet Agents ohne Authentifizierung oder mit nicht lesbarer Authentifizierung, nach Schwere sortiert: veröffentlichte vor unveröffentlichten. Er meldet sich nur, wenn etwas gefunden wurde.

**Wer ihn braucht:** Admins, die sicherstellen müssen, dass kein Agent versehentlich anonyme Nutzer bedient.

**Warum er wichtig ist:** Einen Agent ohne Authentifizierung erreicht jeder mit dem Link. Ein veröffentlichter ist der dringende Fall, deshalb steht er vorn.

**Zeitplan:** täglich 06:15. **Lizenz:** Standard. **Braucht:** `pp_AdminMail`.

### Einrichtungs-Helfer: F00 und F51

**F51 Einrichten und prüfen** startest du von Hand. Er prüft deine SharePoint-Site und Bibliothek, legt fehlende Ablageordner an und schickt dir eine Mail mit den Werten für die Umgebungsvariablen. Du kannst ihn beliebig oft laufen lassen.

**F00 Konfiguration prüfen** startest du ebenfalls von Hand. Er testet jede Verbindung mit einer harmlosen Leseaktion, prüft die nötigen Einstellungen und schickt dir das Ergebnis per Mail. Er ändert nichts.

---

## Connectors und Lizenzen

| Flow | Connector(s) | Lizenz |
|---|---|---|
| F01 Umgebungsinventar | Power Platform for Admins, Office 365 Outlook | Standard |
| F02 Neue Umgebungen erkennen | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F08 Kapazitätswarnung | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F11 DLP-Policy-Schnappschuss | Power Platform for Admins, SharePoint, Office 365 Outlook | Standard |
| F13 Nicht blockierbare Connectors | Power Platform for Admins, Office 365 Outlook | Standard |
| F15 Suspendierte Flows melden | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F17 App-Inventar | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F24 Flow-Inventar | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F31 Agent-Inventar | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F32 Agents ohne Authentifizierung | Power Platform for Admins V2, Office 365 Outlook | Standard |
| F00, F51 Einrichtung | SharePoint, Office 365 Outlook | Standard |

Microsoft-Lizenzen sind nicht enthalten. Die Flows sind kein Backup-System und noch nicht über Wochen mit echter Konfiguration im Dauerbetrieb belegt. Teste die Berichte zuerst. Ein Admin-Flow für den Betrieb liest den Ist-Zustand vollständig, prüft, dass der Lesevorgang nicht abgeschnitten wurde, und meldet erst dann. Ein unvollständiger Lesevorgang ist ein Fehler, nicht «nichts gefunden».

## Mehr als das Starter-Set

Die Pakete Standard (35 Flows) und Voll (51 Flows) ergänzen Berichte zu Freigaben, Agents und Verbindungen, Aufräum-Flows für inaktive Apps und alte Flows, Besitzerwechsel und Rollenprüfungen. Preise, Lieferung und die Option mit Einrichtung stehen auf der [Angebote-Seite (auf Englisch)](/offers/).

## Weiterlesen

- [Microsoft Power Platform API reference](https://learn.microsoft.com/en-us/rest/api/power-platform/)
- [Power Platform inventory API](https://learn.microsoft.com/en-us/power-platform/admin/inventory-api)
- [Power Platform inventory sample queries](https://learn.microsoft.com/en-us/power-platform/admin/inventory-sample-queries)
- [Power Platform for Admins V2 connector reference](https://learn.microsoft.com/en-us/connectors/powerplatformadminv2/)
- [Data loss prevention policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
