// Ball Knowledge — fonctionnement hors connexion.
// Stratégie « réseau d'abord » : en ligne, on récupère toujours la dernière
// version (donc les mises à jour des données apparaissent tout de suite) ;
// hors ligne, on sert la copie gardée en cache.
const CACHE = 'ball-knowledge';
const FICHIERS = [
  './', 'index.html', 'css/style.css',
  'js/reponses.js', 'js/carte.js', 'js/jeu.js',
  'data/carte.js', 'data/clubs.js', 'data/joueurs.js',
  'manifest.webmanifest', 'icones/icone-180.png', 'icones/icone-192.png', 'icones/icone-512.png',
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { const copie = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copie)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
