---
title: "Dein Daten-Gateway ist ein Single Point of Failure — bis du es clusterst"
description: "Wie ein einzelnes On-Premises-Datengateway zu einem hochverfügbaren Cluster wird, wer es besitzen sollte und welche Einstellungen den Failover wirklich funktionieren lassen."
date: "2026-09-24T08:00:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - environments
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-36.png"
  alt: "Governance-Karte: Der Keller-Server — das Gateway, das alle nutzen, braucht einen Besitzer."
permalink: "/de/posts/gov-data-gateway-ownership/"
translation_url: "/en/posts/gov-data-gateway-ownership/"
faq:
  - question: "Was passiert mit Flows und Reports, wenn das einzige On-Premises-Datengateway ausfällt?"
    answer: "Jeder Flow, jede App und jeder Report mit Zugriff auf lokale Daten steht gleichzeitig still. Es gibt keine graduelle Verschlechterung, die vorher auffällt, denn es funktioniert, bis es nicht mehr funktioniert."
  - question: "Wie viele Gateways hat ein Gateway-Cluster höchstens, und müssen die Versionen übereinstimmen?"
    answer: "Ein Cluster unterstützt bis zu zehn Mitglieder, und alle müssen dieselbe Gateway-Version fahren, weil gemischte Versionen zu Ausfällen führen können, die sich schwer auf einen veralteten Knoten zurückführen lassen."
  - question: "Lohnt sich die Einstellung Anfragen auf alle aktiven Gateways in diesem Cluster verteilen?"
    answer: "Ab mehr als zwei Knoten lohnt sie sich. Standardmässig geht der gesamte Traffic ans primäre Gateway, solange es läuft, sodass das zweite und dritte Gateway bis zum nächsten Ausfall brachliegen."
---

## TL;DR

Ein einzelnes On-Premises-Datengateway ist ein stiller Single Point of Failure: Jeder Flow, jede App und jeder Report, der auf lokale Daten zugreift, hängt von genau dieser einen Maschine ab. Microsofts Lösung ist ein Gateway-Cluster — ein zweites Gateway (bis zu zehn insgesamt) auf einer separaten Maschine installieren, mit demselben Wiederherstellungsschlüssel registrieren, und der Dienst wechselt automatisch zum nächsten verfügbaren Mitglied, falls das primäre Gateway ausfällt. Clustering kostet eine zusätzliche VM und zwanzig Minuten; kein Clustering kostet einen Ausfall an dem Tag, an dem jemand den falschen Server neu startet.

## Der Ausfall, den niemand kommen sieht

Die meisten Tenants landen bei genau einem On-Premises-Datengateway, weil das der Einrichtungsassistent so vorgibt: Software installieren, anmelden, fertig. Es funktioniert, also schaut niemand mehr danach. Das Gateway wird still und leise zu dem einen Ding, über das jede SharePoint-On-Prem-Verbindung, jeder SQL-Server-Flow und jede Power-BI-Aktualisierung läuft — ohne dass das jemand bewusst so entschieden hätte.

Der Ausfall ist banal und total: Die Maschine startet für Windows-Updates neu, jemand stilllegt "einen alten Server, den niemand mehr braucht", oder eine Netzwerkänderung kappt die Verbindung — und jeder einzelne Flow und Report, der auf lokale Daten angewiesen ist, steht gleichzeitig still. Es gibt keine graduelle Verschlechterung, die vorher auffällt — es funktioniert, bis es das nicht mehr tut.

## Wie Gateway-Clustering tatsächlich funktioniert

Ein Cluster ist einfach mehrere Gateway-Installationen unter derselben Identität. Cloud-Dienste routen immer zum **primären** Gateway im Cluster; wird dieses nicht erreichbar, geht die Anfrage automatisch an das nächste Mitglied, und so weiter. Ein Cluster unterstützt bis zu zehn Mitglieder, und alle müssen dieselbe Gateway-Version fahren — gemischte Versionen können zu Ausfällen führen, die sich nur schwer auf "ein Knoten war veraltet" zurückführen lassen.

Standardmässig geht der gesamte Traffic weiterhin ans primäre Gateway, solange es läuft. Es gibt eine separate Einstellung, **Anfragen auf alle aktiven Gateways in diesem Cluster verteilen**, die die Last auf alle aktiven Mitglieder verteilt statt sie auf eines zu konzentrieren — lohnt sich ab mehr als zwei Knoten, sonst liegen das zweite und dritte Gateway bis zum nächsten Ausfall brach.

Ein echter Stolperstein: Wer SAP über den NCo-3.1-Connector anbindet, sollte Load Balancing **deaktiviert** lassen. Dieser Connector hält den internen Verbindungszustand auf dem Gateway, das den ersten Aufruf bearbeitet hat — ein Wechsel zwischen Cluster-Mitgliedern mitten in der Sitzung bricht die Verbindung. Microsofts eigene SAP-Einrichtungsanleitung weist explizit darauf hin.

## Einrichtung

1. Das Gateway auf einer *anderen* Maschine als das primäre installieren — pro Computer läuft nur ein Standard-Gateway, und der ganze Sinn der Übung ist Redundanz.
2. Beim Setup **Zu einem bestehenden Cluster hinzufügen** wählen, das primäre Gateway aus der Liste auswählen und dessen **Wiederherstellungsschlüssel** eingeben.
3. Im [Power Platform Admin Center](https://admin.powerplatform.microsoft.com) unter **Verwalten → Daten → On-Premises-Datengateways** den Cluster auswählen, **Einstellungen** öffnen und je nach Traffic-Muster (und der SAP-Ausnahme oben) über **Anfragen auf alle aktiven Gateways verteilen** entscheiden.
4. Den Wiederherstellungsschlüssel so ablegen, dass das Team ihn im Ernstfall tatsächlich findet — er wird auch gebraucht, um ein Gateway später zu migrieren, wiederherzustellen oder zu übernehmen, nicht nur um dem Cluster beizutreten.

## Wen betrifft das

- Admins/CoE: das Gateway jetzt clustern, nicht erst nach dem ersten Ausfall — ein zweites Gateway auf einer separaten Maschine zu installieren und mit dem Wiederherstellungsschlüssel des primären zu registrieren macht aus "ein Server-Neustart" statt eines tenantweiten Vorfalls ein Nicht-Ereignis.
- Security/Compliance: Gateway-Admin-Rechte kommen in getrennten Stufen für Power BI und für Power Apps/Power Automate, und jede Stufe kann weitere Admins hinzufügen oder das Gateway komplett löschen — prüfen, wer tatsächlich Admin auf dem Cluster ist, denn diese Liste wird selten überprüft, sobald sie einmal steht.
- Leadership/Business: eine zweite kleine VM budgetieren, bevor ein Vorfall das Gespräch erzwingt — das ist eine überschaubare einmalige Ausgabe im Vergleich dazu, dass jede lokal angebundene Automation im Tenant gleichzeitig ausfällt.
