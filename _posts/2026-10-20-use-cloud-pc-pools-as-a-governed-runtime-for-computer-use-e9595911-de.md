---
title: Cloud PC Pools als kontrollierte Laufzeit für Computer Use einsetzen
description: Cloud PC Pools geben Copilot Studio Entra ID-verbundene und Intune-registrierte
  Windows 11-Umgebungen für die Unternehmensautomatisierung.
date: '2026-10-20T17:08:27Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- environments
- copilot-studio
content_type: curated_summary
curation_id: e9595911a09f620889303ada
image:
  path: "/assets/img/curated/e9595911a09f620889303ada.png"
  alt: 'Governance-Karte: Enterprise automation needs a governed runtime. Use Cloud
    PC pools for identity, security and compliance controls.'
permalink: "/de/posts/use-cloud-pc-pools-as-a-governed-runtime-for-computer-use-e9595911/"
translation_url: "/en/posts/use-cloud-pc-pools-as-a-governed-runtime-for-computer-use-e9595911/"
source_url: https://microsoft.github.io/mcscatblog/posts/cua-cloudpcpool-in-copilotstudio/
source_site_url: https://microsoft.github.io/
source_title: 'Video Demo: Implement Cloud PC Pool for Computer Use in Microsoft Copilot
  Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Jay Padimiti
source_published_at: '2026-01-09'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Was bietet ein Cloud PC Pool für Computer Use in Copilot Studio?
  answer: Ein Cloud PC Pool stellt von Microsoft gehostete Windows 11 Cloud PCs als
    Computer Use-Laufzeit bereit, mit Entra ID-Verbund und Intune-Registrierung.
- question: Warum eignet sich ein gehosteter Browser nicht für interne Copilot Studio-Automatisierung?
  answer: Ein gehosteter Browser ist weder Entra ID-verbunden noch Intune-verwaltet
    und kann deshalb interne Systeme sowie zentrale Governance-Kontrollen nicht nutzen.
- question: Was können Administratoren in einem Copilot Studio Cloud PC Pool überwachen?
  answer: Administratoren können Cloud PC-Instanzen, Ausführungsstatus und Warteschlangensitzungen
    überwachen sowie Administrationskontrollen und Auditprotokolle verwenden.
---

## TL;DR

Computer Use in Microsoft Copilot Studio kann auf Cloud PC Pools laufen. Die von Microsoft gehosteten Windows 11 Cloud PCs sind Entra ID-verbunden und Intune-registriert. Dadurch werden Single Sign-on für interne Systeme sowie Richtlinien-, Sicherheits- und Compliance-Kontrollen möglich, die ein gehosteter Browser nicht bietet.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Cloud PC Pools wählen, wenn Computer Use interne Systeme erreichen muss, da gehostete Browser weder Entra ID-verbunden noch Intune-verwaltet sind.
- Admins/CoE: Pools verwalten, Cloud PC-Instanzen, Ausführungsstatus und Warteschlangen überwachen sowie Administrationskontrollen und Auditprotokolle nutzen.
- Security/Compliance: Bestehende Identitäts-, Sicherheits- und Compliance-Richtlinien über Entra ID und Intune durchsetzen.
- Leadership/Business: Cloud PC Pools als skalierbare, von Microsoft verwaltete Laufzeit für produktive Automatisierung mit geringerem Infrastrukturaufwand einsetzen.
