# Zeitplan und Gliederung

Stand 13.11.2026: auf den Stand der Thesis gebracht (Titel, Seitenverteilung Kap. 7,
Zeitplan ohne Teamprojekt 2, Meilenstein 13.11.). Datei liegt seit dem 13.11. im
Thesis-Ordner, vorher im Werkzeug-Repo unter docs/notizen. Vorheriger Stand 26.10.2026:
Gliederung und Zeitplan nach dem Termin mit Rainer angepasst, Notizen am Ende der Datei.
Kapitel 1 bis 3 folgen dem Exposé vom 21.08.2026.

## Heute, 13.11.

Meilenstein laut Plan: Kap. 4 und 6 fertig, dazu 5.1 und 5.2. Stand: Kap. 4 geschrieben
(19 Seiten im PDF, Kürzung offen), 6.1 bis 6.5 geschrieben (11 Seiten), 6.6 fehlt, 5.1 und
5.2 nicht begonnen und nach 16.–27.11. verschoben.

- [ ] 4.5 – Bildschirmfoto der Oberfläche im stufenweisen Modus aufnehmen (Stufe 2 oder 3, ein Knoten angeklickt, Detailansicht mit Begründungsblock sichtbar), beschriften, einbinden (KLÄREN-Marker im Text)
- [ ] 4.5 – JSON-Auszug des Kontextblocks als Abbildung: Lauf auswählen, auf einen Seed, einen Nachbarn mit via und eine Kante kürzen (KLÄREN-Marker im Text)
- [x] 6.6 Auswertung schreiben (1,5 S.), Pflicht-Block im Kopf von 6.6 beachten

Vorhanden sind in Kap. 4 die Abbildungen Pipeline mit Eingriffspunkten (fig:pipeline) und
Graphschema (fig:graphschema).

## Inhaltsverzeichnis

Umfang: 90 Seiten Haupttext ohne Verzeichnisse und Anhang. Kapitelzeilen tragen die Summe,
9 Seiten bleiben als Reserve und gehen am Ende dahin, wo die Studie sie braucht. „Text“:
x = liegt vor (aus dem Exposé vom 21.08.2026), g = geschrieben (Stand 13.11.).

Zeilenabstand: Die Budgets wurden für 1,5-zeiligen Satz aufgestellt. Seit der Umstellung
auf einfachen Zeilenabstand (12 pt, Vorgabe Betreuer) passt auf eine Seite etwa 13 Prozent
mehr Text (Hauptteil 38 statt 43 Seiten). Die Budgets in Seiten bleiben, jedes Kapitel hat
damit etwas mehr Platz.

| Kapitel | Text | Seiten | Wann |
| --- | :---: | ---: | --- |
| **1 Einleitung** | | **6** | 14.–23.12. |
| 1.1 Problemstellung und Motivation | x | 1 | 14.–23.12. *überarbeiten* |
| 1.2 Das Reaktivitätsproblem | x | 1 | 14.–23.12. *überarbeiten* |
| 1.3 Das Strukturproblem | x | 1 | 14.–23.12. *überarbeiten* |
| 1.4 Das Transparenzproblem | x | 1 | 14.–23.12. *überarbeiten* |
| 1.5 Zielsetzung und Forschungsfragen<br>*Inhalt:* Zielsetzung, Leitfrage und FF1 bis FF6 wie im Exposé (Pflicht-Block im Kopf von 1.5, 13.11.); der Schwerpunkt der Studie (Zusammenhänge verstehen, Änderung nachvollziehen) wird in 5.6 und 6.1 begründet | x | 1,5 | 14.–23.12. *überarbeiten* |
| 1.6 Aufbau der Arbeit<br>*Inhalt:* Rollen von Claude (Entwicklungswerkzeug, gemessener Agent, Schreibhilfe) und Kennzeichnung der KI-Nutzung nach HTWG-Regel | | 0,5 | 14.–23.12. |
| **2 Grundlagen**<br>*Inhalt:* eigenes, kurzes Kapitel (Beschluss 26.10.); nur, was der Leser zum Verstehen der Arbeit braucht; nur das Wichtige, Mut zur Lücke | | **4** | 14.–23.12. |
| 2.1 Coding-Agent-Systeme: Funktionsweise und Aufgabenrahmen<br>*Inhalt:* bisher 2.1; wie ein Coding-Agent-System funktioniert, um den Ablauf der Arbeit zu verstehen | x | 2 | 14.–23.12. *überarbeiten* |
| 2.2 Token und Kontextfenster als relevante Währung<br>*Inhalt:* was die Zahl x Token genau bedeutet; teils aus bisherigem 2.2 und 2.4 | | 2 | 14.–23.12. |
| 2.3 Semantische und lexikalische Suche<br>*Inhalt:* neu (Beschluss 30.10.), ca. 0,75 S.; Budget mit 2.1 und 2.2 klären, Kapitelsumme bleibt 4 | | | 14.–23.12. |
| **3 Stand der Forschung**<br>*Inhalt:* liegt vor, eher kürzen als ergänzen; nur, was im Moment für diese Arbeit relevant ist (Beschluss 26.10.); Stand vom Anfang der Arbeit, wird nicht nachgezogen; die Schwenks nicht hier | | **8** | 14.–23.12. *überarbeiten* |
| 3.1 Kontext als Erfolgsfaktor und Engpass<br>*Inhalt:* bisher 2.2 | x | 1,5 | 14.–23.12. *überarbeiten* |
| 3.2 Graphbasierte Kontextbereitstellung<br>*Inhalt:* bisher 2.3 | x | 2 | 14.–23.12. *überarbeiten* |
| 3.3 Grenzen langer, unstrukturierter Kontexte (Modellseite)<br>*Inhalt:* bisher 2.4 | x | 1 | 14.–23.12. *überarbeiten, kürzen* |
| 3.4 Nachvollziehbarkeit und menschliche Beteiligung<br>*Inhalt:* bisher 2.5 | x | 1 | 14.–23.12. *überarbeiten, kürzen* |
| 3.5 Abgrenzung und Beitrag<br>*Inhalt:* bisher Kap. 3 als Unterkapitel (Beschluss 26.10.): automatisches graphbasiertes Code-Retrieval, interaktive Inspektion von Retrieval-Pipelines, menschengestützte Interfaces für Wissensgraphen | x | 2,5 | 14.–23.12. *überarbeiten, kürzen* |
| **4 Das Werkzeug**<br>*Inhalt:* Konzeption und Umsetzung getrennt (Beschluss 26.10.); zwei Abbildungen (Pipeline mit Eingriffspunkten, Graphschema); Module, Werkzeuge und Konfiguration als Tabelle, keine Codebeschreibung. Stand 13.11.: geschrieben, 19 Seiten im PDF; Kürzungsrunde auf ca. 14 Seiten in der Durchsicht 24.12.–06.01. (TODO.md); offen zwei Abbildungen in 4.5 | g | **12** | geschrieben; Kürzung 24.12.–06.01. |
| 4.1 Überblick, Ziel und Grundbegriffe<br>*Inhalt:* Graph, Knoten und Kanten, Einbettung, Seeds, Traversierung, Hop, Kontextblock; Textnotizen Teil 0.2 | g | 2 | geschrieben |
| 4.2 Konzeption<br>*Inhalt:* geplante Architektur, Verfahren, Werkzeuge und Informationsquellen | g | 2 | geschrieben |
| 4.3 Umsetzung: Build-Phase vom Quellcode zum Codegraphen<br>*Inhalt:* bisher 4.2; Datenbank je Projekt, JSX als Aufrufe | g | 2 | geschrieben |
| 4.4 Umsetzung: Abrufpipeline in vier Stufen<br>*Inhalt:* bisher 4.3 | g | 2,5 | geschrieben |
| 4.5 Umsetzung: Betriebsmodi, Oberfläche und Rückgabeform<br>*Inhalt:* bisher 4.4 und 4.5 zusammengelegt; mit Studienseite; JSON, Entscheidung 24.09. | g | 2,5 | geschrieben; Abbildungen 13.11. |
| 4.6 Grenzen<br>*Inhalt:* dazu Agentenanfrage 08.10. (Trainingswissen) | g | 1 | geschrieben |
| **5 Evaluation ohne Nutzer: Messungen auf SWE-bench** (im Plan bisher „Vormessungen“, im Text „Benchmark-Messungen“)<br>*Inhalt:* Vorgehen und Entwicklung; Ergebnisdarstellung in Kap. 7 (Beschluss 26.10.), volle Tabellen in den Anhang. Stand 13.11.: nur Kapiteleinleitung geschrieben | | **16** | 16.–27.11. |
| 5.1 Wie gemessen wird<br>*Inhalt:* Aufgaben (SWE-bench, Gold gleich Patch), Bedingungen, Messgrößen, Statistik (Vorzeichentest, Bootstrap), Vorregistrierung und Holdout, Nachweis (Messbäume, Pfad-Audit, eingefrorenes Binary, Provenance) | | 3 | 16.–27.11. (verschoben 13.11., war 26.10.–13.11.) |
| 5.2 Entwicklung des Abrufs auf SWE-bench<br>*Inhalt:* Seed-Fix ausführlich, die übrigen Messungen je ein bis drei Sätze (Frage, Antwort, Änderung am Werkzeug) | | 3 | 16.–27.11. (verschoben 13.11., war 26.10.–13.11.) |
| 5.3 Agentenverhalten (AP8)<br>*Inhalt:* dazu Agentenläufe auf teamable 05.10. und 09.10. als Entwicklungsmessung | | 3 | 16.–27.11. |
| 5.4 Ferne Aufgaben: Hard-Slice<br>*Inhalt:* Bestätigungsmessung, alter Default | | 3 | 16.–27.11. |
| 5.5 Seed-Änderung und Tests als Gold<br>*Inhalt:* Entwicklungswert, neuer Default, Stand der Studie | | 2 | 16.–27.11. |
| 5.6 Zusammenhänge und Überleitung zur Studie<br>*Inhalt:* Bilanz, was die Messungen nicht beantworten, Begründung des Schwerpunkts der Studie (Pflicht-Block in den Notizen von 5.6, 13.11.) | | 2 | 16.–27.11. |
| **6 Nutzerstudie** (im Plan bisher „Studiendesign“)<br>*Inhalt:* Bögen, Prüflisten und Leitfaden in den Anhang. Stand 13.11.: 6.1 bis 6.5 geschrieben, 11 Seiten im PDF; Hauptfrage am 13.11. neu gefasst | | **10** | 6.6 am 13.11. bzw. als Nächstes; 30.11.–11.12. auf den gefahrenen Stand bringen |
| 6.1 Fragen der Studie und ihre Herkunft aus den Benchmark-Messungen<br>*Inhalt:* Hauptfrage mit zwei Teilen (Zusammenhänge verstehen, Änderung nachvollziehen), drei Nebenfragen (FF3, FF6, FF4) | g | 1,5 | geschrieben, Abweichungen 30.11.–11.12. |
| 6.2 Bedingungen C und D | g | 1 | geschrieben, Abweichungen 30.11.–11.12. |
| 6.3 Aufgaben auf teamable<br>*Inhalt:* Referenzkontext, Spielraum je Aufgabe (13.10.) | g | 2 | geschrieben, Abweichungen 30.11.–11.12. |
| 6.4 Messung<br>*Inhalt:* Vorfragebogen, Fragen vorher und nachher, Erklären, UI-Export, Prüfliste für das Ergebnis des Agenten, TLX, SUS, Interview | g | 2,5 | geschrieben, Abweichungen 30.11.–11.12. |
| 6.5 Probanden, Ablauf, Einwilligung und Pilot | g | 1,5 | geschrieben, Abweichungen 30.11.–11.12. |
| 6.6 Auswertung<br>*Inhalt:* Stand 10.11.: Hauptkennzahl Anteil richtiger Antworten nachher minus vorher, D minus C je Person, dargestellt je Paar; kein Test, stattdessen Auslassprobe; Einordnung nach in der Zusammenfassung genannt und nicht genannt; Kontrollfragen gesondert; Entwickler getrennt. Pflicht-Block im Kopf von 6.6 (feste Zuteilung ohne Los) | | 1,5 | 13.11. bzw. als Nächstes, Abweichungen 30.11.–11.12. |
| **7 Ergebnisse**<br>*Inhalt:* Benchmark-Messungen und Studie (Beschluss 26.10.); Tabellen statt Prosa, je Person eine Zeile. Seitenverteilung seit 10.11. | | **14** | 30.11.–11.12. |
| 7.1 Ergebnisse der Benchmark-Messungen<br>*Inhalt:* aus Kap. 5 hierher gezogen (Beschluss 26.10.); die fünf wichtigsten Messungen ausführlich, die übrigen elf nur kurz (warum, wie, Ergebnis) in einem gemeinsamen Abschnitt; volle Tabellen in den Anhang | | 2 | 30.11.–11.12. |
| 7.2 Durchführung und Probanden<br>*Inhalt:* was bei der Durchführung vom Plan abwich (Abbrüche, hängende Läufe, fehlende Aufnahmen, Dauer); Zuteilungstabelle je Person | | 1,5 | 30.11.–11.12. |
| 7.3 Verständnis der Zusammenhänge unter D gegen C<br>*Inhalt:* Hauptfrage Teil 1; mit Interviewzitaten | | 3 | 30.11.–11.12. |
| 7.4 Freie Erklärung der Änderung<br>*Inhalt:* Hauptfrage Teil 2 | | 1,5 | 30.11.–11.12. |
| 7.5 Eingriffe in den Kontext und Kontextgüte<br>*Inhalt:* Nebenfrage zum Kontext (FF3); Nutzung der Oberfläche | | 2,5 | 30.11.–11.12. |
| 7.6 Ergebnis des Agenten gegen die Prüfliste, C gegen D<br>*Inhalt:* Nebenfrage FF4; Scheiternskriterium Exposé 4.4 | | 2,5 | 30.11.–11.12. |
| 7.7 Aufwand und Bewertung der Oberfläche<br>*Inhalt:* neu seit 10.11., Nebenfrage FF6: Kuratierzeit, TLX, SUS, Interviewaussagen | | 1 | 30.11.–11.12. |
| **8 Diskussion** | | **8** | 14.–23.12. |
| 8.1 Antworten auf die Hauptfrage der Studie und die Forschungsfragen, Einordnung<br>*Inhalt:* Hauptfrage, dann FF1 bis FF6 einzeln, auch die Nebenfragen; Entwicklung der Fragestellung | | 4 | 14.–23.12. |
| 8.2 Validität und Grenzen<br>*Inhalt:* Stufe 3 weggelassen, acht Personen, Vortest als Suchauftrag, Wertung nicht verblindet, zwei Werkzeugstände; dazu der Pflicht-Block vom 13.11. im Kopf von 8.2 (einzelne Agentenläufe, Sehen und Wählen, Übertragbarkeit) | | 4 | 14.–23.12. |
| **9 Fazit und Ausblick** | | **3** | 14.–23.12. |
| 9.1 Fazit<br>*Inhalt:* Beitrag und Entwicklung der Fragestellung (Antwort vom 13.10.) | | 2 | 14.–23.12. |
| 9.2 Ausblick<br>*Inhalt:* größere Studie, Agent löst Aufgaben selbst, Erreichbarkeits-Nachrechnung, blinde Nachmessung auf ungesehenen Repos, Lösungsraten | | 1 | 14.–23.12. |
| **Summe Kapitel 1 bis 9** | | **81** | |
| **Reserve** | | **9** | |
| **Verzeichnisse und Anhang**<br>*Inhalt:* zählt nicht zum Budget | | | 24.12.–06.01. |
| Literatur | | | 24.12.–06.01. |
| Anhang<br>*Inhalt:* Aufgaben, Fragebögen, Messprotokolle (je Messung eine Nachweiszeile: Serienordner, Commit, Datum, Befehl), volle Tabellen | | | 24.12.–06.01. |

Herkunft aus dem Exposé: Die drei Probleme und die Zielsetzung (Exposé Kap. 1) stehen in der
Einleitung. Die Forschungsfragen (Exposé Kap. 4) stehen unverändert in 1.5; der Schwerpunkt der Studie
(Hauptfrage seit 13.11.: Zusammenhänge in der Codebasis verstehen und Änderung des Agenten
nachvollziehen, Kuratieren gegen automatischen Abruf) wird in 5.6 und 6.1 begründet und im
Fazit beschrieben (Antwort vom 13.10.). Das methodische Vorgehen (Exposé Kap. 5) geht in Kap. 5 und 6 auf.

Abweichungen vom Exposé (Backend zu Frontend, Stufe 3 gestrichen, C statt ohne Werkzeug,
H3 kein Test, C in AP8 nicht verschachtelt) bekommen kein Sammelkapitel. Jede steht in zwei
Sätzen an der Stelle, an der der Leser sie zuerst trifft, mit der Zahl, die sie ausgelöst
hat. Davon zu unterscheiden: Kap. 6 wird nach den Sitzungen auf den gefahrenen Stand
gebracht (Änderungen am Design durch Generalprobe, Pilot und Sitzungen), und 7.2 berichtet,
was bei der Durchführung vom Plan abwich.

## Zeitplan

Frist 16.02.2027. Ziel: druckfertig bis 16.01.2027, danach ein Monat Puffer.
Rechengrundlage: 1,5 neue Seiten je Arbeitstag, fünf Tage die Woche; nach der Umgliederung
vom 26.10. rund 65 neue Seiten (vorher 63, neu dazu 2.2 Token), also 44 Arbeitstage bei
43 zwischen 26.10. und 23.12. — der fehlende Tag kommt aus der Durchsichtswoche.

| Zeitraum | Studie | Schreiben |
| --- | --- | --- |
| 19.–23.10. | Pilot, Generalprobe mit Sascha, Kopien je Proband, RustDesk und OBS | Zeitplan und Gliederung, Entwurf Kap. 6 |
| **26.10.** | Termin mit Rainer | |
| 26.10.–13.11. | Vorstellung im Team (Termin über Felix), mündliche Anfrage, schriftliche Einwilligung, Sitzungen Teamprojekt 1; jede Sitzung direkt danach auswerten (Bögen auslesen, „genannt“ markieren, Erklären werten, Export rechnen) | Kap. 4 und 6, dazu 5.1 und 5.2 (Material liegt vor); 13.11. Kap. 4 und 6 fertig (22 S., interner Meilenstein, kein Lesetermin). **Stand 13.11.:** Kap. 4 geschrieben (Kürzung und zwei Abbildungen offen), 6.1 bis 6.5 geschrieben, 6.6 folgt als Nächstes, 5.1 und 5.2 verschoben |
| **09.11.** | Termin mit Rainer, 10:30 | |
| 16.–27.11. | Restliche Sitzungen Teamprojekt 1 (Termine bis 27.11.), direkt ausgewertet; Entwickler-Sitzungen offen (TODO.md). Teamprojekt 2 entfällt (Entscheidung 29.10.) | Kap. 5 ganz, 5.1 bis 5.6 (16 S. in 10 Arbeitstagen, 1,6 S. je Tag) |
| 30.11.–11.12. | Auswertung abschließen (Verbindung Knotenstatus zu Antwort, Entwickler getrennt) | Kap. 7; Kap. 6 auf den gefahrenen Stand bringen (was Generalprobe, Pilot und Sitzungen am Design geändert haben); 11.12. Kap. 5 und 7 fertig (30 S., interner Meilenstein, kein Lesetermin) |
| 14.–23.12. | | Kap. 8 und 9; Kap. 1–3 aus dem Exposé übernehmen und aktualisieren, dabei Grundlagen als eigenes Kapitel herausziehen und 2.2 Token neu schreiben; Einleitung nachziehen |
| 24.12.–06.01. | | Eigene Durchsicht des ganzen Texts, Kürzungsrunde Kap. 4 (von 19 auf ca. 14 Seiten), Abbildungen, Anhang, Kurzfassung; rote Markierungen vom 13.11. entfernen; Rainer bekommt nichts |
| 07.–16.01. | | **07.01. Gesamtentwurf an Rainer** — sein einziger Lesetermin: er liest einmal etwa 30 min und meldet innerhalb von 24 h zurück (08.01.); Überarbeitung nach Rückmeldung, Korrekturlesen durch Dritte anstoßen; **16.01. druckfertig** |
| 17.01.–16.02. | | Puffer: Korrekturlesen, Layout, Druck; Abgabe spätestens 16.02. |

Teamprojekt 2 ist weggefallen (29.10.), die Zeit 16.–27.11. geht ganz in Kap. 5, der Rest
bleibt.
Lesen, Ergebnis des Termins am 26.10.: Rainer liest insgesamt einmal etwa 30 Minuten und
gibt Rückmeldung innerhalb von 24 Stunden. Gelesen wird der Gesamtentwurf vom 07.01.; die
Stände vom 13.11. und 11.12. sind interne Meilensteine ohne Rückmeldung. Das Warten auf
Rückmeldungen entfällt damit aus dem Plan; dafür gibt es vor dem 07.01. keine externe
Kontrolle, die eigene Durchsicht 24.12.–06.01. muss das auffangen.

## Notizen aus dem Termin mit Rainer, 26.10.

Nächster Termin: 09.11., 10:30. Dort besprechen: Zeitplanung, Zwischenstand der Studie.

Lesen: Rainer liest insgesamt einmal etwa 30 Minuten und gibt Feedback innerhalb von
24 Stunden. Das trifft den Gesamtentwurf am 07.01.; die Stände vom 13.11. und 11.12.
bekommen keine Rückmeldung.

In Gliederungstabelle und Zeitplan eingearbeitet am 26.10.; offen bleibt nur der Punkt
zum separaten Kapitel für Ziele und Ausrichtungsänderungen (am 09.11. klären).
Zusammenfassung am 26.10. per Mail an Rainer geschickt.

Gliederung:

- Grundlagen als eigenes, kurzes Kapitel, getrennt vom Forschungsstand. Sortieren, was
  wichtig ist; einiges ist bisher nur Oberfläche und muss genauer werden. Nur das
  Wichtige, Mut zur Lücke. Leitfrage für die Grundlagen: Was muss der Leser wissen, um
  die Arbeit zu verstehen? Beispiele: wie ein Coding-Agent-System funktioniert (um den
  Ablauf der Arbeit zu verstehen), was Token genau bedeuten und welche Relevanz die Zahl
  x Token hat — Token als die relevante Währung.
- Unterschied Grundlagen und Forschungsstand: im Forschungsstand nur, was im Moment für
  diese Arbeit relevant ist und was nicht. Der Forschungsstand beschreibt den Stand vom
  Anfang der Arbeit und ist damit fertig, er wird nicht laufend nachgezogen.
- Abgrenzung (bisher Kap. 3) wird Unterkapitel im Stand der Forschung.
- Separates Kapitel: Was genau wollen wir erreichen? Ausgangslage einbeziehen,
  Ausrichtungsänderungen dokumentieren und diskutieren. Die Schwenks nicht in den
  Forschungsstand einbeziehen. Offen: Verhältnis zur bisherigen Regel „Abweichungen
  bekommen kein Sammelkapitel“ (siehe oben) klären.
- Kap. 4 Das Werkzeug: Konzeption (geplante Architektur, Verfahren, Tools,
  Informationsquellen) und wirkliche Umsetzung separieren.
- Kap. 7 Ergebnisse der Studie: Vormessungen und deren Ergebnisse auch hier berichten.
  Die Vormessungen sind Teil der Studie und werden nicht getrennt behandelt. Fokus auf
  die fünf wichtigsten Messungen, die kommen ausführlich; die übrigen elf nur kurz
  (warum, wie, Ergebnis) in einem gemeinsamen Abschnitt.
