---
title: "Das einzige Handbuch, das je existierte, ging um 17 Uhr nach Hause"
description: "Warum Name, Datenstandort und ein Absatz Beschreibung einer Lösung darüber entscheiden, ob sie den Weggang ihres Makers übersteht, und warum keines davon mehr als ein paar Minuten kostet, wenn man es beim Bauen richtig macht."
date: "2026-09-24T09:05:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - documentation
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-21.png"
  alt: "Governance-Karte: Dokumentiert, ein Absatz pro Lösung, geschrieben beim Go-Live."
permalink: "/de/posts/gov-documentation-debt/"
translation_url: "/en/posts/gov-documentation-debt/"
faq:
  - question: "Welches Namensschema empfiehlt Microsoft für Power-Platform-Umgebungen?"
    answer: "Namen sind auf 100 Zeichen begrenzt, sollen kurz und aussagekräftig bleiben und einem festen, vorhersehbaren Muster folgen. Das empfohlene Beispiel kombiniert Lifecycle-Phase, Region, Geschäftseinheit und Zweck, etwa Prod-US-Finance-Payroll."
  - question: "Warum ist es riskant, App-Daten in einem persönlichen OneDrive abzulegen?"
    answer: "Die Datei ist an das Konto einer Person gebunden. Geht sie in den Urlaub, wechselt die Rolle oder verlässt das Unternehmen, hört die darauf gebaute Team-App auf zu funktionieren."
  - question: "Was soll ein Maker am Tag des Go-Live aufschreiben?"
    answer: "Drei Sätze reichen: was die Lösung tut und für wen, welche Daten sie berührt und warum sie so gebaut wurde und nicht anders."
---

## TL;DR

Drei kleine Versäumnisse summieren sich zum selben Ausfall: eine Lösung, die niemand mehr sicher anfassen kann, sobald ihr Maker weg ist. Eine Datei namens `test_final_v2_NEW` ist unter Hunderten anderen nicht mehr auffindbar. Daten, die still in einem persönlichen OneDrive liegen, sperren sich, sobald ihr Besitzer in den Urlaub geht. Und "ich weiss, wie es funktioniert" ist eine Dokumentation, die um 17 Uhr zur Tür hinausgeht. Microsofts eigene Anleitung behandelt alle drei als Entscheidungen beim Bauen, nicht als spätere Aufräumarbeit: ein Namensschema, festgelegt vor der Erstellung, ein gemeinsamer Datenstandort, entschieden vor dem Go-Live, und eine Beschreibung, geschrieben am Tag, an dem die Lösung live geht. Jedes davon dauert Minuten, und jedes davon macht den Unterschied zwischen "wir können das übergeben" und "niemand weiss, was das hier tut".

## Eine Namenskonvention ist Dokumentation, die sich selbst schreibt

Microsofts eigene Anleitung zur Tenant-Umgebungsstrategie ist hier konkret: Namen sind auf 100 Zeichen begrenzt, sollten kurz und aussagekräftig bleiben und einem **festen, vorhersehbaren Muster** folgen. Das empfohlene Beispiel ist *&lt;Lifecycle-Phase&gt;-&lt;Region&gt;-&lt;Geschäftseinheit&gt;-&lt;Zweck&gt;*, was Namen wie `Prod-US-Finance-Payroll` ergibt. Die Begründung dahinter ist nicht ästhetisch. Konsistente Namen lassen Admins sofort erkennen, wozu eine Umgebung dient, ohne sie zu öffnen, und sie machen Automatisierung und Reporting über den gesamten Bestand überhaupt erst möglich. Dieselbe Logik skaliert nach unten auf einzelne Apps und Flows: `test_final_v2_NEW` sagt der nächsten Person nichts darüber, was es tut, wem es gehört oder ob man es gefahrlos löschen kann, während ein Name aus einem festen Schema alle drei Fragen auf einen Blick beantwortet, in einem Tenant, der Hunderte ähnlich klingende Lösungen haben kann. Ein weiteres Detail, das es wert ist, festgehalten zu werden: Namen sind für jeden mit Zugriff auf das Admin Center sichtbar, deshalb sollte die Konvention selbst niemals irgendetwas Vertrauliches kodieren.

## Datenstandort ist eine Frage, die vor der App gestellt wird, nicht danach

Eine Power-Apps- oder Power-Automate-Lösung kann für ihren Maker einwandfrei funktionieren, während ihre eigentlichen Daten irgendwo liegen, wo sonst niemand hinkommt. Ein persönliches OneDrive ist die häufigste Variante davon, und sie ist besonders trügerisch, weil persönliches OneDrive ein vollständig konformer, im Tenant verbleibender Microsoft-365-Dienst ist. Das Problem ist nicht, wo die Bytes liegen; es ist, **von wem die Verfügbarkeit der Daten abhängt**. Eine Datei in einem persönlichen OneDrive ist an das Konto einer Person gebunden: Geht diese in den Urlaub, wechselt die Rolle oder verlässt das Unternehmen, hört die darauf aufgebaute Team-App aus Gründen auf zu funktionieren, die nichts mit der App selbst zu tun haben. SharePoint und Dataverse haben diesen Ausfallmodus nicht, weil es organisatorisch besessene Orte sind, keine persönlichen. Der Zugriff übersteht die Abwesenheit jeder einzelnen Person. Die Abhilfe ist eine Frage, die bei der Solution-Aufnahme gestellt wird, kein Audit-Befund Monate später: Wo liegen die Daten dieser App tatsächlich, und hängt ihre Verfügbarkeit davon ab, dass das Konto einer bestimmten Person aktiv bleibt?

## Ein Absatz, geschrieben beim Go-Live, schlägt ein perfektes Gedächtnis

Die häufigste Form von Dokumentationsschulden ist keine fehlende Wiki-Seite. Es ist ein Maker, der tatsächlich, korrekt, genau weiss, wie seine Lösung funktioniert, bis zu dem Moment, in dem er das Team wechselt oder das Unternehmen verlässt. Wissen, das nur im Kopf einer einzigen Person existiert, hat ein Verfallsdatum, das niemand im Voraus zuverlässig kennt. Die Abhilfe braucht keine Dokumentationsplattform und kein Vorlagen-Gremium: drei Sätze, geschrieben am Tag, an dem eine Lösung live geht, die abdecken, was sie tut und für wen, welche Daten sie berührt, und, weil das das Detail ist, das tatsächlich verloren geht, warum sie so gebaut wurde und nicht anders. Microsofts eigener Catalog-Einreichungsprozess baut diese Erwartung direkt in die Plattform ein: Eine Lösung zur Wiederverwendung durch andere einzureichen, verlangt ein Beschreibungsfeld und eine Geschäftsbegründung, die andere Maker lesen, bevor sie installieren, eben weil "Maker lesen deine Beschreibung, um mehr zu erfahren" als tragender Teil des Workflows behandelt wird, nicht als optionale Nebensache.

## Wen betrifft das

- Admins/CoE: ein Namensschema festlegen, bevor Umgebungs- und Lösungswildwuchs eine Nachrüstung schmerzhaft macht. Ein aus einer festen Konvention gebauter Name beantwortet "was ist das und darf ich es anfassen", ohne dass jemand es öffnen muss.
- Maker: den einen Absatz Beschreibung am Tag des Go-Live schreiben, nicht erst, wenn später jemand danach fragt. Bis jemand fragt, sind die Details, die man dokumentieren würde, meist bereits aus dem eigenen Gedächtnis verblasst.
- Leadership/Business: fragen, wo die Daten einer Lösung tatsächlich liegen, bevor man fragt, was die App tut. Ein Team-Tool, das auf dem persönlichen OneDrive einer einzelnen Person aufgebaut ist, hat einen Single Point of Failure, der nichts mit dem Code der App zu tun hat.
