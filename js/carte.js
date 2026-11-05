/* ==========================================================================
   Ball Knowledge — carte du parcours (SVG)
   Projection de Mercator identique à celle du fond de carte (data/carte.js).
   ========================================================================== */
(function () {
  'use strict';

  const NS = 'http://www.w3.org/2000/svg';
  const FOND = window.BK_CARTE;
  const LARGEUR_MONDE = FOND.largeur;              // 1000 unités = 360°
  const ECHELLE = FOND.echelle;                     // rayon de la sphère projetée
  const Y_MIN = projeter(84, 0)[1];                 // limites verticales utiles
  const Y_MAX = projeter(-57, 0)[1];
  // Zoom maximal = échelle d'un continent : la carte montre toujours au moins
  // 40° de longitude de large (≈ l'Europe de l'Ouest au Caucase).
  const LARGEUR_MIN = LARGEUR_MONDE * 40 / 360;

  // Tailles à l'écran, en pixels
  const RAYON = 11, POLICE = 12.5, TRAIT = 2.2, POINTE = 7, ECART = 26;

  function projeter(lat, lon) {
    const x = LARGEUR_MONDE / 2 + lon * LARGEUR_MONDE / 360;
    const phi = Math.max(-85, Math.min(85, lat)) * Math.PI / 180;
    const y = LARGEUR_MONDE / 2 - ECHELLE * Math.log(Math.tan(Math.PI / 4 + phi / 2));
    return [x, y];
  }

  function el(nom, attributs, parent) {
    const e = document.createElementNS(NS, nom);
    for (const k in attributs) e.setAttribute(k, attributs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function Carte(svg) {
    this.svg = svg;
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    el('rect', { x: -2000, y: -2000, width: 6000, height: 6000, fill: 'var(--ocean)' }, svg);
    el('path', { d: FOND.terres, class: 'terres' }, svg);
    el('path', { d: FOND.frontieres, class: 'frontieres' }, svg);
    this.calque = el('g', { class: 'trace' }, svg);
    this.etapes = [];
    const self = this;
    if (window.ResizeObserver) new ResizeObserver(function () { self.redessiner(); }).observe(svg);
  }

  /** etapes : [{lat, lon}] dans l'ordre de la carrière */
  Carte.prototype.afficher = function (etapes) {
    this.etapes = etapes;
    this.redessiner();
  };

  Carte.prototype.redessiner = function () {
    const svg = this.svg;
    const largeurPx = svg.clientWidth || 360, hauteurPx = svg.clientHeight || 240;
    if (!this.etapes.length || largeurPx < 10 || hauteurPx < 10) return;
    const pts = this.etapes.map(function (e) { return projeter(e.lat, e.lon); });

    // ---------- cadrage automatique ----------
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    pts.forEach(function (p) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); });
    const ratio = largeurPx / hauteurPx;
    // marge : pastilles + flèches courbes
    const margePx = 34;
    // largeur visible (en unités de carte) nécessaire pour tout montrer, marges comprises
    const vueX = (x1 - x0) * largeurPx / Math.max(1, largeurPx - 2 * margePx);
    const vueY = (y1 - y0) * ratio * hauteurPx / Math.max(1, hauteurPx - 2 * margePx);
    let vue = Math.max(vueX, vueY, LARGEUR_MIN);     // jamais plus zoomé qu'un continent
    vue = Math.min(vue, LARGEUR_MONDE * 1.02);
    const vueH = vue / ratio;
    let cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    // rester dans le monde utile
    if (vueH < Y_MAX - Y_MIN) cy = Math.min(Math.max(cy, Y_MIN + vueH / 2), Y_MAX - vueH / 2);
    else cy = (Y_MIN + Y_MAX) / 2;
    if (vue < LARGEUR_MONDE) cx = Math.min(Math.max(cx, vue / 2), LARGEUR_MONDE - vue / 2);
    else cx = LARGEUR_MONDE / 2;
    svg.setAttribute('viewBox', [cx - vue / 2, cy - vueH / 2, vue, vueH].map(function (v) { return v.toFixed(3); }).join(' '));
    const k = vue / largeurPx; // unités de carte par pixel

    // ---------- positions affichées (écarte les pastilles trop proches) ----------
    const aff = ecarter(pts, k);
    // les pastilles écartées restent dans le cadre
    const bx0 = cx - vue / 2 + (RAYON + 3) * k, bx1 = cx + vue / 2 - (RAYON + 3) * k;
    const by0 = cy - vueH / 2 + (RAYON + 3) * k, by1 = cy + vueH / 2 - (RAYON + 3) * k;
    aff.forEach(function (p) { p[0] = Math.min(Math.max(p[0], bx0), bx1); p[1] = Math.min(Math.max(p[1], by0), by1); });

    // ---------- dessin ----------
    const g = this.calque;
    while (g.firstChild) g.removeChild(g.firstChild);
    const gLiaisons = el('g', {}, g), gFleches = el('g', {}, g), gPastilles = el('g', {}, g);

    aff.forEach(function (p, i) {
      const reel = pts[i];
      if (Math.hypot(p[0] - reel[0], p[1] - reel[1]) > 0.5 * k) {
        el('line', { x1: reel[0], y1: reel[1], x2: p[0], y2: p[1], class: 'liaison', 'stroke-width': 1.2 * k }, gLiaisons);
        el('circle', { cx: reel[0], cy: reel[1], r: 2.4 * k, class: 'ancre' }, gLiaisons);
      }
    });

    for (let i = 0; i + 1 < aff.length; i++) dessinerFleche(gFleches, aff[i], aff[i + 1], k, i);

    aff.forEach(function (p, i) {
      el('circle', { cx: p[0], cy: p[1], r: RAYON * k, class: 'pastille', 'stroke-width': 1.5 * k }, gPastilles);
      const t = el('text', { x: p[0], y: p[1] + 0.5 * k, class: 'numero', 'font-size': (i + 1 >= 10 ? POLICE - 1.5 : POLICE) * k }, gPastilles);
      t.textContent = String(i + 1);
    });
  };

  // Écarte les pastilles qui se chevaucheraient : chacune s'éloigne juste assez de
  // ses voisines, en restant au plus près de son emplacement réel (calcul en pixels).
  function ecarter(pts, k) {
    const n = pts.length, mini = ECART;
    const orig = pts.map(function (p) { return [p[0] / k, p[1] / k]; });
    const pos = orig.map(function (p) { return [p[0], p[1]]; });
    for (let it = 0; it < 220; it++) {
      let bouge = false;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          let dx = pos[j][0] - pos[i][0], dy = pos[j][1] - pos[i][1];
          let d = Math.hypot(dx, dy);
          if (d >= mini) continue;
          bouge = true;
          if (d < 0.01) { const a = j * 2.39996 + i; dx = Math.cos(a); dy = Math.sin(a); d = 1; }
          else { dx /= d; dy /= d; }
          const pousse = (mini - d) / 2 + 0.05;
          pos[i][0] -= dx * pousse; pos[i][1] -= dy * pousse;
          pos[j][0] += dx * pousse; pos[j][1] += dy * pousse;
        }
      }
      // léger rappel vers l'emplacement réel (désactivé à la fin pour garantir l'écart)
      if (it < 160) for (let i = 0; i < n; i++) { pos[i][0] += (orig[i][0] - pos[i][0]) * 0.04; pos[i][1] += (orig[i][1] - pos[i][1]) * 0.04; }
      else if (!bouge) break;
    }
    return pos.map(function (p) { return [p[0] * k, p[1] * k]; });
  }

  // Flèche légèrement courbe de a vers b, raccourcie pour ne pas recouvrir les pastilles.
  function dessinerFleche(g, a, b, k, i) {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
    if (L < (2 * RAYON + 4) * k) return;
    const nx = -dy / L, ny = dx / L;
    // toujours courbée du même côté : un aller et un retour ne se superposent pas
    const courbe = Math.min(0.2 * L, 60 * k);
    const c = [(a[0] + b[0]) / 2 + nx * courbe, (a[1] + b[1]) / 2 + ny * courbe];
    const bez = function (t) {
      const u = 1 - t;
      return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]];
    };
    // trouver t de départ / d'arrivée hors des pastilles
    const marge = (RAYON + 2) * k;
    let t0 = 0, t1 = 1;
    for (let s = 0; s <= 200; s++) { const t = s / 200, p = bez(t); if (Math.hypot(p[0] - a[0], p[1] - a[1]) >= marge) { t0 = t; break; } }
    for (let s = 200; s >= 0; s--) { const t = s / 200, p = bez(t); if (Math.hypot(p[0] - b[0], p[1] - b[1]) >= marge + POINTE * k * 0.6) { t1 = t; break; } }
    if (t1 <= t0) return;
    const pas = 24, points = [];
    for (let s = 0; s <= pas; s++) points.push(bez(t0 + (t1 - t0) * s / pas));
    el('path', { d: 'M' + points.map(function (p) { return p[0].toFixed(3) + ',' + p[1].toFixed(3); }).join('L'), class: 'fleche', 'stroke-width': TRAIT * k }, g);
    // pointe : orientée selon la tangente en fin de tracé
    const fin = points[points.length - 1], avant = points[points.length - 2];
    const ang = Math.atan2(fin[1] - avant[1], fin[0] - avant[0]);
    const lp = POINTE * k * 1.25, lg = POINTE * k * 0.75;
    const bout = [fin[0] + Math.cos(ang) * lp * 0.6, fin[1] + Math.sin(ang) * lp * 0.6];
    const base = [bout[0] - Math.cos(ang) * lp, bout[1] - Math.sin(ang) * lp];
    const p1 = [base[0] + Math.cos(ang + Math.PI / 2) * lg, base[1] + Math.sin(ang + Math.PI / 2) * lg];
    const p2 = [base[0] - Math.cos(ang + Math.PI / 2) * lg, base[1] - Math.sin(ang + Math.PI / 2) * lg];
    el('path', { d: 'M' + bout.join(',') + 'L' + p1.join(',') + 'L' + p2.join(',') + 'Z', class: 'pointe' }, g);
  }

  window.BKCarte = Carte;
  window.BKProjeter = projeter;
})();
