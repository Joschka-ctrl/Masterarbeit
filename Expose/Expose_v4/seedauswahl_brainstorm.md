# Seedknoten-Auswahl: Brainstorm und Implementierungsplan

Stand: 2026-07-22. Fokus: System-Implementierung im MCP-Server (`retrieval.js`).
Geerdet an Exposé v4 (`sections/01_problemstellung.tex`) und der aktuellen Seed-Logik.

---

## 0. Ausgangslage: Was die Seed-Auswahl heute tut

`stageSeeds` (retrieval.js:331) verbindet drei Signalzweige und ist grundsätzlich verteidigbar:

- **Drei Signalzweige** — semantisch (Embedding-Kosinus auf File/Function/Class),
  lexikalisch (Lucene), exakt (Namensmatch) — per **Reciprocal Rank Fusion** (`fuseSeeds`, :230)
  zusammengeführt. Robust gegen die unvergleichbaren Score-Skalen von Kosinus vs. Lucene.
- **Struktureller Boost** (`seedBoost`, :179): Kosinus multipliziert mit `commitCount` und `inDegree`.
- **`seedCap = 7`**: harte Präzisionsgrenze.
- **Trace pro Kandidat** (:415) mit `rejectionReason` — trägt die Erklärbarkeit gegen die
  Blackbox-Systeme aus Strang 1.

---

## 1. WICHTIG: `seedBoost` ist ein dokumentiertes Anti-Pattern (Hub Bias)

`retrieval.js:172` sagt im Docstring wörtlich: *„so well-established **hub files** rank higher"*.
Die Formel (:179) lautet:

```js
function seedBoost(row, wCommit, wInDegree) {
  return (row.score ?? 0.5)
    * (1 + wCommit   * Math.log1p(row.props.commitCount ?? 0))
    * (1 + wInDegree * Math.log1p(row.props.inDegree   ?? 0));
}
```

Der Multiplikator zieht Knoten mit hohem Import-`inDegree` (viele eingehende Kanten) hoch.

Genau das nennt die aktuelle KG-RAG-Literatur **Hub Bias**: Seed-Auswahl per
Embedding-Ähnlichkeit, die zusätzlich auf hohen Knotengrad hochgewichtet, konvergiert auf
*high-degree hub entities / supernodes*. Solche Knoten wirken zu vielen Queries semantisch
ähnlich und schleusen **Rauschen** ein — mit messbar schlechterer Retrieval-Diversität und
-Genauigkeit (arXiv 2507.03226; arXiv 2602.01965).

**Kernkonflikt:** Das kollidiert frontal mit dem ContextBench-Argument der Arbeit (Präzision
statt Breite, Exposé-Abschnitt „Kontext als Erfolgsfaktor und Engpass"). Ein Gutachter, der
die Literatur kennt, findet das sofort.

**Umdeutung (der eigentliche Punkt):** Das ist kein Problem, sondern das beste HITL-Argument
der Arbeit — richtig gedreht. Statt die Verzerrung zu verstecken oder das Embedding-Retrieval
zu verwerfen (wie pusch2026hitlkgqa), wird der strukturelle Boost zum **transparenten, vom
Nutzer steuerbaren Parameter**. Das ist exakt die Positionierung aus der Abgrenzung (Exposé
Zeile 119): „die Opazität wird nicht durch Verzicht auf Embedding-Retrieval beantwortet,
sondern dadurch, dass das Embedding-Retrieval transparent und für den Entwickler modifizierbar
gemacht wird." Der Hub-Bias-Fund ist damit nicht nur ein Bugfix, sondern eine
Argumentationsschiene für Kapitel „Abgrenzung und Beitrag".

### Der Konflikt im Detail

Kurzform: **Der eigene Seed-Ranking-Mechanismus tut genau das, was das zentrale
Literatur-Argument der Arbeit als Fehler brandmarkt.**

**Seite A — das Argument im Exposé.** Die gesamte Motivation stützt sich auf ContextBench
(li2026contextbench): Coding-Agents rufen *zu breit* ab, ziehen Rauschen rein und werden dadurch
ungenau. Die vorgeschlagene Lösung verkauft sich über **Präzision** — gezielt die relevanten
Knoten, nicht möglichst viele.

**Seite B — was der Code tatsächlich tut.** `seedBoost` (retrieval.js:179) nimmt die semantische
Ähnlichkeit eines Kandidaten und multipliziert sie mit seinem `inDegree` (Zahl der eingehenden
Import-Kanten). Der Docstring sagt es offen: *„so well-established hub files rank higher"*. Knoten
mit vielen Verbindungen werden also systematisch nach oben gezogen.

**Warum das kollidiert.** Die KG-RAG-Literatur (arXiv 2507.03226, arXiv 2602.01965) beschreibt
genau diesen Mechanismus als **Hub Bias** und als Fehler:

- Ein Knoten mit hohem Grad (zentrale Utility-Datei, Basisklasse, häufig importiertes Modul) ist
  mit *vielen* Themen verbunden.
- Dadurch wirkt er zu *fast jeder* Anfrage semantisch halbwegs ähnlich.
- Gewichtet man zusätzlich auf den Grad hoch, landen solche generischen Hub-Knoten fast immer in
  den Seeds — **unabhängig davon, ob sie für die konkrete Aufgabe relevant sind.**
- Ergebnis: mehr Rauschen, weniger Diversität, schlechtere Präzision.

Das ist wörtlich das Gegenteil des ContextBench-Versprechens. Die Arbeit kritisiert „zu breiter,
verrauschter Abruf" — und der Boost produziert strukturell genau solches Rauschen, nur an einer
anderen Stelle der Pipeline (Seed-Ranking statt Agenten-Exploration).

**Warum das brisant ist.** Ein Gutachter, der die KG-RAG-Literatur kennt, sieht den Widerspruch
sofort: „Sie werfen bestehenden Systemen mangelnde Präzision vor, aber Ihr eigener Seed-Boost
bevorzugt Hub-Knoten — das ist der bekannte Hub Bias, der die Präzision senkt." Ohne Antwort
untergräbt das die Kernmotivation.

**Warum es trotzdem der eigene Vorteil ist.** Bei einem *rein automatischen* System wäre das ein
echter Designfehler. Bei einem HITL-System nicht — weil der Mensch dazwischen steht:

- `inDegree`-Boost per Default auf 0 (Verzerrung standardmäßig weg).
- Boost als **sichtbaren, verstellbaren Regler** in der Review-UI, mit offengelegtem Score pro
  Knoten.
- Damit wird aus der Schwäche ein Beleg für die These: Statt das Embedding-Retrieval zu verwerfen
  (wie pusch2026hitlkgqa), werden seine Verzerrungen **transparent und korrigierbar**. Der Mensch
  sieht, dass ein Hub-Knoten nur wegen seines Grades oben steht, und kann ihn abwählen.

Fazit: Der Konflikt entwertet ein rein automatisches System — und wird zur Existenzberechtigung
eines Human-in-the-Loop-Systems.

---

## 2. Was die Literatur für die Seeds hergibt

- **KGCompass** (yang2025kgcompass): 89,7 % der lokalisierten Bugs stehen nicht explizit im
  Issue-Text, nur über Mehrhop-Pfade erreichbar. → **Seeds müssen nicht vollständig sein — die
  Traversierung holt den Recall zurück.** Seeds sollen präzise „Absprungrampen" sein.
- **ContextBench** (li2026contextbench): Agenten rufen zu breit ab. → Spricht gegen einen
  großzügigen Cap; Präzision zuerst.
- **CodeScout** (suri2026codescout): +20 % relativ allein durch Voranreicherung der
  Aufgabenbeschreibung. → Query-Engineering vor der Seed-Suche ist ein menschlich bedienbarer
  Hebel.
- **Agentless** (xia2024agentless): hierarchische Lokalisierung Datei → Funktion → Zeile. →
  Granularitätsfrage: File- vs. Function-Seeds.
- **SweRank** (arXiv 2505.07849): retrieve-and-rerank; Lokalisierung auf File/Module/Function;
  **File-Score = max über enthaltene Funktionen**; Metrik Acc@k. Dense + sparse + Reranker gilt
  als aktueller Standard.
- **SWE-Debate** (arXiv 2507.23348): composite score aus semantischer Ähnlichkeit + struktureller
  Wichtigkeit, aber für **Lokalisierungsketten (Traversierung)**, nicht für rohe Seeds.
- **pusch2026hitlkgqa / LinkQ**: Mensch formt die Anfrage, nicht die Knotenmenge. Diese Arbeit
  kuratiert den Abruf selbst — der Seed-Schritt ist die Naht, an der sich beides trifft.

**Zentrale Hypothese für die Studie:** Die semantische Lücke „Issue-Prosa ↔ Code-Identifier"
ist am Seed-Schritt am größten. Genau dort ist der menschliche Beitrag am erklärbarsten
begründbar — schärfer als bei Hops oder Ranking.

---

## 3. Achse 1 — Signal & Boost

Best Practice heute = **dense + sparse + Reranker**. Das RRF deckt dense+sparse (semantisch +
lexikalisch) bereits ab; es fehlt der präzise Rerank-Schritt, und `seedBoost` ist ein
heuristischer Reranker, der in die falsche Richtung (Hubs) zieht.

Optionen (implementierbar):

1. **`wInDegree` default auf 0, aber als transparenten Slider exponieren.** Minimal-invasiv,
   `resolveParams` (:291) hält die Knobs schon. Verzerrung standardmäßig weg, Steuerung beim
   Nutzer. *Empfohlen, sofort.*
2. **Strukturelles Signal vom Seed- in den Traversierungs-Schritt verschieben** (SWE-Debate-Muster).
   Saubere Trennung: Seeds = reine Relevanz, Struktur wirkt erst im Hop-Ranking
   (`stageRanking`, :547). *Empfohlen als Architektur-Bereinigung.*
3. **Echter Cross-Encoder-Rerank** der Top-N nach der RRF-Fusion (SweRank-Stil). Präziser, aber
   schwerer (Modell-Dependency). *Stretch-Goal.*

## 4. Achse 2 — Granularität & Cap

`stageSeeds` (:351) feuert semantische Suche parallel auf File-, Function- und Class-Embeddings
und fusioniert alles in eine Liste. Problem: eine Datei und ihre eigene Funktion konkurrieren um
dieselben 7 Cap-Slots — Redundanz frisst die Präzisionsgrenze.

- **Parent/Child-Kollaps in `fuseSeeds`**: taucht Function-Seed und enthaltende File auf, ein
  Cap-Slot, File-Score = max der Funktion (SweRank-Muster).
- **seedCap = 7 klein lassen, aber als Slider zeigen.** KGCompass rechtfertigt das (Recall kommt
  über Hops zurück). HITL-Story: „der Mensch weitet den Trichter nur bei Bedarf."

## 5. Achse 3 — Menschlicher Eingriff (Architektur ist schon bereit)

Der Kommentar bei :445 spricht von „possibly user-pruned seed set" — die Pipeline erwartet den
Eingriff zwischen `stageSeeds` und `stageTraversal` bereits. `seedCandidates` (:415) trägt jeden
abgelehnten Kandidaten mit `rejectionReason`.

1. **Abwählen** präsentierter Seeds (Pruning vor Traversierung) — Datenpfad existiert. *Sofort.*
2. **Abgelehnten Kandidaten hochholen** — der Trace listet Rejects samt Grund; ein Klick
   reaktiviert ihn. Fast kostenlos, hohe Sichtbarkeit. *Sofort.*
3. **Manuelles Hinzufügen per Namenssuche** — der Knoten, den Embedding + Lexik verfehlt haben.
   Braucht einen kleinen Lookup-Endpoint, ist aber der **stärkste Neuheitsbeitrag**: der Mensch
   schließt die Vokabellücke Issue-Prosa ↔ Identifier. raggy/LinkQ/pusch bieten das so nicht
   (die formen die Anfrage, nicht die Knotenmenge). *Bauen.*
4. **Re-Run mit angepassten Parametern** (`threshold`, `seedCap`, `wInDegree`) — `resolveParams`
   nimmt sie schon entgegen. Braucht ohnehin die Boost-Slider aus Achse 1.

---

## 6. Roter Faden für die Implementierung

Ein einziger Umbau bedient alle drei Achsen: **`seedBoost` von „Hubs hochziehen" zu neutralem
Default umstellen und die Gewichte (`wInDegree`, `wCommit`, `threshold`, `seedCap`) als
transparente, re-run-fähige Knobs in die Review-UI ziehen.** Damit ist die Hub-Bias-Kritik
neutralisiert, der Cap steuerbar und der Parameter-Eingriff geliefert — alles gestützt auf
`resolveParams`, das die Werte bereits durchreicht.

Nächste Schritte (offen):
- (a) `seedBoost`/`fuseSeeds`-Umbau als konkreten Diff skizzieren.
- (b) Lookup-Endpoint für „manuelles Seed-Hinzufügen" entwerfen.

---

## Quellen

- Efficient Knowledge Graph Construction and Retrieval from Unstructured Text for Large-Scale
  RAG Systems — arXiv 2507.03226 — Hub-Bias bei Seed-Auswahl.
  https://arxiv.org/html/2507.03226v2
- Breaking the Static Graph: Context-Aware Traversal for Robust Retrieval-Augmented Generation —
  arXiv 2602.01965 — Hub-Bias-Mitigation, Degree-Normalisierung. **(WICHTIG)**
  https://arxiv.org/pdf/2602.01965
- SweRank: Software Issue Localization with Code Ranking — arXiv 2505.07849 — Granularität
  file/module/function, retrieve-and-rerank, File-Score = max über Funktionen.
  https://arxiv.org/abs/2505.07849
- SpIDER: Spatially Informed Dense Embedding Retrieval for Software Issue Localization —
  arXiv 2512.16956 — dichte Retrieval-Abdeckung für Localization.
  https://arxiv.org/html/2512.16956
- SWE-Debate: Competitive Multi-Agent Debate for Software Issue Resolution — arXiv 2507.23348 —
  composite score (semantisch + strukturell) für Traversierungsketten.
  https://arxiv.org/pdf/2507.23348
- Advanced RAG Techniques (Neo4j) — dense + sparse + Reranker als Standard.
  https://neo4j.com/blog/genai/advanced-rag-techniques/
