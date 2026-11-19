# Ball Knowledge

Devine le footballeur grâce à sa carrière en clubs, affichée sur une carte du monde.

Jeu web en français, pensé pour Safari sur iPhone (mode portrait). Il n'utilise ni compte ni serveur : tout est dans ce dépôt, y compris la carte.

## Jouer

- Trois niveaux de 100 joueurs : **Facile**, **Difficile**, **Expert**.
- **Partie classique** : 10 footballeurs tirés au hasard, sans doublon.
- **Marathon** : on enchaîne les footballeurs du niveau avec 3 vies. Passer ou laisser filer le chrono coûte une vie ; une mauvaise réponse, non.
- 45 secondes par footballeur, essais illimités. Bonne réponse : 100 points + 1 point par seconde restante.
- Les meilleurs scores sont enregistrés sur l'appareil (dans Safari).

## Grand Chelem (quiz à plateau)

Accessible depuis l'écran d'accueil, ou directement via `grand-chelem.html`. C'est un quiz football sur plateau, sur le principe du Trivial Pursuit.

- De 1 à 6 joueurs sur le même téléphone, chacun son tour.
- 6 catégories : Mondial & Euro, Coupes d'Europe, Foot français, Clubs & stades, Joueurs, Règles & insolite.
- On lance le dé, on choisit sa case parmi celles en surbrillance, on répond à une question de la couleur de la case. Bonne réponse : on rejoue.
- Bonne réponse sur une case ★ (au bout de chaque rayon) : trophée de la catégorie. Avec les 6 trophées, il faut s'arrêter pile au centre et répondre à la question finale, dont la catégorie est choisie par les adversaires.
- Deux façons de répondre : **choix multiples** (le téléphone vérifie) ou **réponse libre** (on répond à voix haute, puis on découvre la réponse).
- La partie est enregistrée à chaque étape : on peut fermer Safari et la reprendre plus tard.

Les questions sont dans `data/questions.js` : chaque question a un énoncé, la bonne réponse et trois mauvaises réponses. Vérifiez-les avec `node outils/verifier-questions.mjs`.

## Organisation des fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page du jeu (accueil, partie, fin). |
| `css/style.css` | L'apparence. |
| `js/jeu.js` | Les règles : chrono, score, vies, modes, records. |
| `js/carte.js` | Le dessin de la carte, des pastilles numérotées et des flèches. |
| `js/reponses.js` | La reconnaissance des réponses (accents, fautes de frappe, surnoms, noms ambigus). |
| `data/joueurs.js` | **Les 300 joueurs** : niveau, réponses acceptées, phrase de présentation, carrière. |
| `data/clubs.js` | **Les clubs** : nom affiché et coordonnées (latitude, longitude). |
| `data/carte.js` | Le fond de carte (Natural Earth, domaine public). Généré automatiquement. |
| `grand-chelem.html`, `css/grand-chelem.css`, `js/grand-chelem.js` | Le quiz à plateau Grand Chelem (plateau, dé, tours, trophées). |
| `data/questions.js` | **Les questions du Grand Chelem**, par catégorie. |
| `sw.js`, `manifest.webmanifest`, `icones/` | Installation sur l'écran d'accueil et fonctionnement hors connexion. |
| `outils/` | Scripts de vérification (voir plus bas). |

## Mettre à jour les données

Tout se passe dans `data/joueurs.js` et `data/clubs.js`, deux fichiers texte modifiables directement sur GitHub (icône crayon).

Exemple : un joueur change de club.

1. Dans `data/joueurs.js`, trouvez le joueur. Sa dernière étape a `"a": null` (club actuel). Remplacez `null` par l'année de départ.
2. Ajoutez une étape à la fin, par exemple `{"club": "fc-porto", "de": 2027, "a": null}`.
3. Si le club n'existe pas encore dans `data/clubs.js`, ajoutez une ligne : `"mon-club": {"nom": "Mon Club", "lat": 48.85, "lon": 2.35},` (coordonnées du stade ; on les trouve sur Wikipédia).
4. Changez la date `"miseAJour"` en haut de `data/joueurs.js` : elle s'affiche sur l'écran d'accueil.

Règles suivies pour les carrières : seulement les clubs professionnels seniors où le joueur a joué ; pas de prêts, de centres de formation, d'équipes réserves ni de sélections. Un prêt suivi d'un achat compte comme une seule étape, à partir de l'arrivée. Un retour dans un ancien club compte comme une nouvelle étape.

## Vérifier avant de publier

Si Node.js est installé sur votre ordinateur :

```
node outils/verifier-donnees.mjs   # cohérence des données (clubs existants, années dans l'ordre…)
node outils/tester-reponses.mjs    # reconnaissance des réponses (Ronaldo ≠ Cristiano Ronaldo, etc.)
node outils/verifier-questions.mjs # questions du Grand Chelem (3 mauvaises réponses, pas de doublon…)
```

## Tester sur un ordinateur

Le jeu fonctionne en ouvrant simplement `index.html` dans un navigateur. Pour un test plus fidèle, lancez un petit serveur dans le dossier du projet (`python3 -m http.server`) puis ouvrez <http://localhost:8000>.

## Publication (GitHub Pages)

Dans le dépôt GitHub : **Settings → Pages → Build and deployment → Source : « Deploy from a branch »**, branche `main`, dossier `/ (root)`. Le jeu est ensuite disponible à l'adresse `https://<votre-nom>.github.io/ball-knowledge/`.

## Sources et crédits

- Carrières : Wikipédia (anglais) et Wikidata, recoupés automatiquement puis relus.
- Fond de carte : [Natural Earth](https://www.naturalearthdata.com/) (domaine public), via le paquet `world-atlas` 2.0.2.
