# Evaluationsdesign — einfach erklärt

Begleitdokument zu `evaluationsdesign.md`. Erklärt dieselbe Sache ohne Formeln und
Abkürzungen: Was ist der Gedanke, warum ist er gut, wie wird es gemacht, auf welchen
Daten, und was muss dafür wirklich getan werden.

Gedacht zum Vorbereiten von Betreuergesprächen und als Einstieg, bevor man das
Detaildokument liest.

**Stand:** 2026-08-10
**Bezug:** `evaluationsdesign.md` (Detail), `expose_main.tex` (v4)

---

## Die Grundidee

Ein Coding-Agent braucht, bevor er arbeitet, ein Paket Code als Kontext. Heute stellt er sich
das selbst zusammen — er sucht, öffnet Dateien, greppt herum. Dabei geht dreierlei schief:
Zusammenhänge über mehrere Ecken findet er nicht. Was er findet, landet als flache Textwüste
ohne erkennbare Struktur im Kontextfenster. Und niemand sieht, warum ausgerechnet dieser Code
drin ist.

Der Vorschlag dieser Arbeit: Ein Codegraph stellt das Paket zusammen, jede Codestelle kommt mit
einer sichtbaren Begründung, und der Entwickler darf vor dem Absenden eingreifen.

Die ganze Arbeit prüft: **Bringt das etwas — und welcher Teil davon bringt etwas?**

Der zweite Halbsatz ist der entscheidende. Es werden drei Dinge gleichzeitig geändert: Graph
statt Grep, Struktur statt Liste, Mensch statt Automatik. Testet man alles zusammen gegen einen
normalen Agenten und es wird besser, weiß man nicht, woran es lag. Deshalb die fünf
Bedingungen — jede isoliert genau eine Zutat.

---

## Die fünf Bedingungen — wer packt das Paket?

**A — Der normale Agent.** Kein Graph. Er sucht selbst mit seinen üblichen Werkzeugen. Das ist
der Ist-Zustand.

**B — Der Graph packt, liefert flach.** Das Werkzeug sucht über den Graphen, schickt das
Ergebnis aber als schlichte Liste.

**C — Der Graph packt und liefert strukturiert.** Genau derselbe Inhalt wie B, aber als
Teilgraph mit erkennbaren Beziehungen. B und C dürfen sich **ausschließlich** in der
Darstellung unterscheiden — sonst ist der Vergleich wertlos.

**D — Der Mensch packt nach.** Der Proband sieht den Vorschlag, wirft raus, ergänzt,
gewichtet. Das ist der eigentliche Gegenstand der Arbeit.

**D′ — Jemand packt mit Lösungsblatt.** Ein Skript nimmt den Vorschlag aus C und optimiert ihn
gegen die vorher festgelegte Liste der wirklich benötigten Codestellen. Kein Mensch beteiligt.
Das ist die Obergrenze.

A, B, C und D′ laufen als Skript, beliebig oft. Nur D braucht Menschen — und ist deshalb der
teuerste und wackeligste Teil.

---

## Die sechs Forschungsfragen

### FF1 — Wie baut man so ein Retrieval überhaupt?

**Der Gedanke.** Bevor irgendetwas gemessen werden kann, muss das Ding existieren. Zu jeder
abgerufenen Codestelle soll sichtbar sein: Wie ähnlich war sie der Aufgabe? Wo lag die
Schwelle? Warum wurde etwas verworfen? Über welchen Pfad im Graphen wurde sie erreicht?

**Warum das gut ist.** Das ist die eigentliche Leistung — das Artefakt. Und es ist die Frage,
die *keinen* Vergleich braucht: Sie wird beantwortet, indem das System gebaut und beschrieben
wird. Ein Prüfer kann nicht vorwerfen, dass sie nicht gemessen wurde, denn
Konstruktionsfragen misst man nicht.

**Was zu tun ist.** Das System steht bereits. Für die Arbeit braucht es eine saubere
Beschreibung der Entwurfsentscheidungen. Der einzige empirische Zusatz kommt aus der
Nutzerstudie, Interviewfrage 2: *Welche der angezeigten Angaben haben Sie tatsächlich genutzt,
welche ignoriert?* Damit zeigt sich, ob die Begründungen wirklich helfen oder nur Dekoration
sind.

### FF2 — Wie gut sind Menschen im Nachpacken?

**Der Gedanke.** Der Entwickler bekommt den automatischen Vorschlag und verbessert ihn. Frage:
Wie viel von dem, was sich verbessern ließ, holt er tatsächlich heraus?

**Warum das gut ist — und wo die Falle liegt.** Der naheliegende Vergleich wäre „Mensch gegen
perfektes Paket". Aber das perfekte Paket ist perfekt, *weil* es der eigenen Liste entspricht.
Sagt man „Mensch bei 60 %, Oracle bei 100 %, also urteilen Entwickler zu 60 % richtig", misst
man nur Zustimmung zur eigenen Meinung. Deshalb die Umformulierung: Der Mensch startet nicht
bei null, sondern beim automatischen Vorschlag.

Zahlenbeispiel: Automatik erreicht 45 von 100 Punkten, Oracle 100, dazwischen liegen 55 Punkte
Luft. Der Proband kommt auf 72, hat also 27 von 55 möglichen Punkten geholt — knapp die Hälfte
des Spielraums. Diese Aussage ist verteidigbar, ohne behaupten zu müssen, die Liste sei die
Wahrheit.

**Auf welchen Daten.** Nutzerstudie, Bedingung D. Je Person eine Aufgabe unter D, bei sechs
Personen also sechs Datenpunkte.

**Was zu tun ist.** Das Kuratierungsprotokoll muss jeden einzelnen Schritt mitschreiben: Was
wurde an- oder abgewählt, was war dabei sichtbar, wie lange dauerte es. Ohne dieses Log gibt es
keine FF2.

### FF3 — Verändert Kuratierung die Qualität des Pakets?

**Der Gedanke.** Zwei Vergleiche: Automatik gegen Mensch (C gegen D) und Automatik gegen
Oracle (C gegen D′).

**Warum das gut ist.** Der zweite Vergleich ist die Vorabsicherung. Wenn selbst das perfekte
Paket kaum besser ist als das automatische, ist auf dieser Aufgabe nichts zu holen — und das
weiß man, **bevor** Studierende eingeladen werden.

**Auf welchen Daten.** C gegen D′ läuft als Skript auf den drei Aufgaben, Stufe 1, Woche 5.
C gegen D kommt aus der Nutzerstudie.

**Was zu tun ist.** Genauigkeit, Vollständigkeit und deren Kombination gegen die Referenzliste
ausrechnen, getrennt für Dateien und Funktionen. Diese Trennung vorher festlegen und nicht mehr
anfassen.

### FF4 — Kommt das beim Agenten an?

**Der Gedanke.** Besserer Kontext ist nur dann wertvoll, wenn der Agent damit auch bessere
Arbeit liefert. Gemessen werden erfüllte Akzeptanzkriterien, Bearbeitungsschritte,
Tokenverbrauch, Laufzeit.

**Warum das heikel ist.** Diese Größen können sich widersprechen: bessere Lösung, aber mehr
Tokens. Deshalb braucht es **vorher** eine Rangfolge. Empfehlung: Die Akzeptanzquote ist die
primäre Größe. Schritte und Tokens sind sekundär und nur interpretierbar, wenn die
Akzeptanzquote gleich bleibt. Sonst lässt sich „weniger Schritte" nicht von „gibt früher auf"
unterscheiden.

**Auf welchen Daten.** Stufe 3: drei Aufgaben mal vier Bedingungen mal drei Wiederholungen,
macht 36 Läufe über Nacht. D fehlt dort, weil es Menschen braucht — deshalb das Replay in
Woche 11, bei dem die Auswahlen der Probanden nachträglich unter denselben kontrollierten
Bedingungen laufen.

**Was zu tun ist.** Die Akzeptanzkriterien jeder Aufgabe müssen maschinell prüfbar sein —
TypeScript-Compiler, ESLint, Tests. Bei 36 Läufen kann niemand von Hand im Browser nachsehen.
Das muss beim Aufgabenschreiben in Woche 3–5 von Anfang an mitgedacht werden, sonst kippt die
ganze Stufe.

### FF5 — Macht die Darstellungsform allein einen Unterschied?

**Der Gedanke.** Gleicher Inhalt, andere Verpackung. Einmal als flache Liste, einmal als
Teilgraph mit sichtbaren Beziehungen.

**Warum das die eleganteste Frage ist.** Ein sauberes Experiment mit genau einer geänderten
Variable. Tritt hier ein Effekt auf, kommt er garantiert von der Struktur — es gibt nichts
anderes, woher er kommen könnte. Das ist die Art Befund, die auch dann trägt, wenn die
Kuratierung enttäuscht.

**Auf welchen Daten.** Stufe 3, automatisiert, keine Probanden nötig.

**Was zu tun ist.** Eine Sache, und die ist wirklich wichtig: sicherstellen, dass B und C
denselben Knotensatz liefern. Unterscheidet sich nebenbei auch die Auswahl, vermischt der
Vergleich Abruf und Darstellung, und FF5 ist tot. Das ist die offene Entscheidung, die vor
Stufe 3 fallen muss.

### FF6 — Was kostet das den Entwickler?

**Der Gedanke.** Kuratieren dauert. Ein Verfahren, das die Qualität leicht hebt, aber zwanzig
Minuten Entwicklerzeit frisst, ist im Alltag nicht tragfähig.

**Warum das gut ist.** Es ist die Frage, die die Arbeit vor dem naheliegendsten Einwand
schützt — „nette Idee, macht aber im Alltag keiner". Und sie ist auch dann ergiebig, wenn die
Zahlen keinen Effekt zeigen: Wenn Leute sagen, sie brauchen länger, verstehen aber endlich, was
der Agent tut, ist das ein eigenständiger Befund.

**Auf welchen Daten.** Nutzerstudie. Objektiv: Kuratierungsdauer, Anzahl Eingriffe, Anteil
unverändert durchgewinkter Vorschläge. Subjektiv: Beanspruchung (NASA-TLX), Vertrauen (Skala
von Jian), Gebrauchstauglichkeit (SUS), dazu das Interview.

**Was zu tun ist.** Fragebögen vorbereiten, lautes Denken aufzeichnen, Interviews
transkribieren und thematisch codieren. Bei fünf bis zehn Personen ist der qualitative Teil der
ergiebigere — dort steckt das *Warum*, das kein Log liefert.

---

## Die vier Stufen — was wann passiert

### Stufe 2: SWE-bench (Wochen 1–3)

Läuft parallel zu allem anderen, ist von nichts abhängig. Drei bis fünf Repositories aus
SWE-bench Verified mit je etwa fünfzehn Aufgaben, Graph bauen, und **nur den Abruf** messen —
keine Docker-Umgebung, keine Tests, keine Agentenläufe, keine Kosten. Die Referenzliste sind
die im Lösungspatch geänderten Dateien.

Der Punkt: Es zeigt sich, dass das Retrieval auch auf großen, fremden Codebases funktioniert
und nicht nur auf einem selbst gewählten Projekt. Als Vergleichsmaßstab dient reine
Ähnlichkeitssuche ohne Graph-Traversierung — der Unterschied ist der Beleg, dass der Graph
etwas beiträgt.

Wenige Repositories statt vieler einzelner Aufgaben, weil der Graphaufbau der teure Schritt
ist. Bei Gruppierung fällt er fünf Mal an statt fünfundvierzig Mal.

### Stufe 1: Obergrenze (Woche 5)

Steht früh, und das ist die klügste Entscheidung im ganzen Design. Vier Varianten des perfekten
Pakets werden gebaut: nur Ballast entfernt, nur Fehlendes ergänzt, nur umsortiert, alles
zusammen. Dann arbeitet der Agent damit.

Zwei Erkenntnisse: Erstens, ob Kuratierung auf diesen Aufgaben überhaupt etwas bringt. Wenn
nicht, werden die Aufgaben geändert, solange dafür noch Zeit ist. Zweitens, *welche* Art von
Eingriff wirkt. Falls nur das Umsortieren wirkt, ist das ein direkter Beleg für die
Positionsabhängigkeit aus dem Theorieteil.

### Stufe 3: Automatisierte Läufe (Wochen 6–7)

36 Läufe über Nacht. Vor jedem Lauf den Ausgangszustand herstellen, frische Sitzung, danach
Compiler, Linter und Tests, Metriken in eine CSV.

Drei Wiederholungen je Zelle sind nicht optional — Agentenläufe streuen auch bei identischer
Eingabe erheblich. Mit einem einzigen Lauf misst man Zufall.

### Stufe 4: Nutzerstudie (Wochen 9–10)

Fünf bis zehn Studierende, je 60 Minuten. Jede Person bearbeitet zwei der drei Aufgaben, eine
automatisch und eine kuratiert. Jeder ist damit seine eigene Kontrolle — bei so kleiner
Stichprobe der einzig sinnvolle Aufbau.

Die Übungsaufgabe zu Beginn ist Pflicht. Ohne sie misst die erste gewertete Aufgabe
hauptsächlich, wie lange jemand braucht, um die Oberfläche zu verstehen.

Wichtig für die Erwartung: Diese Stufe liefert **nicht** die statistische Absicherung. Sechs
Paare tragen keinen Signifikanztest. Sie liefert das Verhalten und die Begründungen. Die Zahlen
kommen aus den Stufen 1 bis 3, die beliebig wiederholbar sind.

---

## Was wirklich gebaut werden muss

1. **Prüfen, ob das Betreuer-Projekt taugt** — Graph bauen, Kanten kontrollieren, drei
   Testanfragen. Woche 1. Wenn das scheitert, ist alles andere hinfällig.
2. **Entscheiden, dass B und C denselben Knotensatz liefern.** Vor Stufe 3, sonst ist FF5
   verloren.
3. **Drei Aufgaben aus der Projekthistorie ableiten**, mit Referenzliste, maschinell prüfbaren
   Kriterien und Zweitmeinung des Betreuers. Wochen 3–5. Das ist die inhaltlich
   anspruchsvollste Arbeit der ganzen Thesis.
4. **Zwei Skripte**: eines für den SWE-bench-Abruf, eines für die automatisierten Agentenläufe
   samt Auswertung.
5. **Das Kuratierungsprotokoll** in der Oberfläche, das jeden Schritt mitschreibt.
6. **Einwilligungsunterlagen und Fragebögen.**

**Der kritische Pfad:** Codebase → Aufgaben und Referenzlisten → Stufe 1 → Stufe 3 →
Nutzerstudie. Verzögert sich davon etwas, verschiebt sich alles Nachfolgende. SWE-bench hängt
an nichts und kann jederzeit warten — das ist der Puffer.

Der gefährlichste Punkt sind die Aufgaben in Woche 3–5. Sie müssen gleichzeitig unscharf
formuliert sein, Ablenkungen enthalten, Abhängigkeiten über mehrere Ecken haben, sich über
mehrere Dateien erstrecken und maschinell prüfbar sein. Wenn irgendwo etwas kippt, dann dort.
