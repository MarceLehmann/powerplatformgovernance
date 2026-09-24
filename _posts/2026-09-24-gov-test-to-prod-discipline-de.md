---
title: "Wer nicht zurückrollen kann, deployt nicht — er würfelt"
description: "Warum jede Nicht-Entwicklungsumgebung nur verwaltete Lösungen sehen sollte, wer Produktiv-Flows besitzen sollte, und wie Verbindungsreferenzen und Umgebungsvariablen nicht mehr bei jedem Deployment von Hand eingegeben werden müssen."
date: "2026-09-24T08:35:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - alm
  - governance
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-22.png"
  alt: "Governance-Karte: Der Drahtseilakt — langweilige Deployments, verlässliche Plattform."
permalink: "/de/posts/gov-test-to-prod-discipline/"
translation_url: "/en/posts/gov-test-to-prod-discipline/"
---

## TL;DR

Verwaltete Lösungen sind keine Formalität — sie sind das, was ein Deployment überhaupt rückgängig machbar macht, denn eine verwaltete Lösung lässt sich sauber deinstallieren, während eine nicht verwaltete ihre Anpassungen dauerhaft zurücklässt. Drei Praktiken machen aus "etwas in Produktion bringen" statt eines riskanten manuellen Rituals einen langweiligen, wiederholbaren Vorgang: ausserhalb der Entwicklung ausschliesslich verwaltete Lösungen importieren, Produktiv-Flows einem Dienstprinzipal statt einer Person gehören lassen, und Verbindungsreferenzen sowie Umgebungsvariablen vorab befüllen, damit niemand sich bei jedem Import die richtigen Werte merken muss.

## Verwaltete Lösungen machen Rollback erst möglich

Eine nicht verwaltete Lösung ist für die Entwicklung gedacht — sie ist bearbeitbar, und wird sie gelöscht, verschwindet nur der Container der Lösung; die enthaltenen Anpassungen bleiben aktiv und gehören fortan zur Standardlösung der Umgebung. Eine verwaltete Lösung verhält sich bewusst umgekehrt: Sie lässt sich nicht direkt bearbeiten (nur über eine darübergelegte nicht verwaltete Lösung), und wird sie gelöscht, verschwindet alles, was sie enthält. Genau dieser Unterschied macht Microsofts eigene ALM-Empfehlung eindeutig: Ausser der Entwicklungsumgebung sollte **jede Umgebung ausschliesslich verwaltete Lösungen enthalten** — Test, UAT, Staging und Produktion gleichermassen. Geht ein Deployment schief, ist das Deinstallieren einer verwalteten Lösung ein sauberer, vollständiger Rollback. Eine nicht verwaltete Lösung in Produktion rückgängig zu machen ist das nicht — ihre Anpassungen sind bereits in die Umgebung verschmolzen, ohne saubere Trennlinie.

## Produktiv-Flows sollten einem Dienstkonto gehören, keiner Person

Das ist keine Präferenz — es ist eine benannte ALM-Best-Practice: **sicherstellen, dass Dienstprinzipale alle Flows in Produktion besitzen**. Die Begründung knüpft direkt an etwas an, das an anderer Stelle auf dieser Seite behandelt wird — eine Person, die einen Flow besitzt, kann das Unternehmen verlassen, ihr Konto kann deaktiviert werden, oder sie verliert schlicht den Zugriff, und die Verbindungen des Flows beginnen zu scheitern, ohne dass der Flow selbst das je anzeigt. Ein Dienstprinzipal kündigt nicht, wird nicht freigestellt, und sein Konto wird nicht als Nebeneffekt eines HR-Prozesses deaktiviert, der mit der davon abhängigen Automation nichts zu tun hat.

## Nicht bei jedem Deployment dieselben Werte neu eingeben

Jeder Solution-Import mit Verbindungsreferenzen oder Umgebungsvariablen fragt normalerweise interaktiv nach umgebungsspezifischen Werten — für einen Einzelfall in Ordnung, für alles Automatisierte ein echtes Problem. Die Lösung ist eine **Deployment-Settings-Datei**: eine JSON-Datei mit den Verbindungs-IDs und Umgebungsvariablenwerten für eine bestimmte Zielumgebung, erzeugt mit `pac solution create-settings --solution-zip <Pfad> --settings-file <Name>` und einmal pro Umgebung ausgefüllt. An den Import-Solution-Task der Power Platform Build Tools übergeben, und die Werte werden automatisch eingesetzt — kein interaktiver Schritt, niemand muss sich merken, welche Verbindungs-ID zu welcher Umgebung gehört. Die Datei zusammen mit der Lösung in der Versionsverwaltung ablegen und sensible Werte darin als Pipeline-Secrets behandeln, nicht als Klartext.

## Wen betrifft das

- Admins/CoE: prüfen, ob eine Nicht-Entwicklungsumgebung aktuell nicht verwaltete Anpassungen enthält — Microsofts eigene Anleitung zur Umstellung von nicht verwaltet auf verwaltet existiert genau deshalb, weil das ein häufiger Befund ist, kein seltener.
- Maker: in der Entwicklung wie gewohnt bauen und iterieren, aber "in Produktion bringen" nicht mehr als Export der eigenen Arbeitskopie verstehen — es sollte immer heissen, die verwaltete Lösung zu importieren, die die Pipeline daraus erzeugt hat.
- Leadership/Business: ein Deployment, das sich nicht sauber rückgängig machen lässt, ist kein Deployment-Prozess, sondern bei jedem Release ein unkontrolliertes Risiko — fragen, ob Produktion tatsächlich nur verwaltete Lösungen enthält, bevor der aktuelle Release-Prozess als verlässlich gilt.
