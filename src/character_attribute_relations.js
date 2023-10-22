const relations = {
  alliance : [
    new Set([
      "Jedi",
      "Republic",
    ]),
    new Set([
      "Separatists",
      "Sith",
    ]),
    new Set([
      "Hutt Clan",
      "Krayt's Claw",
    ]),
    new Set([
      "Death Watch",
      "House Kryze",
      "House Vizsla",
      "Mandalorians",
    ]),
    new Set([
      "Onderon Rebels",
    ]),
    new Set([
      "Ohnaka Gang",
    ]),
    new Set([
      "Confederacy of Independent Systems",
    ]),
    new Set([
      "Nightsisters",
    ])
  ],
  planet : [
      new Set([
        "Abednedo",
        "Arkania",
        "Avedot",
        "Bardotta",
        "Boiyuh",
        "Borleias",
        "Byblos",
        "Cabarria",
        "Candovant",
        "Carida",
        "Castell",
        "Cato Neimoidia",
        "Commenor",
        "Devaron",
        "Deymasoll",
        "Exodeen",
        "Foless",
        "Fondor",
        "Foundry",
        "Galagolos",
        "Ghorman",
        "Giju",
        "Gwongdeen",
        "Halais",
        "Hok",
        "Hynestia",
        "Kelada",
        "Korbori",
        "Loronar",
        "Mefti",
        "Nantoon",
        "Narq",
        "Neimoidia",
        "Nithorni",
        "Noctu",
        "Palanhi",
        "Phu",
        "Quellor",
        "Raithal",
        "Suntilla",
        "Thrinittik",
        "Ubardia",
        "Wecacoe",
        "Zardossa Stix",
      ]),
      new Set([
        "Aargau",
        "Abregado",
        "Alderaan",
        "Balosar",
        "Barbadel",
        "Bar'leth",
        "Brentaal",
        "Cal-Seti",
        "Chandrila",
        "Corellia",
        "Corulag",
        "Coruscant",
        "Dowut",
        "Duro",
        "Espinar",
        "Ganthel",
        "Gatalenta",
        "Hosnian Pr.",
        "Kitel Phard",
        "Kuat",
        "Lanz Carpo",
        "Lespectus",
        "Nadiri",
        "Nubia",
        "N'Zoth",
        "Obumubo",
        "Pantolomin",
        "Plexis",
        "Protobranch",
        "Rendili",
        "Salliche",
        "Skako",
        "Tepasi",
        "Tinnel",
        "Vardos",
        "Xa Fel",
      ]),
      new Set([
        "Byss",
        "Cerberon",
        "Cosia",
        "Dybrin",
        "Empress Teta",
        "Fex",
        "Nacon",
        "Ojom",
        "Tython",
        "Vulpter",
      ]),
      new Set([
        "Allanteen",
        "Azum",
        "Batuv",
        "Blutopia",
        "Calumdarian",
        "Chrome Citadel",
        "Chyron",
        "Couronne",
        "Cymoon",
        "Derra",
        "Dhandu",
        "Dorin",
        "Gavriza",
        "Genetia",
        "Grimdock",
        "Gyndine",
        "Hartaga",
        "Hovun",
        "Iktotch",
        "Ivarujar",
        "Jarbanov",
        "Kerev Doi",
        "Kerkoidia",
        "Kinyen",
        "Kira",
        "Kullgroon",
        "Ledeve",
        "Megalox Beta",
        "Mikkia",
        "Milagro",
        "Mimban",
        "Mol'leaj",
        "Nakadia",
        "Neijaia",
        "Nkllon",
        "Pasaana",
        "Pax",
        "Persis",
        "Petrusia",
        "Ploo",
        "Pormthulis",
        "Rajtiri",
        "Ring of Kafrene",
        "Shili",
        "Sibensko",
        "Stennaros",
        "Stobar",
        "Trillia",
        "Tynna",
        "Umbara",
        "Ushruu",
        "Vandelhelm",
        "Vendaxa",
        "Vulpinus Neb.",
        "Zavian Abyss",
        "Zenezia",
      ]),
      new Set([
        "Ankhural",
        "Circumtore",
        "Dandoran",
        "Dotharian",
        "Kintan",
        "Klatooine",
        "Nal Hutta",
        "Nar Kaaga",
        "Nimban",
        "Rorak",
        "Saki",
        "Sleheyron",
        "Toydaria",
        "Vodran",
        "Ylesia",
      ]),
      new Set([
        "Antar",
        "Arkax Sta.",
        "Arvaka Pr.",
        "Bastatha",
        "Bestine",
        "Bilbringi",
        "Birren",
        "Bogden",
        "Boosodia",
        "Bravais",
        "Britaxis Min.",
        "Chaaktil",
        "Chadawa",
        "Champala",
        "Chardaan",
        "Charissia",
        "Colla",
        "Cona",
        "Cyclorria",
        "Denon",
        "Dinwa Pr.",
        "Dragon Void",
        "Ephemera",
        "Espirion",
        "Fedovoi End",
        "Gorobei",
        "Gorse",
        "Guagenia",
        "Hapes",
        "Harkrova",
        "Hevurion",
        "Iloh",
        "Imroosia",
        "Jakku",
        "Kooriva",
        "Kudo",
        "Kuliquo",
        "Li-Toran",
        "Lonera",
        "Maires",
        "Mardona",
        "Marquinn",
        "Milvayne",
        "Mindor",
        "Minfar",
        "Netalych",
        "Obroa-skai",
        "Onderon",
        "Oulanne",
        "Pasher",
        "Patrolia",
        "Pheryon",
        "Pijal",
        "Polyneus",
        "Quarzite",
        "Rentaxius",
        "Riosa",
        "Sergia",
        "Shahkir",
        "Skaradosh",
        "Taanab",
        "The Almagest",
        "Throffdon",
        "Thyferra",
        "Tirahnn",
        "Ubduria",
        "Vagadarr",
        "Vetine",
        "Virkoi",
        "Vurdon Ka",
        "Wroona",
        "Yag'Dhul",
        "Zeltros",
      ]),
      new Set([
        "Abelor",
        "Adinax Neb.",
        "Aleen",
        "Aloxor",
        "Ando",
        "Ansion",
        "Anzat",
        "Anzell",
        "Barabesh",
        "Beltire",
        "Bimmisaari",
        "Bomis Koori",
        "Bothawui",
        "Boz Pity",
        "Bracca",
        "Caphexdis",
        "Castilon",
        "Centares",
        "Centori",
        "Cerea",
        "Chalacta",
        "Charros",
        "Chroman",
        "Coachelle",
        "Codia",
        "Contruum",
        "Crul",
        "Cyclor",
        "Daalang",
        "Del Zennis",
        "Delphidian Cl.",
        "Demiloch",
        "Dor Nameth",
        "Dressel",
        "Druckenwell",
        "Dulathia",
        "Durkteel",
        "Elessia",
        "Enrivi",
        "Entrop. Hive",
        "Falleen",
        "Farstine",
        "Fornax",
        "Gizer",
        "Glee Anselm",
        "Grange",
        "Great Forveen Neb.",
        "Grizal",
        "Haidoral Pr.",
        "Haruun Kal",
        "Hisseen",
        "Hyborea",
        "Hylobi",
        "Ikkrukk",
        "Inusagi",
        "Iridonia",
        "Ithor",
        "Ivexia",
        "Jedha",
        "Jekara",
        "Kalarba",
        "Kaliida Neb.",
        "Karfeddion",
        "Kartoosh",
        "Kashyyyk",
        "Keteeria",
        "Kijimi",
        "Kirima",
        "Kril'Dor",
        "Kriselist",
        "Kupoh",
        "Lannik",
        "Lantillies",
        "Leritor",
        "Lorta",
        "M. Mandel",
        "Mahranee",
        "Malastare",
        "Manda",
        "Mesula",
        "Metalorn",
        "Mileva",
        "Mon Gazza",
        "Montross",
        "Mooga",
        "Munt Ontdal",
        "Naalol",
        "Naboo",
        "Nacronis",
        "Nanth'ri",
        "Nexus Ortai",
        "Novka",
        "Numidian Pr.",
        "Onod",
        "Ord Mantell",
        "Orinda",
        "Pacara",
        "Pam'ba",
        "Quarmendy",
        "Randon",
        "Recluse's Neb.",
        "Riflor",
        "Ringo Vinda",
        "Ro-Loo Tri.",
        "Ruusan",
        "Sabata",
        "Sarka",
        "Serelia",
        "Shantipole",
        "Shu-Torun",
        "Sinta",
        "Sneeve",
        "T. Tchii",
        "Tah'Nuhna",
        "Takodana",
        "Tansyl",
        "Tarsunt",
        "Tehar",
        "The Wheel",
        "Tibrin",
        "Tiferep",
        "Triffis",
        "Turco Pr.",
        "Typhonic Neb.",
        "Uba",
        "Ubrikkia",
        "Ultaar",
        "Uyter",
        "Vandor",
        "Varnak",
        "Velmor",
        "Vondarc",
        "Warlentta",
        "Wobani",
        "Wynkahthu",
        "Yuw",
        "Zolan",
      ]),
      new Set([
        "Aakaash",
        "Ab Dalis",
        "Abafar",
        "Abyss",
        "Actlyon",
        "Aeos",
        "Af'El",
        "Agamar",
        "Agoliba-Tu",
        "Ajan Kloss",
        "Akiva",
        "Alamass",
        "Alpinn",
        "Amaxine St.",
        "Anaxes",
        "Andelm",
        "Anoat",
        "Ansett",
        "Anthan",
        "Aralia",
        "Arbiflux",
        "Archeon Neb.",
        "Ardennia",
        "Arkanis",
        "Arvina",
        "Ashas Ree",
        "Askaj",
        "Asusto",
        "Atollon",
        "Atravis",
        "Attera",
        "Azzameen Sta.",
        "Banchii",
        "Bandomeer",
        "Baraan-Fa",
        "Barab",
        "Barnahof",
        "Basteel",
        "Bastion",
        "Batuu",
        "Begamor",
        "Belladoon",
        "Bescane",
        "Bespin",
        "Black Stall Sta.",
        "Bogano",
        "Bonadan",
        "Boonta",
        "Borosk",
        "Botajef",
        "Cadomai",
        "Cantonica",
        "Cardovyte",
        "Carlac",
        "Celanon",
        "Celsor",
        "Cermau",
        "Chad",
        "Chagar",
        "Chanceuxi",
        "Chandar's Folly",
        "Cholganna",
        "Christophsis",
        "Ciutric",
        "Clak'dor",
        "Concord Dawn",
        "Cosmatanic Steppes",
        "Crait",
        "Croce",
        "Crucival",
        "Crushank Neb.",
        "Cyrkon",
        "Dagobah",
        "Dalna",
        "Dannamore",
        "Dantooine",
        "Danzik",
        "Daro",
        "Dathomir",
        "Daxam",
        "Dene Gois Cl.",
        "Desevro",
        "D'Qar",
        "Drahgor",
        "Dubrillion",
        "Eadu",
        "Eiram",
        "Elom",
        "Elphrona",
        "Endor",
        "Entralla",
        "Eriadu",
        "Felucia",
        "Five Pts.",
        "Florn",
        "Florrum",
        "Formos",
        "Gad",
        "Galaan",
        "Gallus",
        "Gamorr",
        "Gand",
        "Garel",
        "Garqi",
        "Geonosis",
        "Gigor",
        "Grava",
        "Gravlex Med",
        "Guat'a",
        "Hasskyn",
        "Hebekrr",
        "Hetzal",
        "Heva",
        "Hissrich",
        "H'nemthe",
        "Honoghr",
        "Horox",
        "Hoth",
        "Hypori",
        "Iakar",
        "Ibaar",
        "Icindra",
        "Idaflor",
        "Iego",
        "Imynusoph",
        "Irudiru",
        "I'vorcia",
        "Jaemus",
        "Jalindi",
        "Jaresh",
        "Jelucan",
        "Jeosyn",
        "Kaddak",
        "Kaller",
        "Kal'Shebbol",
        "Kardoa",
        "Karkaris",
        "Kellgar",
        "Kerest",
        "Kessel",
        "Killun Sta.",
        "Kirdo",
        "Koda Sta.",
        "Kolkur",
        "Korrus",
        "Kowak",
        "Krownest",
        "Ktath'atn",
        "Kubindi",
        "Kur Neb.",
        "Lah'mu",
        "Lianna",
        "Llanic",
        "Lokud",
        "Lola Sayu",
        "Lorrd",
        "Lothal",
        "Lotho Min.",
        "Lowick",
        "Lutrillia",
        "Mako-Ta",
        "Malachor",
        "Mandalore",
        "Manpha",
        "Maridun",
        "Marleyvane",
        "Merj",
        "Merokia",
        "Minos Cl.",
        "Mirial",
        "Mirrin Pr.",
        "Mohsenia",
        "Mokivj",
        "Molavar",
        "Mon Cala",
        "Monsua Neb.",
        "Moraband",
        "Moraysi",
        "Murkhana",
        "Mustafar",
        "Muunilinst",
        "Mygeeto",
        "Mykapo",
        "Nag Ubdur",
        "Najan-Rovi",
        "Nar Kanji",
        "Naraka",
        "Necropolis",
        "Nepotis",
        "Nevarro",
        "Nixus",
        "Oba Diah",
        "Octero",
        "Odona",
        "Oetchi",
        "Omereth",
        "Oosalon",
        "Ord Cestus",
        "Ord Radama",
        "Ord Trasi",
        "Orish",
        "Orto",
        "Oru",
        "Oseon",
        "Otomok",
        "Otor's Hub",
        "Ovanis",
        "Pamarthe",
        "Pandem Nai",
        "Panna",
        "Pantora",
        "Pastoria",
        "Phatrong",
        "Pipada",
        "Pippip",
        "Polis Massa",
        "Ponemah",
        "Pressylla",
        "Qhulosk",
        "Quell",
        "Quermia",
        "Raada",
        "Rattatak",
        "Raxus",
        "Raydonia",
        "Reesaria",
        "Refnu",
        "Rina Maj.",
        "Rinn",
        "Rion",
        "Rior",
        "Rishi",
        "Rodia",
        "Rothana",
        "Rugosa",
        "Ruuria",
        "Rycep",
        "Ryloth",
        "Rystan",
        "Sakreen",
        "Saleucami",
        "Salient",
        "Samovar",
        "Sarrassia",
        "Savareen",
        "Scarif",
        "Scipio",
        "Seelos",
        "Sembla",
        "Sereeda",
        "Serenno",
        "Sernpidal",
        "Sesid",
        "Shadda-Bi-Boran",
        "Shaum Hii",
        "Shimia",
        "Sh'ung-tesk",
        "Shuraden",
        "Skuhl",
        "Skye",
        "Sluis Van",
        "Socorro",
        "Solarine",
        "Son-tuul",
        "Spalex",
        "Sriluur",
        "Ssori",
        "StarCave Neb.",
        "Sterdic",
        "Stic",
        "Strokill Pr.",
        "Stygeon",
        "Subterrel",
        "Sullust",
        "Sump",
        "Sunspot",
        "Sy Myrth",
        "Syvris",
        "Takobo",
        "Tal Pi",
        "Talpiddi",
        "Tangrene",
        "Taris",
        "Tatooine",
        "Taul",
        "Tenoo",
        "Terminus",
        "Teth",
        "Tevel",
        "Thabeska",
        "The Inamorata",
        "Thune",
        "Toola",
        "Toong'l",
        "Trenchenovu",
        "Troglofa",
        "Troiken",
        "Trymant",
        "Tsevuka",
        "Tund",
        "Tureen",
        "Uaua",
        "Unox",
        "Utapau",
        "Uvena",
        "Vallt",
        "Valo",
        "Vanqor",
        "Varkana",
        "Vashka",
        "Vassek",
        "Vernid",
        "Vespaara",
        "Vinsoth",
        "Vint",
        "Virgillia",
        "Vorlag",
        "Voxx Cl.",
        "Vrogas Vas",
        "W. of Tayron",
        "Wadi Raffa",
        "Werma",
        "Wick",
        "Winsit",
        "Wrea",
        "Xagobah",
        "Yaga Minor",
        "Yalbec Pr.",
        "Yar Togna",
        "Yarma",
        "Yavin",
        "Yerbana",
        "Yuvern",
        "Zanbar",
        "Zastiga",
        "Zeffo",
        "Zhadalene",
        "Zygerria",
      ]),
      new Set([
        "Ahch-To",
        "Csilla",
        "Dassal",
        "Demir",
        "Didyma",
        "Exegol",
        "Griq",
        "Ilum",
        "Maher",
        "Osseriton",
        "Parnassos",
        "Rarlech",
      ]),
      new Set([
        "Agaris",
        "Artiod Min.",
        "Askkto-Fen",
        "Bakura",
        "Berzite",
        "Chrelythiumn",
        "Farana",
        "Gotar",
        "Havoc Outpost",
        "Huk",
        "Kalee",
        "Klytus",
        "Lasan",
        "Lew'el",
        "Lira San",
        "Livno",
        "Mulita",
        "Mytus",
        "Red Neb.",
        "Trian",
        "Xala",
        "Xirl",
        "Freerock",
        "Kakra",
        "Lysatra",
        "Queluhan Neb.",
        "Benath",
        "Utegetu Neb.",
      ])
  ],
  species : [
    new Set([
      "Duros",
      "Gungan",
      "Human",
      "Human (Clone)",
      "Nautolan",
      "Togruta",
      "Twi'lek",
      "Weequay",
      "Zabrak",
    ]),
    new Set([
      "Geonosian",
    ]),
    new Set([
      "Astromech Droid",
      "Protocol Droid",
    ]),
    new Set([
      "Kalee Cyborg",
    ]),
    new Set([
      "Unknown",
    ])
  ],
  occupation : [
    new Set([
      "Jedi Grand Master",
      "Jedi Knight",
      "Jedi Master",
      "Jedi Padawan",
    ]),
    new Set([
      "ARC Trooper",
      "Clone Captain",
      "Clone Commander",
      "Republic Admiral",
    ]),
    new Set([
      "Sith Acolyte",
      "Sith Apprentice",
      "Sith Lord",
    ]),
    new Set([
      "Separatist General",
      "Separatist Spy",
    ]),
    new Set([
      "Astromech Droid",
      "Protocol Droid",
    ]),
    new Set([
      "Galactic Representative",
      "Galactic Senator",
    ]),
    new Set([
      "Bounty Hunter",
    ]),
    new Set([
      "Freedom Fighter",
    ]),
    new Set([
      "Duchess of Mandalore",
      "Governor of Mandalore",
      "Leader of Death Watch",
      "Nite Owl Warrior",
    ]),
    new Set([
      "Pirate",
    ]),
    new Set([
      "Archduke of Geonosis",
    ]),
    new Set([
      "Nightsisters Clan Mother",
    ])
  ],
};

export default relations;