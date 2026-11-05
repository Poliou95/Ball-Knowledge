/* ==========================================================================
   Ball Knowledge — logique de jeu
   ========================================================================== */
(function () {
  'use strict';

  const DUREE = 45;                 // secondes par footballeur
  const JOUEURS_CLASSIQUE = 10;
  const VIES_MARATHON = 3;
  const POINTS_BASE = 100;

  const DONNEES = window.BK_JOUEURS;
  const CLUBS = window.BK_CLUBS;
  const TOUS = DONNEES.joueurs;
  const INDEX = window.BKReponses.creerIndex(TOUS);

  const $ = function (id) { return document.getElementById(id); };
  const ecrans = { accueil: $('ecran-accueil'), jeu: $('ecran-jeu'), fin: $('ecran-fin') };
  const entree = $('reponse');
  const carte = new window.BKCarte($('carte'));

  // ------------------------------------------------------------------
  // Stockage local (meilleurs scores, derniers choix) — protégé
  // ------------------------------------------------------------------
  function lire(cle) { try { return window.localStorage.getItem(cle); } catch (e) { return null; } }
  function ecrire(cle, v) { try { window.localStorage.setItem(cle, v); } catch (e) { /* stockage indisponible */ } }
  function cleRecord(niveau, mode) { return 'ballknowledge.record.' + niveau + '.' + mode; }
  function record(niveau, mode) { return parseInt(lire(cleRecord(niveau, mode)) || '0', 10) || 0; }

  // ------------------------------------------------------------------
  // Hauteur visible : garde la case de réponse au-dessus du clavier iPhone
  // ------------------------------------------------------------------
  const app = $('app');
  function majViewport() {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--vvh', h + 'px');
    app.style.transform = vv && vv.offsetTop ? 'translateY(' + vv.offsetTop + 'px)' : '';
    // clavier ouvert : la zone de sécurité du bas (barre d'accueil) n'a plus lieu d'être
    const clavier = vv && window.innerHeight - vv.height > 120;
    document.documentElement.style.setProperty('--bas-actif', clavier ? '0px' : 'env(safe-area-inset-bottom, 0px)');
  }
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', majViewport);
    window.visualViewport.addEventListener('scroll', majViewport);
  }
  window.addEventListener('resize', majViewport);
  majViewport();

  // ------------------------------------------------------------------
  // Accueil
  // ------------------------------------------------------------------
  const NIVEAUX = { facile: 'Facile', difficile: 'Difficile', expert: 'Expert' };
  const MODES = { classique: 'Partie classique', marathon: 'Marathon' };
  let choixNiveau = NIVEAUX[lire('ballknowledge.niveau')] ? lire('ballknowledge.niveau') : 'facile';
  let choixMode = MODES[lire('ballknowledge.mode')] ? lire('ballknowledge.mode') : 'classique';

  function brancherSegments(id, getter, setter) {
    const boutons = $(id).querySelectorAll('button');
    function maj() { boutons.forEach(function (b) { b.setAttribute('aria-checked', String(b.dataset.valeur === getter())); }); }
    boutons.forEach(function (b) { b.addEventListener('click', function () { setter(b.dataset.valeur); maj(); majAccueil(); }); });
    maj();
  }
  brancherSegments('choix-niveau', function () { return choixNiveau; }, function (v) { choixNiveau = v; ecrire('ballknowledge.niveau', v); });
  brancherSegments('choix-mode', function () { return choixMode; }, function (v) { choixMode = v; ecrire('ballknowledge.mode', v); });

  function formaterDate(iso) {
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const p = String(iso).split('-');
    if (p.length !== 3) return iso;
    const jour = parseInt(p[2], 10);
    return (jour === 1 ? '1er' : jour) + ' ' + mois[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }

  function majAccueil() {
    $('aide-mode').textContent = choixMode === 'classique'
      ? JOUEURS_CLASSIQUE + ' footballeurs tirés au hasard, 45 secondes chacun.'
      : 'Enchaîne les footballeurs avec 3 vies. Passer ou laisser filer le chrono coûte une vie.';
    const corps = $('table-records');
    corps.innerHTML = '';
    Object.keys(NIVEAUX).forEach(function (n) {
      const tr = document.createElement('tr');
      const td = function (t) { const c = document.createElement('td'); c.textContent = t; tr.appendChild(c); };
      td(NIVEAUX[n]);
      td(record(n, 'classique') || '—');
      td(record(n, 'marathon') || '—');
      corps.appendChild(tr);
    });
  }
  $('date-maj').textContent = 'Données à jour au ' + formaterDate(DONNEES.miseAJour) + '.';
  majAccueil();

  function montrer(nom) {
    Object.keys(ecrans).forEach(function (k) { ecrans[k].classList.toggle('actif', k === nom); });
    if (nom !== 'jeu') entree.blur();
  }

  // ------------------------------------------------------------------
  // Partie
  // ------------------------------------------------------------------
  const etat = {
    niveau: 'facile', mode: 'classique',
    file: [], position: 0, score: 0, vies: VIES_MARATHON,
    joueur: null, indexJoueur: -1,
    finChrono: 0, restantPause: null, minuteur: null,
    accepteReponses: false, recap: [], terminee: false,
  };

  function melanger(tableau) {
    const t = tableau.slice();
    for (let i = t.length - 1; i > 0; i--) {
      let r;
      if (window.crypto && window.crypto.getRandomValues) { const a = new Uint32Array(1); window.crypto.getRandomValues(a); r = a[0] / 4294967296; }
      else r = Math.random();
      const j = Math.floor(r * (i + 1));
      const x = t[i]; t[i] = t[j]; t[j] = x;
    }
    return t;
  }

  function demarrer(imposes) {
    etat.niveau = choixNiveau; etat.mode = choixMode;
    const indices = [];
    TOUS.forEach(function (j, i) { if (j.niveau === etat.niveau) indices.push(i); });
    let file = melanger(indices);                  // ordre aléatoire, sans doublon
    if (etat.mode === 'classique') file = file.slice(0, JOUEURS_CLASSIQUE);
    if (Array.isArray(imposes)) file = imposes;    // uniquement pour les tests automatiques
    etat.file = file; etat.position = 0; etat.score = 0; etat.vies = VIES_MARATHON;
    etat.recap = []; etat.terminee = false;
    montrer('jeu');
    afficherJoueur();
  }

  function formaterAnnees(e) {
    if (e.a === null || e.a === undefined) return 'depuis ' + e.de;
    if (e.a === e.de) return String(e.de);
    return e.de + '-' + e.a;
  }

  function afficherJoueur() {
    etat.indexJoueur = etat.file[etat.position];
    etat.joueur = TOUS[etat.indexJoueur];
    const etapes = etat.joueur.carriere.map(function (e) { return { club: CLUBS[e.club], e: e }; });

    // liste numérotée sous la carte
    const liste = $('parcours');
    liste.innerHTML = '';
    etapes.forEach(function (x, i) {
      const li = document.createElement('li');
      const num = document.createElement('span'); num.className = 'num'; num.textContent = i + 1;
      const txt = document.createElement('span');
      const club = document.createElement('span'); club.className = 'club'; club.textContent = x.club.nom;
      const annees = document.createElement('span'); annees.className = 'annees'; annees.textContent = ', ' + formaterAnnees(x.e);
      txt.appendChild(club); txt.appendChild(annees);
      li.appendChild(num); li.appendChild(txt);
      liste.appendChild(li);
    });
    liste.scrollTop = 0;
    carte.afficher(etapes.map(function (x) { return { lat: x.club.lat, lon: x.club.lon }; }));

    majBandeau();
    $('revelation').hidden = true;
    entree.value = '';
    entree.classList.remove('faux');
    entree.disabled = false;
    $('bouton-valider').disabled = false;
    $('bouton-passer').disabled = false;
    message('', '');
    etat.accepteReponses = true;
    lancerChrono(DUREE);
    entree.focus();
  }

  function majBandeau() {
    const prog = $('progression');
    prog.innerHTML = '';
    if (etat.mode === 'classique') {
      prog.textContent = 'Joueur ' + (etat.position + 1) + '/' + etat.file.length;
    } else {
      const vies = document.createElement('span');
      vies.className = 'vies';
      vies.setAttribute('aria-label', etat.vies + ' vie' + (etat.vies > 1 ? 's' : '') + ' restante' + (etat.vies > 1 ? 's' : ''));
      for (let i = 0; i < VIES_MARATHON; i++) {
        const c = document.createElement('span');
        c.textContent = i < etat.vies ? '♥' : '♡';
        if (i >= etat.vies) c.className = 'perdue';
        vies.appendChild(c);
      }
      const n = document.createElement('span');
      n.textContent = '  ·  n° ' + (etat.position + 1);
      n.style.fontSize = '14px'; n.style.color = 'var(--texte-doux)';
      prog.appendChild(vies); prog.appendChild(n);
    }
    $('score').textContent = etat.score;
  }

  // ------------------------------------------------------------------
  // Chrono
  // ------------------------------------------------------------------
  function lancerChrono(secondes) {
    arreterChrono();
    etat.finChrono = performance.now() + secondes * 1000;
    etat.restantPause = null;
    tic();
  }
  function arreterChrono() { if (etat.minuteur) cancelAnimationFrame(etat.minuteur); etat.minuteur = null; }
  function restant() {
    if (etat.restantPause !== null) return etat.restantPause;
    return Math.max(0, (etat.finChrono - performance.now()) / 1000);
  }
  function tic() {
    const r = restant();
    $('chrono-rempli').style.transform = 'scaleX(' + (r / DUREE).toFixed(4) + ')';
    $('chrono-texte').textContent = Math.ceil(r) + ' s';
    document.querySelector('.chrono').classList.toggle('urgent', r <= 10);
    if (r <= 0) { finJoueur('temps'); return; }
    etat.minuteur = requestAnimationFrame(tic);
  }
  function pause() {
    if (!etat.accepteReponses || etat.restantPause !== null) return;
    etat.restantPause = restant();
    arreterChrono();
  }
  function reprise() {
    if (!etat.accepteReponses || etat.restantPause === null) return;
    etat.finChrono = performance.now() + etat.restantPause * 1000;
    etat.restantPause = null;
    tic();
  }
  document.addEventListener('visibilitychange', function () { if (document.hidden) pause(); else if ($('dialogue-quitter').hidden) reprise(); });

  // ------------------------------------------------------------------
  // Réponses
  // ------------------------------------------------------------------
  function message(texte, classe) {
    const m = $('message');
    m.textContent = texte;
    m.className = 'message' + (classe ? ' ' + classe : '');
  }

  $('formulaire').addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!etat.accepteReponses) return;
    const verdict = window.BKReponses.verifier(INDEX, entree.value, etat.indexJoueur);
    if (verdict === 'vide') return;
    if (verdict === 'juste') {
      const points = POINTS_BASE + Math.floor(restant());
      finJoueur('trouve', points);
    } else if (verdict === 'ambigu') {
      message('Précise le prénom.', 'info');
    } else {
      message('Ce n\'est pas ça, essaie encore.', 'erreur');
      entree.classList.remove('faux');
      void entree.offsetWidth; // relance l'animation
      entree.classList.add('faux');
    }
  });
  entree.addEventListener('input', function () {
    entree.classList.remove('faux');
    if ($('message').textContent) message('', '');
  });

  // Les boutons ne retirent pas le focus de la case : le clavier reste ouvert.
  ['bouton-valider', 'bouton-passer'].forEach(function (id) {
    $(id).addEventListener('pointerdown', function (ev) { if (document.activeElement === entree) ev.preventDefault(); });
  });
  $('bouton-passer').addEventListener('click', function () { if (etat.accepteReponses) finJoueur('passe'); });

  function finJoueur(raison, points) {
    if (!etat.accepteReponses) return;
    etat.accepteReponses = false;
    arreterChrono();
    entree.disabled = true;
    $('bouton-valider').disabled = true;
    $('bouton-passer').disabled = true;
    entree.blur();

    let texteEtat, classe;
    points = points || 0;
    if (raison === 'trouve') {
      etat.score += points;
      texteEtat = 'Bien joué ! +' + points + ' points'; classe = 'gagne';
    } else {
      if (etat.mode === 'marathon') etat.vies -= 1;
      texteEtat = (raison === 'temps' ? 'Temps écoulé' : 'Passé') + (etat.mode === 'marathon' ? ' · une vie en moins' : '');
      classe = 'perdu';
    }
    etat.recap.push({ nom: etat.joueur.nom, points: raison === 'trouve' ? points : 0, trouve: raison === 'trouve' });
    majBandeau();
    message('', '');

    const derniere = etat.mode === 'classique'
      ? etat.position + 1 >= etat.file.length
      : etat.vies <= 0 || etat.position + 1 >= etat.file.length;
    etat.terminee = derniere;

    $('revelation-etat').textContent = texteEtat;
    $('revelation-etat').className = 'revelation-etat ' + classe;
    $('revelation-nom').textContent = etat.joueur.nom;
    $('revelation-texte').textContent = etat.joueur.presentation;
    $('bouton-suivant').textContent = derniere ? 'Voir le résultat' : 'Suivant';
    entree.classList.remove('faux');
    $('revelation').hidden = false;
  }

  $('bouton-suivant').addEventListener('click', function () {
    if (etat.terminee) { finPartie(); return; }
    etat.position += 1;
    afficherJoueur();
  });

  // ------------------------------------------------------------------
  // Fin de partie
  // ------------------------------------------------------------------
  function finPartie() {
    arreterChrono();
    const ancien = record(etat.niveau, etat.mode);
    const nouveau = etat.score > ancien;
    if (nouveau) ecrire(cleRecord(etat.niveau, etat.mode), String(etat.score));
    $('fin-score').textContent = etat.score;
    $('fin-record').textContent = Math.max(ancien, etat.score);
    $('nouveau-record').hidden = !nouveau;
    const trouves = etat.recap.filter(function (r) { return r.trouve; }).length;
    $('fin-sous-titre').textContent = NIVEAUX[etat.niveau] + ' · ' + MODES[etat.mode] + ' · ' +
      trouves + ' trouvé' + (trouves > 1 ? 's' : '') + ' sur ' + etat.recap.length;
    const recap = $('recap');
    recap.innerHTML = '';
    etat.recap.forEach(function (r) {
      const li = document.createElement('li');
      if (!r.trouve) li.className = 'rate';
      const n = document.createElement('span'); n.textContent = (r.trouve ? '✓ ' : '✗ ') + r.nom;
      const p = document.createElement('span'); p.className = 'pts'; p.textContent = r.trouve ? '+' + r.points : '0';
      li.appendChild(n); li.appendChild(p); recap.appendChild(li);
    });
    majAccueil();
    montrer('fin');
    ecrans.fin.scrollTop = 0;
  }

  $('bouton-jouer').addEventListener('click', function () { demarrer(); });
  $('bouton-rejouer').addEventListener('click', function () { demarrer(); });
  // Outil de test : BKTest.jouer(['Francesco Totti', ...]) lance une partie avec ces joueurs.
  window.BKTest = { jouer: function (noms) { demarrer(noms.map(function (n) { return TOUS.findIndex(function (j) { return j.nom === n; }); })); } };
  $('bouton-accueil').addEventListener('click', function () { majAccueil(); montrer('accueil'); });

  // ------------------------------------------------------------------
  // Quitter en cours de partie (avec confirmation)
  // ------------------------------------------------------------------
  $('bouton-quitter').addEventListener('click', function () {
    pause();
    entree.blur();
    $('dialogue-quitter').hidden = false;
  });
  $('dialogue-non').addEventListener('click', function () {
    $('dialogue-quitter').hidden = true;
    reprise();
    if (etat.accepteReponses) entree.focus();
  });
  $('dialogue-oui').addEventListener('click', function () {
    $('dialogue-quitter').hidden = true;
    arreterChrono();
    etat.accepteReponses = false;
    majAccueil();
    montrer('accueil');
  });

  // Mode hors connexion (après un premier chargement)
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
