/* ==========================================================================
   Grand Chelem — quiz football à plateau (de 1 à 6 joueurs, un seul téléphone)
   ========================================================================== */
(function () {
  'use strict';

  const CATS = window.GC_QUESTIONS.categories;          // 6 catégories, dans l'ordre du plateau
  const COULEURS_JOUEURS = ['#1F2421', '#7048E8', '#0C8599', '#C92A2A', '#1C3D7A', '#868E96'];
  const MAX_JOUEURS = 6;
  const CLE_PARTIE = 'grandchelem.partie';
  const CLE_NOMS = 'grandchelem.noms';
  const CLE_REPONSES = 'grandchelem.reponses';
  const CLE_RECORD = 'grandchelem.record.solo';

  const $ = function (id) { return document.getElementById(id); };
  const SVG = 'http://www.w3.org/2000/svg';
  const ecrans = { preparation: $('ecran-preparation'), partie: $('ecran-partie'), fin: $('ecran-fin') };

  function lire(cle) { try { return window.localStorage.getItem(cle); } catch (e) { return null; } }
  function ecrire(cle, v) { try { window.localStorage.setItem(cle, v); } catch (e) { /* stockage indisponible */ } }
  function effacer(cle) { try { window.localStorage.removeItem(cle); } catch (e) { /* stockage indisponible */ } }
  function lireJSON(cle) { try { return JSON.parse(lire(cle)); } catch (e) { return null; } }

  function melanger(t) {
    for (let i = t.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const x = t[i]; t[i] = t[j]; t[j] = x; }
    return t;
  }
  function el(nom, attrs, parent) {
    const e = document.createElementNS(SVG, nom);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(e);
    return e;
  }
  function html(nom, classe, texte) {
    const e = document.createElement(nom);
    if (classe) e.className = classe;
    if (texte != null) e.textContent = texte;
    return e;
  }

  // Hauteur réellement visible (barre Safari, clavier)
  function majViewport() {
    const vv = window.visualViewport;
    document.documentElement.style.setProperty('--vvh', (vv ? vv.height : window.innerHeight) + 'px');
  }
  if (window.visualViewport) window.visualViewport.addEventListener('resize', majViewport);
  window.addEventListener('resize', majViewport);
  majViewport();

  function montrer(nom) { Object.keys(ecrans).forEach(function (k) { ecrans[k].classList.toggle('actif', k === nom); }); }

  // ==================================================================
  // Le plateau : un anneau de 42 cases, 6 rayons de 5 cases, un centre
  // ==================================================================
  const N_ANNEAU = 42, ECART = 7;                       // une case trophée toutes les 7 cases
  const R_CENTRE = 36, R_RAYON_FIN = 141, R_INT = 148, R_EXT = 190;
  const DA = 2 * Math.PI / N_ANNEAU;
  // catégories des cases entre deux cases trophée (décalage par rapport au trophée précédent)
  const MOTIF = [null, 1, 3, null, 4, 2, null];         // null en 3 et 6 : cases « relance »
  const noeuds = {};

  function angleAnneau(i) { return -Math.PI / 2 + i * DA; }
  function pt(r, a) { return [r * Math.cos(a), r * Math.sin(a)]; }
  function f(n) { return Math.round(n * 100) / 100; }
  function secteur(r1, r2, a1, a2) {
    const p1 = pt(r1, a1), p2 = pt(r2, a1), p3 = pt(r2, a2), p4 = pt(r1, a2);
    const grand = a2 - a1 > Math.PI ? 1 : 0;
    return 'M' + f(p1[0]) + ' ' + f(p1[1]) + 'L' + f(p2[0]) + ' ' + f(p2[1]) +
      'A' + r2 + ' ' + r2 + ' 0 ' + grand + ' 1 ' + f(p3[0]) + ' ' + f(p3[1]) +
      'L' + f(p4[0]) + ' ' + f(p4[1]) + 'A' + r1 + ' ' + r1 + ' 0 ' + grand + ' 0 ' + f(p1[0]) + ' ' + f(p1[1]) + 'Z';
  }
  function ajouter(id, n) { n.id = id; n.voisins = []; noeuds[id] = n; return n; }
  function lier(a, b) { noeuds[a].voisins.push(b); noeuds[b].voisins.push(a); }

  (function construirePlateau() {
    ajouter('c', { type: 'centre', cat: null, x: 0, y: 0,
      forme: 'M0 ' + (-R_CENTRE) + 'A' + R_CENTRE + ' ' + R_CENTRE + ' 0 1 1 0 ' + R_CENTRE + 'A' + R_CENTRE + ' ' + R_CENTRE + ' 0 1 1 0 ' + (-R_CENTRE) + 'Z' });
    for (let i = 0; i < N_ANNEAU; i++) {
      const k = Math.floor(i / ECART), p = i % ECART, a = angleAnneau(i);
      const siege = p === 0, relance = MOTIF[p] === null && !siege;
      const c = pt((R_INT + R_EXT) / 2, a);
      ajouter('a' + i, {
        type: 'anneau', siege: siege, relance: relance,
        cat: siege ? k : (relance ? null : (k + MOTIF[p]) % 6),
        x: c[0], y: c[1],
        forme: siege ? secteur(R_INT - 6, R_EXT + 6, a - DA / 2 - 0.02, a + DA / 2 + 0.02) : secteur(R_INT, R_EXT, a - DA / 2, a + DA / 2),
      });
    }
    for (let i = 0; i < N_ANNEAU; i++) lier('a' + i, 'a' + ((i + 1) % N_ANNEAU));
    const pas = (R_RAYON_FIN - R_CENTRE) / 5, demi = 12;
    for (let k = 0; k < 6; k++) {
      const a = angleAnneau(k * ECART), u = [Math.cos(a), Math.sin(a)], v = [-Math.sin(a), Math.cos(a)];
      for (let j = 0; j < 5; j++) {
        const r1 = R_CENTRE + j * pas + 0.8, r2 = R_CENTRE + (j + 1) * pas - 0.8, rm = (r1 + r2) / 2;
        const coin = function (r, s) { return f(r * u[0] + s * demi * v[0]) + ' ' + f(r * u[1] + s * demi * v[1]); };
        ajouter('r' + k + '-' + j, {
          type: 'rayon', cat: (k + 1 + j) % 6, x: rm * u[0], y: rm * u[1],
          forme: 'M' + coin(r1, -1) + 'L' + coin(r2, -1) + 'L' + coin(r2, 1) + 'L' + coin(r1, 1) + 'Z',
        });
        lier('r' + k + '-' + j, j === 0 ? 'c' : 'r' + k + '-' + (j - 1));
      }
      lier('r' + k + '-4', 'a' + (k * ECART));
    }
  })();

  // Toutes les cases atteignables en exactement n pas, sans repasser deux fois par la même case
  // (donc sans faire demi-tour). Renvoie { idCase: [chemin…] }.
  function destinations(depart, n) {
    const res = {};
    (function explorer(id, reste, chemin, vus) {
      if (reste === 0) { if (!res[id]) res[id] = chemin.slice(); return; }
      noeuds[id].voisins.forEach(function (v) {
        if (vus[v]) return;
        vus[v] = true; chemin.push(v);
        explorer(v, reste - 1, chemin, vus);
        chemin.pop(); vus[v] = false;
      });
    })(depart, n, [], (function () { const o = {}; o[depart] = true; return o; })());
    return res;
  }

  // ---- Dessin du plateau ----
  const plateau = $('plateau');
  const coucheCases = el('g', {}, plateau);
  const coucheCibles = el('g', {}, plateau);
  const couchePions = el('g', {}, plateau);

  (function dessinerPlateau() {
    // les cases trophée, plus grandes, sont dessinées en dernier pour ne pas être recouvertes
    Object.keys(noeuds).sort(function (a, b) { return !!noeuds[a].siege - !!noeuds[b].siege; }).forEach(function (id) {
      const n = noeuds[id];
      if (n.type === 'centre') return;
      const p = el('path', { d: n.forme, class: 'case' + (n.relance ? ' relance' : ''), 'data-noeud': id }, coucheCases);
      if (n.cat !== null) p.setAttribute('fill', CATS[n.cat].couleur);
      if (n.siege) el('text', { x: f(n.x), y: f(n.y), class: 'symbole etoile' }, coucheCases).textContent = '★';
      if (n.relance) el('text', { x: f(n.x), y: f(n.y), class: 'symbole relance-txt' }, coucheCases).textContent = '↻';
    });
    const moyeu = el('g', { class: 'moyeu', 'data-noeud': 'c' }, coucheCases);
    for (let k = 0; k < 6; k++) {
      const a = angleAnneau(k * ECART);
      el('path', { d: secteur(0.01, R_CENTRE, a - Math.PI / 6, a + Math.PI / 6), fill: CATS[k].couleur, class: 'moyeu' }, moyeu);
    }
    el('circle', { cx: 0, cy: 0, r: 14, class: 'moyeu-centre' }, moyeu);
    el('text', { x: 0, y: 1, class: 'symbole', 'font-size': 17 }, moyeu).textContent = '⚽';
  })();

  // Petit logo de l'écran de préparation
  (function dessinerLogo() {
    const logo = $('logo-gc');
    for (let k = 0; k < 6; k++) {
      const a = -Math.PI / 2 + k * Math.PI / 3;
      el('path', { d: secteur(0.01, 46, a - Math.PI / 6 + 0.04, a + Math.PI / 6 - 0.04), fill: CATS[k].couleur }, logo);
    }
    el('circle', { cx: 0, cy: 0, r: 17, fill: '#F6F4EE' }, logo);
    el('text', { x: 0, y: 2, 'font-size': 20, 'text-anchor': 'middle', 'dominant-baseline': 'central' }, logo).textContent = '⚽';
  })();

  // ==================================================================
  // État de la partie (enregistré à chaque étape : on peut reprendre)
  // ==================================================================
  let etat = null;
  let anime = false;

  function sauver() { if (etat && etat.phase !== 'fin') ecrire(CLE_PARTIE, JSON.stringify(etat)); }
  function joueur() { return etat.joueurs[etat.tour]; }
  function complet(j) { return j.trophees.every(Boolean); }
  function solo() { return etat.joueurs.length === 1; }

  function nouvellePartie(noms, reponses) {
    etat = {
      v: 1,
      reponses: reponses,
      joueurs: noms.map(function (nom, i) {
        return { nom: nom, couleur: COULEURS_JOUEURS[i], pos: 'c', trophees: [false, false, false, false, false, false], bonnes: 0, questions: 0, lancers: 0 };
      }),
      tour: Math.floor(Math.random() * noms.length),
      phase: 'lancer', de: null, destinations: null, question: null, gagnant: null,
      pioches: CATS.map(function () { return []; }),
      message: '',
    };
    etat.message = solo() ? 'Lance le dé pour commencer.' : 'Le hasard a parlé : ' + joueur().nom + ' commence.';
    sauver();
    montrer('partie');
    rendre();
  }

  function piocher(cat) {
    if (!etat.pioches[cat].length) etat.pioches[cat] = melanger(CATS[cat].questions.map(function (_, i) { return i; }));
    return etat.pioches[cat].pop();
  }

  function joueurSuivant() {
    etat.tour = (etat.tour + 1) % etat.joueurs.length;
  }

  // ---- Dé ----
  function lancer(valeurForcee) {
    if (anime || etat.phase !== 'lancer') return;
    const j = joueur();
    etat.de = valeurForcee || 1 + Math.floor(Math.random() * 6);
    j.lancers++;
    etat.destinations = destinations(j.pos, etat.de);
    etat.phase = 'deplacer';
    const ids = Object.keys(etat.destinations);
    etat.message = ids.length > 1 ? 'Touche une case en surbrillance.' : '';
    sauver();
    rendre(true);
    if (ids.length === 1) setTimeout(function () { choisir(ids[0]); }, 500);
  }

  // ---- Déplacement ----
  function choisir(id) {
    if (anime || etat.phase !== 'deplacer' || !etat.destinations || !etat.destinations[id]) return;
    const chemin = etat.destinations[id];
    const j = joueur();
    anime = true;
    etat.message = '';
    etat.destinations = null;
    rendre();
    let s = 0;
    (function pas() {
      j.pos = chemin[s];
      dessinerPions();
      s++;
      if (s < chemin.length) setTimeout(pas, 140);
      else setTimeout(function () { anime = false; arriver(id); }, 220);
    })();
  }

  function arriver(id) {
    const n = noeuds[id], j = joueur();
    if (n.relance) {
      etat.phase = 'lancer';
      etat.message = 'Case ↻ : relance le dé !';
    } else if (n.type === 'centre') {
      if (complet(j)) {
        if (solo()) poser(Math.floor(Math.random() * 6), { finale: true });
        else { etat.phase = 'finale'; etat.message = ''; }
      } else { etat.phase = 'categorie'; etat.message = ''; }
    } else {
      poser(n.cat, { siege: n.siege });
    }
    sauver();
    rendre();
  }

  // ---- Questions ----
  function poser(cat, opts) {
    const n = piocher(cat), q = CATS[cat].questions[n];
    etat.question = {
      cat: cat, n: n, siege: !!opts.siege, finale: !!opts.finale,
      ordre: melanger([q.r].concat(q.f)), choix: null, revele: false, resultat: null,
    };
    etat.phase = 'question';
    etat.message = '';
  }

  function repondre(bon, choix) {
    const q = etat.question, j = joueur();
    if (!q || q.resultat !== null) return;
    q.choix = choix == null ? null : choix;
    q.resultat = bon;
    j.questions++;
    if (bon) {
      j.bonnes++;
      if (q.siege && !j.trophees[q.cat]) { j.trophees[q.cat] = true; q.trophee = true; }
      if (q.finale) q.victoire = true;
    }
    sauver();
    rendre();
  }

  function continuer() {
    const q = etat.question;
    if (!q || q.resultat === null) return;
    etat.question = null;
    if (q.victoire) { terminer(); return; }
    etat.phase = 'lancer';
    if (q.resultat) {
      etat.message = complet(joueur()) && !q.finale
        ? 'Tu as les 6 trophées ! File au centre, pile sur la case.'
        : 'Bonne réponse : rejoue !';
    } else if (solo()) {
      etat.message = 'Raté. Relance le dé.';
    } else {
      joueurSuivant();
      etat.message = 'Passe le téléphone : à ' + joueur().nom + ' !';
    }
    sauver();
    rendre();
  }

  function terminer() {
    etat.phase = 'fin';
    etat.gagnant = etat.tour;
    $('feuille').hidden = true;
    effacer(CLE_PARTIE);
    const g = joueur();
    $('titre-fin').textContent = solo() ? 'Grand Chelem réussi !' : g.nom + ' remporte le Grand Chelem !';
    $('fin-sous-titre').textContent = solo()
      ? 'En ' + g.lancers + ' lancer' + (g.lancers > 1 ? 's' : '') + ' de dé.'
      : 'Six trophées et la question finale, bravo.';
    let record = false;
    if (solo()) {
      const ancien = parseInt(lire(CLE_RECORD) || '0', 10);
      if (!ancien || g.lancers < ancien) { ecrire(CLE_RECORD, String(g.lancers)); record = ancien > 0; }
      if (ancien && g.lancers >= ancien) $('fin-sous-titre').textContent += ' Record : ' + ancien + ' lancers.';
    }
    $('nouveau-record').hidden = !record;
    const bilan = $('bilan');
    bilan.innerHTML = '';
    etat.joueurs.map(function (j, i) { return { j: j, i: i, t: j.trophees.filter(Boolean).length }; })
      .sort(function (a, b) { return (b.i === etat.gagnant) - (a.i === etat.gagnant) || b.t - a.t || b.j.bonnes - a.j.bonnes; })
      .forEach(function (x) {
        const li = html('li');
        const nom = html('span', 'nom');
        const p = html('span', 'gc-pastille-joueur'); p.style.background = x.j.couleur;
        nom.appendChild(p); nom.appendChild(html('span', '', x.j.nom));
        li.appendChild(nom);
        const detail = html('span', 'detail');
        detail.appendChild(html('span', '', x.t + '/6 trophée' + (x.t > 1 ? 's' : '')));
        detail.appendChild(html('span', '', x.j.bonnes + '/' + x.j.questions + ' bonnes réponses'));
        li.appendChild(detail);
        bilan.appendChild(li);
      });
    montrer('fin');
  }

  // ==================================================================
  // Affichage
  // ==================================================================
  function pastille(couleur) { const p = html('span', 'gc-pastille-joueur'); p.style.background = couleur; return p; }

  // Initiale du joueur sur son pion, ou son numéro si deux joueurs ont la même initiale
  function initiale(nom) { return (nom.trim()[0] || '?').toUpperCase(); }
  function lettre(i) {
    const l = initiale(etat.joueurs[i].nom);
    const doublon = etat.joueurs.some(function (j, k) { return k !== i && initiale(j.nom) === l; });
    return doublon ? String(i + 1) : l;
  }

  function dessinerPions() {
    couchePions.innerHTML = '';
    const parCase = {};
    etat.joueurs.forEach(function (j, i) { (parCase[j.pos] = parCase[j.pos] || []).push(i); });
    Object.keys(parCase).forEach(function (id) {
      const liste = parCase[id], n = noeuds[id];
      // le joueur actif est dessiné en dernier (au-dessus)
      liste.sort(function (a, b) { return (a === etat.tour) - (b === etat.tour); });
      liste.forEach(function (i, rang) {
        const j = etat.joueurs[i];
        const decal = liste.length > 1 ? (n.type === 'centre' ? 17 : 7) : 0;
        const a = rang / liste.length * 2 * Math.PI - Math.PI / 2;
        const x = n.x + decal * Math.cos(a), y = n.y + decal * Math.sin(a);
        el('circle', { cx: f(x), cy: f(y), r: i === etat.tour ? 10 : 8.5, fill: j.couleur, class: 'pion' + (i === etat.tour ? ' actif' : '') }, couchePions);
        el('text', { x: f(x), y: f(y + 0.5), class: 'pion-lettre' }, couchePions).textContent = lettre(i);
      });
    });
  }

  function dessinerCibles() {
    coucheCibles.innerHTML = '';
    coucheCases.querySelectorAll('.atteignable').forEach(function (e) { e.classList.remove('atteignable'); });
    const ids = etat.phase === 'deplacer' && etat.destinations ? Object.keys(etat.destinations) : [];
    plateau.classList.toggle('choix', ids.length > 0);
    ids.forEach(function (id) {
      el('path', { d: noeuds[id].forme, class: 'cible' }, coucheCibles);
      const forme = coucheCases.querySelector('[data-noeud="' + id + '"]');
      if (forme) forme.classList.add('atteignable');
    });
  }

  const FACES = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
    5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] };
  function dessinerDe(valeur, rouler) {
    const boite = $('de');
    boite.innerHTML = '';
    const s = el('svg', { viewBox: '-20 -20 40 40' }, boite);
    el('rect', { x: -18, y: -18, width: 36, height: 36, rx: 8, fill: valeur ? '#1F2421' : '#E5E1D7' }, s);
    if (valeur) FACES[valeur].forEach(function (p) { el('circle', { cx: p[0] * 9, cy: p[1] * 9, r: 3.6, fill: '#fff' }, s); });
    else el('text', { x: 0, y: 1, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': 18, fill: '#8C867A', 'font-weight': 800 }, s).textContent = '?';
    boite.classList.remove('roule');
    if (rouler) { void boite.offsetWidth; boite.classList.add('roule'); }
  }

  function rendre(rouler) {
    const j = joueur();
    // bandeau
    const tour = $('tour');
    tour.innerHTML = '';
    tour.appendChild(pastille(j.couleur));
    tour.appendChild(html('span', '', solo() ? j.nom : 'Au tour de ' + j.nom));
    $('lancers').textContent = solo() ? j.lancers + ' lancer' + (j.lancers > 1 ? 's' : '') : '';
    // scores
    const scores = $('scores');
    scores.innerHTML = '';
    etat.joueurs.forEach(function (x, i) {
      const li = html('li', i === etat.tour ? 'actif' : '');
      const nom = html('span', 'nom');
      nom.appendChild(pastille(x.couleur)); nom.appendChild(html('span', '', x.nom));
      const tr = html('span', 'gc-trophees');
      x.trophees.forEach(function (t, k) {
        const d = html('i');
        if (t) { d.style.background = CATS[k].couleur; d.style.borderColor = CATS[k].couleur; }
        d.title = CATS[k].nom;
        tr.appendChild(d);
      });
      li.setAttribute('aria-label', x.nom + ' : ' + x.trophees.filter(Boolean).length + ' trophée(s) sur 6');
      li.appendChild(nom); li.appendChild(tr);
      scores.appendChild(li);
    });
    // plateau
    dessinerPions();
    dessinerCibles();
    // action
    $('message').textContent = etat.message || '';
    dessinerDe(etat.phase === 'lancer' && !rouler ? null : etat.de, rouler);
    const bouton = $('bouton-lancer');
    bouton.disabled = anime || etat.phase !== 'lancer';
    bouton.textContent = etat.phase === 'deplacer' ? 'Choisis ta case' : 'Lancer le dé';
    rendreFeuille();
  }

  function boutonsCategories(action, interdits) {
    const grille = html('div', 'gc-grille-cat');
    CATS.forEach(function (c, k) {
      const b = html('button', 'gc-bouton-cat', c.nom);
      b.type = 'button';
      b.style.setProperty('--cat', c.couleur);
      b.addEventListener('click', function () { action(k); });
      grille.appendChild(b);
    });
    return grille;
  }

  function rendreFeuille() {
    const feuille = $('feuille'), boite = $('feuille-boite');
    const entete = $('feuille-entete'), titre = $('feuille-titre'), corps = $('feuille-corps');
    const resultat = $('feuille-resultat'), pied = $('feuille-pied');
    const phase = etat.phase;
    if (phase !== 'question' && phase !== 'categorie' && phase !== 'finale') { feuille.hidden = true; return; }
    const ouvrir = feuille.hidden;
    feuille.hidden = false;
    corps.innerHTML = ''; pied.innerHTML = ''; resultat.textContent = ''; resultat.className = 'gc-feuille-resultat';
    const j = joueur();

    if (phase === 'categorie') {
      boite.style.removeProperty('--cat');
      entete.textContent = 'Centre du plateau · ' + j.nom;
      titre.textContent = 'Choisis la catégorie de ta question';
      corps.appendChild(boutonsCategories(function (k) { poser(k, {}); sauver(); rendre(); }));
    } else if (phase === 'finale') {
      boite.style.removeProperty('--cat');
      entete.textContent = 'Question finale pour ' + j.nom;
      titre.textContent = 'Passe le téléphone : les adversaires choisissent la catégorie.';
      corps.appendChild(boutonsCategories(function (k) { poser(k, { finale: true }); sauver(); rendre(); }));
    } else {
      const q = etat.question, c = CATS[q.cat], donnee = c.questions[q.n];
      boite.style.setProperty('--cat', c.couleur);
      entete.textContent = c.nom + (q.finale ? ' · question finale' : q.siege ? (j.trophees[q.cat] && !q.trophee ? ' · case trophée (déjà gagné)' : ' · question trophée ★') : '');
      titre.textContent = donnee.q;
      if (etat.reponses === 'qcm') {
        q.ordre.forEach(function (texte) {
          const b = html('button', 'gc-option', texte);
          b.type = 'button';
          if (q.resultat !== null) {
            b.disabled = true;
            if (texte === donnee.r) b.classList.add('bonne');
            else if (texte === q.choix) b.classList.add('fausse');
          }
          b.addEventListener('click', function () { repondre(texte === donnee.r, texte); });
          corps.appendChild(b);
        });
      } else if (q.revele || q.resultat !== null) {
        corps.appendChild(html('p', 'gc-reponse-libre', donnee.r));
        if (q.resultat === null) {
          const non = html('button', 'bouton-danger', 'Mauvaise réponse'); non.type = 'button';
          const oui = html('button', 'gc-bouton-vert', 'Bonne réponse'); oui.type = 'button';
          non.addEventListener('click', function () { repondre(false); });
          oui.addEventListener('click', function () { repondre(true); });
          pied.appendChild(non); pied.appendChild(oui);
        }
      } else {
        corps.appendChild(html('p', 'aide-mode', solo()
          ? 'Réponds à voix haute (ou dans ta tête), puis découvre la réponse.'
          : 'Un adversaire lit la question à voix haute. ' + j.nom + ' répond, puis on découvre la réponse.'));
        const voir = html('button', 'bouton-principal', 'Voir la réponse'); voir.type = 'button';
        voir.addEventListener('click', function () { q.revele = true; sauver(); rendreFeuille(); });
        pied.appendChild(voir);
      }
      if (q.resultat !== null) {
        if (q.resultat) {
          resultat.classList.add('gagne');
          resultat.textContent = q.victoire ? 'Bonne réponse : victoire !'
            : q.trophee ? 'Bonne réponse : trophée « ' + c.nom + ' » gagné !' : 'Bonne réponse !';
        } else {
          resultat.classList.add('perdu');
          resultat.textContent = etat.reponses === 'qcm' ? 'Raté ! La réponse était : ' + donnee.r : 'Dommage !';
        }
        const suite = html('button', 'bouton-principal',
          q.victoire ? 'Voir le bilan' : q.resultat ? 'Rejouer' : solo() ? 'Continuer' : 'Joueur suivant');
        suite.type = 'button';
        suite.addEventListener('click', continuer);
        pied.appendChild(suite);
      }
    }
    if (ouvrir) boite.scrollTop = 0;
  }

  // ---- Interactions plateau ----
  plateau.addEventListener('click', function (ev) {
    if (etat.phase !== 'deplacer' || !etat.destinations || anime) return;
    const m = plateau.getScreenCTM();
    if (!m) return;
    const p = new DOMPoint(ev.clientX, ev.clientY).matrixTransform(m.inverse());
    // la case visée la plus proche parmi celles en surbrillance (tolérant pour les petits doigts)
    let meilleur = null, dist = Infinity;
    Object.keys(etat.destinations).forEach(function (id) {
      const n = noeuds[id], d = Math.hypot(n.x - p.x, n.y - p.y);
      if (d < dist) { dist = d; meilleur = id; }
    });
    if (meilleur && dist < (meilleur === 'c' ? 50 : 30)) choisir(meilleur);
  });
  $('bouton-lancer').addEventListener('click', function () { lancer(); });

  // ---- Quitter ----
  $('bouton-quitter').addEventListener('click', function () { $('dialogue-quitter').hidden = false; });
  $('dialogue-non').addEventListener('click', function () { $('dialogue-quitter').hidden = true; });
  $('dialogue-oui').addEventListener('click', function () {
    $('dialogue-quitter').hidden = true;
    $('feuille').hidden = true;
    sauver();
    preparer();
  });

  // ==================================================================
  // Préparation de la partie
  // ==================================================================
  let noms = lireJSON(CLE_NOMS);
  if (!Array.isArray(noms) || !noms.length) noms = ['Joueur 1', 'Joueur 2'];
  noms = noms.slice(0, MAX_JOUEURS).map(String);
  let reponses = lire(CLE_REPONSES) === 'libre' ? 'libre' : 'qcm';

  function nomsDefinitifs() {
    return noms.map(function (n, i) { return n.trim().slice(0, 20) || 'Joueur ' + (i + 1); });
  }

  function rendreJoueurs() {
    const liste = $('liste-joueurs');
    liste.innerHTML = '';
    noms.forEach(function (nom, i) {
      const li = html('li');
      li.appendChild(pastille(COULEURS_JOUEURS[i]));
      const champ = html('input');
      champ.type = 'text'; champ.value = nom; champ.maxLength = 20;
      champ.placeholder = 'Joueur ' + (i + 1);
      champ.setAttribute('aria-label', 'Nom du joueur ' + (i + 1));
      champ.setAttribute('autocomplete', 'off'); champ.setAttribute('autocorrect', 'off'); champ.setAttribute('enterkeyhint', 'done');
      champ.addEventListener('input', function () { noms[i] = champ.value; ecrire(CLE_NOMS, JSON.stringify(noms)); });
      champ.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') champ.blur(); });
      li.appendChild(champ);
      if (noms.length > 1) {
        const x = html('button', 'gc-retirer', '✕');
        x.type = 'button'; x.setAttribute('aria-label', 'Retirer ' + (nom || 'ce joueur'));
        x.addEventListener('click', function () { noms.splice(i, 1); ecrire(CLE_NOMS, JSON.stringify(noms)); rendreJoueurs(); });
        li.appendChild(x);
      }
      liste.appendChild(li);
    });
    $('bouton-ajouter').disabled = noms.length >= MAX_JOUEURS;
    $('bouton-commencer').textContent = noms.length === 1 ? 'Jouer en solo' : 'Commencer à ' + noms.length;
  }
  $('bouton-ajouter').addEventListener('click', function () {
    if (noms.length >= MAX_JOUEURS) return;
    noms.push('Joueur ' + (noms.length + 1));
    ecrire(CLE_NOMS, JSON.stringify(noms));
    rendreJoueurs();
  });

  function rendreReponses() {
    document.querySelectorAll('#choix-reponses button').forEach(function (b) { b.setAttribute('aria-checked', String(b.dataset.valeur === reponses)); });
    $('aide-reponses').textContent = reponses === 'qcm'
      ? 'Quatre propositions par question : le téléphone vérifie la réponse.'
      : 'Comme avec des cartes : un adversaire lit la question, on répond de vive voix, puis on regarde la réponse.';
  }
  document.querySelectorAll('#choix-reponses button').forEach(function (b) {
    b.addEventListener('click', function () { reponses = b.dataset.valeur; ecrire(CLE_REPONSES, reponses); rendreReponses(); });
  });

  (function legende() {
    const ul = $('legende-categories');
    CATS.forEach(function (c) {
      const li = html('li');
      const puce = html('span', 'gc-puce'); puce.style.background = c.couleur;
      li.appendChild(puce); li.appendChild(html('span', '', c.nom));
      ul.appendChild(li);
    });
    const total = CATS.reduce(function (s, c) { return s + c.questions.length; }, 0);
    const record = parseInt(lire(CLE_RECORD) || '0', 10);
    $('gc-info').textContent = total + ' questions.' + (record ? ' Record en solo : ' + record + ' lancers.' : '');
  })();

  function partieEnregistree() {
    const p = lireJSON(CLE_PARTIE);
    return p && p.v === 1 && Array.isArray(p.joueurs) && p.joueurs.length && p.phase !== 'fin' ? p : null;
  }

  function preparer() {
    const p = partieEnregistree();
    const reprendre = $('bouton-reprendre');
    reprendre.hidden = !p;
    if (p) reprendre.textContent = 'Reprendre la partie en cours (' + p.joueurs.map(function (j) { return j.nom; }).join(', ') + ')';
    rendreJoueurs();
    rendreReponses();
    montrer('preparation');
  }

  $('bouton-reprendre').addEventListener('click', function () {
    const p = partieEnregistree();
    if (!p) { preparer(); return; }
    etat = p;
    anime = false;
    if (etat.phase === 'deplacer' && !etat.destinations) etat.phase = 'lancer';
    montrer('partie');
    rendre();
  });
  $('bouton-commencer').addEventListener('click', function () {
    if (partieEnregistree() && !window.confirm('Une partie est en cours. La remplacer par une nouvelle ?')) return;
    nouvellePartie(nomsDefinitifs(), reponses);
  });
  $('bouton-rejouer').addEventListener('click', function () {
    nouvellePartie(etat.joueurs.map(function (j) { return j.nom; }), etat.reponses);
  });
  $('bouton-preparation').addEventListener('click', preparer);

  // Accès pour les tests automatiques
  window.GCTest = {
    etat: function () { return etat; },
    noeuds: noeuds,
    destinations: destinations,
    lancer: lancer,
    choisir: choisir,
  };

  preparer();

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
