---
layout: page
title: "KI-Kosten im Vergleich: AI Builder, Copilot Credits, Azure AI Foundry, Document Intelligence"
description: "Vergleiche die Listenpreise pro Einheit, Lizenzvoraussetzungen und Nutzung aus Power Automate für AI Builder, Copilot Credits, Azure AI Foundry und Document Intelligence."
lang: de
toc: true
permalink: "/de/knowledge/ai-cost-comparison/"
translation_url: "/knowledge/ai-cost-comparison/"
last_reviewed: "2026-10-23"
---

Vergleiche die Kosten pro Prompt, Dokumentseite und Textmenge sowie die Voraussetzungen für die Nutzung aus Power Automate.

[Read this in English](/knowledge/ai-cost-comparison/) | [Zur Wissensübersicht](/knowledge/)

## TL;DR

Der Vergleich zeigt USD-Listenpreise für AI Builder, Copilot Credits, Azure AI Foundry und Azure AI Document Intelligence, ohne Rabatte, Stand Oktober 2026. AI Builder basiert auf jährlich vorausbezahlter Tier-1-Monatskapazität, Copilot Credits auf Pay-as-you-go; Prompts rechnen mit 1'000 Tokens bei 90 % Input und 10 % Output. Eine Rechnungsseite kostet $0.016 mit AI Builder, $0.080 mit Copilot Credits und $0.010 mit Document Intelligence. Die Foundry-Zuordnung zu Basis und Premium ist eine Annahme; beim Premium-Beispiel stehen $0.0038 in Foundry den $0.091 mit AI Builder und $0.100 mit Copilot Credits gegenüber.

## Preise pro Einheit

Alle Beträge sind USD pro angegebener Einheit. Die Prompt-Werte sind Schätzungen unter den unten genannten Annahmen.

| Fähigkeit (Einheit) | AI Builder | Copilot Credits | Azure AI Foundry | Document Intelligence |
| --- | --- | --- | --- | --- |
| Prompt Basis-Modell (1'000 Tokens) | $0.0006 | $0.001 | $0.0011 (GPT-5.4 mini, Annahme) | nicht verglichen |
| Prompt Standard-Modell (1'000 Tokens) | $0.012 | $0.015 | keine feste Zuordnung | nicht verglichen |
| Prompt Premium-Modell (1'000 Tokens) | $0.091 | $0.100 | $0.0038 (GPT-5.4, Annahme) | nicht verglichen |
| Rechnung/Beleg/Ausweis (1 Seite) | $0.016 | $0.080 | nicht verglichen | $0.010 (Prebuilt) |
| Vertrag/Krankenkassenkarte (1 Bild; Document Intelligence: 1 Seite) | $0.016* | $0.080* | nicht verglichen | $0.010 (Prebuilt) |
| Eigene Dokumentverarbeitung (1 Seite) | $0.050 | $0.080 | - | $0.030 (Custom Extraction) |
| Texterkennung OCR (1 Seite) | $0.0015 | $0.001 | nicht verglichen | $0.0015 (Read) |
| Objekterkennung (1 Bild) | $0.004 | $0.080 | nicht verglichen | nicht verglichen |
| Bildbeschreibung (1 Bild) | $0.016* | $0.080* | nicht verglichen | nicht verglichen |
| Einfache Textanalyse: Stimmung, Sprache, Schlüsselbegriffe (1'000 Zeichen) | $0.001 | $0.001 | nicht verglichen | nicht verglichen |
| Erweiterte Textanalyse: Kategorien, Entitäten (1'000 Zeichen) | $0.010 | $0.015 | nicht verglichen | nicht verglichen |
| Textübersetzung (1'000 Zeichen) | $0.011 | $0.015 | nicht verglichen | nicht verglichen |

Quelle und Stand, AI Builder: [Capability Rate Table](https://learn.microsoft.com/en-us/ai-builder/administer-licensing), Oktober 2026, abgerufen 23.10.2026.

Quelle und Stand, Copilot Credits: [Capability Rate Table](https://learn.microsoft.com/en-us/ai-builder/administer-licensing), [Credit-Verwaltung](https://learn.microsoft.com/en-us/ai-builder/message-management) und [Copilot Studio Billing Rates](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management), Oktober 2026, abgerufen 23.10.2026.

Quelle und Stand, Azure AI Foundry: [Azure Retail Prices API](https://prices.azure.com/api/retail/prices) und [Azure-OpenAI-Preisseite](https://azure.microsoft.com/en-us/pricing/details/azure-openai/), Global Standard, abgefragt 23.10.2026.

Quelle und Stand, Document Intelligence: [Azure Retail Prices API](https://prices.azure.com/api/retail/prices) und [Preisseite](https://azure.microsoft.com/en-us/pricing/details/ai-document-intelligence/), Pay-as-you-go S0, Sweden Central, abgefragt 23.10.2026.

*Vertrag und Bildbeschreibung sind gratis, solange sie in der Preview sind. Die Tabelle zeigt die regulären Raten. Bei Vertrag und Krankenkassenkarte vergleicht sie einen Preis pro Bild mit einem Preis pro Seite.

Objekterkennung und Bildbeschreibung gehören zu Azure AI Vision. Textanalyse und Übersetzung laufen über Azure AI Language bzw. Translator. Diese Dienste sind nicht Teil des Vergleichs.

Weitere Document-Intelligence-Raten für S0 in Sweden Central:

| Modell | USD pro 1'000 Seiten | USD pro Seite |
| --- | --- | --- |
| Read (OCR) | $1.50; ab 1 Mio. Seiten pro Monat $0.60 | $0.0015 vor der Volumenstufe |
| Prebuilt | $10.00 | $0.010 |
| Layout | $10.00 | $0.010 |
| Custom Extraction | $30.00 | $0.030 |
| Add-on Query Fields | $10.00 | $0.010 |
| Add-on High Resolution, Font, Formula | $6.00 | $0.006 |
| Custom Classification | $3.00 | $0.003 |

Die Gratis-Stufe F0 enthält 500 Seiten pro Monat. Das Training eines Custom-Template-Modells ist gratis.

## Annahmen und Umrechnung

1 Copilot Credit entspricht $0.01 bei Pay-as-you-go. Für AI Builder gilt das jährlich vorausbezahlte Add-on Tier 1 mit 1 Million Credits pro Monat für $500 pro Monat. Daraus ergeben sich $0.0005 pro AI Builder Credit. Vorausbezahlte Monatskapazität und Pay-as-you-go sind kein ganz gleicher Vergleich.

Ein Prompt umfasst hier 1'000 Tokens, davon 900 Input und 100 Output. Die exakten AI-Builder-Raten pro 1'000 Tokens betragen für Input/Output beim Basis-Modell 1/3 Credits, beim Standard-Modell 20/60 und beim Premium-Modell 140/560. Microsoft berechnet zusätzlich einen versteckten System-Prompt von ca. 1'200 Input-Tokens. Dieser ist in den Prompt-Beispielen nicht enthalten. Den tatsächlichen Verbrauch kannst du aus der Ausgabe von «Run a prompt» über promptTokens und completionTokens auslesen.

Die Copilot-Raten für «Text and generative AI tools» betragen basic 0.1, standard 1.5 und premium 10 Credits pro 1'000 Tokens, 1'000 Zeichen oder Seite, je nach Fähigkeit. «Content processing tools» kosten 8 Credits pro Seite oder Bild. Agent Flow Actions kosten zusätzlich 13 Copilot Credits pro 100 Aktionen.

Microsoft veröffentlicht keine Modellzuordnung für Basis, Standard und Premium. Für Foundry nehmen wir Basis = GPT-5.4 mini und Premium = GPT-5.4 an. Für Standard gibt es hier keine feste Zuordnung.

| Foundry-Modell, Global Standard | Input pro 1 Million Tokens | Output pro 1 Million Tokens |
| --- | --- | --- |
| GPT-5.4 mini | $0.75 | $4.50 |
| GPT-5.4 | $2.50 | $15.00 |

Für GPT-5.4 mini ergibt sich 900 × $0.75 / 1'000'000 + 100 × $4.50 / 1'000'000 = $0.000675 + $0.00045 = $0.001125, gerundet $0.0011. Für GPT-5.4 ergibt sich 900 × $2.50 / 1'000'000 + 100 × $15.00 / 1'000'000 = $0.00225 + $0.0015 = $0.00375, gerundet $0.0038.

Azure-Preise können je Region und Bereitstellungsart Global, Data Zone oder Regional abweichen. Azure rechnet über das Azure-Abonnement ab, nicht über Power-Platform-Lizenzen. Nicht enthalten sind Einrichtung, Betrieb und Fehlersuche sowie Netz-/Speicherkosten und Support.

## Lizenz-Stand von AI Builder

Neukunden müssen Copilot Credits kaufen. Das AI-Builder-Add-on ist nur noch für Bestandskunden als Verlängerung oder Aufstockung bis **1. November 2026** erhältlich.

Ab 1. November 2026 enthalten neue oder verlängerte Power-Platform- und Dynamics-365-Lizenzen keine beigelegten AI Builder Credits mehr.

AI-Builder-Aktionen sind Premium-Connectors. Ein Flow mit einer solchen Aktion braucht eine Premium-Lizenz; in Power Apps wird die App zur Premium-App. Bei Pay-as-you-go fällt der Cloud-Flow-Run-Meter getrennt vom Credit-Verbrauch an.

In Copilot Studio verwenden Agenten und Agent Flows für AI-Builder-Fähigkeiten immer Copilot Credits. Power Apps und Power Automate verbrauchen zuerst AI Builder Credits und danach Copilot Credits.

## So nutzt du es aus Power Automate

### AI Builder

Nutze AI-Builder-Aktionen wie «Run a prompt» oder Aktionen für Rechnungen, Belege, OCR und eigene Dokumentmodelle.
Der Flow ist ein Premium-Flow und braucht eine Premium-Lizenz sowie verfügbare Credit-Kapazität.
Er verbraucht zuerst AI Builder Credits und danach Copilot Credits; promptTokens und completionTokens zeigen den Prompt-Verbrauch.

### Copilot Credits

Nutze dieselben AI-Builder-Aktionen im Premium-Flow, wenn keine AI Builder Credits in der Umgebung vorhanden sind; in Copilot Studio nutzen Prompt-Tools und Agent Flows immer Copilot Credits.
Kapazität erhältst du per Prepaid-Pack oder Pay-as-you-go mit einem Azure-Abonnement, das du mit der Umgebung verknüpfst; für den AI-Builder-Flow brauchst du eine Premium-Lizenz.
Den Verbrauch siehst du im Power Platform Admin Center. Bei Überschreitung von 125 Prozent der vorausbezahlten Kapazität werden Agenten gesperrt und neue Agent-Flow-Läufe blockiert.

### Azure AI Foundry

Der Connector «Azure OpenAI» ist Premium in Power Automate, Power Apps und Copilot Studio; nutze «Creates a completion for the chat message» mit Deployment-ID und API-Version.
Du brauchst ein Azure-Abonnement und eine Ressource mit Modell-Deployment; die Anmeldung erfolgt per API-Key oder Microsoft Entra ID.
Der Connector unterstützt keine Bilder im Nachrichteninhalt und kein Function Calling. Alternativ kannst du die Premium-HTTP-Aktion gegen den Ressourcen-Endpunkt für neuere Funktionen nutzen.

### Azure AI Document Intelligence

Der Connector «Azure AI Document Intelligence (form recognizer)» ist Standard in Power Automate und Copilot Studio und in Power Apps nicht verfügbar.
Nutze «Analyze Document for Prebuilt or Custom models (v4.x API)» mit einer Modell-ID wie prebuilt-invoice, prebuilt-receipt, prebuilt-idDocument, prebuilt-read, prebuilt-layout oder einem eigenen Modell.
Du brauchst eine Document-Intelligence-Ressource im Azure-Portal; melde dich mit Endpoint und API-Key oder Entra ID an. Alternativ steht die Premium-HTTP-Aktion zur Verfügung.

## Wann lohnt sich was

Einschätzung von KMUpower, keine Aussage von Microsoft. Die Einheitspreise enthalten keinen Aufwand für Einrichtung, Betrieb oder Fehlersuche.

| Kriterium | Einschätzung von KMUpower |
| --- | --- |
| Wenige Dokumente oder Prompts, geringer Startaufwand | AI Builder oder Copilot Credits sind schnell startklar, brauchen kein Azure-Abonnement und kein Schlüsselmanagement. Den Verbrauch siehst du zentral im Admin Center. Für Neukunden bleiben nur Copilot Credits. |
| Viele Dokumentseiten | Document Intelligence direkt: Eine Rechnungsseite kostet $0.010 statt $0.080 mit Copilot Credits bzw. $0.016 mit AI Builder, also 8-mal bzw. 1.6-mal weniger. Du brauchst eine Azure-Ressource, Schlüssel oder Entra-Zugriff und eigene Fehlerbehandlung im Flow. |
| Sehr viele Prompts oder gezielte Modellwahl | Foundry direkt bietet Modellwahl und Parameter sowie Abrechnung über das Azure-Guthaben. Der Token-Preis wird ohne Aufschlag und ohne System-Prompt abgerechnet. |
| Datenschutz und Region | Bei Foundry legst du Ressource und Region selbst fest. Zugriff per Entra ID statt gemeinsamem Schlüssel ist möglich. |

## Quellen

1. [AI Builder Capability Rate Table](https://learn.microsoft.com/en-us/ai-builder/administer-licensing), abgerufen 23.10.2026.
2. [Copilot Credits für AI Builder](https://learn.microsoft.com/en-us/ai-builder/message-management), abgerufen 23.10.2026.
3. [Copilot Studio Billing Rates](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management), abgerufen 23.10.2026.
4. [AI Builder Credits und Lizenz](https://learn.microsoft.com/en-us/ai-builder/credit-management), abgerufen 23.10.2026.
5. [Prompt-Tokens](https://learn.microsoft.com/en-us/ai-builder/licensing-prompt-tokens), abgerufen 23.10.2026.
6. [Azure Retail Prices API](https://prices.azure.com/api/retail/prices), [Azure-OpenAI-Preise](https://azure.microsoft.com/en-us/pricing/details/azure-openai/) und [Document-Intelligence-Preise](https://azure.microsoft.com/en-us/pricing/details/ai-document-intelligence/), abgerufen 23.10.2026.
7. [Connector Azure OpenAI](https://learn.microsoft.com/en-us/connectors/azureopenai/), abgerufen 23.10.2026.
8. [Connector Azure AI Document Intelligence (form recognizer)](https://learn.microsoft.com/en-us/connectors/formrecognizer/), abgerufen 23.10.2026.

## Häufige Fragen

### Kannst du als Neukunde noch das AI-Builder-Add-on kaufen?

Nein. Neukunden müssen Copilot Credits kaufen. Bestandskunden können das Add-on bis 1. November 2026 verlängern oder aufstocken.

### Braucht jeder Document-Intelligence-Flow eine Premium-HTTP-Aktion?

Nein. Der Document-Intelligence-Connector ist in Power Automate Standard. Die alternative HTTP-Aktion ist Premium.

### Warum kann dein Prompt mehr Tokens verbrauchen als im Beispiel?

Microsoft zählt bei AI Builder einen versteckten System-Prompt von ca. 1'200 Tokens zum Input. Die Beispiele rechnen nur mit 900 Input- und 100 Output-Tokens.

### Sind Tests und Training kostenpflichtig?

Tests im Prompt Builder und auf der Seite AI Models sowie Training sind gratis. Visitenkartenleser und Prediction sind ebenfalls gratis. Document Intelligence bietet F0 mit 500 Seiten pro Monat und gratis Training für Custom-Template-Modelle.

### Ist Foundry Premium dasselbe Modell wie AI Builder Premium?

Microsoft veröffentlicht diese Zuordnung nicht. GPT-5.4 als Gegenstück zu Premium ist hier eine Annahme.
