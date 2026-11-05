// Vérifie la cohérence des données : node outils/verifier-donnees.mjs
import { charger } from './charger.mjs';
const { clubs, donnees } = charger();
const erreurs = [], avertissements = [];
const annee = new Date().getFullYear();
if (!/^\d{4}-\d{2}-\d{2}$/.test(donnees.miseAJour)) erreurs.push('miseAJour doit être au format AAAA-MM-JJ');
for (const [id, c] of Object.entries(clubs)) {
  if (!c.nom) erreurs.push(`club ${id} : nom manquant`);
  if (!(c.lat >= -90 && c.lat <= 90 && c.lon >= -180 && c.lon <= 180)) erreurs.push(`club ${id} : coordonnées invalides`);
}
const noms = new Set(), parNiveau = {};
const utilises = new Set();
for (const j of donnees.joueurs) {
  const q = `${j.nom} :`;
  if (noms.has(j.nom)) erreurs.push(`${q} joueur en double`); noms.add(j.nom);
  if (!['facile', 'difficile', 'expert'].includes(j.niveau)) erreurs.push(`${q} niveau inconnu « ${j.niveau} »`);
  parNiveau[j.niveau] = (parNiveau[j.niveau] || 0) + 1;
  if (!j.presentation) erreurs.push(`${q} phrase de présentation manquante`);
  if (!Array.isArray(j.carriere) || !j.carriere.length) { erreurs.push(`${q} carrière vide`); continue; }
  j.carriere.forEach((e, i) => {
    utilises.add(e.club);
    if (!clubs[e.club]) erreurs.push(`${q} club inconnu « ${e.club} » (ajoutez-le dans data/clubs.js)`);
    if (!Number.isInteger(e.de) || e.de < 1900 || e.de > annee + 1) erreurs.push(`${q} année d'arrivée invalide (${e.de}) à l'étape ${i + 1}`);
    if (e.a !== null && (!Number.isInteger(e.a) || e.a < e.de)) erreurs.push(`${q} année de départ invalide (${e.a}) à l'étape ${i + 1}`);
    if (e.a === null && i !== j.carriere.length - 1) erreurs.push(`${q} seul le dernier club peut être le club actuel (étape ${i + 1})`);
    const prec = j.carriere[i - 1];
    if (prec) {
      if (e.de < prec.de) erreurs.push(`${q} étapes dans le désordre (étape ${i + 1})`);
      if (prec.club === e.club) avertissements.push(`${q} deux étapes consécutives dans le même club (${e.club})`);
      if (prec.a !== null && e.de < prec.a) avertissements.push(`${q} chevauchement entre les étapes ${i} et ${i + 1}`);
    }
  });
}
for (const [n, c] of Object.entries(parNiveau)) if (c !== 100) avertissements.push(`niveau ${n} : ${c} joueurs (100 attendus)`);
for (const id of Object.keys(clubs)) if (!utilises.has(id)) avertissements.push(`club ${id} jamais utilisé`);
console.log(`${donnees.joueurs.length} joueurs, ${Object.keys(clubs).length} clubs, mise à jour du ${donnees.miseAJour}`);
avertissements.forEach((a) => console.log('  avertissement : ' + a));
erreurs.forEach((e) => console.log('  ERREUR : ' + e));
if (erreurs.length) { console.log(`\n${erreurs.length} erreur(s). Corrigez-les avant de publier.`); process.exit(1); }
console.log('\nAucune erreur : les données sont valides.');
