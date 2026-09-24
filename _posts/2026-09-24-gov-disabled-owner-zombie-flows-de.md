---
title: "Ein deaktivierter Besitzer deaktiviert nicht den Flow"
description: "Warum ein Flow nach dem Weggang seines Besitzers weiterexistiert, was tatsächlich zuerst kaputtgeht, und warum Microsoft für alles Kritische Dienstkonto-Besitz empfiehlt."
date: "2026-09-24T08:10:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - ownership
  - power-automate
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-56.png"
  alt: "Governance-Karte: Die Nachtwache — monatlich nach Zombies suchen."
permalink: "/de/posts/gov-disabled-owner-zombie-flows/"
translation_url: "/en/posts/gov-disabled-owner-zombie-flows/"
---

## TL;DR

Ein Konto einer ausgeschiedenen Person in Entra ID zu deaktivieren, schaltet deren Flows nicht ab. Der Flow-Datensatz bleibt exakt wie er war — weiterhin "Ein", weiterhin geplant, weiterhin mit denselben Personen geteilt — weil Trigger-Zustand und Kontostatus zwei getrennte Dinge sind. Was tatsächlich kaputtgeht, ist enger und leiser als ein sauberes Abschalten: Verbindungen, die an dieses Konto gebunden sind, fangen an zu scheitern, Schritt für Schritt, oft wochenlang bevor jemand das Muster bemerkt. Microsofts eigene Empfehlung für alles Kritische lautet, dieses Szenario gar nicht erst entstehen zu lassen — den Flow einem Dienstprinzipal gehören zu lassen, nicht einer Person.

## Warum das Deaktivieren des Kontos den Flow nicht deaktiviert

Trigger und Zeitplan eines Cloud-Flows existieren unabhängig davon, ob sein Besitzer sich gerade anmelden kann. Ein Benutzerkonto in Entra ID zu deaktivieren ist eine Identitätskontrolle; sie sagt Power Automate nichts über den Flow, den diese Person zufällig besitzt. Also versucht der Flow weiterhin, nach seinem normalen Zeitplan oder Trigger zu laufen, genau wie vorher — niemand muss daran denken, "die Flows separat abzuschalten", weil die Plattform die beiden Dinge nie verknüpft.

Was tatsächlich fehlschlägt, ist spezifischer: Jede *Verbindung* im Flow, die unter dem deaktivierten Konto autorisiert wurde, beginnt, Aufrufe abzulehnen. Ein geteilter Flow mit einem aktiven Besitzer läuft laut Microsofts eigener Dokumentation zum Teilen von Flows weiter — das Risiko betrifft speziell die Flows, bei denen das Konto der ausgeschiedenen Person die letzte war, die die Verbindung hielt. Ein geplanter, wiederkehrender Flow läuft beispielsweise unter den eigenen Verbindungen des Makers; ist dieser weg, scheitern genau diese Schritte, während der Flow selbst im Maker-Portal weiterhin als "Ein" angezeigt wird.

Genau diese Kombination — Flow sichtbar aktiviert, Ergebnisse still falsch — macht das zu einem Governance-Problem und nicht nur zu einem IT-Hygiene-Punkt. Niemand beobachtet einen Flow, der "in Ordnung aussieht".

## Was tatsächlich kaputtgeht, der Reihe nach

1. **Zuerst die Verbindungen.** Jede Aktion, die eine vom deaktivierten Konto erstellte Verbindung nutzt, meldet sofort oder beim nächsten Lauf einen Fehler, je nach Connector.
2. **Danach die Lizenzierung, falls relevant.** Wird der Besitz des Flows an eine Person ohne passende Premium-Lizenz übertragen, gewährt Power Automate eine Übergangsfrist von 30 Tagen, bevor der Flow automatisch abgeschaltet wird — eine echte Frist, kein sofortiger Stopp.
3. **Der Zustand des Flows selbst, nie automatisch.** Nichts in dieser Kette schaltet den Flow von sich aus ab. Er bleibt "Ein", bis ihn jemand aktiv deaktiviert, neu zuweist, oder er in einem Review auffällt.

## Die Lösung, die Microsoft tatsächlich empfiehlt

Für Flows, auf die ein Unternehmen wirklich angewiesen ist, schlägt Microsofts Anleitung zum Flow-Besitz keine besseren Offboarding-Checklisten vor — sie schlägt vor, einzelne Personen aus der Besitzfrage komplett herauszunehmen, indem ein **Dienstprinzipal (SPN)** statt eines Benutzerkontos als Besitzer fungiert. Die genannten Vorteile sind konkret: SPN-besessene Flows hängen an keiner einzelnen Mitarbeiterin, Austritte stören sie also nicht; Berechtigungen lassen sich enger fassen als der Alltagszugriff einer Person; und der Audit-Trail spiegelt die Automation selbst wider, nicht wer sie gerade in diesem Quartal besass.

SPN-Besitz braucht trotzdem eine Antwort auf die Lizenzierung, denn einem nicht-interaktiven Dienstprinzipal wird nie direkt eine Lizenz zugewiesen. Power Automate unterstützt, einen separaten, *lizenzierten* Mitbesitzer zu benennen, unter dessen Berechtigung der Flow läuft — der SPN bleibt der eingetragene Besitzer, eine echte Person deckt nur die Premium-Lizenzpflicht ab. Wird dieser Schritt übersprungen, wird ein SPN-besessener Flow mit Premium-Funktionen wegen Nichteinhaltung ausgesetzt.

## Der monatliche Sweep, der abdeckt, was SPN-Besitz noch nicht erfasst

Nicht jeder Flow wird sofort auf Dienstprinzipal-Besitz umgestellt, und gerade Altflows von längst ausgeschiedenen Personen sind die, die eine einmalige Aufräumaktion übersieht. Der praktische Behelf: ein monatlicher (oder häufigerer) Abgleich der Flow-Besitzer gegen den Active-Directory-Status — das [Power-Platform-Admin-Center-Flow-Inventar](https://admin.powerplatform.microsoft.com) plus die Benutzerliste des Tenants reichen aus, um das als eigenen geplanten Flow zu bauen, ganz ohne separates Tooling, der jeden Flow mit deaktiviertem Besitzer markiert, damit ihn jemand bewusst neu zuweist, statt dass er weiter still vor sich hin verkümmert.

## Wen betrifft das

- Admins/CoE: für jeden Flow, auf den das Unternehmen wirklich angewiesen ist, den Besitz auf einen Dienstprinzipal mit lizenziertem Mitbesitzer umstellen statt auf eine Person — das ist die eine Änderung, die dieses gesamte Ausfallmuster strukturell unmöglich macht, statt es erst hinterher zu bemerken.
- Maker: wer einen Flow von einer ausgeschiedenen Person übernimmt, sollte jede Verbindung darin prüfen, nicht nur ob "Ein" angezeigt wird — ein Flow kann im Maker-Portal völlig gesund aussehen, während einzelne Schritte seit Wochen still scheitern.
- Security/Compliance: den Sweep nach deaktivierten Besitzern als feste, geplante Prüfung einrichten statt als einmalige Offboarding-Aufgabe — das Risiko ist nicht der Tag, an dem jemand geht, sondern jeder Tag danach, an dem niemand die zurückgelassenen Flows erneut prüft.
