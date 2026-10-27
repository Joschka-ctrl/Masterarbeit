# Meeting 10.08.2026 mit Rainer

## Auf einen Blick

| | |
|---|---|
| Codebase | `teamable-backend`, Django/Python, https://github.com/Teamable-Analytics/teamable-backend |
| Probanden | 8 Studierende, BIT, Teamprojekt-Gruppe |
| Anmeldung | **17.08.2026** (selbst auf „Anmelden" klicken) |
| Rainer im Urlaub | 24.08. bis 14.09.2026 |
| Nächster Termin | **16.09.2026, 10:00 Uhr** |
| Bis dahin | Fragen nur asynchron per Mail |

---

## Ergebnisse

**Codebase gewechselt.** Von TypeScript auf Django/Python. Parser kann Python, kein Umbau nötig.

**Probanden.** 8 Leute aus dem Teamprojekt, BIT. Heterogen: manche mit SE-Hintergrund, manche ohne. Alle haben den Agentic-Coding-Workshop gemacht.
→ Idee von Rainer: Interviews auswerten und daraus Personas bauen. Dann ist die Streuung Material statt Problem.

**Aufteilung der Evaluation.**
- Quantitativ: mit SWE-bench anfangen
- Qualitativ: Fragebögen plus einzelne Aufgaben mit der Teamprojekt-Gruppe

**Priorisierung.** Gutes Tool ist ihm wichtiger, aber beides zählt. Mittelweg finden.

**Forschungsfragen.** Die 6 passen als Idee. Ausformulieren bis nächste Woche.

**Zusatzpunkt von Rainer** (wichtig, nicht vergessen):
- Will ich überhaupt verstehen, was der Agent treibt? Ich will ja eigentlich abgeben. Dagegen: Lerneffekt, weil ich beim Kuratieren die Codebase kennenlerne.
- Analogie klassische Entwicklung: Warum proaktiv steuern statt hinterher über Tests flicken? Architekt: Entwickler loslaufen lassen oder vorher briefen? Parallelen in echter Teamarbeit suchen.

**Schreiben mit KI.** Erlaubt, aber gegenlesen. Keine ewig langen Sätze, keine Wiederholungen, nichts Aufgeblähtes ohne Aussage.

---

## To-do

### Sofort
- [ ] Mail mit Zusammenfassung schicken (Entwurf unten)
- [x] Am 17.08. Arbeit anmelden (erledigt, Simon muss die Anmeldung noch akzeptieren)
- [x] Offene Fragen an Rainer **vor** dem 24.08. stellen, danach 3 Wochen Funkstille
      (versendet am 18.08.2026, finale Fassung unten)

### Exposé anpassen
- [ ] Codebase auf Django/Python und `teamable-backend` umschreiben (Rahmenbedingungen, Vorabprüfung, Parser)
- [ ] Stichprobe: „5–10 aus dem Kurs" → 8 BIT-Studierende aus dem Teamprojekt, heterogen, alle mit Workshop
- [ ] Personas als Auswertungsform aufnehmen (bisher nur thematische Codierung)
- [ ] Zusatzfrage Delegieren vs. Verstehen einarbeiten, plus Literatur zu Briefing/Onboarding/Delegation
- [ ] Zeitplan auf Start 17.08. umrechnen, Urlaub 24.08.–14.09. als Sperrzeit einplanen
- [ ] Gewichtung der 4 Evaluationsstufen an quantitativ/qualitativ anpassen
- [ ] Forschungsfragen final ausformulieren

### Während des Urlaubs (nichts davon braucht Rainer)
- [ ] Graph auf `teamable-backend` bauen, Vorabprüfung durchziehen
- [ ] SWE-bench-Messung starten
- [ ] Artefakt härten: Logging der Kuratierungsschritte, Export der Auswahl, Latenz
- [ ] Agenten-Harness bauen
- [ ] Aufgabenkandidaten aus der Git-Historie sichten und vorbereiten

---

## Fragen an Rainer (asynchron, vor dem 24.08.)

**Codebase und Aufgaben**
- [ ] Brauche ich eine schriftliche Freigabe für die Nutzung, oder reicht das öffentliche Repo?
- [ ] Dürfen Codeausschnitte in der Thesis abgedruckt werden?
- [ ] Aufgaben aus echten Commits/PRs ableiten: passt das? Fallen dir konkrete ein?
- [ ] Gibt es Tests im Projekt, oder baue ich die Akzeptanzkriterien selbst?

**Studie**
- [x] Wer spricht die Teamprojekt-Gruppe an? (gefragt, ob ich selbst vorwarnen darf;
      die Begründung mit der Abhängigkeit habe ich weggelassen)
- [x] Ab wann darf ich fragen?
- [ ] Ca. 30 Min von ihm in ~Woche 5: unabhängig beurteilen, welche Codestellen für eine Aufgabe relevant sind. Wichtig, damit die Referenzliste nicht nur von mir kommt

**Organisatorisches**
- [x] Einwilligungserklärung: als Frage nach seiner Erfahrung aus früheren Arbeiten
      gestellt, nicht als Frage nach dem HTWG-Ansprechpartner
- [ ] API-Kosten für ca. 100 Agentenläufe: wer zahlt?
- [x] Zweitprüfer: Simon
- [ ] Liest er das Exposé bis zum 16.09.?

---

## E-Mail-Entwurf

> Datum geprüft: 3 Wochen ab 24.08. enden am **14.09.**, passt zum Termin am 16.09.

**Betreff:** Kurz zusammengefasst: unser Termin heute

Hallo Rainer,

danke für das Meeting heute. Hier das Wichtigste:

Als Codebase nehmen wir teamable-backend:
https://github.com/Teamable-Analytics/teamable-backend

Das heißt Django und Python statt TypeScript. Mein Parser kann Python, umbauen muss ich also nicht viel.

Die Evaluation läuft zweigleisig. Quantitativ fange ich mit SWE-bench an und messe dort, wie gut mein Retrieval die richtigen Codestellen findet. Qualitativ arbeite ich mit der Teamprojekt-Gruppe, also Fragebögen und einzelne Aufgaben. Die acht BIT-Leute bringen sehr unterschiedliche Hintergründe mit. Manche mit SE-Erfahrung, manche ohne. Alle haben den Agentic-Coding-Workshop gemacht und starten jetzt in die Entwicklung. Aus den Interviews kann ich Personas ableiten, dann hilft die Streuung sogar.

Bei der Gewichtung habe ich mitgenommen: ein Werkzeug, das wirklich was bringt, ist dir im Zweifel wichtiger als reine Messwerte. Natürlich zählt aber beides. Ich suche den Mittelweg.

Die sechs Forschungsfragen passen als Idee, ich formuliere sie bis nächste Woche aus. Deine Zusatzpunkte nehme ich mit rein. Zum einen die Frage, ob ich als Entwickler überhaupt verstehen will, was der Agent da treibt. Wer delegiert, will eigentlich abgeben und nicht jeden Schritt prüfen. Kuratieren kostet aber genau diese Aufmerksamkeit. Dagegen steht der Lerneffekt: Wer den Kontext selbst zusammenstellt, kennt die Codebase danach vermutlich besser. Zum anderen der Vergleich mit normaler Entwicklung. Warum ist es besser, vorher zu steuern, als hinterher über Tests zu flicken? Lasse ich jemanden einfach loslaufen oder briefe ich ihn vorher? Ich schaue, ob ich dazu Literatur zu Briefing, Onboarding und Delegation in Teams finde.

Absprache zum Schreiben mit KI: geht in Ordnung, aber gegenlesen. Keine ewig langen Sätze, keine Wiederholungen, nichts, was aufgebläht klingt und dabei nichts sagt.

Zum Organisatorischen:

- Der Antrag ist durch, ich melde am 17.08.2026 an.
- Du bist vom 24.08. bis 14.09. weg.
- Nächster Termin: 16.09. um 10 Uhr.
- Was vorher aufkommt, schicke ich dir per Mail.

Wenn ich etwas vergessen oder falsch verstanden habe, sag gerne Bescheid.

Schönen Urlaub!

Viele Grüße
Joschka

---

## E-Mail an Rainer, versendet am 18.08.2026

> Ersetzt den früheren Entwurf 2. Inhaltlich verschoben: Der Fokus liegt jetzt auf
> Jira-Zugang, dem Frontend-Repo und der Ansprache des Teams. Die Fragen zu Aufgaben
> aus Commits, Tests, Repo-Freigabe und API-Kosten sind bewusst nicht mitgegangen und
> stehen für den 16.09. offen.

Hallo Rainer,

wie besprochen, habe ich die Masterarbeit gestern angemeldet. Simon muss als Zweitkorrektor noch als Erstes die Anmeldung akzeptieren, das steht aktuell noch aus.

Bei unserer Planung hatten wir gar nicht berücksichtigt, dass Simon eventuell im Urlaub sein könnte. Weißt du zufällig, ob er gerade da ist? Bei Discord habe ich ihm schon geschrieben. Bisher habe ich aber noch keine Antwort bekommen.

Ich hätte außerdem noch ein paar Punkte, die ich gerne klären würde, bevor du in den Urlaub fährst.

Zum einen hätte ich gerne Zugriff auf die Informationen zur Masterarbeit in Jira. Bei dem Gespräch mit Tobias Mohr hatte er erwähnt, dass es von dir dazu einen Leitfaden gibt.

Der zweite Punkt betrifft die Nutzerstudie. Ich bin gerade dabei, das Benchmarking zu testen, habe aber leider noch nicht die Ergebnisse erzielt, auf die ich gehofft hatte. Je größer ein Repository wird, desto schwammiger werden die Ergebnisse meines Tools. Ich bin deshalb gerade dabei, die Logik für das Finden der Startknoten und die Traversierung nachzuziehen und zu verbessern.

Für die Nutzerstudie würde ich gerne das Projekt des Teams verwenden. Du hattest mir bisher nur das Repository für das Backend geschickt. Ich habe noch einmal nachgeschaut und gesehen, dass es auch ein Repository für das Frontend gibt. Nur das Backend wäre zu klein und damit nicht aussagekräftig genug. Mit Backend und Frontend zusammen sollte das Projekt vermutlich gerade groß genug sein, damit das Tool sinnvoll eingesetzt werden kann und die Entwickler anschließend ihre persönlichen Einschätzungen zu den Ergebnissen abgeben können.

Ob das Projekt tatsächlich groß genug ist, wird sich aber auch durch meine Benchmarking-Ergebnisse in den nächsten Wochen nochmal besser zeigen. Für die allgemeine Frage, wie gut das Tool mit größeren Codebases funktioniert, muss ich deshalb unabhängig davon weiter am Benchmark arbeiten.

Nach meiner jetzigen Planung versuche ich, damit bis zum 14.09.26 fertig zu sein, um dir im nächsten Meeting echte Benchmarkzahlen vorzeigen zu können.

Hier noch einmal meine Fragen:

- Weißt du, ob Simon gerade im Urlaub ist bzw. wann er wieder da ist?
- Könntest du mir Zugriff auf die Informationen zur Masterarbeit in Jira geben und mir den Link zu dem Leitfaden schicken?
- Arbeitet das Team sowohl am Backend als auch am Frontend, sodass ich für die Nutzerstudie beide Repositories zusammen betrachten kann?
- Kann ich das Team schon einmal vorwarnen und fragen, ob sie grundsätzlich bereit wären, bei meiner Masterarbeit bzw. der Nutzerstudie mitzumachen?
- Kann ich das Team dafür über Discord erreichen? Wenn ja, in welchem Raum?
- Für die Nutzerstudie würde ich Bildschirm und Interviews aufzeichnen. Hattest du das bei früheren betreuten Arbeiten schon einmal? Falls ja, gab es dafür eine Vorlage für die Einwilligungserklärung oder haben die Studierenden diese selbst erstellt?
- Ist dir die asynchrone Kommunikation über Discord oder per Mail lieber?

Viele Grüße
Joschka

---

## Wiedereinstieg nach dem Urlaub

Falls der Faden gerissen ist, hier die Reihenfolge:

1. Steht die Vorabprüfung der Codebase? (Größe, Kanten, Beschreibungsgüte)
2. Sind die 3 Aufgaben samt Referenzkontexten fertig und **committet, bevor** das Retrieval das erste Mal lief?
3. Zweitbeurteilung mit Rainer am 16.09. einplanen
4. Danach Stufe 1 (Obergrenze): Bringt Kuratierung auf diesen Aufgaben überhaupt was? Wenn nein, Aufgaben ändern, solange noch Zeit ist
5. Erst dann Stufe 3 und Nutzerstudie

Details stehen in `evaluationsdesign.md`, die einfache Erklärung in `evaluationsdesign_einfach.md`.
