---
title: Wie man die Power-Platform-Standardumgebung regelt
description: Eines von drei Modellen für die Default Environment wählen - nur persönliche
  Produktivität, geduldet aber überwacht, oder gesperrt - und niemals mischen.
date: '2026-09-24T00:20:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- dlp
content_type: curated_summary
curation_id: 900f3c4394c14e62694dc6cd
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-02.png
  alt: 'Governance-Karte: Der Spielplatz — echte Lösungen bekommen echte Umgebungen.'
permalink: "/de/posts/how-to-govern-the-power-platform-default-environment-900f3c43/"
translation_url: "/en/posts/how-to-govern-the-power-platform-default-environment-900f3c43/"
source_url: https://www.michaelroth42.com/post/2026-02-10-how-to-govern-the-power-platform-default-environment/
source_site_url: https://www.michaelroth42.com/
source_title: How to Govern the Power Platform Default Environment
source_name: michaelroth42.com
source_author: Michael Roth
source_language: en
source_language_name: English
source_published_at: '2026-02-10'
faq:
  - question: "Lässt sich die Standardumgebung der Power Platform auf eine Sicherheitsgruppe beschränken?"
    answer: "Nein. In der Standardumgebung hat jede Person im Mandanten Zugriff, auch externe Gäste und B2B-Benutzer, und sie lässt sich nicht über übliche Sicherheitsgruppen verwalten. Manuelle Sicherungen sind ebenfalls nicht möglich, auf Sicherungsdaten kommst du aber über die Zusammenarbeit mit dem Microsoft-Support. Deshalb verlangt der Artikel, den Zweck der Umgebung festzulegen."
  - question: "Was bewirkt Freigabe für alle in der Standardumgebung tatsächlich?"
    answer: "Technisch erhalten alle Benutzerkonten im Verzeichnis Berechtigungen, darunter externe Gäste und teils Dienstkonten oder verwaltete Identitäten. Maker denken meist nur an ihre Kollegen, der echte Kreis ist viel grösser als gedacht. Der Artikel sieht in dieser unsichtbaren Ausweitung das Hauptrisiko und empfiehlt, die Freigabe für alle abzuschalten."
  - question: "Welche Governance-Modelle nennt der Artikel für die Standardumgebung?"
    answer: "Drei: reine persönliche Produktivität, die der Autor empfiehlt, dann geduldet aber unerwünscht als Übergangsphase für bestehende Mandanten mit erwarteter Migration, und für Maker gesperrt, wobei sie in eigene Lernumgebungen umgeleitet werden. Mischformen machen alles unberechenbar, also wähle eines und dokumentiere es. Eine Sperre braucht eine brauchbare Alternative, sonst entstehen Umgehungen."
  - question: "Welche Lizenz-Standardeinstellungen verursachen versteckte Kosten in der Standardumgebung?"
    answer: "Testversionen und virale Pläne, Selbstbedienungskäufe und Auto-Claim-Richtlinien. Testversionen laufen unbemerkt ab und legen darauf gebaute Lösungen lahm, Käufe erzeugen nie genehmigte Verpflichtungen, und Auto-Claim weist Premium-Lizenzen zu, sobald jemand Premium-Funktionen berührt. Eine geteilte App mit Premium-Funktionen kann so Lizenzzuweisungen für alle auslösen, die sie öffnen."
  - question: "Was gehört in die Mindestbasis für die Standardumgebung?"
    answer: "Freigabe für alle abschalten, Testversionen und virale Pläne reduzieren oder deaktivieren, Selbstbedienungskäufe sperren und Auto-Claim-Richtlinien ausschalten. Dazu kommen eine strenge, bewusst gewählte DLP-Richtlinie, geplante Prüfungen, die Verstösse erkennen und Verantwortliche benachrichtigen, und eine klar benannte Ausweichumgebung zum Experimentieren. Vor jeder Durchsetzung sollten Maker die Regeln und ihren Grund kennen, etwa über einen zentralen Hub."
---
## TL;DR

Genau ein Modell für die Default Environment wählen — nur persönliche Produktivität, geduldet-aber-überwacht, oder gesperrt für Maker — und diese nie im selben Tenant mischen. Basis-Kontrollen in jedem Fall: Teilen mit "Jeder" deaktivieren (wer teilt, weiss selten, wer "jeder" tatsächlich alles einschliesst), Trials, virale Pläne und Auto-Claim-Richtlinien abschalten, die Premium-Lizenzen ohne Entscheidungspunkt vergeben, und geplante Flows einsetzen, die blockierte Connectors oder übermässig geteilte Lösungen melden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: prüfen, welches der drei Modelle aktuell tatsächlich gilt — ein Tenant, der je nach Nachfrage alle drei gleichzeitig fährt, ist der eigentliche Befund, nicht die Frage nach dem "besten" Modell.
- Security/Compliance: kontrollieren, ob Teilen mit "Jeder" deaktiviert ist und Auto-Claim-Richtlinien keine Premium-Lizenzen ohne Entscheidungspunkt vergeben, da beides gängige, nie überprüfte Standardeinstellungen sind.
- Maker: brauchen eine benannte Alternativumgebung zum Bauen, bevor die Default Environment gesperrt wird — sonst umgehen sie die Richtlinie genau an dem Tag, an dem sie greift.
