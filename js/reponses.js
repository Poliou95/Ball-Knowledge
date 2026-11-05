/* ==========================================================================
   Ball Knowledge — reconnaissance des réponses
   - ignore majuscules, accents, apostrophes et tirets
   - tolère les petites fautes de frappe (distance d'édition)
   - accepte le nom de famille seul s'il n'est porté que par un seul joueur
   - les surnoms / variantes explicites sont prioritaires (ex. « Ronaldo »
     désigne le Brésilien, « Cristiano » le Portugais)
   Utilisable dans le navigateur (window.BKReponses) et dans Node (tests).
   ========================================================================== */
(function (racine) {
  'use strict';

  function normaliser(texte) {
    return String(texte || '')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/ß/g, 'ss').replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/œ/g, 'oe')
      .replace(/[đð]/g, 'd').replace(/ł/g, 'l').replace(/ı/g, 'i').replace(/þ/g, 'th')
      .replace(/['’`´]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  // Distance de Damerau-Levenshtein (version « transpositions adjacentes »)
  function distance(a, b, max) {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > max) return max + 1;
    const n = a.length, m = b.length;
    let avant = null;                 // ligne i-2
    let prec = [];                    // ligne i-1
    for (let j = 0; j <= m; j++) prec[j] = j;
    for (let i = 1; i <= n; i++) {
      const cour = [i];
      let minLigne = i;
      for (let j = 1; j <= m; j++) {
        const cout = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(prec[j] + 1, cour[j - 1] + 1, prec[j - 1] + cout);
        if (avant && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, avant[j - 2] + 1);
        cour[j] = v;
        if (v < minLigne) minLigne = v;
      }
      if (minLigne > max) return max + 1;
      avant = prec; prec = cour;
    }
    return prec[m];
  }

  // Nombre de fautes tolérées selon la longueur du nom attendu
  function tolerance(longueur) {
    if (longueur <= 4) return 0;
    if (longueur <= 8) return 1;
    return 2;
  }

  /**
   * Prépare l'index des réponses à partir de la liste complète des joueurs
   * (tous niveaux confondus, pour détecter les noms ambigus).
   */
  function creerIndex(joueurs) {
    const entrees = []; // { cle, joueur, fort }
    const vues = new Set();
    joueurs.forEach(function (j, idx) {
      const fortes = [j.nom].concat(j.autresReponses || []);
      fortes.forEach(function (r) {
        const cle = normaliser(r);
        if (cle && !vues.has(idx + '|' + cle)) { vues.add(idx + '|' + cle); entrees.push({ cle: cle, joueur: idx, fort: true }); }
      });
      (j.nomDeFamille || []).forEach(function (r) {
        const cle = normaliser(r);
        if (cle && !vues.has(idx + '|' + cle)) { vues.add(idx + '|' + cle); entrees.push({ cle: cle, joueur: idx, fort: false }); }
      });
    });
    return { joueurs: joueurs, entrees: entrees };
  }

  /**
   * Interprète une saisie.
   * Renvoie { type: 'joueur', joueur: index } | { type: 'ambigu', joueurs: [...] } | { type: 'inconnu' }
   */
  function interpreter(index, saisie) {
    const texte = normaliser(saisie);
    if (!texte) return { type: 'vide' };
    // 1) correspondances exactes
    const exactes = index.entrees.filter(function (e) { return e.cle === texte; });
    const res = choisir(exactes);
    if (res) return res;
    // 2) correspondances approchées (fautes de frappe) : on garde la plus petite distance
    let meilleure = Infinity, candidats = [];
    index.entrees.forEach(function (e) {
      const tol = tolerance(e.cle.length);
      if (tol === 0) return;
      const d = distance(texte, e.cle, tol);
      if (d > tol) return;
      if (d < meilleure) { meilleure = d; candidats = [e]; }
      else if (d === meilleure) candidats.push(e);
    });
    return choisir(candidats) || { type: 'inconnu' };
  }

  function choisir(entrees) {
    if (!entrees.length) return null;
    const fortes = uniques(entrees.filter(function (e) { return e.fort; }));
    if (fortes.length === 1) return { type: 'joueur', joueur: fortes[0] };
    if (fortes.length > 1) return { type: 'ambigu', joueurs: fortes };
    const faibles = uniques(entrees);
    if (faibles.length === 1) return { type: 'joueur', joueur: faibles[0] };
    return { type: 'ambigu', joueurs: faibles };
  }

  function uniques(entrees) {
    const s = [];
    entrees.forEach(function (e) { if (s.indexOf(e.joueur) < 0) s.push(e.joueur); });
    return s;
  }

  /**
   * Vérifie une réponse pour le joueur attendu.
   * Renvoie 'juste' | 'ambigu' | 'faux' | 'vide'
   */
  function verifier(index, saisie, indexAttendu) {
    const r = interpreter(index, saisie);
    if (r.type === 'vide') return 'vide';
    if (r.type === 'joueur') return r.joueur === indexAttendu ? 'juste' : 'faux';
    if (r.type === 'ambigu') return 'ambigu';
    return 'faux';
  }

  const api = { normaliser: normaliser, distance: distance, creerIndex: creerIndex, interpreter: interpreter, verifier: verifier };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  racine.BKReponses = api;
})(typeof window !== 'undefined' ? window : globalThis);
