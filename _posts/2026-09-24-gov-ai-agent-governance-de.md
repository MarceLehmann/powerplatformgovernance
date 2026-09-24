---
title: "Ein Agent kann jeden Test bestehen und trotzdem falsch antworten"
description: "Warum Agent-Evaluation Korrektheit beweist, nicht Sicherheit, warum Grounding auf berechtigungsbeschränkte Daten die eigentliche Abhilfe gegen selbstsicher-falsche Antworten ist, und warum das, was ein Agent behält, eine eigene Governance-Entscheidung ist."
date: "2026-09-24T08:55:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - copilot-studio
  - governance
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-35.png"
  alt: "Governance-Karte: Das Orakel — dein Agent ist selbstsicher, liegt er auch richtig?"
permalink: "/de/posts/gov-ai-agent-governance/"
translation_url: "/en/posts/gov-ai-agent-governance/"
---

## TL;DR

Microsofts eigene Anleitung für Copilot Studio trifft eine Unterscheidung, die sich zu verinnerlichen lohnt: **Agent-Evaluation misst Korrektheit und Performance, nicht KI-Ethik oder Sicherheitsprobleme — ein Agent kann jeden Testfall bestehen und trotzdem eine unangemessene Antwort geben.** Einen Agenten verantwortungsvoll zu bauen heisst, dieselbe Governance-Checkliste durchzugehen, die eine gewöhnliche App auch bräuchte — benannter Besitzer, festgelegte Datengrenzen, ein Eskalationsweg — plus zwei Dinge, die speziell für Agenten gelten: jede Antwort auf Daten zu gründen, die der anfragende Nutzer tatsächlich sehen darf, und das, was der Agent behält, als eigene Governance-Entscheidung zu behandeln, nicht als Nebenprodukt, um das man sich später kümmert.

## Dieselben fünf Fragen, mit grösserem Wirkungsradius

Microsofts Anleitung zur Definition von Agent-Wert ist deutlich, dass Governance keine aufgesetzte Steuer ist — sie ist das, wovon der ROI des Agenten abhängt, und sie verlangt dieselben Grundlagen, die jede gut geführte App bräuchte: eine benannte, verantwortliche Führungsperson für das Agent-Portfolio, eine dokumentierte Responsible-AI-Folgenabschätzung vor der Bereitstellung, durchgesetzte Datenresidenz und Sensitivitätskennzeichnungen, damit der Agent nur Inhalte zeigt, für die seine Nutzer berechtigt sind, einen sichtbaren Eskalationsweg zu einem Menschen, und ein bei der Erstellung festgelegtes Abschaltkriterium statt einer späteren Improvisation. Nichts davon ist im Kern agentenspezifisch — es ist dieselbe Besitz- und Zugriffsdisziplin, die jede Lösung braucht. Der Unterschied ist der Einsatz: Ein Agent handelt sofort und in grossem Massstab auf Basis unvollständiger oder falscher Informationen, wo eine Person vielleicht innegehalten und nachgefragt hätte.

## Eine bestandene Evaluation ist nicht dasselbe wie sicher zu sein

Das ist die Unterscheidung, die sich zu verinnerlichen lohnt: Evaluationswerkzeuge messen, ob die Antworten eines Agenten gegen einen Testdatensatz *korrekt* sind — und Microsofts eigene Migrationsanleitung sagt unmissverständlich, dass dies über Sicherheit, Bias oder Ethik überhaupt nichts aussagt. Ein Modellwechsel kann jeden Regressionstest in der Suite bestehen und trotzdem einen separaten Responsible-AI-Review brauchen, bevor er ausgeliefert wird, weil beide grundverschiedene Dinge prüfen. Praktisch heisst das: Ein Freigabegate, das ausschliesslich auf Evaluationswerten basiert, hat eine echte Lücke — Sicherheit und Compliance brauchen einen eigenen, expliziten Prüfschritt, nicht die Annahme, ein grüner Testlauf decke das mit ab.

## Grounding ist, was selbstsicher-falsche Antworten tatsächlich reduziert

Ein Agent räumt schlechte oder mehrdeutige Eingaben nicht auf — er beschleunigt, was ihm gegeben wird, selbstsicher. Die konkrete Abhilfe, auf die Microsofts eigene Architekturanleitung verweist, ist kein besserer Prompt; es ist, **Antworten auf vertrauenswürdige Datenquellen zu gründen, die auf das beschränkt sind, was der anfragende Nutzer tatsächlich sehen darf**, statt bei etwas Folgenreichem auf modellgenerierte Inhalte zu vertrauen. Ein Agent, der aus einer nicht abgegrenzten oder ungesteuerten Wissensquelle schöpft, riskiert nicht nur eine falsche Antwort — er riskiert eine *selbstsicher vorgetragene* falsche Antwort, ein grundlegend anderer Fehlermodus als eine Person, die sagt: "Ich bin mir nicht sicher."

## Was der Agent behält, ist eine Entscheidung, kein Standard

Gesprächstranskripte werden standardmässig nicht für immer aufbewahrt — aber "wie lange werden sie aufbewahrt" ist eine Governance-Frage mit einer echten Antwort, kein technisches Detail, das man dem überlässt, was Microsoft als Standard mitliefert. Jedes gespeicherte Transkript ist eine Kopie dessen, was ein Nutzer dem Agenten anvertraut hat, irgendwo abgelegt, wo es potenziell unrechtmässig zugänglich sein kann. Das ist ein separater Hebel gegenüber Dataverses eigener Audit-Log-Aufbewahrung (die die Historie von *Systemänderungen* regelt, nicht Gesprächsinhalte) — die Transkript-Aufbewahrung eines Agenten braucht eine eigene, bewusste Entscheidung statt eine standardmässig übernommene.

## Wen betrifft das

- Admins/CoE: dieselbe Governance-Checkliste vor dem Bau durchgehen, die Microsoft für Copilot-Studio-Agenten veröffentlicht — benannter, verantwortlicher Besitzer, dokumentierte Responsible-AI-Folgenabschätzung, sichtbarer Eskalationsweg — bevor ein Agent live geht, nicht erst wenn ein Problem auftaucht.
- Security/Compliance: einen bestandenen Evaluationslauf nicht als Sicherheitsfreigabe werten — Evaluation fängt falsche Antworten ab, nicht schädliche, und ein Responsible-AI-Review ist ein separater, erforderlicher Schritt, den Evaluationswerte nicht ersetzen.
- Maker: jede folgenreiche Antwort auf eine Datenquelle gründen, die auf das beschränkt ist, was der anfragende Nutzer tatsächlich sehen darf, statt den vom Modell selbst generierten Inhalten zu vertrauen — ein ungegroundeter Agent riskiert nicht nur, falsch zu liegen, er riskiert, selbstsicher falsch zu liegen.
