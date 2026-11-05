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
- [ ] 4.5 – Marker MCP_TOOL_TIMEOUT: auf dem Studienrechner prüfen, ob und wie MCP_TOOL_TIMEOUT gesetzt ist (settings.local.json der Studienbranches im Bare-Repo, Benutzer-Settings, Umgebungsvariablen) und ob der Wert über 10 Minuten liegt; laut Studienplan nicht unter den Einstellungen der Branches
- [ ] 4.5 – Modultabelle für den Anhang anlegen (Label app:module), Zeilenzahlen der Module neu zählen (Stand 09.09. in Textnotizen A5)
- [x] 4.5 – McMillan 2026 am 31.10. gestrichen (Paper existiert, arXiv 2602.05447, misst aber SQL-Generierung aus Schemata, passt nicht). JSON-Absatz neu mit eigener Messung und Liu
- [ ] 4.5 – Absatz 3b (Detailansicht) sprachlich überarbeiten, inhaltlich ok
- [ ] 4.4 – KLÄREN-Marker SEED_SEM_FLOOR in tab:abrufparameter: Wert in der .env.local der Studienmaschine prüfen (Messreihen 0,6 über EMBED_THRESHOLD, ohne Eintrag fällt der Code auf das nie gemessene 0,5 zurück)
- [ ] 5 – Die V/M/E-Klassen aus tab:abrufparameter in Kapitel 5 mit Serie und Vorzeichentest belegen (defaults-gate2-2026-08-26.md, Abschnitt "Was der Holdout deckt")

- [x] 4.6 – Grenze aufnehmen: Aufrufkanten nur über importierte Symbole (4.3). Aufrufe über Objekte und dynamischer Dispatch, gerade in Java und C#, erzeugen keine CALLS-Kante (erledigt 02.11., in 4.6 geschrieben)
- [x] 4.6 – Grenze aufnehmen: Ob der Agent die Werkzeugbeschreibung befolgt, liegt beim Modell (4.5). Beleg: Opus-5-Läufe vom 09.10. riefen get_context nur mit task auf, ohne userQuery und ohne Symbolnamen (codebase-graph/eval/results-studie-c-opus-20261009/README.md) (erledigt 02.11., in 4.6 geschrieben)
- [ ] 4.5 – KLÄREN-Marker Claude Code 120 s: Version nennen, mit der das Verschieben in den Hintergrund beobachtet wurde (Studie: 2.1.251, Quelle bisher docs/tool-beschreibung.md und server.js)

## Kapitel 2

- [ ] 2.3 – Abschnitt "Semantische und lexikalische Suche" schreiben (Notizen in 02_grundlagen.tex), Budget mit 2.1/2.2 klären
- [ ] 4.4 – Sobald 2.3 steht: Erklärungen zu Einbettung, Cosinus-Ähnlichkeit, Vektorindex, BM25 und RRF-Mechanik durch Verweis auf sec:suche-grundlagen ersetzen, Zitate dann in 2.3 statt 4.4

## Kapitel 5

- [ ] 5/8 (Validität) – Grenzen aus der Parameterherkunft aufnehmen, nicht in 4.6 (Beschluss 02.11.) (Quelle codebase-graph/docs/defaults-gate2-2026-08-26.md): Klasse-M-Werte ohne Holdout (SEED_DF_MAX, Normierungsband), Normierungsband auf nomic-Vektoren erhoben und für qwen3 nicht neu bestimmt, β < 0,6 nicht gemessen, Klasse-E-Werte nie variiert
- [ ] 5 – Befund Agentenanfrage 08.10. gegenlesen (codebase-graph/docs/vorlaeufiger-befund-agentenanfrage.md, als vorläufig markiert). In 4.6 steht dazu ein KLÄREN-Marker in der Fußnote
- [ ] 5 – Vor dem Nennen der Seed-Zahlen prüfen, ob der Holdout vom 26.08. (codebase-graph/docs/eval-2026-08-26-holdout-durchfuehrung.md) die PascalCase-Regel (SEED_PASCAL_TIER) und den Häufigkeitsfilter SEED_DF_MAX abdeckt. Laut Kommentar in retrieval.js (Zeilen 217–222) wurden beide auf denselben 21 SWE-bench-Fällen entworfen und geprüft.
- [ ] 5 – Messung Vektorindex ggf. aufnehmen (4.3 belegt sie bereits per Fußnote): 24 Graphen in einer Datenbank (mehrere Stände desselben Repositorys), Dateiindex im Schnitt 4,1 von 25 projekteigenen Kandidaten, nach Umbau 25 von 25, 19 Instanzen slice-small. Funktions-/Klassenwerte (3,9/1,8) NICHT zitieren, durch fehlende Symbolvektoren in 3 Graphen verfälscht (Nachtrag). Quelle codebase-graph/docs/eval-2026-08-19-vektorindex.md, ADR 0005

## Kapitel 9

- [ ] 9 – Ausblick: Graph über Projektgrenzen hinweg (projektübergreifendes Wissen). Setzt Filterung im Vektorindex voraus, z. B. SEARCH ... WHERE ab Neo4j 2026.02 (Quelle schon in der Bib: neo4jvector), statt eigener Datenbank je Projekt

## Später / sonstiges

- [ ] 3 – Einordnung der Designentscheidungen gegen verwandte Arbeiten (Gutachten 31.10.): hybride Dense-/BM25-Suche, Einbettung von Beschreibungen statt Rohcode, RepoGraph/CodexGraph als Vergleich für Graphschema und Traversierung (beide schon in der Bib)

