---
title: "Teuer ist nicht das Bauen. Teuer ist, es nicht zu wissen."
description: "Warum Microsoft-365-Nutzungsrechte weniger abdecken, als der Name vermuten lässt, wie Pay-as-you-go Beschaffungsaufwand gegen eine laufende Azure-Rechnung eintauscht, und warum das Lizenzmodell selbst ein bewegliches Ziel ist, das sich jährlich zu prüfen lohnt."
date: "2026-09-24T08:50:01Z"
author: governance_editorial
lang: de
toc: true
tags:
  - governance
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-07.png"
  alt: "Governance-Karte: Die Überraschungsrechnung — die Lizenz kennen, bevor die Nutzer kommen."
permalink: "/de/posts/gov-licensing-governance/"
translation_url: "/en/posts/gov-licensing-governance/"
---

## TL;DR

Lizenzüberraschungen entstehen meist aus denselben drei Lücken: anzunehmen, eine Microsoft-365-Lizenz decke mehr ab, als sie tatsächlich tut, die Flexibilität von Pay-as-you-go als Grund zu sehen, Kosten nicht mehr zu beobachten, statt sie anders zu beobachten, und das Lizenzmodell als einmalige Entscheidung zu behandeln, obwohl Microsoft das Angebot laufend ändert. Nichts davon braucht einen Finanzhintergrund, um es zu erkennen — es braucht jemanden, der vor dem Rollout prüft, nicht nach der ersten überraschenden Rechnung.

## Microsoft-365-Rechte decken weniger ab, als der Name vermuten lässt

Manche Microsoft-365-Lizenzen enthalten begrenzte Nutzungsrechte für Power Apps, Power Automate und Dataverse — aber diese sind ausdrücklich auf bestimmte Szenarien beschränkt: gedacht für die Arbeit mit Microsoft-365-Daten über Standard-Connectors, und sie berechtigen **nicht** dazu, eigenständige Custom Apps, Premium-Flows oder Copilot-Studio-Agenten zu betreiben. Das Microsoft-365-Admin-Center kann sogar einen "Dataverse"-Diensteplan bei einer Lizenz mit diesen begrenzten Rechten anzeigen, was nach breiterem Zugriff aussieht, als tatsächlich gewährt wird. Die daraus entstehende Lücke ist konkret und häufig: Eine Lösung wird gebaut und funktioniert für den Maker einwandfrei, dann trifft ein breiteres Rollout auf Nutzer, deren Microsoft-365-Lizenz schlicht nicht abdeckt, was die Lösung braucht — entdeckt beim Rollout, nicht davor.

## Pay-as-you-go entfernt keine Kontrolle, es verlagert sie

Pay-as-you-go verknüpft eine Umgebung mit einem Azure-Abonnement, sodass Nutzung über die enthaltenen Mengen hinaus über Azure-Meter abgerechnet wird, statt vorab Kapazität kaufen zu müssen — echt nützlich für breit verteilte Apps mit unvorhersehbarer Nutzung oder um reale Adoptionszahlen zu ermitteln, bevor man sich auf Prepaid-Lizenzen festlegt. Der Preis dafür: Das ist laufende Verbrauchsabrechnung, kein gedeckeltes Abonnement, also ist "wir müssen nicht mehr darüber nachdenken" genau die falsche Lesart. Microsofts eigene Anleitung nennt zwei konkrete Leitplanken: Azure-Cost-Management-Warnungen, eingerichtet *vor* dem Rollout, und der herunterladbare Nutzungsbericht auf der Abrechnungsplan-Seite im Power Platform Admin Center, der aufschlüsselt, welche Umgebungen, Apps und Nutzer die Meter tatsächlich getrieben haben — ein Detailgrad, den Azure Cost Management allein nicht zeigt. Es ist zudem jederzeit vollständig reversibel: Eine Umgebung aus der Abrechnungsrichtlinie zu entfernen oder die Richtlinie ganz zu löschen, stoppt weitere Kosten sofort.

## Das Modell selbst ist ein bewegliches Ziel

"Das Lizenzmodell jährlich überprüfen" ist keine Vorsicht um ihrer selbst willen — Microsoft ändert das Angebot tatsächlich. Ein aktuelles Beispiel: Der Power-Apps-Per-App-Plan, eine kapazitätsbasierte Lizenz für den Betrieb einer einzelnen App in einer Umgebung, war ab Januar 2026 für Neukunden über einige Einkaufskanäle nicht mehr verfügbar, wobei die Verfügbarkeit für Bestandskunden und Partner je nach Kanal variiert. Eine vor zwei Jahren getroffene Lizenzentscheidung kann schlicht nicht mehr die aktuell beste Option sein oder ist eventuell gar nicht mehr auf demselben Weg käuflich — das lässt sich nur erkennen, indem man tatsächlich erneut hinschaut, nach Plan, statt anzunehmen, die ursprüngliche Entscheidung gelte weiterhin.

## Wen betrifft das

- Admins/CoE: prüfen, was die bestehende Microsoft-365-Lizenz eines Nutzers tatsächlich berechtigt, bevor angenommen wird, sie decke eine neue Lösung ab — die Grenzen sind explizit und konkret (keine eigenständigen Apps, keine Premium-Flows, keine Copilot-Studio-Agenten), keine Grauzone zum Raten.
- Leadership/Business: Azure-Cost-Management-Warnungen vor einem Pay-as-you-go-Rollout einrichten, nicht nach der ersten überraschenden Rechnung — die Flexibilität ist real, aber sie ist Flexibilität im Austausch für aktive Überwachung, nicht anstelle davon.
- Maker: nicht annehmen, dass die eigene Microsoft-365-Lizenz sich auf das verallgemeinern lässt, was ein neuer Kollege oder ein breiteres Publikum braucht — der Connector oder das Feature, das heute für einen selbst funktioniert, kann eine Lizenz voraussetzen, die die nächste Person schlicht nicht hat.
