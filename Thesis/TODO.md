# Thesis – offene Punkte

Format: `- [ ] Abschnitt – was` – erledigt: `[x]`.

## Kapitel 4

- [ ] Kap. 4 – später, eigene Runde: auf ca. 14 Seiten kürzen (Feinheiten in Fußnoten oder Anhang, Doppelungen tree-sitter/Ollama/Tokens nur einmal). Vorschläge der Gutachter vom 04.11.
- [ ] 1.5 – später, wenn Kapitel 1 dran ist: übernommenen Exposé-Text zu FF1/E1–E3 an die Schreibregeln anpassen (Semikolon, Gedankenstriche, "Entwickler" vs. "Nutzer")
- [ ] 4.6 – später: Grenze Laufzeit und Größe ergänzen (Build-Dauer, Graphgröße, Dauer je Abruf). Zahlen zusammensuchen: Textnotizen A2 (Neueinbetten 21 Repos ca. 11,5 h), codebase-graph/docs/import-performance-2026-08-16.md, Abrufdauer bisher nicht gemessen (Hinweis Zweitgutachter 04.11.)
- [ ] Kap. 4 und 5 – später, wenn Anhang C (Messprotokolle) mit Nachweiszeilen steht: in den Fußnoten "Gemessen am …"-Daten durch Messkennung mit Verweis auf Anhang C ersetzen (Hinweis Zweitgutachter 04.11.)
- [ ] 4.4/4.6 – später entscheiden: Normierungsband 0,416–0,639 wurde mit nomic bestimmt, Werkzeug läuft mit qwen3. Optionen: Nachmessung mit eval/sim-distribution-qwen.js (vorbereitet 02.11., noch nicht gelaufen) und/oder in 4.6 als Grenze nennen (Hinweis beider Gutachter vom 04.11.)
- [ ] 4.4 – OPTIONAL, später entscheiden: durchlaufendes Beispiel einer Aufgabe durch alle vier Stufen (Vorschlag Zweitgutachter). Erst Bildschirmfoto und JSON-Auszug aus demselben Lauf machen, dann prüfen, ob es noch ein eigenes Beispiel braucht
- [ ] 4.5 – JSON-Auszug des Kontextblocks als Abbildung: Lauf auswählen (z. B. Export Generalprobe/Pilot oder eigener Testlauf auf dem Studien-Frontend), auf einen Seed, einen Nachbarn mit via und eine Kante kürzen (KLÄREN-Marker im Absatz "Den Kontext erhält der Agent als JSON")
- [ ] 4.5 – Bildschirmfoto der Oberfläche im stufenweisen Modus aufnehmen (Stufe 2 oder 3, ein Knoten angeklickt, Detailansicht mit Begründungsblock sichtbar), danach beschriften und als Abbildung einbinden (KLÄREN-Marker im Absatz "Die Oberfläche des stufenweisen Modus läuft im Browser")
- [ ] 4.2 – Quelle für RAG suchen, selbst lesen und eintragen (Absatz "Die Seeds bestimmt eine Suche auf zwei Wegen", KLÄREN-Marker im Text). Kandidat: Lewis u. a. 2020, "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", NeurIPS 2020
- [ ] 4.2 – Grund klären, warum der Nutzer die Kantentypen nicht auswählen kann (KLÄREN-Marker im Absatz "In der Umsetzung änderte sich das Konzept an zwei Stellen")
- [x] 4.3 – "Zwischendatei" an zwei Stellen (Parse-Absatz, Absatz nach der Abbildung) durch "JSON-Datei" ersetzen, passend zum ersten Absatz
- [x] 4.6 – Grenze aufnehmen: keine Kante Methode -> Klasse, Methoden sind Funktionsknoten der Datei (in 4.3 schon mit Verweis auf 4.6 erwähnt) (erledigt 02.11., in 4.6 geschrieben)
- [x] 4.4 – Bib-Eintrag BM25: Robertson und Zaragoza 2009, "The Probabilistic Relevance Framework: BM25 and Beyond", Foundations and Trends in Information Retrieval 3(4); dann Marker durch \cite ersetzen
- [x] 4.4 – Bib-Eintrag RRF: Cormack, Clarke und Buettcher 2009, "Reciprocal Rank Fusion outperforms Condorcet and individual Rank Learning Methods", SIGIR 2009; dann Marker durch \cite ersetzen
- [x] 4.2 – Abbildung Pipeline mit Eingriffspunkten unter dem Label fig:pipeline anlegen, 4.4 verweist bereits darauf
- [x] 4.3 – Zitate reactdocs und ollama fehlen in bibliography.bib (Compiler-Warnung)
- [x] 4.3 – Bib-Eintrag Neo4j allgemein (Neo4j Documentation, neo4j.com/docs); dann Marker durch \cite ersetzen
- [x] 4.3 – MCP-Marker durch \cite{anthropic2024mcp} ersetzen (Eintrag schon vorhanden) oder Verweis auf Kapitel 2
- [x] 4.3 – Bib-Eintrag tree-sitter (Brunsfeld, tree-sitter.github.io); dann Marker durch \cite ersetzen
- [x] 4.3 – Bib-Eintrag Python-Modul ast (Python Documentation); dann Marker durch \cite ersetzen
- [x] 4.3 – Bib-Eintrag GitHub REST API (docs.github.com/rest); dann Marker durch \cite ersetzen
- [x] 4.3 – Bib-Eintrag Qwen3-Embedding: Zhang et al. 2025, "Qwen3 Embedding: Advancing Text Embedding and Reranking Through Foundation Models", arXiv:2506.05176 – Angaben prüfen; dann Marker durch \cite ersetzen
- [x] 4.3 – Bib-Einträge Cypher Manual (Vector/Full-text indexes) angelegt und eingesetzt. Satz zur Datenbank je Projekt am 31.10. neu gefasst: keine allgemeine Aussage mehr, dass Neo4j nicht vorab filtern kann, sondern Verlauf (gemeinsame DB, Messung 4 von 25, verworfen)

- [x] 4.6 – Grenze aufnehmen: Filterung im Vektorindex (SEARCH ... WHERE, Neo4j ab 2026.01 Preview, GA ab 2026.02) wurde nicht geprüft, das Werkzeug nutzt db.index.vector.queryNodes ohne Filter und trennt Projekte über eigene Datenbanken (Enterprise nötig) (erledigt 02.11., in 4.6 geschrieben)
- [x] 4.3 – Bib-Eintrag Neo4j Operations Manual (Editionen, mehrere Datenbanken nur Enterprise); dann Marker durch \cite ersetzen
- [x] 4.4 – Bib-Eintrag Cosinus-Ähnlichkeit: Manning, Raghavan und Schütze 2008, "Introduction to Information Retrieval", Cambridge University Press, Kap. 6; dann Marker durch \cite ersetzen
- [x] 4.4 – Marker Kontextfenster: \cite{liu2023lostmiddle} (ggf. du2025contextlength) einsetzen, beide schon in der Bib
- [x] 4.4 – Marker Normierungsgrenzen: am 31.10. durch Fußnote mit Messdetails ersetzt (17.08., 19 Aufgaben, p5/p95)
- [ ] 4.4 – "Kapitel 5 begründet das" (Commit- und Seed-Anzahl-Term mit Gewicht 0) beim Schreiben von Kapitel 5 einlösen: Quellen docs/eval-2026-08-17-f29.md und Kommentar in retrieval.js (NBR_W_SUP, NBR_W_PRIOR)
- [x] 6.2 – MCP_TOOL_TIMEOUT (erledigt 06.11.: in keinem Studienbranch, nicht in den Benutzer-Settings und nicht in der Umgebung des Studienrechners gesetzt, es gilt die Voreinstellung von 2.1.251; Exporte PG 74-D 22.10. 15:00 min und P03 E-D 03.11. 15:27 min kamen bestätigt an). Die Details stehen jetzt im technischen Anhang (app:studientechnik). Ursprünglich: auf dem Studienrechner prüfen, ob und wie MCP_TOOL_TIMEOUT gesetzt ist (settings.local.json der Studienbranches im Bare-Repo, Benutzer-Settings, Umgebungsvariablen) und ob der Wert über 10 Minuten liegt; laut Studienplan nicht unter den Einstellungen der Branches
- [ ] 4.5 – Modultabelle für den Anhang anlegen (Label app:module), Zeilenzahlen der Module neu zählen (Stand 09.09. in Textnotizen A5)
- [x] 4.5 – McMillan 2026 am 31.10. gestrichen (Paper existiert, arXiv 2602.05447, misst aber SQL-Generierung aus Schemata, passt nicht). JSON-Absatz neu mit eigener Messung und Liu
- [ ] 4.5 – Absatz 3b (Detailansicht) sprachlich überarbeiten, inhaltlich ok
- [ ] 4.4 – KLÄREN-Marker SEED_SEM_FLOOR in tab:abrufparameter: Wert in der .env.local der Studienmaschine prüfen (Messreihen 0,6 über EMBED_THRESHOLD, ohne Eintrag fällt der Code auf das nie gemessene 0,5 zurück)
- [ ] 5 – Die V/M/E-Klassen aus tab:abrufparameter in Kapitel 5 mit Serie und Vorzeichentest belegen (defaults-gate2-2026-08-26.md, Abschnitt "Was der Holdout deckt")

- [x] 4.6 – Grenze aufnehmen: Aufrufkanten nur über importierte Symbole (4.3). Aufrufe über Objekte und dynamischer Dispatch, gerade in Java und C#, erzeugen keine CALLS-Kante (erledigt 02.11., in 4.6 geschrieben)
- [x] 4.6 – Grenze aufnehmen: Ob der Agent die Werkzeugbeschreibung befolgt, liegt beim Modell (4.5). Beleg: Opus-5-Läufe vom 09.10. riefen get_context nur mit task auf, ohne userQuery und ohne Symbolnamen (codebase-graph/eval/results-studie-c-opus-20261009/README.md) (erledigt 02.11., in 4.6 geschrieben)
- [ ] 6.2 – Claude Code 120 s: Version der Vorbeobachtung weiterhin unbekannt; im technischen Anhang als nicht dokumentiert bezeichnet. Gegebenenfalls Transkripte in gate-74 vom Ende September prüfen (Beobachtung vor Commit 55731a1 vom 02.10.; Studie: 2.1.251).
- [x] 6.2 – (erledigt 06.11.: Prot 11.10. Test 3 belegt die Variable auf 2.1.251, Aufruf 13:39:15 bis 13:41:24, erste Dateilesung nach der Bestätigung; ob der Agent die Anweisung bei dennoch verschobenem Aufruf befolgt, ist ungeprüft). Die Details stehen jetzt im technischen Anhang (app:studientechnik); 6.2 fasst die Prüfung zusammen. Ursprünglich: ob der Hintergrund-Pfad mit 2.1.251 und CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS=0 geprüft wurde, also ob der Agent die Anweisung der Werkzeugbeschreibung befolgt, wenn der Aufruf doch verschoben wird. Quelle: Prot 20./21.10. oder eigener Test; sonst als ungeprüft stehen lassen

## Kapitel 6

- [ ] 6.4/6.6 – Aussagenlisten und Auswertung im Studienordner (erklaeren.md) auf Beschluss vom 10.11. anpassen: zusätzlich genannte Aussagen auch bei vorhandener Antwortoption erfassen und diese Herkunft gesondert markieren; gegebenenfalls bisherige Auswertungen nachziehen.

- [ ] 6.4 / Anhang – Vollständige Fragebögen, Auswertungsschlüssel und Prüflisten im Anhang app:frageboegen aufnehmen und mit den tatsächlich verwendeten Materialien abgleichen.

Notizen am 05.11. als Gesamtkonzept neu gefasst (06_nutzerstudie.tex, Kopf des Kapitels); dort stehen Leitgedanke, Kapitelbogen, Begriffe und die Grenzenliste. Offen daraus:

- [x] 6.1 – eingearbeitet 06.11., aus dem ChatGPT-Gutachten (zur alten Fassung): (1) Wirkannahme in den Hauptfrage-Absatz: wer kuratiert, hat sich vor dem Lauf mit den Stellen beschäftigt, die der Agent ändert, und kann die Änderung deshalb einordnen; (2) Verständnis definieren: gemessen werden die Items der Bögen und das Erklären, nicht Verständnis der Codebasis im Ganzen; (3) optional Tabelle FF1/E3 bis FF6 gegen Behandlung in der Studie, entlastet den zweiten Absatz; (4) bei "was als Ergebnis gilt" Halbsatz, dass Sehen und Wählen nicht trennbar sind (6.2, 6.4). Sprachvorschläge des Gutachtens nicht übernehmen (nominaler, länger)
- [x] 6.1 – Entscheidung FF-Nummern vor dem Schreiben: Plan-Nummern (FF4 Ausschöpfung, FF5 Aufwand, FF6 explorativ) passen zu keiner Fassung des Exposés v4 (12.08. und 27.10. geprüft). Vorschlag im Kapitelkopf: Frage 1 = FF3 (mit FF2 als Bezug), Frage 2 neu aus FF6-Nebennutzen, Aufwand = FF6, Ergebnis des Agenten = FF4, FF5 entfällt mit Stufe 3 (erledigt 08.11., so in tab:ff-zuordnung in 6.1 umgesetzt)
- [x] 6.1 – Wortlaut der zwei Studienfragen festlegen (Plan-Fassung oder Haupt- und Nebenfrage) (erledigt 08.11.: Haupt- und Nebenfrage, Wortlaut im ersten Absatz von 6.1; 13.11. neu gefasst: Hauptfrage mit zwei Teilen (Zusammenhänge verstehen, Änderung nachvollziehen) und drei ausformulierte Nebenfragen FF3, FF6, FF4, in 5, 6.4, 7 und 8 nachgezogen)
- [ ] 6.1/6.4, Kap. 5, 7, 8 – rote Markierungen vom 13.11. (\textcolor{red}) nach der Durchsicht entfernen, auch in den Abschnittstiteln von 7 und 8.1- [ ] 1.5 – beim Schreiben: Zielsetzung ("nicht erst im Nachhinein nachvollziehen"), Leitfrage und FF2 bis FF6 samt Nebennutzen-Absatz bei FF6 aus dem Exposé übernehmen. 6.1 verweist dafür auf sec:forschungsfragen (Notiz im Kopf von 1.5)
- [ ] 6.6 – beim Schreiben: Folgen der festen Zuteilung ohne Los aufgreifen (Satz "Gelost wird nicht" am 13.11. aus 6.5 gestrichen)
- [ ] 8.2 – beim Schreiben: die am 13.11. aus Kapitel 6 verschobenen Einschränkungen aufnehmen (einzelne Agentenläufe, acht Personen, Sehen und Wählen, Übertragbarkeit; Wortlaut in den Notizen von 8.2)
- [ ] Kap. 4 – in der Kürzungsrunde: doppelte Hinweise zusammenführen ("GitHub-Schicht nicht befüllt/genutzt" dreimal in 4.3, "in der Studie nicht verwendet" zweimal in 4.5), Aufwandsbegründung bei tree-sitter positiv fassen, "Den konkreten Wert 30 legen diese Befunde nicht fest" und "Messung mit JSON steht noch aus" prüfen (Kontrolllesen 13.11.)
- [ ] 6.6 – beim Schreiben: Gerüst und tab:auswertung von "Frage 1/2" auf Hauptfrage (Teil 1, Teil 2) und Nebenfragen umstellen (Lesehilfe im Kopf von Kapitel 6)
- [ ] Kap. 6 – Begriffe festlegen: Teilnehmende, Proband, Sitzungsleitung, Agent; Kapitel 4 sagt "Nutzer"
- [x] 6.2 – Wartezeit der Oberfläche in D: REVIEW_TIMEOUT_MIN=15 in allen drei D-Branches, Leerlauffrist (jede Aktion startet neu), in 6.2 geschrieben (erledigt 06.11.)
- [ ] 6.3 – Markierung durch die zwei Entwickler: bis 07.11. nicht geschehen (PG 22.10. ohne Markierung, P01/P02 nicht gelaufen), Marker im Text aufgelöst; bleibt für die Entwickler-Sitzungen offen. Zweitableitung durch den Betreuer und sealedIn sind seit 06.11. als Abweichung vom Plan geschrieben (Amendment-Regel seit 11.09.)
- [x] 6.3 – Exposé-Eigenschaft 2 (semantisch ähnliche, unbeteiligte Stellen) als ungeprüfte Lücke genannt (06.11.); nachprüfen bleibt optional
- [ ] 6.4 – Beispielitem für den Text gewählt (E Frage 1, steht in 6.4); offen: TLX als Raw TLX benennen; hart1988tlx und brooke1996sus in der Bib prüfen; jian2000trust (Vertrauen) nicht erhoben, als Abweichung genannt (erledigt 13.11., Satz in 6.4 hinter dem SUS)
- [x] 6.4 – Auslese-Skript für die Bögen: gibt es nicht (07.11. geprüft), Bögen werden von Hand aus den Markdown-Dateien des Sitzungsordners übertragen; so in 6.6 sagen
- [ ] Anhang A – Aufgabentexte #79, #74 und E am Studienrechner mit den tatsächlich verwendeten Aufgabenblättern wortgenau vergleichen und gegebenenfalls korrigieren. Die Texte im Anhang wurden aus den WORTLAUT-Notizen in 06_nutzerstudie.tex übernommen.
- [ ] 6.4/1.6 – KI-Nutzung in der Auswertung kennzeichnen: lokale Transkription (faster-whisper) und Vorschläge eines lokalen Modells (qwen3:8b) für Erklären und Interview, Wertung bleibt bei der Sitzungsleitung (studie\auswertung\README.md)
- [x] 6.5 – Einwilligung: verschickte Fassung am 07.11. aus dem Rücklauf-PDF gesichert, Wortlaut in 06_nutzerstudie.tex (6.5 WORTLAUT); für den Anhang von dort übernehmen
- [ ] 6.5 – Entwickler-Sitzungen: ob PG (22.10., alter Ablauf) als Entwickler 1 zählt, ob P01 noch läuft, Termin Entwickler 2 (P02). Zweite Gruppe entfällt (29.10. entschieden, nur dieses Teamprojekt)
- [ ] 6.5 – Plan-Satz "Pseudonym in Reihenfolge des Rücklaufs" an den gefahrenen Stand anpassen (P03 lief am 03.11. vor P01 und P02)
- [ ] 6.6 – Schwelle für "angesehen" (views ab 300 ms) festlegen, bevor die Exporte ausgewertet werden; Umgang mit PG und den Entwicklern in den Tabellen
- [x] 6.4/6.6 – Hauptkennzahl geändert (08.11., aus der Methodik-Notiz research_notes/Forschungsfragen und Methodik/methodik.md): Zuwachs über alle fünf Vorher/Nachher-Items statt nur über die nicht gelieferten. Grund: die Einteilung geliefert entsteht nach dem Lauf, der Lauf hängt in D vom kuratierten Kontext ab, C und D hätten verschiedene Items erfasst (Selektion nach der Behandlung, Montgomery/Nyhan/Torres 2018, AJPS, DOI 10.1111/ajps.12357). Schichten geliefert/nicht geliefert bleiben als Mechanismus daneben, Markierung je Sitzung wie bisher. In 6.4 geschrieben (zwei Sätze, Grund und Planabweichung kommen in 6.6), teils zählt zu nicht geliefert (6.4), Erklären-Schichtung übernommen/eigenständig als beschreibend gekennzeichnet; 6.6-Gerüst, tab:messgroessen, Kopfzahl-Kommentar 6.1 und Grenzenliste nachgezogen; 6.1 letzter Absatz: Dopplung zur Kontextgüte entfernt, "Richtung je Person" zu "Unterschiede je Person, getrennt nach Abfolge", zwei Semikolons aufgelöst
- [ ] 6.6/8.2 – Abweichung vom Plan E1 (Hauptkennzahl) beim Schreiben von 6.6 in einem Satz nennen, in 8.2 als Grenze; Plan-Dokument im Werkzeug-Repo mit Datum 08.11. ergänzen; Montgomery 2018 in die Bib, falls in 6.6 oder 8.2 zitiert
- [x] 6.6 – Vorzeichentest mit p-Werten gestrichen (08.11.): die je Aufgabe zentrierten Differenzen teilen die geschätzten Aufgabenmittel und sind nicht unabhängig, die rohen Differenzen enthalten die Aufgabenschwierigkeit mit wechselndem Vorzeichen, die Binomial-Null gilt für beide nicht ohne Nachweis. Berichtet werden die acht D-minus-C-Differenzen roh je Abfolgegruppe (A: 74-C dann E-D, B: 74-D dann E-C), aus den Gruppenmitteln Bedingungseffekt (halbe Summe) und Aufgabeneffekt (halbe Differenz), dazu Punktdiagramm. Keine Zahl der positiven Differenzen als Kennzahl (täuscht unabhängige Evidenz vor, Zweitgutachten 08.11.). Der zum Crossover passende Test ist der Vergleich der Aufgabendifferenz (E minus #74 je Person) zwischen den Abfolgegruppen (4 gegen 4, exakt, kleinstes zweiseitiges p 2/70 ≈ 0,03), steht als Nebenauswertung schon drin. Verweis 5.1 aus 6.6 entfernt; der Vorzeichentest in Kapitel 5 (gepaarte Aufgaben) ist davon nicht betroffen
- [ ] 6.4 – Vor dem Übertragen der Bögen auszählen, wie oft sich die gelieferten Items zwischen den C- und D-Sitzungen einer Aufgabe unterscheiden (12-/13-geliefert-*.md); entscheidet, wie viel Platz die Abweichung in 8.2 braucht
- [x] 6.4/6.6/7 – Auswertung am 10.11. festgelegt (Bericht reports/Auswertung Nutzerstudie.md, Abschnitt 9), nach drei gefahrenen Sitzungen und dem Piloten PG. Hauptkennzahl: Anteil richtiger Antworten nachher minus vorher, #74 Fragen 1 bis 5, E Fragen 1 bis 4, ohne Kontrollfragen (ersetzt "alle fünf Items" vom 08.11.). Die Plan-Kennzahl wird nicht gerechnet. Keine Zweitmarkierung von "genannt". Zuwachs zweistufig, dazu Verteilung ja, teils, nein je Bedingung. Kein Test, stattdessen Auslassprobe. Linienbild statt Punktdiagramm. "Paar" und "Reihenfolge" statt "Abfolgegruppe". "genannt" statt "geliefert", "Einordnung" statt "Mechanismus". Übergangstafel in 7.3. Eigener Abschnitt in Kapitel 7 für Aufwand und Bewertung der Oberfläche. Wortlaut der Ausgänge wird nicht vorab festgelegt. In 6.1, 6.4 (Fließtext und Tabelle), den Kommentaren von Kapitel 6 und der Gliederung von Kapitel 7 nachgezogen.
- [ ] 6.6/8.2 – Beim Schreiben von 6.6 nennen: die Abweichung vom Plan bei der Hauptkennzahl mit Datum und Grund, die Begründung für "kein Test", die Markierung "genannt" ohne Zweitperson (auch in 8.2).
- [ ] 6.5/6.6 – Dritte gefahrene Sitzung in den Kommentaren von Kapitel 6 nachtragen (dort stehen nur P03 und P04).
- [ ] Kap. 6 – 30.11.–11.12. auf den gefahrenen Stand bringen: Zeitgrenzen der Bögen (4 und 5 min) wurden bei P03 und P04 nicht gehalten (Nachher-Bogen 5 bis 8 min), Zwischenablage bei P04 defekt; Mitschriebe unter studie\probanden\<Kennung>-sitzung\01-mitschrieb.md

## Kapitel 2

- [ ] 2.3 – Abschnitt "Semantische und lexikalische Suche" schreiben (Notizen in 02_grundlagen.tex), Budget mit 2.1/2.2 klären
- [ ] 4.4 – Sobald 2.3 steht: Erklärungen zu Einbettung, Cosinus-Ähnlichkeit, Vektorindex, BM25 und RRF-Mechanik durch Verweis auf sec:suche-grundlagen ersetzen, Zitate dann in 2.3 statt 4.4

## Kapitel 5

- [ ] 5.6 – schreiben. Trägt seit der Neufassung von 6.1 (06.11.) die Begründung des Wechsels der Hauptfrage: Bilanz der Messungen, AP8 (mit Kontextblock weniger Suchen, gleiche Treffer), Rechnung 13.10. mit Zahlen (Deckung #74 dreimal 7 von 7, E 9, 8, 8 von 9), Folgerung: der Mensch ist der Unterschied, nicht der Kontext. 6.1 verweist nur hierher und nennt die Deckung in einem Satz. Material: Notizen HERKUNFT 1 bis 6 im Kopf von 6.1 (06_nutzerstudie.tex). Keine Chronik im Fließtext, Daten nur als Beleg in Fußnoten
- [ ] 5/8 (Validität) – Grenzen aus der Parameterherkunft aufnehmen, nicht in 4.6 (Beschluss 02.11.) (Quelle codebase-graph/docs/defaults-gate2-2026-08-26.md): Klasse-M-Werte ohne Holdout (SEED_DF_MAX, Normierungsband), Normierungsband auf nomic-Vektoren erhoben und für qwen3 nicht neu bestimmt, β < 0,6 nicht gemessen, Klasse-E-Werte nie variiert
- [ ] 5 – Befund Agentenanfrage 08.10. gegenlesen (codebase-graph/docs/vorlaeufiger-befund-agentenanfrage.md, als vorläufig markiert). In 4.6 steht dazu ein KLÄREN-Marker in der Fußnote
- [ ] 5 – Vor dem Nennen der Seed-Zahlen prüfen, ob der Holdout vom 26.08. (codebase-graph/docs/eval-2026-08-26-holdout-durchfuehrung.md) die PascalCase-Regel (SEED_PASCAL_TIER) und den Häufigkeitsfilter SEED_DF_MAX abdeckt. Laut Kommentar in retrieval.js (Zeilen 217–222) wurden beide auf denselben 21 SWE-bench-Fällen entworfen und geprüft.
- [ ] 5 – BM25-Vormessung aufnehmen, auf die die fünfte Abweichung in 4.2 verweist (BM25 allein fand Dateien, die der Abruf verfehlte, daraufhin BM25-Zweig ab 13.09.). Quellen codebase-graph/docs/eval-2026-09-11-hard-slice-stufe2-vollstaendig.md und arbeitsprotokoll.md (ca. Z. 1777, 1864). Verstöße gegen die Vorregistrierung dieser Serie mit einordnen
- [ ] 5 – Messung Vektorindex ggf. aufnehmen (4.3 belegt sie bereits per Fußnote): 24 Graphen in einer Datenbank (mehrere Stände desselben Repositorys), Dateiindex im Schnitt 4,1 von 25 projekteigenen Kandidaten, nach Umbau 25 von 25, 19 Instanzen slice-small. Funktions-/Klassenwerte (3,9/1,8) NICHT zitieren, durch fehlende Symbolvektoren in 3 Graphen verfälscht (Nachtrag). Quelle codebase-graph/docs/eval-2026-08-19-vektorindex.md, ADR 0005

## Kapitel 8

- [ ] 8.1 – Entwicklung der Fragestellung erzählen (Vorgabe Betreuer 13.10.: FF des Exposés stehen lassen, Wechsel begründen, Entwicklung im Fazit). Reihenfolge: Exposé mit vier Stufen und Hauptgewicht auf Stufe 3 → AP8 04.09. → Umstellung auf C gegen D 02.10. → Stufe 3 gestrichen (Kosten 24.09., Entscheidung nach 19.10.) → Rechnung 13.10. → Vorschlag Mail 16.09., Antwort 13.10., Design 19.10. → Messung 08.10. (Vorher-Nachher). Daten und Quellen stehen in den Notizen von 6.1 (HERKUNFT, Quellenkürzel); aus der 6.1-Prosa am 06.11. bewusst entfernt, dort steht nur die sachliche Begründung
- [ ] 8.1 – Exposé-Kriterium gegen die Annahme der Arbeit (Ausschöpfungsgrad nahe null und kein Vorteil bei den Akzeptanzkriterien; Ex 02_forschungsfragen, letzter Absatz) bei FF2 bis FF4 benennen und sagen, dass es die Arbeit nicht mehr trägt. Am 06.11. aus 6.1 gestrichen, steht sonst nirgends in der Thesis (1.5 hat es nicht)

## Kapitel 9

- [ ] 9 – Ausblick: Graph über Projektgrenzen hinweg (projektübergreifendes Wissen). Setzt Filterung im Vektorindex voraus, z. B. SEARCH ... WHERE ab Neo4j 2026.02 (Quelle schon in der Bib: neo4jvector), statt eigener Datenbank je Projekt

## Später / sonstiges

- [ ] 4.1 – Sobald 3.5 (sec:abgrenzung) geschrieben ist: 4.1 dagegen abgleichen. Absatz 1 verweist für die Abgrenzung auf 3.5, die Formulierung "Das Besondere liegt in der Verbindung zweier Eigenschaften" muss zu 3.5 passen
- [ ] 3 – Einordnung der Designentscheidungen gegen verwandte Arbeiten (Gutachten 31.10.): hybride Dense-/BM25-Suche, Einbettung von Beschreibungen statt Rohcode, RepoGraph/CodexGraph als Vergleich für Graphschema und Traversierung (beide schon in der Bib)

