# Thesis – offene Punkte

Format: `- [ ] Abschnitt – was` – erledigt: `[x]`.

## Verweise

Verweise, die nicht passen (Fundstelle fehlt, Datei nicht vorhanden, Inhalt überholt). Gefunden 24.11. beim Abgleich des Auswertungsplans mit der Arbeit.

- [ ] 07 Notiz 7.6 (07_ergebnisse.tex Z. 72, ebenso Zeitplan Z. 98): "Scheiternskriterium Exposé 4.4". Exposé v4 hat keinen Abschnitt 4.4. Das Kriterium steht im letzten Absatz von Expose_v4/sections/02_forschungsfragen.tex ("Bleibt der ... Ausschöpfungsgrad nahe null und zeigt die kuratierte Bedingung gegenüber der automatischen keinen Vorteil beim Anteil erfüllter Akzeptanzkriterien, so gilt die Annahme ... als nicht gestützt"), so auch 08 Z. 11 und TODO 8.1. Verweis in 07 und im Zeitplan auf "Exposé 02_forschungsfragen, letzter Absatz" berichtigen
- [ ] 06 Z. 490, 07 Z. 38, TODO "Auswertung am 10.11. festgelegt": "Bericht reports/Auswertung Nutzerstudie.md, Abschnitt 9". Die Datei liegt weder im Thesis-Repo noch im Werkzeug-Repo (Studienrechner, 24.11.). Ablageort nennen oder Datei ins Repo
- [ ] 06 Z. 492: "Zuwachs 4 gegen 4 als eigene Auswertungen" steht unter "nicht entschieden". Seit ENTSCHIEDEN 13.11. (06 Z. 552) und Fließtext 6.6 ist der Unterschied je Aufgabe, vier gegen vier, Teil der Rechnung. Notiz als überholt kennzeichnen
- [ ] Zeitplan und Gliederung Z. 139: "Auswertung abschließen (Verbindung Knotenstatus zu Antwort, ...)". Die Verbindung ist in 06 STRAFFUNG 13.11. Punkt 7 (Z. 579) gestrichen. Zeitplan nachziehen oder Streichung zurücknehmen
- [ ] 06 Z. 73 und Z. 519, TODO "6.4 – Auslese-Skript für die Bögen: gibt es nicht (07.11. geprüft)": seit 23.11. gibt es eval/studie/boegen-auswerten.py (liest Teil B). Notizen und TODO-Punkt nachziehen, 6.6 entsprechend
- [ ] Werkzeug-Repo eval/tasks/teamable-frontend-E/schluessel.md Z. 76: TLX als "Nebenfrage Aufwand (FF5)". In der Arbeit ist Aufwand FF6 (tab:studienfragen), FF5 ist strukturierte gegen flache Übergabe
- [ ] Werkzeug-Repo eval/tasks/teamable-frontend-74/erklaeren.md und -E/erklaeren.md, Abschnitt Aussagenliste (Z. 21–22): "vom Agenten bereits genannt (Zusammenfassung oder Diff der Sitzung enthielt die Aussage ...)". Fließtext 6.4 und tab:studienfragen Zeile 2 sagen "in der Zusammenfassung enthalten". Entschieden 24.11.: nur die Zusammenfassung, erklaeren.md anpassen
- [ ] 04 Z. 376 (4.5): "JSON im Mittel 12 Prozent mehr Tokens als der eingerückte Baum (4.130 gegen 3.682)" und "1 Prozent mehr als die nicht eingerückten Kontextblöcke". Passt nicht zu den FF5-Blöcken vom 26.11. (results-ff5-sonnet-20261126j, die gemessenen, 21 Aufgaben): J 4.117, T 2.640, F 3.149 im Mittel, J also 56 Prozent länger als T (Holdout: J 3.963, T 2.568, 54 Prozent). Der heutige Baum ist kompakter als der damals gemessene. Zahl neu belegen oder ausdrücklich auf den alten Stand beziehen
- [ ] 07 Notiz 7.6 (Z. 72) legt das Scheiternskriterium des Exposés nach 7.6, 08 Z. 11 (NEU 06.11.) nur nach 8.1 mit dem Satz, dass die Arbeit es nicht mehr trägt. Notizen widersprechen sich; beim Schreiben entscheiden

## Kapitel 4

- [ ] 4.5 – nach der FF5-Messung (26.11.) nochmal ansehen: Begründung für JSON in der Studie. 4.5 begründet mit der frei festlegbaren Reihenfolge (Baum legt sie fest, Position im langen Kontext zählt, liu2023lostmiddle). Festhalten: JSON wurde vor der FF5-Messung und unabhängig von ihrem Ergebnis gewählt, J ist dort nur Nebenbefund. "JSON ist Standardformat" nur mit Quelle. Dazu die Tokenzahlen (siehe Verweise)
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
- [ ] 4.5 – Modultabelle für den Anhang anlegen (Label app:module), Zeilenzahlen der Module neu zählen (Stand 09.09. in Textnotizen A5). Gezählt 11.11. auf Commit 628b04f (Stand der Studie, Module seither unverändert), wc -l: stepwise-ui.html 5151, review-server.js 2869, retrieval.js 2574, parse.js 1709, context-render.js 1315, review-ui.html 1154, app-common.js 1121, import.js 821, stepwise-mock.html 770, server.js 677, stepwise-export.js 629, resolve-import.js 488, parse-python.py 311, resolve-calls.js 270, node-source.js 250, embed-utils.js 242, resolve-extends.js 233, bm25.js 193, git-stats.js 187, stepwise-cli.js 172, embed-text.js 124, db-name.js 86, db.js 71; ohne eval/, tests/, docs/. Tabelle noch schreiben
- [x] 4.5 – McMillan 2026 am 31.10. gestrichen (Paper existiert, arXiv 2602.05447, misst aber SQL-Generierung aus Schemata, passt nicht). JSON-Absatz neu mit eigener Messung und Liu
- [ ] 4.5 – Absatz 3b (Detailansicht) sprachlich überarbeiten, inhaltlich ok
- [x] 4.4 – KLÄREN-Marker SEED_SEM_FLOOR in tab:abrufparameter: Wert in der .env.local der Studienmaschine prüfen (Messreihen 0,6 über EMBED_THRESHOLD, ohne Eintrag fällt der Code auf das nie gemessene 0,5 zurück). GEPRÜFT 11.11.: Die Studie lief mit 0,5. Die .env.local der Sitzungskopien (studie\probanden\*, vorlage-74, vorlage-E) enthalten weder SEED_SEM_FLOOR noch EMBED_THRESHOLD, server.js lädt die .env.local aus dem Arbeitsverzeichnis der Kopie, Benutzer- und Systemumgebung sind leer. Alle elf Exporte der Studienseite (PG, P01, P03, P04, P05) tragen params.semFloor 0.5; C nutzt dieselben .env.local, also ebenfalls 0,5 (dort kein Export). Nur die .env.local des Werkzeug-Repos hat EMBED_THRESHOLD=0.6 (Messreihen); die Vorlagen der Kopien (11./12.10.) bekamen nur Verbindung, Projekt und Studienschalter. Wahrscheinlich ebenso die Opus-C-Läufe vom 09.10. (PROVENANCE.md: .env.local der Checkouts), nicht belegbar. NACHGERECHNET 11.11. mit Neo4j: alle 15 Abrufe der Studie (11 Exporte D, 4 get_context-Aufrufe C aus den Transkripten, je mit task und userQuery der Sitzung, cwd = Sitzungskopie) mit 0,5 und 0,6. Bester semantischer Treffer überall 0,842 bis 0,911, Schnittgrenze (bester minus 0,1) also 0,741 bis 0,811; der Mindestwert griff in keinem Abruf, die Studie entspricht damit im Ergebnis 0,6. semFloor wirkt nur in dieser Schnittgrenze (retrieval.js 1332). Dokumentiert im Werkzeug-Repo unter eval/results-studie-semfloor-20261111 (README, PROVENANCE, Skripte, Rohdaten). Erledigt 11.11.: Tabelle bleibt bei 0,6, Fußnote am Satz zum Mindestwert in 4.4, KLÄREN-Vermerk entfernt
- [ ] 5 – Die V/M/E-Klassen aus tab:abrufparameter in Kapitel 5 mit Serie und Vorzeichentest belegen (defaults-gate2-2026-08-26.md, Abschnitt "Was der Holdout deckt")

- [x] 4.6 – Grenze aufnehmen: Aufrufkanten nur über importierte Symbole (4.3). Aufrufe über Objekte und dynamischer Dispatch, gerade in Java und C#, erzeugen keine CALLS-Kante (erledigt 02.11., in 4.6 geschrieben)
- [x] 4.6 – Grenze aufnehmen: Ob der Agent die Werkzeugbeschreibung befolgt, liegt beim Modell (4.5). Beleg: Opus-5-Läufe vom 09.10. riefen get_context nur mit task auf, ohne userQuery und ohne Symbolnamen (codebase-graph/eval/results-studie-c-opus-20261009/README.md) (erledigt 02.11., in 4.6 geschrieben)
- [x] 6.2 – Claude Code 120 s: Version der Vorbeobachtung weiterhin unbekannt; im technischen Anhang als nicht dokumentiert bezeichnet. Gegebenenfalls Transkripte in gate-74 vom Ende September prüfen (Beobachtung vor Commit 55731a1 vom 02.10.; Studie: 2.1.251). (geprüft 11.11.: nicht mehr belegbar. Das älteste Transkript unter ~/.claude/projects ist vom 12.10., Claude Code löscht nach 30 Tagen (cleanupPeriodDays, nicht gesetzt). Bleibt im Anhang als nicht dokumentiert. Ebenfalls weg: Fable-Transkript 00ef3263 vom 05.10., auf das erklaeren.md und schluessel.md zu #74 verweisen. Studientranskripte sind unter studie\probanden\*-transkripte gesichert)
- [x] 6.2 – (erledigt 06.11.: Prot 11.10. Test 3 belegt die Variable auf 2.1.251, Aufruf 13:39:15 bis 13:41:24, erste Dateilesung nach der Bestätigung; ob der Agent die Anweisung bei dennoch verschobenem Aufruf befolgt, ist ungeprüft). Die Details stehen jetzt im technischen Anhang (app:studientechnik); 6.2 fasst die Prüfung zusammen. Ursprünglich: ob der Hintergrund-Pfad mit 2.1.251 und CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS=0 geprüft wurde, also ob der Agent die Anweisung der Werkzeugbeschreibung befolgt, wenn der Aufruf doch verschoben wird. Quelle: Prot 20./21.10. oder eigener Test; sonst als ungeprüft stehen lassen

## Kapitel 6

- [x] 6.4/6.6 – Aussagenlisten und Auswertung im Studienordner (erklaeren.md) auf Beschluss vom 10.11. anpassen: zusätzlich genannte Aussagen auch bei vorhandener Antwortoption erfassen und diese Herkunft gesondert markieren; gegebenenfalls bisherige Auswertungen nachziehen. (erledigt 11.11.: beide erklaeren.md im Werkzeug-Repo, nicht committet, mit Zählregel 10.11., Grundwert entfallen, Fenster schließen/Chrome minimieren; P03 12-/13-geliefert-*.md nachgezogen, Zahlen unverändert, weil P03 keine zusätzliche Aussage nannte. P04 und P05 haben noch keine Wertung)

- [x] 6.4 / Anhang – Vollständige Fragebögen, Auswertungsschlüssel und Prüflisten im Anhang app:frageboegen aufnehmen und mit den tatsächlich verwendeten Materialien abgleichen. (erledigt 11.11.: Bögen der Sitzungen P03, P04, P05 nach Entfernen der Antworten wortgleich mit den Vorlagen im Werkzeug-Repo; Anhang boegen/*.tex, Schlüssel, Aussagenlisten, Erklär-Anweisung und Interviewfragen stimmen mit Vorlagen und Ablauf überein. PG lief mit der alten Reihenfolge, Teil A vorn, Wortlaut der Items laut Commit 628b04f unverändert. Einzige Abweichung im Anhang: TLX-Teil mit Ankern als Tabelle und umformuliertem Einleitungssatz; in den Sitzungen stand "Hohe Zahl heißt in allen sechs Zeilen: schwerer." und die Anker je Zeile, z. B. "0 heißt keinen, 100 heißt sehr starken" statt "keinen Zeitdruck / sehr starken Zeitdruck". Bei Bedarf wortgetreu machen)

Notizen am 05.11. als Gesamtkonzept neu gefasst (06_nutzerstudie.tex, Kopf des Kapitels); dort stehen Leitgedanke, Kapitelbogen, Begriffe und die Grenzenliste. Offen daraus:

- [x] 6.1 – eingearbeitet 06.11., aus dem ChatGPT-Gutachten (zur alten Fassung): (1) Wirkannahme in den Hauptfrage-Absatz: wer kuratiert, hat sich vor dem Lauf mit den Stellen beschäftigt, die der Agent ändert, und kann die Änderung deshalb einordnen; (2) Verständnis definieren: gemessen werden die Items der Bögen und das Erklären, nicht Verständnis der Codebasis im Ganzen; (3) optional Tabelle FF1/E3 bis FF6 gegen Behandlung in der Studie, entlastet den zweiten Absatz; (4) bei "was als Ergebnis gilt" Halbsatz, dass Sehen und Wählen nicht trennbar sind (6.2, 6.4). Sprachvorschläge des Gutachtens nicht übernehmen (nominaler, länger)
- [x] 6.1 – Entscheidung FF-Nummern vor dem Schreiben: Plan-Nummern (FF4 Ausschöpfung, FF5 Aufwand, FF6 explorativ) passen zu keiner Fassung des Exposés v4 (12.08. und 27.10. geprüft). Vorschlag im Kapitelkopf: Frage 1 = FF3 (mit FF2 als Bezug), Frage 2 neu aus FF6-Nebennutzen, Aufwand = FF6, Ergebnis des Agenten = FF4, FF5 entfällt mit Stufe 3 (erledigt 08.11., so in tab:ff-zuordnung in 6.1 umgesetzt)
- [x] 6.1 – Wortlaut der zwei Studienfragen festlegen (Plan-Fassung oder Haupt- und Nebenfrage) (erledigt 08.11.: Haupt- und Nebenfrage, Wortlaut im ersten Absatz von 6.1; 13.11. neu gefasst: Hauptfrage mit zwei Teilen (Zusammenhänge verstehen, Änderung nachvollziehen) und drei ausformulierte Nebenfragen FF3, FF6, FF4, in 5, 6.4, 7 und 8 nachgezogen)
- [ ] 6.1/6.4, Kap. 5, 7, 8 – rote Markierungen vom 13.11. (\textcolor{red}) nach der Durchsicht entfernen, auch in den Abschnittstiteln von 7 und 8.1
- [ ] **PFLICHT** 1.5 – beim Schreiben (Block "PFLICHT (13.11.)" im Kopf von 1.5): Zielsetzung ("nicht erst im Nachhinein nachvollziehen"), Leitfrage und FF2 bis FF6 samt Nebennutzen-Absatz bei FF6 aus dem Exposé übernehmen. 6.1 verweist dafür auf sec:forschungsfragen (Notiz im Kopf von 1.5)
- [x] **PFLICHT** 6.6 – beim Schreiben (Block "PFLICHT (13.11.)" im Kopf von 6.6): Folgen der festen Zuteilung ohne Los aufgreifen (Satz "Gelost wird nicht" am 13.11. aus 6.5 gestrichen, steht sonst nirgends) (erledigt 13.11.: 6.6 ist geschrieben. Laut Nachtrag im PFLICHT-Block von 6.6 beschreibt 6.5 die Zuteilung über die Terminliste, "nicht gelost" steht bewusst nicht im Fließtext, der Vorbehalt zum Vorwissen hängt an "vier Personen je Paar". Die Kästchen im Block selbst bleiben offen, bis die roten Stellen gegengelesen sind)
- [ ] **PFLICHT** 5.6 – beim Schreiben (Block "PFLICHT (13.11.)" in den Notizen von 5.6): Beleg für "bei der Planung für eine kleine Codebasis bereits erwartet" (Exposé 03_methodik, Gültigkeitsgrenzen) und Begründung des Schwerpunkts der Studie, auf die 6.1 verweist
- [ ] **PFLICHT** 8.2 – beim Schreiben (Block "PFLICHT (13.11.)" im Kopf von 8.2): die am 13.11. aus Kapitel 6 verschobenen Einschränkungen aufnehmen (einzelne Agentenläufe, acht Personen, Sehen und Wählen, Übertragbarkeit; Wortlaut in den Notizen von 8.2)
- [ ] Kap. 4 – in der Kürzungsrunde: doppelte Hinweise zusammenführen ("GitHub-Schicht nicht befüllt/genutzt" dreimal in 4.3, "in der Studie nicht verwendet" zweimal in 4.5), Aufwandsbegründung bei tree-sitter positiv fassen, "Den konkreten Wert 30 legen diese Befunde nicht fest" und "Messung mit JSON steht noch aus" prüfen (Kontrolllesen 13.11.)
- [x] 6.6 – beim Schreiben: Gerüst und tab:auswertung von "Frage 1/2" auf Hauptfrage (Teil 1, Teil 2) und Nebenfragen umstellen (Lesehilfe im Kopf von Kapitel 6) (erledigt 13.11.: Fließtext und tab:auswertung verwenden die neuen Bezeichnungen. Das Gerüst in den Kommentaren sagt noch "Frage 1/2" und ist überholt)
- [x] Kap. 6 – Begriffe festlegen: Teilnehmende, Proband, Sitzungsleitung, Agent; Kapitel 4 sagt "Nutzer" (erledigt 13.11.: durchgehend Proband/Probanden statt Teilnehmende, Definition in 6.1 um Agent ergänzt, Titel 6.5 und 7.2 angepasst, Festlegung im Kapitelkopf. Offen bleibt "Entwickler" gegen "Nutzer" im Herleitungsabsatz von 6.1, wird mit 1.5 entschieden)
- [ ] 6.6/4.6 – Abruf nicht bitgenau wiederholbar (gefunden 11.11. bei der Nachrechnung SEED_SEM_FLOOR): derselbe Aufruf zweimal hintereinander ergab bei P03-74-C Schnittgrenze 0,805 gegen 0,804 und einen anderen siebten Seed (Team-Set-Seite `page` gegen `columns`), 5 von 30 Knoten verschieden; in der Sitzung bekam der Agent die Variante mit `page`. Von den übrigen 14 Abrufen wichen zwei in je einem Knoten ab (PG-74-D, P05-79-D abgelaufen), sechs nur in der Reihenfolge, sechs gar nicht. Ursache: Ollama (qwen3-embedding:0.6b) gibt für denselben Text beim ersten Aufruf einen leicht anderen Vektor als bei direkter Wiederholung (Cosinus 0,99986, in zwei Proben gleich); ein Abruf in der Sitzung ist ein erster Abruf, die Sitzung P03 hatte entsprechend `page`. Warum Ollama so rechnet, ist ungeprüft. Doku: Werkzeug-Repo eval/results-studie-semfloor-20261111, Abschnitt Wiederholbarkeit. Folge für Frage 1 ("kuratiert minus neu gerechneter automatischer Kontext"): beim Nachrechnen Seeds an der Grenze gegen den Export bzw. das Transkript prüfen, Streuung als Grenze nennen
- [x] 6.2 – Wartezeit der Oberfläche in D: REVIEW_TIMEOUT_MIN=15 in allen drei D-Branches, Leerlauffrist (jede Aktion startet neu), in 6.2 geschrieben (erledigt 06.11.)
- [ ] 6.3 – Referenzkontext, unabhängige Prüfung und Lücken:
  - [x] KLÄREN-Marker zur Markierung durch die Entwickler im Text aufgelöst (07.11.)
  - [ ] Markierung der nötigen Stellen durch die zwei Entwickler: bis 07.11. nicht geschehen (PG 22.10. ohne Markierung, P01/P02 nicht gelaufen), bleibt für die Entwickler-Sitzungen offen
  - [ ] Zweitableitung durch den Betreuer und sealedIn als Abweichung vom Plan nennen (Amendment-Regel seit 11.09.). Stand am 06.11. im Text, steht am 13.11. nicht mehr im Fließtext von 6.3. Vorgemerkt im Nachtrag von 8.2, Punkt 7
  - [ ] Exposé-Eigenschaft 2 (semantisch ähnliche, unbeteiligte Stellen) als ungeprüfte Lücke nennen. Stand am 06.11. im Text und war hier abgehakt, steht am 13.11. nicht mehr im Fließtext (Nachtrag 8.2, Punkt 7). Nachprüfen bleibt optional
- [ ] 6.4 – Beispielitem, TLX, SUS, Vertrauen:
  - [x] Beispielitem für den Text gewählt (E Frage 1, steht in 6.4)
  - [x] TLX als Rohwerte ohne Gewichtung benannt (Satz in 6.4)
  - [x] jian2000trust (Vertrauen) nicht erhoben, als Abweichung genannt (13.11., Satz in 6.4 hinter dem SUS)
  - [ ] hart1988tlx und brooke1996sus in der Bib inhaltlich prüfen. Die Schlüssel sind vorhanden und lösen beim Kompilieren auf (13.11.)
- [x] 6.4 – Auslese-Skript für die Bögen: gibt es nicht (07.11. geprüft), Bögen werden von Hand aus den Markdown-Dateien des Sitzungsordners übertragen; so in 6.6 sagen
- [x] Anhang A – Aufgabentexte #79, #74 und E am Studienrechner mit den tatsächlich verwendeten Aufgabenblättern wortgenau vergleichen und gegebenenfalls korrigieren. Die Texte im Anhang wurden aus den WORTLAUT-Notizen in 06_nutzerstudie.tex übernommen. (erledigt 11.11.: Prompts C und D, #74 und E wortgleich mit eval/tasks/*/prompts.md, mit der ersten Nachricht aller Studientranskripte und mit den Aufgabenblättern aller Sitzungsordner; einzige Abweichung #79, dort fehlte der Absatz vor "The navigation should be rendered", im Anhang ergänzt)
- [ ] 6.4/1.6 – KI-Nutzung in der Auswertung kennzeichnen: lokale Transkription (faster-whisper) und Vorschläge eines lokalen Modells (qwen3:8b) für Erklären und Interview, Wertung bleibt bei der Sitzungsleitung (studie\auswertung\README.md)
- [x] 6.5 – Einwilligung: verschickte Fassung am 07.11. aus dem Rücklauf-PDF gesichert, Wortlaut in 06_nutzerstudie.tex (6.5 WORTLAUT); für den Anhang von dort übernehmen
- [ ] 6.5 – Entwickler-Sitzungen: ob PG (22.10., alter Ablauf) als Entwickler 1 zählt, ob P01 noch läuft, Termin Entwickler 2 (P02). Zweite Gruppe entfällt (29.10. entschieden, nur dieses Teamprojekt)
- [x] 6.5 – Plan-Satz "Pseudonym in Reihenfolge des Rücklaufs" an den gefahrenen Stand anpassen (P03 lief am 03.11. vor P01 und P02) (geprüft 13.11.: der Fließtext von 6.5 sagt bereits "in der Reihenfolge der Terminanmeldung" und "für jedes Pseudonym vorab festgelegt", das deckt sich mit der Notiz in 6.5; der Plan-Satz steht nur noch in den Notizen)
- [ ] 6.6 – Schwelle und Tabellen:
  - [x] Schwelle für "angesehen" festgelegt: Anzeige ab 300 ms, steht in 6.4 (Kontext und Ergebnis des Agenten)
  - [ ] Umgang mit PG und den Entwicklern in den Tabellen
- [x] 6.4/6.6 – Hauptkennzahl geändert (08.11., aus der Methodik-Notiz research_notes/Forschungsfragen und Methodik/methodik.md): Zuwachs über alle fünf Vorher/Nachher-Items statt nur über die nicht gelieferten. Grund: die Einteilung geliefert entsteht nach dem Lauf, der Lauf hängt in D vom kuratierten Kontext ab, C und D hätten verschiedene Items erfasst (Selektion nach der Behandlung, Montgomery/Nyhan/Torres 2018, AJPS, DOI 10.1111/ajps.12357). Schichten geliefert/nicht geliefert bleiben als Mechanismus daneben, Markierung je Sitzung wie bisher. In 6.4 geschrieben (zwei Sätze, Grund und Planabweichung kommen in 6.6), teils zählt zu nicht geliefert (6.4), Erklären-Schichtung übernommen/eigenständig als beschreibend gekennzeichnet; 6.6-Gerüst, tab:messgroessen, Kopfzahl-Kommentar 6.1 und Grenzenliste nachgezogen; 6.1 letzter Absatz: Dopplung zur Kontextgüte entfernt, "Richtung je Person" zu "Unterschiede je Person, getrennt nach Abfolge", zwei Semikolons aufgelöst
- [ ] 6.6/8.2 – Abweichung vom Plan E1 (Hauptkennzahl):
  - [x] entschieden 16.11.: 6.6 nennt nur den Stand der Hauptkennzahl, ohne Datum und Planabweichung (alter Wortlaut als Kommentar in 6.6)
  - [ ] in 8.2 als Grenze, mit Datum (einzige Stelle seit 16.11.)
  - [ ] Plan-Dokument im Werkzeug-Repo mit Datum 08.11. ergänzen
  - [ ] Montgomery 2018 in die Bib, falls in 6.6 oder 8.2 zitiert
- [x] 6.6 – Vorzeichentest mit p-Werten gestrichen (08.11.): die je Aufgabe zentrierten Differenzen teilen die geschätzten Aufgabenmittel und sind nicht unabhängig, die rohen Differenzen enthalten die Aufgabenschwierigkeit mit wechselndem Vorzeichen, die Binomial-Null gilt für beide nicht ohne Nachweis. Berichtet werden die acht D-minus-C-Differenzen roh je Abfolgegruppe (A: 74-C dann E-D, B: 74-D dann E-C), aus den Gruppenmitteln Bedingungseffekt (halbe Summe) und Aufgabeneffekt (halbe Differenz), dazu Punktdiagramm. Keine Zahl der positiven Differenzen als Kennzahl (täuscht unabhängige Evidenz vor, Zweitgutachten 08.11.). Der zum Crossover passende Test ist der Vergleich der Aufgabendifferenz (E minus #74 je Person) zwischen den Abfolgegruppen (4 gegen 4, exakt, kleinstes zweiseitiges p 2/70 ≈ 0,03), steht als Nebenauswertung schon drin. Verweis 5.1 aus 6.6 entfernt; der Vorzeichentest in Kapitel 5 (gepaarte Aufgaben) ist davon nicht betroffen
- [ ] 6.4 – Vor dem Übertragen der Bögen auszählen, wie oft sich die gelieferten Items zwischen den C- und D-Sitzungen einer Aufgabe unterscheiden (12-/13-geliefert-*.md); entscheidet, wie viel Platz die Abweichung in 8.2 braucht. Stand 11.11.: nur P03 hat die Markierung (12-/13-geliefert-*.md), P04 und P05 noch nicht; erst markieren, dann auszählen
- [x] 6.4/6.6/7 – Auswertung am 10.11. festgelegt (Bericht reports/Auswertung Nutzerstudie.md, Abschnitt 9), nach drei gefahrenen Sitzungen und dem Piloten PG. Hauptkennzahl: Anteil richtiger Antworten nachher minus vorher, #74 Fragen 1 bis 5, E Fragen 1 bis 4, ohne Kontrollfragen (ersetzt "alle fünf Items" vom 08.11.). Die Plan-Kennzahl wird nicht gerechnet. Keine Zweitmarkierung von "genannt". Zuwachs zweistufig, dazu Verteilung ja, teils, nein je Bedingung. Kein Test, stattdessen Auslassprobe. Linienbild statt Punktdiagramm. "Paar" und "Reihenfolge" statt "Abfolgegruppe". "genannt" statt "geliefert", "Einordnung" statt "Mechanismus". Übergangstafel in 7.3. Eigener Abschnitt in Kapitel 7 für Aufwand und Bewertung der Oberfläche. Wortlaut der Ausgänge wird nicht vorab festgelegt. In 6.1, 6.4 (Fließtext und Tabelle), den Kommentaren von Kapitel 6 und der Gliederung von Kapitel 7 nachgezogen.
- [ ] 6.6/8.2 – Beim Schreiben von 6.6 nennen:
  - [x] die Abweichung vom Plan bei der Hauptkennzahl: entschieden 16.11., steht nicht in 6.6, nur in 8.2
  - [x] die Begründung für "kein Test" (6.6, 13.11., bisher nur die kleine Stichprobe. Ausbau steht unten als eigener Punkt)
  - [x] die Markierung "genannt" durch die Sitzungsleitung in Kenntnis der Bedingung (6.4, 13.11.)
  - [ ] alle drei auch in 8.2
- [ ] 6.5/6.6 – Dritte gefahrene Sitzung in den Kommentaren von Kapitel 6 nachtragen (dort stehen nur P03 und P04).
- [ ] Kap. 6 – 30.11.–11.12. auf den gefahrenen Stand bringen: Zeitgrenzen der Bögen (4 und 5 min) wurden bei P03 und P04 nicht gehalten (Nachher-Bogen 5 bis 8 min), Zwischenablage bei P04 defekt; Mitschriebe unter studie\probanden\<Kennung>-sitzung\01-mitschrieb.md

Aus der Durchsicht von Kapitel 6 am 13.11. (zwei Befundberichte, Gegenprüfung durch Codex):

- [x] 6.1 – Durchsicht 13.11.:
  - [x] Wiederholungen der Hauptfrage gestrichen (Schlusssatz des Absatzes zur Wirkannahme, Ein-Satz-Absatz zu FF4, Absatz "Die Studie untersucht zwei Dinge")
  - [x] drei Restsätze im Absatz zur Erwartung gelöscht (stehen in 6.2, 6.3, 6.5)
  - [x] Zuwachs im Absatz zur Erwartung definiert
  - [x] Kommafehler im Satz zur fehlenden Erwartung für Teil 2 behoben
- [ ] 6.2 – Begriffe:
  - [ ] Vergleichswert unter einem Namen führen (6.2, 6.4, 6.6 sagen drei verschiedene)
  - [ ] "Studienseite" wird in 4.5 nicht eingeführt
- [ ] 6.3 – Durchsicht 13.11.:
  - [x] erklärendes "also" gestrichen
  - [x] Satz zum Spielraum bei #74 auf die Deckung bezogen
  - [ ] Zeile zur Symbolebene in tab:aufgaben (#74 5, 6, 5 von 7, E 8, 5, 7 von 9)
  - [ ] Größe der Codebasis nennen (rund 100 Dateien)
  - [ ] Schwellen der Auswahlregeln nennen
  - [ ] "Lösungskern", "Verständnisstellen" und "Referenzsymbole" definieren (3 Dateien und 5 Stellen ergeben 7)
  - [ ] "Referenzstellen" in 6.1 angleichen
- [ ] 6.4 – Durchsicht 13.11.:
  - [x] "Kontrollfrage" eingeführt
  - [x] "Studienoberfläche" zu "Studienseite"
  - [x] Zusammenfassung des Agenten erklärt
  - [x] Zählung der Aussagen der freien Erklärung neu gefasst
  - [x] Transkript-Prüfung (liest der Agent vor der Bestätigung Dateien) mit Verweis auf 6.2 und 7.2
  - [x] "bevor er Code sieht" ersetzt durch "bevor der Agent mit der Aufgabe beginnt"
  - [ ] Begründung für Vorher-Nachher trennen (Vorher-Bogen zieht Vorwissen ab, die Einteilung nach genannt fängt die Zusammenfassung ab)
  - [x] "Einordnung" hatte zwei Bedeutungen (Aufteilung nach genannt, Zeile in tab:messgroessen): erledigt 16.11., die Zeile entfällt mit der Tabelle
  - [ ] die zwei Selbsteinschätzungen in Teil D kommen im Text nicht vor
  - [ ] Vorfragebogen-Absatz steht unter "Fragen zu den Zusammenhängen"
  - [ ] kürzen auf 2,5 S.
- [ ] 6.5 – Durchsicht 13.11.:
  - [x] Anleitung zur Studienseite und mündliche Antworten der Sitzungsleitung (nur Bedienung, nie Auswahl) im Text (Angabe des Autors 13.11., Notiz FESTLEGUNG 13.11. in 6.5)
  - [ ] Ablauf einer gewerteten Aufgabe mit Minuten (Aufgabenblatt, Vorher-Bogen, Lauf, Durchsehen, Erklären, Nachher-Bogen) als zweite Hälfte von tab:ablauf oder Ablaufvorlage in Anhang B. 6.2 verspricht "den vollständigen Ablauf" in 6.5
  - [ ] Präsens gegen tatsächliche Durchführung trennen, Verweis auf 7.2
  - [ ] Abweichung zwischen Einwilligung ("Fragebögen füllst du aus") und mündlichen Antworten in einem Satz nennen
  - [ ] erklären, warum die Pseudonyme bei P03 beginnen
  - [ ] je Sitzung aus dem Transkript festhalten, was die Probanden gefragt und was die Sitzungsleitung geantwortet hat
- [ ] 6.6 – Durchsicht 13.11.:
  - [x] nur nachher gestellte Fragen in Text und tab:auswertung, vorsichtig formuliert
  - [x] FF4 je Aufgabe vier Läufe unter C gegen vier unter D, in Text und tab:auswertung
  - [ ] Regel für genannt und nicht genannt (Nenner, Zusammenfassung über Personen, leere Gruppen)
  - [ ] Verfahren der Interviewauswertung
  - [ ] Umgang mit Aussagen der Liste, die beim tatsächlichen Lösungsweg nicht anwendbar sind
  - [ ] Hauptkennzahl einheitlich benennen (Zuwachs je Aufgabe, Differenz D minus C je Person, mittlerer Unterschied zwischen den Bedingungen)
  - [ ] Satz wieder aufnehmen, dass der mittlere Unterschied dem Mittel der acht Differenzen entspricht
  - [ ] "kein Test" mit mehr als der kleinen Stichprobe begründen
- [ ] 8.2 – Nachtrag im PFLICHT-Block:
  - [x] Punkte 7 bis 13 als Kommentar eingetragen (13.11.)
  - [ ] entscheiden, ob Punkt 13 (mündliche Antworten der Sitzungsleitung) gebraucht wird
- [ ] Kap. 6 – Rückmeldung des Autors nach dem Lesen im PDF (16.11.):
  - [x] eine Tabelle statt drei: tab:ff-zuordnung, tab:messgroessen und tab:auswertung zu tab:studienfragen in 6.1 zusammengelegt (Frage, Erhebung, Kennzahl und Vergleich, Abschnitt mit dem Ergebnis). Die zwei alten Tabellen in 6.4 und 6.6 stehen auskommentiert in \iffalse
  - [x] Tabellen stehen mit [H] zwischen zwei Absätzen und trennen keinen Satz mehr (tab:studienfragen, tab:ablauf)
  - [x] "Nebenfrage" steht nicht mehr in jeder Tabellenzeile. FF2 und FF5 stehen als zwei Sätze im Absatz vor der Tabelle
  - [x] 6.1: "beträfe" ersetzt durch "gilt für"
  - [x] 6.4: Wiederholung zu Teil A und Teil B gestrichen, Satz "Teil B trägt den ersten Teil der Hauptfrage ..." entfällt
  - [x] 6.6: Satz mit Datum und Planabweichung der Hauptkennzahl gestrichen
  - [x] tab:studienfragen im PDF geprüft (16.11.): passt in der Breite. Stand direkt nach dem Verweis mit einer halben leeren Seite, steht deshalb zwei Absätze später auf S. 27 zwischen zwei Absätzen
  - [ ] tab:ablauf (6.5) im PDF ansehen, ob [H] dort eine Lücke am Seitenende lässt
  - [x] Satz "Den Vergleich von strukturiertem und flachem Kontext (FF5) behandelt Abschnitt 5.3" gegen 5.3 prüfen, sobald es geschrieben ist (TODO-Zeile dazu in den Notizen von 5.3, 05_benchmark.tex) (23.11.: 6.1, 5.3 und 4.5 sagen jetzt gleich, B gegen C beantwortet FF5 nicht)
  - [x] Nennungen des Exposés aus dem Fließtext genommen: Vertrauensskala in 6.4, 60 Minuten in 6.5 (alter Wortlaut als Kommentar in 6.4 und in den Notizen von 8.1)
  - [ ] entscheiden, ob auch "wie es bei der Planung für eine kleine Codebasis bereits erwartet war" in 6.1 entfällt. Dann entfällt auch Punkt 1 im PFLICHT-Block von 5.6
- [ ] 7.3 – Übergangstafel: die 36 Antworten je Bedingung sind 20 aus #74 und 16 aus E, Aufgaben getrennt ausweisen (Codex 13.11.)
- [ ] Kap. 5 – beim Schreiben:
  - [ ] entscheiden, ob die Rechnung zur Deckung in 5.6 oder in 6.3 ausführlich steht
  - [ ] A, B, C der Agentenmessung gegen C, D und Paar A, B der Studie abgrenzen (6.3 sagt seit 17.11. "Läufe mit automatischem Abruf" statt "Läufe unter C", der Verweis auf 5.3 bleibt. 5.1 grenzt A, B, C schon gegen C und D der Studie ab, offen ist Paar A, B)
  - [ ] Aussage zu AP8 in 6.1 an 5.3 anpassen (SWE-bench, nur Lokalisieren)
- [ ] PRÜFEN (Autor):
  - [ ] protokolliert der Export das Aufklappen der Begründung in der Detailkarte? Sonst misst E3 nur angesehene Karten
  - [ ] Datum der Hauptkennzahl für 8.2 (08.11. erweitert, 10.11. ohne Kontrollfragen), dort in zwei Schritten nennen
  - [ ] was die "Prüfung an vier Agentenläufen" in 6.4 war
  - [ ] ob Ortsliste, Urteil beim Durchsehen und Fragen zur Arbeit des Agenten in Kapitel 7 berichtet werden
  - [ ] Wortlaut "die er am Ende des Laufs im Terminal ausgibt" (6.4) gegen die Sitzungen
- [ ] Kap. 6 – Kommentare aufräumen:
  - [ ] "7.1" für die Durchführung heißt jetzt 7.2
  - [ ] überholte Blöcke löschen (OFFEN in 6.4, Fassung Codex, Fassung vor der Straffung, Feedbackrunde a bis c)
  - [ ] PFLICHT-Block 6.6 abhaken, wenn die roten Stellen gegengelesen sind

## Kapitel 2

- [ ] 2.3 – Abschnitt "Semantische und lexikalische Suche" schreiben (Notizen in 02_grundlagen.tex), Budget mit 2.1/2.2 klären
- [ ] 4.4 – Sobald 2.3 steht: Erklärungen zu Einbettung, Cosinus-Ähnlichkeit, Vektorindex, BM25 und RRF-Mechanik durch Verweis auf sec:suche-grundlagen ersetzen, Zitate dann in 2.3 statt 4.4

## Kapitel 5

- [x] 5.1 – Abschnitt geschrieben, gegengelesen und im PDF auf Tabellen, Umbrüche und Verweise geprüft. Laufzeiten und Definition der fernen Aufgaben mit dem Werkzeug-Repo abgeglichen.
- [ ] 5.1 – Umfang nach dem Schreiben von 5.3 und 5.4 prüfen und bei Bedarf kürzen (derzeit 3,6 statt 3 Seiten).
- [x] F3 entschieden 17.11.: Zahlen in Kapitel 5, 7.1 als Übersicht der fünf Hauptmessungen (Notiz im Kopf von 05_benchmark.tex und bei 7.1 in 07_ergebnisse.tex, Gliederung nachgezogen)
- [ ] 5.1 – Auswahl der 21 Aufgaben der Messmenge und der 12 der Holdout-Menge in einem Satz begründen (Quelle klären, Kandidaten: Tn Teil 0.3, B1 und B8, Vorregistrierung 24.08.)
- [ ] 5.1/5.3 – Feld des Fehlerberichts in den Abrufmessungen am Messskript prüfen (Aufgabenbeschreibung oder Nutzeranfrage), danach Halbsatz in 5.1 (Notiz im Gerüst von 5.3)
- [ ] Kap. 5/7.1 – Betreuer in zwei Sätzen mitteilen: Die Ergebnisse der Benchmark-Messungen stehen bei der jeweiligen Messung in Kapitel 5, 7.1 ist eine Übersicht der fünf Hauptmessungen auf 2 Seiten. Die übrigen Messungen stehen kurz in Kapitel 5 (die Notiz vom 26.10. sah beides in Kapitel 7 vor)
- [ ] 5.1 und 6.3 – rote Stellen vom 17.11. lesen und Markierung entfernen (Kapiteleinleitung, vier Stellen in 5.1, ein Satz in 6.3)
- [x] Anhang Messprotokolle (app:messprotokolle) – Entwurf vom 16.11. mit drei Tabellen, gelesen und am Werkzeug-Repo geklärt am 16.11. (Notizen im Kommentar von anhang.tex):
  - [x] Einleitungstext und Tabellen gegenlesen, danach ungelesen-Kasten entfernen (16.11.)
  - [x] Vektorindex 19.08. fehlt in der Tabelle, kein Serienordner gefunden (docs/eval-2026-08-19-vektorindex.md) (16.11.: kein Serienlauf, als Zeile ohne Serienordner in D.1)
  - [x] Seed-Fix 17.08.: Commit, über dem der Arbeitsbaum lag, aus PROVENANCE.md der Serie nachtragen (16.11.: über 0df4188, in D.1)
  - [x] Agentenanfrage 08.10.: PROVENANCE.md nennt HEAD 4538f01, der Befund nennt d2f5d24. Klären, welcher Stand zitiert wird (16.11.: gemessen über 4538f01, danach committet als d2f5d24, beide in D.2)
  - [x] Agentenmessung: PROVENANCE.md der sechs Serien nennt 1d8c6ea, der Befund nennt für die erste Wiederholung bd5cfc6. Klären, welcher Stand in der Tabelle steht (16.11.: erste Wiederholung Sonnet und Haiku auf bd5cfc6, Rest auf 1d8c6ea, in der Bildunterschrift von D.3)
  - [x] entscheiden, ob die Dateinamen der Befunddokumente (interne Namen des Werkzeug-Repos) im Anhang stehen bleiben (16.11.: aus D.1 und D.2 genommen, stehen als Kommentar vor Tabelle D.1. Im Fließtext zur Agentenmessung stehen noch zwei)
- [ ] 5.2 – beim Schreiben des Seed-Fix entscheiden, wie die Zahlen belegt werden. Die Serie vom 17.08. liegt in keinem Commit (PROVENANCE.md nennt sie Zwischenstand). Geprüft 16.11.: der Nachher-Wert 76,6 Prozent steht ebenso in der Kontrollzeile der Budget-Serie vom 19.08. (results-budget-20260819/A-kontrolle, Commit 643c77e, Arbeitsbaum in den messrelevanten Dateien sauber, MRR 0,549 wie am 17.08.). Der Vorher-Wert 54,8 Prozent steht in der ersten Messung vom 16.08. und in Lauf A vom 17.08., beide ohne festgehaltenen Codestand
- [ ] Anhang Messprotokolle – wenn 5.2 bis 5.6 geschrieben sind: prüfen, ob jede dort berichtete Messung in D.1 bis D.3 steht (Einleitung sagt seit 16.11. "zu den Messungen" statt "zu jeder Messung")
- [ ] Anhang Messprotokolle – nach dem Kompilieren im PDF ansehen: neue Zeile Vektorindex in D.1, längere Bildunterschrift von D.3, Spaltenbreiten Datum und Aufgaben

- [ ] 5.6 – schreiben. Trägt seit der Neufassung von 6.1 (06.11.) die Begründung des Wechsels der Hauptfrage: Bilanz der Messungen, AP8 (mit Kontextblock weniger Suchen, gleiche Treffer), Rechnung 13.10. mit Zahlen (Deckung #74 dreimal 7 von 7, E 9, 8, 8 von 9), Folgerung: der Mensch ist der Unterschied, nicht der Kontext. 6.1 verweist nur hierher und nennt die Deckung in einem Satz. Material: Notizen HERKUNFT 1 bis 6 im Kopf von 6.1 (06_nutzerstudie.tex). Keine Chronik im Fließtext, Daten nur als Beleg in Fußnoten
- [ ] 5.3/6.1 – FF5-Messung richtig nachholen, NACH der Studiensitzung (Plan 23.11.). Anlass: in AP8 fehlte B und C der Weg je Knoten, weil eval/render-probe.js die Nachbarn aus eingefrorenen Knotensätzen ohne `nodeIdChain` baute (Z. 176–186). Der Baum-Renderer fand keine Eltern, "Included via:" nannte nur den Knoten selbst. Vor den 891 Läufen hat niemand einen Block angesehen. Kern von AP8 (A gegen B/C) ist nicht betroffen
  - Stand 23.11. abends: Code gebaut, geprüft und wieder verworfen (Studienwerkzeug war geändert worden). Neuer Anlauf nur mit Kopien, Einzelheiten in Thesis/Plan FF5-Messung.md
  - Eigene Messung, keine Korrektur von AP8: heutiger Abruf (Seeds seit 13.09. anders), andere Knoten, ohne A. In 5.3 mit eigenem Datum und Werkzeugstand berichten, Zahlen nicht mit AP8-B/C zusammenlegen. Entwicklungsmessung nach docs/arbeitsweise-messungen.md (alle Läufe berichten, Reihenfolge sagen)
  - Bedingungen (entschieden 23.11.): F = flach (renderFlatContext, Weg je Knoten ausgeschrieben), T = Baum (renderTreeContext, eingerückt), J = JSON mit JSON_CONTEXT_LEGEND davor. Alle aus demselben echten Abruf je Aufgabe
  - GELAUFEN 26.11. (Branch ff5Messung im Werkzeug-Repo, nicht gepusht, Ergebnisse committet): fünf Bedingungen N (ohne Kontext), L (Liste ohne Weg), F, T, J, 165 von 165 Läufen gültig. Befund mit allen Zahlen in codebase-graph/docs/eval-2026-11-26-ff5-messung.md. Die erste Fassung vom Mittag ("N ohne Weg schlechter") war falsch: N lief durch einen Übergabefehler ohne Block; behoben, L nachgefahren, Einzelheiten in Plan FF5-Messung.md. Die Unterpunkte bis "Abo-Kontingent" sind damit erledigt (Abo: ja). Offen bleibt der letzte Unterpunkt (5.3, 6.1, 4.5, Anhang D.3)
  - [x] eval/freeze-handover.js neu: runRetrieval je Aufgabe (Hilfsfunktionen aus format-probe-live.js, dort nur module.exports und require.main-Schutz), F/T/J nach handover/<aufgabe>.json einfrieren, Prüfung mit Abbruch: T hat eingerückte Knotenzeilen, jede "Included via:" in F nennt mehr als den Knoten selbst, jeder Nachbar in J hat via oder inFile, gleiche Knoten- und Kantenzahl. Ergebnis in CHECK.md
  - [x] eval/agent-trace.js: Option --handover <serie>, dann Bedingungen F/T/J aus den eingefrorenen Blöcken statt render-probe.js, Paare F-T, F-J, T-J im Bericht. Ohne --handover Verhalten wie bisher
  - [x] Unit-Suite test-agent-trace.js grün, kleiner Test: AP8-artiger Block fällt durch, echter Block besteht
  - [x] zwei bis drei Blöcke selbst ansehen, dann erst laufen lassen
  - [x] Vorlauf: Sonnet, 33 Aufgaben (slice-small 21, slice-holdout 12), 1 Wiederholung, 99 Läufe, etwa 17 USD und 2 Stunden. Bei Bedarf mit --reps 3 in dieselbe Serie nachziehen, im Befund sagen, wann welche Wiederholung lief
  - [x] prüfen, ob die Agentenläufe über das eigene Abo-Kontingent laufen oder über einen API-Schlüssel (dann nicht vor einer Studiensitzung starten)
  - [ ] Ergebnis in 5.3 als eigene Messung, danach 6.1 und 4.5 anpassen (siehe VOR DER ABGABE PRÜFEN unter "Später / sonstiges"), Zeile in Anhang D.3
- [ ] 5.3/6.1 – (Messteil erledigt 26.11. nachmittags: Weg A, ohne Weg als L auf den Knoten der Nachtmessung nachgefahren, N ist ohne Kontext, ein Durchgang; keine tiefe Messung. Ergebnis: L, F, T, J untereinander kein Unterschied nachweisbar, nur Kontext gegen keinen. Offen bleibt die Definition im Text) Zwei Bedeutungen von "strukturiert" (Stand 26.11.): zwei Bedeutungen von "strukturiert". 5.3 und 6.1: strukturiert = Weg je Knoten (und Kanten), flach = ohne Weg. Plan FF5-Messung: F flach nennt den Weg auch, "flach" meint nur Liste statt Einrückung. Nach 5.3/6.1 wären F, T und J alle strukturiert. Optionen: (a) Bedingung N ohne Wegangabe dazu, (b) Definition in 5.3/6.1 auf Baumdarstellung umstellen. Vorschlag: beides, vier Bedingungen N/F/T/J auf demselben tiefen Knotensatz (N gegen F = Wegangabe, F gegen T = Einrückung, Exposé 02_forschungsfragen Z. 67), N mit Kanten. Offen dazu: Schwelle "nicht flach", Zahl der Durchgänge. Die Nachtmessung 26.11. (flacher Werkzeugkontext, F/T/J) beantwortet nur F gegen T bei kaum vorhandener Tiefe
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

- [ ] **VOR DER ABGABE PRÜFEN – FF5 in 6.1:** Der Absatz zu FF5 in 6.1 (06_nutzerstudie.tex, Absatz "Die Studienfragen knüpfen an", eingesetzt 23.11.) endet mit "Mit einer flachen Fassung verglichen wurde es nicht. FF5 bleibt damit unbeantwortet." Falls die optionale JSON-Messung (Kapitel 5, "Agentenmessung mit JSON") doch gelaufen ist, diese beiden Sätze durch das Ergebnis ersetzen und nachziehen: 5.3 (FF5-Absatz, "Der Vergleich von B und C beantwortet FF5 deshalb nicht"), 4.5 ("Ob dieser Verweis, den das JSON trägt, dem Agenten nützt, zeigt der Vergleich deshalb nicht. Für JSON ist bisher nur die Größe gemessen.") und 7.1. An allen drei Stellen steht ein Kommentar mit ACHTUNG oder Datum 23.11.

- [ ] Budget – Überschreitungen vor Kürzung, zusammen 10,6 Seiten bei 9 Seiten Reserve (Stand 17.11.):
  - [ ] Kap. 4: 19 statt 12 Seiten, Ziel 14
  - [ ] Kap. 6: 13 statt 10 Seiten
  - [ ] 5.1: 3,6 statt 3 Seiten

- [ ] 4.1 – Sobald 3.5 (sec:abgrenzung) geschrieben ist: 4.1 dagegen abgleichen. Absatz 1 verweist für die Abgrenzung auf 3.5, die Formulierung "Das Besondere liegt in der Verbindung zweier Eigenschaften" muss zu 3.5 passen
- [ ] 3 – Einordnung der Designentscheidungen gegen verwandte Arbeiten (Gutachten 31.10.): hybride Dense-/BM25-Suche, Einbettung von Beschreibungen statt Rohcode, RepoGraph/CodexGraph als Vergleich für Graphschema und Traversierung (beide schon in der Bib)

