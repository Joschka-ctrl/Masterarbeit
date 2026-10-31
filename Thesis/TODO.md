# Thesis – offene Punkte

Format: `- [ ] Abschnitt – was` – erledigt: `[x]`.

## Kapitel 4

- [x] 4.3 – "Zwischendatei" an zwei Stellen (Parse-Absatz, Absatz nach der Abbildung) durch "JSON-Datei" ersetzen, passend zum ersten Absatz
- [ ] 4.6 – Grenze aufnehmen: keine Kante Methode -> Klasse, Methoden sind Funktionsknoten der Datei (in 4.3 schon mit Verweis auf 4.6 erwähnt)
- [ ] 4.4 – Bib-Eintrag BM25: Robertson und Zaragoza 2009, "The Probabilistic Relevance Framework: BM25 and Beyond", Foundations and Trends in Information Retrieval 3(4); dann Marker durch \cite ersetzen
- [ ] 4.4 – Bib-Eintrag RRF: Cormack, Clarke und Buettcher 2009, "Reciprocal Rank Fusion outperforms Condorcet and individual Rank Learning Methods", SIGIR 2009; dann Marker durch \cite ersetzen
- [ ] 4.2 – Abbildung Pipeline mit Eingriffspunkten unter dem Label fig:pipeline anlegen, 4.4 verweist bereits darauf
- [ ] 4.3 – Zitate reactdocs und ollama fehlen in bibliography.bib (Compiler-Warnung)
- [ ] 4.3 – Bib-Eintrag Neo4j allgemein (Neo4j Documentation, neo4j.com/docs); dann Marker durch \cite ersetzen
- [ ] 4.3 – MCP-Marker durch \cite{anthropic2024mcp} ersetzen (Eintrag schon vorhanden) oder Verweis auf Kapitel 2
- [ ] 4.3 – Bib-Eintrag tree-sitter (Brunsfeld, tree-sitter.github.io); dann Marker durch \cite ersetzen
- [ ] 4.3 – Bib-Eintrag Python-Modul ast (Python Documentation); dann Marker durch \cite ersetzen
- [ ] 4.3 – Bib-Eintrag GitHub REST API (docs.github.com/rest); dann Marker durch \cite ersetzen
- [ ] 4.3 – Bib-Eintrag Qwen3-Embedding: Zhang et al. 2025, "Qwen3 Embedding: Advancing Text Embedding and Reranking Through Foundation Models", arXiv:2506.05176 – Angaben prüfen; dann Marker durch \cite ersetzen
- [ ] 4.3 – Bib-Eintrag Neo4j Cypher Manual, Abschnitte Vector indexes und Full-text indexes; dient für zwei Marker (Indizes anlegen, Vektorabfrage nicht vorab auf ein Projekt filterbar – Aussage dort prüfen)
- [ ] 4.3 – Bib-Eintrag Neo4j Operations Manual (Editionen, mehrere Datenbanken nur Enterprise); dann Marker durch \cite ersetzen
- [ ] 4.4 – Bib-Eintrag Cosinus-Ähnlichkeit: Manning, Raghavan und Schütze 2008, "Introduction to Information Retrieval", Cambridge University Press, Kap. 6; dann Marker durch \cite ersetzen
- [ ] 4.4 – Marker Kontextfenster: \cite{liu2023lostmiddle} (ggf. du2025contextlength) einsetzen, beide schon in der Bib
- [ ] 4.4 – Marker Normierungsgrenzen (0,416–0,639, p5/p95 aus 16.493 Nachbarn, 19 Aufgaben): Beleg ist eval/results/sim-distribution.json vom 17.08. (codebase-graph), in Kapitel 5 oder Anhang aufnehmen und verweisen
- [ ] 4.4 – "Kapitel 5 begründet das" (Commit- und Seed-Anzahl-Term mit Gewicht 0) beim Schreiben von Kapitel 5 einlösen: Quellen docs/eval-2026-08-17-f29.md und Kommentar in retrieval.js (NBR_W_SUP, NBR_W_PRIOR)
- [ ] 4.5 – Marker MCP_TOOL_TIMEOUT: auf dem Studienrechner prüfen, ob und wie MCP_TOOL_TIMEOUT gesetzt ist (settings.local.json der Studienbranches im Bare-Repo, Benutzer-Settings, Umgebungsvariablen) und ob der Wert über 10 Minuten liegt; laut Studienplan nicht unter den Einstellungen der Branches
- [ ] 4.5 – Modultabelle für den Anhang anlegen (Label app:module), Zeilenzahlen der Module neu zählen (Stand 09.09. in Textnotizen A5)
- [ ] 4.5 – Bib-Eintrag McMillan 2026 (Formatstudie, 11 Modelle, p = 0,484; Quelle bisher nur docs/notizen/Zu besprechen.md, Punkt 4) – Angaben prüfen; dann Marker durch \cite ersetzen
- [ ] 4.5 – Absatz 3b (Detailansicht) sprachlich überarbeiten, inhaltlich ok

## Kapitel 2

- [ ] 2.3 – Abschnitt "Semantische und lexikalische Suche" schreiben (Notizen in 02_grundlagen.tex), Budget mit 2.1/2.2 klären
- [ ] 4.4 – Sobald 2.3 steht: Erklärungen zu Einbettung, Cosinus-Ähnlichkeit, Vektorindex, BM25 und RRF-Mechanik durch Verweis auf sec:suche-grundlagen ersetzen, Zitate dann in 2.3 statt 4.4

## Kapitel 5

- [ ] 5 – Vor dem Nennen der Seed-Zahlen prüfen, ob der Holdout vom 26.08. (codebase-graph/docs/eval-2026-08-26-holdout-durchfuehrung.md) die PascalCase-Regel (SEED_PASCAL_TIER) und den Häufigkeitsfilter SEED_DF_MAX abdeckt. Laut Kommentar in retrieval.js (Zeilen 217–222) wurden beide auf denselben 21 SWE-bench-Fällen entworfen und geprüft.

## Später / sonstiges

