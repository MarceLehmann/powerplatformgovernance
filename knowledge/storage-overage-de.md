---
layout: page
title: "Speicher überschritten: was mit deinen Umgebungen passiert"
description: "Die drei Stufen der Dataverse-Speicherprüfung: gesperrte Vorgänge ab 100 %, Administrationsmodus für Sandbox-Umgebungen nach 30 Tagen, Deaktivierung nach 90 Tagen. Mit dem Plan für die ersten 30 Tage."
lang: de
toc: true
permalink: "/de/knowledge/storage-overage/"
translation_url: "/knowledge/storage-overage/"
last_reviewed: "2026-11-15"
---

Microsoft beschreibt in der Dokumentation zur Dataverse-Kapazität einen Ablauf mit drei Stufen für Tenants, die ihren Speicher überschreiten. Diese Seite erklärt, was auf jeder Stufe passiert, was davon ausgenommen ist und was du in den ersten 30 Tagen tust.

[Read this page in English](/knowledge/storage-overage/) | [Zurück zur Wissensübersicht](/de/knowledge/)

## TL;DR

Überschreitet ein Tenant 100 % seines Speichers, sind sofort sechs Vorgänge gesperrt, darunter Umgebungen anlegen, kopieren und wiederherstellen. Bleibt die Überschreitung 30 Tage bestehen, kommen betroffene Sandbox-Umgebungen in den Administrationsmodus. Nach 90 Tagen sind sie deaktiviert, auch für Admins. Produktionsumgebungen durchlaufen die Stufen zwei und drei nicht, hängen aber an den gesperrten Vorgängen. Sandbox-Umgebungen mit aktivem Pay-as-you-go sind ausgenommen. Die Uhr läuft ab dem ersten Tag über 100 % und stoppt erst, wenn die Überschreitung behoben ist.

Microsoft kennzeichnet den Ablauf als kommende «Dataverse Storage Validation». Er gilt nach dem Rollout. Den Zeitpunkt für deinen Tenant nennt die Mitteilung im Message Center.

Der Geltungsbereich ist enger, als der Name vermuten lässt. Laut Microsoft gilt die Prüfung nur für reine Dataverse-Tenants ohne Umgebungen oder Verbrauch von Dynamics 365 Finance and Operations. Als Produkte im Geltungsbereich nennt Microsoft Dynamics 365 Sales, Customer Service, Field Service, Customer Insights, Customer Voice, Contact und Project Operations (Dataverse-Bereitstellungen). Ob dein Tenant dazugehört, klärst du mit der Mitteilung im Message Center, bevor du planst.

## Die drei Stufen

| Stufe | Wann | Was du merkst |
|---|---|---|
| Frühe Meldung | über 85 % | Hinweise und Warnungen im Admin Center und per E-Mail |
| 1: Eingeschränkt | erster Tag über 100 % (Zeitpunkt T0) | Kritische Meldungen. Gesperrt sind: Umgebung anlegen, kopieren, wiederherstellen, Testumgebung in bezahlte umwandeln, gelöschte Umgebung zurückholen, Dataverse zu einer Umgebung hinzufügen |
| 2: Administrationsmodus | 30 Tage nach T0 | Dazu kommt: Betroffene Sandbox-Umgebungen sind nur noch für Admins zugänglich |
| 3: Deaktiviert | 90 Tage nach T0 | Dazu kommt: Niemand kann sich an betroffenen Sandbox-Umgebungen anmelden, auch Admins nicht. Daten gibt es nur noch über ein Support-Ticket |

Gemessen wird der effektive Verbrauch. Bevor Microsoft eine Überschreitung feststellt, wird ungenutzte Kapazität verrechnet, und zwar nur in eine Richtung: Datenbank kann Log und Datei ausgleichen, Log kann Datei ausgleichen. Ein Defizit bei der Datenbank lässt sich nicht ausgleichen.

## Was ausgenommen ist

- **Produktionsumgebungen** kommen weder in den Administrationsmodus noch werden sie deaktiviert. Die Arbeit dort ist trotzdem betroffen, sobald sie eine gesperrte Kopie oder Wiederherstellung braucht.
- **Sandbox-Umgebungen mit aktivem Pay-as-you-go** durchlaufen den Ablauf nicht. Eine Sandbox mit Pay-as-you-go zu verknüpfen hebt die Einschränkungen für sie auf, auch wenn der Tenant überschritten bleibt.
- **Tenants mit Dynamics 365 Finance and Operations** sind von der kommenden Prüfung ausgenommen. Sie gilt laut Microsoft für reine Dataverse-Tenants.

## Die ersten 30 Tage

Die Reihenfolge ist eine Empfehlung aus der Praxis, die einzelnen Massnahmen stammen von Microsoft.

1. **Tag 1: Zahlen bestätigen.** Öffne im Admin Center **Licensing** > **Dataverse**. Lies ab: Anspruch und Verbrauch je Speichertyp, das effektive Defizit und die Umgebungen und Tabellen mit dem grössten Verbrauch.
2. **Woche 1: Aufräumen.** Lösche Umgebungen, die niemand mehr braucht, und Daten ohne geschäftlichen, rechtlichen oder regulatorischen Wert. Aufräumen kostet kein Geld.
3. **Woche 2: Daten auslagern, die bleiben müssen.** Für inaktive Daten mit Aufbewahrungspflicht gibt es die Langzeitaufbewahrung in Dataverse. Sie senkt den aktiven Datenbankverbrauch, wirkt aber nicht sofort.
4. **Woche 3: Über Zukauf entscheiden.** Kauf den Speichertyp, der fehlt. Dateikapazität behebt kein Datenbankdefizit. Microsoft empfiehlt, zum Defizit das erwartete Wachstum und einen Puffer zu rechnen.
5. **Vor Tag 30: Sandbox-Umgebungen absichern.** Brauchst du eine Sandbox zwingend weiter, verknüpfe sie mit Pay-as-you-go. Prüfe vorher Preis, Azure-Abonnement und Budget.

Brauchst du kurzfristig Luft, kannst du im Admin Center eine Kapazitätserweiterung aktivieren. Sie gilt für den ganzen Tenant, umfasst 25 % des Verbrauchs, läuft höchstens 45 Tage und lässt sich höchstens dreimal in 365 Tagen beantragen. Sie behebt die Überschreitung nicht dauerhaft.

## Drei Annahmen, die nicht stimmen

- **«Ich verschiebe Kapazität zwischen Umgebungen.»** Das ändert nur die Verteilung. Die Überschreitung auf Tenant-Ebene bleibt.
- **«Ich nehme die Sandbox aus dem Administrationsmodus, dann ist es gelöst.»** Ein Admin kann das je Umgebung tun, um aufzuräumen. Die Frist läuft weiter, und die Umgebung erreicht die nächste Stufe, solange der Tenant überschritten ist.
- **«Der Bericht zeigt kein Defizit, also geht alles.»** Kopieren, Wiederherstellen und Anlegen prüfen separat, ob im jeweiligen Speichertyp mindestens 1 GB frei ist. Ein Vorgang kann darum gesperrt sein, obwohl der Tenant nach der Verrechnung im Rahmen liegt.

## Wenn eine Sandbox schon deaktiviert ist

Bring zuerst den Tenant wieder in seinen Anspruch. Danach aktiviert ein Admin jede betroffene Umgebung einzeln im Admin Center. Bleibt der Tenant überschritten, hilft der Microsoft-Support nur noch beim Export und bei der Wiederherstellung von Daten.

## Früh merken statt spät reagieren

Die frühe Meldung kommt ab 85 %. Wer nicht auf das Banner warten will, lässt sich den Stand schicken: Der Flow **F08 Kapazitätswarnung** aus dem kostenlosen [AdminHelper-Starter-Set](/de/flows/) meldet die Kapazität per E-Mail. Nimm die Speicherzahlen in deinen monatlichen Termin auf, siehe [Governance-Konzept](/de/knowledge/governance-concept/).

## Weiterlesen

- [Fünf Environment-Strategien im Vergleich](/de/knowledge/environment-strategies/)
- [Teuer ist nicht das Bauen. Teuer ist, es nicht zu wissen.](/de/posts/gov-licensing-governance/)
- [Governance-Fragen an Power Platform Admin in Cowork stellen](/de/knowledge/cowork-governance-questions/)

## Quellen

Aussagen am 15.11.2026 gegen Microsoft Learn geprüft, Stand der Learn-Seite 02.11.2026. Microsoft kennzeichnet die drei Stufen als Vorgaben für eine kommende Funktion. Fristen und Geltungsbereich können sich bis zum Rollout ändern.

- [Microsoft Learn: Dataverse capacity-based storage details, Abschnitt «Storage overage lifecycle»](https://learn.microsoft.com/en-us/power-platform/admin/capacity-storage#storage-overage-lifecycle)
- [Microsoft Learn: Free up storage space](https://learn.microsoft.com/en-us/power-platform/admin/free-storage-space)
- [Microsoft Learn: Dataverse long term data retention overview](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-retention-overview)
- [Microsoft Learn: Pay-as-you-go meters](https://learn.microsoft.com/en-us/power-platform/admin/pay-as-you-go-meters)

Nur Orientierung, keine Rechts- oder Lizenzberatung. Prüfe Lizenz und Produktdetails, bevor du umsetzt.
