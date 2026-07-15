# Offene Kommentare – Exposé-Review Prof. Dr. Müller

Quelle: `expose_Joschka_Peeters_2026_05_11_rm (1).pdf` · Reviewer: „renie" · 41 Kommentare
Status des Reviews: **REVIEW STOPPED** bei HF2 (Seite 8) – der Prof hat ab Kapitel 3 (Forschungsfragen) nicht weiter kommentiert.

Format je Eintrag: markierte Stelle → Frage des Profs → **Antwort / Vorschlag zur Überarbeitung**.

---

## Seite 3 – Problemstellung und Motivation

### 1. „(Peng u. a. 2023)" – Aktualität der Literatur
> *„Diese Literatur ist evtl. nicht mehr aktuell genug. In dem Kontext ist Literatur, die älter als ein Jahr ist, mit Vorsicht zu genießen. […] Die Literatur eins weiter oben könnte weiterhin relevant sein."*

**Antwort:** Berechtigter Einwand. Peng u. a. (2023) (GitHub-Copilot-Produktivitätsstudie) ist die meistzitierte Quelle für den 55,8-%-Effekt, aber inzwischen 3 Jahre alt und misst noch Autovervollständigung, nicht agentische Workflows.
**Vorschlag:** Aussage mit einer aktuelleren Quelle (2025/2026) zur Produktivität *agentischer* Coding Tools flankieren oder die Zahl explizit als historischen Ausgangsbefund einordnen („frühe Evidenz für Produktivitätsgewinne"). Die Zahl 55,8 % nicht als aktuellen Stand verkaufen. Prüfen, ob eine METR-/RCT-Studie zu Coding Agents (2025/26) zitierbar ist.

### 2. „realen Repository-Aufgaben" – Was sind das für Aufgaben?
> *„Was sind das für Aufgaben?"*

**Antwort:** Gemeint sind SWE-bench-Aufgaben: echte GitHub-Issues aus 12 Python-Repositories, zu denen der Agent einen Patch erzeugen muss, der die zugehörigen fail-to-pass-Tests besteht (das wird erst auf S. 4 erklärt).
**Vorschlag:** Bereits hier in einem Halbsatz konkretisieren, z. B. „an realen Repository-Aufgaben (echte GitHub-Issues mit zugehörigen Tests, siehe Abschnitt 2)". Vorwärtsverweis auf die SWE-bench-Definition setzen.

### 3. „(Claude 2)" – Was ist das für ein Modell?
> *„Claude 2? Was ist das für ein Modell?"*

**Antwort:** Claude 2 war zum Zeitpunkt der ursprünglichen SWE-bench-Veröffentlichung (Jimenez u. a. 2024, Preprint 2023) das beste getestete Modell. Es ist heute hoffnungslos veraltet – aktuelle Modelle (Claude Opus 4.x etc.) lösen ein Vielfaches der Issues.
**Vorschlag:** Hier ist die 1,96-%-Zahl irreführend, weil sie suggeriert, Agents würden generell scheitern. **Stark empfohlen:** Die Zahl als historischen Startpunkt kennzeichnen und den heutigen SWE-bench-(Verified)-Stand danebenstellen (aktuelle Top-Systeme > 70 %). Sonst entsteht ein Widerspruch zur Eingangsaussage, dass Coding Agents „angekommen" sind. Klarstellen: Das Modell ist veraltet, der *strukturelle* Befund (Multi-File, lange Kontexte, Reasoning sind schwer) gilt weiter.

### 4. „Kontextbereitstellung: Was ein Coding Agent über eine Codebase weiß […]" – Gehört das zum Kontext?
> *„Gehört das zum Kontext?"*

**Antwort:** Ja. Die Klammer („welche Dateien er gelesen hat, welche Abhängigkeiten er kennt, welche Konventionen ihm vertraut sind") definiert genau, was hier mit „Kontext" gemeint ist – der dem Modell zum Inferenzzeitpunkt verfügbare Informationsstand über die Codebase.
**Vorschlag:** Den Begriff „Kontext" einmal sauber definieren (z. B. im Grundlagenkapitel), damit klar ist: Kontext = die Menge an Code-/Strukturinformationen im Prompt-Fenster des Agenten. Dann ist die Frage des Profs vorab beantwortet.

### 5. „teuer" – In welcher Hinsicht?
> *„In welcher Hinsicht?"*

**Antwort:** Teuer im Sinne von Rechenkosten/Token: reaktive Exploration verbraucht viele Tool-Calls und Tokens (jede gelesene Datei wandert in den Kontext und wird abgerechnet) und kostet Agentenschritte/Zeit.
**Vorschlag:** Präzisieren: „teuer (in Token-Verbrauch und Anzahl der Agentenschritte)". Das verbindet die Aussage direkt mit den späteren Effizienzmetriken (HF2).

### 6. „systematisch mehr Kontext abrufen als sie tatsächlich nutzen" – Was bedeutet das?
> *„Was genau bedeutet das?"*

**Antwort:** Li u. a. (2026, ContextBench) messen, dass Agents viele Dateien/Code-Abschnitte in den Kontext laden, von denen nur ein Bruchteil tatsächlich für die finale Lösung (den Patch) relevant ist. Es klafft also eine Lücke zwischen *exploriertem* und *genutztem* Kontext → niedrige Kontextpräzision.
**Vorschlag:** Einen erläuternden Halbsatz ergänzen: „d. h. sie laden viele Dateien in den Kontext, von denen nur wenige zur Lösung beitragen (geringe Präzision)". Das ist genau die Metrik „Kontextpräzision", die später in der Evaluation auftaucht – Bezug herstellen.

---

## Seite 4 – Transparenzproblem & Zielsetzung

### 7. „AgentStepper (Hutter und Pradel 2026)" – Was macht das?
> *„Was genau macht das?"*

**Antwort:** AgentStepper ist ein interaktiver Debugger für Coding Agents (für SWE-agent, ExecutionAgent, RepairAgent). Er lässt Entwickler Ausführungs-Trajektorien schrittweise durchgehen, Prompt-Verläufe einsehen und Agenten-Entscheidungen nachvollziehen. In einer Studie mit 12 Teilnehmenden stieg die Bug-Erkennungsrate von 17 % auf 60 % (steht ausführlich auf S. 6/7).
**Vorschlag:** Bei der ersten Nennung auf S. 4 einen Kurz-Halbsatz ergänzen („ein interaktiver Debugger, der Ausführungstrajektorien nachvollziehbar macht"), damit der Begriff nicht ungeklärt vor der ausführlichen Erklärung steht.

### 8. „Das System re[präsentiert]…" – Welches System?
> *„Welches System?"*

**Antwort:** Gemeint ist das in dieser Arbeit zu entwickelnde Artefakt, der „Living Knowledge Graph". Der vorige Satz führt es ein, der Folgesatz greift mit „Das System" darauf zurück.
**Vorschlag:** Eindeutiger benennen: „Der Living Knowledge Graph repräsentiert eine Codebase als …". Generell im ganzen Exposé „das System" durch den Eigennamen ersetzen, wo Verwechslung mit Agent/Client möglich ist (siehe auch Kommentar 9 & 10).

### 9. „Erhält das System eine Aufgabe, sucht es […]" – Aufgabe von wem? System = Agent wie Claude Code? Aufgabe = Prompt?
> *„Aufgabe von wem, vom Anwender? Reden wir bei System von einem Agentensystem wie Claude Code und die Aufgabe ist ein Prompt des Entwicklers?"*

**Antwort:** Wichtige terminologische Klärung. Es gibt drei Akteure, die sauber getrennt gehören:
- **Entwickler/Anwender:** formuliert die Aufgabe (z. B. „fix cart checkout").
- **Coding Agent (Client):** Claude Code / Cursor – das LLM-gesteuerte Agentensystem.
- **Living Knowledge Graph (MCP-Server, = „das System"):** *nicht* der Agent, sondern die Kontextinfrastruktur. Der Agent ruft beim System per MCP `get_context(task)` auf; das System liefert den assemblierten Kontext-Block zurück.

Also: Die „Aufgabe" ist der Prompt des Entwicklers, der über den Agenten (Claude Code) als `task` an den Living-Knowledge-Graph-Server durchgereicht wird.
**Vorschlag:** Eine kurze Akteurs-/Begriffsdefinition früh einführen (am besten als kleine Liste oder im Architekturkapitel) und konsequent durchhalten: **Entwickler** stellt Aufgabe → **Agent** (Claude Code) ruft → **System/Server** (Living Knowledge Graph) assembliert Kontext. Das löst die Kommentare 8, 9 und 10 gemeinsam.

### 10. „Der Agent e[rhält]…" – Welcher Agent?
> *„Welcher Agent?"*

**Antwort:** Der Coding Agent, in den das System eingebunden ist (Claude Code oder Cursor). Es ist kein zusätzlicher, eigener Agent – das System selbst ist ein passiver MCP-Server, kein Agent.
**Vorschlag:** Konkretisieren: „der Coding Agent (z. B. Claude Code)". Siehe gemeinsamer Vorschlag bei Kommentar 9.

---

## Seite 5 – Stand der Forschung (agentische & graphbasierte Ansätze)

### 11. „komplexes Reasoning" – Was ist das?
> *„Was ist ‚komplexes Reasoning'?"*

**Antwort:** Mehrschrittiges Schlussfolgern, bei dem der Agent Informationen aus mehreren Dateien kombinieren, Ursache-Wirkungs-Ketten über Modulgrenzen verfolgen und einen mehrstufigen Lösungsplan ableiten muss (im Gegensatz zu einer lokalen Einzeländerung).
**Vorschlag:** Entweder durch eine konkrete Beschreibung ersetzen („mehrschrittiges Schlussfolgern über mehrere Dateien hinweg") oder den Begriff im Grundlagenkapitel definieren. Schwammige Buzzwords vermeiden.

### 12. „Klassische Sprachmodelle ohne Werkzeuge schaffen das nicht." – Im Gegensatz zu was?
> *„Klassische Sprachmodelle im Gegensatz zu was?"*

**Antwort:** Gegensatz: LLM **ohne** Werkzeugzugriff (reiner Text-in/Text-out, kein Dateisystem, keine Ausführung) vs. **agentische** Systeme, die Tools nutzen können (Dateien lesen, Tests ausführen, Shell-Befehle). Genau das ist der Beitrag von SWE-agent (ACI): erst Werkzeugnutzung hebt die Lösungsrate von 3,8 % auf 12,5 %.
**Vorschlag:** Den Gegensatz explizit machen: „Klassische Sprachmodelle ohne Werkzeugzugriff (reines Text-Modell ohne Dateisystem- und Ausführungszugriff) schaffen das nicht – erst agentische Systeme mit Tool-Nutzung lösen solche Aufgaben."

### 13. „(bisherige RAG-Baseline)" – Was bedeutet das?
> *„Was bedeutet das?"*

**Antwort:** RAG = Retrieval-Augmented Generation: vor der Antwort werden per Ähnlichkeitssuche (Embeddings) relevante Code-Schnipsel gesucht und in den Prompt gelegt. Das war der Stand vor agentischen Ansätzen und diente bei SWE-bench als Vergleichsbaseline (3,8 % Lösungsrate).
**Vorschlag:** RAG bei Erstnennung kurz erläutern (am besten im Grundlagenkapitel definieren) und hier schreiben „bisherige RAG-Baseline (Retrieval per Embedding-Ähnlichkeitssuche)". RAG ist auch konzeptionell relevant, weil der Living Knowledge Graph eine *strukturelle* Alternative zum embedding-basierten Retrieval ist – diesen Kontrast kann man nutzen.

### 14. „nur 0,70 USD" – 0,70 USD für was?
> *„0,70 USD für was?"*

**Antwort:** Durchschnittliche Inferenzkosten (LLM-API-Kosten) pro gelöstem Issue/Fix bei Agentless (Xia u. a. 2024) auf SWE-bench Lite.
**Vorschlag:** Präzisieren: „bei nur 0,70 USD durchschnittlichen API-Kosten pro gelöstem Issue". Die Kostendimension ist relevant, weil Effizienz/Kosten eine zentrale Metrik der Arbeit sind (Token-Verbrauch).

### 15. „prozedurale Kontextvorbereitung" – Was ist das, speziell „prozedural"?
> *„Was ist ‚prozedurale Kontextvorbereitung'? ‚Kontextvorbereitung' allein könnte ich mir vorstellen, aber ‚prozedural'?"*

**Antwort:** „Prozedural" meint hier: der Kontext wird durch eine **fest definierte, extern gesteuerte Abfolge von Schritten** (bei Agentless: Lokalisierung → Patch-Generierung → Testvalidierung) zusammengestellt – im Gegensatz zur **autonomen** Exploration, bei der der Agent selbst entscheidet, was er liest. Der Kontrast ist: deterministische Pipeline vs. agenten-autonome Suche.
**Vorschlag:** Begriff ersetzen/erläutern: „durch eine fest vorgegebene Schrittfolge gesteuerte Kontextvorbereitung (statt autonomer Agentenexploration)". Konsistent denselben Begriff verwenden – das System dieser Arbeit ist im Kern ebenfalls eine solche prozedurale (5-stufige) Pipeline.

### 16. „Lösungsrate a[nhebt]" – Was ist die Lösungsrate?
> *„Was ist die ‚Lösungsrate'?"*

**Antwort:** Anteil der Aufgaben (Issues), die ein System erfolgreich löst – konkret bei SWE-bench: Anteil der Issues, bei denen der generierte Patch alle zugehörigen fail-to-pass-Tests besteht (= resolve rate / % resolved).
**Vorschlag:** Bei Erstnennung definieren: „Lösungsrate (Anteil der Issues, deren generierter Patch alle zugehörigen Tests besteht)". Abgrenzen von „Erstkorrektheit" (eigene Metrik der Arbeit), damit keine Begriffsverwirrung entsteht.

### 17. „AutoCodeRover" – Hatten wir das schon?
> *„Hatten wir AutoCodeRover schon?"*

**Antwort:** Nein. AutoCodeRover wird hier zum ersten und einzigen Mal genannt – als eine der vier Baselines, auf die RepoGraph als Plug-in aufgesetzt wird (RAG, Agentless, AutoCodeRover, SWE-agent). Es ist im Exposé nicht eigenständig eingeführt.
**Vorschlag:** Entweder einen Halbsatz zur Einordnung ergänzen („AutoCodeRover, ein weiterer SE-Agent") oder – falls es für das Argument nicht nötig ist – nur „vier Baselines" schreiben und die Einzelaufzählung weglassen, um keine ungeklärten Begriffe einzuführen.

---

## Seite 6 – Proaktiv vs. reaktiv, Lost-in-the-Middle, statische Dateien

### 18. „priorisieren systematisch Recall über Präzision" – Wie läuft diese Priorisierung ab?
> *„Wie genau kann man sich den Ablauf bei dieser Priorisierung vorstellen?"*

**Antwort:** Es ist keine bewusste „Entscheidung" des Agenten, sondern ein beobachtetes Verhaltensmuster (Li u. a. 2026): Agents rufen lieber zu viel Kontext ab (hoher Recall – um nichts zu verpassen) als gezielt nur das Nötige (Präzision). Konkret: Bei Unsicherheit öffnen sie zusätzliche Dateien/führen weitere Suchen aus, statt sich zu beschränken. Resultat: viel irrelevanter Kontext im Fenster.
**Vorschlag:** Recall/Präzision einmal definieren (Recall = Anteil der tatsächlich relevanten Stellen, die gefunden werden; Präzision = Anteil der gefundenen Stellen, die wirklich relevant sind) und das Muster als empirische Beobachtung kennzeichnen, nicht als aktive Strategie. Formulierung wie „in der Praxis laden Agents eher zu viele als zu wenige Dateien".

### 19. „Lost-in-the-Middle (Liu u. a. 2024)" – Noch gültig? Ist von 2024.
> *„Ist diese Aussage noch gültig? Ist von 2024 …"*

**Antwort:** Teilweise berechtigt. Lost-in-the-Middle (Liu u. a. 2024) ist mit modernen Long-Context-Modellen abgemildert, aber **nicht** verschwunden – aktuelle Benchmarks (z. B. NoLiMa, RULER, 2024/25) zeigen weiterhin deutliche Leistungsabfälle bei langen Kontexten und Information in der Mitte. Das Argument trägt also weiter, sollte aber nicht allein auf der 2024er-Quelle stehen.
**Vorschlag:** Mit einer aktuelleren Long-Context-Degradation-Studie (2025) absichern und vorsichtiger formulieren: „auch wenn neuere Modelle den Effekt abmildern, zeigen aktuelle Untersuchungen weiterhin …". Damit ist der Befund robust gegen den Aktualitätseinwand.

### 20. „Inferenzkosten um mehr als 20 %" – Sind hiermit Token gemeint?
> *„Sind hiermit Token gemeint?"*

**Antwort:** Ja, im Kern. Die +20 % Inferenzkosten (Gloaguen u. a. 2026) rühren primär aus dem erhöhten Token-Verbrauch: AGENTS.md-Dateien blähen den Prompt-Kontext auf → mehr Input-Tokens → höhere API-Kosten.
**Vorschlag:** Direkt verknüpfen: „erhöhen die Inferenzkosten (v. a. durch zusätzlichen Token-Verbrauch) um mehr als 20 %". Das schlägt die Brücke zur Effizienz-Metrik (Token-Verbrauch) der eigenen Evaluation.

---

## Seite 7 – AgentStepper-Studie, MCP, Forschungslücke

### 21. „stieg die Bug-Erkennungsrate" – Wer erkennt die Bugs? Und warum sinnvoll, dass Menschen Bugs in Agenten-Code finden?
> *„Wer erkennt hier die Bugs, der Agent oder der Mensch? Ok, das wird im Satz darunter beantwortet. Aber warum ist das sinnvoll, dass Menschen Bugs in agentischem Code finden, also Code, den sie nicht selbst geschrieben haben?"*

**Antwort:** Der **Mensch** (Entwickler) erkennt die Bugs – unterstützt durch das AgentStepper-Tool. Warum das sinnvoll/notwendig ist: Agenten produzieren zunehmend Code, den am Ende Menschen verantworten, reviewen und in Produktion bringen müssen. Wenn der Agent eine fehlerhafte Lösung liefert, muss der Entwickler nachvollziehen können, *warum*, um sie zu korrigieren oder zu verwerfen – sonst bleibt agentischer Code eine Black Box ohne menschliche Kontrolle. Genau das ist die Motivation für die Transparenz-Dimension (HF3) dieser Arbeit: nicht der Agent, sondern der Mensch trifft die finale Qualitätsentscheidung.
**Vorschlag:** Diesen „Warum"-Gedanken explizit ins Exposé aufnehmen – er ist die Kernbegründung für HF3. Formulierung etwa: „Da Entwickler agentisch erzeugten Code verantworten und freigeben müssen, ist ihre Fähigkeit, Fehler vor/nach der Ausführung zu erkennen, entscheidend für den produktiven Einsatz." Das verankert die Transparenz-Forschungsfrage in der Praxisrelevanz.

### 22. „Tool-Calls" – ?
> *„?"*

**Antwort:** Tool-Call = ein Werkzeugaufruf des Agenten: das LLM ruft eine ihm bereitgestellte Funktion auf (z. B. Datei lesen, im Repo suchen, Test ausführen, Shell-Befehl). Die Folge solcher Aufrufe bildet die Ausführungstrajektorie.
**Vorschlag:** Begriff bei Erstnennung erläutern oder im Grundlagenkapitel (agentische Architekturen / ReAct, Werkzeugnutzung) definieren. Auch `get_context` ist ein solcher Tool-Call (via MCP) – Bezug herstellen.

### 23. „Die Pfade dienen der Modellqualität, nicht der Entwicklerkontrolle." – Was bedeutet Modellqualität, warum dadurch Entwickler kontrolliert?
> *„Ich verstehe nicht. Was bedeutet hier Modellqualität und warum soll der Entwickler dadurch kontrolliert werden?"*

**Antwort:** Hier liegt ein Missverständnis durch die Formulierung vor. Gemeint ist ein **Kontrast in der Zweckbestimmung** der Entscheidungspfade:
- Bei KGCompass (B. Yang u. a. 2025) werden Graph-Pfade in den Prompt eingebettet, **damit das LLM bessere Patches erzeugt** → Zweck = Verbesserung der *Modell-Ausgabequalität* („Modellqualität").
- Sie sind **nicht** dafür gedacht, dass der **Entwickler** die Auswahl prüft/steuert → „nicht der Entwicklerkontrolle".

„Entwicklerkontrolle" = die Möglichkeit des Entwicklers, die Kontextauswahl zu *bewerten und zu korrigieren* (nicht: der Entwickler wird kontrolliert!). Genau diese Lücke (Pfade existieren, dienen aber nur dem Modell, nicht dem Menschen) ist der Ansatzpunkt für HF3.
**Vorschlag:** Umformulieren, um die missverständliche „Entwicklerkontrolle" zu entschärfen: „Die Pfade sollen dort die *Patch-Qualität des Modells* verbessern; sie sind nicht dafür gedacht, dass der *Entwickler* die Kontextauswahl prüft und korrigiert. Genau diese Inspektions- und Korrekturmöglichkeit für den Menschen untersucht die vorliegende Arbeit." Begriff „Entwicklerkontrolle" durch „Inspektions-/Korrekturmöglichkeit für Entwickler" ersetzen.

### 24. „seinen get_context-Aufruf" – Was ist der get_context-Aufruf?
> *„Was ist der ‚get_context'-Aufruf?"*

**Antwort:** `get_context(task)` ist das zentrale MCP-Tool des Living-Knowledge-Graph-Servers. Der Agent ruft es mit der Aufgabenbeschreibung auf; das System durchläuft die 5-stufige Context-Assembly-Pipeline (Entity Extraction → Seed-Lookup → Graph-Traversal → Ranking → Serialisierung) und liefert einen Kontext-Block samt Entscheidungspfad zurück (ausführlich auf S. 11/12).
**Vorschlag:** An dieser Stelle (S. 7) wird `get_context` erstmals genannt, bevor es auf S. 11/12 definiert wird. Entweder einen Kurz-Halbsatz ergänzen („das zentrale Tool des Systems, das proaktiv Kontext liefert") oder einen Vorwärtsverweis setzen („siehe Abschnitt 4").

### 25. „Proaktive Kontextbereitstellung schlägt reaktive Exploration […]" – Solche Aussagen sind im wiss. Diskurs schwierig
> *„Solche Aussagen sind schwierig in einem wissenschaftlichen Diskurs."*

**Antwort:** Zustimmung. Die Passage formuliert apodiktisch („schlägt", „hat") und stellt aus mehreren Einzelstudien (z. T. anderer Kontext: SWE-bench-Benchmarks) eine generelle Wahrheit her. Das ist eine Übergeneralisierung.
**Vorschlag:** Abschwächen und an Evidenz binden: statt „schlägt" → „deutet darauf hin / zeigt in den untersuchten Benchmark-Settings, dass …". Quellen direkt anhängen und den Geltungsbereich nennen (Benchmark-Evaluationen, nicht Feldeinsatz). Genau dieser Vorbehalt ist ja die eigene Forschungslücke – das stärkt das Argument sogar: „Ob das auch im realen Feldeinsatz gilt, ist offen." Diesen Übergang explizit machen.

### 26. „mit vorgefertigten Testsuiten." – Was bedeutet das?
> *„Was genau bedeutet das?"*

**Antwort:** SWE-bench-Aufgaben bringen pro Issue einen festen, vorab definierten Satz an Tests mit (die fail-to-pass-Tests). Der Erfolg wird automatisch daran gemessen, ob der generierte Patch genau diese Tests besteht. „Vorgefertigt" = die Tests existieren schon im Benchmark, sind eingefroren und Teil des Datensatzes.
**Vorschlag:** Präzisieren: „mit vorgefertigten Testsuiten (jedem Issue ist ein fixer Satz an Tests zugeordnet, an dem der Erfolg automatisch gemessen wird)". Das ist wichtig, weil der Kontrast zu Hochschulprojekten genau hier liegt: *keine* vollständige Testabdeckung → der Erfolg lässt sich dort nicht so einfach automatisch messen (siehe nächster Kommentar).

### 27. „kontinuierlich synchronisierter Wissensgraph lässt sich dort nicht messen" – Was ist das, warum dort nicht messbar?
> *„Was ist ein kontinuierlich synchronisierter Wissensgraph? Warum lässt der sich dort nicht messen?"*

**Antwort:**
- *Kontinuierlich synchronisierter Wissensgraph* = der „Living"-Teil des Artefakts: Der Graph wird nach jedem Git-Commit automatisch inkrementell aktualisiert und bildet damit immer den aktuellen Codestand ab (S. 11, Schicht 2).
- *Warum nicht auf SWE-bench messbar:* SWE-bench besteht aus **eingefrorenen Codebase-Snapshots** – der Code ändert sich während einer Aufgabe nicht. Der zentrale Mehrwert „der Graph hält mit einer sich aktiv verändernden Codebase Schritt" kann auf einem statischen Snapshot per Definition gar nicht zur Geltung kommen. Man bräuchte eine *sich entwickelnde* Codebase → daher der Feldeinsatz auf laufenden Hochschulprojekten.
**Vorschlag:** Diesen Zusammenhang als Begründung der Methodenwahl klar herausstellen: „Da SWE-bench mit eingefrorenen Snapshots arbeitet, kann der Mehrwert der kontinuierlichen Synchronisation dort prinzipiell nicht auftreten – er zeigt sich nur an aktiv weiterentwickelten Projekten." Das rechtfertigt direkt die Wahl der Hochschulprojekte als Evaluationsumgebung.

---

## Seite 8 – Forschungslücke & Forschungsfragen

### 28. „Hochschulprojekte […]" – Welche, und warum Hochschulprojekte?
> *„Welche Hochschulprojekte sind gemeint und warum Hochschulprojekte?"*

**Antwort:** Gemeint sind die laufenden, aktiv betreuten Python-/TypeScript-Projekte des Betreuers (S. 14, „Versuchsumgebungen"). **Warum:** Sie bieten (1) realistische, nicht konstruierte Aufgaben, (2) eine sich aktiv weiterentwickelnde Codebase (Voraussetzung, um den Living-Aspekt zu testen, siehe Kommentar 27), (3) verfügbare Studierende als Probanden und (4) Zugang/Genehmigung über den Betreuer. Genau diese Feld-Dimension (echte Entwickler, echtes Projekt) fehlt in den Benchmark-Studien.
**Vorschlag:** Die konkrete Projektnennung von S. 14 nach vorne ziehen oder verweisen, und die vier Gründe explizit nennen. Falls die Projekte benannt werden dürfen: Namen/Charakteristika (Sprache, Größe, Domäne) im Methodenkapitel angeben – das stärkt die externe Validität.

### 29. „Wissensgraph" – Was genau ist das?
> *„Was genau ist ein ‚Wissensgraph'?"*

**Antwort:** Ein Wissensgraph ist eine graphbasierte Wissensrepräsentation: **Knoten** = Entitäten (hier: Dateien, Funktionen, Klassen, Schemata, Testfälle), **Kanten** = typisierte Beziehungen zwischen ihnen (hier: IMPORTS, CALLS, EXTENDS, DEFINED_IN, TESTS, DOCUMENTS). Im Kontext dieser Arbeit also ein strukturiertes Abbild der Codebase als Graph (gespeichert in Neo4j).
**Vorschlag:** Wissensgraph (und Graphdatenbank/Neo4j) im **Grundlagenkapitel** sauber definieren – der Begriff ist zentral und taucht im ganzen Exposé auf. Im Stand-der-Forschung dann nur noch verwenden, nicht erstmals erklären müssen.

### 30. „Eine inkrementelle, commit-getriebene Aktualisierung fehlt." – Warum wäre das wichtig?
> *„Warum wäre das wichtig?"*

**Antwort:** Weil ohne inkrementelle Aktualisierung der Graph entweder (a) veraltet (falscher Kontext → Agent halluziniert auf altem Stand) oder (b) bei jeder Aufgabe komplett neu gebaut werden müsste (teuer, langsam, bei großen/aktiven Repos unpraktikabel). „Commit-getrieben + inkrementell" bedeutet: nach jedem Commit werden nur die geänderten Knoten/Kanten neu geparst → der Graph bleibt günstig und dauerhaft aktuell. Das ist die technische Voraussetzung für den realistischen Feldeinsatz auf sich ständig ändernden Projekten.
**Vorschlag:** Die Wichtigkeit explizit benennen: „Ohne inkrementelle Aktualisierung wäre der Graph entweder veraltet oder müsste kostspielig komplett neu gebaut werden – beides verhindert den praktischen Einsatz auf aktiv entwickelten Projekten." Zugleich beim Leser klarstellen, dass dies (HF1) eine *Architektur-Voraussetzung* ist, nicht selbst Evaluationsgegenstand.

### 31. „Living Knowledge Graph" – Unterschied zu „Wissensgraph", oder dasselbe?
> *„Wie unterscheidet sich ein ‚Living Knowledge Graph' von einem Wissensgraphen oder ist das dasselbe?"*

**Antwort:** Ein Living Knowledge Graph **ist** ein Wissensgraph – mit der Zusatzeigenschaft „living": Er wird nach jedem Commit automatisch inkrementell synchronisiert und bildet daher permanent den aktuellen Codestand ab. Ein „normaler" (statischer) Code-Wissensgraph wird einmalig (oder zum Aufgabenzeitpunkt) gebaut und veraltet danach. Das „Living" ist genau der Beitrag, der bestehende graphbasierte Ansätze (RepoGraph, KGCompass – die nur zum Snapshot bauen) erweitert.
**Vorschlag:** Diese Abgrenzung einmal explizit definieren (am besten bei der Einführung des Artefakts, S. 10 hat es ansatzweise): „Living Knowledge Graph = Wissensgraph + kontinuierliche, commit-getriebene Synchronisation." Konsistente Begriffsnutzung: „Wissensgraph" für das allgemeine Konzept, „Living Knowledge Graph" für das eigene Artefakt.

### 32. „von Studierenden" – Warum Studierende und nicht „Entwicklern"?
> *„Warum ‚von Studierenden' und nicht von ‚Entwicklern'?"*

**Antwort:** Weil die Probanden in dieser Evaluation konkret **Studierende** sind, die an den Hochschulprojekten mitarbeiten (verfügbar, betreut, realistisch heterogener Erfahrungsstand). „Entwickler" wäre die allgemeinere Berufsgruppe; die Arbeit testet aber speziell mit studentischen Entwicklern. Das ist zugleich eine **Limitation** der externen Validität (Studierende ≠ erfahrene Profis).
**Vorschlag:** Konsequent terminologisch trennen: Wenn es um die *konkrete Probandengruppe* geht → „Studierende"; wenn um die *allgemeine Zielgruppe/Rolle* → „Entwickler". An einer Stelle klarstellen, dass die Probanden Studierende sind und dies eine bewusste, aber zu reflektierende Einschränkung darstellt (gehört in „Validität und Abgrenzung").

### 33. „explizite Graph-Pfad-Begründung im MCP-Response" – Was ist das, welcher MCP-Response von wem?
> *„Was ist denn eine Graph-Pfad-Begründung und welche MCP-Response von wem ist gemeint?"*

**Antwort:**
- *MCP-Response:* die Antwort, die der Living-Knowledge-Graph-**Server** auf den `get_context`-Aufruf des Agenten zurückschickt (über das Model Context Protocol). Also: Server → Agent.
- *Graph-Pfad-Begründung (Entscheidungspfad):* In dieser Antwort steht zu jedem ausgewählten Code-Knoten, **über welche Graph-Kante** er erreicht und **warum** er aufgenommen wurde – z. B. „`checkout()` aufgenommen via CALLS-Kante von `cart.ts`, Zeile 42" (S. 12). So wird die Kontextauswahl nachvollziehbar.
**Vorschlag:** Bei der Erstnennung (S. 8) kurz auflösen: „in der Antwort des Servers an den Agenten (MCP-Response) wird zu jedem gelieferten Code-Stück angegeben, über welchen Graph-Pfad es ausgewählt wurde". Verweis auf das Beispiel in Abschnitt 4 setzen. Erneut hilft die Akteurs-Klärung aus Kommentar 9.

### 34. „Code-Graph a[n sich]" – Wieder ein anderer Graph oder Synonym?
> *„Ist das noch einmal ein anderer Graph oder sind das alles Synonyme?"*

**Antwort:** Synonym/Oberbegriff – kein neuer Graph. „Code-Graph" meint hier dasselbe Konzept (graphbasierte Repräsentation von Code) wie „Wissensgraph"/„Code-Wissensgraph". Der Satz sagt: Der Beitrag liegt nicht im Code-Graph *als solchem* (den haben RepoGraph/KGCompass schon belegt), sondern im Drei-Wege-Vergleich (HF2) und der Retrieval-Transparenz (HF3).
**Vorschlag:** Begriffsvielfalt vereinheitlichen. Im ganzen Exposé tauchen auf: „Wissensgraph", „Living Knowledge Graph", „Code-Graph", „Repository-Graph", „Code-Wissensgraph". **Empfehlung:** zwei feste Begriffe definieren und durchhalten – (1) „Code-Wissensgraph" als allgemeines Konzept, (2) „Living Knowledge Graph" als das eigene Artefakt – und „Code-Graph" / „Repository-Graph" nur dort verwenden, wo es Eigennamen fremder Systeme sind. Eine Begriffstabelle im Grundlagenteil hilft.

### 35. „(HF2)" – ??
> *„??"*

**Antwort:** HF2 = Forschungsfrage 2 (Effizienz), formal definiert auf S. 8. Hier auf S. 8 wird sie referenziert, **bevor** die Liste der Forschungsfragen direkt darunter steht – daher die Irritation des Profs.
**Vorschlag:** Die Abkürzung HF1/HF2/HF3 erst **einführen** (in der Forschungsfragen-Liste) und **dann** referenzieren. Im Fließtext der Forschungslücke entweder ausschreiben („der empirische Drei-Wege-Vergleich (siehe Forschungsfrage HF2)") oder die Reihenfolge so umstellen, dass die HF-Definitionen vor ihrer ersten Verwendung stehen.

### 36. „Retrieval-Transparenz" – ??
> *„??"*

**Antwort:** Retrieval-Transparenz = die Nachvollziehbarkeit der **Kontextauswahl**: Der Entwickler kann sehen und verstehen, *welche* Code-Stellen *warum* (über welchen Graph-Pfad) abgerufen (retrieved) wurden – und kann sie vor der Agentausführung bewerten/korrigieren. „Retrieval" = das Abrufen/Auswählen relevanter Kontextstücke. Es ist die eigenständige Evaluationsdimension von HF3.
**Vorschlag:** Begriff bei Erstnennung definieren (er ist einer der beiden Kernbeiträge!). Formulierung: „Retrieval-Transparenz – die Nachvollziehbarkeit, welche Code-Stellen warum in den Kontext aufgenommen wurden". Klar abgrenzen von der allgemeinen „Agenten-Transparenz" (Ausführungs-Trajektorien à la AgentStepper): Diese Arbeit fokussiert speziell die *Transparenz der Kontextauswahl vor* der Ausführung.

### 37. „(HF3)" – ??
> *„??"*

**Antwort:** HF3 = Forschungsfrage 3 (Retrieval-Transparenz), definiert auf S. 9. Gleiche Ursache wie Kommentar 35: Referenz vor Definition.
**Vorschlag:** Siehe Kommentar 35 – HF-Kürzel erst einführen, dann verwenden.

### 38. „Die inkrementelle Git-Synchronisation ist Voraussetzung […], nicht selbst Forschungsgegenstand." – Satz unverständlich
> *„Verstehe den Satz nicht."*

**Antwort:** Der Satz grenzt den Forschungsbeitrag ab. Aussage: Die technische Fähigkeit, den Graphen nach jedem Commit aktuell zu halten (HF1), ist **notwendig**, damit man das System überhaupt im realen Feld (aktiv entwickelte Projekte) einsetzen kann – aber sie ist **kein** wissenschaftlich zu *evaluierender* Beitrag. Sie wird gebaut (Engineering), nicht empirisch gemessen. Empirisch untersucht (gemessen) werden nur HF2 (Effizienz) und HF3 (Transparenz).
**Vorschlag:** Umformulieren in zwei klare Sätze: „Die inkrementelle Git-Synchronisation (HF1) ist eine technische Voraussetzung für den Feldeinsatz auf aktiv entwickelten Projekten. Sie wird implementiert, aber nicht selbst empirisch evaluiert – die Evaluation konzentriert sich auf Effizienz (HF2) und Transparenz (HF3)." Das macht die Abgrenzung „Engineering-Voraussetzung vs. empirischer Forschungsgegenstand" explizit.

### 39. „bestehende Systeme" – Welche Systeme?
> *„Welche Systeme?"*

**Antwort:** Die zuvor besprochenen graphbasierten/agentischen Kontextsysteme, v. a. RepoGraph (Ouyang u. a. 2025) und KGCompass (B. Yang u. a. 2025), aber auch Agentless (Xia u. a. 2024) und CodeScout (Suri u. a. 2026). Gemeint: alle bauen/analysieren das Repository **zum Aufgabenzeitpunkt** und haben keine kontinuierliche, commit-getriebene Synchronisation.
**Vorschlag:** Konkret benennen: „bestehende Systeme (etwa RepoGraph, KGCompass, Agentless), die das Repository nur zum Aufgabenzeitpunkt analysieren". So ist der Kontrast zur „Living"-Eigenschaft eindeutig belegt.

### 40. „Diese Frage wird durch die Systemarchitektur beantwortet (Schicht 2: inkrementeller Git-Hook) und ist nicht Gegenstand der empirischen Evaluation."
> *(markiert, ohne Textkommentar)*

**Antwort:** Der Prof hat die Stelle nur markiert (vermutlich derselbe Punkt wie Kommentar 38: HF1 ist Architektur, nicht Evaluation). Inhaltlich: HF1 (Synchronisation) wird durch die Implementierung von Schicht 2 (Git-post-commit-Hook, inkrementelle Aktualisierung) gelöst und nicht durch ein Experiment beantwortet.
**Vorschlag:** Konsistenz herstellen mit Kommentar 38 – an beiden Stellen dieselbe klare Abgrenzung formulieren. Ggf. überlegen, ob HF1 überhaupt als „Forschungs**frage**" geführt werden sollte oder besser als „Designanforderung/technische Voraussetzung" (eine reine Engineering-Frage als HF zu deklarieren, lädt zu genau dieser Rückfrage ein). Das wäre eine substanzielle Überlegung, die der Prof womöglich andeuten wollte.

### 41. „HF2 – Effizienz" → **REVIEW STOPPED**
> *„REVIEW STOPPED"*

**Antwort:** Der Prof hat das Review an dieser Stelle (Beginn von Kapitel 3, Forschungsfragen, S. 8) **abgebrochen**. Das ist kein inhaltlicher Kommentar, sondern ein Hinweis: Ab hier wurde nicht weiter gelesen/kommentiert.
**Mögliche Gründe (Interpretation):** Entweder Zeitgründe, **oder** – wahrscheinlicher – die vielen offenen Begriffs- und Klarheitsfragen in den Kapiteln 1–2 haben ihn veranlasst, erst eine überarbeitete Fassung abzuwarten, bevor er die Forschungsfragen/Methodik bewertet.
**Vorschlag / nächste Schritte:**
1. Zuerst alle obigen Begriffs- und Klarheitspunkte (Kommentare 1–40) in den Kapiteln 1–2 abarbeiten – insbesondere die durchgehende **Terminologie-Vereinheitlichung** (System/Agent/Entwickler; Wissensgraph/Code-Graph/Living Knowledge Graph; HF-Kürzel erst definieren) und die **Aktualität der Zahlen** (Peng 2023, Claude 2, Lost-in-the-Middle).
2. Ein **Grundlagenkapitel** mit Definitionen (Kontext, RAG, Wissensgraph, Tool-Call, MCP, Recall/Präzision, Reasoning) vorziehen bzw. ergänzen – das erschlägt einen Großteil der „Was ist X?"-Fragen vorab.
3. Überarbeitete Fassung mit kurzem Änderungsüberblick erneut vorlegen und gezielt um Feedback zu Kapitel 3 (Forschungsfragen/Hypothesen) und der Methodik bitten, die er noch nicht reviewt hat.

---

## Querschnitt-Themen (übergreifende Muster aus dem Review)

Mehrere Kommentare adressieren dieselben Grundprobleme. Wenn du diese drei Dinge zentral löst, sind ~25 der 41 Punkte miterledigt:

1. **Begriffe vor Verwendung definieren** (Kommentare 4, 6, 11, 13, 16, 18, 22, 29, 33, 36): Ein Grundlagenkapitel + Definition bei Erstnennung. Schwammige Buzzwords („komplexes Reasoning") konkretisieren.
2. **Konsequente Terminologie / Akteure** (Kommentare 8, 9, 10, 31, 32, 34): klare, durchgehaltene Begriffe für **Entwickler ↔ Agent (Claude Code) ↔ System (Living Knowledge Graph/MCP-Server)** und für die verschiedenen „Graph"-Bezeichnungen.
3. **Aktualität & wissenschaftliche Vorsicht** (Kommentare 1, 3, 19, 25): veraltete Zahlen (Claude 2, Peng 2023) einordnen/ergänzen, apodiktische Aussagen abschwächen und an Evidenz/Geltungsbereich binden.
