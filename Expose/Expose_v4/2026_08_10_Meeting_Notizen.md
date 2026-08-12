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
- [ ] Am 17.08. Arbeit anmelden
- [ ] Offene Fragen an Rainer **vor** dem 24.08. stellen, danach 3 Wochen Funkstille

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
- [ ] Wer spricht die Teamprojekt-Gruppe an? Sollte nicht er sein wegen Abhängigkeit
- [ ] Ab wann darf ich fragen?
- [ ] Ca. 30 Min von ihm in ~Woche 5: unabhängig beurteilen, welche Codestellen für eine Aufgabe relevant sind. Wichtig, damit die Referenzliste nicht nur von mir kommt

**Organisatorisches**
- [ ] Ansprechpartner Datenschutz / Einwilligungserklärung an der HTWG?
- [ ] API-Kosten für ca. 100 Agentenläufe: wer zahlt?
- [ ] Zweitprüfer?
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

## E-Mail-Entwurf 2: offene Fragen

> Muss **vor dem 24.08.** raus, sonst hängt alles bis Mitte September.
> Am besten erst abschicken, wenn das Exposé angepasst ist und du weißt, was du wirklich brauchst.

**Betreff:** Ein paar Fragen vor deinem Urlaub

Hallo Rainer,

ich will die drei Wochen nutzen und so viel wie möglich vorbereiten. Dafür bräuchte ich ein paar Antworten von dir. Der erste Block ist der wichtige, der Rest kann bis zum 16.09. warten.

**Wichtig vor dem 24.08.**

- Aufgaben: Ich will die drei Studienaufgaben aus echten Commits oder Pull Requests im Repo ableiten. Der Stand davor wird der Startpunkt, die Beschreibung wird die Aufgabenstellung. Passt dir das? Und fallen dir Änderungen ein, die sich eignen würden?
- Tests: Gibt es im Projekt Tests, an denen ich automatisch prüfen kann, ob eine Aufgabe gelöst ist? Oder baue ich die selbst?
- Teamprojekt-Gruppe: Wer fragt die Leute wegen der Teilnahme? Ich würde das ungern über dich laufen lassen, damit niemand das Gefühl hat, es hänge an der Note. Und ab wann darf ich auf sie zugehen?
- Datenschutz: Wer ist an der HTWG zuständig für Einwilligungserklärung und Bildschirmaufzeichnungen? Ich weiß nicht, wie lange so etwas dauert, deshalb frage ich lieber früh.

**Kann bis zum 16.09. warten**

- Brauche ich von dir eine schriftliche Freigabe für die Nutzung des Repos, oder reicht es, dass es öffentlich ist?
- Dürfen Codeausschnitte in der Thesis abgedruckt werden?
- Die automatisierten Läufe kosten API-Budget, ich rechne mit rund hundert Agentenläufen. Läuft das über die Hochschule oder über mich?
- Steht der Zweitprüfer schon fest?

Noch eine Vorwarnung: Ich bräuchte Mitte September etwa eine halbe Stunde von dir. Für eine der drei Aufgaben hätte ich gern deine unabhängige Einschätzung, welche Codestellen dafür wirklich gebraucht werden. Ich lege meine Liste vorher fest. Wenn eine zweite Person das gegenliest, steht die ganze Auswertung deutlich sicherer. Das würde gut in unseren Termin am 16.09. passen.

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
