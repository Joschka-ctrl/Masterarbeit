# Plan FF5-Messung, einfach erklärt (23.11.)

**Stand 23.11., 16:50:** Neu geschrieben, nur als neue Dateien. Keine bestehende Datei
des Werkzeug-Repos ist geändert. Die Dateien sind:
`eval/ff5/context-render.js` (Kopie des Renderers mit Kantenrichtung und angeglichener
flacher Fassung), `eval/ff5/handover-check.js` (Prüfung Zeile für Zeile),
`eval/ff5/freeze-handover.js` (Blöcke bauen, prüfen, Manifest), `eval/ff5/agent-trace.js`
(Kopie des Messskripts mit `--handover`), dazu `tests/test-ff5-handover-check.js` (20 Tests)
und `tests/test-ff5-agent-trace.js` (342 Tests). Alle grün. Offen: Prüfung 2 und 3 auf dem
neuen Code, dann Prüfung 4 und 5 auf dem anderen Rechner nach der Studiensitzung.
Aufruf dort: `node eval/ff5/freeze-handover.js ...` und `node eval/ff5/agent-trace.js --handover ...`.

**Vorher, 23.11. abends:** Der Code für die Messung war gebaut und zweimal unabhängig
geprüft, wurde dann aber komplett verworfen, weil dabei `context-render.js`
(Studienwerkzeug) geändert worden war. Das Werkzeug-Repo ist wieder auf dem Stand vom
Sitzungsbeginn. Sicherung der verworfenen Dateien (außerhalb des Repos):
`C:\Users\peete\AppData\Local\Temp\claude\7656dabfc3d4c30f\af2cdb4a-b5ed-4a8a-857d-439f9e0c0eb3\scratchpad\ff5-verworfen`
(Scratchpad, kann verschwinden). Bei einem neuen Anlauf: Werkzeugdateien nie ändern,
nur Kopien unter `eval/`. Ergebnis der Prüfungen, das beim neuen Anlauf gilt: F und T
müssen in Rang, Reihenfolge, Wegumfang und Kantenrichtung angeglichen werden
(entschieden 23.11.), J bleibt das Studienformat.

## Worum es geht

FF5 fragt: Hilft es dem Agenten, wenn er sieht, wie die Knoten zusammenhängen?
Also: Steht bei jedem Knoten, über welchen anderen Knoten er gefunden wurde?

## Was in AP8 schiefging

AP8 sollte das prüfen: B als flache Liste, C als eingerückter Baum.
Ein Fehler im Messskript hat bei beiden den Weg weggelassen.
Dadurch waren B und C fast gleich, nur anders sortiert.
Vor den 891 Läufen hat niemand einen fertigen Block angesehen.

Nicht betroffen ist das Hauptergebnis von AP8: Mit Kontextblock findet der Agent schneller zur richtigen Datei.

## Was jetzt gemacht wird

Eine neue, eigene Messung, keine Reparatur von AP8.

Der Agent bekommt denselben Inhalt in drei Formen:

| Form | Wie es aussieht |
| --- | --- |
| F, flach | Liste, bei jedem Knoten steht "gefunden über X" |
| T, Baum | Knoten eingerückt unter dem Knoten, über den sie gefunden wurden |
| J, JSON | das Format aus der Studie, mit Erklärung der Felder davor |

Alle drei entstehen aus demselben Abruf. Die Knoten sind also überall dieselben.

## Schritte

1. Blöcke bauen und speichern (neues Skript `freeze-handover.js`).
2. Automatisch prüfen, ob der Weg wirklich drinsteht. Wenn nicht, bricht das Skript ab.
   Genau diese Prüfung hat in AP8 gefehlt.
3. Zwei bis drei Blöcke selbst ansehen.
4. Messskript `agent-trace.js` so erweitern, dass es die gespeicherten Blöcke nimmt.
5. Vorlauf: Sonnet, 33 Aufgaben, 1 Durchgang, 99 Läufe, etwa 17 USD, knapp 2 Stunden.
6. Bei Bedarf zwei weitere Durchgänge nachziehen. Im Befund steht, wann welcher lief.
7. Ergebnis in 5.3 als eigene Messung eintragen, dann 6.1 und 4.5 anpassen.

## Wo

Auf dem anderen Rechner. Nur dort sind die Graphen (Neo4j), Ollama, das eingefrorene
Claude-Binary 2.1.251, die Messbäume und die Musterlösungen der Holdout-Menge.
Auf diesem Rechner wird nur der Code geschrieben und mit den Unit-Tests geprüft.
Übertragen über Git (Commit und Push macht der Autor).

Wichtig: Der andere Rechner ist auch der Studienrechner, und `context-render.js` gehört
zum Studienwerkzeug. Die Änderungen greifen nur über neue Optionen, das JSON der Studie
ist unverändert. Trotzdem den neuen Code **erst nach der Studiensitzung am 24.11.**
dorthin ziehen. Vorher den Commit notieren, mit dem die Sitzung lief.

## Prüfung vor dem Start (Wunsch des Autors, 23.11.)

Nichts wird gestartet, bevor alles fünfmal geprüft ist:

1. Code gegen diesen Plan lesen.
2. Erste unabhängige Durchsicht des Codes.
3. Zweite unabhängige Durchsicht, ohne die Schlüsse von 1 und 2.
4. Testlauf Blöcke: `freeze-handover.js` auf zwei Aufgaben. Die Blöcke F, T, J werden
   geöffnet und von Hand angesehen. Ist der Weg drin, ist T eingerückt, sind Knoten und Kanten gleich?
5. Testlauf Agent: eine Aufgabe, je Bedingung ein Lauf (3 Läufe). Prompt und Protokoll
   werden geöffnet und gelesen. Steht der richtige Block im Prompt, lief alles im Messbaum?

Erst wenn alle fünf passen, startet der Vorlauf.

## Wann

Schritte 1 bis 5 laufen schon jetzt (23.11.).

Regel für das Wochenlimit: Für die Studiensitzung am 24.11. müssen mindestens 40 Prozent
übrig bleiben. Sobald 60 Prozent verbraucht sind (mit `/usage` prüfen), wird nicht
weiter gemessen oder gebaut. Der Rest folgt nach der Studiensitzung.
Die Agentenläufe laufen über das Abo und zählen auf das Wochenlimit. Deshalb läuft
`node eval/usage-guard.js --threshold 60` neben jeder Serie und bricht bei 60 Prozent ab.
Stand 23.11., 15 Uhr: 22 Prozent der Woche, Reset am 26.11.

## Prüfung 3 (26.11.) und was daraus folgt

Ergebnis: kein Befund, der den Start blockiert. Vor der Messung umgesetzt (26.11., Werkzeug-Repo, nur `eval/ff5/`):

- PROVENANCE der Agentenserie nennt jetzt die ff5-Dateien (`eval/ff5/agent-trace.js`, `freeze-handover.js`, `handover-check.js`, `context-render.js`) und `retrieval.js` statt nicht vorhandener Pfade und der Originale.
- `--handover` verlangt `--model` und `EVAL_CLAUDE_BIN`. Ohne beides bricht das Skript ab, statt still Opus oder `claude` aus dem PATH zu nehmen.
- `freeze-handover.js` löscht vor dem Neubau auch die Dateien in `handover-texts/` der betroffenen Aufgaben, damit Prüfung 4 keinen alten Block zeigt.
- Legende von F und T erklärt jetzt auch den Doppelpfeil `x ←[:CALLS]→ y` (beide Richtungen).

Aufrufregel: je Slice eine eigene Serie wie in AP8 (z. B. `results-ff5-sonnet-…` und `results-ff5-holdoutsonnet-…`), sonst überschreibt der zweite Aufruf AGENT-TRACE.md und agent-trace.csv. Das gilt für `freeze-handover.js` und `agent-trace.js` gleich.

Neustart nach Abbruch am Kontingent: Ein Lauf, der an 429 oder am Nutzungslimit scheitert, gilt als ungültig (`INFRA_REASON`, `eval/ff5/agent-trace.js` Z. 216). Derselbe Aufruf mit `--reset-invalid` fährt genau diese Läufe neu, fertige kommen aus dem Cache.

Nach der Messung noch offen:

- `handover-check.js` vergleicht bei F und T nur die Kopfzeile je Knoten, nicht die Folgezeilen. Heute gleich durch denselben Renderer, nur bei späteren Änderungen am Renderer wichtig. Bei Bedarf nachziehen.
- Liegt eine Kette ohne Vorfahren im Kontext vor, lehnt die Prüfung den Block ab, obwohl T den Weg zeigt. Mit echten Daten kaum zu erwarten (die Traversierung startet bei den Seeds, retrieval.js Z. 2111). Falls es in Prüfung 4 auftaucht, liegt es daran.

## Stand 26.11. nachmittags: Messung abgeschlossen (gilt)

Befund mit allen Zahlen, Kosten, Grenzen und Reproduktion: Werkzeug-Repo `docs/eval-2026-11-26-ff5-messung.md`, Branch `ff5Messung` (nicht gepusht, Commits bis cda6f6b, Ergebnisse committet). 165 von 165 Läufen gültig, fünf Bedingungen: N ohne Kontext (nur Fehlerbericht, wie A in AP8), L Liste ohne Weg (F ohne `Included via:`), F Liste mit Weg, T Baum, J JSON wie Studie.

Ergebnis: Mit Kontext (L, F, T, J) beginnt der Agent seltener mit einer Suche und erreicht Gold-Datei bzw. -Zeile früher als ohne (N), in beiden Mengen. Zwischen L, F, T und J kein Unterschied nachweisbar, also weder für die Wegangabe am Knoten (L gegen F, kleinstes p 0,125) noch für die Form (F, T, J). Ein einzelner Treffer L gegen J (Gold-Zeile, Messmenge, p 0,031) steht allein unter 100 unkorrigierten Tests und fehlt im Holdout. Grenzen: ein Durchgang, nur Sonnet 5, flache Bäume, L behält Hop-Angabe und Kantenliste (rund 89 Prozent der Wegschritte stehen dort als Kante), N und L liefen Stunden nach F, T, J.

Fehler im ersten Durchgang: N war als „Liste ohne Weg“ gedacht, der Block kam durch einen Fehler in `eval/ff5/agent-trace.js` aber nie im Prompt an (alle 33 N-Läufe ohne Auszug). Die erste Fassung des Befunds (Mittag, „N schlechter, also wirkt der Weg“) war deshalb falsch. Behoben in 3e23755: N heißt ohne Kontext, L ist die echte Liste ohne Weg, vor jedem Lauf wird der fertige Prompt geprüft. Alle 33 L-Läufe danach einzeln gegen ihre Eingaben geprüft, alle Zahlen des Befunds aus der CSV unabhängig nachgerechnet (gleich AGENT-TRACE.md).

Für den Text (5.3, 6.1, 4.5): FF5 im Sinne „strukturierte Übergabe hilft“ ist nicht gestützt; gestützt ist nur, dass Kontext überhaupt hilft. Kein Nachweis, dass es keinen Unterschied gibt.

Der folgende Stand vom Morgen ist überholt (Holdout inzwischen vollständig, N und L dazu).

## Stand 26.11. morgens: Messung gelaufen

Werkzeug-Repo Branch `ff5Messung`. Ein unfertiger Zwischenstand unter `eval/ff5-20261126/` (kein Startskript, kein agent-trace, Freeze ohne Manifest) wurde nicht benutzt; die geplante Aufgabe `FF5-20261126-0255-Sonnet` ist deaktiviert.

- Blöcke: `results-ff5-sonnet-20261126j` (21) und `results-ff5-holdoutsonnet-20261126j` (12), alle 33 geprüft. F und T Knoten für Knoten gleich (Kopf, Beschreibung, Reihenfolge). J wortgleich zur Studie (Einleitungssatz und Legende aus `JSON_OUTPUT_DESCRIPTION`, steht hier im Prompt statt in der Werkzeugbeschreibung).
- Probeläufe: `results-ff5-vortest-20261126n` (seaborn-3069, F/T/J, auf den Blöcken vor der J-Änderung).
- slice-small: 63 von 63 Läufen gültig, 03:07–04:05.
- slice-holdout: 9 von 12 Aufgaben vollständig (27 Läufe), dazu sphinx-8056 F und J. Ab 04:18 war das 5-Stunden-Fenster voll, danach nichts mehr. Offen: sphinx-8056 T, sphinx-8595, sphinx-9673, sphinx-10323 (zusammen 10 Läufe). Nachholen mit `bash eval/ff5/run-night-20261126.sh results-ff5-holdoutsonnet-20261126j results-ff5-holdoutsonnet-20261126j eval/data/slice-holdout.jsonl eval/results/ground-truth-holdout.jsonl` (fertige Läufe kommen aus dem Cache).
- Ergebnis slice-small (AGENT-TRACE.md, Vorzeichentest je Aufgabe): kein Primärwert unter p < 0,05, weder F gegen T noch gegen J. Kleinstes p 0,30 (toolCalls T gegen J). Gold-Datei gefunden F 19, T 19, J 20 von 21.
- Grenzen für den Text: F rund 19 Prozent länger als T; Baum flach (73 Prozent Hop 1, 70 Prozent über DEFINED_IN); Hop-Tiefe 3 ändert auf drei Probeaufgaben nichts (gleiche 23 Nachbarn); ein Durchgang, nur Sonnet.

## Was gilt, wenn die Messung nicht kommt

Dann bleibt der Text wie jetzt: FF5 ist nicht beantwortet.
Das steht in 6.1, 5.3 und 4.5 und ist in TODO.md unter "VOR DER ABGABE PRÜFEN" markiert.
