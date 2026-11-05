// Tests de la reconnaissance des réponses : node outils/tester-reponses.mjs
import { charger } from './charger.mjs';
const { donnees, reponses } = charger();
const J = donnees.joueurs;
const idx = reponses.creerIndex(J);
const num = (nom) => { const i = J.findIndex((j) => j.nom === nom); if (i < 0) throw new Error('joueur absent : ' + nom); return i; };
let ok = 0, ko = 0;
function attendre(saisie, nom, verdict) {
  const v = reponses.verifier(idx, saisie, num(nom));
  if (v === verdict) ok++; else { ko++; console.log(`ÉCHEC : « ${saisie} » pour ${nom} -> ${v} (attendu ${verdict})`); }
}
// Bonnes réponses : nom complet, nom de famille, accents, majuscules, fautes
attendre('Lionel Messi', 'Lionel Messi', 'juste');
attendre('messi', 'Lionel Messi', 'juste');
attendre('MESSI', 'Lionel Messi', 'juste');
attendre('mesi', 'Lionel Messi', 'juste');
attendre('Mbappe', 'Kylian Mbappé', 'juste');
attendre('mbape', 'Kylian Mbappé', 'juste');
attendre('zidanne', 'Zinédine Zidane', 'juste');
attendre('ibrahimovic', 'Zlatan Ibrahimović', 'juste');
attendre('ibrahimovich', 'Zlatan Ibrahimović', 'juste');
attendre('Guðjohnsen', 'Eiður Guðjohnsen', 'juste');
attendre('gudjohnsen', 'Eiður Guðjohnsen', 'juste');
attendre('ngolo kante', "N'Golo Kanté", 'juste');
attendre('kante', "N'Golo Kanté", 'juste');
attendre("eto'o", "Samuel Eto'o", 'juste');
attendre('etoo', "Samuel Eto'o", 'juste');
attendre('van persie', 'Robin van Persie', 'juste');
attendre('alexander arnold', 'Trent Alexander-Arnold', 'juste');
attendre('kolo muani', 'Randal Kolo Muani', 'juste');
attendre('di maria', 'Ángel Di María', 'juste');
attendre('gundogan', 'İlkay Gündoğan', 'juste');
attendre('calhanoglu', 'Hakan Çalhanoğlu', 'juste');
attendre('son', 'Son Heung-min', 'juste');
attendre('park ji sung', 'Park Ji-sung', 'juste');
attendre('kim min jae', 'Kim Min-jae', 'juste');
// Surnoms et variantes
attendre('Ronaldinho', 'Ronaldinho', 'juste');
attendre('Xavi', 'Xavi', 'juste');
attendre('Pedri', 'Pedri', 'juste');
attendre('Zizou', 'Zinédine Zidane', 'juste');
attendre('CR7', 'Cristiano Ronaldo', 'juste');
attendre('Cristiano', 'Cristiano Ronaldo', 'juste');
attendre('Kun Aguero', 'Sergio Agüero', 'juste');
attendre('Batigol', 'Gabriel Batistuta', 'juste');
attendre('JPP', 'Jean-Pierre Papin', 'juste');
attendre('Lautaro', 'Lautaro Martínez', 'juste');
attendre('Dibu', 'Emiliano Martínez', 'juste');
attendre('Vini Jr', 'Vinícius Júnior', 'juste');
// Noms proches : bien les distinguer
attendre('Ronaldo', 'Ronaldo', 'juste');
attendre('Ronaldo', 'Cristiano Ronaldo', 'faux');
attendre('Cristiano Ronaldo', 'Ronaldo', 'faux');
attendre('Ronaldinho', 'Ronaldo', 'faux');
attendre('Cissé', 'Djibril Cissé', 'ambigu');
attendre('Cisse', 'Papiss Cissé', 'ambigu');
attendre('Djibril Cissé', 'Djibril Cissé', 'juste');
attendre('Papiss Cisse', 'Djibril Cissé', 'faux');
attendre('Papiss Cissé', 'Papiss Cissé', 'juste');
attendre('Silva', 'Thiago Silva', 'ambigu');
attendre('Thiago Silva', 'Thiago Silva', 'juste');
attendre('David Silva', 'Thiago Silva', 'faux');
attendre('Thuram', 'Lilian Thuram', 'ambigu');
attendre('Marcus Thuram', 'Marcus Thuram', 'juste');
attendre('Müller', 'Thomas Müller', 'ambigu');
attendre('Gerd Muller', 'Gerd Müller', 'juste');
attendre('Martinez', 'Lautaro Martínez', 'ambigu');
attendre('Pepe', 'Pepe', 'juste');
attendre('Nicolas Pepe', 'Nicolas Pépé', 'juste');
attendre('Kane', 'Harry Kane', 'juste');
attendre('Kane', "N'Golo Kanté", 'faux');
attendre('Xabi', 'Xavi', 'faux');
// Mauvaises réponses et saisies vides
attendre('Henry', 'Lionel Messi', 'faux');
attendre('zzzz', 'Lionel Messi', 'faux');
attendre('   ', 'Lionel Messi', 'vide');
// Chaque joueur doit être reconnu par son nom complet
for (const j of J) attendre(j.nom, j.nom, 'juste');
// Liste des noms de famille ambigus (information)
const amb = new Map();
for (const j of J) for (const f of j.nomDeFamille) { const k = reponses.normaliser(f); amb.set(k, [...(amb.get(k) || []), j.nom]); }
const liste = [...amb].filter(([k, v]) => v.length > 1 && reponses.interpreter(idx, k).type === 'ambigu');
console.log('Noms de famille ambigus (le jeu demande de préciser le prénom) :');
for (const [k, v] of liste) console.log(`  « ${k} » : ${v.join(', ')}`);
console.log(`\n${ok} test(s) réussi(s), ${ko} échec(s).`);
process.exit(ko ? 1 : 0);
