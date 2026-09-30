# Governance-Automation: Betrieb und Freigabe

Stand: 30.09.2026. Fortgeschrieben anhand des Codes im Repository (Commit `4f34575`) und des GitHub-Verlaufs. Die Erstfassung vom 18.09.2026 beschrieb eine manuelle Freigabe. Seither ist die Freigabe autonom, es gibt zwei weitere Quellarten (YouTube, Podcast) und mehrere Betriebs-Workflows. Was sich wann geändert hat, steht im „Änderungsverlauf“ am Ende. Was sich aus dem Repository nicht belegen lässt (Laufzustand im Tenant, Formular und Ansichten in Dataverse, Anzahl aktiver Quellen), ist als „im Tenant prüfen“ oder mit dem Stand seiner letzten Prüfung gekennzeichnet.

## Ablauf

1. Power Automate läuft alle fünf Minuten, ohne parallele Flow-Ausführungen (Trigger-Nebenläufigkeit 1; Quellen und Artikel werden nacheinander verarbeitet).
2. Aus `new_governancesources` werden gelesen: aktive, freigegebene Quellen, wartende Aufträge (`Awaiting GitHub result`) und noch nicht entschiedene Einreichungen (`Awaiting approval`).
3. Einreichungen ohne Entscheidung durchlaufen zuerst die **autonome Freigabe** (Abschnitt unten).
4. Freigegebene Quellen werden je nach Quellart verarbeitet (Abschnitt „Quellarten“): RSS: Feed abrufen, neue Feed-IDs erkennen, höchstens 30 neue Einträge verarbeiten (in Feed-Reihenfolge, üblicherweise die neuesten). Artikel, YouTube, Podcast: die einzelne freigegebene URL einmal verarbeiten.
5. Der bestehende `AzureAIFoundry-Privat`-Connector prüft mit `ChatCompletion` / `model-router`, ob belastbare Power-Platform-Governance-Inhalte vorliegen (`publishable`). Allgemeine KI-News, Werbung und unzureichende Inhalte werden nicht veröffentlicht.
6. Nur relevante Inhalte werden zu kurzen eigenen DE-/EN-Zusammenfassungen mit Originalquelle, Autor soweit belegt und direktem Original-Link verarbeitet. Das Modell liefert dazu Quell-Metadaten, 1 bis 5 Tags aus einer festen Liste, vier Texte für das Karten-Bild und je Sprache Titel, Beschreibung, TL;DR und „Governance takeaway“ (Stichpunkte je Zielgruppe).
7. Der GitHub-Connector sendet die strukturierten Daten als `repository_dispatch` (Typ `curated-publication`) an `Publish Curated Articles`: `request_id`, höchstens 30 Artikel (zur Grösse des Auftrags siehe „Bekannte Lücken“) und die Einreicher-Angaben nur bei Einwilligung. Keine Zugangsdaten oder ungeprüften Markdown-Dateien im Payload. Die Original-URL setzt der Flow selbst, nicht das Modell.
8. Der GitHub-Workflow validiert alles nochmals, dedupliziert anhand der normalisierten Original-URL und schreibt beide Sprachversionen gemeinsam nach `_posts/`. Ein ungültiger Artikel wird einzeln übersprungen, der Rest des Auftrags läuft weiter. Danach rendert er je neuem Beitrag ein Karten-Bild, baut und prüft die Seite, übernimmt die Dateien nach `main` und startet den Pages-Build.
9. Nach erfolgreicher Validierung, Git-Übernahme und gegebenenfalls Pages-Build-Anforderung erstellt der Publisher die GitHub-Referenz `refs/tags/curation-results/<request_id>`. Der Flow liest diese Bestätigung authentifiziert über `GetReference`. Erst dann bestätigt er Feed-IDs bzw. setzt einen Einzelartikel auf `Published to GitHub`. Das bedeutet Git-Übernahme, nicht bereits bestätigtes Pages-Deployment. Ein bereits vorhandener Artikel wird ebenfalls bestätigt, ohne neue Dateien zu erzeugen.

Es gibt keine separate Artikeltabelle und kein Speichern fremder Artikeltexte in Dataverse. Pro Quelle werden nur Betriebsstatus und verarbeitete Feed-IDs gespeichert. Der vollständige Artikel bleibt beim ursprünglichen Herausgeber.

## Quellarten

Die Tabelle kennt vier Quellarten (`Source type`). Das Routing je Eintrag sieht so aus:

| Erkennung | Verarbeitung |
|---|---|
| Die Adresse des Eintrags enthält `v=`, `youtu.be/` oder `/shorts/` (YouTube-Video-ID), auch als Eintrag in einem RSS-Feed | Transkript über `youtube.com/api/timedtext` (JSON, **nur Sprache `en`**), 1 Minute Zeitlimit. Die Seite bettet das Video datenschutzfreundlich ein (`youtube-nocookie.com`) |
| Quellart `Podcast` (nur, wenn ein Mensch sie setzt) | Audiodatei abrufen (4 Minuten), Transkription über den Foundry-Connector (`TranscribeAudio`, Bereitstellung `whisper`, API-Version 2024-10-21, 5 Minuten) |
| alles andere (Artikel, RSS-Einträge) | HTML abrufen (1 Minute), auf 600.000 Zeichen begrenzen und über den Content-Conversion-Connector in Text umwandeln |

Dem Modell werden in allen drei Zweigen höchstens 30.000 Zeichen des Textes übergeben, ebenso dem Gate für Einreichungen.

Nur YouTube wird an der Adresse erkannt. Die Erkennung prüft lediglich diese Textteile, nicht den Host: Jede Artikeladresse, die irgendwo `v=` enthält (etwa `?rev=3`), geht deshalb in den YouTube-Zweig. Den Podcast-Zweig erreicht nur ein Datensatz, dessen Quellart von Hand auf `Podcast` gesetzt wurde. Kein Flow setzt diese Quellart: Öffentliche Einreichungen werden als `Article` gespeichert und höchstens auf `RSS` umgestellt, das Gate ändert die Quellart nie, und das Seed-Skript legt nur `RSS` an. Eine öffentlich eingereichte Podcast-Adresse erreicht die Transkription daher nie, eine YouTube-Adresse nur, wenn das Artikel-Gate die rohe Seite eines Videos als Artikel bestehen würde, was unwahrscheinlich ist. Der funktionierende Weg für YouTube sind Kanal-Feeds (`RSS`), für Podcasts ein von Hand angelegter Datensatz mit Quellart `Podcast` und der Adresse der Audiodatei. Ein Podcast-Feed (`RSS`) wird über die Seiten der Folgen (Shownotes) verarbeitet, nicht über das Audio.

Die Veröffentlichung von YouTube- und Podcast-Quellen ist implementiert und getestet. **Im Bestand gibt es Stand 30.09.2026 keinen Beitrag dieser Art.** Von 152 Beitragsdateien tragen 64 das Feld `source_type`, alle mit dem Wert `article` (ältere Beiträge haben das Feld nicht), und keine Datei hat `source_video_id`. Ob der undokumentierte Transkript-Endpunkt für YouTube zuverlässig Text liefert, ist damit nicht belegt.

## Autonome Freigabe (seit 24.09.2026)

Eine neue Einreichung kommt mit `Awaiting approval`, `Processing enabled = No` und `Needs review` an (das setzt der Intake-Flow fest). Der Verarbeitungs-Flow greift sie im nächsten Lauf auf:

1. **URL prüfen:** nur HTTPS, Port 443, keine Zugangsdaten in der URL, kein IP-, lokales oder Testziel.
2. **URL abrufen** (HTTP GET, 1 Minute Zeitlimit, zwei Wiederholungen).
3. **Sieht die Antwort wie ein Feed aus?** Das gilt, wenn der Content-Type `xml`, `rss` oder `atom` enthält, die ersten 500 Zeichen `<rss` oder `<feed` enthalten oder der Text mit `<?xml` beginnt (das trifft auch auf Sitemaps, SVG oder XHTML zu, und wer die Adresse kontrolliert, bestimmt Content-Type und Anfang). Dann wird die Quelle **ohne Relevanzprüfung** als `RSS` freigegeben und aktiviert; nur die URL-Prüfung aus Schritt 1 hat stattgefunden. Die einzelnen Einträge werden erst später bewertet, sobald der Feed abgefragt wird.
4. **Sonst:** Text extrahieren (auf 600.000 Zeichen begrenzt) und dem Foundry-Gate übergeben (höchstens 30.000 Zeichen). Nur bei `meets_criteria = true` wird freigegeben und aktiviert (`Approved`, `Yes`, `Ready`). Die Kriterien: echter, lesbarer Beitrag mit erkennbarem Autor oder Herausgeber; substanziell und spezifisch zum Thema (nicht nur KI-News, Werbung oder Nebenerwähnung); genug eigener Inhalt für eine faire Zusammenfassung; kein Hinweis auf Spam, Plagiat, Schadsoftware oder rechtliches Risiko. Andernfalls `Rejected`, deaktiviert, `Needs review`. Bei Unsicherheit gilt „nicht freigeben“.
5. Der Grund steht in `Last processing message`. **Die Entscheidung wird nicht von einem Menschen geprüft.**

**Fehlerfall:** Schlägt die URL-Prüfung, der Abruf oder der Foundry-Aufruf bei einer Einreichung fehl, wird sie nicht abgelehnt. Der Flow setzt `Error` (beim dritten Fehler `Needs review`), die Freigabe bleibt `Awaiting approval`. Weil der Flow jeden Datensatz mit `Awaiting approval` bei jedem Lauf wieder aufgreift, wird eine solche Adresse alle fünf Minuten erneut abgerufen (je Abruf mit zwei Wiederholungen), bis ein Mensch eingreift. Der Fehlerzähler ist auf 1.000 begrenzt und wäre bei dauerhaftem Fehler nach gut drei Tagen voll (die Wirkung ist nicht geprüft).

Öffentliche Eingaben können weiterhin nie selbst `Approval` oder `Enabled` setzen. Beides passiert ausschliesslich serverseitig im Flow. Manuelle Eingriffe bleiben möglich: `Rejected` oder `Processing enabled = No` setzen, ein Freigabewechsel in Dataverse wirkt beim nächsten Lauf.

## Erfassung und Freigabe

Tabelle: **Governance sources** (`new_governancesource`).

| Feld | Verwendung |
|---|---|
| Name | Interne Bezeichnung der Quelle oder des Artikels |
| Article, RSS, YouTube or podcast URL | Die genaue HTTPS-URL des Artikels, Feeds, Videos oder der Audiodatei, nicht eine Blog-Startseite ohne Feed |
| Source type | `Article`, `RSS`, `YouTube` oder `Podcast` |
| Approval | `Awaiting approval`, `Approved`, `Rejected` |
| Processing enabled | Separater Ein-/Aus-Schalter; standardmässig `No` |
| Processing status | `Ready`, `Published to GitHub`, `Needs review`, `Error`, `Awaiting GitHub result` |
| Process RSS articles published from | Optionaler Startzeitpunkt beim ersten Feed-Lauf; sonst gilt die Erstellungszeit des Quelldatensatzes |
| Submitter name / Submitter LinkedIn | Optionale Angaben passend zum Websiteformular |
| Public contributor credit consent | Nur `Yes` erlaubt die Übertragung dieser Angaben zu GitHub |
| Last checked / Last published | Zeitstempel des letzten Laufs bzw. der letzten bestätigten Veröffentlichung |
| Last processing message | Lauf- oder Fehlerhinweis; keine fremden Volltexte |
| Consecutive failures | Zähler aufeinanderfolgender Verarbeitungsfehler |
| Confirmed / Pending RSS watermark, Confirmed / Pending feed IDs, GitHub publication request, Last GitHub post path | Interne Betriebsfelder, im Erfassungsformular nicht enthalten |

**Start:** `Approval = Approved`, `Processing enabled = Yes`, `Processing status = Ready`. Das setzt bei Einreichungen der Flow selbst (autonome Freigabe), bei kuratierten Quellen das Seed-Skript `tools/seed-mvp-sources.mjs` bzw. ein Mensch in Dataverse. Zum Pausieren `Processing enabled = No` setzen. Der technische Dataverse-Status muss ebenfalls aktiv sein. Freigabe eines RSS-Feeds erlaubt die automatische Veröffentlichung seiner relevanten Kurzfassungen, nicht die Übernahme fremder Volltexte oder Bilder.

Ansichten und Formular sind nicht im Repository abgelegt. Stand der Erstfassung vom 18.09.2026 (im Tenant nicht erneut geprüft): Ansichten `Governance - Awaiting approval`, `Governance - Active RSS feeds`, `Governance - Individual articles`, `Governance - Needs attention`; das Hauptformular enthält die fachlichen Eingabefelder und schreibgeschützte Betriebsinformationen, die internen Feed-ID-Felder stehen bewusst nicht im Erfassungsformular.

Eine URL-Änderung an einer bereits freigegebenen Quelle nur nach Pausierung und erneuter Prüfung durchführen; für eine andere Quelle vorzugsweise einen neuen Datensatz anlegen. Bereits an GitHub übergebene Aufträge sind durch ein nachträgliches Pausieren nicht zurückgerufen; solche Läufe bei Bedarf in GitHub abbrechen.

### Seed: kuratierte Quellen

`tools/seed-mvp-sources.mjs` legt Feeds aus `tools/mvp-blog-sources.json` (109 MVP-Blogs) und `tools/mvp-youtube-channels.json` (175 YouTube-Kanäle, vier Kanäle sind dort je zwei Personen zugeordnet) als `RSS`-Quellen an, **bereits freigegeben und aktiviert**. Sie umgehen damit das KI-Gate, weil dieses eine einzelne Artikelseite erwartet und eine Feed-Adresse falsch ablehnen würde. Die Blog-Feeds wurden am 25.09.2026 einmal abgerufen: 109 von 165 Kandidaten antworteten mit Feed-Inhalt (Commit `c74fc43`); die 175 YouTube-Feeds kamen mit `de5e968` hinzu und wurden nach dem Text dieses Commits ebenfalls abgerufen. Das Skript prüft vorhandene URLs nur einmal zu Beginn und überspringt diese, `--dry-run` schreibt nichts. Beim ersten Lauf legt es deshalb 284 Datensätze an, von denen vier eine bereits angelegte Feed-URL wiederholen (die YouTube-Liste hat 171 verschiedene Feeds in 175 Einträgen). Wie viele dieser Quellen im Tenant tatsächlich angelegt und aktiv sind, ist im Tenant zu prüfen.

## Formularmapping

| Websitefeld | Dataverse |
|---|---|
| `content_url` | `new_contenturl` |
| `submitter_name` | `new_submittername` |
| `submitter_linkedin` | `new_submitterlinkedin` |
| `publish_credit` exakt `yes` | `new_publishcredit = true`, sonst `false` |

Öffentliche Eingaben dürfen niemals `new_approval` oder `new_enabled` setzen. Der Webhook-Intake ist als Flow definiert (`tools/intake.mjs`) und wurde am 18.09.2026 live getestet (siehe unten); er weist zusätzliche Felder ab und setzt Freigabe/Aktivierung ausschliesslich serverseitig. **Direkte öffentliche Einbindung am 18.09.2026 nach Aufklärung über Spam- und Kapazitätsrisiken ausdrücklich freigegeben.** Einreichungsflow und separater Fünf-Minuten-Verarbeitungsflow sind für den Betrieb vorgesehen (Laufzustand im Tenant prüfen). Neue Einreichungen werden nicht mehr manuell freigegeben, sondern durch die autonome Freigabe entschieden.

## Website-Webhook

- Flow: `Power Platform Governance - Website submissions - Webhook`, ID `b8c08dea-43e2-43e2-90ce-e5c8e3fe3671`, in derselben Solution. Stand 18.09.2026 für die direkte Website-Einreichung aktiviert (Laufzustand im Tenant prüfen).
- Definition: `tools/intake.mjs`; Bereitstellung: `pwsh -File tools/deploy-intake.ps1`. Ohne `-Enable` bleibt der Flow ausgeschaltet. Keine Abhängigkeit von GitHub oder Foundry.
- Request: JSON per POST mit den vier Websitefeldern und optional leerem Honeypot-Feld `website`. Nur HTTPS, keine offensichtlichen lokalen/IP-Ziele oder URL-Zugangsdaten; LinkedIn nur persönliches Profil auf `linkedin.com` bzw. `www.linkedin.com`.
- Keine URL wird beim Intake abgerufen. Keine KI-, GitHub- oder Veröffentlichungsaktion. `Approval = Awaiting approval`, `Processing enabled = No`, `Processing status = Needs review` sind fest verdrahtet.
- Quelltyp wird zunächst als `Article` gespeichert. Ob ein Feed eingereicht wurde, erkennt der Verarbeitungs-Flow beim Abruf und stellt die Quelle dann auf `RSS` um (siehe „Autonome Freigabe“). Eine Blog-Startseite ohne nutzbaren Feed wird vom KI-Gate abgelehnt.
- Namen und LinkedIn werden nur mit `publish_credit = yes` übertragen und gespeichert. Ohne Einwilligung werden sie bereits im Browser weggelassen; der Flow verwirft sie zusätzlich.
- Bereits vorhandene URLs werden nicht geändert, auch nicht Einwilligung oder Freigabe. Fragmente werden entfernt, danach wird der genaue Text der URL verglichen: Dieselbe Seite in anderer Schreibweise (etwa mit Tracking-Parameter oder anderem Schluss-Schrägstrich) ergibt einen weiteren Datensatz. Die Lookup-Prüfung verhindert Wiederholungen nacheinander, ist jedoch keine atomare Eindeutigkeitsgarantie für gleichzeitige Requests. Dubletten müssen von Hand zusammengeführt werden; der Publisher dedupliziert die Beiträge danach über die normalisierte URL.
- Antwort erst nach erfolgreicher Dataverse-Operation: HTTP 202 mit `accepted: true, status: awaiting_review`. Ungültige Eingaben: 400. Speicherfehler: 503. Keine persönlichen Daten, Datensatz-IDs oder Fehlerdetails in öffentlichen Antworten.
- Callback-Adresse wird als GitHub-Actions-Secret `GOVERNANCE_SUBMISSION_ENDPOINT` erst beim Pages-Build eingebunden, nicht im Git-Verlauf gespeichert. **Im ausgelieferten HTML und im Browser ist sie absichtlich öffentlich; das Build-Secret ändert daran nichts.** Geschützte Flow-Eingaben/Ausgaben reduzieren persönliche Daten im Laufprotokoll. Die gespeicherten Dataverse-Angaben bleiben dort für Berechtigte sichtbar.
- `tools/test-intake-live.ps1`: 11 echte HTTP-Prüfungen, einschliesslich gespeicherter Freigabesperre, Opt-in, Wiederholung und unzulässiger Steuerfelder. Das Skript verlangt einen ausgeschalteten Flow und darf nicht während des öffentlichen Betriebs ausgeführt werden. Seit der autonomen Freigabe muss dabei auch der Verarbeitungs-Flow ausgeschaltet sein: Sonst würden die Testdatensätze im nächsten Lauf abgerufen, vom Gate beurteilt und bei Erfolg veröffentlicht, und die Prüfung „Submission escaped approval gates“ könnte fälschlich anschlagen. Beim Test am 18.09.2026 bestanden alle Prüfungen.
- Direkter Browser-Test auf `https://powerplatformgovernance.com/submit/` am 18.09.2026 gegen den echten Webhook: HTTP 202, bestätigte Meldung, Eingabefeld zurückgesetzt und genau ein Dataverse-Datensatz je Test-URL mit `Awaiting approval` / `No` / `Needs review`, ohne Namensdaten. Eigene Testdatensätze anschliessend entfernt. Fehlerbehandlung und Desktop/Mobil wurden zusätzlich mit abgefangenen Antworten geprüft.

### Direkter Pilotbetrieb

Stand 18.09.2026 gibt es keinen Proxy und keine Azure Function (im Tenant nicht erneut geprüft). `_data/submission.yml` enthält `direct_webhook: true` und eine leere lokale `endpoint`-Angabe. Build-Plugin und Browser erlauben die signierte Power-Automate-Adresse nur bei dieser ausdrücklichen Freigabe und passender Callback-Struktur. Ohne Build-Secret bleibt das Formular deaktiviert.

1. CORS-Preflight der Power-Platform-Plattform ist geprüft: HTTP 204, POST und `content-type` erlaubt. CORS ist keine Authentifizierung und begrenzt keine direkten Bot-Aufrufe.
2. Kein eigener serverseitiger Rate-Limiter oder CAPTCHA vorhanden. Honeypot und Eingabeprüfung sind nur einfache Hürden. Viele gültige unterschiedliche Einreichungen können Dataverse-Speicher und Flow-/API-Kapazität beanspruchen; mögliche Kosten hängen vom Lizenzmodell ab. Diese Restrisiken wurden für den Pilotbetrieb akzeptiert. Seit der autonomen Freigabe hat jede öffentliche Eingabe zusätzlich Folgen für den Verarbeitungs-Flow: eingereichte Feeds werden ohne Relevanzprüfung dauerhaft abgefragt, und eine Einreichung, die nicht abgerufen oder bewertet werden kann, wird alle fünf Minuten erneut versucht.
3. Laufzahlen, Fehler und die Ansicht `Governance - Awaiting approval` manuell beobachten; Letztere enthält seit der autonomen Freigabe meist nur Einreichungen der letzten Minuten und Fälle mit wiederholtem Fehler. Es wurde keine automatische Missbrauchsüberwachung eingerichtet.
4. Bei Missbrauch zuerst den Einreichungsflow ausschalten. Bei Schlüsselwechsel das Actions-Secret aktualisieren und den Pages-Build erneut auslösen; eine bereits veröffentlichte Adresse als dauerhaft bekannt behandeln.
5. Später bei Bedarf einen Proxy mit wirksamer Anfragebegrenzung und/oder serverseitig geprüftem Bot-Schutz ergänzen. Für diesen Wechsel `direct_webhook` wieder deaktivieren und den öffentlichen Proxy konfigurieren.

Implementierungsgrundlage ist die Second-Brain-Notiz `Flow_per_Web_API_anlegen_clientdata.md`. Zusätzlich live verifiziert: `ParseJson` unterstützt bei `OpenApiConnection` keine `pattern`-Schemas; `ParseJson`/`Compose` benötigen hier ausschliesslich geschützte Eingaben statt separat geschützter Ausgaben; synchrone `Response`-Aktionen erlauben keine Trigger-Parallelitätsbegrenzung.

## Sicherheit und Betriebsgrenzen

- HTTPS, Port 443, keine URL-Zugangsdaten und keine offensichtlichen lokalen/IP-Ziele. RSS-Artikel müssen denselben Host wie der freigegebene Feed verwenden; ein Eintrag mit anderem Host wird übersprungen und gilt als gesehen. Externe Feed-Hosts benötigen eine gesonderte Erweiterung der Freigaberegel.
- Diese Prüfungen ersetzen keinen DNS-/Redirect-kontrollierten Fetch-Proxy. Die HTTP-/RSS-Connectors sind keine vollständige SSRF-Schutzschicht. Die frühere Regel „nur manuell geprüfte öffentliche Quellen freigeben“ gilt seit der autonomen Freigabe nicht mehr; sie wird durch das KI-Gate für Einzelartikel und durch die spätere Bewertung jedes Feed-Eintrags ersetzt.
- Fremde Seiteninhalte sind untrusted data. Sie können keine Freigabe erteilen, Repository-Pfade bestimmen oder Tools ausführen. Die Modellausgabe wird im Publisher erneut streng geprüft (Längen, feste Tag-Liste, URL, Datum, Kartentexte nur aus einfachen Zeichen); HTML-/Liquid-Ausgaben werden beim Rendern entschärft.
- **Zeitlimits:** Ein hängender Aufruf soll die sequenzielle Schleife nicht blockieren. Ausdrückliche Obergrenzen haben die Foundry-Aufrufe (3 Minuten, Transkription 5 Minuten), der RSS-Connector und Content Conversion (je 2 Minuten) sowie die HTTP-Abrufe (1 Minute, Audio 4 Minuten, mit je bis zu zwei Wiederholungen). Die GitHub-Aktionen (Übergabe, Lesen der Quittung) und alle Dataverse-Aktionen haben kein ausdrückliches Limit. Anlass waren zwei reale Hänger: ein Foundry-Aufruf stand über 28 Minuten, und der RSS-Connector hing an einem Feed-Server, der nur langsame Fehlerantworten (Cloudflare 522) lieferte.
- **Obergrenze pro Lauf:** Je Quelle werden höchstens 30 neue Einträge verarbeitet (in Feed-Reihenfolge). Der Halt mit manueller Prüfung bei grösseren Mengen wurde am 26.09.2026 entfernt. Der Flow merkt sich dabei **alle** im Feed gesehenen IDs; Einträge jenseits der 30 werden deshalb nicht nachgeholt (siehe „Bekannte Lücken“). Die Liste der gemerkten IDs wird nicht gekürzt; ihre Grenze ist das Memo-Feld (höchstens 1.000.000 Zeichen).
- Ein Fehler auf Quellenebene bestätigt keine Feed-IDs. Nach drei aufeinanderfolgenden Verarbeitungsfehlern erfolgt `Needs review`. Bereits übergebene Aufträge bleiben bei fehlender GitHub-Bestätigung in `Awaiting GitHub result`; sie werden nicht erneut an Foundry oder GitHub übergeben. Nach 24 Stunden ohne Bestätigung erfolgt `Needs review`, auch bei einem fehlgeschlagenen Publisher oder einer defekten Verbindung. Ein einzelner nicht verarbeitbarer Artikel (Abruf, Bewertung oder Host-Prüfung schlägt fehl) wird übersprungen, ohne den Rest des Laufs zu beeinträchtigen. Seine ID gilt aber als gesehen und wird nie wieder versucht.
- Vor der Übergabe an GitHub liest der Flow den Quelldatensatz erneut und bricht ab, wenn Freigabe, Aktivierung, technischer Datensatzstatus (`statecode`) oder Änderungszeit nicht mehr zum Lauf passen.
- GitHub-Deduplizierung liest die vorhandenen Postdateien (normalisierte Original-URL ohne `www.`, ohne Schluss-Schrägstrich und ohne Tracking-Parameter). Keine zusätzliche Artikel-Datenbank. Gleichzeitige Git-Commits werden bei abweichenden Dateien per Rebase wiederholt (bis zu drei Push-Versuche mit zwei Rebases dazwischen); echte Konflikte verlangen Prüfung.
- Das Repository bleibt privat. Erfolgsreferenzen werden ausschliesslich über die angemeldete GitHub-Verbindung gelesen; es gibt keine anonyme Actions-Abfrage und keine Begrenzung auf die letzten 100 Läufe. Bestätigungs-Tags nicht löschen, solange zugehörige Aufträge noch warten. Den tatsächlichen Fehler eines Publishers in GitHub Actions prüfen; der Connector liefert hier nur die Erfolgsbestätigung, nicht das Actions-Fehlerprotokoll.
- Eine GitHub-Übergabe enthält höchstens 30 Artikel. **Nicht geprüft:** Nach unserer Kenntnis begrenzt GitHub das `client_payload` eines `repository_dispatch` auf 65.535 Zeichen (die Dokumentation war nicht abrufbar). Ein Artikelobjekt ist im Bestand rund 3 bis 4 Tausend Zeichen gross; ab etwa 19 relevanten Artikeln in einem Auftrag würde die Übergabe dann abgelehnt. Der Fehler wäre sichtbar (Fehlerzähler, nach drei Versuchen `Needs review`) und kein stiller Verlust, würde aber jedes Mal dieselbe Charge neu bewerten lassen. Zu grosse Aufträge werden nicht als veröffentlicht markiert.
- Der Standard-GitHub-Connector fordert auch Organisationsrechte an. Die persönliche Zustimmung dazu erfolgt durch Marcel und wird nicht automatisiert erteilt.

## Betriebs-Workflows in GitHub

| Workflow | Auslöser | Zweck |
|---|---|---|
| `Build and Deploy` (`pages-deploy.yml`) | Push auf `main` oder `master` (ohne reine Änderungen an `.gitignore`, `README.md`, `LICENSE`), manuell | Jekyll-Build (production) mit dem Secret `GOVERNANCE_SUBMISSION_ENDPOINT`, Node-Tests, Publisher-Test, htmlproofer, `tools/check-site.rb`, Deployment auf GitHub Pages |
| `Publish Curated Articles` (`publish-curation.yml`) | `repository_dispatch` `curated-publication` | Läuft nur, wenn der auslösende Akteur `MarceLehmann` ist. Publisher-Test, Validierung, Deduplizierung, Rendern; Karten-Bilder (Python mit Pillow, nicht festgelegte Version; die Schrift Kalam wird je Lauf von `raw.githubusercontent.com/google/fonts` geladen); Build und Prüfungen; Commit `Publish approved governance summaries` auf `main`; startet den Pages-Build; schreibt das Quittungs-Tag |
| `IndexNow Ping` (`indexnow.yml`) | Push auf `main`, täglich 03:00 UTC, manuell | Meldet alle URLs der Live-Sitemap an IndexNow (Bing, Copilot, Yandex). Nicht für Google. Ein Push des Publishers mit dem Workflow-Token löst keinen weiteren Workflow aus, deshalb deckt der tägliche Lauf neue Beiträge ab |
| `Daily Governance Digest` (`daily-digest.yml`) | täglich 17:00 UTC, manuell | `tools/send_digest.py` sendet eine Brevo-Kampagne (Liste 22) mit den neuen kuratierten Beiträgen (DE und EN TL;DR). Zustand in `tools/digest-sent.json`, Secret `BREVO_API_KEY`. Hat die Liste keine Kontakte, wird nichts gesendet und nichts als erledigt markiert. Die Zustandsdatei wurde mit den 21 damals veröffentlichten Beiträgen vorbelegt (`4ba0bd0`); die übrigen bis heute veröffentlichten Beiträge (40 von 61 Paaren) gelten als ungesendet, der erste Versand an eine nicht leere Liste enthielte sie also alle. Ein Anmeldeformular ist im Repository nicht vorhanden |

## Bereitgestellter Stand

Stand der Erstfassung vom 18.09.2026, im Tenant nicht erneut geprüft:

- Solution, Tabelle, Fachformular, vier Ansichten und fünf Connection References sind angelegt. Die Tabelle ist einschliesslich beider interner Feed-ID-Felder veröffentlicht.
- Cloud Flow `Power Platform Governance - RSS and articles - Every 5 minutes`, ID `fbbf117b-3bb3-f111-aaac-70a8a505a30e`, war mit Feed-ID-Erkennung gespeichert und **aktiv**. Die Definition wurde strukturell zurückgelesen; unterschiedliche JSON-Feldreihenfolge ist kein inhaltlicher Unterschied.
- Dataverse, RSS, Content Conversion, Foundry und GitHub sind gebunden. GitHub ist als `MarceLehmann` verbunden; Connection-ID `shared-github-43814939-8f33-474b-9bb1-361497f42b59`. Der Publisher erlaubt weiterhin nur diesen GitHub-Akteur.
- Live-Test: freigegebener bekannter Artikel wurde abgerufen, durch den bestehenden Foundry-Connector geprüft und über den GitHub-Connector übergeben. [Publisher-Lauf 35335821979](https://github.com/MarceLehmann/powerplatformgovernance/actions/runs/35335821979) erfolgreich; URL-Deduplizierung erzeugte korrekt `0 new language files`. Der Folgelauf bestätigte den Artikel über `GetReference` als veröffentlicht.
- RSS-Live-Test: öffentlicher Feed gelesen und zehn IDs gespeichert. Ein zweiter Lauf bestätigte dieselben IDs ohne erneuten Foundry-Aufruf oder Dispatch. Eine aktivierte, aber nicht freigegebene Kontrollquelle blieb vollständig unangetastet. Diese kontrollierten Testquellen wurden entfernt; keine dauerhafte Feed-Freigabe wurde dabei angelegt.
- Fehlende GitHub-Bestätigung live geprüft: 404 bleibt im Wartezustand ohne erneute Übergabe; nach simulierten 25 Stunden erfolgt `Needs review`, ohne Feed-IDs oder Wasserzeichen zu bestätigen. Power Automate meldet den abgefangenen 404 auch an den äusseren Fehlerzweig; dieser darf wartende Aufträge deshalb nicht auf `Error` zurücksetzen.
- GitHub-Publisher und Vorlagen sind veröffentlicht. Pages-CI, Websiteprüfungen und Deployment sind erfolgreich durchgelaufen. Der Live-Test veröffentlichte bewusst keine neue Zusammenfassung; neue zweisprachige Postdateien sind zusätzlich durch temporäre Publisher-/Jekyll-Testdaten geprüft.
- Lokale Prüfungen: Node-Tests für Gates und Flow-Struktur, Ruby-Tests für den Publisher, Jekyll-Build und Websiteprüfungen einschliesslich beider Sprachpfade und unbekannter Quelldaten. Ein absichtlich entfernter Canonical-Link in einer temporären deutschen Testseite wurde korrekt abgewiesen.

Bestand der Website am 30.09.2026 (aus dem Repository gezählt): 61 kuratierte Beitragspaare (DE und EN) aus 14 verschiedenen Quellen-Sites und 15 eigene Artikelpaare, zusammen 152 Beitragsdateien. Node-Tests im Repository: 17 (Stand 30.09.2026).

## Bekannte Lücken (Stand 30.09.2026)

Diese Punkte sind aus dem Code belegt und noch nicht behoben, sofern nichts anderes dabeisteht. Die ausführliche Bewertung mit Fundstellen steht in der Spezifikation im Repository `powerplatformnews.com` (`docs/2026-09-30_spezifikation_power-platform-news.md`, Anhang A; Branch `ccr-453447c5-qyg2zo`, noch nicht gemerged).

1. **Überzählige Feed-Einträge gehen verloren.** Der Flow merkt sich alle im Feed gesehenen IDs, verarbeitet aber höchstens die ersten 30 neuen Einträge in Feed-Reihenfolge (üblicherweise die neuesten). Einträge jenseits der 30 gelten danach als gesehen und werden nie verarbeitet. Das gilt auch dann, wenn unter den verarbeiteten Einträgen keiner veröffentlicht wird (der Zweig „No_relevant_articles“ bestätigt ebenfalls alle gesehenen IDs). Betroffen sind Erstläufe mit weit zurückliegendem Startzeitpunkt (Backfill), mehrtägige Ausfälle und sehr aktive Feeds. Das verletzt die Regel der Erstfassung „Keine stille Begrenzung mit anschliessendem Überspringen“. Der Kommentar im Code („catches up gradually“) und der Text des Commits `764d54c` beschreiben ein Nachholen, das es nicht gibt; ein Test schreibt das Verhalten fest. Der Auslöser der Änderung war ein Podcast-Feed, der beim ersten Abruf mehr ungesehene Folgen hatte als die Obergrenze; ob seither Einträge verloren gingen, ist nicht nachgezählt.
2. **Einzelne Artikel gehen stumm verloren.** Schlägt bei einem Eintrag der Abruf, die Bewertung oder die Host-Prüfung fehl (Zeitüberschreitung, Drosselung bei Foundry, Lesefehler, anderer Host als der Feed), wird er übersprungen. Seine ID wurde schon vorher als gesehen gemerkt und wird mit der Charge bestätigt. Ein Video ohne englische Untertitel im ersten Abruf bleibt dadurch dauerhaft unberücksichtigt. Ob Power Automate einen so abgefangenen Fehler zusätzlich an den äusseren Fehlerzweig der Quelle meldet (bei der abgefangenen 404 der Quittung war das so, siehe „Bereitgestellter Stand“), ist für diesen Fall nicht geprüft; dann würde die Quelle zusätzlich auf `Error` gesetzt und die Charge nicht bestätigt.
3. **Die Liste gemerkter Feed-IDs wird nie gekürzt.** Die Grenze von 2.000 IDs samt `Needs review` aus der Erstfassung gibt es im Code nicht mehr; der Commit `764d54c` hat sie bewusst entfernt und nennt das Memo-Feld (höchstens 1.000.000 Zeichen) als Grenze. Die Betriebsanleitung der Erstfassung war damit veraltet. Ein Risiko besteht nur bei Feeds mit instabilen IDs: Dort würden bei jedem Abruf bis zu 30 Einträge neu bewertet, und das Memo-Feld wäre nach grober Rechnung in ein bis zwei Tagen voll.
4. **Eingereichte Feeds werden ohne Relevanzprüfung freigegeben** und dauerhaft abgefragt. Bewertet wird erst jeder einzelne Eintrag.
5. **Eine Einreichung, die nicht geprüft werden kann, bleibt ewig offen.** Schlagen URL-Prüfung, Abruf oder Gate-Aufruf fehl, wird sie nicht abgelehnt und alle fünf Minuten erneut abgerufen (siehe „Autonome Freigabe“, Fehlerfall).
6. **Kein Takedown-Mechanismus.** Es gibt keine Sperrliste. Der Publisher dedupliziert nur gegen vorhandene Beiträge. Dieselbe URL kehrt nicht wieder, solange ihr Datensatz besteht; eine andere Schreibweise der URL, ein neuer Datensatz oder ein gelöschter Datensatz bringt einen entfernten Beitrag zurück.
7. **Keine Kontrolle von Redirects und DNS-Auflösung beim Abruf.** Die Erstplanung verlangte, private Netzwerkziele beim Abruf zu blockieren. Umgesetzt ist nur die Prüfung der Host-Schreibweise. Seit der autonomen Freigabe ruft der Flow jede eingereichte URL ab.
8. **YouTube und Podcast** sind ohne veröffentlichten Beitrag und damit im Betrieb nicht belegt. Das YouTube-Transkript nutzt einen undokumentierten Endpunkt und nur englische Untertitel, die Erkennung prüft nur Textteile (`v=`), und der Podcast-Zweig ist für öffentliche Einreichungen nicht erreichbar.
9. **Texte auf der Website weichen vom Betrieb ab** (die Website-Texte wurden bei dieser Überarbeitung nicht geändert):
   - Die About-Seite sagt „Community suggestions are reviewed before publication“ und „Publication is subject to review“, die Einreichungsseite „We publish short summaries after review“ und „Send for review“, und die Bestätigungsmeldung nach dem Absenden lautet „submitted for review“ (`assets/js/submission.js`, von `tools/submission.test.mjs` festgeschrieben). Tatsächlich entscheidet ein KI-Gate ohne Mensch.
   - Die About-Seite sagt, sie unterscheide „the source's publication date from our entry date“. Kein Template zeigt `source_published_at` oder `source_updated_at`.
   - Die Datenschutzseite sagt, Name und LinkedIn-Profil würden ohne Haken „used only to credit/contact you privately“. Tatsächlich werden sie ohne Haken weder gesendet (`assets/js/submission.js`) noch gespeichert (`tools/intake.mjs`).
   - Cookie-Banner und Datenschutzseite nennen nur Google Analytics, obwohl auch Microsoft Clarity nach Zustimmung lädt.
   - Jede Seite lädt Schriftarten von Google Fonts und Symbole und Skripte von jsDelivr, bevor der Besucher etwas entschieden hat. Die Datenschutzseite nennt beide nicht.
10. **Der Betrieb hängt an einer Verbindung mit weitreichenden Rechten.** Der Publisher schützt sich durch die Prüfung des auslösenden Akteurs (das ist im Code belegt). Der Umfang der OAuth-Rechte der GitHub-Verbindung ist aus dem Code nicht ersichtlich und im Tenant zu prüfen; der Standard-Connector fordert nach bisheriger Kenntnis auch Organisationsrechte an.

## Betrieb und Änderungen am Flow

1. Quellen über das Formular einreichen (die autonome Freigabe entscheidet), per Seed-Skript anlegen oder direkt in Dataverse erfassen. Zum Pausieren `Processing enabled = No` setzen.
2. Für Definitionsänderungen zuerst den Veröffentlichungsflow ausschalten. `pwsh -File tools/deploy-automation.ps1` mit PowerShell 7.4 oder neuer ausführen. Das Skript nutzt die vorhandene Azure-CLI-Anmeldung, prüft die komplette paginierte Connections-Liste, bindet GitHub, bricht hängende Läufe der letzten zehn Ausführungen ab (ein beim Ausschalten laufender Lauf bleibt sonst in `Running` und blockiert wegen der Nebenläufigkeit 1 still jeden weiteren Trigger) und speichert den aktuellen Generator-Stand. Es gibt keine Tokens aus und lässt den Flow standardmässig ausgeschaltet.
3. Bei mehreren GitHub-Verbindungen die gewünschte Connection-ID mit `-GitHubConnection` angeben.
4. Nach erfolgreichen kontrollierten End-to-End-Tests im Designer aktivieren. Alternativ kann das Bereitstellungsskript nach erfolgter Prüfung mit `-Enable` aktivieren.

Quellartefakte: `tools/automation.mjs`, `tools/intake.mjs`, `tools/publish-curation.rb`, `tools/render_card.py`, `tools/deploy-automation.ps1`, `tools/deploy-intake.ps1` und die Workflows unter `.github/workflows/`. Keine Secrets in diesen Dateien.

## Änderungsverlauf

Aus der Git-Historie (Commit-Kürzel in Klammern, Datum nach Zürcher Zeit). Die Erstfassung der Dokumente ist vom 18.09.2026. Der lokale Klon beginnt erst am 24.09.2026; für die Zeit davor ist nur die Auswahl unten aus dem GitHub-Verlauf ergänzt, weitere Änderungen zwischen dem 18. und dem 23.09. sind hier nicht aufgeführt.

| Datum | Änderung |
|---|---|
| 23.09. | Die Beispielbeiträge sind entfernt, und der TL;DR steht vor der Quellenangabe (`543113f`) |
| 24.09. | Ein einziger Quellenblock nach dem TL;DR statt zwei, und Umlaute im deutschen Text korrigiert (`2acb7eb`); Sprachumschalter unter dem Titel (`eae0e0b`) |
| 24.09. | Die Umwandlung von HTML in Text liest 600.000 statt 100.000 Zeichen (`938dfcf`); ein fehlerhafter Artikel stoppt nicht mehr die ganze Quelle (`863a9ec`) und nicht mehr den ganzen Publisher-Auftrag (`e0b225e`) |
| 24.09. | „Governance takeaway“ als Stichpunkte je Zielgruppe mit 60 bis 140 Wörtern (`85acd7d`, `f1ab1eb`) |
| 24.09. | Täglicher Brevo-Digest (`4ba0bd0`) und ein Karten-Bild je Beitrag (`862ce91`) |
| 24.09. | Admin-Flows-Seite von 5 auf 10 Flows erweitert (`bbce7ba`), `llms.txt`, KI-Crawler-Regeln in `robots.txt` und `sameAs` (`33588ee`), Organization-/Person-Schema und `hreflang` mit `x-default` (`e49d477`, `a57c51f`) |
| 24.09. | Autonome Freigabe: Ein KI-Gate ersetzt die manuelle Prüfung neuer Einreichungen (`f087b68`; dieser Commit enthielt versehentlich nur einen Platzhalter, der Code folgt im Korrekturcommit `b87a60b`); Routing der ausstehenden Freigaben als flacher Switch, weil Power Automate die tiefe Verschachtelung ablehnte (`932e281`) |
| 24.09. | Cookie-Einwilligung mit Google Analytics erst nach Zustimmung (`7c098fe`), Datenschutzseite (`34aa3e7`), Autorenzuordnung getrennt: kuratierte Beiträge = Organisation, eigene Artikel = Person (`3090685`) |
| 25.09. | Zwei neue Quellarten: YouTube und Podcast (`45ca98f`), Podcast-Transkription passend zum echten Foundry-Connector (`c51ff7e`); YouTube-Erkennung über die Adresse des Eintrags und 175 YouTube-Kanal-Feeds (`de5e968`) |
| 25.09. | Feed-URLs werden nicht mehr als „schlechter Artikel“ abgelehnt, sondern als RSS freigegeben (`2a62dd1`); 109 geprüfte MVP-Blog-Feeds und das Seed-Skript (`c74fc43`) |
| 25.09. | Eigenes `BlogPosting`-Schema (`db67c40`); Archiv, Tags und Quellen nur mit englischen Einträgen (`76bba2c`); Microsoft Clarity nach Zustimmung (`d5763f0`); Cookie-Banner-Fehler behoben (`41ed143`) |
| 26.09. | Zeitlimits für die Foundry-Aufrufe (`df9472f`) und für den RSS-Connector und Content Conversion (`a02895c`); Bereitstellung bricht hängende Läufe ab (`77a9cec`) |
| 26.09. | Lesbare Titel-URLs statt Hash (`1f02a53`), Migration der vorhandenen Beiträge (`07f7033`) |
| 26.09. | Kein Halt mit manueller Prüfung bei mehr als 30 neuen Einträgen mehr: Obergrenze 30 je Lauf, alle gesehenen IDs werden gemerkt (`764d54c`, das beabsichtigte Nachholen ist nicht umgesetzt, siehe „Bekannte Lücken“ 1); Korrektur der Selbstreferenz in der Variablen (`c712b3d`) |
| 28.09. | IndexNow-Anbindung (`f83565e`) |
| 29.09. | Eigene Sitemap nur mit Artikeln und Inhaltsseiten (`7737358`) |
| 30.09. | Wikidata-Eintrag der Person in `sameAs` (`38ca0a7`), Social-Preview-Bild (`8580d31`) |
