// Vérifie la banque de questions du Grand Chelem : node outils/verifier-questions.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { RACINE } from './charger.mjs';
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(RACINE, 'data/questions.js'), 'utf8'), ctx, { filename: 'data/questions.js' });
const { categories } = ctx.window.GC_QUESTIONS;
const erreurs = [];
if (!Array.isArray(categories) || categories.length !== 6) erreurs.push('il faut exactement 6 catégories');
const enonces = new Set(), ids = new Set();
for (const c of categories) {
  if (ids.has(c.id)) erreurs.push(`catégorie ${c.id} en double`); ids.add(c.id);
  if (!/^#[0-9A-Fa-f]{6}$/.test(c.couleur)) erreurs.push(`${c.id} : couleur invalide`);
  if (c.questions.length < 15) erreurs.push(`${c.id} : seulement ${c.questions.length} questions (15 minimum)`);
  c.questions.forEach((q, i) => {
    const o = `${c.id} n°${i + 1}`;
    if (!q.q || !q.q.trim().endsWith('?')) erreurs.push(`${o} : l'énoncé doit finir par « ? »`);
    if (enonces.has(q.q)) erreurs.push(`${o} : question en double`); enonces.add(q.q);
    if (!q.r) erreurs.push(`${o} : bonne réponse manquante`);
    if (!Array.isArray(q.f) || q.f.length !== 3) erreurs.push(`${o} : il faut 3 mauvaises réponses`);
    else if (new Set([q.r, ...q.f].map((x) => x.toLowerCase())).size !== 4) erreurs.push(`${o} : propositions en double`);
  });
}
for (const c of categories) console.log(`${c.nom.padEnd(18)} ${c.questions.length} questions`);
if (erreurs.length) { console.log('\nErreurs :'); erreurs.forEach((e) => console.log(' - ' + e)); process.exit(1); }
console.log('\nTout est bon.');
