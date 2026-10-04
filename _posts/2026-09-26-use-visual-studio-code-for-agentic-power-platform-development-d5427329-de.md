---
title: Agentische Power Platform Entwicklung mit Visual Studio Code
description: Claude Code, Dataverse Skills und PAC Tools erstellen Umgebungen, Lösungen,
  Datenmodelle und Testdaten per Prompt.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- environments
- dataverse
- power-apps
content_type: curated_summary
curation_id: d5427329428d394ff6bf698b
image:
  path: "/assets/img/curated/d5427329428d394ff6bf698b.png"
  alt: 'Governance-Karte: Agentic tools do not replace Power Platform knowledge. They
    amplify disciplined ALM.'
permalink: "/de/posts/use-visual-studio-code-for-agentic-power-platform-development-d5427329/"
translation_url: "/en/posts/use-visual-studio-code-for-agentic-power-platform-development-d5427329/"
source_url: https://readyxrm.blog/2026/07/16/ditch-the-power-apps-maker-portal/
source_site_url: https://readyxrm.blog/
source_title: Ditch the Power Apps maker portal!
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-07-16'
source_type: article
faq:
  - question: "Was brauche ich, um Dataverse mit VS Code und einem KI-Agenten aufzubauen?"
    answer: "Du brauchst einen Power-Platform-Tenant mit Umgebung, Administratorzugriff auf den Tenant, ein agentisches Coding-Werkzeug, ein GitHub-Konto für die Versionsverwaltung und Visual Studio Code, das kostenlos und plattformübergreifend ist. Der Autor empfiehlt Claude Code, nennt aber auch GitHub Copilot und Codex als Alternativen. Die Umgebung selbst bleibt unverändert nötig, nur die Bedienung wandert aus dem Maker-Portal."
  - question: "Welche Erweiterungen und Skills gehören zum Setup mit VS Code und Dataverse?"
    answer: "Die Basis bilden drei Erweiterungen: Power Platform Tools, das die PAC-Kommandozeile installiert, Claude Code für VS Code und optional GitHub Copilot Chat, um Ergebnisse gegenzuprüfen. Dazu installierst du über Plugin-Befehle die Dataverse-Skills von Microsoft aus GitHub. Sie kapseln den Dataverse-MCP-Server, die Dataverse-CLI und die PAC-CLI und geben dem Agenten die nötigen Werkzeuge."
  - question: "Reicht ein kostenloses KI-Abonnement für die Entwicklung mit VS Code und Dataverse?"
    answer: "Kostenlose Stufen funktionieren, die Credits sind laut Autor aber schnell aufgebraucht. Er nutzt selbst den Max-Tarif von Claude, weil er Claude Code täglich einsetzt und die Kapazität braucht. Für den Einstieg hält er den Pro-Tarif für einen vernünftigen Startpunkt, von dem aus man sich hocharbeiten kann."
  - question: "Ersetzt die Entwicklung per KI-Agent in VS Code das Dataverse-Fachwissen?"
    answer: "Nein. Der Autor sagt ausdrücklich, dass du weiterhin verstehen musst, wie Dataverse funktioniert und wie Apps zusammenpassen, um eine gute Lösung zu bauen. Der Agent ist ein Werkzeug, kein Ersatz für Handwerk. Du bestätigst die erzeugten Befehle vor der Ausführung, und das Ergebnis hängt von der Genauigkeit deiner Eingaben ab. Verschiedene Läufe können unterschiedlich ausfallen."
  - question: "Was erzeugt der Agent im Beispiel mit der Spesen-App in VS Code?"
    answer: "Er legt auf Zuruf eine Dataverse-Umgebung an, richtet ein Authentifizierungsprofil ein, erstellt Lösung und Herausgeber mit dem Präfix exp und baut ein Datenmodell mit Spesenkopf und Spesenpositionen samt Statusgründen und Dateifeld für Belege. Danach lädt er konsistente Beispieldaten. Zuerst erzeugte er Dezimal- statt Währungsfelder, bemerkte das und korrigierte es selbst, nach einigen Minuten."
---

## TL;DR

Visual Studio Code mit Claude Code und den Microsoft Dataverse Skills kann per Prompt eine Dataverse Umgebung erstellen, ein Authentifizierungsprofil und einen Workspace verbinden, eine Lösung samt Publisher anlegen, ein Ausgaben-Datenmodell aufbauen und Testdaten laden. Dafür bleiben ein Tenant, eine Umgebung, ausreichende Adminrechte und Dataverse Kenntnisse erforderlich.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Dataverse und Lösungsstrukturen vor der Nutzung agentischer Prompts verstehen, weil das Tool laut Quelle keine Kenntnisse in Lösungsarchitektur ersetzt.
- Admins/CoE: Umgebungsanlage, Authentifizierungsprofile, MCP-Server-Freigaben und nicht verwaltete Lösungen prüfen, da der Ablauf administrative Einrichtung in Visual Studio Code ausführt.
- Security/Compliance: Den Umgang mit Refresh-Token und der lokalen .env-Datei mit Umgebungs- und Tenantdaten prüfen, bevor der Ablauf eingesetzt wird.
