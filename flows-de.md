---
layout: page
title: "Admin-Flows"
description: "Zehn gratis AdminHelper-Flows melden dir per Mail, was es in deinem Power-Platform-Tenant gibt, was sich über Nacht geändert hat und wo ein Risiko entsteht. Nur lesend."
lang: de
permalink: "/de/flows/"
translation_url: "/flows/"
toc: true
---

Zehn Power-Automate-Flows behalten deinen Power-Platform-Tenant im Blick und schicken dir per Mail, was zählt: was es gibt, was sich über Nacht geändert hat und wo ein Risiko entsteht. Du liest am Morgen eine kurze Mail, statt dich durchs Admin Center zu klicken. Die Flows lesen nur. Sie ändern keine App, keinen Flow, keinen Agent und keine Einstellung, und keiner braucht eine Premium-Lizenz.

[This page in English](/flows/)

Das Starter-Set ist gratis. Du bekommst es per E-Mail über [kmupower.com](https://kmupower.com/vorlagen#adminhelper-starter). Wenn du mehr willst, findest du die [Angebote (auf Englisch)](/offers/): Standard (35 Flows, CHF 49), Voll (51 Flows, CHF 99) und das Default-Paket (CHF 79). Jedes bezahlte Paket gibt es auch mit Einrichtung per Fernzugriff (CHF 449, CHF 899 und CHF 479).

Diese Seite beschreibt AdminHelper Version 2.1.1 (November 2026).

## Was in deinem Postfach landet

| Du willst wissen | Flows | Wann sie schreiben |
|---|---|---|
| Was es im Tenant gibt | F01 Umgebungen, F17 Apps, F24 Flows, F31 Agents | jeden Morgen |
| Was sich seit gestern geändert hat | F02 neue Umgebungen, F11 DLP-Policies, F15 suspendierte Flows | nur bei einer Änderung |
| Wo sich ein Risiko aufbaut | F08 Kapazität, F13 Connectors, die DLP nicht blockieren kann, F32 Agents ohne Anmeldung | F13 jeden Montag, die anderen nur bei einem Befund |

Jeder Flow prüft, ob er die Liste vollständig gelesen hat, bevor er meldet. Bricht das Lesen ab, bekommst du eine Fehlermail statt einer Liste, die vollständig aussieht, es aber nicht ist.

## Deine ersten 10 Flows

### Starter-Flow 1: F01 Umgebungsinventar

**Was du bekommst:** jeden Morgen eine Liste aller Umgebungen deines Tenants mit Typ, Region, Managed-Status, Dataverse und Erstelldatum.

**Warum es zählt:** DLP, Backups, Kapazität und Sicherheitsprüfungen planst du pro Umgebung. Mit einer verlässlichen Liste weisst du, wofür du planst.

### Starter-Flow 2: F02 Neue Umgebungen erkennen

**Was du bekommst:** eine Mail am Morgen, wenn am Vortag Umgebungen angelegt wurden, mit Typ, Region und Managed-Status. Keine neue Umgebung, keine Mail.

**Warum es zählt:** In einer neuen Umgebung entstehen neue Apps, Flows und Daten. Du merkst es innerhalb eines Tages und legst DLP-Policy und Besitzer fest, bevor sie wächst.

### Starter-Flow 3: F08 Kapazitätswarnung

**Was du bekommst:** eine Warnung, sobald Datenbank-, Datei- oder Log-Kapazität deinen Schwellwert erreicht oder ein Wert nicht lesbar ist.

**Warum es zählt:** Ist die Kapazität des Tenants aufgebraucht, kannst du keine Umgebungen mehr anlegen, kopieren oder wiederherstellen. Du erfährst es, solange noch Zeit zum Aufräumen oder Zukaufen bleibt.

### Starter-Flow 4: F11 DLP-Policy-Schnappschuss

**Was du bekommst:** jede Nacht eine Kopie aller DLP-Policies als Tagesdatei in deiner SharePoint-Bibliothek und eine Mail, wenn eine Policy neu, gelöscht oder geändert ist.

**Warum es zählt:** Eine geänderte Connector-Gruppe kann Flows suspendieren oder einen Datenweg öffnen. Die Tagesdateien zeigen, wie eine Policy vor der Änderung aussah. Der Flow speichert die Dateien, sobald du den Testlauf ausschaltest. Den Ordner sollten nur Admins sehen, weil die Dateien die Namen der Bearbeiter enthalten.

### Starter-Flow 5: F13 Bericht nicht blockierbarer Connectors

**Was du bekommst:** jede Woche eine Liste der Connectors, die eine klassische DLP-Policy nicht blockieren kann, und welche deiner Apps und Flows sie nutzen.

**Warum es zählt:** Eine Policy kann vollständig aussehen und diese Connectors trotzdem offen lassen. Der Bericht zeigt, wo. In Managed Environments lassen sie sich mit Advanced Connector Policies ebenfalls einschränken.

### Starter-Flow 6: F15 Suspendierte Flows melden

**Was du bekommst:** eine Mail mit allen Cloud-Flows und Agent-Flows, die die Plattform suspendiert hat, mit Umgebung und direktem Link. Flows, die in den letzten 24 Stunden gespeichert wurden, sind markiert. Kein suspendierter Flow, keine Mail.

**Warum es zählt:** Ein suspendierter Flow steht still, ohne dass es jemand erfährt, etwa nach einer DLP-Änderung. Die Mail verweist auf die Detailseite des Flows, wo die Plattform den Grund zeigt.

### Starter-Flow 7: F17 App-Inventar

**Was du bekommst:** täglich einen Überblick über alle Canvas-, Model-driven- und Code-Apps: Summen, Apps pro Umgebung und die Apps, die zuerst einen Blick brauchen, weil sie in Quarantäne sind oder lange nicht geändert wurden.

**Warum es zählt:** Du siehst jede App, ohne jede Umgebung zu öffnen, und alte oder gesperrte Apps fallen von selbst auf.

### Starter-Flow 8: F24 Flow-Inventar

**Was du bekommst:** täglich Kennzahlen zu allen Cloud-Flows und Agent-Flows nach Typ, Status und Trigger, pro Umgebung, inklusive der suspendierten.

**Warum es zählt:** Wildwuchs bei Flows wächst unbemerkt. Eine tägliche Zahl macht daraus eine kurze Routineprüfung.

### Starter-Flow 9: F31 Agent-Inventar

**Was du bekommst:** täglich eine Liste aller Copilot-Studio-Agents pro Umgebung. Markiert sind die, die einen Blick brauchen: in Quarantäne, nie oder lange nicht veröffentlicht oder mit der ganzen Organisation geteilt.

**Warum es zählt:** Agents vermehren sich schnell, sobald Copilot Studio im Einsatz ist. Ein vergessener oder zu breit geteilter Agent ist ein Risiko, das niemand sieht, bis etwas schiefgeht.

### Starter-Flow 10: F32 Agents ohne Authentifizierung

**Was du bekommst:** eine Mail mit den Agents, die keine Authentifizierung haben oder deren Authentifizierung sich nicht lesen lässt. Veröffentlichte Agents stehen zuoberst. Kein Befund, keine Mail.

**Warum es zählt:** Einen Agent mit «Keine Authentifizierung» kann jeder nutzen, der den Link hat. Weisst du, welche Agents das sind, kannst du entscheiden, ob eine Datenrichtlinie die Anmeldung für alle Agents vorschreiben soll.

### Einrichtungs-Helfer: F00 und F51

**F51 Einrichten und prüfen** bereitet deine SharePoint-Bibliothek vor: Er prüft Site und Bibliothek, legt fehlende Ablageordner an und schickt dir die Werte für die Einstellungen per Mail. Seit Version 2.1.1 läuft er auch beim ersten Start auf einer leeren Site sauber durch. Du kannst ihn beliebig oft starten.

**F00 Konfiguration prüfen** testet jede Verbindung mit einer harmlosen Leseaktion und meldet dir, welche Einstellungen noch fehlen. Er ändert nichts.

---

## Einrichtung in fünf Schritten

1. Importiere die Lösung in eine eigene Governance-Umgebung, nicht in die Default-Umgebung. Alle Flows kommen ausgeschaltet an.
2. Lege die Verbindungen mit einem Konto an, das die Rolle Power-Platform-Administrator und ein Postfach für die Berichte hat.
3. Schalte F51 ein, starte ihn und trage die Werte aus seiner Mail in die Umgebungsvariablen ein.
4. Starte F00 und behebe, was er meldet.
5. Starte jeden Flow einmal von Hand, prüfe die Mail und lass ihn dann eingeschaltet. Bei F11 schaltest du den Testlauf aus, sobald der erste Bericht stimmt, damit die Tagesdateien gespeichert werden.

Gut zu wissen:

- Das Inventar hinter F02, F13, F15, F17, F24, F31 und F32 ist dasselbe, das auch das Power Platform Admin Center nutzt. Es zeigt neue und geänderte Elemente nach etwa 15 Minuten und lässt sich nur mit angemeldetem Benutzer lesen, nicht mit einem Service Principal.
- Verlangt dein Conditional Access MFA für Azure Resource Manager, lädt das Inventar unter Umständen nicht. Die Lösung beschreibt Microsoft auf der [Inventar-Seite](https://learn.microsoft.com/de-de/power-platform/admin/power-platform-inventory#known-limitations).
- Die Flows sind kein Backup und noch nicht über Wochen mit echter Konfiguration im Dauerbetrieb belegt. Teste die Berichte zuerst.

## Zeitplan und Connectors

Alle Zeiten sind mitteleuropäische Zeit. Alle Connectors sind Standard-Connectors, eine Microsoft-365-Lizenz mit Power Automate reicht also. Microsoft-Lizenzen sind nicht enthalten.

| Flow | Läuft | Connectors | Braucht als Einstellung |
|---|---|---|---|
| F01 Umgebungsinventar | täglich 01:30 | Power Platform for Admins, Office 365 Outlook | Admin-Mail |
| F02 Neue Umgebungen erkennen | täglich 02:30 | Power Platform for Admins V2, Office 365 Outlook | Admin-Mail |
| F08 Kapazitätswarnung | täglich 07:00 | Power Platform for Admins V2, Office 365 Outlook | Admin-Mail, Warnschwelle in Prozent |
| F11 DLP-Policy-Schnappschuss | täglich 01:00 | Power Platform for Admins, SharePoint, Office 365 Outlook | Admin-Mail, SharePoint-Site und Bibliothek, Testlauf aus |
| F13 Nicht blockierbare Connectors | montags 10:00 | Power Platform for Admins und V2, Office 365 Outlook | Admin-Mail |
| F15 Suspendierte Flows | täglich 06:45 | Power Platform for Admins V2, Office 365 Outlook | Admin-Mail |
| F17 App-Inventar | täglich 01:45 | Power Platform for Admins V2, Office 365 Outlook | Admin-Mail, Inaktivität in Tagen |
| F24 Flow-Inventar | täglich 02:00 | Power Platform for Admins V2, Office 365 Outlook | Admin-Mail |
| F31 Agent-Inventar | täglich 02:15 | Power Platform for Admins V2, Office 365 Outlook | Admin-Mail, Inaktivität in Tagen |
| F32 Agents ohne Authentifizierung | täglich 06:15 | Power Platform for Admins V2, Office 365 Outlook | Admin-Mail |
| F51 Einrichten und prüfen | von Hand | SharePoint, Office 365 Outlook | keine |
| F00 Konfiguration prüfen | von Hand | alle oben genannten, dazu Power Apps for Admins, Power Automate for Admins und Genehmigungen | keine |

## Mehr als das Starter-Set

Standard (35 Flows) und Voll (51 Flows) ergänzen Berichte zu Freigaben, Verbindungen und Rollen, Aufräumen inaktiver Apps und alter Flows sowie Besitzerwechsel. Flows, die etwas ändern, laufen zuerst im Testlauf und melden nur, was sie tun würden. Preise, Lieferung und die Option mit Einrichtung stehen auf der [Angebote-Seite (auf Englisch)](/offers/).

## Weiterlesen

- [Power Platform-Inventar](https://learn.microsoft.com/de-de/power-platform/admin/power-platform-inventory)
- [Power Platform inventory API](https://learn.microsoft.com/en-us/power-platform/admin/inventory-api)
- [Power Platform for Admins V2 connector reference](https://learn.microsoft.com/en-us/connectors/powerplatformadminv2/)
- [Connectors, die sich mit Datenrichtlinien nicht blockieren lassen](https://learn.microsoft.com/de-de/power-platform/admin/dlp-connector-classification#list-of-connectors-that-you-cant-block)
- [Advanced Connector Policies](https://learn.microsoft.com/de-de/power-platform/admin/advanced-connector-policies)
- [Dataverse-Kapazität: was beim Überschreiten passiert](https://learn.microsoft.com/de-de/power-platform/admin/capacity-storage#changes-for-exceeding-storage-capacity-entitlements)
- [Datenrichtlinien für Copilot-Studio-Agents](https://learn.microsoft.com/de-de/microsoft-copilot-studio/admin-data-loss-prevention)
