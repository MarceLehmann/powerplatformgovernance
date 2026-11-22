---
title: "Advanced Connector Policies (ACP): was sie sind, wo du sie setzt und was kaputtgehen kann"
description: "ACP ersetzt Business, Non-Business und Blocked durch eine strikte Allowlist. Wo du sie setzt, wann sie wirkt, warum übrig gebliebene Regeln eine Falle sind, ein Fall aus meinem eigenen Tenant und eine Checkliste."
date: "2026-11-22T00:10:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - dlp
  - security
  - governance
  - environments
content_type: original_article
permalink: "/de/posts/advanced-connector-policies-acp/"
translation_url: "/en/posts/advanced-connector-policies-acp/"
faq:
  - question: "Was sind Advanced Connector Policies in der Power Platform?"
    answer: "Eine Connector-Steuerung mit strikter Allowlist. Was nicht ausdrücklich erlaubt ist, ist gesperrt, auch neue Connectors. Die Regeln reichen bis zu einzelnen Aktionen und Triggern zertifizierter Connectors."
  - question: "Ersetzen Advanced Connector Policies die klassische DLP?"
    answer: "Nicht vollständig. Sie decken nur zertifizierte Connectors ab. Custom Connectors und der HTTP-Connector bleiben bei klassischer DLP. Im Mixed mode gelten beide, die strengere Regel gewinnt."
  - question: "Verschwindet die Regel, wenn ich eine Umgebung aus der Gruppe nehme?"
    answer: "Nein. Die Umgebung behält ihre letzte ACP-Regel. Auch «Remove rule» auf der Gruppe entfernt sie nicht aus den Umgebungen. Entferne sie je Umgebung oder per API."
---

## TL;DR

Advanced Connector Policies (ACP) sind die neue Connector-Steuerung der Power Platform. Statt Connectors in Business, Non-Business und Blocked einzuteilen, arbeitet ACP mit einer strikten Allowlist: Was nicht ausdrücklich erlaubt ist, ist gesperrt, auch jeder Connector, der später dazukommt. Du setzt die Regeln pro Umgebungsgruppe oder pro einzelne Umgebung im Power Platform Admin Center, und sie wirken, sobald du speicherst oder publizierst. Zwei Dinge erwischen Admins. Eine Umgebung, die du aus der Gruppe nimmst, behält ihre letzte ACP-Regel. Und eine Allowlist kann Funktionen brechen, an die niemand gedacht hat, etwa den Approvals-Connector oder eine einzelne SharePoint-Aktion. Öffne deine Environment groups und schau dir die Regeln an.

Stand: 22. November 2026, auf Basis von Microsoft Learn. Die Prüfung beim Bauen wird noch schrittweise ausgerollt, prüfe deshalb den aktuellen Stand auf den verlinkten Seiten.

## Was ACP ist

ACP ersetzt das Klassifizierungsmodell Business, Non-Business und Blocked der klassischen Datenrichtlinien (DLP) durch eine strikte Allowlist.

- **Default deny:** Alles, was nicht ausdrücklich erlaubt ist, ist gesperrt. Neue Connectors sind automatisch gesperrt.
- **Steuerung bis auf Aktionen und Trigger:** Das schliesst interne Aktionen ein. Beim SharePoint-Connector lässt sich zum Beispiel die Aktion «Send an HTTP request to SharePoint» einzeln erlauben oder sperren.
- **MCP-Server:** Sie lassen sich als Ganzes sperren.
- **Nur zertifizierte Connectors:** Custom Connectors und der HTTP-Connector werden von ACP nicht abgedeckt. Sie bleiben bei klassischer DLP. Virtuelle Connectors werden nie unterstützt.
- **Managed Environments:** Dort kann ACP auch Connectors sperren, die sich in klassischer DLP nicht sperren lassen.

| | Advanced Connector Policies | Klassische DLP |
|---|---|---|
| Modell | Strikte Allowlist, Default deny | Business, Non-Business, Blocked |
| Feinheit | Connectors, Aktionen und Trigger, auch interne Aktionen. MCP-Server als Ganzes | Einteilung pro Connector, Aktionen über Connector Action Control |
| Abgedeckte Connectors | Nur zertifizierte Connectors | Auch Custom Connectors und HTTP-Connector |
| Managed Environments | Kann auch Connectors sperren, die klassische DLP nicht sperren kann | Manche Connectors lassen sich nicht sperren |

## Wo du sie setzt

ACP setzt du für eine Umgebungsgruppe oder für eine einzelne Umgebung.

- **Umgebungsgruppe:** Power Platform Admin Center, Manage, Environment groups, Gruppe öffnen, Rules, Advanced connector policies. Danach «Publish rules».
- **Einzelne Umgebung:** Admin Center, Security, Data and privacy, Advanced connector policies.

Oben siehst du den Status **Applied** oder **Not applied**. Der Knopf **Remove rule** schaltet ACP für diesen Bereich ab. Wenn du eine Gruppe publizierst, erscheint in der Umgebungshistorie jeder Umgebung der Gruppe der Eintrag «Update Managed Environment Settings». Nach diesem Eintrag suchst du.

Die Regeln lassen sich auch per API verwalten. Microsoft Learn beschreibt das in einem Programmier-Tutorial, verlinkt unter Quellen.

## Wann es wirkt

- **Sofort:** beim Speichern einer einzelnen Umgebung, beim Publizieren einer Gruppe.
- **Mixed mode (Standard):** ACP und klassische DLP gelten zusammen, die strengere Regel gewinnt. Der ACP-only mode ist optional.
- **Design Time oder Laufzeit:** Die Prüfung beim Bauen wird schrittweise ausgerollt, zuerst Power Automate, dann Copilot Studio, dann Power Apps. Wo sie noch nicht live ist, zeigt sich ein gesperrter Connector erst zur Laufzeit. Ein Flow lässt sich dann speichern und scheitert später.

## Warum eine Allowlist

Drei Eigenschaften erklären den Reiz.

- Neue Connectors sind gesperrt, bis jemand sie erlaubt. Nichts Neues wird von selbst nutzbar.
- Die Steuerung geht unter die Connector-Ebene. Du kannst einen Connector erlauben und trotzdem einzelne Aktionen sperren.
- Auf Managed Environments kann ACP Connectors sperren, die klassische DLP nicht sperren kann.

Ein Tenant, der eine kurze, bewusste Liste erlaubter Bausteine will, bekommt das mit ACP. Der Preis: Die Liste braucht Pflege.

## Auswirkungen und Fallen

- **Übrig gebliebene Regeln:** Eine Umgebung, die du aus der Gruppe nimmst, behält ihre letzte ACP-Regel. Auch «Remove rule» auf der Gruppe entfernt die Regel nicht aus den Umgebungen. Um ACP abzuschalten, entfernst du es je Umgebung oder nutzt die API.
- **Environment Routing:** Environment Routing kann neue Entwickler-Umgebungen automatisch in eine Gruppe mit ACP legen.
- **Teilweise Erlaubnis hat Nebenwirkungen:** Wer einen Connector nur mit bestimmten Aktionen erlaubt, sperrt alle anderen Aktionen. Das gilt auch für interne Aktionen und für künftige. So können sichtbare Funktionen brechen.
- **Späte Fehler:** Wo die Prüfung beim Bauen noch nicht live ist, kommt der Fehler beim Speichern oder im Lauf, nicht beim Bauen.
- **Zwei Regelwerke:** Im Mixed mode musst du ACP und klassische DLP zusammen lesen. Die strengere gewinnt, ein Connector, den klassische DLP erlaubt, kann also trotzdem an ACP scheitern.

## Meine Erfahrung

Diese Woche liessen sich in meinem eigenen Tenant in einer Sandbox- und Demo-Umgebung (Managed Environment) zwei Dinge nicht mehr nutzen: der Approvals-Connector und die Aktion «Send an HTTP request to SharePoint». Die Fehler kamen beim Speichern und im Lauf.

Die Ursache war eine ACP-Allowlist, die auf der Default Environment Group publiziert war. Die Änderung war am 20. November 2026 sichtbar. Wer sie gesetzt hat, konnte ich nicht klären, deshalb mache ich dazu keine Aussage.

Die Umgebung aus der Gruppe zu nehmen half nicht. Sie behielt die Regel, was mit Microsoft Learn übereinstimmt.

Meine Lösung für die Sandbox: ACP dort entfernen oder die Connectors erlauben, die ich brauche. Für Kunden- und Produktivumgebungen setze ich ACP bewusst ein, mit einer Liste, die ich selbst pflege.

## Checkliste

1. Im Admin Center Environment groups öffnen. Pro Gruppe unter Rules prüfen, ob «Advanced connector policies» aktiv ist (Status Applied).
2. Die Umgebungshistorie auf den Eintrag «Update Managed Environment Settings» prüfen.
3. Wichtige Flows testen, die Approvals, SharePoint-HTTP-Aufrufe oder seltene Connectors nutzen.
4. Die Allowlist bewusst pflegen: nur, was gebraucht wird. Zuerst ein Pilot im Mixed mode.
5. Für Sandbox und Dev entscheiden, ob ACP dort überhaupt nötig ist. Wenn nicht, die Regel je Umgebung entfernen.
6. Custom Connectors und HTTP bleiben bei klassischer DLP. Diese Richtlinien aktuell halten.

## Quellen

- [Microsoft Learn: Advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies)
- [Microsoft Learn: Programmier-Tutorial zu Advanced connector policies](https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies)

Auf dieser Seite: [Von klassischen Datenrichtlinien zu Advanced Connector Policies](/de/knowledge/advanced-connector-policies/) beschreibt den Umstieg Schritt für Schritt, einschliesslich Mixed mode und ACP-only.

Nur Orientierungshilfe, keine Rechts- oder Lizenzberatung. Die beschriebene Erfahrung stammt aus meinem eigenen Tenant und hat keinen Bezug zu einem Kunden.
