---
title: "Schatten-IT ist kein Disziplinproblem, sondern ein Latenzproblem"
description: "Warum Nachfrage nach einem Tool nicht verschwindet, wenn IT nein sagt, warum die Trennung zwischen Business und IT selbst Workarounds erzeugt, und warum ein langsames Ja genauso viel Schatten-IT schafft wie ein stilles Nein."
date: "2026-09-24T09:00:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - shadow-it
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-05.png"
  alt: "Governance-Karte: Unterwegs — der schnellste legale Weg schlägt jede Lockdown-Massnahme."
permalink: "/de/posts/gov-shadow-it-root-cause/"
translation_url: "/en/posts/gov-shadow-it-root-cause/"
---

## TL;DR

Schatten-IT entsteht nicht, weil Maker Regeln ignorieren — sie entsteht, weil der legale Weg **langsamer ist als der illegale**. Eine Anfrage, die sechs Wochen braucht, lässt das zugrunde liegende Geschäftsbedürfnis nicht verschwinden; sie führt dazu, dass jemand stattdessen ein Tool auf der privaten Kreditkarte kauft. Microsofts eigene Anleitung zur Low-Code-Adoption benennt die strukturelle Ursache direkt: eine organisatorische Lücke zwischen Business und IT, die keine Seite allein schliessen kann — geschlossen wird sie, indem ein Maker mit einem IT-Partner pro Projekt gepaart wird, statt Anfragen über einen Zaun zu leiten. Und was tatsächlich funktioniert, ist nicht ein schnelleres "Ja" — es ist eine schnelle **Antwort**, denn ein stilles "noch in Prüfung" erzeugt genauso viel Schatten-IT wie ein explizites "Nein".

## Nachfrage verschwindet nicht, wenn man nein sagt — sie wechselt das Tool

Eine Anfrage, die monatelang unbeantwortet liegt, löst sich nicht von selbst; die Person mit dem Geschäftsproblem hat weiterhin das Geschäftsproblem und löst es irgendwann ohne dich. Das ist der Mechanismus hinter nicht verwalteten, unlizenzierten Tools auf Spesenabrechnungen: keine Böswilligkeit, keine Schulungslücke, sondern ein Geschäftsbedürfnis, das schneller war als die Reaktionszeit des dafür vorgesehenen Prozesses. Die Abhilfe, die Microsofts Plattform dafür tatsächlich bietet, ist kein grösseres Warnbanner — es ist der [Catalog in Power Platform](https://learn.microsoft.com/power-apps/maker/data-platform/catalog-overview), ein Mechanismus speziell dafür, dass Maker bereits genehmigte Komponenten finden und wiederverwenden können, statt bei einer Kaufentscheidung zu starten. Ein Catalog mit echtem Inhalt konkurriert in Geschwindigkeit mit einem nicht autorisierten Tool auf eine Weise, die ein Richtliniendokument nie schaffen wird, weil er "etwas finden, das bereits funktioniert" zur schnellen Option macht statt den langsamen, nicht autorisierten Kauf.

## Fusion Teams schliessen die Lücke, in der Schatten-IT lebt

Microsofts Anleitung zur Low-Code-Ko-Entwicklung ist deutlich, dass die Spannung hier strukturell ist, nicht persönlich: Die Fähigkeit von Business-Nutzern, isoliert mit dem Prototyping zu beginnen, ist genau das, was Silos und das Wachstum von Schatten-IT überhaupt erst erzeugt — und die Abhilfe ist ein **Fusion-Team**-Modell: Pro-Entwickler, Maker und Admins arbeiten gemeinsam an derselben Lösung, statt dass Business der IT eine Spezifikation über eine Mauer reicht. Das ist wichtig, weil "IT ist zu langsam" und "das Business baut Murks" gleichzeitig wahr sein können, ohne dass eine Seite falsch liegt — es sind zwei Symptome desselben fehlenden Bindegewebes. Einen Maker mit einem IT-Partner pro Projekt zu paaren, statt eine Anfrage durch eine Warteschlange zu leiten, entfernt genau den Übergabepunkt, an dem die Lücke tatsächlich entsteht — es gibt keinen Zaun mehr, an dem die Anfrage warten könnte.

## Ein schnelles Nein schlägt ein langsames Vielleicht — immer

Die Unterscheidung, die es zu treffen lohnt: Der Fehlerfall ist nicht "IT hat nein gesagt". Es ist das **Fehlen einer Antwort**, in beide Richtungen. Eine Anfrage, die innerhalb von drei Tagen eine explizite Absage erhält, ist ein geschlossener Kreislauf — die anfragende Person weiss, woran sie ist, und kann eskalieren oder weiterziehen. Eine Anfrage, die monatelang "in Prüfung" verharrt, ist ein offener Kreislauf, der sich irgendwann von selbst auflöst — nur nicht über den Kanal, den irgendjemand wollte. Genau das ist die Logik hinter Microsofts eigener Anleitung zur Behandlung von DLP-Ausnahmen, die die Antwortzeit als **Teil** der Richtlinie behandelt, nicht als etwas Separates: Ein Ausnahmeprozess ist nur so schützend wie seine langsamste Antwort, weil jede unbeantwortete Anfrage ein Anreiz ist, aufzuhören zu fragen. Die operative Abhilfe ist klein und konkret — ein Anfrageformular, ein fester wöchentlicher Entscheidungstermin und eine verbindliche Antwort innerhalb weniger Tage, wobei "Nein" ein vollkommen akzeptables Ergebnis ist, solange es fristgerecht kommt.

## Wen betrifft das

- Leadership/Business: den schnellen Weg finanzieren, nicht nur die Lockdown-Massnahme — ein Catalog mit vorab genehmigten Komponenten und eine verbindliche mehrtägige Antwortzeit kosten weniger als die Lücke im Audit-Trail, die ein nicht autorisierter Kauf erzeugt.
- Admins/CoE: bei jedem neuen Maker-Projekt einen benannten IT-Kontakt paaren, statt es durch eine Anfrage-Warteschlange zu leiten — das Fusion-Team-Modell schliesst genau die strukturelle Lücke, die sowohl "IT ist zu langsam" als auch "das Business baut Murks" hervorbringt.
- Maker: ein schnelles "Nein" von einem offiziellen Kanal ist ein besseres Ergebnis als ein schnelles "Ja" von der privaten Kreditkarte — Ersteres hält die Daten innerhalb eines Vertrags mit Logs, Letzteres nicht.
