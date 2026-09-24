---
title: "Einmal konfigurieren, viele regieren: Die Umgebungsfunktionen, die schon bezahlt sind"
description: "Environment Routing, Environment Groups und das siebentägige Wiederherstellungsfenster — drei Managed-Environments-Funktionen, die laufende Handarbeit durch eine einmalige Konfiguration ersetzen."
date: "2026-09-24T08:20:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - environments
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-54.png"
  alt: "Governance-Karte: Das Gruppen-Regelbuch — einmal konfigurieren, viele regieren."
permalink: "/de/posts/gov-environment-lifecycle-automation/"
translation_url: "/en/posts/gov-environment-lifecycle-automation/"
---

## TL;DR

Managed Environments bündeln über zwanzig Governance-Funktionen in einem einzigen Lizenzschalter, und die meisten Tenants nutzen davon vielleicht drei. Drei lohnen sich besonders, weil sie laufende Handarbeit durch eine einmalige Konfiguration ersetzen: Environment Routing (jeder neue Maker bekommt automatisch eine eigene, geregelte Entwicklungsumgebung, statt sich in Default zu stapeln), Environment Groups (Freigabelimits, Willkommensinhalt und Solution-Checker-Regeln als eine Richtlinie auf Dutzende Umgebungen gleichzeitig anwenden statt einzeln) und das eingebaute siebentägige Wiederherstellungsfenster für versehentlich gelöschte Umgebungen — ein echtes Sicherheitsnetz, von dem die meisten Admins nichts wissen, bis sie es brauchen.

## Environment Routing: niemand muss gesagt bekommen, wo er bauen soll

Ohne Eingriff landet jeder neue Maker bei seiner ersten Power-Apps- oder Copilot-Studio-Sitzung in der Default-Umgebung — der einen Umgebung, die niemand für Governance vorgesehen hat, weil sie nie etwas Wichtiges enthalten sollte. **Environment Routing** greift genau hier ein: Ist es aktiviert, wird ein sich anmeldender Maker automatisch in seine eigene persönliche Entwicklungsumgebung geleitet, die bei Bedarf sofort bereitgestellt wird.

Die durch Routing erstellten Umgebungen sind **standardmässig verwaltet** und lassen sich — entscheidend — einer bestimmten **Environment Group** zuordnen, sodass die brandneue Entwicklungsumgebung eines Makers die Governance-Regeln von Anfang an erbt, statt ungeregelt zu starten und erst später aufgeräumt zu werden. Aktivierung unter **Power Platform Admin Center → Verwalten → Tenant-Einstellungen → Environment Routing**, dort auswählen, für welche Portale es gilt (Power Apps, Power Automate, Copilot Studio, Power Automate für Desktop), und **Jeder** oder eine bestimmte Sicherheitsgruppe als Ziel festlegen.

Eine Regel sollte man kennen, bevor man den Schalter umlegt: Nur eine Routing-Regel darf auf "Jeder" zielen, und hat man bereits mehrere Regeln, muss diese in der Prioritätsreihenfolge zuletzt stehen — das System prüft die Regeln von oben nach unten und wendet die erste Übereinstimmung an.

## Environment Groups: der Unterschied zwischen einer Richtlinie und vierzig wiederholten Klicks

Environment Groups erlauben es, eine Regel — Freigabelimits, Maker-Willkommensinhalt, Solution-Checker-Erzwingungsstufe, Backup-Aufbewahrung, generative KI-Einstellungen und mehr — einmal festzulegen und auf alle Umgebungen der Gruppe gleichzeitig anzuwenden. Wird später eine neue Umgebung zur Gruppe hinzugefügt, erbt sie sofort die aktuellen Regeln der Gruppe, ohne separaten Konfigurationsschritt.

Ein Verhalten sollte man vorher kennen: Hat eine Umgebung bereits eigene Einstellungen für etwas, das die Gruppe ebenfalls steuert (Willkommensinhalt, Freigabelimits und einige weitere), **überschreibt** das Hinzufügen zur Gruppe diese individuellen Einstellungen mit denen der Gruppe — es ist kein Zusammenführen. Die Regeln der Gruppe also festlegen, bevor bestehende, bereits konfigurierte Umgebungen hinzugefügt werden, nicht danach.

## Das Wiederherstellungsfenster, an das sich niemand erinnert

Eine gelöschte Power-Platform-Umgebung ist nicht sofort weg — das Power Platform Admin Center führt eine Liste **Kürzlich gelöschte Umgebungen**, und die Wiederherstellung ist innerhalb dieses Fensters nur einen Klick (oder ein PowerShell-Cmdlet) entfernt:

```powershell
# Soft-gelöschte Umgebungen auflisten
Get-AdminPowerAppSoftDeletedEnvironment

# Eine wiederherstellen
Recover-AdminPowerAppEnvironment -EnvironmentName $environmentName -WaitUntilFinished $true
```

Produktivumgebungen mit Dynamics-365-Anwendungen bekommen ein längeres Fenster — bis zu 28 Tage. Die Wiederherstellung selbst kann mehrere Stunden dauern und ist kein vollständiges Rückgängigmachen: Solution-fähige Cloud-Flows kommen deaktiviert zurück und müssen in der richtigen Abhängigkeitsreihenfolge manuell wieder aktiviert werden, Verbindungen mit geänderten Zugangsdaten oder Besitzern müssen eventuell neu autorisiert werden, und Anwendungsbenutzer samt ihren Dienstprinzipal-Zugangsdaten sollte man prüfen, bevor irgendetwas wieder als normal gilt. Das Sicherheitsnetz ist real, aber "wiederhergestellt" heisst "braucht eine Prüfung", nicht "genau wie vor einer Stunde".

## Wen betrifft das

- Admins/CoE: Environment Routing zusammen mit einer geregelten Environment Group als Standardziel aktivieren — das ist die eine Änderung, die verhindert, dass sich die Arbeit neuer Maker standardmässig in der Default-Umgebung ansammelt, und sie kostet eine Tenant-Einstellung, keinen laufenden Prozess.
- Leadership/Business: Managed Environments wird einmal lizenziert und schaltet über zwanzig Funktionen frei, die die meisten Tenants nie konfigurieren — bevor etwas Neues gekauft wird, prüfen, ob die gesuchte Fähigkeit nicht schon ungenutzt in dem steckt, was bereits bezahlt ist.
- Security/Compliance: das siebentägige Wiederherstellungsfenster kennen und wissen, was "wiederhergestellt" tatsächlich zurückbringt — eine versehentliche Löschung ist wiederherstellbar, aber nur, wenn jemand innerhalb des Fensters handelt, und nur mit anschliessender Prüfung, nicht als automatisches vollständiges Rollback.
