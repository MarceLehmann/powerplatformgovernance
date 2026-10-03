---
title: "DLP ist eine Leitplanke, keine Mauer: Die Mechanik, die wirklich zählt"
description: "Warum die Standardgruppe für Connectors wichtiger ist als sie aussieht, wie Aktions- und Endpunktkontrolle über Blockieren/Erlauben hinausgehen, und warum Tenant-Isolation eine separate Kontrolle ist, die DLP nicht abdeckt."
date: "2026-09-24T08:30:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - dlp
  - security
  - governance
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-03.png"
  alt: "Governance-Karte: Die offene Mauer — DLP ist eine Leitplanke, keine Mauer."
permalink: "/de/posts/gov-dlp-in-practice/"
translation_url: "/en/posts/gov-dlp-in-practice/"
faq:
  - question: "Warum sollte die Standardgruppe in DLP auf Non-Business bleiben statt auf Blocked?"
    answer: "Connectors der Microsoft-365-Enterprise-Lizenz und einige Kern-Connectors der Power Platform sind von einer Blockierung ausgenommen. Steht die Standardgruppe auf Blocked, landen diese ausgenommenen Connectors still in Non-Business, die vermeintlich sichere Einstellung hat also Ausnahmen, die niemand gewählt hat. Lass Non-Business als Standard und verschiebe Connectors nach Bewertung des Risikos gezielt."
  - question: "Was leistet Connector Action Control in einer DLP-Richtlinie?"
    answer: "Sie erlaubt einen Connector, schränkt aber ein, welche seiner Aktionen genutzt werden dürfen, etwa Lese-Aktionen erlauben und alles blockieren, was Daten verändert. Neue Aktionen, die ein Connector nach einem Update erhält, lassen sich automatisch erlauben oder automatisch blockieren, damit sich die Richtlinie nicht unbemerkt lockert. Sie ist präziser als eine pauschale Blockade."
  - question: "Für welche Connectors gibt es Endpoint Filtering in DLP?"
    answer: "Endpoint Filtering gibt es für sechs Connectors: HTTP, HTTP mit Microsoft Entra ID, HTTP Webhook, SQL Server, Azure Blob Storage und SMTP. Es steuert, welche konkreten Endpunkte ein Maker ansteuern darf, greift aber nur, wenn der Maker einen statischen Endpunktwert fest einträgt. Dynamische Werte sind nicht abgedeckt."
  - question: "Ersetzen Advanced Connector Policies die klassischen DLP-Richtlinien schon vollständig?"
    answer: "Noch nicht. Sie ersetzen Business, Non-Business und Blocked durch eine Default-Deny-Allowlist. Standardmässig laufen sie im Mixed Mode parallel zu klassischem DLP, wobei die restriktivere Regel gewinnt, oder im ACP-Only-Modus, sobald eine Umgebung vollständig migriert ist. Sie decken nur zertifizierte Connectors ab, Custom Connectors und HTTP bleiben bei klassischem DLP."
  - question: "Verhindert eine DLP-Richtlinie den Zugriff auf Daten eines anderen Tenants?"
    answer: "Nein. Tenantübergreifende Verbindungen steuert die Tenant-Isolation, eine separate Einstellung, die standardmässig aus ist, sodass solche Verbindungen nahtlos funktionieren, bis du sie einschaltest. Dann wählst du Ein-Weg- oder Zwei-Weg-Blockierung und setzt Partner-Tenants per ID oder Domain auf eine Allowlist. Du findest sie im Admin Center unter Sicherheit, Identität und Zugriff."
---

## TL;DR

Data Loss Prevention in der Power Platform ist ein Klassifizierungssystem: Jeder Connector landet in Business, Non-Business oder Blocked, und eine Ressource kann nur Connectors aus einer Gruppe kombinieren. Was DLP in der Praxis gut macht, ist selten die Blockieren/Erlauben-Entscheidung selbst — es ist, die Standardgruppe unangetastet zu lassen, vor einer pauschalen Blockade zuerst Aktions- und Endpunktkontrolle zu prüfen, und zu wissen, dass Tenant-Isolation eine völlig separate Kontrolle ist, über die eine Connector-Richtlinie nichts aussagt. Advanced Connector Policies sind die Zukunftsrichtung — ein Default-Deny-Modell, das das Klassifizierungssystem für zertifizierte Connectors komplett ersetzt.

## Die Standardgruppe auf Non-Business belassen

Jeder neue Connector, den Microsoft ausliefert, landet in einer festgelegten Standardgruppe, und die startet als **Non-Business**. Es ist verlockend, den Standard stattdessen auf **Blocked** zu setzen, mit der Überlegung, neue Connectors bis zur Prüfung zu sperren — aber Microsofts eigene Anleitung rät explizit davon ab, aus einem konkreten Grund: **Microsoft-365-Enterprise-Lizenz-Connectors und einige Kern-Connectors der Power Platform sind von einer Blockierung ausgenommen**. Ist die Standardgruppe Blocked, werden diese ausgenommenen Connectors nicht blockiert — sie landen stattdessen still in Non-Business, was bedeutet, dass die eigentlich "sichere" Standardeinstellung heimlich Ausnahmen hat, die niemand bewusst gewählt hat. Non-Business als Standard belassen und Connectors gezielt nach Business oder Blocked verschieben, sobald das Risiko tatsächlich bewertet wurde.

## Blockieren/Erlauben ist nicht der einzige Hebel

Eine pauschale Blockade ist ein grobes Werkzeug, und für die Fälle, in denen das zu grob ist, gibt es zwei präzisere Kontrollen:

- **Connector Action Control** erlaubt einen Connector, schränkt aber ein, welche seiner Aktionen genutzt werden dürfen — das Standardbeispiel: Lese-Aktionen eines Connectors erlauben, alles, was Daten verändert, blockieren. Neue Aktionen, die ein Connector nach einem Update erhält, lassen sich auf automatisch erlauben oder automatisch blockieren einstellen, damit sich die Kontrolle nicht mit der Zeit unbemerkt lockert.
- **Connector Endpoint Filtering** steuert, welche konkreten Endpunkte ein Maker ansteuern darf — allerdings nur für sechs Connectors: HTTP, HTTP mit Microsoft Entra ID, HTTP Webhook, SQL Server, Azure Blob Storage und SMTP. Es greift nur, wenn ein Maker einen statischen Endpunktwert fest einträgt — dynamische Werte sind nicht abgedeckt.

Beide existieren genau deshalb, weil "Business", "Non-Business" und "Blocked" grob sind — ein Connector ist entweder voll nutzbar oder nicht, tenant- oder umgebungsweit. Diese zwei Kontrollen erlauben es, das einzugrenzen, ohne auf einen Custom Connector oder eine pauschale Blockade zurückzugreifen, die legitime Nutzung gleich mit sperrt.

## Wohin die Reise geht: Default-Deny

**Advanced Connector Policies (ACP)** ersetzen das gesamte Business/Non-Business/Blocked-Modell durch eine strikte Allowlist: Jeder Connector und jede Aktion ist standardmässig blockiert, und neue Connectors, die zur Plattform hinzukommen, sind automatisch ebenfalls blockiert statt automatisch nutzbar. ACP läuft standardmässig im **Mixed Mode** parallel zu klassischem DLP (die jeweils restriktivere Regel gewinnt), oder im **ACP-Only-Modus**, sobald eine Umgebung oder Environment Group vollständig migriert ist. Die Durchsetzung erfolgt zur Entwurfszeit — ein Maker wird beim Bauen direkt an der Nutzung eines eingeschränkten Connectors gehindert, nicht erst nachträglich markiert. Die aktuelle Einschränkung: ACP deckt nur zertifizierte Connectors ab, nicht Custom Connectors oder HTTP — dafür übernehmen klassische DLP-Richtlinien vorerst weiterhin diesen Teil.

## Tenant-Isolation ist eine völlig andere Kontrolle

Nichts vom Obigen beantwortet eine separate Frage: Kann eine Verbindung mit Microsoft-Entra-ID-Authentifizierung überhaupt Daten eines *anderen* Tenants erreichen? Das ist **Tenant-Isolation**, und sie ist standardmässig aus — das heisst, tenantübergreifende Verbindungen funktionieren heute nahtlos, bis man Isolation explizit einschaltet. Ist sie an, wählt man Ein-Weg (nur eingehend blockieren) oder Zwei-Weg (beide Richtungen blockieren) und setzt bestimmte Partner-Tenants per ID oder Domain auf eine Allowlist, damit bestehende Zusammenarbeit weiterläuft. Eine DLP-Richtlinie, die SharePoint als Non-Business einstuft, sagt nichts darüber aus, ob SharePoint in einem *anderen* Tenant erreichbar ist — das ist Aufgabe der Tenant-Isolation, separat konfiguriert unter Sicherheit → Identität und Zugriff im Admin Center.

## Wen betrifft das

- Admins/CoE: Non-Business als Standardgruppe belassen und vor einer pauschalen Blockade Connector Action Control oder Endpoint Filtering prüfen — Blocked für Connectors reservieren, die wirklich nie genutzt werden sollen, nicht für solche, die nur enger gefasst werden müssen.
- Security/Compliance: DLP-Klassifizierung und Tenant-Isolation als zwei getrennte Checklistenpunkte behandeln, nicht als einen — eine vollständig gesperrte Connector-Richtlinie lässt tenantübergreifende Datenbewegung weiterhin offen, bis Isolation explizit aktiviert wird.
- Maker: mit strikteren Entwurfszeit-Blockaden rechnen, je mehr Tenants Advanced Connector Policies einführen — ein nicht gelisteter Connector im ACP-Only-Modus ist keine Warnung zum Umgehen, sondern blockiert, bevor er überhaupt genutzt werden kann.
