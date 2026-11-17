---
layout: page
title: "Von klassischen Datenrichtlinien zu Advanced Connector Policies"
description: "Was sich mit der Erlaubnisliste ändert, was Advanced Connector Policies noch nicht abdecken, wann sich der Umstieg lohnt und wie du beide Modelle im Mixed Mode nebeneinander betreibst."
lang: de
toc: true
permalink: "/de/knowledge/advanced-connector-policies/"
translation_url: "/knowledge/advanced-connector-policies/"
last_reviewed: "2026-11-15"
---

Advanced Connector Policies (ACP) ersetzen die Gruppen Business, Non-business und Blocked durch eine Erlaubnisliste. Diese Seite zeigt, was du damit gewinnst, wofür du die klassische Richtlinie weiter brauchst und in welchen Schritten du umsteigst, ohne Makern die Arbeit zu sperren.

[Read this page in English](/knowledge/advanced-connector-policies/) | [Zurück zur Wissensübersicht](/de/knowledge/)

Wie klassische Richtlinien aufgebaut sind, steht auf der Seite [DLP-Richtlinien: was ihr zwingend einstellen müsst](/de/knowledge/dlp-policies/). Diese Seite wiederholt das nicht und baut darauf auf.

## TL;DR

In einer ACP ist jeder Connector gesperrt, den du nicht ausdrücklich erlaubst. Neue Connectors von Microsoft sind damit von selbst gesperrt, die Frage nach der Standard-Gruppe entfällt. In Managed Environments sperrst du mit ACP auch Connectors, die klassische Richtlinien nicht blockieren können, etwa SharePoint oder Dataverse. ACP gilt nur für zertifizierte Connectors: Custom Connectors und HTTP deckt sie noch nicht ab, die virtuellen Connectors von Copilot Studio auch künftig nicht. Dafür bleibt die klassische Richtlinie nötig. Der Umstieg lohnt sich zuerst für die Default-Umgebung und für Umgebungen mit kurzer, stabiler Connector-Liste.

## Was sich ändert

| Thema | Klassische Datenrichtlinie | Advanced Connector Policy |
|---|---|---|
| Grundhaltung | Jeder Connector liegt in einer von drei Gruppen | Erlaubnisliste, alles andere ist gesperrt |
| Neue Connectors | landen in der Standard-Gruppe | sind gesperrt, bis du sie erlaubst |
| Neue Aktionen eines Connectors | je nach Einstellung der Aktions-Steuerung | gesperrt, sobald du die erlaubten Aktionen eines Connectors festgelegt hast |
| Nicht blockierbare Connectors | nur Business oder Non-business | in Managed Environments sperrbar |
| Geltungsbereich | Tenant oder Umgebung, mehrere Richtlinien überlagern sich | eine wirksame ACP je Umgebung, direkt gesetzt oder aus einer Environment Group geerbt |
| Sicht auf Aktionen | Trigger, interne und veraltete Aktionen nicht erkennbar | als solche markiert und einzeln sperrbar |

ACP zeigt auch MCP-Server an. Du kannst einen MCP-Server als Ganzes sperren, einzelne Werkzeuge darin noch nicht.

## Was ACP nicht abdeckt

ACP gilt nur für zertifizierte Connectors. Daraus folgen vier Lücken.

- **Custom Connectors und HTTP-Connectors.** Microsoft plant dafür einen eigenen Regeltyp. Bis dahin steuerst du sie mit der klassischen Richtlinie und, bei HTTP, mit Endpunkt-Filtern.
- **Virtuelle Connectors von Copilot Studio**, etwa Kanäle, Wissensquellen und Skills. Virtuelle Connectors unterstützt ACP laut Microsoft auch künftig nicht. Die von Copilot Studio bekommen eigene Regeln ausserhalb von ACP. Bis dahin bleibt die klassische Richtlinie zuständig.
- **Virtuelle Connectors für Desktop Flows.** Sie werden zu zertifizierten Connectors und lassen sich danach über ACP steuern.
- **Umgebungen ohne Managed Environments.** ACP funktioniert dort auf einer einzelnen Umgebung, die nicht blockierbaren Connectors bleiben aber nicht blockierbar.

Wer Agents, Custom Connectors oder HTTP im Einsatz hat, braucht darum beide Modelle.

## Mixed Mode und ACP-only

- **Mixed Mode** ist der Zustand nach dem Einschalten. Klassische Richtlinien und ACP werden gemeinsam ausgewertet, es gilt die restriktivste Kombination. Microsoft empfiehlt diesen Modus für die Dauer der Migration.
- **ACP-only** wertet nur noch die ACP aus. Klassische Richtlinien bleiben gespeichert, wirken in dieser Umgebung oder Gruppe aber nicht mehr. Du schaltest den Modus je Environment Group oder je Umgebung über die Regel «Advanced connector policies only» ein.

Im Mixed Mode kann eine Sperre aus beiden Systemen kommen. Das macht die Fehlersuche für Maker und Admins schwerer. Halte den Zustand darum kurz, aber wechsle erst auf ACP-only, wenn die Umgebung nichts mehr braucht, was nur die klassische Richtlinie regelt.

## Wann sich der Umstieg lohnt

Empfehlung aus der Praxis, abgeleitet aus den Eigenschaften oben.

**Früh umsteigen:**

- Default-Umgebung als Managed Environment. Microsoft empfiehlt dort, alle Connectors zu sperren, und verweist dafür auf ACP, weil nur sie auch die nicht blockierbaren Connectors sperrt.
- Umgebungen mit kurzer Connector-Liste, die sich selten ändert, etwa eine Produktivumgebung mit wenigen Geschäftslösungen.
- Tenants, in denen niemand Zeit hat, neue Connectors laufend einzustufen. Die Erlaubnisliste nimmt dir diese Arbeit ab.

**Noch warten:**

- Umgebungen, in denen Agents über Copilot-Studio-Kanäle veröffentlicht werden oder Custom Connectors und HTTP tragend sind. Du würdest nur ein zweites System dazunehmen.
- Entwicklerumgebungen, in denen Maker laufend neue Connectors ausprobieren. Jede Erweiterung der Liste wäre ein Antrag.

## Umstieg in sechs Schritten

1. **Liste erstellen.** Lies im Inventar des Admin Centers aus der Spalte **Connectors**, welche Connectors die Apps, Flows und Agents der Umgebung heute nutzen. Das wird deine Erlaubnisliste.
2. **Mit einer Umgebung beginnen.** Öffne im Admin Center **Security** > **Data and privacy** > **Advanced connector policies** und wähle eine Pilotumgebung.
3. **Liste pflegen, dann speichern.** Die nicht blockierbaren Connectors sind als erlaubt vorbelegt. Ergänze deine Liste und entferne, was gesperrt sein soll. Die ACP wirkt, sobald du speicherst: Alles, was nicht erlaubt ist, ist gesperrt.
4. **Klassische Richtlinie stehen lassen.** Du bist damit im Mixed Mode. Beobachte zwei Wochen lang, welche Meldungen bei Makern ankommen.
5. **Auf Gruppen ausrollen.** Für mehrere Umgebungen setzt du die ACP unter **Manage** > **Environment groups** > Gruppe wählen > **Rules** und veröffentlichst mit **Publish rules**. Environment Groups können nur Managed Environments enthalten.
6. **ACP-only erst zum Schluss.** Schalte um, wenn die Umgebung weder Custom Connectors noch HTTP noch Copilot-Studio-Kanäle über die klassische Richtlinie braucht.

## Drei Stolpersteine

- **Regel aus der Gruppe entfernt, Sperre bleibt.** Entfernst du die ACP aus einer Environment Group oder eine Umgebung aus der Gruppe, behalten die Umgebungen ihre letzte ACP. Microsoft will damit verhindern, dass Connectors unbemerkt frei werden. Zum Aufheben entfernst du die Regel je Umgebung mit **Remove rule** oder über die Power Platform API.
- **Laufzeit und Entwurf.** Die Prüfung schon beim Bauen kommt gestaffelt: zuerst im Maker-Portal von Power Automate, dann in Copilot Studio, dann in Power Apps. Bis dahin greift ACP dort erst zur Laufzeit. Mit der Entwurfsprüfung je Portal ist ACP laut Microsoft für diesen Bereich allgemein verfügbar.
- **Zähler «Allowed» höher als die Liste.** Der Zähler enthält auch Einträge, die auf keinen aktuellen zertifizierten Connector mehr zeigen, etwa nach der Einstellung eines Connectors.

## Weiterlesen

- [DLP-Richtlinien: was ihr zwingend einstellen müsst](/de/knowledge/dlp-policies/)
- [Fünf DLP-Vorlagen für KMU](/de/knowledge/dlp-templates-smb/)
- [DLP ist eine Leitplanke, keine Mauer](/de/posts/gov-dlp-in-practice/)
- [Fünf Environment-Strategien im Vergleich](/de/knowledge/environment-strategies/)
- [Power Platform Governance-Konzept: wo du anfängst](/de/knowledge/governance-concept/)

## Quellen

Aussagen am 15.11.2026 gegen Microsoft Learn geprüft. Der Abschnitt «Wann sich der Umstieg lohnt», die Beobachtungszeit von zwei Wochen und die Reihenfolge der sechs Schritte sind Empfehlungen aus der Praxis, nicht Wortlaut von Microsoft.

- [Microsoft Learn: Advanced connector policies](https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies)
- [Microsoft Learn: Data policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
- [Microsoft Learn: Connector classification](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification)
- [Microsoft Learn: Environment groups](https://learn.microsoft.com/en-us/power-platform/admin/environment-groups)
- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)

Nur Orientierung, keine Rechts- oder Lizenzberatung. Prüfe Lizenz und Produktdetails, bevor du umsetzt.
