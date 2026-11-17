---
title: "Drei Zugriffsgewohnheiten, die still alles andere untergraben"
description: "Sicherheitsrollen nach dem Prinzip der geringsten Rechte, Freigabe an Gruppen statt an Einzelpersonen, und jeden offenen HTTP-Endpunkt als bewusste Entscheidung behandeln."
date: "2026-09-24T08:25:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - security
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-01.png"
  alt: "Governance-Karte: Der Schatten-Admin: gib das Minimum, protokolliere den Rest."
permalink: "/de/posts/gov-access-control-basics/"
translation_url: "/en/posts/gov-access-control-basics/"
faq:
  - question: "Welche vordefinierte Sicherheitsrolle vergebe ich statt System Administrator?"
    answer: "Vergib die am engsten gefasste vordefinierte Rolle, die zur Aufgabe passt."
  - question: "Warum sollte ich die Rolle System Administrator nicht kopieren, um eine neue Rolle zu bauen?"
    answer: "Kopierte Rollen übernehmen neue Rechte aus Produkt-Updates nicht automatisch und veralten deshalb still."
  - question: "Was bringt die Freigabe an eine Sicherheitsgruppe statt an einzelne Personen?"
    answer: "Eine Sicherheitsgruppe steuert den Zugriff an einem Ort: Wer hinzukommt, ist drin, wer entfernt wird, ist draussen. Einzelfreigaben erzeugen pro Person eine eigene Berechtigung, die einzeln gefunden und entzogen werden muss."
---

## TL;DR

Keine der drei Gewohnheiten hier braucht ein neues Tool: die am wenigsten privilegierte vordefinierte Sicherheitsrolle zuweisen, die eine Aufgabe tatsächlich braucht, statt standardmässig System Administrator zu vergeben; Apps und Flows an Sicherheitsgruppen statt an Einzelpersonen nacheinander freigeben; und jeden nicht authentifizierten HTTP-Trigger als bewusst getroffene Richtlinienentscheidung behandeln, nicht als Standard, den niemand angeschaut hat. Jede davon ist eine Fünf-Minuten-Änderung, die später eine viel grössere Aufräumaktion erspart.

## Least Privilege ist kein Slogan, sondern eine konkrete vordefinierte Rolle

Dataverse liefert vordefinierte Sicherheitsrollen, die um tatsächliche Aufgaben herum gebaut sind statt um pauschalen Zugriff, und die Versuchung, System Administrator "sicherheitshalber" zu kopieren, untergräbt das ganze Modell. Für Umgebungen ohne Dataverse-Datenbank sind die beiden massgeblichen Rollen bewusst eng gefasst: **Environment Admin** kann die Umgebung verwalten und eine Datenbank bereitstellen, während **Environment Maker** Apps, Verbindungen und Flows erstellen kann, aber keine Rechte auf die Daten darin hat. Sobald Dataverse existiert, wird System Administrator zur tatsächlichen Vollzugriffsrolle. Genau deshalb sollte sie nicht die alltägliche Zuweisung für irgendjemanden sein.

Zwei praktische Leitplanken lohnen sich direkt: die System-Administrator-Rolle nicht kopieren, um eine neue zu erstellen, denn kopierte Rollen übernehmen neue Rechte aus Produkt-Updates nicht automatisch und veralten still; und wenn eine Gruppe von Admins anderen Sicherheitsrollen zuweisen können soll, ohne selbst vollständige System Administrators zu sein, das als eigene, eng auf die Security-Role-Tabelle begrenzte benutzerdefinierte Rolle bauen, nicht als Abkürzung über eine breitere Rolle.

## Freigabe an Gruppen ist kein Nice-to-have, sondern der Unterschied zwischen einer Änderung und vierzig

Eine App oder einen Flow an Einzelpersonen nacheinander freizugeben erzeugt genauso viele Zugriffsberechtigungen, wie es Personen gibt, und jede muss beim nächsten Zugriffswechsel einzeln gefunden und entzogen werden. Freigabe an eine Sicherheitsgruppe bedeutet dagegen, dass der Zugriff an einem Ort gesteuert wird: jemanden zur Gruppe hinzufügen, und er ist drin; entfernen, und er ist draussen, ohne Aufräumarbeit bei jeder einzelnen Ressource, in der die Gruppe verwendet wurde.

Das summiert sich besonders beim Offboarding. Eine individuell freigegebene App ist für jeden Prozess unsichtbar, der auf Gruppenmitgliedschaft im Verzeichnis aufbaut: jemanden aus einer Sicherheitsgruppe zu entfernen, rührt eine App-Freigabe, die namentlich hinzugefügt wurde, überhaupt nicht an. Prüft der eigene Zugriffs-Review-Prozess die Gruppenmitgliedschaft, sind individuelle Freigaben genau das, was er übersieht.

## Jeder offene HTTP-Endpunkt ist eine Entscheidung (ob sie jemand getroffen hat oder nicht)

Ein HTTP-getriggerter Flow ohne Authentifizierung ist in dem Moment, in dem er gespeichert wird, ein öffentlicher Endpunkt, erreichbar für jeden, der die URL kennt oder errät, unbegrenzt, bis es jemand bemerkt. Das Risiko ist nicht, dass HTTP-Trigger existieren; sie sind ein legitimes Integrationsmuster. Das Risiko ist, dass "keine Authentifizierung konfiguriert" der Standardzustand ist, keine Entscheidung. Es passiert also durch Unterlassung, nicht durch bewusste Wahl.

Die Lösung ist nicht kompliziert: eine explizite Authentifizierungsmethode verlangen (Microsoft-Entra-ID-Authentifizierung auf der Anfrage, eine API-Schlüsselprüfung im Flow selbst, oder den Aufruf über eine API-Management-Schicht leiten, die die Authentifizierung übernimmt, bevor der Flow die Anfrage überhaupt sieht) und das zu einem festen Prüfpunkt für jeden HTTP-Trigger machen, genauso wie ein Code-Review eine nicht authentifizierte API-Route melden würde.

## Wen betrifft das

- Admins/CoE: prüfen, wer aktuell System Administrator besitzt, und für jeden einzelnen fragen, welche vordefinierte Rolle tatsächlich abdeckt, was diese Person macht. Bei den meisten wird es nicht die Rolle sein, die sie standardmässig bekommen haben.
- Maker: beim Veröffentlichen einer App oder eines Flows standardmässig an eine Sicherheitsgruppe freigeben, auch bei kleinen Dingen. Es kostet jetzt denselben Aufwand und erspart jemand anderem, den eigenen Namen beim nächsten Zugriffs-Review unter vierzig Einzelfreigaben wiederzufinden.
- Security/Compliance: "braucht dieser HTTP-Trigger eine Authentifizierung" zu jedem bestehenden Review für neue Flows hinzufügen: eine einzeilige Prüfung, die einen echten, still entstandenen öffentlichen Endpunkt abfängt, bevor er ein Jahr lang unbemerkt live war.
