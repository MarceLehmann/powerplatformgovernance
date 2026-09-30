# Kuration, Quellen und Einreichungen

Stand: 30.09.2026. Fortgeschrieben anhand des Codes im Repository (Commit `4f34575`). Diese Ausrichtung ist für die Website und die Automatisierung massgeblich. Die technische Umsetzung beschreibt der [Betriebsleitfaden](2026-09-18_architektur_automation_betrieb.md). Wo eine Regel beschlossen, aber noch nicht umgesetzt ist, steht das ausdrücklich dabei.

## Zweck

Power Platform Governance ist eine kuratierte Sammlung: relevante Inhalte finden, kurz zusammenfassen, ihren Governance-Bezug einordnen und zum Original weiterleiten. Kein Volltextarchiv, keine vollständigen Übersetzungen fremder Beiträge und keine nachgebauten Anleitungen.

## Mindeststandard aus Sicht des Originalautors

- **Erkennbare Urheberschaft:** Auf jedem kuratierten Beitrag stehen Blogname, Originalautor (soweit belegt) und der Link zum Original in einem Quellenblock zwischen TL;DR und „Governance takeaway“ („Original by [Autor], on [Blogname]“, deutsch „Original von [Autor], auf [Blogname]“). Die 30 eigenen Artikel haben keinen solchen Block. Der Originaltitel wird als `source_title` im Beitrag gespeichert, aber nirgends angezeigt. In der Liste auf der Startseite erscheinen Titel, Kurzbeschreibung und Datum und, wo der Beitrag ein Bild hat, eine Vorschau; die Quelle wird dort nicht genannt.
- **Besuche für das Original:** Der Hauptlink („Read the original“, deutsch „Artikel lesen“) führt direkt zur Artikel-URL, ohne Login, Newsletter-Schranke oder Tracking-Redirect.
- **Kurzfassung statt Ersatz:** Das Modell erhält die Vorgabe, ein TL;DR von 35 bis 65 Wörtern zu schreiben (im Bestand 42 bis 78 Wörter, Mittel 52) und dazu einen „Governance takeaway“ (deutsch „Bedeutung für Governance“) von 60 bis 140 Wörtern als Stichpunkte je Zielgruppe (Makers, Admins/CoE, Security/Compliance, Leadership/Business). Sehr kurze Quellen knapper behandeln. Keine vollständigen Schrittfolgen oder FAQ nacherzählen. Die Wortzahl ist eine redaktionelle Orientierung, keine rechtliche Freigrenze.
- **Keine falsche Zuschreibung:** Originalautor, Herausgeber unserer Kurzfassung und Einreicher sind unterschiedliche Rollen. Kuratierte Beiträge erscheinen unter der Organisation `governance_editorial`, eigene Artikel unter der Person Marcel Lehmann (`content_type: original_article`). Unsere Einordnung ist als „Governance takeaway“ erkennbar.
- **Zeitlicher Kontext:** Originaldatum und belegtes Änderungsdatum sollen getrennt vom Datum unseres Beitrags ausgewiesen werden. **Stand 30.09.2026 nicht umgesetzt:** Der Publisher speichert `source_published_at` und `source_updated_at` im Front Matter, aber kein Template zeigt sie an. Sichtbar ist nur das Datum unseres Beitrags. Produktversprechen nicht ungeprüft als aktuell darstellen.
- **Rechte respektieren:** Öffentliche URLs und RSS-Feeds sind keine pauschale Erlaubnis zur Wiederveröffentlichung. Keine fremden Bilder, Screenshots, Logos, Codeblöcke oder längeren Zitate ohne passende Rechte übernehmen. Die Karten-Bilder sind eigene, aus Text erzeugte Grafiken. Lizenz nur nennen, wenn belegt; Bedingungen beachten.
- **Korrektur und Entfernung:** Autoren können sich an die öffentlich angegebene Adresse `info@kmupower.com` wenden. Bei Entfernung oder RSS-Abmeldung soll auch eine zukünftige Wiederaufnahme verhindert werden. **Stand 30.09.2026 nicht umgesetzt:** Es gibt keine Sperrliste. Der Publisher dedupliziert nur gegen vorhandene Beiträge, ein entfernter Beitrag kann durch erneute Einreichung wiederkehren.
- **Keine erfundene Partnerschaft:** Quellenaufnahme bedeutet keine Empfehlung durch den Autor. Gemeinsame Herausgeber und bezahlte Platzierungen offenlegen. Bei Quellen der Domain `powerplatformtip.com` (von Marcel mit herausgegeben) schreibt der Publisher den Hinweis „Both publications are edited by Marcel Lehmann.“ (deutsch „Beide Publikationen werden von Marcel Lehmann herausgegeben.“) automatisch in den Beitrag.

Normale redaktionelle Quellenlinks werden nicht pauschal auf `nofollow` gesetzt. Vom Einreicher gelieferte LinkedIn-Links sind als `ugc` markiert. Für bezahlte Links gelten gesonderte Kennzeichnung und Linkattribute. Quellenlink und Nutzungsrecht sind unterschiedliche Fragen.

## Einreichung mit einem Pflichtfeld

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `content_url` | Ja | Artikel-, Blog-, RSS/Atom-, YouTube- oder Podcast-URL; **nur HTTPS** |
| `submitter_name` | Nein | Gewünschter öffentlicher Name |
| `submitter_linkedin` | Nein | Persönliche LinkedIn-Profil-URL unter `https://[www.]linkedin.com/in/` |
| `publish_credit` | Nein | HTML-Checkbox sendet `yes` nur bei ausdrücklicher Freigabe |

Kein Titel, Blogname, Themenkatalog, Sprachfeld oder E-Mail nötig. Metadaten werden aus der Quelle ermittelt und automatisch geprüft (Betriebsleitfaden, „Autonome Freigabe“). Der Einreicher muss nicht der Originalautor sein.

Ohne Einwilligung erscheinen weder Name noch LinkedIn-Link. Sie werden in diesem Fall gar nicht erst gespeichert: Der Browser sendet sie dann nicht, und der Intake-Flow verwirft sie zusätzlich. Solche Angaben dürfen auch nicht im öffentlichen Git-Repository, Feed, Suchindex oder JSON-LD landen. In Markdown sind bei Freigabe nur `submitted_by.name`, `submitted_by.linkedin` und der echte boolesche Wert `submitted_by.publish_credit: true` erlaubt. Keine privaten Kontakt- oder Einwilligungsprotokolle im öffentlichen Repository speichern.

Der Intake-Flow und der Verarbeitungs-Flow prüfen URL-Schema, Host-Schreibweise und Eingaben serverseitig (nur HTTPS, Port 443, keine Zugangsdaten, keine IP-Adressen und keine lokalen oder Testziele), und die Publisher-Validierung entschärft Ausgaben vor dem Rendern. **Redirects und DNS-Auflösung werden nicht kontrolliert**; private Netzwerkziele werden nur anhand der Host-Schreibweise erkannt, nicht per Fetch-Proxy. Die Erstplanung verlangte, sie beim Abruf zu blockieren; das ist eine bekannte Lücke (Betriebsleitfaden, „Bekannte Lücken“). Browser-Validierung ersetzt diese Prüfung nicht. Nicht behaupten, eine LinkedIn-Identität sei verifiziert, nur weil eine URL angegeben wurde.

## Quellenübersicht

- Die Seite `/sources/` entsteht beim Build aus `source_url` der veröffentlichten Beiträge.
- Es werden nur die englischen Fassungen ausgewertet (ebenso Archiv und Tags); die deutschen Fassungen erscheinen dort nicht.
- Domain-Ermittlung über den URI-Parser, nicht über Texteingaben oder Blognamen.
- Domains werden kleingeschrieben; ein führendes `www.` wird für die Gruppierung entfernt. Echte Subdomains bleiben eigenständig.
- Eine Domain erscheint einmal, mit Link zur Quellwebsite und zu den vorhandenen Zusammenfassungen.
- Unveröffentlichte Einträge, ungültige URLs und URLs mit Zugangsdaten werden nicht aufgenommen.
- Einreicher-Profile sind keine Quellen und landen deshalb nicht in dieser Domain-Liste.
- Eigene Artikel ohne `source_url` erscheinen dort ebenfalls nicht.

## Karten-Bilder und URL-Schema

- **Karten-Bild:** Je neu veröffentlichtem kuratierten Beitrag erzeugt der Publisher-Workflow ein Bild (1080 × 1350 Pixel, `tools/render_card.py`, Python mit Pillow, Schrift Kalam). Die vier Texte (Thema, Zitat, Aussage, Ergebnis-Label) liefert das Modell, immer auf Englisch und nur aus einfachen Zeichen; der Publisher lehnt alles andere ab. Das Bild liegt unter `assets/img/curated/<id>.png`, der Alt-Text lautet „Governance card: …“ bzw. „Governance-Karte: …“. Die Karte trägt keine Person und keine Unterschrift, sie erscheint unter der Organisation. Von den 61 kuratierten Paaren haben 33 ein eigenes Karten-Bild, 11 ein externes Bild und 17 keins (aus dem Repository gezählt).
- **URLs:** `/en/posts/<titel>-<hash8>/` und `/de/posts/<titel>-<hash8>/`. Der Titelteil stammt aus dem englischen Titel (höchstens 70 Zeichen), die 8 Zeichen sind der Anfang der Kennung aus der normalisierten Original-URL, damit zwei ähnliche Titel praktisch nie kollidieren. Dateinamen folgen dem Muster `JJJJ-MM-TT-<titel>-<hash8>-<sprache>.md`. Die vorhandenen Beiträge wurden am 26.09.2026 auf dieses Schema migriert (`07f7033`).

## SEO und GEO

Konkreter Titel, eigenständige Beschreibung, TL;DR, thematische Tags, nachvollziehbare Quellen und eine kurze zusätzliche Einordnung machen den Eintrag verständlich. Umgesetzt sind:

- **Canonical** selbstreferenzierend; `source_url` ist kein externes Canonical.
- **`BlogPosting`-JSON-LD** aus einer eigenen Vorlage (`_includes/metadata-hook.html`), weil die Standardausgabe des SEO-Plugins zwei Fehler hatte (falsche Schreibweise `imageObject`, kein `@id` am Autor). Kuratierte Beiträge nennen die Organisation als Autor und Herausgeber und die Original-URL als `isBasedOn`; eigene Artikel nennen die Person als Autor.
- **Organization- und Person-Schema** auf Startseite und About-Seite, verknüpft über `@id` und `sameAs` (KMUpower, Power Platform Academy, PowerPlatformTip; bei der Person LinkedIn, YouTube und der Wikidata-Eintrag).
- **Zwei Sprachfassungen:** DE und EN sind zwei Fassungen unserer Kurzfassung mit `lang`, `translation_url` und `hreflang` (`en`, `de`, `x-default` mit Englisch als Standard). Jede Beitragsseite hat einen Link zur anderen Sprache. Startseite, Archiv, Tags und Quellen sind englisch; eine deutsche Startseite gibt es nicht. Auch About, Einreichung, Datenschutz, Admin Flows und das Cookie-Banner sind nur englisch, und die Seitenleiste „Recently Updated“ mischt auf jeder Seite deutsche und englische Titel.
- **`llms.txt`** mit Kurzbeschreibung der Seite, **`robots.txt`** mit ausdrücklicher Erlaubnis für bekannte KI-Crawler, eigene **`sitemap.xml`** (nur Artikel und Inhaltsseiten; ohne Listen-, Tag-, Kategorie-, Archiv-, Einreichungs- und Datenschutzseiten, ohne 404 und Paginierung), **IndexNow** für Bing und andere (nicht für Google) und ein **Social-Preview-Bild** (`/assets/img/social-preview.jpg`, 1200 × 630) für Seiten ohne eigenes Bild; kuratierte Beiträge mit Karte verwenden die Karte als `og:image`.

Kein künstlicher Langtext für Suchmaschinen, keine erfundenen FAQs, keine Ranking- oder KI-Zitationsgarantien. Reine Duplikate und vollständige Übersetzungen sind nicht das Ziel. Die Originaldaten sollen zusätzlich zum Datum unseres Textes als sichtbare Quellenangaben erscheinen; das ist, wie oben beschrieben, noch nicht umgesetzt.

## Analytics und Einwilligung

Google Analytics (GA4) und Microsoft Clarity (Heatmaps, Sitzungsaufzeichnungen) laden erst, wenn der Besucher im Cookie-Banner zustimmt. Die Entscheidung speichert das Cookie `cookie_consent` 365 Tage. Bei „Ablehnen“ lädt kein Dienst. **Stand 30.09.2026 unvollständig:** Banner und Datenschutzseite nennen nur Google Analytics, obwohl auch Clarity nach Zustimmung lädt, und das Banner spricht von Zustimmung durch Weiternutzen, obwohl technisch eine ausdrückliche Zustimmung nötig ist.

## Beispiele im Bestand

Stand 30.09.2026, aus dem Repository gezählt: 61 kuratierte Beitragspaare aus 14 verschiedenen Quellen-Sites und 15 eigene Artikelpaare (Autor Marcel Lehmann). Der in der Erstfassung genannte Beitrag zu PowerPlatformTip 56 ist im aktuellen Bestand nicht mehr enthalten. Die gemeinsame Herausgeberschaft mit PowerPlatformTip wird bei jedem Beitrag dieser Domain automatisch offengelegt. Dass Marcel in der Erstfassung seine eigenen Einreicherangaben für einen Beispielbeitrag zur Veröffentlichung freigab, war eine persönliche Einzelfreigabe und keine Freigabe für die Daten anderer Einreicher.

## Betriebsstand

Im Repository ist die direkte Einbindung des Webhooks vorgesehen (`direct_webhook: true`, Freigabe vom 18.09.2026). Ob Einreichungs- und Verarbeitungsflow im Tenant laufen, ist dort zu prüfen. Neue Einreichungen werden autonom entschieden. Der Publisher schreibt beide Sprachfassungen, Karten-Bilder und Quittungs-Tags. IndexNow und der E-Mail-Digest sind täglich eingeplant (Zeitplan in den Workflows; ob der Digest Empfänger hat, ist nicht belegt). Einzelheiten, Zeitlimits und bekannte Lücken stehen im [Betriebsleitfaden](2026-09-18_architektur_automation_betrieb.md).
