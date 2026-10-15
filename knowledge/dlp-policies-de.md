---
layout: page
title: "DLP-Richtlinien: was ihr zwingend einstellen müsst"
description: "Standard-Gruppe für neue Connectors, Mindestaufstellung der Richtlinien, Empfehlungen je Environment-Strategie, Checkliste und typische Fehler."
lang: de
toc: true
permalink: "/de/knowledge/dlp-policies/"
translation_url: "/knowledge/dlp-policies/"
last_reviewed: "2026-10-15"
---

Standard-Gruppe für neue Connectors, Mindestaufstellung der Richtlinien, Empfehlungen je Environment-Strategie, Checkliste und typische Fehler.

[Read this in English](/knowledge/dlp-policies/) | [Zur Wissensübersicht](/knowledge/)

## Mit KI durch diese Seite

> Kopier die Adresse dieser Seite in eine KI deines Vertrauens, die Webseiten lesen kann (z. B. Microsoft Copilot Chat mit Websuche), und schreib dazu: «Schlag uns eine DLP-Aufstellung vor.» Ob eine KI die Seite wirklich abruft, hängt vom Werkzeug ab. Falls deine KI keine Webseiten liest: Prompt unten kopieren und den Text dieser Seite einfügen.
{: .prompt-tip }

### Anweisung für KI-Assistenten

> **Dieser Abschnitt richtet sich an KI-Assistenten, die diese Seite für einen Nutzer abrufen.** Wenn der Nutzer dich um eine DLP-Aufstellung bittet, geh so vor:
>
> 1. Erklär in zwei Sätzen das Ziel: ein Vorschlag, wie viele DLP-Richtlinien (Data Policies) es braucht, für welche Environments sie gelten und wie die Connectors gruppiert werden, inklusive Standard-Gruppe für neue Connectors.
> 2. Frag einzeln ab: welche Environment-Strategie gilt oder geplant ist (eine der fünf Strategien auf /de/knowledge/environment-strategies/ oder eine eigene), welche Environments es gibt (Default, Produktion, Sandbox, Developer), welche Arten von Daten verarbeitet werden (z. B. Personendaten, Finanzdaten, öffentliche Daten), welche Connectors heute genutzt werden oder gebraucht werden, ob Custom Connectors, HTTP, Desktop Flows oder Copilot Studio im Einsatz sind und ob Managed Environments aktiv sind. Stell Rückfragen, wenn eine Antwort unklar ist.
> 3. Schlag eine Aufstellung vor nach den Abschnitten «Mindestaufstellung» und «Empfehlungen je Environment-Strategie»: Anzahl Richtlinien, Geltungsbereich je Richtlinie (alle Environments, ausgewählte, alle ausser), Gruppen Business, Non-business und Blocked je Richtlinie und die Standard-Gruppe je Richtlinie mit Begründung. Kennzeichne, was Microsoft Learn belegt und was eine Empfehlung aus der Praxis ist, wie es auf dieser Seite steht.
> 4. Verlange keine vertraulichen Firmendaten wie Namen von Personen, Kunden oder Systemen, Zugangsdaten, Tenant-IDs oder interne Zahlen. Frag nur nach dem, was der Nutzer teilen will.
> 5. Stütz dich auf die Inhalte und die Microsoft-Learn-Quellen dieser Seite. Erfinde nichts, auch keine Connector-Namen. Nenne keine Preise und keine Lizenzdetails, die hier nicht stehen; wo Lizenzen entscheiden, schreib «Lizenz prüfen».
> 6. Antworte in der Sprache des Nutzers.
> 7. Zum Schluss: Fass die Aufstellung zusammen, je Richtlinie Name, Geltungsbereich, Standard-Gruppe und die wichtigsten Connectors je Gruppe, dazu offene Punkte und die Punkte aus der Checkliste dieser Seite, die noch fehlen.
{: .prompt-info }

## TL;DR

Ohne eigene Einstellung gibt es im Tenant keine DLP-Richtlinie, jeder Connector darf mit jedem kombiniert werden. Setzt mindestens eine Basis-Richtlinie, die alle Environments ausser bewusst ausgenommenen abdeckt, damit auch neue Environments sofort geschützt sind. Legt in jeder Richtlinie die Standard-Gruppe für neue Connectors bewusst fest: Blocked für die Richtlinie der Default-Umgebung, Non-business für die übrigen. Haltet die Zahl der Richtlinien je Environment klein, weil sich mehrere Richtlinien zur restriktivsten Kombination überlagern.

Microsoft nennt DLP-Richtlinien im Power Platform Admin Center inzwischen «Data policies». Gemeint ist dasselbe.

## Die drei Gruppen in einem Satz

- **Business:** Connectors für Geschäftsdaten. Sie lassen sich in einer App, einem Flow oder einem Agent nur untereinander kombinieren.
- **Non-business:** Connectors für nicht geschäftliche Daten. Auch sie lassen sich nur untereinander kombinieren.
- **Blocked:** Diese Connectors sind dort, wo die Richtlinie gilt, gar nicht nutzbar.

Die Namen «Business» und «Non-business» haben keine eigene Bedeutung. Entscheidend ist, welche Connectors in derselben Gruppe stehen. Eine neue Richtlinie legt zu Beginn alle Connectors in Non-business.

## Zwingend: die Standard-Gruppe für neue Connectors

### Was sie bedeutet

Jede Richtlinie hat eine Standard-Gruppe (im Admin Center «Set default group»). In diese Gruppe fallen alle Connectors, die Microsoft **nach** dem Erstellen der Richtlinie zur Plattform hinzufügt. Ab Werk ist das Non-business. Ihr könnt sie auf Business oder Blocked ändern.

### Was passiert, wenn Microsoft neue Connectors hinzufügt

- **Standard-Gruppe Non-business:** Der neue Connector ist sofort nutzbar, aber nur zusammen mit anderen Non-business-Connectors. Mit euren Business-Connectors lässt er sich nicht kombinieren.
- **Standard-Gruppe Business:** Der neue Connector darf sofort mit euren Geschäftsdaten zusammenarbeiten, ohne dass ihn jemand geprüft hat. Das ist die riskanteste Einstellung.
- **Standard-Gruppe Blocked:** Der neue Connector ist gesperrt, bis ein Admin ihn bewusst einstuft. Ausnahme: Neue Connectors, die nicht blockierbar sind, landen trotzdem in Non-business.
- **Desktop-Flow-Module:** Sie werden nur durchgesetzt, wenn ihr sie ausdrücklich einer Gruppe zuweist. Nicht zugewiesene Module sind nicht gesperrt, auch wenn die Standard-Gruppe Blocked ist.

### Unsere Empfehlung und warum

- **Richtlinie für die Default-Umgebung: Blocked.** Microsoft empfiehlt das ausdrücklich, damit neue Connectors dort unbenutzbar bleiben, bis ein Admin sie geprüft hat. Auf die Default-Umgebung hat jede Person im Unternehmen Zugriff.
- **Alle anderen Richtlinien: Non-business.** Das ist die Empfehlung in der allgemeinen Doku: neue Connectors in Non-business lassen und erst nach einer Prüfung in Business oder Blocked verschieben. So können sie keine Geschäftsdaten abgreifen und brechen trotzdem keine bestehenden Lösungen.
- **Nie Business als Standard-Gruppe.** Microsoft rät davon ab. Ein ungeprüfter Connector hätte sofort Zugriff auf die Kombination mit euren Geschäftsdaten.
- **Empfehlung aus der Praxis:** Basis-Richtlinien, die wie bei Microsoft vorgeschlagen alles ausser Microsoft 365 und Standarddiensten sperren, ebenfalls mit Blocked als Standard-Gruppe. Sonst wird die Sperrliste mit jedem neuen Connector löchrig. Plant dazu eine regelmässige Durchsicht neuer Connectors ein.

## Mindestaufstellung: wie viele Richtlinien?

Null ist zu wenig. Ohne Richtlinie dürfen Apps, Flows und Agents jeden Connector mit jedem kombinieren. Das gilt auch für jedes Environment, das ihr aus allen Richtlinien ausnehmt.

Microsoft schlägt als Startpunkt diese Aufstellung vor. Die Zählung als «mindestens zwei, oft drei» ist eine Empfehlung aus der Praxis.

1. **Basis-Richtlinie, restriktiv.** Geltungsbereich «Exclude certain environments»: alle Environments ausser Produktion und bewusst ausgenommenen. Erlaubt Microsoft 365 und Standarddienste, alles andere gesperrt. Sie gilt automatisch für die Default-Umgebung und für jedes neu erstellte Environment.
2. **Richtlinie für Produktion.** Geltungsbereich «Add multiple environments»: nur die ausgewählten Produktionsumgebungen. Die Connectors legt ihr mit dem Fachbereich oder Projekt fest.
3. **Optional: Richtlinie für gemeinsame Produktivitäts- oder Ausnahme-Environments.** Etwas offener als die Basis, zum Beispiel mit Azure-Diensten, für Environments, deren Maker-Liste ihr steuert.

Für die Default-Umgebung empfiehlt Microsoft eine eigene, strenge Richtlinie. Ist sie ein Managed Environment, sogar alle Connectors zu sperren, was über Advanced Connector Policies geht.

### Wie sich Richtlinien überlagern

- Alle Richtlinien, die für ein Environment gelten, werden gemeinsam ausgewertet. Es gibt keine strenge Hierarchie zwischen Tenant- und Environment-Richtlinien.
- **Blocked gewinnt immer.** Sperrt eine einzige Richtlinie einen Connector, ist er im Environment gesperrt.
- Bei Business und Non-business gilt die restriktivste Gruppierung. Drei Richtlinien können die Connectors in bis zu acht Gruppen zerteilen, die sich nicht mischen lassen. Darum empfiehlt Microsoft möglichst wenige Richtlinien je Environment.
- Environment-Richtlinien können Tenant-Richtlinien nicht übersteuern, nur zusätzlich einschränken.

### Geltungsbereich

- **Add all environments:** alle Environments, auch neue.
- **Add multiple environments:** nur die ausgewählten.
- **Exclude certain environments:** alle ausser den ausgewählten, auch neue.
- **Environment-Richtlinie:** genau ein Environment. Anlegen dürfen sie Environment Admins, in Environments mit Dataverse braucht es System Administrator. Tenant-Richtlinien braucht die Rolle Power Platform Administrator.

Microsoft empfiehlt, zentral mit Tenant-Richtlinien zu steuern und Environment-Richtlinien nur für Custom Connectors oder Ausnahmen zu nutzen.

## Empfehlungen je Environment-Strategie

Die Strategien sind auf der Seite [Fünf Environment-Strategien](/de/knowledge/environment-strategies/) beschrieben. Die Zuordnung unten ist eine Empfehlung aus der Praxis auf Basis der Microsoft-Empfehlungen oben. Für alle gilt: Default-Umgebung streng, Standard-Gruppe dort Blocked.

- **1. Schlank:** Basis-Richtlinie für alles ausser Produktion, inklusive Default. Eine Richtlinie nur für die Produktion mit den Connectors, die eure Geschäftslösungen brauchen. Die Sandbox nicht aus allen Richtlinien ausnehmen, sonst ist dort alles erlaubt.
- **2. Drei Stufen je Lösung:** Dev etwas offener zum Ausprobieren, Test und Prod mit derselben Gruppierung, damit eine Lösung beim Wechsel nach Prod nicht plötzlich gegen eine Richtlinie verstösst.
- **3. Maker-Sandkasten mit Routing:** Neue Developer Environments entstehen laufend. Darum braucht es eine Richtlinie mit «Exclude certain environments» oder Regeln über Environment Groups, damit jedes neue Environment sofort abgedeckt ist. Advanced Connector Policies lassen sich über Environment Groups verteilen.
- **4. Nach Abteilung:** Eine Richtlinie je Schutzbedarf, nicht je Abteilung. Bereiche mit sensiblen Daten wie HR oder Finance bekommen eine strengere Richtlinie mit kurzer Business-Liste.
- **5. Regional oder regulatorisch:** Eine Richtlinie je Region. Connectors zu Diensten ausserhalb der Region sperren oder über Endpunkt-Filter einschränken. Tenant Isolation ergänzt das für Connectors mit Microsoft-Entra-Anmeldung.

## Was ihr freigeben und was ihr sperren solltet

### Nicht blockierbare Connectors

Einige Connectors lassen sich mit klassischen Data Policies nicht sperren, nur Business oder Non-business zuweisen. Dazu gehören die Microsoft-365-Standard-Connectors wie SharePoint, OneDrive for Business, Office 365 Outlook, Microsoft Teams, Excel Online (Business), Planner und Power BI sowie Kern-Connectors der Plattform wie Dataverse, Approvals, Notifications und Microsoft Copilot Studio. Mit Advanced Connector Policies lassen sie sich in Managed Environments trotzdem sperren. In Environments ohne Managed Environments bleiben sie nicht blockierbar.

Office 365 Outlook kann E-Mails versenden und ist nicht blockierbar. Microsoft empfiehlt dafür Regeln in Exchange, die E-Mails aus Apps und Flows an externe Empfänger sperren.

### HTTP-Connectors

HTTP, HTTP Webhook und «When an HTTP request is received» lassen sich wie jeder andere Connector einstufen. In der Default-Umgebung empfiehlt Microsoft Non-business oder Blocked und für HTTP eigene Environments mit eingeschränkter Maker-Liste. Achtung: Laut Microsoft Learn kann die Einstufung der HTTP-Connectors Child Flows beeinflussen. Testet das, bevor ihr HTTP sperrt.

### Connector-Endpunkt-Filter

Für einige Connectors legt ihr fest, welche Ziele erlaubt sind: HTTP, HTTP mit Microsoft Entra ID, HTTP Webhook, SQL Server, Azure Blob Storage, SMTP sowie Browser Automation und UI Automation in Desktop Flows. Die Regeln sind eine geordnete Liste aus Allow und Deny, die letzte Regel ist immer `*`, ab Werk Allow. Die Funktion ist in Preview. Sie wirkt nur auf feste Endpunkte, nicht auf Werte aus Variablen oder Umgebungsvariablen.

### Aktions-Steuerung (Connector action control)

Für blockierbare Connectors erlaubt oder sperrt ihr einzelne Aktionen, zum Beispiel Lesen erlaubt, Ändern gesperrt. Ihr legt auch fest, ob neue Aktionen des Connectors automatisch erlaubt oder gesperrt sind. Für nicht blockierbare und für Custom Connectors gibt es das nicht. Trigger lassen sich nur per PowerShell steuern.

### Custom Connectors

- **Tenant-Richtlinie:** Einstufung über URL-Muster des Hosts, als geordnete Liste. Die letzte Regel `*` steht ab Werk auf «Ignore». Damit sind Custom Connectors mit Business und Non-business kombinierbar, solange keine andere Richtlinie sie einstuft.
- **Environment-Richtlinie:** Einstufung einzeln nach Name. Nicht eingestufte Custom Connectors fallen in die Standard-Gruppe.
- **Default-Umgebung:** Microsoft empfiehlt, alle URL-Muster zu sperren und nur einzelne APIs gezielt freizugeben, immer über HTTPS.

### Desktop Flows

Damit Desktop-Flow-Module in Richtlinien erscheinen, schaltet ihr in den Tenant-Einstellungen «Show desktop flow actions in DLP policies» ein. Diese Einstellung lässt sich danach nicht mehr ändern. Prüft danach jede Richtlinie: Module wirken nur, wenn ihr sie ausdrücklich einer Gruppe zuweist, und nicht konforme Desktop Flows werden pausiert.

### Copilot Studio

Data Policies gelten für Agents in allen Tenants, Ausnahmen sind nicht mehr möglich. Wichtige Connectors für Agents:

- «Chat without Microsoft Entra ID authentication in Copilot Studio» sperren, wenn Agents nur mit Anmeldung erreichbar sein sollen.
- Wissensquellen: «Knowledge source with public websites and data», «Knowledge source with SharePoint and OneDrive» und «Knowledge source with documents», jeweils «in Copilot Studio».
- Kanäle: zum Beispiel «Direct Line channels in Copilot Studio» für Websites und eigene Apps.
- HTTP sperrt auch den Knoten «HTTP request» in Agents.

Microsoft weist darauf hin, dass neuere Copilot-Studio-Connectors meist in der Standard-Gruppe Non-business landen. Ein weiterer Grund, die Standard-Gruppe bewusst zu setzen.

## Checkliste

- [ ] Inventar: welche Environments gibt es, welche Connectors werden genutzt
- [ ] Basis-Richtlinie mit «Exclude certain environments» oder «Add all environments» angelegt
- [ ] Default-Umgebung durch eine strenge Richtlinie abgedeckt
- [ ] Standard-Gruppe in jeder Richtlinie bewusst gesetzt: Blocked für Default, sonst Non-business
- [ ] Kein Environment aus allen Richtlinien ausgenommen, ausser mit dokumentierter Begründung
- [ ] Höchstens zwei Richtlinien je Environment (Empfehlung aus der Praxis)
- [ ] Nicht blockierbare Connectors bewusst Business oder Non-business zugeordnet
- [ ] HTTP-Connectors eingestuft, Child Flows getestet
- [ ] Endpunkt-Filter für HTTP, SQL Server und SMTP geprüft
- [ ] Regel für Custom Connectors (URL-Muster) gesetzt, `*` nicht auf Ignore belassen, wo das nicht gewollt ist
- [ ] Desktop-Flow-Module sichtbar geschaltet und eingestuft
- [ ] Copilot-Studio-Connectors (Anmeldung, Wissensquellen, Kanäle) eingestuft
- [ ] Fehlermeldung mit Kontakt und Link zu euren Regeln gesetzt (`Set-PowerAppDlpErrorSettings`)
- [ ] Richtlinien und Ausnahmeprozess für Maker dokumentiert, zum Beispiel im Power Platform Hub
- [ ] Wirkung vor dem Speichern geprüft: welche Apps, Flows und Agents verstossen danach
- [ ] Regelmässige Durchsicht neuer Connectors eingeplant

## Typische Fehler

- **Keine Richtlinie.** Ab Werk existiert keine. Jeder Connector ist mit jedem kombinierbar.
- **Standard-Gruppe nie angeschaut.** Neue Connectors landen ungeprüft in Non-business und sind dort sofort nutzbar, auch in der Default-Umgebung.
- **Business als Standard-Gruppe.** Ungeprüfte Connectors kombinieren sich sofort mit euren Geschäftsdaten.
- **Test- oder Dev-Environments aus allen Richtlinien ausgenommen.** Dort gilt dann gar keine Regel.
- **Zu viele überlappende Richtlinien.** Die Connectors zerfallen in viele kleine Gruppen, Maker verstehen die Fehlermeldungen nicht mehr.
- **Richtlinie ohne Prüfung geändert.** Bestehende Flows werden innerhalb von 24 Stunden pausiert, Verbindungen deaktiviert.
- **Desktop-Flow-Module eingeschaltet, aber nicht eingestuft.** Sie wirken dann nicht, oder Desktop Flows werden unerwartet pausiert, wenn ihr die neuen Module beim Speichern übersehen habt.
- **Auf Endpunkt-Filter verlassen, obwohl Maker Variablen nutzen.** Dynamische Endpunkte werden nicht geprüft.

## Prompt für die KI eures Vertrauens

Für KI-Werkzeuge, die keine Webseiten lesen: Kopiert den Prompt, ersetzt die letzte Zeile durch den Text dieser Seite von «Die drei Gruppen in einem Satz» bis «Typische Fehler» und gebt ihn in eure KI. Prüft das Ergebnis im Team, bevor ihr es umsetzt.

```text
Du bist ein erfahrener Berater für Microsoft Power Platform Governance. Hilf mir, unsere DLP-Richtlinien (Data Policies) aufzustellen.

Vorgehen:
1. Frag mich einzeln: unsere Environment-Strategie, welche Environments es gibt, welche Arten von Daten wir verarbeiten, welche Connectors wir nutzen, ob Custom Connectors, HTTP, Desktop Flows oder Copilot Studio im Einsatz sind und ob Managed Environments aktiv sind. Stell Rückfragen, wenn eine Antwort unklar ist.
2. Schlag eine Aufstellung vor: Anzahl Richtlinien, Geltungsbereich je Richtlinie, Gruppen Business, Non-business und Blocked und die Standard-Gruppe für neue Connectors je Richtlinie, jeweils mit Begründung.
3. Fass am Ende zusammen: je Richtlinie Name, Geltungsbereich, Standard-Gruppe und wichtigste Connectors je Gruppe, dazu offene Punkte und fehlende Punkte aus der Checkliste.

Regeln:
- Verwende ausschliesslich meine Antworten, den Text unten und gesichertes Wissen zu Power Platform. Erfinde nichts, auch keine Connector-Namen.
- Frag nicht nach vertraulichen Firmendaten. Ich teile, was ich teilen will.
- Nenne keine Preise und erfinde keine Lizenzdetails. Wo Lizenzen entscheidend sind, schreibe «Lizenz prüfen».
- Schreibe auf Deutsch, in Schweizer Schreibweise, klar und ohne Floskeln. Fachbegriffe wie Connector, Environment, Business, Non-business, Blocked und Managed Environment bleiben englisch.

Der Text der Seite:
[Hier den Text dieser Seite von «Die drei Gruppen in einem Satz» bis «Typische Fehler» einfügen.]
```

## Weiterlesen

Die Mechanik hinter Standard-Gruppe, Aktions-Steuerung und Endpunkt-Filter erklärt der Beitrag [DLP ist eine Leitplanke, keine Mauer](/de/posts/gov-dlp-in-practice/). Passend dazu: [Fünf Environment-Strategien](/de/knowledge/environment-strategies/) und [die 25 Fragen zur Governance-Strategie](/de/knowledge/governance-questions-top-25/).

## Quellen

Alle Aussagen geprüft am 15.10.2026 gegen Microsoft Learn. Als «Empfehlung aus der Praxis» gekennzeichnete Punkte stammen nicht wörtlich von Microsoft.

- [Microsoft Learn: Data policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
- [Microsoft Learn: Manage data policies](https://learn.microsoft.com/en-us/power-platform/admin/prevent-data-loss)
- [Microsoft Learn: Connector classification](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification)
- [Microsoft Learn: Combined effect of multiple data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-combined-effect-multiple-policies)
- [Microsoft Learn: Connector endpoint filtering (preview)](https://learn.microsoft.com/en-us/power-platform/admin/connector-endpoint-filtering)
- [Microsoft Learn: Connector action control](https://learn.microsoft.com/en-us/power-platform/admin/connector-action-control)
- [Microsoft Learn: Advanced connector policies](https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies)
- [Microsoft Learn: Implement a data policy strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
- [Microsoft Learn: Data loss prevention (DLP) policy creation in Power Automate](https://learn.microsoft.com/en-us/power-automate/prevent-data-loss)
- [Microsoft Learn: Configure data policies for agents in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)

Orientierungshilfe, keine Rechts- oder Lizenzberatung. Prüfe Lizenz- und Produktdetails vor der Umsetzung.
