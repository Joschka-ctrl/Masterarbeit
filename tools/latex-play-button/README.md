# LaTeX Play Button

Kleine VS-Code-Extension, die im Editor-Titel jeder `.tex`-Datei einen ▶-Play-Button
anzeigt. Klick → das Dokument wird mit `latexmk` kompiliert und das PDF daneben
geöffnet bzw. aktualisiert.

## Funktionsweise

- Button erscheint oben rechts im Editor-Titel, sobald eine `.tex`-Datei aktiv ist.
- Speichert vor dem Build alle offenen Dateien.
- Wurzel-Datei: beachtet `% !TEX root = ../main.tex`, sonst wird die aktive Datei gebaut.
- Build-Ausgabe landet im Output-Kanal **„LaTeX Play"**.
- PDF wird mit dem installierten Viewer (`tomoki1207.pdf`) geöffnet und lädt bei jedem
  weiteren Build automatisch neu.

## Einstellungen

| Setting | Default | Bedeutung |
| --- | --- | --- |
| `latexPlay.command` | `latexmk` | Kompilier-Programm |
| `latexPlay.args` | `-pdf -interaction=nonstopmode -synctex=1 -file-line-error` | Argumente vor dem Dateinamen |
| `latexPlay.openPdfAfterBuild` | `true` | PDF nach Build öffnen |

## Installation

Wird per Skript nach `~/.vscode/extensions/latex-play-button` kopiert. Danach VS Code
neu laden (`Developer: Reload Window`). Alternativ als `.vsix` paketieren:

```bash
npm install -g @vscode/vsce
vsce package
```
