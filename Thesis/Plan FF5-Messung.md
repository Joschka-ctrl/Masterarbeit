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

**Vorher, 23.11. abends:** Der Code für die Messung war gebaut und von Codex und einem
Subagenten geprüft, wurde dann aber komplett verworfen, weil dabei `context-render.js`
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

1. Claude liest den eigenen Code gegen diesen Plan.
2. Codex prüft den Code unabhängig.
3. Ein Subagent prüft den Code unabhängig, ohne die Schlüsse von 1 und 2.
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

## Was gilt, wenn die Messung nicht kommt

Dann bleibt der Text wie jetzt: FF5 ist nicht beantwortet.
Das steht in 6.1, 5.3 und 4.5 und ist in TODO.md unter "VOR DER ABGABE PRÜFEN" markiert.
