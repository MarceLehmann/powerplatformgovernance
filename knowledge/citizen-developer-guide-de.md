---
layout: page
title: "Citizen-Developer im Unternehmen: von der persönlichen Umgebung bis zur geteilten Lösung"
description: "Vier Stufen vom persönlichen Flow bis zur geteilten Lösung: wer baut wann wo, wann der Wechsel nötig ist, was Lizenzen entscheiden und wie ihr startet."
lang: de
toc: true
permalink: "/de/knowledge/citizen-developer-guide/"
translation_url: "/knowledge/citizen-developer-guide/"
last_reviewed: "2026-10-21"
---

Vier Stufen vom persönlichen Flow bis zur geteilten Lösung: wer baut wann wo, wann der Wechsel nötig ist, was Lizenzen entscheiden und wie ihr startet.

[Read this in English](/knowledge/citizen-developer-guide/) | [Zur Wissensübersicht](/knowledge/)

## Mit KI durch diese Seite

> Kopiert die Adresse dieser Seite in eine KI eures Vertrauens, die Webseiten lesen kann (z. B. Microsoft Copilot Chat mit Websuche), und schreibt dazu: «Führ mich durch diese Seite.» Ob eine KI die Seite wirklich abruft, hängt vom Werkzeug ab. Falls eure KI keine Webseiten liest: Prompt unten kopieren und den Guide von dieser Seite einfügen.
{: .prompt-tip }

### Anweisung für KI-Assistenten

> **Dieser Abschnitt richtet sich an KI-Assistenten, die diese Seite für einen Nutzer abrufen.** Wenn der Nutzer dich bittet, ihn durch diese Seite zu führen, geh so vor:
>
> 1. Erklär in zwei Sätzen das Ziel: eine begründete Regelung dafür, wer in der Organisation wann und wo bauen darf, vom persönlichen Flow bis zur geteilten Lösung.
> 2. Frag die Punkte einzeln ab: Wie viele Maker gibt es oder sollen es werden, was liegt heute in der Default-Umgebung, wie viele Personen nutzen die wichtigsten Lösungen, welche Daten berühren sie, was passiert im Tagesgeschäft, wenn sie ausfallen, welche Lizenzen vorhanden sind und ob Managed Environments aktiviert ist. Stell Rückfragen, wenn eine Antwort unklar ist.
> 3. Ordne mit dem Nutzer die vorhandenen Lösungen den vier Stufen zu und begründe jede Zuordnung mit den Entscheidungskriterien dieser Seite.
> 4. Erarbeite danach die Regeltabelle «Wer baut wann wo» für die Organisation des Nutzers und die ersten Schritte, ein Punkt auf einmal.
> 5. Verlange keine vertraulichen Firmendaten wie Namen von Personen, Kunden oder Systemen, Zugangsdaten oder interne Zahlen. Frag nur nach dem, was der Nutzer teilen will. Rollen oder Gruppen statt Namen genügen.
> 6. Stütz dich auf die Inhalte und die Microsoft-Learn-Quellen dieser Seite. Erfinde nichts. Nenne keine Preise und keine Lizenzdetails, die hier nicht stehen; wo Lizenzen entscheiden, schreib «Lizenz prüfen». Schwellenwerte wie Nutzerzahlen legt die Organisation fest, du erfindest keine. Die Empfehlung dieser Seite (höchstens 2 Personen für persönliche Produktivität) nennst du als Ausgangspunkt, nicht als Vorgabe.
> 7. Antworte in der Sprache des Nutzers.
> 8. Zum Schluss: Fass das Ergebnis zusammen mit der Zuordnung der Lösungen zu den Stufen, der Regeltabelle, offenen Punkten und nächsten Schritten.
{: .prompt-info }

## TL;DR

Citizen-Developer bauen in vier Stufen. Stufe 1 ist die persönliche Hilfe in der Default-Umgebung, Stufe 2 das Teilen im kleinen Kreis mit Limits, Stufe 3 die eigene Entwicklungsumgebung per Environment Routing und Stufe 4 der Betrieb über Solutions und Pipelines in Test und Prod. Ob eine Lösung die Stufe wechseln muss, entscheiden sechs Signale. Vier davon sind der Schnellcheck: Zahl der Nutzer, Datenklasse, Abhängigkeit des Tagesgeschäfts und Schnittstellen zu anderen Systemen. Dazu kommen Zusammenarbeit und Besitz. Lizenzen bestimmen mit, was ihr einsetzen könnt: Routing, Environment Groups und Pipelines setzen Managed Environments voraus. Managed Environments ist eine Funktion, keine eigene Lizenz, und verlangt Lizenzen mit Premium-Nutzungsrechten.

## Die vier Stufen im Überblick

| Stufe | Wo | Wofür | Wer baut |
|---|---|---|---|
| 1. Persönlich | Default-Umgebung, umbenannt in «Personal Productivity» | Eigene Hilfen, die nur die Person selbst nutzt | Alle Maker |
| 2. Teilen im kleinen Kreis | Gleiche Umgebung wie Stufe 1 oder persönliche Dev-Umgebung, mit Freigabelimits | Hilfen für wenige Personen innerhalb eurer Grenze, keine kritischen Daten | Maker |
| 3. Entwickeln | Persönliche Developer Environments per Routing, bei Bedarf Shared Development | Bauen, Ausprobieren, Lösungen für andere vorbereiten | Maker und fortgeschrittene Maker |
| 4. Betreiben | Test und Prod, ausgeliefert über Solutions und Pipelines | Lösungen, die das Tagesgeschäft tragen | Gebaut in Dev, in Prod wird nicht gebaut |

## Stufe 1: Persönliche Produktivität

Die Default-Umgebung ist für persönliche Produktivität gedacht, nicht für dauerhafte Geschäftslösungen. Alle Mitarbeitenden im Tenant haben dort Zugriff. Sie lässt sich nicht auf eine Sicherheitsgruppe beschränken. Darum gelten hier die engsten Regeln.

- **Umbenennen:** Microsoft empfiehlt einen sprechenden Namen, zum Beispiel «Personal Productivity Environment». Dieser Guide nennt sie kurz «Personal Productivity». Wer den Namen liest, erfährt, wofür die Umgebung da ist.
- **Freigabe an «Everyone» aus:** Die Gruppe enthält alle, die sich je am Tenant angemeldet haben, auch Gäste, und ihre Mitglieder sind nicht einsehbar. Microsoft liefert die Freigabe an Everyone standardmässig ausgeschaltet. Lasst das so.
- **Strenge DLP:** Eine eigene, strengere Richtlinie für die Default-Umgebung. Neue Konnektoren erst nach Prüfung zulassen.
- **Willkommenstext:** Ein eigener Text mit Regeln und Ansprechperson ersetzt Microsofts generische Ersteinrichtungshilfe. Der Maker-Willkommensinhalt ist eine Funktion der Managed Environments. Dafür aktiviert ihr Managed Environments zuerst für die Default-Umgebung.
- **Bestand klären:** Was heute schon in der Default-Umgebung liegt, braucht eine Entscheidung je Lösung: bleibt (persönlich), wandert (geschäftlich) oder wird abgeschaltet (verwaist). Besitzer informieren.

Wählt für die Default-Umgebung ein Modell und mischt nicht: nur persönliche Produktivität, geduldet aber überwacht, oder Maker per Routing umgeleitet. Eine technische Vollsperre gibt es nicht, Maker können laut Microsoft jederzeit in andere Umgebungen wechseln, auch in die Default-Umgebung. Leitet ihr Maker um, braucht jeder zuerst eine benannte Alternative zum Bauen. Sonst umgehen Maker die Regel genau an dem Tag, an dem sie greift. Diese Alternative ist Stufe 3.

## Stufe 2: Teilen im kleinen Kreis

Eine persönliche Lösung bleibt persönlich, solange nur die Person selbst sie braucht. Sobald andere sie nutzen, verschiebt sich die Verantwortung. Dann gilt: kleiner Kreis, enge Grenzen, klare Besitzerin. Den kleinen Kreis definiert eure Grenze, unsere Empfehlung ist die Besitzerin plus eine weitere Person.

**Unsere Haltung:** Für persönliche Produktivität empfehlen wir höchstens 2 Personen, also die Besitzerin und eine weitere. Wird eine Lösung von mehr Personen genutzt, gilt sie als produktiv mit Abhängigkeiten und gehört in Dev, Test und Prod (Stufe 4). Ein absolutes Richtig oder Falsch gibt es dabei nicht. Jede Organisation legt die Grenze selbst fest, die 20 Personen aus dem Microsoft-Beispiel weiter unten sind nur ein Beispiel.

**Ab wann ist eine Lösung nicht mehr persönlich?** Prüft zuerst diese vier Signale. Trifft eines zu, ist Stufe 1 vorbei. Zwei weitere Signale, Zusammenarbeit und Besitz, stehen bei den Entscheidungskriterien weiter unten.

| Signal | Frage | Wenn ja |
|---|---|---|
| Nutzer | Nutzen mehr Personen als eure Grenze die Lösung regelmässig (unsere Empfehlung: höchstens 2)? | Sie gilt als produktiv mit Abhängigkeiten: Stufe 4 mit Dev, Test und Prod. Darunter bleibt es bei Stufe 2 mit Limit |
| Datenklasse | Berührt sie vertrauliche Daten wie Personal, Finanzen oder Kundendaten? | Nicht in die Default-Umgebung. Stufe 3 oder 4, DLP der Zielumgebung prüfen |
| Tagesgeschäft | Steht Arbeit still, wenn die Lösung ausfällt? | Stufe 4 |
| Schnittstellen | Liest oder schreibt sie in Fremdsysteme, per Konnektor oder HTTP? | DLP-Prüfung, mindestens Stufe 3 |

Dazu eine Kontrollfrage: Wer übernimmt die Lösung, wenn die Besitzerin geht? Gibt es keine Antwort, ist die Lösung nicht bereit fürs Teilen.

**Freigabelimits** (Managed Environments) begrenzen, wie breit Maker teilen dürfen:

- Canvas Apps: Freigabe an Sicherheitsgruppen ausschliessen und die Zahl der Einzelpersonen begrenzen. Microsoft nennt in einem PowerShell-Beispiel eine Grenze von 20 Personen. Das ist nur ein Beispiel. Wir empfehlen für persönliche Produktivität höchstens 2 Personen. Welche Zahl für euch passt, legt ihr fest.
- Solution-aware Cloud Flows: Teilen erlauben oder ganz sperren.
- Agents in Copilot Studio: getrennt steuerbar für Editoren und Betrachter.
- Freigabe an «Everyone» bleibt aus.

Die Limits greifen nur bei neuem Teilen. Was vorher schon breiter geteilt war, läuft weiter, bis jemand die Freigabe zurücknimmt. Nach dem Setzen kann es bis zu einer Stunde dauern, bis die Regeln gelten. Plant darum eine Mitteilung an die Besitzer bestehender Lösungen ein.

Für ein grosses Publikum halten wir Teilen für das falsche Werkzeug. Eine Lösung, die viele nutzen sollen, gehört in Stufe 4.

## Stufe 3: Dev-Umgebung mit Environment Routing und Environment Groups

Hier bauen Maker, ohne die Default-Umgebung zu belasten. Das entspricht dem Muster «Maker-Sandkasten mit Routing» der Seite [Fünf Environment-Strategien](/de/knowledge/environment-strategies/).

**Environment Routing** leitet Maker beim Öffnen von Power Apps, Power Automate, Copilot Studio oder Power Automate für Desktop in eine persönliche Developer Environment. Ist noch keine vorhanden, wird sie angelegt. Die Eckpunkte:

- Nur Power Platform Admins aktivieren Routing. Die Einstellung ist standardmässig aus (Admin Center, Verwalten, Tenant-Einstellungen, Environment Routing).
- Die angelegten Umgebungen sind Managed Environments. Die Default-Umgebung selbst muss nicht verwaltet sein.
- Eine Sicherheitsgruppe in der Regel bestimmt, wer geroutet wird. Alle anderen bleiben in der Default-Umgebung.
- Mehrere Regeln werden von oben nach unten geprüft, die erste passende gilt. Eine Regel für «Everyone» steht zuletzt.
- Misslingt das Anlegen, landet der Maker in der Default-Umgebung.
- Maker erhalten in ihrer Umgebung die Admin-Rolle. Gehört die Umgebung zu einer Environment Group, können sie deren Regeln nicht ändern.
- Die Umgebungen belasten das Dataverse-Kontingent des Tenants nicht.

**Environment Groups** bündeln Regeln für viele Umgebungen: Freigabelimits, Willkommensinhalt, Solution-Checker-Stufe, Backup-Aufbewahrung und KI-generierte Beschreibungen. Eine neue Umgebung erbt die veröffentlichten Regeln. Nur veröffentlichte Regeln gelten, vergesst das Veröffentlichen also nicht. Setzt die Regeln, bevor ihr bestehende Umgebungen in die Gruppe legt, denn bei Freigabelimits, Willkommensinhalt, Solution Checker, Nutzungsauswertung, Backup-Aufbewahrung und KI-Einstellungen überschreiben die Gruppenregeln die eigenen Einstellungen der Umgebung. Eine Umgebung kann nur in einer Gruppe sein und muss verwaltet sein.

Für das Muster passen vier Gruppen: Development, Shared Development, Test und Production. Routing legt neue Developer Environments in die Gruppe Development. Für Projekte mit mehreren Makern gibt es zusätzlich eine gemeinsame Entwicklungsumgebung (Shared Development).

Voreingestellt sind in Routing-Umgebungen laut Microsoft: Teilen nur mit bis zu fünf Einzelpersonen, ohne Sicherheitsgruppen, Solution Checker auf «Warn» und Nutzungsauswertung an. Das ist Microsofts Voreinstellung, unsere Empfehlung für persönliche Produktivität liegt mit 2 Personen tiefer. Ein Willkommenstext ist nicht gesetzt. Schreibt ihn über die Gruppe.

**Zwei Stolperstellen**

- Wer eine Premium- oder Developer-Plan-Lizenz hat, kann Developer Environments weiterhin von Hand anlegen. Diese liegen nur in der Gruppe, wenn beim Anlegen eine gewählt wurde, sonst ohne eure Regeln. Routing allein schliesst das nicht aus, prüft also das Inventar regelmässig.
- Der Developer Plan ändert sich. Nach Microsoft Learn endet am 15. November 2026 die Neuanlage nicht verwalteter Developer Environments, und die Anmeldung zum Developer Plan legt keine Developer Environment mehr an. Bestehende nicht verwaltete Developer Environments werden ab dem 15. Dezember 2026 ausgesetzt (Apps, Flows, Agents und Daten sind dann nicht verfügbar) und ab dem 15. Januar 2027 gelöscht. Routing legt verwaltete Umgebungen an und ist davon nicht betroffen. Maker exportieren ihre Lösungen vor dem 15. Dezember. Admins filtern im Admin Center nach Typ «Developer» und «Managed = No» und entscheiden je Umgebung: verwalten oder Lösungen migrieren.

Developer Environments ohne Nutzung deaktiviert Microsoft nach 30 Tagen, verwaltete Developer Environments (auch die per Routing angelegten) nach 60 Tagen. 15 Tage nach der Deaktivierung werden sie gelöscht, mit Warnmails vorher. Sagt den Makern das beim Start, sonst kommt die Rückfrage nach dem Verlust.

## Stufe 4: ALM nach Test und Prod

Sobald eine Lösung das Tagesgeschäft trägt, wechselt sie von der Werkbank in den Betrieb. Dafür gelten feste Regeln:

- **Solutions:** Die Lösung liegt in einer Solution. Gebaut wird nur in Dev, als unmanaged Solution.
- **Managed in Test und Prod:** Dorthin kommen nur managed Solutions. Änderungen von Hand verhindert erst die Einstellung «Block unmanaged customizations» (standardmässig aus, auch als Environment-Group-Regel verfügbar). Schaltet sie für Test und Prod ein.
- **Solution Checker** vor jeder Auslieferung. Die Durchsetzung beim Import in eine verwaltete Umgebung hat drei Stufen: Aus, Warnen, Blockieren. Blockiert werden nur kritische Befunde. Unsere Empfehlung: Blockieren in Test und Prod, Warnen in Dev.
- **Pipelines:** Maker lösen die Auslieferung aus ihrer Dev-Umgebung aus. Dasselbe Artefakt läuft die Stufen der Reihe nach durch und kann Test nicht überspringen. Genehmigungen vor Prod lassen sich einbauen. Jede Auslieferung speichert die Solution im Pipeline-Host.
- **Besitz in Prod:** Microsoft empfiehlt, dass in Produktion Service Principals die Flows besitzen. Flows werden nur in Dev bearbeitet.
- **Was Pipelines nicht tun:** Sie liefern Solutions samt Connection References und Umgebungsvariablen aus, aber keine Daten aus Dataverse-Tabellen. Die Verbindungen hinter den Connection References ordnet ihr beim Import je Umgebung zu.

**Aufbau der Pipeline-Umgebungen:** Ein Host (Microsoft empfiehlt eine eigene Produktionsumgebung), Dev-Umgebungen und Ziel-Umgebungen. Mindestens drei Umgebungen reichen, vier empfiehlt Microsoft. Alle brauchen Dataverse. Die Ziel-Umgebungen müssen Managed Environments sein, Host und Dev-Umgebungen nicht. Ab Oktober 2026 benachrichtigt die Admin-Deployment-Seite Admins, wenn Pipelines an eine nicht verwaltete Ziel-Umgebung ausliefern. Admins müssen innerhalb von 30 Tagen nach der Benachrichtigung genehmigen, dass die Ziel-Umgebung als Managed Environment aktiviert wird, sonst werden künftige Auslieferungen blockiert. Pro Umgebung ist eine zusätzliche Verlängerung um 30 Tage möglich.

Wer heute noch unmanaged nach Prod importiert, findet den Umstieg in den Beiträgen [Von unmanaged zu managed Solutions](/de/posts/move-power-platform-deployments-from-unmanaged-to-managed-solutions-d19b662d/) und [Test-to-Prod-Disziplin](/de/posts/gov-test-to-prod-discipline/).

## Wer baut wann wo: die Regeltabelle

| Rolle | Stufe 1 und 2: Personal Productivity | Stufe 3: eigene Dev-Umgebung | Stufe 3: Shared Development | Stufe 4: Test | Stufe 4: Prod |
|---|---|---|---|---|---|
| Mitarbeitende ohne Maker-Rolle | Nutzen, was ihnen im kleinen Kreis freigegeben wurde | Kein Zugriff | Kein Zugriff | Kein Zugriff | Nutzen (Basic User oder App-Rolle) |
| Maker | Baut persönliche Hilfen, teilt nur unter dem Limit (Empfehlung: höchstens 2 Personen) | Baut und probiert, Admin der eigenen Umgebung, Gruppenregeln nicht änderbar | Arbeitet im Projekt mit, auf Antrag | Kein Bauen | Kein Zugriff |
| Fortgeschrittener Maker oder Entwickler | Wie Maker | Baut Lösungen in Solutions und löst die Pipeline aus | Environment Maker plus System Customizer | Kein Bauen | Kein Bauen |
| Tester oder Fachverantwortliche | Nutzen | Kein Zugriff | Kein Zugriff | Basic User, testet und nimmt ab | Basic User oder App-Rolle, nutzt |
| IT-Betrieb | Legt Regeln und Inventar fest, prüft Meldungen | Regeln über die Gruppe | System Administrator, zwei bis vier Personen über eine Sicherheitsgruppe | Genehmigt und überwacht die Pipeline | Pipeline und Admin, keine direkte Bearbeitung |
| Power Platform Administrator | Tenant-Einstellungen, DLP, Routing, Gruppen | Wie links | Wie links | Wie links | Wie links, kein automatischer Datenzugriff |

Rollen immer an Sicherheitsgruppen oder Teams vergeben, nicht an Einzelpersonen. Die Rollen im Detail stehen auf der Seite [Dataverse-Sicherheitsrollen](/de/knowledge/dataverse-security-roles/).

## Entscheidungskriterien für den Wechsel

Die Tabelle zeigt alle sechs Signale: die vier aus Stufe 2 plus Zusammenarbeit und Besitz. So erkennt ihr, dass eine Lösung die Stufe wechseln muss. Die Schwellen legt ihr selbst fest und schreibt sie auf, am besten als Antwort auf Frage 4 des [Fragenkatalogs](/de/knowledge/governance-questions-top-25/).

| Signal | Bleibt in Stufe 1 oder 2 | Wechsel nach Stufe 3 oder 4 |
|---|---|---|
| Nutzerkreis | Die Person selbst oder wenige Personen innerhalb eurer Grenze (Empfehlung: höchstens 2) | Mehr Personen als eure Grenze: Stufe 4 |
| Daten | Eigene Arbeitsdaten, Inhalte aus Microsoft 365 | Personal-, Finanz- oder Kundendaten: nicht Default, Stufe 3 oder 4, DLP der Zielumgebung prüfen |
| Tagesgeschäft | Ein Ausfall stört niemanden | Ein Ausfall stoppt Arbeit: Stufe 4 |
| Schnittstellen | Nur Standardkonnektoren von Microsoft 365 | Fremdsysteme, HTTP, eigene Konnektoren: DLP prüfen, mindestens Stufe 3 |
| Zusammenarbeit | Eine Person baut | Mehrere Maker an einer Lösung: Shared Development |
| Besitz | Besitzerin ist ersetzbar | Niemand kann übernehmen: erst Besitz klären, dann teilen |

**So läuft ein Wechsel nach Stufe 4:**

1. Die Lösung in Dev in eine Solution legen und Besitz klären.
2. Verbindungen über Connection References anbinden und umgebungsabhängige Werte wie URLs als Umgebungsvariablen anlegen, damit beides in Test und Prod umgestellt werden kann.
3. Solution Checker ausführen und Befunde beheben.
4. Per Pipeline nach Test liefern, dort abnehmen lassen.
5. Nach Freigabe per Pipeline nach Prod, die persönliche Version abschalten.

Entscheidungen brauchen Tempo. Wer auf eine Antwort wochenlang wartet, baut am Prozess vorbei. Legt einen festen Termin pro Woche und eine verbindliche Antwortzeit fest. Auch ein «Nein» ist eine gute Antwort, wenn es rechtzeitig kommt.

## Lizenzhinweise

Die Tabelle fasst zusammen, was laut Microsoft Learn und den Governance-Beiträgen an Lizenzen hängt. Preise stehen hier bewusst nicht. Lizenz prüfen, bevor ihr plant.

| Funktion | Voraussetzung | Hinweis |
|---|---|---|
| Environment Routing | Managed Environments | Angelegte Developer Environments sind verwaltet. Zum Bauen und Ansehen braucht der Maker keine Premium-Lizenz, zum Ausführen von Apps und Flows in einer verwalteten Developer Environment schon |
| Environment Groups, Freigabelimits, Willkommensinhalt | Managed Environments | Eine Umgebung muss verwaltet sein, um in eine Gruppe zu kommen |
| Pipelines | Ziel-Umgebungen als Managed Environments | Host und Dev-Umgebungen brauchen es nicht. Für verwaltete Umgebungen sind Lizenzen mit Premium-Nutzungsrechten nötig |
| Developer Plan | Lizenz des Makers | Legt ab dem 15. November 2026 keine Developer Environments mehr an. Für gelegentliche Premium-Tests nennt Microsoft Learn Standard-Trial-Umgebungen |
| Auto-Claim | Richtlinie im Tenant | Weist vorhandene Power-Apps- und Power-Automate-Lizenzen automatisch zu, wenn jemand eine braucht, etwa beim Öffnen einer App in einer verwalteten Umgebung. In Tenants mit Managed Environments legt Microsoft die Richtlinie selbst an. Sie kauft keine Lizenzen, kann aber den Lizenzvorrat aufbrauchen. Bewusst konfigurieren |
| Selbstbedienungskäufe | Pro Produkt steuerbar | Standardmässig an. Per PowerShell pro Produkt abschaltbar |

Managed Environments bündeln mehr als zwanzig Funktionen. Sie sind keine eigene Lizenz, sondern in den Standalone-Lizenzen von Power Apps, Power Automate, Copilot Studio, Power Pages und Dynamics 365 als Berechtigung enthalten. Prüft, was davon ihr schon bezahlt und noch nicht eingerichtet habt, bevor ihr etwas Neues kauft.

## Erste Schritte

1. **Inventar erstellen:** Admin Center, Umgebungen nach Typ und Besitzer. Filtert nach Typ «Developer» und «Managed = No».
2. **Default-Umgebung umbenennen:** «Personal Productivity». Managed Environments dafür aktivieren, Freigabe an Everyone aus, Freigabelimits setzen, strengere DLP, Willkommenstext mit Regeln und Ansprechperson.
3. **Sicherheitsgruppe «Maker» anlegen** und festlegen, wer aufgenommen wird. Aufnahme nach einer Schulung ist ein bewährter Weg.
4. **Environment Group «Development» anlegen,** mit Freigabelimits, Solution-Checker-Stufe und Willkommenstext. Erst die Regeln, dann die Umgebungen.
5. **Routing aktivieren,** zuerst nur für die Sicherheitsgruppe «Maker». Eine Regel für «Everyone» kommt zuletzt oder gar nicht.
6. **Pilotlösung wählen** und eine Solution per Pipeline von Dev über Test nach Prod bringen. Danach auf weitere Lösungen übertragen.
7. **Schwellen aufschreiben:** Wann wechselt eine Lösung die Stufe, wer entscheidet, wie schnell kommt die Antwort.

## Prompt für die KI eures Vertrauens

Für KI-Werkzeuge, die keine Webseiten lesen: Kopiert den Prompt, ersetzt die letzte Zeile durch den Text dieser Seite von «Die vier Stufen im Überblick» bis zu den Lizenzhinweisen und gebt ihn in eure KI. Prüft das Ergebnis im Team, bevor ihr es umsetzt.

```text
Du bist ein erfahrener Berater für Microsoft Power Platform Governance. Hilf mir, eine Regelung für Citizen Developer in unserem Unternehmen aufzubauen: wer baut wann wo, vom persönlichen Flow bis zur geteilten Lösung.

Vorgehen:
1. Frag mich einzeln nach: Zahl der Maker, vorhandene Lösungen und wo sie liegen, Zahl der Nutzer der wichtigsten Lösungen, berührte Daten, Folgen eines Ausfalls, vorhandene Lizenzen. Stell Rückfragen, wenn eine Antwort unklar ist.
2. Ordne die Lösungen den vier Stufen zu (persönlich, Teilen im kleinen Kreis, Entwickeln, Betreiben) und begründe jede Zuordnung mit den Entscheidungskriterien unten.
3. Erarbeite die Regeltabelle «Wer baut wann wo» (Rolle mal Stufe) und die ersten Schritte, ein Punkt auf einmal.
4. Fass am Ende zusammen: Zuordnung, Regeltabelle, offene Punkte, nächste Schritte.

Regeln:
- Verwende ausschliesslich meine Antworten, den Text unten und gesichertes Wissen zu Power Platform. Erfinde nichts. Schwellenwerte wie Nutzerzahlen legen wir fest. Nenne nur die Empfehlung aus dem Text unten als Ausgangspunkt und erfinde keine eigenen.
- Frag nicht nach vertraulichen Firmendaten. Ich teile, was ich teilen will.
- Nenne keine Preise und erfinde keine Lizenzdetails. Wo Lizenzen entscheidend sind, schreibe «Lizenz prüfen».
- Schreibe auf Deutsch, in Schweizer Schreibweise, klar und ohne Floskeln. Fachbegriffe wie Environment, Dataverse, DLP und Managed Environment bleiben englisch.

Der Guide:
[Hier den Text dieser Seite von «Die vier Stufen im Überblick» bis «Lizenzhinweise» einfügen.]
```

## Weiterlernen in der Academy

Wer die Umgebungen einrichtet, lernt das hands-on im Kurs «Power Platform Admin Training»: Environment-Strategie, DLP-Policies, CoE und Monitoring im Admin Center, live über 4 Wochen. Wer baut, findet den Einstieg im Kurs «Power Platform Citizen Developer»: Power Apps und Power Automate in 8 Wochen. Termine und Status stehen auf der Kursseite: [powerplatformacademy.online/kurse](https://powerplatformacademy.online/kurse).

Den Einstieg in die Wahl der Umgebungsstruktur bietet die Seite [Fünf Environment-Strategien](/de/knowledge/environment-strategies/).

## Quellen

- [Microsoft Learn: Environment routing](https://learn.microsoft.com/en-us/power-platform/admin/default-environment-routing)
- [Microsoft Learn: Environment groups](https://learn.microsoft.com/en-us/power-platform/admin/environment-groups)
- [Microsoft Learn: Limit sharing in managed environments](https://learn.microsoft.com/en-us/power-platform/admin/managed-environment-sharing-limits)
- [Microsoft Learn: Managed environments overview](https://learn.microsoft.com/en-us/power-platform/admin/managed-environment-overview)
- [Microsoft Learn: Overview of pipelines in Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/pipelines)
- [Microsoft Learn: Create a pipeline using a custom pipelines host](https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines)
- [Microsoft Learn: Develop a tenant environment strategy to adopt Power Platform at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
- [Microsoft Learn: Implement reactive governance controls](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/reactive-governance)
- [Microsoft Learn: Important changes coming (unmanaged developer environments)](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-unmanaged-developer-environments-and-the-power-apps-developer-plan)

Orientierungshilfe, keine Rechts- oder Lizenzberatung. Prüfe Lizenz- und Produktdetails vor der Umsetzung.
