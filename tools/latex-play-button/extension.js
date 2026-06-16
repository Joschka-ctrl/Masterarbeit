const vscode = require('vscode');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');

/** @type {vscode.OutputChannel} */
let output;

function activate(context) {
  output = vscode.window.createOutputChannel('LaTeX Play');
  context.subscriptions.push(
    vscode.commands.registerCommand('latexPlay.build', () => build()),
    output
  );
}

/**
 * Ermittelt die zu kompilierende Wurzel-Datei.
 * Beachtet die Magic-Comment-Zeile `% !TEX root = ../main.tex`,
 * ansonsten wird die aktive Datei selbst kompiliert.
 */
function findRoot(doc) {
  const head = doc.getText().slice(0, 2000);
  const m = head.match(/%\s*!TEX\s+root\s*=\s*(.+)/i);
  if (m) {
    return path.resolve(path.dirname(doc.uri.fsPath), m[1].trim());
  }
  return doc.uri.fsPath;
}

async function build() {
  const editor = vscode.window.activeTextEditor;
  if (!editor || path.extname(editor.document.fileName).toLowerCase() !== '.tex') {
    vscode.window.showWarningMessage('LaTeX Play: Keine .tex-Datei aktiv.');
    return;
  }

  // Aktive Datei (und alle anderen ungespeicherten) sichern, damit der Build aktuell ist.
  await vscode.workspace.saveAll(false);

  const rootFile = findRoot(editor.document);
  const cwd = path.dirname(rootFile);
  const cfg = vscode.workspace.getConfiguration('latexPlay');
  const cmd = cfg.get('command', 'latexmk');
  const args = cfg.get('args', ['-pdf', '-interaction=nonstopmode', '-synctex=1', '-file-line-error']);
  const fullArgs = [...args, path.basename(rootFile)];

  output.clear();
  output.appendLine(`$ ${cmd} ${fullArgs.join(' ')}`);
  output.appendLine(`  (Arbeitsverzeichnis: ${cwd})\n`);

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: 'LaTeX: kompiliere PDF …',
      cancellable: true,
    },
    (_progress, token) =>
      new Promise((resolve) => {
        const proc = cp.spawn(cmd, fullArgs, { cwd, shell: true });

        token.onCancellationRequested(() => proc.kill());
        proc.stdout.on('data', (d) => output.append(d.toString()));
        proc.stderr.on('data', (d) => output.append(d.toString()));

        proc.on('error', (err) => {
          vscode.window.showErrorMessage(
            `LaTeX Play: "${cmd}" konnte nicht gestartet werden – ${err.message}`
          );
          output.show(true);
          resolve();
        });

        proc.on('close', async (code) => {
          if (code === 0) {
            const pdf = rootFile.replace(/\.tex$/i, '.pdf');
            if (cfg.get('openPdfAfterBuild', true) && fs.existsSync(pdf)) {
              await openPdf(pdf);
            }
            vscode.window.setStatusBarMessage('$(check) LaTeX: PDF aktualisiert', 4000);
          } else {
            vscode.window.showErrorMessage(
              `LaTeX Play: Build fehlgeschlagen (Exit-Code ${code}). Details im Output "LaTeX Play".`
            );
            output.show(true);
          }
          resolve();
        });
      })
  );
}

/**
 * Öffnet das PDF daneben. Ist es bereits in einem Tab offen, passiert nichts –
 * der PDF-Viewer (tomoki1207.pdf) lädt die geänderte Datei automatisch neu.
 */
async function openPdf(pdf) {
  const uri = vscode.Uri.file(pdf);
  const already = vscode.window.tabGroups.all.some((g) =>
    g.tabs.some((t) => {
      const input = /** @type {any} */ (t.input);
      return input && input.uri && input.uri.fsPath === uri.fsPath;
    })
  );
  if (already) return;
  await vscode.commands.executeCommand('vscode.open', uri, {
    viewColumn: vscode.ViewColumn.Beside,
    preserveFocus: true,
  });
}

function deactivate() {}

module.exports = { activate, deactivate };
