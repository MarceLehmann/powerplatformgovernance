---
title: "Qualitätstore statt Qualitätshoffnung: Solution Checker beim Import erzwingen"
description: "Wie Managed Environments kritische Solution-Probleme beim Import blockieren oder nur warnen können, das PowerShell-Kommando dafür über mehrere Umgebungen hinweg, und wo man Ausnahmen setzt."
date: "2026-09-24T08:05:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - alm
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-59.png"
  alt: "Governance-Karte: Der Röntgenblick — Qualitätstore schlagen Qualitätshoffnung."
permalink: "/de/posts/gov-solution-checker-enforcement/"
translation_url: "/en/posts/gov-solution-checker-enforcement/"
faq:
  - question: "Welche drei Erzwingungsstufen hat der Solution Checker in Managed Environments?"
    answer: "Kein heisst keine automatische Validierung. Warnen prüft jeden Import einer benutzerdefinierten Lösung automatisch, lässt ihn bei kritischen Problemen trotzdem durchlaufen, weist darauf hin und schickt eine E-Mail an Power-Platform- und Dynamics-365-Service-Administratoren. Blockieren führt dieselbe Prüfung aus und bricht den Import bei einem kritischen Verstoss ab, bevor er die Umgebung berührt."
  - question: "Stoppen mittlere und niedrige Solution-Checker-Befunde einen Import?"
    answer: "Nein. Nur Regeln der Schweregrad-Stufe kritisch können eine Blockierung oder die Warnmeldung auslösen. Mittlere und niedrige Befunde erscheinen im Bericht, stoppen aber nie einen Import. Bei einem blockierten Import erhält der Maker denselben Verstossbericht und muss die Probleme beheben, bevor er es erneut versucht."
  - question: "Welche Erzwingungsstufe passt zu Production und Developer?"
    answer: "Microsofts Adoptionsempfehlung für Enterprise-Tenants sieht Blockieren mit E-Mails für Default, Production und Teams-Umgebungen vor, Warnen ohne E-Mails für Developer und Sandbox. In Developer und Sandbox iterieren Maker und machen gelegentlich etwas kaputt, eine harte Blockade erzeugt dort nur Reibung. In Production kostet ein kritisches Problem tatsächlich etwas."
  - question: "Wie setze ich die Solution-Checker-Erzwingung mit PowerShell?"
    answer: "Mit der Funktion SetManagedEnvironmentSolutionCheckerEnforcementLevel aus dem Modul Microsoft.PowerApps.Administration.PowerShell.Samples, mit Umgebungs-ID und Level block, warn oder none. Über den Parameter RuleExclusions schliesst du einzelne Regeln aus. Gehört die Umgebung zu einer Environment Group mit definierter Konfiguration, wird die Einstellung vererbt und lässt sich nicht einzeln ändern."
  - question: "Warum genügt es nicht, Maker zu bitten, den Solution Checker selbst auszuführen?"
    answer: "Weil das eine Gewohnheit ist und Gewohnheiten unter Termindruck als Erste wegfallen. Eine Lösung, die nie geprüft wurde, verhält sich aus Governance-Sicht wie eine, die mit kritischen Verstössen durchgekommen ist. Die Erzwingung verlegt die Prüfung auf den Import, den jede Lösung ohnehin passieren muss, und hängt damit nicht mehr davon ab, dass ein Maker daran denkt."
---

## TL;DR

Solution-Checker-Erzwingung in Managed Environments macht aus dem Solution Checker eine automatische Schranke statt einer freiwilligen Gewohnheit: Jede benutzerdefinierte Lösung wird beim Import automatisch statisch analysiert, und man entscheidet, ob kritische Probleme nur warnen (Import läuft durch, Admins bekommen eine E-Mail) oder blockieren (Import wird komplett abgebrochen, bevor irgendetwas die Umgebung berührt). Das ist eine tenantseitige Kontrolle, die ein Maker nicht einfach durch Vergessen des "Checker ausführen"-Klicks umgehen kann — und lässt sich mit einem einzigen PowerShell-Befehl pro Umgebung aktivieren.

## Warum "wir bitten Maker, ihn auszuführen" nicht trägt

Der Solution Checker existiert seit Jahren als manuelle Aktion in Power Apps: Lösung öffnen, Rechtsklick, Checker ausführen, Bericht lesen. Das Problem war nie, dass das Tool schwach ist — sein Regelwerk erkennt zuverlässig doppelte Plug-in-Registrierungen, fehlende Filterattribute, veraltete Muster und andere Probleme, die still die Performance verschlechtern oder künftige Upgrades blockieren. Das Problem ist, dass "wir bitten Maker, ihn auszuführen" eine Gewohnheit ist, und Gewohnheiten fallen unter Termindruck als Erste weg. Eine Lösung, die nie geprüft wurde, verhält sich aus Governance-Sicht genauso wie eine Lösung, die mit kritischen Verstössen durchgekommen ist.

Erzwingung entfernt die Abhängigkeit von der Gewohnheit, indem die Prüfung an den einen Punkt verschoben wird, den jede Lösung ohnehin passieren muss: den Import.

## Die drei Erzwingungsstufen

Managed Environments bieten eine Einstellung, **Solution Checker Enforcement**, mit drei Zuständen:

- **Kein** — keine automatische Validierung; Verhalten unverändert gegenüber einer nicht verwalteten Umgebung.
- **Warnen** — jeder Import einer benutzerdefinierten Lösung wird automatisch geprüft. Werden kritische Probleme gefunden, läuft der Import trotzdem durch, aber eine Meldung weist darauf hin, und eine zusammenfassende E-Mail geht an Power-Platform-Administratoren und Dynamics-365-Service-Administratoren (plus alle, die den wöchentlichen Digest abonniert haben).
- **Blockieren** — dieselbe automatische Prüfung, aber ein kritischer Verstoss bricht den Import ab, bevor er die Umgebung überhaupt berührt. Bei einem blockierten Import ändert sich nichts in der Umgebung; der Maker erhält denselben Verstossbericht und muss die Probleme vor einem erneuten Versuch beheben.

Nur Regeln der Schweregrad-Stufe **kritisch** können eine Blockierung oder die Warnmeldung auslösen — mittlere und niedrige Befunde erscheinen im Bericht, stoppen aber nie einen Import.

## Pro Umgebungstyp setzen, und wo man es lockert

Microsofts eigene Adoptionsempfehlung für Enterprise-Tenants schlägt bewusst eine asymmetrische Einrichtung statt einer einzigen pauschalen Regel vor:

| Umgebungstyp | Erzwingung | E-Mails senden |
|---|---|---|
| Default | Blockieren | Ja |
| Developer | Warnen | Nein |
| Sandbox | Warnen | Nein |
| Production | Blockieren | Ja |
| Teams-Umgebung | Blockieren | Ja |

Die Logik ist einfach: Developer- und Sandbox-Umgebungen sind dafür da, dass Maker iterieren und gelegentlich etwas kaputt machen — eine harte Blockade dort erzeugt nur Reibung ohne zusätzliche Sicherheit. Production und die Default-Umgebung sind dort, wo ein kritisches Problem tatsächlich etwas kostet, also bekommen die das harte Tor.

Einzelne Regeln lassen sich von der Erzwingung ausschliessen — nützlich, wenn eine Regel mehr Nacharbeit erfordert, als der Zeitplan hergibt, aber alles andere trotzdem erzwungen werden soll. Regelausnahmen werden pro Umgebung (oder von einer Environment Group vererbt) im selben Einstellungsbereich konfiguriert, sortiert nach Kategorie und Schweregrad.

## Mit PowerShell aktivieren

Das von Hand über einen echten Umgebungsbestand zu machen, skaliert nicht, deshalb liefert Microsoft PowerShell-Funktionen dafür (aus dem Modul `Microsoft.PowerApps.Administration.PowerShell.Samples`):

```powershell
# Blockiermodus
SetManagedEnvironmentSolutionCheckerEnforcementLevel -EnvironmentId <env-id> -Level block

# Warnmodus
SetManagedEnvironmentSolutionCheckerEnforcementLevel -EnvironmentId <env-id> -Level warn

# Aus
SetManagedEnvironmentSolutionCheckerEnforcementLevel -EnvironmentId <env-id> -Level none

# Blockiermodus mit Regelausnahmen
SetManagedEnvironmentSolutionCheckerEnforcementLevel -EnvironmentId <env-id> -Level block -RuleExclusions "web-use-async,web-use-offline"
```

Ist eine Umgebung bereits Teil einer Environment Group mit definierter Konfiguration, werden die Erzwingungseinstellungen von der Gruppe vererbt und lassen sich nicht einzeln pro Umgebung ändern — meist genau das Gewünschte, denn es ist eine Sache weniger, die von Umgebung zu Umgebung auseinanderdriften kann.

## Wen betrifft das

- Admins/CoE: die Erzwingungsstufe an den tatsächlichen Zweck der Umgebung anpassen — Warnen in Developer/Sandbox, damit Maker den Bericht sehen, ohne ihren Import zu verlieren, Blockieren in Production und Default, wo ein kritisches Problem echten Schaden anrichtet.
- Maker: ein blockierter Import ist kein Rätsel — derselbe Bericht, den der Solution Checker schon immer erzeugt hat, zeigt genau, welche Regel fehlgeschlagen ist, mit Link zur Behebung. Eine Blockierung heisst: der Checker macht seinen Job nur früher, nicht: eine Mauer ohne Durchgang.
- Leadership/Business: das ist eine wirklich kostenlose Kontrolle — sie kostet einen PowerShell-Befehl pro Umgebung und fängt Probleme ab, bevor sie Produktion erreichen, keine Tool-Investition und kein laufender Review, an den jemand denken muss.
