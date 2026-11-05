// Charge les fichiers de données du jeu (écrits pour le navigateur) dans Node.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
export const RACINE = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
export function charger() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const f of ['data/clubs.js', 'data/joueurs.js', 'js/reponses.js']) {
    vm.runInContext(fs.readFileSync(path.join(RACINE, f), 'utf8'), ctx, { filename: f });
  }
  return { clubs: ctx.window.BK_CLUBS, donnees: ctx.window.BK_JOUEURS, reponses: ctx.window.BKReponses };
}
