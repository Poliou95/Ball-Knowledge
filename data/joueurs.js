// ============================================================================
// BALL KNOWLEDGE — données des footballeurs
// ----------------------------------------------------------------------------
// Pour modifier un joueur : changez ses champs ci-dessous puis mettez à jour
// "miseAJour". Chaque étape de "carriere" indique l'identifiant d'un club
// (défini dans data/clubs.js), l'année d'arrivée "de" et l'année de départ "a"
// ("a": null = club actuel, affiché « depuis »).
//  - nomDeFamille : accepté seul s'il n'est porté par aucun autre joueur.
//  - autresReponses : surnoms et variantes acceptés (toujours prioritaires).
// Vérifiez ensuite avec : node outils/verifier-donnees.mjs
// ============================================================================
window.BK_JOUEURS = {
 "miseAJour": "2026-11-05",
 "sources": "Wikipédia (en) et Wikidata, consultés le 2026-11-05",
 "joueurs": [
  {
   "nom": "Pelé",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Edson Arantes do Nascimento",
    "O Rei"
   ],
   "presentation": "Légende brésilienne, triple vainqueur de la Coupe du monde (1958, 1962, 1970), souvent considéré comme le plus grand joueur de l'histoire.",
   "carriere": [
    {"club": "santos", "de": 1956, "a": 1974},
    {"club": "new-york-cosmos", "de": 1975, "a": 1977}
   ]
  },
  {
   "nom": "Diego Maradona",
   "niveau": "facile",
   "nomDeFamille": [
    "Maradona"
   ],
   "autresReponses": [
    "Maradona",
    "El Pibe de Oro",
    "Diego Armando Maradona"
   ],
   "presentation": "Génie argentin, champion du monde 1986 et idole éternelle de Naples avec qui il a remporté deux Scudetti.",
   "carriere": [
    {"club": "argentinos-juniors", "de": 1976, "a": 1981},
    {"club": "boca-juniors", "de": 1981, "a": 1982},
    {"club": "barcelone", "de": 1982, "a": 1984},
    {"club": "naples", "de": 1984, "a": 1991},
    {"club": "fc-seville", "de": 1992, "a": 1993},
    {"club": "newell-s-old-boys", "de": 1993, "a": 1994},
    {"club": "boca-juniors", "de": 1995, "a": 1997}
   ]
  },
  {
   "nom": "Johan Cruyff",
   "niveau": "facile",
   "nomDeFamille": [
    "Cruyff"
   ],
   "autresReponses": [
    "Cruyff",
    "Cruijff",
    "Johan Cruijff"
   ],
   "presentation": "Maître du « football total », triple Ballon d'or et triple vainqueur de la Coupe des clubs champions avec l'Ajax.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 1964, "a": 1973},
    {"club": "barcelone", "de": 1973, "a": 1978},
    {"club": "los-angeles-aztecs", "de": 1979, "a": 1979},
    {"club": "washington-diplomats", "de": 1980, "a": 1981},
    {"club": "ajax-amsterdam", "de": 1981, "a": 1983},
    {"club": "feyenoord", "de": 1983, "a": 1984}
   ]
  },
  {
   "nom": "Franz Beckenbauer",
   "niveau": "facile",
   "nomDeFamille": [
    "Beckenbauer"
   ],
   "autresReponses": [
    "Beckenbauer",
    "Der Kaiser",
    "Le Kaiser"
   ],
   "presentation": "« Der Kaiser », libéro allemand de légende, champion du monde comme joueur (1974) puis comme sélectionneur (1990).",
   "carriere": [
    {"club": "bayern-munich", "de": 1964, "a": 1977},
    {"club": "new-york-cosmos", "de": 1977, "a": 1980},
    {"club": "hambourg-sv", "de": 1980, "a": 1982},
    {"club": "new-york-cosmos", "de": 1983, "a": 1983}
   ]
  },
  {
   "nom": "Michel Platini",
   "niveau": "facile",
   "nomDeFamille": [
    "Platini"
   ],
   "autresReponses": [
    "Platini"
   ],
   "presentation": "Meneur de jeu français, triple Ballon d'or consécutif (1983-1985) et champion d'Europe 1984 avec les Bleus.",
   "carriere": [
    {"club": "as-nancy-lorraine", "de": 1972, "a": 1979},
    {"club": "as-saint-etienne", "de": 1979, "a": 1982},
    {"club": "juventus", "de": 1982, "a": 1987}
   ]
  },
  {
   "nom": "Zinédine Zidane",
   "niveau": "facile",
   "nomDeFamille": [
    "Zidane"
   ],
   "autresReponses": [
    "Zidane",
    "Zizou"
   ],
   "presentation": "Meneur de jeu français, champion du monde 1998 avec un doublé en finale et Ballon d'or la même année.",
   "carriere": [
    {"club": "as-cannes", "de": 1989, "a": 1992},
    {"club": "girondins-de-bordeaux", "de": 1992, "a": 1996},
    {"club": "juventus", "de": 1996, "a": 2001},
    {"club": "real-madrid", "de": 2001, "a": 2006}
   ]
  },
  {
   "nom": "Ronaldo",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Ronaldo Nazario",
    "Ronaldo Nazário",
    "R9",
    "Ronaldo Luis Nazario de Lima",
    "O Fenomeno",
    "El Fenomeno",
    "Le Phénomène"
   ],
   "presentation": "« Il Fenomeno », attaquant brésilien double champion du monde (1994, 2002) et double Ballon d'or.",
   "carriere": [
    {"club": "cruzeiro", "de": 1993, "a": 1994},
    {"club": "psv-eindhoven", "de": 1994, "a": 1996},
    {"club": "barcelone", "de": 1996, "a": 1997},
    {"club": "inter-milan", "de": 1997, "a": 2002},
    {"club": "real-madrid", "de": 2002, "a": 2007},
    {"club": "ac-milan", "de": 2007, "a": 2008},
    {"club": "corinthians", "de": 2009, "a": 2011}
   ]
  },
  {
   "nom": "Ronaldinho",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Ronaldinho Gaucho",
    "Ronaldinho Gaúcho",
    "Dinho"
   ],
   "presentation": "Magicien brésilien, champion du monde 2002 et Ballon d'or 2005 sous les couleurs du FC Barcelone.",
   "carriere": [
    {"club": "gremio", "de": 1998, "a": 2001},
    {"club": "paris-sg", "de": 2001, "a": 2003},
    {"club": "barcelone", "de": 2003, "a": 2008},
    {"club": "ac-milan", "de": 2008, "a": 2011},
    {"club": "flamengo", "de": 2011, "a": 2012},
    {"club": "atletico-mineiro", "de": 2012, "a": 2014},
    {"club": "queretaro", "de": 2014, "a": 2015},
    {"club": "fluminense", "de": 2015, "a": 2015}
   ]
  },
  {
   "nom": "Cristiano Ronaldo",
   "niveau": "facile",
   "nomDeFamille": [
    "Ronaldo"
   ],
   "autresReponses": [
    "Cristiano",
    "CR7",
    "Cristiano Ronaldo dos Santos Aveiro"
   ],
   "presentation": "Attaquant portugais quintuple Ballon d'or et meilleur buteur de l'histoire de la Ligue des champions.",
   "carriere": [
    {"club": "sporting-portugal", "de": 2002, "a": 2003},
    {"club": "manchester-united", "de": 2003, "a": 2009},
    {"club": "real-madrid", "de": 2009, "a": 2018},
    {"club": "juventus", "de": 2018, "a": 2021},
    {"club": "manchester-united", "de": 2021, "a": 2022},
    {"club": "al-nassr", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Lionel Messi",
   "niveau": "facile",
   "nomDeFamille": [
    "Messi"
   ],
   "autresReponses": [
    "Messi",
    "Leo Messi",
    "La Pulga"
   ],
   "presentation": "Génie argentin aux huit Ballons d'or, champion du monde 2022 et légende absolue du FC Barcelone.",
   "carriere": [
    {"club": "barcelone", "de": 2004, "a": 2021},
    {"club": "paris-sg", "de": 2021, "a": 2023},
    {"club": "inter-miami", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Neymar",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Neymar Jr",
    "Neymar Junior",
    "Neymar da Silva Santos Junior"
   ],
   "presentation": "Attaquant brésilien virtuose, meilleur buteur de l'histoire de la Seleção et auteur du transfert le plus cher de l'histoire.",
   "carriere": [
    {"club": "santos", "de": 2009, "a": 2013},
    {"club": "barcelone", "de": 2013, "a": 2017},
    {"club": "paris-sg", "de": 2017, "a": 2023},
    {"club": "al-hilal", "de": 2023, "a": 2025},
    {"club": "santos", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Kylian Mbappé",
   "niveau": "facile",
   "nomDeFamille": [
    "Mbappé"
   ],
   "autresReponses": [
    "Mbappe"
   ],
   "presentation": "Attaquant français champion du monde 2018 à 19 ans, auteur d'un triplé en finale de la Coupe du monde 2022.",
   "carriere": [
    {"club": "as-monaco", "de": 2015, "a": 2017},
    {"club": "paris-sg", "de": 2017, "a": 2024},
    {"club": "real-madrid", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Erling Haaland",
   "niveau": "facile",
   "nomDeFamille": [
    "Haaland"
   ],
   "autresReponses": [
    "Haaland",
    "Erling Braut Haaland"
   ],
   "presentation": "Buteur norvégien phénoménal, recordman de buts sur une saison de Premier League dès sa première année à Manchester City.",
   "carriere": [
    {"club": "bryne-fk", "de": 2016, "a": 2017},
    {"club": "molde", "de": 2017, "a": 2019},
    {"club": "red-bull-salzbourg", "de": 2019, "a": 2020},
    {"club": "borussia-dortmund", "de": 2020, "a": 2022},
    {"club": "manchester-city", "de": 2022, "a": null}
   ]
  },
  {
   "nom": "Thierry Henry",
   "niveau": "facile",
   "nomDeFamille": [
    "Henry"
   ],
   "autresReponses": [
    "Henry",
    "Titi"
   ],
   "presentation": "Attaquant français champion du monde 1998 et champion d'Europe 2000, meilleur buteur de l'histoire d'Arsenal.",
   "carriere": [
    {"club": "as-monaco", "de": 1994, "a": 1999},
    {"club": "juventus", "de": 1999, "a": 1999},
    {"club": "arsenal", "de": 1999, "a": 2007},
    {"club": "barcelone", "de": 2007, "a": 2010},
    {"club": "new-york-red-bulls", "de": 2010, "a": 2014}
   ]
  },
  {
   "nom": "David Beckham",
   "niveau": "facile",
   "nomDeFamille": [
    "Beckham"
   ],
   "autresReponses": [
    "Beckham",
    "Becks"
   ],
   "presentation": "Milieu anglais au centre légendaire, icône de Manchester United puis pionnier de la MLS avec le LA Galaxy.",
   "carriere": [
    {"club": "manchester-united", "de": 1992, "a": 2003},
    {"club": "real-madrid", "de": 2003, "a": 2007},
    {"club": "los-angeles-galaxy", "de": 2007, "a": 2012},
    {"club": "paris-sg", "de": 2013, "a": 2013}
   ]
  },
  {
   "nom": "Zlatan Ibrahimović",
   "niveau": "facile",
   "nomDeFamille": [
    "Ibrahimović"
   ],
   "autresReponses": [
    "Ibrahimovic",
    "Zlatan",
    "Ibra"
   ],
   "presentation": "Attaquant suédois au caractère hors norme, champion dans quatre championnats différents et adepte des buts spectaculaires.",
   "carriere": [
    {"club": "malmo-ff", "de": 1999, "a": 2001},
    {"club": "ajax-amsterdam", "de": 2001, "a": 2004},
    {"club": "juventus", "de": 2004, "a": 2006},
    {"club": "inter-milan", "de": 2006, "a": 2009},
    {"club": "barcelone", "de": 2009, "a": 2010},
    {"club": "ac-milan", "de": 2010, "a": 2012},
    {"club": "paris-sg", "de": 2012, "a": 2016},
    {"club": "manchester-united", "de": 2016, "a": 2018},
    {"club": "los-angeles-galaxy", "de": 2018, "a": 2019},
    {"club": "ac-milan", "de": 2019, "a": 2023}
   ]
  },
  {
   "nom": "Kaká",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Ricardo Kaka",
    "Ricardo Izecson dos Santos Leite"
   ],
   "presentation": "Milieu offensif brésilien, Ballon d'or 2007 et vainqueur de la Ligue des champions avec l'AC Milan.",
   "carriere": [
    {"club": "sao-paulo-fc", "de": 2000, "a": 2003},
    {"club": "ac-milan", "de": 2003, "a": 2009},
    {"club": "real-madrid", "de": 2009, "a": 2013},
    {"club": "ac-milan", "de": 2013, "a": 2014},
    {"club": "orlando-city", "de": 2014, "a": 2017}
   ]
  },
  {
   "nom": "Andrés Iniesta",
   "niveau": "facile",
   "nomDeFamille": [
    "Iniesta"
   ],
   "autresReponses": [
    "Iniesta",
    "Don Andres"
   ],
   "presentation": "Milieu espagnol à la technique soyeuse, buteur décisif en finale de la Coupe du monde 2010.",
   "carriere": [
    {"club": "barcelone", "de": 2002, "a": 2018},
    {"club": "vissel-kobe", "de": 2018, "a": 2023},
    {"club": "emirates-club", "de": 2023, "a": 2024}
   ]
  },
  {
   "nom": "Xavi",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Xavi Hernandez",
    "Xavi Hernández",
    "Xavier Hernandez"
   ],
   "presentation": "Chef d'orchestre espagnol, cerveau du FC Barcelone et de la Roja championne d'Europe et du monde.",
   "carriere": [
    {"club": "barcelone", "de": 1998, "a": 2015},
    {"club": "al-sadd", "de": 2015, "a": 2019}
   ]
  },
  {
   "nom": "Sergio Ramos",
   "niveau": "facile",
   "nomDeFamille": [
    "Ramos"
   ],
   "autresReponses": [
    "Ramos"
   ],
   "presentation": "Défenseur espagnol au caractère de feu, quadruple vainqueur de la Ligue des champions avec le Real Madrid et champion du monde 2010.",
   "carriere": [
    {"club": "fc-seville", "de": 2004, "a": 2005},
    {"club": "real-madrid", "de": 2005, "a": 2021},
    {"club": "paris-sg", "de": 2021, "a": 2023},
    {"club": "fc-seville", "de": 2023, "a": 2024},
    {"club": "monterrey", "de": 2025, "a": 2025}
   ]
  },
  {
   "nom": "Luka Modrić",
   "niveau": "facile",
   "nomDeFamille": [
    "Modrić"
   ],
   "autresReponses": [
    "Modric"
   ],
   "presentation": "Milieu croate, Ballon d'or 2018 et finaliste de la Coupe du monde la même année, pilier du Real Madrid pendant plus de dix ans.",
   "carriere": [
    {"club": "dinamo-zagreb", "de": 2003, "a": 2008},
    {"club": "tottenham", "de": 2008, "a": 2012},
    {"club": "real-madrid", "de": 2012, "a": 2025},
    {"club": "ac-milan", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Karim Benzema",
   "niveau": "facile",
   "nomDeFamille": [
    "Benzema"
   ],
   "autresReponses": [
    "Benzema",
    "KB9"
   ],
   "presentation": "Attaquant français, Ballon d'or 2022 et quintuple vainqueur de la Ligue des champions avec le Real Madrid.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 2004, "a": 2009},
    {"club": "real-madrid", "de": 2009, "a": 2023},
    {"club": "al-ittihad", "de": 2023, "a": 2026},
    {"club": "al-hilal", "de": 2026, "a": 2026}
   ]
  },
  {
   "nom": "Robert Lewandowski",
   "niveau": "facile",
   "nomDeFamille": [
    "Lewandowski"
   ],
   "autresReponses": [
    "Lewandowski",
    "Lewy"
   ],
   "presentation": "Buteur polonais insatiable, auteur de cinq buts en neuf minutes avec le Bayern Munich en 2015.",
   "carriere": [
    {"club": "delta-varsovie", "de": 2005, "a": 2005},
    {"club": "znicz-pruszkow", "de": 2006, "a": 2008},
    {"club": "lech-poznan", "de": 2008, "a": 2010},
    {"club": "borussia-dortmund", "de": 2010, "a": 2014},
    {"club": "bayern-munich", "de": 2014, "a": 2022},
    {"club": "barcelone", "de": 2022, "a": 2026},
    {"club": "chicago-fire", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Gianluigi Buffon",
   "niveau": "facile",
   "nomDeFamille": [
    "Buffon"
   ],
   "autresReponses": [
    "Buffon",
    "Gigi Buffon",
    "Gigi"
   ],
   "presentation": "Gardien italien de légende, champion du monde 2006 et monument de la Juventus.",
   "carriere": [
    {"club": "parme", "de": 1995, "a": 2001},
    {"club": "juventus", "de": 2001, "a": 2018},
    {"club": "paris-sg", "de": 2018, "a": 2019},
    {"club": "juventus", "de": 2019, "a": 2021},
    {"club": "parme", "de": 2021, "a": 2023}
   ]
  },
  {
   "nom": "Paolo Maldini",
   "niveau": "facile",
   "nomDeFamille": [
    "Maldini"
   ],
   "autresReponses": [
    "Maldini"
   ],
   "presentation": "Défenseur italien élégant, fidèle à l'AC Milan toute sa carrière, quintuple vainqueur de la Coupe des clubs champions et de la Ligue des champions.",
   "carriere": [
    {"club": "ac-milan", "de": 1984, "a": 2009}
   ]
  },
  {
   "nom": "Andrea Pirlo",
   "niveau": "facile",
   "nomDeFamille": [
    "Pirlo"
   ],
   "autresReponses": [
    "Pirlo"
   ],
   "presentation": "Meneur de jeu reculé italien, champion du monde 2006 et maître des coups francs.",
   "carriere": [
    {"club": "brescia", "de": 1995, "a": 1998},
    {"club": "inter-milan", "de": 1998, "a": 2001},
    {"club": "ac-milan", "de": 2001, "a": 2011},
    {"club": "juventus", "de": 2011, "a": 2015},
    {"club": "new-york-city-fc", "de": 2015, "a": 2017}
   ]
  },
  {
   "nom": "Francesco Totti",
   "niveau": "facile",
   "nomDeFamille": [
    "Totti"
   ],
   "autresReponses": [
    "Totti",
    "Er Pupone"
   ],
   "presentation": "Capitaine éternel de l'AS Rome, club de toute sa carrière, et champion du monde 2006.",
   "carriere": [
    {"club": "as-rome", "de": 1993, "a": 2017}
   ]
  },
  {
   "nom": "Alessandro Del Piero",
   "niveau": "facile",
   "nomDeFamille": [
    "Del Piero",
    "Piero"
   ],
   "autresReponses": [
    "Del Piero",
    "Alex Del Piero",
    "Pinturicchio"
   ],
   "presentation": "Attaquant italien, meilleur buteur de l'histoire de la Juventus et champion du monde 2006.",
   "carriere": [
    {"club": "padoue", "de": 1991, "a": 1993},
    {"club": "juventus", "de": 1993, "a": 2012},
    {"club": "sydney-fc", "de": 2012, "a": 2014},
    {"club": "delhi-dynamos", "de": 2014, "a": 2014}
   ]
  },
  {
   "nom": "Roberto Baggio",
   "niveau": "facile",
   "nomDeFamille": [
    "Baggio"
   ],
   "autresReponses": [
    "Baggio",
    "Il Divin Codino"
   ],
   "presentation": "« Il Divin Codino », Ballon d'or 1993, resté célèbre pour son tir au but manqué en finale de la Coupe du monde 1994.",
   "carriere": [
    {"club": "vicence", "de": 1982, "a": 1985},
    {"club": "fiorentina", "de": 1985, "a": 1990},
    {"club": "juventus", "de": 1990, "a": 1995},
    {"club": "ac-milan", "de": 1995, "a": 1997},
    {"club": "bologne", "de": 1997, "a": 1998},
    {"club": "inter-milan", "de": 1998, "a": 2000},
    {"club": "brescia", "de": 2000, "a": 2004}
   ]
  },
  {
   "nom": "Steven Gerrard",
   "niveau": "facile",
   "nomDeFamille": [
    "Gerrard"
   ],
   "autresReponses": [
    "Gerrard",
    "Stevie G"
   ],
   "presentation": "Capitaine emblématique de Liverpool, héros de la remontée historique en finale de Ligue des champions 2005 à Istanbul.",
   "carriere": [
    {"club": "liverpool", "de": 1998, "a": 2015},
    {"club": "los-angeles-galaxy", "de": 2015, "a": 2016}
   ]
  },
  {
   "nom": "Frank Lampard",
   "niveau": "facile",
   "nomDeFamille": [
    "Lampard"
   ],
   "autresReponses": [
    "Lampard",
    "Lamps"
   ],
   "presentation": "Milieu anglais, meilleur buteur de l'histoire de Chelsea malgré son poste de milieu de terrain.",
   "carriere": [
    {"club": "west-ham", "de": 1995, "a": 2001},
    {"club": "chelsea", "de": 2001, "a": 2014},
    {"club": "manchester-city", "de": 2014, "a": 2015},
    {"club": "new-york-city-fc", "de": 2015, "a": 2016}
   ]
  },
  {
   "nom": "Wayne Rooney",
   "niveau": "facile",
   "nomDeFamille": [
    "Rooney"
   ],
   "autresReponses": [
    "Rooney"
   ],
   "presentation": "Attaquant anglais, meilleur buteur de l'histoire de Manchester United et longtemps recordman de buts en sélection anglaise.",
   "carriere": [
    {"club": "everton", "de": 2002, "a": 2004},
    {"club": "manchester-united", "de": 2004, "a": 2017},
    {"club": "everton", "de": 2017, "a": 2018},
    {"club": "d-c-united", "de": 2018, "a": 2019},
    {"club": "derby-county", "de": 2020, "a": 2021}
   ]
  },
  {
   "nom": "Didier Drogba",
   "niveau": "facile",
   "nomDeFamille": [
    "Drogba"
   ],
   "autresReponses": [
    "Drogba"
   ],
   "presentation": "Attaquant ivoirien, héros de Chelsea en finale de Ligue des champions 2012 et légende du football africain.",
   "carriere": [
    {"club": "le-mans", "de": 1998, "a": 2002},
    {"club": "en-avant-guingamp", "de": 2002, "a": 2003},
    {"club": "olympique-de-marseille", "de": 2003, "a": 2004},
    {"club": "chelsea", "de": 2004, "a": 2012},
    {"club": "shanghai-shenhua", "de": 2012, "a": 2013},
    {"club": "galatasaray", "de": 2013, "a": 2014},
    {"club": "chelsea", "de": 2014, "a": 2015},
    {"club": "impact-de-montreal", "de": 2015, "a": 2016},
    {"club": "phoenix-rising", "de": 2017, "a": 2018}
   ]
  },
  {
   "nom": "Samuel Eto'o",
   "niveau": "facile",
   "nomDeFamille": [
    "Eto'o"
   ],
   "autresReponses": [
    "Eto'o",
    "Etoo"
   ],
   "presentation": "Attaquant camerounais, quadruple Ballon d'or africain et vainqueur de deux triplés historiques avec Barcelone et l'Inter.",
   "carriere": [
    {"club": "real-madrid", "de": 1997, "a": 2000},
    {"club": "majorque", "de": 2000, "a": 2004},
    {"club": "barcelone", "de": 2004, "a": 2009},
    {"club": "inter-milan", "de": 2009, "a": 2011},
    {"club": "anji-makhatchkala", "de": 2011, "a": 2013},
    {"club": "chelsea", "de": 2013, "a": 2014},
    {"club": "everton", "de": 2014, "a": 2015},
    {"club": "sampdoria", "de": 2015, "a": 2015},
    {"club": "antalyaspor", "de": 2015, "a": 2018},
    {"club": "konyaspor", "de": 2018, "a": 2018},
    {"club": "qatar-sc", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Eden Hazard",
   "niveau": "facile",
   "nomDeFamille": [
    "Hazard"
   ],
   "autresReponses": [
    "Hazard"
   ],
   "presentation": "Ailier belge virtuose, élu meilleur joueur de Premier League avec Chelsea et pilier de la génération dorée belge.",
   "carriere": [
    {"club": "lille-osc", "de": 2007, "a": 2012},
    {"club": "chelsea", "de": 2012, "a": 2019},
    {"club": "real-madrid", "de": 2019, "a": 2023}
   ]
  },
  {
   "nom": "Kevin De Bruyne",
   "niveau": "facile",
   "nomDeFamille": [
    "De Bruyne",
    "Bruyne"
   ],
   "autresReponses": [
    "De Bruyne",
    "KDB"
   ],
   "presentation": "Milieu belge à la vision de jeu exceptionnelle, multiple champion d'Angleterre avec Manchester City.",
   "carriere": [
    {"club": "krc-genk", "de": 2008, "a": 2012},
    {"club": "chelsea", "de": 2012, "a": 2014},
    {"club": "vfl-wolfsburg", "de": 2014, "a": 2015},
    {"club": "manchester-city", "de": 2015, "a": 2025},
    {"club": "naples", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Mohamed Salah",
   "niveau": "facile",
   "nomDeFamille": [
    "Salah"
   ],
   "autresReponses": [
    "Salah",
    "Mo Salah"
   ],
   "presentation": "Ailier égyptien, plusieurs fois meilleur buteur de Premier League et vainqueur de la Ligue des champions 2019 avec Liverpool.",
   "carriere": [
    {"club": "arab-contractors", "de": 2010, "a": 2012},
    {"club": "fc-bale", "de": 2012, "a": 2014},
    {"club": "chelsea", "de": 2014, "a": 2015},
    {"club": "as-rome", "de": 2015, "a": 2017},
    {"club": "liverpool", "de": 2017, "a": 2026},
    {"club": "trabzonspor", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Sadio Mané",
   "niveau": "facile",
   "nomDeFamille": [
    "Mané"
   ],
   "autresReponses": [
    "Mane"
   ],
   "presentation": "Attaquant sénégalais, vainqueur de la Ligue des champions avec Liverpool et de la Coupe d'Afrique 2021.",
   "carriere": [
    {"club": "fc-metz", "de": 2011, "a": 2012},
    {"club": "red-bull-salzbourg", "de": 2012, "a": 2014},
    {"club": "southampton", "de": 2014, "a": 2016},
    {"club": "liverpool", "de": 2016, "a": 2022},
    {"club": "bayern-munich", "de": 2022, "a": 2023},
    {"club": "al-nassr", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Antoine Griezmann",
   "niveau": "facile",
   "nomDeFamille": [
    "Griezmann"
   ],
   "autresReponses": [
    "Griezmann",
    "Grizou"
   ],
   "presentation": "Attaquant français champion du monde 2018, meilleur buteur de l'histoire de l'Atlético Madrid.",
   "carriere": [
    {"club": "real-sociedad", "de": 2009, "a": 2014},
    {"club": "atletico-madrid", "de": 2014, "a": 2019},
    {"club": "barcelone", "de": 2019, "a": 2021},
    {"club": "atletico-madrid", "de": 2021, "a": 2026},
    {"club": "orlando-city", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Paul Pogba",
   "niveau": "facile",
   "nomDeFamille": [
    "Pogba"
   ],
   "autresReponses": [
    "Pogba",
    "La Pioche"
   ],
   "presentation": "Milieu français champion du monde 2018, buteur en finale contre la Croatie.",
   "carriere": [
    {"club": "manchester-united", "de": 2011, "a": 2012},
    {"club": "juventus", "de": 2012, "a": 2016},
    {"club": "manchester-united", "de": 2016, "a": 2022},
    {"club": "juventus", "de": 2022, "a": 2024},
    {"club": "as-monaco", "de": 2025, "a": 2026}
   ]
  },
  {
   "nom": "N'Golo Kanté",
   "niveau": "facile",
   "nomDeFamille": [
    "Kanté"
   ],
   "autresReponses": [
    "Kante"
   ],
   "presentation": "Milieu français infatigable, champion d'Angleterre avec Leicester puis Chelsea, et champion du monde 2018.",
   "carriere": [
    {"club": "us-boulogne", "de": 2012, "a": 2013},
    {"club": "stade-malherbe-caen", "de": 2013, "a": 2015},
    {"club": "leicester-city", "de": 2015, "a": 2016},
    {"club": "chelsea", "de": 2016, "a": 2023},
    {"club": "al-ittihad", "de": 2023, "a": 2026},
    {"club": "fenerbahce", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Ousmane Dembélé",
   "niveau": "facile",
   "nomDeFamille": [
    "Dembélé"
   ],
   "autresReponses": [
    "Dembele"
   ],
   "presentation": "Ailier français ambidextre, champion du monde 2018 et Ballon d'or 2025.",
   "carriere": [
    {"club": "stade-rennais", "de": 2015, "a": 2016},
    {"club": "borussia-dortmund", "de": 2016, "a": 2017},
    {"club": "barcelone", "de": 2017, "a": 2023},
    {"club": "paris-sg", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Harry Kane",
   "niveau": "facile",
   "nomDeFamille": [
    "Kane"
   ],
   "autresReponses": [
    "Kane"
   ],
   "presentation": "Buteur anglais, meilleur buteur de l'histoire de Tottenham et de l'équipe d'Angleterre.",
   "carriere": [
    {"club": "tottenham", "de": 2009, "a": 2023},
    {"club": "bayern-munich", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Gareth Bale",
   "niveau": "facile",
   "nomDeFamille": [
    "Bale"
   ],
   "autresReponses": [
    "Bale"
   ],
   "presentation": "Ailier gallois, auteur d'un retourné légendaire en finale de Ligue des champions 2018 avec le Real Madrid.",
   "carriere": [
    {"club": "southampton", "de": 2006, "a": 2007},
    {"club": "tottenham", "de": 2007, "a": 2013},
    {"club": "real-madrid", "de": 2013, "a": 2022},
    {"club": "los-angeles-fc", "de": 2022, "a": 2023}
   ]
  },
  {
   "nom": "Luis Suárez",
   "niveau": "facile",
   "nomDeFamille": [
    "Suárez"
   ],
   "autresReponses": [
    "Suarez",
    "El Pistolero"
   ],
   "presentation": "Attaquant uruguayen redoutable, membre du célèbre trio MSN au FC Barcelone avec Messi et Neymar.",
   "carriere": [
    {"club": "nacional", "de": 2005, "a": 2006},
    {"club": "fc-groningue", "de": 2006, "a": 2007},
    {"club": "ajax-amsterdam", "de": 2007, "a": 2011},
    {"club": "liverpool", "de": 2011, "a": 2014},
    {"club": "barcelone", "de": 2014, "a": 2020},
    {"club": "atletico-madrid", "de": 2020, "a": 2022},
    {"club": "nacional", "de": 2022, "a": 2022},
    {"club": "gremio", "de": 2023, "a": 2023},
    {"club": "inter-miami", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Sergio Agüero",
   "niveau": "facile",
   "nomDeFamille": [
    "Agüero"
   ],
   "autresReponses": [
    "Aguero",
    "Kun Aguero",
    "Kun Agüero",
    "El Kun"
   ],
   "presentation": "Attaquant argentin, meilleur buteur de l'histoire de Manchester City et auteur du but du titre à la dernière seconde en 2012.",
   "carriere": [
    {"club": "independiente", "de": 2003, "a": 2006},
    {"club": "atletico-madrid", "de": 2006, "a": 2011},
    {"club": "manchester-city", "de": 2011, "a": 2021},
    {"club": "barcelone", "de": 2021, "a": 2021}
   ]
  },
  {
   "nom": "Ángel Di María",
   "niveau": "facile",
   "nomDeFamille": [
    "Di María",
    "María"
   ],
   "autresReponses": [
    "Di Maria",
    "Fideo"
   ],
   "presentation": "Ailier argentin, buteur en finale des Coupes du monde et de la Copa América, et champion du monde 2022.",
   "carriere": [
    {"club": "rosario-central", "de": 2005, "a": 2007},
    {"club": "benfica", "de": 2007, "a": 2010},
    {"club": "real-madrid", "de": 2010, "a": 2014},
    {"club": "manchester-united", "de": 2014, "a": 2015},
    {"club": "paris-sg", "de": 2015, "a": 2022},
    {"club": "juventus", "de": 2022, "a": 2023},
    {"club": "benfica", "de": 2023, "a": 2025},
    {"club": "rosario-central", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Marcelo",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Marcelo Vieira"
   ],
   "presentation": "Latéral gauche brésilien offensif, quintuple vainqueur de la Ligue des champions avec le Real Madrid.",
   "carriere": [
    {"club": "fluminense", "de": 2005, "a": 2007},
    {"club": "real-madrid", "de": 2007, "a": 2022},
    {"club": "olympiakos", "de": 2022, "a": 2023},
    {"club": "fluminense", "de": 2023, "a": 2024}
   ]
  },
  {
   "nom": "Dani Alves",
   "niveau": "facile",
   "nomDeFamille": [
    "Alves"
   ],
   "autresReponses": [
    "Daniel Alves",
    "Alves"
   ],
   "presentation": "Latéral droit brésilien, l'un des joueurs les plus titrés de l'histoire du football.",
   "carriere": [
    {"club": "bahia", "de": 2001, "a": 2003},
    {"club": "fc-seville", "de": 2003, "a": 2008},
    {"club": "barcelone", "de": 2008, "a": 2016},
    {"club": "juventus", "de": 2016, "a": 2017},
    {"club": "paris-sg", "de": 2017, "a": 2019},
    {"club": "sao-paulo-fc", "de": 2019, "a": 2021},
    {"club": "barcelone", "de": 2021, "a": 2022},
    {"club": "pumas-unam", "de": 2022, "a": 2023}
   ]
  },
  {
   "nom": "Iker Casillas",
   "niveau": "facile",
   "nomDeFamille": [
    "Casillas"
   ],
   "autresReponses": [
    "Casillas",
    "San Iker"
   ],
   "presentation": "Gardien et capitaine espagnol, champion du monde 2010 et triple vainqueur de la Ligue des champions avec le Real Madrid.",
   "carriere": [
    {"club": "real-madrid", "de": 1999, "a": 2015},
    {"club": "fc-porto", "de": 2015, "a": 2020}
   ]
  },
  {
   "nom": "Manuel Neuer",
   "niveau": "facile",
   "nomDeFamille": [
    "Neuer"
   ],
   "autresReponses": [
    "Neuer"
   ],
   "presentation": "Gardien allemand champion du monde 2014, il a révolutionné le poste avec son style de « gardien-libéro ».",
   "carriere": [
    {"club": "schalke-04", "de": 2005, "a": 2011},
    {"club": "bayern-munich", "de": 2011, "a": null}
   ]
  },
  {
   "nom": "Thomas Müller",
   "niveau": "facile",
   "nomDeFamille": [
    "Müller"
   ],
   "autresReponses": [
    "Thomas Mueller"
   ],
   "presentation": "Attaquant allemand champion du monde 2014, recordman de matchs joués avec le Bayern Munich.",
   "carriere": [
    {"club": "bayern-munich", "de": 2008, "a": 2025},
    {"club": "vancouver-whitecaps", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Toni Kroos",
   "niveau": "facile",
   "nomDeFamille": [
    "Kroos"
   ],
   "autresReponses": [
    "Kroos"
   ],
   "presentation": "Milieu allemand au jeu de passes métronomique, champion du monde 2014 et multiple vainqueur de la Ligue des champions.",
   "carriere": [
    {"club": "bayern-munich", "de": 2007, "a": 2014},
    {"club": "real-madrid", "de": 2014, "a": 2024}
   ]
  },
  {
   "nom": "Mesut Özil",
   "niveau": "facile",
   "nomDeFamille": [
    "Özil"
   ],
   "autresReponses": [
    "Ozil",
    "Oezil"
   ],
   "presentation": "Meneur de jeu allemand au pied gauche soyeux, champion du monde 2014 et roi des passes décisives.",
   "carriere": [
    {"club": "schalke-04", "de": 2006, "a": 2008},
    {"club": "werder-breme", "de": 2008, "a": 2010},
    {"club": "real-madrid", "de": 2010, "a": 2013},
    {"club": "arsenal", "de": 2013, "a": 2021},
    {"club": "fenerbahce", "de": 2021, "a": 2022},
    {"club": "istanbul-basaksehir", "de": 2022, "a": 2023}
   ]
  },
  {
   "nom": "Philipp Lahm",
   "niveau": "facile",
   "nomDeFamille": [
    "Lahm"
   ],
   "autresReponses": [
    "Lahm"
   ],
   "presentation": "Capitaine allemand champion du monde 2014, latéral au placement parfait et fidèle au Bayern Munich.",
   "carriere": [
    {"club": "bayern-munich", "de": 2002, "a": 2017}
   ]
  },
  {
   "nom": "Arjen Robben",
   "niveau": "facile",
   "nomDeFamille": [
    "Robben"
   ],
   "autresReponses": [
    "Robben"
   ],
   "presentation": "Ailier néerlandais à l'éternel crochet intérieur du pied gauche, buteur en finale de Ligue des champions 2013.",
   "carriere": [
    {"club": "fc-groningue", "de": 2000, "a": 2002},
    {"club": "psv-eindhoven", "de": 2002, "a": 2004},
    {"club": "chelsea", "de": 2004, "a": 2007},
    {"club": "real-madrid", "de": 2007, "a": 2009},
    {"club": "bayern-munich", "de": 2009, "a": 2019},
    {"club": "fc-groningue", "de": 2020, "a": 2021}
   ]
  },
  {
   "nom": "Franck Ribéry",
   "niveau": "facile",
   "nomDeFamille": [
    "Ribéry"
   ],
   "autresReponses": [
    "Ribery"
   ],
   "presentation": "Ailier français, légende du Bayern Munich et troisième du Ballon d'or 2013.",
   "carriere": [
    {"club": "us-boulogne", "de": 2000, "a": 2002},
    {"club": "olympique-d-ales", "de": 2002, "a": 2003},
    {"club": "stade-brestois", "de": 2003, "a": 2004},
    {"club": "fc-metz", "de": 2004, "a": 2005},
    {"club": "galatasaray", "de": 2005, "a": 2005},
    {"club": "olympique-de-marseille", "de": 2005, "a": 2007},
    {"club": "bayern-munich", "de": 2007, "a": 2019},
    {"club": "fiorentina", "de": 2019, "a": 2021},
    {"club": "salernitana", "de": 2021, "a": 2022}
   ]
  },
  {
   "nom": "Robin van Persie",
   "niveau": "facile",
   "nomDeFamille": [
    "van Persie",
    "Persie"
   ],
   "autresReponses": [
    "Van Persie",
    "RVP"
   ],
   "presentation": "Attaquant néerlandais au pied gauche magique, célèbre pour sa « tête plongeante » contre l'Espagne en 2014.",
   "carriere": [
    {"club": "feyenoord", "de": 2001, "a": 2004},
    {"club": "arsenal", "de": 2004, "a": 2012},
    {"club": "manchester-united", "de": 2012, "a": 2015},
    {"club": "fenerbahce", "de": 2015, "a": 2018},
    {"club": "feyenoord", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Patrick Vieira",
   "niveau": "facile",
   "nomDeFamille": [
    "Vieira"
   ],
   "autresReponses": [
    "Vieira"
   ],
   "presentation": "Milieu français champion du monde 1998, capitaine des « Invincibles » d'Arsenal en 2003-2004.",
   "carriere": [
    {"club": "as-cannes", "de": 1993, "a": 1995},
    {"club": "ac-milan", "de": 1995, "a": 1996},
    {"club": "arsenal", "de": 1996, "a": 2005},
    {"club": "juventus", "de": 2005, "a": 2006},
    {"club": "inter-milan", "de": 2006, "a": 2010},
    {"club": "manchester-city", "de": 2010, "a": 2011}
   ]
  },
  {
   "nom": "Lilian Thuram",
   "niveau": "facile",
   "nomDeFamille": [
    "Thuram"
   ],
   "autresReponses": [],
   "presentation": "Défenseur français longtemps recordman de sélections chez les Bleus, auteur d'un doublé en demi-finale du Mondial 1998.",
   "carriere": [
    {"club": "as-monaco", "de": 1991, "a": 1996},
    {"club": "parme", "de": 1996, "a": 2001},
    {"club": "juventus", "de": 2001, "a": 2006},
    {"club": "barcelone", "de": 2006, "a": 2008}
   ]
  },
  {
   "nom": "Fabien Barthez",
   "niveau": "facile",
   "nomDeFamille": [
    "Barthez"
   ],
   "autresReponses": [
    "Barthez",
    "Fabulous Fab"
   ],
   "presentation": "Gardien français au crâne embrassé par Laurent Blanc, champion du monde 1998 et champion d'Europe 2000.",
   "carriere": [
    {"club": "toulouse-fc", "de": 1990, "a": 1992},
    {"club": "olympique-de-marseille", "de": 1992, "a": 1995},
    {"club": "as-monaco", "de": 1995, "a": 2000},
    {"club": "manchester-united", "de": 2000, "a": 2004},
    {"club": "olympique-de-marseille", "de": 2004, "a": 2006},
    {"club": "fc-nantes", "de": 2006, "a": 2007}
   ]
  },
  {
   "nom": "Éric Cantona",
   "niveau": "facile",
   "nomDeFamille": [
    "Cantona"
   ],
   "autresReponses": [
    "Cantona",
    "King Eric"
   ],
   "presentation": "« King Eric », attaquant français au col relevé et idole de Manchester United.",
   "carriere": [
    {"club": "aj-auxerre", "de": 1983, "a": 1988},
    {"club": "olympique-de-marseille", "de": 1988, "a": 1991},
    {"club": "nimes-olympique", "de": 1991, "a": 1992},
    {"club": "leeds-united", "de": 1992, "a": 1992},
    {"club": "manchester-united", "de": 1992, "a": 1997}
   ]
  },
  {
   "nom": "Ryan Giggs",
   "niveau": "facile",
   "nomDeFamille": [
    "Giggs"
   ],
   "autresReponses": [
    "Giggs"
   ],
   "presentation": "Ailier gallois, recordman de titres de champion d'Angleterre, tous avec Manchester United.",
   "carriere": [
    {"club": "manchester-united", "de": 1990, "a": 2014}
   ]
  },
  {
   "nom": "Paul Scholes",
   "niveau": "facile",
   "nomDeFamille": [
    "Scholes"
   ],
   "autresReponses": [
    "Scholes"
   ],
   "presentation": "Milieu anglais au toucher de balle exceptionnel, légende de Manchester United.",
   "carriere": [
    {"club": "manchester-united", "de": 1993, "a": 2013},
    {"club": "royton-town", "de": 2018, "a": 2018}
   ]
  },
  {
   "nom": "Rio Ferdinand",
   "niveau": "facile",
   "nomDeFamille": [
    "Ferdinand"
   ],
   "autresReponses": [
    "Ferdinand"
   ],
   "presentation": "Défenseur central anglais élégant, pilier de Manchester United sous Alex Ferguson.",
   "carriere": [
    {"club": "west-ham", "de": 1995, "a": 2000},
    {"club": "leeds-united", "de": 2000, "a": 2002},
    {"club": "manchester-united", "de": 2002, "a": 2014},
    {"club": "queens-park-rangers", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "John Terry",
   "niveau": "facile",
   "nomDeFamille": [
    "Terry"
   ],
   "autresReponses": [
    "Terry",
    "JT"
   ],
   "presentation": "Capitaine emblématique de Chelsea, défenseur central anglais aux nombreux titres de champion.",
   "carriere": [
    {"club": "chelsea", "de": 1998, "a": 2017},
    {"club": "aston-villa", "de": 2017, "a": 2018}
   ]
  },
  {
   "nom": "Petr Čech",
   "niveau": "facile",
   "nomDeFamille": [
    "Čech"
   ],
   "autresReponses": [
    "Cech"
   ],
   "presentation": "Gardien tchèque au célèbre casque protecteur, vainqueur de la Ligue des champions 2012 avec Chelsea.",
   "carriere": [
    {"club": "chmel-blsany", "de": 1999, "a": 2001},
    {"club": "sparta-prague", "de": 2001, "a": 2002},
    {"club": "stade-rennais", "de": 2002, "a": 2004},
    {"club": "chelsea", "de": 2004, "a": 2015},
    {"club": "arsenal", "de": 2015, "a": 2019}
   ]
  },
  {
   "nom": "Fernando Torres",
   "niveau": "facile",
   "nomDeFamille": [
    "Torres"
   ],
   "autresReponses": [
    "Torres",
    "El Nino",
    "El Niño"
   ],
   "presentation": "« El Niño », buteur espagnol, auteur du but de la victoire en finale de l'Euro 2008.",
   "carriere": [
    {"club": "atletico-madrid", "de": 2001, "a": 2007},
    {"club": "liverpool", "de": 2007, "a": 2011},
    {"club": "chelsea", "de": 2011, "a": 2014},
    {"club": "ac-milan", "de": 2014, "a": 2015},
    {"club": "atletico-madrid", "de": 2015, "a": 2018},
    {"club": "sagan-tosu", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Raúl",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Raul Gonzalez",
    "Raúl González"
   ],
   "presentation": "Attaquant espagnol, icône et longtemps meilleur buteur de l'histoire du Real Madrid.",
   "carriere": [
    {"club": "real-madrid", "de": 1994, "a": 2010},
    {"club": "schalke-04", "de": 2010, "a": 2012},
    {"club": "al-sadd", "de": 2012, "a": 2014},
    {"club": "new-york-cosmos", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "Luís Figo",
   "niveau": "facile",
   "nomDeFamille": [
    "Figo"
   ],
   "autresReponses": [
    "Figo"
   ],
   "presentation": "Ailier portugais, Ballon d'or 2000, célèbre pour son transfert retentissant de Barcelone au Real Madrid.",
   "carriere": [
    {"club": "sporting-portugal", "de": 1989, "a": 1995},
    {"club": "barcelone", "de": 1995, "a": 2000},
    {"club": "real-madrid", "de": 2000, "a": 2005},
    {"club": "inter-milan", "de": 2005, "a": 2009}
   ]
  },
  {
   "nom": "Rivaldo",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Rivaldo Ferreira"
   ],
   "presentation": "Meneur de jeu brésilien, Ballon d'or 1999 et champion du monde 2002.",
   "carriere": [
    {"club": "santa-cruz-recife", "de": 1988, "a": 1992},
    {"club": "mogi-mirim", "de": 1992, "a": 1994},
    {"club": "palmeiras", "de": 1994, "a": 1996},
    {"club": "la-corogne", "de": 1996, "a": 1997},
    {"club": "barcelone", "de": 1997, "a": 2002},
    {"club": "ac-milan", "de": 2002, "a": 2003},
    {"club": "cruzeiro", "de": 2004, "a": 2004},
    {"club": "olympiakos", "de": 2004, "a": 2007},
    {"club": "aek-athenes", "de": 2007, "a": 2008},
    {"club": "bunyodkor", "de": 2008, "a": 2011},
    {"club": "kabuscorp", "de": 2012, "a": 2012},
    {"club": "sao-caetano", "de": 2013, "a": 2013},
    {"club": "mogi-mirim", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "Roberto Carlos",
   "niveau": "facile",
   "nomDeFamille": [
    "Carlos"
   ],
   "autresReponses": [
    "Roberto Carlos da Silva"
   ],
   "presentation": "Latéral gauche brésilien au tir surpuissant, auteur d'un coup franc mythique contre la France en 1997.",
   "carriere": [
    {"club": "uniao-sao-joao", "de": 1991, "a": 1993},
    {"club": "palmeiras", "de": 1993, "a": 1995},
    {"club": "inter-milan", "de": 1995, "a": 1996},
    {"club": "real-madrid", "de": 1996, "a": 2007},
    {"club": "fenerbahce", "de": 2007, "a": 2009},
    {"club": "corinthians", "de": 2010, "a": 2011},
    {"club": "anji-makhatchkala", "de": 2011, "a": 2012},
    {"club": "delhi-dynamos", "de": 2015, "a": 2016}
   ]
  },
  {
   "nom": "Cafu",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Marcos Cafu"
   ],
   "presentation": "Latéral droit brésilien, seul joueur à avoir disputé trois finales de Coupe du monde consécutives.",
   "carriere": [
    {"club": "sao-paulo-fc", "de": 1989, "a": 1994},
    {"club": "real-saragosse", "de": 1995, "a": 1995},
    {"club": "juventude", "de": 1995, "a": 1995},
    {"club": "palmeiras", "de": 1995, "a": 1997},
    {"club": "as-rome", "de": 1997, "a": 2003},
    {"club": "ac-milan", "de": 2003, "a": 2008}
   ]
  },
  {
   "nom": "Romário",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "O Baixinho"
   ],
   "presentation": "Attaquant brésilien, champion du monde 1994 et meilleur joueur du tournoi.",
   "carriere": [
    {"club": "vasco-da-gama", "de": 1985, "a": 1988},
    {"club": "psv-eindhoven", "de": 1988, "a": 1993},
    {"club": "barcelone", "de": 1993, "a": 1995},
    {"club": "flamengo", "de": 1995, "a": 1996},
    {"club": "valence-cf", "de": 1996, "a": 1997},
    {"club": "flamengo", "de": 1997, "a": 1999},
    {"club": "vasco-da-gama", "de": 2000, "a": 2002},
    {"club": "fluminense", "de": 2002, "a": 2004},
    {"club": "vasco-da-gama", "de": 2005, "a": 2006},
    {"club": "miami-fc", "de": 2006, "a": 2006},
    {"club": "vasco-da-gama", "de": 2007, "a": 2007},
    {"club": "america-rio", "de": 2009, "a": 2009}
   ]
  },
  {
   "nom": "George Weah",
   "niveau": "facile",
   "nomDeFamille": [
    "Weah"
   ],
   "autresReponses": [
    "Weah",
    "Mister George"
   ],
   "presentation": "Attaquant libérien, seul Ballon d'or africain (1995), devenu ensuite président du Liberia.",
   "carriere": [
    {"club": "young-survivors", "de": 1981, "a": 1984},
    {"club": "bong-range-united", "de": 1984, "a": 1985},
    {"club": "mighty-barrolle", "de": 1985, "a": 1986},
    {"club": "invincible-eleven", "de": 1986, "a": 1987},
    {"club": "africa-sports", "de": 1987, "a": 1987},
    {"club": "tonnerre-yaounde", "de": 1987, "a": 1988},
    {"club": "as-monaco", "de": 1988, "a": 1992},
    {"club": "paris-sg", "de": 1992, "a": 1995},
    {"club": "ac-milan", "de": 1995, "a": 2000},
    {"club": "manchester-city", "de": 2000, "a": 2000},
    {"club": "olympique-de-marseille", "de": 2000, "a": 2001},
    {"club": "al-jazira", "de": 2001, "a": 2003}
   ]
  },
  {
   "nom": "Andriy Shevchenko",
   "niveau": "facile",
   "nomDeFamille": [
    "Shevchenko"
   ],
   "autresReponses": [
    "Shevchenko",
    "Chevtchenko",
    "Andrei Shevchenko",
    "Andriy Chevtchenko",
    "Sheva"
   ],
   "presentation": "Attaquant ukrainien, Ballon d'or 2004 et deuxième meilleur buteur de l'histoire de l'AC Milan.",
   "carriere": [
    {"club": "dynamo-kiev", "de": 1993, "a": 1999},
    {"club": "ac-milan", "de": 1999, "a": 2006},
    {"club": "chelsea", "de": 2006, "a": 2009},
    {"club": "dynamo-kiev", "de": 2009, "a": 2012}
   ]
  },
  {
   "nom": "Pavel Nedvěd",
   "niveau": "facile",
   "nomDeFamille": [
    "Nedvěd"
   ],
   "autresReponses": [
    "Nedved"
   ],
   "presentation": "Milieu tchèque à la crinière blonde, Ballon d'or 2003 avec la Juventus.",
   "carriere": [
    {"club": "sparta-prague", "de": 1992, "a": 1996},
    {"club": "lazio-rome", "de": 1996, "a": 2001},
    {"club": "juventus", "de": 2001, "a": 2009}
   ]
  },
  {
   "nom": "Michael Owen",
   "niveau": "facile",
   "nomDeFamille": [
    "Owen"
   ],
   "autresReponses": [
    "Owen"
   ],
   "presentation": "Attaquant anglais au sprint fulgurant, Ballon d'or 2001 avec Liverpool.",
   "carriere": [
    {"club": "liverpool", "de": 1996, "a": 2004},
    {"club": "real-madrid", "de": 2004, "a": 2005},
    {"club": "newcastle-united", "de": 2005, "a": 2009},
    {"club": "manchester-united", "de": 2009, "a": 2012},
    {"club": "stoke-city", "de": 2012, "a": 2013}
   ]
  },
  {
   "nom": "Alan Shearer",
   "niveau": "facile",
   "nomDeFamille": [
    "Shearer"
   ],
   "autresReponses": [
    "Shearer"
   ],
   "presentation": "Avant-centre anglais, meilleur buteur de l'histoire de la Premier League.",
   "carriere": [
    {"club": "southampton", "de": 1988, "a": 1992},
    {"club": "blackburn-rovers", "de": 1992, "a": 1996},
    {"club": "newcastle-united", "de": 1996, "a": 2006}
   ]
  },
  {
   "nom": "Gerd Müller",
   "niveau": "facile",
   "nomDeFamille": [
    "Müller"
   ],
   "autresReponses": [
    "Gerd Mueller",
    "Der Bomber"
   ],
   "presentation": "« Der Bomber », buteur allemand légendaire, champion du monde 1974 et Ballon d'or 1970.",
   "carriere": [
    {"club": "nordlingen", "de": 1963, "a": 1964},
    {"club": "bayern-munich", "de": 1964, "a": 1979},
    {"club": "fort-lauderdale-strikers", "de": 1979, "a": 1981}
   ]
  },
  {
   "nom": "Marco van Basten",
   "niveau": "facile",
   "nomDeFamille": [
    "van Basten",
    "Basten"
   ],
   "autresReponses": [
    "Van Basten"
   ],
   "presentation": "Attaquant néerlandais triple Ballon d'or, auteur d'une reprise de volée mythique en finale de l'Euro 1988.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 1981, "a": 1987},
    {"club": "ac-milan", "de": 1987, "a": 1995}
   ]
  },
  {
   "nom": "Ruud Gullit",
   "niveau": "facile",
   "nomDeFamille": [
    "Gullit"
   ],
   "autresReponses": [
    "Gullit"
   ],
   "presentation": "Milieu néerlandais aux dreadlocks, Ballon d'or 1987 et champion d'Europe 1988.",
   "carriere": [
    {"club": "hfc-haarlem", "de": 1979, "a": 1982},
    {"club": "feyenoord", "de": 1982, "a": 1985},
    {"club": "psv-eindhoven", "de": 1985, "a": 1987},
    {"club": "ac-milan", "de": 1987, "a": 1993},
    {"club": "sampdoria", "de": 1993, "a": 1995},
    {"club": "chelsea", "de": 1995, "a": 1998}
   ]
  },
  {
   "nom": "Eusébio",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "La Panthère noire",
    "Eusebio da Silva Ferreira"
   ],
   "presentation": "« La Panthère noire », légende portugaise de Benfica et meilleur buteur de la Coupe du monde 1966.",
   "carriere": [
    {"club": "sporting-lourenco-marques", "de": 1957, "a": 1960},
    {"club": "benfica", "de": 1961, "a": 1975},
    {"club": "boston-minutemen", "de": 1975, "a": 1975},
    {"club": "monterrey", "de": 1975, "a": 1975},
    {"club": "toronto-metros-croatia", "de": 1975, "a": 1976},
    {"club": "beira-mar", "de": 1976, "a": 1976},
    {"club": "las-vegas-quicksilvers", "de": 1976, "a": 1977},
    {"club": "uniao-de-tomar", "de": 1977, "a": 1978},
    {"club": "new-jersey-americans", "de": 1978, "a": 1979}
   ]
  },
  {
   "nom": "Bobby Charlton",
   "niveau": "facile",
   "nomDeFamille": [
    "Charlton"
   ],
   "autresReponses": [
    "Charlton",
    "Sir Bobby Charlton"
   ],
   "presentation": "Champion du monde 1966 avec l'Angleterre, rescapé du drame de Munich et légende de Manchester United.",
   "carriere": [
    {"club": "manchester-united", "de": 1956, "a": 1973},
    {"club": "preston-north-end", "de": 1974, "a": 1975},
    {"club": "waterford", "de": 1976, "a": 1976},
    {"club": "newcastle-kb-united", "de": 1978, "a": 1978},
    {"club": "perth-azzurri", "de": 1980, "a": 1980},
    {"club": "blacktown-city", "de": 1980, "a": 1980}
   ]
  },
  {
   "nom": "George Best",
   "niveau": "facile",
   "nomDeFamille": [
    "Best"
   ],
   "autresReponses": [
    "Best"
   ],
   "presentation": "Ailier nord-irlandais flamboyant, Ballon d'or 1968 et star de Manchester United.",
   "carriere": [
    {"club": "manchester-united", "de": 1963, "a": 1974},
    {"club": "jewish-guild", "de": 1974, "a": 1974},
    {"club": "dunstable-town", "de": 1974, "a": 1974},
    {"club": "stockport-county", "de": 1975, "a": 1975},
    {"club": "cork-celtic", "de": 1975, "a": 1976},
    {"club": "los-angeles-aztecs", "de": 1976, "a": 1976},
    {"club": "fulham", "de": 1976, "a": 1977},
    {"club": "los-angeles-aztecs", "de": 1977, "a": 1978},
    {"club": "fort-lauderdale-strikers", "de": 1978, "a": 1979},
    {"club": "hibernian", "de": 1979, "a": 1980},
    {"club": "san-jose-earthquakes", "de": 1980, "a": 1981},
    {"club": "sea-bee", "de": 1982, "a": 1982},
    {"club": "hong-kong-rangers", "de": 1982, "a": 1982},
    {"club": "bournemouth", "de": 1982, "a": 1983},
    {"club": "brisbane-lions", "de": 1983, "a": 1983}
   ]
  },
  {
   "nom": "Jean-Pierre Papin",
   "niveau": "facile",
   "nomDeFamille": [
    "Papin"
   ],
   "autresReponses": [
    "Papin",
    "JPP"
   ],
   "presentation": "Attaquant français, Ballon d'or 1991 et roi des « papinades », ses reprises de volée acrobatiques.",
   "carriere": [
    {"club": "valenciennes-fc", "de": 1984, "a": 1985},
    {"club": "club-bruges", "de": 1985, "a": 1986},
    {"club": "olympique-de-marseille", "de": 1986, "a": 1992},
    {"club": "ac-milan", "de": 1992, "a": 1994},
    {"club": "bayern-munich", "de": 1994, "a": 1996},
    {"club": "girondins-de-bordeaux", "de": 1996, "a": 1998},
    {"club": "en-avant-guingamp", "de": 1998, "a": 1999},
    {"club": "js-saint-pierroise-la-reunion", "de": 1999, "a": 2001},
    {"club": "lege-cap-ferret", "de": 2001, "a": 2004}
   ]
  },
  {
   "nom": "Jude Bellingham",
   "niveau": "facile",
   "nomDeFamille": [
    "Bellingham"
   ],
   "autresReponses": [
    "Bellingham"
   ],
   "presentation": "Milieu anglais précoce, star du Real Madrid dès sa première saison en 2023-2024.",
   "carriere": [
    {"club": "birmingham-city", "de": 2019, "a": 2020},
    {"club": "borussia-dortmund", "de": 2020, "a": 2023},
    {"club": "real-madrid", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Vinícius Júnior",
   "niveau": "facile",
   "nomDeFamille": [
    "Júnior"
   ],
   "autresReponses": [
    "Vinicius",
    "Vinicius Jr",
    "Vini Jr",
    "Vini"
   ],
   "presentation": "Ailier brésilien virevoltant du Real Madrid, buteur en finale de Ligue des champions 2022 et 2024.",
   "carriere": [
    {"club": "flamengo", "de": 2017, "a": 2018},
    {"club": "real-madrid", "de": 2018, "a": null}
   ]
  },
  {
   "nom": "Alisson Becker",
   "niveau": "facile",
   "nomDeFamille": [
    "Becker"
   ],
   "autresReponses": [
    "Alisson"
   ],
   "presentation": "Gardien brésilien de Liverpool, vainqueur de la Ligue des champions 2019.",
   "carriere": [
    {"club": "internacional", "de": 2013, "a": 2016},
    {"club": "as-rome", "de": 2016, "a": 2018},
    {"club": "liverpool", "de": 2018, "a": null}
   ]
  },
  {
   "nom": "Declan Rice",
   "niveau": "facile",
   "nomDeFamille": [
    "Rice"
   ],
   "autresReponses": [
    "Rice"
   ],
   "presentation": "Milieu défensif anglais, capitaine de West Ham vainqueur de la Ligue Europa Conférence avant son départ pour Arsenal.",
   "carriere": [
    {"club": "west-ham", "de": 2015, "a": 2023},
    {"club": "arsenal", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Marquinhos",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Marcos Aoas Correa"
   ],
   "presentation": "Défenseur brésilien et capitaine du Paris Saint-Germain, recordman de matchs avec le club.",
   "carriere": [
    {"club": "corinthians", "de": 2012, "a": 2012},
    {"club": "as-rome", "de": 2012, "a": 2013},
    {"club": "paris-sg", "de": 2013, "a": null}
   ]
  },
  {
   "nom": "Virgil van Dijk",
   "niveau": "facile",
   "nomDeFamille": [
    "van Dijk",
    "Dijk"
   ],
   "autresReponses": [
    "Van Dijk",
    "VVD"
   ],
   "presentation": "Défenseur central néerlandais, capitaine de Liverpool et deuxième du Ballon d'or 2019.",
   "carriere": [
    {"club": "fc-groningue", "de": 2011, "a": 2013},
    {"club": "celtic", "de": 2013, "a": 2015},
    {"club": "southampton", "de": 2015, "a": 2018},
    {"club": "liverpool", "de": 2018, "a": null}
   ]
  },
  {
   "nom": "Achraf Hakimi",
   "niveau": "facile",
   "nomDeFamille": [
    "Hakimi"
   ],
   "autresReponses": [
    "Hakimi"
   ],
   "presentation": "Latéral droit marocain ultra-rapide, demi-finaliste de la Coupe du monde 2022 avec le Maroc.",
   "carriere": [
    {"club": "real-madrid", "de": 2017, "a": 2020},
    {"club": "inter-milan", "de": 2020, "a": 2021},
    {"club": "paris-sg", "de": 2021, "a": null}
   ]
  },
  {
   "nom": "Rafael Leão",
   "niveau": "facile",
   "nomDeFamille": [
    "Leão"
   ],
   "autresReponses": [
    "Leao"
   ],
   "presentation": "Ailier portugais explosif, champion d'Italie avec l'AC Milan en 2022.",
   "carriere": [
    {"club": "sporting-portugal", "de": 2017, "a": 2018},
    {"club": "lille-osc", "de": 2018, "a": 2019},
    {"club": "ac-milan", "de": 2019, "a": 2026},
    {"club": "galatasaray", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Pedri",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Pedro Gonzalez",
    "Pedro González López"
   ],
   "presentation": "Jeune milieu espagnol du FC Barcelone, champion d'Europe 2024 avec la Roja.",
   "carriere": [
    {"club": "las-palmas", "de": 2019, "a": 2020},
    {"club": "barcelone", "de": 2020, "a": null}
   ]
  },
  {
   "nom": "Rodri",
   "niveau": "facile",
   "nomDeFamille": [],
   "autresReponses": [
    "Rodrigo Hernandez",
    "Rodrigo Hernández Cascante"
   ],
   "presentation": "Milieu défensif espagnol, Ballon d'or 2024 et champion d'Europe la même année.",
   "carriere": [
    {"club": "villarreal", "de": 2015, "a": 2018},
    {"club": "atletico-madrid", "de": 2018, "a": 2019},
    {"club": "manchester-city", "de": 2019, "a": 2026},
    {"club": "barcelone", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Marcus Rashford",
   "niveau": "facile",
   "nomDeFamille": [
    "Rashford"
   ],
   "autresReponses": [
    "Rashford"
   ],
   "presentation": "Attaquant anglais formé à Manchester United, également connu pour son engagement contre la pauvreté infantile.",
   "carriere": [
    {"club": "manchester-united", "de": 2015, "a": null}
   ]
  },
  {
   "nom": "Son Heung-min",
   "niveau": "facile",
   "nomDeFamille": [
    "Son"
   ],
   "autresReponses": [
    "Son",
    "Heung-min Son",
    "Sonny"
   ],
   "presentation": "Attaquant sud-coréen, Soulier d'or de Premier League et capitaine de Tottenham vainqueur de la Ligue Europa 2025.",
   "carriere": [
    {"club": "hambourg-sv", "de": 2010, "a": 2013},
    {"club": "bayer-leverkusen", "de": 2013, "a": 2015},
    {"club": "tottenham", "de": 2015, "a": 2025},
    {"club": "los-angeles-fc", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Riyad Mahrez",
   "niveau": "facile",
   "nomDeFamille": [
    "Mahrez"
   ],
   "autresReponses": [
    "Mahrez"
   ],
   "presentation": "Ailier algérien, champion d'Angleterre surprise avec Leicester en 2016 et champion d'Afrique 2019.",
   "carriere": [
    {"club": "quimper-kerfeunteun", "de": 2009, "a": 2010},
    {"club": "le-havre-ac", "de": 2011, "a": 2014},
    {"club": "leicester-city", "de": 2014, "a": 2018},
    {"club": "manchester-city", "de": 2018, "a": 2023},
    {"club": "al-ahli-djeddah", "de": 2023, "a": 2026},
    {"club": "al-shamal", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Olivier Giroud",
   "niveau": "facile",
   "nomDeFamille": [
    "Giroud"
   ],
   "autresReponses": [
    "Giroud"
   ],
   "presentation": "Attaquant français champion du monde 2018, meilleur buteur de l'histoire de l'équipe de France.",
   "carriere": [
    {"club": "grenoble-foot-38", "de": 2005, "a": 2008},
    {"club": "tours-fc", "de": 2008, "a": 2010},
    {"club": "montpellier-hsc", "de": 2010, "a": 2012},
    {"club": "arsenal", "de": 2012, "a": 2018},
    {"club": "chelsea", "de": 2018, "a": 2021},
    {"club": "ac-milan", "de": 2021, "a": 2024},
    {"club": "los-angeles-fc", "de": 2024, "a": 2025},
    {"club": "lille-osc", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Raphaël Varane",
   "niveau": "difficile",
   "nomDeFamille": [
    "Varane"
   ],
   "autresReponses": [
    "Varane"
   ],
   "presentation": "Défenseur central français, champion du monde 2018 et quadruple vainqueur de la Ligue des champions.",
   "carriere": [
    {"club": "rc-lens", "de": 2010, "a": 2011},
    {"club": "real-madrid", "de": 2011, "a": 2021},
    {"club": "manchester-united", "de": 2021, "a": 2024}
   ]
  },
  {
   "nom": "Hugo Lloris",
   "niveau": "difficile",
   "nomDeFamille": [
    "Lloris"
   ],
   "autresReponses": [
    "Lloris"
   ],
   "presentation": "Gardien et capitaine de l'équipe de France championne du monde 2018, recordman de sélections chez les Bleus.",
   "carriere": [
    {"club": "ogc-nice", "de": 2005, "a": 2008},
    {"club": "olympique-lyonnais", "de": 2008, "a": 2012},
    {"club": "tottenham", "de": 2012, "a": 2024},
    {"club": "los-angeles-fc", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Blaise Matuidi",
   "niveau": "difficile",
   "nomDeFamille": [
    "Matuidi"
   ],
   "autresReponses": [
    "Matuidi"
   ],
   "presentation": "Milieu français au volume de jeu énorme, champion du monde 2018.",
   "carriere": [
    {"club": "es-troyes", "de": 2004, "a": 2007},
    {"club": "as-saint-etienne", "de": 2007, "a": 2011},
    {"club": "paris-sg", "de": 2011, "a": 2017},
    {"club": "juventus", "de": 2017, "a": 2020},
    {"club": "inter-miami", "de": 2020, "a": 2021}
   ]
  },
  {
   "nom": "Laurent Blanc",
   "niveau": "difficile",
   "nomDeFamille": [
    "Blanc"
   ],
   "autresReponses": [
    "Blanc",
    "Le Président"
   ],
   "presentation": "« Le Président », défenseur français champion du monde 1998, auteur du premier but en or de l'histoire de la Coupe du monde.",
   "carriere": [
    {"club": "montpellier-hsc", "de": 1983, "a": 1991},
    {"club": "naples", "de": 1991, "a": 1992},
    {"club": "nimes-olympique", "de": 1992, "a": 1993},
    {"club": "as-saint-etienne", "de": 1993, "a": 1995},
    {"club": "aj-auxerre", "de": 1995, "a": 1996},
    {"club": "barcelone", "de": 1996, "a": 1997},
    {"club": "olympique-de-marseille", "de": 1997, "a": 1999},
    {"club": "inter-milan", "de": 1999, "a": 2001},
    {"club": "manchester-united", "de": 2001, "a": 2003}
   ]
  },
  {
   "nom": "Marcel Desailly",
   "niveau": "difficile",
   "nomDeFamille": [
    "Desailly"
   ],
   "autresReponses": [
    "Desailly",
    "Le Roc"
   ],
   "presentation": "« Le Roc », défenseur français champion du monde 1998 et vainqueur de la Ligue des champions avec Marseille puis Milan.",
   "carriere": [
    {"club": "fc-nantes", "de": 1986, "a": 1992},
    {"club": "olympique-de-marseille", "de": 1992, "a": 1993},
    {"club": "ac-milan", "de": 1993, "a": 1998},
    {"club": "chelsea", "de": 1998, "a": 2004},
    {"club": "al-gharafa", "de": 2004, "a": 2005},
    {"club": "qatar-sc", "de": 2005, "a": 2006}
   ]
  },
  {
   "nom": "Didier Deschamps",
   "niveau": "difficile",
   "nomDeFamille": [
    "Deschamps"
   ],
   "autresReponses": [
    "Deschamps",
    "DD"
   ],
   "presentation": "Capitaine des Bleus champions du monde 1998, puis sélectionneur champion du monde 2018.",
   "carriere": [
    {"club": "fc-nantes", "de": 1985, "a": 1989},
    {"club": "olympique-de-marseille", "de": 1989, "a": 1994},
    {"club": "juventus", "de": 1994, "a": 1999},
    {"club": "chelsea", "de": 1999, "a": 2000},
    {"club": "valence-cf", "de": 2000, "a": 2001}
   ]
  },
  {
   "nom": "Youri Djorkaeff",
   "niveau": "difficile",
   "nomDeFamille": [
    "Djorkaeff"
   ],
   "autresReponses": [
    "Djorkaeff",
    "Le Snake"
   ],
   "presentation": "« Le Snake », meneur de jeu français champion du monde 1998 et champion d'Europe 2000.",
   "carriere": [
    {"club": "grenoble-foot-38", "de": 1984, "a": 1989},
    {"club": "rc-strasbourg", "de": 1989, "a": 1990},
    {"club": "as-monaco", "de": 1990, "a": 1995},
    {"club": "paris-sg", "de": 1995, "a": 1996},
    {"club": "inter-milan", "de": 1996, "a": 1999},
    {"club": "kaiserslautern", "de": 1999, "a": 2002},
    {"club": "bolton-wanderers", "de": 2002, "a": 2004},
    {"club": "blackburn-rovers", "de": 2004, "a": 2004},
    {"club": "new-york-red-bulls", "de": 2005, "a": 2006}
   ]
  },
  {
   "nom": "Emmanuel Petit",
   "niveau": "difficile",
   "nomDeFamille": [
    "Petit"
   ],
   "autresReponses": [
    "Petit",
    "Manu Petit"
   ],
   "presentation": "Milieu français au catogan, auteur du troisième but en finale de la Coupe du monde 1998.",
   "carriere": [
    {"club": "as-monaco", "de": 1988, "a": 1997},
    {"club": "arsenal", "de": 1997, "a": 2000},
    {"club": "barcelone", "de": 2000, "a": 2001},
    {"club": "chelsea", "de": 2001, "a": 2004}
   ]
  },
  {
   "nom": "Robert Pirès",
   "niveau": "difficile",
   "nomDeFamille": [
    "Pirès"
   ],
   "autresReponses": [
    "Pires"
   ],
   "presentation": "Milieu offensif français champion du monde 1998 et membre des « Invincibles » d'Arsenal.",
   "carriere": [
    {"club": "stade-de-reims", "de": 1991, "a": 1992},
    {"club": "fc-metz", "de": 1993, "a": 1998},
    {"club": "olympique-de-marseille", "de": 1998, "a": 2000},
    {"club": "arsenal", "de": 2000, "a": 2006},
    {"club": "villarreal", "de": 2006, "a": 2010},
    {"club": "aston-villa", "de": 2010, "a": 2011},
    {"club": "fc-goa", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "David Trezeguet",
   "niveau": "difficile",
   "nomDeFamille": [
    "Trezeguet"
   ],
   "autresReponses": [
    "Trezeguet",
    "Trezegol"
   ],
   "presentation": "Attaquant français, auteur du but en or en finale de l'Euro 2000 et grand buteur de la Juventus.",
   "carriere": [
    {"club": "platense", "de": 1994, "a": 1995},
    {"club": "as-monaco", "de": 1995, "a": 2000},
    {"club": "juventus", "de": 2000, "a": 2010},
    {"club": "hercules-alicante", "de": 2010, "a": 2011},
    {"club": "baniyas", "de": 2011, "a": 2011},
    {"club": "river-plate", "de": 2012, "a": 2013},
    {"club": "newell-s-old-boys", "de": 2013, "a": 2014},
    {"club": "fc-pune-city", "de": 2014, "a": 2014}
   ]
  },
  {
   "nom": "Nicolas Anelka",
   "niveau": "difficile",
   "nomDeFamille": [
    "Anelka"
   ],
   "autresReponses": [
    "Anelka"
   ],
   "presentation": "Attaquant français au parcours nomade, vainqueur de la Ligue des champions avec le Real Madrid en 2000.",
   "carriere": [
    {"club": "paris-sg", "de": 1996, "a": 1997},
    {"club": "arsenal", "de": 1997, "a": 1999},
    {"club": "real-madrid", "de": 1999, "a": 2000},
    {"club": "paris-sg", "de": 2000, "a": 2002},
    {"club": "manchester-city", "de": 2002, "a": 2005},
    {"club": "fenerbahce", "de": 2005, "a": 2006},
    {"club": "bolton-wanderers", "de": 2006, "a": 2008},
    {"club": "chelsea", "de": 2008, "a": 2012},
    {"club": "shanghai-shenhua", "de": 2012, "a": 2013},
    {"club": "west-bromwich-albion", "de": 2013, "a": 2014},
    {"club": "mumbai-city", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "Claude Makélélé",
   "niveau": "difficile",
   "nomDeFamille": [
    "Makélélé"
   ],
   "autresReponses": [
    "Makelele"
   ],
   "presentation": "Milieu défensif français si influent que son poste a été surnommé « le rôle Makélélé ».",
   "carriere": [
    {"club": "fc-nantes", "de": 1991, "a": 1997},
    {"club": "olympique-de-marseille", "de": 1997, "a": 1998},
    {"club": "celta-vigo", "de": 1998, "a": 2000},
    {"club": "real-madrid", "de": 2000, "a": 2003},
    {"club": "chelsea", "de": 2003, "a": 2008},
    {"club": "paris-sg", "de": 2008, "a": 2011}
   ]
  },
  {
   "nom": "Bixente Lizarazu",
   "niveau": "difficile",
   "nomDeFamille": [
    "Lizarazu"
   ],
   "autresReponses": [
    "Lizarazu",
    "Liza"
   ],
   "presentation": "Latéral gauche basque, champion du monde 1998 et vainqueur de la Ligue des champions 2001 avec le Bayern.",
   "carriere": [
    {"club": "girondins-de-bordeaux", "de": 1988, "a": 1996},
    {"club": "athletic-bilbao", "de": 1996, "a": 1997},
    {"club": "bayern-munich", "de": 1997, "a": 2004},
    {"club": "olympique-de-marseille", "de": 2004, "a": 2004},
    {"club": "bayern-munich", "de": 2005, "a": 2006}
   ]
  },
  {
   "nom": "William Gallas",
   "niveau": "difficile",
   "nomDeFamille": [
    "Gallas"
   ],
   "autresReponses": [
    "Gallas"
   ],
   "presentation": "Défenseur français polyvalent passé par les trois grands clubs de Londres : Chelsea, Arsenal et Tottenham.",
   "carriere": [
    {"club": "stade-malherbe-caen", "de": 1995, "a": 1997},
    {"club": "olympique-de-marseille", "de": 1997, "a": 2001},
    {"club": "chelsea", "de": 2001, "a": 2006},
    {"club": "arsenal", "de": 2006, "a": 2010},
    {"club": "tottenham", "de": 2010, "a": 2013},
    {"club": "perth-glory", "de": 2013, "a": 2014}
   ]
  },
  {
   "nom": "Éric Abidal",
   "niveau": "difficile",
   "nomDeFamille": [
    "Abidal"
   ],
   "autresReponses": [
    "Abidal"
   ],
   "presentation": "Défenseur français du FC Barcelone, revenu au plus haut niveau après une greffe du foie.",
   "carriere": [
    {"club": "lyon-la-duchere", "de": 1996, "a": 2000},
    {"club": "as-monaco", "de": 2000, "a": 2002},
    {"club": "lille-osc", "de": 2002, "a": 2004},
    {"club": "olympique-lyonnais", "de": 2004, "a": 2007},
    {"club": "barcelone", "de": 2007, "a": 2013},
    {"club": "as-monaco", "de": 2013, "a": 2014},
    {"club": "olympiakos", "de": 2014, "a": 2014}
   ]
  },
  {
   "nom": "Patrice Evra",
   "niveau": "difficile",
   "nomDeFamille": [
    "Evra"
   ],
   "autresReponses": [
    "Evra"
   ],
   "presentation": "Latéral gauche français, pilier de Manchester United et capitaine des Bleus.",
   "carriere": [
    {"club": "marsala", "de": 1998, "a": 1999},
    {"club": "monza", "de": 1999, "a": 2000},
    {"club": "ogc-nice", "de": 2000, "a": 2002},
    {"club": "as-monaco", "de": 2002, "a": 2006},
    {"club": "manchester-united", "de": 2006, "a": 2014},
    {"club": "juventus", "de": 2014, "a": 2017},
    {"club": "olympique-de-marseille", "de": 2017, "a": 2017},
    {"club": "west-ham", "de": 2018, "a": 2018}
   ]
  },
  {
   "nom": "Samir Nasri",
   "niveau": "difficile",
   "nomDeFamille": [
    "Nasri"
   ],
   "autresReponses": [
    "Nasri"
   ],
   "presentation": "Milieu offensif français formé à Marseille, double champion d'Angleterre avec Manchester City.",
   "carriere": [
    {"club": "olympique-de-marseille", "de": 2004, "a": 2008},
    {"club": "arsenal", "de": 2008, "a": 2011},
    {"club": "manchester-city", "de": 2011, "a": 2017},
    {"club": "antalyaspor", "de": 2017, "a": 2018},
    {"club": "west-ham", "de": 2019, "a": 2019},
    {"club": "anderlecht", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Yohan Cabaye",
   "niveau": "difficile",
   "nomDeFamille": [
    "Cabaye"
   ],
   "autresReponses": [
    "Cabaye"
   ],
   "presentation": "Milieu français formé à Lille, champion de France 2011 avec le LOSC.",
   "carriere": [
    {"club": "lille-osc", "de": 2004, "a": 2011},
    {"club": "newcastle-united", "de": 2011, "a": 2014},
    {"club": "paris-sg", "de": 2014, "a": 2015},
    {"club": "crystal-palace", "de": 2015, "a": 2018},
    {"club": "al-nasr-dubai", "de": 2018, "a": 2019},
    {"club": "as-saint-etienne", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Hatem Ben Arfa",
   "niveau": "difficile",
   "nomDeFamille": [
    "Ben Arfa",
    "Arfa"
   ],
   "autresReponses": [
    "Ben Arfa",
    "HBA"
   ],
   "presentation": "Dribbleur français au talent immense, auteur de buts spectaculaires à Newcastle et à Nice.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 2004, "a": 2008},
    {"club": "olympique-de-marseille", "de": 2008, "a": 2010},
    {"club": "newcastle-united", "de": 2010, "a": 2015},
    {"club": "ogc-nice", "de": 2015, "a": 2016},
    {"club": "paris-sg", "de": 2016, "a": 2018},
    {"club": "stade-rennais", "de": 2018, "a": 2019},
    {"club": "real-valladolid", "de": 2020, "a": 2020},
    {"club": "girondins-de-bordeaux", "de": 2020, "a": 2021},
    {"club": "lille-osc", "de": 2022, "a": 2022}
   ]
  },
  {
   "nom": "Dimitri Payet",
   "niveau": "difficile",
   "nomDeFamille": [
    "Payet"
   ],
   "autresReponses": [
    "Payet"
   ],
   "presentation": "Meneur de jeu réunionnais, star de l'Euro 2016 et idole de l'Olympique de Marseille.",
   "carriere": [
    {"club": "excelsior-la-reunion", "de": 2004, "a": 2005},
    {"club": "fc-nantes", "de": 2005, "a": 2007},
    {"club": "as-saint-etienne", "de": 2007, "a": 2011},
    {"club": "lille-osc", "de": 2011, "a": 2013},
    {"club": "olympique-de-marseille", "de": 2013, "a": 2015},
    {"club": "west-ham", "de": 2015, "a": 2017},
    {"club": "olympique-de-marseille", "de": 2017, "a": 2023},
    {"club": "vasco-da-gama", "de": 2023, "a": 2025}
   ]
  },
  {
   "nom": "Alexandre Lacazette",
   "niveau": "difficile",
   "nomDeFamille": [
    "Lacazette"
   ],
   "autresReponses": [
    "Lacazette",
    "Laca"
   ],
   "presentation": "Attaquant formé à l'Olympique lyonnais, club dont il est devenu le capitaine après un passage à Arsenal.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 2010, "a": 2017},
    {"club": "arsenal", "de": 2017, "a": 2022},
    {"club": "olympique-lyonnais", "de": 2022, "a": 2025},
    {"club": "neom-sc", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Kingsley Coman",
   "niveau": "difficile",
   "nomDeFamille": [
    "Coman"
   ],
   "autresReponses": [
    "Coman"
   ],
   "presentation": "Ailier français à la vitesse fulgurante, buteur en finale de Ligue des champions 2020 contre le PSG, son club formateur.",
   "carriere": [
    {"club": "paris-sg", "de": 2013, "a": 2014},
    {"club": "juventus", "de": 2014, "a": 2015},
    {"club": "bayern-munich", "de": 2015, "a": 2025},
    {"club": "al-nassr", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Thibaut Courtois",
   "niveau": "difficile",
   "nomDeFamille": [
    "Courtois"
   ],
   "autresReponses": [
    "Courtois"
   ],
   "presentation": "Gardien belge du Real Madrid, homme du match en finale de Ligue des champions 2022.",
   "carriere": [
    {"club": "krc-genk", "de": 2009, "a": 2011},
    {"club": "chelsea", "de": 2011, "a": 2018},
    {"club": "real-madrid", "de": 2018, "a": null}
   ]
  },
  {
   "nom": "Romelu Lukaku",
   "niveau": "difficile",
   "nomDeFamille": [
    "Lukaku"
   ],
   "autresReponses": [
    "Lukaku",
    "Big Rom"
   ],
   "presentation": "Attaquant belge puissant, meilleur buteur de l'histoire de la sélection belge.",
   "carriere": [
    {"club": "anderlecht", "de": 2009, "a": 2011},
    {"club": "chelsea", "de": 2011, "a": 2013},
    {"club": "everton", "de": 2013, "a": 2017},
    {"club": "manchester-united", "de": 2017, "a": 2019},
    {"club": "inter-milan", "de": 2019, "a": 2021},
    {"club": "chelsea", "de": 2021, "a": 2024},
    {"club": "naples", "de": 2024, "a": 2026},
    {"club": "fenerbahce", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Vincent Kompany",
   "niveau": "difficile",
   "nomDeFamille": [
    "Kompany"
   ],
   "autresReponses": [
    "Kompany",
    "Vince Kompany"
   ],
   "presentation": "Défenseur et capitaine belge de Manchester City, quadruple champion d'Angleterre.",
   "carriere": [
    {"club": "anderlecht", "de": 2003, "a": 2006},
    {"club": "hambourg-sv", "de": 2006, "a": 2008},
    {"club": "manchester-city", "de": 2008, "a": 2019},
    {"club": "anderlecht", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Yaya Touré",
   "niveau": "difficile",
   "nomDeFamille": [
    "Touré"
   ],
   "autresReponses": [
    "Toure"
   ],
   "presentation": "Milieu ivoirien puissant, quadruple Ballon d'or africain et pilier de Manchester City.",
   "carriere": [
    {"club": "beveren", "de": 2001, "a": 2003},
    {"club": "metalurh-donetsk", "de": 2003, "a": 2005},
    {"club": "olympiakos", "de": 2005, "a": 2006},
    {"club": "as-monaco", "de": 2006, "a": 2007},
    {"club": "barcelone", "de": 2007, "a": 2010},
    {"club": "manchester-city", "de": 2010, "a": 2018},
    {"club": "olympiakos", "de": 2018, "a": 2018},
    {"club": "qingdao-huanghai", "de": 2019, "a": 2019}
   ]
  },
  {
   "nom": "Michael Essien",
   "niveau": "difficile",
   "nomDeFamille": [
    "Essien"
   ],
   "autresReponses": [
    "Essien",
    "The Bison"
   ],
   "presentation": "Milieu ghanéen surnommé « le Bison », passé par Lyon puis Chelsea.",
   "carriere": [
    {"club": "sc-bastia", "de": 2000, "a": 2003},
    {"club": "olympique-lyonnais", "de": 2003, "a": 2005},
    {"club": "chelsea", "de": 2005, "a": 2014},
    {"club": "ac-milan", "de": 2014, "a": 2015},
    {"club": "panathinaikos", "de": 2015, "a": 2016},
    {"club": "persib-bandung", "de": 2017, "a": 2018},
    {"club": "sabail-fk", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Emmanuel Adebayor",
   "niveau": "difficile",
   "nomDeFamille": [
    "Adebayor"
   ],
   "autresReponses": [
    "Adebayor",
    "Ade"
   ],
   "presentation": "Attaquant togolais, Ballon d'or africain 2008 alors qu'il jouait à Arsenal.",
   "carriere": [
    {"club": "fc-metz", "de": 2001, "a": 2003},
    {"club": "as-monaco", "de": 2003, "a": 2006},
    {"club": "arsenal", "de": 2006, "a": 2009},
    {"club": "manchester-city", "de": 2009, "a": 2011},
    {"club": "tottenham", "de": 2011, "a": 2015},
    {"club": "crystal-palace", "de": 2016, "a": 2016},
    {"club": "istanbul-basaksehir", "de": 2017, "a": 2019},
    {"club": "kayserispor", "de": 2019, "a": 2019},
    {"club": "olimpia", "de": 2020, "a": 2020},
    {"club": "semassi", "de": 2021, "a": 2023}
   ]
  },
  {
   "nom": "Pierre-Emerick Aubameyang",
   "niveau": "difficile",
   "nomDeFamille": [
    "Aubameyang"
   ],
   "autresReponses": [
    "Aubameyang",
    "Auba",
    "PEA"
   ],
   "presentation": "Attaquant gabonais ultra-rapide, Soulier d'or de Bundesliga avec Dortmund puis de Premier League avec Arsenal.",
   "carriere": [
    {"club": "as-saint-etienne", "de": 2011, "a": 2013},
    {"club": "borussia-dortmund", "de": 2013, "a": 2018},
    {"club": "arsenal", "de": 2018, "a": 2022},
    {"club": "barcelone", "de": 2022, "a": 2022},
    {"club": "chelsea", "de": 2022, "a": 2023},
    {"club": "olympique-de-marseille", "de": 2023, "a": 2024},
    {"club": "al-qadsiah", "de": 2024, "a": 2025},
    {"club": "olympique-de-marseille", "de": 2025, "a": 2026},
    {"club": "la-corogne", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Javier Mascherano",
   "niveau": "difficile",
   "nomDeFamille": [
    "Mascherano"
   ],
   "autresReponses": [
    "Mascherano",
    "El Jefecito"
   ],
   "presentation": "Milieu argentin reconverti en défenseur central au FC Barcelone.",
   "carriere": [
    {"club": "river-plate", "de": 2003, "a": 2005},
    {"club": "corinthians", "de": 2005, "a": 2006},
    {"club": "west-ham", "de": 2006, "a": 2007},
    {"club": "liverpool", "de": 2007, "a": 2010},
    {"club": "barcelone", "de": 2010, "a": 2018},
    {"club": "hebei-china-fortune", "de": 2018, "a": 2019},
    {"club": "estudiantes-de-la-plata", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Carlos Tevez",
   "niveau": "difficile",
   "nomDeFamille": [
    "Tevez"
   ],
   "autresReponses": [
    "Tevez",
    "Carlitos",
    "L'Apache"
   ],
   "presentation": "« L'Apache », attaquant argentin, champion d'Angleterre avec les deux clubs de Manchester.",
   "carriere": [
    {"club": "boca-juniors", "de": 2001, "a": 2004},
    {"club": "corinthians", "de": 2005, "a": 2006},
    {"club": "west-ham", "de": 2006, "a": 2007},
    {"club": "manchester-united", "de": 2007, "a": 2009},
    {"club": "manchester-city", "de": 2009, "a": 2013},
    {"club": "juventus", "de": 2013, "a": 2015},
    {"club": "boca-juniors", "de": 2015, "a": 2016},
    {"club": "shanghai-shenhua", "de": 2016, "a": 2018},
    {"club": "boca-juniors", "de": 2018, "a": 2021}
   ]
  },
  {
   "nom": "Gonzalo Higuaín",
   "niveau": "difficile",
   "nomDeFamille": [
    "Higuaín"
   ],
   "autresReponses": [
    "Higuain",
    "Pipita"
   ],
   "presentation": "Buteur argentin né à Brest, auteur de 36 buts en Serie A avec Naples en 2016, un record à l'époque.",
   "carriere": [
    {"club": "river-plate", "de": 2005, "a": 2007},
    {"club": "real-madrid", "de": 2007, "a": 2013},
    {"club": "naples", "de": 2013, "a": 2016},
    {"club": "juventus", "de": 2016, "a": 2020},
    {"club": "inter-miami", "de": 2020, "a": 2022}
   ]
  },
  {
   "nom": "Hernán Crespo",
   "niveau": "difficile",
   "nomDeFamille": [
    "Crespo"
   ],
   "autresReponses": [
    "Crespo",
    "Valdanito"
   ],
   "presentation": "Buteur argentin, auteur d'un doublé en finale de Ligue des champions 2005 avec l'AC Milan.",
   "carriere": [
    {"club": "river-plate", "de": 1993, "a": 1996},
    {"club": "parme", "de": 1996, "a": 2000},
    {"club": "lazio-rome", "de": 2000, "a": 2002},
    {"club": "inter-milan", "de": 2002, "a": 2003},
    {"club": "chelsea", "de": 2003, "a": 2006},
    {"club": "inter-milan", "de": 2006, "a": 2009},
    {"club": "genoa", "de": 2009, "a": 2010},
    {"club": "parme", "de": 2010, "a": 2012}
   ]
  },
  {
   "nom": "Gabriel Batistuta",
   "niveau": "difficile",
   "nomDeFamille": [
    "Batistuta"
   ],
   "autresReponses": [
    "Batistuta",
    "Batigol"
   ],
   "presentation": "« Batigol », buteur argentin au tir surpuissant, idole de la Fiorentina.",
   "carriere": [
    {"club": "newell-s-old-boys", "de": 1988, "a": 1989},
    {"club": "river-plate", "de": 1989, "a": 1990},
    {"club": "boca-juniors", "de": 1990, "a": 1991},
    {"club": "fiorentina", "de": 1991, "a": 2000},
    {"club": "as-rome", "de": 2000, "a": 2003},
    {"club": "al-arabi-qatar", "de": 2003, "a": 2005}
   ]
  },
  {
   "nom": "Juan Román Riquelme",
   "niveau": "difficile",
   "nomDeFamille": [
    "Román Riquelme",
    "Riquelme"
   ],
   "autresReponses": [
    "Riquelme",
    "Roman Riquelme"
   ],
   "presentation": "Meneur de jeu argentin au rythme unique, légende de Boca Juniors.",
   "carriere": [
    {"club": "boca-juniors", "de": 1996, "a": 2002},
    {"club": "barcelone", "de": 2002, "a": 2003},
    {"club": "villarreal", "de": 2003, "a": 2007},
    {"club": "boca-juniors", "de": 2007, "a": 2014},
    {"club": "argentinos-juniors", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "Diego Forlán",
   "niveau": "difficile",
   "nomDeFamille": [
    "Forlán"
   ],
   "autresReponses": [
    "Forlan"
   ],
   "presentation": "Attaquant uruguayen, Ballon d'or de la Coupe du monde 2010.",
   "carriere": [
    {"club": "independiente", "de": 1997, "a": 2002},
    {"club": "manchester-united", "de": 2002, "a": 2004},
    {"club": "villarreal", "de": 2004, "a": 2007},
    {"club": "atletico-madrid", "de": 2007, "a": 2011},
    {"club": "inter-milan", "de": 2011, "a": 2012},
    {"club": "internacional", "de": 2012, "a": 2014},
    {"club": "cerezo-osaka", "de": 2014, "a": 2015},
    {"club": "penarol", "de": 2015, "a": 2016},
    {"club": "mumbai-city", "de": 2016, "a": 2016},
    {"club": "kitchee", "de": 2018, "a": 2018}
   ]
  },
  {
   "nom": "Edinson Cavani",
   "niveau": "difficile",
   "nomDeFamille": [
    "Cavani"
   ],
   "autresReponses": [
    "Cavani",
    "El Matador"
   ],
   "presentation": "« El Matador », buteur uruguayen, longtemps meilleur buteur de l'histoire du Paris Saint-Germain.",
   "carriere": [
    {"club": "danubio", "de": 2005, "a": 2007},
    {"club": "palerme", "de": 2007, "a": 2010},
    {"club": "naples", "de": 2010, "a": 2013},
    {"club": "paris-sg", "de": 2013, "a": 2020},
    {"club": "manchester-united", "de": 2020, "a": 2022},
    {"club": "valence-cf", "de": 2022, "a": 2023},
    {"club": "boca-juniors", "de": 2023, "a": 2026}
   ]
  },
  {
   "nom": "James Rodríguez",
   "niveau": "difficile",
   "nomDeFamille": [
    "Rodríguez"
   ],
   "autresReponses": [
    "James"
   ],
   "presentation": "Meneur de jeu colombien, meilleur buteur de la Coupe du monde 2014.",
   "carriere": [
    {"club": "envigado-fc", "de": 2006, "a": 2008},
    {"club": "banfield", "de": 2008, "a": 2010},
    {"club": "fc-porto", "de": 2010, "a": 2013},
    {"club": "as-monaco", "de": 2013, "a": 2014},
    {"club": "real-madrid", "de": 2014, "a": 2020},
    {"club": "everton", "de": 2020, "a": 2021},
    {"club": "al-rayyan", "de": 2021, "a": 2022},
    {"club": "olympiakos", "de": 2022, "a": 2023},
    {"club": "sao-paulo-fc", "de": 2023, "a": 2024},
    {"club": "rayo-vallecano", "de": 2024, "a": 2025},
    {"club": "club-leon", "de": 2025, "a": 2025},
    {"club": "minnesota-united", "de": 2026, "a": 2026},
    {"club": "atletico-nacional", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Radamel Falcao",
   "niveau": "difficile",
   "nomDeFamille": [
    "Falcao"
   ],
   "autresReponses": [
    "Falcao",
    "El Tigre"
   ],
   "presentation": "« El Tigre », buteur colombien double vainqueur de la Ligue Europa avec Porto puis l'Atlético Madrid.",
   "carriere": [
    {"club": "lanceros-boyaca", "de": 1999, "a": 2001},
    {"club": "river-plate", "de": 2004, "a": 2009},
    {"club": "fc-porto", "de": 2009, "a": 2011},
    {"club": "atletico-madrid", "de": 2011, "a": 2013},
    {"club": "as-monaco", "de": 2013, "a": 2019},
    {"club": "galatasaray", "de": 2019, "a": 2021},
    {"club": "rayo-vallecano", "de": 2021, "a": 2024},
    {"club": "millonarios", "de": 2024, "a": 2026}
   ]
  },
  {
   "nom": "Alexis Sánchez",
   "niveau": "difficile",
   "nomDeFamille": [
    "Sánchez"
   ],
   "autresReponses": [
    "Alexis",
    "Sanchez"
   ],
   "presentation": "Attaquant chilien, double vainqueur de la Copa América et meilleur buteur de l'histoire du Chili.",
   "carriere": [
    {"club": "cobreloa", "de": 2005, "a": 2006},
    {"club": "udinese", "de": 2006, "a": 2011},
    {"club": "barcelone", "de": 2011, "a": 2014},
    {"club": "arsenal", "de": 2014, "a": 2018},
    {"club": "manchester-united", "de": 2018, "a": 2019},
    {"club": "inter-milan", "de": 2019, "a": 2022},
    {"club": "olympique-de-marseille", "de": 2022, "a": 2023},
    {"club": "inter-milan", "de": 2023, "a": 2024},
    {"club": "udinese", "de": 2024, "a": 2025},
    {"club": "fc-seville", "de": 2025, "a": 2026},
    {"club": "cf-montreal", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Arturo Vidal",
   "niveau": "difficile",
   "nomDeFamille": [
    "Vidal"
   ],
   "autresReponses": [
    "Vidal",
    "King Arturo"
   ],
   "presentation": "Milieu chilien combatif, champion dans de nombreux clubs et double vainqueur de la Copa América.",
   "carriere": [
    {"club": "colo-colo", "de": 2005, "a": 2007},
    {"club": "bayer-leverkusen", "de": 2007, "a": 2011},
    {"club": "juventus", "de": 2011, "a": 2015},
    {"club": "bayern-munich", "de": 2015, "a": 2018},
    {"club": "barcelone", "de": 2018, "a": 2020},
    {"club": "inter-milan", "de": 2020, "a": 2022},
    {"club": "flamengo", "de": 2022, "a": 2023},
    {"club": "athletico-paranaense", "de": 2023, "a": 2024},
    {"club": "colo-colo", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Thiago Silva",
   "niveau": "difficile",
   "nomDeFamille": [
    "Silva"
   ],
   "autresReponses": [
    "O Monstro"
   ],
   "presentation": "Défenseur central brésilien élégant, capitaine emblématique du Paris Saint-Germain.",
   "carriere": [
    {"club": "rs-futebol", "de": 2002, "a": 2003},
    {"club": "juventude", "de": 2004, "a": 2004},
    {"club": "fluminense", "de": 2006, "a": 2008},
    {"club": "ac-milan", "de": 2009, "a": 2012},
    {"club": "paris-sg", "de": 2012, "a": 2020},
    {"club": "chelsea", "de": 2020, "a": 2024},
    {"club": "fluminense", "de": 2024, "a": 2025},
    {"club": "fc-porto", "de": 2026, "a": 2026},
    {"club": "fluminense", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "David Luiz",
   "niveau": "difficile",
   "nomDeFamille": [
    "Luiz"
   ],
   "autresReponses": [
    "Luiz"
   ],
   "presentation": "Défenseur brésilien à la chevelure bouclée, vainqueur de la Ligue des champions 2012 et de la Ligue Europa avec Chelsea.",
   "carriere": [
    {"club": "vitoria-bahia", "de": 2006, "a": 2007},
    {"club": "benfica", "de": 2007, "a": 2011},
    {"club": "chelsea", "de": 2011, "a": 2014},
    {"club": "paris-sg", "de": 2014, "a": 2016},
    {"club": "chelsea", "de": 2016, "a": 2019},
    {"club": "arsenal", "de": 2019, "a": 2021},
    {"club": "flamengo", "de": 2021, "a": 2024},
    {"club": "fortaleza", "de": 2025, "a": 2025},
    {"club": "pafos", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Philippe Coutinho",
   "niveau": "difficile",
   "nomDeFamille": [
    "Coutinho"
   ],
   "autresReponses": [
    "Coutinho",
    "Phil Coutinho"
   ],
   "presentation": "Meneur de jeu brésilien, star de Liverpool avant un transfert record vers le FC Barcelone.",
   "carriere": [
    {"club": "inter-milan", "de": 2008, "a": 2013},
    {"club": "liverpool", "de": 2013, "a": 2018},
    {"club": "barcelone", "de": 2018, "a": 2021},
    {"club": "aston-villa", "de": 2021, "a": 2024},
    {"club": "vasco-da-gama", "de": 2024, "a": 2026},
    {"club": "santos", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Robinho",
   "niveau": "difficile",
   "nomDeFamille": [],
   "autresReponses": [
    "Robson de Souza"
   ],
   "presentation": "Ailier brésilien aux dribbles chaloupés, recruté par le Real Madrid puis Manchester City.",
   "carriere": [
    {"club": "santos", "de": 2002, "a": 2005},
    {"club": "real-madrid", "de": 2005, "a": 2008},
    {"club": "manchester-city", "de": 2008, "a": 2010},
    {"club": "ac-milan", "de": 2010, "a": 2015},
    {"club": "guangzhou-evergrande", "de": 2015, "a": 2016},
    {"club": "atletico-mineiro", "de": 2016, "a": 2017},
    {"club": "sivasspor", "de": 2018, "a": 2019},
    {"club": "istanbul-basaksehir", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Adriano",
   "niveau": "difficile",
   "nomDeFamille": [],
   "autresReponses": [
    "Adriano Leite Ribeiro",
    "L'Imperatore"
   ],
   "presentation": "« L'Empereur », attaquant brésilien au pied gauche dévastateur, star de l'Inter Milan.",
   "carriere": [
    {"club": "flamengo", "de": 2000, "a": 2001},
    {"club": "inter-milan", "de": 2001, "a": 2002},
    {"club": "parme", "de": 2002, "a": 2004},
    {"club": "inter-milan", "de": 2004, "a": 2009},
    {"club": "flamengo", "de": 2009, "a": 2010},
    {"club": "as-rome", "de": 2010, "a": 2011},
    {"club": "corinthians", "de": 2011, "a": 2012},
    {"club": "athletico-paranaense", "de": 2014, "a": 2014}
   ]
  },
  {
   "nom": "Deco",
   "niveau": "difficile",
   "nomDeFamille": [],
   "autresReponses": [
    "Anderson Luis de Souza"
   ],
   "presentation": "Meneur de jeu luso-brésilien, vainqueur de la Ligue des champions avec Porto puis Barcelone.",
   "carriere": [
    {"club": "corinthians", "de": 1996, "a": 1997},
    {"club": "salgueiros", "de": 1998, "a": 1999},
    {"club": "fc-porto", "de": 1999, "a": 2004},
    {"club": "barcelone", "de": 2004, "a": 2008},
    {"club": "chelsea", "de": 2008, "a": 2010},
    {"club": "fluminense", "de": 2010, "a": 2013}
   ]
  },
  {
   "nom": "Pepe",
   "niveau": "difficile",
   "nomDeFamille": [],
   "autresReponses": [
    "Kepler Pepe",
    "Kepler Laveran Lima Ferreira"
   ],
   "presentation": "Défenseur central luso-brésilien au caractère bouillant, champion d'Europe 2016 avec le Portugal.",
   "carriere": [
    {"club": "maritimo", "de": 2002, "a": 2004},
    {"club": "fc-porto", "de": 2004, "a": 2007},
    {"club": "real-madrid", "de": 2007, "a": 2017},
    {"club": "besiktas", "de": 2017, "a": 2018},
    {"club": "fc-porto", "de": 2019, "a": 2024}
   ]
  },
  {
   "nom": "Nani",
   "niveau": "difficile",
   "nomDeFamille": [],
   "autresReponses": [
    "Luis Nani"
   ],
   "presentation": "Ailier portugais spécialiste des saltos, champion d'Europe 2016.",
   "carriere": [
    {"club": "sporting-portugal", "de": 2005, "a": 2007},
    {"club": "manchester-united", "de": 2007, "a": 2015},
    {"club": "fenerbahce", "de": 2015, "a": 2016},
    {"club": "valence-cf", "de": 2016, "a": 2018},
    {"club": "sporting-portugal", "de": 2018, "a": 2019},
    {"club": "orlando-city", "de": 2019, "a": 2021},
    {"club": "venise", "de": 2022, "a": 2022},
    {"club": "melbourne-victory", "de": 2022, "a": 2023},
    {"club": "adana-demirspor", "de": 2023, "a": 2024},
    {"club": "estrela-da-amadora", "de": 2024, "a": 2024},
    {"club": "aktobe", "de": 2026, "a": 2026}
   ]
  },
  {
   "nom": "João Félix",
   "niveau": "difficile",
   "nomDeFamille": [
    "Félix"
   ],
   "autresReponses": [
    "Felix"
   ],
   "presentation": "Attaquant portugais révélé à Benfica, recruté pour une somme record par l'Atlético Madrid en 2019.",
   "carriere": [
    {"club": "benfica", "de": 2018, "a": 2019},
    {"club": "atletico-madrid", "de": 2019, "a": 2024},
    {"club": "chelsea", "de": 2024, "a": 2025},
    {"club": "al-nassr", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Bernardo Silva",
   "niveau": "difficile",
   "nomDeFamille": [
    "Silva"
   ],
   "autresReponses": [
    "Bernardo"
   ],
   "presentation": "Milieu portugais au pied gauche magique, multiple champion d'Angleterre avec Manchester City.",
   "carriere": [
    {"club": "benfica", "de": 2013, "a": 2014},
    {"club": "as-monaco", "de": 2014, "a": 2017},
    {"club": "manchester-city", "de": 2017, "a": 2026},
    {"club": "real-madrid", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Cesc Fàbregas",
   "niveau": "difficile",
   "nomDeFamille": [
    "Fàbregas"
   ],
   "autresReponses": [
    "Fabregas",
    "Cesc"
   ],
   "presentation": "Milieu espagnol formé à la Masia, passeur décisif en finale de la Coupe du monde 2010.",
   "carriere": [
    {"club": "arsenal", "de": 2003, "a": 2011},
    {"club": "barcelone", "de": 2011, "a": 2014},
    {"club": "chelsea", "de": 2014, "a": 2019},
    {"club": "as-monaco", "de": 2019, "a": 2022},
    {"club": "come", "de": 2022, "a": 2023}
   ]
  },
  {
   "nom": "Gerard Piqué",
   "niveau": "difficile",
   "nomDeFamille": [
    "Piqué"
   ],
   "autresReponses": [
    "Pique"
   ],
   "presentation": "Défenseur central espagnol du FC Barcelone, champion du monde 2010 et champion d'Europe 2012.",
   "carriere": [
    {"club": "manchester-united", "de": 2004, "a": 2008},
    {"club": "barcelone", "de": 2008, "a": 2022}
   ]
  },
  {
   "nom": "Carles Puyol",
   "niveau": "difficile",
   "nomDeFamille": [
    "Puyol"
   ],
   "autresReponses": [
    "Puyol"
   ],
   "presentation": "Capitaine à la crinière bouclée du FC Barcelone, buteur décisif en demi-finale du Mondial 2010.",
   "carriere": [
    {"club": "barcelone", "de": 1999, "a": 2014}
   ]
  },
  {
   "nom": "David Silva",
   "niveau": "difficile",
   "nomDeFamille": [
    "Silva"
   ],
   "autresReponses": [
    "El Mago"
   ],
   "presentation": "Milieu espagnol surnommé « El Mago », légende de Manchester City.",
   "carriere": [
    {"club": "valence-cf", "de": 2004, "a": 2010},
    {"club": "manchester-city", "de": 2010, "a": 2020},
    {"club": "real-sociedad", "de": 2020, "a": 2023}
   ]
  },
  {
   "nom": "Xabi Alonso",
   "niveau": "difficile",
   "nomDeFamille": [
    "Alonso"
   ],
   "autresReponses": [
    "Alonso"
   ],
   "presentation": "Milieu espagnol à la longue passe parfaite, champion du monde 2010 et vainqueur de la Ligue des champions avec Liverpool et le Real Madrid.",
   "carriere": [
    {"club": "real-sociedad", "de": 1999, "a": 2004},
    {"club": "liverpool", "de": 2004, "a": 2009},
    {"club": "real-madrid", "de": 2009, "a": 2014},
    {"club": "bayern-munich", "de": 2014, "a": 2017}
   ]
  },
  {
   "nom": "David Villa",
   "niveau": "difficile",
   "nomDeFamille": [
    "Villa"
   ],
   "autresReponses": [
    "Villa",
    "El Guaje"
   ],
   "presentation": "« El Guaje », meilleur buteur de l'histoire de la sélection espagnole, champion du monde 2010.",
   "carriere": [
    {"club": "sporting-gijon", "de": 2001, "a": 2003},
    {"club": "real-saragosse", "de": 2003, "a": 2005},
    {"club": "valence-cf", "de": 2005, "a": 2010},
    {"club": "barcelone", "de": 2010, "a": 2013},
    {"club": "atletico-madrid", "de": 2013, "a": 2014},
    {"club": "new-york-city-fc", "de": 2014, "a": 2018},
    {"club": "vissel-kobe", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Sergio Busquets",
   "niveau": "difficile",
   "nomDeFamille": [
    "Busquets"
   ],
   "autresReponses": [
    "Busquets",
    "Busi"
   ],
   "presentation": "Milieu défensif espagnol, pilier du FC Barcelone et de la Roja championne du monde 2010.",
   "carriere": [
    {"club": "barcelone", "de": 2008, "a": 2023},
    {"club": "inter-miami", "de": 2023, "a": 2025}
   ]
  },
  {
   "nom": "Juan Mata",
   "niveau": "difficile",
   "nomDeFamille": [
    "Mata"
   ],
   "autresReponses": [
    "Mata"
   ],
   "presentation": "Milieu offensif espagnol, vainqueur de la Ligue des champions 2012 avec Chelsea.",
   "carriere": [
    {"club": "valence-cf", "de": 2007, "a": 2011},
    {"club": "chelsea", "de": 2011, "a": 2014},
    {"club": "manchester-united", "de": 2014, "a": 2022},
    {"club": "galatasaray", "de": 2022, "a": 2023},
    {"club": "vissel-kobe", "de": 2023, "a": 2024},
    {"club": "western-sydney-wanderers", "de": 2024, "a": 2025},
    {"club": "melbourne-victory", "de": 2025, "a": 2026}
   ]
  },
  {
   "nom": "Diego Costa",
   "niveau": "difficile",
   "nomDeFamille": [
    "Costa"
   ],
   "autresReponses": [
    "Costa"
   ],
   "presentation": "Attaquant hispano-brésilien rugueux, champion d'Espagne avec l'Atlético et champion d'Angleterre avec Chelsea.",
   "carriere": [
    {"club": "real-valladolid", "de": 2009, "a": 2010},
    {"club": "atletico-madrid", "de": 2010, "a": 2014},
    {"club": "chelsea", "de": 2014, "a": 2017},
    {"club": "atletico-madrid", "de": 2017, "a": 2020},
    {"club": "atletico-mineiro", "de": 2021, "a": 2022},
    {"club": "wolverhampton", "de": 2022, "a": 2023},
    {"club": "botafogo", "de": 2023, "a": 2023},
    {"club": "gremio", "de": 2024, "a": 2024}
   ]
  },
  {
   "nom": "Álvaro Morata",
   "niveau": "difficile",
   "nomDeFamille": [
    "Morata"
   ],
   "autresReponses": [
    "Morata"
   ],
   "presentation": "Attaquant espagnol, capitaine de la Roja championne d'Europe 2024.",
   "carriere": [
    {"club": "real-madrid", "de": 2010, "a": 2014},
    {"club": "juventus", "de": 2014, "a": 2016},
    {"club": "real-madrid", "de": 2016, "a": 2017},
    {"club": "chelsea", "de": 2017, "a": 2019},
    {"club": "atletico-madrid", "de": 2019, "a": 2024},
    {"club": "ac-milan", "de": 2024, "a": 2025},
    {"club": "come", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Gianluigi Donnarumma",
   "niveau": "difficile",
   "nomDeFamille": [
    "Donnarumma"
   ],
   "autresReponses": [
    "Donnarumma",
    "Gigio",
    "Gigio Donnarumma"
   ],
   "presentation": "Gardien italien, meilleur joueur de l'Euro 2020 remporté par l'Italie.",
   "carriere": [
    {"club": "ac-milan", "de": 2015, "a": 2021},
    {"club": "paris-sg", "de": 2021, "a": 2025},
    {"club": "manchester-city", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Giorgio Chiellini",
   "niveau": "difficile",
   "nomDeFamille": [
    "Chiellini"
   ],
   "autresReponses": [
    "Chiellini"
   ],
   "presentation": "Défenseur italien rugueux, capitaine de l'Italie championne d'Europe 2021.",
   "carriere": [
    {"club": "livourne", "de": 2000, "a": 2004},
    {"club": "juventus", "de": 2004, "a": 2022},
    {"club": "los-angeles-fc", "de": 2022, "a": 2023}
   ]
  },
  {
   "nom": "Leonardo Bonucci",
   "niveau": "difficile",
   "nomDeFamille": [
    "Bonucci"
   ],
   "autresReponses": [
    "Bonucci"
   ],
   "presentation": "Défenseur italien, buteur en finale de l'Euro 2020 remporté face à l'Angleterre.",
   "carriere": [
    {"club": "inter-milan", "de": 2005, "a": 2009},
    {"club": "bari", "de": 2009, "a": 2010},
    {"club": "juventus", "de": 2010, "a": 2017},
    {"club": "ac-milan", "de": 2017, "a": 2018},
    {"club": "juventus", "de": 2018, "a": 2023},
    {"club": "union-berlin", "de": 2023, "a": 2024},
    {"club": "fenerbahce", "de": 2024, "a": 2024}
   ]
  },
  {
   "nom": "Alessandro Nesta",
   "niveau": "difficile",
   "nomDeFamille": [
    "Nesta"
   ],
   "autresReponses": [
    "Nesta"
   ],
   "presentation": "Défenseur central italien élégant, champion du monde 2006 et double vainqueur de la Ligue des champions avec l'AC Milan.",
   "carriere": [
    {"club": "lazio-rome", "de": 1993, "a": 2002},
    {"club": "ac-milan", "de": 2002, "a": 2012},
    {"club": "impact-de-montreal", "de": 2012, "a": 2014},
    {"club": "chennaiyin", "de": 2014, "a": 2014}
   ]
  },
  {
   "nom": "Fabio Cannavaro",
   "niveau": "difficile",
   "nomDeFamille": [
    "Cannavaro"
   ],
   "autresReponses": [
    "Cannavaro"
   ],
   "presentation": "Défenseur et capitaine de l'Italie championne du monde 2006, Ballon d'or la même année.",
   "carriere": [
    {"club": "naples", "de": 1991, "a": 1995},
    {"club": "parme", "de": 1995, "a": 2002},
    {"club": "inter-milan", "de": 2002, "a": 2004},
    {"club": "juventus", "de": 2004, "a": 2006},
    {"club": "real-madrid", "de": 2006, "a": 2009},
    {"club": "juventus", "de": 2009, "a": 2010},
    {"club": "al-ahli-dubai", "de": 2010, "a": 2011}
   ]
  },
  {
   "nom": "Gennaro Gattuso",
   "niveau": "difficile",
   "nomDeFamille": [
    "Gattuso"
   ],
   "autresReponses": [
    "Gattuso",
    "Rino Gattuso",
    "Ringhio"
   ],
   "presentation": "Milieu italien combatif surnommé « Ringhio », champion du monde 2006.",
   "carriere": [
    {"club": "perouse", "de": 1995, "a": 1997},
    {"club": "rangers", "de": 1997, "a": 1998},
    {"club": "salernitana", "de": 1998, "a": 1999},
    {"club": "ac-milan", "de": 1999, "a": 2012},
    {"club": "fc-sion", "de": 2012, "a": 2013}
   ]
  },
  {
   "nom": "Filippo Inzaghi",
   "niveau": "difficile",
   "nomDeFamille": [
    "Inzaghi"
   ],
   "autresReponses": [
    "Inzaghi",
    "Pippo Inzaghi",
    "Super Pippo"
   ],
   "presentation": "« Superpippo », renard des surfaces italien, auteur d'un doublé en finale de Ligue des champions 2007.",
   "carriere": [
    {"club": "plaisance", "de": 1991, "a": 1995},
    {"club": "parme", "de": 1995, "a": 1996},
    {"club": "atalanta", "de": 1996, "a": 1997},
    {"club": "juventus", "de": 1997, "a": 2001},
    {"club": "ac-milan", "de": 2001, "a": 2012}
   ]
  },
  {
   "nom": "Christian Vieri",
   "niveau": "difficile",
   "nomDeFamille": [
    "Vieri"
   ],
   "autresReponses": [
    "Vieri",
    "Bobo Vieri",
    "Bobo"
   ],
   "presentation": "Avant-centre italien puissant, auteur d'un transfert record vers l'Inter Milan en 1999.",
   "carriere": [
    {"club": "torino", "de": 1991, "a": 1992},
    {"club": "pise", "de": 1992, "a": 1993},
    {"club": "ravenne", "de": 1993, "a": 1994},
    {"club": "venise", "de": 1994, "a": 1995},
    {"club": "atalanta", "de": 1995, "a": 1996},
    {"club": "juventus", "de": 1996, "a": 1997},
    {"club": "atletico-madrid", "de": 1997, "a": 1998},
    {"club": "lazio-rome", "de": 1998, "a": 1999},
    {"club": "inter-milan", "de": 1999, "a": 2005},
    {"club": "ac-milan", "de": 2005, "a": 2006},
    {"club": "as-monaco", "de": 2006, "a": 2006},
    {"club": "atalanta", "de": 2006, "a": 2007},
    {"club": "fiorentina", "de": 2007, "a": 2008},
    {"club": "atalanta", "de": 2008, "a": 2009}
   ]
  },
  {
   "nom": "Mario Balotelli",
   "niveau": "difficile",
   "nomDeFamille": [
    "Balotelli"
   ],
   "autresReponses": [
    "Balotelli",
    "Super Mario"
   ],
   "presentation": "« Super Mario », attaquant italien imprévisible, célèbre pour son « Why always me? ».",
   "carriere": [
    {"club": "lumezzane", "de": 2006, "a": 2006},
    {"club": "inter-milan", "de": 2007, "a": 2010},
    {"club": "manchester-city", "de": 2010, "a": 2013},
    {"club": "ac-milan", "de": 2013, "a": 2014},
    {"club": "liverpool", "de": 2014, "a": 2016},
    {"club": "ogc-nice", "de": 2016, "a": 2019},
    {"club": "olympique-de-marseille", "de": 2019, "a": 2019},
    {"club": "brescia", "de": 2019, "a": 2020},
    {"club": "monza", "de": 2020, "a": 2021},
    {"club": "adana-demirspor", "de": 2021, "a": 2022},
    {"club": "fc-sion", "de": 2022, "a": 2023},
    {"club": "adana-demirspor", "de": 2023, "a": 2024},
    {"club": "genoa", "de": 2024, "a": 2025},
    {"club": "al-ittifaq-emirats", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Bastian Schweinsteiger",
   "niveau": "difficile",
   "nomDeFamille": [
    "Schweinsteiger"
   ],
   "autresReponses": [
    "Schweinsteiger",
    "Schweini"
   ],
   "presentation": "Milieu allemand champion du monde 2014, légende du Bayern Munich.",
   "carriere": [
    {"club": "bayern-munich", "de": 2002, "a": 2015},
    {"club": "manchester-united", "de": 2015, "a": 2017},
    {"club": "chicago-fire", "de": 2017, "a": 2019}
   ]
  },
  {
   "nom": "Michael Ballack",
   "niveau": "difficile",
   "nomDeFamille": [
    "Ballack"
   ],
   "autresReponses": [
    "Ballack"
   ],
   "presentation": "Milieu allemand puissant, capitaine de la Mannschaft dans les années 2000.",
   "carriere": [
    {"club": "chemnitz-fc", "de": 1995, "a": 1997},
    {"club": "kaiserslautern", "de": 1997, "a": 1999},
    {"club": "bayer-leverkusen", "de": 1999, "a": 2002},
    {"club": "bayern-munich", "de": 2002, "a": 2006},
    {"club": "chelsea", "de": 2006, "a": 2010},
    {"club": "bayer-leverkusen", "de": 2010, "a": 2012}
   ]
  },
  {
   "nom": "Miroslav Klose",
   "niveau": "difficile",
   "nomDeFamille": [
    "Klose"
   ],
   "autresReponses": [
    "Klose"
   ],
   "presentation": "Attaquant allemand, meilleur buteur de l'histoire de la Coupe du monde avec 16 buts.",
   "carriere": [
    {"club": "fc-hombourg", "de": 1998, "a": 1999},
    {"club": "kaiserslautern", "de": 1999, "a": 2004},
    {"club": "werder-breme", "de": 2004, "a": 2007},
    {"club": "bayern-munich", "de": 2007, "a": 2011},
    {"club": "lazio-rome", "de": 2011, "a": 2016}
   ]
  },
  {
   "nom": "Lukas Podolski",
   "niveau": "difficile",
   "nomDeFamille": [
    "Podolski"
   ],
   "autresReponses": [
    "Podolski",
    "Poldi"
   ],
   "presentation": "Attaquant allemand au pied gauche surpuissant, champion du monde 2014.",
   "carriere": [
    {"club": "fc-cologne", "de": 2003, "a": 2006},
    {"club": "bayern-munich", "de": 2006, "a": 2009},
    {"club": "fc-cologne", "de": 2009, "a": 2012},
    {"club": "arsenal", "de": 2012, "a": 2015},
    {"club": "galatasaray", "de": 2015, "a": 2017},
    {"club": "vissel-kobe", "de": 2017, "a": 2020},
    {"club": "antalyaspor", "de": 2020, "a": 2021},
    {"club": "gornik-zabrze", "de": 2021, "a": 2026}
   ]
  },
  {
   "nom": "İlkay Gündoğan",
   "niveau": "difficile",
   "nomDeFamille": [
    "Gündoğan"
   ],
   "autresReponses": [
    "Gundogan"
   ],
   "presentation": "Milieu allemand, capitaine de Manchester City lors du triplé de 2023.",
   "carriere": [
    {"club": "fc-nuremberg", "de": 2009, "a": 2011},
    {"club": "borussia-dortmund", "de": 2011, "a": 2016},
    {"club": "manchester-city", "de": 2016, "a": 2023},
    {"club": "barcelone", "de": 2023, "a": 2024},
    {"club": "manchester-city", "de": 2024, "a": 2025},
    {"club": "galatasaray", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Mario Götze",
   "niveau": "difficile",
   "nomDeFamille": [
    "Götze"
   ],
   "autresReponses": [
    "Gotze",
    "Goetze"
   ],
   "presentation": "Milieu allemand, auteur du but de la victoire en finale de la Coupe du monde 2014.",
   "carriere": [
    {"club": "borussia-dortmund", "de": 2009, "a": 2013},
    {"club": "bayern-munich", "de": 2013, "a": 2016},
    {"club": "borussia-dortmund", "de": 2016, "a": 2020},
    {"club": "psv-eindhoven", "de": 2020, "a": 2022},
    {"club": "eintracht-francfort", "de": 2022, "a": null}
   ]
  },
  {
   "nom": "Marco Reus",
   "niveau": "difficile",
   "nomDeFamille": [
    "Reus"
   ],
   "autresReponses": [
    "Reus"
   ],
   "presentation": "Ailier allemand fidèle au Borussia Dortmund, souvent freiné par les blessures.",
   "carriere": [
    {"club": "rot-weiss-ahlen", "de": 2007, "a": 2009},
    {"club": "borussia-monchengladbach", "de": 2009, "a": 2012},
    {"club": "borussia-dortmund", "de": 2012, "a": 2024},
    {"club": "los-angeles-galaxy", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Wesley Sneijder",
   "niveau": "difficile",
   "nomDeFamille": [
    "Sneijder"
   ],
   "autresReponses": [
    "Sneijder"
   ],
   "presentation": "Meneur de jeu néerlandais, artisan du triplé de l'Inter Milan en 2010.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 2002, "a": 2007},
    {"club": "real-madrid", "de": 2007, "a": 2009},
    {"club": "inter-milan", "de": 2009, "a": 2013},
    {"club": "galatasaray", "de": 2013, "a": 2017},
    {"club": "ogc-nice", "de": 2017, "a": 2018},
    {"club": "al-gharafa", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Clarence Seedorf",
   "niveau": "difficile",
   "nomDeFamille": [
    "Seedorf"
   ],
   "autresReponses": [
    "Seedorf"
   ],
   "presentation": "Milieu néerlandais, seul joueur à avoir remporté la Ligue des champions avec trois clubs différents.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 1992, "a": 1995},
    {"club": "sampdoria", "de": 1995, "a": 1996},
    {"club": "real-madrid", "de": 1996, "a": 2000},
    {"club": "inter-milan", "de": 2000, "a": 2002},
    {"club": "ac-milan", "de": 2002, "a": 2012},
    {"club": "botafogo", "de": 2012, "a": 2014}
   ]
  },
  {
   "nom": "Edgar Davids",
   "niveau": "difficile",
   "nomDeFamille": [
    "Davids"
   ],
   "autresReponses": [
    "Davids",
    "Le Pitbull"
   ],
   "presentation": "« Le Pitbull », milieu néerlandais reconnaissable à ses lunettes de protection.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 1991, "a": 1996},
    {"club": "ac-milan", "de": 1996, "a": 1997},
    {"club": "juventus", "de": 1997, "a": 2004},
    {"club": "inter-milan", "de": 2004, "a": 2005},
    {"club": "tottenham", "de": 2005, "a": 2007},
    {"club": "ajax-amsterdam", "de": 2007, "a": 2009},
    {"club": "crystal-palace", "de": 2010, "a": 2010},
    {"club": "barnet", "de": 2012, "a": 2014}
   ]
  },
  {
   "nom": "Patrick Kluivert",
   "niveau": "difficile",
   "nomDeFamille": [
    "Kluivert"
   ],
   "autresReponses": [
    "Kluivert"
   ],
   "presentation": "Attaquant néerlandais, buteur en finale de la Ligue des champions 1995 à seulement 18 ans.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 1994, "a": 1997},
    {"club": "ac-milan", "de": 1997, "a": 1998},
    {"club": "barcelone", "de": 1998, "a": 2004},
    {"club": "newcastle-united", "de": 2004, "a": 2005},
    {"club": "valence-cf", "de": 2005, "a": 2006},
    {"club": "psv-eindhoven", "de": 2006, "a": 2007},
    {"club": "lille-osc", "de": 2007, "a": 2008}
   ]
  },
  {
   "nom": "Dennis Bergkamp",
   "niveau": "difficile",
   "nomDeFamille": [
    "Bergkamp"
   ],
   "autresReponses": [
    "Bergkamp",
    "The Iceman"
   ],
   "presentation": "Attaquant néerlandais au toucher divin, légende d'Arsenal malgré sa peur de l'avion.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 1986, "a": 1993},
    {"club": "inter-milan", "de": 1993, "a": 1995},
    {"club": "arsenal", "de": 1995, "a": 2006}
   ]
  },
  {
   "nom": "Nemanja Vidić",
   "niveau": "difficile",
   "nomDeFamille": [
    "Vidić"
   ],
   "autresReponses": [
    "Vidic"
   ],
   "presentation": "Défenseur serbe intraitable, capitaine de Manchester United.",
   "carriere": [
    {"club": "etoile-rouge-de-belgrade", "de": 2000, "a": 2004},
    {"club": "spartak-moscou", "de": 2004, "a": 2006},
    {"club": "manchester-united", "de": 2006, "a": 2014},
    {"club": "inter-milan", "de": 2014, "a": 2016}
   ]
  },
  {
   "nom": "Dimitar Berbatov",
   "niveau": "difficile",
   "nomDeFamille": [
    "Berbatov"
   ],
   "autresReponses": [
    "Berbatov",
    "Berba"
   ],
   "presentation": "Attaquant bulgare à l'élégance nonchalante, meilleur buteur de Premier League 2010-2011.",
   "carriere": [
    {"club": "cska-sofia", "de": 1998, "a": 2001},
    {"club": "bayer-leverkusen", "de": 2001, "a": 2006},
    {"club": "tottenham", "de": 2006, "a": 2008},
    {"club": "manchester-united", "de": 2008, "a": 2012},
    {"club": "fulham", "de": 2012, "a": 2014},
    {"club": "as-monaco", "de": 2014, "a": 2015},
    {"club": "paok-salonique", "de": 2015, "a": 2016},
    {"club": "kerala-blasters", "de": 2017, "a": 2018}
   ]
  },
  {
   "nom": "Ivan Rakitić",
   "niveau": "difficile",
   "nomDeFamille": [
    "Rakitić"
   ],
   "autresReponses": [
    "Rakitic"
   ],
   "presentation": "Milieu croate, vainqueur de la Ligue des champions 2015 et finaliste de la Coupe du monde 2018.",
   "carriere": [
    {"club": "fc-bale", "de": 2005, "a": 2007},
    {"club": "schalke-04", "de": 2007, "a": 2011},
    {"club": "fc-seville", "de": 2011, "a": 2014},
    {"club": "barcelone", "de": 2014, "a": 2020},
    {"club": "fc-seville", "de": 2020, "a": 2024},
    {"club": "al-shabab", "de": 2024, "a": 2024},
    {"club": "hajduk-split", "de": 2024, "a": 2025}
   ]
  },
  {
   "nom": "Mario Mandžukić",
   "niveau": "difficile",
   "nomDeFamille": [
    "Mandžukić"
   ],
   "autresReponses": [
    "Mandzukic",
    "Mandzo"
   ],
   "presentation": "Attaquant croate, buteur en finale de Ligue des champions et de Coupe du monde.",
   "carriere": [
    {"club": "marsonia", "de": 2004, "a": 2005},
    {"club": "nk-zagreb", "de": 2005, "a": 2007},
    {"club": "dinamo-zagreb", "de": 2007, "a": 2010},
    {"club": "vfl-wolfsburg", "de": 2010, "a": 2012},
    {"club": "bayern-munich", "de": 2012, "a": 2014},
    {"club": "atletico-madrid", "de": 2014, "a": 2015},
    {"club": "juventus", "de": 2015, "a": 2019},
    {"club": "al-duhail", "de": 2019, "a": 2020},
    {"club": "ac-milan", "de": 2021, "a": 2021}
   ]
  },
  {
   "nom": "Edin Džeko",
   "niveau": "difficile",
   "nomDeFamille": [
    "Džeko"
   ],
   "autresReponses": [
    "Dzeko"
   ],
   "presentation": "Attaquant bosnien, meilleur buteur de l'histoire de sa sélection.",
   "carriere": [
    {"club": "zeljeznicar-sarajevo", "de": 2003, "a": 2005},
    {"club": "teplice", "de": 2005, "a": 2007},
    {"club": "vfl-wolfsburg", "de": 2007, "a": 2011},
    {"club": "manchester-city", "de": 2011, "a": 2015},
    {"club": "as-rome", "de": 2015, "a": 2021},
    {"club": "inter-milan", "de": 2021, "a": 2023},
    {"club": "fenerbahce", "de": 2023, "a": 2025},
    {"club": "fiorentina", "de": 2025, "a": 2026},
    {"club": "schalke-04", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Christian Eriksen",
   "niveau": "difficile",
   "nomDeFamille": [
    "Eriksen"
   ],
   "autresReponses": [
    "Eriksen"
   ],
   "presentation": "Meneur de jeu danois, revenu au plus haut niveau après son arrêt cardiaque lors de l'Euro 2020.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 2010, "a": 2013},
    {"club": "tottenham", "de": 2013, "a": 2020},
    {"club": "inter-milan", "de": 2020, "a": 2021},
    {"club": "brentford", "de": 2022, "a": 2022},
    {"club": "manchester-united", "de": 2022, "a": 2025},
    {"club": "vfl-wolfsburg", "de": 2025, "a": 2026}
   ]
  },
  {
   "nom": "Peter Schmeichel",
   "niveau": "difficile",
   "nomDeFamille": [
    "Schmeichel"
   ],
   "autresReponses": [
    "Schmeichel",
    "Le Grand Danois"
   ],
   "presentation": "Gardien danois de légende, champion d'Europe 1992 et vainqueur du triplé 1999 avec Manchester United.",
   "carriere": [
    {"club": "gladsaxe-hero", "de": 1981, "a": 1984},
    {"club": "hvidovre", "de": 1984, "a": 1987},
    {"club": "br-ndby", "de": 1987, "a": 1991},
    {"club": "manchester-united", "de": 1991, "a": 1999},
    {"club": "sporting-portugal", "de": 1999, "a": 2001},
    {"club": "aston-villa", "de": 2001, "a": 2002},
    {"club": "manchester-city", "de": 2002, "a": 2003}
   ]
  },
  {
   "nom": "Michael Laudrup",
   "niveau": "difficile",
   "nomDeFamille": [
    "Laudrup"
   ],
   "autresReponses": [
    "Laudrup"
   ],
   "presentation": "Meneur de jeu danois élégant, l'un des rares à avoir brillé au FC Barcelone puis au Real Madrid.",
   "carriere": [
    {"club": "kb-copenhague", "de": 1981, "a": 1981},
    {"club": "br-ndby", "de": 1982, "a": 1983},
    {"club": "lazio-rome", "de": 1983, "a": 1985},
    {"club": "juventus", "de": 1985, "a": 1989},
    {"club": "barcelone", "de": 1989, "a": 1994},
    {"club": "real-madrid", "de": 1994, "a": 1996},
    {"club": "vissel-kobe", "de": 1996, "a": 1997},
    {"club": "ajax-amsterdam", "de": 1997, "a": 1998}
   ]
  },
  {
   "nom": "Hristo Stoichkov",
   "niveau": "difficile",
   "nomDeFamille": [
    "Stoichkov"
   ],
   "autresReponses": [
    "Stoichkov",
    "Stoitchkov",
    "Hristo Stoitchkov"
   ],
   "presentation": "Attaquant bulgare au caractère explosif, Ballon d'or 1994.",
   "carriere": [
    {"club": "hebros-harmanli", "de": 1982, "a": 1983},
    {"club": "cska-sofia", "de": 1984, "a": 1990},
    {"club": "barcelone", "de": 1990, "a": 1995},
    {"club": "parme", "de": 1995, "a": 1996},
    {"club": "barcelone", "de": 1996, "a": 1998},
    {"club": "al-nassr", "de": 1998, "a": 1998},
    {"club": "kashiwa-reysol", "de": 1998, "a": 1999},
    {"club": "chicago-fire", "de": 2000, "a": 2002},
    {"club": "d-c-united", "de": 2003, "a": 2003}
   ]
  },
  {
   "nom": "Gheorghe Hagi",
   "niveau": "difficile",
   "nomDeFamille": [
    "Hagi"
   ],
   "autresReponses": [
    "Hagi",
    "Le Maradona des Carpates"
   ],
   "presentation": "« Le Maradona des Carpates », meneur de jeu roumain, légende de Galatasaray.",
   "carriere": [
    {"club": "farul-constanta", "de": 1982, "a": 1983},
    {"club": "sportul-studentesc", "de": 1983, "a": 1986},
    {"club": "steaua-bucarest", "de": 1986, "a": 1990},
    {"club": "real-madrid", "de": 1990, "a": 1992},
    {"club": "brescia", "de": 1992, "a": 1994},
    {"club": "barcelone", "de": 1994, "a": 1996},
    {"club": "galatasaray", "de": 1996, "a": 2001}
   ]
  },
  {
   "nom": "Jay-Jay Okocha",
   "niveau": "difficile",
   "nomDeFamille": [
    "Okocha"
   ],
   "autresReponses": [
    "Okocha",
    "Augustine Okocha"
   ],
   "presentation": "Dribbleur nigérian virtuose, idole du PSG et de Bolton.",
   "carriere": [
    {"club": "borussia-neunkirchen", "de": 1990, "a": 1992},
    {"club": "eintracht-francfort", "de": 1992, "a": 1996},
    {"club": "fenerbahce", "de": 1996, "a": 1998},
    {"club": "paris-sg", "de": 1998, "a": 2002},
    {"club": "bolton-wanderers", "de": 2002, "a": 2006},
    {"club": "qatar-sc", "de": 2006, "a": 2007},
    {"club": "hull-city", "de": 2007, "a": 2008}
   ]
  },
  {
   "nom": "Roger Milla",
   "niveau": "difficile",
   "nomDeFamille": [
    "Milla"
   ],
   "autresReponses": [
    "Milla"
   ],
   "presentation": "Attaquant camerounais, célèbre pour ses danses de célébration lors de la Coupe du monde 1990.",
   "carriere": [
    {"club": "eclair-de-douala", "de": 1967, "a": 1970},
    {"club": "leopards-douala", "de": 1970, "a": 1974},
    {"club": "tonnerre-yaounde", "de": 1974, "a": 1977},
    {"club": "valenciennes-fc", "de": 1977, "a": 1979},
    {"club": "as-monaco", "de": 1979, "a": 1980},
    {"club": "sc-bastia", "de": 1980, "a": 1984},
    {"club": "as-saint-etienne", "de": 1984, "a": 1986},
    {"club": "montpellier-hsc", "de": 1986, "a": 1989},
    {"club": "js-saint-pierroise-la-reunion", "de": 1989, "a": 1990},
    {"club": "tonnerre-yaounde", "de": 1990, "a": 1994},
    {"club": "pelita-jaya", "de": 1994, "a": 1995},
    {"club": "putra-samarinda", "de": 1995, "a": 1996}
   ]
  },
  {
   "nom": "Hakim Ziyech",
   "niveau": "difficile",
   "nomDeFamille": [
    "Ziyech"
   ],
   "autresReponses": [
    "Ziyech"
   ],
   "presentation": "Ailier gaucher marocain, demi-finaliste de la Coupe du monde 2022 avec le Maroc.",
   "carriere": [
    {"club": "heerenveen", "de": 2012, "a": 2014},
    {"club": "twente", "de": 2014, "a": 2016},
    {"club": "ajax-amsterdam", "de": 2016, "a": 2020},
    {"club": "chelsea", "de": 2020, "a": 2023},
    {"club": "galatasaray", "de": 2023, "a": 2025},
    {"club": "al-duhail", "de": 2025, "a": 2025},
    {"club": "wydad-casablanca", "de": 2025, "a": 2026},
    {"club": "botafogo", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Jordan Henderson",
   "niveau": "difficile",
   "nomDeFamille": [
    "Henderson"
   ],
   "autresReponses": [
    "Henderson",
    "Hendo"
   ],
   "presentation": "Milieu anglais, capitaine de Liverpool vainqueur de la Ligue des champions 2019 et de la Premier League 2020.",
   "carriere": [
    {"club": "sunderland", "de": 2008, "a": 2011},
    {"club": "liverpool", "de": 2011, "a": 2023},
    {"club": "al-ettifaq", "de": 2023, "a": 2024},
    {"club": "ajax-amsterdam", "de": 2024, "a": 2025},
    {"club": "brentford", "de": 2025, "a": 2026},
    {"club": "chelsea", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Raheem Sterling",
   "niveau": "difficile",
   "nomDeFamille": [
    "Sterling"
   ],
   "autresReponses": [
    "Sterling"
   ],
   "presentation": "Ailier anglais, multiple champion d'Angleterre avec Manchester City.",
   "carriere": [
    {"club": "liverpool", "de": 2012, "a": 2015},
    {"club": "manchester-city", "de": 2015, "a": 2022},
    {"club": "chelsea", "de": 2022, "a": 2026},
    {"club": "feyenoord", "de": 2026, "a": 2026}
   ]
  },
  {
   "nom": "Trent Alexander-Arnold",
   "niveau": "difficile",
   "nomDeFamille": [
    "Alexander-Arnold"
   ],
   "autresReponses": [
    "Alexander Arnold",
    "Trent",
    "TAA"
   ],
   "presentation": "Latéral droit anglais formé à Liverpool, réputé pour la qualité de ses centres et passes.",
   "carriere": [
    {"club": "liverpool", "de": 2016, "a": 2025},
    {"club": "real-madrid", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Jack Grealish",
   "niveau": "difficile",
   "nomDeFamille": [
    "Grealish"
   ],
   "autresReponses": [
    "Grealish"
   ],
   "presentation": "Milieu offensif anglais, capitaine d'Aston Villa puis vainqueur du triplé avec Manchester City en 2023.",
   "carriere": [
    {"club": "aston-villa", "de": 2013, "a": 2021},
    {"club": "manchester-city", "de": 2021, "a": null}
   ]
  },
  {
   "nom": "Jadon Sancho",
   "niveau": "difficile",
   "nomDeFamille": [
    "Sancho"
   ],
   "autresReponses": [
    "Sancho"
   ],
   "presentation": "Ailier anglais formé à Manchester City, révélé au Borussia Dortmund.",
   "carriere": [
    {"club": "borussia-dortmund", "de": 2017, "a": 2021},
    {"club": "manchester-united", "de": 2021, "a": 2026}
   ]
  },
  {
   "nom": "Anthony Martial",
   "niveau": "expert",
   "nomDeFamille": [
    "Martial"
   ],
   "autresReponses": [
    "Martial",
    "Tony Martial"
   ],
   "presentation": "Attaquant français, devenu en 2015 l'adolescent le plus cher de l'histoire lors de son transfert à Manchester United.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 2013, "a": 2013},
    {"club": "as-monaco", "de": 2013, "a": 2015},
    {"club": "manchester-united", "de": 2015, "a": 2024},
    {"club": "aek-athenes", "de": 2024, "a": 2025},
    {"club": "monterrey", "de": 2025, "a": 2026}
   ]
  },
  {
   "nom": "Nabil Fekir",
   "niveau": "expert",
   "nomDeFamille": [
    "Fekir"
   ],
   "autresReponses": [
    "Fekir"
   ],
   "presentation": "Meneur de jeu gaucher, capitaine de l'Olympique lyonnais et champion du monde 2018.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 2013, "a": 2019},
    {"club": "betis-seville", "de": 2019, "a": 2024},
    {"club": "al-jazira", "de": 2024, "a": 2026},
    {"club": "abha-club", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Thomas Lemar",
   "niveau": "expert",
   "nomDeFamille": [
    "Lemar"
   ],
   "autresReponses": [
    "Lemar"
   ],
   "presentation": "Ailier gaucher guadeloupéen, champion de France avec Monaco en 2017 et champion du monde 2018.",
   "carriere": [
    {"club": "stade-malherbe-caen", "de": 2013, "a": 2015},
    {"club": "as-monaco", "de": 2015, "a": 2018},
    {"club": "atletico-madrid", "de": 2018, "a": null}
   ]
  },
  {
   "nom": "Moussa Sissoko",
   "niveau": "expert",
   "nomDeFamille": [
    "Sissoko"
   ],
   "autresReponses": [
    "Sissoko"
   ],
   "presentation": "Milieu français puissant, finaliste de l'Euro 2016 et de la Ligue des champions 2019.",
   "carriere": [
    {"club": "toulouse-fc", "de": 2007, "a": 2013},
    {"club": "newcastle-united", "de": 2013, "a": 2016},
    {"club": "tottenham", "de": 2016, "a": 2021},
    {"club": "watford", "de": 2021, "a": 2022},
    {"club": "fc-nantes", "de": 2022, "a": 2024},
    {"club": "watford", "de": 2024, "a": 2026},
    {"club": "panathinaikos", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Benjamin Pavard",
   "niveau": "expert",
   "nomDeFamille": [
    "Pavard"
   ],
   "autresReponses": [
    "Pavard"
   ],
   "presentation": "Défenseur français champion du monde 2018, auteur d'une reprise de volée mémorable contre l'Argentine.",
   "carriere": [
    {"club": "lille-osc", "de": 2015, "a": 2016},
    {"club": "vfb-stuttgart", "de": 2016, "a": 2019},
    {"club": "bayern-munich", "de": 2019, "a": 2023},
    {"club": "inter-milan", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Jules Koundé",
   "niveau": "expert",
   "nomDeFamille": [
    "Koundé"
   ],
   "autresReponses": [
    "Kounde"
   ],
   "presentation": "Défenseur français polyvalent, vainqueur de la Ligue Europa avec Séville.",
   "carriere": [
    {"club": "girondins-de-bordeaux", "de": 2017, "a": 2019},
    {"club": "fc-seville", "de": 2019, "a": 2022},
    {"club": "barcelone", "de": 2022, "a": null}
   ]
  },
  {
   "nom": "Marcus Thuram",
   "niveau": "expert",
   "nomDeFamille": [
    "Thuram"
   ],
   "autresReponses": [],
   "presentation": "Attaquant français, fils de Lilian Thuram, champion d'Italie avec l'Inter Milan.",
   "carriere": [
    {"club": "fc-sochaux", "de": 2015, "a": 2017},
    {"club": "en-avant-guingamp", "de": 2017, "a": 2019},
    {"club": "borussia-monchengladbach", "de": 2019, "a": 2023},
    {"club": "inter-milan", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Randal Kolo Muani",
   "niveau": "expert",
   "nomDeFamille": [
    "Kolo Muani",
    "Muani"
   ],
   "autresReponses": [
    "Kolo Muani",
    "RKM"
   ],
   "presentation": "Attaquant français révélé au FC Nantes, finaliste de la Coupe du monde 2022.",
   "carriere": [
    {"club": "fc-nantes", "de": 2018, "a": 2022},
    {"club": "eintracht-francfort", "de": 2022, "a": 2023},
    {"club": "paris-sg", "de": 2023, "a": 2026},
    {"club": "juventus", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Wissam Ben Yedder",
   "niveau": "expert",
   "nomDeFamille": [
    "Ben Yedder",
    "Yedder"
   ],
   "autresReponses": [
    "Ben Yedder",
    "WBY"
   ],
   "presentation": "Attaquant français à la finition clinique, ancien joueur de futsal.",
   "carriere": [
    {"club": "uja-alfortville", "de": 2009, "a": 2010},
    {"club": "toulouse-fc", "de": 2010, "a": 2016},
    {"club": "fc-seville", "de": 2016, "a": 2019},
    {"club": "as-monaco", "de": 2019, "a": 2024},
    {"club": "sepahan-ispahan", "de": 2025, "a": 2025},
    {"club": "sakaryaspor", "de": 2025, "a": 2026},
    {"club": "wydad-casablanca", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Nicolas Pépé",
   "niveau": "expert",
   "nomDeFamille": [
    "Pépé"
   ],
   "autresReponses": [],
   "presentation": "Ailier ivoirien révélé à Lille, transféré à Arsenal pour un montant record pour le club.",
   "carriere": [
    {"club": "stade-poitevin", "de": 2012, "a": 2013},
    {"club": "angers", "de": 2013, "a": 2017},
    {"club": "lille-osc", "de": 2017, "a": 2019},
    {"club": "arsenal", "de": 2019, "a": 2023},
    {"club": "trabzonspor", "de": 2023, "a": 2024},
    {"club": "villarreal", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Wilfried Zaha",
   "niveau": "expert",
   "nomDeFamille": [
    "Zaha"
   ],
   "autresReponses": [
    "Zaha"
   ],
   "presentation": "Ailier ivoirien virevoltant, légende de Crystal Palace.",
   "carriere": [
    {"club": "crystal-palace", "de": 2010, "a": 2013},
    {"club": "manchester-united", "de": 2013, "a": 2014},
    {"club": "crystal-palace", "de": 2014, "a": 2023},
    {"club": "galatasaray", "de": 2023, "a": 2026}
   ]
  },
  {
   "nom": "Kalidou Koulibaly",
   "niveau": "expert",
   "nomDeFamille": [
    "Koulibaly"
   ],
   "autresReponses": [
    "Koulibaly",
    "KK"
   ],
   "presentation": "Défenseur central et capitaine du Sénégal champion d'Afrique 2021, idole de Naples.",
   "carriere": [
    {"club": "fc-metz", "de": 2010, "a": 2012},
    {"club": "krc-genk", "de": 2012, "a": 2014},
    {"club": "naples", "de": 2014, "a": 2022},
    {"club": "chelsea", "de": 2022, "a": 2023},
    {"club": "al-hilal", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Édouard Mendy",
   "niveau": "expert",
   "nomDeFamille": [
    "Mendy"
   ],
   "autresReponses": [
    "Mendy"
   ],
   "presentation": "Gardien sénégalais, vainqueur de la Ligue des champions 2021 avec Chelsea et champion d'Afrique 2021.",
   "carriere": [
    {"club": "as-cherbourg", "de": 2011, "a": 2014},
    {"club": "stade-de-reims", "de": 2016, "a": 2019},
    {"club": "stade-rennais", "de": 2019, "a": 2020},
    {"club": "chelsea", "de": 2020, "a": 2023},
    {"club": "al-ahli-djeddah", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Victor Osimhen",
   "niveau": "expert",
   "nomDeFamille": [
    "Osimhen"
   ],
   "autresReponses": [
    "Osimhen"
   ],
   "presentation": "Buteur nigérian, artisan du titre de champion d'Italie de Naples en 2023.",
   "carriere": [
    {"club": "vfl-wolfsburg", "de": 2017, "a": 2018},
    {"club": "sporting-charleroi", "de": 2018, "a": 2019},
    {"club": "lille-osc", "de": 2019, "a": 2020},
    {"club": "naples", "de": 2020, "a": 2024},
    {"club": "galatasaray", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Hakan Çalhanoğlu",
   "niveau": "expert",
   "nomDeFamille": [
    "Çalhanoğlu"
   ],
   "autresReponses": [
    "Calhanoglu"
   ],
   "presentation": "Milieu turc spécialiste des coups de pied arrêtés, passé de l'AC Milan à l'Inter.",
   "carriere": [
    {"club": "karlsruhe-sc", "de": 2011, "a": 2013},
    {"club": "hambourg-sv", "de": 2013, "a": 2014},
    {"club": "bayer-leverkusen", "de": 2014, "a": 2017},
    {"club": "ac-milan", "de": 2017, "a": 2021},
    {"club": "inter-milan", "de": 2021, "a": null}
   ]
  },
  {
   "nom": "Dušan Vlahović",
   "niveau": "expert",
   "nomDeFamille": [
    "Vlahović"
   ],
   "autresReponses": [
    "Vlahovic"
   ],
   "presentation": "Avant-centre serbe gaucher, révélé à la Fiorentina.",
   "carriere": [
    {"club": "partizan-belgrade", "de": 2016, "a": 2018},
    {"club": "fiorentina", "de": 2018, "a": 2022},
    {"club": "juventus", "de": 2022, "a": 2026},
    {"club": "besiktas", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Aleksandar Mitrović",
   "niveau": "expert",
   "nomDeFamille": [
    "Mitrović"
   ],
   "autresReponses": [
    "Mitrovic",
    "Mitro"
   ],
   "presentation": "Avant-centre serbe, recordman de buts sur une saison de Championship anglaise.",
   "carriere": [
    {"club": "teleoptik", "de": 2011, "a": 2012},
    {"club": "partizan-belgrade", "de": 2012, "a": 2013},
    {"club": "anderlecht", "de": 2013, "a": 2015},
    {"club": "newcastle-united", "de": 2015, "a": 2017},
    {"club": "fulham", "de": 2017, "a": 2023},
    {"club": "al-hilal", "de": 2023, "a": 2025},
    {"club": "al-rayyan", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Ciro Immobile",
   "niveau": "expert",
   "nomDeFamille": [
    "Immobile"
   ],
   "autresReponses": [
    "Immobile"
   ],
   "presentation": "Buteur italien, quadruple meilleur buteur de Serie A et légende de la Lazio.",
   "carriere": [
    {"club": "juventus", "de": 2009, "a": 2012},
    {"club": "genoa", "de": 2012, "a": 2013},
    {"club": "torino", "de": 2013, "a": 2014},
    {"club": "borussia-dortmund", "de": 2014, "a": 2015},
    {"club": "fc-seville", "de": 2015, "a": 2016},
    {"club": "lazio-rome", "de": 2016, "a": 2024},
    {"club": "besiktas", "de": 2024, "a": 2025},
    {"club": "bologne", "de": 2025, "a": 2026},
    {"club": "paris-fc", "de": 2026, "a": 2026}
   ]
  },
  {
   "nom": "Jorginho",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Jorge Luiz Frello Filho"
   ],
   "presentation": "Milieu italo-brésilien, vainqueur de la Ligue des champions et de l'Euro en 2021.",
   "carriere": [
    {"club": "hellas-verone", "de": 2010, "a": 2014},
    {"club": "naples", "de": 2014, "a": 2018},
    {"club": "chelsea", "de": 2018, "a": 2023},
    {"club": "arsenal", "de": 2023, "a": 2025},
    {"club": "flamengo", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Marco Verratti",
   "niveau": "expert",
   "nomDeFamille": [
    "Verratti"
   ],
   "autresReponses": [
    "Verratti",
    "Le Petit Hibou"
   ],
   "presentation": "Milieu italien au jeu de passes, pilier du PSG pendant onze saisons et champion d'Europe 2021.",
   "carriere": [
    {"club": "pescara", "de": 2008, "a": 2012},
    {"club": "paris-sg", "de": 2012, "a": 2023},
    {"club": "al-arabi-qatar", "de": 2023, "a": 2025},
    {"club": "al-duhail", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Paulo Dybala",
   "niveau": "expert",
   "nomDeFamille": [
    "Dybala"
   ],
   "autresReponses": [
    "Dybala",
    "La Joya"
   ],
   "presentation": "« La Joya », attaquant argentin gaucher, champion du monde 2022.",
   "carriere": [
    {"club": "instituto-cordoba", "de": 2011, "a": 2012},
    {"club": "palerme", "de": 2012, "a": 2015},
    {"club": "juventus", "de": 2015, "a": 2022},
    {"club": "as-rome", "de": 2022, "a": null}
   ]
  },
  {
   "nom": "Lautaro Martínez",
   "niveau": "expert",
   "nomDeFamille": [
    "Martínez"
   ],
   "autresReponses": [
    "Lautaro",
    "El Toro"
   ],
   "presentation": "Attaquant argentin, capitaine de l'Inter Milan et champion du monde 2022.",
   "carriere": [
    {"club": "racing-club", "de": 2015, "a": 2018},
    {"club": "inter-milan", "de": 2018, "a": null}
   ]
  },
  {
   "nom": "Emiliano Martínez",
   "niveau": "expert",
   "nomDeFamille": [
    "Martínez"
   ],
   "autresReponses": [
    "Dibu",
    "Dibu Martinez",
    "Emi Martinez"
   ],
   "presentation": "Gardien argentin, héros des tirs au but et meilleur gardien de la Coupe du monde 2022.",
   "carriere": [
    {"club": "arsenal", "de": 2012, "a": 2020},
    {"club": "aston-villa", "de": 2020, "a": 2026},
    {"club": "chelsea", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Julián Álvarez",
   "niveau": "expert",
   "nomDeFamille": [
    "Álvarez"
   ],
   "autresReponses": [
    "Alvarez",
    "La Araña"
   ],
   "presentation": "« L'Araignée », attaquant argentin champion du monde 2022 et vainqueur du triplé avec Manchester City.",
   "carriere": [
    {"club": "river-plate", "de": 2018, "a": 2022},
    {"club": "manchester-city", "de": 2022, "a": 2024},
    {"club": "atletico-madrid", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Antony",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Antony Matheus dos Santos"
   ],
   "presentation": "Ailier brésilien gaucher révélé à l'Ajax, transféré à Manchester United pour une somme record.",
   "carriere": [
    {"club": "sao-paulo-fc", "de": 2018, "a": 2020},
    {"club": "ajax-amsterdam", "de": 2020, "a": 2022},
    {"club": "manchester-united", "de": 2022, "a": 2025},
    {"club": "betis-seville", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Richarlison",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Richarlison de Andrade",
    "Pombo"
   ],
   "presentation": "Attaquant brésilien, auteur d'une magnifique reprise acrobatique à la Coupe du monde 2022.",
   "carriere": [
    {"club": "america-mineiro", "de": 2015, "a": 2016},
    {"club": "fluminense", "de": 2016, "a": 2017},
    {"club": "watford", "de": 2017, "a": 2018},
    {"club": "everton", "de": 2018, "a": 2022},
    {"club": "tottenham", "de": 2022, "a": null}
   ]
  },
  {
   "nom": "Gabriel Jesus",
   "niveau": "expert",
   "nomDeFamille": [
    "Jesus"
   ],
   "autresReponses": [
    "Jesus"
   ],
   "presentation": "Attaquant brésilien révélé à Palmeiras, quadruple champion d'Angleterre avec Manchester City.",
   "carriere": [
    {"club": "palmeiras", "de": 2015, "a": 2017},
    {"club": "manchester-city", "de": 2017, "a": 2022},
    {"club": "arsenal", "de": 2022, "a": 2026},
    {"club": "barcelone", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Roberto Firmino",
   "niveau": "expert",
   "nomDeFamille": [
    "Firmino"
   ],
   "autresReponses": [
    "Firmino",
    "Bobby Firmino"
   ],
   "presentation": "Attaquant brésilien au sourire éclatant, membre du trio offensif de Liverpool avec Salah et Mané.",
   "carriere": [
    {"club": "figueirense", "de": 2009, "a": 2011},
    {"club": "hoffenheim", "de": 2011, "a": 2015},
    {"club": "liverpool", "de": 2015, "a": 2023},
    {"club": "al-ahli-djeddah", "de": 2023, "a": 2025},
    {"club": "al-sadd", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Casemiro",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Carlos Casemiro"
   ],
   "presentation": "Milieu défensif brésilien, multiple vainqueur de la Ligue des champions avec le Real Madrid.",
   "carriere": [
    {"club": "sao-paulo-fc", "de": 2010, "a": 2013},
    {"club": "real-madrid", "de": 2013, "a": 2022},
    {"club": "manchester-united", "de": 2022, "a": 2026},
    {"club": "inter-miami", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Darwin Núñez",
   "niveau": "expert",
   "nomDeFamille": [
    "Núñez"
   ],
   "autresReponses": [
    "Nunez",
    "Darwin"
   ],
   "presentation": "Attaquant uruguayen puissant, révélé au Benfica.",
   "carriere": [
    {"club": "penarol", "de": 2017, "a": 2019},
    {"club": "almeria", "de": 2019, "a": 2020},
    {"club": "benfica", "de": 2020, "a": 2022},
    {"club": "liverpool", "de": 2022, "a": 2025},
    {"club": "al-hilal", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Luis Díaz",
   "niveau": "expert",
   "nomDeFamille": [
    "Díaz"
   ],
   "autresReponses": [
    "Lucho",
    "Lucho Diaz"
   ],
   "presentation": "Ailier colombien révélé au FC Porto, star de Liverpool.",
   "carriere": [
    {"club": "barranquilla-fc", "de": 2016, "a": 2017},
    {"club": "junior-barranquilla", "de": 2017, "a": 2019},
    {"club": "fc-porto", "de": 2019, "a": 2022},
    {"club": "liverpool", "de": 2022, "a": 2025},
    {"club": "bayern-munich", "de": 2025, "a": null}
   ]
  },
  {
   "nom": "Christian Pulisic",
   "niveau": "expert",
   "nomDeFamille": [
    "Pulisic"
   ],
   "autresReponses": [
    "Pulisic",
    "Captain America"
   ],
   "presentation": "« Captain America », ailier américain vainqueur de la Ligue des champions 2021 avec Chelsea.",
   "carriere": [
    {"club": "borussia-dortmund", "de": 2016, "a": 2019},
    {"club": "chelsea", "de": 2019, "a": 2023},
    {"club": "ac-milan", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Kim Min-jae",
   "niveau": "expert",
   "nomDeFamille": [
    "Kim"
   ],
   "autresReponses": [
    "Min-jae Kim",
    "Kim"
   ],
   "presentation": "Défenseur central sud-coréen surnommé « Le Monstre », champion d'Italie avec Naples en 2023.",
   "carriere": [
    {"club": "gyeongju-khnp", "de": 2016, "a": 2016},
    {"club": "jeonbuk-hyundai-motors", "de": 2017, "a": 2018},
    {"club": "beijing-guoan", "de": 2019, "a": 2021},
    {"club": "fenerbahce", "de": 2021, "a": 2022},
    {"club": "naples", "de": 2022, "a": 2023},
    {"club": "bayern-munich", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Kai Havertz",
   "niveau": "expert",
   "nomDeFamille": [
    "Havertz"
   ],
   "autresReponses": [
    "Havertz"
   ],
   "presentation": "Attaquant allemand, buteur en finale de la Ligue des champions 2021 avec Chelsea.",
   "carriere": [
    {"club": "bayer-leverkusen", "de": 2016, "a": 2020},
    {"club": "chelsea", "de": 2020, "a": 2023},
    {"club": "arsenal", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Timo Werner",
   "niveau": "expert",
   "nomDeFamille": [
    "Werner"
   ],
   "autresReponses": [
    "Werner"
   ],
   "presentation": "Attaquant allemand rapide, meilleur buteur de l'histoire du RB Leipzig.",
   "carriere": [
    {"club": "vfb-stuttgart", "de": 2013, "a": 2016},
    {"club": "rb-leipzig", "de": 2016, "a": 2020},
    {"club": "chelsea", "de": 2020, "a": 2022},
    {"club": "rb-leipzig", "de": 2022, "a": 2026},
    {"club": "san-jose-earthquakes", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Juninho Pernambucano",
   "niveau": "expert",
   "nomDeFamille": [
    "Pernambucano"
   ],
   "autresReponses": [
    "Juninho"
   ],
   "presentation": "Milieu brésilien, roi des coups francs et artisan des sept titres consécutifs de l'Olympique lyonnais.",
   "carriere": [
    {"club": "sport-recife", "de": 1993, "a": 1995},
    {"club": "vasco-da-gama", "de": 1995, "a": 2001},
    {"club": "olympique-lyonnais", "de": 2001, "a": 2009},
    {"club": "al-gharafa", "de": 2009, "a": 2011},
    {"club": "vasco-da-gama", "de": 2011, "a": 2012},
    {"club": "new-york-red-bulls", "de": 2013, "a": 2013},
    {"club": "vasco-da-gama", "de": 2013, "a": 2013}
   ]
  },
  {
   "nom": "Pauleta",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Pedro Pauleta",
    "L'Aigle des Açores"
   ],
   "presentation": "« L'Aigle des Açores », buteur portugais longtemps meilleur buteur de l'histoire du PSG.",
   "carriere": [
    {"club": "santa-clara", "de": 1990, "a": 1992},
    {"club": "operario-acores", "de": 1992, "a": 1994},
    {"club": "angrense", "de": 1994, "a": 1994},
    {"club": "micaelense", "de": 1995, "a": 1995},
    {"club": "estoril", "de": 1995, "a": 1996},
    {"club": "ud-salamanque", "de": 1996, "a": 1998},
    {"club": "la-corogne", "de": 1998, "a": 2000},
    {"club": "girondins-de-bordeaux", "de": 2000, "a": 2003},
    {"club": "paris-sg", "de": 2003, "a": 2008},
    {"club": "sao-roque", "de": 2010, "a": 2010}
   ]
  },
  {
   "nom": "Djibril Cissé",
   "niveau": "expert",
   "nomDeFamille": [
    "Cissé"
   ],
   "autresReponses": [
    "Djibril"
   ],
   "presentation": "Attaquant français à la vitesse fulgurante et aux coupes de cheveux remarquées, vainqueur de la Ligue des champions 2005.",
   "carriere": [
    {"club": "aj-auxerre", "de": 1998, "a": 2004},
    {"club": "liverpool", "de": 2004, "a": 2006},
    {"club": "olympique-de-marseille", "de": 2006, "a": 2009},
    {"club": "panathinaikos", "de": 2009, "a": 2011},
    {"club": "lazio-rome", "de": 2011, "a": 2012},
    {"club": "queens-park-rangers", "de": 2012, "a": 2013},
    {"club": "kouban-krasnodar", "de": 2013, "a": 2013},
    {"club": "sc-bastia", "de": 2014, "a": 2015},
    {"club": "js-saint-pierroise-la-reunion", "de": 2015, "a": 2015},
    {"club": "yverdon-sport", "de": 2017, "a": 2018},
    {"club": "vicence", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Sidney Govou",
   "niveau": "expert",
   "nomDeFamille": [
    "Govou"
   ],
   "autresReponses": [
    "Govou"
   ],
   "presentation": "Ailier français, fidèle de l'Olympique lyonnais pendant ses sept titres de champion consécutifs.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 2000, "a": 2010},
    {"club": "panathinaikos", "de": 2010, "a": 2011},
    {"club": "evian-thonon-gaillard", "de": 2011, "a": 2013},
    {"club": "monts-d-or-azergues", "de": 2014, "a": 2015},
    {"club": "fc-miami-city", "de": 2015, "a": 2015},
    {"club": "limonest", "de": 2015, "a": 2017}
   ]
  },
  {
   "nom": "Florent Malouda",
   "niveau": "expert",
   "nomDeFamille": [
    "Malouda"
   ],
   "autresReponses": [
    "Malouda"
   ],
   "presentation": "Ailier guyanais, champion de France avec Lyon puis vainqueur de la Ligue des champions 2012 avec Chelsea.",
   "carriere": [
    {"club": "lb-chateauroux", "de": 1996, "a": 2000},
    {"club": "en-avant-guingamp", "de": 2000, "a": 2003},
    {"club": "olympique-lyonnais", "de": 2003, "a": 2007},
    {"club": "chelsea", "de": 2007, "a": 2013},
    {"club": "trabzonspor", "de": 2013, "a": 2014},
    {"club": "fc-metz", "de": 2014, "a": 2015},
    {"club": "delhi-dynamos", "de": 2015, "a": 2017},
    {"club": "differdange", "de": 2018, "a": 2018}
   ]
  },
  {
   "nom": "Louis Saha",
   "niveau": "expert",
   "nomDeFamille": [
    "Saha"
   ],
   "autresReponses": [
    "Saha"
   ],
   "presentation": "Attaquant français formé au FC Metz, champion d'Angleterre avec Manchester United.",
   "carriere": [
    {"club": "fc-metz", "de": 1997, "a": 2000},
    {"club": "fulham", "de": 2000, "a": 2004},
    {"club": "manchester-united", "de": 2004, "a": 2008},
    {"club": "everton", "de": 2008, "a": 2012},
    {"club": "tottenham", "de": 2012, "a": 2012},
    {"club": "sunderland", "de": 2012, "a": 2013},
    {"club": "lazio-rome", "de": 2013, "a": 2013}
   ]
  },
  {
   "nom": "Ludovic Giuly",
   "niveau": "expert",
   "nomDeFamille": [
    "Giuly"
   ],
   "autresReponses": [
    "Giuly",
    "Ludo Giuly"
   ],
   "presentation": "Ailier français de petite taille, vainqueur de la Ligue des champions 2006 avec le FC Barcelone.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 1994, "a": 1998},
    {"club": "as-monaco", "de": 1998, "a": 2004},
    {"club": "barcelone", "de": 2004, "a": 2007},
    {"club": "as-rome", "de": 2007, "a": 2008},
    {"club": "paris-sg", "de": 2008, "a": 2011},
    {"club": "as-monaco", "de": 2011, "a": 2012},
    {"club": "fc-lorient", "de": 2012, "a": 2013},
    {"club": "monts-d-or-azergues", "de": 2013, "a": 2016}
   ]
  },
  {
   "nom": "Mamadou Niang",
   "niveau": "expert",
   "nomDeFamille": [
    "Niang"
   ],
   "autresReponses": [
    "Niang"
   ],
   "presentation": "Attaquant sénégalais, capitaine de l'OM champion de France en 2010.",
   "carriere": [
    {"club": "es-troyes", "de": 2001, "a": 2003},
    {"club": "rc-strasbourg", "de": 2003, "a": 2005},
    {"club": "olympique-de-marseille", "de": 2005, "a": 2010},
    {"club": "fenerbahce", "de": 2010, "a": 2011},
    {"club": "al-sadd", "de": 2011, "a": 2014},
    {"club": "arles-avignon", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "Bafétimbi Gomis",
   "niveau": "expert",
   "nomDeFamille": [
    "Gomis"
   ],
   "autresReponses": [
    "Gomis",
    "Bafe Gomis",
    "La Panthère"
   ],
   "presentation": "Attaquant français surnommé « la Panthère » pour sa célébration de but.",
   "carriere": [
    {"club": "as-saint-etienne", "de": 2004, "a": 2009},
    {"club": "olympique-lyonnais", "de": 2009, "a": 2014},
    {"club": "swansea-city", "de": 2014, "a": 2017},
    {"club": "galatasaray", "de": 2017, "a": 2018},
    {"club": "al-hilal", "de": 2018, "a": 2022},
    {"club": "galatasaray", "de": 2022, "a": 2023},
    {"club": "kawasaki-frontale", "de": 2023, "a": 2024}
   ]
  },
  {
   "nom": "André-Pierre Gignac",
   "niveau": "expert",
   "nomDeFamille": [
    "Gignac"
   ],
   "autresReponses": [
    "Gignac",
    "APG",
    "Dede Gignac"
   ],
   "presentation": "Attaquant français devenu une légende des Tigres UANL au Mexique.",
   "carriere": [
    {"club": "fc-lorient", "de": 2002, "a": 2007},
    {"club": "toulouse-fc", "de": 2007, "a": 2010},
    {"club": "olympique-de-marseille", "de": 2010, "a": 2015},
    {"club": "tigres-uanl", "de": 2015, "a": 2026}
   ]
  },
  {
   "nom": "Loïc Rémy",
   "niveau": "expert",
   "nomDeFamille": [
    "Rémy"
   ],
   "autresReponses": [
    "Remy"
   ],
   "presentation": "Attaquant français rapide, passé par Lyon, Nice, Marseille et Chelsea.",
   "carriere": [
    {"club": "olympique-lyonnais", "de": 2006, "a": 2008},
    {"club": "ogc-nice", "de": 2008, "a": 2010},
    {"club": "olympique-de-marseille", "de": 2010, "a": 2013},
    {"club": "queens-park-rangers", "de": 2013, "a": 2014},
    {"club": "chelsea", "de": 2014, "a": 2017},
    {"club": "las-palmas", "de": 2017, "a": 2018},
    {"club": "lille-osc", "de": 2018, "a": 2020},
    {"club": "rizespor", "de": 2020, "a": 2022},
    {"club": "adana-demirspor", "de": 2022, "a": 2022}
   ]
  },
  {
   "nom": "Yoann Gourcuff",
   "niveau": "expert",
   "nomDeFamille": [
    "Gourcuff"
   ],
   "autresReponses": [
    "Gourcuff"
   ],
   "presentation": "Meneur de jeu français, élu meilleur joueur de Ligue 1 lors du titre de Bordeaux en 2009.",
   "carriere": [
    {"club": "stade-rennais", "de": 2003, "a": 2006},
    {"club": "ac-milan", "de": 2006, "a": 2008},
    {"club": "girondins-de-bordeaux", "de": 2008, "a": 2010},
    {"club": "olympique-lyonnais", "de": 2010, "a": 2015},
    {"club": "stade-rennais", "de": 2015, "a": 2018},
    {"club": "dijon-fco", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Jérémy Ménez",
   "niveau": "expert",
   "nomDeFamille": [
    "Ménez"
   ],
   "autresReponses": [
    "Menez"
   ],
   "presentation": "Ailier français technique, passé par l'AS Rome, le PSG et l'AC Milan.",
   "carriere": [
    {"club": "fc-sochaux", "de": 2004, "a": 2006},
    {"club": "as-monaco", "de": 2006, "a": 2008},
    {"club": "as-rome", "de": 2008, "a": 2011},
    {"club": "paris-sg", "de": 2011, "a": 2014},
    {"club": "ac-milan", "de": 2014, "a": 2016},
    {"club": "girondins-de-bordeaux", "de": 2016, "a": 2017},
    {"club": "antalyaspor", "de": 2017, "a": 2018},
    {"club": "club-america", "de": 2018, "a": 2019},
    {"club": "paris-fc", "de": 2019, "a": 2020},
    {"club": "reggina", "de": 2020, "a": 2023},
    {"club": "bari", "de": 2023, "a": 2024}
   ]
  },
  {
   "nom": "Jérémy Toulalan",
   "niveau": "expert",
   "nomDeFamille": [
    "Toulalan"
   ],
   "autresReponses": [
    "Toulalan"
   ],
   "presentation": "Milieu défensif français, pilier de l'Olympique lyonnais de la grande époque.",
   "carriere": [
    {"club": "fc-nantes", "de": 2001, "a": 2006},
    {"club": "olympique-lyonnais", "de": 2006, "a": 2011},
    {"club": "malaga-cf", "de": 2011, "a": 2013},
    {"club": "as-monaco", "de": 2013, "a": 2016},
    {"club": "girondins-de-bordeaux", "de": 2016, "a": 2018}
   ]
  },
  {
   "nom": "Mathieu Valbuena",
   "niveau": "expert",
   "nomDeFamille": [
    "Valbuena"
   ],
   "autresReponses": [
    "Valbuena",
    "Petit Vélo"
   ],
   "presentation": "« Petit Vélo », milieu offensif français, légende de l'Olympique de Marseille.",
   "carriere": [
    {"club": "libourne-saint-seurin", "de": 2004, "a": 2006},
    {"club": "olympique-de-marseille", "de": 2006, "a": 2014},
    {"club": "dynamo-moscou", "de": 2014, "a": 2015},
    {"club": "olympique-lyonnais", "de": 2015, "a": 2017},
    {"club": "fenerbahce", "de": 2017, "a": 2019},
    {"club": "olympiakos", "de": 2019, "a": 2023},
    {"club": "apollon-limassol", "de": 2023, "a": 2024},
    {"club": "athens-kallithea", "de": 2024, "a": 2025}
   ]
  },
  {
   "nom": "Steve Mandanda",
   "niveau": "expert",
   "nomDeFamille": [
    "Mandanda"
   ],
   "autresReponses": [
    "Mandanda"
   ],
   "presentation": "Gardien français, recordman de matchs joués avec l'Olympique de Marseille.",
   "carriere": [
    {"club": "le-havre-ac", "de": 2004, "a": 2007},
    {"club": "olympique-de-marseille", "de": 2007, "a": 2016},
    {"club": "crystal-palace", "de": 2016, "a": 2017},
    {"club": "olympique-de-marseille", "de": 2017, "a": 2022},
    {"club": "stade-rennais", "de": 2022, "a": 2025}
   ]
  },
  {
   "nom": "Grégory Coupet",
   "niveau": "expert",
   "nomDeFamille": [
    "Coupet"
   ],
   "autresReponses": [
    "Coupet"
   ],
   "presentation": "Gardien de l'Olympique lyonnais pendant la série de sept titres de champion consécutifs.",
   "carriere": [
    {"club": "as-saint-etienne", "de": 1993, "a": 1997},
    {"club": "olympique-lyonnais", "de": 1997, "a": 2008},
    {"club": "atletico-madrid", "de": 2008, "a": 2009},
    {"club": "paris-sg", "de": 2009, "a": 2011}
   ]
  },
  {
   "nom": "Mickaël Landreau",
   "niveau": "expert",
   "nomDeFamille": [
    "Landreau"
   ],
   "autresReponses": [
    "Landreau"
   ],
   "presentation": "Gardien français, recordman de matchs joués en Ligue 1.",
   "carriere": [
    {"club": "fc-nantes", "de": 1996, "a": 2006},
    {"club": "paris-sg", "de": 2006, "a": 2009},
    {"club": "lille-osc", "de": 2009, "a": 2012},
    {"club": "sc-bastia", "de": 2012, "a": 2014}
   ]
  },
  {
   "nom": "Seydou Keita",
   "niveau": "expert",
   "nomDeFamille": [
    "Keita"
   ],
   "autresReponses": [
    "Keita"
   ],
   "presentation": "Milieu malien polyvalent, vainqueur de deux Ligues des champions avec le FC Barcelone.",
   "carriere": [
    {"club": "olympique-de-marseille", "de": 1999, "a": 2000},
    {"club": "fc-lorient", "de": 2000, "a": 2002},
    {"club": "rc-lens", "de": 2002, "a": 2007},
    {"club": "fc-seville", "de": 2007, "a": 2008},
    {"club": "barcelone", "de": 2008, "a": 2012},
    {"club": "dalian-aerbin", "de": 2012, "a": 2014},
    {"club": "valence-cf", "de": 2014, "a": 2014},
    {"club": "as-rome", "de": 2014, "a": 2016},
    {"club": "el-jaish", "de": 2016, "a": 2017}
   ]
  },
  {
   "nom": "Mahamadou Diarra",
   "niveau": "expert",
   "nomDeFamille": [
    "Diarra"
   ],
   "autresReponses": [
    "Diarra",
    "Momo Diarra"
   ],
   "presentation": "Milieu défensif malien, champion de France avec Lyon puis champion d'Espagne avec le Real Madrid.",
   "carriere": [
    {"club": "ofi-crete", "de": 1998, "a": 1999},
    {"club": "vitesse-arnhem", "de": 1999, "a": 2002},
    {"club": "olympique-lyonnais", "de": 2002, "a": 2006},
    {"club": "real-madrid", "de": 2006, "a": 2011},
    {"club": "as-monaco", "de": 2011, "a": 2011},
    {"club": "fulham", "de": 2012, "a": 2014}
   ]
  },
  {
   "nom": "El Hadji Diouf",
   "niveau": "expert",
   "nomDeFamille": [
    "Hadji Diouf",
    "Diouf"
   ],
   "autresReponses": [
    "Diouf"
   ],
   "presentation": "Attaquant sénégalais, double Ballon d'or africain et quart-de-finaliste de la Coupe du monde 2002.",
   "carriere": [
    {"club": "fc-sochaux", "de": 1998, "a": 1999},
    {"club": "stade-rennais", "de": 1999, "a": 2000},
    {"club": "rc-lens", "de": 2000, "a": 2002},
    {"club": "liverpool", "de": 2002, "a": 2004},
    {"club": "bolton-wanderers", "de": 2004, "a": 2008},
    {"club": "sunderland", "de": 2008, "a": 2009},
    {"club": "blackburn-rovers", "de": 2009, "a": 2011},
    {"club": "doncaster-rovers", "de": 2011, "a": 2012},
    {"club": "leeds-united", "de": 2012, "a": 2014},
    {"club": "sabah-fa", "de": 2014, "a": 2015}
   ]
  },
  {
   "nom": "Papiss Cissé",
   "niveau": "expert",
   "nomDeFamille": [
    "Cissé"
   ],
   "autresReponses": [
    "Papiss Demba Cisse",
    "Papiss"
   ],
   "presentation": "Attaquant sénégalais, auteur d'un but extraordinaire avec Newcastle face à Chelsea en 2012.",
   "carriere": [
    {"club": "as-douanes-dakar", "de": 2000, "a": 2004},
    {"club": "fc-metz", "de": 2004, "a": 2010},
    {"club": "sc-fribourg", "de": 2010, "a": 2012},
    {"club": "newcastle-united", "de": 2012, "a": 2016},
    {"club": "shandong-luneng", "de": 2016, "a": 2018},
    {"club": "alanyaspor", "de": 2018, "a": 2020},
    {"club": "fenerbahce", "de": 2020, "a": 2021},
    {"club": "rizespor", "de": 2022, "a": 2022},
    {"club": "amiens", "de": 2022, "a": 2023},
    {"club": "palm-city", "de": 2025, "a": 2025}
   ]
  },
  {
   "nom": "Demba Ba",
   "niveau": "expert",
   "nomDeFamille": [
    "Ba"
   ],
   "autresReponses": [
    "Ba",
    "Demba"
   ],
   "presentation": "Attaquant sénégalais, buteur décisif avec Chelsea face à Liverpool en 2014.",
   "carriere": [
    {"club": "fc-rouen", "de": 2005, "a": 2006},
    {"club": "excelsior-mouscron", "de": 2006, "a": 2007},
    {"club": "hoffenheim", "de": 2007, "a": 2011},
    {"club": "west-ham", "de": 2011, "a": 2011},
    {"club": "newcastle-united", "de": 2011, "a": 2013},
    {"club": "chelsea", "de": 2013, "a": 2014},
    {"club": "besiktas", "de": 2014, "a": 2015},
    {"club": "shanghai-shenhua", "de": 2015, "a": 2018},
    {"club": "goztepe", "de": 2018, "a": 2018},
    {"club": "shanghai-shenhua", "de": 2018, "a": 2018},
    {"club": "istanbul-basaksehir", "de": 2019, "a": 2021},
    {"club": "lugano", "de": 2021, "a": 2021}
   ]
  },
  {
   "nom": "Marouane Chamakh",
   "niveau": "expert",
   "nomDeFamille": [
    "Chamakh"
   ],
   "autresReponses": [
    "Chamakh"
   ],
   "presentation": "Attaquant marocain au jeu de tête redoutable, champion de France avec Bordeaux en 2009.",
   "carriere": [
    {"club": "girondins-de-bordeaux", "de": 2002, "a": 2010},
    {"club": "arsenal", "de": 2010, "a": 2013},
    {"club": "crystal-palace", "de": 2013, "a": 2016},
    {"club": "cardiff-city", "de": 2016, "a": 2016}
   ]
  },
  {
   "nom": "Asamoah Gyan",
   "niveau": "expert",
   "nomDeFamille": [
    "Gyan"
   ],
   "autresReponses": [
    "Gyan"
   ],
   "presentation": "Attaquant ghanéen, meilleur buteur africain de l'histoire de la Coupe du monde.",
   "carriere": [
    {"club": "liberty-professionals", "de": 2003, "a": 2003},
    {"club": "udinese", "de": 2003, "a": 2008},
    {"club": "stade-rennais", "de": 2008, "a": 2010},
    {"club": "sunderland", "de": 2010, "a": 2011},
    {"club": "al-ain", "de": 2011, "a": 2015},
    {"club": "shanghai-sipg", "de": 2015, "a": 2017},
    {"club": "kayserispor", "de": 2017, "a": 2019},
    {"club": "northeast-united", "de": 2019, "a": 2020},
    {"club": "legon-cities", "de": 2020, "a": 2021}
   ]
  },
  {
   "nom": "Salomon Kalou",
   "niveau": "expert",
   "nomDeFamille": [
    "Kalou"
   ],
   "autresReponses": [
    "Kalou"
   ],
   "presentation": "Attaquant ivoirien, vainqueur de la Ligue des champions 2012 avec Chelsea.",
   "carriere": [
    {"club": "feyenoord", "de": 2003, "a": 2006},
    {"club": "chelsea", "de": 2006, "a": 2012},
    {"club": "lille-osc", "de": 2012, "a": 2014},
    {"club": "hertha-berlin", "de": 2014, "a": 2020},
    {"club": "botafogo", "de": 2020, "a": 2021},
    {"club": "arta-solar7", "de": 2022, "a": 2024}
   ]
  },
  {
   "nom": "Gervinho",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Gervais Yao Kouassi"
   ],
   "presentation": "Ailier ivoirien rapide, champion de France avec Lille en 2011.",
   "carriere": [
    {"club": "beveren", "de": 2005, "a": 2007},
    {"club": "le-mans", "de": 2007, "a": 2009},
    {"club": "lille-osc", "de": 2009, "a": 2011},
    {"club": "arsenal", "de": 2011, "a": 2013},
    {"club": "as-rome", "de": 2013, "a": 2016},
    {"club": "hebei-china-fortune", "de": 2016, "a": 2018},
    {"club": "parme", "de": 2018, "a": 2021},
    {"club": "trabzonspor", "de": 2021, "a": 2022},
    {"club": "aris-salonique", "de": 2022, "a": 2023}
   ]
  },
  {
   "nom": "Wilfried Bony",
   "niveau": "expert",
   "nomDeFamille": [
    "Bony"
   ],
   "autresReponses": [
    "Bony"
   ],
   "presentation": "Attaquant ivoirien, meilleur buteur du championnat néerlandais avec Vitesse Arnhem.",
   "carriere": [
    {"club": "issia-wazy", "de": 2006, "a": 2008},
    {"club": "sparta-prague", "de": 2008, "a": 2011},
    {"club": "vitesse-arnhem", "de": 2011, "a": 2013},
    {"club": "swansea-city", "de": 2013, "a": 2015},
    {"club": "manchester-city", "de": 2015, "a": 2017},
    {"club": "swansea-city", "de": 2017, "a": 2019},
    {"club": "al-ittihad", "de": 2020, "a": 2020},
    {"club": "nec-nimegue", "de": 2022, "a": 2022}
   ]
  },
  {
   "nom": "John Obi Mikel",
   "niveau": "expert",
   "nomDeFamille": [
    "Obi Mikel",
    "Mikel"
   ],
   "autresReponses": [
    "Mikel",
    "Obi Mikel",
    "Mikel John Obi"
   ],
   "presentation": "Milieu nigérian, vainqueur de la Ligue des champions 2012 avec Chelsea et champion d'Afrique 2013.",
   "carriere": [
    {"club": "fk-lyn", "de": 2004, "a": 2006},
    {"club": "chelsea", "de": 2006, "a": 2017},
    {"club": "tianjin-teda", "de": 2017, "a": 2018},
    {"club": "middlesbrough", "de": 2019, "a": 2019},
    {"club": "trabzonspor", "de": 2019, "a": 2020},
    {"club": "stoke-city", "de": 2020, "a": 2021}
   ]
  },
  {
   "nom": "Ruud van Nistelrooy",
   "niveau": "expert",
   "nomDeFamille": [
    "van Nistelrooy",
    "Nistelrooy"
   ],
   "autresReponses": [
    "Van Nistelrooy",
    "Nistelrooy",
    "RVN"
   ],
   "presentation": "Buteur néerlandais, star de Manchester United puis du Real Madrid.",
   "carriere": [
    {"club": "den-bosch", "de": 1993, "a": 1997},
    {"club": "heerenveen", "de": 1997, "a": 1998},
    {"club": "psv-eindhoven", "de": 1998, "a": 2001},
    {"club": "manchester-united", "de": 2001, "a": 2006},
    {"club": "real-madrid", "de": 2006, "a": 2010},
    {"club": "hambourg-sv", "de": 2010, "a": 2011},
    {"club": "malaga-cf", "de": 2011, "a": 2012}
   ]
  },
  {
   "nom": "Mark van Bommel",
   "niveau": "expert",
   "nomDeFamille": [
    "van Bommel",
    "Bommel"
   ],
   "autresReponses": [
    "Van Bommel"
   ],
   "presentation": "Milieu défensif néerlandais rugueux, capitaine du Bayern Munich.",
   "carriere": [
    {"club": "fortuna-sittard", "de": 1992, "a": 1999},
    {"club": "psv-eindhoven", "de": 1999, "a": 2005},
    {"club": "barcelone", "de": 2005, "a": 2006},
    {"club": "bayern-munich", "de": 2006, "a": 2011},
    {"club": "ac-milan", "de": 2011, "a": 2012},
    {"club": "psv-eindhoven", "de": 2012, "a": 2013}
   ]
  },
  {
   "nom": "Rafael van der Vaart",
   "niveau": "expert",
   "nomDeFamille": [
    "van der Vaart",
    "Vaart"
   ],
   "autresReponses": [
    "Van der Vaart"
   ],
   "presentation": "Milieu offensif néerlandais au pied gauche précieux, révélé à l'Ajax.",
   "carriere": [
    {"club": "ajax-amsterdam", "de": 2000, "a": 2005},
    {"club": "hambourg-sv", "de": 2005, "a": 2008},
    {"club": "real-madrid", "de": 2008, "a": 2010},
    {"club": "tottenham", "de": 2010, "a": 2012},
    {"club": "hambourg-sv", "de": 2012, "a": 2015},
    {"club": "betis-seville", "de": 2015, "a": 2016},
    {"club": "midtjylland", "de": 2016, "a": 2018},
    {"club": "esbjerg", "de": 2018, "a": 2018}
   ]
  },
  {
   "nom": "Dirk Kuyt",
   "niveau": "expert",
   "nomDeFamille": [
    "Kuyt"
   ],
   "autresReponses": [
    "Kuyt"
   ],
   "presentation": "Attaquant néerlandais infatigable, apprécié des supporters de Liverpool.",
   "carriere": [
    {"club": "utrecht", "de": 1998, "a": 2003},
    {"club": "feyenoord", "de": 2003, "a": 2006},
    {"club": "liverpool", "de": 2006, "a": 2012},
    {"club": "fenerbahce", "de": 2012, "a": 2015},
    {"club": "feyenoord", "de": 2015, "a": 2017}
   ]
  },
  {
   "nom": "Klaas-Jan Huntelaar",
   "niveau": "expert",
   "nomDeFamille": [
    "Huntelaar"
   ],
   "autresReponses": [
    "Huntelaar",
    "The Hunter"
   ],
   "presentation": "« The Hunter », buteur néerlandais, star de Schalke 04.",
   "carriere": [
    {"club": "psv-eindhoven", "de": 2002, "a": 2004},
    {"club": "heerenveen", "de": 2004, "a": 2006},
    {"club": "ajax-amsterdam", "de": 2006, "a": 2009},
    {"club": "real-madrid", "de": 2009, "a": 2009},
    {"club": "ac-milan", "de": 2009, "a": 2010},
    {"club": "schalke-04", "de": 2010, "a": 2017},
    {"club": "ajax-amsterdam", "de": 2017, "a": 2021},
    {"club": "schalke-04", "de": 2021, "a": 2021}
   ]
  },
  {
   "nom": "Memphis Depay",
   "niveau": "expert",
   "nomDeFamille": [
    "Depay"
   ],
   "autresReponses": [
    "Memphis",
    "Depay"
   ],
   "presentation": "Attaquant néerlandais, meilleur buteur de l'histoire des Pays-Bas.",
   "carriere": [
    {"club": "psv-eindhoven", "de": 2011, "a": 2015},
    {"club": "manchester-united", "de": 2015, "a": 2017},
    {"club": "olympique-lyonnais", "de": 2017, "a": 2021},
    {"club": "barcelone", "de": 2021, "a": 2023},
    {"club": "atletico-madrid", "de": 2023, "a": 2024},
    {"club": "corinthians", "de": 2024, "a": null}
   ]
  },
  {
   "nom": "Stevan Jovetić",
   "niveau": "expert",
   "nomDeFamille": [
    "Jovetić"
   ],
   "autresReponses": [
    "Jovetic",
    "JoJo"
   ],
   "presentation": "Attaquant monténégrin, révélé à la Fiorentina.",
   "carriere": [
    {"club": "partizan-belgrade", "de": 2006, "a": 2008},
    {"club": "fiorentina", "de": 2008, "a": 2013},
    {"club": "manchester-city", "de": 2013, "a": 2015},
    {"club": "inter-milan", "de": 2015, "a": 2017},
    {"club": "as-monaco", "de": 2017, "a": 2021},
    {"club": "hertha-berlin", "de": 2021, "a": 2023},
    {"club": "olympiakos", "de": 2023, "a": 2024},
    {"club": "omonia-nicosie", "de": 2024, "a": 2026},
    {"club": "ael-limassol", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Adrian Mutu",
   "niveau": "expert",
   "nomDeFamille": [
    "Mutu"
   ],
   "autresReponses": [
    "Mutu"
   ],
   "presentation": "Attaquant roumain talentueux, star de la Fiorentina.",
   "carriere": [
    {"club": "arges-pitesti", "de": 1996, "a": 1998},
    {"club": "dinamo-bucarest", "de": 1999, "a": 1999},
    {"club": "inter-milan", "de": 2000, "a": 2000},
    {"club": "hellas-verone", "de": 2000, "a": 2002},
    {"club": "parme", "de": 2002, "a": 2003},
    {"club": "chelsea", "de": 2003, "a": 2004},
    {"club": "juventus", "de": 2005, "a": 2006},
    {"club": "fiorentina", "de": 2006, "a": 2011},
    {"club": "cesena", "de": 2011, "a": 2012},
    {"club": "ac-ajaccio", "de": 2012, "a": 2014},
    {"club": "petrolul-ploiesti", "de": 2014, "a": 2014},
    {"club": "fc-pune-city", "de": 2015, "a": 2015},
    {"club": "asa-targu-mures", "de": 2016, "a": 2016}
   ]
  },
  {
   "nom": "Dejan Stanković",
   "niveau": "expert",
   "nomDeFamille": [
    "Stanković"
   ],
   "autresReponses": [
    "Stankovic",
    "Deki"
   ],
   "presentation": "Milieu serbe, vainqueur du triplé avec l'Inter Milan en 2010.",
   "carriere": [
    {"club": "etoile-rouge-de-belgrade", "de": 1995, "a": 1998},
    {"club": "lazio-rome", "de": 1998, "a": 2004},
    {"club": "inter-milan", "de": 2004, "a": 2013}
   ]
  },
  {
   "nom": "Darijo Srna",
   "niveau": "expert",
   "nomDeFamille": [
    "Srna"
   ],
   "autresReponses": [
    "Srna"
   ],
   "presentation": "Latéral droit croate, capitaine historique du Chakhtar Donetsk.",
   "carriere": [
    {"club": "hajduk-split", "de": 1999, "a": 2003},
    {"club": "chakhtar-donetsk", "de": 2003, "a": 2018},
    {"club": "cagliari", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Ivica Olić",
   "niveau": "expert",
   "nomDeFamille": [
    "Olić"
   ],
   "autresReponses": [
    "Olic"
   ],
   "presentation": "Attaquant croate combatif, finaliste de la Ligue des champions 2010 avec le Bayern.",
   "carriere": [
    {"club": "marsonia", "de": 1996, "a": 1998},
    {"club": "hertha-berlin", "de": 1998, "a": 2000},
    {"club": "marsonia", "de": 2000, "a": 2001},
    {"club": "dinamo-zagreb", "de": 2002, "a": 2003},
    {"club": "cska-moscou", "de": 2003, "a": 2007},
    {"club": "hambourg-sv", "de": 2007, "a": 2009},
    {"club": "bayern-munich", "de": 2009, "a": 2012},
    {"club": "vfl-wolfsburg", "de": 2012, "a": 2015},
    {"club": "hambourg-sv", "de": 2015, "a": 2016},
    {"club": "1860-munich", "de": 2016, "a": 2017}
   ]
  },
  {
   "nom": "Tomáš Rosický",
   "niveau": "expert",
   "nomDeFamille": [
    "Rosický"
   ],
   "autresReponses": [
    "Rosicky",
    "Le Petit Mozart"
   ],
   "presentation": "Milieu tchèque surnommé « le Petit Mozart », passé par Dortmund et Arsenal.",
   "carriere": [
    {"club": "sparta-prague", "de": 1998, "a": 2001},
    {"club": "borussia-dortmund", "de": 2001, "a": 2006},
    {"club": "arsenal", "de": 2006, "a": 2016},
    {"club": "sparta-prague", "de": 2016, "a": 2017}
   ]
  },
  {
   "nom": "Marek Hamšík",
   "niveau": "expert",
   "nomDeFamille": [
    "Hamšík"
   ],
   "autresReponses": [
    "Hamsik",
    "Marekiaro"
   ],
   "presentation": "Milieu slovaque à la crête iroquoise, longtemps capitaine de Naples.",
   "carriere": [
    {"club": "slovan-bratislava", "de": 2004, "a": 2004},
    {"club": "brescia", "de": 2004, "a": 2007},
    {"club": "naples", "de": 2007, "a": 2019},
    {"club": "dalian-professional", "de": 2019, "a": 2021},
    {"club": "ifk-goteborg", "de": 2021, "a": 2021},
    {"club": "trabzonspor", "de": 2021, "a": 2023}
   ]
  },
  {
   "nom": "Eiður Guðjohnsen",
   "niveau": "expert",
   "nomDeFamille": [
    "Guðjohnsen"
   ],
   "autresReponses": [
    "Gudjohnsen",
    "Eidur"
   ],
   "presentation": "Attaquant islandais, champion d'Angleterre avec Chelsea et vainqueur du triplé 2009 avec Barcelone.",
   "carriere": [
    {"club": "valur-reykjavik", "de": 1994, "a": 1994},
    {"club": "psv-eindhoven", "de": 1995, "a": 1998},
    {"club": "kr-reykjavik", "de": 1998, "a": 1998},
    {"club": "bolton-wanderers", "de": 1998, "a": 2000},
    {"club": "chelsea", "de": 2000, "a": 2006},
    {"club": "barcelone", "de": 2006, "a": 2009},
    {"club": "as-monaco", "de": 2009, "a": 2010},
    {"club": "stoke-city", "de": 2010, "a": 2011},
    {"club": "aek-athenes", "de": 2011, "a": 2012},
    {"club": "cercle-bruges", "de": 2012, "a": 2013},
    {"club": "club-bruges", "de": 2013, "a": 2014},
    {"club": "bolton-wanderers", "de": 2014, "a": 2015},
    {"club": "shijiazhuang-ever-bright", "de": 2015, "a": 2016},
    {"club": "molde", "de": 2016, "a": 2016}
   ]
  },
  {
   "nom": "Nicklas Bendtner",
   "niveau": "expert",
   "nomDeFamille": [
    "Bendtner"
   ],
   "autresReponses": [
    "Bendtner",
    "Lord Bendtner"
   ],
   "presentation": "Attaquant danois formé à Arsenal, à la confiance en soi légendaire.",
   "carriere": [
    {"club": "arsenal", "de": 2005, "a": 2014},
    {"club": "vfl-wolfsburg", "de": 2014, "a": 2016},
    {"club": "nottingham-forest", "de": 2016, "a": 2017},
    {"club": "rosenborg", "de": 2017, "a": 2019},
    {"club": "fc-copenhague", "de": 2019, "a": 2019}
   ]
  },
  {
   "nom": "Arda Turan",
   "niveau": "expert",
   "nomDeFamille": [
    "Turan"
   ],
   "autresReponses": [
    "Arda",
    "Turan"
   ],
   "presentation": "Meneur de jeu turc, capitaine de Galatasaray puis finaliste de la Ligue des champions 2014 avec l'Atlético.",
   "carriere": [
    {"club": "galatasaray", "de": 2005, "a": 2011},
    {"club": "atletico-madrid", "de": 2011, "a": 2015},
    {"club": "barcelone", "de": 2015, "a": 2020},
    {"club": "galatasaray", "de": 2020, "a": 2022}
   ]
  },
  {
   "nom": "Emre Belözoğlu",
   "niveau": "expert",
   "nomDeFamille": [
    "Belözoğlu"
   ],
   "autresReponses": [
    "Emre",
    "Belozoglu"
   ],
   "presentation": "Milieu turc, troisième de la Coupe du monde 2002.",
   "carriere": [
    {"club": "galatasaray", "de": 1996, "a": 2001},
    {"club": "inter-milan", "de": 2001, "a": 2005},
    {"club": "newcastle-united", "de": 2005, "a": 2008},
    {"club": "fenerbahce", "de": 2008, "a": 2012},
    {"club": "atletico-madrid", "de": 2012, "a": 2013},
    {"club": "fenerbahce", "de": 2013, "a": 2015},
    {"club": "istanbul-basaksehir", "de": 2015, "a": 2019},
    {"club": "fenerbahce", "de": 2019, "a": 2020}
   ]
  },
  {
   "nom": "Roque Santa Cruz",
   "niveau": "expert",
   "nomDeFamille": [
    "Santa Cruz",
    "Cruz"
   ],
   "autresReponses": [
    "Santa Cruz"
   ],
   "presentation": "Attaquant paraguayen, longtemps au Bayern Munich.",
   "carriere": [
    {"club": "olimpia", "de": 1997, "a": 1999},
    {"club": "bayern-munich", "de": 1999, "a": 2007},
    {"club": "blackburn-rovers", "de": 2007, "a": 2009},
    {"club": "manchester-city", "de": 2009, "a": 2012},
    {"club": "malaga-cf", "de": 2012, "a": 2014},
    {"club": "cruz-azul", "de": 2015, "a": 2016},
    {"club": "olimpia", "de": 2016, "a": 2021},
    {"club": "libertad", "de": 2022, "a": 2025},
    {"club": "nacional-q603101", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Javier Saviola",
   "niveau": "expert",
   "nomDeFamille": [
    "Saviola"
   ],
   "autresReponses": [
    "Saviola",
    "El Conejo"
   ],
   "presentation": "« El Conejo », attaquant argentin passé par Barcelone et le Real Madrid.",
   "carriere": [
    {"club": "river-plate", "de": 1998, "a": 2001},
    {"club": "barcelone", "de": 2001, "a": 2007},
    {"club": "real-madrid", "de": 2007, "a": 2009},
    {"club": "benfica", "de": 2009, "a": 2012},
    {"club": "malaga-cf", "de": 2012, "a": 2013},
    {"club": "olympiakos", "de": 2013, "a": 2014},
    {"club": "hellas-verone", "de": 2014, "a": 2015},
    {"club": "river-plate", "de": 2015, "a": 2016}
   ]
  },
  {
   "nom": "Pablo Aimar",
   "niveau": "expert",
   "nomDeFamille": [
    "Aimar"
   ],
   "autresReponses": [
    "Aimar",
    "El Payaso"
   ],
   "presentation": "Meneur de jeu argentin, idole de Lionel Messi, champion d'Espagne avec Valence.",
   "carriere": [
    {"club": "river-plate", "de": 1996, "a": 2000},
    {"club": "valence-cf", "de": 2001, "a": 2006},
    {"club": "real-saragosse", "de": 2006, "a": 2008},
    {"club": "benfica", "de": 2008, "a": 2013},
    {"club": "johor-darul-ta-zim", "de": 2013, "a": 2014},
    {"club": "river-plate", "de": 2015, "a": 2015},
    {"club": "estudiantes-de-rio-cuarto", "de": 2018, "a": 2018}
   ]
  },
  {
   "nom": "Esteban Cambiasso",
   "niveau": "expert",
   "nomDeFamille": [
    "Cambiasso"
   ],
   "autresReponses": [
    "Cambiasso",
    "Cuchu"
   ],
   "presentation": "Milieu argentin au crâne rasé, vainqueur du triplé avec l'Inter Milan en 2010.",
   "carriere": [
    {"club": "independiente", "de": 1998, "a": 2001},
    {"club": "river-plate", "de": 2001, "a": 2002},
    {"club": "real-madrid", "de": 2002, "a": 2004},
    {"club": "inter-milan", "de": 2004, "a": 2014},
    {"club": "leicester-city", "de": 2014, "a": 2015},
    {"club": "olympiakos", "de": 2015, "a": 2017}
   ]
  },
  {
   "nom": "Javier Zanetti",
   "niveau": "expert",
   "nomDeFamille": [
    "Zanetti"
   ],
   "autresReponses": [
    "Zanetti",
    "Il Trattore",
    "Pupi"
   ],
   "presentation": "Capitaine historique de l'Inter Milan, recordman de matchs joués avec le club.",
   "carriere": [
    {"club": "talleres-remedios-de-escalada", "de": 1992, "a": 1993},
    {"club": "banfield", "de": 1993, "a": 1995},
    {"club": "inter-milan", "de": 1995, "a": 2014}
   ]
  },
  {
   "nom": "Mauro Icardi",
   "niveau": "expert",
   "nomDeFamille": [
    "Icardi"
   ],
   "autresReponses": [
    "Icardi"
   ],
   "presentation": "Buteur argentin, ancien capitaine de l'Inter Milan.",
   "carriere": [
    {"club": "sampdoria", "de": 2011, "a": 2013},
    {"club": "inter-milan", "de": 2013, "a": 2019},
    {"club": "paris-sg", "de": 2019, "a": 2022},
    {"club": "galatasaray", "de": 2022, "a": 2026}
   ]
  },
  {
   "nom": "Erik Lamela",
   "niveau": "expert",
   "nomDeFamille": [
    "Lamela"
   ],
   "autresReponses": [
    "Lamela",
    "Coco"
   ],
   "presentation": "Ailier argentin, lauréat du prix Puskás 2021 pour un but de la « rabona ».",
   "carriere": [
    {"club": "river-plate", "de": 2009, "a": 2011},
    {"club": "as-rome", "de": 2011, "a": 2013},
    {"club": "tottenham", "de": 2013, "a": 2021},
    {"club": "fc-seville", "de": 2021, "a": 2024},
    {"club": "aek-athenes", "de": 2024, "a": 2025}
   ]
  },
  {
   "nom": "Joaquín",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Joaquin Sanchez"
   ],
   "presentation": "Ailier espagnol facétieux, légende du Betis Séville.",
   "carriere": [
    {"club": "betis-seville", "de": 2000, "a": 2006},
    {"club": "valence-cf", "de": 2006, "a": 2011},
    {"club": "malaga-cf", "de": 2011, "a": 2013},
    {"club": "fiorentina", "de": 2013, "a": 2015},
    {"club": "betis-seville", "de": 2015, "a": 2023}
   ]
  },
  {
   "nom": "Santi Cazorla",
   "niveau": "expert",
   "nomDeFamille": [
    "Cazorla"
   ],
   "autresReponses": [
    "Cazorla",
    "Santiago Cazorla"
   ],
   "presentation": "Milieu espagnol ambidextre, champion d'Europe 2008 et 2012.",
   "carriere": [
    {"club": "villarreal", "de": 2003, "a": 2006},
    {"club": "recreativo-huelva", "de": 2006, "a": 2007},
    {"club": "villarreal", "de": 2007, "a": 2011},
    {"club": "malaga-cf", "de": 2011, "a": 2012},
    {"club": "arsenal", "de": 2012, "a": 2018},
    {"club": "villarreal", "de": 2018, "a": 2020},
    {"club": "al-sadd", "de": 2020, "a": 2023},
    {"club": "real-oviedo", "de": 2023, "a": 2026}
   ]
  },
  {
   "nom": "Michu",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Miguel Perez Cuesta"
   ],
   "presentation": "Attaquant espagnol, révélation de la Premier League avec Swansea en 2012-2013.",
   "carriere": [
    {"club": "real-oviedo", "de": 2003, "a": 2007},
    {"club": "celta-vigo", "de": 2008, "a": 2011},
    {"club": "rayo-vallecano", "de": 2011, "a": 2012},
    {"club": "swansea-city", "de": 2012, "a": 2015},
    {"club": "up-langreo", "de": 2015, "a": 2016},
    {"club": "real-oviedo", "de": 2016, "a": 2017}
   ]
  },
  {
   "nom": "Roberto Soldado",
   "niveau": "expert",
   "nomDeFamille": [
    "Soldado"
   ],
   "autresReponses": [
    "Soldado"
   ],
   "presentation": "Buteur espagnol, star de Valence avant de rejoindre Tottenham.",
   "carriere": [
    {"club": "real-madrid", "de": 2005, "a": 2008},
    {"club": "getafe", "de": 2008, "a": 2010},
    {"club": "valence-cf", "de": 2010, "a": 2013},
    {"club": "tottenham", "de": 2013, "a": 2015},
    {"club": "villarreal", "de": 2015, "a": 2017},
    {"club": "fenerbahce", "de": 2017, "a": 2019},
    {"club": "grenade-cf", "de": 2019, "a": 2021},
    {"club": "levante", "de": 2021, "a": 2023}
   ]
  },
  {
   "nom": "Júlio Baptista",
   "niveau": "expert",
   "nomDeFamille": [
    "Baptista"
   ],
   "autresReponses": [
    "La Bête",
    "La Bestia"
   ],
   "presentation": "« La Bête », milieu offensif brésilien puissant.",
   "carriere": [
    {"club": "sao-paulo-fc", "de": 2000, "a": 2003},
    {"club": "fc-seville", "de": 2003, "a": 2005},
    {"club": "real-madrid", "de": 2005, "a": 2008},
    {"club": "as-rome", "de": 2008, "a": 2011},
    {"club": "malaga-cf", "de": 2011, "a": 2013},
    {"club": "cruzeiro", "de": 2013, "a": 2015},
    {"club": "orlando-city", "de": 2016, "a": 2016},
    {"club": "cfr-cluj", "de": 2018, "a": 2019}
   ]
  },
  {
   "nom": "Elano",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Elano Blumer"
   ],
   "presentation": "Milieu brésilien au pied droit précis, passé par Manchester City.",
   "carriere": [
    {"club": "santos", "de": 2001, "a": 2005},
    {"club": "chakhtar-donetsk", "de": 2005, "a": 2007},
    {"club": "manchester-city", "de": 2007, "a": 2009},
    {"club": "galatasaray", "de": 2009, "a": 2011},
    {"club": "santos", "de": 2011, "a": 2012},
    {"club": "gremio", "de": 2012, "a": 2014},
    {"club": "flamengo", "de": 2014, "a": 2014},
    {"club": "chennaiyin", "de": 2014, "a": 2014},
    {"club": "santos", "de": 2015, "a": 2016}
   ]
  },
  {
   "nom": "Fred",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Frederico Chaves Guedes"
   ],
   "presentation": "Avant-centre brésilien, champion de France avec Lyon puis idole de Fluminense.",
   "carriere": [
    {"club": "america-mineiro", "de": 2003, "a": 2004},
    {"club": "cruzeiro", "de": 2004, "a": 2005},
    {"club": "olympique-lyonnais", "de": 2005, "a": 2009},
    {"club": "fluminense", "de": 2009, "a": 2016},
    {"club": "atletico-mineiro", "de": 2016, "a": 2017},
    {"club": "cruzeiro", "de": 2018, "a": 2020},
    {"club": "fluminense", "de": 2020, "a": 2022}
   ]
  },
  {
   "nom": "Hulk",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Givanildo Vieira de Sousa"
   ],
   "presentation": "Attaquant brésilien à la frappe surpuissante, révélé au Japon puis au FC Porto.",
   "carriere": [
    {"club": "vitoria-bahia", "de": 2004, "a": 2005},
    {"club": "kawasaki-frontale", "de": 2005, "a": 2006},
    {"club": "tokyo-verdy", "de": 2006, "a": 2008},
    {"club": "fc-porto", "de": 2008, "a": 2012},
    {"club": "zenith-saint-petersbourg", "de": 2012, "a": 2016},
    {"club": "shanghai-port", "de": 2016, "a": 2020},
    {"club": "atletico-mineiro", "de": 2021, "a": 2026},
    {"club": "fluminense", "de": 2026, "a": null}
   ]
  },
  {
   "nom": "Oscar",
   "niveau": "expert",
   "nomDeFamille": [],
   "autresReponses": [
    "Oscar dos Santos Emboaba"
   ],
   "presentation": "Milieu offensif brésilien, révélé à Chelsea avant de partir pour la Chine.",
   "carriere": [
    {"club": "sao-paulo-fc", "de": 2008, "a": 2010},
    {"club": "internacional", "de": 2010, "a": 2012},
    {"club": "chelsea", "de": 2012, "a": 2017},
    {"club": "shanghai-port", "de": 2017, "a": 2024},
    {"club": "sao-paulo-fc", "de": 2025, "a": 2025}
   ]
  },
  {
   "nom": "Alexandre Pato",
   "niveau": "expert",
   "nomDeFamille": [
    "Pato"
   ],
   "autresReponses": [
    "Pato"
   ],
   "presentation": "Attaquant brésilien précoce, star de l'AC Milan à 18 ans.",
   "carriere": [
    {"club": "internacional", "de": 2006, "a": 2007},
    {"club": "ac-milan", "de": 2007, "a": 2013},
    {"club": "corinthians", "de": 2013, "a": 2016},
    {"club": "villarreal", "de": 2016, "a": 2017},
    {"club": "tianjin-tianhai", "de": 2017, "a": 2019},
    {"club": "sao-paulo-fc", "de": 2019, "a": 2020},
    {"club": "orlando-city", "de": 2021, "a": 2022},
    {"club": "sao-paulo-fc", "de": 2023, "a": 2023}
   ]
  },
  {
   "nom": "Shinji Kagawa",
   "niveau": "expert",
   "nomDeFamille": [
    "Kagawa"
   ],
   "autresReponses": [
    "Kagawa"
   ],
   "presentation": "Milieu offensif japonais, double champion d'Allemagne avec Dortmund.",
   "carriere": [
    {"club": "cerezo-osaka", "de": 2007, "a": 2010},
    {"club": "borussia-dortmund", "de": 2010, "a": 2012},
    {"club": "manchester-united", "de": 2012, "a": 2014},
    {"club": "borussia-dortmund", "de": 2014, "a": 2019},
    {"club": "real-saragosse", "de": 2019, "a": 2020},
    {"club": "paok-salonique", "de": 2021, "a": 2021},
    {"club": "saint-trond", "de": 2022, "a": 2023},
    {"club": "cerezo-osaka", "de": 2023, "a": null}
   ]
  },
  {
   "nom": "Park Ji-sung",
   "niveau": "expert",
   "nomDeFamille": [
    "Park"
   ],
   "autresReponses": [
    "Park",
    "Ji-sung Park"
   ],
   "presentation": "Milieu sud-coréen infatigable, quadruple champion d'Angleterre avec Manchester United.",
   "carriere": [
    {"club": "kyoto-purple-sanga", "de": 2000, "a": 2003},
    {"club": "psv-eindhoven", "de": 2003, "a": 2005},
    {"club": "manchester-united", "de": 2005, "a": 2012},
    {"club": "queens-park-rangers", "de": 2012, "a": 2014}
   ]
  }
 ]
};
