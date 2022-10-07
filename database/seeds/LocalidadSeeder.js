'use strict'

/*
|--------------------------------------------------------------------------
| ProvinciaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Localidad = use("App/Models/Localidad")
const data = [
  {
    id: 1,
    cp: 240,
    name: "Alegría-Dulantzi",
    provincia_id: 1
  },
  {
    id: 2,
    cp: 548,
    name: "Candeleda",
    provincia_id: 5
  },
  {
    id: 3,
    cp: 1001,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 4,
    cp: 1002,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 5,
    cp: 1003,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 6,
    cp: 1004,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 7,
    cp: 1005,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 8,
    cp: 1006,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 9,
    cp: 1007,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 10,
    cp: 1008,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 11,
    cp: 1009,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 12,
    cp: 1010,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 13,
    cp: 1012,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 14,
    cp: 1012,
    name: "Labastida Bastida",
    provincia_id: 1
  },
  {
    id: 15,
    cp: 1013,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 16,
    cp: 1015,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 17,
    cp: 1110,
    name: "Campezo Kanpezu",
    provincia_id: 1
  },
  {
    id: 18,
    cp: 1117,
    name: "Campezo Kanpezu",
    provincia_id: 1
  },
  {
    id: 19,
    cp: 1117,
    name: "Harana Valle de Arana",
    provincia_id: 1
  },
  {
    id: 20,
    cp: 1118,
    name: "Condado de Trevi?o",
    provincia_id: 9
  },
  {
    id: 21,
    cp: 1118,
    name: "Bernedo",
    provincia_id: 1
  },
  {
    id: 22,
    cp: 1118,
    name: "Lagrán",
    provincia_id: 1
  },
  {
    id: 23,
    cp: 1120,
    name: "Arraia-Maeztu",
    provincia_id: 1
  },
  {
    id: 24,
    cp: 1128,
    name: "Campezo Kanpezu",
    provincia_id: 1
  },
  {
    id: 25,
    cp: 1128,
    name: "Arraia-Maeztu",
    provincia_id: 1
  },
  {
    id: 26,
    cp: 1128,
    name: "Bernedo",
    provincia_id: 1
  },
  {
    id: 27,
    cp: 1129,
    name: "Arraia-Maeztu",
    provincia_id: 1
  },
  {
    id: 28,
    cp: 1130,
    name: "Zuia",
    provincia_id: 1
  },
  {
    id: 29,
    cp: 1138,
    name: "Zigoitia",
    provincia_id: 1
  },
  {
    id: 30,
    cp: 1139,
    name: "Zuia",
    provincia_id: 1
  },
  {
    id: 31,
    cp: 1160,
    name: "Aramaio",
    provincia_id: 1
  },
  {
    id: 32,
    cp: 1165,
    name: "Aramaio",
    provincia_id: 1
  },
  {
    id: 33,
    cp: 1169,
    name: "Aramaio",
    provincia_id: 1
  },
  {
    id: 34,
    cp: 1170,
    name: "Legutio",
    provincia_id: 1
  },
  {
    id: 35,
    cp: 1171,
    name: "Legutio",
    provincia_id: 1
  },
  {
    id: 36,
    cp: 1191,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 37,
    cp: 1191,
    name: "Iru?a Oka Iru?a de Oca",
    provincia_id: 1
  },
  {
    id: 38,
    cp: 1192,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 39,
    cp: 1192,
    name: "Elburgo Burgelu",
    provincia_id: 1
  },
  {
    id: 40,
    cp: 1193,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 41,
    cp: 1193,
    name: "Elburgo Burgelu",
    provincia_id: 1
  },
  {
    id: 42,
    cp: 1193,
    name: "Iruraiz-Gauna",
    provincia_id: 1
  },
  {
    id: 43,
    cp: 1193,
    name: "Alegría-Dulantzi",
    provincia_id: 1
  },
  {
    id: 44,
    cp: 1194,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 45,
    cp: 1194,
    name: "Bernedo",
    provincia_id: 1
  },
  {
    id: 46,
    cp: 1195,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 47,
    cp: 1195,
    name: "Iru?a Oka Iru?a de Oca",
    provincia_id: 1
  },
  {
    id: 48,
    cp: 1196,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 49,
    cp: 1196,
    name: "Zigoitia",
    provincia_id: 1
  },
  {
    id: 50,
    cp: 1200,
    name: "Agurain Salvatierra",
    provincia_id: 1
  },
  {
    id: 51,
    cp: 1206,
    name: "Barrundia",
    provincia_id: 1
  },
  {
    id: 52,
    cp: 1206,
    name: "Iruraiz-Gauna",
    provincia_id: 1
  },
  {
    id: 53,
    cp: 1207,
    name: "San Millán Donemiliaga",
    provincia_id: 1
  },
  {
    id: 54,
    cp: 1207,
    name: "Agurain Salvatierra",
    provincia_id: 1
  },
  {
    id: 55,
    cp: 1207,
    name: "Iruraiz-Gauna",
    provincia_id: 1
  },
  {
    id: 56,
    cp: 1208,
    name: "San Millán Donemiliaga",
    provincia_id: 1
  },
  {
    id: 57,
    cp: 1208,
    name: "Asparrena",
    provincia_id: 1
  },
  {
    id: 58,
    cp: 1208,
    name: "Zalduondo",
    provincia_id: 1
  },
  {
    id: 59,
    cp: 1208,
    name: "Barrundia",
    provincia_id: 1
  },
  {
    id: 60,
    cp: 1211,
    name: "Armi?ón",
    provincia_id: 1
  },
  {
    id: 61,
    cp: 1211,
    name: "Berantevilla",
    provincia_id: 1
  },
  {
    id: 62,
    cp: 1211,
    name: "Pe?acerrada-Urizaharra",
    provincia_id: 1
  },
  {
    id: 63,
    cp: 1211,
    name: "Condado de Trevi?o",
    provincia_id: 9
  },
  {
    id: 64,
    cp: 1211,
    name: "Lagrán",
    provincia_id: 1
  },
  {
    id: 65,
    cp: 1212,
    name: "Zambrana",
    provincia_id: 1
  },
  {
    id: 66,
    cp: 1212,
    name: "Berantevilla",
    provincia_id: 1
  },
  {
    id: 67,
    cp: 1212,
    name: "Pe?acerrada-Urizaharra",
    provincia_id: 1
  },
  {
    id: 68,
    cp: 1212,
    name: "Labastida Bastida",
    provincia_id: 1
  },
  {
    id: 69,
    cp: 1213,
    name: "Lantarón",
    provincia_id: 1
  },
  {
    id: 70,
    cp: 1213,
    name: "Erriberagoitia Ribera Alta",
    provincia_id: 1
  },
  {
    id: 71,
    cp: 1213,
    name: "Ribera Baja Erribera Beitia",
    provincia_id: 1
  },
  {
    id: 72,
    cp: 1216,
    name: "Bernedo",
    provincia_id: 1
  },
  {
    id: 73,
    cp: 1216,
    name: "Pe?acerrada-Urizaharra",
    provincia_id: 1
  },
  {
    id: 74,
    cp: 1220,
    name: "Armi?ón",
    provincia_id: 1
  },
  {
    id: 75,
    cp: 1220,
    name: "Erriberagoitia Ribera Alta",
    provincia_id: 1
  },
  {
    id: 76,
    cp: 1220,
    name: "Berantevilla",
    provincia_id: 1
  },
  {
    id: 77,
    cp: 1220,
    name: "Ribera Baja Erribera Beitia",
    provincia_id: 1
  },
  {
    id: 78,
    cp: 1230,
    name: "Iru?a Oka Iru?a de Oca",
    provincia_id: 1
  },
  {
    id: 79,
    cp: 1250,
    name: "Asparrena",
    provincia_id: 1
  },
  {
    id: 80,
    cp: 1260,
    name: "Asparrena",
    provincia_id: 1
  },
  {
    id: 81,
    cp: 1300,
    name: "Laguardia",
    provincia_id: 1
  },
  {
    id: 82,
    cp: 1306,
    name: "Lapuebla de Labarca",
    provincia_id: 1
  },
  {
    id: 83,
    cp: 1307,
    name: "Samaniego",
    provincia_id: 1
  },
  {
    id: 84,
    cp: 1307,
    name: "Villabuena de Álava Eskuernaga",
    provincia_id: 1
  },
  {
    id: 85,
    cp: 1307,
    name: "Ba?os de Ebro Ma?ueta",
    provincia_id: 1
  },
  {
    id: 86,
    cp: 1308,
    name: "Laguardia",
    provincia_id: 1
  },
  {
    id: 87,
    cp: 1308,
    name: "Kripan",
    provincia_id: 1
  },
  {
    id: 88,
    cp: 1308,
    name: "Lanciego Lantziego",
    provincia_id: 1
  },
  {
    id: 89,
    cp: 1309,
    name: "Leza",
    provincia_id: 1
  },
  {
    id: 90,
    cp: 1309,
    name: "Navaridas",
    provincia_id: 1
  },
  {
    id: 91,
    cp: 1309,
    name: "Elvillar Bilar",
    provincia_id: 1
  },
  {
    id: 92,
    cp: 1309,
    name: "Laguardia",
    provincia_id: 1
  },
  {
    id: 93,
    cp: 1320,
    name: "Oyón-Oion",
    provincia_id: 1
  },
  {
    id: 94,
    cp: 1321,
    name: "Laguardia",
    provincia_id: 1
  },
  {
    id: 95,
    cp: 1322,
    name: "Moreda de Álava Moreda Araba",
    provincia_id: 1
  },
  {
    id: 96,
    cp: 1322,
    name: "Yécora Iekora",
    provincia_id: 1
  },
  {
    id: 97,
    cp: 1322,
    name: "Oyón-Oion",
    provincia_id: 1
  },
  {
    id: 98,
    cp: 1330,
    name: "Labastida Bastida",
    provincia_id: 1
  },
  {
    id: 99,
    cp: 1340,
    name: "Elciego",
    provincia_id: 1
  },
  {
    id: 100,
    cp: 1400,
    name: "Laudio Llodio",
    provincia_id: 1
  },
  {
    id: 101,
    cp: 1408,
    name: "Ayala Aiara",
    provincia_id: 1
  },
  {
    id: 102,
    cp: 1409,
    name: "Okondo",
    provincia_id: 1
  },
  {
    id: 103,
    cp: 1420,
    name: "Erriberagoitia Ribera Alta",
    provincia_id: 1
  },
  {
    id: 104,
    cp: 1423,
    name: "Valdegovía Gaubea",
    provincia_id: 1
  },
  {
    id: 105,
    cp: 1423,
    name: "A?ana",
    provincia_id: 1
  },
  {
    id: 106,
    cp: 1423,
    name: "Erriberagoitia Ribera Alta",
    provincia_id: 1
  },
  {
    id: 107,
    cp: 1423,
    name: "Lantarón",
    provincia_id: 1
  },
  {
    id: 108,
    cp: 1426,
    name: "Valdegovía Gaubea",
    provincia_id: 1
  },
  {
    id: 109,
    cp: 1426,
    name: "A?ana",
    provincia_id: 1
  },
  {
    id: 110,
    cp: 1426,
    name: "Erriberagoitia Ribera Alta",
    provincia_id: 1
  },
  {
    id: 111,
    cp: 1427,
    name: "Berberana",
    provincia_id: 9
  },
  {
    id: 112,
    cp: 1427,
    name: "Jurisdicción de San Zadornil",
    provincia_id: 9
  },
  {
    id: 113,
    cp: 1427,
    name: "Valdegovía Gaubea",
    provincia_id: 1
  },
  {
    id: 114,
    cp: 1428,
    name: "Erriberagoitia Ribera Alta",
    provincia_id: 1
  },
  {
    id: 115,
    cp: 1428,
    name: "Valdegovía Gaubea",
    provincia_id: 1
  },
  {
    id: 116,
    cp: 1428,
    name: "Iru?a Oka Iru?a de Oca",
    provincia_id: 1
  },
  {
    id: 117,
    cp: 1430,
    name: "Kuartango",
    provincia_id: 1
  },
  {
    id: 118,
    cp: 1439,
    name: "Kuartango",
    provincia_id: 1
  },
  {
    id: 119,
    cp: 1440,
    name: "Urkabustaiz",
    provincia_id: 1
  },
  {
    id: 120,
    cp: 1449,
    name: "Urkabustaiz",
    provincia_id: 1
  },
  {
    id: 121,
    cp: 1450,
    name: "Amurrio",
    provincia_id: 1
  },
  {
    id: 122,
    cp: 1450,
    name: "Zuia",
    provincia_id: 1
  },
  {
    id: 123,
    cp: 1450,
    name: "Urkabustaiz",
    provincia_id: 1
  },
  {
    id: 124,
    cp: 1468,
    name: "Amurrio",
    provincia_id: 1
  },
  {
    id: 125,
    cp: 1470,
    name: "Ayala Aiara",
    provincia_id: 1
  },
  {
    id: 126,
    cp: 1470,
    name: "Amurrio",
    provincia_id: 1
  },
  {
    id: 127,
    cp: 1474,
    name: "Artziniega",
    provincia_id: 1
  },
  {
    id: 128,
    cp: 1476,
    name: "Ayala Aiara",
    provincia_id: 1
  },
  {
    id: 129,
    cp: 1477,
    name: "Ayala Aiara",
    provincia_id: 1
  },
  {
    id: 130,
    cp: 1478,
    name: "Ayala Aiara",
    provincia_id: 1
  },
  {
    id: 131,
    cp: 1478,
    name: "Artziniega",
    provincia_id: 1
  },
  {
    id: 132,
    cp: 1479,
    name: "Ayala Aiara",
    provincia_id: 1
  },
  {
    id: 133,
    cp: 1510,
    name: "Legutio",
    provincia_id: 1
  },
  {
    id: 134,
    cp: 1510,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 135,
    cp: 1510,
    name: "Arratzua-Ubarrundia",
    provincia_id: 1
  },
  {
    id: 136,
    cp: 1520,
    name: "Arratzua-Ubarrundia",
    provincia_id: 1
  },
  {
    id: 137,
    cp: 1520,
    name: "Vitoria-Gasteiz",
    provincia_id: 1
  },
  {
    id: 138,
    cp: 2001,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 139,
    cp: 2002,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 140,
    cp: 2003,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 141,
    cp: 2004,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 142,
    cp: 2005,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 143,
    cp: 2006,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 144,
    cp: 2008,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 145,
    cp: 2049,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 146,
    cp: 2071,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 147,
    cp: 2099,
    name: "Pozo Ca?ada",
    provincia_id: 2
  },
  {
    id: 148,
    cp: 2099,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 149,
    cp: 2100,
    name: "Tarazona de la Mancha",
    provincia_id: 2
  },
  {
    id: 150,
    cp: 2100,
    name: "Lezo",
    provincia_id: 20
  },
  {
    id: 151,
    cp: 2110,
    name: "Tarazona de la Mancha",
    provincia_id: 2
  },
  {
    id: 152,
    cp: 2110,
    name: "La Gineta",
    provincia_id: 2
  },
  {
    id: 153,
    cp: 2120,
    name: "Pe?as de San Pedro",
    provincia_id: 2
  },
  {
    id: 154,
    cp: 2124,
    name: "Ayna",
    provincia_id: 2
  },
  {
    id: 155,
    cp: 2124,
    name: "Liétor",
    provincia_id: 2
  },
  {
    id: 156,
    cp: 2124,
    name: "Alcadozo",
    provincia_id: 2
  },
  {
    id: 157,
    cp: 2125,
    name: "Ayna",
    provincia_id: 2
  },
  {
    id: 158,
    cp: 2126,
    name: "Ayna",
    provincia_id: 2
  },
  {
    id: 159,
    cp: 2127,
    name: "Pe?as de San Pedro",
    provincia_id: 2
  },
  {
    id: 160,
    cp: 2128,
    name: "Pe?as de San Pedro",
    provincia_id: 2
  },
  {
    id: 161,
    cp: 2128,
    name: "Alcadozo",
    provincia_id: 2
  },
  {
    id: 162,
    cp: 2129,
    name: "Pozohondo",
    provincia_id: 2
  },
  {
    id: 163,
    cp: 2130,
    name: "Bogarra",
    provincia_id: 2
  },
  {
    id: 164,
    cp: 2136,
    name: "Paterna del Madera",
    provincia_id: 2
  },
  {
    id: 165,
    cp: 2137,
    name: "Paterna del Madera",
    provincia_id: 2
  },
  {
    id: 166,
    cp: 2138,
    name: "Pe?ascosa",
    provincia_id: 2
  },
  {
    id: 167,
    cp: 2138,
    name: "Paterna del Madera",
    provincia_id: 2
  },
  {
    id: 168,
    cp: 2138,
    name: "Bogarra",
    provincia_id: 2
  },
  {
    id: 169,
    cp: 2139,
    name: "Bogarra",
    provincia_id: 2
  },
  {
    id: 170,
    cp: 2139,
    name: "Ayna",
    provincia_id: 2
  },
  {
    id: 171,
    cp: 2140,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 172,
    cp: 2141,
    name: "Pozohondo",
    provincia_id: 2
  },
  {
    id: 173,
    cp: 2142,
    name: "Pozohondo",
    provincia_id: 2
  },
  {
    id: 174,
    cp: 2142,
    name: "Liétor",
    provincia_id: 2
  },
  {
    id: 175,
    cp: 2150,
    name: "Valdeganga",
    provincia_id: 2
  },
  {
    id: 176,
    cp: 2151,
    name: "Casas de Juan Nú?ez",
    provincia_id: 2
  },
  {
    id: 177,
    cp: 2152,
    name: "Alatoz",
    provincia_id: 2
  },
  {
    id: 178,
    cp: 2153,
    name: "Carcelén",
    provincia_id: 2
  },
  {
    id: 179,
    cp: 2154,
    name: "Villavaliente",
    provincia_id: 2
  },
  {
    id: 180,
    cp: 2154,
    name: "Pozo-Lorente",
    provincia_id: 2
  },
  {
    id: 181,
    cp: 2155,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 182,
    cp: 2156,
    name: "Chinchilla de Monte-Aragón",
    provincia_id: 2
  },
  {
    id: 183,
    cp: 2160,
    name: "Lezuza",
    provincia_id: 2
  },
  {
    id: 184,
    cp: 2161,
    name: "Lezuza",
    provincia_id: 2
  },
  {
    id: 185,
    cp: 2162,
    name: "La Herrera",
    provincia_id: 2
  },
  {
    id: 186,
    cp: 2170,
    name: "Bollullos Par del Condado",
    provincia_id: 21
  },
  {
    id: 187,
    cp: 2200,
    name: "Casas-Ibá?ez",
    provincia_id: 2
  },
  {
    id: 188,
    cp: 2210,
    name: "Alcalá del Júcar",
    provincia_id: 2
  },
  {
    id: 189,
    cp: 2211,
    name: "Alcalá del Júcar",
    provincia_id: 2
  },
  {
    id: 190,
    cp: 2212,
    name: "Casas de Ves",
    provincia_id: 2
  },
  {
    id: 191,
    cp: 2213,
    name: "Balsa de Ves",
    provincia_id: 2
  },
  {
    id: 192,
    cp: 2213,
    name: "Villa de Ves",
    provincia_id: 2
  },
  {
    id: 193,
    cp: 2214,
    name: "Balsa de Ves",
    provincia_id: 2
  },
  {
    id: 194,
    cp: 2214,
    name: "Alcalá del Júcar",
    provincia_id: 2
  },
  {
    id: 195,
    cp: 2215,
    name: "Villatoya",
    provincia_id: 2
  },
  {
    id: 196,
    cp: 2215,
    name: "Alborea",
    provincia_id: 2
  },
  {
    id: 197,
    cp: 2220,
    name: "Motilleja",
    provincia_id: 2
  },
  {
    id: 198,
    cp: 2230,
    name: "Madrigueras",
    provincia_id: 2
  },
  {
    id: 199,
    cp: 2240,
    name: "Mahora",
    provincia_id: 2
  },
  {
    id: 200,
    cp: 2246,
    name: "Navas de Jorquera",
    provincia_id: 2
  },
  {
    id: 201,
    cp: 2247,
    name: "Cenizate",
    provincia_id: 2
  },
  {
    id: 202,
    cp: 2248,
    name: "Jorquera",
    provincia_id: 2
  },
  {
    id: 203,
    cp: 2249,
    name: "La Recueja",
    provincia_id: 2
  },
  {
    id: 204,
    cp: 2249,
    name: "Fuentealbilla",
    provincia_id: 2
  },
  {
    id: 205,
    cp: 2249,
    name: "Jorquera",
    provincia_id: 2
  },
  {
    id: 206,
    cp: 2250,
    name: "Abengibre",
    provincia_id: 2
  },
  {
    id: 207,
    cp: 2251,
    name: "Fuentealbilla",
    provincia_id: 2
  },
  {
    id: 208,
    cp: 2252,
    name: "Alcalá del Júcar",
    provincia_id: 2
  },
  {
    id: 209,
    cp: 2253,
    name: "Golosalvo",
    provincia_id: 2
  },
  {
    id: 210,
    cp: 2260,
    name: "Fuentealbilla",
    provincia_id: 2
  },
  {
    id: 211,
    cp: 2270,
    name: "Villamalea",
    provincia_id: 2
  },
  {
    id: 212,
    cp: 2300,
    name: "Alcaraz",
    provincia_id: 2
  },
  {
    id: 213,
    cp: 2310,
    name: "Viveros",
    provincia_id: 2
  },
  {
    id: 214,
    cp: 2311,
    name: "Povedilla",
    provincia_id: 2
  },
  {
    id: 215,
    cp: 2312,
    name: "Alcaraz",
    provincia_id: 2
  },
  {
    id: 216,
    cp: 2313,
    name: "Pe?ascosa",
    provincia_id: 2
  },
  {
    id: 217,
    cp: 2314,
    name: "Pe?ascosa",
    provincia_id: 2
  },
  {
    id: 218,
    cp: 2314,
    name: "Masegoso",
    provincia_id: 2
  },
  {
    id: 219,
    cp: 2314,
    name: "Alcaraz",
    provincia_id: 2
  },
  {
    id: 220,
    cp: 2315,
    name: "Vianos",
    provincia_id: 2
  },
  {
    id: 221,
    cp: 2316,
    name: "Salobre",
    provincia_id: 2
  },
  {
    id: 222,
    cp: 2320,
    name: "Balazote",
    provincia_id: 2
  },
  {
    id: 223,
    cp: 2326,
    name: "San Pedro",
    provincia_id: 2
  },
  {
    id: 224,
    cp: 2327,
    name: "Pozuelo",
    provincia_id: 2
  },
  {
    id: 225,
    cp: 2328,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 226,
    cp: 2329,
    name: "Casas de Lázaro",
    provincia_id: 2
  },
  {
    id: 227,
    cp: 2330,
    name: "Alcaraz",
    provincia_id: 2
  },
  {
    id: 228,
    cp: 2331,
    name: "Robledo",
    provincia_id: 2
  },
  {
    id: 229,
    cp: 2332,
    name: "Robledo",
    provincia_id: 2
  },
  {
    id: 230,
    cp: 2340,
    name: "Robledo",
    provincia_id: 2
  },
  {
    id: 231,
    cp: 2350,
    name: "Villapalacios",
    provincia_id: 2
  },
  {
    id: 232,
    cp: 2360,
    name: "Bienservida",
    provincia_id: 2
  },
  {
    id: 233,
    cp: 2400,
    name: "Hellín",
    provincia_id: 2
  },
  {
    id: 234,
    cp: 2409,
    name: "Hellín",
    provincia_id: 2
  },
  {
    id: 235,
    cp: 2410,
    name: "Liétor",
    provincia_id: 2
  },
  {
    id: 236,
    cp: 2420,
    name: "Hellín",
    provincia_id: 2
  },
  {
    id: 237,
    cp: 2430,
    name: "Elche de la Sierra",
    provincia_id: 2
  },
  {
    id: 238,
    cp: 2434,
    name: "Letur",
    provincia_id: 2
  },
  {
    id: 239,
    cp: 2435,
    name: "Socovos",
    provincia_id: 2
  },
  {
    id: 240,
    cp: 2436,
    name: "Férez",
    provincia_id: 2
  },
  {
    id: 241,
    cp: 2437,
    name: "Socovos",
    provincia_id: 2
  },
  {
    id: 242,
    cp: 2438,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 243,
    cp: 2439,
    name: "Elche de la Sierra",
    provincia_id: 2
  },
  {
    id: 244,
    cp: 2440,
    name: "Molinicos",
    provincia_id: 2
  },
  {
    id: 245,
    cp: 2448,
    name: "Bogarra",
    provincia_id: 2
  },
  {
    id: 246,
    cp: 2448,
    name: "Molinicos",
    provincia_id: 2
  },
  {
    id: 247,
    cp: 2449,
    name: "Molinicos",
    provincia_id: 2
  },
  {
    id: 248,
    cp: 2449,
    name: "Elche de la Sierra",
    provincia_id: 2
  },
  {
    id: 249,
    cp: 2450,
    name: "Riópar",
    provincia_id: 2
  },
  {
    id: 250,
    cp: 2459,
    name: "Paterna del Madera",
    provincia_id: 2
  },
  {
    id: 251,
    cp: 2459,
    name: "Riópar",
    provincia_id: 2
  },
  {
    id: 252,
    cp: 2460,
    name: "Villaverde de Guadalimar",
    provincia_id: 2
  },
  {
    id: 253,
    cp: 2461,
    name: "Cotillas",
    provincia_id: 2
  },
  {
    id: 254,
    cp: 2462,
    name: "Villaverde de Guadalimar",
    provincia_id: 2
  },
  {
    id: 255,
    cp: 2462,
    name: "Riópar",
    provincia_id: 2
  },
  {
    id: 256,
    cp: 2470,
    name: "Elche de la Sierra",
    provincia_id: 2
  },
  {
    id: 257,
    cp: 2480,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 258,
    cp: 2482,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 259,
    cp: 2484,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 260,
    cp: 2485,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 261,
    cp: 2486,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 262,
    cp: 2487,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 263,
    cp: 2488,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 264,
    cp: 2489,
    name: "Yeste",
    provincia_id: 2
  },
  {
    id: 265,
    cp: 2490,
    name: "Hellín",
    provincia_id: 2
  },
  {
    id: 266,
    cp: 2498,
    name: "Hellín",
    provincia_id: 2
  },
  {
    id: 267,
    cp: 2499,
    name: "Hellín",
    provincia_id: 2
  },
  {
    id: 268,
    cp: 2500,
    name: "Tobarra",
    provincia_id: 2
  },
  {
    id: 269,
    cp: 2510,
    name: "Pozo Ca?ada",
    provincia_id: 2
  },
  {
    id: 270,
    cp: 2510,
    name: "Chinchilla de Monte-Aragón",
    provincia_id: 2
  },
  {
    id: 271,
    cp: 2511,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 272,
    cp: 2512,
    name: "Albacete",
    provincia_id: 2
  },
  {
    id: 273,
    cp: 2513,
    name: "Tobarra",
    provincia_id: 2
  },
  {
    id: 274,
    cp: 2514,
    name: "Tobarra",
    provincia_id: 2
  },
  {
    id: 275,
    cp: 2520,
    name: "Chinchilla de Monte-Aragón",
    provincia_id: 2
  },
  {
    id: 276,
    cp: 2529,
    name: "Chinchilla de Monte-Aragón",
    provincia_id: 2
  },
  {
    id: 277,
    cp: 2530,
    name: "Nerpio",
    provincia_id: 2
  },
  {
    id: 278,
    cp: 2534,
    name: "Nerpio",
    provincia_id: 2
  },
  {
    id: 279,
    cp: 2535,
    name: "Nerpio",
    provincia_id: 2
  },
  {
    id: 280,
    cp: 2536,
    name: "Nerpio",
    provincia_id: 2
  },
  {
    id: 281,
    cp: 2537,
    name: "Nerpio",
    provincia_id: 2
  },
  {
    id: 282,
    cp: 2538,
    name: "Nerpio",
    provincia_id: 2
  },
  {
    id: 283,
    cp: 2539,
    name: "Nerpio",
    provincia_id: 2
  },
  {
    id: 284,
    cp: 2600,
    name: "Villarrobledo",
    provincia_id: 2
  },
  {
    id: 285,
    cp: 2610,
    name: "El Bonillo",
    provincia_id: 2
  },
  {
    id: 286,
    cp: 2611,
    name: "Ossa de Montiel",
    provincia_id: 2
  },
  {
    id: 287,
    cp: 2612,
    name: "Villarrobledo",
    provincia_id: 2
  },
  {
    id: 288,
    cp: 2612,
    name: "Munera",
    provincia_id: 2
  },
  {
    id: 289,
    cp: 2613,
    name: "El Bonillo",
    provincia_id: 2
  },
  {
    id: 290,
    cp: 2614,
    name: "El Ballestero",
    provincia_id: 2
  },
  {
    id: 291,
    cp: 2620,
    name: "Minaya",
    provincia_id: 2
  },
  {
    id: 292,
    cp: 2630,
    name: "La Roda",
    provincia_id: 2
  },
  {
    id: 293,
    cp: 2636,
    name: "Villalgordo del Júcar",
    provincia_id: 2
  },
  {
    id: 294,
    cp: 2636,
    name: "Casas de Benítez",
    provincia_id: 16
  },
  {
    id: 295,
    cp: 2637,
    name: "Fuensanta",
    provincia_id: 2
  },
  {
    id: 296,
    cp: 2638,
    name: "Montalvos",
    provincia_id: 2
  },
  {
    id: 297,
    cp: 2639,
    name: "La Roda",
    provincia_id: 2
  },
  {
    id: 298,
    cp: 2639,
    name: "Barrax",
    provincia_id: 2
  },
  {
    id: 299,
    cp: 2640,
    name: "Almansa",
    provincia_id: 2
  },
  {
    id: 300,
    cp: 2650,
    name: "Montealegre del Castillo",
    provincia_id: 2
  },
  {
    id: 301,
    cp: 2651,
    name: "Fuente-Álamo",
    provincia_id: 2
  },
  {
    id: 302,
    cp: 2652,
    name: "Ontur",
    provincia_id: 2
  },
  {
    id: 303,
    cp: 2653,
    name: "Albatana",
    provincia_id: 2
  },
  {
    id: 304,
    cp: 2660,
    name: "Caudete",
    provincia_id: 2
  },
  {
    id: 305,
    cp: 2690,
    name: "Alpera",
    provincia_id: 2
  },
  {
    id: 306,
    cp: 2690,
    name: "Higueruela",
    provincia_id: 2
  },
  {
    id: 307,
    cp: 2691,
    name: "Bonete",
    provincia_id: 2
  },
  {
    id: 308,
    cp: 2692,
    name: "Chinchilla de Monte-Aragón",
    provincia_id: 2
  },
  {
    id: 309,
    cp: 2692,
    name: "Pétrola",
    provincia_id: 2
  },
  {
    id: 310,
    cp: 2693,
    name: "Corral-Rubio",
    provincia_id: 2
  },
  {
    id: 311,
    cp: 2694,
    name: "Higueruela",
    provincia_id: 2
  },
  {
    id: 312,
    cp: 2695,
    name: "Chinchilla de Monte-Aragón",
    provincia_id: 2
  },
  {
    id: 313,
    cp: 2696,
    name: "Hoya-Gonzalo",
    provincia_id: 2
  },
  {
    id: 314,
    cp: 2999,
    name: "Ayna",
    provincia_id: 2
  },
  {
    id: 315,
    cp: 3001,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 316,
    cp: 3002,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 317,
    cp: 3003,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 318,
    cp: 3004,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 319,
    cp: 3005,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 320,
    cp: 3006,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 321,
    cp: 3007,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 322,
    cp: 3008,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 323,
    cp: 3009,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 324,
    cp: 3010,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 325,
    cp: 3010,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 326,
    cp: 3011,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 327,
    cp: 3012,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 328,
    cp: 3013,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 329,
    cp: 3014,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 330,
    cp: 3015,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 331,
    cp: 3016,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 332,
    cp: 3100,
    name: "Jijona Xixona",
    provincia_id: 3
  },
  {
    id: 333,
    cp: 3108,
    name: "Torremanzanas la Torre de les Maçanes",
    provincia_id: 3
  },
  {
    id: 334,
    cp: 3109,
    name: "Tibi",
    provincia_id: 3
  },
  {
    id: 335,
    cp: 3110,
    name: "Mutxamel",
    provincia_id: 3
  },
  {
    id: 336,
    cp: 3111,
    name: "Busot",
    provincia_id: 3
  },
  {
    id: 337,
    cp: 3112,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 338,
    cp: 3113,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 339,
    cp: 3114,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 340,
    cp: 3115,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 341,
    cp: 3130,
    name: "Santa Pola",
    provincia_id: 3
  },
  {
    id: 342,
    cp: 3138,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 343,
    cp: 3139,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 344,
    cp: 3140,
    name: "Guardamar del Segura",
    provincia_id: 3
  },
  {
    id: 345,
    cp: 3150,
    name: "Dolores",
    provincia_id: 3
  },
  {
    id: 346,
    cp: 3158,
    name: "Crevillent",
    provincia_id: 3
  },
  {
    id: 347,
    cp: 3158,
    name: "Catral",
    provincia_id: 3
  },
  {
    id: 348,
    cp: 3159,
    name: "Daya Nueva",
    provincia_id: 3
  },
  {
    id: 349,
    cp: 3160,
    name: "Almoradí",
    provincia_id: 3
  },
  {
    id: 350,
    cp: 3169,
    name: "Algorfa",
    provincia_id: 3
  },
  {
    id: 351,
    cp: 3170,
    name: "Rojales",
    provincia_id: 3
  },
  {
    id: 352,
    cp: 3177,
    name: "San Fulgencio",
    provincia_id: 3
  },
  {
    id: 353,
    cp: 3177,
    name: "Daya Vieja",
    provincia_id: 3
  },
  {
    id: 354,
    cp: 3177,
    name: "Formentera del Segura",
    provincia_id: 3
  },
  {
    id: 355,
    cp: 3178,
    name: "Benijófar",
    provincia_id: 3
  },
  {
    id: 356,
    cp: 3179,
    name: "Formentera del Segura",
    provincia_id: 3
  },
  {
    id: 357,
    cp: 3179,
    name: "Almoradí",
    provincia_id: 3
  },
  {
    id: 358,
    cp: 3180,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 359,
    cp: 3181,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 360,
    cp: 3182,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 361,
    cp: 3183,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 362,
    cp: 3184,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 363,
    cp: 3185,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 364,
    cp: 3186,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 365,
    cp: 3187,
    name: "Los Montesinos",
    provincia_id: 3
  },
  {
    id: 366,
    cp: 3188,
    name: "Torrevieja",
    provincia_id: 3
  },
  {
    id: 367,
    cp: 3189,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 368,
    cp: 3190,
    name: "Pilar de la Horadada",
    provincia_id: 3
  },
  {
    id: 369,
    cp: 3191,
    name: "Pilar de la Horadada",
    provincia_id: 3
  },
  {
    id: 370,
    cp: 3191,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 371,
    cp: 3192,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 372,
    cp: 3193,
    name: "San Miguel de Salinas",
    provincia_id: 3
  },
  {
    id: 373,
    cp: 3194,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 374,
    cp: 3195,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 375,
    cp: 3201,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 376,
    cp: 3202,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 377,
    cp: 3203,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 378,
    cp: 3204,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 379,
    cp: 3205,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 380,
    cp: 3206,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 381,
    cp: 3207,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 382,
    cp: 3208,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 383,
    cp: 3290,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 384,
    cp: 3291,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 385,
    cp: 3292,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 386,
    cp: 3293,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 387,
    cp: 3294,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 388,
    cp: 3295,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 389,
    cp: 3296,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 390,
    cp: 3300,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 391,
    cp: 3310,
    name: "Jacarilla",
    provincia_id: 3
  },
  {
    id: 392,
    cp: 3310,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 393,
    cp: 3311,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 394,
    cp: 3312,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 395,
    cp: 3313,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 396,
    cp: 3314,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 397,
    cp: 3315,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 398,
    cp: 3316,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 399,
    cp: 3316,
    name: "Benferri",
    provincia_id: 3
  },
  {
    id: 400,
    cp: 3317,
    name: "Callosa de Segura",
    provincia_id: 3
  },
  {
    id: 401,
    cp: 3320,
    name: "Elche Elx",
    provincia_id: 3
  },
  {
    id: 402,
    cp: 3330,
    name: "Crevillent",
    provincia_id: 3
  },
  {
    id: 403,
    cp: 3339,
    name: "Crevillent",
    provincia_id: 3
  },
  {
    id: 404,
    cp: 3340,
    name: "Albatera",
    provincia_id: 3
  },
  {
    id: 405,
    cp: 3348,
    name: "Granja de Rocamora",
    provincia_id: 3
  },
  {
    id: 406,
    cp: 3349,
    name: "San Isidro",
    provincia_id: 3
  },
  {
    id: 407,
    cp: 3350,
    name: "Cox",
    provincia_id: 3
  },
  {
    id: 408,
    cp: 3360,
    name: "Callosa de Segura",
    provincia_id: 3
  },
  {
    id: 409,
    cp: 3369,
    name: "Rafal",
    provincia_id: 3
  },
  {
    id: 410,
    cp: 3369,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 411,
    cp: 3370,
    name: "Redován",
    provincia_id: 3
  },
  {
    id: 412,
    cp: 3380,
    name: "Bigastro",
    provincia_id: 3
  },
  {
    id: 413,
    cp: 3390,
    name: "Benejúzar",
    provincia_id: 3
  },
  {
    id: 414,
    cp: 3392,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 415,
    cp: 3400,
    name: "Villena",
    provincia_id: 3
  },
  {
    id: 416,
    cp: 3408,
    name: "Villena",
    provincia_id: 3
  },
  {
    id: 417,
    cp: 3409,
    name: "Salinas",
    provincia_id: 3
  },
  {
    id: 418,
    cp: 3409,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 419,
    cp: 3409,
    name: "Villena",
    provincia_id: 3
  },
  {
    id: 420,
    cp: 3409,
    name: "Ca?ada",
    provincia_id: 3
  },
  {
    id: 421,
    cp: 3410,
    name: "Biar",
    provincia_id: 3
  },
  {
    id: 422,
    cp: 3420,
    name: "Castalla",
    provincia_id: 3
  },
  {
    id: 423,
    cp: 3430,
    name: "Onil",
    provincia_id: 3
  },
  {
    id: 424,
    cp: 3440,
    name: "Ibi",
    provincia_id: 3
  },
  {
    id: 425,
    cp: 3450,
    name: "Banyeres de Mariola",
    provincia_id: 3
  },
  {
    id: 426,
    cp: 3460,
    name: "Beneixama",
    provincia_id: 3
  },
  {
    id: 427,
    cp: 3469,
    name: "Campo de Mirra el Camp de Mirra",
    provincia_id: 3
  },
  {
    id: 428,
    cp: 3469,
    name: "Beneixama",
    provincia_id: 3
  },
  {
    id: 429,
    cp: 3501,
    name: "Benidorm",
    provincia_id: 3
  },
  {
    id: 430,
    cp: 3502,
    name: "Benidorm",
    provincia_id: 3
  },
  {
    id: 431,
    cp: 3503,
    name: "Benidorm",
    provincia_id: 3
  },
  {
    id: 432,
    cp: 3509,
    name: "Finestrat",
    provincia_id: 3
  },
  {
    id: 433,
    cp: 3510,
    name: "Callosa d'en Sarri?",
    provincia_id: 3
  },
  {
    id: 434,
    cp: 3516,
    name: "Benimantell",
    provincia_id: 3
  },
  {
    id: 435,
    cp: 3517,
    name: "el Castell de Guadalest",
    provincia_id: 3
  },
  {
    id: 436,
    cp: 3517,
    name: "Beniardá",
    provincia_id: 3
  },
  {
    id: 437,
    cp: 3517,
    name: "Benifato",
    provincia_id: 3
  },
  {
    id: 438,
    cp: 3517,
    name: "Confrides",
    provincia_id: 3
  },
  {
    id: 439,
    cp: 3518,
    name: "T?rbena",
    provincia_id: 3
  },
  {
    id: 440,
    cp: 3518,
    name: "Bolulla",
    provincia_id: 3
  },
  {
    id: 441,
    cp: 3520,
    name: "Polop",
    provincia_id: 3
  },
  {
    id: 442,
    cp: 3530,
    name: "la Nucia",
    provincia_id: 3
  },
  {
    id: 443,
    cp: 3540,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 444,
    cp: 3550,
    name: "Sant Joan d'Alacant",
    provincia_id: 3
  },
  {
    id: 445,
    cp: 3559,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 446,
    cp: 3560,
    name: "el Campello",
    provincia_id: 3
  },
  {
    id: 447,
    cp: 3569,
    name: "Aigües",
    provincia_id: 3
  },
  {
    id: 448,
    cp: 3570,
    name: "Villajoyosa la Vila Joiosa",
    provincia_id: 3
  },
  {
    id: 449,
    cp: 3578,
    name: "Relleu",
    provincia_id: 3
  },
  {
    id: 450,
    cp: 3579,
    name: "Orxeta",
    provincia_id: 3
  },
  {
    id: 451,
    cp: 3579,
    name: "Sella",
    provincia_id: 3
  },
  {
    id: 452,
    cp: 3580,
    name: "l'Alf?s del Pi",
    provincia_id: 3
  },
  {
    id: 453,
    cp: 3581,
    name: "l'Alf?s del Pi",
    provincia_id: 3
  },
  {
    id: 454,
    cp: 3590,
    name: "Altea",
    provincia_id: 3
  },
  {
    id: 455,
    cp: 3599,
    name: "Altea",
    provincia_id: 3
  },
  {
    id: 456,
    cp: 3600,
    name: "Elda",
    provincia_id: 3
  },
  {
    id: 457,
    cp: 3610,
    name: "Petrer",
    provincia_id: 3
  },
  {
    id: 458,
    cp: 3630,
    name: "Sax",
    provincia_id: 3
  },
  {
    id: 459,
    cp: 3638,
    name: "Salinas",
    provincia_id: 3
  },
  {
    id: 460,
    cp: 3639,
    name: "Villena",
    provincia_id: 3
  },
  {
    id: 461,
    cp: 3640,
    name: "Monóvar Mon?ver",
    provincia_id: 3
  },
  {
    id: 462,
    cp: 3649,
    name: "Monóvar Mon?ver",
    provincia_id: 3
  },
  {
    id: 463,
    cp: 3650,
    name: "el Pinós Pinoso",
    provincia_id: 3
  },
  {
    id: 464,
    cp: 3657,
    name: "Yecla",
    provincia_id: 30
  },
  {
    id: 465,
    cp: 3657,
    name: "el Pinós Pinoso",
    provincia_id: 3
  },
  {
    id: 466,
    cp: 3658,
    name: "Salinas",
    provincia_id: 3
  },
  {
    id: 467,
    cp: 3658,
    name: "el Pinós Pinoso",
    provincia_id: 3
  },
  {
    id: 468,
    cp: 3659,
    name: "Jumilla",
    provincia_id: 30
  },
  {
    id: 469,
    cp: 3659,
    name: "el Pinós Pinoso",
    provincia_id: 3
  },
  {
    id: 470,
    cp: 3660,
    name: "Novelda",
    provincia_id: 3
  },
  {
    id: 471,
    cp: 3668,
    name: "Algue?a",
    provincia_id: 3
  },
  {
    id: 472,
    cp: 3669,
    name: "la Romana",
    provincia_id: 3
  },
  {
    id: 473,
    cp: 3670,
    name: "Monforte del Cid",
    provincia_id: 3
  },
  {
    id: 474,
    cp: 3679,
    name: "Monforte del Cid",
    provincia_id: 3
  },
  {
    id: 475,
    cp: 3680,
    name: "Aspe",
    provincia_id: 3
  },
  {
    id: 476,
    cp: 3688,
    name: "el Fondó de les Neus Hondón de las Nieves",
    provincia_id: 3
  },
  {
    id: 477,
    cp: 3689,
    name: "el Fondó de les Neus Hondón de las Nieves",
    provincia_id: 3
  },
  {
    id: 478,
    cp: 3689,
    name: "Hondón de los Frailes",
    provincia_id: 3
  },
  {
    id: 479,
    cp: 3689,
    name: "Orihuela",
    provincia_id: 3
  },
  {
    id: 480,
    cp: 3690,
    name: "San Vicente del Raspeig Sant Vicent del Raspeig",
    provincia_id: 3
  },
  {
    id: 481,
    cp: 3698,
    name: "Agost",
    provincia_id: 3
  },
  {
    id: 482,
    cp: 3699,
    name: "Alicante Alacant",
    provincia_id: 3
  },
  {
    id: 483,
    cp: 3700,
    name: "Dénia",
    provincia_id: 3
  },
  {
    id: 484,
    cp: 3709,
    name: "Dénia",
    provincia_id: 3
  },
  {
    id: 485,
    cp: 3710,
    name: "Calp",
    provincia_id: 3
  },
  {
    id: 486,
    cp: 3720,
    name: "Benissa",
    provincia_id: 3
  },
  {
    id: 487,
    cp: 3723,
    name: "Alcalalí",
    provincia_id: 3
  },
  {
    id: 488,
    cp: 3724,
    name: "Teulada",
    provincia_id: 3
  },
  {
    id: 489,
    cp: 3725,
    name: "Teulada",
    provincia_id: 3
  },
  {
    id: 490,
    cp: 3726,
    name: "Benitachell el Poble Nou de Benitatxell",
    provincia_id: 3
  },
  {
    id: 491,
    cp: 3727,
    name: "Xaló",
    provincia_id: 3
  },
  {
    id: 492,
    cp: 3728,
    name: "Alcalalí",
    provincia_id: 3
  },
  {
    id: 493,
    cp: 3729,
    name: "Senija",
    provincia_id: 3
  },
  {
    id: 494,
    cp: 3729,
    name: "Llíber",
    provincia_id: 3
  },
  {
    id: 495,
    cp: 3730,
    name: "Jávea X?bia",
    provincia_id: 3
  },
  {
    id: 496,
    cp: 3737,
    name: "Jávea X?bia",
    provincia_id: 3
  },
  {
    id: 497,
    cp: 3738,
    name: "Jávea X?bia",
    provincia_id: 3
  },
  {
    id: 498,
    cp: 3739,
    name: "Jávea X?bia",
    provincia_id: 3
  },
  {
    id: 499,
    cp: 3740,
    name: "Gata de Gorgos",
    provincia_id: 3
  },
  {
    id: 500,
    cp: 3749,
    name: "Dénia",
    provincia_id: 3
  },
  {
    id: 501,
    cp: 3750,
    name: "Pedreguer",
    provincia_id: 3
  },
  {
    id: 502,
    cp: 3759,
    name: "Benidoleig",
    provincia_id: 3
  },
  {
    id: 503,
    cp: 3760,
    name: "Ondara",
    provincia_id: 3
  },
  {
    id: 504,
    cp: 3769,
    name: "Sanet y Negrals",
    provincia_id: 3
  },
  {
    id: 505,
    cp: 3769,
    name: "Benimeli",
    provincia_id: 3
  },
  {
    id: 506,
    cp: 3769,
    name: "el R?fol d'Almúnia",
    provincia_id: 3
  },
  {
    id: 507,
    cp: 3770,
    name: "Dénia",
    provincia_id: 3
  },
  {
    id: 508,
    cp: 3770,
    name: "el Verger",
    provincia_id: 3
  },
  {
    id: 509,
    cp: 3778,
    name: "Beniarbeig",
    provincia_id: 3
  },
  {
    id: 510,
    cp: 3779,
    name: "els Poblets",
    provincia_id: 3
  },
  {
    id: 511,
    cp: 3780,
    name: "Pego",
    provincia_id: 3
  },
  {
    id: 512,
    cp: 3780,
    name: "Dénia",
    provincia_id: 3
  },
  {
    id: 513,
    cp: 3786,
    name: "l'Atzúbia",
    provincia_id: 3
  },
  {
    id: 514,
    cp: 3787,
    name: "Vall de Gallinera",
    provincia_id: 3
  },
  {
    id: 515,
    cp: 3788,
    name: "la Vall d'Alcal?",
    provincia_id: 3
  },
  {
    id: 516,
    cp: 3788,
    name: "Vall de Gallinera",
    provincia_id: 3
  },
  {
    id: 517,
    cp: 3789,
    name: "la Vall d'Ebo",
    provincia_id: 3
  },
  {
    id: 518,
    cp: 3790,
    name: "Orba",
    provincia_id: 3
  },
  {
    id: 519,
    cp: 3791,
    name: "la Vall de Laguar",
    provincia_id: 3
  },
  {
    id: 520,
    cp: 3791,
    name: "Orba",
    provincia_id: 3
  },
  {
    id: 521,
    cp: 3792,
    name: "Parcent",
    provincia_id: 3
  },
  {
    id: 522,
    cp: 3792,
    name: "Orba",
    provincia_id: 3
  },
  {
    id: 523,
    cp: 3792,
    name: "Murla",
    provincia_id: 3
  },
  {
    id: 524,
    cp: 3793,
    name: "Castell de Castells",
    provincia_id: 3
  },
  {
    id: 525,
    cp: 3794,
    name: "Benigembla",
    provincia_id: 3
  },
  {
    id: 526,
    cp: 3795,
    name: "Tormos",
    provincia_id: 3
  },
  {
    id: 527,
    cp: 3795,
    name: "Sagra",
    provincia_id: 3
  },
  {
    id: 528,
    cp: 3795,
    name: "Orba",
    provincia_id: 3
  },
  {
    id: 529,
    cp: 3800,
    name: "Alcoy Alcoi",
    provincia_id: 3
  },
  {
    id: 530,
    cp: 3801,
    name: "Alcoy Alcoi",
    provincia_id: 3
  },
  {
    id: 531,
    cp: 3802,
    name: "Alcoy Alcoi",
    provincia_id: 3
  },
  {
    id: 532,
    cp: 3803,
    name: "Alcoy Alcoi",
    provincia_id: 3
  },
  {
    id: 533,
    cp: 3804,
    name: "Alcoy Alcoi",
    provincia_id: 3
  },
  {
    id: 534,
    cp: 3810,
    name: "Benilloba",
    provincia_id: 3
  },
  {
    id: 535,
    cp: 3811,
    name: "Gorga",
    provincia_id: 3
  },
  {
    id: 536,
    cp: 3811,
    name: "Quatretondeta",
    provincia_id: 3
  },
  {
    id: 537,
    cp: 3812,
    name: "Balones",
    provincia_id: 3
  },
  {
    id: 538,
    cp: 3812,
    name: "Benimassot",
    provincia_id: 3
  },
  {
    id: 539,
    cp: 3812,
    name: "Millena",
    provincia_id: 3
  },
  {
    id: 540,
    cp: 3813,
    name: "Tollos",
    provincia_id: 3
  },
  {
    id: 541,
    cp: 3813,
    name: "Famorca",
    provincia_id: 3
  },
  {
    id: 542,
    cp: 3813,
    name: "Facheca",
    provincia_id: 3
  },
  {
    id: 543,
    cp: 3814,
    name: "Alcoleja",
    provincia_id: 3
  },
  {
    id: 544,
    cp: 3814,
    name: "Benasau",
    provincia_id: 3
  },
  {
    id: 545,
    cp: 3815,
    name: "Pen?guila",
    provincia_id: 3
  },
  {
    id: 546,
    cp: 3816,
    name: "Benifallim",
    provincia_id: 3
  },
  {
    id: 547,
    cp: 3818,
    name: "Alcoy Alcoi",
    provincia_id: 3
  },
  {
    id: 548,
    cp: 3820,
    name: "Cocentaina",
    provincia_id: 3
  },
  {
    id: 549,
    cp: 3827,
    name: "Benimarfull",
    provincia_id: 3
  },
  {
    id: 550,
    cp: 3827,
    name: "Almudaina",
    provincia_id: 3
  },
  {
    id: 551,
    cp: 3827,
    name: "Benillup",
    provincia_id: 3
  },
  {
    id: 552,
    cp: 3828,
    name: "Planes",
    provincia_id: 3
  },
  {
    id: 553,
    cp: 3829,
    name: "Cocentaina",
    provincia_id: 3
  },
  {
    id: 554,
    cp: 3829,
    name: "l'Alqueria d'Asnar",
    provincia_id: 3
  },
  {
    id: 555,
    cp: 3830,
    name: "Muro de Alcoy",
    provincia_id: 3
  },
  {
    id: 556,
    cp: 3837,
    name: "Agres",
    provincia_id: 3
  },
  {
    id: 557,
    cp: 3838,
    name: "Alfafara",
    provincia_id: 3
  },
  {
    id: 558,
    cp: 3839,
    name: "Muro de Alcoy",
    provincia_id: 3
  },
  {
    id: 559,
    cp: 3840,
    name: "Gaianes",
    provincia_id: 3
  },
  {
    id: 560,
    cp: 3841,
    name: "Alcocer de Planes",
    provincia_id: 3
  },
  {
    id: 561,
    cp: 3850,
    name: "Beniarrés",
    provincia_id: 3
  },
  {
    id: 562,
    cp: 3860,
    name: "Lorcha l'Orxa",
    provincia_id: 3
  },
  {
    id: 563,
    cp: 4001,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 564,
    cp: 4002,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 565,
    cp: 4003,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 566,
    cp: 4004,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 567,
    cp: 4005,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 568,
    cp: 4006,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 569,
    cp: 4007,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 570,
    cp: 4008,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 571,
    cp: 4009,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 572,
    cp: 4100,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 573,
    cp: 4110,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 574,
    cp: 4113,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 575,
    cp: 4114,
    name: "Lucainena de las Torres",
    provincia_id: 4
  },
  {
    id: 576,
    cp: 4114,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 577,
    cp: 4115,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 578,
    cp: 4116,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 579,
    cp: 4117,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 580,
    cp: 4118,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 581,
    cp: 4119,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 582,
    cp: 4120,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 583,
    cp: 4130,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 584,
    cp: 4131,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 585,
    cp: 4140,
    name: "Carboneras",
    provincia_id: 4
  },
  {
    id: 586,
    cp: 4147,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 587,
    cp: 4149,
    name: "Carboneras",
    provincia_id: 4
  },
  {
    id: 588,
    cp: 4149,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 589,
    cp: 4149,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 590,
    cp: 4150,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 591,
    cp: 4151,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 592,
    cp: 4160,
    name: "Almería",
    provincia_id: 4
  },
  {
    id: 593,
    cp: 4188,
    name: "Níjar",
    provincia_id: 4
  },
  {
    id: 594,
    cp: 4200,
    name: "Tabernas",
    provincia_id: 4
  },
  {
    id: 595,
    cp: 4210,
    name: "Lucainena de las Torres",
    provincia_id: 4
  },
  {
    id: 596,
    cp: 4211,
    name: "Turrillas",
    provincia_id: 4
  },
  {
    id: 597,
    cp: 4211,
    name: "Tabernas",
    provincia_id: 4
  },
  {
    id: 598,
    cp: 4211,
    name: "Lucainena de las Torres",
    provincia_id: 4
  },
  {
    id: 599,
    cp: 4212,
    name: "Olula de Castro",
    provincia_id: 4
  },
  {
    id: 600,
    cp: 4212,
    name: "Velefique",
    provincia_id: 4
  },
  {
    id: 601,
    cp: 4212,
    name: "Castro de Filabres",
    provincia_id: 4
  },
  {
    id: 602,
    cp: 4213,
    name: "Senés",
    provincia_id: 4
  },
  {
    id: 603,
    cp: 4230,
    name: "Huércal de Almería",
    provincia_id: 4
  },
  {
    id: 604,
    cp: 4240,
    name: "Viator",
    provincia_id: 4
  },
  {
    id: 605,
    cp: 4248,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 606,
    cp: 4250,
    name: "Pechina",
    provincia_id: 4
  },
  {
    id: 607,
    cp: 4259,
    name: "Pechina",
    provincia_id: 4
  },
  {
    id: 608,
    cp: 4260,
    name: "Rioja",
    provincia_id: 4
  },
  {
    id: 609,
    cp: 4270,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 610,
    cp: 4271,
    name: "Lubrín",
    provincia_id: 4
  },
  {
    id: 611,
    cp: 4271,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 612,
    cp: 4274,
    name: "Benizalón",
    provincia_id: 4
  },
  {
    id: 613,
    cp: 4274,
    name: "Uleila del Campo",
    provincia_id: 4
  },
  {
    id: 614,
    cp: 4275,
    name: "Tíjola",
    provincia_id: 4
  },
  {
    id: 615,
    cp: 4275,
    name: "Tahal",
    provincia_id: 4
  },
  {
    id: 616,
    cp: 4276,
    name: "Benizalón",
    provincia_id: 4
  },
  {
    id: 617,
    cp: 4276,
    name: "Benitagla",
    provincia_id: 4
  },
  {
    id: 618,
    cp: 4276,
    name: "Alcudia de Monteagud",
    provincia_id: 4
  },
  {
    id: 619,
    cp: 4277,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 620,
    cp: 4278,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 621,
    cp: 4279,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 622,
    cp: 4279,
    name: "Tahal",
    provincia_id: 4
  },
  {
    id: 623,
    cp: 4279,
    name: "Uleila del Campo",
    provincia_id: 4
  },
  {
    id: 624,
    cp: 4280,
    name: "Los Gallardos",
    provincia_id: 4
  },
  {
    id: 625,
    cp: 4288,
    name: "Bédar",
    provincia_id: 4
  },
  {
    id: 626,
    cp: 4288,
    name: "Los Gallardos",
    provincia_id: 4
  },
  {
    id: 627,
    cp: 4289,
    name: "Sorbas",
    provincia_id: 4
  },
  {
    id: 628,
    cp: 4289,
    name: "Bédar",
    provincia_id: 4
  },
  {
    id: 629,
    cp: 4289,
    name: "Los Gallardos",
    provincia_id: 4
  },
  {
    id: 630,
    cp: 4400,
    name: "Alhama de Almería",
    provincia_id: 4
  },
  {
    id: 631,
    cp: 4409,
    name: "Huécija",
    provincia_id: 4
  },
  {
    id: 632,
    cp: 4409,
    name: "Alicún",
    provincia_id: 4
  },
  {
    id: 633,
    cp: 4410,
    name: "Benahadux",
    provincia_id: 4
  },
  {
    id: 634,
    cp: 4420,
    name: "Santa Fe de Mondújar",
    provincia_id: 4
  },
  {
    id: 635,
    cp: 4430,
    name: "Instinción",
    provincia_id: 4
  },
  {
    id: 636,
    cp: 4431,
    name: "Íllar",
    provincia_id: 4
  },
  {
    id: 637,
    cp: 4440,
    name: "Rágol",
    provincia_id: 4
  },
  {
    id: 638,
    cp: 4450,
    name: "Canjáyar",
    provincia_id: 4
  },
  {
    id: 639,
    cp: 4458,
    name: "Padules",
    provincia_id: 4
  },
  {
    id: 640,
    cp: 4458,
    name: "Almócita",
    provincia_id: 4
  },
  {
    id: 641,
    cp: 4458,
    name: "Beires",
    provincia_id: 4
  },
  {
    id: 642,
    cp: 4459,
    name: "Ohanes",
    provincia_id: 4
  },
  {
    id: 643,
    cp: 4460,
    name: "Fondón",
    provincia_id: 4
  },
  {
    id: 644,
    cp: 4470,
    name: "Láujar de Andarax",
    provincia_id: 4
  },
  {
    id: 645,
    cp: 4479,
    name: "Bayárcal",
    provincia_id: 4
  },
  {
    id: 646,
    cp: 4479,
    name: "Fondón",
    provincia_id: 4
  },
  {
    id: 647,
    cp: 4479,
    name: "Paterna del Río",
    provincia_id: 4
  },
  {
    id: 648,
    cp: 4480,
    name: "Alcolea",
    provincia_id: 4
  },
  {
    id: 649,
    cp: 4500,
    name: "Fi?ana",
    provincia_id: 4
  },
  {
    id: 650,
    cp: 4510,
    name: "Abla",
    provincia_id: 4
  },
  {
    id: 651,
    cp: 4520,
    name: "Abrucena",
    provincia_id: 4
  },
  {
    id: 652,
    cp: 4530,
    name: "Las Tres Villas",
    provincia_id: 4
  },
  {
    id: 653,
    cp: 4531,
    name: "Alboloduy",
    provincia_id: 4
  },
  {
    id: 654,
    cp: 4532,
    name: "Las Tres Villas",
    provincia_id: 4
  },
  {
    id: 655,
    cp: 4533,
    name: "Abrucena",
    provincia_id: 4
  },
  {
    id: 656,
    cp: 4540,
    name: "Nacimiento",
    provincia_id: 4
  },
  {
    id: 657,
    cp: 4549,
    name: "Gérgal",
    provincia_id: 4
  },
  {
    id: 658,
    cp: 4550,
    name: "Gérgal",
    provincia_id: 4
  },
  {
    id: 659,
    cp: 4558,
    name: "Gérgal",
    provincia_id: 4
  },
  {
    id: 660,
    cp: 4558,
    name: "Alboloduy",
    provincia_id: 4
  },
  {
    id: 661,
    cp: 4559,
    name: "Gérgal",
    provincia_id: 4
  },
  {
    id: 662,
    cp: 4560,
    name: "Gádor",
    provincia_id: 4
  },
  {
    id: 663,
    cp: 4567,
    name: "Alhabia",
    provincia_id: 4
  },
  {
    id: 664,
    cp: 4568,
    name: "Santa Cruz de Marchena",
    provincia_id: 4
  },
  {
    id: 665,
    cp: 4568,
    name: "Alsodux",
    provincia_id: 4
  },
  {
    id: 666,
    cp: 4569,
    name: "Terque",
    provincia_id: 4
  },
  {
    id: 667,
    cp: 4569,
    name: "Bentarique",
    provincia_id: 4
  },
  {
    id: 668,
    cp: 4600,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 669,
    cp: 4600,
    name: "Albox",
    provincia_id: 4
  },
  {
    id: 670,
    cp: 4610,
    name: "Cuevas del Almanzora",
    provincia_id: 4
  },
  {
    id: 671,
    cp: 4616,
    name: "Cuevas del Almanzora",
    provincia_id: 4
  },
  {
    id: 672,
    cp: 4617,
    name: "Cuevas del Almanzora",
    provincia_id: 4
  },
  {
    id: 673,
    cp: 4618,
    name: "Cuevas del Almanzora",
    provincia_id: 4
  },
  {
    id: 674,
    cp: 4619,
    name: "Cuevas del Almanzora",
    provincia_id: 4
  },
  {
    id: 675,
    cp: 4620,
    name: "Vera",
    provincia_id: 4
  },
  {
    id: 676,
    cp: 4628,
    name: "Antas",
    provincia_id: 4
  },
  {
    id: 677,
    cp: 4629,
    name: "Antas",
    provincia_id: 4
  },
  {
    id: 678,
    cp: 4630,
    name: "Garrucha",
    provincia_id: 4
  },
  {
    id: 679,
    cp: 4638,
    name: "Mojácar",
    provincia_id: 4
  },
  {
    id: 680,
    cp: 4639,
    name: "Mojácar",
    provincia_id: 4
  },
  {
    id: 681,
    cp: 4639,
    name: "Turre",
    provincia_id: 4
  },
  {
    id: 682,
    cp: 4640,
    name: "Oria",
    provincia_id: 4
  },
  {
    id: 683,
    cp: 4640,
    name: "Pulpí",
    provincia_id: 4
  },
  {
    id: 684,
    cp: 4647,
    name: "Cuevas del Almanzora",
    provincia_id: 4
  },
  {
    id: 685,
    cp: 4647,
    name: "Pulpí",
    provincia_id: 4
  },
  {
    id: 686,
    cp: 4648,
    name: "Pulpí",
    provincia_id: 4
  },
  {
    id: 687,
    cp: 4648,
    name: "Cuevas del Almanzora",
    provincia_id: 4
  },
  {
    id: 688,
    cp: 4649,
    name: "Pulpí",
    provincia_id: 4
  },
  {
    id: 689,
    cp: 4650,
    name: "Zurgena",
    provincia_id: 4
  },
  {
    id: 690,
    cp: 4659,
    name: "Terque",
    provincia_id: 4
  },
  {
    id: 691,
    cp: 4660,
    name: "Arboleas",
    provincia_id: 4
  },
  {
    id: 692,
    cp: 4661,
    name: "Zurgena",
    provincia_id: 4
  },
  {
    id: 693,
    cp: 4661,
    name: "Taberno",
    provincia_id: 4
  },
  {
    id: 694,
    cp: 4662,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 695,
    cp: 4662,
    name: "Zurgena",
    provincia_id: 4
  },
  {
    id: 696,
    cp: 4690,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 697,
    cp: 4691,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 698,
    cp: 4692,
    name: "Taberno",
    provincia_id: 4
  },
  {
    id: 699,
    cp: 4692,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 700,
    cp: 4692,
    name: "Albox",
    provincia_id: 4
  },
  {
    id: 701,
    cp: 4693,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 702,
    cp: 4694,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 703,
    cp: 4700,
    name: "El Ejido",
    provincia_id: 4
  },
  {
    id: 704,
    cp: 4710,
    name: "El Ejido",
    provincia_id: 4
  },
  {
    id: 705,
    cp: 4711,
    name: "El Ejido",
    provincia_id: 4
  },
  {
    id: 706,
    cp: 4712,
    name: "El Ejido",
    provincia_id: 4
  },
  {
    id: 707,
    cp: 4713,
    name: "Berja",
    provincia_id: 4
  },
  {
    id: 708,
    cp: 4715,
    name: "El Ejido",
    provincia_id: 4
  },
  {
    id: 709,
    cp: 4716,
    name: "El Ejido",
    provincia_id: 4
  },
  {
    id: 710,
    cp: 4720,
    name: "Roquetas de Mar",
    provincia_id: 4
  },
  {
    id: 711,
    cp: 4727,
    name: "Vícar",
    provincia_id: 4
  },
  {
    id: 712,
    cp: 4728,
    name: "Felix",
    provincia_id: 4
  },
  {
    id: 713,
    cp: 4729,
    name: "Enix",
    provincia_id: 4
  },
  {
    id: 714,
    cp: 4738,
    name: "Vícar",
    provincia_id: 4
  },
  {
    id: 715,
    cp: 4740,
    name: "Roquetas de Mar",
    provincia_id: 4
  },
  {
    id: 716,
    cp: 4741,
    name: "Roquetas de Mar",
    provincia_id: 4
  },
  {
    id: 717,
    cp: 4743,
    name: "Roquetas de Mar",
    provincia_id: 4
  },
  {
    id: 718,
    cp: 4745,
    name: "La Mojonera",
    provincia_id: 4
  },
  {
    id: 719,
    cp: 4746,
    name: "La Mojonera",
    provincia_id: 4
  },
  {
    id: 720,
    cp: 4750,
    name: "Dalías",
    provincia_id: 4
  },
  {
    id: 721,
    cp: 4760,
    name: "Berja",
    provincia_id: 4
  },
  {
    id: 722,
    cp: 4768,
    name: "Alcolea",
    provincia_id: 4
  },
  {
    id: 723,
    cp: 4768,
    name: "Berja",
    provincia_id: 4
  },
  {
    id: 724,
    cp: 4769,
    name: "Berja",
    provincia_id: 4
  },
  {
    id: 725,
    cp: 4770,
    name: "Adra",
    provincia_id: 4
  },
  {
    id: 726,
    cp: 4778,
    name: "Adra",
    provincia_id: 4
  },
  {
    id: 727,
    cp: 4779,
    name: "Adra",
    provincia_id: 4
  },
  {
    id: 728,
    cp: 4779,
    name: "Paterna del Río",
    provincia_id: 4
  },
  {
    id: 729,
    cp: 4779,
    name: "Bayárcal",
    provincia_id: 4
  },
  {
    id: 730,
    cp: 4800,
    name: "Albox",
    provincia_id: 4
  },
  {
    id: 731,
    cp: 4810,
    name: "Partaloa",
    provincia_id: 4
  },
  {
    id: 732,
    cp: 4810,
    name: "Oria",
    provincia_id: 4
  },
  {
    id: 733,
    cp: 4811,
    name: "Oria",
    provincia_id: 4
  },
  {
    id: 734,
    cp: 4812,
    name: "Albox",
    provincia_id: 4
  },
  {
    id: 735,
    cp: 4813,
    name: "Oria",
    provincia_id: 4
  },
  {
    id: 736,
    cp: 4813,
    name: "Albox",
    provincia_id: 4
  },
  {
    id: 737,
    cp: 4814,
    name: "Albox",
    provincia_id: 4
  },
  {
    id: 738,
    cp: 4815,
    name: "Cantoria",
    provincia_id: 4
  },
  {
    id: 739,
    cp: 4820,
    name: "Vélez-Rubio",
    provincia_id: 4
  },
  {
    id: 740,
    cp: 4825,
    name: "Chirivel",
    provincia_id: 4
  },
  {
    id: 741,
    cp: 4826,
    name: "Vélez-Rubio",
    provincia_id: 4
  },
  {
    id: 742,
    cp: 4827,
    name: "Vélez-Rubio",
    provincia_id: 4
  },
  {
    id: 743,
    cp: 4828,
    name: "Vélez-Rubio",
    provincia_id: 4
  },
  {
    id: 744,
    cp: 4829,
    name: "Vélez-Rubio",
    provincia_id: 4
  },
  {
    id: 745,
    cp: 4829,
    name: "Vélez-Blanco",
    provincia_id: 4
  },
  {
    id: 746,
    cp: 4830,
    name: "Vélez-Blanco",
    provincia_id: 4
  },
  {
    id: 747,
    cp: 4838,
    name: "María",
    provincia_id: 4
  },
  {
    id: 748,
    cp: 4839,
    name: "Vélez-Blanco",
    provincia_id: 4
  },
  {
    id: 749,
    cp: 4839,
    name: "María",
    provincia_id: 4
  },
  {
    id: 750,
    cp: 4850,
    name: "Cantoria",
    provincia_id: 4
  },
  {
    id: 751,
    cp: 4857,
    name: "Albánchez",
    provincia_id: 4
  },
  {
    id: 752,
    cp: 4858,
    name: "Cantoria",
    provincia_id: 4
  },
  {
    id: 753,
    cp: 4858,
    name: "Albánchez",
    provincia_id: 4
  },
  {
    id: 754,
    cp: 4859,
    name: "Cóbdar",
    provincia_id: 4
  },
  {
    id: 755,
    cp: 4859,
    name: "Chercos",
    provincia_id: 4
  },
  {
    id: 756,
    cp: 4859,
    name: "Líjar",
    provincia_id: 4
  },
  {
    id: 757,
    cp: 4860,
    name: "Olula del Río",
    provincia_id: 4
  },
  {
    id: 758,
    cp: 4867,
    name: "Macael",
    provincia_id: 4
  },
  {
    id: 759,
    cp: 4868,
    name: "Laroya",
    provincia_id: 4
  },
  {
    id: 760,
    cp: 4869,
    name: "Fines",
    provincia_id: 4
  },
  {
    id: 761,
    cp: 4870,
    name: "Purchena",
    provincia_id: 4
  },
  {
    id: 762,
    cp: 4877,
    name: "Lúcar",
    provincia_id: 4
  },
  {
    id: 763,
    cp: 4877,
    name: "Somontín",
    provincia_id: 4
  },
  {
    id: 764,
    cp: 4878,
    name: "Sierro",
    provincia_id: 4
  },
  {
    id: 765,
    cp: 4878,
    name: "Suflí",
    provincia_id: 4
  },
  {
    id: 766,
    cp: 4879,
    name: "Urrácal",
    provincia_id: 4
  },
  {
    id: 767,
    cp: 4880,
    name: "Tíjola",
    provincia_id: 4
  },
  {
    id: 768,
    cp: 4887,
    name: "Lúcar",
    provincia_id: 4
  },
  {
    id: 769,
    cp: 4887,
    name: "Tíjola",
    provincia_id: 4
  },
  {
    id: 770,
    cp: 4888,
    name: "Armu?a de Almanzora",
    provincia_id: 4
  },
  {
    id: 771,
    cp: 4888,
    name: "Bayarque",
    provincia_id: 4
  },
  {
    id: 772,
    cp: 4889,
    name: "Tíjola",
    provincia_id: 4
  },
  {
    id: 773,
    cp: 4889,
    name: "Bacares",
    provincia_id: 4
  },
  {
    id: 774,
    cp: 4890,
    name: "Serón",
    provincia_id: 4
  },
  {
    id: 775,
    cp: 4897,
    name: "Serón",
    provincia_id: 4
  },
  {
    id: 776,
    cp: 4897,
    name: "Alcóntar",
    provincia_id: 4
  },
  {
    id: 777,
    cp: 4898,
    name: "Serón",
    provincia_id: 4
  },
  {
    id: 778,
    cp: 4898,
    name: "Alcóntar",
    provincia_id: 4
  },
  {
    id: 779,
    cp: 4899,
    name: "Serón",
    provincia_id: 4
  },
  {
    id: 780,
    cp: 4899,
    name: "Oria",
    provincia_id: 4
  },
  {
    id: 781,
    cp: 4964,
    name: "Huércal-Overa",
    provincia_id: 4
  },
  {
    id: 782,
    cp: 5001,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 783,
    cp: 5002,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 784,
    cp: 5003,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 785,
    cp: 5004,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 786,
    cp: 5005,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 787,
    cp: 5100,
    name: "Navaluenga",
    provincia_id: 5
  },
  {
    id: 788,
    cp: 5110,
    name: "El Barraco",
    provincia_id: 5
  },
  {
    id: 789,
    cp: 5111,
    name: "San Juan de la Nava",
    provincia_id: 5
  },
  {
    id: 790,
    cp: 5113,
    name: "Burgohondo",
    provincia_id: 5
  },
  {
    id: 791,
    cp: 5114,
    name: "Villanueva de Ávila",
    provincia_id: 5
  },
  {
    id: 792,
    cp: 5115,
    name: "Serranillos",
    provincia_id: 5
  },
  {
    id: 793,
    cp: 5115,
    name: "Navarrevisca",
    provincia_id: 5
  },
  {
    id: 794,
    cp: 5116,
    name: "Serranillos",
    provincia_id: 5
  },
  {
    id: 795,
    cp: 5120,
    name: "Navalmoral",
    provincia_id: 5
  },
  {
    id: 796,
    cp: 5120,
    name: "Navarredondilla",
    provincia_id: 5
  },
  {
    id: 797,
    cp: 5120,
    name: "San Juan del Molinillo",
    provincia_id: 5
  },
  {
    id: 798,
    cp: 5122,
    name: "Navaquesera",
    provincia_id: 5
  },
  {
    id: 799,
    cp: 5122,
    name: "Navatalgordo",
    provincia_id: 5
  },
  {
    id: 800,
    cp: 5123,
    name: "Navalosa",
    provincia_id: 5
  },
  {
    id: 801,
    cp: 5123,
    name: "Hoyocasero",
    provincia_id: 5
  },
  {
    id: 802,
    cp: 5130,
    name: "Solosancho",
    provincia_id: 5
  },
  {
    id: 803,
    cp: 5131,
    name: "La Hija de Dios",
    provincia_id: 5
  },
  {
    id: 804,
    cp: 5131,
    name: "Mengamu?oz",
    provincia_id: 5
  },
  {
    id: 805,
    cp: 5131,
    name: "Narros del Puerto",
    provincia_id: 5
  },
  {
    id: 806,
    cp: 5132,
    name: "Hoyos de Miguel Mu?oz",
    provincia_id: 5
  },
  {
    id: 807,
    cp: 5132,
    name: "San Martín del Pimpollar",
    provincia_id: 5
  },
  {
    id: 808,
    cp: 5132,
    name: "Cepeda la Mora",
    provincia_id: 5
  },
  {
    id: 809,
    cp: 5133,
    name: "San Martín de la Vega del Alberche",
    provincia_id: 5
  },
  {
    id: 810,
    cp: 5134,
    name: "Navadijos",
    provincia_id: 5
  },
  {
    id: 811,
    cp: 5134,
    name: "Navalacruz",
    provincia_id: 5
  },
  {
    id: 812,
    cp: 5134,
    name: "Garganta del Villar",
    provincia_id: 5
  },
  {
    id: 813,
    cp: 5140,
    name: "Marlín",
    provincia_id: 5
  },
  {
    id: 814,
    cp: 5140,
    name: "Bularros",
    provincia_id: 5
  },
  {
    id: 815,
    cp: 5140,
    name: "Casasola",
    provincia_id: 5
  },
  {
    id: 816,
    cp: 5140,
    name: "Martiherrero",
    provincia_id: 5
  },
  {
    id: 817,
    cp: 5141,
    name: "Chamartín",
    provincia_id: 5
  },
  {
    id: 818,
    cp: 5141,
    name: "Sanchorreja",
    provincia_id: 5
  },
  {
    id: 819,
    cp: 5141,
    name: "Narrillos del Rebollar",
    provincia_id: 5
  },
  {
    id: 820,
    cp: 5141,
    name: "Gallegos de Altamiros",
    provincia_id: 5
  },
  {
    id: 821,
    cp: 5143,
    name: "Valdecasa",
    provincia_id: 5
  },
  {
    id: 822,
    cp: 5145,
    name: "San Juan del Olmo",
    provincia_id: 5
  },
  {
    id: 823,
    cp: 5145,
    name: "Mu?ico",
    provincia_id: 5
  },
  {
    id: 824,
    cp: 5145,
    name: "Manjabálago y Ortigosa de Rioalmar",
    provincia_id: 5
  },
  {
    id: 825,
    cp: 5146,
    name: "El Parral",
    provincia_id: 5
  },
  {
    id: 826,
    cp: 5146,
    name: "Herreros de Suso",
    provincia_id: 5
  },
  {
    id: 827,
    cp: 5146,
    name: "San García de Ingelmos",
    provincia_id: 5
  },
  {
    id: 828,
    cp: 5146,
    name: "Mancera de Arriba",
    provincia_id: 5
  },
  {
    id: 829,
    cp: 5146,
    name: "Mirue?a de los Infanzones",
    provincia_id: 5
  },
  {
    id: 830,
    cp: 5146,
    name: "Blascomillán",
    provincia_id: 5
  },
  {
    id: 831,
    cp: 5146,
    name: "Vita",
    provincia_id: 5
  },
  {
    id: 832,
    cp: 5147,
    name: "Gallegos de Sobrinos",
    provincia_id: 5
  },
  {
    id: 833,
    cp: 5147,
    name: "Hurtumpascual",
    provincia_id: 5
  },
  {
    id: 834,
    cp: 5148,
    name: "Cabezas del Villar",
    provincia_id: 5
  },
  {
    id: 835,
    cp: 5149,
    name: "Solana de Rioalmar",
    provincia_id: 5
  },
  {
    id: 836,
    cp: 5149,
    name: "Cillán",
    provincia_id: 5
  },
  {
    id: 837,
    cp: 5150,
    name: "Riocabado",
    provincia_id: 5
  },
  {
    id: 838,
    cp: 5150,
    name: "San Miguel de Serrezuela",
    provincia_id: 5
  },
  {
    id: 839,
    cp: 5150,
    name: "Pascualcobo",
    provincia_id: 5
  },
  {
    id: 840,
    cp: 5151,
    name: "Diego del Carpio",
    provincia_id: 5
  },
  {
    id: 841,
    cp: 5151,
    name: "Martínez",
    provincia_id: 5
  },
  {
    id: 842,
    cp: 5152,
    name: "Martínez",
    provincia_id: 5
  },
  {
    id: 843,
    cp: 5153,
    name: "Arevalillo",
    provincia_id: 5
  },
  {
    id: 844,
    cp: 5153,
    name: "El Mirón",
    provincia_id: 5
  },
  {
    id: 845,
    cp: 5153,
    name: "Collado del Mirón",
    provincia_id: 5
  },
  {
    id: 846,
    cp: 5153,
    name: "Malpartida de Corneja",
    provincia_id: 5
  },
  {
    id: 847,
    cp: 5153,
    name: "Becedillas",
    provincia_id: 5
  },
  {
    id: 848,
    cp: 5154,
    name: "Narrillos del Álamo",
    provincia_id: 5
  },
  {
    id: 849,
    cp: 5154,
    name: "El Mirón",
    provincia_id: 5
  },
  {
    id: 850,
    cp: 5154,
    name: "Zapardiel de la Ca?ada",
    provincia_id: 5
  },
  {
    id: 851,
    cp: 5160,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 852,
    cp: 5161,
    name: "Mingorría",
    provincia_id: 5
  },
  {
    id: 853,
    cp: 5162,
    name: "Las Berlanas",
    provincia_id: 5
  },
  {
    id: 854,
    cp: 5163,
    name: "Gotarrendura",
    provincia_id: 5
  },
  {
    id: 855,
    cp: 5163,
    name: "Monsalupe",
    provincia_id: 5
  },
  {
    id: 856,
    cp: 5163,
    name: "Pe?alba de Ávila",
    provincia_id: 5
  },
  {
    id: 857,
    cp: 5164,
    name: "El Oso",
    provincia_id: 5
  },
  {
    id: 858,
    cp: 5164,
    name: "Riocabado",
    provincia_id: 5
  },
  {
    id: 859,
    cp: 5164,
    name: "San Pascual",
    provincia_id: 5
  },
  {
    id: 860,
    cp: 5164,
    name: "Hernansancho",
    provincia_id: 5
  },
  {
    id: 861,
    cp: 5164,
    name: "Villanueva de Gómez",
    provincia_id: 5
  },
  {
    id: 862,
    cp: 5165,
    name: "Pedro-Rodríguez",
    provincia_id: 5
  },
  {
    id: 863,
    cp: 5165,
    name: "Ti?osillos",
    provincia_id: 5
  },
  {
    id: 864,
    cp: 5165,
    name: "Cabizuela",
    provincia_id: 5
  },
  {
    id: 865,
    cp: 5165,
    name: "El Bohodón",
    provincia_id: 5
  },
  {
    id: 866,
    cp: 5170,
    name: "El Tiemblo",
    provincia_id: 5
  },
  {
    id: 867,
    cp: 5190,
    name: "Riofrío",
    provincia_id: 5
  },
  {
    id: 868,
    cp: 5191,
    name: "Niharra",
    provincia_id: 5
  },
  {
    id: 869,
    cp: 5191,
    name: "Mironcillo",
    provincia_id: 5
  },
  {
    id: 870,
    cp: 5192,
    name: "Mu?opepe",
    provincia_id: 5
  },
  {
    id: 871,
    cp: 5192,
    name: "La Colilla",
    provincia_id: 5
  },
  {
    id: 872,
    cp: 5192,
    name: "La Serrada",
    provincia_id: 5
  },
  {
    id: 873,
    cp: 5193,
    name: "Santa María del Cubillo",
    provincia_id: 5
  },
  {
    id: 874,
    cp: 5193,
    name: "Ojos-Albos",
    provincia_id: 5
  },
  {
    id: 875,
    cp: 5194,
    name: "Berrocalejo de Aragona",
    provincia_id: 5
  },
  {
    id: 876,
    cp: 5194,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 877,
    cp: 5194,
    name: "Mediana de Voltoya",
    provincia_id: 5
  },
  {
    id: 878,
    cp: 5195,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 879,
    cp: 5196,
    name: "Herradón de Pinares",
    provincia_id: 5
  },
  {
    id: 880,
    cp: 5196,
    name: "Tornadizos de Ávila",
    provincia_id: 5
  },
  {
    id: 881,
    cp: 5197,
    name: "El Fresno",
    provincia_id: 5
  },
  {
    id: 882,
    cp: 5197,
    name: "Gemu?o",
    provincia_id: 5
  },
  {
    id: 883,
    cp: 5197,
    name: "Ávila",
    provincia_id: 5
  },
  {
    id: 884,
    cp: 5198,
    name: "Sotalbo",
    provincia_id: 5
  },
  {
    id: 885,
    cp: 5200,
    name: "Arévalo",
    provincia_id: 5
  },
  {
    id: 886,
    cp: 5210,
    name: "Horcajo de las Torres",
    provincia_id: 5
  },
  {
    id: 887,
    cp: 5210,
    name: "San Juan de la Encinilla",
    provincia_id: 5
  },
  {
    id: 888,
    cp: 5211,
    name: "Cabezas del Pozo",
    provincia_id: 5
  },
  {
    id: 889,
    cp: 5211,
    name: "Cisla",
    provincia_id: 5
  },
  {
    id: 890,
    cp: 5211,
    name: "Cantiveros",
    provincia_id: 5
  },
  {
    id: 891,
    cp: 5211,
    name: "Bernuy-Zapardiel",
    provincia_id: 5
  },
  {
    id: 892,
    cp: 5212,
    name: "Canales",
    provincia_id: 5
  },
  {
    id: 893,
    cp: 5212,
    name: "Fuente el Saúz",
    provincia_id: 5
  },
  {
    id: 894,
    cp: 5212,
    name: "Villanueva del Aceral",
    provincia_id: 5
  },
  {
    id: 895,
    cp: 5212,
    name: "Fuentes de A?o",
    provincia_id: 5
  },
  {
    id: 896,
    cp: 5212,
    name: "Aldeaseca",
    provincia_id: 5
  },
  {
    id: 897,
    cp: 5213,
    name: "Langa",
    provincia_id: 5
  },
  {
    id: 898,
    cp: 5215,
    name: "Sinlabajos",
    provincia_id: 5
  },
  {
    id: 899,
    cp: 5215,
    name: "Palacios de Goda",
    provincia_id: 5
  },
  {
    id: 900,
    cp: 5215,
    name: "Donvidas",
    provincia_id: 5
  },
  {
    id: 901,
    cp: 5216,
    name: "Nava de Arévalo",
    provincia_id: 5
  },
  {
    id: 902,
    cp: 5217,
    name: "San Vicente de Arévalo",
    provincia_id: 5
  },
  {
    id: 903,
    cp: 5217,
    name: "Donjimeno",
    provincia_id: 5
  },
  {
    id: 904,
    cp: 5217,
    name: "Cabezas de Alambre",
    provincia_id: 5
  },
  {
    id: 905,
    cp: 5217,
    name: "Constanzana",
    provincia_id: 5
  },
  {
    id: 906,
    cp: 5220,
    name: "Madrigal de las Altas Torres",
    provincia_id: 5
  },
  {
    id: 907,
    cp: 5229,
    name: "Barromán",
    provincia_id: 5
  },
  {
    id: 908,
    cp: 5229,
    name: "Castellanos de Zapardiel",
    provincia_id: 5
  },
  {
    id: 909,
    cp: 5229,
    name: "San Esteban de Zapardiel",
    provincia_id: 5
  },
  {
    id: 910,
    cp: 5229,
    name: "Bercial de Zapardiel",
    provincia_id: 5
  },
  {
    id: 911,
    cp: 5230,
    name: "Las Navas del Marqués",
    provincia_id: 5
  },
  {
    id: 912,
    cp: 5239,
    name: "Las Navas del Marqués",
    provincia_id: 5
  },
  {
    id: 913,
    cp: 5239,
    name: "Peguerinos",
    provincia_id: 5
  },
  {
    id: 914,
    cp: 5240,
    name: "Navalperal de Pinares",
    provincia_id: 5
  },
  {
    id: 915,
    cp: 5250,
    name: "El Hoyo de Pinares",
    provincia_id: 5
  },
  {
    id: 916,
    cp: 5260,
    name: "Cebreros",
    provincia_id: 5
  },
  {
    id: 917,
    cp: 5267,
    name: "San Bartolomé de Pinares",
    provincia_id: 5
  },
  {
    id: 918,
    cp: 5268,
    name: "Herradón de Pinares",
    provincia_id: 5
  },
  {
    id: 919,
    cp: 5268,
    name: "Santa Cruz de Pinares",
    provincia_id: 5
  },
  {
    id: 920,
    cp: 5270,
    name: "El Tiemblo",
    provincia_id: 5
  },
  {
    id: 921,
    cp: 5278,
    name: "El Barraco",
    provincia_id: 5
  },
  {
    id: 922,
    cp: 5278,
    name: "El Tiemblo",
    provincia_id: 5
  },
  {
    id: 923,
    cp: 5279,
    name: "El Tiemblo",
    provincia_id: 5
  },
  {
    id: 924,
    cp: 5280,
    name: "Mingorría",
    provincia_id: 5
  },
  {
    id: 925,
    cp: 5289,
    name: "San Esteban de los Patos",
    provincia_id: 5
  },
  {
    id: 926,
    cp: 5289,
    name: "Tolba?os",
    provincia_id: 5
  },
  {
    id: 927,
    cp: 5290,
    name: "Sanchidrián",
    provincia_id: 5
  },
  {
    id: 928,
    cp: 5290,
    name: "Blascosancho",
    provincia_id: 5
  },
  {
    id: 929,
    cp: 5291,
    name: "Maello",
    provincia_id: 5
  },
  {
    id: 930,
    cp: 5292,
    name: "Vega de Santa María",
    provincia_id: 5
  },
  {
    id: 931,
    cp: 5292,
    name: "Pozanco",
    provincia_id: 5
  },
  {
    id: 932,
    cp: 5292,
    name: "Santo Domingo de las Posadas",
    provincia_id: 5
  },
  {
    id: 933,
    cp: 5292,
    name: "Velayos",
    provincia_id: 5
  },
  {
    id: 934,
    cp: 5292,
    name: "Pajares de Adaja",
    provincia_id: 5
  },
  {
    id: 935,
    cp: 5294,
    name: "Herradón de Pinares",
    provincia_id: 5
  },
  {
    id: 936,
    cp: 5296,
    name: "Espinosa de los Caballeros",
    provincia_id: 5
  },
  {
    id: 937,
    cp: 5296,
    name: "Adanero",
    provincia_id: 5
  },
  {
    id: 938,
    cp: 5296,
    name: "Gutierre-Mu?oz",
    provincia_id: 5
  },
  {
    id: 939,
    cp: 5296,
    name: "Orbita",
    provincia_id: 5
  },
  {
    id: 940,
    cp: 5298,
    name: "Tolba?os",
    provincia_id: 5
  },
  {
    id: 941,
    cp: 5298,
    name: "Rasueros",
    provincia_id: 5
  },
  {
    id: 942,
    cp: 5298,
    name: "Mamblas",
    provincia_id: 5
  },
  {
    id: 943,
    cp: 5299,
    name: "Blasconu?o de Matacabras",
    provincia_id: 5
  },
  {
    id: 944,
    cp: 5299,
    name: "Moraleja de Matacabras",
    provincia_id: 5
  },
  {
    id: 945,
    cp: 5300,
    name: "Crespos",
    provincia_id: 5
  },
  {
    id: 946,
    cp: 5309,
    name: "Vi?egra de Mora?a",
    provincia_id: 5
  },
  {
    id: 947,
    cp: 5309,
    name: "Rivilla de Barajas",
    provincia_id: 5
  },
  {
    id: 948,
    cp: 5309,
    name: "Mu?ogrande",
    provincia_id: 5
  },
  {
    id: 949,
    cp: 5309,
    name: "Crespos",
    provincia_id: 5
  },
  {
    id: 950,
    cp: 5309,
    name: "Collado de Contreras",
    provincia_id: 5
  },
  {
    id: 951,
    cp: 5310,
    name: "Fontiveros",
    provincia_id: 5
  },
  {
    id: 952,
    cp: 5320,
    name: "Carde?osa",
    provincia_id: 5
  },
  {
    id: 953,
    cp: 5340,
    name: "Bularros",
    provincia_id: 5
  },
  {
    id: 954,
    cp: 5340,
    name: "Aveinte",
    provincia_id: 5
  },
  {
    id: 955,
    cp: 5350,
    name: "San Pedro del Arroyo",
    provincia_id: 5
  },
  {
    id: 956,
    cp: 5357,
    name: "Villaflor",
    provincia_id: 5
  },
  {
    id: 957,
    cp: 5357,
    name: "Aveinte",
    provincia_id: 5
  },
  {
    id: 958,
    cp: 5357,
    name: "Mu?ogrande",
    provincia_id: 5
  },
  {
    id: 959,
    cp: 5357,
    name: "Grandes y San Martín",
    provincia_id: 5
  },
  {
    id: 960,
    cp: 5357,
    name: "Brabos",
    provincia_id: 5
  },
  {
    id: 961,
    cp: 5357,
    name: "Sigeres",
    provincia_id: 5
  },
  {
    id: 962,
    cp: 5357,
    name: "Santo Tomé de Zabarcos",
    provincia_id: 5
  },
  {
    id: 963,
    cp: 5358,
    name: "Mu?omer del Peco",
    provincia_id: 5
  },
  {
    id: 964,
    cp: 5358,
    name: "Narros de Saldue?a",
    provincia_id: 5
  },
  {
    id: 965,
    cp: 5358,
    name: "Albornos",
    provincia_id: 5
  },
  {
    id: 966,
    cp: 5358,
    name: "San Juan de la Encinilla",
    provincia_id: 5
  },
  {
    id: 967,
    cp: 5358,
    name: "Papatrigo",
    provincia_id: 5
  },
  {
    id: 968,
    cp: 5364,
    name: "Hoyos del Espino",
    provincia_id: 5
  },
  {
    id: 969,
    cp: 5370,
    name: "Narros del Castillo",
    provincia_id: 5
  },
  {
    id: 970,
    cp: 5370,
    name: "Flores de Ávila",
    provincia_id: 5
  },
  {
    id: 971,
    cp: 5380,
    name: "Mu?osancho",
    provincia_id: 5
  },
  {
    id: 972,
    cp: 5380,
    name: "Blascomillán",
    provincia_id: 5
  },
  {
    id: 973,
    cp: 5380,
    name: "Gimialcón",
    provincia_id: 5
  },
  {
    id: 974,
    cp: 5380,
    name: "Salvadiós",
    provincia_id: 5
  },
  {
    id: 975,
    cp: 5400,
    name: "Arenas de San Pedro",
    provincia_id: 5
  },
  {
    id: 976,
    cp: 5410,
    name: "Mombeltrán",
    provincia_id: 5
  },
  {
    id: 977,
    cp: 5412,
    name: "San Esteban del Valle",
    provincia_id: 5
  },
  {
    id: 978,
    cp: 5413,
    name: "Santa Cruz del Valle",
    provincia_id: 5
  },
  {
    id: 979,
    cp: 5413,
    name: "Villarejo del Valle",
    provincia_id: 5
  },
  {
    id: 980,
    cp: 5414,
    name: "Cuevas del Valle",
    provincia_id: 5
  },
  {
    id: 981,
    cp: 5415,
    name: "El Hornillo",
    provincia_id: 5
  },
  {
    id: 982,
    cp: 5416,
    name: "El Arenal",
    provincia_id: 5
  },
  {
    id: 983,
    cp: 5417,
    name: "Guisando",
    provincia_id: 5
  },
  {
    id: 984,
    cp: 5418,
    name: "Arenas de San Pedro",
    provincia_id: 5
  },
  {
    id: 985,
    cp: 5420,
    name: "Sotillo de la Adrada",
    provincia_id: 5
  },
  {
    id: 986,
    cp: 5427,
    name: "Fresnedilla",
    provincia_id: 5
  },
  {
    id: 987,
    cp: 5427,
    name: "Higuera de las Due?as",
    provincia_id: 5
  },
  {
    id: 988,
    cp: 5428,
    name: "Casillas",
    provincia_id: 5
  },
  {
    id: 989,
    cp: 5429,
    name: "Navahondilla",
    provincia_id: 5
  },
  {
    id: 990,
    cp: 5429,
    name: "Casillas",
    provincia_id: 5
  },
  {
    id: 991,
    cp: 5429,
    name: "Santa María del Tiétar",
    provincia_id: 5
  },
  {
    id: 992,
    cp: 5430,
    name: "La Adrada",
    provincia_id: 5
  },
  {
    id: 993,
    cp: 5440,
    name: "Piedralaves",
    provincia_id: 5
  },
  {
    id: 994,
    cp: 5450,
    name: "Casavieja",
    provincia_id: 5
  },
  {
    id: 995,
    cp: 5460,
    name: "Gavilanes",
    provincia_id: 5
  },
  {
    id: 996,
    cp: 5461,
    name: "Mijares",
    provincia_id: 5
  },
  {
    id: 997,
    cp: 5470,
    name: "Pedro Bernardo",
    provincia_id: 5
  },
  {
    id: 998,
    cp: 5480,
    name: "Candeleda",
    provincia_id: 5
  },
  {
    id: 999,
    cp: 5489,
    name: "Candeleda",
    provincia_id: 5
  },
  {
    id: 1000,
    cp: 5490,
    name: "Lanzahíta",
    provincia_id: 5
  },
  {
    id: 1001,
    cp: 5491,
    name: "Mombeltrán",
    provincia_id: 5
  },
  {
    id: 1002,
    cp: 5492,
    name: "Poyales del Hoyo",
    provincia_id: 5
  },
  {
    id: 1003,
    cp: 5500,
    name: "Piedrahíta",
    provincia_id: 5
  },
  {
    id: 1004,
    cp: 5510,
    name: "Santa María del Berrocal",
    provincia_id: 5
  },
  {
    id: 1005,
    cp: 5511,
    name: "Santa María del Berrocal",
    provincia_id: 5
  },
  {
    id: 1006,
    cp: 5513,
    name: "Burgohondo",
    provincia_id: 5
  },
  {
    id: 1007,
    cp: 5514,
    name: "Bonilla de la Sierra",
    provincia_id: 5
  },
  {
    id: 1008,
    cp: 5514,
    name: "Tórtoles",
    provincia_id: 5
  },
  {
    id: 1009,
    cp: 5514,
    name: "San Miguel de Corneja",
    provincia_id: 5
  },
  {
    id: 1010,
    cp: 5514,
    name: "Mesegar de Corneja",
    provincia_id: 5
  },
  {
    id: 1011,
    cp: 5514,
    name: "Navaescurial",
    provincia_id: 5
  },
  {
    id: 1012,
    cp: 5515,
    name: "Piedrahíta",
    provincia_id: 5
  },
  {
    id: 1013,
    cp: 5516,
    name: "Villar de Corneja",
    provincia_id: 5
  },
  {
    id: 1014,
    cp: 5516,
    name: "San Bartolomé de Corneja",
    provincia_id: 5
  },
  {
    id: 1015,
    cp: 5516,
    name: "Hoyorredondo",
    provincia_id: 5
  },
  {
    id: 1016,
    cp: 5519,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 1017,
    cp: 5520,
    name: "La Torre",
    provincia_id: 5
  },
  {
    id: 1018,
    cp: 5520,
    name: "Padiernos",
    provincia_id: 5
  },
  {
    id: 1019,
    cp: 5520,
    name: "Salobral",
    provincia_id: 5
  },
  {
    id: 1020,
    cp: 5530,
    name: "Mu?ogalindo",
    provincia_id: 5
  },
  {
    id: 1021,
    cp: 5530,
    name: "Santa María del Arroyo",
    provincia_id: 5
  },
  {
    id: 1022,
    cp: 5540,
    name: "Mu?ana",
    provincia_id: 5
  },
  {
    id: 1023,
    cp: 5540,
    name: "Piedralaves",
    provincia_id: 5
  },
  {
    id: 1024,
    cp: 5540,
    name: "La Torre",
    provincia_id: 5
  },
  {
    id: 1025,
    cp: 5560,
    name: "Mu?otello",
    provincia_id: 5
  },
  {
    id: 1026,
    cp: 5560,
    name: "Amavida",
    provincia_id: 5
  },
  {
    id: 1027,
    cp: 5560,
    name: "Vadillo de la Sierra",
    provincia_id: 5
  },
  {
    id: 1028,
    cp: 5560,
    name: "Villatoro",
    provincia_id: 5
  },
  {
    id: 1029,
    cp: 5560,
    name: "Poveda",
    provincia_id: 5
  },
  {
    id: 1030,
    cp: 5560,
    name: "Pradosegar",
    provincia_id: 5
  },
  {
    id: 1031,
    cp: 5570,
    name: "Bonilla de la Sierra",
    provincia_id: 5
  },
  {
    id: 1032,
    cp: 5571,
    name: "Navacepedilla de Corneja",
    provincia_id: 5
  },
  {
    id: 1033,
    cp: 5571,
    name: "Villafranca de la Sierra",
    provincia_id: 5
  },
  {
    id: 1034,
    cp: 5571,
    name: "Casas del Puerto",
    provincia_id: 5
  },
  {
    id: 1035,
    cp: 5580,
    name: "Santa María de los Caballeros",
    provincia_id: 5
  },
  {
    id: 1036,
    cp: 5580,
    name: "Aldeanueva de Santa Cruz",
    provincia_id: 5
  },
  {
    id: 1037,
    cp: 5580,
    name: "Avellaneda",
    provincia_id: 5
  },
  {
    id: 1038,
    cp: 5581,
    name: "Santa María de los Caballeros",
    provincia_id: 5
  },
  {
    id: 1039,
    cp: 5591,
    name: "Villanueva del Campillo",
    provincia_id: 5
  },
  {
    id: 1040,
    cp: 5592,
    name: "Santiago del Collado",
    provincia_id: 5
  },
  {
    id: 1041,
    cp: 5593,
    name: "La Aldehuela",
    provincia_id: 5
  },
  {
    id: 1042,
    cp: 5600,
    name: "El Barco de Ávila",
    provincia_id: 5
  },
  {
    id: 1043,
    cp: 5610,
    name: "Becedas",
    provincia_id: 5
  },
  {
    id: 1044,
    cp: 5619,
    name: "Gilbuena",
    provincia_id: 5
  },
  {
    id: 1045,
    cp: 5619,
    name: "San Bartolomé de Béjar",
    provincia_id: 5
  },
  {
    id: 1046,
    cp: 5619,
    name: "Neila de San Miguel",
    provincia_id: 5
  },
  {
    id: 1047,
    cp: 5619,
    name: "Medinilla",
    provincia_id: 5
  },
  {
    id: 1048,
    cp: 5620,
    name: "La Carrera",
    provincia_id: 5
  },
  {
    id: 1049,
    cp: 5621,
    name: "Puerto Castilla",
    provincia_id: 5
  },
  {
    id: 1050,
    cp: 5621,
    name: "Solana de Ávila",
    provincia_id: 5
  },
  {
    id: 1051,
    cp: 5630,
    name: "Santiago del Tormes",
    provincia_id: 5
  },
  {
    id: 1052,
    cp: 5630,
    name: "Bohoyo",
    provincia_id: 5
  },
  {
    id: 1053,
    cp: 5631,
    name: "Zapardiel de la Ribera",
    provincia_id: 5
  },
  {
    id: 1054,
    cp: 5631,
    name: "Navalperal de Tormes",
    provincia_id: 5
  },
  {
    id: 1055,
    cp: 5632,
    name: "San Juan de Gredos",
    provincia_id: 5
  },
  {
    id: 1056,
    cp: 5632,
    name: "Navalperal de Tormes",
    provincia_id: 5
  },
  {
    id: 1057,
    cp: 5633,
    name: "San Juan de Gredos",
    provincia_id: 5
  },
  {
    id: 1058,
    cp: 5634,
    name: "Hoyos del Collado",
    provincia_id: 5
  },
  {
    id: 1059,
    cp: 5634,
    name: "Hoyos del Espino",
    provincia_id: 5
  },
  {
    id: 1060,
    cp: 5635,
    name: "Navarredonda de Gredos",
    provincia_id: 5
  },
  {
    id: 1061,
    cp: 5640,
    name: "Gavilanes",
    provincia_id: 5
  },
  {
    id: 1062,
    cp: 5690,
    name: "Los Llanos de Tormes",
    provincia_id: 5
  },
  {
    id: 1063,
    cp: 5690,
    name: "Bohoyo",
    provincia_id: 5
  },
  {
    id: 1064,
    cp: 5691,
    name: "Solana de Ávila",
    provincia_id: 5
  },
  {
    id: 1065,
    cp: 5692,
    name: "El Losar del Barco",
    provincia_id: 5
  },
  {
    id: 1066,
    cp: 5693,
    name: "Umbrías",
    provincia_id: 5
  },
  {
    id: 1067,
    cp: 5693,
    name: "Gil García",
    provincia_id: 5
  },
  {
    id: 1068,
    cp: 5694,
    name: "Becedas",
    provincia_id: 5
  },
  {
    id: 1069,
    cp: 5694,
    name: "Junciana",
    provincia_id: 5
  },
  {
    id: 1070,
    cp: 5695,
    name: "La Horcajada",
    provincia_id: 5
  },
  {
    id: 1071,
    cp: 5696,
    name: "San Lorenzo de Tormes",
    provincia_id: 5
  },
  {
    id: 1072,
    cp: 5696,
    name: "La Horcajada",
    provincia_id: 5
  },
  {
    id: 1073,
    cp: 5697,
    name: "Nava del Barco",
    provincia_id: 5
  },
  {
    id: 1074,
    cp: 5697,
    name: "Navatejares",
    provincia_id: 5
  },
  {
    id: 1075,
    cp: 5697,
    name: "Tormellas",
    provincia_id: 5
  },
  {
    id: 1076,
    cp: 5697,
    name: "Navalonguilla",
    provincia_id: 5
  },
  {
    id: 1077,
    cp: 6001,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1078,
    cp: 6002,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1079,
    cp: 6003,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1080,
    cp: 6004,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1081,
    cp: 6005,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1082,
    cp: 6006,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1083,
    cp: 6007,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1084,
    cp: 6008,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1085,
    cp: 6009,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1086,
    cp: 6010,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1087,
    cp: 6011,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1088,
    cp: 6100,
    name: "Olivenza",
    provincia_id: 6
  },
  {
    id: 1089,
    cp: 6105,
    name: "Cheles",
    provincia_id: 6
  },
  {
    id: 1090,
    cp: 6106,
    name: "Olivenza",
    provincia_id: 6
  },
  {
    id: 1091,
    cp: 6107,
    name: "Olivenza",
    provincia_id: 6
  },
  {
    id: 1092,
    cp: 6108,
    name: "Olivenza",
    provincia_id: 6
  },
  {
    id: 1093,
    cp: 6109,
    name: "Olivenza",
    provincia_id: 6
  },
  {
    id: 1094,
    cp: 6110,
    name: "Villanueva del Fresno",
    provincia_id: 6
  },
  {
    id: 1095,
    cp: 6120,
    name: "Oliva de la Frontera",
    provincia_id: 6
  },
  {
    id: 1096,
    cp: 6129,
    name: "Zahínos",
    provincia_id: 6
  },
  {
    id: 1097,
    cp: 6130,
    name: "Valverde de Leganés",
    provincia_id: 6
  },
  {
    id: 1098,
    cp: 6131,
    name: "Alconchel",
    provincia_id: 6
  },
  {
    id: 1099,
    cp: 6132,
    name: "Higuera de Vargas",
    provincia_id: 6
  },
  {
    id: 1100,
    cp: 6133,
    name: "Táliga",
    provincia_id: 6
  },
  {
    id: 1101,
    cp: 6134,
    name: "Valencia del Mombuey",
    provincia_id: 6
  },
  {
    id: 1102,
    cp: 6140,
    name: "Talavera la Real",
    provincia_id: 6
  },
  {
    id: 1103,
    cp: 6150,
    name: "Santa Marta",
    provincia_id: 6
  },
  {
    id: 1104,
    cp: 6160,
    name: "Barcarrota",
    provincia_id: 6
  },
  {
    id: 1105,
    cp: 6170,
    name: "La Albuera",
    provincia_id: 6
  },
  {
    id: 1106,
    cp: 6170,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1107,
    cp: 6171,
    name: "Almendral",
    provincia_id: 6
  },
  {
    id: 1108,
    cp: 6172,
    name: "Torre de Miguel Sesmero",
    provincia_id: 6
  },
  {
    id: 1109,
    cp: 6173,
    name: "Nogales",
    provincia_id: 6
  },
  {
    id: 1110,
    cp: 6174,
    name: "Salvaleón",
    provincia_id: 6
  },
  {
    id: 1111,
    cp: 6174,
    name: "La Haba",
    provincia_id: 6
  },
  {
    id: 1112,
    cp: 6175,
    name: "Salvatierra de los Barros",
    provincia_id: 6
  },
  {
    id: 1113,
    cp: 6176,
    name: "La Morera",
    provincia_id: 6
  },
  {
    id: 1114,
    cp: 6176,
    name: "La Parra",
    provincia_id: 6
  },
  {
    id: 1115,
    cp: 6177,
    name: "Valle de Matamoros",
    provincia_id: 6
  },
  {
    id: 1116,
    cp: 6178,
    name: "Valle de Santa Ana",
    provincia_id: 6
  },
  {
    id: 1117,
    cp: 6180,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1118,
    cp: 6181,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1119,
    cp: 6182,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1120,
    cp: 6183,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1121,
    cp: 6184,
    name: "Pueblonuevo del Guadiana",
    provincia_id: 6
  },
  {
    id: 1122,
    cp: 6185,
    name: "Valdelacalzada",
    provincia_id: 6
  },
  {
    id: 1123,
    cp: 6186,
    name: "Guadiana del Caudillo",
    provincia_id: 6
  },
  {
    id: 1124,
    cp: 6187,
    name: "Lobón",
    provincia_id: 6
  },
  {
    id: 1125,
    cp: 6190,
    name: "La Roca de la Sierra",
    provincia_id: 6
  },
  {
    id: 1126,
    cp: 6191,
    name: "Puebla de Obando",
    provincia_id: 6
  },
  {
    id: 1127,
    cp: 6192,
    name: "Villar del Rey",
    provincia_id: 6
  },
  {
    id: 1128,
    cp: 6193,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1129,
    cp: 6194,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1130,
    cp: 6195,
    name: "Badajoz",
    provincia_id: 6
  },
  {
    id: 1131,
    cp: 6196,
    name: "Corte de Peleas",
    provincia_id: 6
  },
  {
    id: 1132,
    cp: 6196,
    name: "Solana de los Barros",
    provincia_id: 6
  },
  {
    id: 1133,
    cp: 6197,
    name: "Entrín Bajo",
    provincia_id: 6
  },
  {
    id: 1134,
    cp: 6198,
    name: "Solana de los Barros",
    provincia_id: 6
  },
  {
    id: 1135,
    cp: 6200,
    name: "Almendralejo",
    provincia_id: 6
  },
  {
    id: 1136,
    cp: 6207,
    name: "Aceuchal",
    provincia_id: 6
  },
  {
    id: 1137,
    cp: 6208,
    name: "Villalba de los Barros",
    provincia_id: 6
  },
  {
    id: 1138,
    cp: 6209,
    name: "Solana de los Barros",
    provincia_id: 6
  },
  {
    id: 1139,
    cp: 6210,
    name: "Torremejía",
    provincia_id: 6
  },
  {
    id: 1140,
    cp: 6220,
    name: "Villafranca de los Barros",
    provincia_id: 6
  },
  {
    id: 1141,
    cp: 6225,
    name: "Ribera del Fresno",
    provincia_id: 6
  },
  {
    id: 1142,
    cp: 6226,
    name: "Hinojosa del Valle",
    provincia_id: 6
  },
  {
    id: 1143,
    cp: 6227,
    name: "Llera",
    provincia_id: 6
  },
  {
    id: 1144,
    cp: 6228,
    name: "Hornachos",
    provincia_id: 6
  },
  {
    id: 1145,
    cp: 6229,
    name: "Puebla del Prior",
    provincia_id: 6
  },
  {
    id: 1146,
    cp: 6230,
    name: "Los Santos de Maimona",
    provincia_id: 6
  },
  {
    id: 1147,
    cp: 6240,
    name: "Fuente de Cantos",
    provincia_id: 6
  },
  {
    id: 1148,
    cp: 6249,
    name: "Carmonita",
    provincia_id: 6
  },
  {
    id: 1149,
    cp: 6249,
    name: "Calzadilla de los Barros",
    provincia_id: 6
  },
  {
    id: 1150,
    cp: 6250,
    name: "Bienvenida",
    provincia_id: 6
  },
  {
    id: 1151,
    cp: 6260,
    name: "Monesterio",
    provincia_id: 6
  },
  {
    id: 1152,
    cp: 6270,
    name: "Segura de León",
    provincia_id: 6
  },
  {
    id: 1153,
    cp: 6280,
    name: "Fuentes de León",
    provincia_id: 6
  },
  {
    id: 1154,
    cp: 6290,
    name: "Usagre",
    provincia_id: 6
  },
  {
    id: 1155,
    cp: 6291,
    name: "Montemolín",
    provincia_id: 6
  },
  {
    id: 1156,
    cp: 6292,
    name: "Calera de León",
    provincia_id: 6
  },
  {
    id: 1157,
    cp: 6293,
    name: "Cabeza la Vaca",
    provincia_id: 6
  },
  {
    id: 1158,
    cp: 6300,
    name: "Zafra",
    provincia_id: 6
  },
  {
    id: 1159,
    cp: 6310,
    name: "Puebla de Sancho Pérez",
    provincia_id: 6
  },
  {
    id: 1160,
    cp: 6320,
    name: "Medina de las Torres",
    provincia_id: 6
  },
  {
    id: 1161,
    cp: 6329,
    name: "Atalaya",
    provincia_id: 6
  },
  {
    id: 1162,
    cp: 6330,
    name: "Valencia del Ventoso",
    provincia_id: 6
  },
  {
    id: 1163,
    cp: 6340,
    name: "Fregenal de la Sierra",
    provincia_id: 6
  },
  {
    id: 1164,
    cp: 6350,
    name: "Higuera la Real",
    provincia_id: 6
  },
  {
    id: 1165,
    cp: 6360,
    name: "Fuente del Maestre",
    provincia_id: 6
  },
  {
    id: 1166,
    cp: 6370,
    name: "Burguillos del Cerro",
    provincia_id: 6
  },
  {
    id: 1167,
    cp: 6378,
    name: "Valverde de Burguillos",
    provincia_id: 6
  },
  {
    id: 1168,
    cp: 6380,
    name: "Jerez de los Caballeros",
    provincia_id: 6
  },
  {
    id: 1169,
    cp: 6389,
    name: "Jerez de los Caballeros",
    provincia_id: 6
  },
  {
    id: 1170,
    cp: 6390,
    name: "Feria",
    provincia_id: 6
  },
  {
    id: 1171,
    cp: 6391,
    name: "La Lapa",
    provincia_id: 6
  },
  {
    id: 1172,
    cp: 6392,
    name: "Puebla de Sancho Pérez",
    provincia_id: 6
  },
  {
    id: 1173,
    cp: 6393,
    name: "Alconera",
    provincia_id: 6
  },
  {
    id: 1174,
    cp: 6394,
    name: "Bodonal de la Sierra",
    provincia_id: 6
  },
  {
    id: 1175,
    cp: 6400,
    name: "Don Benito",
    provincia_id: 6
  },
  {
    id: 1176,
    cp: 6410,
    name: "Guare?a",
    provincia_id: 6
  },
  {
    id: 1177,
    cp: 6410,
    name: "Aceuchal",
    provincia_id: 6
  },
  {
    id: 1178,
    cp: 6410,
    name: "Santa Amalia",
    provincia_id: 6
  },
  {
    id: 1179,
    cp: 6410,
    name: "Don Benito",
    provincia_id: 6
  },
  {
    id: 1180,
    cp: 6411,
    name: "Medellín",
    provincia_id: 6
  },
  {
    id: 1181,
    cp: 6412,
    name: "Don Benito",
    provincia_id: 6
  },
  {
    id: 1182,
    cp: 6413,
    name: "Mengabril",
    provincia_id: 6
  },
  {
    id: 1183,
    cp: 6420,
    name: "Castuera",
    provincia_id: 6
  },
  {
    id: 1184,
    cp: 6427,
    name: "Monterrubio de la Serena",
    provincia_id: 6
  },
  {
    id: 1185,
    cp: 6428,
    name: "Benquerencia de la Serena",
    provincia_id: 6
  },
  {
    id: 1186,
    cp: 6429,
    name: "Benquerencia de la Serena",
    provincia_id: 6
  },
  {
    id: 1187,
    cp: 6430,
    name: "Zalamea de la Serena",
    provincia_id: 6
  },
  {
    id: 1188,
    cp: 6439,
    name: "Esparragosa de la Serena",
    provincia_id: 6
  },
  {
    id: 1189,
    cp: 6440,
    name: "Malpartida de la Serena",
    provincia_id: 6
  },
  {
    id: 1190,
    cp: 6441,
    name: "Higuera de la Serena",
    provincia_id: 6
  },
  {
    id: 1191,
    cp: 6442,
    name: "Retamal de Llerena",
    provincia_id: 6
  },
  {
    id: 1192,
    cp: 6443,
    name: "Campillo de Llerena",
    provincia_id: 6
  },
  {
    id: 1193,
    cp: 6444,
    name: "Valencia de las Torres",
    provincia_id: 6
  },
  {
    id: 1194,
    cp: 6445,
    name: "Higuera de Llerena",
    provincia_id: 6
  },
  {
    id: 1195,
    cp: 6450,
    name: "Quintana de la Serena",
    provincia_id: 6
  },
  {
    id: 1196,
    cp: 6458,
    name: "Valle de la Serena",
    provincia_id: 6
  },
  {
    id: 1197,
    cp: 6459,
    name: "Campanario",
    provincia_id: 6
  },
  {
    id: 1198,
    cp: 6460,
    name: "Campanario",
    provincia_id: 6
  },
  {
    id: 1199,
    cp: 6468,
    name: "Magacela",
    provincia_id: 6
  },
  {
    id: 1200,
    cp: 6469,
    name: "La Coronada",
    provincia_id: 6
  },
  {
    id: 1201,
    cp: 6470,
    name: "Guare?a",
    provincia_id: 6
  },
  {
    id: 1202,
    cp: 6473,
    name: "Villagonzalo",
    provincia_id: 6
  },
  {
    id: 1203,
    cp: 6474,
    name: "Valdetorres",
    provincia_id: 6
  },
  {
    id: 1204,
    cp: 6475,
    name: "Oliva de Mérida",
    provincia_id: 6
  },
  {
    id: 1205,
    cp: 6476,
    name: "Palomas",
    provincia_id: 6
  },
  {
    id: 1206,
    cp: 6477,
    name: "Puebla de la Reina",
    provincia_id: 6
  },
  {
    id: 1207,
    cp: 6478,
    name: "Manchita",
    provincia_id: 6
  },
  {
    id: 1208,
    cp: 6479,
    name: "Cristina",
    provincia_id: 6
  },
  {
    id: 1209,
    cp: 6480,
    name: "Montijo",
    provincia_id: 6
  },
  {
    id: 1210,
    cp: 6486,
    name: "La Nava de Santiago",
    provincia_id: 6
  },
  {
    id: 1211,
    cp: 6487,
    name: "Cordobilla de Lácara",
    provincia_id: 6
  },
  {
    id: 1212,
    cp: 6488,
    name: "Carmonita",
    provincia_id: 6
  },
  {
    id: 1213,
    cp: 6489,
    name: "Montijo",
    provincia_id: 6
  },
  {
    id: 1214,
    cp: 6490,
    name: "Puebla de la Calzada",
    provincia_id: 6
  },
  {
    id: 1215,
    cp: 6498,
    name: "Lobón",
    provincia_id: 6
  },
  {
    id: 1216,
    cp: 6499,
    name: "Montijo",
    provincia_id: 6
  },
  {
    id: 1217,
    cp: 6500,
    name: "San Vicente de Alcántara",
    provincia_id: 6
  },
  {
    id: 1218,
    cp: 6510,
    name: "Alburquerque",
    provincia_id: 6
  },
  {
    id: 1219,
    cp: 6518,
    name: "La Codosera",
    provincia_id: 6
  },
  {
    id: 1220,
    cp: 6519,
    name: "Alburquerque",
    provincia_id: 6
  },
  {
    id: 1221,
    cp: 6600,
    name: "Cabeza del Buey",
    provincia_id: 6
  },
  {
    id: 1222,
    cp: 6610,
    name: "Pe?alsordo",
    provincia_id: 6
  },
  {
    id: 1223,
    cp: 6611,
    name: "Zarza-Capilla",
    provincia_id: 6
  },
  {
    id: 1224,
    cp: 6612,
    name: "Capilla",
    provincia_id: 6
  },
  {
    id: 1225,
    cp: 6613,
    name: "Benquerencia de la Serena",
    provincia_id: 6
  },
  {
    id: 1226,
    cp: 6614,
    name: "Cabeza del Buey",
    provincia_id: 6
  },
  {
    id: 1227,
    cp: 6615,
    name: "Benquerencia de la Serena",
    provincia_id: 6
  },
  {
    id: 1228,
    cp: 6620,
    name: "Esparragosa de Lares",
    provincia_id: 6
  },
  {
    id: 1229,
    cp: 6630,
    name: "Puebla de Alcocer",
    provincia_id: 6
  },
  {
    id: 1230,
    cp: 6640,
    name: "Talarrubias",
    provincia_id: 6
  },
  {
    id: 1231,
    cp: 6650,
    name: "Siruela",
    provincia_id: 6
  },
  {
    id: 1232,
    cp: 6656,
    name: "Garlitos",
    provincia_id: 6
  },
  {
    id: 1233,
    cp: 6657,
    name: "Risco",
    provincia_id: 6
  },
  {
    id: 1234,
    cp: 6658,
    name: "Tamurejo",
    provincia_id: 6
  },
  {
    id: 1235,
    cp: 6659,
    name: "Baterno",
    provincia_id: 6
  },
  {
    id: 1236,
    cp: 6660,
    name: "Fuenlabrada de los Montes",
    provincia_id: 6
  },
  {
    id: 1237,
    cp: 6670,
    name: "Herrera del Duque",
    provincia_id: 6
  },
  {
    id: 1238,
    cp: 6678,
    name: "Villarta de los Montes",
    provincia_id: 6
  },
  {
    id: 1239,
    cp: 6679,
    name: "Herrera del Duque",
    provincia_id: 6
  },
  {
    id: 1240,
    cp: 6680,
    name: "Castilblanco",
    provincia_id: 6
  },
  {
    id: 1241,
    cp: 6689,
    name: "Valdecaballeros",
    provincia_id: 6
  },
  {
    id: 1242,
    cp: 6690,
    name: "Garbayuela",
    provincia_id: 6
  },
  {
    id: 1243,
    cp: 6692,
    name: "Helechosa de los Montes",
    provincia_id: 6
  },
  {
    id: 1244,
    cp: 6700,
    name: "Villanueva de la Serena",
    provincia_id: 6
  },
  {
    id: 1245,
    cp: 6710,
    name: "Villanueva de la Serena",
    provincia_id: 6
  },
  {
    id: 1246,
    cp: 6711,
    name: "Don Benito",
    provincia_id: 6
  },
  {
    id: 1247,
    cp: 6712,
    name: "Villanueva de la Serena",
    provincia_id: 6
  },
  {
    id: 1248,
    cp: 6713,
    name: "Acedera",
    provincia_id: 6
  },
  {
    id: 1249,
    cp: 6714,
    name: "La Haba",
    provincia_id: 6
  },
  {
    id: 1250,
    cp: 6715,
    name: "Rena",
    provincia_id: 6
  },
  {
    id: 1251,
    cp: 6716,
    name: "Villar de Rena",
    provincia_id: 6
  },
  {
    id: 1252,
    cp: 6717,
    name: "Don Benito",
    provincia_id: 6
  },
  {
    id: 1253,
    cp: 6717,
    name: "Villar de Rena",
    provincia_id: 6
  },
  {
    id: 1254,
    cp: 6718,
    name: "Villanueva de la Serena",
    provincia_id: 6
  },
  {
    id: 1255,
    cp: 6720,
    name: "Villanueva de la Serena",
    provincia_id: 6
  },
  {
    id: 1256,
    cp: 6730,
    name: "Navalvillar de Pela",
    provincia_id: 6
  },
  {
    id: 1257,
    cp: 6730,
    name: "Acedera",
    provincia_id: 6
  },
  {
    id: 1258,
    cp: 6731,
    name: "Navalvillar de Pela",
    provincia_id: 6
  },
  {
    id: 1259,
    cp: 6740,
    name: "Orellana la Vieja",
    provincia_id: 6
  },
  {
    id: 1260,
    cp: 6750,
    name: "Orellana de la Sierra",
    provincia_id: 6
  },
  {
    id: 1261,
    cp: 6760,
    name: "Navalvillar de Pela",
    provincia_id: 6
  },
  {
    id: 1262,
    cp: 6770,
    name: "Casas de Don Pedro",
    provincia_id: 6
  },
  {
    id: 1263,
    cp: 6800,
    name: "Mérida",
    provincia_id: 6
  },
  {
    id: 1264,
    cp: 6810,
    name: "Calamonte",
    provincia_id: 6
  },
  {
    id: 1265,
    cp: 6820,
    name: "Don Álvaro",
    provincia_id: 6
  },
  {
    id: 1266,
    cp: 6830,
    name: "La Zarza",
    provincia_id: 6
  },
  {
    id: 1267,
    cp: 6840,
    name: "Alange",
    provincia_id: 6
  },
  {
    id: 1268,
    cp: 6850,
    name: "Arroyo de San Serván",
    provincia_id: 6
  },
  {
    id: 1269,
    cp: 6860,
    name: "Esparragalejo",
    provincia_id: 6
  },
  {
    id: 1270,
    cp: 6870,
    name: "La Garrovilla",
    provincia_id: 6
  },
  {
    id: 1271,
    cp: 6880,
    name: "Torremayor",
    provincia_id: 6
  },
  {
    id: 1272,
    cp: 6890,
    name: "Valverde de Mérida",
    provincia_id: 6
  },
  {
    id: 1273,
    cp: 6891,
    name: "Mirandilla",
    provincia_id: 6
  },
  {
    id: 1274,
    cp: 6892,
    name: "Trujillanos",
    provincia_id: 6
  },
  {
    id: 1275,
    cp: 6893,
    name: "San Pedro de Mérida",
    provincia_id: 6
  },
  {
    id: 1276,
    cp: 6894,
    name: "Aljucén",
    provincia_id: 6
  },
  {
    id: 1277,
    cp: 6894,
    name: "El Carrascalejo",
    provincia_id: 6
  },
  {
    id: 1278,
    cp: 6900,
    name: "Llerena",
    provincia_id: 6
  },
  {
    id: 1279,
    cp: 6906,
    name: "Puebla del Maestre",
    provincia_id: 6
  },
  {
    id: 1280,
    cp: 6907,
    name: "Montemolín",
    provincia_id: 6
  },
  {
    id: 1281,
    cp: 6908,
    name: "Montemolín",
    provincia_id: 6
  },
  {
    id: 1282,
    cp: 6909,
    name: "Trasierra",
    provincia_id: 6
  },
  {
    id: 1283,
    cp: 6910,
    name: "Granja de Torrehermosa",
    provincia_id: 6
  },
  {
    id: 1284,
    cp: 6919,
    name: "Peraleda del Zaucejo",
    provincia_id: 6
  },
  {
    id: 1285,
    cp: 6920,
    name: "Azuaga",
    provincia_id: 6
  },
  {
    id: 1286,
    cp: 6927,
    name: "Valverde de Llerena",
    provincia_id: 6
  },
  {
    id: 1287,
    cp: 6928,
    name: "Malcocinado",
    provincia_id: 6
  },
  {
    id: 1288,
    cp: 6929,
    name: "Azuaga",
    provincia_id: 6
  },
  {
    id: 1289,
    cp: 6930,
    name: "Berlanga",
    provincia_id: 6
  },
  {
    id: 1290,
    cp: 6939,
    name: "Maguilla",
    provincia_id: 6
  },
  {
    id: 1291,
    cp: 6940,
    name: "Ahillones",
    provincia_id: 6
  },
  {
    id: 1292,
    cp: 6950,
    name: "Villagarcía de la Torre",
    provincia_id: 6
  },
  {
    id: 1293,
    cp: 6960,
    name: "Casas de Reina",
    provincia_id: 6
  },
  {
    id: 1294,
    cp: 6970,
    name: "Reina",
    provincia_id: 6
  },
  {
    id: 1295,
    cp: 6980,
    name: "Fuente del Arco",
    provincia_id: 6
  },
  {
    id: 1296,
    cp: 7001,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1297,
    cp: 7002,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1298,
    cp: 7003,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1299,
    cp: 7004,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1300,
    cp: 7005,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1301,
    cp: 7006,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1302,
    cp: 7007,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1303,
    cp: 7008,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1304,
    cp: 7009,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1305,
    cp: 7010,
    name: "Bunyola",
    provincia_id: 7
  },
  {
    id: 1306,
    cp: 7010,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1307,
    cp: 7011,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1308,
    cp: 7012,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1309,
    cp: 7013,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1310,
    cp: 7014,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1311,
    cp: 7015,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1312,
    cp: 7071,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1313,
    cp: 7100,
    name: "Sóller",
    provincia_id: 7
  },
  {
    id: 1314,
    cp: 7101,
    name: "Sóller",
    provincia_id: 7
  },
  {
    id: 1315,
    cp: 7108,
    name: "Sóller",
    provincia_id: 7
  },
  {
    id: 1316,
    cp: 7109,
    name: "Fornalutx",
    provincia_id: 7
  },
  {
    id: 1317,
    cp: 7110,
    name: "Bunyola",
    provincia_id: 7
  },
  {
    id: 1318,
    cp: 7120,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1319,
    cp: 7140,
    name: "Sencelles",
    provincia_id: 7
  },
  {
    id: 1320,
    cp: 7141,
    name: "Marratxí",
    provincia_id: 7
  },
  {
    id: 1321,
    cp: 7142,
    name: "Santa Eug?nia",
    provincia_id: 7
  },
  {
    id: 1322,
    cp: 7143,
    name: "Sencelles",
    provincia_id: 7
  },
  {
    id: 1323,
    cp: 7144,
    name: "Sencelles",
    provincia_id: 7
  },
  {
    id: 1324,
    cp: 7144,
    name: "Costitx",
    provincia_id: 7
  },
  {
    id: 1325,
    cp: 7150,
    name: "Andratx",
    provincia_id: 7
  },
  {
    id: 1326,
    cp: 7157,
    name: "Andratx",
    provincia_id: 7
  },
  {
    id: 1327,
    cp: 7159,
    name: "Andratx",
    provincia_id: 7
  },
  {
    id: 1328,
    cp: 7160,
    name: "Andratx",
    provincia_id: 7
  },
  {
    id: 1329,
    cp: 7160,
    name: "Calvi?",
    provincia_id: 7
  },
  {
    id: 1330,
    cp: 7170,
    name: "Valldemossa",
    provincia_id: 7
  },
  {
    id: 1331,
    cp: 7179,
    name: "Sóller",
    provincia_id: 7
  },
  {
    id: 1332,
    cp: 7179,
    name: "Dei?",
    provincia_id: 7
  },
  {
    id: 1333,
    cp: 7180,
    name: "Calvi?",
    provincia_id: 7
  },
  {
    id: 1334,
    cp: 7181,
    name: "Calvi?",
    provincia_id: 7
  },
  {
    id: 1335,
    cp: 7183,
    name: "Calvi?",
    provincia_id: 7
  },
  {
    id: 1336,
    cp: 7184,
    name: "Calvi?",
    provincia_id: 7
  },
  {
    id: 1337,
    cp: 7190,
    name: "Esporles",
    provincia_id: 7
  },
  {
    id: 1338,
    cp: 7190,
    name: "Valldemossa",
    provincia_id: 7
  },
  {
    id: 1339,
    cp: 7190,
    name: "Banyalbufar",
    provincia_id: 7
  },
  {
    id: 1340,
    cp: 7191,
    name: "Banyalbufar",
    provincia_id: 7
  },
  {
    id: 1341,
    cp: 7192,
    name: "Estellencs",
    provincia_id: 7
  },
  {
    id: 1342,
    cp: 7193,
    name: "Bunyola",
    provincia_id: 7
  },
  {
    id: 1343,
    cp: 7194,
    name: "Puigpunyent",
    provincia_id: 7
  },
  {
    id: 1344,
    cp: 7195,
    name: "Puigpunyent",
    provincia_id: 7
  },
  {
    id: 1345,
    cp: 7196,
    name: "Calvi?",
    provincia_id: 7
  },
  {
    id: 1346,
    cp: 7198,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1347,
    cp: 7199,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1348,
    cp: 7200,
    name: "Felanitx",
    provincia_id: 7
  },
  {
    id: 1349,
    cp: 7208,
    name: "Felanitx",
    provincia_id: 7
  },
  {
    id: 1350,
    cp: 7209,
    name: "Felanitx",
    provincia_id: 7
  },
  {
    id: 1351,
    cp: 7210,
    name: "Algaida",
    provincia_id: 7
  },
  {
    id: 1352,
    cp: 7220,
    name: "Algaida",
    provincia_id: 7
  },
  {
    id: 1353,
    cp: 7230,
    name: "Montu?ri",
    provincia_id: 7
  },
  {
    id: 1354,
    cp: 7240,
    name: "Sant Joan",
    provincia_id: 7
  },
  {
    id: 1355,
    cp: 7250,
    name: "Vilafranca de Bonany",
    provincia_id: 7
  },
  {
    id: 1356,
    cp: 7259,
    name: "Ariany",
    provincia_id: 7
  },
  {
    id: 1357,
    cp: 7260,
    name: "Porreres",
    provincia_id: 7
  },
  {
    id: 1358,
    cp: 7300,
    name: "Inca",
    provincia_id: 7
  },
  {
    id: 1359,
    cp: 7310,
    name: "Campanet",
    provincia_id: 7
  },
  {
    id: 1360,
    cp: 7311,
    name: "Búger",
    provincia_id: 7
  },
  {
    id: 1361,
    cp: 7312,
    name: "Mancor de la Vall",
    provincia_id: 7
  },
  {
    id: 1362,
    cp: 7313,
    name: "Selva",
    provincia_id: 7
  },
  {
    id: 1363,
    cp: 7314,
    name: "Selva",
    provincia_id: 7
  },
  {
    id: 1364,
    cp: 7315,
    name: "Escorca",
    provincia_id: 7
  },
  {
    id: 1365,
    cp: 7316,
    name: "Selva",
    provincia_id: 7
  },
  {
    id: 1366,
    cp: 7320,
    name: "Santa María del Camí",
    provincia_id: 7
  },
  {
    id: 1367,
    cp: 7330,
    name: "Consell",
    provincia_id: 7
  },
  {
    id: 1368,
    cp: 7340,
    name: "Alaró",
    provincia_id: 7
  },
  {
    id: 1369,
    cp: 7349,
    name: "Bunyola",
    provincia_id: 7
  },
  {
    id: 1370,
    cp: 7350,
    name: "Binissalem",
    provincia_id: 7
  },
  {
    id: 1371,
    cp: 7360,
    name: "Lloseta",
    provincia_id: 7
  },
  {
    id: 1372,
    cp: 7369,
    name: "Selva",
    provincia_id: 7
  },
  {
    id: 1373,
    cp: 7400,
    name: "Alcúdia",
    provincia_id: 7
  },
  {
    id: 1374,
    cp: 7420,
    name: "Sa Pobla",
    provincia_id: 7
  },
  {
    id: 1375,
    cp: 7430,
    name: "Llubí",
    provincia_id: 7
  },
  {
    id: 1376,
    cp: 7440,
    name: "Muro",
    provincia_id: 7
  },
  {
    id: 1377,
    cp: 7450,
    name: "Santa Margalida",
    provincia_id: 7
  },
  {
    id: 1378,
    cp: 7458,
    name: "Muro",
    provincia_id: 7
  },
  {
    id: 1379,
    cp: 7458,
    name: "Santa Margalida",
    provincia_id: 7
  },
  {
    id: 1380,
    cp: 7459,
    name: "Santa Margalida",
    provincia_id: 7
  },
  {
    id: 1381,
    cp: 7460,
    name: "Pollença",
    provincia_id: 7
  },
  {
    id: 1382,
    cp: 7469,
    name: "Pollença",
    provincia_id: 7
  },
  {
    id: 1383,
    cp: 7470,
    name: "Pollença",
    provincia_id: 7
  },
  {
    id: 1384,
    cp: 7500,
    name: "Manacor",
    provincia_id: 7
  },
  {
    id: 1385,
    cp: 7509,
    name: "Manacor",
    provincia_id: 7
  },
  {
    id: 1386,
    cp: 7510,
    name: "Sineu",
    provincia_id: 7
  },
  {
    id: 1387,
    cp: 7511,
    name: "Sencelles",
    provincia_id: 7
  },
  {
    id: 1388,
    cp: 7518,
    name: "Lloret de Vistalegre",
    provincia_id: 7
  },
  {
    id: 1389,
    cp: 7519,
    name: "Maria de la Salut",
    provincia_id: 7
  },
  {
    id: 1390,
    cp: 7520,
    name: "Petra",
    provincia_id: 7
  },
  {
    id: 1391,
    cp: 7529,
    name: "Ariany",
    provincia_id: 7
  },
  {
    id: 1392,
    cp: 7530,
    name: "Sant Llorenç des Cardassar",
    provincia_id: 7
  },
  {
    id: 1393,
    cp: 7540,
    name: "Sant Llorenç des Cardassar",
    provincia_id: 7
  },
  {
    id: 1394,
    cp: 7550,
    name: "Son Servera",
    provincia_id: 7
  },
  {
    id: 1395,
    cp: 7559,
    name: "Son Servera",
    provincia_id: 7
  },
  {
    id: 1396,
    cp: 7560,
    name: "Son Servera",
    provincia_id: 7
  },
  {
    id: 1397,
    cp: 7560,
    name: "Sant Llorenç des Cardassar",
    provincia_id: 7
  },
  {
    id: 1398,
    cp: 7560,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1399,
    cp: 7570,
    name: "Art?",
    provincia_id: 7
  },
  {
    id: 1400,
    cp: 7579,
    name: "Art?",
    provincia_id: 7
  },
  {
    id: 1401,
    cp: 7580,
    name: "Capdepera",
    provincia_id: 7
  },
  {
    id: 1402,
    cp: 7589,
    name: "Capdepera",
    provincia_id: 7
  },
  {
    id: 1403,
    cp: 7590,
    name: "Capdepera",
    provincia_id: 7
  },
  {
    id: 1404,
    cp: 7600,
    name: "Llucmajor",
    provincia_id: 7
  },
  {
    id: 1405,
    cp: 7600,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1406,
    cp: 7608,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1407,
    cp: 7609,
    name: "Llucmajor",
    provincia_id: 7
  },
  {
    id: 1408,
    cp: 7610,
    name: "Palma",
    provincia_id: 7
  },
  {
    id: 1409,
    cp: 7620,
    name: "Llucmajor",
    provincia_id: 7
  },
  {
    id: 1410,
    cp: 7629,
    name: "Algaida",
    provincia_id: 7
  },
  {
    id: 1411,
    cp: 7630,
    name: "Campos",
    provincia_id: 7
  },
  {
    id: 1412,
    cp: 7638,
    name: "Campos",
    provincia_id: 7
  },
  {
    id: 1413,
    cp: 7638,
    name: "ses Salines",
    provincia_id: 7
  },
  {
    id: 1414,
    cp: 7639,
    name: "Campos",
    provincia_id: 7
  },
  {
    id: 1415,
    cp: 7639,
    name: "Llucmajor",
    provincia_id: 7
  },
  {
    id: 1416,
    cp: 7640,
    name: "ses Salines",
    provincia_id: 7
  },
  {
    id: 1417,
    cp: 7650,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1418,
    cp: 7659,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1419,
    cp: 7660,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1420,
    cp: 7669,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1421,
    cp: 7669,
    name: "Felanitx",
    provincia_id: 7
  },
  {
    id: 1422,
    cp: 7670,
    name: "Felanitx",
    provincia_id: 7
  },
  {
    id: 1423,
    cp: 7680,
    name: "Manacor",
    provincia_id: 7
  },
  {
    id: 1424,
    cp: 7687,
    name: "Sant Llorenç des Cardassar",
    provincia_id: 7
  },
  {
    id: 1425,
    cp: 7687,
    name: "Manacor",
    provincia_id: 7
  },
  {
    id: 1426,
    cp: 7688,
    name: "Manacor",
    provincia_id: 7
  },
  {
    id: 1427,
    cp: 7689,
    name: "Manacor",
    provincia_id: 7
  },
  {
    id: 1428,
    cp: 7690,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1429,
    cp: 7691,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1430,
    cp: 7700,
    name: "Maó-Mahón",
    provincia_id: 7
  },
  {
    id: 1431,
    cp: 7701,
    name: "Maó-Mahón",
    provincia_id: 7
  },
  {
    id: 1432,
    cp: 7702,
    name: "Maó-Mahón",
    provincia_id: 7
  },
  {
    id: 1433,
    cp: 7703,
    name: "Maó-Mahón",
    provincia_id: 7
  },
  {
    id: 1434,
    cp: 7710,
    name: "Sant Lluís",
    provincia_id: 7
  },
  {
    id: 1435,
    cp: 7711,
    name: "Sant Lluís",
    provincia_id: 7
  },
  {
    id: 1436,
    cp: 7712,
    name: "Maó-Mahón",
    provincia_id: 7
  },
  {
    id: 1437,
    cp: 7713,
    name: "Sant Lluís",
    provincia_id: 7
  },
  {
    id: 1438,
    cp: 7714,
    name: "Maó-Mahón",
    provincia_id: 7
  },
  {
    id: 1439,
    cp: 7720,
    name: "Sant Joan",
    provincia_id: 7
  },
  {
    id: 1440,
    cp: 7720,
    name: "es Castell",
    provincia_id: 7
  },
  {
    id: 1441,
    cp: 7730,
    name: "Alaior",
    provincia_id: 7
  },
  {
    id: 1442,
    cp: 7740,
    name: "Es Mercadal",
    provincia_id: 7
  },
  {
    id: 1443,
    cp: 7748,
    name: "Es Mercadal",
    provincia_id: 7
  },
  {
    id: 1444,
    cp: 7749,
    name: "Es Migjorn Gran",
    provincia_id: 7
  },
  {
    id: 1445,
    cp: 7750,
    name: "Ciutadella de Menorca",
    provincia_id: 7
  },
  {
    id: 1446,
    cp: 7750,
    name: "Son Servera",
    provincia_id: 7
  },
  {
    id: 1447,
    cp: 7750,
    name: "Ferreries",
    provincia_id: 7
  },
  {
    id: 1448,
    cp: 7760,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1449,
    cp: 7760,
    name: "Ciutadella de Menorca",
    provincia_id: 7
  },
  {
    id: 1450,
    cp: 7769,
    name: "Ciutadella de Menorca",
    provincia_id: 7
  },
  {
    id: 1451,
    cp: 7800,
    name: "Sant Antoni de Portmany",
    provincia_id: 7
  },
  {
    id: 1452,
    cp: 7800,
    name: "Santa Eul?ria des Riu",
    provincia_id: 7
  },
  {
    id: 1453,
    cp: 7800,
    name: "Eivissa",
    provincia_id: 7
  },
  {
    id: 1454,
    cp: 7810,
    name: "Sant Joan de Labritja",
    provincia_id: 7
  },
  {
    id: 1455,
    cp: 7811,
    name: "Sant Joan de Labritja",
    provincia_id: 7
  },
  {
    id: 1456,
    cp: 7812,
    name: "Sant Joan de Labritja",
    provincia_id: 7
  },
  {
    id: 1457,
    cp: 7814,
    name: "Santa Eul?ria des Riu",
    provincia_id: 7
  },
  {
    id: 1458,
    cp: 7815,
    name: "Sant Joan de Labritja",
    provincia_id: 7
  },
  {
    id: 1459,
    cp: 7816,
    name: "Sant Antoni de Portmany",
    provincia_id: 7
  },
  {
    id: 1460,
    cp: 7817,
    name: "Sant Josep de sa Talaia",
    provincia_id: 7
  },
  {
    id: 1461,
    cp: 7818,
    name: "Sant Josep de sa Talaia",
    provincia_id: 7
  },
  {
    id: 1462,
    cp: 7819,
    name: "Santa Eul?ria des Riu",
    provincia_id: 7
  },
  {
    id: 1463,
    cp: 7820,
    name: "Sant Antoni de Portmany",
    provincia_id: 7
  },
  {
    id: 1464,
    cp: 7828,
    name: "Sant Antoni de Portmany",
    provincia_id: 7
  },
  {
    id: 1465,
    cp: 7829,
    name: "Sant Josep de sa Talaia",
    provincia_id: 7
  },
  {
    id: 1466,
    cp: 7830,
    name: "Sant Josep de sa Talaia",
    provincia_id: 7
  },
  {
    id: 1467,
    cp: 7839,
    name: "Sant Josep de sa Talaia",
    provincia_id: 7
  },
  {
    id: 1468,
    cp: 7840,
    name: "Santa Eul?ria des Riu",
    provincia_id: 7
  },
  {
    id: 1469,
    cp: 7849,
    name: "Santa Eul?ria des Riu",
    provincia_id: 7
  },
  {
    id: 1470,
    cp: 7850,
    name: "Santa Eul?ria des Riu",
    provincia_id: 7
  },
  {
    id: 1471,
    cp: 7850,
    name: "Santanyí",
    provincia_id: 7
  },
  {
    id: 1472,
    cp: 7860,
    name: "Formentera",
    provincia_id: 7
  },
  {
    id: 1473,
    cp: 7870,
    name: "Formentera",
    provincia_id: 7
  },
  {
    id: 1474,
    cp: 7871,
    name: "Formentera",
    provincia_id: 7
  },
  {
    id: 1475,
    cp: 7872,
    name: "Formentera",
    provincia_id: 7
  },
  {
    id: 1476,
    cp: 8001,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1477,
    cp: 8002,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1478,
    cp: 8003,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1479,
    cp: 8004,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1480,
    cp: 8005,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1481,
    cp: 8006,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1482,
    cp: 8007,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1483,
    cp: 8008,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1484,
    cp: 8009,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1485,
    cp: 8010,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1486,
    cp: 8011,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1487,
    cp: 8012,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1488,
    cp: 8013,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1489,
    cp: 8014,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1490,
    cp: 8015,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1491,
    cp: 8016,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1492,
    cp: 8017,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1493,
    cp: 8018,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1494,
    cp: 8019,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1495,
    cp: 8020,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1496,
    cp: 8021,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1497,
    cp: 8022,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1498,
    cp: 8023,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1499,
    cp: 8024,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1500,
    cp: 8025,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1501,
    cp: 8026,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1502,
    cp: 8027,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1503,
    cp: 8028,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1504,
    cp: 8029,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1505,
    cp: 8030,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1506,
    cp: 8031,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1507,
    cp: 8032,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1508,
    cp: 8033,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1509,
    cp: 8034,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1510,
    cp: 8035,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1511,
    cp: 8036,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1512,
    cp: 8037,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1513,
    cp: 8038,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1514,
    cp: 8039,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1515,
    cp: 8040,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1516,
    cp: 8041,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1517,
    cp: 8042,
    name: "Barcelona",
    provincia_id: 8
  },
  {
    id: 1518,
    cp: 8100,
    name: "Mollet del Vall?s",
    provincia_id: 8
  },
  {
    id: 1519,
    cp: 8104,
    name: "Mollet del Vall?s",
    provincia_id: 8
  },
  {
    id: 1520,
    cp: 8105,
    name: "Sant Fost de Campsentelles",
    provincia_id: 8
  },
  {
    id: 1521,
    cp: 8106,
    name: "Santa Maria de Martorelles",
    provincia_id: 8
  },
  {
    id: 1522,
    cp: 8107,
    name: "Martorelles",
    provincia_id: 8
  },
  {
    id: 1523,
    cp: 8110,
    name: "Montcada i Reixac",
    provincia_id: 8
  },
  {
    id: 1524,
    cp: 8120,
    name: "La Llagosta",
    provincia_id: 8
  },
  {
    id: 1525,
    cp: 8130,
    name: "Santa Perp?tua de Mogoda",
    provincia_id: 8
  },
  {
    id: 1526,
    cp: 8140,
    name: "Caldes de Montbui",
    provincia_id: 8
  },
  {
    id: 1527,
    cp: 8146,
    name: "Gallifa",
    provincia_id: 8
  },
  {
    id: 1528,
    cp: 8148,
    name: "L'Estany",
    provincia_id: 8
  },
  {
    id: 1529,
    cp: 8150,
    name: "Parets del Vall?s",
    provincia_id: 8
  },
  {
    id: 1530,
    cp: 8160,
    name: "Montmeló",
    provincia_id: 8
  },
  {
    id: 1531,
    cp: 8161,
    name: "Rubí",
    provincia_id: 8
  },
  {
    id: 1532,
    cp: 8170,
    name: "Montorn?s del Vall?s",
    provincia_id: 8
  },
  {
    id: 1533,
    cp: 8172,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1534,
    cp: 8173,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1535,
    cp: 8174,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1536,
    cp: 8175,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1537,
    cp: 8178,
    name: "Collsuspina",
    provincia_id: 8
  },
  {
    id: 1538,
    cp: 8180,
    name: "Moi?",
    provincia_id: 8
  },
  {
    id: 1539,
    cp: 8181,
    name: "Sentmenat",
    provincia_id: 8
  },
  {
    id: 1540,
    cp: 8182,
    name: "Sant Feliu de Codines",
    provincia_id: 8
  },
  {
    id: 1541,
    cp: 8183,
    name: "Castellterçol",
    provincia_id: 8
  },
  {
    id: 1542,
    cp: 8183,
    name: "Castellcir",
    provincia_id: 8
  },
  {
    id: 1543,
    cp: 8183,
    name: "Granera",
    provincia_id: 8
  },
  {
    id: 1544,
    cp: 8184,
    name: "Palau-solit? i Plegamans",
    provincia_id: 8
  },
  {
    id: 1545,
    cp: 8184,
    name: "L'Estany",
    provincia_id: 8
  },
  {
    id: 1546,
    cp: 8185,
    name: "Lliç? de Vall",
    provincia_id: 8
  },
  {
    id: 1547,
    cp: 8186,
    name: "Lliç? d'Amunt",
    provincia_id: 8
  },
  {
    id: 1548,
    cp: 8187,
    name: "Santa Eul?lia de Ronçana",
    provincia_id: 8
  },
  {
    id: 1549,
    cp: 8188,
    name: "Vallromanes",
    provincia_id: 8
  },
  {
    id: 1550,
    cp: 8189,
    name: "Sant Quirze Safaja",
    provincia_id: 8
  },
  {
    id: 1551,
    cp: 8190,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1552,
    cp: 8191,
    name: "Rubí",
    provincia_id: 8
  },
  {
    id: 1553,
    cp: 8192,
    name: "Sant Quirze del Vall?s",
    provincia_id: 8
  },
  {
    id: 1554,
    cp: 8193,
    name: "Cerdanyola del Vall?s",
    provincia_id: 8
  },
  {
    id: 1555,
    cp: 8194,
    name: "Sant Quirze del Vall?s",
    provincia_id: 8
  },
  {
    id: 1556,
    cp: 8195,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1557,
    cp: 8196,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1558,
    cp: 8197,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1559,
    cp: 8198,
    name: "Sant Cugat del Vall?s",
    provincia_id: 8
  },
  {
    id: 1560,
    cp: 8201,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1561,
    cp: 8202,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1562,
    cp: 8203,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1563,
    cp: 8204,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1564,
    cp: 8205,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1565,
    cp: 8206,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1566,
    cp: 8207,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1567,
    cp: 8208,
    name: "Sabadell",
    provincia_id: 8
  },
  {
    id: 1568,
    cp: 8210,
    name: "Barber? del Vall?s",
    provincia_id: 8
  },
  {
    id: 1569,
    cp: 8211,
    name: "Castellar del Vall?s",
    provincia_id: 8
  },
  {
    id: 1570,
    cp: 8212,
    name: "Sant Llorenç Savall",
    provincia_id: 8
  },
  {
    id: 1571,
    cp: 8213,
    name: "Poliny?",
    provincia_id: 8
  },
  {
    id: 1572,
    cp: 8214,
    name: "Badia del Vall?s",
    provincia_id: 8
  },
  {
    id: 1573,
    cp: 8220,
    name: "Sant Boi de Llobregat",
    provincia_id: 8
  },
  {
    id: 1574,
    cp: 8221,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1575,
    cp: 8222,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1576,
    cp: 8223,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1577,
    cp: 8224,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1578,
    cp: 8225,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1579,
    cp: 8226,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1580,
    cp: 8227,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1581,
    cp: 8228,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1582,
    cp: 8228,
    name: "Sant Quirze del Vall?s",
    provincia_id: 8
  },
  {
    id: 1583,
    cp: 8230,
    name: "Matadepera",
    provincia_id: 8
  },
  {
    id: 1584,
    cp: 8231,
    name: "Ullastrell",
    provincia_id: 8
  },
  {
    id: 1585,
    cp: 8232,
    name: "Viladecavalls",
    provincia_id: 8
  },
  {
    id: 1586,
    cp: 8233,
    name: "Vacarisses",
    provincia_id: 8
  },
  {
    id: 1587,
    cp: 8240,
    name: "Manresa",
    provincia_id: 8
  },
  {
    id: 1588,
    cp: 8241,
    name: "Manresa",
    provincia_id: 8
  },
  {
    id: 1589,
    cp: 8242,
    name: "Manresa",
    provincia_id: 8
  },
  {
    id: 1590,
    cp: 8243,
    name: "Manresa",
    provincia_id: 8
  },
  {
    id: 1591,
    cp: 8250,
    name: "Sant Joan de Vilatorrada",
    provincia_id: 8
  },
  {
    id: 1592,
    cp: 8251,
    name: "Castellnou de Bages",
    provincia_id: 8
  },
  {
    id: 1593,
    cp: 8251,
    name: "Santpedor",
    provincia_id: 8
  },
  {
    id: 1594,
    cp: 8253,
    name: "Sant Salvador de Guardiola",
    provincia_id: 8
  },
  {
    id: 1595,
    cp: 8254,
    name: "El Pont de Vilomara i Rocafort",
    provincia_id: 8
  },
  {
    id: 1596,
    cp: 8255,
    name: "Castellfollit del Boix",
    provincia_id: 8
  },
  {
    id: 1597,
    cp: 8256,
    name: "Rajadell",
    provincia_id: 8
  },
  {
    id: 1598,
    cp: 8256,
    name: "Aguilar de Segarra",
    provincia_id: 8
  },
  {
    id: 1599,
    cp: 8259,
    name: "Fonollosa",
    provincia_id: 8
  },
  {
    id: 1600,
    cp: 8260,
    name: "Súria",
    provincia_id: 8
  },
  {
    id: 1601,
    cp: 8261,
    name: "Cardona",
    provincia_id: 8
  },
  {
    id: 1602,
    cp: 8262,
    name: "Callús",
    provincia_id: 8
  },
  {
    id: 1603,
    cp: 8263,
    name: "Sant Mateu de Bages",
    provincia_id: 8
  },
  {
    id: 1604,
    cp: 8269,
    name: "Sant Mateu de Bages",
    provincia_id: 8
  },
  {
    id: 1605,
    cp: 8269,
    name: "Nav?s",
    provincia_id: 8
  },
  {
    id: 1606,
    cp: 8270,
    name: "Navarcles",
    provincia_id: 8
  },
  {
    id: 1607,
    cp: 8271,
    name: "Artés",
    provincia_id: 8
  },
  {
    id: 1608,
    cp: 8272,
    name: "Sant Fruitós de Bages",
    provincia_id: 8
  },
  {
    id: 1609,
    cp: 8273,
    name: "Santa Maria d'Oló",
    provincia_id: 8
  },
  {
    id: 1610,
    cp: 8274,
    name: "Sant Feliu Sasserra",
    provincia_id: 8
  },
  {
    id: 1611,
    cp: 8275,
    name: "Monistrol de Calders",
    provincia_id: 8
  },
  {
    id: 1612,
    cp: 8275,
    name: "Calders",
    provincia_id: 8
  },
  {
    id: 1613,
    cp: 8278,
    name: "Mura",
    provincia_id: 8
  },
  {
    id: 1614,
    cp: 8278,
    name: "Talamanca",
    provincia_id: 8
  },
  {
    id: 1615,
    cp: 8279,
    name: "Avinyó",
    provincia_id: 8
  },
  {
    id: 1616,
    cp: 8280,
    name: "Calaf",
    provincia_id: 8
  },
  {
    id: 1617,
    cp: 8281,
    name: "La Molsosa",
    provincia_id: 25
  },
  {
    id: 1618,
    cp: 8281,
    name: "Sant Pere Sallavinera",
    provincia_id: 8
  },
  {
    id: 1619,
    cp: 8281,
    name: "Calonge de Segarra",
    provincia_id: 8
  },
  {
    id: 1620,
    cp: 8281,
    name: "Castellfollit de Riubregós",
    provincia_id: 8
  },
  {
    id: 1621,
    cp: 8281,
    name: "Els Prats de Rei",
    provincia_id: 8
  },
  {
    id: 1622,
    cp: 8282,
    name: "Sant Martí Sesgueioles",
    provincia_id: 8
  },
  {
    id: 1623,
    cp: 8282,
    name: "Pujalt",
    provincia_id: 8
  },
  {
    id: 1624,
    cp: 8289,
    name: "Sant Guim de Freixenet",
    provincia_id: 25
  },
  {
    id: 1625,
    cp: 8289,
    name: "Veciana",
    provincia_id: 8
  },
  {
    id: 1626,
    cp: 8289,
    name: "Copons",
    provincia_id: 8
  },
  {
    id: 1627,
    cp: 8290,
    name: "Cerdanyola del Vall?s",
    provincia_id: 8
  },
  {
    id: 1628,
    cp: 8291,
    name: "Ripollet",
    provincia_id: 8
  },
  {
    id: 1629,
    cp: 8292,
    name: "Esparreguera",
    provincia_id: 8
  },
  {
    id: 1630,
    cp: 8293,
    name: "Collbató",
    provincia_id: 8
  },
  {
    id: 1631,
    cp: 8294,
    name: "El Bruc",
    provincia_id: 8
  },
  {
    id: 1632,
    cp: 8295,
    name: "Sant Vicenç de Castellet",
    provincia_id: 8
  },
  {
    id: 1633,
    cp: 8296,
    name: "Castellbell i el Vilar",
    provincia_id: 8
  },
  {
    id: 1634,
    cp: 8297,
    name: "Castellgalí",
    provincia_id: 8
  },
  {
    id: 1635,
    cp: 8298,
    name: "Marganell",
    provincia_id: 8
  },
  {
    id: 1636,
    cp: 8299,
    name: "Rellinars",
    provincia_id: 8
  },
  {
    id: 1637,
    cp: 8301,
    name: "Mataró",
    provincia_id: 8
  },
  {
    id: 1638,
    cp: 8302,
    name: "Mataró",
    provincia_id: 8
  },
  {
    id: 1639,
    cp: 8303,
    name: "Mataró",
    provincia_id: 8
  },
  {
    id: 1640,
    cp: 8304,
    name: "Mataró",
    provincia_id: 8
  },
  {
    id: 1641,
    cp: 8310,
    name: "Argentona",
    provincia_id: 8
  },
  {
    id: 1642,
    cp: 8317,
    name: "?rrius",
    provincia_id: 8
  },
  {
    id: 1643,
    cp: 8318,
    name: "Dosrius",
    provincia_id: 8
  },
  {
    id: 1644,
    cp: 8319,
    name: "Dosrius",
    provincia_id: 8
  },
  {
    id: 1645,
    cp: 8320,
    name: "El Masnou",
    provincia_id: 8
  },
  {
    id: 1646,
    cp: 8328,
    name: "Alella",
    provincia_id: 8
  },
  {
    id: 1647,
    cp: 8329,
    name: "Tei?",
    provincia_id: 8
  },
  {
    id: 1648,
    cp: 8330,
    name: "Premi? de Mar",
    provincia_id: 8
  },
  {
    id: 1649,
    cp: 8338,
    name: "Premi? de Dalt",
    provincia_id: 8
  },
  {
    id: 1650,
    cp: 8339,
    name: "Vilassar de Dalt",
    provincia_id: 8
  },
  {
    id: 1651,
    cp: 8340,
    name: "Vilassar de Mar",
    provincia_id: 8
  },
  {
    id: 1652,
    cp: 8348,
    name: "Cabrils",
    provincia_id: 8
  },
  {
    id: 1653,
    cp: 8349,
    name: "Cabrera de Mar",
    provincia_id: 8
  },
  {
    id: 1654,
    cp: 8350,
    name: "Arenys de Mar",
    provincia_id: 8
  },
  {
    id: 1655,
    cp: 8350,
    name: "Arenys de Munt",
    provincia_id: 8
  },
  {
    id: 1656,
    cp: 8358,
    name: "Arenys de Munt",
    provincia_id: 8
  },
  {
    id: 1657,
    cp: 8359,
    name: "Sant Iscle de Vallalta",
    provincia_id: 8
  },
  {
    id: 1658,
    cp: 8360,
    name: "Canet de Mar",
    provincia_id: 8
  },
  {
    id: 1659,
    cp: 8370,
    name: "Calella",
    provincia_id: 8
  },
  {
    id: 1660,
    cp: 8380,
    name: "Malgrat de Mar",
    provincia_id: 8
  },
  {
    id: 1661,
    cp: 8384,
    name: "Cabrils",
    provincia_id: 8
  },
  {
    id: 1662,
    cp: 8389,
    name: "Palafolls",
    provincia_id: 8
  },
  {
    id: 1663,
    cp: 8390,
    name: "Montgat",
    provincia_id: 8
  },
  {
    id: 1664,
    cp: 8391,
    name: "Tiana",
    provincia_id: 8
  },
  {
    id: 1665,
    cp: 8392,
    name: "Sant Andreu de Llavaneres",
    provincia_id: 8
  },
  {
    id: 1666,
    cp: 8393,
    name: "Caldes d'Estrac",
    provincia_id: 8
  },
  {
    id: 1667,
    cp: 8394,
    name: "Sant Vicenç de Montalt",
    provincia_id: 8
  },
  {
    id: 1668,
    cp: 8395,
    name: "Sant Pol de Mar",
    provincia_id: 8
  },
  {
    id: 1669,
    cp: 8396,
    name: "Sant Cebri? de Vallalta",
    provincia_id: 8
  },
  {
    id: 1670,
    cp: 8397,
    name: "Pineda de Mar",
    provincia_id: 8
  },
  {
    id: 1671,
    cp: 8398,
    name: "Santa Susanna",
    provincia_id: 8
  },
  {
    id: 1672,
    cp: 8401,
    name: "Granollers",
    provincia_id: 8
  },
  {
    id: 1673,
    cp: 8402,
    name: "Granollers",
    provincia_id: 8
  },
  {
    id: 1674,
    cp: 8403,
    name: "Granollers",
    provincia_id: 8
  },
  {
    id: 1675,
    cp: 8410,
    name: "Vilanova del Vall?s",
    provincia_id: 8
  },
  {
    id: 1676,
    cp: 8415,
    name: "Bigues i Riells",
    provincia_id: 8
  },
  {
    id: 1677,
    cp: 8416,
    name: "Bigues i Riells",
    provincia_id: 8
  },
  {
    id: 1678,
    cp: 8420,
    name: "Canovelles",
    provincia_id: 8
  },
  {
    id: 1679,
    cp: 8430,
    name: "La Roca del Vall?s",
    provincia_id: 8
  },
  {
    id: 1680,
    cp: 8440,
    name: "Cardedeu",
    provincia_id: 8
  },
  {
    id: 1681,
    cp: 8440,
    name: "C?noves i Samalús",
    provincia_id: 8
  },
  {
    id: 1682,
    cp: 8445,
    name: "C?noves i Samalús",
    provincia_id: 8
  },
  {
    id: 1683,
    cp: 8450,
    name: "Llinars del Vall?s",
    provincia_id: 8
  },
  {
    id: 1684,
    cp: 8455,
    name: "Vilalba Sasserra",
    provincia_id: 8
  },
  {
    id: 1685,
    cp: 8458,
    name: "Sant Pere de Vilamajor",
    provincia_id: 8
  },
  {
    id: 1686,
    cp: 8458,
    name: "Sant Llorenç Savall",
    provincia_id: 8
  },
  {
    id: 1687,
    cp: 8459,
    name: "Sant Antoni de Vilamajor",
    provincia_id: 8
  },
  {
    id: 1688,
    cp: 8459,
    name: "Sant Pere de Vilamajor",
    provincia_id: 8
  },
  {
    id: 1689,
    cp: 8460,
    name: "Santa Maria de Palautordera",
    provincia_id: 8
  },
  {
    id: 1690,
    cp: 8460,
    name: "Sant Pere de Vilamajor",
    provincia_id: 8
  },
  {
    id: 1691,
    cp: 8460,
    name: "Sant Esteve de Palautordera",
    provincia_id: 8
  },
  {
    id: 1692,
    cp: 8461,
    name: "Sant Esteve de Palautordera",
    provincia_id: 8
  },
  {
    id: 1693,
    cp: 8469,
    name: "Montseny",
    provincia_id: 8
  },
  {
    id: 1694,
    cp: 8470,
    name: "Vallgorguina",
    provincia_id: 8
  },
  {
    id: 1695,
    cp: 8470,
    name: "Fogars de Montclús",
    provincia_id: 8
  },
  {
    id: 1696,
    cp: 8470,
    name: "Campins",
    provincia_id: 8
  },
  {
    id: 1697,
    cp: 8470,
    name: "Sant Celoni",
    provincia_id: 8
  },
  {
    id: 1698,
    cp: 8471,
    name: "Vallgorguina",
    provincia_id: 8
  },
  {
    id: 1699,
    cp: 8472,
    name: "Campins",
    provincia_id: 8
  },
  {
    id: 1700,
    cp: 8474,
    name: "Gualba",
    provincia_id: 8
  },
  {
    id: 1701,
    cp: 8476,
    name: "Sant Celoni",
    provincia_id: 8
  },
  {
    id: 1702,
    cp: 8479,
    name: "Fogars de Montclús",
    provincia_id: 8
  },
  {
    id: 1703,
    cp: 8480,
    name: "L'Ametlla del Vall?s",
    provincia_id: 8
  },
  {
    id: 1704,
    cp: 8490,
    name: "Tordera",
    provincia_id: 8
  },
  {
    id: 1705,
    cp: 8495,
    name: "Fogars de la Selva",
    provincia_id: 8
  },
  {
    id: 1706,
    cp: 8500,
    name: "Vic",
    provincia_id: 8
  },
  {
    id: 1707,
    cp: 8503,
    name: "Gurb",
    provincia_id: 8
  },
  {
    id: 1708,
    cp: 8504,
    name: "Sant Juli? de Vilatorta",
    provincia_id: 8
  },
  {
    id: 1709,
    cp: 8505,
    name: "Santa Eul?lia de Riuprimer",
    provincia_id: 8
  },
  {
    id: 1710,
    cp: 8505,
    name: "Muntanyola",
    provincia_id: 8
  },
  {
    id: 1711,
    cp: 8506,
    name: "Calldetenes",
    provincia_id: 8
  },
  {
    id: 1712,
    cp: 8507,
    name: "Santa Eug?nia de Berga",
    provincia_id: 8
  },
  {
    id: 1713,
    cp: 8508,
    name: "Sant Quirze de Besora",
    provincia_id: 8
  },
  {
    id: 1714,
    cp: 8508,
    name: "Les Masies de Voltreg?",
    provincia_id: 8
  },
  {
    id: 1715,
    cp: 8509,
    name: "Les Masies de Voltreg?",
    provincia_id: 8
  },
  {
    id: 1716,
    cp: 8509,
    name: "Santa Cecília de Voltreg?",
    provincia_id: 8
  },
  {
    id: 1717,
    cp: 8510,
    name: "Roda de Ter",
    provincia_id: 8
  },
  {
    id: 1718,
    cp: 8510,
    name: "Les Masies de Roda",
    provincia_id: 8
  },
  {
    id: 1719,
    cp: 8511,
    name: "Tavertet",
    provincia_id: 8
  },
  {
    id: 1720,
    cp: 8511,
    name: "L'Esquirol",
    provincia_id: 8
  },
  {
    id: 1721,
    cp: 8512,
    name: "Sant Hip?lit de Voltreg?",
    provincia_id: 8
  },
  {
    id: 1722,
    cp: 8513,
    name: "Prats de Lluçan?s",
    provincia_id: 8
  },
  {
    id: 1723,
    cp: 8514,
    name: "Lluç?",
    provincia_id: 8
  },
  {
    id: 1724,
    cp: 8515,
    name: "Sant Martí d'Albars",
    provincia_id: 8
  },
  {
    id: 1725,
    cp: 8516,
    name: "Olost",
    provincia_id: 8
  },
  {
    id: 1726,
    cp: 8517,
    name: "Santa Maria de Merl?s",
    provincia_id: 8
  },
  {
    id: 1727,
    cp: 8518,
    name: "Orist?",
    provincia_id: 8
  },
  {
    id: 1728,
    cp: 8519,
    name: "Sant Sadurní d'Osormort",
    provincia_id: 8
  },
  {
    id: 1729,
    cp: 8519,
    name: "Jorba",
    provincia_id: 8
  },
  {
    id: 1730,
    cp: 8519,
    name: "Tav?rnoles",
    provincia_id: 8
  },
  {
    id: 1731,
    cp: 8519,
    name: "Vilanova de Sau",
    provincia_id: 8
  },
  {
    id: 1732,
    cp: 8519,
    name: "Sant Bartomeu del Grau",
    provincia_id: 8
  },
  {
    id: 1733,
    cp: 8519,
    name: "Vic",
    provincia_id: 8
  },
  {
    id: 1734,
    cp: 8519,
    name: "Folgueroles",
    provincia_id: 8
  },
  {
    id: 1735,
    cp: 8519,
    name: "Malla",
    provincia_id: 8
  },
  {
    id: 1736,
    cp: 8520,
    name: "Les Franqueses del Vall?s",
    provincia_id: 8
  },
  {
    id: 1737,
    cp: 8521,
    name: "Les Franqueses del Vall?s",
    provincia_id: 8
  },
  {
    id: 1738,
    cp: 8529,
    name: "Muntanyola",
    provincia_id: 8
  },
  {
    id: 1739,
    cp: 8530,
    name: "La Garriga",
    provincia_id: 8
  },
  {
    id: 1740,
    cp: 8530,
    name: "C?noves i Samalús",
    provincia_id: 8
  },
  {
    id: 1741,
    cp: 8540,
    name: "Centelles",
    provincia_id: 8
  },
  {
    id: 1742,
    cp: 8550,
    name: "Baleny?",
    provincia_id: 8
  },
  {
    id: 1743,
    cp: 8551,
    name: "Tona",
    provincia_id: 8
  },
  {
    id: 1744,
    cp: 8552,
    name: "Taradell",
    provincia_id: 8
  },
  {
    id: 1745,
    cp: 8553,
    name: "Seva",
    provincia_id: 8
  },
  {
    id: 1746,
    cp: 8554,
    name: "Seva",
    provincia_id: 8
  },
  {
    id: 1747,
    cp: 8559,
    name: "El Brull",
    provincia_id: 8
  },
  {
    id: 1748,
    cp: 8560,
    name: "Manlleu",
    provincia_id: 8
  },
  {
    id: 1749,
    cp: 8569,
    name: "Rupit i Pruit",
    provincia_id: 8
  },
  {
    id: 1750,
    cp: 8569,
    name: "L'Esquirol",
    provincia_id: 8
  },
  {
    id: 1751,
    cp: 8570,
    name: "Torelló",
    provincia_id: 8
  },
  {
    id: 1752,
    cp: 8571,
    name: "Sant Vicenç de Torelló",
    provincia_id: 8
  },
  {
    id: 1753,
    cp: 8572,
    name: "Sant Pere de Torelló",
    provincia_id: 8
  },
  {
    id: 1754,
    cp: 8573,
    name: "Orís",
    provincia_id: 8
  },
  {
    id: 1755,
    cp: 8580,
    name: "Sant Quirze de Besora",
    provincia_id: 8
  },
  {
    id: 1756,
    cp: 8584,
    name: "Santa Maria de Besora",
    provincia_id: 8
  },
  {
    id: 1757,
    cp: 8587,
    name: "Alpens",
    provincia_id: 8
  },
  {
    id: 1758,
    cp: 8588,
    name: "Sora",
    provincia_id: 8
  },
  {
    id: 1759,
    cp: 8589,
    name: "Santa Maria de Besora",
    provincia_id: 8
  },
  {
    id: 1760,
    cp: 8589,
    name: "Perafita",
    provincia_id: 8
  },
  {
    id: 1761,
    cp: 8589,
    name: "Sant Boi de Lluçan?s",
    provincia_id: 8
  },
  {
    id: 1762,
    cp: 8589,
    name: "Sobremunt",
    provincia_id: 8
  },
  {
    id: 1763,
    cp: 8589,
    name: "Montesquiu",
    provincia_id: 8
  },
  {
    id: 1764,
    cp: 8589,
    name: "Sant Agustí de Lluçan?s",
    provincia_id: 8
  },
  {
    id: 1765,
    cp: 8590,
    name: "Figaró-Montmany",
    provincia_id: 8
  },
  {
    id: 1766,
    cp: 8591,
    name: "Aiguafreda",
    provincia_id: 8
  },
  {
    id: 1767,
    cp: 8592,
    name: "Sant Martí de Centelles",
    provincia_id: 8
  },
  {
    id: 1768,
    cp: 8593,
    name: "Tagamanent",
    provincia_id: 8
  },
  {
    id: 1769,
    cp: 8600,
    name: "Berga",
    provincia_id: 8
  },
  {
    id: 1770,
    cp: 8604,
    name: "Castell de l'Areny",
    provincia_id: 8
  },
  {
    id: 1771,
    cp: 8605,
    name: "Montclar",
    provincia_id: 8
  },
  {
    id: 1772,
    cp: 8610,
    name: "Avi?",
    provincia_id: 8
  },
  {
    id: 1773,
    cp: 8611,
    name: "Olvan",
    provincia_id: 8
  },
  {
    id: 1774,
    cp: 8612,
    name: "Montmajor",
    provincia_id: 8
  },
  {
    id: 1775,
    cp: 8613,
    name: "Vilada",
    provincia_id: 8
  },
  {
    id: 1776,
    cp: 8614,
    name: "L'Espunyola",
    provincia_id: 8
  },
  {
    id: 1777,
    cp: 8619,
    name: "La Quar",
    provincia_id: 8
  },
  {
    id: 1778,
    cp: 8619,
    name: "Borred?",
    provincia_id: 8
  },
  {
    id: 1779,
    cp: 8619,
    name: "Santa Maria de Merl?s",
    provincia_id: 8
  },
  {
    id: 1780,
    cp: 8619,
    name: "Castellar del Riu",
    provincia_id: 8
  },
  {
    id: 1781,
    cp: 8619,
    name: "Sant Jaume de Frontany?",
    provincia_id: 8
  },
  {
    id: 1782,
    cp: 8619,
    name: "Capolat",
    provincia_id: 8
  },
  {
    id: 1783,
    cp: 8619,
    name: "Sag?s",
    provincia_id: 8
  },
  {
    id: 1784,
    cp: 8620,
    name: "Sant Vicenç dels Horts",
    provincia_id: 8
  },
  {
    id: 1785,
    cp: 8629,
    name: "Torrelles de Llobregat",
    provincia_id: 8
  },
  {
    id: 1786,
    cp: 8630,
    name: "Abrera",
    provincia_id: 8
  },
  {
    id: 1787,
    cp: 8635,
    name: "Sant Esteve Sesrovires",
    provincia_id: 8
  },
  {
    id: 1788,
    cp: 8640,
    name: "Olesa de Montserrat",
    provincia_id: 8
  },
  {
    id: 1789,
    cp: 8650,
    name: "Sallent",
    provincia_id: 8
  },
  {
    id: 1790,
    cp: 8660,
    name: "Balsareny",
    provincia_id: 8
  },
  {
    id: 1791,
    cp: 8670,
    name: "Nav?s",
    provincia_id: 8
  },
  {
    id: 1792,
    cp: 8672,
    name: "Gai?",
    provincia_id: 8
  },
  {
    id: 1793,
    cp: 8673,
    name: "Viver i Serrateix",
    provincia_id: 8
  },
  {
    id: 1794,
    cp: 8680,
    name: "Gironella",
    provincia_id: 8
  },
  {
    id: 1795,
    cp: 8690,
    name: "Santa Coloma de Cervelló",
    provincia_id: 8
  },
  {
    id: 1796,
    cp: 8691,
    name: "Monistrol de Montserrat",
    provincia_id: 8
  },
  {
    id: 1797,
    cp: 8692,
    name: "Puig-reig",
    provincia_id: 8
  },
  {
    id: 1798,
    cp: 8693,
    name: "Casserres",
    provincia_id: 8
  },
  {
    id: 1799,
    cp: 8694,
    name: "Guardiola de Bergued?",
    provincia_id: 8
  },
  {
    id: 1800,
    cp: 8694,
    name: "Sant Juli? de Cerdanyola",
    provincia_id: 8
  },
  {
    id: 1801,
    cp: 8695,
    name: "Gisclareny",
    provincia_id: 8
  },
  {
    id: 1802,
    cp: 8695,
    name: "Bag?",
    provincia_id: 8
  },
  {
    id: 1803,
    cp: 8696,
    name: "Castellar de n'Hug",
    provincia_id: 8
  },
  {
    id: 1804,
    cp: 8696,
    name: "La Pobla de Lillet",
    provincia_id: 8
  },
  {
    id: 1805,
    cp: 8697,
    name: "Josa i Tuixén",
    provincia_id: 25
  },
  {
    id: 1806,
    cp: 8697,
    name: "Saldes",
    provincia_id: 8
  },
  {
    id: 1807,
    cp: 8698,
    name: "La Nou de Bergued?",
    provincia_id: 8
  },
  {
    id: 1808,
    cp: 8698,
    name: "Cercs",
    provincia_id: 8
  },
  {
    id: 1809,
    cp: 8699,
    name: "Avi?",
    provincia_id: 8
  },
  {
    id: 1810,
    cp: 8699,
    name: "Fígols",
    provincia_id: 8
  },
  {
    id: 1811,
    cp: 8699,
    name: "Saldes",
    provincia_id: 8
  },
  {
    id: 1812,
    cp: 8699,
    name: "Olvan",
    provincia_id: 8
  },
  {
    id: 1813,
    cp: 8699,
    name: "Vallcebre",
    provincia_id: 8
  },
  {
    id: 1814,
    cp: 8700,
    name: "Igualada",
    provincia_id: 8
  },
  {
    id: 1815,
    cp: 8710,
    name: "Santa Margarida de Montbui",
    provincia_id: 8
  },
  {
    id: 1816,
    cp: 8711,
    name: "?dena",
    provincia_id: 8
  },
  {
    id: 1817,
    cp: 8712,
    name: "Sant Martí de Tous",
    provincia_id: 8
  },
  {
    id: 1818,
    cp: 8717,
    name: "Montmaneu",
    provincia_id: 8
  },
  {
    id: 1819,
    cp: 8717,
    name: "Argençola",
    provincia_id: 8
  },
  {
    id: 1820,
    cp: 8717,
    name: "Talavera",
    provincia_id: 25
  },
  {
    id: 1821,
    cp: 8718,
    name: "Cabrera d'Anoia",
    provincia_id: 8
  },
  {
    id: 1822,
    cp: 8719,
    name: "Rubió",
    provincia_id: 8
  },
  {
    id: 1823,
    cp: 8719,
    name: "Jorba",
    provincia_id: 8
  },
  {
    id: 1824,
    cp: 8719,
    name: "Castellolí",
    provincia_id: 8
  },
  {
    id: 1825,
    cp: 8720,
    name: "Vilafranca del Pened?s",
    provincia_id: 8
  },
  {
    id: 1826,
    cp: 8729,
    name: "Castellet i la Gornal",
    provincia_id: 8
  },
  {
    id: 1827,
    cp: 8730,
    name: "Santa Margarida i els Monjos",
    provincia_id: 8
  },
  {
    id: 1828,
    cp: 8731,
    name: "Sant Martí Sarroca",
    provincia_id: 8
  },
  {
    id: 1829,
    cp: 8731,
    name: "Avinyonet del Pened?s",
    provincia_id: 8
  },
  {
    id: 1830,
    cp: 8732,
    name: "Castellet i la Gornal",
    provincia_id: 8
  },
  {
    id: 1831,
    cp: 8732,
    name: "Castellví de la Marca",
    provincia_id: 8
  },
  {
    id: 1832,
    cp: 8733,
    name: "El Pla del Pened?s",
    provincia_id: 8
  },
  {
    id: 1833,
    cp: 8734,
    name: "Avinyonet del Pened?s",
    provincia_id: 8
  },
  {
    id: 1834,
    cp: 8734,
    name: "Ol?rdola",
    provincia_id: 8
  },
  {
    id: 1835,
    cp: 8735,
    name: "Vilobí del Pened?s",
    provincia_id: 8
  },
  {
    id: 1836,
    cp: 8736,
    name: "Font-rubí",
    provincia_id: 8
  },
  {
    id: 1837,
    cp: 8737,
    name: "Torrelles de Foix",
    provincia_id: 8
  },
  {
    id: 1838,
    cp: 8738,
    name: "Pontons",
    provincia_id: 8
  },
  {
    id: 1839,
    cp: 8739,
    name: "Subirats",
    provincia_id: 8
  },
  {
    id: 1840,
    cp: 8739,
    name: "Font-rubí",
    provincia_id: 8
  },
  {
    id: 1841,
    cp: 8740,
    name: "Sant Andreu de la Barca",
    provincia_id: 8
  },
  {
    id: 1842,
    cp: 8750,
    name: "Molins de Rei",
    provincia_id: 8
  },
  {
    id: 1843,
    cp: 8753,
    name: "Pallej?",
    provincia_id: 8
  },
  {
    id: 1844,
    cp: 8754,
    name: "El Papiol",
    provincia_id: 8
  },
  {
    id: 1845,
    cp: 8755,
    name: "Castellbisbal",
    provincia_id: 8
  },
  {
    id: 1846,
    cp: 8756,
    name: "La Palma de Cervelló",
    provincia_id: 8
  },
  {
    id: 1847,
    cp: 8757,
    name: "Corbera de Llobregat",
    provincia_id: 8
  },
  {
    id: 1848,
    cp: 8758,
    name: "Cervelló",
    provincia_id: 8
  },
  {
    id: 1849,
    cp: 8759,
    name: "Vallirana",
    provincia_id: 8
  },
  {
    id: 1850,
    cp: 8760,
    name: "Martorell",
    provincia_id: 8
  },
  {
    id: 1851,
    cp: 8769,
    name: "Castellví de Rosanes",
    provincia_id: 8
  },
  {
    id: 1852,
    cp: 8770,
    name: "Sant Sadurní d'Anoia",
    provincia_id: 8
  },
  {
    id: 1853,
    cp: 8770,
    name: "Sant Celoni",
    provincia_id: 8
  },
  {
    id: 1854,
    cp: 8773,
    name: "Mediona",
    provincia_id: 8
  },
  {
    id: 1855,
    cp: 8775,
    name: "Torrelavit",
    provincia_id: 8
  },
  {
    id: 1856,
    cp: 8776,
    name: "Sant Pere de Riudebitlles",
    provincia_id: 8
  },
  {
    id: 1857,
    cp: 8777,
    name: "Sant Quintí de Mediona",
    provincia_id: 8
  },
  {
    id: 1858,
    cp: 8779,
    name: "La Llacuna",
    provincia_id: 8
  },
  {
    id: 1859,
    cp: 8780,
    name: "Pallej?",
    provincia_id: 8
  },
  {
    id: 1860,
    cp: 8781,
    name: "Els Hostalets de Pierola",
    provincia_id: 8
  },
  {
    id: 1861,
    cp: 8782,
    name: "Masquefa",
    provincia_id: 8
  },
  {
    id: 1862,
    cp: 8782,
    name: "Sant Esteve Sesrovires",
    provincia_id: 8
  },
  {
    id: 1863,
    cp: 8783,
    name: "Masquefa",
    provincia_id: 8
  },
  {
    id: 1864,
    cp: 8784,
    name: "Piera",
    provincia_id: 8
  },
  {
    id: 1865,
    cp: 8785,
    name: "Vallbona d'Anoia",
    provincia_id: 8
  },
  {
    id: 1866,
    cp: 8786,
    name: "Capellades",
    provincia_id: 8
  },
  {
    id: 1867,
    cp: 8787,
    name: "La Pobla de Claramunt",
    provincia_id: 8
  },
  {
    id: 1868,
    cp: 8787,
    name: "Santa Maria de Miralles",
    provincia_id: 8
  },
  {
    id: 1869,
    cp: 8787,
    name: "Orpí",
    provincia_id: 8
  },
  {
    id: 1870,
    cp: 8787,
    name: "Carme",
    provincia_id: 8
  },
  {
    id: 1871,
    cp: 8788,
    name: "Vilanova del Camí",
    provincia_id: 8
  },
  {
    id: 1872,
    cp: 8789,
    name: "La Torre de Claramunt",
    provincia_id: 8
  },
  {
    id: 1873,
    cp: 8790,
    name: "Gelida",
    provincia_id: 8
  },
  {
    id: 1874,
    cp: 8791,
    name: "Sant Llorenç d'Hortons",
    provincia_id: 8
  },
  {
    id: 1875,
    cp: 8792,
    name: "Santa Fe del Pened?s",
    provincia_id: 8
  },
  {
    id: 1876,
    cp: 8792,
    name: "La Granada",
    provincia_id: 8
  },
  {
    id: 1877,
    cp: 8793,
    name: "Avinyonet del Pened?s",
    provincia_id: 8
  },
  {
    id: 1878,
    cp: 8794,
    name: "Les Cabanyes",
    provincia_id: 8
  },
  {
    id: 1879,
    cp: 8795,
    name: "Olesa de Bonesvalls",
    provincia_id: 8
  },
  {
    id: 1880,
    cp: 8796,
    name: "Pacs del Pened?s",
    provincia_id: 8
  },
  {
    id: 1881,
    cp: 8797,
    name: "Puigd?lber",
    provincia_id: 8
  },
  {
    id: 1882,
    cp: 8798,
    name: "Sant Cugat Sesgarrigues",
    provincia_id: 8
  },
  {
    id: 1883,
    cp: 8798,
    name: "Avinyonet del Pened?s",
    provincia_id: 8
  },
  {
    id: 1884,
    cp: 8799,
    name: "Ol?rdola",
    provincia_id: 8
  },
  {
    id: 1885,
    cp: 8800,
    name: "Vilanova i la Geltrú",
    provincia_id: 8
  },
  {
    id: 1886,
    cp: 8801,
    name: "Terrassa",
    provincia_id: 8
  },
  {
    id: 1887,
    cp: 8810,
    name: "Sant Pere de Ribes",
    provincia_id: 8
  },
  {
    id: 1888,
    cp: 8811,
    name: "Canyelles",
    provincia_id: 8
  },
  {
    id: 1889,
    cp: 8812,
    name: "Sant Pere de Ribes",
    provincia_id: 8
  },
  {
    id: 1890,
    cp: 8818,
    name: "Olivella",
    provincia_id: 8
  },
  {
    id: 1891,
    cp: 8820,
    name: "El Prat de Llobregat",
    provincia_id: 8
  },
  {
    id: 1892,
    cp: 8830,
    name: "Sant Boi de Llobregat",
    provincia_id: 8
  },
  {
    id: 1893,
    cp: 8840,
    name: "Viladecans",
    provincia_id: 8
  },
  {
    id: 1894,
    cp: 8849,
    name: "Sant Climent de Llobregat",
    provincia_id: 8
  },
  {
    id: 1895,
    cp: 8850,
    name: "Gav?",
    provincia_id: 8
  },
  {
    id: 1896,
    cp: 8859,
    name: "Begues",
    provincia_id: 8
  },
  {
    id: 1897,
    cp: 8860,
    name: "Castelldefels",
    provincia_id: 8
  },
  {
    id: 1898,
    cp: 8870,
    name: "Sitges",
    provincia_id: 8
  },
  {
    id: 1899,
    cp: 8871,
    name: "Sitges",
    provincia_id: 8
  },
  {
    id: 1900,
    cp: 8880,
    name: "Cubelles",
    provincia_id: 8
  },
  {
    id: 1901,
    cp: 8901,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1902,
    cp: 8902,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1903,
    cp: 8903,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1904,
    cp: 8904,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1905,
    cp: 8905,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1906,
    cp: 8906,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1907,
    cp: 8907,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1908,
    cp: 8908,
    name: "L'Hospitalet de Llobregat",
    provincia_id: 8
  },
  {
    id: 1909,
    cp: 8911,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1910,
    cp: 8912,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1911,
    cp: 8913,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1912,
    cp: 8914,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1913,
    cp: 8915,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1914,
    cp: 8916,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1915,
    cp: 8917,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1916,
    cp: 8918,
    name: "Badalona",
    provincia_id: 8
  },
  {
    id: 1917,
    cp: 8921,
    name: "Santa Coloma de Gramenet",
    provincia_id: 8
  },
  {
    id: 1918,
    cp: 8922,
    name: "Santa Coloma de Gramenet",
    provincia_id: 8
  },
  {
    id: 1919,
    cp: 8923,
    name: "Santa Coloma de Gramenet",
    provincia_id: 8
  },
  {
    id: 1920,
    cp: 8924,
    name: "Santa Coloma de Gramenet",
    provincia_id: 8
  },
  {
    id: 1921,
    cp: 8930,
    name: "Sant Adri? de Bes?s",
    provincia_id: 8
  },
  {
    id: 1922,
    cp: 8940,
    name: "Cornell? de Llobregat",
    provincia_id: 8
  },
  {
    id: 1923,
    cp: 8950,
    name: "Esplugues de Llobregat",
    provincia_id: 8
  },
  {
    id: 1924,
    cp: 8960,
    name: "Sant Just Desvern",
    provincia_id: 8
  },
  {
    id: 1925,
    cp: 8970,
    name: "Sant Joan Despí",
    provincia_id: 8
  },
  {
    id: 1926,
    cp: 8980,
    name: "Sant Feliu de Llobregat",
    provincia_id: 8
  },
  {
    id: 1927,
    cp: 9001,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 1928,
    cp: 9002,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 1929,
    cp: 9003,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 1930,
    cp: 9004,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 1931,
    cp: 9004,
    name: "Sotragero",
    provincia_id: 9
  },
  {
    id: 1932,
    cp: 9005,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 1933,
    cp: 9006,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 1934,
    cp: 9007,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 1935,
    cp: 9100,
    name: "Melgar de Fernamental",
    provincia_id: 9
  },
  {
    id: 1936,
    cp: 9107,
    name: "Palacios de Riopisuerga",
    provincia_id: 9
  },
  {
    id: 1937,
    cp: 9107,
    name: "Arenillas de Riopisuerga",
    provincia_id: 9
  },
  {
    id: 1938,
    cp: 9107,
    name: "Castrillo Mota de Judíos",
    provincia_id: 9
  },
  {
    id: 1939,
    cp: 9107,
    name: "Itero del Castillo",
    provincia_id: 9
  },
  {
    id: 1940,
    cp: 9108,
    name: "Rezmondo",
    provincia_id: 9
  },
  {
    id: 1941,
    cp: 9108,
    name: "Padilla de Arriba",
    provincia_id: 9
  },
  {
    id: 1942,
    cp: 9108,
    name: "Castrillo de Riopisuerga",
    provincia_id: 9
  },
  {
    id: 1943,
    cp: 9108,
    name: "Melgar de Fernamental",
    provincia_id: 9
  },
  {
    id: 1944,
    cp: 9108,
    name: "Zarzosa de Río Pisuerga",
    provincia_id: 9
  },
  {
    id: 1945,
    cp: 9109,
    name: "Sasamón",
    provincia_id: 9
  },
  {
    id: 1946,
    cp: 9109,
    name: "Padilla de Abajo",
    provincia_id: 9
  },
  {
    id: 1947,
    cp: 9109,
    name: "Castrojeriz",
    provincia_id: 9
  },
  {
    id: 1948,
    cp: 9109,
    name: "Villasandino",
    provincia_id: 9
  },
  {
    id: 1949,
    cp: 9110,
    name: "Castrojeriz",
    provincia_id: 9
  },
  {
    id: 1950,
    cp: 9119,
    name: "Los Balbases",
    provincia_id: 9
  },
  {
    id: 1951,
    cp: 9119,
    name: "Castrojeriz",
    provincia_id: 9
  },
  {
    id: 1952,
    cp: 9119,
    name: "Pedrosa del Príncipe",
    provincia_id: 9
  },
  {
    id: 1953,
    cp: 9119,
    name: "Villaquirán de la Puebla",
    provincia_id: 9
  },
  {
    id: 1954,
    cp: 9120,
    name: "Villadiego",
    provincia_id: 9
  },
  {
    id: 1955,
    cp: 9121,
    name: "Melgar de Fernamental",
    provincia_id: 9
  },
  {
    id: 1956,
    cp: 9123,
    name: "Sasamón",
    provincia_id: 9
  },
  {
    id: 1957,
    cp: 9124,
    name: "Villadiego",
    provincia_id: 9
  },
  {
    id: 1958,
    cp: 9124,
    name: "Humada",
    provincia_id: 9
  },
  {
    id: 1959,
    cp: 9125,
    name: "Huérmeces",
    provincia_id: 9
  },
  {
    id: 1960,
    cp: 9125,
    name: "Úrbel del Castillo",
    provincia_id: 9
  },
  {
    id: 1961,
    cp: 9125,
    name: "Villadiego",
    provincia_id: 9
  },
  {
    id: 1962,
    cp: 9125,
    name: "Montorio",
    provincia_id: 9
  },
  {
    id: 1963,
    cp: 9125,
    name: "Basconcillos del Tozo",
    provincia_id: 9
  },
  {
    id: 1964,
    cp: 9126,
    name: "Humada",
    provincia_id: 9
  },
  {
    id: 1965,
    cp: 9126,
    name: "Basconcillos del Tozo",
    provincia_id: 9
  },
  {
    id: 1966,
    cp: 9127,
    name: "Valle de Valdelucio",
    provincia_id: 9
  },
  {
    id: 1967,
    cp: 9127,
    name: "Basconcillos del Tozo",
    provincia_id: 9
  },
  {
    id: 1968,
    cp: 9128,
    name: "Ibeas de Juarros",
    provincia_id: 9
  },
  {
    id: 1969,
    cp: 9128,
    name: "Sordillos",
    provincia_id: 9
  },
  {
    id: 1970,
    cp: 9128,
    name: "Villamayor de Trevi?o",
    provincia_id: 9
  },
  {
    id: 1971,
    cp: 9128,
    name: "Villadiego",
    provincia_id: 9
  },
  {
    id: 1972,
    cp: 9128,
    name: "Grijalba",
    provincia_id: 9
  },
  {
    id: 1973,
    cp: 9128,
    name: "Villegas",
    provincia_id: 9
  },
  {
    id: 1974,
    cp: 9129,
    name: "Villadiego",
    provincia_id: 9
  },
  {
    id: 1975,
    cp: 9130,
    name: "Rabé de las Calzadas",
    provincia_id: 9
  },
  {
    id: 1976,
    cp: 9130,
    name: "Tardajos",
    provincia_id: 9
  },
  {
    id: 1977,
    cp: 9131,
    name: "Pedrosa de Río Úrbel",
    provincia_id: 9
  },
  {
    id: 1978,
    cp: 9131,
    name: "Valle de Santibá?ez",
    provincia_id: 9
  },
  {
    id: 1979,
    cp: 9131,
    name: "Las Quintanillas",
    provincia_id: 9
  },
  {
    id: 1980,
    cp: 9131,
    name: "Alfoz de Quintanadue?as",
    provincia_id: 9
  },
  {
    id: 1981,
    cp: 9133,
    name: "Susinos del Páramo",
    provincia_id: 9
  },
  {
    id: 1982,
    cp: 9133,
    name: "Villadiego",
    provincia_id: 9
  },
  {
    id: 1983,
    cp: 9133,
    name: "Pedrosa del Páramo",
    provincia_id: 9
  },
  {
    id: 1984,
    cp: 9133,
    name: "Manciles",
    provincia_id: 9
  },
  {
    id: 1985,
    cp: 9133,
    name: "Isar",
    provincia_id: 9
  },
  {
    id: 1986,
    cp: 9133,
    name: "Las Hormazas",
    provincia_id: 9
  },
  {
    id: 1987,
    cp: 9133,
    name: "Tobar",
    provincia_id: 9
  },
  {
    id: 1988,
    cp: 9135,
    name: "Sotresgudo",
    provincia_id: 9
  },
  {
    id: 1989,
    cp: 9136,
    name: "Sotresgudo",
    provincia_id: 9
  },
  {
    id: 1990,
    cp: 9140,
    name: "Merindad de Río Ubierna",
    provincia_id: 9
  },
  {
    id: 1991,
    cp: 9140,
    name: "Quintanaortu?o",
    provincia_id: 9
  },
  {
    id: 1992,
    cp: 9140,
    name: "Quintanilla Vivar",
    provincia_id: 9
  },
  {
    id: 1993,
    cp: 9141,
    name: "Merindad de Río Ubierna",
    provincia_id: 9
  },
  {
    id: 1994,
    cp: 9141,
    name: "Abajas",
    provincia_id: 9
  },
  {
    id: 1995,
    cp: 9142,
    name: "Valle de Sedano",
    provincia_id: 9
  },
  {
    id: 1996,
    cp: 9142,
    name: "Merindad de Río Ubierna",
    provincia_id: 9
  },
  {
    id: 1997,
    cp: 9143,
    name: "Tubilla del Agua",
    provincia_id: 9
  },
  {
    id: 1998,
    cp: 9143,
    name: "Sargentes de la Lora",
    provincia_id: 9
  },
  {
    id: 1999,
    cp: 9144,
    name: "Sargentes de la Lora",
    provincia_id: 9
  },
  {
    id: 2000,
    cp: 9145,
    name: "Tubilla del Agua",
    provincia_id: 9
  },
  {
    id: 2001,
    cp: 9145,
    name: "Valle de Sedano",
    provincia_id: 9
  },
  {
    id: 2002,
    cp: 9145,
    name: "Sargentes de la Lora",
    provincia_id: 9
  },
  {
    id: 2003,
    cp: 9146,
    name: "Valle de Sedano",
    provincia_id: 9
  },
  {
    id: 2004,
    cp: 9146,
    name: "Valle de Zamanzas",
    provincia_id: 9
  },
  {
    id: 2005,
    cp: 9146,
    name: "Los Altos",
    provincia_id: 9
  },
  {
    id: 2006,
    cp: 9150,
    name: "Las Hormazas",
    provincia_id: 9
  },
  {
    id: 2007,
    cp: 9150,
    name: "Huérmeces",
    provincia_id: 9
  },
  {
    id: 2008,
    cp: 9150,
    name: "Valle de Santibá?ez",
    provincia_id: 9
  },
  {
    id: 2009,
    cp: 9159,
    name: "Valle de Santibá?ez",
    provincia_id: 9
  },
  {
    id: 2010,
    cp: 9191,
    name: "Villayerno Morquillas",
    provincia_id: 9
  },
  {
    id: 2011,
    cp: 9191,
    name: "Hurones",
    provincia_id: 9
  },
  {
    id: 2012,
    cp: 9191,
    name: "Valle de las Navas",
    provincia_id: 9
  },
  {
    id: 2013,
    cp: 9192,
    name: "Carde?uela Riopico",
    provincia_id: 9
  },
  {
    id: 2014,
    cp: 9192,
    name: "Orbaneja Riopico",
    provincia_id: 9
  },
  {
    id: 2015,
    cp: 9192,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 2016,
    cp: 9193,
    name: "Carcedo de Burgos",
    provincia_id: 9
  },
  {
    id: 2017,
    cp: 9193,
    name: "Carde?ajimeno",
    provincia_id: 9
  },
  {
    id: 2018,
    cp: 9193,
    name: "Castrillo del Val",
    provincia_id: 9
  },
  {
    id: 2019,
    cp: 9193,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 2020,
    cp: 9194,
    name: "Los Ausines",
    provincia_id: 9
  },
  {
    id: 2021,
    cp: 9194,
    name: "Ibeas de Juarros",
    provincia_id: 9
  },
  {
    id: 2022,
    cp: 9194,
    name: "Carcedo de Burgos",
    provincia_id: 9
  },
  {
    id: 2023,
    cp: 9194,
    name: "Revilla del Campo",
    provincia_id: 9
  },
  {
    id: 2024,
    cp: 9194,
    name: "Carde?adijo",
    provincia_id: 9
  },
  {
    id: 2025,
    cp: 9195,
    name: "Villagonzalo Pedernales",
    provincia_id: 9
  },
  {
    id: 2026,
    cp: 9195,
    name: "Villalbilla de Burgos",
    provincia_id: 9
  },
  {
    id: 2027,
    cp: 9195,
    name: "Villariezo",
    provincia_id: 9
  },
  {
    id: 2028,
    cp: 9195,
    name: "Arcos",
    provincia_id: 9
  },
  {
    id: 2029,
    cp: 9197,
    name: "Villaescusa la Sombría",
    provincia_id: 9
  },
  {
    id: 2030,
    cp: 9197,
    name: "Merindad de Río Ubierna",
    provincia_id: 9
  },
  {
    id: 2031,
    cp: 9197,
    name: "Alfoz de Quintanadue?as",
    provincia_id: 9
  },
  {
    id: 2032,
    cp: 9197,
    name: "Villalbilla de Burgos",
    provincia_id: 9
  },
  {
    id: 2033,
    cp: 9197,
    name: "Sotragero",
    provincia_id: 9
  },
  {
    id: 2034,
    cp: 9198,
    name: "San Adrián de Juarros",
    provincia_id: 9
  },
  {
    id: 2035,
    cp: 9198,
    name: "Ibeas de Juarros",
    provincia_id: 9
  },
  {
    id: 2036,
    cp: 9198,
    name: "Castrillo del Val",
    provincia_id: 9
  },
  {
    id: 2037,
    cp: 9199,
    name: "Rábanos",
    provincia_id: 9
  },
  {
    id: 2038,
    cp: 9199,
    name: "Arlanzón",
    provincia_id: 9
  },
  {
    id: 2039,
    cp: 9199,
    name: "Rubena",
    provincia_id: 9
  },
  {
    id: 2040,
    cp: 9199,
    name: "Villasur de Herreros",
    provincia_id: 9
  },
  {
    id: 2041,
    cp: 9199,
    name: "Burgos",
    provincia_id: 9
  },
  {
    id: 2042,
    cp: 9199,
    name: "Barrios de Colina",
    provincia_id: 9
  },
  {
    id: 2043,
    cp: 9199,
    name: "Carde?ajimeno",
    provincia_id: 9
  },
  {
    id: 2044,
    cp: 9199,
    name: "Pineda de la Sierra",
    provincia_id: 9
  },
  {
    id: 2045,
    cp: 9199,
    name: "Atapuerca",
    provincia_id: 9
  },
  {
    id: 2046,
    cp: 9200,
    name: "Miranda de Ebro",
    provincia_id: 9
  },
  {
    id: 2047,
    cp: 9210,
    name: "Valle de Tobalina",
    provincia_id: 9
  },
  {
    id: 2048,
    cp: 9211,
    name: "Frías",
    provincia_id: 9
  },
  {
    id: 2049,
    cp: 9211,
    name: "Partido de la Sierra en Tobalina",
    provincia_id: 9
  },
  {
    id: 2050,
    cp: 9211,
    name: "O?a",
    provincia_id: 9
  },
  {
    id: 2051,
    cp: 9211,
    name: "Valle de Tobalina",
    provincia_id: 9
  },
  {
    id: 2052,
    cp: 9212,
    name: "Valle de Tobalina",
    provincia_id: 9
  },
  {
    id: 2053,
    cp: 9212,
    name: "Miranda de Ebro",
    provincia_id: 9
  },
  {
    id: 2054,
    cp: 9212,
    name: "Merindad de Cuesta-Urria",
    provincia_id: 9
  },
  {
    id: 2055,
    cp: 9213,
    name: "Cillaperlata",
    provincia_id: 9
  },
  {
    id: 2056,
    cp: 9213,
    name: "Valle de Tobalina",
    provincia_id: 9
  },
  {
    id: 2057,
    cp: 9213,
    name: "Trespaderne",
    provincia_id: 9
  },
  {
    id: 2058,
    cp: 9214,
    name: "Bozoó",
    provincia_id: 9
  },
  {
    id: 2059,
    cp: 9215,
    name: "Condado de Trevi?o",
    provincia_id: 9
  },
  {
    id: 2060,
    cp: 9216,
    name: "Condado de Trevi?o",
    provincia_id: 9
  },
  {
    id: 2061,
    cp: 9217,
    name: "Condado de Trevi?o",
    provincia_id: 9
  },
  {
    id: 2062,
    cp: 9218,
    name: "Condado de Trevi?o",
    provincia_id: 9
  },
  {
    id: 2063,
    cp: 9218,
    name: "Miranda de Ebro",
    provincia_id: 9
  },
  {
    id: 2064,
    cp: 9219,
    name: "Altable",
    provincia_id: 9
  },
  {
    id: 2065,
    cp: 9219,
    name: "Villanueva de Teba",
    provincia_id: 9
  },
  {
    id: 2066,
    cp: 9219,
    name: "Santa María Rivarredonda",
    provincia_id: 9
  },
  {
    id: 2067,
    cp: 9219,
    name: "Bozoó",
    provincia_id: 9
  },
  {
    id: 2068,
    cp: 9219,
    name: "Santa Gadea del Cid",
    provincia_id: 9
  },
  {
    id: 2069,
    cp: 9219,
    name: "Valluércanes",
    provincia_id: 9
  },
  {
    id: 2070,
    cp: 9219,
    name: "Encío",
    provincia_id: 9
  },
  {
    id: 2071,
    cp: 9219,
    name: "Ameyugo",
    provincia_id: 9
  },
  {
    id: 2072,
    cp: 9219,
    name: "Miranda de Ebro",
    provincia_id: 9
  },
  {
    id: 2073,
    cp: 9220,
    name: "Pampliega",
    provincia_id: 9
  },
  {
    id: 2074,
    cp: 9226,
    name: "Villaquirán de los Infantes",
    provincia_id: 9
  },
  {
    id: 2075,
    cp: 9226,
    name: "Barrio de Mu?ó",
    provincia_id: 9
  },
  {
    id: 2076,
    cp: 9226,
    name: "Belbimbre",
    provincia_id: 9
  },
  {
    id: 2077,
    cp: 9226,
    name: "Villazopeque",
    provincia_id: 9
  },
  {
    id: 2078,
    cp: 9226,
    name: "Pampliega",
    provincia_id: 9
  },
  {
    id: 2079,
    cp: 9226,
    name: "Celada del Camino",
    provincia_id: 9
  },
  {
    id: 2080,
    cp: 9226,
    name: "Villaverde-Mogina",
    provincia_id: 9
  },
  {
    id: 2081,
    cp: 9226,
    name: "Palazuelos de Mu?ó",
    provincia_id: 9
  },
  {
    id: 2082,
    cp: 9227,
    name: "Iglesias",
    provincia_id: 9
  },
  {
    id: 2083,
    cp: 9227,
    name: "Villaldemiro",
    provincia_id: 9
  },
  {
    id: 2084,
    cp: 9227,
    name: "Castellanos de Castro",
    provincia_id: 9
  },
  {
    id: 2085,
    cp: 9227,
    name: "Hontanas",
    provincia_id: 9
  },
  {
    id: 2086,
    cp: 9227,
    name: "Tamarón",
    provincia_id: 9
  },
  {
    id: 2087,
    cp: 9228,
    name: "Villaverde del Monte",
    provincia_id: 9
  },
  {
    id: 2088,
    cp: 9228,
    name: "Mahamud",
    provincia_id: 9
  },
  {
    id: 2089,
    cp: 9228,
    name: "Presencio",
    provincia_id: 9
  },
  {
    id: 2090,
    cp: 9228,
    name: "Mazuela",
    provincia_id: 9
  },
  {
    id: 2091,
    cp: 9228,
    name: "Ciadoncha",
    provincia_id: 9
  },
  {
    id: 2092,
    cp: 9228,
    name: "Olmillos de Mu?ó",
    provincia_id: 9
  },
  {
    id: 2093,
    cp: 9230,
    name: "San Mamés de Burgos",
    provincia_id: 9
  },
  {
    id: 2094,
    cp: 9230,
    name: "Buniel",
    provincia_id: 9
  },
  {
    id: 2095,
    cp: 9230,
    name: "Hornillos del Camino",
    provincia_id: 9
  },
  {
    id: 2096,
    cp: 9230,
    name: "Estépar",
    provincia_id: 9
  },
  {
    id: 2097,
    cp: 9230,
    name: "Frandovínez",
    provincia_id: 9
  },
  {
    id: 2098,
    cp: 9233,
    name: "Alfoz de Bricia",
    provincia_id: 9
  },
  {
    id: 2099,
    cp: 9239,
    name: "Cayuela",
    provincia_id: 9
  },
  {
    id: 2100,
    cp: 9239,
    name: "Arcos",
    provincia_id: 9
  },
  {
    id: 2101,
    cp: 9239,
    name: "Estépar",
    provincia_id: 9
  },
  {
    id: 2102,
    cp: 9239,
    name: "Albillos",
    provincia_id: 9
  },
  {
    id: 2103,
    cp: 9239,
    name: "Cavia",
    provincia_id: 9
  },
  {
    id: 2104,
    cp: 9240,
    name: "Briviesca",
    provincia_id: 9
  },
  {
    id: 2105,
    cp: 9244,
    name: "Fuentebureba",
    provincia_id: 9
  },
  {
    id: 2106,
    cp: 9244,
    name: "Busto de Bureba",
    provincia_id: 9
  },
  {
    id: 2107,
    cp: 9244,
    name: "Quintanaélez",
    provincia_id: 9
  },
  {
    id: 2108,
    cp: 9245,
    name: "Grisale?a",
    provincia_id: 9
  },
  {
    id: 2109,
    cp: 9245,
    name: "Vallarta de Bureba",
    provincia_id: 9
  },
  {
    id: 2110,
    cp: 9245,
    name: "Zu?eda",
    provincia_id: 9
  },
  {
    id: 2111,
    cp: 9245,
    name: "Briviesca",
    provincia_id: 9
  },
  {
    id: 2112,
    cp: 9245,
    name: "Berzosa de Bureba",
    provincia_id: 9
  },
  {
    id: 2113,
    cp: 9246,
    name: "Llano de Bureba",
    provincia_id: 9
  },
  {
    id: 2114,
    cp: 9246,
    name: "Quintanabureba",
    provincia_id: 9
  },
  {
    id: 2115,
    cp: 9246,
    name: "Rojas",
    provincia_id: 9
  },
  {
    id: 2116,
    cp: 9246,
    name: "Carcedo de Bureba",
    provincia_id: 9
  },
  {
    id: 2117,
    cp: 9246,
    name: "Piérnigas",
    provincia_id: 9
  },
  {
    id: 2118,
    cp: 9246,
    name: "O?a",
    provincia_id: 9
  },
  {
    id: 2119,
    cp: 9246,
    name: "Poza de la Sal",
    provincia_id: 9
  },
  {
    id: 2120,
    cp: 9246,
    name: "Los Barrios de Bureba",
    provincia_id: 9
  },
  {
    id: 2121,
    cp: 9247,
    name: "Galbarros",
    provincia_id: 9
  },
  {
    id: 2122,
    cp: 9247,
    name: "Salinillas de Bureba",
    provincia_id: 9
  },
  {
    id: 2123,
    cp: 9248,
    name: "Briviesca",
    provincia_id: 9
  },
  {
    id: 2124,
    cp: 9248,
    name: "Carrias",
    provincia_id: 9
  },
  {
    id: 2125,
    cp: 9248,
    name: "Reinoso",
    provincia_id: 9
  },
  {
    id: 2126,
    cp: 9248,
    name: "Prádanos de Bureba",
    provincia_id: 9
  },
  {
    id: 2127,
    cp: 9248,
    name: "Belorado",
    provincia_id: 9
  },
  {
    id: 2128,
    cp: 9248,
    name: "Ba?uelos de Bureba",
    provincia_id: 9
  },
  {
    id: 2129,
    cp: 9249,
    name: "Aguilar de Bureba",
    provincia_id: 9
  },
  {
    id: 2130,
    cp: 9249,
    name: "O?a",
    provincia_id: 9
  },
  {
    id: 2131,
    cp: 9249,
    name: "Los Barrios de Bureba",
    provincia_id: 9
  },
  {
    id: 2132,
    cp: 9249,
    name: "Vile?a",
    provincia_id: 9
  },
  {
    id: 2133,
    cp: 9249,
    name: "Navas de Bureba",
    provincia_id: 9
  },
  {
    id: 2134,
    cp: 9249,
    name: "Briviesca",
    provincia_id: 9
  },
  {
    id: 2135,
    cp: 9249,
    name: "La Vid de Bureba",
    provincia_id: 9
  },
  {
    id: 2136,
    cp: 9250,
    name: "Belorado",
    provincia_id: 9
  },
  {
    id: 2137,
    cp: 9251,
    name: "Cubo de Bureba",
    provincia_id: 9
  },
  {
    id: 2138,
    cp: 9252,
    name: "Miraveche",
    provincia_id: 9
  },
  {
    id: 2139,
    cp: 9257,
    name: "Villafranca Montes de Oca",
    provincia_id: 9
  },
  {
    id: 2140,
    cp: 9258,
    name: "Castil de Peones",
    provincia_id: 9
  },
  {
    id: 2141,
    cp: 9258,
    name: "Tosantos",
    provincia_id: 9
  },
  {
    id: 2142,
    cp: 9258,
    name: "Belorado",
    provincia_id: 9
  },
  {
    id: 2143,
    cp: 9258,
    name: "Alcocero de Mola",
    provincia_id: 9
  },
  {
    id: 2144,
    cp: 9258,
    name: "Villambistia",
    provincia_id: 9
  },
  {
    id: 2145,
    cp: 9258,
    name: "Valle de Oca",
    provincia_id: 9
  },
  {
    id: 2146,
    cp: 9258,
    name: "Espinosa del Camino",
    provincia_id: 9
  },
  {
    id: 2147,
    cp: 9258,
    name: "Villafranca Montes de Oca",
    provincia_id: 9
  },
  {
    id: 2148,
    cp: 9259,
    name: "Bascu?ana",
    provincia_id: 9
  },
  {
    id: 2149,
    cp: 9259,
    name: "Ibrillos",
    provincia_id: 9
  },
  {
    id: 2150,
    cp: 9259,
    name: "Redecilla del Campo",
    provincia_id: 9
  },
  {
    id: 2151,
    cp: 9259,
    name: "Viloria de Rioja",
    provincia_id: 9
  },
  {
    id: 2152,
    cp: 9259,
    name: "Fresne?a",
    provincia_id: 9
  },
  {
    id: 2153,
    cp: 9259,
    name: "Castildelgado",
    provincia_id: 9
  },
  {
    id: 2154,
    cp: 9259,
    name: "Redecilla del Camino",
    provincia_id: 9
  },
  {
    id: 2155,
    cp: 9260,
    name: "Pradoluengo",
    provincia_id: 9
  },
  {
    id: 2156,
    cp: 9267,
    name: "Fresneda de la Sierra Tirón",
    provincia_id: 9
  },
  {
    id: 2157,
    cp: 9267,
    name: "Belorado",
    provincia_id: 9
  },
  {
    id: 2158,
    cp: 9268,
    name: "Valmala",
    provincia_id: 9
  },
  {
    id: 2159,
    cp: 9268,
    name: "Pradoluengo",
    provincia_id: 9
  },
  {
    id: 2160,
    cp: 9268,
    name: "Santa Cruz del Valle Urbión",
    provincia_id: 9
  },
  {
    id: 2161,
    cp: 9268,
    name: "Rábanos",
    provincia_id: 9
  },
  {
    id: 2162,
    cp: 9268,
    name: "Villagalijo",
    provincia_id: 9
  },
  {
    id: 2163,
    cp: 9268,
    name: "San Vicente del Valle",
    provincia_id: 9
  },
  {
    id: 2164,
    cp: 9269,
    name: "Rábanos",
    provincia_id: 9
  },
  {
    id: 2165,
    cp: 9270,
    name: "Cerezo de Río Tirón",
    provincia_id: 9
  },
  {
    id: 2166,
    cp: 9270,
    name: "Redecilla del Campo",
    provincia_id: 9
  },
  {
    id: 2167,
    cp: 9271,
    name: "Quintanilla San García",
    provincia_id: 9
  },
  {
    id: 2168,
    cp: 9272,
    name: "Belorado",
    provincia_id: 9
  },
  {
    id: 2169,
    cp: 9272,
    name: "Fresno de Río Tirón",
    provincia_id: 9
  },
  {
    id: 2170,
    cp: 9280,
    name: "Encío",
    provincia_id: 9
  },
  {
    id: 2171,
    cp: 9280,
    name: "Pancorbo",
    provincia_id: 9
  },
  {
    id: 2172,
    cp: 9280,
    name: "Cascajares de Bureba",
    provincia_id: 9
  },
  {
    id: 2173,
    cp: 9285,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2174,
    cp: 9290,
    name: "Quintanapalla",
    provincia_id: 9
  },
  {
    id: 2175,
    cp: 9290,
    name: "Fresno de Rodilla",
    provincia_id: 9
  },
  {
    id: 2176,
    cp: 9292,
    name: "Monasterio de Rodilla",
    provincia_id: 9
  },
  {
    id: 2177,
    cp: 9292,
    name: "Quintanavides",
    provincia_id: 9
  },
  {
    id: 2178,
    cp: 9292,
    name: "Villaescusa la Sombría",
    provincia_id: 9
  },
  {
    id: 2179,
    cp: 9292,
    name: "Cerratón de Juarros",
    provincia_id: 9
  },
  {
    id: 2180,
    cp: 9292,
    name: "Arraya de Oca",
    provincia_id: 9
  },
  {
    id: 2181,
    cp: 9292,
    name: "Santa María del Invierno",
    provincia_id: 9
  },
  {
    id: 2182,
    cp: 9292,
    name: "Briviesca",
    provincia_id: 9
  },
  {
    id: 2183,
    cp: 9292,
    name: "Santa Olalla de Bureba",
    provincia_id: 9
  },
  {
    id: 2184,
    cp: 9293,
    name: "Bugedo",
    provincia_id: 9
  },
  {
    id: 2185,
    cp: 9293,
    name: "Miranda de Ebro",
    provincia_id: 9
  },
  {
    id: 2186,
    cp: 9294,
    name: "La Puebla de Arganzón",
    provincia_id: 9
  },
  {
    id: 2187,
    cp: 9294,
    name: "Condado de Trevi?o",
    provincia_id: 9
  },
  {
    id: 2188,
    cp: 9300,
    name: "Roa",
    provincia_id: 9
  },
  {
    id: 2189,
    cp: 9310,
    name: "Torresandino",
    provincia_id: 9
  },
  {
    id: 2190,
    cp: 9310,
    name: "Villatuelda",
    provincia_id: 9
  },
  {
    id: 2191,
    cp: 9310,
    name: "Tórtoles de Esgueva",
    provincia_id: 9
  },
  {
    id: 2192,
    cp: 9311,
    name: "Olmedillo de Roa",
    provincia_id: 9
  },
  {
    id: 2193,
    cp: 9311,
    name: "La Horra",
    provincia_id: 9
  },
  {
    id: 2194,
    cp: 9312,
    name: "Tórtoles de Esgueva",
    provincia_id: 9
  },
  {
    id: 2195,
    cp: 9312,
    name: "Anguix",
    provincia_id: 9
  },
  {
    id: 2196,
    cp: 9314,
    name: "Pedrosa de Duero",
    provincia_id: 9
  },
  {
    id: 2197,
    cp: 9314,
    name: "Villaescusa de Roa",
    provincia_id: 9
  },
  {
    id: 2198,
    cp: 9315,
    name: "La Cueva de Roa",
    provincia_id: 9
  },
  {
    id: 2199,
    cp: 9315,
    name: "Fuentemolinos",
    provincia_id: 9
  },
  {
    id: 2200,
    cp: 9315,
    name: "Fuentecén",
    provincia_id: 9
  },
  {
    id: 2201,
    cp: 9316,
    name: "Berlangas de Roa",
    provincia_id: 9
  },
  {
    id: 2202,
    cp: 9316,
    name: "Hoyales de Roa",
    provincia_id: 9
  },
  {
    id: 2203,
    cp: 9317,
    name: "San Martín de Rubiales",
    provincia_id: 9
  },
  {
    id: 2204,
    cp: 9317,
    name: "Mambrilla de Castrejón",
    provincia_id: 9
  },
  {
    id: 2205,
    cp: 9317,
    name: "Pedrosa de Duero",
    provincia_id: 9
  },
  {
    id: 2206,
    cp: 9318,
    name: "Nava de Roa",
    provincia_id: 9
  },
  {
    id: 2207,
    cp: 9318,
    name: "Valdezate",
    provincia_id: 9
  },
  {
    id: 2208,
    cp: 9318,
    name: "Fuentelisendo",
    provincia_id: 9
  },
  {
    id: 2209,
    cp: 9320,
    name: "Madrigal del Monte",
    provincia_id: 9
  },
  {
    id: 2210,
    cp: 9320,
    name: "Valdorros",
    provincia_id: 9
  },
  {
    id: 2211,
    cp: 9320,
    name: "Cogollos",
    provincia_id: 9
  },
  {
    id: 2212,
    cp: 9330,
    name: "Madrigalejo del Monte",
    provincia_id: 9
  },
  {
    id: 2213,
    cp: 9338,
    name: "Valles de Palenzuela",
    provincia_id: 9
  },
  {
    id: 2214,
    cp: 9339,
    name: "Villamayor de los Montes",
    provincia_id: 9
  },
  {
    id: 2215,
    cp: 9339,
    name: "Villaverde del Monte",
    provincia_id: 9
  },
  {
    id: 2216,
    cp: 9339,
    name: "Zael",
    provincia_id: 9
  },
  {
    id: 2217,
    cp: 9339,
    name: "Villangómez",
    provincia_id: 9
  },
  {
    id: 2218,
    cp: 9340,
    name: "Lerma",
    provincia_id: 9
  },
  {
    id: 2219,
    cp: 9341,
    name: "Tordómar",
    provincia_id: 9
  },
  {
    id: 2220,
    cp: 9341,
    name: "Lerma",
    provincia_id: 9
  },
  {
    id: 2221,
    cp: 9341,
    name: "Santa Cecilia",
    provincia_id: 9
  },
  {
    id: 2222,
    cp: 9342,
    name: "Peral de Arlanza",
    provincia_id: 9
  },
  {
    id: 2223,
    cp: 9342,
    name: "Santa María del Campo",
    provincia_id: 9
  },
  {
    id: 2224,
    cp: 9342,
    name: "Torrepadre",
    provincia_id: 9
  },
  {
    id: 2225,
    cp: 9343,
    name: "Villahoz",
    provincia_id: 9
  },
  {
    id: 2226,
    cp: 9344,
    name: "Villafruela",
    provincia_id: 9
  },
  {
    id: 2227,
    cp: 9344,
    name: "Royuela de Río Franco",
    provincia_id: 9
  },
  {
    id: 2228,
    cp: 9345,
    name: "Torrepadre",
    provincia_id: 9
  },
  {
    id: 2229,
    cp: 9345,
    name: "Avellanosa de Mu?ó",
    provincia_id: 9
  },
  {
    id: 2230,
    cp: 9345,
    name: "Iglesiarrubia",
    provincia_id: 9
  },
  {
    id: 2231,
    cp: 9345,
    name: "Royuela de Río Franco",
    provincia_id: 9
  },
  {
    id: 2232,
    cp: 9346,
    name: "Mecerreyes",
    provincia_id: 9
  },
  {
    id: 2233,
    cp: 9346,
    name: "Covarrubias",
    provincia_id: 9
  },
  {
    id: 2234,
    cp: 9347,
    name: "Puentedura",
    provincia_id: 9
  },
  {
    id: 2235,
    cp: 9347,
    name: "Retuerta",
    provincia_id: 9
  },
  {
    id: 2236,
    cp: 9347,
    name: "Lerma",
    provincia_id: 9
  },
  {
    id: 2237,
    cp: 9347,
    name: "Covarrubias",
    provincia_id: 9
  },
  {
    id: 2238,
    cp: 9347,
    name: "Quintanilla del Agua y Tordueles",
    provincia_id: 9
  },
  {
    id: 2239,
    cp: 9348,
    name: "Quintanilla del Coco",
    provincia_id: 9
  },
  {
    id: 2240,
    cp: 9348,
    name: "Lerma",
    provincia_id: 9
  },
  {
    id: 2241,
    cp: 9348,
    name: "Cebrecos",
    provincia_id: 9
  },
  {
    id: 2242,
    cp: 9348,
    name: "Nebreda",
    provincia_id: 9
  },
  {
    id: 2243,
    cp: 9348,
    name: "Solarana",
    provincia_id: 9
  },
  {
    id: 2244,
    cp: 9349,
    name: "Cilleruelo de Arriba",
    provincia_id: 9
  },
  {
    id: 2245,
    cp: 9349,
    name: "Pineda Trasmonte",
    provincia_id: 9
  },
  {
    id: 2246,
    cp: 9349,
    name: "Fontioso",
    provincia_id: 9
  },
  {
    id: 2247,
    cp: 9349,
    name: "Lerma",
    provincia_id: 9
  },
  {
    id: 2248,
    cp: 9349,
    name: "Cilleruelo de Abajo",
    provincia_id: 9
  },
  {
    id: 2249,
    cp: 9349,
    name: "Quintanilla de la Mata",
    provincia_id: 9
  },
  {
    id: 2250,
    cp: 9350,
    name: "Caba?es de Esgueva",
    provincia_id: 9
  },
  {
    id: 2251,
    cp: 9350,
    name: "Santibá?ez de Esgueva",
    provincia_id: 9
  },
  {
    id: 2252,
    cp: 9350,
    name: "Bahabón de Esgueva",
    provincia_id: 9
  },
  {
    id: 2253,
    cp: 9350,
    name: "Oquillas",
    provincia_id: 9
  },
  {
    id: 2254,
    cp: 9351,
    name: "Hontoria de la Cantera",
    provincia_id: 9
  },
  {
    id: 2255,
    cp: 9351,
    name: "Los Ausines",
    provincia_id: 9
  },
  {
    id: 2256,
    cp: 9352,
    name: "Cubillo del Campo",
    provincia_id: 9
  },
  {
    id: 2257,
    cp: 9353,
    name: "Santa María del Mercadillo",
    provincia_id: 9
  },
  {
    id: 2258,
    cp: 9354,
    name: "Pinilla Trasmonte",
    provincia_id: 9
  },
  {
    id: 2259,
    cp: 9370,
    name: "Quintana del Pidio",
    provincia_id: 9
  },
  {
    id: 2260,
    cp: 9370,
    name: "Aranda de Duero",
    provincia_id: 9
  },
  {
    id: 2261,
    cp: 9370,
    name: "Gumiel de Izán",
    provincia_id: 9
  },
  {
    id: 2262,
    cp: 9390,
    name: "Santa Inés",
    provincia_id: 9
  },
  {
    id: 2263,
    cp: 9390,
    name: "Madrigalejo del Monte",
    provincia_id: 9
  },
  {
    id: 2264,
    cp: 9390,
    name: "Torrecilla del Monte",
    provincia_id: 9
  },
  {
    id: 2265,
    cp: 9390,
    name: "Villalmanzo",
    provincia_id: 9
  },
  {
    id: 2266,
    cp: 9391,
    name: "Castrillo de la Vega",
    provincia_id: 9
  },
  {
    id: 2267,
    cp: 9400,
    name: "Aranda de Duero",
    provincia_id: 9
  },
  {
    id: 2268,
    cp: 9410,
    name: "Coru?a del Conde",
    provincia_id: 9
  },
  {
    id: 2269,
    cp: 9410,
    name: "Pe?aranda de Duero",
    provincia_id: 9
  },
  {
    id: 2270,
    cp: 9410,
    name: "Arandilla",
    provincia_id: 9
  },
  {
    id: 2271,
    cp: 9430,
    name: "Huerta de Rey",
    provincia_id: 9
  },
  {
    id: 2272,
    cp: 9436,
    name: "Haza",
    provincia_id: 9
  },
  {
    id: 2273,
    cp: 9440,
    name: "Sotillo de la Ribera",
    provincia_id: 9
  },
  {
    id: 2274,
    cp: 9441,
    name: "Sotillo de la Ribera",
    provincia_id: 9
  },
  {
    id: 2275,
    cp: 9442,
    name: "Terradillos de Esgueva",
    provincia_id: 9
  },
  {
    id: 2276,
    cp: 9443,
    name: "Gumiel de Mercado",
    provincia_id: 9
  },
  {
    id: 2277,
    cp: 9443,
    name: "Villalba de Duero",
    provincia_id: 9
  },
  {
    id: 2278,
    cp: 9450,
    name: "Villanueva de Gumiel",
    provincia_id: 9
  },
  {
    id: 2279,
    cp: 9450,
    name: "Aranda de Duero",
    provincia_id: 9
  },
  {
    id: 2280,
    cp: 9450,
    name: "Hontoria de Valdearados",
    provincia_id: 9
  },
  {
    id: 2281,
    cp: 9450,
    name: "Ba?os de Valdearados",
    provincia_id: 9
  },
  {
    id: 2282,
    cp: 9451,
    name: "Caleruega",
    provincia_id: 9
  },
  {
    id: 2283,
    cp: 9451,
    name: "Arauzo de Miel",
    provincia_id: 9
  },
  {
    id: 2284,
    cp: 9451,
    name: "Arauzo de Torre",
    provincia_id: 9
  },
  {
    id: 2285,
    cp: 9451,
    name: "Arauzo de Salce",
    provincia_id: 9
  },
  {
    id: 2286,
    cp: 9453,
    name: "Tubilla del Lago",
    provincia_id: 9
  },
  {
    id: 2287,
    cp: 9453,
    name: "Valdeande",
    provincia_id: 9
  },
  {
    id: 2288,
    cp: 9453,
    name: "Villalbilla de Gumiel",
    provincia_id: 9
  },
  {
    id: 2289,
    cp: 9454,
    name: "Huerta de Rey",
    provincia_id: 9
  },
  {
    id: 2290,
    cp: 9454,
    name: "Quemada",
    provincia_id: 9
  },
  {
    id: 2291,
    cp: 9460,
    name: "Milagros",
    provincia_id: 9
  },
  {
    id: 2292,
    cp: 9461,
    name: "Fuentenebro",
    provincia_id: 9
  },
  {
    id: 2293,
    cp: 9462,
    name: "Adrada de Haza",
    provincia_id: 9
  },
  {
    id: 2294,
    cp: 9462,
    name: "La Sequera de Haza",
    provincia_id: 9
  },
  {
    id: 2295,
    cp: 9462,
    name: "Moradillo de Roa",
    provincia_id: 9
  },
  {
    id: 2296,
    cp: 9462,
    name: "Pardilla",
    provincia_id: 9
  },
  {
    id: 2297,
    cp: 9462,
    name: "Hontangas",
    provincia_id: 9
  },
  {
    id: 2298,
    cp: 9463,
    name: "Haza",
    provincia_id: 9
  },
  {
    id: 2299,
    cp: 9471,
    name: "La Vid y Barrios",
    provincia_id: 9
  },
  {
    id: 2300,
    cp: 9471,
    name: "Fuentelcésped",
    provincia_id: 9
  },
  {
    id: 2301,
    cp: 9471,
    name: "Fuentespina",
    provincia_id: 9
  },
  {
    id: 2302,
    cp: 9471,
    name: "Santa Cruz de la Salceda",
    provincia_id: 9
  },
  {
    id: 2303,
    cp: 9490,
    name: "San Juan del Monte",
    provincia_id: 9
  },
  {
    id: 2304,
    cp: 9490,
    name: "Zazuar",
    provincia_id: 9
  },
  {
    id: 2305,
    cp: 9490,
    name: "Pe?aranda de Duero",
    provincia_id: 9
  },
  {
    id: 2306,
    cp: 9490,
    name: "Brazacorta",
    provincia_id: 9
  },
  {
    id: 2307,
    cp: 9491,
    name: "Fresnillo de las Due?as",
    provincia_id: 9
  },
  {
    id: 2308,
    cp: 9491,
    name: "Vadocondes",
    provincia_id: 9
  },
  {
    id: 2309,
    cp: 9491,
    name: "La Vid y Barrios",
    provincia_id: 9
  },
  {
    id: 2310,
    cp: 9493,
    name: "Campillo de Aranda",
    provincia_id: 9
  },
  {
    id: 2311,
    cp: 9493,
    name: "Torregalindo",
    provincia_id: 9
  },
  {
    id: 2312,
    cp: 9500,
    name: "Medina de Pomar",
    provincia_id: 9
  },
  {
    id: 2313,
    cp: 9510,
    name: "Valle de Losa",
    provincia_id: 9
  },
  {
    id: 2314,
    cp: 9510,
    name: "Junta de Traslaloma",
    provincia_id: 9
  },
  {
    id: 2315,
    cp: 9511,
    name: "Valle de Losa",
    provincia_id: 9
  },
  {
    id: 2316,
    cp: 9511,
    name: "Berberana",
    provincia_id: 9
  },
  {
    id: 2317,
    cp: 9511,
    name: "Junta de Villalba de Losa",
    provincia_id: 9
  },
  {
    id: 2318,
    cp: 9512,
    name: "Valle de Losa",
    provincia_id: 9
  },
  {
    id: 2319,
    cp: 9512,
    name: "Medina de Pomar",
    provincia_id: 9
  },
  {
    id: 2320,
    cp: 9513,
    name: "Medina de Pomar",
    provincia_id: 9
  },
  {
    id: 2321,
    cp: 9513,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2322,
    cp: 9514,
    name: "Merindad de Montija",
    provincia_id: 9
  },
  {
    id: 2323,
    cp: 9514,
    name: "Junta de Traslaloma",
    provincia_id: 9
  },
  {
    id: 2324,
    cp: 9514,
    name: "Medina de Pomar",
    provincia_id: 9
  },
  {
    id: 2325,
    cp: 9515,
    name: "Medina de Pomar",
    provincia_id: 9
  },
  {
    id: 2326,
    cp: 9515,
    name: "Merindad de Cuesta-Urria",
    provincia_id: 9
  },
  {
    id: 2327,
    cp: 9530,
    name: "O?a",
    provincia_id: 9
  },
  {
    id: 2328,
    cp: 9540,
    name: "Trespaderne",
    provincia_id: 9
  },
  {
    id: 2329,
    cp: 9545,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2330,
    cp: 9549,
    name: "Merindad de Cuesta-Urria",
    provincia_id: 9
  },
  {
    id: 2331,
    cp: 9549,
    name: "Trespaderne",
    provincia_id: 9
  },
  {
    id: 2332,
    cp: 9549,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2333,
    cp: 9549,
    name: "Valle de Tobalina",
    provincia_id: 9
  },
  {
    id: 2334,
    cp: 9550,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2335,
    cp: 9551,
    name: "Los Altos",
    provincia_id: 9
  },
  {
    id: 2336,
    cp: 9551,
    name: "Valle de Sedano",
    provincia_id: 9
  },
  {
    id: 2337,
    cp: 9553,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2338,
    cp: 9554,
    name: "O?a",
    provincia_id: 9
  },
  {
    id: 2339,
    cp: 9554,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2340,
    cp: 9555,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2341,
    cp: 9556,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2342,
    cp: 9557,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2343,
    cp: 9557,
    name: "Merindad de Sotoscueva",
    provincia_id: 9
  },
  {
    id: 2344,
    cp: 9557,
    name: "Merindad de Valdeporres",
    provincia_id: 9
  },
  {
    id: 2345,
    cp: 9558,
    name: "Villarcayo de Merindad de Castilla la Vieja",
    provincia_id: 9
  },
  {
    id: 2346,
    cp: 9558,
    name: "Valle de Manzanedo",
    provincia_id: 9
  },
  {
    id: 2347,
    cp: 9559,
    name: "Merindad de Valdivielso",
    provincia_id: 9
  },
  {
    id: 2348,
    cp: 9559,
    name: "O?a",
    provincia_id: 9
  },
  {
    id: 2349,
    cp: 9559,
    name: "Los Altos",
    provincia_id: 9
  },
  {
    id: 2350,
    cp: 9560,
    name: "Espinosa de los Monteros",
    provincia_id: 9
  },
  {
    id: 2351,
    cp: 9566,
    name: "Espinosa de los Monteros",
    provincia_id: 9
  },
  {
    id: 2352,
    cp: 9567,
    name: "Espinosa de los Monteros",
    provincia_id: 9
  },
  {
    id: 2353,
    cp: 9567,
    name: "Merindad de Sotoscueva",
    provincia_id: 9
  },
  {
    id: 2354,
    cp: 9568,
    name: "Merindad de Sotoscueva",
    provincia_id: 9
  },
  {
    id: 2355,
    cp: 9569,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2356,
    cp: 9569,
    name: "Merindad de Montija",
    provincia_id: 9
  },
  {
    id: 2357,
    cp: 9569,
    name: "Espinosa de los Monteros",
    provincia_id: 9
  },
  {
    id: 2358,
    cp: 9570,
    name: "Alfoz de Santa Gadea",
    provincia_id: 9
  },
  {
    id: 2359,
    cp: 9570,
    name: "Arija",
    provincia_id: 9
  },
  {
    id: 2360,
    cp: 9571,
    name: "Alfoz de Santa Gadea",
    provincia_id: 9
  },
  {
    id: 2361,
    cp: 9571,
    name: "Valle de Valdebezana",
    provincia_id: 9
  },
  {
    id: 2362,
    cp: 9571,
    name: "Alfoz de Bricia",
    provincia_id: 9
  },
  {
    id: 2363,
    cp: 9572,
    name: "Valle de Manzanedo",
    provincia_id: 9
  },
  {
    id: 2364,
    cp: 9572,
    name: "Valle de Valdebezana",
    provincia_id: 9
  },
  {
    id: 2365,
    cp: 9572,
    name: "Alfoz de Bricia",
    provincia_id: 9
  },
  {
    id: 2366,
    cp: 9573,
    name: "Merindad de Valdeporres",
    provincia_id: 9
  },
  {
    id: 2367,
    cp: 9574,
    name: "Merindad de Valdeporres",
    provincia_id: 9
  },
  {
    id: 2368,
    cp: 9580,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2369,
    cp: 9585,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2370,
    cp: 9586,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2371,
    cp: 9587,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2372,
    cp: 9588,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2373,
    cp: 9589,
    name: "Pampliega",
    provincia_id: 9
  },
  {
    id: 2374,
    cp: 9589,
    name: "Valle de Mena",
    provincia_id: 9
  },
  {
    id: 2375,
    cp: 9591,
    name: "Valle de las Navas",
    provincia_id: 9
  },
  {
    id: 2376,
    cp: 9591,
    name: "Merindad de Río Ubierna",
    provincia_id: 9
  },
  {
    id: 2377,
    cp: 9592,
    name: "Poza de la Sal",
    provincia_id: 9
  },
  {
    id: 2378,
    cp: 9592,
    name: "Rublacedo de Abajo",
    provincia_id: 9
  },
  {
    id: 2379,
    cp: 9592,
    name: "Carcedo de Bureba",
    provincia_id: 9
  },
  {
    id: 2380,
    cp: 9592,
    name: "Abajas",
    provincia_id: 9
  },
  {
    id: 2381,
    cp: 9593,
    name: "Rucandio",
    provincia_id: 9
  },
  {
    id: 2382,
    cp: 9593,
    name: "Salas de Bureba",
    provincia_id: 9
  },
  {
    id: 2383,
    cp: 9593,
    name: "Padrones de Bureba",
    provincia_id: 9
  },
  {
    id: 2384,
    cp: 9593,
    name: "O?a",
    provincia_id: 9
  },
  {
    id: 2385,
    cp: 9593,
    name: "Cantabrana",
    provincia_id: 9
  },
  {
    id: 2386,
    cp: 9593,
    name: "Aguas Cándidas",
    provincia_id: 9
  },
  {
    id: 2387,
    cp: 9594,
    name: "Merindad de Cuesta-Urria",
    provincia_id: 9
  },
  {
    id: 2388,
    cp: 9600,
    name: "Salas de los Infantes",
    provincia_id: 9
  },
  {
    id: 2389,
    cp: 9610,
    name: "Ciruelos de Cervera",
    provincia_id: 9
  },
  {
    id: 2390,
    cp: 9610,
    name: "Santo Domingo de Silos",
    provincia_id: 9
  },
  {
    id: 2391,
    cp: 9610,
    name: "Espinosa de Cervera",
    provincia_id: 9
  },
  {
    id: 2392,
    cp: 9611,
    name: "Carazo",
    provincia_id: 9
  },
  {
    id: 2393,
    cp: 9611,
    name: "Hacinas",
    provincia_id: 9
  },
  {
    id: 2394,
    cp: 9611,
    name: "Villanueva de Carazo",
    provincia_id: 9
  },
  {
    id: 2395,
    cp: 9612,
    name: "Mamolar",
    provincia_id: 9
  },
  {
    id: 2396,
    cp: 9612,
    name: "Cabezón de la Sierra",
    provincia_id: 9
  },
  {
    id: 2397,
    cp: 9612,
    name: "La Gallega",
    provincia_id: 9
  },
  {
    id: 2398,
    cp: 9612,
    name: "Pinilla de los Barruecos",
    provincia_id: 9
  },
  {
    id: 2399,
    cp: 9613,
    name: "Pinilla de los Moros",
    provincia_id: 9
  },
  {
    id: 2400,
    cp: 9613,
    name: "Vizcaínos",
    provincia_id: 9
  },
  {
    id: 2401,
    cp: 9613,
    name: "La Revilla y Ahedo",
    provincia_id: 9
  },
  {
    id: 2402,
    cp: 9613,
    name: "Salas de los Infantes",
    provincia_id: 9
  },
  {
    id: 2403,
    cp: 9613,
    name: "Barbadillo del Mercado",
    provincia_id: 9
  },
  {
    id: 2404,
    cp: 9613,
    name: "Contreras",
    provincia_id: 9
  },
  {
    id: 2405,
    cp: 9613,
    name: "Monasterio de la Sierra",
    provincia_id: 9
  },
  {
    id: 2406,
    cp: 9614,
    name: "Barbadillo del Pez",
    provincia_id: 9
  },
  {
    id: 2407,
    cp: 9614,
    name: "Huerta de Arriba",
    provincia_id: 9
  },
  {
    id: 2408,
    cp: 9614,
    name: "Valle de Valdelaguna",
    provincia_id: 9
  },
  {
    id: 2409,
    cp: 9615,
    name: "Barbadillo de Herreros",
    provincia_id: 9
  },
  {
    id: 2410,
    cp: 9615,
    name: "Riocavado de la Sierra",
    provincia_id: 9
  },
  {
    id: 2411,
    cp: 9615,
    name: "Salas de los Infantes",
    provincia_id: 9
  },
  {
    id: 2412,
    cp: 9615,
    name: "Monterrubio de la Demanda",
    provincia_id: 9
  },
  {
    id: 2413,
    cp: 9616,
    name: "Tejada",
    provincia_id: 9
  },
  {
    id: 2414,
    cp: 9617,
    name: "Santibá?ez del Val",
    provincia_id: 9
  },
  {
    id: 2415,
    cp: 9618,
    name: "Santibá?ez del Val",
    provincia_id: 9
  },
  {
    id: 2416,
    cp: 9619,
    name: "Hontoria del Pinar",
    provincia_id: 9
  },
  {
    id: 2417,
    cp: 9620,
    name: "Revillarruz",
    provincia_id: 9
  },
  {
    id: 2418,
    cp: 9620,
    name: "Sarracín",
    provincia_id: 9
  },
  {
    id: 2419,
    cp: 9620,
    name: "Modúbar de la Emparedada",
    provincia_id: 9
  },
  {
    id: 2420,
    cp: 9620,
    name: "Salda?a de Burgos",
    provincia_id: 9
  },
  {
    id: 2421,
    cp: 9631,
    name: "Arauzo de Miel",
    provincia_id: 9
  },
  {
    id: 2422,
    cp: 9640,
    name: "Jurisdicción de Lara",
    provincia_id: 9
  },
  {
    id: 2423,
    cp: 9640,
    name: "Tinieblas de la Sierra",
    provincia_id: 9
  },
  {
    id: 2424,
    cp: 9640,
    name: "Jaramillo de la Fuente",
    provincia_id: 9
  },
  {
    id: 2425,
    cp: 9640,
    name: "Cascajares de la Sierra",
    provincia_id: 9
  },
  {
    id: 2426,
    cp: 9640,
    name: "San Millán de Lara",
    provincia_id: 9
  },
  {
    id: 2427,
    cp: 9640,
    name: "Mambrillas de Lara",
    provincia_id: 9
  },
  {
    id: 2428,
    cp: 9640,
    name: "Villoruebo",
    provincia_id: 9
  },
  {
    id: 2429,
    cp: 9640,
    name: "Hortigüela",
    provincia_id: 9
  },
  {
    id: 2430,
    cp: 9640,
    name: "Jaramillo Quemado",
    provincia_id: 9
  },
  {
    id: 2431,
    cp: 9640,
    name: "Villaespasa",
    provincia_id: 9
  },
  {
    id: 2432,
    cp: 9641,
    name: "Cuevas de San Clemente",
    provincia_id: 9
  },
  {
    id: 2433,
    cp: 9642,
    name: "Los Ausines",
    provincia_id: 9
  },
  {
    id: 2434,
    cp: 9642,
    name: "Mambrillas de Lara",
    provincia_id: 9
  },
  {
    id: 2435,
    cp: 9645,
    name: "Torrelara",
    provincia_id: 9
  },
  {
    id: 2436,
    cp: 9646,
    name: "Villoruebo",
    provincia_id: 9
  },
  {
    id: 2437,
    cp: 9647,
    name: "Revilla del Campo",
    provincia_id: 9
  },
  {
    id: 2438,
    cp: 9649,
    name: "Tinieblas de la Sierra",
    provincia_id: 9
  },
  {
    id: 2439,
    cp: 9649,
    name: "Villamiel de la Sierra",
    provincia_id: 9
  },
  {
    id: 2440,
    cp: 9649,
    name: "Palazuelos de la Sierra",
    provincia_id: 9
  },
  {
    id: 2441,
    cp: 9650,
    name: "Villaespasa",
    provincia_id: 9
  },
  {
    id: 2442,
    cp: 9650,
    name: "Campolara",
    provincia_id: 9
  },
  {
    id: 2443,
    cp: 9651,
    name: "Jurisdicción de Lara",
    provincia_id: 9
  },
  {
    id: 2444,
    cp: 9652,
    name: "Villanueva de Arga?o",
    provincia_id: 9
  },
  {
    id: 2445,
    cp: 9653,
    name: "Isar",
    provincia_id: 9
  },
  {
    id: 2446,
    cp: 9654,
    name: "Isar",
    provincia_id: 9
  },
  {
    id: 2447,
    cp: 9660,
    name: "Hontoria del Pinar",
    provincia_id: 9
  },
  {
    id: 2448,
    cp: 9660,
    name: "Rabanera del Pinar",
    provincia_id: 9
  },
  {
    id: 2449,
    cp: 9670,
    name: "Quintanar de la Sierra",
    provincia_id: 9
  },
  {
    id: 2450,
    cp: 9678,
    name: "Iglesiarrubia",
    provincia_id: 9
  },
  {
    id: 2451,
    cp: 9679,
    name: "Neila",
    provincia_id: 9
  },
  {
    id: 2452,
    cp: 9680,
    name: "Palacios de la Sierra",
    provincia_id: 9
  },
  {
    id: 2453,
    cp: 9690,
    name: "Vilviestre del Pinar",
    provincia_id: 9
  },
  {
    id: 2454,
    cp: 9691,
    name: "Moncalvillo",
    provincia_id: 9
  },
  {
    id: 2455,
    cp: 9691,
    name: "Castrillo de la Reina",
    provincia_id: 9
  },
  {
    id: 2456,
    cp: 9692,
    name: "Canicosa de la Sierra",
    provincia_id: 9
  },
  {
    id: 2457,
    cp: 9693,
    name: "Regumiel de la Sierra",
    provincia_id: 9
  },
  {
    id: 2458,
    cp: 10000,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2459,
    cp: 10001,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2460,
    cp: 10002,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2461,
    cp: 10003,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2462,
    cp: 10004,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2463,
    cp: 10005,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2464,
    cp: 10100,
    name: "Miajadas",
    provincia_id: 10
  },
  {
    id: 2465,
    cp: 10109,
    name: "Miajadas",
    provincia_id: 10
  },
  {
    id: 2466,
    cp: 10110,
    name: "Losar de la Vera",
    provincia_id: 10
  },
  {
    id: 2467,
    cp: 10110,
    name: "Madrigalejo",
    provincia_id: 10
  },
  {
    id: 2468,
    cp: 10120,
    name: "Logrosán",
    provincia_id: 10
  },
  {
    id: 2469,
    cp: 10129,
    name: "Berzocana",
    provincia_id: 10
  },
  {
    id: 2470,
    cp: 10130,
    name: "Zorita",
    provincia_id: 10
  },
  {
    id: 2471,
    cp: 10131,
    name: "Valdemorales",
    provincia_id: 10
  },
  {
    id: 2472,
    cp: 10132,
    name: "Almoharín",
    provincia_id: 10
  },
  {
    id: 2473,
    cp: 10133,
    name: "Escurial",
    provincia_id: 10
  },
  {
    id: 2474,
    cp: 10134,
    name: "Campo Lugar",
    provincia_id: 10
  },
  {
    id: 2475,
    cp: 10135,
    name: "Alcollarín",
    provincia_id: 10
  },
  {
    id: 2476,
    cp: 10136,
    name: "Ca?amero",
    provincia_id: 10
  },
  {
    id: 2477,
    cp: 10137,
    name: "Alía",
    provincia_id: 10
  },
  {
    id: 2478,
    cp: 10140,
    name: "Guadalupe",
    provincia_id: 10
  },
  {
    id: 2479,
    cp: 10160,
    name: "Alcuéscar",
    provincia_id: 10
  },
  {
    id: 2480,
    cp: 10162,
    name: "Casas de Don Antonio",
    provincia_id: 10
  },
  {
    id: 2481,
    cp: 10163,
    name: "Aldea del Cano",
    provincia_id: 10
  },
  {
    id: 2482,
    cp: 10164,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2483,
    cp: 10169,
    name: "Zarza de Montánchez",
    provincia_id: 10
  },
  {
    id: 2484,
    cp: 10170,
    name: "Montánchez",
    provincia_id: 10
  },
  {
    id: 2485,
    cp: 10170,
    name: "Zarza de Granadilla",
    provincia_id: 10
  },
  {
    id: 2486,
    cp: 10180,
    name: "Valdefuentes",
    provincia_id: 10
  },
  {
    id: 2487,
    cp: 10181,
    name: "Sierra de Fuentes",
    provincia_id: 10
  },
  {
    id: 2488,
    cp: 10182,
    name: "Torreorgaz",
    provincia_id: 10
  },
  {
    id: 2489,
    cp: 10182,
    name: "Villanueva de la Sierra",
    provincia_id: 10
  },
  {
    id: 2490,
    cp: 10183,
    name: "Torrequemada",
    provincia_id: 10
  },
  {
    id: 2491,
    cp: 10184,
    name: "Torremocha",
    provincia_id: 10
  },
  {
    id: 2492,
    cp: 10185,
    name: "Benquerencia",
    provincia_id: 10
  },
  {
    id: 2493,
    cp: 10185,
    name: "Botija",
    provincia_id: 10
  },
  {
    id: 2494,
    cp: 10186,
    name: "Torre de Santa María",
    provincia_id: 10
  },
  {
    id: 2495,
    cp: 10187,
    name: "Albalá",
    provincia_id: 10
  },
  {
    id: 2496,
    cp: 10189,
    name: "Salvatierra de Santiago",
    provincia_id: 10
  },
  {
    id: 2497,
    cp: 10189,
    name: "Ruanes",
    provincia_id: 10
  },
  {
    id: 2498,
    cp: 10189,
    name: "Santa Ana",
    provincia_id: 10
  },
  {
    id: 2499,
    cp: 10189,
    name: "Zarza de Montánchez",
    provincia_id: 10
  },
  {
    id: 2500,
    cp: 10190,
    name: "Malpartida de Cáceres",
    provincia_id: 10
  },
  {
    id: 2501,
    cp: 10190,
    name: "Casar de Cáceres",
    provincia_id: 10
  },
  {
    id: 2502,
    cp: 10191,
    name: "Santiago del Campo",
    provincia_id: 10
  },
  {
    id: 2503,
    cp: 10192,
    name: "Hinojal",
    provincia_id: 10
  },
  {
    id: 2504,
    cp: 10193,
    name: "Talaván",
    provincia_id: 10
  },
  {
    id: 2505,
    cp: 10194,
    name: "Monroy",
    provincia_id: 10
  },
  {
    id: 2506,
    cp: 10195,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2507,
    cp: 10197,
    name: "Albalá",
    provincia_id: 10
  },
  {
    id: 2508,
    cp: 10198,
    name: "Santa Marta de Magasca",
    provincia_id: 10
  },
  {
    id: 2509,
    cp: 10198,
    name: "Santiago de Alcántara",
    provincia_id: 10
  },
  {
    id: 2510,
    cp: 10199,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2511,
    cp: 10200,
    name: "Trujillo",
    provincia_id: 10
  },
  {
    id: 2512,
    cp: 10210,
    name: "Madro?era",
    provincia_id: 10
  },
  {
    id: 2513,
    cp: 10220,
    name: "Trujillo",
    provincia_id: 10
  },
  {
    id: 2514,
    cp: 10230,
    name: "Herguijuela",
    provincia_id: 10
  },
  {
    id: 2515,
    cp: 10240,
    name: "Conquista de la Sierra",
    provincia_id: 10
  },
  {
    id: 2516,
    cp: 10250,
    name: "Garciaz",
    provincia_id: 10
  },
  {
    id: 2517,
    cp: 10251,
    name: "Aldeacentenera",
    provincia_id: 10
  },
  {
    id: 2518,
    cp: 10252,
    name: "Torrecillas de la Tiesa",
    provincia_id: 10
  },
  {
    id: 2519,
    cp: 10260,
    name: "Santa Cruz de la Sierra",
    provincia_id: 10
  },
  {
    id: 2520,
    cp: 10261,
    name: "Puerto de Santa Cruz",
    provincia_id: 10
  },
  {
    id: 2521,
    cp: 10261,
    name: "Robledillo de Trujillo",
    provincia_id: 10
  },
  {
    id: 2522,
    cp: 10262,
    name: "Abertura",
    provincia_id: 10
  },
  {
    id: 2523,
    cp: 10263,
    name: "Villamesías",
    provincia_id: 10
  },
  {
    id: 2524,
    cp: 10269,
    name: "Robledillo de Trujillo",
    provincia_id: 10
  },
  {
    id: 2525,
    cp: 10270,
    name: "La Cumbre",
    provincia_id: 10
  },
  {
    id: 2526,
    cp: 10271,
    name: "Plasenzuela",
    provincia_id: 10
  },
  {
    id: 2527,
    cp: 10280,
    name: "Ibahernando",
    provincia_id: 10
  },
  {
    id: 2528,
    cp: 10290,
    name: "Trujillo",
    provincia_id: 10
  },
  {
    id: 2529,
    cp: 10291,
    name: "La Aldea del Obispo",
    provincia_id: 10
  },
  {
    id: 2530,
    cp: 10291,
    name: "Trujillo",
    provincia_id: 10
  },
  {
    id: 2531,
    cp: 10292,
    name: "Trujillo",
    provincia_id: 10
  },
  {
    id: 2532,
    cp: 10300,
    name: "Navalmoral de la Mata",
    provincia_id: 10
  },
  {
    id: 2533,
    cp: 10310,
    name: "Talayuela",
    provincia_id: 10
  },
  {
    id: 2534,
    cp: 10317,
    name: "Collado de la Vera",
    provincia_id: 10
  },
  {
    id: 2535,
    cp: 10318,
    name: "Talayuela",
    provincia_id: 10
  },
  {
    id: 2536,
    cp: 10319,
    name: "Talayuela",
    provincia_id: 10
  },
  {
    id: 2537,
    cp: 10320,
    name: "Bohonal de Ibor",
    provincia_id: 10
  },
  {
    id: 2538,
    cp: 10328,
    name: "Fresnedoso de Ibor",
    provincia_id: 10
  },
  {
    id: 2539,
    cp: 10329,
    name: "Valdeca?as de Tajo",
    provincia_id: 10
  },
  {
    id: 2540,
    cp: 10329,
    name: "Campillo de Deleitosa",
    provincia_id: 10
  },
  {
    id: 2541,
    cp: 10329,
    name: "Mesas de Ibor",
    provincia_id: 10
  },
  {
    id: 2542,
    cp: 10330,
    name: "Villar del Pedroso",
    provincia_id: 10
  },
  {
    id: 2543,
    cp: 10331,
    name: "Carrascalejo",
    provincia_id: 10
  },
  {
    id: 2544,
    cp: 10331,
    name: "Villar del Pedroso",
    provincia_id: 10
  },
  {
    id: 2545,
    cp: 10332,
    name: "Valdeca?as de Tajo",
    provincia_id: 10
  },
  {
    id: 2546,
    cp: 10332,
    name: "Valdelacasa de Tajo",
    provincia_id: 10
  },
  {
    id: 2547,
    cp: 10333,
    name: "Garvín",
    provincia_id: 10
  },
  {
    id: 2548,
    cp: 10334,
    name: "Peraleda de San Román",
    provincia_id: 10
  },
  {
    id: 2549,
    cp: 10335,
    name: "Peraleda de la Mata",
    provincia_id: 10
  },
  {
    id: 2550,
    cp: 10340,
    name: "Casta?ar de Ibor",
    provincia_id: 10
  },
  {
    id: 2551,
    cp: 10341,
    name: "Navalvillar de Ibor",
    provincia_id: 10
  },
  {
    id: 2552,
    cp: 10350,
    name: "Almaraz",
    provincia_id: 10
  },
  {
    id: 2553,
    cp: 10359,
    name: "Higuera",
    provincia_id: 10
  },
  {
    id: 2554,
    cp: 10359,
    name: "Romangordo",
    provincia_id: 10
  },
  {
    id: 2555,
    cp: 10360,
    name: "Casas de Miravete",
    provincia_id: 10
  },
  {
    id: 2556,
    cp: 10370,
    name: "Deleitosa",
    provincia_id: 10
  },
  {
    id: 2557,
    cp: 10370,
    name: "Hernán-Pérez",
    provincia_id: 10
  },
  {
    id: 2558,
    cp: 10371,
    name: "Robledollano",
    provincia_id: 10
  },
  {
    id: 2559,
    cp: 10372,
    name: "Caba?as del Castillo",
    provincia_id: 10
  },
  {
    id: 2560,
    cp: 10373,
    name: "Caba?as del Castillo",
    provincia_id: 10
  },
  {
    id: 2561,
    cp: 10374,
    name: "Navezuelas",
    provincia_id: 10
  },
  {
    id: 2562,
    cp: 10380,
    name: "Jaraicejo",
    provincia_id: 10
  },
  {
    id: 2563,
    cp: 10390,
    name: "Saucedilla",
    provincia_id: 10
  },
  {
    id: 2564,
    cp: 10391,
    name: "Rosalejo",
    provincia_id: 10
  },
  {
    id: 2565,
    cp: 10392,
    name: "El Gordo",
    provincia_id: 10
  },
  {
    id: 2566,
    cp: 10392,
    name: "Berrocalejo",
    provincia_id: 10
  },
  {
    id: 2567,
    cp: 10393,
    name: "Valdehúncar",
    provincia_id: 10
  },
  {
    id: 2568,
    cp: 10394,
    name: "Millanes",
    provincia_id: 10
  },
  {
    id: 2569,
    cp: 10394,
    name: "Belvís de Monroy",
    provincia_id: 10
  },
  {
    id: 2570,
    cp: 10400,
    name: "Jaraíz de la Vera",
    provincia_id: 10
  },
  {
    id: 2571,
    cp: 10410,
    name: "Arroyomolinos de la Vera",
    provincia_id: 10
  },
  {
    id: 2572,
    cp: 10411,
    name: "Pasarón de la Vera",
    provincia_id: 10
  },
  {
    id: 2573,
    cp: 10412,
    name: "Garganta la Olla",
    provincia_id: 10
  },
  {
    id: 2574,
    cp: 10413,
    name: "Torremenga",
    provincia_id: 10
  },
  {
    id: 2575,
    cp: 10414,
    name: "Collado de la Vera",
    provincia_id: 10
  },
  {
    id: 2576,
    cp: 10415,
    name: "Valencia de Alcántara",
    provincia_id: 10
  },
  {
    id: 2577,
    cp: 10420,
    name: "Tejeda de Tiétar",
    provincia_id: 10
  },
  {
    id: 2578,
    cp: 10430,
    name: "Cuacos de Yuste",
    provincia_id: 10
  },
  {
    id: 2579,
    cp: 10440,
    name: "Aldeanueva de la Vera",
    provincia_id: 10
  },
  {
    id: 2580,
    cp: 10450,
    name: "Jarandilla de la Vera",
    provincia_id: 10
  },
  {
    id: 2581,
    cp: 10459,
    name: "Guijo de Santa Bárbara",
    provincia_id: 10
  },
  {
    id: 2582,
    cp: 10460,
    name: "Losar de la Vera",
    provincia_id: 10
  },
  {
    id: 2583,
    cp: 10470,
    name: "Villanueva de la Vera",
    provincia_id: 10
  },
  {
    id: 2584,
    cp: 10480,
    name: "Madrigal de la Vera",
    provincia_id: 10
  },
  {
    id: 2585,
    cp: 10484,
    name: "Vegaviana",
    provincia_id: 10
  },
  {
    id: 2586,
    cp: 10490,
    name: "Valverde de la Vera",
    provincia_id: 10
  },
  {
    id: 2587,
    cp: 10490,
    name: "Villanueva de la Vera",
    provincia_id: 10
  },
  {
    id: 2588,
    cp: 10491,
    name: "Talaveruela de la Vera",
    provincia_id: 10
  },
  {
    id: 2589,
    cp: 10492,
    name: "Viandar de la Vera",
    provincia_id: 10
  },
  {
    id: 2590,
    cp: 10493,
    name: "Robledillo de la Vera",
    provincia_id: 10
  },
  {
    id: 2591,
    cp: 10500,
    name: "Valencia de Alcántara",
    provincia_id: 10
  },
  {
    id: 2592,
    cp: 10509,
    name: "Valencia de Alcántara",
    provincia_id: 10
  },
  {
    id: 2593,
    cp: 10510,
    name: "Santiago de Alcántara",
    provincia_id: 10
  },
  {
    id: 2594,
    cp: 10511,
    name: "Carbajo",
    provincia_id: 10
  },
  {
    id: 2595,
    cp: 10512,
    name: "Herrera de Alcántara",
    provincia_id: 10
  },
  {
    id: 2596,
    cp: 10513,
    name: "Cedillo",
    provincia_id: 10
  },
  {
    id: 2597,
    cp: 10514,
    name: "Valencia de Alcántara",
    provincia_id: 10
  },
  {
    id: 2598,
    cp: 10515,
    name: "Valencia de Alcántara",
    provincia_id: 10
  },
  {
    id: 2599,
    cp: 10516,
    name: "Valencia de Alcántara",
    provincia_id: 10
  },
  {
    id: 2600,
    cp: 10519,
    name: "Valencia de Alcántara",
    provincia_id: 10
  },
  {
    id: 2601,
    cp: 10520,
    name: "Toril",
    provincia_id: 10
  },
  {
    id: 2602,
    cp: 10520,
    name: "Casatejada",
    provincia_id: 10
  },
  {
    id: 2603,
    cp: 10528,
    name: "Serrejón",
    provincia_id: 10
  },
  {
    id: 2604,
    cp: 10529,
    name: "Majadas",
    provincia_id: 10
  },
  {
    id: 2605,
    cp: 10530,
    name: "Serradilla",
    provincia_id: 10
  },
  {
    id: 2606,
    cp: 10540,
    name: "Mirabel",
    provincia_id: 10
  },
  {
    id: 2607,
    cp: 10550,
    name: "Aliseda",
    provincia_id: 10
  },
  {
    id: 2608,
    cp: 10560,
    name: "Herreruela",
    provincia_id: 10
  },
  {
    id: 2609,
    cp: 10570,
    name: "Salorino",
    provincia_id: 10
  },
  {
    id: 2610,
    cp: 10580,
    name: "Membrío",
    provincia_id: 10
  },
  {
    id: 2611,
    cp: 10590,
    name: "Malpartida de Plasencia",
    provincia_id: 10
  },
  {
    id: 2612,
    cp: 10591,
    name: "Malpartida de Plasencia",
    provincia_id: 10
  },
  {
    id: 2613,
    cp: 10591,
    name: "Herguijuela",
    provincia_id: 10
  },
  {
    id: 2614,
    cp: 10591,
    name: "Toril",
    provincia_id: 10
  },
  {
    id: 2615,
    cp: 10592,
    name: "Casas de Millán",
    provincia_id: 10
  },
  {
    id: 2616,
    cp: 10593,
    name: "Casar de Cáceres",
    provincia_id: 10
  },
  {
    id: 2617,
    cp: 10600,
    name: "Plasencia",
    provincia_id: 10
  },
  {
    id: 2618,
    cp: 10610,
    name: "Cabezuela del Valle",
    provincia_id: 10
  },
  {
    id: 2619,
    cp: 10611,
    name: "Tornavacas",
    provincia_id: 10
  },
  {
    id: 2620,
    cp: 10612,
    name: "Jerte",
    provincia_id: 10
  },
  {
    id: 2621,
    cp: 10613,
    name: "Navaconcejo",
    provincia_id: 10
  },
  {
    id: 2622,
    cp: 10614,
    name: "Valdastillas",
    provincia_id: 10
  },
  {
    id: 2623,
    cp: 10615,
    name: "Piornal",
    provincia_id: 10
  },
  {
    id: 2624,
    cp: 10616,
    name: "Cabrero",
    provincia_id: 10
  },
  {
    id: 2625,
    cp: 10616,
    name: "Casas del Casta?ar",
    provincia_id: 10
  },
  {
    id: 2626,
    cp: 10616,
    name: "Guijo de Granadilla",
    provincia_id: 10
  },
  {
    id: 2627,
    cp: 10617,
    name: "El Torno",
    provincia_id: 10
  },
  {
    id: 2628,
    cp: 10617,
    name: "Rebollar",
    provincia_id: 10
  },
  {
    id: 2629,
    cp: 10620,
    name: "Caminomorisco",
    provincia_id: 10
  },
  {
    id: 2630,
    cp: 10623,
    name: "Nu?omoral",
    provincia_id: 10
  },
  {
    id: 2631,
    cp: 10623,
    name: "Caminomorisco",
    provincia_id: 10
  },
  {
    id: 2632,
    cp: 10624,
    name: "Caminomorisco",
    provincia_id: 10
  },
  {
    id: 2633,
    cp: 10624,
    name: "Ladrillar",
    provincia_id: 10
  },
  {
    id: 2634,
    cp: 10625,
    name: "Ladrillar",
    provincia_id: 10
  },
  {
    id: 2635,
    cp: 10626,
    name: "Nu?omoral",
    provincia_id: 10
  },
  {
    id: 2636,
    cp: 10627,
    name: "Nu?omoral",
    provincia_id: 10
  },
  {
    id: 2637,
    cp: 10628,
    name: "Nu?omoral",
    provincia_id: 10
  },
  {
    id: 2638,
    cp: 10628,
    name: "Casares de las Hurdes",
    provincia_id: 10
  },
  {
    id: 2639,
    cp: 10629,
    name: "Caminomorisco",
    provincia_id: 10
  },
  {
    id: 2640,
    cp: 10629,
    name: "Nu?omoral",
    provincia_id: 10
  },
  {
    id: 2641,
    cp: 10630,
    name: "Pinofranqueado",
    provincia_id: 10
  },
  {
    id: 2642,
    cp: 10630,
    name: "Casar de Palomero",
    provincia_id: 10
  },
  {
    id: 2643,
    cp: 10630,
    name: "Caminomorisco",
    provincia_id: 10
  },
  {
    id: 2644,
    cp: 10638,
    name: "Pinofranqueado",
    provincia_id: 10
  },
  {
    id: 2645,
    cp: 10639,
    name: "Pinofranqueado",
    provincia_id: 10
  },
  {
    id: 2646,
    cp: 10640,
    name: "Casar de Palomero",
    provincia_id: 10
  },
  {
    id: 2647,
    cp: 10649,
    name: "Casar de Palomero",
    provincia_id: 10
  },
  {
    id: 2648,
    cp: 10649,
    name: "La Pesga",
    provincia_id: 10
  },
  {
    id: 2649,
    cp: 10650,
    name: "Ahigal",
    provincia_id: 10
  },
  {
    id: 2650,
    cp: 10660,
    name: "Palomero",
    provincia_id: 10
  },
  {
    id: 2651,
    cp: 10660,
    name: "Oliva de Plasencia",
    provincia_id: 10
  },
  {
    id: 2652,
    cp: 10660,
    name: "Santa Cruz de Paniagua",
    provincia_id: 10
  },
  {
    id: 2653,
    cp: 10661,
    name: "Santa Cruz de Paniagua",
    provincia_id: 10
  },
  {
    id: 2654,
    cp: 10662,
    name: "Marchagaz",
    provincia_id: 10
  },
  {
    id: 2655,
    cp: 10663,
    name: "Cerezo",
    provincia_id: 10
  },
  {
    id: 2656,
    cp: 10663,
    name: "Jaraicejo",
    provincia_id: 10
  },
  {
    id: 2657,
    cp: 10664,
    name: "Mohedas de Granadilla",
    provincia_id: 10
  },
  {
    id: 2658,
    cp: 10665,
    name: "Guijo de Granadilla",
    provincia_id: 10
  },
  {
    id: 2659,
    cp: 10666,
    name: "Santibá?ez el Bajo",
    provincia_id: 10
  },
  {
    id: 2660,
    cp: 10666,
    name: "Aceituna",
    provincia_id: 10
  },
  {
    id: 2661,
    cp: 10667,
    name: "Oliva de Plasencia",
    provincia_id: 10
  },
  {
    id: 2662,
    cp: 10670,
    name: "Carcaboso",
    provincia_id: 10
  },
  {
    id: 2663,
    cp: 10671,
    name: "Carcaboso",
    provincia_id: 10
  },
  {
    id: 2664,
    cp: 10671,
    name: "Plasencia",
    provincia_id: 10
  },
  {
    id: 2665,
    cp: 10671,
    name: "Aldehuela de Jerte",
    provincia_id: 10
  },
  {
    id: 2666,
    cp: 10672,
    name: "Valdeobispo",
    provincia_id: 10
  },
  {
    id: 2667,
    cp: 10680,
    name: "Malpartida de Plasencia",
    provincia_id: 10
  },
  {
    id: 2668,
    cp: 10690,
    name: "Alagón del Río",
    provincia_id: 10
  },
  {
    id: 2669,
    cp: 10690,
    name: "Plasencia",
    provincia_id: 10
  },
  {
    id: 2670,
    cp: 10690,
    name: "Galisteo",
    provincia_id: 10
  },
  {
    id: 2671,
    cp: 10691,
    name: "Galisteo",
    provincia_id: 10
  },
  {
    id: 2672,
    cp: 10692,
    name: "Guijo de Galisteo",
    provincia_id: 10
  },
  {
    id: 2673,
    cp: 10693,
    name: "Riolobos",
    provincia_id: 10
  },
  {
    id: 2674,
    cp: 10694,
    name: "Toril",
    provincia_id: 10
  },
  {
    id: 2675,
    cp: 10694,
    name: "Torrejón el Rubio",
    provincia_id: 10
  },
  {
    id: 2676,
    cp: 10695,
    name: "Serradilla",
    provincia_id: 10
  },
  {
    id: 2677,
    cp: 10696,
    name: "Gargüera",
    provincia_id: 10
  },
  {
    id: 2678,
    cp: 10696,
    name: "Barrado",
    provincia_id: 10
  },
  {
    id: 2679,
    cp: 10697,
    name: "Tejeda de Tiétar",
    provincia_id: 10
  },
  {
    id: 2680,
    cp: 10697,
    name: "Toril",
    provincia_id: 10
  },
  {
    id: 2681,
    cp: 10697,
    name: "Malpartida de Plasencia",
    provincia_id: 10
  },
  {
    id: 2682,
    cp: 10700,
    name: "Hervás",
    provincia_id: 10
  },
  {
    id: 2683,
    cp: 10701,
    name: "Dos Hermanas",
    provincia_id: 41
  },
  {
    id: 2684,
    cp: 10710,
    name: "Zarza de Granadilla",
    provincia_id: 10
  },
  {
    id: 2685,
    cp: 10711,
    name: "La Granja",
    provincia_id: 10
  },
  {
    id: 2686,
    cp: 10712,
    name: "Guijo de Granadilla",
    provincia_id: 10
  },
  {
    id: 2687,
    cp: 10720,
    name: "Villar de Plasencia",
    provincia_id: 10
  },
  {
    id: 2688,
    cp: 10728,
    name: "Jarilla",
    provincia_id: 10
  },
  {
    id: 2689,
    cp: 10729,
    name: "Cabezabellosa",
    provincia_id: 10
  },
  {
    id: 2690,
    cp: 10730,
    name: "Casas del Monte",
    provincia_id: 10
  },
  {
    id: 2691,
    cp: 10739,
    name: "Segura de Toro",
    provincia_id: 10
  },
  {
    id: 2692,
    cp: 10740,
    name: "Aldeanueva del Camino",
    provincia_id: 10
  },
  {
    id: 2693,
    cp: 10748,
    name: "Abadía",
    provincia_id: 10
  },
  {
    id: 2694,
    cp: 10749,
    name: "Gargantilla",
    provincia_id: 10
  },
  {
    id: 2695,
    cp: 10750,
    name: "Ba?os de Montemayor",
    provincia_id: 10
  },
  {
    id: 2696,
    cp: 10759,
    name: "La Garganta",
    provincia_id: 10
  },
  {
    id: 2697,
    cp: 10800,
    name: "Coria",
    provincia_id: 10
  },
  {
    id: 2698,
    cp: 10810,
    name: "Valdefuentes",
    provincia_id: 10
  },
  {
    id: 2699,
    cp: 10810,
    name: "Montehermoso",
    provincia_id: 10
  },
  {
    id: 2700,
    cp: 10811,
    name: "Morcillo",
    provincia_id: 10
  },
  {
    id: 2701,
    cp: 10811,
    name: "Coria",
    provincia_id: 10
  },
  {
    id: 2702,
    cp: 10811,
    name: "Guijo de Galisteo",
    provincia_id: 10
  },
  {
    id: 2703,
    cp: 10812,
    name: "Villanueva de la Sierra",
    provincia_id: 10
  },
  {
    id: 2704,
    cp: 10813,
    name: "Pozuelo de Zarzón",
    provincia_id: 10
  },
  {
    id: 2705,
    cp: 10814,
    name: "Villa del Campo",
    provincia_id: 10
  },
  {
    id: 2706,
    cp: 10815,
    name: "Guijo de Coria",
    provincia_id: 10
  },
  {
    id: 2707,
    cp: 10816,
    name: "Guijo de Galisteo",
    provincia_id: 10
  },
  {
    id: 2708,
    cp: 10816,
    name: "Casas de Don Gómez",
    provincia_id: 10
  },
  {
    id: 2709,
    cp: 10817,
    name: "Calzadilla",
    provincia_id: 10
  },
  {
    id: 2710,
    cp: 10818,
    name: "Casillas de Coria",
    provincia_id: 10
  },
  {
    id: 2711,
    cp: 10818,
    name: "Casas de Don Gómez",
    provincia_id: 10
  },
  {
    id: 2712,
    cp: 10820,
    name: "Ca?averal",
    provincia_id: 10
  },
  {
    id: 2713,
    cp: 10824,
    name: "Holguera",
    provincia_id: 10
  },
  {
    id: 2714,
    cp: 10828,
    name: "Portezuelo",
    provincia_id: 10
  },
  {
    id: 2715,
    cp: 10829,
    name: "Riolobos",
    provincia_id: 10
  },
  {
    id: 2716,
    cp: 10829,
    name: "Ca?averal",
    provincia_id: 10
  },
  {
    id: 2717,
    cp: 10829,
    name: "Pedroso de Acim",
    provincia_id: 10
  },
  {
    id: 2718,
    cp: 10829,
    name: "Holguera",
    provincia_id: 10
  },
  {
    id: 2719,
    cp: 10830,
    name: "Torrejoncillo",
    provincia_id: 10
  },
  {
    id: 2720,
    cp: 10839,
    name: "Torrejoncillo",
    provincia_id: 10
  },
  {
    id: 2721,
    cp: 10840,
    name: "Moraleja",
    provincia_id: 10
  },
  {
    id: 2722,
    cp: 10848,
    name: "Vegaviana",
    provincia_id: 10
  },
  {
    id: 2723,
    cp: 10849,
    name: "Gata",
    provincia_id: 10
  },
  {
    id: 2724,
    cp: 10849,
    name: "Huélaga",
    provincia_id: 10
  },
  {
    id: 2725,
    cp: 10850,
    name: "Hoyos",
    provincia_id: 10
  },
  {
    id: 2726,
    cp: 10857,
    name: "Acebo",
    provincia_id: 10
  },
  {
    id: 2727,
    cp: 10858,
    name: "Villasbuenas de Gata",
    provincia_id: 10
  },
  {
    id: 2728,
    cp: 10859,
    name: "Santibá?ez el Alto",
    provincia_id: 10
  },
  {
    id: 2729,
    cp: 10860,
    name: "Gata",
    provincia_id: 10
  },
  {
    id: 2730,
    cp: 10864,
    name: "Torre de Don Miguel",
    provincia_id: 10
  },
  {
    id: 2731,
    cp: 10865,
    name: "Cadalso",
    provincia_id: 10
  },
  {
    id: 2732,
    cp: 10866,
    name: "Descargamaría",
    provincia_id: 10
  },
  {
    id: 2733,
    cp: 10867,
    name: "Robledillo de Gata",
    provincia_id: 10
  },
  {
    id: 2734,
    cp: 10868,
    name: "Hernán-Pérez",
    provincia_id: 10
  },
  {
    id: 2735,
    cp: 10869,
    name: "Torrecilla de los Ángeles",
    provincia_id: 10
  },
  {
    id: 2736,
    cp: 10870,
    name: "Ceclavín",
    provincia_id: 10
  },
  {
    id: 2737,
    cp: 10879,
    name: "Acehúche",
    provincia_id: 10
  },
  {
    id: 2738,
    cp: 10880,
    name: "Zarza la Mayor",
    provincia_id: 10
  },
  {
    id: 2739,
    cp: 10881,
    name: "Cachorrilla",
    provincia_id: 10
  },
  {
    id: 2740,
    cp: 10882,
    name: "Pescueza",
    provincia_id: 10
  },
  {
    id: 2741,
    cp: 10883,
    name: "Portaje",
    provincia_id: 10
  },
  {
    id: 2742,
    cp: 10890,
    name: "Valverde del Fresno",
    provincia_id: 10
  },
  {
    id: 2743,
    cp: 10891,
    name: "Eljas",
    provincia_id: 10
  },
  {
    id: 2744,
    cp: 10892,
    name: "San Martín de Trevejo",
    provincia_id: 10
  },
  {
    id: 2745,
    cp: 10893,
    name: "Villamiel",
    provincia_id: 10
  },
  {
    id: 2746,
    cp: 10894,
    name: "Villamiel",
    provincia_id: 10
  },
  {
    id: 2747,
    cp: 10895,
    name: "Cilleros",
    provincia_id: 10
  },
  {
    id: 2748,
    cp: 10896,
    name: "Perales del Puerto",
    provincia_id: 10
  },
  {
    id: 2749,
    cp: 10897,
    name: "Ca?averal",
    provincia_id: 10
  },
  {
    id: 2750,
    cp: 10900,
    name: "Arroyo de la Luz",
    provincia_id: 10
  },
  {
    id: 2751,
    cp: 10910,
    name: "Malpartida de Cáceres",
    provincia_id: 10
  },
  {
    id: 2752,
    cp: 10920,
    name: "Cáceres",
    provincia_id: 10
  },
  {
    id: 2753,
    cp: 10930,
    name: "Navas del Madro?o",
    provincia_id: 10
  },
  {
    id: 2754,
    cp: 10940,
    name: "Garrovillas de Alconétar",
    provincia_id: 10
  },
  {
    id: 2755,
    cp: 10950,
    name: "Brozas",
    provincia_id: 10
  },
  {
    id: 2756,
    cp: 10960,
    name: "Villa del Rey",
    provincia_id: 10
  },
  {
    id: 2757,
    cp: 10970,
    name: "Mata de Alcántara",
    provincia_id: 10
  },
  {
    id: 2758,
    cp: 10980,
    name: "Alcántara",
    provincia_id: 10
  },
  {
    id: 2759,
    cp: 10989,
    name: "Alcántara",
    provincia_id: 10
  },
  {
    id: 2760,
    cp: 10990,
    name: "Alcántara",
    provincia_id: 10
  },
  {
    id: 2761,
    cp: 10991,
    name: "Piedras Albas",
    provincia_id: 10
  },
  {
    id: 2762,
    cp: 11001,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2763,
    cp: 11002,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2764,
    cp: 11003,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2765,
    cp: 11004,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2766,
    cp: 11005,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2767,
    cp: 11006,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2768,
    cp: 11007,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2769,
    cp: 11008,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2770,
    cp: 11009,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2771,
    cp: 11010,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2772,
    cp: 11011,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2773,
    cp: 11012,
    name: "Cádiz",
    provincia_id: 11
  },
  {
    id: 2774,
    cp: 11100,
    name: "San Fernando",
    provincia_id: 11
  },
  {
    id: 2775,
    cp: 11130,
    name: "Chiclana de la Frontera",
    provincia_id: 11
  },
  {
    id: 2776,
    cp: 11139,
    name: "Chiclana de la Frontera",
    provincia_id: 11
  },
  {
    id: 2777,
    cp: 11140,
    name: "Conil de la Frontera",
    provincia_id: 11
  },
  {
    id: 2778,
    cp: 11149,
    name: "Conil de la Frontera",
    provincia_id: 11
  },
  {
    id: 2779,
    cp: 11150,
    name: "Barbate",
    provincia_id: 11
  },
  {
    id: 2780,
    cp: 11150,
    name: "Vejer de la Frontera",
    provincia_id: 11
  },
  {
    id: 2781,
    cp: 11158,
    name: "Vejer de la Frontera",
    provincia_id: 11
  },
  {
    id: 2782,
    cp: 11159,
    name: "Vejer de la Frontera",
    provincia_id: 11
  },
  {
    id: 2783,
    cp: 11159,
    name: "Barbate",
    provincia_id: 11
  },
  {
    id: 2784,
    cp: 11160,
    name: "Barbate",
    provincia_id: 11
  },
  {
    id: 2785,
    cp: 11170,
    name: "Medina-Sidonia",
    provincia_id: 11
  },
  {
    id: 2786,
    cp: 11178,
    name: "Paterna de Rivera",
    provincia_id: 11
  },
  {
    id: 2787,
    cp: 11179,
    name: "Medina-Sidonia",
    provincia_id: 11
  },
  {
    id: 2788,
    cp: 11179,
    name: "Vejer de la Frontera",
    provincia_id: 11
  },
  {
    id: 2789,
    cp: 11180,
    name: "Alcalá de los Gazules",
    provincia_id: 11
  },
  {
    id: 2790,
    cp: 11190,
    name: "Benalup-Casas Viejas",
    provincia_id: 11
  },
  {
    id: 2791,
    cp: 11201,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2792,
    cp: 11202,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2793,
    cp: 11203,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2794,
    cp: 11204,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2795,
    cp: 11205,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2796,
    cp: 11206,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2797,
    cp: 11207,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2798,
    cp: 11300,
    name: "Puerto Serrano",
    provincia_id: 11
  },
  {
    id: 2799,
    cp: 11300,
    name: "La Línea de la Concepción",
    provincia_id: 11
  },
  {
    id: 2800,
    cp: 11310,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2801,
    cp: 11311,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2802,
    cp: 11311,
    name: "Sanlúcar de Barrameda",
    provincia_id: 11
  },
  {
    id: 2803,
    cp: 11312,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2804,
    cp: 11313,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2805,
    cp: 11314,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2806,
    cp: 11320,
    name: "Jimena de la Frontera",
    provincia_id: 11
  },
  {
    id: 2807,
    cp: 11330,
    name: "Jimena de la Frontera",
    provincia_id: 11
  },
  {
    id: 2808,
    cp: 11339,
    name: "Jimena de la Frontera",
    provincia_id: 11
  },
  {
    id: 2809,
    cp: 11340,
    name: "Jimena de la Frontera",
    provincia_id: 11
  },
  {
    id: 2810,
    cp: 11350,
    name: "Castellar de la Frontera",
    provincia_id: 11
  },
  {
    id: 2811,
    cp: 11360,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2812,
    cp: 11368,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2813,
    cp: 11369,
    name: "Sanlúcar de Barrameda",
    provincia_id: 11
  },
  {
    id: 2814,
    cp: 11369,
    name: "San Roque",
    provincia_id: 11
  },
  {
    id: 2815,
    cp: 11370,
    name: "Los Barrios",
    provincia_id: 11
  },
  {
    id: 2816,
    cp: 11379,
    name: "Los Barrios",
    provincia_id: 11
  },
  {
    id: 2817,
    cp: 11380,
    name: "Tarifa",
    provincia_id: 11
  },
  {
    id: 2818,
    cp: 11390,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2819,
    cp: 11390,
    name: "Tarifa",
    provincia_id: 11
  },
  {
    id: 2820,
    cp: 11391,
    name: "Tarifa",
    provincia_id: 11
  },
  {
    id: 2821,
    cp: 11391,
    name: "Algeciras",
    provincia_id: 11
  },
  {
    id: 2822,
    cp: 11392,
    name: "Tarifa",
    provincia_id: 11
  },
  {
    id: 2823,
    cp: 11393,
    name: "Tarifa",
    provincia_id: 11
  },
  {
    id: 2824,
    cp: 11393,
    name: "Barbate",
    provincia_id: 11
  },
  {
    id: 2825,
    cp: 11400,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2826,
    cp: 11401,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2827,
    cp: 11402,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2828,
    cp: 11403,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2829,
    cp: 11404,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2830,
    cp: 11405,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2831,
    cp: 11406,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2832,
    cp: 11407,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2833,
    cp: 11408,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2834,
    cp: 11500,
    name: "El Puerto de Santa María",
    provincia_id: 11
  },
  {
    id: 2835,
    cp: 11510,
    name: "Puerto Real",
    provincia_id: 11
  },
  {
    id: 2836,
    cp: 11518,
    name: "Puerto Real",
    provincia_id: 11
  },
  {
    id: 2837,
    cp: 11519,
    name: "Puerto Real",
    provincia_id: 11
  },
  {
    id: 2838,
    cp: 11520,
    name: "Rota",
    provincia_id: 11
  },
  {
    id: 2839,
    cp: 11540,
    name: "Sanlúcar de Barrameda",
    provincia_id: 11
  },
  {
    id: 2840,
    cp: 11549,
    name: "Sanlúcar de Barrameda",
    provincia_id: 11
  },
  {
    id: 2841,
    cp: 11550,
    name: "Chipiona",
    provincia_id: 11
  },
  {
    id: 2842,
    cp: 11560,
    name: "Trebujena",
    provincia_id: 11
  },
  {
    id: 2843,
    cp: 11570,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2844,
    cp: 11579,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2845,
    cp: 11580,
    name: "San José del Valle",
    provincia_id: 11
  },
  {
    id: 2846,
    cp: 11589,
    name: "San José del Valle",
    provincia_id: 11
  },
  {
    id: 2847,
    cp: 11590,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2848,
    cp: 11591,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2849,
    cp: 11592,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2850,
    cp: 11593,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2851,
    cp: 11594,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2852,
    cp: 11595,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2853,
    cp: 11596,
    name: "Jerez de la Frontera",
    provincia_id: 11
  },
  {
    id: 2854,
    cp: 11600,
    name: "Ubrique",
    provincia_id: 11
  },
  {
    id: 2855,
    cp: 11610,
    name: "Grazalema",
    provincia_id: 11
  },
  {
    id: 2856,
    cp: 11611,
    name: "Villaluenga del Rosario",
    provincia_id: 11
  },
  {
    id: 2857,
    cp: 11612,
    name: "Benaocaz",
    provincia_id: 11
  },
  {
    id: 2858,
    cp: 11620,
    name: "Arcos de la Frontera",
    provincia_id: 11
  },
  {
    id: 2859,
    cp: 11630,
    name: "Arcos de la Frontera",
    provincia_id: 11
  },
  {
    id: 2860,
    cp: 11638,
    name: "Arcos de la Frontera",
    provincia_id: 11
  },
  {
    id: 2861,
    cp: 11639,
    name: "Algar",
    provincia_id: 11
  },
  {
    id: 2862,
    cp: 11640,
    name: "Bornos",
    provincia_id: 11
  },
  {
    id: 2863,
    cp: 11648,
    name: "Espera",
    provincia_id: 11
  },
  {
    id: 2864,
    cp: 11649,
    name: "Bornos",
    provincia_id: 11
  },
  {
    id: 2865,
    cp: 11650,
    name: "Villamartín",
    provincia_id: 11
  },
  {
    id: 2866,
    cp: 11659,
    name: "Puerto Serrano",
    provincia_id: 11
  },
  {
    id: 2867,
    cp: 11660,
    name: "Prado del Rey",
    provincia_id: 11
  },
  {
    id: 2868,
    cp: 11670,
    name: "El Bosque",
    provincia_id: 11
  },
  {
    id: 2869,
    cp: 11679,
    name: "Grazalema",
    provincia_id: 11
  },
  {
    id: 2870,
    cp: 11680,
    name: "Algodonales",
    provincia_id: 11
  },
  {
    id: 2871,
    cp: 11687,
    name: "El Gastor",
    provincia_id: 11
  },
  {
    id: 2872,
    cp: 11688,
    name: "Zahara",
    provincia_id: 11
  },
  {
    id: 2873,
    cp: 11689,
    name: "Algodonales",
    provincia_id: 11
  },
  {
    id: 2874,
    cp: 11690,
    name: "Olvera",
    provincia_id: 11
  },
  {
    id: 2875,
    cp: 11691,
    name: "Torre Alháquime",
    provincia_id: 11
  },
  {
    id: 2876,
    cp: 11692,
    name: "Setenil de las Bodegas",
    provincia_id: 11
  },
  {
    id: 2877,
    cp: 11693,
    name: "Alcalá del Valle",
    provincia_id: 11
  },
  {
    id: 2878,
    cp: 12001,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 2879,
    cp: 12002,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 2880,
    cp: 12003,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 2881,
    cp: 12004,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 2882,
    cp: 12005,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 2883,
    cp: 12006,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 2884,
    cp: 12100,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 2885,
    cp: 12110,
    name: "l'Alcora",
    provincia_id: 12
  },
  {
    id: 2886,
    cp: 12118,
    name: "Useras les Useres",
    provincia_id: 12
  },
  {
    id: 2887,
    cp: 12119,
    name: "Costur",
    provincia_id: 12
  },
  {
    id: 2888,
    cp: 12119,
    name: "l'Alcora",
    provincia_id: 12
  },
  {
    id: 2889,
    cp: 12120,
    name: "Llucena Lucena del Cid",
    provincia_id: 12
  },
  {
    id: 2890,
    cp: 12121,
    name: "l'Alcora",
    provincia_id: 12
  },
  {
    id: 2891,
    cp: 12122,
    name: "Useras les Useres",
    provincia_id: 12
  },
  {
    id: 2892,
    cp: 12122,
    name: "Figueroles",
    provincia_id: 12
  },
  {
    id: 2893,
    cp: 12123,
    name: "Ludiente",
    provincia_id: 12
  },
  {
    id: 2894,
    cp: 12123,
    name: "Castillo de Villamalefa",
    provincia_id: 12
  },
  {
    id: 2895,
    cp: 12124,
    name: "Villahermosa del Río",
    provincia_id: 12
  },
  {
    id: 2896,
    cp: 12125,
    name: "Zucaina",
    provincia_id: 12
  },
  {
    id: 2897,
    cp: 12126,
    name: "Cortes de Arenoso",
    provincia_id: 12
  },
  {
    id: 2898,
    cp: 12127,
    name: "Cortes de Arenoso",
    provincia_id: 12
  },
  {
    id: 2899,
    cp: 12130,
    name: "Sant Joan de Moró",
    provincia_id: 12
  },
  {
    id: 2900,
    cp: 12131,
    name: "Useras les Useres",
    provincia_id: 12
  },
  {
    id: 2901,
    cp: 12132,
    name: "Atzeneta del Maestrat",
    provincia_id: 12
  },
  {
    id: 2902,
    cp: 12133,
    name: "Atzeneta del Maestrat",
    provincia_id: 12
  },
  {
    id: 2903,
    cp: 12134,
    name: "Benafigos",
    provincia_id: 12
  },
  {
    id: 2904,
    cp: 12134,
    name: "Chodos Xodos",
    provincia_id: 12
  },
  {
    id: 2905,
    cp: 12135,
    name: "Vistabella del Maestrat",
    provincia_id: 12
  },
  {
    id: 2906,
    cp: 12135,
    name: "Geldo",
    provincia_id: 12
  },
  {
    id: 2907,
    cp: 12140,
    name: "Alboc?sser",
    provincia_id: 12
  },
  {
    id: 2908,
    cp: 12150,
    name: "Villafranca del Cid Vilafranca",
    provincia_id: 12
  },
  {
    id: 2909,
    cp: 12159,
    name: "Castellfort",
    provincia_id: 12
  },
  {
    id: 2910,
    cp: 12160,
    name: "Benassal",
    provincia_id: 12
  },
  {
    id: 2911,
    cp: 12161,
    name: "la Torre d'En Besora",
    provincia_id: 12
  },
  {
    id: 2912,
    cp: 12162,
    name: "Vilar de Canes",
    provincia_id: 12
  },
  {
    id: 2913,
    cp: 12163,
    name: "Culla",
    provincia_id: 12
  },
  {
    id: 2914,
    cp: 12164,
    name: "Sierra Engarcerán",
    provincia_id: 12
  },
  {
    id: 2915,
    cp: 12165,
    name: "Ares del Maestrat",
    provincia_id: 12
  },
  {
    id: 2916,
    cp: 12166,
    name: "Sierra Engarcerán",
    provincia_id: 12
  },
  {
    id: 2917,
    cp: 12170,
    name: "Sant Mateu",
    provincia_id: 12
  },
  {
    id: 2918,
    cp: 12179,
    name: "Tírig",
    provincia_id: 12
  },
  {
    id: 2919,
    cp: 12180,
    name: "Cabanes",
    provincia_id: 12
  },
  {
    id: 2920,
    cp: 12181,
    name: "Benlloch",
    provincia_id: 12
  },
  {
    id: 2921,
    cp: 12182,
    name: "Sierra Engarcerán",
    provincia_id: 12
  },
  {
    id: 2922,
    cp: 12183,
    name: "Vilanova d'Alcolea",
    provincia_id: 12
  },
  {
    id: 2923,
    cp: 12184,
    name: "la Torre d'en Doménec",
    provincia_id: 12
  },
  {
    id: 2924,
    cp: 12184,
    name: "la Serratella",
    provincia_id: 12
  },
  {
    id: 2925,
    cp: 12185,
    name: "les Coves de Vinrom?",
    provincia_id: 12
  },
  {
    id: 2926,
    cp: 12186,
    name: "la Salzadella",
    provincia_id: 12
  },
  {
    id: 2927,
    cp: 12190,
    name: "Borriol",
    provincia_id: 12
  },
  {
    id: 2928,
    cp: 12191,
    name: "la Pobla Tornesa",
    provincia_id: 12
  },
  {
    id: 2929,
    cp: 12192,
    name: "Vilafamés",
    provincia_id: 12
  },
  {
    id: 2930,
    cp: 12193,
    name: "Vall d'Alba",
    provincia_id: 12
  },
  {
    id: 2931,
    cp: 12193,
    name: "Sierra Engarcerán",
    provincia_id: 12
  },
  {
    id: 2932,
    cp: 12194,
    name: "Vall d'Alba",
    provincia_id: 12
  },
  {
    id: 2933,
    cp: 12200,
    name: "Onda",
    provincia_id: 12
  },
  {
    id: 2934,
    cp: 12210,
    name: "Ribesalbes",
    provincia_id: 12
  },
  {
    id: 2935,
    cp: 12220,
    name: "Onda",
    provincia_id: 12
  },
  {
    id: 2936,
    cp: 12221,
    name: "Tales",
    provincia_id: 12
  },
  {
    id: 2937,
    cp: 12222,
    name: "Aín",
    provincia_id: 12
  },
  {
    id: 2938,
    cp: 12222,
    name: "Alcudia de Veo",
    provincia_id: 12
  },
  {
    id: 2939,
    cp: 12223,
    name: "Sueras Suera",
    provincia_id: 12
  },
  {
    id: 2940,
    cp: 12224,
    name: "Villamalur",
    provincia_id: 12
  },
  {
    id: 2941,
    cp: 12224,
    name: "Ayódar",
    provincia_id: 12
  },
  {
    id: 2942,
    cp: 12225,
    name: "Torralba del Pinar",
    provincia_id: 12
  },
  {
    id: 2943,
    cp: 12225,
    name: "Fuentes de Ayódar",
    provincia_id: 12
  },
  {
    id: 2944,
    cp: 12230,
    name: "Argelita",
    provincia_id: 12
  },
  {
    id: 2945,
    cp: 12230,
    name: "Fanzara",
    provincia_id: 12
  },
  {
    id: 2946,
    cp: 12230,
    name: "Toga",
    provincia_id: 12
  },
  {
    id: 2947,
    cp: 12230,
    name: "Espadilla",
    provincia_id: 12
  },
  {
    id: 2948,
    cp: 12230,
    name: "Vallat",
    provincia_id: 12
  },
  {
    id: 2949,
    cp: 12231,
    name: "Cirat",
    provincia_id: 12
  },
  {
    id: 2950,
    cp: 12232,
    name: "Ara?uel",
    provincia_id: 12
  },
  {
    id: 2951,
    cp: 12232,
    name: "Torrechiva",
    provincia_id: 12
  },
  {
    id: 2952,
    cp: 12232,
    name: "Cirat",
    provincia_id: 12
  },
  {
    id: 2953,
    cp: 12300,
    name: "Morella",
    provincia_id: 12
  },
  {
    id: 2954,
    cp: 12310,
    name: "Forcall",
    provincia_id: 12
  },
  {
    id: 2955,
    cp: 12311,
    name: "Zorita del Maestrazgo",
    provincia_id: 12
  },
  {
    id: 2956,
    cp: 12311,
    name: "Villores",
    provincia_id: 12
  },
  {
    id: 2957,
    cp: 12311,
    name: "Palanques",
    provincia_id: 12
  },
  {
    id: 2958,
    cp: 12312,
    name: "Todolella",
    provincia_id: 12
  },
  {
    id: 2959,
    cp: 12312,
    name: "Olocau del Rey",
    provincia_id: 12
  },
  {
    id: 2960,
    cp: 12312,
    name: "la Mata de Morella",
    provincia_id: 12
  },
  {
    id: 2961,
    cp: 12315,
    name: "Vallibona",
    provincia_id: 12
  },
  {
    id: 2962,
    cp: 12317,
    name: "Herbés",
    provincia_id: 12
  },
  {
    id: 2963,
    cp: 12318,
    name: "Portell de Morella",
    provincia_id: 12
  },
  {
    id: 2964,
    cp: 12318,
    name: "Cinctorres",
    provincia_id: 12
  },
  {
    id: 2965,
    cp: 12319,
    name: "Castell de Cabres",
    provincia_id: 12
  },
  {
    id: 2966,
    cp: 12320,
    name: "Sant Jordi San Jorge",
    provincia_id: 12
  },
  {
    id: 2967,
    cp: 12330,
    name: "Traiguera",
    provincia_id: 12
  },
  {
    id: 2968,
    cp: 12330,
    name: "San Rafael del Río",
    provincia_id: 12
  },
  {
    id: 2969,
    cp: 12340,
    name: "la Jana",
    provincia_id: 12
  },
  {
    id: 2970,
    cp: 12350,
    name: "Canet lo Roig",
    provincia_id: 12
  },
  {
    id: 2971,
    cp: 12360,
    name: "Xert",
    provincia_id: 12
  },
  {
    id: 2972,
    cp: 12370,
    name: "Xert",
    provincia_id: 12
  },
  {
    id: 2973,
    cp: 12400,
    name: "Segorbe",
    provincia_id: 12
  },
  {
    id: 2974,
    cp: 12410,
    name: "Altura",
    provincia_id: 12
  },
  {
    id: 2975,
    cp: 12412,
    name: "Segorbe",
    provincia_id: 12
  },
  {
    id: 2976,
    cp: 12412,
    name: "Geldo",
    provincia_id: 12
  },
  {
    id: 2977,
    cp: 12413,
    name: "Almedíjar",
    provincia_id: 12
  },
  {
    id: 2978,
    cp: 12413,
    name: "Castellnovo",
    provincia_id: 12
  },
  {
    id: 2979,
    cp: 12414,
    name: "Vall de Almonacid",
    provincia_id: 12
  },
  {
    id: 2980,
    cp: 12414,
    name: "Algimia de Almonacid",
    provincia_id: 12
  },
  {
    id: 2981,
    cp: 12414,
    name: "Segorbe",
    provincia_id: 12
  },
  {
    id: 2982,
    cp: 12415,
    name: "Gaibiel",
    provincia_id: 12
  },
  {
    id: 2983,
    cp: 12415,
    name: "Matet",
    provincia_id: 12
  },
  {
    id: 2984,
    cp: 12420,
    name: "Barracas",
    provincia_id: 12
  },
  {
    id: 2985,
    cp: 12428,
    name: "Villanueva de Viver",
    provincia_id: 12
  },
  {
    id: 2986,
    cp: 12428,
    name: "Fuente la Reina",
    provincia_id: 12
  },
  {
    id: 2987,
    cp: 12428,
    name: "Puebla de Arenoso",
    provincia_id: 12
  },
  {
    id: 2988,
    cp: 12429,
    name: "El Toro",
    provincia_id: 12
  },
  {
    id: 2989,
    cp: 12429,
    name: "Pina de Montalgrao",
    provincia_id: 12
  },
  {
    id: 2990,
    cp: 12430,
    name: "Bejís",
    provincia_id: 12
  },
  {
    id: 2991,
    cp: 12431,
    name: "Torás",
    provincia_id: 12
  },
  {
    id: 2992,
    cp: 12440,
    name: "Caudiel",
    provincia_id: 12
  },
  {
    id: 2993,
    cp: 12447,
    name: "Montán",
    provincia_id: 12
  },
  {
    id: 2994,
    cp: 12448,
    name: "Montanejos",
    provincia_id: 12
  },
  {
    id: 2995,
    cp: 12449,
    name: "Pavías",
    provincia_id: 12
  },
  {
    id: 2996,
    cp: 12449,
    name: "Higueras",
    provincia_id: 12
  },
  {
    id: 2997,
    cp: 12449,
    name: "Benafer",
    provincia_id: 12
  },
  {
    id: 2998,
    cp: 12450,
    name: "Jérica",
    provincia_id: 12
  },
  {
    id: 2999,
    cp: 12460,
    name: "Viver",
    provincia_id: 12
  },
  {
    id: 3000,
    cp: 12469,
    name: "Viver",
    provincia_id: 12
  },
  {
    id: 3001,
    cp: 12469,
    name: "Saca?et",
    provincia_id: 12
  },
  {
    id: 3002,
    cp: 12469,
    name: "Teresa",
    provincia_id: 12
  },
  {
    id: 3003,
    cp: 12470,
    name: "Navajas",
    provincia_id: 12
  },
  {
    id: 3004,
    cp: 12480,
    name: "Soneja",
    provincia_id: 12
  },
  {
    id: 3005,
    cp: 12489,
    name: "Sot de Ferrer",
    provincia_id: 12
  },
  {
    id: 3006,
    cp: 12490,
    name: "Azuébar",
    provincia_id: 12
  },
  {
    id: 3007,
    cp: 12499,
    name: "Chóvar",
    provincia_id: 12
  },
  {
    id: 3008,
    cp: 12500,
    name: "Vinar?s",
    provincia_id: 12
  },
  {
    id: 3009,
    cp: 12510,
    name: "San Rafael del Río",
    provincia_id: 12
  },
  {
    id: 3010,
    cp: 12511,
    name: "Rossell",
    provincia_id: 12
  },
  {
    id: 3011,
    cp: 12512,
    name: "Rossell",
    provincia_id: 12
  },
  {
    id: 3012,
    cp: 12513,
    name: "Catí",
    provincia_id: 12
  },
  {
    id: 3013,
    cp: 12520,
    name: "Nules",
    provincia_id: 12
  },
  {
    id: 3014,
    cp: 12526,
    name: "la Vilavella",
    provincia_id: 12
  },
  {
    id: 3015,
    cp: 12527,
    name: "Artana",
    provincia_id: 12
  },
  {
    id: 3016,
    cp: 12528,
    name: "Eslida",
    provincia_id: 12
  },
  {
    id: 3017,
    cp: 12529,
    name: "Nules",
    provincia_id: 12
  },
  {
    id: 3018,
    cp: 12530,
    name: "Borriana Burriana",
    provincia_id: 12
  },
  {
    id: 3019,
    cp: 12530,
    name: "Benicarló",
    provincia_id: 12
  },
  {
    id: 3020,
    cp: 12539,
    name: "les Alqueries Alquerías del Ni?o Perdido",
    provincia_id: 12
  },
  {
    id: 3021,
    cp: 12540,
    name: "Vila-real",
    provincia_id: 12
  },
  {
    id: 3022,
    cp: 12549,
    name: "Betxí",
    provincia_id: 12
  },
  {
    id: 3023,
    cp: 12550,
    name: "Almassora",
    provincia_id: 12
  },
  {
    id: 3024,
    cp: 12560,
    name: "Castellón de la Plana Castelló de la Plana",
    provincia_id: 12
  },
  {
    id: 3025,
    cp: 12560,
    name: "Benicasim Benic?ssim",
    provincia_id: 12
  },
  {
    id: 3026,
    cp: 12570,
    name: "Alcal? de Xivert",
    provincia_id: 12
  },
  {
    id: 3027,
    cp: 12578,
    name: "Cervera del Maestre",
    provincia_id: 12
  },
  {
    id: 3028,
    cp: 12579,
    name: "Alcal? de Xivert",
    provincia_id: 12
  },
  {
    id: 3029,
    cp: 12580,
    name: "Benicarló",
    provincia_id: 12
  },
  {
    id: 3030,
    cp: 12589,
    name: "C?lig",
    provincia_id: 12
  },
  {
    id: 3031,
    cp: 12590,
    name: "Almenara",
    provincia_id: 12
  },
  {
    id: 3032,
    cp: 12591,
    name: "la Llosa",
    provincia_id: 12
  },
  {
    id: 3033,
    cp: 12592,
    name: "Chilches Xilxes",
    provincia_id: 12
  },
  {
    id: 3034,
    cp: 12593,
    name: "Moncofa",
    provincia_id: 12
  },
  {
    id: 3035,
    cp: 12594,
    name: "Oropesa del Mar Orpesa",
    provincia_id: 12
  },
  {
    id: 3036,
    cp: 12595,
    name: "Cabanes",
    provincia_id: 12
  },
  {
    id: 3037,
    cp: 12596,
    name: "Torreblanca",
    provincia_id: 12
  },
  {
    id: 3038,
    cp: 12597,
    name: "Santa Magdalena de Pulpis",
    provincia_id: 12
  },
  {
    id: 3039,
    cp: 12598,
    name: "Peníscola Pe?íscola",
    provincia_id: 12
  },
  {
    id: 3040,
    cp: 12599,
    name: "Rossell",
    provincia_id: 12
  },
  {
    id: 3041,
    cp: 12599,
    name: "la Pobla de Benifass?",
    provincia_id: 12
  },
  {
    id: 3042,
    cp: 12600,
    name: "la Vall d'Uixó",
    provincia_id: 12
  },
  {
    id: 3043,
    cp: 12609,
    name: "Alfondeguilla",
    provincia_id: 12
  },
  {
    id: 3044,
    cp: 12952,
    name: "Chilches Xilxes",
    provincia_id: 12
  },
  {
    id: 3045,
    cp: 13001,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3046,
    cp: 13002,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3047,
    cp: 13003,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3048,
    cp: 13004,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3049,
    cp: 13005,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3050,
    cp: 13097,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3051,
    cp: 13100,
    name: "Piedrabuena",
    provincia_id: 13
  },
  {
    id: 3052,
    cp: 13107,
    name: "Alcolea de Calatrava",
    provincia_id: 13
  },
  {
    id: 3053,
    cp: 13108,
    name: "Luciana",
    provincia_id: 13
  },
  {
    id: 3054,
    cp: 13109,
    name: "Puebla de Don Rodrigo",
    provincia_id: 13
  },
  {
    id: 3055,
    cp: 13110,
    name: "Horcajo de los Montes",
    provincia_id: 13
  },
  {
    id: 3056,
    cp: 13114,
    name: "El Robledo",
    provincia_id: 13
  },
  {
    id: 3057,
    cp: 13115,
    name: "Alcoba",
    provincia_id: 13
  },
  {
    id: 3058,
    cp: 13116,
    name: "Alcoba",
    provincia_id: 13
  },
  {
    id: 3059,
    cp: 13117,
    name: "Anchuras",
    provincia_id: 13
  },
  {
    id: 3060,
    cp: 13118,
    name: "Anchuras",
    provincia_id: 13
  },
  {
    id: 3061,
    cp: 13118,
    name: "Porzuna",
    provincia_id: 13
  },
  {
    id: 3062,
    cp: 13120,
    name: "Porzuna",
    provincia_id: 13
  },
  {
    id: 3063,
    cp: 13129,
    name: "Porzuna",
    provincia_id: 13
  },
  {
    id: 3064,
    cp: 13130,
    name: "Fuencaliente",
    provincia_id: 13
  },
  {
    id: 3065,
    cp: 13140,
    name: "Fernán Caballero",
    provincia_id: 13
  },
  {
    id: 3066,
    cp: 13150,
    name: "Carrión de Calatrava",
    provincia_id: 13
  },
  {
    id: 3067,
    cp: 13160,
    name: "Torralba de Calatrava",
    provincia_id: 13
  },
  {
    id: 3068,
    cp: 13170,
    name: "Miguelturra",
    provincia_id: 13
  },
  {
    id: 3069,
    cp: 13179,
    name: "Pozuelo de Calatrava",
    provincia_id: 13
  },
  {
    id: 3070,
    cp: 13180,
    name: "Abenójar",
    provincia_id: 13
  },
  {
    id: 3071,
    cp: 13189,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3072,
    cp: 13190,
    name: "Miguelturra",
    provincia_id: 13
  },
  {
    id: 3073,
    cp: 13190,
    name: "Corral de Calatrava",
    provincia_id: 13
  },
  {
    id: 3074,
    cp: 13191,
    name: "Caracuel de Calatrava",
    provincia_id: 13
  },
  {
    id: 3075,
    cp: 13191,
    name: "Los Pozuelos de Calatrava",
    provincia_id: 13
  },
  {
    id: 3076,
    cp: 13192,
    name: "Cabezarados",
    provincia_id: 13
  },
  {
    id: 3077,
    cp: 13192,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3078,
    cp: 13193,
    name: "Arroba de los Montes",
    provincia_id: 13
  },
  {
    id: 3079,
    cp: 13193,
    name: "Navalpino",
    provincia_id: 13
  },
  {
    id: 3080,
    cp: 13193,
    name: "Fontanarejo",
    provincia_id: 13
  },
  {
    id: 3081,
    cp: 13194,
    name: "Porzuna",
    provincia_id: 13
  },
  {
    id: 3082,
    cp: 13194,
    name: "Retuerta del Bullaque",
    provincia_id: 13
  },
  {
    id: 3083,
    cp: 13194,
    name: "Navas de Estena",
    provincia_id: 13
  },
  {
    id: 3084,
    cp: 13194,
    name: "Malagón",
    provincia_id: 13
  },
  {
    id: 3085,
    cp: 13195,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3086,
    cp: 13195,
    name: "Poblete",
    provincia_id: 13
  },
  {
    id: 3087,
    cp: 13196,
    name: "Piedrabuena",
    provincia_id: 13
  },
  {
    id: 3088,
    cp: 13196,
    name: "Picón",
    provincia_id: 13
  },
  {
    id: 3089,
    cp: 13196,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3090,
    cp: 13197,
    name: "Ciudad Real",
    provincia_id: 13
  },
  {
    id: 3091,
    cp: 13200,
    name: "Manzanares",
    provincia_id: 13
  },
  {
    id: 3092,
    cp: 13210,
    name: "Villarta de San Juan",
    provincia_id: 13
  },
  {
    id: 3093,
    cp: 13220,
    name: "Llanos del Caudillo",
    provincia_id: 13
  },
  {
    id: 3094,
    cp: 13230,
    name: "Membrilla",
    provincia_id: 13
  },
  {
    id: 3095,
    cp: 13240,
    name: "La Solana",
    provincia_id: 13
  },
  {
    id: 3096,
    cp: 13247,
    name: "San Carlos del Valle",
    provincia_id: 13
  },
  {
    id: 3097,
    cp: 13248,
    name: "Alhambra",
    provincia_id: 13
  },
  {
    id: 3098,
    cp: 13249,
    name: "Ruidera",
    provincia_id: 13
  },
  {
    id: 3099,
    cp: 13250,
    name: "Daimiel",
    provincia_id: 13
  },
  {
    id: 3100,
    cp: 13260,
    name: "Bola?os de Calatrava",
    provincia_id: 13
  },
  {
    id: 3101,
    cp: 13260,
    name: "Almagro",
    provincia_id: 13
  },
  {
    id: 3102,
    cp: 13270,
    name: "Almagro",
    provincia_id: 13
  },
  {
    id: 3103,
    cp: 13279,
    name: "Valenzuela de Calatrava",
    provincia_id: 13
  },
  {
    id: 3104,
    cp: 13300,
    name: "Valdepe?as",
    provincia_id: 13
  },
  {
    id: 3105,
    cp: 13300,
    name: "Alcázar de San Juan",
    provincia_id: 13
  },
  {
    id: 3106,
    cp: 13310,
    name: "Valdepe?as",
    provincia_id: 13
  },
  {
    id: 3107,
    cp: 13320,
    name: "Villanueva de los Infantes",
    provincia_id: 13
  },
  {
    id: 3108,
    cp: 13326,
    name: "Montiel",
    provincia_id: 13
  },
  {
    id: 3109,
    cp: 13327,
    name: "Santa Cruz de los Cá?amos",
    provincia_id: 13
  },
  {
    id: 3110,
    cp: 13328,
    name: "Almedina",
    provincia_id: 13
  },
  {
    id: 3111,
    cp: 13329,
    name: "Carrizosa",
    provincia_id: 13
  },
  {
    id: 3112,
    cp: 13330,
    name: "Villanueva de la Fuente",
    provincia_id: 13
  },
  {
    id: 3113,
    cp: 13331,
    name: "Villahermosa",
    provincia_id: 13
  },
  {
    id: 3114,
    cp: 13332,
    name: "Villahermosa",
    provincia_id: 13
  },
  {
    id: 3115,
    cp: 13333,
    name: "Fuenllana",
    provincia_id: 13
  },
  {
    id: 3116,
    cp: 13340,
    name: "Albaladejo",
    provincia_id: 13
  },
  {
    id: 3117,
    cp: 13341,
    name: "Terrinches",
    provincia_id: 13
  },
  {
    id: 3118,
    cp: 13342,
    name: "Puebla del Príncipe",
    provincia_id: 13
  },
  {
    id: 3119,
    cp: 13343,
    name: "Villamanrique",
    provincia_id: 13
  },
  {
    id: 3120,
    cp: 13344,
    name: "Torre de Juan Abad",
    provincia_id: 13
  },
  {
    id: 3121,
    cp: 13345,
    name: "Cózar",
    provincia_id: 13
  },
  {
    id: 3122,
    cp: 13350,
    name: "Moral de Calatrava",
    provincia_id: 13
  },
  {
    id: 3123,
    cp: 13360,
    name: "Granátula de Calatrava",
    provincia_id: 13
  },
  {
    id: 3124,
    cp: 13370,
    name: "Calzada de Calatrava",
    provincia_id: 13
  },
  {
    id: 3125,
    cp: 13379,
    name: "Villanueva de San Carlos",
    provincia_id: 13
  },
  {
    id: 3126,
    cp: 13380,
    name: "Aldea del Rey",
    provincia_id: 13
  },
  {
    id: 3127,
    cp: 13390,
    name: "Alhambra",
    provincia_id: 13
  },
  {
    id: 3128,
    cp: 13391,
    name: "Alcubillas",
    provincia_id: 13
  },
  {
    id: 3129,
    cp: 13400,
    name: "Almadén",
    provincia_id: 13
  },
  {
    id: 3130,
    cp: 13410,
    name: "Agudo",
    provincia_id: 13
  },
  {
    id: 3131,
    cp: 13411,
    name: "Valdemanco del Esteras",
    provincia_id: 13
  },
  {
    id: 3132,
    cp: 13412,
    name: "Chillón",
    provincia_id: 13
  },
  {
    id: 3133,
    cp: 13413,
    name: "Alamillo",
    provincia_id: 13
  },
  {
    id: 3134,
    cp: 13414,
    name: "Almadenejos",
    provincia_id: 13
  },
  {
    id: 3135,
    cp: 13414,
    name: "Saceruela",
    provincia_id: 13
  },
  {
    id: 3136,
    cp: 13415,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3137,
    cp: 13420,
    name: "Malagón",
    provincia_id: 13
  },
  {
    id: 3138,
    cp: 13427,
    name: "Los Cortijos",
    provincia_id: 13
  },
  {
    id: 3139,
    cp: 13428,
    name: "Fuente el Fresno",
    provincia_id: 13
  },
  {
    id: 3140,
    cp: 13428,
    name: "Malagón",
    provincia_id: 13
  },
  {
    id: 3141,
    cp: 13429,
    name: "Malagón",
    provincia_id: 13
  },
  {
    id: 3142,
    cp: 13430,
    name: "Ca?ada de Calatrava",
    provincia_id: 13
  },
  {
    id: 3143,
    cp: 13431,
    name: "Villar del Pozo",
    provincia_id: 13
  },
  {
    id: 3144,
    cp: 13432,
    name: "Ballesteros de Calatrava",
    provincia_id: 13
  },
  {
    id: 3145,
    cp: 13440,
    name: "Argamasilla de Calatrava",
    provincia_id: 13
  },
  {
    id: 3146,
    cp: 13449,
    name: "Brazatortas",
    provincia_id: 13
  },
  {
    id: 3147,
    cp: 13450,
    name: "Brazatortas",
    provincia_id: 13
  },
  {
    id: 3148,
    cp: 13459,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3149,
    cp: 13460,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3150,
    cp: 13470,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3151,
    cp: 13473,
    name: "Abenójar",
    provincia_id: 13
  },
  {
    id: 3152,
    cp: 13473,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3153,
    cp: 13480,
    name: "Almadenejos",
    provincia_id: 13
  },
  {
    id: 3154,
    cp: 13490,
    name: "Guadalmez",
    provincia_id: 13
  },
  {
    id: 3155,
    cp: 13499,
    name: "Guadalmez",
    provincia_id: 13
  },
  {
    id: 3156,
    cp: 13500,
    name: "Puertollano",
    provincia_id: 13
  },
  {
    id: 3157,
    cp: 13580,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3158,
    cp: 13590,
    name: "Hinojosas de Calatrava",
    provincia_id: 13
  },
  {
    id: 3159,
    cp: 13591,
    name: "Cabezarrubias del Puerto",
    provincia_id: 13
  },
  {
    id: 3160,
    cp: 13592,
    name: "Mestanza",
    provincia_id: 13
  },
  {
    id: 3161,
    cp: 13593,
    name: "Solana del Pino",
    provincia_id: 13
  },
  {
    id: 3162,
    cp: 13594,
    name: "Mestanza",
    provincia_id: 13
  },
  {
    id: 3163,
    cp: 13595,
    name: "Villamayor de Calatrava",
    provincia_id: 13
  },
  {
    id: 3164,
    cp: 13596,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3165,
    cp: 13597,
    name: "Puertollano",
    provincia_id: 13
  },
  {
    id: 3166,
    cp: 13598,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3167,
    cp: 13600,
    name: "Alcázar de San Juan",
    provincia_id: 13
  },
  {
    id: 3168,
    cp: 13610,
    name: "Campo de Criptana",
    provincia_id: 13
  },
  {
    id: 3169,
    cp: 13619,
    name: "Arenales de San Gregorio",
    provincia_id: 13
  },
  {
    id: 3170,
    cp: 13620,
    name: "Pedro Mu?oz",
    provincia_id: 13
  },
  {
    id: 3171,
    cp: 13629,
    name: "Tomelloso",
    provincia_id: 13
  },
  {
    id: 3172,
    cp: 13630,
    name: "Socuéllamos",
    provincia_id: 13
  },
  {
    id: 3173,
    cp: 13640,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3174,
    cp: 13640,
    name: "Herencia",
    provincia_id: 13
  },
  {
    id: 3175,
    cp: 13650,
    name: "Puerto Lápice",
    provincia_id: 13
  },
  {
    id: 3176,
    cp: 13660,
    name: "Las Labores",
    provincia_id: 13
  },
  {
    id: 3177,
    cp: 13670,
    name: "Villarrubia de los Ojos",
    provincia_id: 13
  },
  {
    id: 3178,
    cp: 13679,
    name: "Arenas de San Juan",
    provincia_id: 13
  },
  {
    id: 3179,
    cp: 13680,
    name: "Fuente el Fresno",
    provincia_id: 13
  },
  {
    id: 3180,
    cp: 13690,
    name: "Alcázar de San Juan",
    provincia_id: 13
  },
  {
    id: 3181,
    cp: 13700,
    name: "Tomelloso",
    provincia_id: 13
  },
  {
    id: 3182,
    cp: 13710,
    name: "Argamasilla de Alba",
    provincia_id: 13
  },
  {
    id: 3183,
    cp: 13720,
    name: "Alcázar de San Juan",
    provincia_id: 13
  },
  {
    id: 3184,
    cp: 13730,
    name: "Santa Cruz de Mudela",
    provincia_id: 13
  },
  {
    id: 3185,
    cp: 13738,
    name: "Viso del Marqués",
    provincia_id: 13
  },
  {
    id: 3186,
    cp: 13739,
    name: "Viso del Marqués",
    provincia_id: 13
  },
  {
    id: 3187,
    cp: 13739,
    name: "Calzada de Calatrava",
    provincia_id: 13
  },
  {
    id: 3188,
    cp: 13740,
    name: "Torrenueva",
    provincia_id: 13
  },
  {
    id: 3189,
    cp: 13750,
    name: "Castellar de Santiago",
    provincia_id: 13
  },
  {
    id: 3190,
    cp: 13760,
    name: "Almuradiel",
    provincia_id: 13
  },
  {
    id: 3191,
    cp: 13768,
    name: "Almuradiel",
    provincia_id: 13
  },
  {
    id: 3192,
    cp: 13768,
    name: "Viso del Marqués",
    provincia_id: 13
  },
  {
    id: 3193,
    cp: 13770,
    name: "Viso del Marqués",
    provincia_id: 13
  },
  {
    id: 3194,
    cp: 13779,
    name: "San Lorenzo de Calatrava",
    provincia_id: 13
  },
  {
    id: 3195,
    cp: 13779,
    name: "Calzada de Calatrava",
    provincia_id: 13
  },
  {
    id: 3196,
    cp: 14001,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3197,
    cp: 14002,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3198,
    cp: 14003,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3199,
    cp: 14004,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3200,
    cp: 14005,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3201,
    cp: 14006,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3202,
    cp: 14007,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3203,
    cp: 14008,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3204,
    cp: 14009,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3205,
    cp: 14010,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3206,
    cp: 14011,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3207,
    cp: 14012,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3208,
    cp: 14013,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3209,
    cp: 14014,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3210,
    cp: 14015,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3211,
    cp: 14016,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3212,
    cp: 14029,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3213,
    cp: 14045,
    name: "Carde?a",
    provincia_id: 14
  },
  {
    id: 3214,
    cp: 14071,
    name: "Villafranca de Córdoba",
    provincia_id: 14
  },
  {
    id: 3215,
    cp: 14100,
    name: "La Carlota",
    provincia_id: 14
  },
  {
    id: 3216,
    cp: 14110,
    name: "Fuente Palmera",
    provincia_id: 14
  },
  {
    id: 3217,
    cp: 14111,
    name: "La Carlota",
    provincia_id: 14
  },
  {
    id: 3218,
    cp: 14112,
    name: "Fuente Palmera",
    provincia_id: 14
  },
  {
    id: 3219,
    cp: 14113,
    name: "Fuente Palmera",
    provincia_id: 14
  },
  {
    id: 3220,
    cp: 14115,
    name: "El Carpio",
    provincia_id: 14
  },
  {
    id: 3221,
    cp: 14115,
    name: "Fuente Palmera",
    provincia_id: 14
  },
  {
    id: 3222,
    cp: 14120,
    name: "Fuente Palmera",
    provincia_id: 14
  },
  {
    id: 3223,
    cp: 14129,
    name: "Fuente Palmera",
    provincia_id: 14
  },
  {
    id: 3224,
    cp: 14129,
    name: "Hornachuelos",
    provincia_id: 14
  },
  {
    id: 3225,
    cp: 14130,
    name: "Guadalcázar",
    provincia_id: 14
  },
  {
    id: 3226,
    cp: 14140,
    name: "La Victoria",
    provincia_id: 14
  },
  {
    id: 3227,
    cp: 14150,
    name: "San Sebastián de los Ballesteros",
    provincia_id: 14
  },
  {
    id: 3228,
    cp: 14190,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3229,
    cp: 14191,
    name: "La Carlota",
    provincia_id: 14
  },
  {
    id: 3230,
    cp: 14192,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3231,
    cp: 14193,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3232,
    cp: 14193,
    name: "La Carlota",
    provincia_id: 14
  },
  {
    id: 3233,
    cp: 14199,
    name: "Lucena",
    provincia_id: 14
  },
  {
    id: 3234,
    cp: 14200,
    name: "Pe?arroya-Pueblonuevo",
    provincia_id: 14
  },
  {
    id: 3235,
    cp: 14206,
    name: "Valsequillo",
    provincia_id: 14
  },
  {
    id: 3236,
    cp: 14207,
    name: "La Granjuela",
    provincia_id: 14
  },
  {
    id: 3237,
    cp: 14208,
    name: "Los Blázquez",
    provincia_id: 14
  },
  {
    id: 3238,
    cp: 14209,
    name: "Hornachuelos",
    provincia_id: 14
  },
  {
    id: 3239,
    cp: 14209,
    name: "Fuente Obejuna",
    provincia_id: 14
  },
  {
    id: 3240,
    cp: 14209,
    name: "Belmez",
    provincia_id: 14
  },
  {
    id: 3241,
    cp: 14210,
    name: "Fuente Palmera",
    provincia_id: 14
  },
  {
    id: 3242,
    cp: 14210,
    name: "Villaharta",
    provincia_id: 14
  },
  {
    id: 3243,
    cp: 14210,
    name: "Espiel",
    provincia_id: 14
  },
  {
    id: 3244,
    cp: 14220,
    name: "Espiel",
    provincia_id: 14
  },
  {
    id: 3245,
    cp: 14230,
    name: "Villanueva del Rey",
    provincia_id: 14
  },
  {
    id: 3246,
    cp: 14240,
    name: "Belmez",
    provincia_id: 14
  },
  {
    id: 3247,
    cp: 14248,
    name: "Belmez",
    provincia_id: 14
  },
  {
    id: 3248,
    cp: 14248,
    name: "Fuente Obejuna",
    provincia_id: 14
  },
  {
    id: 3249,
    cp: 14249,
    name: "Fuente Obejuna",
    provincia_id: 14
  },
  {
    id: 3250,
    cp: 14249,
    name: "Belmez",
    provincia_id: 14
  },
  {
    id: 3251,
    cp: 14250,
    name: "Villanueva del Duque",
    provincia_id: 14
  },
  {
    id: 3252,
    cp: 14260,
    name: "Fuente la Lancha",
    provincia_id: 14
  },
  {
    id: 3253,
    cp: 14270,
    name: "Hinojosa del Duque",
    provincia_id: 14
  },
  {
    id: 3254,
    cp: 14280,
    name: "Belalcázar",
    provincia_id: 14
  },
  {
    id: 3255,
    cp: 14280,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3256,
    cp: 14290,
    name: "Fuente Obejuna",
    provincia_id: 14
  },
  {
    id: 3257,
    cp: 14297,
    name: "Fuente Obejuna",
    provincia_id: 14
  },
  {
    id: 3258,
    cp: 14298,
    name: "Fuente Obejuna",
    provincia_id: 14
  },
  {
    id: 3259,
    cp: 14299,
    name: "Fuente Obejuna",
    provincia_id: 14
  },
  {
    id: 3260,
    cp: 14300,
    name: "Villaviciosa de Córdoba",
    provincia_id: 14
  },
  {
    id: 3261,
    cp: 14310,
    name: "Obejo",
    provincia_id: 14
  },
  {
    id: 3262,
    cp: 14320,
    name: "Obejo",
    provincia_id: 14
  },
  {
    id: 3263,
    cp: 14320,
    name: "Espiel",
    provincia_id: 14
  },
  {
    id: 3264,
    cp: 14320,
    name: "Villaviciosa de Córdoba",
    provincia_id: 14
  },
  {
    id: 3265,
    cp: 14340,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3266,
    cp: 14350,
    name: "Obejo",
    provincia_id: 14
  },
  {
    id: 3267,
    cp: 14350,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3268,
    cp: 14400,
    name: "Pozoblanco",
    provincia_id: 14
  },
  {
    id: 3269,
    cp: 14410,
    name: "Torrecampo",
    provincia_id: 14
  },
  {
    id: 3270,
    cp: 14412,
    name: "Pedroche",
    provincia_id: 14
  },
  {
    id: 3271,
    cp: 14413,
    name: "El Guijo",
    provincia_id: 14
  },
  {
    id: 3272,
    cp: 14420,
    name: "Villafranca de Córdoba",
    provincia_id: 14
  },
  {
    id: 3273,
    cp: 14430,
    name: "Adamuz",
    provincia_id: 14
  },
  {
    id: 3274,
    cp: 14439,
    name: "Adamuz",
    provincia_id: 14
  },
  {
    id: 3275,
    cp: 14440,
    name: "Carde?a",
    provincia_id: 14
  },
  {
    id: 3276,
    cp: 14440,
    name: "Villanueva de Córdoba",
    provincia_id: 14
  },
  {
    id: 3277,
    cp: 14445,
    name: "Belmez",
    provincia_id: 14
  },
  {
    id: 3278,
    cp: 14445,
    name: "Carde?a",
    provincia_id: 14
  },
  {
    id: 3279,
    cp: 14446,
    name: "Carde?a",
    provincia_id: 14
  },
  {
    id: 3280,
    cp: 14447,
    name: "Carde?a",
    provincia_id: 14
  },
  {
    id: 3281,
    cp: 14448,
    name: "Conquista",
    provincia_id: 14
  },
  {
    id: 3282,
    cp: 14449,
    name: "Almodóvar del Campo",
    provincia_id: 13
  },
  {
    id: 3283,
    cp: 14450,
    name: "A?ora",
    provincia_id: 14
  },
  {
    id: 3284,
    cp: 14460,
    name: "Dos Torres",
    provincia_id: 14
  },
  {
    id: 3285,
    cp: 14470,
    name: "Villaviciosa de Córdoba",
    provincia_id: 14
  },
  {
    id: 3286,
    cp: 14470,
    name: "El Viso",
    provincia_id: 14
  },
  {
    id: 3287,
    cp: 14480,
    name: "Alcaracejos",
    provincia_id: 14
  },
  {
    id: 3288,
    cp: 14490,
    name: "Villaralto",
    provincia_id: 14
  },
  {
    id: 3289,
    cp: 14491,
    name: "Santa Eufemia",
    provincia_id: 14
  },
  {
    id: 3290,
    cp: 14500,
    name: "Puente Genil",
    provincia_id: 14
  },
  {
    id: 3291,
    cp: 14510,
    name: "Moriles",
    provincia_id: 14
  },
  {
    id: 3292,
    cp: 14511,
    name: "Lucena",
    provincia_id: 14
  },
  {
    id: 3293,
    cp: 14512,
    name: "Puente Genil",
    provincia_id: 14
  },
  {
    id: 3294,
    cp: 14520,
    name: "Montemayor",
    provincia_id: 14
  },
  {
    id: 3295,
    cp: 14520,
    name: "Fernán-Nú?ez",
    provincia_id: 14
  },
  {
    id: 3296,
    cp: 14530,
    name: "Montemayor",
    provincia_id: 14
  },
  {
    id: 3297,
    cp: 14540,
    name: "La Rambla",
    provincia_id: 14
  },
  {
    id: 3298,
    cp: 14546,
    name: "Santaella",
    provincia_id: 14
  },
  {
    id: 3299,
    cp: 14547,
    name: "Santaella",
    provincia_id: 14
  },
  {
    id: 3300,
    cp: 14548,
    name: "Montalbán de Córdoba",
    provincia_id: 14
  },
  {
    id: 3301,
    cp: 14549,
    name: "Santaella",
    provincia_id: 14
  },
  {
    id: 3302,
    cp: 14550,
    name: "Montilla",
    provincia_id: 14
  },
  {
    id: 3303,
    cp: 14550,
    name: "A?ora",
    provincia_id: 14
  },
  {
    id: 3304,
    cp: 14600,
    name: "Montoro",
    provincia_id: 14
  },
  {
    id: 3305,
    cp: 14610,
    name: "Adamuz",
    provincia_id: 14
  },
  {
    id: 3306,
    cp: 14610,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3307,
    cp: 14620,
    name: "El Carpio",
    provincia_id: 14
  },
  {
    id: 3308,
    cp: 14630,
    name: "Pedro Abad",
    provincia_id: 14
  },
  {
    id: 3309,
    cp: 14640,
    name: "Villa del Río",
    provincia_id: 14
  },
  {
    id: 3310,
    cp: 14650,
    name: "Bujalance",
    provincia_id: 14
  },
  {
    id: 3311,
    cp: 14656,
    name: "Bujalance",
    provincia_id: 14
  },
  {
    id: 3312,
    cp: 14659,
    name: "Bujalance",
    provincia_id: 14
  },
  {
    id: 3313,
    cp: 14660,
    name: "Ca?ete de las Torres",
    provincia_id: 14
  },
  {
    id: 3314,
    cp: 14670,
    name: "Valenzuela",
    provincia_id: 14
  },
  {
    id: 3315,
    cp: 14700,
    name: "Palma del Río",
    provincia_id: 14
  },
  {
    id: 3316,
    cp: 14709,
    name: "Hornachuelos",
    provincia_id: 14
  },
  {
    id: 3317,
    cp: 14709,
    name: "Palma del Río",
    provincia_id: 14
  },
  {
    id: 3318,
    cp: 14710,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3319,
    cp: 14711,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3320,
    cp: 14719,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3321,
    cp: 14720,
    name: "Almodóvar del Río",
    provincia_id: 14
  },
  {
    id: 3322,
    cp: 14729,
    name: "Almodóvar del Río",
    provincia_id: 14
  },
  {
    id: 3323,
    cp: 14730,
    name: "Palma del Río",
    provincia_id: 14
  },
  {
    id: 3324,
    cp: 14730,
    name: "Posadas",
    provincia_id: 14
  },
  {
    id: 3325,
    cp: 14739,
    name: "Posadas",
    provincia_id: 14
  },
  {
    id: 3326,
    cp: 14740,
    name: "Hornachuelos",
    provincia_id: 14
  },
  {
    id: 3327,
    cp: 14749,
    name: "Palma del Río",
    provincia_id: 14
  },
  {
    id: 3328,
    cp: 14800,
    name: "Priego de Córdoba",
    provincia_id: 14
  },
  {
    id: 3329,
    cp: 14800,
    name: "Luque",
    provincia_id: 14
  },
  {
    id: 3330,
    cp: 14810,
    name: "Carcabuey",
    provincia_id: 14
  },
  {
    id: 3331,
    cp: 14811,
    name: "Priego de Córdoba",
    provincia_id: 14
  },
  {
    id: 3332,
    cp: 14811,
    name: "Cabra",
    provincia_id: 14
  },
  {
    id: 3333,
    cp: 14811,
    name: "Carcabuey",
    provincia_id: 14
  },
  {
    id: 3334,
    cp: 14812,
    name: "Almedinilla",
    provincia_id: 14
  },
  {
    id: 3335,
    cp: 14813,
    name: "Almedinilla",
    provincia_id: 14
  },
  {
    id: 3336,
    cp: 14814,
    name: "Priego de Córdoba",
    provincia_id: 14
  },
  {
    id: 3337,
    cp: 14815,
    name: "Priego de Córdoba",
    provincia_id: 14
  },
  {
    id: 3338,
    cp: 14815,
    name: "Fuente-Tójar",
    provincia_id: 14
  },
  {
    id: 3339,
    cp: 14816,
    name: "Carcabuey",
    provincia_id: 14
  },
  {
    id: 3340,
    cp: 14816,
    name: "Priego de Córdoba",
    provincia_id: 14
  },
  {
    id: 3341,
    cp: 14817,
    name: "Priego de Córdoba",
    provincia_id: 14
  },
  {
    id: 3342,
    cp: 14820,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3343,
    cp: 14830,
    name: "Espejo",
    provincia_id: 14
  },
  {
    id: 3344,
    cp: 14840,
    name: "Castro del Río",
    provincia_id: 14
  },
  {
    id: 3345,
    cp: 14850,
    name: "Baena",
    provincia_id: 14
  },
  {
    id: 3346,
    cp: 14850,
    name: "Lucena",
    provincia_id: 14
  },
  {
    id: 3347,
    cp: 14852,
    name: "Nueva Carteya",
    provincia_id: 14
  },
  {
    id: 3348,
    cp: 14857,
    name: "Castro del Río",
    provincia_id: 14
  },
  {
    id: 3349,
    cp: 14857,
    name: "Nueva Carteya",
    provincia_id: 14
  },
  {
    id: 3350,
    cp: 14858,
    name: "Castro del Río",
    provincia_id: 14
  },
  {
    id: 3351,
    cp: 14859,
    name: "Baena",
    provincia_id: 14
  },
  {
    id: 3352,
    cp: 14860,
    name: "Do?a Mencía",
    provincia_id: 14
  },
  {
    id: 3353,
    cp: 14870,
    name: "Zuheros",
    provincia_id: 14
  },
  {
    id: 3354,
    cp: 14880,
    name: "Luque",
    provincia_id: 14
  },
  {
    id: 3355,
    cp: 14889,
    name: "Luque",
    provincia_id: 14
  },
  {
    id: 3356,
    cp: 14900,
    name: "Lucena",
    provincia_id: 14
  },
  {
    id: 3357,
    cp: 14910,
    name: "Benamejí",
    provincia_id: 14
  },
  {
    id: 3358,
    cp: 14911,
    name: "Lucena",
    provincia_id: 14
  },
  {
    id: 3359,
    cp: 14912,
    name: "Córdoba",
    provincia_id: 14
  },
  {
    id: 3360,
    cp: 14913,
    name: "Lucena",
    provincia_id: 14
  },
  {
    id: 3361,
    cp: 14913,
    name: "Encinas Reales",
    provincia_id: 14
  },
  {
    id: 3362,
    cp: 14914,
    name: "Palenciana",
    provincia_id: 14
  },
  {
    id: 3363,
    cp: 14915,
    name: "Benamejí",
    provincia_id: 14
  },
  {
    id: 3364,
    cp: 14920,
    name: "Aguilar de la Frontera",
    provincia_id: 14
  },
  {
    id: 3365,
    cp: 14930,
    name: "Cabra",
    provincia_id: 14
  },
  {
    id: 3366,
    cp: 14930,
    name: "Monturque",
    provincia_id: 14
  },
  {
    id: 3367,
    cp: 14940,
    name: "Villa del Río",
    provincia_id: 14
  },
  {
    id: 3368,
    cp: 14940,
    name: "Cabra",
    provincia_id: 14
  },
  {
    id: 3369,
    cp: 14941,
    name: "Santa Eufemia",
    provincia_id: 14
  },
  {
    id: 3370,
    cp: 14949,
    name: "Cabra",
    provincia_id: 14
  },
  {
    id: 3371,
    cp: 14950,
    name: "Hornachuelos",
    provincia_id: 14
  },
  {
    id: 3372,
    cp: 14950,
    name: "Rute",
    provincia_id: 14
  },
  {
    id: 3373,
    cp: 14950,
    name: "Baena",
    provincia_id: 14
  },
  {
    id: 3374,
    cp: 14960,
    name: "Rute",
    provincia_id: 14
  },
  {
    id: 3375,
    cp: 14970,
    name: "Iznájar",
    provincia_id: 14
  },
  {
    id: 3376,
    cp: 14978,
    name: "Iznájar",
    provincia_id: 14
  },
  {
    id: 3377,
    cp: 14979,
    name: "Iznájar",
    provincia_id: 14
  },
  {
    id: 3378,
    cp: 15001,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3379,
    cp: 15002,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3380,
    cp: 15003,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3381,
    cp: 15004,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3382,
    cp: 15005,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3383,
    cp: 15006,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3384,
    cp: 15007,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3385,
    cp: 15008,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3386,
    cp: 15008,
    name: "Arteixo",
    provincia_id: 15
  },
  {
    id: 3387,
    cp: 15009,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3388,
    cp: 15010,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3389,
    cp: 15011,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3390,
    cp: 15100,
    name: "Carballo",
    provincia_id: 15
  },
  {
    id: 3391,
    cp: 15102,
    name: "Carballo",
    provincia_id: 15
  },
  {
    id: 3392,
    cp: 15105,
    name: "A Laracha",
    provincia_id: 15
  },
  {
    id: 3393,
    cp: 15105,
    name: "Carballo",
    provincia_id: 15
  },
  {
    id: 3394,
    cp: 15106,
    name: "Carballo",
    provincia_id: 15
  },
  {
    id: 3395,
    cp: 15107,
    name: "Carballo",
    provincia_id: 15
  },
  {
    id: 3396,
    cp: 15108,
    name: "Carballo",
    provincia_id: 15
  },
  {
    id: 3397,
    cp: 15109,
    name: "Carballo",
    provincia_id: 15
  },
  {
    id: 3398,
    cp: 15110,
    name: "Ponteceso",
    provincia_id: 15
  },
  {
    id: 3399,
    cp: 15110,
    name: "Cabana de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3400,
    cp: 15111,
    name: "Malpica de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3401,
    cp: 15112,
    name: "Malpica de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3402,
    cp: 15113,
    name: "Malpica de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3403,
    cp: 15114,
    name: "Ponteceso",
    provincia_id: 15
  },
  {
    id: 3404,
    cp: 15115,
    name: "Cabana de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3405,
    cp: 15116,
    name: "Cabana de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3406,
    cp: 15117,
    name: "Laxe",
    provincia_id: 15
  },
  {
    id: 3407,
    cp: 15118,
    name: "Laxe",
    provincia_id: 15
  },
  {
    id: 3408,
    cp: 15119,
    name: "Cabana de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3409,
    cp: 15121,
    name: "Vimianzo",
    provincia_id: 15
  },
  {
    id: 3410,
    cp: 15121,
    name: "Camari?as",
    provincia_id: 15
  },
  {
    id: 3411,
    cp: 15122,
    name: "Camari?as",
    provincia_id: 15
  },
  {
    id: 3412,
    cp: 15123,
    name: "Camari?as",
    provincia_id: 15
  },
  {
    id: 3413,
    cp: 15124,
    name: "Muxía",
    provincia_id: 15
  },
  {
    id: 3414,
    cp: 15125,
    name: "Muxía",
    provincia_id: 15
  },
  {
    id: 3415,
    cp: 15126,
    name: "Muxía",
    provincia_id: 15
  },
  {
    id: 3416,
    cp: 15126,
    name: "Vimianzo",
    provincia_id: 15
  },
  {
    id: 3417,
    cp: 15127,
    name: "Vimianzo",
    provincia_id: 15
  },
  {
    id: 3418,
    cp: 15128,
    name: "Vimianzo",
    provincia_id: 15
  },
  {
    id: 3419,
    cp: 15129,
    name: "Vimianzo",
    provincia_id: 15
  },
  {
    id: 3420,
    cp: 15130,
    name: "Corcubión",
    provincia_id: 15
  },
  {
    id: 3421,
    cp: 15137,
    name: "Corcubión",
    provincia_id: 15
  },
  {
    id: 3422,
    cp: 15138,
    name: "Cee",
    provincia_id: 15
  },
  {
    id: 3423,
    cp: 15139,
    name: "Culleredo",
    provincia_id: 15
  },
  {
    id: 3424,
    cp: 15140,
    name: "Arteixo",
    provincia_id: 15
  },
  {
    id: 3425,
    cp: 15141,
    name: "Arteixo",
    provincia_id: 15
  },
  {
    id: 3426,
    cp: 15142,
    name: "Arteixo",
    provincia_id: 15
  },
  {
    id: 3427,
    cp: 15144,
    name: "Arteixo",
    provincia_id: 15
  },
  {
    id: 3428,
    cp: 15145,
    name: "A Laracha",
    provincia_id: 15
  },
  {
    id: 3429,
    cp: 15146,
    name: "A Laracha",
    provincia_id: 15
  },
  {
    id: 3430,
    cp: 15147,
    name: "Coristanco",
    provincia_id: 15
  },
  {
    id: 3431,
    cp: 15148,
    name: "Coristanco",
    provincia_id: 15
  },
  {
    id: 3432,
    cp: 15149,
    name: "Cabana de Berganti?os",
    provincia_id: 15
  },
  {
    id: 3433,
    cp: 15150,
    name: "Vimianzo",
    provincia_id: 15
  },
  {
    id: 3434,
    cp: 15150,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3435,
    cp: 15151,
    name: "Dumbría",
    provincia_id: 15
  },
  {
    id: 3436,
    cp: 15152,
    name: "Dumbría",
    provincia_id: 15
  },
  {
    id: 3437,
    cp: 15153,
    name: "Fisterra",
    provincia_id: 15
  },
  {
    id: 3438,
    cp: 15154,
    name: "Fisterra",
    provincia_id: 15
  },
  {
    id: 3439,
    cp: 15155,
    name: "Fisterra",
    provincia_id: 15
  },
  {
    id: 3440,
    cp: 15160,
    name: "Sada",
    provincia_id: 15
  },
  {
    id: 3441,
    cp: 15165,
    name: "Bergondo",
    provincia_id: 15
  },
  {
    id: 3442,
    cp: 15166,
    name: "Bergondo",
    provincia_id: 15
  },
  {
    id: 3443,
    cp: 15167,
    name: "Bergondo",
    provincia_id: 15
  },
  {
    id: 3444,
    cp: 15168,
    name: "Sada",
    provincia_id: 15
  },
  {
    id: 3445,
    cp: 15169,
    name: "Sada",
    provincia_id: 15
  },
  {
    id: 3446,
    cp: 15170,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3447,
    cp: 15171,
    name: "Oleiros",
    provincia_id: 15
  },
  {
    id: 3448,
    cp: 15172,
    name: "Oleiros",
    provincia_id: 15
  },
  {
    id: 3449,
    cp: 15173,
    name: "Oleiros",
    provincia_id: 15
  },
  {
    id: 3450,
    cp: 15174,
    name: "Culleredo",
    provincia_id: 15
  },
  {
    id: 3451,
    cp: 15175,
    name: "Carral",
    provincia_id: 15
  },
  {
    id: 3452,
    cp: 15176,
    name: "Oleiros",
    provincia_id: 15
  },
  {
    id: 3453,
    cp: 15177,
    name: "Oleiros",
    provincia_id: 15
  },
  {
    id: 3454,
    cp: 15178,
    name: "Oleiros",
    provincia_id: 15
  },
  {
    id: 3455,
    cp: 15179,
    name: "Oleiros",
    provincia_id: 15
  },
  {
    id: 3456,
    cp: 15180,
    name: "Culleredo",
    provincia_id: 15
  },
  {
    id: 3457,
    cp: 15181,
    name: "Cambre",
    provincia_id: 15
  },
  {
    id: 3458,
    cp: 15182,
    name: "Carral",
    provincia_id: 15
  },
  {
    id: 3459,
    cp: 15183,
    name: "Carral",
    provincia_id: 15
  },
  {
    id: 3460,
    cp: 15184,
    name: "Carral",
    provincia_id: 15
  },
  {
    id: 3461,
    cp: 15185,
    name: "Cerceda",
    provincia_id: 15
  },
  {
    id: 3462,
    cp: 15186,
    name: "Cerceda",
    provincia_id: 15
  },
  {
    id: 3463,
    cp: 15187,
    name: "Cerceda",
    provincia_id: 15
  },
  {
    id: 3464,
    cp: 15188,
    name: "Cerceda",
    provincia_id: 15
  },
  {
    id: 3465,
    cp: 15189,
    name: "Culleredo",
    provincia_id: 15
  },
  {
    id: 3466,
    cp: 15190,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3467,
    cp: 15191,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3468,
    cp: 15192,
    name: "A Coruña",
    provincia_id: 15
  },
  {
    id: 3469,
    cp: 15198,
    name: "Culleredo",
    provincia_id: 15
  },
  {
    id: 3470,
    cp: 15199,
    name: "Culleredo",
    provincia_id: 15
  },
  {
    id: 3471,
    cp: 15200,
    name: "Noia",
    provincia_id: 15
  },
  {
    id: 3472,
    cp: 15201,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 3473,
    cp: 15210,
    name: "Noia",
    provincia_id: 15
  },
  {
    id: 3474,
    cp: 15211,
    name: "Noia",
    provincia_id: 15
  },
  {
    id: 3475,
    cp: 15212,
    name: "Lousame",
    provincia_id: 15
  },
  {
    id: 3476,
    cp: 15213,
    name: "Noia",
    provincia_id: 15
  },
  {
    id: 3477,
    cp: 15214,
    name: "Lousame",
    provincia_id: 15
  },
  {
    id: 3478,
    cp: 15215,
    name: "Lousame",
    provincia_id: 15
  },
  {
    id: 3479,
    cp: 15216,
    name: "Lousame",
    provincia_id: 15
  },
  {
    id: 3480,
    cp: 15218,
    name: "Lousame",
    provincia_id: 15
  },
  {
    id: 3481,
    cp: 15218,
    name: "Noia",
    provincia_id: 15
  },
  {
    id: 3482,
    cp: 15218,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3483,
    cp: 15220,
    name: "Ames",
    provincia_id: 15
  },
  {
    id: 3484,
    cp: 15228,
    name: "Ames",
    provincia_id: 15
  },
  {
    id: 3485,
    cp: 15229,
    name: "Ames",
    provincia_id: 15
  },
  {
    id: 3486,
    cp: 15230,
    name: "Outes",
    provincia_id: 15
  },
  {
    id: 3487,
    cp: 15236,
    name: "Outes",
    provincia_id: 15
  },
  {
    id: 3488,
    cp: 15237,
    name: "Outes",
    provincia_id: 15
  },
  {
    id: 3489,
    cp: 15239,
    name: "Outes",
    provincia_id: 15
  },
  {
    id: 3490,
    cp: 15240,
    name: "Muros",
    provincia_id: 15
  },
  {
    id: 3491,
    cp: 15250,
    name: "Muros",
    provincia_id: 15
  },
  {
    id: 3492,
    cp: 15256,
    name: "Mazaricos",
    provincia_id: 15
  },
  {
    id: 3493,
    cp: 15258,
    name: "Mazaricos",
    provincia_id: 15
  },
  {
    id: 3494,
    cp: 15259,
    name: "Muros",
    provincia_id: 15
  },
  {
    id: 3495,
    cp: 15270,
    name: "Cee",
    provincia_id: 15
  },
  {
    id: 3496,
    cp: 15280,
    name: "Brión",
    provincia_id: 15
  },
  {
    id: 3497,
    cp: 15281,
    name: "Rois",
    provincia_id: 15
  },
  {
    id: 3498,
    cp: 15282,
    name: "Rois",
    provincia_id: 15
  },
  {
    id: 3499,
    cp: 15284,
    name: "Muros",
    provincia_id: 15
  },
  {
    id: 3500,
    cp: 15286,
    name: "Outes",
    provincia_id: 15
  },
  {
    id: 3501,
    cp: 15287,
    name: "Outes",
    provincia_id: 15
  },
  {
    id: 3502,
    cp: 15288,
    name: "Outes",
    provincia_id: 15
  },
  {
    id: 3503,
    cp: 15290,
    name: "Muros",
    provincia_id: 15
  },
  {
    id: 3504,
    cp: 15291,
    name: "Muros",
    provincia_id: 15
  },
  {
    id: 3505,
    cp: 15292,
    name: "Carnota",
    provincia_id: 15
  },
  {
    id: 3506,
    cp: 15293,
    name: "Carnota",
    provincia_id: 15
  },
  {
    id: 3507,
    cp: 15295,
    name: "Carnota",
    provincia_id: 15
  },
  {
    id: 3508,
    cp: 15296,
    name: "Carnota",
    provincia_id: 15
  },
  {
    id: 3509,
    cp: 15297,
    name: "Dumbría",
    provincia_id: 15
  },
  {
    id: 3510,
    cp: 15298,
    name: "Cee",
    provincia_id: 15
  },
  {
    id: 3511,
    cp: 15299,
    name: "Cee",
    provincia_id: 15
  },
  {
    id: 3512,
    cp: 15300,
    name: "Betanzos",
    provincia_id: 15
  },
  {
    id: 3513,
    cp: 15310,
    name: "Curtis",
    provincia_id: 15
  },
  {
    id: 3514,
    cp: 15313,
    name: "Irixoa",
    provincia_id: 15
  },
  {
    id: 3515,
    cp: 15314,
    name: "Paderne",
    provincia_id: 15
  },
  {
    id: 3516,
    cp: 15315,
    name: "Monfero",
    provincia_id: 15
  },
  {
    id: 3517,
    cp: 15316,
    name: "Coirós",
    provincia_id: 15
  },
  {
    id: 3518,
    cp: 15317,
    name: "Aranga",
    provincia_id: 15
  },
  {
    id: 3519,
    cp: 15318,
    name: "Abegondo",
    provincia_id: 15
  },
  {
    id: 3520,
    cp: 15319,
    name: "Betanzos",
    provincia_id: 15
  },
  {
    id: 3521,
    cp: 15319,
    name: "Paderne",
    provincia_id: 15
  },
  {
    id: 3522,
    cp: 15319,
    name: "Bergondo",
    provincia_id: 15
  },
  {
    id: 3523,
    cp: 15320,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3524,
    cp: 15324,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3525,
    cp: 15325,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3526,
    cp: 15326,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3527,
    cp: 15327,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3528,
    cp: 15328,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3529,
    cp: 15329,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3530,
    cp: 15330,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3531,
    cp: 15332,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3532,
    cp: 15337,
    name: "Ma?ón",
    provincia_id: 15
  },
  {
    id: 3533,
    cp: 15338,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3534,
    cp: 15339,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3535,
    cp: 15339,
    name: "Ma?ón",
    provincia_id: 15
  },
  {
    id: 3536,
    cp: 15340,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3537,
    cp: 15347,
    name: "Cedeira",
    provincia_id: 15
  },
  {
    id: 3538,
    cp: 15349,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3539,
    cp: 15350,
    name: "Cedeira",
    provincia_id: 15
  },
  {
    id: 3540,
    cp: 15357,
    name: "Cedeira",
    provincia_id: 15
  },
  {
    id: 3541,
    cp: 15358,
    name: "Cedeira",
    provincia_id: 15
  },
  {
    id: 3542,
    cp: 15359,
    name: "Cedeira",
    provincia_id: 15
  },
  {
    id: 3543,
    cp: 15360,
    name: "Cari?o",
    provincia_id: 15
  },
  {
    id: 3544,
    cp: 15365,
    name: "Cari?o",
    provincia_id: 15
  },
  {
    id: 3545,
    cp: 15366,
    name: "Cari?o",
    provincia_id: 15
  },
  {
    id: 3546,
    cp: 15367,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3547,
    cp: 15368,
    name: "Ortigueira",
    provincia_id: 15
  },
  {
    id: 3548,
    cp: 15369,
    name: "Cari?o",
    provincia_id: 15
  },
  {
    id: 3549,
    cp: 15379,
    name: "Curtis",
    provincia_id: 15
  },
  {
    id: 3550,
    cp: 15380,
    name: "Oza-Cesuras",
    provincia_id: 15
  },
  {
    id: 3551,
    cp: 15386,
    name: "Oza-Cesuras",
    provincia_id: 15
  },
  {
    id: 3552,
    cp: 15387,
    name: "Oza-Cesuras",
    provincia_id: 15
  },
  {
    id: 3553,
    cp: 15388,
    name: "Oza-Cesuras",
    provincia_id: 15
  },
  {
    id: 3554,
    cp: 15389,
    name: "Oza-Cesuras",
    provincia_id: 15
  },
  {
    id: 3555,
    cp: 15390,
    name: "Oza-Cesuras",
    provincia_id: 15
  },
  {
    id: 3556,
    cp: 15391,
    name: "Oza-Cesuras",
    provincia_id: 15
  },
  {
    id: 3557,
    cp: 15401,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3558,
    cp: 15402,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3559,
    cp: 15403,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3560,
    cp: 15404,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3561,
    cp: 15405,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3562,
    cp: 15406,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3563,
    cp: 15407,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3564,
    cp: 15489,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 3565,
    cp: 15500,
    name: "Fene",
    provincia_id: 15
  },
  {
    id: 3566,
    cp: 15509,
    name: "Fene",
    provincia_id: 15
  },
  {
    id: 3567,
    cp: 15510,
    name: "Neda",
    provincia_id: 15
  },
  {
    id: 3568,
    cp: 15520,
    name: "Fene",
    provincia_id: 15
  },
  {
    id: 3569,
    cp: 15528,
    name: "Fene",
    provincia_id: 15
  },
  {
    id: 3570,
    cp: 15530,
    name: "Cerdido",
    provincia_id: 15
  },
  {
    id: 3571,
    cp: 15540,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3572,
    cp: 15541,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3573,
    cp: 15542,
    name: "Valdovi?o",
    provincia_id: 15
  },
  {
    id: 3574,
    cp: 15543,
    name: "Valdovi?o",
    provincia_id: 15
  },
  {
    id: 3575,
    cp: 15550,
    name: "Valdovi?o",
    provincia_id: 15
  },
  {
    id: 3576,
    cp: 15551,
    name: "Valdovi?o",
    provincia_id: 15
  },
  {
    id: 3577,
    cp: 15552,
    name: "Valdovi?o",
    provincia_id: 15
  },
  {
    id: 3578,
    cp: 15553,
    name: "Valdovi?o",
    provincia_id: 15
  },
  {
    id: 3579,
    cp: 15554,
    name: "Valdovi?o",
    provincia_id: 15
  },
  {
    id: 3580,
    cp: 15555,
    name: "Cedeira",
    provincia_id: 15
  },
  {
    id: 3581,
    cp: 15560,
    name: "San Sadurni?o",
    provincia_id: 15
  },
  {
    id: 3582,
    cp: 15561,
    name: "San Sadurni?o",
    provincia_id: 15
  },
  {
    id: 3583,
    cp: 15562,
    name: "San Sadurni?o",
    provincia_id: 15
  },
  {
    id: 3584,
    cp: 15563,
    name: "Moeche",
    provincia_id: 15
  },
  {
    id: 3585,
    cp: 15564,
    name: "Moeche",
    provincia_id: 15
  },
  {
    id: 3586,
    cp: 15565,
    name: "As Somozas",
    provincia_id: 15
  },
  {
    id: 3587,
    cp: 15566,
    name: "As Somozas",
    provincia_id: 15
  },
  {
    id: 3588,
    cp: 15567,
    name: "As Somozas",
    provincia_id: 15
  },
  {
    id: 3589,
    cp: 15568,
    name: "As Somozas",
    provincia_id: 15
  },
  {
    id: 3590,
    cp: 15569,
    name: "Cerdido",
    provincia_id: 15
  },
  {
    id: 3591,
    cp: 15570,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3592,
    cp: 15572,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3593,
    cp: 15573,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3594,
    cp: 15576,
    name: "San Sadurni?o",
    provincia_id: 15
  },
  {
    id: 3595,
    cp: 15577,
    name: "Neda",
    provincia_id: 15
  },
  {
    id: 3596,
    cp: 15577,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3597,
    cp: 15578,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3598,
    cp: 15579,
    name: "Neda",
    provincia_id: 15
  },
  {
    id: 3599,
    cp: 15580,
    name: "San Sadurni?o",
    provincia_id: 15
  },
  {
    id: 3600,
    cp: 15582,
    name: "Boqueixón",
    provincia_id: 15
  },
  {
    id: 3601,
    cp: 15582,
    name: "As Pontes de García Rodríguez",
    provincia_id: 15
  },
  {
    id: 3602,
    cp: 15587,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3603,
    cp: 15590,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3604,
    cp: 15591,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3605,
    cp: 15592,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3606,
    cp: 15593,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3607,
    cp: 15594,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3608,
    cp: 15595,
    name: "Ferrol",
    provincia_id: 15
  },
  {
    id: 3609,
    cp: 15596,
    name: "Narón",
    provincia_id: 15
  },
  {
    id: 3610,
    cp: 15598,
    name: "San Sadurni?o",
    provincia_id: 15
  },
  {
    id: 3611,
    cp: 15600,
    name: "Pontedeume",
    provincia_id: 15
  },
  {
    id: 3612,
    cp: 15607,
    name: "Pontedeume",
    provincia_id: 15
  },
  {
    id: 3613,
    cp: 15608,
    name: "Pontedeume",
    provincia_id: 15
  },
  {
    id: 3614,
    cp: 15608,
    name: "Mi?o",
    provincia_id: 15
  },
  {
    id: 3615,
    cp: 15609,
    name: "Monfero",
    provincia_id: 15
  },
  {
    id: 3616,
    cp: 15609,
    name: "Pontedeume",
    provincia_id: 15
  },
  {
    id: 3617,
    cp: 15611,
    name: "Cabanas",
    provincia_id: 15
  },
  {
    id: 3618,
    cp: 15612,
    name: "Cabanas",
    provincia_id: 15
  },
  {
    id: 3619,
    cp: 15613,
    name: "A Capela",
    provincia_id: 15
  },
  {
    id: 3620,
    cp: 15614,
    name: "Pontedeume",
    provincia_id: 15
  },
  {
    id: 3621,
    cp: 15615,
    name: "Vilarmaior",
    provincia_id: 15
  },
  {
    id: 3622,
    cp: 15616,
    name: "Vilarmaior",
    provincia_id: 15
  },
  {
    id: 3623,
    cp: 15617,
    name: "Monfero",
    provincia_id: 15
  },
  {
    id: 3624,
    cp: 15619,
    name: "Monfero",
    provincia_id: 15
  },
  {
    id: 3625,
    cp: 15620,
    name: "Mugardos",
    provincia_id: 15
  },
  {
    id: 3626,
    cp: 15621,
    name: "Cabanas",
    provincia_id: 15
  },
  {
    id: 3627,
    cp: 15622,
    name: "Cabanas",
    provincia_id: 15
  },
  {
    id: 3628,
    cp: 15623,
    name: "Ares",
    provincia_id: 15
  },
  {
    id: 3629,
    cp: 15624,
    name: "Ares",
    provincia_id: 15
  },
  {
    id: 3630,
    cp: 15625,
    name: "Ares",
    provincia_id: 15
  },
  {
    id: 3631,
    cp: 15626,
    name: "Mugardos",
    provincia_id: 15
  },
  {
    id: 3632,
    cp: 15627,
    name: "Fene",
    provincia_id: 15
  },
  {
    id: 3633,
    cp: 15627,
    name: "Mugardos",
    provincia_id: 15
  },
  {
    id: 3634,
    cp: 15630,
    name: "Mi?o",
    provincia_id: 15
  },
  {
    id: 3635,
    cp: 15635,
    name: "Mi?o",
    provincia_id: 15
  },
  {
    id: 3636,
    cp: 15637,
    name: "Vilarmaior",
    provincia_id: 15
  },
  {
    id: 3637,
    cp: 15638,
    name: "Vilarmaior",
    provincia_id: 15
  },
  {
    id: 3638,
    cp: 15639,
    name: "Mi?o",
    provincia_id: 15
  },
  {
    id: 3639,
    cp: 15640,
    name: "Bergondo",
    provincia_id: 15
  },
  {
    id: 3640,
    cp: 15650,
    name: "Cambre",
    provincia_id: 15
  },
  {
    id: 3641,
    cp: 15656,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3642,
    cp: 15659,
    name: "Cambre",
    provincia_id: 15
  },
  {
    id: 3643,
    cp: 15660,
    name: "Cambre",
    provincia_id: 15
  },
  {
    id: 3644,
    cp: 15668,
    name: "Cambre",
    provincia_id: 15
  },
  {
    id: 3645,
    cp: 15669,
    name: "Cambre",
    provincia_id: 15
  },
  {
    id: 3646,
    cp: 15670,
    name: "Culleredo",
    provincia_id: 15
  },
  {
    id: 3647,
    cp: 15679,
    name: "Cambre",
    provincia_id: 15
  },
  {
    id: 3648,
    cp: 15680,
    name: "Ordes",
    provincia_id: 15
  },
  {
    id: 3649,
    cp: 15683,
    name: "Tordoia",
    provincia_id: 15
  },
  {
    id: 3650,
    cp: 15684,
    name: "Oroso",
    provincia_id: 15
  },
  {
    id: 3651,
    cp: 15684,
    name: "Tordoia",
    provincia_id: 15
  },
  {
    id: 3652,
    cp: 15684,
    name: "Ordes",
    provincia_id: 15
  },
  {
    id: 3653,
    cp: 15685,
    name: "Ordes",
    provincia_id: 15
  },
  {
    id: 3654,
    cp: 15685,
    name: "Frades",
    provincia_id: 15
  },
  {
    id: 3655,
    cp: 15685,
    name: "Mesía",
    provincia_id: 15
  },
  {
    id: 3656,
    cp: 15686,
    name: "Trazo",
    provincia_id: 15
  },
  {
    id: 3657,
    cp: 15686,
    name: "Frades",
    provincia_id: 15
  },
  {
    id: 3658,
    cp: 15686,
    name: "Mesía",
    provincia_id: 15
  },
  {
    id: 3659,
    cp: 15687,
    name: "Ordes",
    provincia_id: 15
  },
  {
    id: 3660,
    cp: 15687,
    name: "Trazo",
    provincia_id: 15
  },
  {
    id: 3661,
    cp: 15688,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3662,
    cp: 15688,
    name: "Oroso",
    provincia_id: 15
  },
  {
    id: 3663,
    cp: 15689,
    name: "Mesía",
    provincia_id: 15
  },
  {
    id: 3664,
    cp: 15689,
    name: "Tordoia",
    provincia_id: 15
  },
  {
    id: 3665,
    cp: 15689,
    name: "Ordes",
    provincia_id: 15
  },
  {
    id: 3666,
    cp: 15690,
    name: "Arteixo",
    provincia_id: 15
  },
  {
    id: 3667,
    cp: 15701,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3668,
    cp: 15702,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3669,
    cp: 15703,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3670,
    cp: 15704,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3671,
    cp: 15705,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3672,
    cp: 15706,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3673,
    cp: 15707,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3674,
    cp: 15800,
    name: "Melide",
    provincia_id: 15
  },
  {
    id: 3675,
    cp: 15805,
    name: "Melide",
    provincia_id: 15
  },
  {
    id: 3676,
    cp: 15806,
    name: "Toques",
    provincia_id: 15
  },
  {
    id: 3677,
    cp: 15807,
    name: "Vilasantar",
    provincia_id: 15
  },
  {
    id: 3678,
    cp: 15808,
    name: "Santiso",
    provincia_id: 15
  },
  {
    id: 3679,
    cp: 15809,
    name: "Melide",
    provincia_id: 15
  },
  {
    id: 3680,
    cp: 15810,
    name: "Arzúa",
    provincia_id: 15
  },
  {
    id: 3681,
    cp: 15813,
    name: "Sobrado",
    provincia_id: 15
  },
  {
    id: 3682,
    cp: 15814,
    name: "Sobrado",
    provincia_id: 15
  },
  {
    id: 3683,
    cp: 15815,
    name: "Sobrado",
    provincia_id: 15
  },
  {
    id: 3684,
    cp: 15816,
    name: "Boimorto",
    provincia_id: 15
  },
  {
    id: 3685,
    cp: 15817,
    name: "Boimorto",
    provincia_id: 15
  },
  {
    id: 3686,
    cp: 15818,
    name: "Boimorto",
    provincia_id: 15
  },
  {
    id: 3687,
    cp: 15819,
    name: "Melide",
    provincia_id: 15
  },
  {
    id: 3688,
    cp: 15819,
    name: "Arzúa",
    provincia_id: 15
  },
  {
    id: 3689,
    cp: 15820,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3690,
    cp: 15821,
    name: "O Pino",
    provincia_id: 15
  },
  {
    id: 3691,
    cp: 15822,
    name: "Touro",
    provincia_id: 15
  },
  {
    id: 3692,
    cp: 15823,
    name: "Touro",
    provincia_id: 15
  },
  {
    id: 3693,
    cp: 15823,
    name: "O Pino",
    provincia_id: 15
  },
  {
    id: 3694,
    cp: 15824,
    name: "Touro",
    provincia_id: 15
  },
  {
    id: 3695,
    cp: 15824,
    name: "O Pino",
    provincia_id: 15
  },
  {
    id: 3696,
    cp: 15825,
    name: "O Pino",
    provincia_id: 15
  },
  {
    id: 3697,
    cp: 15826,
    name: "Arzúa",
    provincia_id: 15
  },
  {
    id: 3698,
    cp: 15828,
    name: "Touro",
    provincia_id: 15
  },
  {
    id: 3699,
    cp: 15830,
    name: "Negreira",
    provincia_id: 15
  },
  {
    id: 3700,
    cp: 15837,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3701,
    cp: 15838,
    name: "Negreira",
    provincia_id: 15
  },
  {
    id: 3702,
    cp: 15839,
    name: "Negreira",
    provincia_id: 15
  },
  {
    id: 3703,
    cp: 15839,
    name: "A Ba?a",
    provincia_id: 15
  },
  {
    id: 3704,
    cp: 15839,
    name: "Brión",
    provincia_id: 15
  },
  {
    id: 3705,
    cp: 15840,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3706,
    cp: 15841,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3707,
    cp: 15845,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3708,
    cp: 15846,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3709,
    cp: 15847,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3710,
    cp: 15848,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3711,
    cp: 15850,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3712,
    cp: 15851,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3713,
    cp: 15855,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3714,
    cp: 15856,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3715,
    cp: 15857,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3716,
    cp: 15858,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3717,
    cp: 15859,
    name: "Zas",
    provincia_id: 15
  },
  {
    id: 3718,
    cp: 15860,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3719,
    cp: 15861,
    name: "Santa Comba",
    provincia_id: 15
  },
  {
    id: 3720,
    cp: 15862,
    name: "A Ba?a",
    provincia_id: 15
  },
  {
    id: 3721,
    cp: 15863,
    name: "A Ba?a",
    provincia_id: 15
  },
  {
    id: 3722,
    cp: 15863,
    name: "Negreira",
    provincia_id: 15
  },
  {
    id: 3723,
    cp: 15864,
    name: "Ames",
    provincia_id: 15
  },
  {
    id: 3724,
    cp: 15865,
    name: "Brión",
    provincia_id: 15
  },
  {
    id: 3725,
    cp: 15866,
    name: "Teo",
    provincia_id: 15
  },
  {
    id: 3726,
    cp: 15870,
    name: "Ames",
    provincia_id: 15
  },
  {
    id: 3727,
    cp: 15871,
    name: "Val do Dubra",
    provincia_id: 15
  },
  {
    id: 3728,
    cp: 15872,
    name: "Val do Dubra",
    provincia_id: 15
  },
  {
    id: 3729,
    cp: 15873,
    name: "Val do Dubra",
    provincia_id: 15
  },
  {
    id: 3730,
    cp: 15874,
    name: "Val do Dubra",
    provincia_id: 15
  },
  {
    id: 3731,
    cp: 15880,
    name: "Vedra",
    provincia_id: 15
  },
  {
    id: 3732,
    cp: 15881,
    name: "Boqueixón",
    provincia_id: 15
  },
  {
    id: 3733,
    cp: 15881,
    name: "Vedra",
    provincia_id: 15
  },
  {
    id: 3734,
    cp: 15882,
    name: "Boqueixón",
    provincia_id: 15
  },
  {
    id: 3735,
    cp: 15883,
    name: "Teo",
    provincia_id: 15
  },
  {
    id: 3736,
    cp: 15884,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3737,
    cp: 15885,
    name: "Vedra",
    provincia_id: 15
  },
  {
    id: 3738,
    cp: 15886,
    name: "Teo",
    provincia_id: 15
  },
  {
    id: 3739,
    cp: 15887,
    name: "O Pino",
    provincia_id: 15
  },
  {
    id: 3740,
    cp: 15888,
    name: "Oroso",
    provincia_id: 15
  },
  {
    id: 3741,
    cp: 15890,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3742,
    cp: 15891,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3743,
    cp: 15892,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3744,
    cp: 15893,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3745,
    cp: 15894,
    name: "Teo",
    provincia_id: 15
  },
  {
    id: 3746,
    cp: 15895,
    name: "Ames",
    provincia_id: 15
  },
  {
    id: 3747,
    cp: 15896,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3748,
    cp: 15897,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3749,
    cp: 15898,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3750,
    cp: 15899,
    name: "Santiago de Compostela",
    provincia_id: 15
  },
  {
    id: 3751,
    cp: 15900,
    name: "Padrón",
    provincia_id: 15
  },
  {
    id: 3752,
    cp: 15910,
    name: "Padrón",
    provincia_id: 15
  },
  {
    id: 3753,
    cp: 15911,
    name: "Rois",
    provincia_id: 15
  },
  {
    id: 3754,
    cp: 15912,
    name: "Rois",
    provincia_id: 15
  },
  {
    id: 3755,
    cp: 15913,
    name: "Rois",
    provincia_id: 15
  },
  {
    id: 3756,
    cp: 15914,
    name: "Padrón",
    provincia_id: 15
  },
  {
    id: 3757,
    cp: 15915,
    name: "Padrón",
    provincia_id: 15
  },
  {
    id: 3758,
    cp: 15916,
    name: "Dodro",
    provincia_id: 15
  },
  {
    id: 3759,
    cp: 15917,
    name: "Padrón",
    provincia_id: 15
  },
  {
    id: 3760,
    cp: 15920,
    name: "Rianxo",
    provincia_id: 15
  },
  {
    id: 3761,
    cp: 15928,
    name: "Rianxo",
    provincia_id: 15
  },
  {
    id: 3762,
    cp: 15930,
    name: "Boiro",
    provincia_id: 15
  },
  {
    id: 3763,
    cp: 15937,
    name: "Boiro",
    provincia_id: 15
  },
  {
    id: 3764,
    cp: 15938,
    name: "Boiro",
    provincia_id: 15
  },
  {
    id: 3765,
    cp: 15939,
    name: "Boiro",
    provincia_id: 15
  },
  {
    id: 3766,
    cp: 15940,
    name: "A Pobra do Carami?al",
    provincia_id: 15
  },
  {
    id: 3767,
    cp: 15948,
    name: "A Pobra do Carami?al",
    provincia_id: 15
  },
  {
    id: 3768,
    cp: 15949,
    name: "A Pobra do Carami?al",
    provincia_id: 15
  },
  {
    id: 3769,
    cp: 15950,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3770,
    cp: 15959,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3771,
    cp: 15960,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3772,
    cp: 15965,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3773,
    cp: 15966,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3774,
    cp: 15967,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3775,
    cp: 15968,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3776,
    cp: 15969,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3777,
    cp: 15970,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3778,
    cp: 15978,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3779,
    cp: 15979,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3780,
    cp: 15980,
    name: "Rois",
    provincia_id: 15
  },
  {
    id: 3781,
    cp: 15980,
    name: "Padrón",
    provincia_id: 15
  },
  {
    id: 3782,
    cp: 15981,
    name: "Dodro",
    provincia_id: 15
  },
  {
    id: 3783,
    cp: 15982,
    name: "Dodro",
    provincia_id: 15
  },
  {
    id: 3784,
    cp: 15983,
    name: "Rianxo",
    provincia_id: 15
  },
  {
    id: 3785,
    cp: 15984,
    name: "Rianxo",
    provincia_id: 15
  },
  {
    id: 3786,
    cp: 15985,
    name: "Rianxo",
    provincia_id: 15
  },
  {
    id: 3787,
    cp: 15990,
    name: "Boiro",
    provincia_id: 15
  },
  {
    id: 3788,
    cp: 15991,
    name: "Boiro",
    provincia_id: 15
  },
  {
    id: 3789,
    cp: 15992,
    name: "Boiro",
    provincia_id: 15
  },
  {
    id: 3790,
    cp: 15993,
    name: "Ribeira",
    provincia_id: 15
  },
  {
    id: 3791,
    cp: 15994,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3792,
    cp: 15995,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3793,
    cp: 15996,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3794,
    cp: 15998,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3795,
    cp: 15999,
    name: "Porto do Son",
    provincia_id: 15
  },
  {
    id: 3796,
    cp: 16001,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3797,
    cp: 16002,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3798,
    cp: 16003,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3799,
    cp: 16004,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3800,
    cp: 16043,
    name: "Campillos-Paravientos",
    provincia_id: 16
  },
  {
    id: 3801,
    cp: 16100,
    name: "Valverde de Júcar",
    provincia_id: 16
  },
  {
    id: 3802,
    cp: 16111,
    name: "Albaladejo del Cuende",
    provincia_id: 16
  },
  {
    id: 3803,
    cp: 16111,
    name: "Villaverde y Pasaconsol",
    provincia_id: 16
  },
  {
    id: 3804,
    cp: 16113,
    name: "La Parra de las Vegas",
    provincia_id: 16
  },
  {
    id: 3805,
    cp: 16114,
    name: "Buenache de Alarcón",
    provincia_id: 16
  },
  {
    id: 3806,
    cp: 16118,
    name: "Olmedilla de Alarcón",
    provincia_id: 16
  },
  {
    id: 3807,
    cp: 16118,
    name: "Piqueras del Castillo",
    provincia_id: 16
  },
  {
    id: 3808,
    cp: 16118,
    name: "Barchín del Hoyo",
    provincia_id: 16
  },
  {
    id: 3809,
    cp: 16118,
    name: "Hontecillas",
    provincia_id: 16
  },
  {
    id: 3810,
    cp: 16120,
    name: "Las Valeras",
    provincia_id: 16
  },
  {
    id: 3811,
    cp: 16122,
    name: "Valdetórtola",
    provincia_id: 16
  },
  {
    id: 3812,
    cp: 16122,
    name: "Fresneda de Altarejos",
    provincia_id: 16
  },
  {
    id: 3813,
    cp: 16123,
    name: "Arcas",
    provincia_id: 16
  },
  {
    id: 3814,
    cp: 16140,
    name: "Villalba de la Sierra",
    provincia_id: 16
  },
  {
    id: 3815,
    cp: 16141,
    name: "Portilla",
    provincia_id: 16
  },
  {
    id: 3816,
    cp: 16141,
    name: "Arcos de la Sierra",
    provincia_id: 16
  },
  {
    id: 3817,
    cp: 16141,
    name: "Fresneda de la Sierra",
    provincia_id: 16
  },
  {
    id: 3818,
    cp: 16141,
    name: "Castillejo-Sierra",
    provincia_id: 16
  },
  {
    id: 3819,
    cp: 16142,
    name: "Las Majadas",
    provincia_id: 16
  },
  {
    id: 3820,
    cp: 16143,
    name: "Mariana",
    provincia_id: 16
  },
  {
    id: 3821,
    cp: 16143,
    name: "Sotorribas",
    provincia_id: 16
  },
  {
    id: 3822,
    cp: 16144,
    name: "La Frontera",
    provincia_id: 16
  },
  {
    id: 3823,
    cp: 16144,
    name: "Sotorribas",
    provincia_id: 16
  },
  {
    id: 3824,
    cp: 16145,
    name: "Sotorribas",
    provincia_id: 16
  },
  {
    id: 3825,
    cp: 16146,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3826,
    cp: 16146,
    name: "Zarzuela",
    provincia_id: 16
  },
  {
    id: 3827,
    cp: 16147,
    name: "Mariana",
    provincia_id: 16
  },
  {
    id: 3828,
    cp: 16150,
    name: "Tragacete",
    provincia_id: 16
  },
  {
    id: 3829,
    cp: 16150,
    name: "Vega del Codorno",
    provincia_id: 16
  },
  {
    id: 3830,
    cp: 16152,
    name: "Beamud",
    provincia_id: 16
  },
  {
    id: 3831,
    cp: 16152,
    name: "Valdemeca",
    provincia_id: 16
  },
  {
    id: 3832,
    cp: 16152,
    name: "Huélamo",
    provincia_id: 16
  },
  {
    id: 3833,
    cp: 16152,
    name: "U?a",
    provincia_id: 16
  },
  {
    id: 3834,
    cp: 16160,
    name: "Palomares del Campo",
    provincia_id: 16
  },
  {
    id: 3835,
    cp: 16160,
    name: "Chiloeches",
    provincia_id: 19
  },
  {
    id: 3836,
    cp: 16161,
    name: "Torrejoncillo del Rey",
    provincia_id: 16
  },
  {
    id: 3837,
    cp: 16162,
    name: "Torrejoncillo del Rey",
    provincia_id: 16
  },
  {
    id: 3838,
    cp: 16190,
    name: "Chillarón de Cuenca",
    provincia_id: 16
  },
  {
    id: 3839,
    cp: 16190,
    name: "Fuentenava de Jábaga",
    provincia_id: 16
  },
  {
    id: 3840,
    cp: 16191,
    name: "Fuentenava de Jábaga",
    provincia_id: 16
  },
  {
    id: 3841,
    cp: 16191,
    name: "Villar de Domingo García",
    provincia_id: 16
  },
  {
    id: 3842,
    cp: 16191,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3843,
    cp: 16191,
    name: "Bascu?ana de San Pedro",
    provincia_id: 16
  },
  {
    id: 3844,
    cp: 16191,
    name: "Chillarón de Cuenca",
    provincia_id: 16
  },
  {
    id: 3845,
    cp: 16192,
    name: "Buenache de la Sierra",
    provincia_id: 16
  },
  {
    id: 3846,
    cp: 16192,
    name: "Palomera",
    provincia_id: 16
  },
  {
    id: 3847,
    cp: 16193,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3848,
    cp: 16193,
    name: "Fuentes",
    provincia_id: 16
  },
  {
    id: 3849,
    cp: 16194,
    name: "Chillarón de Cuenca",
    provincia_id: 16
  },
  {
    id: 3850,
    cp: 16194,
    name: "Fuentenava de Jábaga",
    provincia_id: 16
  },
  {
    id: 3851,
    cp: 16194,
    name: "Cuenca",
    provincia_id: 16
  },
  {
    id: 3852,
    cp: 16195,
    name: "Abia de la Obispalía",
    provincia_id: 16
  },
  {
    id: 3853,
    cp: 16195,
    name: "Torrejoncillo del Rey",
    provincia_id: 16
  },
  {
    id: 3854,
    cp: 16195,
    name: "Villar de Olalla",
    provincia_id: 16
  },
  {
    id: 3855,
    cp: 16195,
    name: "Huerta de la Obispalía",
    provincia_id: 16
  },
  {
    id: 3856,
    cp: 16195,
    name: "Altarejos",
    provincia_id: 16
  },
  {
    id: 3857,
    cp: 16196,
    name: "Villar de Olalla",
    provincia_id: 16
  },
  {
    id: 3858,
    cp: 16200,
    name: "Motilla del Palancar",
    provincia_id: 16
  },
  {
    id: 3859,
    cp: 16210,
    name: "Campillo de Altobuey",
    provincia_id: 16
  },
  {
    id: 3860,
    cp: 16211,
    name: "El Picazo",
    provincia_id: 16
  },
  {
    id: 3861,
    cp: 16212,
    name: "Pozorrubielos de la Mancha",
    provincia_id: 16
  },
  {
    id: 3862,
    cp: 16214,
    name: "Gabaldón",
    provincia_id: 16
  },
  {
    id: 3863,
    cp: 16214,
    name: "Valhermoso de la Fuente",
    provincia_id: 16
  },
  {
    id: 3864,
    cp: 16214,
    name: "Valverdejo",
    provincia_id: 16
  },
  {
    id: 3865,
    cp: 16214,
    name: "Alarcón",
    provincia_id: 16
  },
  {
    id: 3866,
    cp: 16215,
    name: "Almodóvar del Pinar",
    provincia_id: 16
  },
  {
    id: 3867,
    cp: 16216,
    name: "Chumillas",
    provincia_id: 16
  },
  {
    id: 3868,
    cp: 16216,
    name: "Las Valeras",
    provincia_id: 16
  },
  {
    id: 3869,
    cp: 16216,
    name: "Solera de Gabaldón",
    provincia_id: 16
  },
  {
    id: 3870,
    cp: 16216,
    name: "Olmeda del Rey",
    provincia_id: 16
  },
  {
    id: 3871,
    cp: 16220,
    name: "Quintanar del Rey",
    provincia_id: 16
  },
  {
    id: 3872,
    cp: 16230,
    name: "Villanueva de la Jara",
    provincia_id: 16
  },
  {
    id: 3873,
    cp: 16235,
    name: "Iniesta",
    provincia_id: 16
  },
  {
    id: 3874,
    cp: 16236,
    name: "Villagarcía del Llano",
    provincia_id: 16
  },
  {
    id: 3875,
    cp: 16236,
    name: "Villanueva de la Jara",
    provincia_id: 16
  },
  {
    id: 3876,
    cp: 16236,
    name: "Iniesta",
    provincia_id: 16
  },
  {
    id: 3877,
    cp: 16237,
    name: "Leda?a",
    provincia_id: 16
  },
  {
    id: 3878,
    cp: 16238,
    name: "Villagarcía del Llano",
    provincia_id: 16
  },
  {
    id: 3879,
    cp: 16238,
    name: "Villanueva de la Jara",
    provincia_id: 16
  },
  {
    id: 3880,
    cp: 16239,
    name: "Casasimarro",
    provincia_id: 16
  },
  {
    id: 3881,
    cp: 16240,
    name: "El Peral",
    provincia_id: 16
  },
  {
    id: 3882,
    cp: 16250,
    name: "Castillejo de Iniesta",
    provincia_id: 16
  },
  {
    id: 3883,
    cp: 16251,
    name: "Graja de Iniesta",
    provincia_id: 16
  },
  {
    id: 3884,
    cp: 16260,
    name: "Minglanilla",
    provincia_id: 16
  },
  {
    id: 3885,
    cp: 16269,
    name: "Puebla del Salvador",
    provincia_id: 16
  },
  {
    id: 3886,
    cp: 16269,
    name: "La Pesquera",
    provincia_id: 16
  },
  {
    id: 3887,
    cp: 16270,
    name: "Villalpardo",
    provincia_id: 16
  },
  {
    id: 3888,
    cp: 16280,
    name: "Villarta",
    provincia_id: 16
  },
  {
    id: 3889,
    cp: 16290,
    name: "El Herrumblar",
    provincia_id: 16
  },
  {
    id: 3890,
    cp: 16290,
    name: "Iniesta",
    provincia_id: 16
  },
  {
    id: 3891,
    cp: 16300,
    name: "Ca?ete",
    provincia_id: 16
  },
  {
    id: 3892,
    cp: 16311,
    name: "Boniches",
    provincia_id: 16
  },
  {
    id: 3893,
    cp: 16311,
    name: "Fuentelespino de Moya",
    provincia_id: 16
  },
  {
    id: 3894,
    cp: 16311,
    name: "Huérguina",
    provincia_id: 16
  },
  {
    id: 3895,
    cp: 16311,
    name: "Campillos-Paravientos",
    provincia_id: 16
  },
  {
    id: 3896,
    cp: 16312,
    name: "Henarejos",
    provincia_id: 16
  },
  {
    id: 3897,
    cp: 16312,
    name: "Garaballa",
    provincia_id: 16
  },
  {
    id: 3898,
    cp: 16313,
    name: "Aliaguilla",
    provincia_id: 16
  },
  {
    id: 3899,
    cp: 16315,
    name: "Alcalá de la Vega",
    provincia_id: 16
  },
  {
    id: 3900,
    cp: 16316,
    name: "Huerta del Marquesado",
    provincia_id: 16
  },
  {
    id: 3901,
    cp: 16316,
    name: "Campillos-Sierra",
    provincia_id: 16
  },
  {
    id: 3902,
    cp: 16316,
    name: "Laguna del Marquesado",
    provincia_id: 16
  },
  {
    id: 3903,
    cp: 16316,
    name: "Valdemoro-Sierra",
    provincia_id: 16
  },
  {
    id: 3904,
    cp: 16317,
    name: "Tejadillos",
    provincia_id: 16
  },
  {
    id: 3905,
    cp: 16317,
    name: "Salinas del Manzano",
    provincia_id: 16
  },
  {
    id: 3906,
    cp: 16317,
    name: "Zafrilla",
    provincia_id: 16
  },
  {
    id: 3907,
    cp: 16318,
    name: "Salvaca?ete",
    provincia_id: 16
  },
  {
    id: 3908,
    cp: 16320,
    name: "Talayuelas",
    provincia_id: 16
  },
  {
    id: 3909,
    cp: 16321,
    name: "Talayuelas",
    provincia_id: 16
  },
  {
    id: 3910,
    cp: 16330,
    name: "Landete",
    provincia_id: 16
  },
  {
    id: 3911,
    cp: 16336,
    name: "Santa Cruz de Moya",
    provincia_id: 16
  },
  {
    id: 3912,
    cp: 16338,
    name: "Casas de Garcimolina",
    provincia_id: 16
  },
  {
    id: 3913,
    cp: 16338,
    name: "Algarra",
    provincia_id: 16
  },
  {
    id: 3914,
    cp: 16339,
    name: "Landete",
    provincia_id: 16
  },
  {
    id: 3915,
    cp: 16339,
    name: "Graja de Campalbo",
    provincia_id: 16
  },
  {
    id: 3916,
    cp: 16339,
    name: "Santa Cruz de Moya",
    provincia_id: 16
  },
  {
    id: 3917,
    cp: 16340,
    name: "La Cierva",
    provincia_id: 16
  },
  {
    id: 3918,
    cp: 16340,
    name: "Valdemorillo de la Sierra",
    provincia_id: 16
  },
  {
    id: 3919,
    cp: 16340,
    name: "Ca?ada del Hoyo",
    provincia_id: 16
  },
  {
    id: 3920,
    cp: 16350,
    name: "Carboneras de Guadazaón",
    provincia_id: 16
  },
  {
    id: 3921,
    cp: 16360,
    name: "Monteagudo de las Salinas",
    provincia_id: 16
  },
  {
    id: 3922,
    cp: 16360,
    name: "Arguisuelas",
    provincia_id: 16
  },
  {
    id: 3923,
    cp: 16370,
    name: "San Martín de Boniches",
    provincia_id: 16
  },
  {
    id: 3924,
    cp: 16370,
    name: "Villar del Humo",
    provincia_id: 16
  },
  {
    id: 3925,
    cp: 16371,
    name: "Víllora",
    provincia_id: 16
  },
  {
    id: 3926,
    cp: 16371,
    name: "Narboneta",
    provincia_id: 16
  },
  {
    id: 3927,
    cp: 16372,
    name: "Enguídanos",
    provincia_id: 16
  },
  {
    id: 3928,
    cp: 16372,
    name: "Paracuellos",
    provincia_id: 16
  },
  {
    id: 3929,
    cp: 16373,
    name: "Cardenete",
    provincia_id: 16
  },
  {
    id: 3930,
    cp: 16373,
    name: "Paracuellos",
    provincia_id: 16
  },
  {
    id: 3931,
    cp: 16373,
    name: "Yémeda",
    provincia_id: 16
  },
  {
    id: 3932,
    cp: 16390,
    name: "Pajarón",
    provincia_id: 16
  },
  {
    id: 3933,
    cp: 16390,
    name: "Pajaroncillo",
    provincia_id: 16
  },
  {
    id: 3934,
    cp: 16390,
    name: "Reíllo",
    provincia_id: 16
  },
  {
    id: 3935,
    cp: 16393,
    name: "Mira",
    provincia_id: 16
  },
  {
    id: 3936,
    cp: 16400,
    name: "Tarancón",
    provincia_id: 16
  },
  {
    id: 3937,
    cp: 16410,
    name: "Horcajo de Santiago",
    provincia_id: 16
  },
  {
    id: 3938,
    cp: 16411,
    name: "Fuente de Pedro Naharro",
    provincia_id: 16
  },
  {
    id: 3939,
    cp: 16412,
    name: "El Acebrón",
    provincia_id: 16
  },
  {
    id: 3940,
    cp: 16413,
    name: "Torrubia del Campo",
    provincia_id: 16
  },
  {
    id: 3941,
    cp: 16414,
    name: "Pozorrubio de Santiago",
    provincia_id: 16
  },
  {
    id: 3942,
    cp: 16415,
    name: "Villamayor de Santiago",
    provincia_id: 16
  },
  {
    id: 3943,
    cp: 16417,
    name: "Los Hinojosos",
    provincia_id: 16
  },
  {
    id: 3944,
    cp: 16420,
    name: "Villarrubio",
    provincia_id: 16
  },
  {
    id: 3945,
    cp: 16420,
    name: "Almendros",
    provincia_id: 16
  },
  {
    id: 3946,
    cp: 16421,
    name: "Hontanaya",
    provincia_id: 16
  },
  {
    id: 3947,
    cp: 16421,
    name: "Puebla de Almenara",
    provincia_id: 16
  },
  {
    id: 3948,
    cp: 16422,
    name: "Tresjuncos",
    provincia_id: 16
  },
  {
    id: 3949,
    cp: 16423,
    name: "Osa de la Vega",
    provincia_id: 16
  },
  {
    id: 3950,
    cp: 16430,
    name: "Saelices",
    provincia_id: 16
  },
  {
    id: 3951,
    cp: 16431,
    name: "Almonacid del Marquesado",
    provincia_id: 16
  },
  {
    id: 3952,
    cp: 16432,
    name: "Rozalén del Monte",
    provincia_id: 16
  },
  {
    id: 3953,
    cp: 16432,
    name: "Villarejo de Fuentes",
    provincia_id: 16
  },
  {
    id: 3954,
    cp: 16433,
    name: "Villar de Ca?as",
    provincia_id: 16
  },
  {
    id: 3955,
    cp: 16433,
    name: "Alconchel de la Estrella",
    provincia_id: 16
  },
  {
    id: 3956,
    cp: 16434,
    name: "Montalbanejo",
    provincia_id: 16
  },
  {
    id: 3957,
    cp: 16435,
    name: "La Hinojosa",
    provincia_id: 16
  },
  {
    id: 3958,
    cp: 16440,
    name: "Montalbo",
    provincia_id: 16
  },
  {
    id: 3959,
    cp: 16441,
    name: "El Hito",
    provincia_id: 16
  },
  {
    id: 3960,
    cp: 16442,
    name: "Villares del Saz",
    provincia_id: 16
  },
  {
    id: 3961,
    cp: 16444,
    name: "Cervera del Llano",
    provincia_id: 16
  },
  {
    id: 3962,
    cp: 16452,
    name: "Tribaldos",
    provincia_id: 16
  },
  {
    id: 3963,
    cp: 16452,
    name: "Rozalén del Monte",
    provincia_id: 16
  },
  {
    id: 3964,
    cp: 16452,
    name: "Uclés",
    provincia_id: 16
  },
  {
    id: 3965,
    cp: 16460,
    name: "Barajas de Melo",
    provincia_id: 16
  },
  {
    id: 3966,
    cp: 16461,
    name: "Leganiel",
    provincia_id: 16
  },
  {
    id: 3967,
    cp: 16463,
    name: "Saceda-Trasierra",
    provincia_id: 16
  },
  {
    id: 3968,
    cp: 16464,
    name: "Alcázar del Rey",
    provincia_id: 16
  },
  {
    id: 3969,
    cp: 16465,
    name: "Paredes",
    provincia_id: 16
  },
  {
    id: 3970,
    cp: 16465,
    name: "Huelves",
    provincia_id: 16
  },
  {
    id: 3971,
    cp: 16470,
    name: "Barajas de Melo",
    provincia_id: 16
  },
  {
    id: 3972,
    cp: 16470,
    name: "Zarza de Tajo",
    provincia_id: 16
  },
  {
    id: 3973,
    cp: 16470,
    name: "Belinchón",
    provincia_id: 16
  },
  {
    id: 3974,
    cp: 16500,
    name: "Huete",
    provincia_id: 16
  },
  {
    id: 3975,
    cp: 16510,
    name: "El Valle de Altomira",
    provincia_id: 16
  },
  {
    id: 3976,
    cp: 16510,
    name: "Vellisca",
    provincia_id: 16
  },
  {
    id: 3977,
    cp: 16512,
    name: "El Valle de Altomira",
    provincia_id: 16
  },
  {
    id: 3978,
    cp: 16512,
    name: "Buendía",
    provincia_id: 16
  },
  {
    id: 3979,
    cp: 16514,
    name: "El Valle de Altomira",
    provincia_id: 16
  },
  {
    id: 3980,
    cp: 16520,
    name: "Huete",
    provincia_id: 16
  },
  {
    id: 3981,
    cp: 16521,
    name: "Huete",
    provincia_id: 16
  },
  {
    id: 3982,
    cp: 16522,
    name: "Portalrubio de Guadamejud",
    provincia_id: 16
  },
  {
    id: 3983,
    cp: 16522,
    name: "Tinajas",
    provincia_id: 16
  },
  {
    id: 3984,
    cp: 16532,
    name: "Gascue?a",
    provincia_id: 16
  },
  {
    id: 3985,
    cp: 16532,
    name: "La Peraleja",
    provincia_id: 16
  },
  {
    id: 3986,
    cp: 16532,
    name: "Huete",
    provincia_id: 16
  },
  {
    id: 3987,
    cp: 16532,
    name: "Villanueva de Guadamejud",
    provincia_id: 16
  },
  {
    id: 3988,
    cp: 16535,
    name: "Villalba del Rey",
    provincia_id: 16
  },
  {
    id: 3989,
    cp: 16537,
    name: "Ca?averuelas",
    provincia_id: 16
  },
  {
    id: 3990,
    cp: 16537,
    name: "Alcohujate",
    provincia_id: 16
  },
  {
    id: 3991,
    cp: 16540,
    name: "Huete",
    provincia_id: 16
  },
  {
    id: 3992,
    cp: 16541,
    name: "Los Valdecolmenas",
    provincia_id: 16
  },
  {
    id: 3993,
    cp: 16541,
    name: "Huete",
    provincia_id: 16
  },
  {
    id: 3994,
    cp: 16541,
    name: "Villarejo de la Pe?uela",
    provincia_id: 16
  },
  {
    id: 3995,
    cp: 16541,
    name: "Pineda de Gigüela",
    provincia_id: 16
  },
  {
    id: 3996,
    cp: 16542,
    name: "Villar y Velasco",
    provincia_id: 16
  },
  {
    id: 3997,
    cp: 16550,
    name: "Huete",
    provincia_id: 16
  },
  {
    id: 3998,
    cp: 16550,
    name: "Campos del Paraíso",
    provincia_id: 16
  },
  {
    id: 3999,
    cp: 16555,
    name: "Campos del Paraíso",
    provincia_id: 16
  },
  {
    id: 4000,
    cp: 16600,
    name: "San Clemente",
    provincia_id: 16
  },
  {
    id: 4001,
    cp: 16610,
    name: "Casas de Fernando Alonso",
    provincia_id: 16
  },
  {
    id: 4002,
    cp: 16611,
    name: "Casas de Haro",
    provincia_id: 16
  },
  {
    id: 4003,
    cp: 16612,
    name: "Casas de los Pinos",
    provincia_id: 16
  },
  {
    id: 4004,
    cp: 16620,
    name: "La Alberca de Záncara",
    provincia_id: 16
  },
  {
    id: 4005,
    cp: 16621,
    name: "Santa María del Campo Rus",
    provincia_id: 16
  },
  {
    id: 4006,
    cp: 16622,
    name: "Pinarejo",
    provincia_id: 16
  },
  {
    id: 4007,
    cp: 16623,
    name: "Castillo de Garcimu?oz",
    provincia_id: 16
  },
  {
    id: 4008,
    cp: 16630,
    name: "Mota del Cuervo",
    provincia_id: 16
  },
  {
    id: 4009,
    cp: 16638,
    name: "El Pedernoso",
    provincia_id: 16
  },
  {
    id: 4010,
    cp: 16639,
    name: "Santa María de los Llanos",
    provincia_id: 16
  },
  {
    id: 4011,
    cp: 16640,
    name: "Belmonte",
    provincia_id: 16
  },
  {
    id: 4012,
    cp: 16646,
    name: "Villalgordo del Marquesado",
    provincia_id: 16
  },
  {
    id: 4013,
    cp: 16647,
    name: "Villaescusa de Haro",
    provincia_id: 16
  },
  {
    id: 4014,
    cp: 16647,
    name: "Fuentelespino de Haro",
    provincia_id: 16
  },
  {
    id: 4015,
    cp: 16648,
    name: "Villar de la Encina",
    provincia_id: 16
  },
  {
    id: 4016,
    cp: 16649,
    name: "Monreal del Llano",
    provincia_id: 16
  },
  {
    id: 4017,
    cp: 16649,
    name: "Carrascosa de Haro",
    provincia_id: 16
  },
  {
    id: 4018,
    cp: 16649,
    name: "Rada de Haro",
    provincia_id: 16
  },
  {
    id: 4019,
    cp: 16650,
    name: "Las Mesas",
    provincia_id: 16
  },
  {
    id: 4020,
    cp: 16660,
    name: "Las Pedro?eras",
    provincia_id: 16
  },
  {
    id: 4021,
    cp: 16670,
    name: "El Provencio",
    provincia_id: 16
  },
  {
    id: 4022,
    cp: 16700,
    name: "Sisante",
    provincia_id: 16
  },
  {
    id: 4023,
    cp: 16707,
    name: "Casas de Benítez",
    provincia_id: 16
  },
  {
    id: 4024,
    cp: 16708,
    name: "Casas de Guijarro",
    provincia_id: 16
  },
  {
    id: 4025,
    cp: 16708,
    name: "Pozoamargo",
    provincia_id: 16
  },
  {
    id: 4026,
    cp: 16709,
    name: "Vara de Rey",
    provincia_id: 16
  },
  {
    id: 4027,
    cp: 16710,
    name: "Atalaya del Ca?avate",
    provincia_id: 16
  },
  {
    id: 4028,
    cp: 16710,
    name: "Tébar",
    provincia_id: 16
  },
  {
    id: 4029,
    cp: 16720,
    name: "Ca?ada Juncosa",
    provincia_id: 16
  },
  {
    id: 4030,
    cp: 16730,
    name: "Honrubia",
    provincia_id: 16
  },
  {
    id: 4031,
    cp: 16738,
    name: "El Ca?avate",
    provincia_id: 16
  },
  {
    id: 4032,
    cp: 16739,
    name: "Torrubia del Castillo",
    provincia_id: 16
  },
  {
    id: 4033,
    cp: 16740,
    name: "La Almarcha",
    provincia_id: 16
  },
  {
    id: 4034,
    cp: 16740,
    name: "Belinchón",
    provincia_id: 16
  },
  {
    id: 4035,
    cp: 16760,
    name: "Olivares de Júcar",
    provincia_id: 16
  },
  {
    id: 4036,
    cp: 16770,
    name: "San Lorenzo de la Parrilla",
    provincia_id: 16
  },
  {
    id: 4037,
    cp: 16771,
    name: "Zafra de Záncara",
    provincia_id: 16
  },
  {
    id: 4038,
    cp: 16771,
    name: "Villarejo-Periesteban",
    provincia_id: 16
  },
  {
    id: 4039,
    cp: 16779,
    name: "Belmontejo",
    provincia_id: 16
  },
  {
    id: 4040,
    cp: 16780,
    name: "Altarejos",
    provincia_id: 16
  },
  {
    id: 4041,
    cp: 16780,
    name: "Mota de Altarejos",
    provincia_id: 16
  },
  {
    id: 4042,
    cp: 16781,
    name: "Fresneda de Altarejos",
    provincia_id: 16
  },
  {
    id: 4043,
    cp: 16800,
    name: "Priego",
    provincia_id: 16
  },
  {
    id: 4044,
    cp: 16812,
    name: "Albendea",
    provincia_id: 16
  },
  {
    id: 4045,
    cp: 16812,
    name: "Alcantud",
    provincia_id: 16
  },
  {
    id: 4046,
    cp: 16812,
    name: "Vindel",
    provincia_id: 16
  },
  {
    id: 4047,
    cp: 16812,
    name: "El Pozuelo",
    provincia_id: 16
  },
  {
    id: 4048,
    cp: 16812,
    name: "Arandilla del Arroyo",
    provincia_id: 16
  },
  {
    id: 4049,
    cp: 16813,
    name: "Villar del Infantado",
    provincia_id: 16
  },
  {
    id: 4050,
    cp: 16813,
    name: "Valdeolivas",
    provincia_id: 16
  },
  {
    id: 4051,
    cp: 16813,
    name: "San Pedro Palmiches",
    provincia_id: 16
  },
  {
    id: 4052,
    cp: 16813,
    name: "Salmeroncillos",
    provincia_id: 16
  },
  {
    id: 4053,
    cp: 16840,
    name: "Villar de Domingo García",
    provincia_id: 16
  },
  {
    id: 4054,
    cp: 16841,
    name: "Albalate de las Nogueras",
    provincia_id: 16
  },
  {
    id: 4055,
    cp: 16842,
    name: "Torralba",
    provincia_id: 16
  },
  {
    id: 4056,
    cp: 16843,
    name: "Villas de la Ventosa",
    provincia_id: 16
  },
  {
    id: 4057,
    cp: 16850,
    name: "Ca?averas",
    provincia_id: 16
  },
  {
    id: 4058,
    cp: 16851,
    name: "Buciegas",
    provincia_id: 16
  },
  {
    id: 4059,
    cp: 16852,
    name: "Olmeda de la Cuesta",
    provincia_id: 16
  },
  {
    id: 4060,
    cp: 16853,
    name: "Olmedilla de Eliz",
    provincia_id: 16
  },
  {
    id: 4061,
    cp: 16854,
    name: "Castillo-Albará?ez",
    provincia_id: 16
  },
  {
    id: 4062,
    cp: 16855,
    name: "Arrancacepas",
    provincia_id: 16
  },
  {
    id: 4063,
    cp: 16857,
    name: "Canalejas del Arroyo",
    provincia_id: 16
  },
  {
    id: 4064,
    cp: 16860,
    name: "Villaconejos de Trabaque",
    provincia_id: 16
  },
  {
    id: 4065,
    cp: 16870,
    name: "Beteta",
    provincia_id: 16
  },
  {
    id: 4066,
    cp: 16878,
    name: "Poyatos",
    provincia_id: 16
  },
  {
    id: 4067,
    cp: 16878,
    name: "Masegosa",
    provincia_id: 16
  },
  {
    id: 4068,
    cp: 16878,
    name: "Lagunaseca",
    provincia_id: 16
  },
  {
    id: 4069,
    cp: 16878,
    name: "Santa María del Val",
    provincia_id: 16
  },
  {
    id: 4070,
    cp: 16879,
    name: "Valsalobre",
    provincia_id: 16
  },
  {
    id: 4071,
    cp: 16879,
    name: "Beteta",
    provincia_id: 16
  },
  {
    id: 4072,
    cp: 16879,
    name: "Carrascosa",
    provincia_id: 16
  },
  {
    id: 4073,
    cp: 16879,
    name: "Cueva del Hierro",
    provincia_id: 16
  },
  {
    id: 4074,
    cp: 16890,
    name: "Ca?izares",
    provincia_id: 16
  },
  {
    id: 4075,
    cp: 16890,
    name: "Ca?amares",
    provincia_id: 16
  },
  {
    id: 4076,
    cp: 16890,
    name: "Fuertescusa",
    provincia_id: 16
  },
  {
    id: 4077,
    cp: 16891,
    name: "Carrascosa",
    provincia_id: 16
  },
  {
    id: 4078,
    cp: 16891,
    name: "Ca?izares",
    provincia_id: 16
  },
  {
    id: 4079,
    cp: 16892,
    name: "Ca?izares",
    provincia_id: 16
  },
  {
    id: 4080,
    cp: 16893,
    name: "Beteta",
    provincia_id: 16
  },
  {
    id: 4081,
    cp: 17001,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4082,
    cp: 17002,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4083,
    cp: 17003,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4084,
    cp: 17004,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4085,
    cp: 17005,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4086,
    cp: 17006,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4087,
    cp: 17007,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4088,
    cp: 17100,
    name: "La Bisbal d'Empord?",
    provincia_id: 17
  },
  {
    id: 4089,
    cp: 17110,
    name: "Forallac",
    provincia_id: 17
  },
  {
    id: 4090,
    cp: 17111,
    name: "Forallac",
    provincia_id: 17
  },
  {
    id: 4091,
    cp: 17113,
    name: "Forallac",
    provincia_id: 17
  },
  {
    id: 4092,
    cp: 17114,
    name: "Ullastret",
    provincia_id: 17
  },
  {
    id: 4093,
    cp: 17116,
    name: "Cru?lles, Monells i Sant Sadurní de l'Heura",
    provincia_id: 17
  },
  {
    id: 4094,
    cp: 17117,
    name: "Cru?lles, Monells i Sant Sadurní de l'Heura",
    provincia_id: 17
  },
  {
    id: 4095,
    cp: 17118,
    name: "Cru?lles, Monells i Sant Sadurní de l'Heura",
    provincia_id: 17
  },
  {
    id: 4096,
    cp: 17120,
    name: "La Pera",
    provincia_id: 17
  },
  {
    id: 4097,
    cp: 17121,
    name: "Corç?",
    provincia_id: 17
  },
  {
    id: 4098,
    cp: 17121,
    name: "Cru?lles, Monells i Sant Sadurní de l'Heura",
    provincia_id: 17
  },
  {
    id: 4099,
    cp: 17124,
    name: "Palafrugell",
    provincia_id: 17
  },
  {
    id: 4100,
    cp: 17130,
    name: "Torroella de Montgrí",
    provincia_id: 17
  },
  {
    id: 4101,
    cp: 17130,
    name: "L'Escala",
    provincia_id: 17
  },
  {
    id: 4102,
    cp: 17131,
    name: "Rupi?",
    provincia_id: 17
  },
  {
    id: 4103,
    cp: 17132,
    name: "Foix?",
    provincia_id: 17
  },
  {
    id: 4104,
    cp: 17133,
    name: "Ultramort",
    provincia_id: 17
  },
  {
    id: 4105,
    cp: 17133,
    name: "Serra de Daró",
    provincia_id: 17
  },
  {
    id: 4106,
    cp: 17133,
    name: "Foix?",
    provincia_id: 17
  },
  {
    id: 4107,
    cp: 17133,
    name: "Parlav?",
    provincia_id: 17
  },
  {
    id: 4108,
    cp: 17134,
    name: "La Tallada d'Empord?",
    provincia_id: 17
  },
  {
    id: 4109,
    cp: 17135,
    name: "La Tallada d'Empord?",
    provincia_id: 17
  },
  {
    id: 4110,
    cp: 17136,
    name: "Albons",
    provincia_id: 17
  },
  {
    id: 4111,
    cp: 17137,
    name: "Ventalló",
    provincia_id: 17
  },
  {
    id: 4112,
    cp: 17137,
    name: "Viladamat",
    provincia_id: 17
  },
  {
    id: 4113,
    cp: 17140,
    name: "Torroella de Montgrí",
    provincia_id: 17
  },
  {
    id: 4114,
    cp: 17140,
    name: "Ull?",
    provincia_id: 17
  },
  {
    id: 4115,
    cp: 17141,
    name: "Bellcaire d'Empord?",
    provincia_id: 17
  },
  {
    id: 4116,
    cp: 17141,
    name: "Torroella de Montgrí",
    provincia_id: 17
  },
  {
    id: 4117,
    cp: 17142,
    name: "Verges",
    provincia_id: 17
  },
  {
    id: 4118,
    cp: 17143,
    name: "Jafre",
    provincia_id: 17
  },
  {
    id: 4119,
    cp: 17144,
    name: "Vilopriu",
    provincia_id: 17
  },
  {
    id: 4120,
    cp: 17144,
    name: "Colomers",
    provincia_id: 17
  },
  {
    id: 4121,
    cp: 17150,
    name: "Sant Gregori",
    provincia_id: 17
  },
  {
    id: 4122,
    cp: 17151,
    name: "Sant Gregori",
    provincia_id: 17
  },
  {
    id: 4123,
    cp: 17152,
    name: "Sant Martí de Llémena",
    provincia_id: 17
  },
  {
    id: 4124,
    cp: 17153,
    name: "Sant Martí de Llémena",
    provincia_id: 17
  },
  {
    id: 4125,
    cp: 17154,
    name: "Sant Aniol de Finestres",
    provincia_id: 17
  },
  {
    id: 4126,
    cp: 17160,
    name: "Angl?s",
    provincia_id: 17
  },
  {
    id: 4127,
    cp: 17161,
    name: "Osor",
    provincia_id: 17
  },
  {
    id: 4128,
    cp: 17162,
    name: "Bescanó",
    provincia_id: 17
  },
  {
    id: 4129,
    cp: 17163,
    name: "Bescanó",
    provincia_id: 17
  },
  {
    id: 4130,
    cp: 17164,
    name: "Sant Martí de Llémena",
    provincia_id: 17
  },
  {
    id: 4131,
    cp: 17164,
    name: "Sant Juli? del Llor i Bonmatí",
    provincia_id: 17
  },
  {
    id: 4132,
    cp: 17164,
    name: "Sant Gregori",
    provincia_id: 17
  },
  {
    id: 4133,
    cp: 17165,
    name: "La Cellera de Ter",
    provincia_id: 17
  },
  {
    id: 4134,
    cp: 17166,
    name: "La Cellera de Ter",
    provincia_id: 17
  },
  {
    id: 4135,
    cp: 17166,
    name: "Susqueda",
    provincia_id: 17
  },
  {
    id: 4136,
    cp: 17170,
    name: "Amer",
    provincia_id: 17
  },
  {
    id: 4137,
    cp: 17171,
    name: "Susqueda",
    provincia_id: 17
  },
  {
    id: 4138,
    cp: 17171,
    name: "Sant Aniol de Finestres",
    provincia_id: 17
  },
  {
    id: 4139,
    cp: 17172,
    name: "Les Planes d'Hostoles",
    provincia_id: 17
  },
  {
    id: 4140,
    cp: 17173,
    name: "Les Planes d'Hostoles",
    provincia_id: 17
  },
  {
    id: 4141,
    cp: 17174,
    name: "Sant Feliu de Pallerols",
    provincia_id: 17
  },
  {
    id: 4142,
    cp: 17176,
    name: "La Vall d'en Bas",
    provincia_id: 17
  },
  {
    id: 4143,
    cp: 17177,
    name: "La Vall d'en Bas",
    provincia_id: 17
  },
  {
    id: 4144,
    cp: 17178,
    name: "Les Preses",
    provincia_id: 17
  },
  {
    id: 4145,
    cp: 17178,
    name: "La Vall d'en Bas",
    provincia_id: 17
  },
  {
    id: 4146,
    cp: 17179,
    name: "Riudaura",
    provincia_id: 17
  },
  {
    id: 4147,
    cp: 17179,
    name: "La Vall d'en Bas",
    provincia_id: 17
  },
  {
    id: 4148,
    cp: 17180,
    name: "Vilablareix",
    provincia_id: 17
  },
  {
    id: 4149,
    cp: 17181,
    name: "Aiguaviva",
    provincia_id: 17
  },
  {
    id: 4150,
    cp: 17182,
    name: "Bescanó",
    provincia_id: 17
  },
  {
    id: 4151,
    cp: 17183,
    name: "Vilobí d'Onyar",
    provincia_id: 17
  },
  {
    id: 4152,
    cp: 17184,
    name: "Vilobí d'Onyar",
    provincia_id: 17
  },
  {
    id: 4153,
    cp: 17185,
    name: "Vilobí d'Onyar",
    provincia_id: 17
  },
  {
    id: 4154,
    cp: 17190,
    name: "Salt",
    provincia_id: 17
  },
  {
    id: 4155,
    cp: 17199,
    name: "Canet d'Adri",
    provincia_id: 17
  },
  {
    id: 4156,
    cp: 17199,
    name: "Sant Gregori",
    provincia_id: 17
  },
  {
    id: 4157,
    cp: 17200,
    name: "Palafrugell",
    provincia_id: 17
  },
  {
    id: 4158,
    cp: 17210,
    name: "Palafrugell",
    provincia_id: 17
  },
  {
    id: 4159,
    cp: 17211,
    name: "Palafrugell",
    provincia_id: 17
  },
  {
    id: 4160,
    cp: 17212,
    name: "Palafrugell",
    provincia_id: 17
  },
  {
    id: 4161,
    cp: 17213,
    name: "Begur",
    provincia_id: 17
  },
  {
    id: 4162,
    cp: 17213,
    name: "Palafrugell",
    provincia_id: 17
  },
  {
    id: 4163,
    cp: 17214,
    name: "Regencós",
    provincia_id: 17
  },
  {
    id: 4164,
    cp: 17220,
    name: "Sant Feliu de Guíxols",
    provincia_id: 17
  },
  {
    id: 4165,
    cp: 17230,
    name: "Palamós",
    provincia_id: 17
  },
  {
    id: 4166,
    cp: 17240,
    name: "Llagostera",
    provincia_id: 17
  },
  {
    id: 4167,
    cp: 17240,
    name: "Santa Cristina d'Aro",
    provincia_id: 17
  },
  {
    id: 4168,
    cp: 17241,
    name: "Quart",
    provincia_id: 17
  },
  {
    id: 4169,
    cp: 17242,
    name: "Quart",
    provincia_id: 17
  },
  {
    id: 4170,
    cp: 17243,
    name: "Llambilles",
    provincia_id: 17
  },
  {
    id: 4171,
    cp: 17244,
    name: "Cass? de la Selva",
    provincia_id: 17
  },
  {
    id: 4172,
    cp: 17244,
    name: "Cru?lles, Monells i Sant Sadurní de l'Heura",
    provincia_id: 17
  },
  {
    id: 4173,
    cp: 17245,
    name: "Santa Cristina d'Aro",
    provincia_id: 17
  },
  {
    id: 4174,
    cp: 17246,
    name: "Santa Cristina d'Aro",
    provincia_id: 17
  },
  {
    id: 4175,
    cp: 17248,
    name: "Sant Feliu de Guíxols",
    provincia_id: 17
  },
  {
    id: 4176,
    cp: 17248,
    name: "Castell-Platja d'Aro",
    provincia_id: 17
  },
  {
    id: 4177,
    cp: 17249,
    name: "Castell-Platja d'Aro",
    provincia_id: 17
  },
  {
    id: 4178,
    cp: 17250,
    name: "Castell-Platja d'Aro",
    provincia_id: 17
  },
  {
    id: 4179,
    cp: 17251,
    name: "Calonge",
    provincia_id: 17
  },
  {
    id: 4180,
    cp: 17252,
    name: "Calonge",
    provincia_id: 17
  },
  {
    id: 4181,
    cp: 17253,
    name: "Mont-ras",
    provincia_id: 17
  },
  {
    id: 4182,
    cp: 17253,
    name: "Vall-llobrega",
    provincia_id: 17
  },
  {
    id: 4183,
    cp: 17255,
    name: "Begur",
    provincia_id: 17
  },
  {
    id: 4184,
    cp: 17256,
    name: "Pals",
    provincia_id: 17
  },
  {
    id: 4185,
    cp: 17256,
    name: "Palau-sator",
    provincia_id: 17
  },
  {
    id: 4186,
    cp: 17257,
    name: "Torroella de Montgrí",
    provincia_id: 17
  },
  {
    id: 4187,
    cp: 17257,
    name: "Gualta",
    provincia_id: 17
  },
  {
    id: 4188,
    cp: 17257,
    name: "Fontanilles",
    provincia_id: 17
  },
  {
    id: 4189,
    cp: 17258,
    name: "Torroella de Montgrí",
    provincia_id: 17
  },
  {
    id: 4190,
    cp: 17300,
    name: "Blanes",
    provincia_id: 17
  },
  {
    id: 4191,
    cp: 17310,
    name: "Lloret de Mar",
    provincia_id: 17
  },
  {
    id: 4192,
    cp: 17320,
    name: "Palamós",
    provincia_id: 17
  },
  {
    id: 4193,
    cp: 17320,
    name: "Tossa de Mar",
    provincia_id: 17
  },
  {
    id: 4194,
    cp: 17400,
    name: "Breda",
    provincia_id: 17
  },
  {
    id: 4195,
    cp: 17401,
    name: "Arbúcies",
    provincia_id: 17
  },
  {
    id: 4196,
    cp: 17402,
    name: "Arbúcies",
    provincia_id: 17
  },
  {
    id: 4197,
    cp: 17403,
    name: "Sant Hilari Sacalm",
    provincia_id: 17
  },
  {
    id: 4198,
    cp: 17404,
    name: "Riells i Viabrea",
    provincia_id: 17
  },
  {
    id: 4199,
    cp: 17405,
    name: "Espinelves",
    provincia_id: 17
  },
  {
    id: 4200,
    cp: 17406,
    name: "Viladrau",
    provincia_id: 17
  },
  {
    id: 4201,
    cp: 17410,
    name: "Sils",
    provincia_id: 17
  },
  {
    id: 4202,
    cp: 17411,
    name: "Vidreres",
    provincia_id: 17
  },
  {
    id: 4203,
    cp: 17412,
    name: "Maçanet de la Selva",
    provincia_id: 17
  },
  {
    id: 4204,
    cp: 17420,
    name: "Sils",
    provincia_id: 17
  },
  {
    id: 4205,
    cp: 17421,
    name: "Riudarenes",
    provincia_id: 17
  },
  {
    id: 4206,
    cp: 17430,
    name: "Santa Coloma de Farners",
    provincia_id: 17
  },
  {
    id: 4207,
    cp: 17430,
    name: "Lloret de Mar",
    provincia_id: 17
  },
  {
    id: 4208,
    cp: 17441,
    name: "Brunyola",
    provincia_id: 17
  },
  {
    id: 4209,
    cp: 17450,
    name: "Hostalric",
    provincia_id: 17
  },
  {
    id: 4210,
    cp: 17451,
    name: "Sant Feliu de Buixalleu",
    provincia_id: 17
  },
  {
    id: 4211,
    cp: 17452,
    name: "Massanes",
    provincia_id: 17
  },
  {
    id: 4212,
    cp: 17454,
    name: "Sant Andreu Salou",
    provincia_id: 17
  },
  {
    id: 4213,
    cp: 17455,
    name: "Caldes de Malavella",
    provincia_id: 17
  },
  {
    id: 4214,
    cp: 17456,
    name: "Caldes de Malavella",
    provincia_id: 17
  },
  {
    id: 4215,
    cp: 17457,
    name: "Riudellots de la Selva",
    provincia_id: 17
  },
  {
    id: 4216,
    cp: 17458,
    name: "Fornells de la Selva",
    provincia_id: 17
  },
  {
    id: 4217,
    cp: 17459,
    name: "Campllong",
    provincia_id: 17
  },
  {
    id: 4218,
    cp: 17460,
    name: "Celr?",
    provincia_id: 17
  },
  {
    id: 4219,
    cp: 17461,
    name: "Girona",
    provincia_id: 17
  },
  {
    id: 4220,
    cp: 17462,
    name: "Bordils",
    provincia_id: 17
  },
  {
    id: 4221,
    cp: 17462,
    name: "Sant Martí Vell",
    provincia_id: 17
  },
  {
    id: 4222,
    cp: 17462,
    name: "Madremanya",
    provincia_id: 17
  },
  {
    id: 4223,
    cp: 17462,
    name: "Jui?",
    provincia_id: 17
  },
  {
    id: 4224,
    cp: 17463,
    name: "Flaç?",
    provincia_id: 17
  },
  {
    id: 4225,
    cp: 17463,
    name: "Foix?",
    provincia_id: 17
  },
  {
    id: 4226,
    cp: 17463,
    name: "Sant Joan de Mollet",
    provincia_id: 17
  },
  {
    id: 4227,
    cp: 17464,
    name: "Cervi? de Ter",
    provincia_id: 17
  },
  {
    id: 4228,
    cp: 17464,
    name: "Viladasens",
    provincia_id: 17
  },
  {
    id: 4229,
    cp: 17464,
    name: "Sant Jordi Desvalls",
    provincia_id: 17
  },
  {
    id: 4230,
    cp: 17465,
    name: "Saus, Camallera i Llampaies",
    provincia_id: 17
  },
  {
    id: 4231,
    cp: 17466,
    name: "Vilopriu",
    provincia_id: 17
  },
  {
    id: 4232,
    cp: 17466,
    name: "Garrigoles",
    provincia_id: 17
  },
  {
    id: 4233,
    cp: 17467,
    name: "Saus, Camallera i Llampaies",
    provincia_id: 17
  },
  {
    id: 4234,
    cp: 17467,
    name: "Sant Mori",
    provincia_id: 17
  },
  {
    id: 4235,
    cp: 17468,
    name: "Vilademuls",
    provincia_id: 17
  },
  {
    id: 4236,
    cp: 17468,
    name: "B?scara",
    provincia_id: 17
  },
  {
    id: 4237,
    cp: 17469,
    name: "Forti?",
    provincia_id: 17
  },
  {
    id: 4238,
    cp: 17469,
    name: "Vilamalla",
    provincia_id: 17
  },
  {
    id: 4239,
    cp: 17469,
    name: "El Far d'Empord?",
    provincia_id: 17
  },
  {
    id: 4240,
    cp: 17469,
    name: "Riumors",
    provincia_id: 17
  },
  {
    id: 4241,
    cp: 17469,
    name: "Siurana",
    provincia_id: 17
  },
  {
    id: 4242,
    cp: 17470,
    name: "Sant Pere Pescador",
    provincia_id: 17
  },
  {
    id: 4243,
    cp: 17472,
    name: "L'Armentera",
    provincia_id: 17
  },
  {
    id: 4244,
    cp: 17472,
    name: "Ventalló",
    provincia_id: 17
  },
  {
    id: 4245,
    cp: 17473,
    name: "Ventalló",
    provincia_id: 17
  },
  {
    id: 4246,
    cp: 17474,
    name: "Torroella de Fluvi?",
    provincia_id: 17
  },
  {
    id: 4247,
    cp: 17474,
    name: "Vilamacolum",
    provincia_id: 17
  },
  {
    id: 4248,
    cp: 17475,
    name: "Ventalló",
    provincia_id: 17
  },
  {
    id: 4249,
    cp: 17475,
    name: "Sant Miquel de Fluvi?",
    provincia_id: 17
  },
  {
    id: 4250,
    cp: 17476,
    name: "Garrig?s",
    provincia_id: 17
  },
  {
    id: 4251,
    cp: 17476,
    name: "Palau de Santa Eul?lia",
    provincia_id: 17
  },
  {
    id: 4252,
    cp: 17480,
    name: "Roses",
    provincia_id: 17
  },
  {
    id: 4253,
    cp: 17481,
    name: "Sant Juli? de Ramis",
    provincia_id: 17
  },
  {
    id: 4254,
    cp: 17482,
    name: "Sant Juli? de Ramis",
    provincia_id: 17
  },
  {
    id: 4255,
    cp: 17483,
    name: "Vilaür",
    provincia_id: 17
  },
  {
    id: 4256,
    cp: 17483,
    name: "B?scara",
    provincia_id: 17
  },
  {
    id: 4257,
    cp: 17484,
    name: "Figueres",
    provincia_id: 17
  },
  {
    id: 4258,
    cp: 17485,
    name: "Vila-sacra",
    provincia_id: 17
  },
  {
    id: 4259,
    cp: 17486,
    name: "Castelló d'Empúries",
    provincia_id: 17
  },
  {
    id: 4260,
    cp: 17487,
    name: "Castelló d'Empúries",
    provincia_id: 17
  },
  {
    id: 4261,
    cp: 17488,
    name: "Cadaqués",
    provincia_id: 17
  },
  {
    id: 4262,
    cp: 17489,
    name: "El Port de la Selva",
    provincia_id: 17
  },
  {
    id: 4263,
    cp: 17489,
    name: "La Selva de Mar",
    provincia_id: 17
  },
  {
    id: 4264,
    cp: 17490,
    name: "Llanç?",
    provincia_id: 17
  },
  {
    id: 4265,
    cp: 17491,
    name: "Peralada",
    provincia_id: 17
  },
  {
    id: 4266,
    cp: 17492,
    name: "Peralada",
    provincia_id: 17
  },
  {
    id: 4267,
    cp: 17493,
    name: "Vilaju?ga",
    provincia_id: 17
  },
  {
    id: 4268,
    cp: 17493,
    name: "Pedret i Marz?",
    provincia_id: 17
  },
  {
    id: 4269,
    cp: 17494,
    name: "Pau",
    provincia_id: 17
  },
  {
    id: 4270,
    cp: 17495,
    name: "Palau-saverdera",
    provincia_id: 17
  },
  {
    id: 4271,
    cp: 17496,
    name: "Colera",
    provincia_id: 17
  },
  {
    id: 4272,
    cp: 17497,
    name: "Portbou",
    provincia_id: 17
  },
  {
    id: 4273,
    cp: 17500,
    name: "Ripoll",
    provincia_id: 17
  },
  {
    id: 4274,
    cp: 17512,
    name: "Les Llosses",
    provincia_id: 17
  },
  {
    id: 4275,
    cp: 17513,
    name: "Les Llosses",
    provincia_id: 17
  },
  {
    id: 4276,
    cp: 17515,
    name: "Vidr?",
    provincia_id: 17
  },
  {
    id: 4277,
    cp: 17520,
    name: "Puigcerd?",
    provincia_id: 17
  },
  {
    id: 4278,
    cp: 17527,
    name: "Llívia",
    provincia_id: 17
  },
  {
    id: 4279,
    cp: 17528,
    name: "Guils de Cerdanya",
    provincia_id: 17
  },
  {
    id: 4280,
    cp: 17529,
    name: "Puigcerd?",
    provincia_id: 17
  },
  {
    id: 4281,
    cp: 17530,
    name: "Campdev?nol",
    provincia_id: 17
  },
  {
    id: 4282,
    cp: 17531,
    name: "Campdev?nol",
    provincia_id: 17
  },
  {
    id: 4283,
    cp: 17531,
    name: "Gombr?n",
    provincia_id: 17
  },
  {
    id: 4284,
    cp: 17532,
    name: "Les Llosses",
    provincia_id: 17
  },
  {
    id: 4285,
    cp: 17534,
    name: "Campelles",
    provincia_id: 17
  },
  {
    id: 4286,
    cp: 17534,
    name: "Ribes de Freser",
    provincia_id: 17
  },
  {
    id: 4287,
    cp: 17534,
    name: "Pardines",
    provincia_id: 17
  },
  {
    id: 4288,
    cp: 17534,
    name: "Queralbs",
    provincia_id: 17
  },
  {
    id: 4289,
    cp: 17535,
    name: "Planoles",
    provincia_id: 17
  },
  {
    id: 4290,
    cp: 17536,
    name: "Toses",
    provincia_id: 17
  },
  {
    id: 4291,
    cp: 17537,
    name: "Alp",
    provincia_id: 17
  },
  {
    id: 4292,
    cp: 17538,
    name: "Alp",
    provincia_id: 17
  },
  {
    id: 4293,
    cp: 17538,
    name: "Urús",
    provincia_id: 17
  },
  {
    id: 4294,
    cp: 17538,
    name: "Das",
    provincia_id: 17
  },
  {
    id: 4295,
    cp: 17538,
    name: "Fontanals de Cerdanya",
    provincia_id: 17
  },
  {
    id: 4296,
    cp: 17539,
    name: "Is?vol",
    provincia_id: 17
  },
  {
    id: 4297,
    cp: 17539,
    name: "Ger",
    provincia_id: 17
  },
  {
    id: 4298,
    cp: 17539,
    name: "Meranges",
    provincia_id: 17
  },
  {
    id: 4299,
    cp: 17539,
    name: "Bolvir",
    provincia_id: 17
  },
  {
    id: 4300,
    cp: 17600,
    name: "Figueres",
    provincia_id: 17
  },
  {
    id: 4301,
    cp: 17700,
    name: "La Jonquera",
    provincia_id: 17
  },
  {
    id: 4302,
    cp: 17700,
    name: "Borrass?",
    provincia_id: 17
  },
  {
    id: 4303,
    cp: 17706,
    name: "Pont de Molins",
    provincia_id: 17
  },
  {
    id: 4304,
    cp: 17707,
    name: "Agullana",
    provincia_id: 17
  },
  {
    id: 4305,
    cp: 17707,
    name: "La Vajol",
    provincia_id: 17
  },
  {
    id: 4306,
    cp: 17708,
    name: "Cantallops",
    provincia_id: 17
  },
  {
    id: 4307,
    cp: 17709,
    name: "La Jonquera",
    provincia_id: 17
  },
  {
    id: 4308,
    cp: 17720,
    name: "Maçanet de Cabrenys",
    provincia_id: 17
  },
  {
    id: 4309,
    cp: 17721,
    name: "Maçanet de Cabrenys",
    provincia_id: 17
  },
  {
    id: 4310,
    cp: 17722,
    name: "Darnius",
    provincia_id: 17
  },
  {
    id: 4311,
    cp: 17723,
    name: "Biure",
    provincia_id: 17
  },
  {
    id: 4312,
    cp: 17723,
    name: "Boadella i les Escaules",
    provincia_id: 17
  },
  {
    id: 4313,
    cp: 17730,
    name: "Llers",
    provincia_id: 17
  },
  {
    id: 4314,
    cp: 17731,
    name: "Terrades",
    provincia_id: 17
  },
  {
    id: 4315,
    cp: 17732,
    name: "Sant Llorenç de la Muga",
    provincia_id: 17
  },
  {
    id: 4316,
    cp: 17733,
    name: "Albany?",
    provincia_id: 17
  },
  {
    id: 4317,
    cp: 17734,
    name: "Albany?",
    provincia_id: 17
  },
  {
    id: 4318,
    cp: 17740,
    name: "Vilafant",
    provincia_id: 17
  },
  {
    id: 4319,
    cp: 17741,
    name: "Vilanant",
    provincia_id: 17
  },
  {
    id: 4320,
    cp: 17741,
    name: "Cistella",
    provincia_id: 17
  },
  {
    id: 4321,
    cp: 17742,
    name: "Avinyonet de Puigventós",
    provincia_id: 17
  },
  {
    id: 4322,
    cp: 17743,
    name: "Vilanant",
    provincia_id: 17
  },
  {
    id: 4323,
    cp: 17744,
    name: "Navata",
    provincia_id: 17
  },
  {
    id: 4324,
    cp: 17745,
    name: "Lladó",
    provincia_id: 17
  },
  {
    id: 4325,
    cp: 17746,
    name: "Cabanelles",
    provincia_id: 17
  },
  {
    id: 4326,
    cp: 17747,
    name: "Cabanelles",
    provincia_id: 17
  },
  {
    id: 4327,
    cp: 17750,
    name: "Capmany",
    provincia_id: 17
  },
  {
    id: 4328,
    cp: 17751,
    name: "Sant Climent Sescebes",
    provincia_id: 17
  },
  {
    id: 4329,
    cp: 17752,
    name: "Mollet de Peralada",
    provincia_id: 17
  },
  {
    id: 4330,
    cp: 17753,
    name: "Espolla",
    provincia_id: 17
  },
  {
    id: 4331,
    cp: 17754,
    name: "Rabós",
    provincia_id: 17
  },
  {
    id: 4332,
    cp: 17755,
    name: "Rabós",
    provincia_id: 17
  },
  {
    id: 4333,
    cp: 17760,
    name: "Vilabertran",
    provincia_id: 17
  },
  {
    id: 4334,
    cp: 17762,
    name: "Masarac",
    provincia_id: 17
  },
  {
    id: 4335,
    cp: 17763,
    name: "Masarac",
    provincia_id: 17
  },
  {
    id: 4336,
    cp: 17770,
    name: "Borrass?",
    provincia_id: 17
  },
  {
    id: 4337,
    cp: 17771,
    name: "Santa Llogaia d'?lguema",
    provincia_id: 17
  },
  {
    id: 4338,
    cp: 17772,
    name: "Ordis",
    provincia_id: 17
  },
  {
    id: 4339,
    cp: 17773,
    name: "Pontós",
    provincia_id: 17
  },
  {
    id: 4340,
    cp: 17780,
    name: "Garriguella",
    provincia_id: 17
  },
  {
    id: 4341,
    cp: 17781,
    name: "Vilamaniscle",
    provincia_id: 17
  },
  {
    id: 4342,
    cp: 17800,
    name: "Olot",
    provincia_id: 17
  },
  {
    id: 4343,
    cp: 17810,
    name: "Olot",
    provincia_id: 17
  },
  {
    id: 4344,
    cp: 17811,
    name: "Santa Pau",
    provincia_id: 17
  },
  {
    id: 4345,
    cp: 17812,
    name: "Olot",
    provincia_id: 17
  },
  {
    id: 4346,
    cp: 17813,
    name: "La Vall de Bianya",
    provincia_id: 17
  },
  {
    id: 4347,
    cp: 17820,
    name: "Banyoles",
    provincia_id: 17
  },
  {
    id: 4348,
    cp: 17830,
    name: "Sant Ferriol",
    provincia_id: 17
  },
  {
    id: 4349,
    cp: 17831,
    name: "Sant Miquel de Campmajor",
    provincia_id: 17
  },
  {
    id: 4350,
    cp: 17832,
    name: "Crespi?",
    provincia_id: 17
  },
  {
    id: 4351,
    cp: 17832,
    name: "Esponell?",
    provincia_id: 17
  },
  {
    id: 4352,
    cp: 17833,
    name: "Fontcoberta",
    provincia_id: 17
  },
  {
    id: 4353,
    cp: 17833,
    name: "Vilademuls",
    provincia_id: 17
  },
  {
    id: 4354,
    cp: 17834,
    name: "Porqueres",
    provincia_id: 17
  },
  {
    id: 4355,
    cp: 17834,
    name: "Camós",
    provincia_id: 17
  },
  {
    id: 4356,
    cp: 17840,
    name: "Sarri? de Ter",
    provincia_id: 17
  },
  {
    id: 4357,
    cp: 17843,
    name: "Palol de Revardit",
    provincia_id: 17
  },
  {
    id: 4358,
    cp: 17844,
    name: "Cornell? del Terri",
    provincia_id: 17
  },
  {
    id: 4359,
    cp: 17846,
    name: "Porqueres",
    provincia_id: 17
  },
  {
    id: 4360,
    cp: 17850,
    name: "Beuda",
    provincia_id: 17
  },
  {
    id: 4361,
    cp: 17850,
    name: "Sant Ferriol",
    provincia_id: 17
  },
  {
    id: 4362,
    cp: 17850,
    name: "Besalú",
    provincia_id: 17
  },
  {
    id: 4363,
    cp: 17851,
    name: "Mai? de Montcal",
    provincia_id: 17
  },
  {
    id: 4364,
    cp: 17851,
    name: "Beuda",
    provincia_id: 17
  },
  {
    id: 4365,
    cp: 17852,
    name: "Seriny?",
    provincia_id: 17
  },
  {
    id: 4366,
    cp: 17853,
    name: "Sales de Llierca",
    provincia_id: 17
  },
  {
    id: 4367,
    cp: 17853,
    name: "Argelaguer",
    provincia_id: 17
  },
  {
    id: 4368,
    cp: 17853,
    name: "Tortell?",
    provincia_id: 17
  },
  {
    id: 4369,
    cp: 17854,
    name: "Camós",
    provincia_id: 17
  },
  {
    id: 4370,
    cp: 17854,
    name: "Sant Jaume de Llierca",
    provincia_id: 17
  },
  {
    id: 4371,
    cp: 17855,
    name: "Montagut i Oix",
    provincia_id: 17
  },
  {
    id: 4372,
    cp: 17856,
    name: "Montagut i Oix",
    provincia_id: 17
  },
  {
    id: 4373,
    cp: 17856,
    name: "Castellfollit de la Roca",
    provincia_id: 17
  },
  {
    id: 4374,
    cp: 17857,
    name: "Sant Joan les Fonts",
    provincia_id: 17
  },
  {
    id: 4375,
    cp: 17858,
    name: "La Vall de Bianya",
    provincia_id: 17
  },
  {
    id: 4376,
    cp: 17860,
    name: "Sant Joan de les Abadesses",
    provincia_id: 17
  },
  {
    id: 4377,
    cp: 17861,
    name: "Ogassa",
    provincia_id: 17
  },
  {
    id: 4378,
    cp: 17862,
    name: "Vallfogona de Ripoll?s",
    provincia_id: 17
  },
  {
    id: 4379,
    cp: 17864,
    name: "Sant Pau de Segúries",
    provincia_id: 17
  },
  {
    id: 4380,
    cp: 17865,
    name: "Sant Pau de Segúries",
    provincia_id: 17
  },
  {
    id: 4381,
    cp: 17867,
    name: "Camprodon",
    provincia_id: 17
  },
  {
    id: 4382,
    cp: 17868,
    name: "Molló",
    provincia_id: 17
  },
  {
    id: 4383,
    cp: 17869,
    name: "Llanars",
    provincia_id: 17
  },
  {
    id: 4384,
    cp: 17869,
    name: "Vilallonga de Ter",
    provincia_id: 17
  },
  {
    id: 4385,
    cp: 17869,
    name: "Setcases",
    provincia_id: 17
  },
  {
    id: 4386,
    cp: 18001,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4387,
    cp: 18002,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4388,
    cp: 18003,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4389,
    cp: 18004,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4390,
    cp: 18005,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4391,
    cp: 18006,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4392,
    cp: 18007,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4393,
    cp: 18008,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4394,
    cp: 18009,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4395,
    cp: 18010,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4396,
    cp: 18011,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4397,
    cp: 18012,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4398,
    cp: 18013,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4399,
    cp: 18014,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4400,
    cp: 18015,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4401,
    cp: 18053,
    name: "Cortes de Baza",
    provincia_id: 18
  },
  {
    id: 4402,
    cp: 18100,
    name: "Armilla",
    provincia_id: 18
  },
  {
    id: 4403,
    cp: 18101,
    name: "Vegas del Genil",
    provincia_id: 18
  },
  {
    id: 4404,
    cp: 18102,
    name: "Vegas del Genil",
    provincia_id: 18
  },
  {
    id: 4405,
    cp: 18110,
    name: "Las Gabias",
    provincia_id: 18
  },
  {
    id: 4406,
    cp: 18120,
    name: "Alhama de Granada",
    provincia_id: 18
  },
  {
    id: 4407,
    cp: 18126,
    name: "Arenas del Rey",
    provincia_id: 18
  },
  {
    id: 4408,
    cp: 18127,
    name: "Arenas del Rey",
    provincia_id: 18
  },
  {
    id: 4409,
    cp: 18127,
    name: "Jayena",
    provincia_id: 18
  },
  {
    id: 4410,
    cp: 18128,
    name: "Alhama de Granada",
    provincia_id: 18
  },
  {
    id: 4411,
    cp: 18128,
    name: "Zafarraya",
    provincia_id: 18
  },
  {
    id: 4412,
    cp: 18129,
    name: "Cacín",
    provincia_id: 18
  },
  {
    id: 4413,
    cp: 18129,
    name: "Santa Cruz del Comercio",
    provincia_id: 18
  },
  {
    id: 4414,
    cp: 18129,
    name: "Arenas del Rey",
    provincia_id: 18
  },
  {
    id: 4415,
    cp: 18130,
    name: "La Malahá",
    provincia_id: 18
  },
  {
    id: 4416,
    cp: 18130,
    name: "Escúzar",
    provincia_id: 18
  },
  {
    id: 4417,
    cp: 18131,
    name: "Ventas de Huelma",
    provincia_id: 18
  },
  {
    id: 4418,
    cp: 18132,
    name: "Agrón",
    provincia_id: 18
  },
  {
    id: 4419,
    cp: 18140,
    name: "La Zubia",
    provincia_id: 18
  },
  {
    id: 4420,
    cp: 18140,
    name: "Horche",
    provincia_id: 19
  },
  {
    id: 4421,
    cp: 18150,
    name: "Gójar",
    provincia_id: 18
  },
  {
    id: 4422,
    cp: 18151,
    name: "Ogíjares",
    provincia_id: 18
  },
  {
    id: 4423,
    cp: 18152,
    name: "Dílar",
    provincia_id: 18
  },
  {
    id: 4424,
    cp: 18160,
    name: "Güéjar Sierra",
    provincia_id: 18
  },
  {
    id: 4425,
    cp: 18170,
    name: "Alfacar",
    provincia_id: 18
  },
  {
    id: 4426,
    cp: 18179,
    name: "Víznar",
    provincia_id: 18
  },
  {
    id: 4427,
    cp: 18179,
    name: "Alfacar",
    provincia_id: 18
  },
  {
    id: 4428,
    cp: 18180,
    name: "Diezma",
    provincia_id: 18
  },
  {
    id: 4429,
    cp: 18181,
    name: "Darro",
    provincia_id: 18
  },
  {
    id: 4430,
    cp: 18181,
    name: "La Peza",
    provincia_id: 18
  },
  {
    id: 4431,
    cp: 18182,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4432,
    cp: 18183,
    name: "Huétor de Santillán",
    provincia_id: 18
  },
  {
    id: 4433,
    cp: 18184,
    name: "Beas de Granada",
    provincia_id: 18
  },
  {
    id: 4434,
    cp: 18185,
    name: "Huétor de Santillán",
    provincia_id: 18
  },
  {
    id: 4435,
    cp: 18190,
    name: "Granada",
    provincia_id: 18
  },
  {
    id: 4436,
    cp: 18190,
    name: "Cenes de la Vega",
    provincia_id: 18
  },
  {
    id: 4437,
    cp: 18191,
    name: "Pinos Genil",
    provincia_id: 18
  },
  {
    id: 4438,
    cp: 18191,
    name: "Güéjar Sierra",
    provincia_id: 18
  },
  {
    id: 4439,
    cp: 18192,
    name: "Quéntar",
    provincia_id: 18
  },
  {
    id: 4440,
    cp: 18192,
    name: "Dúdar",
    provincia_id: 18
  },
  {
    id: 4441,
    cp: 18193,
    name: "Monachil",
    provincia_id: 18
  },
  {
    id: 4442,
    cp: 18194,
    name: "Las Gabias",
    provincia_id: 18
  },
  {
    id: 4443,
    cp: 18194,
    name: "Churriana de la Vega",
    provincia_id: 18
  },
  {
    id: 4444,
    cp: 18195,
    name: "Cúllar Vega",
    provincia_id: 18
  },
  {
    id: 4445,
    cp: 18196,
    name: "Monachil",
    provincia_id: 18
  },
  {
    id: 4446,
    cp: 18197,
    name: "Pulianas",
    provincia_id: 18
  },
  {
    id: 4447,
    cp: 18198,
    name: "Huétor Vega",
    provincia_id: 18
  },
  {
    id: 4448,
    cp: 18199,
    name: "Cájar",
    provincia_id: 18
  },
  {
    id: 4449,
    cp: 18200,
    name: "Maracena",
    provincia_id: 18
  },
  {
    id: 4450,
    cp: 18210,
    name: "Peligros",
    provincia_id: 18
  },
  {
    id: 4451,
    cp: 18210,
    name: "Pulianas",
    provincia_id: 18
  },
  {
    id: 4452,
    cp: 18211,
    name: "Cogollos de la Vega",
    provincia_id: 18
  },
  {
    id: 4453,
    cp: 18212,
    name: "Güevéjar",
    provincia_id: 18
  },
  {
    id: 4454,
    cp: 18213,
    name: "Jun",
    provincia_id: 18
  },
  {
    id: 4455,
    cp: 18214,
    name: "Nívar",
    provincia_id: 18
  },
  {
    id: 4456,
    cp: 18220,
    name: "Albolote",
    provincia_id: 18
  },
  {
    id: 4457,
    cp: 18230,
    name: "Atarfe",
    provincia_id: 18
  },
  {
    id: 4458,
    cp: 18240,
    name: "Pinos Puente",
    provincia_id: 18
  },
  {
    id: 4459,
    cp: 18247,
    name: "Moclín",
    provincia_id: 18
  },
  {
    id: 4460,
    cp: 18248,
    name: "Moclín",
    provincia_id: 18
  },
  {
    id: 4461,
    cp: 18249,
    name: "Moclín",
    provincia_id: 18
  },
  {
    id: 4462,
    cp: 18250,
    name: "Pinos Puente",
    provincia_id: 18
  },
  {
    id: 4463,
    cp: 18250,
    name: "Alamedilla",
    provincia_id: 18
  },
  {
    id: 4464,
    cp: 18260,
    name: "Íllora",
    provincia_id: 18
  },
  {
    id: 4465,
    cp: 18270,
    name: "Montefrío",
    provincia_id: 18
  },
  {
    id: 4466,
    cp: 18280,
    name: "Algarinejo",
    provincia_id: 18
  },
  {
    id: 4467,
    cp: 18290,
    name: "Albolote",
    provincia_id: 18
  },
  {
    id: 4468,
    cp: 18290,
    name: "Atarfe",
    provincia_id: 18
  },
  {
    id: 4469,
    cp: 18290,
    name: "Calicasas",
    provincia_id: 18
  },
  {
    id: 4470,
    cp: 18291,
    name: "Pinos Puente",
    provincia_id: 18
  },
  {
    id: 4471,
    cp: 18292,
    name: "Santa Fe",
    provincia_id: 18
  },
  {
    id: 4472,
    cp: 18293,
    name: "Íllora",
    provincia_id: 18
  },
  {
    id: 4473,
    cp: 18294,
    name: "Íllora",
    provincia_id: 18
  },
  {
    id: 4474,
    cp: 18295,
    name: "Algarinejo",
    provincia_id: 18
  },
  {
    id: 4475,
    cp: 18300,
    name: "Loja",
    provincia_id: 18
  },
  {
    id: 4476,
    cp: 18310,
    name: "Salar",
    provincia_id: 18
  },
  {
    id: 4477,
    cp: 18311,
    name: "Zagra",
    provincia_id: 18
  },
  {
    id: 4478,
    cp: 18311,
    name: "Loja",
    provincia_id: 18
  },
  {
    id: 4479,
    cp: 18312,
    name: "Loja",
    provincia_id: 18
  },
  {
    id: 4480,
    cp: 18312,
    name: "Iznájar",
    provincia_id: 14
  },
  {
    id: 4481,
    cp: 18313,
    name: "Loja",
    provincia_id: 18
  },
  {
    id: 4482,
    cp: 18314,
    name: "Loja",
    provincia_id: 18
  },
  {
    id: 4483,
    cp: 18320,
    name: "Santa Fe",
    provincia_id: 18
  },
  {
    id: 4484,
    cp: 18327,
    name: "Láchar",
    provincia_id: 18
  },
  {
    id: 4485,
    cp: 18328,
    name: "Láchar",
    provincia_id: 18
  },
  {
    id: 4486,
    cp: 18328,
    name: "Pinos Puente",
    provincia_id: 18
  },
  {
    id: 4487,
    cp: 18329,
    name: "Chimeneas",
    provincia_id: 18
  },
  {
    id: 4488,
    cp: 18329,
    name: "Santa Fe",
    provincia_id: 18
  },
  {
    id: 4489,
    cp: 18330,
    name: "Atarfe",
    provincia_id: 18
  },
  {
    id: 4490,
    cp: 18330,
    name: "Chauchina",
    provincia_id: 18
  },
  {
    id: 4491,
    cp: 18330,
    name: "Santa Fe",
    provincia_id: 18
  },
  {
    id: 4492,
    cp: 18339,
    name: "Chauchina",
    provincia_id: 18
  },
  {
    id: 4493,
    cp: 18339,
    name: "Cijuela",
    provincia_id: 18
  },
  {
    id: 4494,
    cp: 18340,
    name: "Fuente Vaqueros",
    provincia_id: 18
  },
  {
    id: 4495,
    cp: 18350,
    name: "Íllora",
    provincia_id: 18
  },
  {
    id: 4496,
    cp: 18360,
    name: "Huétor Tájar",
    provincia_id: 18
  },
  {
    id: 4497,
    cp: 18369,
    name: "Villanueva Mesía",
    provincia_id: 18
  },
  {
    id: 4498,
    cp: 18370,
    name: "Moraleda de Zafayona",
    provincia_id: 18
  },
  {
    id: 4499,
    cp: 18380,
    name: "Íllora",
    provincia_id: 18
  },
  {
    id: 4500,
    cp: 18381,
    name: "Íllora",
    provincia_id: 18
  },
  {
    id: 4501,
    cp: 18400,
    name: "Órgiva",
    provincia_id: 18
  },
  {
    id: 4502,
    cp: 18410,
    name: "Soportújar",
    provincia_id: 18
  },
  {
    id: 4503,
    cp: 18410,
    name: "Órgiva",
    provincia_id: 18
  },
  {
    id: 4504,
    cp: 18410,
    name: "Carataunas",
    provincia_id: 18
  },
  {
    id: 4505,
    cp: 18411,
    name: "Pampaneira",
    provincia_id: 18
  },
  {
    id: 4506,
    cp: 18412,
    name: "Bubión",
    provincia_id: 18
  },
  {
    id: 4507,
    cp: 18413,
    name: "Capileira",
    provincia_id: 18
  },
  {
    id: 4508,
    cp: 18414,
    name: "La Taha",
    provincia_id: 18
  },
  {
    id: 4509,
    cp: 18415,
    name: "Pórtugos",
    provincia_id: 18
  },
  {
    id: 4510,
    cp: 18416,
    name: "Busquístar",
    provincia_id: 18
  },
  {
    id: 4511,
    cp: 18416,
    name: "La Taha",
    provincia_id: 18
  },
  {
    id: 4512,
    cp: 18417,
    name: "Trevélez",
    provincia_id: 18
  },
  {
    id: 4513,
    cp: 18418,
    name: "Motril",
    provincia_id: 18
  },
  {
    id: 4514,
    cp: 18418,
    name: "Cá?ar",
    provincia_id: 18
  },
  {
    id: 4515,
    cp: 18418,
    name: "Órgiva",
    provincia_id: 18
  },
  {
    id: 4516,
    cp: 18420,
    name: "Alpujarra de la Sierra",
    provincia_id: 18
  },
  {
    id: 4517,
    cp: 18420,
    name: "Lanjarón",
    provincia_id: 18
  },
  {
    id: 4518,
    cp: 18430,
    name: "Torvizcón",
    provincia_id: 18
  },
  {
    id: 4519,
    cp: 18438,
    name: "Almegíjar",
    provincia_id: 18
  },
  {
    id: 4520,
    cp: 18439,
    name: "Cástaras",
    provincia_id: 18
  },
  {
    id: 4521,
    cp: 18440,
    name: "Cádiar",
    provincia_id: 18
  },
  {
    id: 4522,
    cp: 18448,
    name: "Cádiar",
    provincia_id: 18
  },
  {
    id: 4523,
    cp: 18449,
    name: "Lobras",
    provincia_id: 18
  },
  {
    id: 4524,
    cp: 18450,
    name: "Alpujarra de la Sierra",
    provincia_id: 18
  },
  {
    id: 4525,
    cp: 18451,
    name: "Bérchules",
    provincia_id: 18
  },
  {
    id: 4526,
    cp: 18452,
    name: "Juviles",
    provincia_id: 18
  },
  {
    id: 4527,
    cp: 18460,
    name: "Alpujarra de la Sierra",
    provincia_id: 18
  },
  {
    id: 4528,
    cp: 18470,
    name: "Válor",
    provincia_id: 18
  },
  {
    id: 4529,
    cp: 18480,
    name: "Ugíjar",
    provincia_id: 18
  },
  {
    id: 4530,
    cp: 18490,
    name: "Murtas",
    provincia_id: 18
  },
  {
    id: 4531,
    cp: 18491,
    name: "Turón",
    provincia_id: 18
  },
  {
    id: 4532,
    cp: 18492,
    name: "Murtas",
    provincia_id: 18
  },
  {
    id: 4533,
    cp: 18492,
    name: "Ugíjar",
    provincia_id: 18
  },
  {
    id: 4534,
    cp: 18493,
    name: "Nevada",
    provincia_id: 18
  },
  {
    id: 4535,
    cp: 18494,
    name: "Ugíjar",
    provincia_id: 18
  },
  {
    id: 4536,
    cp: 18494,
    name: "Nevada",
    provincia_id: 18
  },
  {
    id: 4537,
    cp: 18500,
    name: "Guadix",
    provincia_id: 18
  },
  {
    id: 4538,
    cp: 18510,
    name: "Benalúa",
    provincia_id: 18
  },
  {
    id: 4539,
    cp: 18511,
    name: "Valle del Zalabí",
    provincia_id: 18
  },
  {
    id: 4540,
    cp: 18512,
    name: "Dólar",
    provincia_id: 18
  },
  {
    id: 4541,
    cp: 18512,
    name: "La Calahorra",
    provincia_id: 18
  },
  {
    id: 4542,
    cp: 18512,
    name: "Huéneja",
    provincia_id: 18
  },
  {
    id: 4543,
    cp: 18513,
    name: "Ferreira",
    provincia_id: 18
  },
  {
    id: 4544,
    cp: 18514,
    name: "Aldeire",
    provincia_id: 18
  },
  {
    id: 4545,
    cp: 18515,
    name: "Guadix",
    provincia_id: 18
  },
  {
    id: 4546,
    cp: 18515,
    name: "Purullena",
    provincia_id: 18
  },
  {
    id: 4547,
    cp: 18515,
    name: "Fonelas",
    provincia_id: 18
  },
  {
    id: 4548,
    cp: 18516,
    name: "Polícar",
    provincia_id: 18
  },
  {
    id: 4549,
    cp: 18516,
    name: "Lugros",
    provincia_id: 18
  },
  {
    id: 4550,
    cp: 18516,
    name: "Beas de Guadix",
    provincia_id: 18
  },
  {
    id: 4551,
    cp: 18516,
    name: "Marchal",
    provincia_id: 18
  },
  {
    id: 4552,
    cp: 18517,
    name: "La Peza",
    provincia_id: 18
  },
  {
    id: 4553,
    cp: 18517,
    name: "Cortes y Graena",
    provincia_id: 18
  },
  {
    id: 4554,
    cp: 18517,
    name: "Quéntar",
    provincia_id: 18
  },
  {
    id: 4555,
    cp: 18518,
    name: "Albu?án",
    provincia_id: 18
  },
  {
    id: 4556,
    cp: 18518,
    name: "Cogollos de Guadix",
    provincia_id: 18
  },
  {
    id: 4557,
    cp: 18518,
    name: "Jerez del Marquesado",
    provincia_id: 18
  },
  {
    id: 4558,
    cp: 18518,
    name: "Lanteira",
    provincia_id: 18
  },
  {
    id: 4559,
    cp: 18518,
    name: "Alquife",
    provincia_id: 18
  },
  {
    id: 4560,
    cp: 18519,
    name: "Purullena",
    provincia_id: 18
  },
  {
    id: 4561,
    cp: 18519,
    name: "Guadix",
    provincia_id: 18
  },
  {
    id: 4562,
    cp: 18520,
    name: "Alamedilla",
    provincia_id: 18
  },
  {
    id: 4563,
    cp: 18530,
    name: "Pedro Martínez",
    provincia_id: 18
  },
  {
    id: 4564,
    cp: 18538,
    name: "Dehesas de Guadix",
    provincia_id: 18
  },
  {
    id: 4565,
    cp: 18538,
    name: "Alicún de Ortega",
    provincia_id: 18
  },
  {
    id: 4566,
    cp: 18539,
    name: "Villanueva de las Torres",
    provincia_id: 18
  },
  {
    id: 4567,
    cp: 18540,
    name: "Huélago",
    provincia_id: 18
  },
  {
    id: 4568,
    cp: 18540,
    name: "Alpujarra de la Sierra",
    provincia_id: 18
  },
  {
    id: 4569,
    cp: 18540,
    name: "Gobernador",
    provincia_id: 18
  },
  {
    id: 4570,
    cp: 18540,
    name: "Morelábor",
    provincia_id: 18
  },
  {
    id: 4571,
    cp: 18550,
    name: "Iznalloz",
    provincia_id: 18
  },
  {
    id: 4572,
    cp: 18560,
    name: "Guadahortuna",
    provincia_id: 18
  },
  {
    id: 4573,
    cp: 18561,
    name: "Montejícar",
    provincia_id: 18
  },
  {
    id: 4574,
    cp: 18562,
    name: "Pí?ar",
    provincia_id: 18
  },
  {
    id: 4575,
    cp: 18563,
    name: "Gobernador",
    provincia_id: 18
  },
  {
    id: 4576,
    cp: 18563,
    name: "Torre-Cardela",
    provincia_id: 18
  },
  {
    id: 4577,
    cp: 18564,
    name: "Colomera",
    provincia_id: 18
  },
  {
    id: 4578,
    cp: 18565,
    name: "Campotéjar",
    provincia_id: 18
  },
  {
    id: 4579,
    cp: 18566,
    name: "Benalúa de las Villas",
    provincia_id: 18
  },
  {
    id: 4580,
    cp: 18567,
    name: "Iznalloz",
    provincia_id: 18
  },
  {
    id: 4581,
    cp: 18568,
    name: "Pí?ar",
    provincia_id: 18
  },
  {
    id: 4582,
    cp: 18569,
    name: "Montillana",
    provincia_id: 18
  },
  {
    id: 4583,
    cp: 18570,
    name: "Deifontes",
    provincia_id: 18
  },
  {
    id: 4584,
    cp: 18600,
    name: "Motril",
    provincia_id: 18
  },
  {
    id: 4585,
    cp: 18610,
    name: "Salobre?a",
    provincia_id: 18
  },
  {
    id: 4586,
    cp: 18611,
    name: "Molvízar",
    provincia_id: 18
  },
  {
    id: 4587,
    cp: 18612,
    name: "Ítrabo",
    provincia_id: 18
  },
  {
    id: 4588,
    cp: 18613,
    name: "Motril",
    provincia_id: 18
  },
  {
    id: 4589,
    cp: 18614,
    name: "Motril",
    provincia_id: 18
  },
  {
    id: 4590,
    cp: 18614,
    name: "Gualchos",
    provincia_id: 18
  },
  {
    id: 4591,
    cp: 18614,
    name: "Lújar",
    provincia_id: 18
  },
  {
    id: 4592,
    cp: 18615,
    name: "Los Guájares",
    provincia_id: 18
  },
  {
    id: 4593,
    cp: 18615,
    name: "Vélez de Benaudalla",
    provincia_id: 18
  },
  {
    id: 4594,
    cp: 18616,
    name: "Vélez de Benaudalla",
    provincia_id: 18
  },
  {
    id: 4595,
    cp: 18620,
    name: "Alhendín",
    provincia_id: 18
  },
  {
    id: 4596,
    cp: 18620,
    name: "Motril",
    provincia_id: 18
  },
  {
    id: 4597,
    cp: 18630,
    name: "Villa de Otura",
    provincia_id: 18
  },
  {
    id: 4598,
    cp: 18640,
    name: "Padul",
    provincia_id: 18
  },
  {
    id: 4599,
    cp: 18650,
    name: "Dúrcal",
    provincia_id: 18
  },
  {
    id: 4600,
    cp: 18656,
    name: "Lecrín",
    provincia_id: 18
  },
  {
    id: 4601,
    cp: 18657,
    name: "Lecrín",
    provincia_id: 18
  },
  {
    id: 4602,
    cp: 18657,
    name: "Nigüelas",
    provincia_id: 18
  },
  {
    id: 4603,
    cp: 18658,
    name: "El Pinar",
    provincia_id: 18
  },
  {
    id: 4604,
    cp: 18658,
    name: "El Valle",
    provincia_id: 18
  },
  {
    id: 4605,
    cp: 18659,
    name: "Villamena",
    provincia_id: 18
  },
  {
    id: 4606,
    cp: 18659,
    name: "Albu?uelas",
    provincia_id: 18
  },
  {
    id: 4607,
    cp: 18660,
    name: "Lecrín",
    provincia_id: 18
  },
  {
    id: 4608,
    cp: 18660,
    name: "El Pinar",
    provincia_id: 18
  },
  {
    id: 4609,
    cp: 18670,
    name: "Vélez de Benaudalla",
    provincia_id: 18
  },
  {
    id: 4610,
    cp: 18680,
    name: "Salobre?a",
    provincia_id: 18
  },
  {
    id: 4611,
    cp: 18690,
    name: "Salobre?a",
    provincia_id: 18
  },
  {
    id: 4612,
    cp: 18690,
    name: "Almu?écar",
    provincia_id: 18
  },
  {
    id: 4613,
    cp: 18697,
    name: "Almu?écar",
    provincia_id: 18
  },
  {
    id: 4614,
    cp: 18698,
    name: "Otívar",
    provincia_id: 18
  },
  {
    id: 4615,
    cp: 18699,
    name: "Jete",
    provincia_id: 18
  },
  {
    id: 4616,
    cp: 18699,
    name: "Lentegí",
    provincia_id: 18
  },
  {
    id: 4617,
    cp: 18700,
    name: "Albu?ol",
    provincia_id: 18
  },
  {
    id: 4618,
    cp: 18708,
    name: "Albondón",
    provincia_id: 18
  },
  {
    id: 4619,
    cp: 18710,
    name: "Órgiva",
    provincia_id: 18
  },
  {
    id: 4620,
    cp: 18710,
    name: "Polopos",
    provincia_id: 18
  },
  {
    id: 4621,
    cp: 18710,
    name: "Sorvilán",
    provincia_id: 18
  },
  {
    id: 4622,
    cp: 18711,
    name: "Rubite",
    provincia_id: 18
  },
  {
    id: 4623,
    cp: 18713,
    name: "Sorvilán",
    provincia_id: 18
  },
  {
    id: 4624,
    cp: 18720,
    name: "Motril",
    provincia_id: 18
  },
  {
    id: 4625,
    cp: 18730,
    name: "Motril",
    provincia_id: 18
  },
  {
    id: 4626,
    cp: 18740,
    name: "Gualchos",
    provincia_id: 18
  },
  {
    id: 4627,
    cp: 18750,
    name: "Sorvilán",
    provincia_id: 18
  },
  {
    id: 4628,
    cp: 18750,
    name: "Polopos",
    provincia_id: 18
  },
  {
    id: 4629,
    cp: 18760,
    name: "Albu?ol",
    provincia_id: 18
  },
  {
    id: 4630,
    cp: 18770,
    name: "Albu?ol",
    provincia_id: 18
  },
  {
    id: 4631,
    cp: 18800,
    name: "Baza",
    provincia_id: 18
  },
  {
    id: 4632,
    cp: 18810,
    name: "Caniles",
    provincia_id: 18
  },
  {
    id: 4633,
    cp: 18811,
    name: "Zújar",
    provincia_id: 18
  },
  {
    id: 4634,
    cp: 18812,
    name: "Freila",
    provincia_id: 18
  },
  {
    id: 4635,
    cp: 18813,
    name: "Cuevas del Campo",
    provincia_id: 18
  },
  {
    id: 4636,
    cp: 18814,
    name: "Cortes de Baza",
    provincia_id: 18
  },
  {
    id: 4637,
    cp: 18815,
    name: "Cortes de Baza",
    provincia_id: 18
  },
  {
    id: 4638,
    cp: 18816,
    name: "Castril",
    provincia_id: 18
  },
  {
    id: 4639,
    cp: 18817,
    name: "Benamaurel",
    provincia_id: 18
  },
  {
    id: 4640,
    cp: 18818,
    name: "Castilléjar",
    provincia_id: 18
  },
  {
    id: 4641,
    cp: 18819,
    name: "Caniles",
    provincia_id: 18
  },
  {
    id: 4642,
    cp: 18820,
    name: "Puebla de Don Fadrique",
    provincia_id: 18
  },
  {
    id: 4643,
    cp: 18830,
    name: "Huéscar",
    provincia_id: 18
  },
  {
    id: 4644,
    cp: 18830,
    name: "Íllora",
    provincia_id: 18
  },
  {
    id: 4645,
    cp: 18840,
    name: "Galera",
    provincia_id: 18
  },
  {
    id: 4646,
    cp: 18849,
    name: "Galera",
    provincia_id: 18
  },
  {
    id: 4647,
    cp: 18850,
    name: "Cúllar",
    provincia_id: 18
  },
  {
    id: 4648,
    cp: 18857,
    name: "Cúllar",
    provincia_id: 18
  },
  {
    id: 4649,
    cp: 18858,
    name: "Orce",
    provincia_id: 18
  },
  {
    id: 4650,
    cp: 18859,
    name: "Cúllar",
    provincia_id: 18
  },
  {
    id: 4651,
    cp: 18860,
    name: "Baza",
    provincia_id: 18
  },
  {
    id: 4652,
    cp: 18860,
    name: "Guadix",
    provincia_id: 18
  },
  {
    id: 4653,
    cp: 18870,
    name: "Gor",
    provincia_id: 18
  },
  {
    id: 4654,
    cp: 18880,
    name: "Guadix",
    provincia_id: 18
  },
  {
    id: 4655,
    cp: 18890,
    name: "Gorafe",
    provincia_id: 18
  },
  {
    id: 4656,
    cp: 18891,
    name: "Cúllar",
    provincia_id: 18
  },
  {
    id: 4657,
    cp: 19001,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4658,
    cp: 19002,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4659,
    cp: 19003,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4660,
    cp: 19004,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4661,
    cp: 19005,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4662,
    cp: 19080,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4663,
    cp: 19080,
    name: "Yebes",
    provincia_id: 19
  },
  {
    id: 4664,
    cp: 19100,
    name: "Pastrana",
    provincia_id: 19
  },
  {
    id: 4665,
    cp: 19110,
    name: "Mondéjar",
    provincia_id: 19
  },
  {
    id: 4666,
    cp: 19111,
    name: "Yebra",
    provincia_id: 19
  },
  {
    id: 4667,
    cp: 19112,
    name: "Pozo de Almoguera",
    provincia_id: 19
  },
  {
    id: 4668,
    cp: 19112,
    name: "Albares",
    provincia_id: 19
  },
  {
    id: 4669,
    cp: 19113,
    name: "Fuentenovilla",
    provincia_id: 19
  },
  {
    id: 4670,
    cp: 19114,
    name: "Mazuecos",
    provincia_id: 19
  },
  {
    id: 4671,
    cp: 19115,
    name: "Almoguera",
    provincia_id: 19
  },
  {
    id: 4672,
    cp: 19116,
    name: "Driebes",
    provincia_id: 19
  },
  {
    id: 4673,
    cp: 19117,
    name: "Albalate de Zorita",
    provincia_id: 19
  },
  {
    id: 4674,
    cp: 19118,
    name: "Almonacid de Zorita",
    provincia_id: 19
  },
  {
    id: 4675,
    cp: 19119,
    name: "Illana",
    provincia_id: 19
  },
  {
    id: 4676,
    cp: 19119,
    name: "Almonacid de Zorita",
    provincia_id: 19
  },
  {
    id: 4677,
    cp: 19119,
    name: "Zorita de los Canes",
    provincia_id: 19
  },
  {
    id: 4678,
    cp: 19119,
    name: "Sayatón",
    provincia_id: 19
  },
  {
    id: 4679,
    cp: 19119,
    name: "Escariche",
    provincia_id: 19
  },
  {
    id: 4680,
    cp: 19119,
    name: "Hontoba",
    provincia_id: 19
  },
  {
    id: 4681,
    cp: 19119,
    name: "Hueva",
    provincia_id: 19
  },
  {
    id: 4682,
    cp: 19119,
    name: "Albalate de Zorita",
    provincia_id: 19
  },
  {
    id: 4683,
    cp: 19119,
    name: "Escopete",
    provincia_id: 19
  },
  {
    id: 4684,
    cp: 19120,
    name: "Sacedón",
    provincia_id: 19
  },
  {
    id: 4685,
    cp: 19125,
    name: "Alcocer",
    provincia_id: 19
  },
  {
    id: 4686,
    cp: 19126,
    name: "Salmerón",
    provincia_id: 19
  },
  {
    id: 4687,
    cp: 19127,
    name: "Millana",
    provincia_id: 19
  },
  {
    id: 4688,
    cp: 19127,
    name: "Sacedón",
    provincia_id: 19
  },
  {
    id: 4689,
    cp: 19127,
    name: "Castilforte",
    provincia_id: 19
  },
  {
    id: 4690,
    cp: 19127,
    name: "Escamilla",
    provincia_id: 19
  },
  {
    id: 4691,
    cp: 19128,
    name: "Mantiel",
    provincia_id: 19
  },
  {
    id: 4692,
    cp: 19128,
    name: "Chillarón del Rey",
    provincia_id: 19
  },
  {
    id: 4693,
    cp: 19128,
    name: "Pareja",
    provincia_id: 19
  },
  {
    id: 4694,
    cp: 19128,
    name: "Sacedón",
    provincia_id: 19
  },
  {
    id: 4695,
    cp: 19129,
    name: "Pareja",
    provincia_id: 19
  },
  {
    id: 4696,
    cp: 19129,
    name: "Alique",
    provincia_id: 19
  },
  {
    id: 4697,
    cp: 19130,
    name: "Au?ón",
    provincia_id: 19
  },
  {
    id: 4698,
    cp: 19131,
    name: "Au?ón",
    provincia_id: 19
  },
  {
    id: 4699,
    cp: 19132,
    name: "Alhóndiga",
    provincia_id: 19
  },
  {
    id: 4700,
    cp: 19132,
    name: "Valdeconcha",
    provincia_id: 19
  },
  {
    id: 4701,
    cp: 19133,
    name: "Budia",
    provincia_id: 19
  },
  {
    id: 4702,
    cp: 19133,
    name: "Alocén",
    provincia_id: 19
  },
  {
    id: 4703,
    cp: 19133,
    name: "Berninches",
    provincia_id: 19
  },
  {
    id: 4704,
    cp: 19133,
    name: "Durón",
    provincia_id: 19
  },
  {
    id: 4705,
    cp: 19133,
    name: "El Olivar",
    provincia_id: 19
  },
  {
    id: 4706,
    cp: 19134,
    name: "Pe?alver",
    provincia_id: 19
  },
  {
    id: 4707,
    cp: 19134,
    name: "Tendilla",
    provincia_id: 19
  },
  {
    id: 4708,
    cp: 19135,
    name: "Armu?a de Taju?a",
    provincia_id: 19
  },
  {
    id: 4709,
    cp: 19135,
    name: "Arroyo de las Fraguas",
    provincia_id: 19
  },
  {
    id: 4710,
    cp: 19139,
    name: "Yebes",
    provincia_id: 19
  },
  {
    id: 4711,
    cp: 19140,
    name: "Horche",
    provincia_id: 19
  },
  {
    id: 4712,
    cp: 19141,
    name: "Loranca de Taju?a",
    provincia_id: 19
  },
  {
    id: 4713,
    cp: 19141,
    name: "Yebes",
    provincia_id: 19
  },
  {
    id: 4714,
    cp: 19141,
    name: "Aranzueque",
    provincia_id: 19
  },
  {
    id: 4715,
    cp: 19141,
    name: "Valdarachas",
    provincia_id: 19
  },
  {
    id: 4716,
    cp: 19142,
    name: "Lupiana",
    provincia_id: 19
  },
  {
    id: 4717,
    cp: 19142,
    name: "Valdeavellano",
    provincia_id: 19
  },
  {
    id: 4718,
    cp: 19143,
    name: "San Andrés del Rey",
    provincia_id: 19
  },
  {
    id: 4719,
    cp: 19143,
    name: "Yélamos de Abajo",
    provincia_id: 19
  },
  {
    id: 4720,
    cp: 19143,
    name: "Irueste",
    provincia_id: 19
  },
  {
    id: 4721,
    cp: 19143,
    name: "Durón",
    provincia_id: 19
  },
  {
    id: 4722,
    cp: 19143,
    name: "Yélamos de Arriba",
    provincia_id: 19
  },
  {
    id: 4723,
    cp: 19143,
    name: "Horche",
    provincia_id: 19
  },
  {
    id: 4724,
    cp: 19143,
    name: "Romanones",
    provincia_id: 19
  },
  {
    id: 4725,
    cp: 19144,
    name: "Fuentelviejo",
    provincia_id: 19
  },
  {
    id: 4726,
    cp: 19144,
    name: "Fuentelencina",
    provincia_id: 19
  },
  {
    id: 4727,
    cp: 19144,
    name: "Moratilla de los Meleros",
    provincia_id: 19
  },
  {
    id: 4728,
    cp: 19145,
    name: "Renera",
    provincia_id: 19
  },
  {
    id: 4729,
    cp: 19150,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4730,
    cp: 19151,
    name: "Centenera",
    provincia_id: 19
  },
  {
    id: 4731,
    cp: 19152,
    name: "Aldeanueva de Guadalajara",
    provincia_id: 19
  },
  {
    id: 4732,
    cp: 19153,
    name: "Atanzón",
    provincia_id: 19
  },
  {
    id: 4733,
    cp: 19160,
    name: "Chiloeches",
    provincia_id: 19
  },
  {
    id: 4734,
    cp: 19161,
    name: "Pozo de Guadalajara",
    provincia_id: 19
  },
  {
    id: 4735,
    cp: 19162,
    name: "Pioz",
    provincia_id: 19
  },
  {
    id: 4736,
    cp: 19170,
    name: "El Casar",
    provincia_id: 19
  },
  {
    id: 4737,
    cp: 19171,
    name: "Cabanillas del Campo",
    provincia_id: 19
  },
  {
    id: 4738,
    cp: 19174,
    name: "Valdeaveruelo",
    provincia_id: 19
  },
  {
    id: 4739,
    cp: 19174,
    name: "Galápagos",
    provincia_id: 19
  },
  {
    id: 4740,
    cp: 19174,
    name: "Torrejón del Rey",
    provincia_id: 19
  },
  {
    id: 4741,
    cp: 19180,
    name: "Marchamalo",
    provincia_id: 19
  },
  {
    id: 4742,
    cp: 19181,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4743,
    cp: 19182,
    name: "Fuentelahiguera de Albatages",
    provincia_id: 19
  },
  {
    id: 4744,
    cp: 19182,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4745,
    cp: 19184,
    name: "Valdepe?as de la Sierra",
    provincia_id: 19
  },
  {
    id: 4746,
    cp: 19184,
    name: "Vi?uelas",
    provincia_id: 19
  },
  {
    id: 4747,
    cp: 19184,
    name: "Casa de Uceda",
    provincia_id: 19
  },
  {
    id: 4748,
    cp: 19184,
    name: "Villaseca de Uceda",
    provincia_id: 19
  },
  {
    id: 4749,
    cp: 19184,
    name: "Tortuero",
    provincia_id: 19
  },
  {
    id: 4750,
    cp: 19185,
    name: "El Casar",
    provincia_id: 19
  },
  {
    id: 4751,
    cp: 19185,
    name: "Valdeaveruelo",
    provincia_id: 19
  },
  {
    id: 4752,
    cp: 19185,
    name: "Valdenu?o Fernández",
    provincia_id: 19
  },
  {
    id: 4753,
    cp: 19186,
    name: "El Cubillo de Uceda",
    provincia_id: 19
  },
  {
    id: 4754,
    cp: 19187,
    name: "Uceda",
    provincia_id: 19
  },
  {
    id: 4755,
    cp: 19190,
    name: "Chiloeches",
    provincia_id: 19
  },
  {
    id: 4756,
    cp: 19190,
    name: "Torija",
    provincia_id: 19
  },
  {
    id: 4757,
    cp: 19191,
    name: "Torija",
    provincia_id: 19
  },
  {
    id: 4758,
    cp: 19191,
    name: "Pozo de Guadalajara",
    provincia_id: 19
  },
  {
    id: 4759,
    cp: 19192,
    name: "Gajanejos",
    provincia_id: 19
  },
  {
    id: 4760,
    cp: 19192,
    name: "Trijueque",
    provincia_id: 19
  },
  {
    id: 4761,
    cp: 19192,
    name: "Pioz",
    provincia_id: 19
  },
  {
    id: 4762,
    cp: 19193,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4763,
    cp: 19194,
    name: "Guadalajara",
    provincia_id: 19
  },
  {
    id: 4764,
    cp: 19196,
    name: "Valdearenas",
    provincia_id: 19
  },
  {
    id: 4765,
    cp: 19196,
    name: "Muduex",
    provincia_id: 19
  },
  {
    id: 4766,
    cp: 19196,
    name: "Utande",
    provincia_id: 19
  },
  {
    id: 4767,
    cp: 19196,
    name: "Argecilla",
    provincia_id: 19
  },
  {
    id: 4768,
    cp: 19196,
    name: "Ledanca",
    provincia_id: 19
  },
  {
    id: 4769,
    cp: 19197,
    name: "Ciruelas",
    provincia_id: 19
  },
  {
    id: 4770,
    cp: 19197,
    name: "Heras de Ayuso",
    provincia_id: 19
  },
  {
    id: 4771,
    cp: 19197,
    name: "Torre del Burgo",
    provincia_id: 19
  },
  {
    id: 4772,
    cp: 19197,
    name: "Ca?izar",
    provincia_id: 19
  },
  {
    id: 4773,
    cp: 19198,
    name: "Tórtola de Henares",
    provincia_id: 19
  },
  {
    id: 4774,
    cp: 19200,
    name: "Azuqueca de Henares",
    provincia_id: 19
  },
  {
    id: 4775,
    cp: 19208,
    name: "Alovera",
    provincia_id: 19
  },
  {
    id: 4776,
    cp: 19209,
    name: "Villanueva de la Torre",
    provincia_id: 19
  },
  {
    id: 4777,
    cp: 19209,
    name: "Quer",
    provincia_id: 19
  },
  {
    id: 4778,
    cp: 19210,
    name: "Yunquera de Henares",
    provincia_id: 19
  },
  {
    id: 4779,
    cp: 19219,
    name: "Malaguilla",
    provincia_id: 19
  },
  {
    id: 4780,
    cp: 19219,
    name: "Villanueva de la Torre",
    provincia_id: 19
  },
  {
    id: 4781,
    cp: 19219,
    name: "Málaga del Fresno",
    provincia_id: 19
  },
  {
    id: 4782,
    cp: 19220,
    name: "Humanes",
    provincia_id: 19
  },
  {
    id: 4783,
    cp: 19222,
    name: "Tamajón",
    provincia_id: 19
  },
  {
    id: 4784,
    cp: 19223,
    name: "Campillo de Ranas",
    provincia_id: 19
  },
  {
    id: 4785,
    cp: 19223,
    name: "Majaelrayo",
    provincia_id: 19
  },
  {
    id: 4786,
    cp: 19223,
    name: "Retiendas",
    provincia_id: 19
  },
  {
    id: 4787,
    cp: 19224,
    name: "Tamajón",
    provincia_id: 19
  },
  {
    id: 4788,
    cp: 19224,
    name: "Valverde de los Arroyos",
    provincia_id: 19
  },
  {
    id: 4789,
    cp: 19224,
    name: "Campillo de Ranas",
    provincia_id: 19
  },
  {
    id: 4790,
    cp: 19225,
    name: "Valdesotos",
    provincia_id: 19
  },
  {
    id: 4791,
    cp: 19225,
    name: "Retiendas",
    provincia_id: 19
  },
  {
    id: 4792,
    cp: 19225,
    name: "La Mierla",
    provincia_id: 19
  },
  {
    id: 4793,
    cp: 19225,
    name: "Puebla de Valles",
    provincia_id: 19
  },
  {
    id: 4794,
    cp: 19226,
    name: "Humanes",
    provincia_id: 19
  },
  {
    id: 4795,
    cp: 19226,
    name: "Mohernando",
    provincia_id: 19
  },
  {
    id: 4796,
    cp: 19226,
    name: "Tamajón",
    provincia_id: 19
  },
  {
    id: 4797,
    cp: 19227,
    name: "Taragudo",
    provincia_id: 19
  },
  {
    id: 4798,
    cp: 19227,
    name: "Matarrubia",
    provincia_id: 19
  },
  {
    id: 4799,
    cp: 19227,
    name: "Robledillo de Mohernando",
    provincia_id: 19
  },
  {
    id: 4800,
    cp: 19227,
    name: "Alarilla",
    provincia_id: 19
  },
  {
    id: 4801,
    cp: 19229,
    name: "Montarrón",
    provincia_id: 19
  },
  {
    id: 4802,
    cp: 19229,
    name: "Puebla de Bele?a",
    provincia_id: 19
  },
  {
    id: 4803,
    cp: 19229,
    name: "Cogolludo",
    provincia_id: 19
  },
  {
    id: 4804,
    cp: 19229,
    name: "Humanes",
    provincia_id: 19
  },
  {
    id: 4805,
    cp: 19230,
    name: "Cogolludo",
    provincia_id: 19
  },
  {
    id: 4806,
    cp: 19237,
    name: "Cogolludo",
    provincia_id: 19
  },
  {
    id: 4807,
    cp: 19237,
    name: "San Andrés del Congosto",
    provincia_id: 19
  },
  {
    id: 4808,
    cp: 19237,
    name: "Fuencemillán",
    provincia_id: 19
  },
  {
    id: 4809,
    cp: 19237,
    name: "Zarzuela de Jadraque",
    provincia_id: 19
  },
  {
    id: 4810,
    cp: 19237,
    name: "Arbancón",
    provincia_id: 19
  },
  {
    id: 4811,
    cp: 19238,
    name: "La Huerce",
    provincia_id: 19
  },
  {
    id: 4812,
    cp: 19238,
    name: "El Ordial",
    provincia_id: 19
  },
  {
    id: 4813,
    cp: 19239,
    name: "Monasterio",
    provincia_id: 19
  },
  {
    id: 4814,
    cp: 19239,
    name: "Cogolludo",
    provincia_id: 19
  },
  {
    id: 4815,
    cp: 19240,
    name: "Jadraque",
    provincia_id: 19
  },
  {
    id: 4816,
    cp: 19242,
    name: "Hiendelaencina",
    provincia_id: 19
  },
  {
    id: 4817,
    cp: 19243,
    name: "Prádena de Atienza",
    provincia_id: 19
  },
  {
    id: 4818,
    cp: 19243,
    name: "Bustares",
    provincia_id: 19
  },
  {
    id: 4819,
    cp: 19243,
    name: "Congostrina",
    provincia_id: 19
  },
  {
    id: 4820,
    cp: 19243,
    name: "Gascue?a de Bornova",
    provincia_id: 19
  },
  {
    id: 4821,
    cp: 19243,
    name: "La Toba",
    provincia_id: 19
  },
  {
    id: 4822,
    cp: 19243,
    name: "Villares de Jadraque",
    provincia_id: 19
  },
  {
    id: 4823,
    cp: 19243,
    name: "Robledo de Corpes",
    provincia_id: 19
  },
  {
    id: 4824,
    cp: 19244,
    name: "Condemios de Arriba",
    provincia_id: 19
  },
  {
    id: 4825,
    cp: 19244,
    name: "Las Navas de Jadraque",
    provincia_id: 19
  },
  {
    id: 4826,
    cp: 19244,
    name: "El Ordial",
    provincia_id: 19
  },
  {
    id: 4827,
    cp: 19245,
    name: "Cendejas de la Torre",
    provincia_id: 19
  },
  {
    id: 4828,
    cp: 19245,
    name: "Torremocha de Jadraque",
    provincia_id: 19
  },
  {
    id: 4829,
    cp: 19245,
    name: "Negredo",
    provincia_id: 19
  },
  {
    id: 4830,
    cp: 19245,
    name: "Jirueque",
    provincia_id: 19
  },
  {
    id: 4831,
    cp: 19245,
    name: "Santiuste",
    provincia_id: 19
  },
  {
    id: 4832,
    cp: 19245,
    name: "Rebollosa de Jadraque",
    provincia_id: 19
  },
  {
    id: 4833,
    cp: 19245,
    name: "Pálmaces de Jadraque",
    provincia_id: 19
  },
  {
    id: 4834,
    cp: 19245,
    name: "Cendejas de Enmedio",
    provincia_id: 19
  },
  {
    id: 4835,
    cp: 19245,
    name: "Angón",
    provincia_id: 19
  },
  {
    id: 4836,
    cp: 19246,
    name: "Pinilla de Jadraque",
    provincia_id: 19
  },
  {
    id: 4837,
    cp: 19246,
    name: "Casas de San Galindo",
    provincia_id: 19
  },
  {
    id: 4838,
    cp: 19246,
    name: "Miralrío",
    provincia_id: 19
  },
  {
    id: 4839,
    cp: 19246,
    name: "Villanueva de Argecilla",
    provincia_id: 19
  },
  {
    id: 4840,
    cp: 19246,
    name: "Medranda",
    provincia_id: 19
  },
  {
    id: 4841,
    cp: 19246,
    name: "Jadraque",
    provincia_id: 19
  },
  {
    id: 4842,
    cp: 19247,
    name: "Espinosa de Henares",
    provincia_id: 19
  },
  {
    id: 4843,
    cp: 19247,
    name: "Membrillera",
    provincia_id: 19
  },
  {
    id: 4844,
    cp: 19247,
    name: "Bujalaro",
    provincia_id: 19
  },
  {
    id: 4845,
    cp: 19248,
    name: "Hita",
    provincia_id: 19
  },
  {
    id: 4846,
    cp: 19250,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4847,
    cp: 19260,
    name: "Alcolea del Pinar",
    provincia_id: 19
  },
  {
    id: 4848,
    cp: 19261,
    name: "Luzaga",
    provincia_id: 19
  },
  {
    id: 4849,
    cp: 19261,
    name: "Alcolea del Pinar",
    provincia_id: 19
  },
  {
    id: 4850,
    cp: 19262,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4851,
    cp: 19262,
    name: "Estriégana",
    provincia_id: 19
  },
  {
    id: 4852,
    cp: 19262,
    name: "Saúca",
    provincia_id: 19
  },
  {
    id: 4853,
    cp: 19263,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4854,
    cp: 19264,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4855,
    cp: 19265,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4856,
    cp: 19266,
    name: "La Olmeda de Jadraque",
    provincia_id: 19
  },
  {
    id: 4857,
    cp: 19266,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4858,
    cp: 19267,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4859,
    cp: 19268,
    name: "Mirabueno",
    provincia_id: 19
  },
  {
    id: 4860,
    cp: 19268,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4861,
    cp: 19268,
    name: "Torremocha del Campo",
    provincia_id: 19
  },
  {
    id: 4862,
    cp: 19268,
    name: "Algora",
    provincia_id: 19
  },
  {
    id: 4863,
    cp: 19269,
    name: "Riofrío del Llano",
    provincia_id: 19
  },
  {
    id: 4864,
    cp: 19269,
    name: "Sienes",
    provincia_id: 19
  },
  {
    id: 4865,
    cp: 19269,
    name: "Paredes de Sigüenza",
    provincia_id: 19
  },
  {
    id: 4866,
    cp: 19269,
    name: "Valdelcubo",
    provincia_id: 19
  },
  {
    id: 4867,
    cp: 19269,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4868,
    cp: 19270,
    name: "Atienza",
    provincia_id: 19
  },
  {
    id: 4869,
    cp: 19273,
    name: "Prádena de Atienza",
    provincia_id: 19
  },
  {
    id: 4870,
    cp: 19274,
    name: "La Mi?osa",
    provincia_id: 19
  },
  {
    id: 4871,
    cp: 19274,
    name: "Cantalojas",
    provincia_id: 19
  },
  {
    id: 4872,
    cp: 19274,
    name: "Atienza",
    provincia_id: 19
  },
  {
    id: 4873,
    cp: 19275,
    name: "Galve de Sorbe",
    provincia_id: 19
  },
  {
    id: 4874,
    cp: 19275,
    name: "Campisábalos",
    provincia_id: 19
  },
  {
    id: 4875,
    cp: 19275,
    name: "Condemios de Abajo",
    provincia_id: 19
  },
  {
    id: 4876,
    cp: 19275,
    name: "Cantalojas",
    provincia_id: 19
  },
  {
    id: 4877,
    cp: 19275,
    name: "Albendiego",
    provincia_id: 19
  },
  {
    id: 4878,
    cp: 19275,
    name: "Somolinos",
    provincia_id: 19
  },
  {
    id: 4879,
    cp: 19275,
    name: "Condemios de Arriba",
    provincia_id: 19
  },
  {
    id: 4880,
    cp: 19276,
    name: "Ujados",
    provincia_id: 19
  },
  {
    id: 4881,
    cp: 19276,
    name: "Atienza",
    provincia_id: 19
  },
  {
    id: 4882,
    cp: 19276,
    name: "Romanillos de Atienza",
    provincia_id: 19
  },
  {
    id: 4883,
    cp: 19276,
    name: "Hijes",
    provincia_id: 19
  },
  {
    id: 4884,
    cp: 19276,
    name: "Ba?uelos",
    provincia_id: 19
  },
  {
    id: 4885,
    cp: 19276,
    name: "Miedes de Atienza",
    provincia_id: 19
  },
  {
    id: 4886,
    cp: 19277,
    name: "Alcolea de las Pe?as",
    provincia_id: 19
  },
  {
    id: 4887,
    cp: 19277,
    name: "Atienza",
    provincia_id: 19
  },
  {
    id: 4888,
    cp: 19277,
    name: "Cincovillas",
    provincia_id: 19
  },
  {
    id: 4889,
    cp: 19277,
    name: "Paredes de Sigüenza",
    provincia_id: 19
  },
  {
    id: 4890,
    cp: 19277,
    name: "Tordelrábano",
    provincia_id: 19
  },
  {
    id: 4891,
    cp: 19278,
    name: "La Bodera",
    provincia_id: 19
  },
  {
    id: 4892,
    cp: 19278,
    name: "La Mi?osa",
    provincia_id: 19
  },
  {
    id: 4893,
    cp: 19280,
    name: "Maranchón",
    provincia_id: 19
  },
  {
    id: 4894,
    cp: 19281,
    name: "Maranchón",
    provincia_id: 19
  },
  {
    id: 4895,
    cp: 19282,
    name: "Anguita",
    provincia_id: 19
  },
  {
    id: 4896,
    cp: 19283,
    name: "Iniéstola",
    provincia_id: 19
  },
  {
    id: 4897,
    cp: 19283,
    name: "Anguita",
    provincia_id: 19
  },
  {
    id: 4898,
    cp: 19284,
    name: "Alcolea del Pinar",
    provincia_id: 19
  },
  {
    id: 4899,
    cp: 19285,
    name: "Luzón",
    provincia_id: 19
  },
  {
    id: 4900,
    cp: 19285,
    name: "Ciruelos del Pinar",
    provincia_id: 19
  },
  {
    id: 4901,
    cp: 19286,
    name: "Mazarete",
    provincia_id: 19
  },
  {
    id: 4902,
    cp: 19286,
    name: "Anquela del Ducado",
    provincia_id: 19
  },
  {
    id: 4903,
    cp: 19287,
    name: "Maranchón",
    provincia_id: 19
  },
  {
    id: 4904,
    cp: 19287,
    name: "Establés",
    provincia_id: 19
  },
  {
    id: 4905,
    cp: 19287,
    name: "Milmarcos",
    provincia_id: 19
  },
  {
    id: 4906,
    cp: 19287,
    name: "Fuentelsaz",
    provincia_id: 19
  },
  {
    id: 4907,
    cp: 19287,
    name: "Anquela del Ducado",
    provincia_id: 19
  },
  {
    id: 4908,
    cp: 19287,
    name: "Tartanedo",
    provincia_id: 19
  },
  {
    id: 4909,
    cp: 19290,
    name: "Fontanar",
    provincia_id: 19
  },
  {
    id: 4910,
    cp: 19292,
    name: "Espinosa de Henares",
    provincia_id: 19
  },
  {
    id: 4911,
    cp: 19292,
    name: "Copernal",
    provincia_id: 19
  },
  {
    id: 4912,
    cp: 19294,
    name: "Villaseca de Henares",
    provincia_id: 19
  },
  {
    id: 4913,
    cp: 19294,
    name: "Castejón de Henares",
    provincia_id: 19
  },
  {
    id: 4914,
    cp: 19294,
    name: "Mandayona",
    provincia_id: 19
  },
  {
    id: 4915,
    cp: 19294,
    name: "Matillas",
    provincia_id: 19
  },
  {
    id: 4916,
    cp: 19295,
    name: "Sigüenza",
    provincia_id: 19
  },
  {
    id: 4917,
    cp: 19295,
    name: "Baides",
    provincia_id: 19
  },
  {
    id: 4918,
    cp: 19295,
    name: "Huérmeces del Cerro",
    provincia_id: 19
  },
  {
    id: 4919,
    cp: 19295,
    name: "Viana de Jadraque",
    provincia_id: 19
  },
  {
    id: 4920,
    cp: 19300,
    name: "Molina de Aragón",
    provincia_id: 19
  },
  {
    id: 4921,
    cp: 19310,
    name: "Checa",
    provincia_id: 19
  },
  {
    id: 4922,
    cp: 19310,
    name: "Chequilla",
    provincia_id: 19
  },
  {
    id: 4923,
    cp: 19310,
    name: "Alcoroches",
    provincia_id: 19
  },
  {
    id: 4924,
    cp: 19311,
    name: "Orea",
    provincia_id: 19
  },
  {
    id: 4925,
    cp: 19312,
    name: "Terzaga",
    provincia_id: 19
  },
  {
    id: 4926,
    cp: 19312,
    name: "Pinilla de Molina",
    provincia_id: 19
  },
  {
    id: 4927,
    cp: 19312,
    name: "Traíd",
    provincia_id: 19
  },
  {
    id: 4928,
    cp: 19313,
    name: "Peralejos de las Truchas",
    provincia_id: 19
  },
  {
    id: 4929,
    cp: 19314,
    name: "Taravilla",
    provincia_id: 19
  },
  {
    id: 4930,
    cp: 19315,
    name: "Megina",
    provincia_id: 19
  },
  {
    id: 4931,
    cp: 19320,
    name: "Alustante",
    provincia_id: 19
  },
  {
    id: 4932,
    cp: 19321,
    name: "Alustante",
    provincia_id: 19
  },
  {
    id: 4933,
    cp: 19323,
    name: "Tordesilos",
    provincia_id: 19
  },
  {
    id: 4934,
    cp: 19324,
    name: "Setiles",
    provincia_id: 19
  },
  {
    id: 4935,
    cp: 19325,
    name: "Tordellego",
    provincia_id: 19
  },
  {
    id: 4936,
    cp: 19325,
    name: "Adobes",
    provincia_id: 19
  },
  {
    id: 4937,
    cp: 19325,
    name: "Piqueras",
    provincia_id: 19
  },
  {
    id: 4938,
    cp: 19326,
    name: "El Pobo de Due?as",
    provincia_id: 19
  },
  {
    id: 4939,
    cp: 19327,
    name: "El Pedregal",
    provincia_id: 19
  },
  {
    id: 4940,
    cp: 19328,
    name: "Morenilla",
    provincia_id: 19
  },
  {
    id: 4941,
    cp: 19328,
    name: "Hombrados",
    provincia_id: 19
  },
  {
    id: 4942,
    cp: 19328,
    name: "Castellar de la Muela",
    provincia_id: 19
  },
  {
    id: 4943,
    cp: 19332,
    name: "Tartanedo",
    provincia_id: 19
  },
  {
    id: 4944,
    cp: 19332,
    name: "Algar de Mesa",
    provincia_id: 19
  },
  {
    id: 4945,
    cp: 19332,
    name: "Villel de Mesa",
    provincia_id: 19
  },
  {
    id: 4946,
    cp: 19332,
    name: "Mochales",
    provincia_id: 19
  },
  {
    id: 4947,
    cp: 19333,
    name: "Tartanedo",
    provincia_id: 19
  },
  {
    id: 4948,
    cp: 19334,
    name: "Tartanedo",
    provincia_id: 19
  },
  {
    id: 4949,
    cp: 19334,
    name: "Corduente",
    provincia_id: 19
  },
  {
    id: 4950,
    cp: 19336,
    name: "Pardos",
    provincia_id: 19
  },
  {
    id: 4951,
    cp: 19337,
    name: "Torrubia",
    provincia_id: 19
  },
  {
    id: 4952,
    cp: 19338,
    name: "Tortuera",
    provincia_id: 19
  },
  {
    id: 4953,
    cp: 19339,
    name: "Rueda de la Sierra",
    provincia_id: 19
  },
  {
    id: 4954,
    cp: 19339,
    name: "Embid",
    provincia_id: 19
  },
  {
    id: 4955,
    cp: 19340,
    name: "Rillo de Gallo",
    provincia_id: 19
  },
  {
    id: 4956,
    cp: 19341,
    name: "Corduente",
    provincia_id: 19
  },
  {
    id: 4957,
    cp: 19342,
    name: "Herrería",
    provincia_id: 19
  },
  {
    id: 4958,
    cp: 19343,
    name: "Corduente",
    provincia_id: 19
  },
  {
    id: 4959,
    cp: 19345,
    name: "Torremocha del Pinar",
    provincia_id: 19
  },
  {
    id: 4960,
    cp: 19346,
    name: "Semillas",
    provincia_id: 19
  },
  {
    id: 4961,
    cp: 19346,
    name: "Selas",
    provincia_id: 19
  },
  {
    id: 4962,
    cp: 19350,
    name: "Molina de Aragón",
    provincia_id: 19
  },
  {
    id: 4963,
    cp: 19351,
    name: "Molina de Aragón",
    provincia_id: 19
  },
  {
    id: 4964,
    cp: 19352,
    name: "Prados Redondos",
    provincia_id: 19
  },
  {
    id: 4965,
    cp: 19353,
    name: "Prados Redondos",
    provincia_id: 19
  },
  {
    id: 4966,
    cp: 19354,
    name: "Prados Redondos",
    provincia_id: 19
  },
  {
    id: 4967,
    cp: 19355,
    name: "Torrecuadrada de Molina",
    provincia_id: 19
  },
  {
    id: 4968,
    cp: 19357,
    name: "Anquela del Pedregal",
    provincia_id: 19
  },
  {
    id: 4969,
    cp: 19360,
    name: "Campillo de Due?as",
    provincia_id: 19
  },
  {
    id: 4970,
    cp: 19361,
    name: "La Yunta",
    provincia_id: 19
  },
  {
    id: 4971,
    cp: 19362,
    name: "Molina de Aragón",
    provincia_id: 19
  },
  {
    id: 4972,
    cp: 19363,
    name: "Molina de Aragón",
    provincia_id: 19
  },
  {
    id: 4973,
    cp: 19390,
    name: "Tierzo",
    provincia_id: 19
  },
  {
    id: 4974,
    cp: 19390,
    name: "Corduente",
    provincia_id: 19
  },
  {
    id: 4975,
    cp: 19390,
    name: "Fuembellida",
    provincia_id: 19
  },
  {
    id: 4976,
    cp: 19390,
    name: "Ba?os de Tajo",
    provincia_id: 19
  },
  {
    id: 4977,
    cp: 19390,
    name: "Valhermoso",
    provincia_id: 19
  },
  {
    id: 4978,
    cp: 19390,
    name: "Fuentenovilla",
    provincia_id: 19
  },
  {
    id: 4979,
    cp: 19391,
    name: "Prados Redondos",
    provincia_id: 19
  },
  {
    id: 4980,
    cp: 19391,
    name: "Torremochuela",
    provincia_id: 19
  },
  {
    id: 4981,
    cp: 19391,
    name: "Castilnuevo",
    provincia_id: 19
  },
  {
    id: 4982,
    cp: 19392,
    name: "Corduente",
    provincia_id: 19
  },
  {
    id: 4983,
    cp: 19400,
    name: "Brihuega",
    provincia_id: 19
  },
  {
    id: 4984,
    cp: 19410,
    name: "Brihuega",
    provincia_id: 19
  },
  {
    id: 4985,
    cp: 19411,
    name: "Brihuega",
    provincia_id: 19
  },
  {
    id: 4986,
    cp: 19411,
    name: "Valfermoso de Taju?a",
    provincia_id: 19
  },
  {
    id: 4987,
    cp: 19412,
    name: "Valdegrudas",
    provincia_id: 19
  },
  {
    id: 4988,
    cp: 19412,
    name: "Brihuega",
    provincia_id: 19
  },
  {
    id: 4989,
    cp: 19412,
    name: "Caspue?as",
    provincia_id: 19
  },
  {
    id: 4990,
    cp: 19413,
    name: "Brihuega",
    provincia_id: 19
  },
  {
    id: 4991,
    cp: 19414,
    name: "Brihuega",
    provincia_id: 19
  },
  {
    id: 4992,
    cp: 19420,
    name: "Cifuentes",
    provincia_id: 19
  },
  {
    id: 4993,
    cp: 19428,
    name: "Cifuentes",
    provincia_id: 19
  },
  {
    id: 4994,
    cp: 19429,
    name: "Cifuentes",
    provincia_id: 19
  },
  {
    id: 4995,
    cp: 19431,
    name: "Torrecuadradilla",
    provincia_id: 19
  },
  {
    id: 4996,
    cp: 19431,
    name: "Canredondo",
    provincia_id: 19
  },
  {
    id: 4997,
    cp: 19431,
    name: "Cifuentes",
    provincia_id: 19
  },
  {
    id: 4998,
    cp: 19432,
    name: "Sacecorbo",
    provincia_id: 19
  },
  {
    id: 4999,
    cp: 19432,
    name: "Abánades",
    provincia_id: 19
  },
  {
    id: 5000,
    cp: 19432,
    name: "Ocentejo",
    provincia_id: 19
  },
  {
    id: 5001,
    cp: 19432,
    name: "Torremocha del Campo",
    provincia_id: 19
  },
  {
    id: 5002,
    cp: 19441,
    name: "Huertahernando",
    provincia_id: 19
  },
  {
    id: 5003,
    cp: 19441,
    name: "Riba de Saelices",
    provincia_id: 19
  },
  {
    id: 5004,
    cp: 19442,
    name: "Ablanque",
    provincia_id: 19
  },
  {
    id: 5005,
    cp: 19443,
    name: "Olmeda de Cobeta",
    provincia_id: 19
  },
  {
    id: 5006,
    cp: 19443,
    name: "Cobeta",
    provincia_id: 19
  },
  {
    id: 5007,
    cp: 19443,
    name: "Saelices de la Sal",
    provincia_id: 19
  },
  {
    id: 5008,
    cp: 19444,
    name: "Zaorejas",
    provincia_id: 19
  },
  {
    id: 5009,
    cp: 19444,
    name: "Olmeda de Cobeta",
    provincia_id: 19
  },
  {
    id: 5010,
    cp: 19445,
    name: "Anguita",
    provincia_id: 19
  },
  {
    id: 5011,
    cp: 19445,
    name: "Hortezuela de Océn",
    provincia_id: 19
  },
  {
    id: 5012,
    cp: 19445,
    name: "Sotodosos",
    provincia_id: 19
  },
  {
    id: 5013,
    cp: 19445,
    name: "Esplegares",
    provincia_id: 19
  },
  {
    id: 5014,
    cp: 19450,
    name: "Trillo",
    provincia_id: 19
  },
  {
    id: 5015,
    cp: 19458,
    name: "Trillo",
    provincia_id: 19
  },
  {
    id: 5016,
    cp: 19459,
    name: "Cifuentes",
    provincia_id: 19
  },
  {
    id: 5017,
    cp: 19459,
    name: "Budia",
    provincia_id: 19
  },
  {
    id: 5018,
    cp: 19460,
    name: "Villanueva de Alcorón",
    provincia_id: 19
  },
  {
    id: 5019,
    cp: 19461,
    name: "Armallones",
    provincia_id: 19
  },
  {
    id: 5020,
    cp: 19461,
    name: "Zaorejas",
    provincia_id: 19
  },
  {
    id: 5021,
    cp: 19462,
    name: "Pe?alén",
    provincia_id: 19
  },
  {
    id: 5022,
    cp: 19463,
    name: "Poveda de la Sierra",
    provincia_id: 19
  },
  {
    id: 5023,
    cp: 19490,
    name: "Cogollor",
    provincia_id: 19
  },
  {
    id: 5024,
    cp: 19490,
    name: "Barriopedro",
    provincia_id: 19
  },
  {
    id: 5025,
    cp: 19490,
    name: "Alaminos",
    provincia_id: 19
  },
  {
    id: 5026,
    cp: 19490,
    name: "Valderrebollo",
    provincia_id: 19
  },
  {
    id: 5027,
    cp: 19490,
    name: "Brihuega",
    provincia_id: 19
  },
  {
    id: 5028,
    cp: 19490,
    name: "Masegoso de Taju?a",
    provincia_id: 19
  },
  {
    id: 5029,
    cp: 19490,
    name: "Almadrones",
    provincia_id: 19
  },
  {
    id: 5030,
    cp: 19491,
    name: "El Sotillo",
    provincia_id: 19
  },
  {
    id: 5031,
    cp: 19491,
    name: "Torremocha del Campo",
    provincia_id: 19
  },
  {
    id: 5032,
    cp: 19491,
    name: "Solanillos del Extremo",
    provincia_id: 19
  },
  {
    id: 5033,
    cp: 19491,
    name: "Las Inviernas",
    provincia_id: 19
  },
  {
    id: 5034,
    cp: 19491,
    name: "Henche",
    provincia_id: 19
  },
  {
    id: 5035,
    cp: 19492,
    name: "Valtablado del Río",
    provincia_id: 19
  },
  {
    id: 5036,
    cp: 19492,
    name: "Arbeteta",
    provincia_id: 19
  },
  {
    id: 5037,
    cp: 19492,
    name: "Trillo",
    provincia_id: 19
  },
  {
    id: 5038,
    cp: 19492,
    name: "Pareja",
    provincia_id: 19
  },
  {
    id: 5039,
    cp: 19492,
    name: "El Recuenco",
    provincia_id: 19
  },
  {
    id: 5040,
    cp: 19493,
    name: "Peralveche",
    provincia_id: 19
  },
  {
    id: 5041,
    cp: 19495,
    name: "Zaorejas",
    provincia_id: 19
  },
  {
    id: 5042,
    cp: 19680,
    name: "Salobre?a",
    provincia_id: 18
  },
  {
    id: 5043,
    cp: 20001,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5044,
    cp: 20002,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5045,
    cp: 20003,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5046,
    cp: 20004,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5047,
    cp: 20005,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5048,
    cp: 20006,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5049,
    cp: 20007,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5050,
    cp: 20008,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5051,
    cp: 20009,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5052,
    cp: 20010,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5053,
    cp: 20011,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5054,
    cp: 20012,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5055,
    cp: 20013,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5056,
    cp: 20014,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5057,
    cp: 20015,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5058,
    cp: 20016,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5059,
    cp: 20017,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5060,
    cp: 20018,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5061,
    cp: 20100,
    name: "Errenteria",
    provincia_id: 20
  },
  {
    id: 5062,
    cp: 20100,
    name: "Lezo",
    provincia_id: 20
  },
  {
    id: 5063,
    cp: 20100,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5064,
    cp: 20110,
    name: "Pasaia",
    provincia_id: 20
  },
  {
    id: 5065,
    cp: 20115,
    name: "Astigarraga",
    provincia_id: 20
  },
  {
    id: 5066,
    cp: 20120,
    name: "Hernani",
    provincia_id: 20
  },
  {
    id: 5067,
    cp: 20128,
    name: "Hernani",
    provincia_id: 20
  },
  {
    id: 5068,
    cp: 20130,
    name: "Urnieta",
    provincia_id: 20
  },
  {
    id: 5069,
    cp: 20130,
    name: "Usurbil",
    provincia_id: 20
  },
  {
    id: 5070,
    cp: 20140,
    name: "Andoain",
    provincia_id: 20
  },
  {
    id: 5071,
    cp: 20150,
    name: "Villabona",
    provincia_id: 20
  },
  {
    id: 5072,
    cp: 20150,
    name: "Aduna",
    provincia_id: 20
  },
  {
    id: 5073,
    cp: 20159,
    name: "Larraul",
    provincia_id: 20
  },
  {
    id: 5074,
    cp: 20159,
    name: "Zizurkil",
    provincia_id: 20
  },
  {
    id: 5075,
    cp: 20159,
    name: "Asteasu",
    provincia_id: 20
  },
  {
    id: 5076,
    cp: 20160,
    name: "Lasarte-Oria",
    provincia_id: 20
  },
  {
    id: 5077,
    cp: 20160,
    name: "Donostia San Sebastián",
    provincia_id: 20
  },
  {
    id: 5078,
    cp: 20170,
    name: "Usurbil",
    provincia_id: 20
  },
  {
    id: 5079,
    cp: 20180,
    name: "Oiartzun",
    provincia_id: 20
  },
  {
    id: 5080,
    cp: 20200,
    name: "Beasain",
    provincia_id: 20
  },
  {
    id: 5081,
    cp: 20210,
    name: "Lazkao",
    provincia_id: 20
  },
  {
    id: 5082,
    cp: 20211,
    name: "Ataun",
    provincia_id: 20
  },
  {
    id: 5083,
    cp: 20212,
    name: "Olaberria",
    provincia_id: 20
  },
  {
    id: 5084,
    cp: 20213,
    name: "Idiazabal",
    provincia_id: 20
  },
  {
    id: 5085,
    cp: 20214,
    name: "Zerain",
    provincia_id: 20
  },
  {
    id: 5086,
    cp: 20214,
    name: "Mutiloa",
    provincia_id: 20
  },
  {
    id: 5087,
    cp: 20214,
    name: "Segura",
    provincia_id: 20
  },
  {
    id: 5088,
    cp: 20215,
    name: "Zegama",
    provincia_id: 20
  },
  {
    id: 5089,
    cp: 20216,
    name: "Ormaiztegi",
    provincia_id: 20
  },
  {
    id: 5090,
    cp: 20217,
    name: "Gabiria",
    provincia_id: 20
  },
  {
    id: 5091,
    cp: 20218,
    name: "Ezkio-Itsaso",
    provincia_id: 20
  },
  {
    id: 5092,
    cp: 20220,
    name: "Legazpi",
    provincia_id: 20
  },
  {
    id: 5093,
    cp: 20230,
    name: "Legazpi",
    provincia_id: 20
  },
  {
    id: 5094,
    cp: 20240,
    name: "Ordizia",
    provincia_id: 20
  },
  {
    id: 5095,
    cp: 20247,
    name: "Zaldibia",
    provincia_id: 20
  },
  {
    id: 5096,
    cp: 20248,
    name: "Arama",
    provincia_id: 20
  },
  {
    id: 5097,
    cp: 20248,
    name: "Gaintza",
    provincia_id: 20
  },
  {
    id: 5098,
    cp: 20248,
    name: "Altzaga",
    provincia_id: 20
  },
  {
    id: 5099,
    cp: 20249,
    name: "Itsasondo",
    provincia_id: 20
  },
  {
    id: 5100,
    cp: 20250,
    name: "Legorreta",
    provincia_id: 20
  },
  {
    id: 5101,
    cp: 20259,
    name: "Baliarrain",
    provincia_id: 20
  },
  {
    id: 5102,
    cp: 20260,
    name: "Alegia",
    provincia_id: 20
  },
  {
    id: 5103,
    cp: 20267,
    name: "Tolosa",
    provincia_id: 20
  },
  {
    id: 5104,
    cp: 20267,
    name: "Ikaztegieta",
    provincia_id: 20
  },
  {
    id: 5105,
    cp: 20268,
    name: "Altzo",
    provincia_id: 20
  },
  {
    id: 5106,
    cp: 20268,
    name: "Tolosa",
    provincia_id: 20
  },
  {
    id: 5107,
    cp: 20268,
    name: "Amezketa",
    provincia_id: 20
  },
  {
    id: 5108,
    cp: 20269,
    name: "Orendain",
    provincia_id: 20
  },
  {
    id: 5109,
    cp: 20269,
    name: "Abaltzisketa",
    provincia_id: 20
  },
  {
    id: 5110,
    cp: 20270,
    name: "Anoeta",
    provincia_id: 20
  },
  {
    id: 5111,
    cp: 20271,
    name: "Irura",
    provincia_id: 20
  },
  {
    id: 5112,
    cp: 20280,
    name: "Hondarribia",
    provincia_id: 20
  },
  {
    id: 5113,
    cp: 20301,
    name: "Irun",
    provincia_id: 20
  },
  {
    id: 5114,
    cp: 20302,
    name: "Irun",
    provincia_id: 20
  },
  {
    id: 5115,
    cp: 20303,
    name: "Irun",
    provincia_id: 20
  },
  {
    id: 5116,
    cp: 20304,
    name: "Irun",
    provincia_id: 20
  },
  {
    id: 5117,
    cp: 20305,
    name: "Irun",
    provincia_id: 20
  },
  {
    id: 5118,
    cp: 20400,
    name: "Ibarra",
    provincia_id: 20
  },
  {
    id: 5119,
    cp: 20400,
    name: "Tolosa",
    provincia_id: 20
  },
  {
    id: 5120,
    cp: 20490,
    name: "Lizartza",
    provincia_id: 20
  },
  {
    id: 5121,
    cp: 20490,
    name: "Orexa",
    provincia_id: 20
  },
  {
    id: 5122,
    cp: 20491,
    name: "Gaztelu",
    provincia_id: 20
  },
  {
    id: 5123,
    cp: 20491,
    name: "Belauntza",
    provincia_id: 20
  },
  {
    id: 5124,
    cp: 20491,
    name: "Leaburu",
    provincia_id: 20
  },
  {
    id: 5125,
    cp: 20492,
    name: "Berastegi",
    provincia_id: 20
  },
  {
    id: 5126,
    cp: 20493,
    name: "Berastegi",
    provincia_id: 20
  },
  {
    id: 5127,
    cp: 20493,
    name: "Elduain",
    provincia_id: 20
  },
  {
    id: 5128,
    cp: 20493,
    name: "Berrobi",
    provincia_id: 20
  },
  {
    id: 5129,
    cp: 20494,
    name: "Tolosa",
    provincia_id: 20
  },
  {
    id: 5130,
    cp: 20494,
    name: "Alkiza",
    provincia_id: 20
  },
  {
    id: 5131,
    cp: 20494,
    name: "Hernialde",
    provincia_id: 20
  },
  {
    id: 5132,
    cp: 20495,
    name: "Albiztur",
    provincia_id: 20
  },
  {
    id: 5133,
    cp: 20496,
    name: "Bidania-Goiatz",
    provincia_id: 20
  },
  {
    id: 5134,
    cp: 20500,
    name: "Arrasate Mondragón",
    provincia_id: 20
  },
  {
    id: 5135,
    cp: 20509,
    name: "Arrasate Mondragón",
    provincia_id: 20
  },
  {
    id: 5136,
    cp: 20530,
    name: "Eskoriatza",
    provincia_id: 20
  },
  {
    id: 5137,
    cp: 20530,
    name: "Leintz-Gatzaga",
    provincia_id: 20
  },
  {
    id: 5138,
    cp: 20540,
    name: "Eskoriatza",
    provincia_id: 20
  },
  {
    id: 5139,
    cp: 20550,
    name: "Aretxabaleta",
    provincia_id: 20
  },
  {
    id: 5140,
    cp: 20560,
    name: "O?ati",
    provincia_id: 20
  },
  {
    id: 5141,
    cp: 20567,
    name: "O?ati",
    provincia_id: 20
  },
  {
    id: 5142,
    cp: 20568,
    name: "O?ati",
    provincia_id: 20
  },
  {
    id: 5143,
    cp: 20569,
    name: "O?ati",
    provincia_id: 20
  },
  {
    id: 5144,
    cp: 20569,
    name: "Bergara",
    provincia_id: 20
  },
  {
    id: 5145,
    cp: 20570,
    name: "Bergara",
    provincia_id: 20
  },
  {
    id: 5146,
    cp: 20577,
    name: "Antzuola",
    provincia_id: 20
  },
  {
    id: 5147,
    cp: 20578,
    name: "Bergara",
    provincia_id: 20
  },
  {
    id: 5148,
    cp: 20580,
    name: "Bergara",
    provincia_id: 20
  },
  {
    id: 5149,
    cp: 20590,
    name: "Soraluze-Placencia de las Armas",
    provincia_id: 20
  },
  {
    id: 5150,
    cp: 20600,
    name: "Eibar",
    provincia_id: 20
  },
  {
    id: 5151,
    cp: 20690,
    name: "Elgeta",
    provincia_id: 20
  },
  {
    id: 5152,
    cp: 20700,
    name: "Zumarraga",
    provincia_id: 20
  },
  {
    id: 5153,
    cp: 20700,
    name: "Urretxu",
    provincia_id: 20
  },
  {
    id: 5154,
    cp: 20709,
    name: "Ezkio-Itsaso",
    provincia_id: 20
  },
  {
    id: 5155,
    cp: 20720,
    name: "Azkoitia",
    provincia_id: 20
  },
  {
    id: 5156,
    cp: 20730,
    name: "Azpeitia",
    provincia_id: 20
  },
  {
    id: 5157,
    cp: 20737,
    name: "Errezil",
    provincia_id: 20
  },
  {
    id: 5158,
    cp: 20739,
    name: "Beizama",
    provincia_id: 20
  },
  {
    id: 5159,
    cp: 20740,
    name: "Zestoa",
    provincia_id: 20
  },
  {
    id: 5160,
    cp: 20749,
    name: "Aizarnazabal",
    provincia_id: 20
  },
  {
    id: 5161,
    cp: 20749,
    name: "Zestoa",
    provincia_id: 20
  },
  {
    id: 5162,
    cp: 20750,
    name: "Zumaia",
    provincia_id: 20
  },
  {
    id: 5163,
    cp: 20800,
    name: "Zarautz",
    provincia_id: 20
  },
  {
    id: 5164,
    cp: 20808,
    name: "Getaria",
    provincia_id: 20
  },
  {
    id: 5165,
    cp: 20809,
    name: "Aia",
    provincia_id: 20
  },
  {
    id: 5166,
    cp: 20810,
    name: "Orio",
    provincia_id: 20
  },
  {
    id: 5167,
    cp: 20810,
    name: "Aia",
    provincia_id: 20
  },
  {
    id: 5168,
    cp: 20820,
    name: "Deba",
    provincia_id: 20
  },
  {
    id: 5169,
    cp: 20829,
    name: "Deba",
    provincia_id: 20
  },
  {
    id: 5170,
    cp: 20830,
    name: "Mutriku",
    provincia_id: 20
  },
  {
    id: 5171,
    cp: 20850,
    name: "Mendaro",
    provincia_id: 20
  },
  {
    id: 5172,
    cp: 20860,
    name: "Elgoibar",
    provincia_id: 20
  },
  {
    id: 5173,
    cp: 20870,
    name: "Elgoibar",
    provincia_id: 20
  },
  {
    id: 5174,
    cp: 21000,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5175,
    cp: 21001,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5176,
    cp: 21002,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5177,
    cp: 21003,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5178,
    cp: 21004,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5179,
    cp: 21005,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5180,
    cp: 21006,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5181,
    cp: 21007,
    name: "Huelva",
    provincia_id: 21
  },
  {
    id: 5182,
    cp: 21009,
    name: "Ayamonte",
    provincia_id: 21
  },
  {
    id: 5183,
    cp: 21100,
    name: "Punta Umbría",
    provincia_id: 21
  },
  {
    id: 5184,
    cp: 21100,
    name: "Aljaraque",
    provincia_id: 21
  },
  {
    id: 5185,
    cp: 21110,
    name: "Punta Umbría",
    provincia_id: 21
  },
  {
    id: 5186,
    cp: 21110,
    name: "Aljaraque",
    provincia_id: 21
  },
  {
    id: 5187,
    cp: 21120,
    name: "Aljaraque",
    provincia_id: 21
  },
  {
    id: 5188,
    cp: 21122,
    name: "Aljaraque",
    provincia_id: 21
  },
  {
    id: 5189,
    cp: 21130,
    name: "Moguer",
    provincia_id: 21
  },
  {
    id: 5190,
    cp: 21130,
    name: "Palos de la Frontera",
    provincia_id: 21
  },
  {
    id: 5191,
    cp: 21193,
    name: "Villaquilambre",
    provincia_id: 24
  },
  {
    id: 5192,
    cp: 21200,
    name: "Aracena",
    provincia_id: 21
  },
  {
    id: 5193,
    cp: 21207,
    name: "Aracena",
    provincia_id: 21
  },
  {
    id: 5194,
    cp: 21207,
    name: "Linares de la Sierra",
    provincia_id: 21
  },
  {
    id: 5195,
    cp: 21208,
    name: "Cortelazor",
    provincia_id: 21
  },
  {
    id: 5196,
    cp: 21208,
    name: "Los Marines",
    provincia_id: 21
  },
  {
    id: 5197,
    cp: 21208,
    name: "Aracena",
    provincia_id: 21
  },
  {
    id: 5198,
    cp: 21209,
    name: "Aracena",
    provincia_id: 21
  },
  {
    id: 5199,
    cp: 21209,
    name: "Puerto Moral",
    provincia_id: 21
  },
  {
    id: 5200,
    cp: 21209,
    name: "Corteconcepción",
    provincia_id: 21
  },
  {
    id: 5201,
    cp: 21210,
    name: "Zufre",
    provincia_id: 21
  },
  {
    id: 5202,
    cp: 21220,
    name: "Higuera de la Sierra",
    provincia_id: 21
  },
  {
    id: 5203,
    cp: 21230,
    name: "Cortegana",
    provincia_id: 21
  },
  {
    id: 5204,
    cp: 21239,
    name: "Cortegana",
    provincia_id: 21
  },
  {
    id: 5205,
    cp: 21239,
    name: "Aroche",
    provincia_id: 21
  },
  {
    id: 5206,
    cp: 21239,
    name: "Santa Ana la Real",
    provincia_id: 21
  },
  {
    id: 5207,
    cp: 21240,
    name: "Aroche",
    provincia_id: 21
  },
  {
    id: 5208,
    cp: 21248,
    name: "Aroche",
    provincia_id: 21
  },
  {
    id: 5209,
    cp: 21250,
    name: "Rosal de la Frontera",
    provincia_id: 21
  },
  {
    id: 5210,
    cp: 21260,
    name: "Santa Olalla del Cala",
    provincia_id: 21
  },
  {
    id: 5211,
    cp: 21270,
    name: "Cala",
    provincia_id: 21
  },
  {
    id: 5212,
    cp: 21280,
    name: "Arroyomolinos de León",
    provincia_id: 21
  },
  {
    id: 5213,
    cp: 21290,
    name: "Jabugo",
    provincia_id: 21
  },
  {
    id: 5214,
    cp: 21290,
    name: "Almonaster la Real",
    provincia_id: 21
  },
  {
    id: 5215,
    cp: 21291,
    name: "Galaroza",
    provincia_id: 21
  },
  {
    id: 5216,
    cp: 21291,
    name: "Valdelarco",
    provincia_id: 21
  },
  {
    id: 5217,
    cp: 21291,
    name: "La Nava",
    provincia_id: 21
  },
  {
    id: 5218,
    cp: 21291,
    name: "Beas",
    provincia_id: 21
  },
  {
    id: 5219,
    cp: 21292,
    name: "Casta?o del Robledo",
    provincia_id: 21
  },
  {
    id: 5220,
    cp: 21292,
    name: "Fuenteheridos",
    provincia_id: 21
  },
  {
    id: 5221,
    cp: 21300,
    name: "Cala?as",
    provincia_id: 21
  },
  {
    id: 5222,
    cp: 21309,
    name: "Cala?as",
    provincia_id: 21
  },
  {
    id: 5223,
    cp: 21310,
    name: "Cala?as",
    provincia_id: 21
  },
  {
    id: 5224,
    cp: 21319,
    name: "Cala?as",
    provincia_id: 21
  },
  {
    id: 5225,
    cp: 21320,
    name: "El Cerro de Andévalo",
    provincia_id: 21
  },
  {
    id: 5226,
    cp: 21330,
    name: "Almonaster la Real",
    provincia_id: 21
  },
  {
    id: 5227,
    cp: 21330,
    name: "Cortegana",
    provincia_id: 21
  },
  {
    id: 5228,
    cp: 21330,
    name: "El Cerro de Andévalo",
    provincia_id: 21
  },
  {
    id: 5229,
    cp: 21340,
    name: "Alájar",
    provincia_id: 21
  },
  {
    id: 5230,
    cp: 21340,
    name: "Aroche",
    provincia_id: 21
  },
  {
    id: 5231,
    cp: 21342,
    name: "Almonaster la Real",
    provincia_id: 21
  },
  {
    id: 5232,
    cp: 21350,
    name: "Almonaster la Real",
    provincia_id: 21
  },
  {
    id: 5233,
    cp: 21359,
    name: "Almonaster la Real",
    provincia_id: 21
  },
  {
    id: 5234,
    cp: 21359,
    name: "Santa Ana la Real",
    provincia_id: 21
  },
  {
    id: 5235,
    cp: 21360,
    name: "Jabugo",
    provincia_id: 21
  },
  {
    id: 5236,
    cp: 21380,
    name: "Cumbres Mayores",
    provincia_id: 21
  },
  {
    id: 5237,
    cp: 21386,
    name: "Cumbres de San Bartolomé",
    provincia_id: 21
  },
  {
    id: 5238,
    cp: 21387,
    name: "Cumbres de Enmedio",
    provincia_id: 21
  },
  {
    id: 5239,
    cp: 21388,
    name: "Ca?averal de León",
    provincia_id: 21
  },
  {
    id: 5240,
    cp: 21388,
    name: "Hinojales",
    provincia_id: 21
  },
  {
    id: 5241,
    cp: 21390,
    name: "Encinasola",
    provincia_id: 21
  },
  {
    id: 5242,
    cp: 21400,
    name: "Ayamonte",
    provincia_id: 21
  },
  {
    id: 5243,
    cp: 21400,
    name: "Lepe",
    provincia_id: 21
  },
  {
    id: 5244,
    cp: 21400,
    name: "Isla Cristina",
    provincia_id: 21
  },
  {
    id: 5245,
    cp: 21409,
    name: "Ayamonte",
    provincia_id: 21
  },
  {
    id: 5246,
    cp: 21410,
    name: "Isla Cristina",
    provincia_id: 21
  },
  {
    id: 5247,
    cp: 21420,
    name: "Isla Cristina",
    provincia_id: 21
  },
  {
    id: 5248,
    cp: 21420,
    name: "Ayamonte",
    provincia_id: 21
  },
  {
    id: 5249,
    cp: 21430,
    name: "Isla Cristina",
    provincia_id: 21
  },
  {
    id: 5250,
    cp: 21440,
    name: "Ayamonte",
    provincia_id: 21
  },
  {
    id: 5251,
    cp: 21440,
    name: "Lepe",
    provincia_id: 21
  },
  {
    id: 5252,
    cp: 21449,
    name: "Lepe",
    provincia_id: 21
  },
  {
    id: 5253,
    cp: 21450,
    name: "Cartaya",
    provincia_id: 21
  },
  {
    id: 5254,
    cp: 21459,
    name: "Cartaya",
    provincia_id: 21
  },
  {
    id: 5255,
    cp: 21459,
    name: "Punta Umbría",
    provincia_id: 21
  },
  {
    id: 5256,
    cp: 21460,
    name: "Isla Cristina",
    provincia_id: 21
  },
  {
    id: 5257,
    cp: 21500,
    name: "Gibraleón",
    provincia_id: 21
  },
  {
    id: 5258,
    cp: 21510,
    name: "San Bartolomé de la Torre",
    provincia_id: 21
  },
  {
    id: 5259,
    cp: 21520,
    name: "Alosno",
    provincia_id: 21
  },
  {
    id: 5260,
    cp: 21520,
    name: "San Bartolomé de la Torre",
    provincia_id: 21
  },
  {
    id: 5261,
    cp: 21530,
    name: "Alosno",
    provincia_id: 21
  },
  {
    id: 5262,
    cp: 21540,
    name: "Cartaya",
    provincia_id: 21
  },
  {
    id: 5263,
    cp: 21540,
    name: "Villanueva de los Castillejos",
    provincia_id: 21
  },
  {
    id: 5264,
    cp: 21550,
    name: "Puebla de Guzmán",
    provincia_id: 21
  },
  {
    id: 5265,
    cp: 21559,
    name: "Puebla de Guzmán",
    provincia_id: 21
  },
  {
    id: 5266,
    cp: 21560,
    name: "Paymogo",
    provincia_id: 21
  },
  {
    id: 5267,
    cp: 21570,
    name: "Santa Bárbara de Casa",
    provincia_id: 21
  },
  {
    id: 5268,
    cp: 21580,
    name: "El Cerro de Andévalo",
    provincia_id: 21
  },
  {
    id: 5269,
    cp: 21580,
    name: "Aroche",
    provincia_id: 21
  },
  {
    id: 5270,
    cp: 21580,
    name: "Cabezas Rubias",
    provincia_id: 21
  },
  {
    id: 5271,
    cp: 21590,
    name: "Villablanca",
    provincia_id: 21
  },
  {
    id: 5272,
    cp: 21591,
    name: "San Silvestre de Guzmán",
    provincia_id: 21
  },
  {
    id: 5273,
    cp: 21592,
    name: "Villanueva de las Cruces",
    provincia_id: 21
  },
  {
    id: 5274,
    cp: 21593,
    name: "El Almendro",
    provincia_id: 21
  },
  {
    id: 5275,
    cp: 21594,
    name: "El Granado",
    provincia_id: 21
  },
  {
    id: 5276,
    cp: 21595,
    name: "Sanlúcar de Guadiana",
    provincia_id: 21
  },
  {
    id: 5277,
    cp: 21600,
    name: "Valverde del Camino",
    provincia_id: 21
  },
  {
    id: 5278,
    cp: 21609,
    name: "Beas",
    provincia_id: 21
  },
  {
    id: 5279,
    cp: 21610,
    name: "San Juan del Puerto",
    provincia_id: 21
  },
  {
    id: 5280,
    cp: 21620,
    name: "Santa Olalla del Cala",
    provincia_id: 21
  },
  {
    id: 5281,
    cp: 21620,
    name: "Trigueros",
    provincia_id: 21
  },
  {
    id: 5282,
    cp: 21630,
    name: "Beas",
    provincia_id: 21
  },
  {
    id: 5283,
    cp: 21639,
    name: "Beas",
    provincia_id: 21
  },
  {
    id: 5284,
    cp: 21639,
    name: "San Juan del Puerto",
    provincia_id: 21
  },
  {
    id: 5285,
    cp: 21640,
    name: "Zalamea la Real",
    provincia_id: 21
  },
  {
    id: 5286,
    cp: 21646,
    name: "Almonaster la Real",
    provincia_id: 21
  },
  {
    id: 5287,
    cp: 21647,
    name: "Zalamea la Real",
    provincia_id: 21
  },
  {
    id: 5288,
    cp: 21647,
    name: "Berrocal",
    provincia_id: 21
  },
  {
    id: 5289,
    cp: 21649,
    name: "Zalamea la Real",
    provincia_id: 21
  },
  {
    id: 5290,
    cp: 21660,
    name: "Minas de Riotinto",
    provincia_id: 21
  },
  {
    id: 5291,
    cp: 21667,
    name: "Minas de Riotinto",
    provincia_id: 21
  },
  {
    id: 5292,
    cp: 21668,
    name: "Campofrío",
    provincia_id: 21
  },
  {
    id: 5293,
    cp: 21668,
    name: "La Granada de Río-Tinto",
    provincia_id: 21
  },
  {
    id: 5294,
    cp: 21668,
    name: "Zalamea la Real",
    provincia_id: 21
  },
  {
    id: 5295,
    cp: 21669,
    name: "Almonaster la Real",
    provincia_id: 21
  },
  {
    id: 5296,
    cp: 21670,
    name: "Nerva",
    provincia_id: 21
  },
  {
    id: 5297,
    cp: 21700,
    name: "La Palma del Condado",
    provincia_id: 21
  },
  {
    id: 5298,
    cp: 21710,
    name: "Bollullos Par del Condado",
    provincia_id: 21
  },
  {
    id: 5299,
    cp: 21710,
    name: "Almonte",
    provincia_id: 21
  },
  {
    id: 5300,
    cp: 21720,
    name: "Rociana del Condado",
    provincia_id: 21
  },
  {
    id: 5301,
    cp: 21730,
    name: "Almonte",
    provincia_id: 21
  },
  {
    id: 5302,
    cp: 21739,
    name: "Almonte",
    provincia_id: 21
  },
  {
    id: 5303,
    cp: 21740,
    name: "Hinojos",
    provincia_id: 21
  },
  {
    id: 5304,
    cp: 21750,
    name: "Almonte",
    provincia_id: 21
  },
  {
    id: 5305,
    cp: 21760,
    name: "Almonte",
    provincia_id: 21
  },
  {
    id: 5306,
    cp: 21800,
    name: "Moguer",
    provincia_id: 21
  },
  {
    id: 5307,
    cp: 21800,
    name: "Palos de la Frontera",
    provincia_id: 21
  },
  {
    id: 5308,
    cp: 21810,
    name: "Palos de la Frontera",
    provincia_id: 21
  },
  {
    id: 5309,
    cp: 21819,
    name: "Palos de la Frontera",
    provincia_id: 21
  },
  {
    id: 5310,
    cp: 21820,
    name: "Lucena del Puerto",
    provincia_id: 21
  },
  {
    id: 5311,
    cp: 21830,
    name: "Bonares",
    provincia_id: 21
  },
  {
    id: 5312,
    cp: 21840,
    name: "Niebla",
    provincia_id: 21
  },
  {
    id: 5313,
    cp: 21850,
    name: "Villarrasa",
    provincia_id: 21
  },
  {
    id: 5314,
    cp: 21860,
    name: "Villalba del Alcor",
    provincia_id: 21
  },
  {
    id: 5315,
    cp: 21870,
    name: "Escacena del Campo",
    provincia_id: 21
  },
  {
    id: 5316,
    cp: 21880,
    name: "Paterna del Campo",
    provincia_id: 21
  },
  {
    id: 5317,
    cp: 21888,
    name: "Paterna del Campo",
    provincia_id: 21
  },
  {
    id: 5318,
    cp: 21890,
    name: "Manzanilla",
    provincia_id: 21
  },
  {
    id: 5319,
    cp: 21891,
    name: "Chucena",
    provincia_id: 21
  },
  {
    id: 5320,
    cp: 22000,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5321,
    cp: 22001,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5322,
    cp: 22002,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5323,
    cp: 22003,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5324,
    cp: 22004,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5325,
    cp: 22005,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5326,
    cp: 22006,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5327,
    cp: 22080,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5328,
    cp: 22090,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5329,
    cp: 22092,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5330,
    cp: 22094,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5331,
    cp: 22097,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5332,
    cp: 22100,
    name: "Sangarrén",
    provincia_id: 22
  },
  {
    id: 5333,
    cp: 22110,
    name: "Salillas",
    provincia_id: 22
  },
  {
    id: 5334,
    cp: 22110,
    name: "Sesa",
    provincia_id: 22
  },
  {
    id: 5335,
    cp: 22111,
    name: "Monflorite-Lascasas",
    provincia_id: 22
  },
  {
    id: 5336,
    cp: 22112,
    name: "Albero Alto",
    provincia_id: 22
  },
  {
    id: 5337,
    cp: 22113,
    name: "Novales",
    provincia_id: 22
  },
  {
    id: 5338,
    cp: 22120,
    name: "Siétamo",
    provincia_id: 22
  },
  {
    id: 5339,
    cp: 22121,
    name: "Siétamo",
    provincia_id: 22
  },
  {
    id: 5340,
    cp: 22122,
    name: "Ibieca",
    provincia_id: 22
  },
  {
    id: 5341,
    cp: 22122,
    name: "Angüés",
    provincia_id: 22
  },
  {
    id: 5342,
    cp: 22122,
    name: "Siétamo",
    provincia_id: 22
  },
  {
    id: 5343,
    cp: 22123,
    name: "Angüés",
    provincia_id: 22
  },
  {
    id: 5344,
    cp: 22124,
    name: "Lascellas-Ponzano",
    provincia_id: 22
  },
  {
    id: 5345,
    cp: 22125,
    name: "Laluenga",
    provincia_id: 22
  },
  {
    id: 5346,
    cp: 22126,
    name: "Laperdiguera",
    provincia_id: 22
  },
  {
    id: 5347,
    cp: 22130,
    name: "Peralta de Alcofea",
    provincia_id: 22
  },
  {
    id: 5348,
    cp: 22131,
    name: "Berbegal",
    provincia_id: 22
  },
  {
    id: 5349,
    cp: 22131,
    name: "Peralta de Alcofea",
    provincia_id: 22
  },
  {
    id: 5350,
    cp: 22132,
    name: "Barbu?ales",
    provincia_id: 22
  },
  {
    id: 5351,
    cp: 22132,
    name: "Pertusa",
    provincia_id: 22
  },
  {
    id: 5352,
    cp: 22132,
    name: "Torres de Alcanadre",
    provincia_id: 22
  },
  {
    id: 5353,
    cp: 22133,
    name: "Angüés",
    provincia_id: 22
  },
  {
    id: 5354,
    cp: 22133,
    name: "Blecua y Torres",
    provincia_id: 22
  },
  {
    id: 5355,
    cp: 22133,
    name: "Antillón",
    provincia_id: 22
  },
  {
    id: 5356,
    cp: 22134,
    name: "Blecua y Torres",
    provincia_id: 22
  },
  {
    id: 5357,
    cp: 22135,
    name: "Alcalá del Obispo",
    provincia_id: 22
  },
  {
    id: 5358,
    cp: 22135,
    name: "Argavieso",
    provincia_id: 22
  },
  {
    id: 5359,
    cp: 22140,
    name: "Loporzano",
    provincia_id: 22
  },
  {
    id: 5360,
    cp: 22141,
    name: "Loporzano",
    provincia_id: 22
  },
  {
    id: 5361,
    cp: 22141,
    name: "Casbas de Huesca",
    provincia_id: 22
  },
  {
    id: 5362,
    cp: 22141,
    name: "Bierge",
    provincia_id: 22
  },
  {
    id: 5363,
    cp: 22142,
    name: "Casbas de Huesca",
    provincia_id: 22
  },
  {
    id: 5364,
    cp: 22143,
    name: "Abiego",
    provincia_id: 22
  },
  {
    id: 5365,
    cp: 22144,
    name: "Bierge",
    provincia_id: 22
  },
  {
    id: 5366,
    cp: 22145,
    name: "Alquézar",
    provincia_id: 22
  },
  {
    id: 5367,
    cp: 22146,
    name: "Santa María de Dulcis",
    provincia_id: 22
  },
  {
    id: 5368,
    cp: 22147,
    name: "Adahuesca",
    provincia_id: 22
  },
  {
    id: 5369,
    cp: 22147,
    name: "Abiego",
    provincia_id: 22
  },
  {
    id: 5370,
    cp: 22148,
    name: "Colungo",
    provincia_id: 22
  },
  {
    id: 5371,
    cp: 22148,
    name: "Bárcabo",
    provincia_id: 22
  },
  {
    id: 5372,
    cp: 22149,
    name: "Aínsa-Sobrarbe",
    provincia_id: 22
  },
  {
    id: 5373,
    cp: 22149,
    name: "Bárcabo",
    provincia_id: 22
  },
  {
    id: 5374,
    cp: 22150,
    name: "Arguis",
    provincia_id: 22
  },
  {
    id: 5375,
    cp: 22160,
    name: "La Sotonera",
    provincia_id: 22
  },
  {
    id: 5376,
    cp: 22161,
    name: "La Sotonera",
    provincia_id: 22
  },
  {
    id: 5377,
    cp: 22162,
    name: "La Sotonera",
    provincia_id: 22
  },
  {
    id: 5378,
    cp: 22190,
    name: "Vicién",
    provincia_id: 22
  },
  {
    id: 5379,
    cp: 22191,
    name: "Quicena",
    provincia_id: 22
  },
  {
    id: 5380,
    cp: 22192,
    name: "Tierz",
    provincia_id: 22
  },
  {
    id: 5381,
    cp: 22192,
    name: "Loporzano",
    provincia_id: 22
  },
  {
    id: 5382,
    cp: 22193,
    name: "Nueno",
    provincia_id: 22
  },
  {
    id: 5383,
    cp: 22193,
    name: "Igriés",
    provincia_id: 22
  },
  {
    id: 5384,
    cp: 22194,
    name: "Alerre",
    provincia_id: 22
  },
  {
    id: 5385,
    cp: 22194,
    name: "Banastás",
    provincia_id: 22
  },
  {
    id: 5386,
    cp: 22194,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5387,
    cp: 22194,
    name: "Chimillas",
    provincia_id: 22
  },
  {
    id: 5388,
    cp: 22195,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5389,
    cp: 22196,
    name: "Monflorite-Lascasas",
    provincia_id: 22
  },
  {
    id: 5390,
    cp: 22196,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5391,
    cp: 22197,
    name: "Huesca",
    provincia_id: 22
  },
  {
    id: 5392,
    cp: 22200,
    name: "Sari?ena",
    provincia_id: 22
  },
  {
    id: 5393,
    cp: 22210,
    name: "Huerto",
    provincia_id: 22
  },
  {
    id: 5394,
    cp: 22211,
    name: "Huerto",
    provincia_id: 22
  },
  {
    id: 5395,
    cp: 22212,
    name: "Lalueza",
    provincia_id: 22
  },
  {
    id: 5396,
    cp: 22212,
    name: "Alberuela de Tubo",
    provincia_id: 22
  },
  {
    id: 5397,
    cp: 22212,
    name: "Capdesaso",
    provincia_id: 22
  },
  {
    id: 5398,
    cp: 22213,
    name: "Lanaja",
    provincia_id: 22
  },
  {
    id: 5399,
    cp: 22213,
    name: "Sari?ena",
    provincia_id: 22
  },
  {
    id: 5400,
    cp: 22214,
    name: "Lalueza",
    provincia_id: 22
  },
  {
    id: 5401,
    cp: 22215,
    name: "Sari?ena",
    provincia_id: 22
  },
  {
    id: 5402,
    cp: 22215,
    name: "Peralta de Alcofea",
    provincia_id: 22
  },
  {
    id: 5403,
    cp: 22215,
    name: "Castelflorite",
    provincia_id: 22
  },
  {
    id: 5404,
    cp: 22216,
    name: "Pole?ino",
    provincia_id: 22
  },
  {
    id: 5405,
    cp: 22216,
    name: "Lanaja",
    provincia_id: 22
  },
  {
    id: 5406,
    cp: 22220,
    name: "Albalatillo",
    provincia_id: 22
  },
  {
    id: 5407,
    cp: 22221,
    name: "Sari?ena",
    provincia_id: 22
  },
  {
    id: 5408,
    cp: 22222,
    name: "Castejón de Monegros",
    provincia_id: 22
  },
  {
    id: 5409,
    cp: 22223,
    name: "Valfarta",
    provincia_id: 22
  },
  {
    id: 5410,
    cp: 22225,
    name: "Gra?én",
    provincia_id: 22
  },
  {
    id: 5411,
    cp: 22230,
    name: "Sena",
    provincia_id: 22
  },
  {
    id: 5412,
    cp: 22231,
    name: "Villanueva de Sigena",
    provincia_id: 22
  },
  {
    id: 5413,
    cp: 22232,
    name: "Onti?ena",
    provincia_id: 22
  },
  {
    id: 5414,
    cp: 22233,
    name: "Chalamera",
    provincia_id: 22
  },
  {
    id: 5415,
    cp: 22234,
    name: "Ballobar",
    provincia_id: 22
  },
  {
    id: 5416,
    cp: 22240,
    name: "Tardienta",
    provincia_id: 22
  },
  {
    id: 5417,
    cp: 22250,
    name: "Lanaja",
    provincia_id: 22
  },
  {
    id: 5418,
    cp: 22251,
    name: "Alcubierre",
    provincia_id: 22
  },
  {
    id: 5419,
    cp: 22252,
    name: "Robres",
    provincia_id: 22
  },
  {
    id: 5420,
    cp: 22253,
    name: "Senés de Alcubierre",
    provincia_id: 22
  },
  {
    id: 5421,
    cp: 22254,
    name: "Torralba de Aragón",
    provincia_id: 22
  },
  {
    id: 5422,
    cp: 22255,
    name: "Albero Bajo",
    provincia_id: 22
  },
  {
    id: 5423,
    cp: 22255,
    name: "Barbués",
    provincia_id: 22
  },
  {
    id: 5424,
    cp: 22255,
    name: "Almuniente",
    provincia_id: 22
  },
  {
    id: 5425,
    cp: 22255,
    name: "Torres de Barbués",
    provincia_id: 22
  },
  {
    id: 5426,
    cp: 22255,
    name: "Gra?én",
    provincia_id: 22
  },
  {
    id: 5427,
    cp: 22260,
    name: "Gra?én",
    provincia_id: 22
  },
  {
    id: 5428,
    cp: 22268,
    name: "Gra?én",
    provincia_id: 22
  },
  {
    id: 5429,
    cp: 22268,
    name: "Tramaced",
    provincia_id: 22
  },
  {
    id: 5430,
    cp: 22268,
    name: "Lalueza",
    provincia_id: 22
  },
  {
    id: 5431,
    cp: 22268,
    name: "Piracés",
    provincia_id: 22
  },
  {
    id: 5432,
    cp: 22269,
    name: "Almuniente",
    provincia_id: 22
  },
  {
    id: 5433,
    cp: 22269,
    name: "Gra?én",
    provincia_id: 22
  },
  {
    id: 5434,
    cp: 22270,
    name: "Almudévar",
    provincia_id: 22
  },
  {
    id: 5435,
    cp: 22280,
    name: "Gurrea de Gállego",
    provincia_id: 22
  },
  {
    id: 5436,
    cp: 22281,
    name: "Gurrea de Gállego",
    provincia_id: 22
  },
  {
    id: 5437,
    cp: 22282,
    name: "Alcalá de Gurrea",
    provincia_id: 22
  },
  {
    id: 5438,
    cp: 22283,
    name: "Alcalá de Gurrea",
    provincia_id: 22
  },
  {
    id: 5439,
    cp: 22283,
    name: "Almudévar",
    provincia_id: 22
  },
  {
    id: 5440,
    cp: 22300,
    name: "Barbastro",
    provincia_id: 22
  },
  {
    id: 5441,
    cp: 22310,
    name: "Castejón del Puente",
    provincia_id: 22
  },
  {
    id: 5442,
    cp: 22311,
    name: "Azara",
    provincia_id: 22
  },
  {
    id: 5443,
    cp: 22311,
    name: "Azlor",
    provincia_id: 22
  },
  {
    id: 5444,
    cp: 22311,
    name: "Peraltilla",
    provincia_id: 22
  },
  {
    id: 5445,
    cp: 22312,
    name: "El Grado",
    provincia_id: 22
  },
  {
    id: 5446,
    cp: 22312,
    name: "Hoz y Costean",
    provincia_id: 22
  },
  {
    id: 5447,
    cp: 22313,
    name: "Castillazuelo",
    provincia_id: 22
  },
  {
    id: 5448,
    cp: 22313,
    name: "Pozán de Vero",
    provincia_id: 22
  },
  {
    id: 5449,
    cp: 22313,
    name: "Santa María de Dulcis",
    provincia_id: 22
  },
  {
    id: 5450,
    cp: 22314,
    name: "Salas Altas",
    provincia_id: 22
  },
  {
    id: 5451,
    cp: 22314,
    name: "Salas Bajas",
    provincia_id: 22
  },
  {
    id: 5452,
    cp: 22315,
    name: "Hoz y Costean",
    provincia_id: 22
  },
  {
    id: 5453,
    cp: 22315,
    name: "Barbastro",
    provincia_id: 22
  },
  {
    id: 5454,
    cp: 22320,
    name: "Naval",
    provincia_id: 22
  },
  {
    id: 5455,
    cp: 22320,
    name: "Bárcabo",
    provincia_id: 22
  },
  {
    id: 5456,
    cp: 22330,
    name: "Aínsa-Sobrarbe",
    provincia_id: 22
  },
  {
    id: 5457,
    cp: 22336,
    name: "La Fueva",
    provincia_id: 22
  },
  {
    id: 5458,
    cp: 22336,
    name: "Aínsa-Sobrarbe",
    provincia_id: 22
  },
  {
    id: 5459,
    cp: 22337,
    name: "Foradada del Toscar",
    provincia_id: 22
  },
  {
    id: 5460,
    cp: 22337,
    name: "Palo",
    provincia_id: 22
  },
  {
    id: 5461,
    cp: 22337,
    name: "La Fueva",
    provincia_id: 22
  },
  {
    id: 5462,
    cp: 22338,
    name: "El Pueyo de Araguás",
    provincia_id: 22
  },
  {
    id: 5463,
    cp: 22339,
    name: "Aínsa-Sobrarbe",
    provincia_id: 22
  },
  {
    id: 5464,
    cp: 22340,
    name: "Bolta?a",
    provincia_id: 22
  },
  {
    id: 5465,
    cp: 22347,
    name: "Bolta?a",
    provincia_id: 22
  },
  {
    id: 5466,
    cp: 22348,
    name: "Bolta?a",
    provincia_id: 22
  },
  {
    id: 5467,
    cp: 22349,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5468,
    cp: 22349,
    name: "Bolta?a",
    provincia_id: 22
  },
  {
    id: 5469,
    cp: 22349,
    name: "Aínsa-Sobrarbe",
    provincia_id: 22
  },
  {
    id: 5470,
    cp: 22350,
    name: "Bielsa",
    provincia_id: 22
  },
  {
    id: 5471,
    cp: 22351,
    name: "Bielsa",
    provincia_id: 22
  },
  {
    id: 5472,
    cp: 22360,
    name: "Labuerda",
    provincia_id: 22
  },
  {
    id: 5473,
    cp: 22361,
    name: "Laspu?a",
    provincia_id: 22
  },
  {
    id: 5474,
    cp: 22362,
    name: "Puértolas",
    provincia_id: 22
  },
  {
    id: 5475,
    cp: 22363,
    name: "Puértolas",
    provincia_id: 22
  },
  {
    id: 5476,
    cp: 22364,
    name: "Tella-Sin",
    provincia_id: 22
  },
  {
    id: 5477,
    cp: 22365,
    name: "Tella-Sin",
    provincia_id: 22
  },
  {
    id: 5478,
    cp: 22365,
    name: "Bielsa",
    provincia_id: 22
  },
  {
    id: 5479,
    cp: 22366,
    name: "Plan",
    provincia_id: 22
  },
  {
    id: 5480,
    cp: 22366,
    name: "Tella-Sin",
    provincia_id: 22
  },
  {
    id: 5481,
    cp: 22367,
    name: "Gistaín",
    provincia_id: 22
  },
  {
    id: 5482,
    cp: 22367,
    name: "Plan",
    provincia_id: 22
  },
  {
    id: 5483,
    cp: 22367,
    name: "San Juan de Plan",
    provincia_id: 22
  },
  {
    id: 5484,
    cp: 22370,
    name: "Broto",
    provincia_id: 22
  },
  {
    id: 5485,
    cp: 22371,
    name: "Fiscal",
    provincia_id: 22
  },
  {
    id: 5486,
    cp: 22372,
    name: "Broto",
    provincia_id: 22
  },
  {
    id: 5487,
    cp: 22372,
    name: "Fiscal",
    provincia_id: 22
  },
  {
    id: 5488,
    cp: 22373,
    name: "Fiscal",
    provincia_id: 22
  },
  {
    id: 5489,
    cp: 22373,
    name: "Broto",
    provincia_id: 22
  },
  {
    id: 5490,
    cp: 22374,
    name: "Broto",
    provincia_id: 22
  },
  {
    id: 5491,
    cp: 22375,
    name: "Fanlo",
    provincia_id: 22
  },
  {
    id: 5492,
    cp: 22375,
    name: "Broto",
    provincia_id: 22
  },
  {
    id: 5493,
    cp: 22376,
    name: "Torla-Ordesa",
    provincia_id: 22
  },
  {
    id: 5494,
    cp: 22377,
    name: "Torla-Ordesa",
    provincia_id: 22
  },
  {
    id: 5495,
    cp: 22378,
    name: "Torla-Ordesa",
    provincia_id: 22
  },
  {
    id: 5496,
    cp: 22390,
    name: "El Grado",
    provincia_id: 22
  },
  {
    id: 5497,
    cp: 22391,
    name: "Secastilla",
    provincia_id: 22
  },
  {
    id: 5498,
    cp: 22392,
    name: "Abizanda",
    provincia_id: 22
  },
  {
    id: 5499,
    cp: 22392,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5500,
    cp: 22393,
    name: "Naval",
    provincia_id: 22
  },
  {
    id: 5501,
    cp: 22393,
    name: "Abizanda",
    provincia_id: 22
  },
  {
    id: 5502,
    cp: 22394,
    name: "Aínsa-Sobrarbe",
    provincia_id: 22
  },
  {
    id: 5503,
    cp: 22394,
    name: "La Fueva",
    provincia_id: 22
  },
  {
    id: 5504,
    cp: 22395,
    name: "Aínsa-Sobrarbe",
    provincia_id: 22
  },
  {
    id: 5505,
    cp: 22400,
    name: "Ayamonte",
    provincia_id: 21
  },
  {
    id: 5506,
    cp: 22400,
    name: "Monzón",
    provincia_id: 22
  },
  {
    id: 5507,
    cp: 22410,
    name: "Alcolea de Cinca",
    provincia_id: 22
  },
  {
    id: 5508,
    cp: 22411,
    name: "San Miguel del Cinca",
    provincia_id: 22
  },
  {
    id: 5509,
    cp: 22412,
    name: "San Miguel del Cinca",
    provincia_id: 22
  },
  {
    id: 5510,
    cp: 22413,
    name: "San Miguel del Cinca",
    provincia_id: 22
  },
  {
    id: 5511,
    cp: 22414,
    name: "Monzón",
    provincia_id: 22
  },
  {
    id: 5512,
    cp: 22415,
    name: "Ilche",
    provincia_id: 22
  },
  {
    id: 5513,
    cp: 22415,
    name: "Monzón",
    provincia_id: 22
  },
  {
    id: 5514,
    cp: 22416,
    name: "Alfántega",
    provincia_id: 22
  },
  {
    id: 5515,
    cp: 22416,
    name: "Pueyo de Santa Cruz",
    provincia_id: 22
  },
  {
    id: 5516,
    cp: 22417,
    name: "Almunia de San Juan",
    provincia_id: 22
  },
  {
    id: 5517,
    cp: 22417,
    name: "Fonz",
    provincia_id: 22
  },
  {
    id: 5518,
    cp: 22420,
    name: "Almunia de San Juan",
    provincia_id: 22
  },
  {
    id: 5519,
    cp: 22421,
    name: "Azanuy-Alins",
    provincia_id: 22
  },
  {
    id: 5520,
    cp: 22422,
    name: "Fonz",
    provincia_id: 22
  },
  {
    id: 5521,
    cp: 22423,
    name: "Estadilla",
    provincia_id: 22
  },
  {
    id: 5522,
    cp: 22424,
    name: "Estada",
    provincia_id: 22
  },
  {
    id: 5523,
    cp: 22430,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5524,
    cp: 22435,
    name: "La Puebla de Castro",
    provincia_id: 22
  },
  {
    id: 5525,
    cp: 22436,
    name: "Las Pe?as de Riglos",
    provincia_id: 22
  },
  {
    id: 5526,
    cp: 22436,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5527,
    cp: 22437,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5528,
    cp: 22438,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5529,
    cp: 22438,
    name: "La Fueva",
    provincia_id: 22
  },
  {
    id: 5530,
    cp: 22439,
    name: "Secastilla",
    provincia_id: 22
  },
  {
    id: 5531,
    cp: 22439,
    name: "Olvena",
    provincia_id: 22
  },
  {
    id: 5532,
    cp: 22440,
    name: "Benasque",
    provincia_id: 22
  },
  {
    id: 5533,
    cp: 22449,
    name: "Benasque",
    provincia_id: 22
  },
  {
    id: 5534,
    cp: 22450,
    name: "Foradada del Toscar",
    provincia_id: 22
  },
  {
    id: 5535,
    cp: 22450,
    name: "Campo",
    provincia_id: 22
  },
  {
    id: 5536,
    cp: 22451,
    name: "Foradada del Toscar",
    provincia_id: 22
  },
  {
    id: 5537,
    cp: 22451,
    name: "Campo",
    provincia_id: 22
  },
  {
    id: 5538,
    cp: 22451,
    name: "Torre la Ribera",
    provincia_id: 22
  },
  {
    id: 5539,
    cp: 22451,
    name: "Valle de Bardají",
    provincia_id: 22
  },
  {
    id: 5540,
    cp: 22451,
    name: "Valle de Lierp",
    provincia_id: 22
  },
  {
    id: 5541,
    cp: 22452,
    name: "Foradada del Toscar",
    provincia_id: 22
  },
  {
    id: 5542,
    cp: 22452,
    name: "La Fueva",
    provincia_id: 22
  },
  {
    id: 5543,
    cp: 22460,
    name: "Perarrúa",
    provincia_id: 22
  },
  {
    id: 5544,
    cp: 22460,
    name: "Santaliestra y San Quílez",
    provincia_id: 22
  },
  {
    id: 5545,
    cp: 22461,
    name: "Santaliestra y San Quílez",
    provincia_id: 22
  },
  {
    id: 5546,
    cp: 22461,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5547,
    cp: 22461,
    name: "Bolta?a",
    provincia_id: 22
  },
  {
    id: 5548,
    cp: 22462,
    name: "Isábena",
    provincia_id: 22
  },
  {
    id: 5549,
    cp: 22462,
    name: "Foradada del Toscar",
    provincia_id: 22
  },
  {
    id: 5550,
    cp: 22463,
    name: "Seira",
    provincia_id: 22
  },
  {
    id: 5551,
    cp: 22464,
    name: "Seira",
    provincia_id: 22
  },
  {
    id: 5552,
    cp: 22465,
    name: "Chía",
    provincia_id: 22
  },
  {
    id: 5553,
    cp: 22465,
    name: "Castejón de Sos",
    provincia_id: 22
  },
  {
    id: 5554,
    cp: 22466,
    name: "Bisaurri",
    provincia_id: 22
  },
  {
    id: 5555,
    cp: 22466,
    name: "Castejón de Sos",
    provincia_id: 22
  },
  {
    id: 5556,
    cp: 22467,
    name: "Castejón de Sos",
    provincia_id: 22
  },
  {
    id: 5557,
    cp: 22467,
    name: "Sahún",
    provincia_id: 22
  },
  {
    id: 5558,
    cp: 22467,
    name: "Sesué",
    provincia_id: 22
  },
  {
    id: 5559,
    cp: 22467,
    name: "Villanova",
    provincia_id: 22
  },
  {
    id: 5560,
    cp: 22468,
    name: "Sahún",
    provincia_id: 22
  },
  {
    id: 5561,
    cp: 22469,
    name: "Benasque",
    provincia_id: 22
  },
  {
    id: 5562,
    cp: 22469,
    name: "Sahún",
    provincia_id: 22
  },
  {
    id: 5563,
    cp: 22470,
    name: "Bisaurri",
    provincia_id: 22
  },
  {
    id: 5564,
    cp: 22471,
    name: "Laspaúles",
    provincia_id: 22
  },
  {
    id: 5565,
    cp: 22472,
    name: "Laspaúles",
    provincia_id: 22
  },
  {
    id: 5566,
    cp: 22473,
    name: "Laspaúles",
    provincia_id: 22
  },
  {
    id: 5567,
    cp: 22473,
    name: "Montanuy",
    provincia_id: 22
  },
  {
    id: 5568,
    cp: 22474,
    name: "Laspaúles",
    provincia_id: 22
  },
  {
    id: 5569,
    cp: 22474,
    name: "Montanuy",
    provincia_id: 22
  },
  {
    id: 5570,
    cp: 22480,
    name: "Capella",
    provincia_id: 22
  },
  {
    id: 5571,
    cp: 22480,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5572,
    cp: 22481,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5573,
    cp: 22482,
    name: "Isábena",
    provincia_id: 22
  },
  {
    id: 5574,
    cp: 22483,
    name: "Valle de Lierp",
    provincia_id: 22
  },
  {
    id: 5575,
    cp: 22483,
    name: "Isábena",
    provincia_id: 22
  },
  {
    id: 5576,
    cp: 22483,
    name: "Torre la Ribera",
    provincia_id: 22
  },
  {
    id: 5577,
    cp: 22484,
    name: "Torre la Ribera",
    provincia_id: 22
  },
  {
    id: 5578,
    cp: 22484,
    name: "Beranuy",
    provincia_id: 22
  },
  {
    id: 5579,
    cp: 22485,
    name: "Beranuy",
    provincia_id: 22
  },
  {
    id: 5580,
    cp: 22486,
    name: "Montanuy",
    provincia_id: 22
  },
  {
    id: 5581,
    cp: 22486,
    name: "Bonansa",
    provincia_id: 22
  },
  {
    id: 5582,
    cp: 22487,
    name: "Montanuy",
    provincia_id: 22
  },
  {
    id: 5583,
    cp: 22500,
    name: "Binéfar",
    provincia_id: 22
  },
  {
    id: 5584,
    cp: 22510,
    name: "Binaced",
    provincia_id: 22
  },
  {
    id: 5585,
    cp: 22511,
    name: "Binaced",
    provincia_id: 22
  },
  {
    id: 5586,
    cp: 22512,
    name: "San Esteban de Litera",
    provincia_id: 22
  },
  {
    id: 5587,
    cp: 22513,
    name: "Peralta de Calasanz",
    provincia_id: 22
  },
  {
    id: 5588,
    cp: 22514,
    name: "Peralta de Calasanz",
    provincia_id: 22
  },
  {
    id: 5589,
    cp: 22520,
    name: "Fraga",
    provincia_id: 22
  },
  {
    id: 5590,
    cp: 22528,
    name: "Velilla de Cinca",
    provincia_id: 22
  },
  {
    id: 5591,
    cp: 22529,
    name: "Fraga",
    provincia_id: 22
  },
  {
    id: 5592,
    cp: 22530,
    name: "Zaidín",
    provincia_id: 22
  },
  {
    id: 5593,
    cp: 22531,
    name: "Osso de Cinca",
    provincia_id: 22
  },
  {
    id: 5594,
    cp: 22532,
    name: "Osso de Cinca",
    provincia_id: 22
  },
  {
    id: 5595,
    cp: 22533,
    name: "Belver de Cinca",
    provincia_id: 22
  },
  {
    id: 5596,
    cp: 22534,
    name: "Albalate de Cinca",
    provincia_id: 22
  },
  {
    id: 5597,
    cp: 22535,
    name: "Esplús",
    provincia_id: 22
  },
  {
    id: 5598,
    cp: 22536,
    name: "Belver de Cinca",
    provincia_id: 22
  },
  {
    id: 5599,
    cp: 22540,
    name: "Altorricón",
    provincia_id: 22
  },
  {
    id: 5600,
    cp: 22549,
    name: "Belver de Cinca",
    provincia_id: 22
  },
  {
    id: 5601,
    cp: 22549,
    name: "Tamarite de Litera",
    provincia_id: 22
  },
  {
    id: 5602,
    cp: 22549,
    name: "Vencillón",
    provincia_id: 22
  },
  {
    id: 5603,
    cp: 22550,
    name: "Tamarite de Litera",
    provincia_id: 22
  },
  {
    id: 5604,
    cp: 22558,
    name: "Albelda",
    provincia_id: 22
  },
  {
    id: 5605,
    cp: 22559,
    name: "Tamarite de Litera",
    provincia_id: 22
  },
  {
    id: 5606,
    cp: 22560,
    name: "Alcampell",
    provincia_id: 22
  },
  {
    id: 5607,
    cp: 22569,
    name: "Peralta de Calasanz",
    provincia_id: 22
  },
  {
    id: 5608,
    cp: 22569,
    name: "Baélls",
    provincia_id: 22
  },
  {
    id: 5609,
    cp: 22570,
    name: "Castillonroy",
    provincia_id: 22
  },
  {
    id: 5610,
    cp: 22570,
    name: "Camporrélls",
    provincia_id: 22
  },
  {
    id: 5611,
    cp: 22571,
    name: "Baldellou",
    provincia_id: 22
  },
  {
    id: 5612,
    cp: 22572,
    name: "Castillonroy",
    provincia_id: 22
  },
  {
    id: 5613,
    cp: 22572,
    name: "Estopi?án del Castillo",
    provincia_id: 22
  },
  {
    id: 5614,
    cp: 22580,
    name: "Benabarre",
    provincia_id: 22
  },
  {
    id: 5615,
    cp: 22583,
    name: "Sopeira",
    provincia_id: 22
  },
  {
    id: 5616,
    cp: 22583,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 5617,
    cp: 22583,
    name: "Arén",
    provincia_id: 22
  },
  {
    id: 5618,
    cp: 22584,
    name: "Puente de Monta?ana",
    provincia_id: 22
  },
  {
    id: 5619,
    cp: 22584,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 5620,
    cp: 22584,
    name: "Viacamp y Litera",
    provincia_id: 22
  },
  {
    id: 5621,
    cp: 22585,
    name: "Fraga",
    provincia_id: 22
  },
  {
    id: 5622,
    cp: 22585,
    name: "Bárcabo",
    provincia_id: 22
  },
  {
    id: 5623,
    cp: 22585,
    name: "Viacamp y Litera",
    provincia_id: 22
  },
  {
    id: 5624,
    cp: 22585,
    name: "Salas Altas",
    provincia_id: 22
  },
  {
    id: 5625,
    cp: 22585,
    name: "Castigaleu",
    provincia_id: 22
  },
  {
    id: 5626,
    cp: 22585,
    name: "Tolva",
    provincia_id: 22
  },
  {
    id: 5627,
    cp: 22586,
    name: "Lascuarre",
    provincia_id: 22
  },
  {
    id: 5628,
    cp: 22587,
    name: "Monesma y Cajigar",
    provincia_id: 22
  },
  {
    id: 5629,
    cp: 22587,
    name: "Capella",
    provincia_id: 22
  },
  {
    id: 5630,
    cp: 22587,
    name: "Castigaleu",
    provincia_id: 22
  },
  {
    id: 5631,
    cp: 22588,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5632,
    cp: 22589,
    name: "Estopi?án del Castillo",
    provincia_id: 22
  },
  {
    id: 5633,
    cp: 22589,
    name: "Benabarre",
    provincia_id: 22
  },
  {
    id: 5634,
    cp: 22590,
    name: "Torrente de Cinca",
    provincia_id: 22
  },
  {
    id: 5635,
    cp: 22591,
    name: "Candasnos",
    provincia_id: 22
  },
  {
    id: 5636,
    cp: 22592,
    name: "Pe?alba",
    provincia_id: 22
  },
  {
    id: 5637,
    cp: 22600,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5638,
    cp: 22609,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5639,
    cp: 22610,
    name: "Yebra de Basa",
    provincia_id: 22
  },
  {
    id: 5640,
    cp: 22610,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5641,
    cp: 22611,
    name: "Yebra de Basa",
    provincia_id: 22
  },
  {
    id: 5642,
    cp: 22612,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5643,
    cp: 22613,
    name: "Biescas",
    provincia_id: 22
  },
  {
    id: 5644,
    cp: 22613,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5645,
    cp: 22620,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5646,
    cp: 22620,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5647,
    cp: 22621,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5648,
    cp: 22621,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5649,
    cp: 22622,
    name: "Nueno",
    provincia_id: 22
  },
  {
    id: 5650,
    cp: 22622,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5651,
    cp: 22623,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5652,
    cp: 22624,
    name: "Caldearenas",
    provincia_id: 22
  },
  {
    id: 5653,
    cp: 22625,
    name: "Caldearenas",
    provincia_id: 22
  },
  {
    id: 5654,
    cp: 22630,
    name: "Biescas",
    provincia_id: 22
  },
  {
    id: 5655,
    cp: 22636,
    name: "Biescas",
    provincia_id: 22
  },
  {
    id: 5656,
    cp: 22636,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5657,
    cp: 22637,
    name: "Biescas",
    provincia_id: 22
  },
  {
    id: 5658,
    cp: 22638,
    name: "Biescas",
    provincia_id: 22
  },
  {
    id: 5659,
    cp: 22639,
    name: "Biescas",
    provincia_id: 22
  },
  {
    id: 5660,
    cp: 22639,
    name: "Yésero",
    provincia_id: 22
  },
  {
    id: 5661,
    cp: 22640,
    name: "Sallent de Gállego",
    provincia_id: 22
  },
  {
    id: 5662,
    cp: 22650,
    name: "Panticosa",
    provincia_id: 22
  },
  {
    id: 5663,
    cp: 22660,
    name: "Sallent de Gállego",
    provincia_id: 22
  },
  {
    id: 5664,
    cp: 22661,
    name: "Panticosa",
    provincia_id: 22
  },
  {
    id: 5665,
    cp: 22662,
    name: "Hoz de Jaca",
    provincia_id: 22
  },
  {
    id: 5666,
    cp: 22662,
    name: "Panticosa",
    provincia_id: 22
  },
  {
    id: 5667,
    cp: 22663,
    name: "Sallent de Gállego",
    provincia_id: 22
  },
  {
    id: 5668,
    cp: 22664,
    name: "Sallent de Gállego",
    provincia_id: 22
  },
  {
    id: 5669,
    cp: 22665,
    name: "Biescas",
    provincia_id: 22
  },
  {
    id: 5670,
    cp: 22666,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5671,
    cp: 22700,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5672,
    cp: 22710,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5673,
    cp: 22710,
    name: "Castiello de Jaca",
    provincia_id: 22
  },
  {
    id: 5674,
    cp: 22711,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5675,
    cp: 22712,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5676,
    cp: 22713,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5677,
    cp: 22714,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5678,
    cp: 22714,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5679,
    cp: 22715,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5680,
    cp: 22720,
    name: "Valle de Hecho",
    provincia_id: 22
  },
  {
    id: 5681,
    cp: 22725,
    name: "Ansó",
    provincia_id: 22
  },
  {
    id: 5682,
    cp: 22728,
    name: "Ansó",
    provincia_id: 22
  },
  {
    id: 5683,
    cp: 22729,
    name: "Fago",
    provincia_id: 22
  },
  {
    id: 5684,
    cp: 22730,
    name: "Aragüés del Puerto",
    provincia_id: 22
  },
  {
    id: 5685,
    cp: 22731,
    name: "Jasa",
    provincia_id: 22
  },
  {
    id: 5686,
    cp: 22732,
    name: "Valle de Hecho",
    provincia_id: 22
  },
  {
    id: 5687,
    cp: 22740,
    name: "Valle de Hecho",
    provincia_id: 22
  },
  {
    id: 5688,
    cp: 22750,
    name: "Puente la Reina de Jaca",
    provincia_id: 22
  },
  {
    id: 5689,
    cp: 22751,
    name: "Bailo",
    provincia_id: 22
  },
  {
    id: 5690,
    cp: 22751,
    name: "Puente la Reina de Jaca",
    provincia_id: 22
  },
  {
    id: 5691,
    cp: 22752,
    name: "Santa Cilia",
    provincia_id: 22
  },
  {
    id: 5692,
    cp: 22753,
    name: "Puente la Reina de Jaca",
    provincia_id: 22
  },
  {
    id: 5693,
    cp: 22760,
    name: "Bailo",
    provincia_id: 22
  },
  {
    id: 5694,
    cp: 22761,
    name: "Bailo",
    provincia_id: 22
  },
  {
    id: 5695,
    cp: 22770,
    name: "Canal de Berdún",
    provincia_id: 22
  },
  {
    id: 5696,
    cp: 22771,
    name: "Canal de Berdún",
    provincia_id: 22
  },
  {
    id: 5697,
    cp: 22772,
    name: "Canal de Berdún",
    provincia_id: 22
  },
  {
    id: 5698,
    cp: 22773,
    name: "Canal de Berdún",
    provincia_id: 22
  },
  {
    id: 5699,
    cp: 22790,
    name: "Valle de Hecho",
    provincia_id: 22
  },
  {
    id: 5700,
    cp: 22791,
    name: "Santa Cruz de la Serós",
    provincia_id: 22
  },
  {
    id: 5701,
    cp: 22791,
    name: "Santa Cilia",
    provincia_id: 22
  },
  {
    id: 5702,
    cp: 22792,
    name: "Santa Cruz de la Serós",
    provincia_id: 22
  },
  {
    id: 5703,
    cp: 22800,
    name: "Ayerbe",
    provincia_id: 22
  },
  {
    id: 5704,
    cp: 22807,
    name: "Biscarrués",
    provincia_id: 22
  },
  {
    id: 5705,
    cp: 22807,
    name: "Ayerbe",
    provincia_id: 22
  },
  {
    id: 5706,
    cp: 22808,
    name: "Agüero",
    provincia_id: 22
  },
  {
    id: 5707,
    cp: 22808,
    name: "Murillo de Gállego",
    provincia_id: 50
  },
  {
    id: 5708,
    cp: 22808,
    name: "Las Pe?as de Riglos",
    provincia_id: 22
  },
  {
    id: 5709,
    cp: 22809,
    name: "Ayerbe",
    provincia_id: 22
  },
  {
    id: 5710,
    cp: 22809,
    name: "Loarre",
    provincia_id: 22
  },
  {
    id: 5711,
    cp: 22809,
    name: "Loscorrales",
    provincia_id: 22
  },
  {
    id: 5712,
    cp: 22810,
    name: "La Sotonera",
    provincia_id: 22
  },
  {
    id: 5713,
    cp: 22810,
    name: "Lupi?én-Ortilla",
    provincia_id: 22
  },
  {
    id: 5714,
    cp: 22811,
    name: "Lupi?én-Ortilla",
    provincia_id: 22
  },
  {
    id: 5715,
    cp: 22820,
    name: "Las Pe?as de Riglos",
    provincia_id: 22
  },
  {
    id: 5716,
    cp: 22821,
    name: "Las Pe?as de Riglos",
    provincia_id: 22
  },
  {
    id: 5717,
    cp: 22822,
    name: "Las Pe?as de Riglos",
    provincia_id: 22
  },
  {
    id: 5718,
    cp: 22830,
    name: "Las Pe?as de Riglos",
    provincia_id: 22
  },
  {
    id: 5719,
    cp: 22830,
    name: "Graus",
    provincia_id: 22
  },
  {
    id: 5720,
    cp: 22830,
    name: "Caldearenas",
    provincia_id: 22
  },
  {
    id: 5721,
    cp: 22830,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5722,
    cp: 22850,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5723,
    cp: 22850,
    name: "Sabi?ánigo",
    provincia_id: 22
  },
  {
    id: 5724,
    cp: 22860,
    name: "Castiello de Jaca",
    provincia_id: 22
  },
  {
    id: 5725,
    cp: 22860,
    name: "Borau",
    provincia_id: 22
  },
  {
    id: 5726,
    cp: 22860,
    name: "Aisa",
    provincia_id: 22
  },
  {
    id: 5727,
    cp: 22870,
    name: "Villanúa",
    provincia_id: 22
  },
  {
    id: 5728,
    cp: 22880,
    name: "Canfranc",
    provincia_id: 22
  },
  {
    id: 5729,
    cp: 22888,
    name: "Canfranc",
    provincia_id: 22
  },
  {
    id: 5730,
    cp: 22889,
    name: "Aisa",
    provincia_id: 22
  },
  {
    id: 5731,
    cp: 22889,
    name: "Jaca",
    provincia_id: 22
  },
  {
    id: 5732,
    cp: 23001,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5733,
    cp: 23002,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5734,
    cp: 23003,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5735,
    cp: 23004,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5736,
    cp: 23005,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5737,
    cp: 23006,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5738,
    cp: 23007,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5739,
    cp: 23008,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5740,
    cp: 23009,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5741,
    cp: 23100,
    name: "Mancha Real",
    provincia_id: 23
  },
  {
    id: 5742,
    cp: 23110,
    name: "Pegalajar",
    provincia_id: 23
  },
  {
    id: 5743,
    cp: 23120,
    name: "Cambil",
    provincia_id: 23
  },
  {
    id: 5744,
    cp: 23130,
    name: "Campillo de Arenas",
    provincia_id: 23
  },
  {
    id: 5745,
    cp: 23140,
    name: "Noalejo",
    provincia_id: 23
  },
  {
    id: 5746,
    cp: 23150,
    name: "Valdepe?as de Jaén",
    provincia_id: 23
  },
  {
    id: 5747,
    cp: 23159,
    name: "Valdepe?as de Jaén",
    provincia_id: 23
  },
  {
    id: 5748,
    cp: 23160,
    name: "Los Villares",
    provincia_id: 23
  },
  {
    id: 5749,
    cp: 23170,
    name: "La Guardia de Jaén",
    provincia_id: 23
  },
  {
    id: 5750,
    cp: 23180,
    name: "Fuerte del Rey",
    provincia_id: 23
  },
  {
    id: 5751,
    cp: 23190,
    name: "Pegalajar",
    provincia_id: 23
  },
  {
    id: 5752,
    cp: 23191,
    name: "Cárcheles",
    provincia_id: 23
  },
  {
    id: 5753,
    cp: 23192,
    name: "Cárcheles",
    provincia_id: 23
  },
  {
    id: 5754,
    cp: 23193,
    name: "Cambil",
    provincia_id: 23
  },
  {
    id: 5755,
    cp: 23194,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5756,
    cp: 23196,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5757,
    cp: 23196,
    name: "Valdepe?as de Jaén",
    provincia_id: 23
  },
  {
    id: 5758,
    cp: 23200,
    name: "La Carolina",
    provincia_id: 23
  },
  {
    id: 5759,
    cp: 23210,
    name: "Guarromán",
    provincia_id: 23
  },
  {
    id: 5760,
    cp: 23211,
    name: "Carboneros",
    provincia_id: 23
  },
  {
    id: 5761,
    cp: 23212,
    name: "La Carolina",
    provincia_id: 23
  },
  {
    id: 5762,
    cp: 23213,
    name: "Santa Elena",
    provincia_id: 23
  },
  {
    id: 5763,
    cp: 23214,
    name: "La Carolina",
    provincia_id: 23
  },
  {
    id: 5764,
    cp: 23214,
    name: "Ba?os de la Encina",
    provincia_id: 23
  },
  {
    id: 5765,
    cp: 23215,
    name: "Aldeaquemada",
    provincia_id: 23
  },
  {
    id: 5766,
    cp: 23220,
    name: "Vilches",
    provincia_id: 23
  },
  {
    id: 5767,
    cp: 23230,
    name: "Arquillos",
    provincia_id: 23
  },
  {
    id: 5768,
    cp: 23239,
    name: "Arquillos",
    provincia_id: 23
  },
  {
    id: 5769,
    cp: 23240,
    name: "Navas de San Juan",
    provincia_id: 23
  },
  {
    id: 5770,
    cp: 23250,
    name: "Santisteban del Puerto",
    provincia_id: 23
  },
  {
    id: 5771,
    cp: 23260,
    name: "Castellar",
    provincia_id: 23
  },
  {
    id: 5772,
    cp: 23264,
    name: "Chiclana de Segura",
    provincia_id: 23
  },
  {
    id: 5773,
    cp: 23265,
    name: "Montizón",
    provincia_id: 23
  },
  {
    id: 5774,
    cp: 23266,
    name: "Montizón",
    provincia_id: 23
  },
  {
    id: 5775,
    cp: 23267,
    name: "Montizón",
    provincia_id: 23
  },
  {
    id: 5776,
    cp: 23268,
    name: "Chiclana de Segura",
    provincia_id: 23
  },
  {
    id: 5777,
    cp: 23269,
    name: "Chiclana de Segura",
    provincia_id: 23
  },
  {
    id: 5778,
    cp: 23270,
    name: "Sorihuela del Guadalimar",
    provincia_id: 23
  },
  {
    id: 5779,
    cp: 23280,
    name: "Beas de Segura",
    provincia_id: 23
  },
  {
    id: 5780,
    cp: 23289,
    name: "Beas de Segura",
    provincia_id: 23
  },
  {
    id: 5781,
    cp: 23289,
    name: "Arroyo del Ojanco",
    provincia_id: 23
  },
  {
    id: 5782,
    cp: 23290,
    name: "Santiago-Pontones",
    provincia_id: 23
  },
  {
    id: 5783,
    cp: 23291,
    name: "Santiago-Pontones",
    provincia_id: 23
  },
  {
    id: 5784,
    cp: 23292,
    name: "Hornos",
    provincia_id: 23
  },
  {
    id: 5785,
    cp: 23293,
    name: "Segura de la Sierra",
    provincia_id: 23
  },
  {
    id: 5786,
    cp: 23293,
    name: "Hornos",
    provincia_id: 23
  },
  {
    id: 5787,
    cp: 23294,
    name: "Segura de la Sierra",
    provincia_id: 23
  },
  {
    id: 5788,
    cp: 23294,
    name: "Santiago-Pontones",
    provincia_id: 23
  },
  {
    id: 5789,
    cp: 23295,
    name: "Segura de la Sierra",
    provincia_id: 23
  },
  {
    id: 5790,
    cp: 23296,
    name: "Santiago-Pontones",
    provincia_id: 23
  },
  {
    id: 5791,
    cp: 23297,
    name: "Santiago-Pontones",
    provincia_id: 23
  },
  {
    id: 5792,
    cp: 23298,
    name: "Santiago-Pontones",
    provincia_id: 23
  },
  {
    id: 5793,
    cp: 23300,
    name: "Villacarrillo",
    provincia_id: 23
  },
  {
    id: 5794,
    cp: 23310,
    name: "Villacarrillo",
    provincia_id: 23
  },
  {
    id: 5795,
    cp: 23311,
    name: "Santo Tomé",
    provincia_id: 23
  },
  {
    id: 5796,
    cp: 23312,
    name: "Villacarrillo",
    provincia_id: 23
  },
  {
    id: 5797,
    cp: 23314,
    name: "Úbeda",
    provincia_id: 23
  },
  {
    id: 5798,
    cp: 23315,
    name: "Villacarrillo",
    provincia_id: 23
  },
  {
    id: 5799,
    cp: 23320,
    name: "Torreperogil",
    provincia_id: 23
  },
  {
    id: 5800,
    cp: 23330,
    name: "Villanueva del Arzobispo",
    provincia_id: 23
  },
  {
    id: 5801,
    cp: 23337,
    name: "Hornos",
    provincia_id: 23
  },
  {
    id: 5802,
    cp: 23338,
    name: "Iznatoraf",
    provincia_id: 23
  },
  {
    id: 5803,
    cp: 23339,
    name: "Villanueva del Arzobispo",
    provincia_id: 23
  },
  {
    id: 5804,
    cp: 23340,
    name: "Segura de la Sierra",
    provincia_id: 23
  },
  {
    id: 5805,
    cp: 23340,
    name: "Arroyo del Ojanco",
    provincia_id: 23
  },
  {
    id: 5806,
    cp: 23350,
    name: "Puente de Génave",
    provincia_id: 23
  },
  {
    id: 5807,
    cp: 23359,
    name: "Puente de Génave",
    provincia_id: 23
  },
  {
    id: 5808,
    cp: 23360,
    name: "La Puerta de Segura",
    provincia_id: 23
  },
  {
    id: 5809,
    cp: 23369,
    name: "La Puerta de Segura",
    provincia_id: 23
  },
  {
    id: 5810,
    cp: 23370,
    name: "Orcera",
    provincia_id: 23
  },
  {
    id: 5811,
    cp: 23379,
    name: "Segura de la Sierra",
    provincia_id: 23
  },
  {
    id: 5812,
    cp: 23380,
    name: "Siles",
    provincia_id: 23
  },
  {
    id: 5813,
    cp: 23390,
    name: "Benatae",
    provincia_id: 23
  },
  {
    id: 5814,
    cp: 23391,
    name: "Torres de Albánchez",
    provincia_id: 23
  },
  {
    id: 5815,
    cp: 23392,
    name: "Génave",
    provincia_id: 23
  },
  {
    id: 5816,
    cp: 23393,
    name: "Villarrodrigo",
    provincia_id: 23
  },
  {
    id: 5817,
    cp: 23400,
    name: "Úbeda",
    provincia_id: 23
  },
  {
    id: 5818,
    cp: 23410,
    name: "Sabiote",
    provincia_id: 23
  },
  {
    id: 5819,
    cp: 23411,
    name: "Baeza",
    provincia_id: 23
  },
  {
    id: 5820,
    cp: 23412,
    name: "Rus",
    provincia_id: 23
  },
  {
    id: 5821,
    cp: 23413,
    name: "Úbeda",
    provincia_id: 23
  },
  {
    id: 5822,
    cp: 23420,
    name: "Canena",
    provincia_id: 23
  },
  {
    id: 5823,
    cp: 23430,
    name: "Rus",
    provincia_id: 23
  },
  {
    id: 5824,
    cp: 23440,
    name: "Baeza",
    provincia_id: 23
  },
  {
    id: 5825,
    cp: 23450,
    name: "Ibros",
    provincia_id: 23
  },
  {
    id: 5826,
    cp: 23460,
    name: "Peal de Becerro",
    provincia_id: 23
  },
  {
    id: 5827,
    cp: 23468,
    name: "Peal de Becerro",
    provincia_id: 23
  },
  {
    id: 5828,
    cp: 23469,
    name: "Cazorla",
    provincia_id: 23
  },
  {
    id: 5829,
    cp: 23469,
    name: "Úbeda",
    provincia_id: 23
  },
  {
    id: 5830,
    cp: 23470,
    name: "Cazorla",
    provincia_id: 23
  },
  {
    id: 5831,
    cp: 23470,
    name: "Chilluévar",
    provincia_id: 23
  },
  {
    id: 5832,
    cp: 23476,
    name: "La Iruela",
    provincia_id: 23
  },
  {
    id: 5833,
    cp: 23477,
    name: "Chilluévar",
    provincia_id: 23
  },
  {
    id: 5834,
    cp: 23478,
    name: "Santiago-Pontones",
    provincia_id: 23
  },
  {
    id: 5835,
    cp: 23479,
    name: "La Iruela",
    provincia_id: 23
  },
  {
    id: 5836,
    cp: 23479,
    name: "Cazorla",
    provincia_id: 23
  },
  {
    id: 5837,
    cp: 23480,
    name: "Quesada",
    provincia_id: 23
  },
  {
    id: 5838,
    cp: 23485,
    name: "Pozo Alcón",
    provincia_id: 23
  },
  {
    id: 5839,
    cp: 23485,
    name: "Cazorla",
    provincia_id: 23
  },
  {
    id: 5840,
    cp: 23485,
    name: "Peal de Becerro",
    provincia_id: 23
  },
  {
    id: 5841,
    cp: 23486,
    name: "Hinojares",
    provincia_id: 23
  },
  {
    id: 5842,
    cp: 23486,
    name: "Pozo Alcón",
    provincia_id: 23
  },
  {
    id: 5843,
    cp: 23487,
    name: "Huesa",
    provincia_id: 23
  },
  {
    id: 5844,
    cp: 23488,
    name: "Frailes",
    provincia_id: 23
  },
  {
    id: 5845,
    cp: 23488,
    name: "Quesada",
    provincia_id: 23
  },
  {
    id: 5846,
    cp: 23489,
    name: "Quesada",
    provincia_id: 23
  },
  {
    id: 5847,
    cp: 23490,
    name: "Ibros",
    provincia_id: 23
  },
  {
    id: 5848,
    cp: 23490,
    name: "Linares",
    provincia_id: 23
  },
  {
    id: 5849,
    cp: 23499,
    name: "Vilches",
    provincia_id: 23
  },
  {
    id: 5850,
    cp: 23500,
    name: "Jódar",
    provincia_id: 23
  },
  {
    id: 5851,
    cp: 23509,
    name: "Úbeda",
    provincia_id: 23
  },
  {
    id: 5852,
    cp: 23510,
    name: "Torreblascopedro",
    provincia_id: 23
  },
  {
    id: 5853,
    cp: 23519,
    name: "Torreblascopedro",
    provincia_id: 23
  },
  {
    id: 5854,
    cp: 23519,
    name: "Lupión",
    provincia_id: 23
  },
  {
    id: 5855,
    cp: 23520,
    name: "Begíjar",
    provincia_id: 23
  },
  {
    id: 5856,
    cp: 23528,
    name: "Lupión",
    provincia_id: 23
  },
  {
    id: 5857,
    cp: 23529,
    name: "Villatorres",
    provincia_id: 23
  },
  {
    id: 5858,
    cp: 23529,
    name: "Begíjar",
    provincia_id: 23
  },
  {
    id: 5859,
    cp: 23529,
    name: "Mancha Real",
    provincia_id: 23
  },
  {
    id: 5860,
    cp: 23529,
    name: "Baeza",
    provincia_id: 23
  },
  {
    id: 5861,
    cp: 23530,
    name: "Jimena",
    provincia_id: 23
  },
  {
    id: 5862,
    cp: 23537,
    name: "Bedmar y Garcíez",
    provincia_id: 23
  },
  {
    id: 5863,
    cp: 23538,
    name: "Albanchez de Mágina",
    provincia_id: 23
  },
  {
    id: 5864,
    cp: 23539,
    name: "Baeza",
    provincia_id: 23
  },
  {
    id: 5865,
    cp: 23539,
    name: "Bedmar y Garcíez",
    provincia_id: 23
  },
  {
    id: 5866,
    cp: 23540,
    name: "Torres",
    provincia_id: 23
  },
  {
    id: 5867,
    cp: 23550,
    name: "Cabra del Santo Cristo",
    provincia_id: 23
  },
  {
    id: 5868,
    cp: 23560,
    name: "Huelma",
    provincia_id: 23
  },
  {
    id: 5869,
    cp: 23568,
    name: "Bélmez de la Moraleda",
    provincia_id: 23
  },
  {
    id: 5870,
    cp: 23569,
    name: "Huelma",
    provincia_id: 23
  },
  {
    id: 5871,
    cp: 23569,
    name: "Hornos",
    provincia_id: 23
  },
  {
    id: 5872,
    cp: 23590,
    name: "Cabra del Santo Cristo",
    provincia_id: 23
  },
  {
    id: 5873,
    cp: 23591,
    name: "Cabra del Santo Cristo",
    provincia_id: 23
  },
  {
    id: 5874,
    cp: 23591,
    name: "Larva",
    provincia_id: 23
  },
  {
    id: 5875,
    cp: 23600,
    name: "Martos",
    provincia_id: 23
  },
  {
    id: 5876,
    cp: 23610,
    name: "Fuensanta de Martos",
    provincia_id: 23
  },
  {
    id: 5877,
    cp: 23611,
    name: "Higuera de Calatrava",
    provincia_id: 23
  },
  {
    id: 5878,
    cp: 23612,
    name: "Santiago de Calatrava",
    provincia_id: 23
  },
  {
    id: 5879,
    cp: 23614,
    name: "Martos",
    provincia_id: 23
  },
  {
    id: 5880,
    cp: 23615,
    name: "Martos",
    provincia_id: 23
  },
  {
    id: 5881,
    cp: 23616,
    name: "Fuensanta de Martos",
    provincia_id: 23
  },
  {
    id: 5882,
    cp: 23620,
    name: "Mengíbar",
    provincia_id: 23
  },
  {
    id: 5883,
    cp: 23628,
    name: "Cazalilla",
    provincia_id: 23
  },
  {
    id: 5884,
    cp: 23628,
    name: "Espeluy",
    provincia_id: 23
  },
  {
    id: 5885,
    cp: 23629,
    name: "Jabalquinto",
    provincia_id: 23
  },
  {
    id: 5886,
    cp: 23630,
    name: "Villatorres",
    provincia_id: 23
  },
  {
    id: 5887,
    cp: 23638,
    name: "Villatorres",
    provincia_id: 23
  },
  {
    id: 5888,
    cp: 23639,
    name: "Jaén",
    provincia_id: 23
  },
  {
    id: 5889,
    cp: 23640,
    name: "Torredelcampo",
    provincia_id: 23
  },
  {
    id: 5890,
    cp: 23650,
    name: "Torredonjimeno",
    provincia_id: 23
  },
  {
    id: 5891,
    cp: 23657,
    name: "Esca?uela",
    provincia_id: 23
  },
  {
    id: 5892,
    cp: 23658,
    name: "Jamilena",
    provincia_id: 23
  },
  {
    id: 5893,
    cp: 23659,
    name: "Villardompardo",
    provincia_id: 23
  },
  {
    id: 5894,
    cp: 23660,
    name: "Alcaudete",
    provincia_id: 23
  },
  {
    id: 5895,
    cp: 23669,
    name: "Alcaudete",
    provincia_id: 23
  },
  {
    id: 5896,
    cp: 23670,
    name: "Castillo de Locubín",
    provincia_id: 23
  },
  {
    id: 5897,
    cp: 23680,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5898,
    cp: 23684,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5899,
    cp: 23685,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5900,
    cp: 23685,
    name: "Alcaudete",
    provincia_id: 23
  },
  {
    id: 5901,
    cp: 23686,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5902,
    cp: 23686,
    name: "Frailes",
    provincia_id: 23
  },
  {
    id: 5903,
    cp: 23687,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5904,
    cp: 23688,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5905,
    cp: 23689,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5906,
    cp: 23690,
    name: "Frailes",
    provincia_id: 23
  },
  {
    id: 5907,
    cp: 23691,
    name: "Frailes",
    provincia_id: 23
  },
  {
    id: 5908,
    cp: 23691,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5909,
    cp: 23692,
    name: "Alcalá la Real",
    provincia_id: 23
  },
  {
    id: 5910,
    cp: 23693,
    name: "Castillo de Locubín",
    provincia_id: 23
  },
  {
    id: 5911,
    cp: 23700,
    name: "Linares",
    provincia_id: 23
  },
  {
    id: 5912,
    cp: 23710,
    name: "Bailén",
    provincia_id: 23
  },
  {
    id: 5913,
    cp: 23711,
    name: "Ba?os de la Encina",
    provincia_id: 23
  },
  {
    id: 5914,
    cp: 23712,
    name: "Jabalquinto",
    provincia_id: 23
  },
  {
    id: 5915,
    cp: 23713,
    name: "Vilches",
    provincia_id: 23
  },
  {
    id: 5916,
    cp: 23713,
    name: "Linares",
    provincia_id: 23
  },
  {
    id: 5917,
    cp: 23720,
    name: "Espeluy",
    provincia_id: 23
  },
  {
    id: 5918,
    cp: 23730,
    name: "Villanueva de la Reina",
    provincia_id: 23
  },
  {
    id: 5919,
    cp: 23740,
    name: "Andújar",
    provincia_id: 23
  },
  {
    id: 5920,
    cp: 23746,
    name: "Lahiguera",
    provincia_id: 23
  },
  {
    id: 5921,
    cp: 23747,
    name: "Andújar",
    provincia_id: 23
  },
  {
    id: 5922,
    cp: 23747,
    name: "Baeza",
    provincia_id: 23
  },
  {
    id: 5923,
    cp: 23748,
    name: "Andújar",
    provincia_id: 23
  },
  {
    id: 5924,
    cp: 23749,
    name: "Andújar",
    provincia_id: 23
  },
  {
    id: 5925,
    cp: 23749,
    name: "Villanueva de la Reina",
    provincia_id: 23
  },
  {
    id: 5926,
    cp: 23750,
    name: "Arjonilla",
    provincia_id: 23
  },
  {
    id: 5927,
    cp: 23760,
    name: "Arjona",
    provincia_id: 23
  },
  {
    id: 5928,
    cp: 23770,
    name: "Marmolejo",
    provincia_id: 23
  },
  {
    id: 5929,
    cp: 23780,
    name: "Lopera",
    provincia_id: 23
  },
  {
    id: 5930,
    cp: 23790,
    name: "Porcuna",
    provincia_id: 23
  },
  {
    id: 5931,
    cp: 24001,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5932,
    cp: 24002,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5933,
    cp: 24003,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 5934,
    cp: 24003,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5935,
    cp: 24004,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5936,
    cp: 24005,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5937,
    cp: 24006,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5938,
    cp: 24007,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5939,
    cp: 24008,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5940,
    cp: 24009,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5941,
    cp: 24009,
    name: "San Andrés del Rabanedo",
    provincia_id: 24
  },
  {
    id: 5942,
    cp: 24010,
    name: "San Andrés del Rabanedo",
    provincia_id: 24
  },
  {
    id: 5943,
    cp: 24010,
    name: "León",
    provincia_id: 24
  },
  {
    id: 5944,
    cp: 24100,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5945,
    cp: 24110,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5946,
    cp: 24111,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5947,
    cp: 24112,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5948,
    cp: 24113,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5949,
    cp: 24114,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5950,
    cp: 24120,
    name: "Soto y Amío",
    provincia_id: 24
  },
  {
    id: 5951,
    cp: 24121,
    name: "Sariegos",
    provincia_id: 24
  },
  {
    id: 5952,
    cp: 24122,
    name: "Cuadros",
    provincia_id: 24
  },
  {
    id: 5953,
    cp: 24123,
    name: "Carrocera",
    provincia_id: 24
  },
  {
    id: 5954,
    cp: 24124,
    name: "Santa María de Ordás",
    provincia_id: 24
  },
  {
    id: 5955,
    cp: 24124,
    name: "Soto y Amío",
    provincia_id: 24
  },
  {
    id: 5956,
    cp: 24125,
    name: "Soto y Amío",
    provincia_id: 24
  },
  {
    id: 5957,
    cp: 24126,
    name: "Soto y Amío",
    provincia_id: 24
  },
  {
    id: 5958,
    cp: 24126,
    name: "Riello",
    provincia_id: 24
  },
  {
    id: 5959,
    cp: 24127,
    name: "Valdesamario",
    provincia_id: 24
  },
  {
    id: 5960,
    cp: 24127,
    name: "Riello",
    provincia_id: 24
  },
  {
    id: 5961,
    cp: 24130,
    name: "Murias de Paredes",
    provincia_id: 24
  },
  {
    id: 5962,
    cp: 24131,
    name: "Riello",
    provincia_id: 24
  },
  {
    id: 5963,
    cp: 24132,
    name: "Riello",
    provincia_id: 24
  },
  {
    id: 5964,
    cp: 24133,
    name: "Murias de Paredes",
    provincia_id: 24
  },
  {
    id: 5965,
    cp: 24133,
    name: "Riello",
    provincia_id: 24
  },
  {
    id: 5966,
    cp: 24134,
    name: "Riello",
    provincia_id: 24
  },
  {
    id: 5967,
    cp: 24134,
    name: "Murias de Paredes",
    provincia_id: 24
  },
  {
    id: 5968,
    cp: 24135,
    name: "Murias de Paredes",
    provincia_id: 24
  },
  {
    id: 5969,
    cp: 24136,
    name: "Murias de Paredes",
    provincia_id: 24
  },
  {
    id: 5970,
    cp: 24137,
    name: "Murias de Paredes",
    provincia_id: 24
  },
  {
    id: 5971,
    cp: 24138,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5972,
    cp: 24139,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5973,
    cp: 24140,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 5974,
    cp: 24141,
    name: "Cabrillanes",
    provincia_id: 24
  },
  {
    id: 5975,
    cp: 24142,
    name: "Cabrillanes",
    provincia_id: 24
  },
  {
    id: 5976,
    cp: 24143,
    name: "Cabrillanes",
    provincia_id: 24
  },
  {
    id: 5977,
    cp: 24143,
    name: "San Emiliano",
    provincia_id: 24
  },
  {
    id: 5978,
    cp: 24144,
    name: "San Emiliano",
    provincia_id: 24
  },
  {
    id: 5979,
    cp: 24145,
    name: "San Emiliano",
    provincia_id: 24
  },
  {
    id: 5980,
    cp: 24145,
    name: "Sena de Luna",
    provincia_id: 24
  },
  {
    id: 5981,
    cp: 24146,
    name: "Sena de Luna",
    provincia_id: 24
  },
  {
    id: 5982,
    cp: 24148,
    name: "Los Barrios de Luna",
    provincia_id: 24
  },
  {
    id: 5983,
    cp: 24149,
    name: "Los Barrios de Luna",
    provincia_id: 24
  },
  {
    id: 5984,
    cp: 24150,
    name: "Encinedo",
    provincia_id: 24
  },
  {
    id: 5985,
    cp: 24150,
    name: "Santa Colomba de Curue?o",
    provincia_id: 24
  },
  {
    id: 5986,
    cp: 24150,
    name: "Vegas del Condado",
    provincia_id: 24
  },
  {
    id: 5987,
    cp: 24151,
    name: "Santa Colomba de Curue?o",
    provincia_id: 24
  },
  {
    id: 5988,
    cp: 24152,
    name: "Vegaquemada",
    provincia_id: 24
  },
  {
    id: 5989,
    cp: 24153,
    name: "Vegas del Condado",
    provincia_id: 24
  },
  {
    id: 5990,
    cp: 24154,
    name: "Vegas del Condado",
    provincia_id: 24
  },
  {
    id: 5991,
    cp: 24155,
    name: "Vegas del Condado",
    provincia_id: 24
  },
  {
    id: 5992,
    cp: 24156,
    name: "Valdefresno",
    provincia_id: 24
  },
  {
    id: 5993,
    cp: 24160,
    name: "Gradefes",
    provincia_id: 24
  },
  {
    id: 5994,
    cp: 24161,
    name: "Cubillas de Rueda",
    provincia_id: 24
  },
  {
    id: 5995,
    cp: 24161,
    name: "Gradefes",
    provincia_id: 24
  },
  {
    id: 5996,
    cp: 24162,
    name: "Villasabariego",
    provincia_id: 24
  },
  {
    id: 5997,
    cp: 24163,
    name: "Villasabariego",
    provincia_id: 24
  },
  {
    id: 5998,
    cp: 24163,
    name: "Vegas del Condado",
    provincia_id: 24
  },
  {
    id: 5999,
    cp: 24164,
    name: "Gradefes",
    provincia_id: 24
  },
  {
    id: 6000,
    cp: 24165,
    name: "Gradefes",
    provincia_id: 24
  },
  {
    id: 6001,
    cp: 24166,
    name: "Gradefes",
    provincia_id: 24
  },
  {
    id: 6002,
    cp: 24170,
    name: "Cebanico",
    provincia_id: 24
  },
  {
    id: 6003,
    cp: 24170,
    name: "Almanza",
    provincia_id: 24
  },
  {
    id: 6004,
    cp: 24171,
    name: "Villaselán",
    provincia_id: 24
  },
  {
    id: 6005,
    cp: 24171,
    name: "Almanza",
    provincia_id: 24
  },
  {
    id: 6006,
    cp: 24172,
    name: "Cea",
    provincia_id: 24
  },
  {
    id: 6007,
    cp: 24172,
    name: "Villazanzo de Valderaduey",
    provincia_id: 24
  },
  {
    id: 6008,
    cp: 24172,
    name: "Villamol",
    provincia_id: 24
  },
  {
    id: 6009,
    cp: 24174,
    name: "Cea",
    provincia_id: 24
  },
  {
    id: 6010,
    cp: 24175,
    name: "Villamol",
    provincia_id: 24
  },
  {
    id: 6011,
    cp: 24190,
    name: "San Andrés del Rabanedo",
    provincia_id: 24
  },
  {
    id: 6012,
    cp: 24190,
    name: "León",
    provincia_id: 24
  },
  {
    id: 6013,
    cp: 24191,
    name: "San Andrés del Rabanedo",
    provincia_id: 24
  },
  {
    id: 6014,
    cp: 24192,
    name: "León",
    provincia_id: 24
  },
  {
    id: 6015,
    cp: 24192,
    name: "Onzonilla",
    provincia_id: 24
  },
  {
    id: 6016,
    cp: 24193,
    name: "Villaquilambre",
    provincia_id: 24
  },
  {
    id: 6017,
    cp: 24194,
    name: "Santovenia de la Valdoncina",
    provincia_id: 24
  },
  {
    id: 6018,
    cp: 24195,
    name: "Villaquilambre",
    provincia_id: 24
  },
  {
    id: 6019,
    cp: 24195,
    name: "Valdefresno",
    provincia_id: 24
  },
  {
    id: 6020,
    cp: 24196,
    name: "Sariegos",
    provincia_id: 24
  },
  {
    id: 6021,
    cp: 24197,
    name: "Villaquilambre",
    provincia_id: 24
  },
  {
    id: 6022,
    cp: 24198,
    name: "Valverde de la Virgen",
    provincia_id: 24
  },
  {
    id: 6023,
    cp: 24199,
    name: "Villaturiel",
    provincia_id: 24
  },
  {
    id: 6024,
    cp: 24200,
    name: "Valencia de Don Juan",
    provincia_id: 24
  },
  {
    id: 6025,
    cp: 24205,
    name: "Valencia de Don Juan",
    provincia_id: 24
  },
  {
    id: 6026,
    cp: 24206,
    name: "Villabraz",
    provincia_id: 24
  },
  {
    id: 6027,
    cp: 24206,
    name: "Fuentes de Carbajal",
    provincia_id: 24
  },
  {
    id: 6028,
    cp: 24206,
    name: "Castilfalé",
    provincia_id: 24
  },
  {
    id: 6029,
    cp: 24206,
    name: "Valdemora",
    provincia_id: 24
  },
  {
    id: 6030,
    cp: 24207,
    name: "Matanza",
    provincia_id: 24
  },
  {
    id: 6031,
    cp: 24207,
    name: "Villabraz",
    provincia_id: 24
  },
  {
    id: 6032,
    cp: 24208,
    name: "Pajares de los Oteros",
    provincia_id: 24
  },
  {
    id: 6033,
    cp: 24209,
    name: "Gusendos de los Oteros",
    provincia_id: 24
  },
  {
    id: 6034,
    cp: 24209,
    name: "Pajares de los Oteros",
    provincia_id: 24
  },
  {
    id: 6035,
    cp: 24210,
    name: "Mansilla de las Mulas",
    provincia_id: 24
  },
  {
    id: 6036,
    cp: 24212,
    name: "Caba?as Raras",
    provincia_id: 24
  },
  {
    id: 6037,
    cp: 24217,
    name: "Mansilla Mayor",
    provincia_id: 24
  },
  {
    id: 6038,
    cp: 24218,
    name: "Valdepolo",
    provincia_id: 24
  },
  {
    id: 6039,
    cp: 24218,
    name: "Mansilla de las Mulas",
    provincia_id: 24
  },
  {
    id: 6040,
    cp: 24219,
    name: "Villasabariego",
    provincia_id: 24
  },
  {
    id: 6041,
    cp: 24220,
    name: "Valderas",
    provincia_id: 24
  },
  {
    id: 6042,
    cp: 24221,
    name: "Campazas",
    provincia_id: 24
  },
  {
    id: 6043,
    cp: 24222,
    name: "Villaornate y Castro",
    provincia_id: 24
  },
  {
    id: 6044,
    cp: 24223,
    name: "Fresno de la Vega",
    provincia_id: 24
  },
  {
    id: 6045,
    cp: 24223,
    name: "Pajares de los Oteros",
    provincia_id: 24
  },
  {
    id: 6046,
    cp: 24223,
    name: "Matallana de Torío",
    provincia_id: 24
  },
  {
    id: 6047,
    cp: 24224,
    name: "Cabreros del Río",
    provincia_id: 24
  },
  {
    id: 6048,
    cp: 24224,
    name: "Cubillas de los Oteros",
    provincia_id: 24
  },
  {
    id: 6049,
    cp: 24224,
    name: "Pajares de los Oteros",
    provincia_id: 24
  },
  {
    id: 6050,
    cp: 24225,
    name: "Corbillos de los Oteros",
    provincia_id: 24
  },
  {
    id: 6051,
    cp: 24225,
    name: "Campo de Villavidel",
    provincia_id: 24
  },
  {
    id: 6052,
    cp: 24225,
    name: "Villanueva de las Manzanas",
    provincia_id: 24
  },
  {
    id: 6053,
    cp: 24226,
    name: "Villaturiel",
    provincia_id: 24
  },
  {
    id: 6054,
    cp: 24226,
    name: "Villasabariego",
    provincia_id: 24
  },
  {
    id: 6055,
    cp: 24227,
    name: "Valdefresno",
    provincia_id: 24
  },
  {
    id: 6056,
    cp: 24228,
    name: "Valdefresno",
    provincia_id: 24
  },
  {
    id: 6057,
    cp: 24230,
    name: "Valdevimbre",
    provincia_id: 24
  },
  {
    id: 6058,
    cp: 24231,
    name: "Onzonilla",
    provincia_id: 24
  },
  {
    id: 6059,
    cp: 24231,
    name: "Chozas de Abajo",
    provincia_id: 24
  },
  {
    id: 6060,
    cp: 24232,
    name: "Ardón",
    provincia_id: 24
  },
  {
    id: 6061,
    cp: 24233,
    name: "Ardón",
    provincia_id: 24
  },
  {
    id: 6062,
    cp: 24233,
    name: "Villama?án",
    provincia_id: 24
  },
  {
    id: 6063,
    cp: 24234,
    name: "Laguna de Negrillos",
    provincia_id: 24
  },
  {
    id: 6064,
    cp: 24234,
    name: "Villama?án",
    provincia_id: 24
  },
  {
    id: 6065,
    cp: 24235,
    name: "Villaquejida",
    provincia_id: 24
  },
  {
    id: 6066,
    cp: 24236,
    name: "Villaquejida",
    provincia_id: 24
  },
  {
    id: 6067,
    cp: 24237,
    name: "Toral de los Guzmanes",
    provincia_id: 24
  },
  {
    id: 6068,
    cp: 24237,
    name: "Villademor de la Vega",
    provincia_id: 24
  },
  {
    id: 6069,
    cp: 24237,
    name: "San Millán de los Caballeros",
    provincia_id: 24
  },
  {
    id: 6070,
    cp: 24238,
    name: "Villamandos",
    provincia_id: 24
  },
  {
    id: 6071,
    cp: 24238,
    name: "Algadefe",
    provincia_id: 24
  },
  {
    id: 6072,
    cp: 24239,
    name: "Cimanes de la Vega",
    provincia_id: 24
  },
  {
    id: 6073,
    cp: 24240,
    name: "Santa María del Páramo",
    provincia_id: 24
  },
  {
    id: 6074,
    cp: 24248,
    name: "Laguna Dalga",
    provincia_id: 24
  },
  {
    id: 6075,
    cp: 24248,
    name: "Urdiales del Páramo",
    provincia_id: 24
  },
  {
    id: 6076,
    cp: 24249,
    name: "Bercianos del Páramo",
    provincia_id: 24
  },
  {
    id: 6077,
    cp: 24249,
    name: "Pobladura de Pelayo García",
    provincia_id: 24
  },
  {
    id: 6078,
    cp: 24249,
    name: "Zotes del Páramo",
    provincia_id: 24
  },
  {
    id: 6079,
    cp: 24249,
    name: "Laguna Dalga",
    provincia_id: 24
  },
  {
    id: 6080,
    cp: 24250,
    name: "Chozas de Abajo",
    provincia_id: 24
  },
  {
    id: 6081,
    cp: 24250,
    name: "Valdevimbre",
    provincia_id: 24
  },
  {
    id: 6082,
    cp: 24251,
    name: "Onzonilla",
    provincia_id: 24
  },
  {
    id: 6083,
    cp: 24251,
    name: "Ardón",
    provincia_id: 24
  },
  {
    id: 6084,
    cp: 24251,
    name: "Chozas de Abajo",
    provincia_id: 24
  },
  {
    id: 6085,
    cp: 24252,
    name: "Bercianos del Páramo",
    provincia_id: 24
  },
  {
    id: 6086,
    cp: 24252,
    name: "Urdiales del Páramo",
    provincia_id: 24
  },
  {
    id: 6087,
    cp: 24252,
    name: "San Pedro Bercianos",
    provincia_id: 24
  },
  {
    id: 6088,
    cp: 24253,
    name: "Valdefuentes del Páramo",
    provincia_id: 24
  },
  {
    id: 6089,
    cp: 24257,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6090,
    cp: 24270,
    name: "Carrizo",
    provincia_id: 24
  },
  {
    id: 6091,
    cp: 24271,
    name: "Llamas de la Ribera",
    provincia_id: 24
  },
  {
    id: 6092,
    cp: 24272,
    name: "Cimanes del Tejar",
    provincia_id: 24
  },
  {
    id: 6093,
    cp: 24273,
    name: "Las Oma?as",
    provincia_id: 24
  },
  {
    id: 6094,
    cp: 24273,
    name: "Cimanes del Tejar",
    provincia_id: 24
  },
  {
    id: 6095,
    cp: 24274,
    name: "Rioseco de Tapia",
    provincia_id: 24
  },
  {
    id: 6096,
    cp: 24275,
    name: "Santa María de Ordás",
    provincia_id: 24
  },
  {
    id: 6097,
    cp: 24275,
    name: "Rioseco de Tapia",
    provincia_id: 24
  },
  {
    id: 6098,
    cp: 24276,
    name: "Santa María de Ordás",
    provincia_id: 24
  },
  {
    id: 6099,
    cp: 24277,
    name: "Santa María de Ordás",
    provincia_id: 24
  },
  {
    id: 6100,
    cp: 24280,
    name: "Benavides",
    provincia_id: 24
  },
  {
    id: 6101,
    cp: 24281,
    name: "Benavides",
    provincia_id: 24
  },
  {
    id: 6102,
    cp: 24282,
    name: "Valverde de la Virgen",
    provincia_id: 24
  },
  {
    id: 6103,
    cp: 24282,
    name: "San Andrés del Rabanedo",
    provincia_id: 24
  },
  {
    id: 6104,
    cp: 24283,
    name: "Carrizo",
    provincia_id: 24
  },
  {
    id: 6105,
    cp: 24284,
    name: "Turcia",
    provincia_id: 24
  },
  {
    id: 6106,
    cp: 24285,
    name: "Benavides",
    provincia_id: 24
  },
  {
    id: 6107,
    cp: 24285,
    name: "Quintana del Castillo",
    provincia_id: 24
  },
  {
    id: 6108,
    cp: 24285,
    name: "Turcia",
    provincia_id: 24
  },
  {
    id: 6109,
    cp: 24286,
    name: "Hospital de Órbigo",
    provincia_id: 24
  },
  {
    id: 6110,
    cp: 24287,
    name: "Villares de Órbigo",
    provincia_id: 24
  },
  {
    id: 6111,
    cp: 24287,
    name: "Benavides",
    provincia_id: 24
  },
  {
    id: 6112,
    cp: 24288,
    name: "Villares de Órbigo",
    provincia_id: 24
  },
  {
    id: 6113,
    cp: 24288,
    name: "Villarejo de Órbigo",
    provincia_id: 24
  },
  {
    id: 6114,
    cp: 24290,
    name: "Santa Cristina de Valmadrigal",
    provincia_id: 24
  },
  {
    id: 6115,
    cp: 24291,
    name: "Matadeón de los Oteros",
    provincia_id: 24
  },
  {
    id: 6116,
    cp: 24292,
    name: "Valverde-Enrique",
    provincia_id: 24
  },
  {
    id: 6117,
    cp: 24293,
    name: "Izagre",
    provincia_id: 24
  },
  {
    id: 6118,
    cp: 24294,
    name: "Gordoncillo",
    provincia_id: 24
  },
  {
    id: 6119,
    cp: 24300,
    name: "Bembibre",
    provincia_id: 24
  },
  {
    id: 6120,
    cp: 24310,
    name: "Torre del Bierzo",
    provincia_id: 24
  },
  {
    id: 6121,
    cp: 24310,
    name: "Folgoso de la Ribera",
    provincia_id: 24
  },
  {
    id: 6122,
    cp: 24311,
    name: "Folgoso de la Ribera",
    provincia_id: 24
  },
  {
    id: 6123,
    cp: 24312,
    name: "Igüe?a",
    provincia_id: 24
  },
  {
    id: 6124,
    cp: 24312,
    name: "Folgoso de la Ribera",
    provincia_id: 24
  },
  {
    id: 6125,
    cp: 24313,
    name: "Igüe?a",
    provincia_id: 24
  },
  {
    id: 6126,
    cp: 24314,
    name: "Castropodame",
    provincia_id: 24
  },
  {
    id: 6127,
    cp: 24315,
    name: "Bembibre",
    provincia_id: 24
  },
  {
    id: 6128,
    cp: 24315,
    name: "Folgoso de la Ribera",
    provincia_id: 24
  },
  {
    id: 6129,
    cp: 24316,
    name: "Castropodame",
    provincia_id: 24
  },
  {
    id: 6130,
    cp: 24317,
    name: "Torre del Bierzo",
    provincia_id: 24
  },
  {
    id: 6131,
    cp: 24318,
    name: "Bembibre",
    provincia_id: 24
  },
  {
    id: 6132,
    cp: 24319,
    name: "Bembibre",
    provincia_id: 24
  },
  {
    id: 6133,
    cp: 24319,
    name: "Noceda del Bierzo",
    provincia_id: 24
  },
  {
    id: 6134,
    cp: 24319,
    name: "Igüe?a",
    provincia_id: 24
  },
  {
    id: 6135,
    cp: 24320,
    name: "Sahagún",
    provincia_id: 24
  },
  {
    id: 6136,
    cp: 24323,
    name: "Valverde-Enrique",
    provincia_id: 24
  },
  {
    id: 6137,
    cp: 24323,
    name: "Castrotierra de Valmadrigal",
    provincia_id: 24
  },
  {
    id: 6138,
    cp: 24324,
    name: "Joarilla de las Matas",
    provincia_id: 24
  },
  {
    id: 6139,
    cp: 24324,
    name: "Vallecillo",
    provincia_id: 24
  },
  {
    id: 6140,
    cp: 24325,
    name: "Gordaliza del Pino",
    provincia_id: 24
  },
  {
    id: 6141,
    cp: 24325,
    name: "Bercianos del Real Camino",
    provincia_id: 24
  },
  {
    id: 6142,
    cp: 24326,
    name: "Sahagún",
    provincia_id: 24
  },
  {
    id: 6143,
    cp: 24327,
    name: "Villazanzo de Valderaduey",
    provincia_id: 24
  },
  {
    id: 6144,
    cp: 24328,
    name: "Cea",
    provincia_id: 24
  },
  {
    id: 6145,
    cp: 24328,
    name: "Villazanzo de Valderaduey",
    provincia_id: 24
  },
  {
    id: 6146,
    cp: 24328,
    name: "Sahagún",
    provincia_id: 24
  },
  {
    id: 6147,
    cp: 24329,
    name: "Sahagún",
    provincia_id: 24
  },
  {
    id: 6148,
    cp: 24329,
    name: "Laguna Dalga",
    provincia_id: 24
  },
  {
    id: 6149,
    cp: 24330,
    name: "Santas Martas",
    provincia_id: 24
  },
  {
    id: 6150,
    cp: 24339,
    name: "Villamoratiel de las Matas",
    provincia_id: 24
  },
  {
    id: 6151,
    cp: 24339,
    name: "Santas Martas",
    provincia_id: 24
  },
  {
    id: 6152,
    cp: 24340,
    name: "Grajal de Campos",
    provincia_id: 24
  },
  {
    id: 6153,
    cp: 24341,
    name: "Escobar de Campos",
    provincia_id: 24
  },
  {
    id: 6154,
    cp: 24342,
    name: "Calzada del Coto",
    provincia_id: 24
  },
  {
    id: 6155,
    cp: 24343,
    name: "Santa María del Monte de Cea",
    provincia_id: 24
  },
  {
    id: 6156,
    cp: 24343,
    name: "El Burgo Ranero",
    provincia_id: 24
  },
  {
    id: 6157,
    cp: 24344,
    name: "Villamartín de Don Sancho",
    provincia_id: 24
  },
  {
    id: 6158,
    cp: 24344,
    name: "Santa María del Monte de Cea",
    provincia_id: 24
  },
  {
    id: 6159,
    cp: 24344,
    name: "El Burgo Ranero",
    provincia_id: 24
  },
  {
    id: 6160,
    cp: 24344,
    name: "Villaselán",
    provincia_id: 24
  },
  {
    id: 6161,
    cp: 24345,
    name: "Santas Martas",
    provincia_id: 24
  },
  {
    id: 6162,
    cp: 24346,
    name: "Vega de Infanzones",
    provincia_id: 24
  },
  {
    id: 6163,
    cp: 24347,
    name: "Vega de Infanzones",
    provincia_id: 24
  },
  {
    id: 6164,
    cp: 24347,
    name: "Onzonilla",
    provincia_id: 24
  },
  {
    id: 6165,
    cp: 24350,
    name: "Villarejo de Órbigo",
    provincia_id: 24
  },
  {
    id: 6166,
    cp: 24356,
    name: "Bustillo del Páramo",
    provincia_id: 24
  },
  {
    id: 6167,
    cp: 24356,
    name: "Villazala",
    provincia_id: 24
  },
  {
    id: 6168,
    cp: 24357,
    name: "Bustillo del Páramo",
    provincia_id: 24
  },
  {
    id: 6169,
    cp: 24358,
    name: "Villarejo de Órbigo",
    provincia_id: 24
  },
  {
    id: 6170,
    cp: 24359,
    name: "San Cristóbal de la Polantera",
    provincia_id: 24
  },
  {
    id: 6171,
    cp: 24359,
    name: "San Justo de la Vega",
    provincia_id: 24
  },
  {
    id: 6172,
    cp: 24360,
    name: "Villagatón",
    provincia_id: 24
  },
  {
    id: 6173,
    cp: 24367,
    name: "Villagatón",
    provincia_id: 24
  },
  {
    id: 6174,
    cp: 24368,
    name: "Villagatón",
    provincia_id: 24
  },
  {
    id: 6175,
    cp: 24369,
    name: "Villagatón",
    provincia_id: 24
  },
  {
    id: 6176,
    cp: 24370,
    name: "Torre del Bierzo",
    provincia_id: 24
  },
  {
    id: 6177,
    cp: 24374,
    name: "Igüe?a",
    provincia_id: 24
  },
  {
    id: 6178,
    cp: 24374,
    name: "Torre del Bierzo",
    provincia_id: 24
  },
  {
    id: 6179,
    cp: 24375,
    name: "Igüe?a",
    provincia_id: 24
  },
  {
    id: 6180,
    cp: 24376,
    name: "Igüe?a",
    provincia_id: 24
  },
  {
    id: 6181,
    cp: 24377,
    name: "Igüe?a",
    provincia_id: 24
  },
  {
    id: 6182,
    cp: 24378,
    name: "Torre del Bierzo",
    provincia_id: 24
  },
  {
    id: 6183,
    cp: 24379,
    name: "Torre del Bierzo",
    provincia_id: 24
  },
  {
    id: 6184,
    cp: 24379,
    name: "Villagatón",
    provincia_id: 24
  },
  {
    id: 6185,
    cp: 24380,
    name: "Puente de Domingo Flórez",
    provincia_id: 24
  },
  {
    id: 6186,
    cp: 24384,
    name: "Puente de Domingo Flórez",
    provincia_id: 24
  },
  {
    id: 6187,
    cp: 24385,
    name: "Puente de Domingo Flórez",
    provincia_id: 24
  },
  {
    id: 6188,
    cp: 24386,
    name: "Puente de Domingo Flórez",
    provincia_id: 24
  },
  {
    id: 6189,
    cp: 24387,
    name: "Puente de Domingo Flórez",
    provincia_id: 24
  },
  {
    id: 6190,
    cp: 24388,
    name: "Benuza",
    provincia_id: 24
  },
  {
    id: 6191,
    cp: 24389,
    name: "Puente de Domingo Flórez",
    provincia_id: 24
  },
  {
    id: 6192,
    cp: 24389,
    name: "Benuza",
    provincia_id: 24
  },
  {
    id: 6193,
    cp: 24390,
    name: "Carracedelo",
    provincia_id: 24
  },
  {
    id: 6194,
    cp: 24391,
    name: "Santovenia de la Valdoncina",
    provincia_id: 24
  },
  {
    id: 6195,
    cp: 24391,
    name: "Chozas de Abajo",
    provincia_id: 24
  },
  {
    id: 6196,
    cp: 24391,
    name: "Valverde de la Virgen",
    provincia_id: 24
  },
  {
    id: 6197,
    cp: 24392,
    name: "Cimanes del Tejar",
    provincia_id: 24
  },
  {
    id: 6198,
    cp: 24392,
    name: "Villadangos del Páramo",
    provincia_id: 24
  },
  {
    id: 6199,
    cp: 24392,
    name: "Chozas de Abajo",
    provincia_id: 24
  },
  {
    id: 6200,
    cp: 24393,
    name: "Cimanes del Tejar",
    provincia_id: 24
  },
  {
    id: 6201,
    cp: 24393,
    name: "Santa Marina del Rey",
    provincia_id: 24
  },
  {
    id: 6202,
    cp: 24393,
    name: "Bustillo del Páramo",
    provincia_id: 24
  },
  {
    id: 6203,
    cp: 24394,
    name: "Valderrey",
    provincia_id: 24
  },
  {
    id: 6204,
    cp: 24395,
    name: "San Justo de la Vega",
    provincia_id: 24
  },
  {
    id: 6205,
    cp: 24395,
    name: "Valderrey",
    provincia_id: 24
  },
  {
    id: 6206,
    cp: 24396,
    name: "Magaz de Cepeda",
    provincia_id: 24
  },
  {
    id: 6207,
    cp: 24397,
    name: "Magaz de Cepeda",
    provincia_id: 24
  },
  {
    id: 6208,
    cp: 24397,
    name: "Quintana del Castillo",
    provincia_id: 24
  },
  {
    id: 6209,
    cp: 24398,
    name: "Molinaseca",
    provincia_id: 24
  },
  {
    id: 6210,
    cp: 24398,
    name: "Castropodame",
    provincia_id: 24
  },
  {
    id: 6211,
    cp: 24398,
    name: "Congosto",
    provincia_id: 24
  },
  {
    id: 6212,
    cp: 24400,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6213,
    cp: 24401,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6214,
    cp: 24402,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6215,
    cp: 24403,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6216,
    cp: 24404,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6217,
    cp: 24410,
    name: "Arganza",
    provincia_id: 24
  },
  {
    id: 6218,
    cp: 24410,
    name: "Camponaraya",
    provincia_id: 24
  },
  {
    id: 6219,
    cp: 24411,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6220,
    cp: 24412,
    name: "Caba?as Raras",
    provincia_id: 24
  },
  {
    id: 6221,
    cp: 24413,
    name: "Molinaseca",
    provincia_id: 24
  },
  {
    id: 6222,
    cp: 24413,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6223,
    cp: 24414,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6224,
    cp: 24415,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6225,
    cp: 24416,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6226,
    cp: 24420,
    name: "Fabero",
    provincia_id: 24
  },
  {
    id: 6227,
    cp: 24424,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6228,
    cp: 24428,
    name: "Fabero",
    provincia_id: 24
  },
  {
    id: 6229,
    cp: 24429,
    name: "Peranzanes",
    provincia_id: 24
  },
  {
    id: 6230,
    cp: 24429,
    name: "Fabero",
    provincia_id: 24
  },
  {
    id: 6231,
    cp: 24430,
    name: "Vega de Espinareda",
    provincia_id: 24
  },
  {
    id: 6232,
    cp: 24433,
    name: "Candín",
    provincia_id: 24
  },
  {
    id: 6233,
    cp: 24434,
    name: "Vega de Espinareda",
    provincia_id: 24
  },
  {
    id: 6234,
    cp: 24434,
    name: "Fabero",
    provincia_id: 24
  },
  {
    id: 6235,
    cp: 24435,
    name: "Vega de Espinareda",
    provincia_id: 24
  },
  {
    id: 6236,
    cp: 24436,
    name: "Vega de Espinareda",
    provincia_id: 24
  },
  {
    id: 6237,
    cp: 24437,
    name: "Vega de Espinareda",
    provincia_id: 24
  },
  {
    id: 6238,
    cp: 24438,
    name: "Berlanga del Bierzo",
    provincia_id: 24
  },
  {
    id: 6239,
    cp: 24438,
    name: "Toreno",
    provincia_id: 24
  },
  {
    id: 6240,
    cp: 24439,
    name: "Vega de Espinareda",
    provincia_id: 24
  },
  {
    id: 6241,
    cp: 24439,
    name: "Sancedo",
    provincia_id: 24
  },
  {
    id: 6242,
    cp: 24440,
    name: "Carucedo",
    provincia_id: 24
  },
  {
    id: 6243,
    cp: 24441,
    name: "Carucedo",
    provincia_id: 24
  },
  {
    id: 6244,
    cp: 24441,
    name: "Toral de los Vados",
    provincia_id: 24
  },
  {
    id: 6245,
    cp: 24442,
    name: "Carucedo",
    provincia_id: 24
  },
  {
    id: 6246,
    cp: 24442,
    name: "Candín",
    provincia_id: 24
  },
  {
    id: 6247,
    cp: 24443,
    name: "Borrenes",
    provincia_id: 24
  },
  {
    id: 6248,
    cp: 24444,
    name: "Borrenes",
    provincia_id: 24
  },
  {
    id: 6249,
    cp: 24445,
    name: "Priaranza del Bierzo",
    provincia_id: 24
  },
  {
    id: 6250,
    cp: 24446,
    name: "Priaranza del Bierzo",
    provincia_id: 24
  },
  {
    id: 6251,
    cp: 24447,
    name: "Priaranza del Bierzo",
    provincia_id: 24
  },
  {
    id: 6252,
    cp: 24448,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6253,
    cp: 24448,
    name: "Priaranza del Bierzo",
    provincia_id: 24
  },
  {
    id: 6254,
    cp: 24450,
    name: "Toreno",
    provincia_id: 24
  },
  {
    id: 6255,
    cp: 24457,
    name: "Toreno",
    provincia_id: 24
  },
  {
    id: 6256,
    cp: 24458,
    name: "Toreno",
    provincia_id: 24
  },
  {
    id: 6257,
    cp: 24458,
    name: "Noceda del Bierzo",
    provincia_id: 24
  },
  {
    id: 6258,
    cp: 24459,
    name: "Toreno",
    provincia_id: 24
  },
  {
    id: 6259,
    cp: 24460,
    name: "Toreno",
    provincia_id: 24
  },
  {
    id: 6260,
    cp: 24469,
    name: "Páramo del Sil",
    provincia_id: 24
  },
  {
    id: 6261,
    cp: 24469,
    name: "Toreno",
    provincia_id: 24
  },
  {
    id: 6262,
    cp: 24470,
    name: "Páramo del Sil",
    provincia_id: 24
  },
  {
    id: 6263,
    cp: 24478,
    name: "Páramo del Sil",
    provincia_id: 24
  },
  {
    id: 6264,
    cp: 24479,
    name: "Páramo del Sil",
    provincia_id: 24
  },
  {
    id: 6265,
    cp: 24480,
    name: "Palacios del Sil",
    provincia_id: 24
  },
  {
    id: 6266,
    cp: 24488,
    name: "Páramo del Sil",
    provincia_id: 24
  },
  {
    id: 6267,
    cp: 24489,
    name: "Palacios del Sil",
    provincia_id: 24
  },
  {
    id: 6268,
    cp: 24490,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6269,
    cp: 24491,
    name: "Ponferrada",
    provincia_id: 24
  },
  {
    id: 6270,
    cp: 24492,
    name: "Cubillos del Sil",
    provincia_id: 24
  },
  {
    id: 6271,
    cp: 24494,
    name: "Páramo del Sil",
    provincia_id: 24
  },
  {
    id: 6272,
    cp: 24495,
    name: "Palacios del Sil",
    provincia_id: 24
  },
  {
    id: 6273,
    cp: 24496,
    name: "Palacios del Sil",
    provincia_id: 24
  },
  {
    id: 6274,
    cp: 24497,
    name: "Palacios del Sil",
    provincia_id: 24
  },
  {
    id: 6275,
    cp: 24498,
    name: "Palacios del Sil",
    provincia_id: 24
  },
  {
    id: 6276,
    cp: 24500,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6277,
    cp: 24510,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6278,
    cp: 24511,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6279,
    cp: 24512,
    name: "El Valle de Altomira",
    provincia_id: 16
  },
  {
    id: 6280,
    cp: 24512,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6281,
    cp: 24513,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6282,
    cp: 24514,
    name: "Corullón",
    provincia_id: 24
  },
  {
    id: 6283,
    cp: 24515,
    name: "Corullón",
    provincia_id: 24
  },
  {
    id: 6284,
    cp: 24516,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6285,
    cp: 24516,
    name: "Corullón",
    provincia_id: 24
  },
  {
    id: 6286,
    cp: 24516,
    name: "Toral de los Vados",
    provincia_id: 24
  },
  {
    id: 6287,
    cp: 24517,
    name: "Corullón",
    provincia_id: 24
  },
  {
    id: 6288,
    cp: 24520,
    name: "Vega de Valcarce",
    provincia_id: 24
  },
  {
    id: 6289,
    cp: 24521,
    name: "Vega de Valcarce",
    provincia_id: 24
  },
  {
    id: 6290,
    cp: 24521,
    name: "Barjas",
    provincia_id: 24
  },
  {
    id: 6291,
    cp: 24522,
    name: "Trabadelo",
    provincia_id: 24
  },
  {
    id: 6292,
    cp: 24523,
    name: "Trabadelo",
    provincia_id: 24
  },
  {
    id: 6293,
    cp: 24524,
    name: "Vega de Valcarce",
    provincia_id: 24
  },
  {
    id: 6294,
    cp: 24525,
    name: "Balboa",
    provincia_id: 24
  },
  {
    id: 6295,
    cp: 24526,
    name: "Vega de Valcarce",
    provincia_id: 24
  },
  {
    id: 6296,
    cp: 24530,
    name: "Toral de los Vados",
    provincia_id: 24
  },
  {
    id: 6297,
    cp: 24530,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6298,
    cp: 24540,
    name: "Cacabelos",
    provincia_id: 24
  },
  {
    id: 6299,
    cp: 24544,
    name: "Carracedelo",
    provincia_id: 24
  },
  {
    id: 6300,
    cp: 24545,
    name: "Sancedo",
    provincia_id: 24
  },
  {
    id: 6301,
    cp: 24545,
    name: "Arganza",
    provincia_id: 24
  },
  {
    id: 6302,
    cp: 24546,
    name: "Arganza",
    provincia_id: 24
  },
  {
    id: 6303,
    cp: 24547,
    name: "Villafranca del Bierzo",
    provincia_id: 24
  },
  {
    id: 6304,
    cp: 24547,
    name: "Cacabelos",
    provincia_id: 24
  },
  {
    id: 6305,
    cp: 24548,
    name: "Cacabelos",
    provincia_id: 24
  },
  {
    id: 6306,
    cp: 24549,
    name: "Carracedelo",
    provincia_id: 24
  },
  {
    id: 6307,
    cp: 24550,
    name: "Toral de los Vados",
    provincia_id: 24
  },
  {
    id: 6308,
    cp: 24550,
    name: "Carracedelo",
    provincia_id: 24
  },
  {
    id: 6309,
    cp: 24560,
    name: "Toral de los Vados",
    provincia_id: 24
  },
  {
    id: 6310,
    cp: 24565,
    name: "Carracedelo",
    provincia_id: 24
  },
  {
    id: 6311,
    cp: 24566,
    name: "Oencia",
    provincia_id: 24
  },
  {
    id: 6312,
    cp: 24567,
    name: "Oencia",
    provincia_id: 24
  },
  {
    id: 6313,
    cp: 24568,
    name: "Oencia",
    provincia_id: 24
  },
  {
    id: 6314,
    cp: 24569,
    name: "Toral de los Vados",
    provincia_id: 24
  },
  {
    id: 6315,
    cp: 24569,
    name: "Oencia",
    provincia_id: 24
  },
  {
    id: 6316,
    cp: 24600,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6317,
    cp: 24607,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6318,
    cp: 24608,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6319,
    cp: 24609,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6320,
    cp: 24610,
    name: "Cuadros",
    provincia_id: 24
  },
  {
    id: 6321,
    cp: 24620,
    name: "Cuadros",
    provincia_id: 24
  },
  {
    id: 6322,
    cp: 24630,
    name: "Cuadros",
    provincia_id: 24
  },
  {
    id: 6323,
    cp: 24640,
    name: "La Robla",
    provincia_id: 24
  },
  {
    id: 6324,
    cp: 24648,
    name: "La Robla",
    provincia_id: 24
  },
  {
    id: 6325,
    cp: 24648,
    name: "Matallana de Torío",
    provincia_id: 24
  },
  {
    id: 6326,
    cp: 24649,
    name: "La Robla",
    provincia_id: 24
  },
  {
    id: 6327,
    cp: 24650,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6328,
    cp: 24660,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6329,
    cp: 24670,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6330,
    cp: 24680,
    name: "Villamanín",
    provincia_id: 24
  },
  {
    id: 6331,
    cp: 24687,
    name: "Villamanín",
    provincia_id: 24
  },
  {
    id: 6332,
    cp: 24688,
    name: "Villamanín",
    provincia_id: 24
  },
  {
    id: 6333,
    cp: 24689,
    name: "Villamanín",
    provincia_id: 24
  },
  {
    id: 6334,
    cp: 24690,
    name: "Villamanín",
    provincia_id: 24
  },
  {
    id: 6335,
    cp: 24699,
    name: "Villamanín",
    provincia_id: 24
  },
  {
    id: 6336,
    cp: 24700,
    name: "Astorga",
    provincia_id: 24
  },
  {
    id: 6337,
    cp: 24710,
    name: "San Justo de la Vega",
    provincia_id: 24
  },
  {
    id: 6338,
    cp: 24711,
    name: "Villamejil",
    provincia_id: 24
  },
  {
    id: 6339,
    cp: 24711,
    name: "Villaobispo de Otero",
    provincia_id: 24
  },
  {
    id: 6340,
    cp: 24712,
    name: "Villamejil",
    provincia_id: 24
  },
  {
    id: 6341,
    cp: 24713,
    name: "Villamejil",
    provincia_id: 24
  },
  {
    id: 6342,
    cp: 24714,
    name: "Brazuelo",
    provincia_id: 24
  },
  {
    id: 6343,
    cp: 24715,
    name: "Brazuelo",
    provincia_id: 24
  },
  {
    id: 6344,
    cp: 24716,
    name: "Brazuelo",
    provincia_id: 24
  },
  {
    id: 6345,
    cp: 24717,
    name: "Santiago Millas",
    provincia_id: 24
  },
  {
    id: 6346,
    cp: 24717,
    name: "Lucillo",
    provincia_id: 24
  },
  {
    id: 6347,
    cp: 24717,
    name: "Luyego",
    provincia_id: 24
  },
  {
    id: 6348,
    cp: 24717,
    name: "Val de San Lorenzo",
    provincia_id: 24
  },
  {
    id: 6349,
    cp: 24718,
    name: "Astorga",
    provincia_id: 24
  },
  {
    id: 6350,
    cp: 24718,
    name: "Brazuelo",
    provincia_id: 24
  },
  {
    id: 6351,
    cp: 24719,
    name: "Villaobispo de Otero",
    provincia_id: 24
  },
  {
    id: 6352,
    cp: 24720,
    name: "Santa Colomba de Somoza",
    provincia_id: 24
  },
  {
    id: 6353,
    cp: 24721,
    name: "Luyego",
    provincia_id: 24
  },
  {
    id: 6354,
    cp: 24721,
    name: "Castrillo de la Valduerna",
    provincia_id: 24
  },
  {
    id: 6355,
    cp: 24722,
    name: "Santa Colomba de Somoza",
    provincia_id: 24
  },
  {
    id: 6356,
    cp: 24723,
    name: "Lucillo",
    provincia_id: 24
  },
  {
    id: 6357,
    cp: 24724,
    name: "Lucillo",
    provincia_id: 24
  },
  {
    id: 6358,
    cp: 24730,
    name: "Destriana",
    provincia_id: 24
  },
  {
    id: 6359,
    cp: 24731,
    name: "Santiago Millas",
    provincia_id: 24
  },
  {
    id: 6360,
    cp: 24732,
    name: "Valderrey",
    provincia_id: 24
  },
  {
    id: 6361,
    cp: 24732,
    name: "Santiago Millas",
    provincia_id: 24
  },
  {
    id: 6362,
    cp: 24733,
    name: "Quintana y Congosto",
    provincia_id: 24
  },
  {
    id: 6363,
    cp: 24734,
    name: "Castrocontrigo",
    provincia_id: 24
  },
  {
    id: 6364,
    cp: 24735,
    name: "Castrocontrigo",
    provincia_id: 24
  },
  {
    id: 6365,
    cp: 24736,
    name: "Castrocontrigo",
    provincia_id: 24
  },
  {
    id: 6366,
    cp: 24738,
    name: "Truchas",
    provincia_id: 24
  },
  {
    id: 6367,
    cp: 24739,
    name: "Torre del Bierzo",
    provincia_id: 24
  },
  {
    id: 6368,
    cp: 24740,
    name: "Villablino",
    provincia_id: 24
  },
  {
    id: 6369,
    cp: 24740,
    name: "Santiago Millas",
    provincia_id: 24
  },
  {
    id: 6370,
    cp: 24740,
    name: "Truchas",
    provincia_id: 24
  },
  {
    id: 6371,
    cp: 24740,
    name: "Barjas",
    provincia_id: 24
  },
  {
    id: 6372,
    cp: 24741,
    name: "Truchas",
    provincia_id: 24
  },
  {
    id: 6373,
    cp: 24742,
    name: "Castrillo de Cabrera",
    provincia_id: 24
  },
  {
    id: 6374,
    cp: 24743,
    name: "Encinedo",
    provincia_id: 24
  },
  {
    id: 6375,
    cp: 24744,
    name: "Encinedo",
    provincia_id: 24
  },
  {
    id: 6376,
    cp: 24744,
    name: "Castrillo de Cabrera",
    provincia_id: 24
  },
  {
    id: 6377,
    cp: 24745,
    name: "Encinedo",
    provincia_id: 24
  },
  {
    id: 6378,
    cp: 24746,
    name: "Encinedo",
    provincia_id: 24
  },
  {
    id: 6379,
    cp: 24750,
    name: "La Ba?eza",
    provincia_id: 24
  },
  {
    id: 6380,
    cp: 24760,
    name: "Castrocalbón",
    provincia_id: 24
  },
  {
    id: 6381,
    cp: 24760,
    name: "San Esteban de Nogales",
    provincia_id: 24
  },
  {
    id: 6382,
    cp: 24760,
    name: "La Pola de Gordón",
    provincia_id: 24
  },
  {
    id: 6383,
    cp: 24761,
    name: "Alija del Infantado",
    provincia_id: 24
  },
  {
    id: 6384,
    cp: 24762,
    name: "Quintana del Marco",
    provincia_id: 24
  },
  {
    id: 6385,
    cp: 24762,
    name: "Santa Elena de Jamuz",
    provincia_id: 24
  },
  {
    id: 6386,
    cp: 24763,
    name: "Villazala",
    provincia_id: 24
  },
  {
    id: 6387,
    cp: 24763,
    name: "Regueras de Arriba",
    provincia_id: 24
  },
  {
    id: 6388,
    cp: 24763,
    name: "Soto de la Vega",
    provincia_id: 24
  },
  {
    id: 6389,
    cp: 24764,
    name: "Palacios de la Valduerna",
    provincia_id: 24
  },
  {
    id: 6390,
    cp: 24764,
    name: "Soto de la Vega",
    provincia_id: 24
  },
  {
    id: 6391,
    cp: 24764,
    name: "La Ba?eza",
    provincia_id: 24
  },
  {
    id: 6392,
    cp: 24765,
    name: "Riego de la Vega",
    provincia_id: 24
  },
  {
    id: 6393,
    cp: 24765,
    name: "Villamontán de la Valduerna",
    provincia_id: 24
  },
  {
    id: 6394,
    cp: 24766,
    name: "La Ba?eza",
    provincia_id: 24
  },
  {
    id: 6395,
    cp: 24766,
    name: "Palacios de la Valduerna",
    provincia_id: 24
  },
  {
    id: 6396,
    cp: 24766,
    name: "Villamontán de la Valduerna",
    provincia_id: 24
  },
  {
    id: 6397,
    cp: 24767,
    name: "Santa Elena de Jamuz",
    provincia_id: 24
  },
  {
    id: 6398,
    cp: 24767,
    name: "Quintana y Congosto",
    provincia_id: 24
  },
  {
    id: 6399,
    cp: 24768,
    name: "Soto de la Vega",
    provincia_id: 24
  },
  {
    id: 6400,
    cp: 24769,
    name: "Cebrones del Río",
    provincia_id: 24
  },
  {
    id: 6401,
    cp: 24790,
    name: "Roperuelos del Páramo",
    provincia_id: 24
  },
  {
    id: 6402,
    cp: 24791,
    name: "Zotes del Páramo",
    provincia_id: 24
  },
  {
    id: 6403,
    cp: 24791,
    name: "Roperuelos del Páramo",
    provincia_id: 24
  },
  {
    id: 6404,
    cp: 24792,
    name: "Alija del Infantado",
    provincia_id: 24
  },
  {
    id: 6405,
    cp: 24792,
    name: "Pozuelo del Páramo",
    provincia_id: 24
  },
  {
    id: 6406,
    cp: 24792,
    name: "Quintana del Marco",
    provincia_id: 24
  },
  {
    id: 6407,
    cp: 24793,
    name: "Valderrey",
    provincia_id: 24
  },
  {
    id: 6408,
    cp: 24794,
    name: "Riego de la Vega",
    provincia_id: 24
  },
  {
    id: 6409,
    cp: 24795,
    name: "Santa María de la Isla",
    provincia_id: 24
  },
  {
    id: 6410,
    cp: 24795,
    name: "San Cristóbal de la Polantera",
    provincia_id: 24
  },
  {
    id: 6411,
    cp: 24795,
    name: "Riego de la Vega",
    provincia_id: 24
  },
  {
    id: 6412,
    cp: 24796,
    name: "La Antigua",
    provincia_id: 24
  },
  {
    id: 6413,
    cp: 24796,
    name: "Pozuelo del Páramo",
    provincia_id: 24
  },
  {
    id: 6414,
    cp: 24797,
    name: "San Adrián del Valle",
    provincia_id: 24
  },
  {
    id: 6415,
    cp: 24800,
    name: "Cistierna",
    provincia_id: 24
  },
  {
    id: 6416,
    cp: 24810,
    name: "Sabero",
    provincia_id: 24
  },
  {
    id: 6417,
    cp: 24811,
    name: "Sabero",
    provincia_id: 24
  },
  {
    id: 6418,
    cp: 24812,
    name: "Sabero",
    provincia_id: 24
  },
  {
    id: 6419,
    cp: 24813,
    name: "Cistierna",
    provincia_id: 24
  },
  {
    id: 6420,
    cp: 24814,
    name: "Sabero",
    provincia_id: 24
  },
  {
    id: 6421,
    cp: 24815,
    name: "Cistierna",
    provincia_id: 24
  },
  {
    id: 6422,
    cp: 24816,
    name: "Cistierna",
    provincia_id: 24
  },
  {
    id: 6423,
    cp: 24820,
    name: "Matallana de Torío",
    provincia_id: 24
  },
  {
    id: 6424,
    cp: 24820,
    name: "Garrafe de Torío",
    provincia_id: 24
  },
  {
    id: 6425,
    cp: 24830,
    name: "Matallana de Torío",
    provincia_id: 24
  },
  {
    id: 6426,
    cp: 24836,
    name: "Vegacervera",
    provincia_id: 24
  },
  {
    id: 6427,
    cp: 24836,
    name: "Matallana de Torío",
    provincia_id: 24
  },
  {
    id: 6428,
    cp: 24837,
    name: "Vegacervera",
    provincia_id: 24
  },
  {
    id: 6429,
    cp: 24837,
    name: "Valdelugueros",
    provincia_id: 24
  },
  {
    id: 6430,
    cp: 24837,
    name: "Cármenes",
    provincia_id: 24
  },
  {
    id: 6431,
    cp: 24838,
    name: "Cármenes",
    provincia_id: 24
  },
  {
    id: 6432,
    cp: 24839,
    name: "Matallana de Torío",
    provincia_id: 24
  },
  {
    id: 6433,
    cp: 24840,
    name: "La Vecilla",
    provincia_id: 24
  },
  {
    id: 6434,
    cp: 24843,
    name: "Valdelugueros",
    provincia_id: 24
  },
  {
    id: 6435,
    cp: 24844,
    name: "Valdelugueros",
    provincia_id: 24
  },
  {
    id: 6436,
    cp: 24845,
    name: "Valdelugueros",
    provincia_id: 24
  },
  {
    id: 6437,
    cp: 24846,
    name: "Valdepiélago",
    provincia_id: 24
  },
  {
    id: 6438,
    cp: 24847,
    name: "Valdepiélago",
    provincia_id: 24
  },
  {
    id: 6439,
    cp: 24848,
    name: "La Vecilla",
    provincia_id: 24
  },
  {
    id: 6440,
    cp: 24848,
    name: "Santa Colomba de Curue?o",
    provincia_id: 24
  },
  {
    id: 6441,
    cp: 24849,
    name: "Valdepiélago",
    provincia_id: 24
  },
  {
    id: 6442,
    cp: 24849,
    name: "La Vecilla",
    provincia_id: 24
  },
  {
    id: 6443,
    cp: 24850,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6444,
    cp: 24852,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6445,
    cp: 24852,
    name: "Vegaquemada",
    provincia_id: 24
  },
  {
    id: 6446,
    cp: 24853,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6447,
    cp: 24854,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6448,
    cp: 24855,
    name: "Puebla de Lillo",
    provincia_id: 24
  },
  {
    id: 6449,
    cp: 24856,
    name: "Reyero",
    provincia_id: 24
  },
  {
    id: 6450,
    cp: 24857,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6451,
    cp: 24857,
    name: "Puebla de Lillo",
    provincia_id: 24
  },
  {
    id: 6452,
    cp: 24858,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6453,
    cp: 24859,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6454,
    cp: 24860,
    name: "Vegaquemada",
    provincia_id: 24
  },
  {
    id: 6455,
    cp: 24860,
    name: "Bo?ar",
    provincia_id: 24
  },
  {
    id: 6456,
    cp: 24869,
    name: "Vegaquemada",
    provincia_id: 24
  },
  {
    id: 6457,
    cp: 24870,
    name: "La Ercina",
    provincia_id: 24
  },
  {
    id: 6458,
    cp: 24877,
    name: "La Ercina",
    provincia_id: 24
  },
  {
    id: 6459,
    cp: 24878,
    name: "La Ercina",
    provincia_id: 24
  },
  {
    id: 6460,
    cp: 24878,
    name: "Gradefes",
    provincia_id: 24
  },
  {
    id: 6461,
    cp: 24879,
    name: "La Ercina",
    provincia_id: 24
  },
  {
    id: 6462,
    cp: 24880,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6463,
    cp: 24882,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6464,
    cp: 24883,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6465,
    cp: 24884,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6466,
    cp: 24885,
    name: "Prioro",
    provincia_id: 24
  },
  {
    id: 6467,
    cp: 24885,
    name: "Boca de Huérgano",
    provincia_id: 24
  },
  {
    id: 6468,
    cp: 24886,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6469,
    cp: 24887,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6470,
    cp: 24888,
    name: "Almanza",
    provincia_id: 24
  },
  {
    id: 6471,
    cp: 24888,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6472,
    cp: 24888,
    name: "Cebanico",
    provincia_id: 24
  },
  {
    id: 6473,
    cp: 24889,
    name: "Valderrueda",
    provincia_id: 24
  },
  {
    id: 6474,
    cp: 24890,
    name: "Garrafe de Torío",
    provincia_id: 24
  },
  {
    id: 6475,
    cp: 24891,
    name: "Garrafe de Torío",
    provincia_id: 24
  },
  {
    id: 6476,
    cp: 24892,
    name: "Cebanico",
    provincia_id: 24
  },
  {
    id: 6477,
    cp: 24893,
    name: "Prado de la Guzpe?a",
    provincia_id: 24
  },
  {
    id: 6478,
    cp: 24900,
    name: "Ria?o",
    provincia_id: 24
  },
  {
    id: 6479,
    cp: 24911,
    name: "Boca de Huérgano",
    provincia_id: 24
  },
  {
    id: 6480,
    cp: 24912,
    name: "Boca de Huérgano",
    provincia_id: 24
  },
  {
    id: 6481,
    cp: 24913,
    name: "Boca de Huérgano",
    provincia_id: 24
  },
  {
    id: 6482,
    cp: 24914,
    name: "Posada de Valdeón",
    provincia_id: 24
  },
  {
    id: 6483,
    cp: 24915,
    name: "Posada de Valdeón",
    provincia_id: 24
  },
  {
    id: 6484,
    cp: 24916,
    name: "Oseja de Sajambre",
    provincia_id: 24
  },
  {
    id: 6485,
    cp: 24917,
    name: "Burón",
    provincia_id: 24
  },
  {
    id: 6486,
    cp: 24918,
    name: "Ria?o",
    provincia_id: 24
  },
  {
    id: 6487,
    cp: 24920,
    name: "Valdepolo",
    provincia_id: 24
  },
  {
    id: 6488,
    cp: 24930,
    name: "Valdepolo",
    provincia_id: 24
  },
  {
    id: 6489,
    cp: 24940,
    name: "Cubillas de Rueda",
    provincia_id: 24
  },
  {
    id: 6490,
    cp: 24950,
    name: "Cistierna",
    provincia_id: 24
  },
  {
    id: 6491,
    cp: 24960,
    name: "Sabero",
    provincia_id: 24
  },
  {
    id: 6492,
    cp: 24960,
    name: "Crémenes",
    provincia_id: 24
  },
  {
    id: 6493,
    cp: 24970,
    name: "Crémenes",
    provincia_id: 24
  },
  {
    id: 6494,
    cp: 24980,
    name: "Crémenes",
    provincia_id: 24
  },
  {
    id: 6495,
    cp: 24989,
    name: "Crémenes",
    provincia_id: 24
  },
  {
    id: 6496,
    cp: 24990,
    name: "Crémenes",
    provincia_id: 24
  },
  {
    id: 6497,
    cp: 24991,
    name: "Crémenes",
    provincia_id: 24
  },
  {
    id: 6498,
    cp: 24994,
    name: "Burón",
    provincia_id: 24
  },
  {
    id: 6499,
    cp: 24994,
    name: "Acebedo",
    provincia_id: 24
  },
  {
    id: 6500,
    cp: 24995,
    name: "Burón",
    provincia_id: 24
  },
  {
    id: 6501,
    cp: 24996,
    name: "Mara?a",
    provincia_id: 24
  },
  {
    id: 6502,
    cp: 24996,
    name: "Acebedo",
    provincia_id: 24
  },
  {
    id: 6503,
    cp: 25001,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6504,
    cp: 25002,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6505,
    cp: 25003,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6506,
    cp: 25004,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6507,
    cp: 25005,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6508,
    cp: 25006,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6509,
    cp: 25007,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6510,
    cp: 25008,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6511,
    cp: 25100,
    name: "Almacelles",
    provincia_id: 25
  },
  {
    id: 6512,
    cp: 25110,
    name: "Torrefarrera",
    provincia_id: 25
  },
  {
    id: 6513,
    cp: 25110,
    name: "Alpicat",
    provincia_id: 25
  },
  {
    id: 6514,
    cp: 25111,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6515,
    cp: 25112,
    name: "Gimenells i el Pla de la Font",
    provincia_id: 25
  },
  {
    id: 6516,
    cp: 25113,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6517,
    cp: 25114,
    name: "Gimenells i el Pla de la Font",
    provincia_id: 25
  },
  {
    id: 6518,
    cp: 25120,
    name: "Alfarr?s",
    provincia_id: 25
  },
  {
    id: 6519,
    cp: 25122,
    name: "Ivars de Noguera",
    provincia_id: 25
  },
  {
    id: 6520,
    cp: 25123,
    name: "Torrefarrera",
    provincia_id: 25
  },
  {
    id: 6521,
    cp: 25124,
    name: "Rosselló",
    provincia_id: 25
  },
  {
    id: 6522,
    cp: 25125,
    name: "Alguaire",
    provincia_id: 25
  },
  {
    id: 6523,
    cp: 25126,
    name: "Almenar",
    provincia_id: 25
  },
  {
    id: 6524,
    cp: 25126,
    name: "Torrefarrera",
    provincia_id: 25
  },
  {
    id: 6525,
    cp: 25130,
    name: "Algerri",
    provincia_id: 25
  },
  {
    id: 6526,
    cp: 25131,
    name: "Torre-serona",
    provincia_id: 25
  },
  {
    id: 6527,
    cp: 25132,
    name: "Benavent de Segri?",
    provincia_id: 25
  },
  {
    id: 6528,
    cp: 25133,
    name: "Vilanova de Segri?",
    provincia_id: 25
  },
  {
    id: 6529,
    cp: 25134,
    name: "La Portella",
    provincia_id: 25
  },
  {
    id: 6530,
    cp: 25135,
    name: "Albesa",
    provincia_id: 25
  },
  {
    id: 6531,
    cp: 25136,
    name: "Castelló de Farfanya",
    provincia_id: 25
  },
  {
    id: 6532,
    cp: 25137,
    name: "Corbins",
    provincia_id: 25
  },
  {
    id: 6533,
    cp: 25138,
    name: "Torrelameu",
    provincia_id: 25
  },
  {
    id: 6534,
    cp: 25139,
    name: "Men?rguens",
    provincia_id: 25
  },
  {
    id: 6535,
    cp: 25140,
    name: "Arbeca",
    provincia_id: 25
  },
  {
    id: 6536,
    cp: 25141,
    name: "Torregrossa",
    provincia_id: 25
  },
  {
    id: 6537,
    cp: 25142,
    name: "Bellvís",
    provincia_id: 25
  },
  {
    id: 6538,
    cp: 25143,
    name: "El Poal",
    provincia_id: 25
  },
  {
    id: 6539,
    cp: 25144,
    name: "Bellvís",
    provincia_id: 25
  },
  {
    id: 6540,
    cp: 25150,
    name: "Artesa de Lleida",
    provincia_id: 25
  },
  {
    id: 6541,
    cp: 25151,
    name: "Aspa",
    provincia_id: 25
  },
  {
    id: 6542,
    cp: 25152,
    name: "El Cogul",
    provincia_id: 25
  },
  {
    id: 6543,
    cp: 25153,
    name: "Puigverd de Lleida",
    provincia_id: 25
  },
  {
    id: 6544,
    cp: 25154,
    name: "Castelldans",
    provincia_id: 25
  },
  {
    id: 6545,
    cp: 25155,
    name: "L'Albagés",
    provincia_id: 25
  },
  {
    id: 6546,
    cp: 25160,
    name: "Granyena de les Garrigues",
    provincia_id: 25
  },
  {
    id: 6547,
    cp: 25161,
    name: "Alfés",
    provincia_id: 25
  },
  {
    id: 6548,
    cp: 25162,
    name: "Alcanó",
    provincia_id: 25
  },
  {
    id: 6549,
    cp: 25163,
    name: "El Soler?s",
    provincia_id: 25
  },
  {
    id: 6550,
    cp: 25164,
    name: "Els Torms",
    provincia_id: 25
  },
  {
    id: 6551,
    cp: 25165,
    name: "Juncosa",
    provincia_id: 25
  },
  {
    id: 6552,
    cp: 25170,
    name: "Torres de Segre",
    provincia_id: 25
  },
  {
    id: 6553,
    cp: 25171,
    name: "Albat?rrec",
    provincia_id: 25
  },
  {
    id: 6554,
    cp: 25172,
    name: "Montoliu de Lleida",
    provincia_id: 25
  },
  {
    id: 6555,
    cp: 25173,
    name: "Sudanell",
    provincia_id: 25
  },
  {
    id: 6556,
    cp: 25174,
    name: "Sunyer",
    provincia_id: 25
  },
  {
    id: 6557,
    cp: 25175,
    name: "Sarroca de Lleida",
    provincia_id: 25
  },
  {
    id: 6558,
    cp: 25176,
    name: "Torrebesses",
    provincia_id: 25
  },
  {
    id: 6559,
    cp: 25177,
    name: "La Granadella",
    provincia_id: 25
  },
  {
    id: 6560,
    cp: 25177,
    name: "Bellaguarda",
    provincia_id: 25
  },
  {
    id: 6561,
    cp: 25178,
    name: "Bovera",
    provincia_id: 25
  },
  {
    id: 6562,
    cp: 25179,
    name: "Maials",
    provincia_id: 25
  },
  {
    id: 6563,
    cp: 25180,
    name: "Alcarr?s",
    provincia_id: 25
  },
  {
    id: 6564,
    cp: 25181,
    name: "Soses",
    provincia_id: 25
  },
  {
    id: 6565,
    cp: 25182,
    name: "Aitona",
    provincia_id: 25
  },
  {
    id: 6566,
    cp: 25183,
    name: "Ser?s",
    provincia_id: 25
  },
  {
    id: 6567,
    cp: 25184,
    name: "Massalcoreig",
    provincia_id: 25
  },
  {
    id: 6568,
    cp: 25185,
    name: "La Granja d'Escarp",
    provincia_id: 25
  },
  {
    id: 6569,
    cp: 25186,
    name: "Llardecans",
    provincia_id: 25
  },
  {
    id: 6570,
    cp: 25187,
    name: "Almatret",
    provincia_id: 25
  },
  {
    id: 6571,
    cp: 25190,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6572,
    cp: 25191,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6573,
    cp: 25192,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6574,
    cp: 25193,
    name: "Sant Llorenç de Morunys",
    provincia_id: 25
  },
  {
    id: 6575,
    cp: 25193,
    name: "Alcarr?s",
    provincia_id: 25
  },
  {
    id: 6576,
    cp: 25193,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6577,
    cp: 25194,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6578,
    cp: 25195,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6579,
    cp: 25196,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6580,
    cp: 25197,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6581,
    cp: 25198,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6582,
    cp: 25199,
    name: "Lleida",
    provincia_id: 25
  },
  {
    id: 6583,
    cp: 25200,
    name: "Cervera",
    provincia_id: 25
  },
  {
    id: 6584,
    cp: 25210,
    name: "Guissona",
    provincia_id: 25
  },
  {
    id: 6585,
    cp: 25211,
    name: "Sant Guim de la Plana",
    provincia_id: 25
  },
  {
    id: 6586,
    cp: 25211,
    name: "Massoteres",
    provincia_id: 25
  },
  {
    id: 6587,
    cp: 25211,
    name: "Torrefeta i Florejacs",
    provincia_id: 25
  },
  {
    id: 6588,
    cp: 25212,
    name: "Torrefeta i Florejacs",
    provincia_id: 25
  },
  {
    id: 6589,
    cp: 25212,
    name: "Tarroja de Segarra",
    provincia_id: 25
  },
  {
    id: 6590,
    cp: 25212,
    name: "Els Plans de Sió",
    provincia_id: 25
  },
  {
    id: 6591,
    cp: 25213,
    name: "Talavera",
    provincia_id: 25
  },
  {
    id: 6592,
    cp: 25213,
    name: "Ribera d'Ondara",
    provincia_id: 25
  },
  {
    id: 6593,
    cp: 25213,
    name: "Cervera",
    provincia_id: 25
  },
  {
    id: 6594,
    cp: 25214,
    name: "Senterada",
    provincia_id: 25
  },
  {
    id: 6595,
    cp: 25214,
    name: "Les Oluges",
    provincia_id: 25
  },
  {
    id: 6596,
    cp: 25214,
    name: "Estar?s",
    provincia_id: 25
  },
  {
    id: 6597,
    cp: 25214,
    name: "Cervera",
    provincia_id: 25
  },
  {
    id: 6598,
    cp: 25215,
    name: "Estar?s",
    provincia_id: 25
  },
  {
    id: 6599,
    cp: 25215,
    name: "Sant Ramon",
    provincia_id: 25
  },
  {
    id: 6600,
    cp: 25216,
    name: "Ivorra",
    provincia_id: 25
  },
  {
    id: 6601,
    cp: 25216,
    name: "Sant Ramon",
    provincia_id: 25
  },
  {
    id: 6602,
    cp: 25217,
    name: "Granyena de Segarra",
    provincia_id: 25
  },
  {
    id: 6603,
    cp: 25217,
    name: "Montoliu de Segarra",
    provincia_id: 25
  },
  {
    id: 6604,
    cp: 25217,
    name: "Baix Pallars",
    provincia_id: 25
  },
  {
    id: 6605,
    cp: 25217,
    name: "Ribera d'Ondara",
    provincia_id: 25
  },
  {
    id: 6606,
    cp: 25218,
    name: "Cervera",
    provincia_id: 25
  },
  {
    id: 6607,
    cp: 25218,
    name: "Els Plans de Sió",
    provincia_id: 25
  },
  {
    id: 6608,
    cp: 25218,
    name: "Granyanella",
    provincia_id: 25
  },
  {
    id: 6609,
    cp: 25220,
    name: "Bell-lloc d'Urgell",
    provincia_id: 25
  },
  {
    id: 6610,
    cp: 25221,
    name: "Els Alamús",
    provincia_id: 25
  },
  {
    id: 6611,
    cp: 25222,
    name: "Sidamon",
    provincia_id: 25
  },
  {
    id: 6612,
    cp: 25230,
    name: "Mollerussa",
    provincia_id: 25
  },
  {
    id: 6613,
    cp: 25240,
    name: "Penelles",
    provincia_id: 25
  },
  {
    id: 6614,
    cp: 25240,
    name: "Linyola",
    provincia_id: 25
  },
  {
    id: 6615,
    cp: 25241,
    name: "Golmés",
    provincia_id: 25
  },
  {
    id: 6616,
    cp: 25242,
    name: "Miralcamp",
    provincia_id: 25
  },
  {
    id: 6617,
    cp: 25243,
    name: "El Palau d'Anglesola",
    provincia_id: 25
  },
  {
    id: 6618,
    cp: 25244,
    name: "Fondarella",
    provincia_id: 25
  },
  {
    id: 6619,
    cp: 25245,
    name: "Vila-sana",
    provincia_id: 25
  },
  {
    id: 6620,
    cp: 25250,
    name: "Bellpuig",
    provincia_id: 25
  },
  {
    id: 6621,
    cp: 25260,
    name: "Ivars d'Urgell",
    provincia_id: 25
  },
  {
    id: 6622,
    cp: 25261,
    name: "Penelles",
    provincia_id: 25
  },
  {
    id: 6623,
    cp: 25261,
    name: "Ivars d'Urgell",
    provincia_id: 25
  },
  {
    id: 6624,
    cp: 25262,
    name: "Barbens",
    provincia_id: 25
  },
  {
    id: 6625,
    cp: 25263,
    name: "Preixana",
    provincia_id: 25
  },
  {
    id: 6626,
    cp: 25264,
    name: "Vilanova de Bellpuig",
    provincia_id: 25
  },
  {
    id: 6627,
    cp: 25265,
    name: "Castellnou de Seana",
    provincia_id: 25
  },
  {
    id: 6628,
    cp: 25266,
    name: "Belianes",
    provincia_id: 25
  },
  {
    id: 6629,
    cp: 25266,
    name: "Mald?",
    provincia_id: 25
  },
  {
    id: 6630,
    cp: 25267,
    name: "Sant Martí de Riucorb",
    provincia_id: 25
  },
  {
    id: 6631,
    cp: 25268,
    name: "Els Omells de na Gaia",
    provincia_id: 25
  },
  {
    id: 6632,
    cp: 25268,
    name: "Vallbona de les Monges",
    provincia_id: 25
  },
  {
    id: 6633,
    cp: 25269,
    name: "Vallbona de les Monges",
    provincia_id: 25
  },
  {
    id: 6634,
    cp: 25270,
    name: "Sant Guim de Freixenet",
    provincia_id: 25
  },
  {
    id: 6635,
    cp: 25271,
    name: "Estar?s",
    provincia_id: 25
  },
  {
    id: 6636,
    cp: 25271,
    name: "Sant Guim de Freixenet",
    provincia_id: 25
  },
  {
    id: 6637,
    cp: 25280,
    name: "Solsona",
    provincia_id: 25
  },
  {
    id: 6638,
    cp: 25280,
    name: "Olius",
    provincia_id: 25
  },
  {
    id: 6639,
    cp: 25281,
    name: "Llobera",
    provincia_id: 25
  },
  {
    id: 6640,
    cp: 25282,
    name: "Sant Llorenç de Morunys",
    provincia_id: 25
  },
  {
    id: 6641,
    cp: 25283,
    name: "Od?n",
    provincia_id: 25
  },
  {
    id: 6642,
    cp: 25283,
    name: "Lladurs",
    provincia_id: 25
  },
  {
    id: 6643,
    cp: 25284,
    name: "La Coma i la Pedra",
    provincia_id: 25
  },
  {
    id: 6644,
    cp: 25285,
    name: "Guixers",
    provincia_id: 25
  },
  {
    id: 6645,
    cp: 25286,
    name: "Alt ?neu",
    provincia_id: 25
  },
  {
    id: 6646,
    cp: 25286,
    name: "Pinell de Solson?s",
    provincia_id: 25
  },
  {
    id: 6647,
    cp: 25286,
    name: "Nav?s",
    provincia_id: 25
  },
  {
    id: 6648,
    cp: 25286,
    name: "Olius",
    provincia_id: 25
  },
  {
    id: 6649,
    cp: 25287,
    name: "Pinós",
    provincia_id: 25
  },
  {
    id: 6650,
    cp: 25287,
    name: "Riner",
    provincia_id: 25
  },
  {
    id: 6651,
    cp: 25287,
    name: "Olius",
    provincia_id: 25
  },
  {
    id: 6652,
    cp: 25288,
    name: "Lladurs",
    provincia_id: 25
  },
  {
    id: 6653,
    cp: 25289,
    name: "Bassella",
    provincia_id: 25
  },
  {
    id: 6654,
    cp: 25289,
    name: "Castellar de la Ribera",
    provincia_id: 25
  },
  {
    id: 6655,
    cp: 25290,
    name: "Clariana de Cardener",
    provincia_id: 25
  },
  {
    id: 6656,
    cp: 25290,
    name: "Riner",
    provincia_id: 25
  },
  {
    id: 6657,
    cp: 25300,
    name: "T?rrega",
    provincia_id: 25
  },
  {
    id: 6658,
    cp: 25310,
    name: "Agramunt",
    provincia_id: 25
  },
  {
    id: 6659,
    cp: 25315,
    name: "Montgai",
    provincia_id: 25
  },
  {
    id: 6660,
    cp: 25316,
    name: "Preixens",
    provincia_id: 25
  },
  {
    id: 6661,
    cp: 25317,
    name: "Agramunt",
    provincia_id: 25
  },
  {
    id: 6662,
    cp: 25318,
    name: "Agramunt",
    provincia_id: 25
  },
  {
    id: 6663,
    cp: 25318,
    name: "Puigverd d'Agramunt",
    provincia_id: 25
  },
  {
    id: 6664,
    cp: 25318,
    name: "Oliola",
    provincia_id: 25
  },
  {
    id: 6665,
    cp: 25318,
    name: "Ossó de Sió",
    provincia_id: 25
  },
  {
    id: 6666,
    cp: 25320,
    name: "Anglesola",
    provincia_id: 25
  },
  {
    id: 6667,
    cp: 25327,
    name: "La Vall de Boí",
    provincia_id: 25
  },
  {
    id: 6668,
    cp: 25330,
    name: "Vilagrassa",
    provincia_id: 25
  },
  {
    id: 6669,
    cp: 25331,
    name: "Tornabous",
    provincia_id: 25
  },
  {
    id: 6670,
    cp: 25331,
    name: "Agramunt",
    provincia_id: 25
  },
  {
    id: 6671,
    cp: 25332,
    name: "La Fuliola",
    provincia_id: 25
  },
  {
    id: 6672,
    cp: 25333,
    name: "Penelles",
    provincia_id: 25
  },
  {
    id: 6673,
    cp: 25334,
    name: "Castellser?",
    provincia_id: 25
  },
  {
    id: 6674,
    cp: 25335,
    name: "Penelles",
    provincia_id: 25
  },
  {
    id: 6675,
    cp: 25336,
    name: "Bellmunt d'Urgell",
    provincia_id: 25
  },
  {
    id: 6676,
    cp: 25337,
    name: "Bellcaire d'Urgell",
    provincia_id: 25
  },
  {
    id: 6677,
    cp: 25340,
    name: "Montorn?s de Segarra",
    provincia_id: 25
  },
  {
    id: 6678,
    cp: 25340,
    name: "Verdú",
    provincia_id: 25
  },
  {
    id: 6679,
    cp: 25341,
    name: "Ciutadilla",
    provincia_id: 25
  },
  {
    id: 6680,
    cp: 25341,
    name: "Guimer?",
    provincia_id: 25
  },
  {
    id: 6681,
    cp: 25341,
    name: "Nalec",
    provincia_id: 25
  },
  {
    id: 6682,
    cp: 25343,
    name: "Sant Martí de Riucorb",
    provincia_id: 25
  },
  {
    id: 6683,
    cp: 25344,
    name: "Sant Martí de Riucorb",
    provincia_id: 25
  },
  {
    id: 6684,
    cp: 25350,
    name: "T?rrega",
    provincia_id: 25
  },
  {
    id: 6685,
    cp: 25351,
    name: "T?rrega",
    provincia_id: 25
  },
  {
    id: 6686,
    cp: 25352,
    name: "T?rrega",
    provincia_id: 25
  },
  {
    id: 6687,
    cp: 25353,
    name: "T?rrega",
    provincia_id: 25
  },
  {
    id: 6688,
    cp: 25354,
    name: "T?rrega",
    provincia_id: 25
  },
  {
    id: 6689,
    cp: 25360,
    name: "T?rrega",
    provincia_id: 25
  },
  {
    id: 6690,
    cp: 25400,
    name: "Les Borges Blanques",
    provincia_id: 25
  },
  {
    id: 6691,
    cp: 25410,
    name: "L'Espluga Calba",
    provincia_id: 25
  },
  {
    id: 6692,
    cp: 25411,
    name: "Fulleda",
    provincia_id: 25
  },
  {
    id: 6693,
    cp: 25412,
    name: "Els Omellons",
    provincia_id: 25
  },
  {
    id: 6694,
    cp: 25413,
    name: "La Floresta",
    provincia_id: 25
  },
  {
    id: 6695,
    cp: 25420,
    name: "Puiggr?s",
    provincia_id: 25
  },
  {
    id: 6696,
    cp: 25430,
    name: "Juneda",
    provincia_id: 25
  },
  {
    id: 6697,
    cp: 25440,
    name: "Vinaixa",
    provincia_id: 25
  },
  {
    id: 6698,
    cp: 25450,
    name: "L'Albi",
    provincia_id: 25
  },
  {
    id: 6699,
    cp: 25460,
    name: "Cervi? de les Garrigues",
    provincia_id: 25
  },
  {
    id: 6700,
    cp: 25471,
    name: "La Pobla de Cérvoles",
    provincia_id: 25
  },
  {
    id: 6701,
    cp: 25480,
    name: "Tarrés",
    provincia_id: 25
  },
  {
    id: 6702,
    cp: 25500,
    name: "La Pobla de Segur",
    provincia_id: 25
  },
  {
    id: 6703,
    cp: 25510,
    name: "La Torre de Cabdella",
    provincia_id: 25
  },
  {
    id: 6704,
    cp: 25511,
    name: "La Torre de Cabdella",
    provincia_id: 25
  },
  {
    id: 6705,
    cp: 25512,
    name: "La Torre de Cabdella",
    provincia_id: 25
  },
  {
    id: 6706,
    cp: 25513,
    name: "La Pobla de Segur",
    provincia_id: 25
  },
  {
    id: 6707,
    cp: 25513,
    name: "La Torre de Cabdella",
    provincia_id: 25
  },
  {
    id: 6708,
    cp: 25513,
    name: "Baix Pallars",
    provincia_id: 25
  },
  {
    id: 6709,
    cp: 25514,
    name: "Senterada",
    provincia_id: 25
  },
  {
    id: 6710,
    cp: 25514,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6711,
    cp: 25515,
    name: "La Torre de Cabdella",
    provincia_id: 25
  },
  {
    id: 6712,
    cp: 25516,
    name: "Conca de Dalt",
    provincia_id: 25
  },
  {
    id: 6713,
    cp: 25516,
    name: "La Pobla de Segur",
    provincia_id: 25
  },
  {
    id: 6714,
    cp: 25517,
    name: "Conca de Dalt",
    provincia_id: 25
  },
  {
    id: 6715,
    cp: 25518,
    name: "Conca de Dalt",
    provincia_id: 25
  },
  {
    id: 6716,
    cp: 25520,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6717,
    cp: 25526,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6718,
    cp: 25526,
    name: "La Vall de Boí",
    provincia_id: 25
  },
  {
    id: 6719,
    cp: 25527,
    name: "La Vall de Boí",
    provincia_id: 25
  },
  {
    id: 6720,
    cp: 25528,
    name: "La Vall de Boí",
    provincia_id: 25
  },
  {
    id: 6721,
    cp: 25529,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6722,
    cp: 25530,
    name: "Vielha e Mijaran",
    provincia_id: 25
  },
  {
    id: 6723,
    cp: 25537,
    name: "Vielha e Mijaran",
    provincia_id: 25
  },
  {
    id: 6724,
    cp: 25538,
    name: "Vielha e Mijaran",
    provincia_id: 25
  },
  {
    id: 6725,
    cp: 25539,
    name: "Vielha e Mijaran",
    provincia_id: 25
  },
  {
    id: 6726,
    cp: 25539,
    name: "Naut Aran",
    provincia_id: 25
  },
  {
    id: 6727,
    cp: 25540,
    name: "Les",
    provincia_id: 25
  },
  {
    id: 6728,
    cp: 25547,
    name: "El Vilosell",
    provincia_id: 25
  },
  {
    id: 6729,
    cp: 25548,
    name: "Canejan",
    provincia_id: 25
  },
  {
    id: 6730,
    cp: 25549,
    name: "Bausen",
    provincia_id: 25
  },
  {
    id: 6731,
    cp: 25550,
    name: "Boss?st",
    provincia_id: 25
  },
  {
    id: 6732,
    cp: 25551,
    name: "Es B?rdes",
    provincia_id: 25
  },
  {
    id: 6733,
    cp: 25551,
    name: "Vilam?s",
    provincia_id: 25
  },
  {
    id: 6734,
    cp: 25551,
    name: "Arres",
    provincia_id: 25
  },
  {
    id: 6735,
    cp: 25552,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6736,
    cp: 25552,
    name: "Vilaller",
    provincia_id: 25
  },
  {
    id: 6737,
    cp: 25553,
    name: "Vilaller",
    provincia_id: 25
  },
  {
    id: 6738,
    cp: 25554,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6739,
    cp: 25555,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6740,
    cp: 25555,
    name: "Sarroca de Bellera",
    provincia_id: 25
  },
  {
    id: 6741,
    cp: 25555,
    name: "Senterada",
    provincia_id: 25
  },
  {
    id: 6742,
    cp: 25556,
    name: "El Pont de Suert",
    provincia_id: 25
  },
  {
    id: 6743,
    cp: 25557,
    name: "El Vilosell",
    provincia_id: 25
  },
  {
    id: 6744,
    cp: 25560,
    name: "Sort",
    provincia_id: 25
  },
  {
    id: 6745,
    cp: 25560,
    name: "Alcoletge",
    provincia_id: 25
  },
  {
    id: 6746,
    cp: 25566,
    name: "Soriguera",
    provincia_id: 25
  },
  {
    id: 6747,
    cp: 25567,
    name: "Sort",
    provincia_id: 25
  },
  {
    id: 6748,
    cp: 25568,
    name: "Sort",
    provincia_id: 25
  },
  {
    id: 6749,
    cp: 25569,
    name: "Sort",
    provincia_id: 25
  },
  {
    id: 6750,
    cp: 25569,
    name: "Soriguera",
    provincia_id: 25
  },
  {
    id: 6751,
    cp: 25570,
    name: "Vall de Cardós",
    provincia_id: 25
  },
  {
    id: 6752,
    cp: 25571,
    name: "Esterri de Cardós",
    provincia_id: 25
  },
  {
    id: 6753,
    cp: 25571,
    name: "Lladorre",
    provincia_id: 25
  },
  {
    id: 6754,
    cp: 25571,
    name: "Vall de Cardós",
    provincia_id: 25
  },
  {
    id: 6755,
    cp: 25572,
    name: "Vall de Cardós",
    provincia_id: 25
  },
  {
    id: 6756,
    cp: 25573,
    name: "Alins",
    provincia_id: 25
  },
  {
    id: 6757,
    cp: 25574,
    name: "Alins",
    provincia_id: 25
  },
  {
    id: 6758,
    cp: 25575,
    name: "Alins",
    provincia_id: 25
  },
  {
    id: 6759,
    cp: 25576,
    name: "Vall de Cardós",
    provincia_id: 25
  },
  {
    id: 6760,
    cp: 25576,
    name: "Lladorre",
    provincia_id: 25
  },
  {
    id: 6761,
    cp: 25577,
    name: "Lladorre",
    provincia_id: 25
  },
  {
    id: 6762,
    cp: 25580,
    name: "Esterri d'?neu",
    provincia_id: 25
  },
  {
    id: 6763,
    cp: 25583,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6764,
    cp: 25584,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6765,
    cp: 25586,
    name: "Alt ?neu",
    provincia_id: 25
  },
  {
    id: 6766,
    cp: 25587,
    name: "Alt ?neu",
    provincia_id: 25
  },
  {
    id: 6767,
    cp: 25588,
    name: "La Guingueta d'?neu",
    provincia_id: 25
  },
  {
    id: 6768,
    cp: 25589,
    name: "Alt ?neu",
    provincia_id: 25
  },
  {
    id: 6769,
    cp: 25590,
    name: "Baix Pallars",
    provincia_id: 25
  },
  {
    id: 6770,
    cp: 25591,
    name: "Baix Pallars",
    provincia_id: 25
  },
  {
    id: 6771,
    cp: 25592,
    name: "Baix Pallars",
    provincia_id: 25
  },
  {
    id: 6772,
    cp: 25592,
    name: "Camarasa",
    provincia_id: 25
  },
  {
    id: 6773,
    cp: 25593,
    name: "Soriguera",
    provincia_id: 25
  },
  {
    id: 6774,
    cp: 25594,
    name: "Llavorsí",
    provincia_id: 25
  },
  {
    id: 6775,
    cp: 25594,
    name: "Rialp",
    provincia_id: 25
  },
  {
    id: 6776,
    cp: 25595,
    name: "Farrera",
    provincia_id: 25
  },
  {
    id: 6777,
    cp: 25595,
    name: "Tírvia",
    provincia_id: 25
  },
  {
    id: 6778,
    cp: 25595,
    name: "La Guingueta d'?neu",
    provincia_id: 25
  },
  {
    id: 6779,
    cp: 25595,
    name: "Llavorsí",
    provincia_id: 25
  },
  {
    id: 6780,
    cp: 25596,
    name: "La Guingueta d'?neu",
    provincia_id: 25
  },
  {
    id: 6781,
    cp: 25597,
    name: "Espot",
    provincia_id: 25
  },
  {
    id: 6782,
    cp: 25597,
    name: "La Guingueta d'?neu",
    provincia_id: 25
  },
  {
    id: 6783,
    cp: 25598,
    name: "Naut Aran",
    provincia_id: 25
  },
  {
    id: 6784,
    cp: 25599,
    name: "Naut Aran",
    provincia_id: 25
  },
  {
    id: 6785,
    cp: 25600,
    name: "Balaguer",
    provincia_id: 25
  },
  {
    id: 6786,
    cp: 25610,
    name: "Os de Balaguer",
    provincia_id: 25
  },
  {
    id: 6787,
    cp: 25611,
    name: "?ger",
    provincia_id: 25
  },
  {
    id: 6788,
    cp: 25611,
    name: "Les Avellanes i Santa Linya",
    provincia_id: 25
  },
  {
    id: 6789,
    cp: 25611,
    name: "Os de Balaguer",
    provincia_id: 25
  },
  {
    id: 6790,
    cp: 25612,
    name: "Les Avellanes i Santa Linya",
    provincia_id: 25
  },
  {
    id: 6791,
    cp: 25612,
    name: "Os de Balaguer",
    provincia_id: 25
  },
  {
    id: 6792,
    cp: 25613,
    name: "Camarasa",
    provincia_id: 25
  },
  {
    id: 6793,
    cp: 25614,
    name: "Os de Balaguer",
    provincia_id: 25
  },
  {
    id: 6794,
    cp: 25615,
    name: "Camarasa",
    provincia_id: 25
  },
  {
    id: 6795,
    cp: 25616,
    name: "Montgai",
    provincia_id: 25
  },
  {
    id: 6796,
    cp: 25617,
    name: "La Sentiu de Sió",
    provincia_id: 25
  },
  {
    id: 6797,
    cp: 25617,
    name: "Vallfogona de Balaguer",
    provincia_id: 25
  },
  {
    id: 6798,
    cp: 25620,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6799,
    cp: 25630,
    name: "Talarn",
    provincia_id: 25
  },
  {
    id: 6800,
    cp: 25631,
    name: "Castell de Mur",
    provincia_id: 25
  },
  {
    id: 6801,
    cp: 25632,
    name: "Castell de Mur",
    provincia_id: 25
  },
  {
    id: 6802,
    cp: 25632,
    name: "Sant Esteve de la Sarga",
    provincia_id: 25
  },
  {
    id: 6803,
    cp: 25633,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6804,
    cp: 25633,
    name: "Castell de Mur",
    provincia_id: 25
  },
  {
    id: 6805,
    cp: 25634,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6806,
    cp: 25635,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6807,
    cp: 25636,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6808,
    cp: 25637,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6809,
    cp: 25638,
    name: "Gavet de la Conca",
    provincia_id: 25
  },
  {
    id: 6810,
    cp: 25638,
    name: "Llimiana",
    provincia_id: 25
  },
  {
    id: 6811,
    cp: 25639,
    name: "Llimiana",
    provincia_id: 25
  },
  {
    id: 6812,
    cp: 25639,
    name: "Gavet de la Conca",
    provincia_id: 25
  },
  {
    id: 6813,
    cp: 25640,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6814,
    cp: 25650,
    name: "Isona i Conca Dell?",
    provincia_id: 25
  },
  {
    id: 6815,
    cp: 25651,
    name: "Abella de la Conca",
    provincia_id: 25
  },
  {
    id: 6816,
    cp: 25651,
    name: "Isona i Conca Dell?",
    provincia_id: 25
  },
  {
    id: 6817,
    cp: 25652,
    name: "Abella de la Conca",
    provincia_id: 25
  },
  {
    id: 6818,
    cp: 25653,
    name: "Isona i Conca Dell?",
    provincia_id: 25
  },
  {
    id: 6819,
    cp: 25654,
    name: "Tremp",
    provincia_id: 25
  },
  {
    id: 6820,
    cp: 25655,
    name: "Isona i Conca Dell?",
    provincia_id: 25
  },
  {
    id: 6821,
    cp: 25656,
    name: "Isona i Conca Dell?",
    provincia_id: 25
  },
  {
    id: 6822,
    cp: 25657,
    name: "Isona i Conca Dell?",
    provincia_id: 25
  },
  {
    id: 6823,
    cp: 25658,
    name: "Isona i Conca Dell?",
    provincia_id: 25
  },
  {
    id: 6824,
    cp: 25660,
    name: "Alcoletge",
    provincia_id: 25
  },
  {
    id: 6825,
    cp: 25670,
    name: "Térmens",
    provincia_id: 25
  },
  {
    id: 6826,
    cp: 25680,
    name: "Vallfogona de Balaguer",
    provincia_id: 25
  },
  {
    id: 6827,
    cp: 25689,
    name: "Gavet de la Conca",
    provincia_id: 25
  },
  {
    id: 6828,
    cp: 25690,
    name: "Vilanova de la Barca",
    provincia_id: 25
  },
  {
    id: 6829,
    cp: 25691,
    name: "?ger",
    provincia_id: 25
  },
  {
    id: 6830,
    cp: 25692,
    name: "Camarasa",
    provincia_id: 25
  },
  {
    id: 6831,
    cp: 25692,
    name: "?ger",
    provincia_id: 25
  },
  {
    id: 6832,
    cp: 25693,
    name: "Sal?s de Pallars",
    provincia_id: 25
  },
  {
    id: 6833,
    cp: 25700,
    name: "La Seu d'Urgell",
    provincia_id: 25
  },
  {
    id: 6834,
    cp: 25710,
    name: "La Seu d'Urgell",
    provincia_id: 25
  },
  {
    id: 6835,
    cp: 25711,
    name: "Montferrer i Castellb?",
    provincia_id: 25
  },
  {
    id: 6836,
    cp: 25712,
    name: "Montferrer i Castellb?",
    provincia_id: 25
  },
  {
    id: 6837,
    cp: 25713,
    name: "Ribera d'Urgellet",
    provincia_id: 25
  },
  {
    id: 6838,
    cp: 25714,
    name: "Montferrer i Castellb?",
    provincia_id: 25
  },
  {
    id: 6839,
    cp: 25714,
    name: "Ribera d'Urgellet",
    provincia_id: 25
  },
  {
    id: 6840,
    cp: 25714,
    name: "Les Valls d'Aguilar",
    provincia_id: 25
  },
  {
    id: 6841,
    cp: 25715,
    name: "Al?s i Cerc",
    provincia_id: 25
  },
  {
    id: 6842,
    cp: 25716,
    name: "Gósol",
    provincia_id: 25
  },
  {
    id: 6843,
    cp: 25717,
    name: "Vall de Cardós",
    provincia_id: 25
  },
  {
    id: 6844,
    cp: 25717,
    name: "Al?s i Cerc",
    provincia_id: 25
  },
  {
    id: 6845,
    cp: 25717,
    name: "Josa i Tuixén",
    provincia_id: 25
  },
  {
    id: 6846,
    cp: 25717,
    name: "La Vansa i Fórnols",
    provincia_id: 25
  },
  {
    id: 6847,
    cp: 25718,
    name: "Al?s i Cerc",
    provincia_id: 25
  },
  {
    id: 6848,
    cp: 25719,
    name: "Estamariu",
    provincia_id: 25
  },
  {
    id: 6849,
    cp: 25720,
    name: "Bellver de Cerdanya",
    provincia_id: 25
  },
  {
    id: 6850,
    cp: 25721,
    name: "Prats i Sansor",
    provincia_id: 25
  },
  {
    id: 6851,
    cp: 25721,
    name: "Riu de Cerdanya",
    provincia_id: 25
  },
  {
    id: 6852,
    cp: 25721,
    name: "Bellver de Cerdanya",
    provincia_id: 25
  },
  {
    id: 6853,
    cp: 25722,
    name: "Ars?guel",
    provincia_id: 25
  },
  {
    id: 6854,
    cp: 25722,
    name: "El Pont de Bar",
    provincia_id: 25
  },
  {
    id: 6855,
    cp: 25722,
    name: "Cava",
    provincia_id: 25
  },
  {
    id: 6856,
    cp: 25723,
    name: "El Pont de Bar",
    provincia_id: 25
  },
  {
    id: 6857,
    cp: 25724,
    name: "Bellver de Cerdanya",
    provincia_id: 25
  },
  {
    id: 6858,
    cp: 25724,
    name: "Montell? i Martinet",
    provincia_id: 25
  },
  {
    id: 6859,
    cp: 25725,
    name: "Montell? i Martinet",
    provincia_id: 25
  },
  {
    id: 6860,
    cp: 25726,
    name: "Lles de Cerdanya",
    provincia_id: 25
  },
  {
    id: 6861,
    cp: 25727,
    name: "Prullans",
    provincia_id: 25
  },
  {
    id: 6862,
    cp: 25730,
    name: "Artesa de Segre",
    provincia_id: 25
  },
  {
    id: 6863,
    cp: 25735,
    name: "Vilanova de Mei?",
    provincia_id: 25
  },
  {
    id: 6864,
    cp: 25736,
    name: "Artesa de Segre",
    provincia_id: 25
  },
  {
    id: 6865,
    cp: 25736,
    name: "Vilanova de Mei?",
    provincia_id: 25
  },
  {
    id: 6866,
    cp: 25737,
    name: "Foradada",
    provincia_id: 25
  },
  {
    id: 6867,
    cp: 25737,
    name: "Al?s de Balaguer",
    provincia_id: 25
  },
  {
    id: 6868,
    cp: 25737,
    name: "Bassella",
    provincia_id: 25
  },
  {
    id: 6869,
    cp: 25737,
    name: "Artesa de Segre",
    provincia_id: 25
  },
  {
    id: 6870,
    cp: 25737,
    name: "Cubells",
    provincia_id: 25
  },
  {
    id: 6871,
    cp: 25738,
    name: "Vilanova de Mei?",
    provincia_id: 25
  },
  {
    id: 6872,
    cp: 25738,
    name: "Artesa de Segre",
    provincia_id: 25
  },
  {
    id: 6873,
    cp: 25739,
    name: "Artesa de Segre",
    provincia_id: 25
  },
  {
    id: 6874,
    cp: 25740,
    name: "Ponts",
    provincia_id: 25
  },
  {
    id: 6875,
    cp: 25746,
    name: "Ponts",
    provincia_id: 25
  },
  {
    id: 6876,
    cp: 25747,
    name: "La Baronia de Rialb",
    provincia_id: 25
  },
  {
    id: 6877,
    cp: 25747,
    name: "Abella de la Conca",
    provincia_id: 25
  },
  {
    id: 6878,
    cp: 25748,
    name: "Cabanabona",
    provincia_id: 25
  },
  {
    id: 6879,
    cp: 25748,
    name: "Vilanova de l'Aguda",
    provincia_id: 25
  },
  {
    id: 6880,
    cp: 25748,
    name: "Oliola",
    provincia_id: 25
  },
  {
    id: 6881,
    cp: 25749,
    name: "Oliola",
    provincia_id: 25
  },
  {
    id: 6882,
    cp: 25749,
    name: "Ponts",
    provincia_id: 25
  },
  {
    id: 6883,
    cp: 25749,
    name: "Vilanova de l'Aguda",
    provincia_id: 25
  },
  {
    id: 6884,
    cp: 25750,
    name: "Tor?",
    provincia_id: 25
  },
  {
    id: 6885,
    cp: 25751,
    name: "Tor?",
    provincia_id: 25
  },
  {
    id: 6886,
    cp: 25752,
    name: "Biosca",
    provincia_id: 25
  },
  {
    id: 6887,
    cp: 25753,
    name: "Biosca",
    provincia_id: 25
  },
  {
    id: 6888,
    cp: 25753,
    name: "Sanaüja",
    provincia_id: 25
  },
  {
    id: 6889,
    cp: 25772,
    name: "Biosca",
    provincia_id: 25
  },
  {
    id: 6890,
    cp: 25790,
    name: "Oliana",
    provincia_id: 25
  },
  {
    id: 6891,
    cp: 25790,
    name: "Coll de Nargó",
    provincia_id: 25
  },
  {
    id: 6892,
    cp: 25790,
    name: "Peramola",
    provincia_id: 25
  },
  {
    id: 6893,
    cp: 25790,
    name: "Od?n",
    provincia_id: 25
  },
  {
    id: 6894,
    cp: 25791,
    name: "Tiurana",
    provincia_id: 25
  },
  {
    id: 6895,
    cp: 25792,
    name: "Bassella",
    provincia_id: 25
  },
  {
    id: 6896,
    cp: 25793,
    name: "Coll de Nargó",
    provincia_id: 25
  },
  {
    id: 6897,
    cp: 25794,
    name: "Fígols i Aliny?",
    provincia_id: 25
  },
  {
    id: 6898,
    cp: 25794,
    name: "Cabó",
    provincia_id: 25
  },
  {
    id: 6899,
    cp: 25794,
    name: "Organy?",
    provincia_id: 25
  },
  {
    id: 6900,
    cp: 25794,
    name: "Coll de Nargó",
    provincia_id: 25
  },
  {
    id: 6901,
    cp: 25795,
    name: "Ribera d'Urgellet",
    provincia_id: 25
  },
  {
    id: 6902,
    cp: 25795,
    name: "Les Valls d'Aguilar",
    provincia_id: 25
  },
  {
    id: 6903,
    cp: 25796,
    name: "Ribera d'Urgellet",
    provincia_id: 25
  },
  {
    id: 6904,
    cp: 25797,
    name: "Ribera d'Urgellet",
    provincia_id: 25
  },
  {
    id: 6905,
    cp: 25798,
    name: "Les Valls de Valira",
    provincia_id: 25
  },
  {
    id: 6906,
    cp: 25799,
    name: "El Pont de Bar",
    provincia_id: 25
  },
  {
    id: 6907,
    cp: 26001,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6908,
    cp: 26002,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6909,
    cp: 26003,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6910,
    cp: 26004,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6911,
    cp: 26005,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6912,
    cp: 26006,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6913,
    cp: 26006,
    name: "Villamediana de Iregua",
    provincia_id: 26
  },
  {
    id: 6914,
    cp: 26007,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6915,
    cp: 26008,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6916,
    cp: 26009,
    name: "Logro?o",
    provincia_id: 26
  },
  {
    id: 6917,
    cp: 26100,
    name: "Torrecilla en Cameros",
    provincia_id: 26
  },
  {
    id: 6918,
    cp: 26100,
    name: "Almarza de Cameros",
    provincia_id: 26
  },
  {
    id: 6919,
    cp: 26110,
    name: "Nestares",
    provincia_id: 26
  },
  {
    id: 6920,
    cp: 26111,
    name: "Almarza de Cameros",
    provincia_id: 26
  },
  {
    id: 6921,
    cp: 26111,
    name: "Pinillos",
    provincia_id: 26
  },
  {
    id: 6922,
    cp: 26120,
    name: "Albelda de Iregua",
    provincia_id: 26
  },
  {
    id: 6923,
    cp: 26121,
    name: "Nalda",
    provincia_id: 26
  },
  {
    id: 6924,
    cp: 26121,
    name: "Viguera",
    provincia_id: 26
  },
  {
    id: 6925,
    cp: 26122,
    name: "Gallinero de Cameros",
    provincia_id: 26
  },
  {
    id: 6926,
    cp: 26122,
    name: "Pradillo",
    provincia_id: 26
  },
  {
    id: 6927,
    cp: 26123,
    name: "Villanueva de Cameros",
    provincia_id: 26
  },
  {
    id: 6928,
    cp: 26124,
    name: "Nieva de Cameros",
    provincia_id: 26
  },
  {
    id: 6929,
    cp: 26124,
    name: "Ortigosa de Cameros",
    provincia_id: 26
  },
  {
    id: 6930,
    cp: 26124,
    name: "El Rasillo de Cameros",
    provincia_id: 26
  },
  {
    id: 6931,
    cp: 26125,
    name: "Villoslada de Cameros",
    provincia_id: 26
  },
  {
    id: 6932,
    cp: 26126,
    name: "Lumbreras",
    provincia_id: 26
  },
  {
    id: 6933,
    cp: 26130,
    name: "Alberite",
    provincia_id: 26
  },
  {
    id: 6934,
    cp: 26130,
    name: "Ribafrecha",
    provincia_id: 26
  },
  {
    id: 6935,
    cp: 26130,
    name: "Clavijo",
    provincia_id: 26
  },
  {
    id: 6936,
    cp: 26131,
    name: "Santa Engracia del Jubera",
    provincia_id: 26
  },
  {
    id: 6937,
    cp: 26131,
    name: "Lagunilla del Jubera",
    provincia_id: 26
  },
  {
    id: 6938,
    cp: 26131,
    name: "Robres del Castillo",
    provincia_id: 26
  },
  {
    id: 6939,
    cp: 26132,
    name: "Terroba",
    provincia_id: 26
  },
  {
    id: 6940,
    cp: 26132,
    name: "Santa Engracia del Jubera",
    provincia_id: 26
  },
  {
    id: 6941,
    cp: 26132,
    name: "Soto en Cameros",
    provincia_id: 26
  },
  {
    id: 6942,
    cp: 26132,
    name: "Leza de Río Leza",
    provincia_id: 26
  },
  {
    id: 6943,
    cp: 26133,
    name: "Rabanera",
    provincia_id: 26
  },
  {
    id: 6944,
    cp: 26133,
    name: "Hornillos de Cameros",
    provincia_id: 26
  },
  {
    id: 6945,
    cp: 26133,
    name: "Ajamil de Cameros",
    provincia_id: 26
  },
  {
    id: 6946,
    cp: 26133,
    name: "San Román de Cameros",
    provincia_id: 26
  },
  {
    id: 6947,
    cp: 26134,
    name: "Muro en Cameros",
    provincia_id: 26
  },
  {
    id: 6948,
    cp: 26134,
    name: "Jalón de Cameros",
    provincia_id: 26
  },
  {
    id: 6949,
    cp: 26134,
    name: "Torre en Cameros",
    provincia_id: 26
  },
  {
    id: 6950,
    cp: 26135,
    name: "Laguna de Cameros",
    provincia_id: 26
  },
  {
    id: 6951,
    cp: 26135,
    name: "Cabezón de Cameros",
    provincia_id: 26
  },
  {
    id: 6952,
    cp: 26140,
    name: "Lardero",
    provincia_id: 26
  },
  {
    id: 6953,
    cp: 26141,
    name: "Alberite",
    provincia_id: 26
  },
  {
    id: 6954,
    cp: 26142,
    name: "Villamediana de Iregua",
    provincia_id: 26
  },
  {
    id: 6955,
    cp: 26143,
    name: "Murillo de Río Leza",
    provincia_id: 26
  },
  {
    id: 6956,
    cp: 26144,
    name: "Ocón",
    provincia_id: 26
  },
  {
    id: 6957,
    cp: 26144,
    name: "Corera",
    provincia_id: 26
  },
  {
    id: 6958,
    cp: 26144,
    name: "Galilea",
    provincia_id: 26
  },
  {
    id: 6959,
    cp: 26145,
    name: "Ocón",
    provincia_id: 26
  },
  {
    id: 6960,
    cp: 26146,
    name: "El Redal",
    provincia_id: 26
  },
  {
    id: 6961,
    cp: 26147,
    name: "Ocón",
    provincia_id: 26
  },
  {
    id: 6962,
    cp: 26148,
    name: "Ocón",
    provincia_id: 26
  },
  {
    id: 6963,
    cp: 26151,
    name: "Arrúbal",
    provincia_id: 26
  },
  {
    id: 6964,
    cp: 26160,
    name: "Agoncillo",
    provincia_id: 26
  },
  {
    id: 6965,
    cp: 26190,
    name: "Nalda",
    provincia_id: 26
  },
  {
    id: 6966,
    cp: 26191,
    name: "Sorzano",
    provincia_id: 26
  },
  {
    id: 6967,
    cp: 26200,
    name: "Nájera",
    provincia_id: 26
  },
  {
    id: 6968,
    cp: 26200,
    name: "Haro",
    provincia_id: 26
  },
  {
    id: 6969,
    cp: 26210,
    name: "Cihuri",
    provincia_id: 26
  },
  {
    id: 6970,
    cp: 26210,
    name: "Anguciana",
    provincia_id: 26
  },
  {
    id: 6971,
    cp: 26210,
    name: "Tirgo",
    provincia_id: 26
  },
  {
    id: 6972,
    cp: 26211,
    name: "Fonzaleche",
    provincia_id: 26
  },
  {
    id: 6973,
    cp: 26211,
    name: "Foncea",
    provincia_id: 26
  },
  {
    id: 6974,
    cp: 26211,
    name: "Tirgo",
    provincia_id: 26
  },
  {
    id: 6975,
    cp: 26212,
    name: "Sajazarra",
    provincia_id: 26
  },
  {
    id: 6976,
    cp: 26212,
    name: "Galbárruli",
    provincia_id: 26
  },
  {
    id: 6977,
    cp: 26212,
    name: "Cellorigo",
    provincia_id: 26
  },
  {
    id: 6978,
    cp: 26212,
    name: "Fonzaleche",
    provincia_id: 26
  },
  {
    id: 6979,
    cp: 26212,
    name: "Miranda de Ebro",
    provincia_id: 9
  },
  {
    id: 6980,
    cp: 26213,
    name: "Leiva",
    provincia_id: 26
  },
  {
    id: 6981,
    cp: 26213,
    name: "Tormantos",
    provincia_id: 26
  },
  {
    id: 6982,
    cp: 26213,
    name: "Herramélluri",
    provincia_id: 26
  },
  {
    id: 6983,
    cp: 26213,
    name: "Ochánduri",
    provincia_id: 26
  },
  {
    id: 6984,
    cp: 26214,
    name: "Cuzcurrita de Río Tirón",
    provincia_id: 26
  },
  {
    id: 6985,
    cp: 26214,
    name: "Rodezno",
    provincia_id: 26
  },
  {
    id: 6986,
    cp: 26215,
    name: "Treviana",
    provincia_id: 26
  },
  {
    id: 6987,
    cp: 26216,
    name: "San Millán de Yécora",
    provincia_id: 26
  },
  {
    id: 6988,
    cp: 26220,
    name: "Ollauri",
    provincia_id: 26
  },
  {
    id: 6989,
    cp: 26221,
    name: "Gimileo",
    provincia_id: 26
  },
  {
    id: 6990,
    cp: 26222,
    name: "Rodezno",
    provincia_id: 26
  },
  {
    id: 6991,
    cp: 26223,
    name: "Hormilleja",
    provincia_id: 26
  },
  {
    id: 6992,
    cp: 26224,
    name: "Torrecilla sobre Alesanco",
    provincia_id: 26
  },
  {
    id: 6993,
    cp: 26230,
    name: "Casalarreina",
    provincia_id: 26
  },
  {
    id: 6994,
    cp: 26240,
    name: "Casta?ares de Rioja",
    provincia_id: 26
  },
  {
    id: 6995,
    cp: 26241,
    name: "Ba?os de Rioja",
    provincia_id: 26
  },
  {
    id: 6996,
    cp: 26250,
    name: "Santo Domingo de la Calzada",
    provincia_id: 26
  },
  {
    id: 6997,
    cp: 26250,
    name: "Arnedo",
    provincia_id: 26
  },
  {
    id: 6998,
    cp: 26256,
    name: "Villalobar de Rioja",
    provincia_id: 26
  },
  {
    id: 6999,
    cp: 26257,
    name: "Hervías",
    provincia_id: 26
  },
  {
    id: 7000,
    cp: 26257,
    name: "Ba?ares",
    provincia_id: 26
  },
  {
    id: 7001,
    cp: 26258,
    name: "Cirue?a",
    provincia_id: 26
  },
  {
    id: 7002,
    cp: 26258,
    name: "Manzanares de Rioja",
    provincia_id: 26
  },
  {
    id: 7003,
    cp: 26259,
    name: "Villarta-Quintana",
    provincia_id: 26
  },
  {
    id: 7004,
    cp: 26259,
    name: "Corporales",
    provincia_id: 26
  },
  {
    id: 7005,
    cp: 26259,
    name: "Gra?ón",
    provincia_id: 26
  },
  {
    id: 7006,
    cp: 26260,
    name: "Santurde de Rioja",
    provincia_id: 26
  },
  {
    id: 7007,
    cp: 26261,
    name: "Pazuengos",
    provincia_id: 26
  },
  {
    id: 7008,
    cp: 26261,
    name: "Santurdejo",
    provincia_id: 26
  },
  {
    id: 7009,
    cp: 26270,
    name: "Ojacastro",
    provincia_id: 26
  },
  {
    id: 7010,
    cp: 26280,
    name: "Ezcaray",
    provincia_id: 26
  },
  {
    id: 7011,
    cp: 26288,
    name: "Zorraquín",
    provincia_id: 26
  },
  {
    id: 7012,
    cp: 26288,
    name: "Valga?ón",
    provincia_id: 26
  },
  {
    id: 7013,
    cp: 26289,
    name: "Ezcaray",
    provincia_id: 26
  },
  {
    id: 7014,
    cp: 26290,
    name: "Bri?as",
    provincia_id: 26
  },
  {
    id: 7015,
    cp: 26291,
    name: "Zarratón",
    provincia_id: 26
  },
  {
    id: 7016,
    cp: 26291,
    name: "San Torcuato",
    provincia_id: 26
  },
  {
    id: 7017,
    cp: 26291,
    name: "Cidamón",
    provincia_id: 26
  },
  {
    id: 7018,
    cp: 26292,
    name: "Villalba de Rioja",
    provincia_id: 26
  },
  {
    id: 7019,
    cp: 26292,
    name: "Haro",
    provincia_id: 26
  },
  {
    id: 7020,
    cp: 26300,
    name: "Nájera",
    provincia_id: 26
  },
  {
    id: 7021,
    cp: 26310,
    name: "Badarán",
    provincia_id: 26
  },
  {
    id: 7022,
    cp: 26311,
    name: "Cárdenas",
    provincia_id: 26
  },
  {
    id: 7023,
    cp: 26311,
    name: "Arenzana de Abajo",
    provincia_id: 26
  },
  {
    id: 7024,
    cp: 26311,
    name: "Camprovín",
    provincia_id: 26
  },
  {
    id: 7025,
    cp: 26311,
    name: "Cordovín",
    provincia_id: 26
  },
  {
    id: 7026,
    cp: 26312,
    name: "Arenzana de Arriba",
    provincia_id: 26
  },
  {
    id: 7027,
    cp: 26312,
    name: "Bezares",
    provincia_id: 26
  },
  {
    id: 7028,
    cp: 26312,
    name: "Tricio",
    provincia_id: 26
  },
  {
    id: 7029,
    cp: 26313,
    name: "Uru?uela",
    provincia_id: 26
  },
  {
    id: 7030,
    cp: 26314,
    name: "Huércanos",
    provincia_id: 26
  },
  {
    id: 7031,
    cp: 26315,
    name: "Manjarrés",
    provincia_id: 26
  },
  {
    id: 7032,
    cp: 26315,
    name: "Castroviejo",
    provincia_id: 26
  },
  {
    id: 7033,
    cp: 26315,
    name: "Santa Coloma",
    provincia_id: 26
  },
  {
    id: 7034,
    cp: 26315,
    name: "Alesón",
    provincia_id: 26
  },
  {
    id: 7035,
    cp: 26320,
    name: "Ba?os de Río Tobía",
    provincia_id: 26
  },
  {
    id: 7036,
    cp: 26321,
    name: "Villaverde de Rioja",
    provincia_id: 26
  },
  {
    id: 7037,
    cp: 26321,
    name: "Ledesma de la Cogolla",
    provincia_id: 26
  },
  {
    id: 7038,
    cp: 26321,
    name: "Matute",
    provincia_id: 26
  },
  {
    id: 7039,
    cp: 26321,
    name: "Tobía",
    provincia_id: 26
  },
  {
    id: 7040,
    cp: 26321,
    name: "Pedroso",
    provincia_id: 26
  },
  {
    id: 7041,
    cp: 26321,
    name: "Bobadilla",
    provincia_id: 26
  },
  {
    id: 7042,
    cp: 26322,
    name: "Brieva de Cameros",
    provincia_id: 26
  },
  {
    id: 7043,
    cp: 26322,
    name: "Anguiano",
    provincia_id: 26
  },
  {
    id: 7044,
    cp: 26323,
    name: "Hormilla",
    provincia_id: 26
  },
  {
    id: 7045,
    cp: 26323,
    name: "Azofra",
    provincia_id: 26
  },
  {
    id: 7046,
    cp: 26324,
    name: "Alesanco",
    provincia_id: 26
  },
  {
    id: 7047,
    cp: 26325,
    name: "Villar de Torre",
    provincia_id: 26
  },
  {
    id: 7048,
    cp: 26325,
    name: "Canillas de Río Tuerto",
    provincia_id: 26
  },
  {
    id: 7049,
    cp: 26325,
    name: "Villarejo",
    provincia_id: 26
  },
  {
    id: 7050,
    cp: 26325,
    name: "Ca?as",
    provincia_id: 26
  },
  {
    id: 7051,
    cp: 26326,
    name: "San Millán de la Cogolla",
    provincia_id: 26
  },
  {
    id: 7052,
    cp: 26327,
    name: "Berceo",
    provincia_id: 26
  },
  {
    id: 7053,
    cp: 26328,
    name: "Estollo",
    provincia_id: 26
  },
  {
    id: 7054,
    cp: 26329,
    name: "Ventrosa",
    provincia_id: 26
  },
  {
    id: 7055,
    cp: 26329,
    name: "Viniegra de Arriba",
    provincia_id: 26
  },
  {
    id: 7056,
    cp: 26329,
    name: "Mansilla de la Sierra",
    provincia_id: 26
  },
  {
    id: 7057,
    cp: 26329,
    name: "Camprovín",
    provincia_id: 26
  },
  {
    id: 7058,
    cp: 26329,
    name: "Villavelayo",
    provincia_id: 26
  },
  {
    id: 7059,
    cp: 26329,
    name: "Viniegra de Abajo",
    provincia_id: 26
  },
  {
    id: 7060,
    cp: 26329,
    name: "Canales de la Sierra",
    provincia_id: 26
  },
  {
    id: 7061,
    cp: 26330,
    name: "Briones",
    provincia_id: 26
  },
  {
    id: 7062,
    cp: 26338,
    name: "San Vicente de la Sonsierra",
    provincia_id: 26
  },
  {
    id: 7063,
    cp: 26339,
    name: "San Vicente de la Sonsierra",
    provincia_id: 26
  },
  {
    id: 7064,
    cp: 26339,
    name: "Ábalos",
    provincia_id: 26
  },
  {
    id: 7065,
    cp: 26340,
    name: "San Asensio",
    provincia_id: 26
  },
  {
    id: 7066,
    cp: 26350,
    name: "Cenicero",
    provincia_id: 26
  },
  {
    id: 7067,
    cp: 26359,
    name: "Torremontalbo",
    provincia_id: 26
  },
  {
    id: 7068,
    cp: 26360,
    name: "Fuenmayor",
    provincia_id: 26
  },
  {
    id: 7069,
    cp: 26370,
    name: "Navarrete",
    provincia_id: 26
  },
  {
    id: 7070,
    cp: 26371,
    name: "Sotés",
    provincia_id: 26
  },
  {
    id: 7071,
    cp: 26371,
    name: "Ventosa",
    provincia_id: 26
  },
  {
    id: 7072,
    cp: 26372,
    name: "Hornos de Moncalvillo",
    provincia_id: 26
  },
  {
    id: 7073,
    cp: 26373,
    name: "Daroca de Rioja",
    provincia_id: 26
  },
  {
    id: 7074,
    cp: 26374,
    name: "Medrano",
    provincia_id: 26
  },
  {
    id: 7075,
    cp: 26375,
    name: "Entrena",
    provincia_id: 26
  },
  {
    id: 7076,
    cp: 26376,
    name: "Sojuela",
    provincia_id: 26
  },
  {
    id: 7077,
    cp: 26500,
    name: "Calahorra",
    provincia_id: 26
  },
  {
    id: 7078,
    cp: 26509,
    name: "Alcanadre",
    provincia_id: 26
  },
  {
    id: 7079,
    cp: 26510,
    name: "Pradejón",
    provincia_id: 26
  },
  {
    id: 7080,
    cp: 26511,
    name: "El Villar de Arnedo",
    provincia_id: 26
  },
  {
    id: 7081,
    cp: 26512,
    name: "Tudelilla",
    provincia_id: 26
  },
  {
    id: 7082,
    cp: 26513,
    name: "Ausejo",
    provincia_id: 26
  },
  {
    id: 7083,
    cp: 26520,
    name: "Cervera del Río Alhama",
    provincia_id: 26
  },
  {
    id: 7084,
    cp: 26525,
    name: "Igea",
    provincia_id: 26
  },
  {
    id: 7085,
    cp: 26526,
    name: "Cornago",
    provincia_id: 26
  },
  {
    id: 7086,
    cp: 26527,
    name: "Cornago",
    provincia_id: 26
  },
  {
    id: 7087,
    cp: 26527,
    name: "Cervera del Río Alhama",
    provincia_id: 26
  },
  {
    id: 7088,
    cp: 26528,
    name: "Cervera del Río Alhama",
    provincia_id: 26
  },
  {
    id: 7089,
    cp: 26529,
    name: "Cervera del Río Alhama",
    provincia_id: 26
  },
  {
    id: 7090,
    cp: 26530,
    name: "Aguilar del Río Alhama",
    provincia_id: 26
  },
  {
    id: 7091,
    cp: 26531,
    name: "Aguilar del Río Alhama",
    provincia_id: 26
  },
  {
    id: 7092,
    cp: 26532,
    name: "Valdemadera",
    provincia_id: 26
  },
  {
    id: 7093,
    cp: 26533,
    name: "Navajún",
    provincia_id: 26
  },
  {
    id: 7094,
    cp: 26540,
    name: "Alfaro",
    provincia_id: 26
  },
  {
    id: 7095,
    cp: 26550,
    name: "Rincón de Soto",
    provincia_id: 26
  },
  {
    id: 7096,
    cp: 26559,
    name: "Aldeanueva de Ebro",
    provincia_id: 26
  },
  {
    id: 7097,
    cp: 26560,
    name: "Autol",
    provincia_id: 26
  },
  {
    id: 7098,
    cp: 26570,
    name: "Quel",
    provincia_id: 26
  },
  {
    id: 7099,
    cp: 26580,
    name: "Arnedo",
    provincia_id: 26
  },
  {
    id: 7100,
    cp: 26584,
    name: "Herce",
    provincia_id: 26
  },
  {
    id: 7101,
    cp: 26585,
    name: "Santa Eulalia Bajera",
    provincia_id: 26
  },
  {
    id: 7102,
    cp: 26585,
    name: "Arnedillo",
    provincia_id: 26
  },
  {
    id: 7103,
    cp: 26586,
    name: "Enciso",
    provincia_id: 26
  },
  {
    id: 7104,
    cp: 26586,
    name: "Zarzosa",
    provincia_id: 26
  },
  {
    id: 7105,
    cp: 26586,
    name: "Munilla",
    provincia_id: 26
  },
  {
    id: 7106,
    cp: 26587,
    name: "Grávalos",
    provincia_id: 26
  },
  {
    id: 7107,
    cp: 26587,
    name: "Muro de Aguas",
    provincia_id: 26
  },
  {
    id: 7108,
    cp: 26587,
    name: "Villarroya",
    provincia_id: 26
  },
  {
    id: 7109,
    cp: 26588,
    name: "Bergasillas Bajera",
    provincia_id: 26
  },
  {
    id: 7110,
    cp: 26588,
    name: "Bergasa",
    provincia_id: 26
  },
  {
    id: 7111,
    cp: 26589,
    name: "Arnedillo",
    provincia_id: 26
  },
  {
    id: 7112,
    cp: 26589,
    name: "Préjano",
    provincia_id: 26
  },
  {
    id: 7113,
    cp: 27001,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7114,
    cp: 27002,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7115,
    cp: 27003,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7116,
    cp: 27004,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7117,
    cp: 27100,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7118,
    cp: 27110,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7119,
    cp: 27111,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7120,
    cp: 27112,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7121,
    cp: 27113,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7122,
    cp: 27113,
    name: "Negueira de Mu?iz",
    provincia_id: 27
  },
  {
    id: 7123,
    cp: 27114,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7124,
    cp: 27115,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7125,
    cp: 27116,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7126,
    cp: 27117,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7127,
    cp: 27118,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7128,
    cp: 27120,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7129,
    cp: 27122,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7130,
    cp: 27123,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7131,
    cp: 27124,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7132,
    cp: 27125,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7133,
    cp: 27126,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7134,
    cp: 27127,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7135,
    cp: 27128,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7136,
    cp: 27129,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7137,
    cp: 27130,
    name: "Baleira",
    provincia_id: 27
  },
  {
    id: 7138,
    cp: 27131,
    name: "Baleira",
    provincia_id: 27
  },
  {
    id: 7139,
    cp: 27132,
    name: "Baleira",
    provincia_id: 27
  },
  {
    id: 7140,
    cp: 27133,
    name: "Baleira",
    provincia_id: 27
  },
  {
    id: 7141,
    cp: 27134,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7142,
    cp: 27135,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7143,
    cp: 27136,
    name: "A Fonsagrada",
    provincia_id: 27
  },
  {
    id: 7144,
    cp: 27140,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7145,
    cp: 27141,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7146,
    cp: 27142,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7147,
    cp: 27143,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7148,
    cp: 27144,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7149,
    cp: 27145,
    name: "O Corgo",
    provincia_id: 27
  },
  {
    id: 7150,
    cp: 27146,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7151,
    cp: 27146,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7152,
    cp: 27150,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7153,
    cp: 27151,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7154,
    cp: 27152,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7155,
    cp: 27152,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7156,
    cp: 27153,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7157,
    cp: 27154,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7158,
    cp: 27155,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7159,
    cp: 27156,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7160,
    cp: 27157,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7161,
    cp: 27160,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7162,
    cp: 27161,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7163,
    cp: 27162,
    name: "O Corgo",
    provincia_id: 27
  },
  {
    id: 7164,
    cp: 27163,
    name: "O Corgo",
    provincia_id: 27
  },
  {
    id: 7165,
    cp: 27164,
    name: "O Corgo",
    provincia_id: 27
  },
  {
    id: 7166,
    cp: 27166,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7167,
    cp: 27168,
    name: "O Corgo",
    provincia_id: 27
  },
  {
    id: 7168,
    cp: 27169,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7169,
    cp: 27170,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7170,
    cp: 27177,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7171,
    cp: 27178,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7172,
    cp: 27179,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7173,
    cp: 27180,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7174,
    cp: 27181,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7175,
    cp: 27181,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7176,
    cp: 27182,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7177,
    cp: 27183,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7178,
    cp: 27184,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7179,
    cp: 27185,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7180,
    cp: 27185,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7181,
    cp: 27186,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7182,
    cp: 27187,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7183,
    cp: 27188,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7184,
    cp: 27188,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7185,
    cp: 27190,
    name: "O Corgo",
    provincia_id: 27
  },
  {
    id: 7186,
    cp: 27190,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7187,
    cp: 27191,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7188,
    cp: 27192,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7189,
    cp: 27200,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7190,
    cp: 27203,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7191,
    cp: 27204,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7192,
    cp: 27205,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7193,
    cp: 27206,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7194,
    cp: 27207,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7195,
    cp: 27208,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7196,
    cp: 27209,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7197,
    cp: 27210,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7198,
    cp: 27210,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7199,
    cp: 27211,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7200,
    cp: 27212,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7201,
    cp: 27213,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7202,
    cp: 27214,
    name: "Portomarín",
    provincia_id: 27
  },
  {
    id: 7203,
    cp: 27215,
    name: "Monterroso",
    provincia_id: 27
  },
  {
    id: 7204,
    cp: 27216,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7205,
    cp: 27217,
    name: "Palas de Rei",
    provincia_id: 27
  },
  {
    id: 7206,
    cp: 27220,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7207,
    cp: 27220,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7208,
    cp: 27226,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7209,
    cp: 27227,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7210,
    cp: 27228,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7211,
    cp: 27229,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7212,
    cp: 27230,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7213,
    cp: 27231,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7214,
    cp: 27232,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7215,
    cp: 27233,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7216,
    cp: 27233,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7217,
    cp: 27234,
    name: "Guntín",
    provincia_id: 27
  },
  {
    id: 7218,
    cp: 27235,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7219,
    cp: 27240,
    name: "Meira",
    provincia_id: 27
  },
  {
    id: 7220,
    cp: 27241,
    name: "Meira",
    provincia_id: 27
  },
  {
    id: 7221,
    cp: 27243,
    name: "Ribeira de Piquín",
    provincia_id: 27
  },
  {
    id: 7222,
    cp: 27244,
    name: "Ribeira de Piquín",
    provincia_id: 27
  },
  {
    id: 7223,
    cp: 27245,
    name: "Ribeira de Piquín",
    provincia_id: 27
  },
  {
    id: 7224,
    cp: 27246,
    name: "A Pastoriza",
    provincia_id: 27
  },
  {
    id: 7225,
    cp: 27247,
    name: "Meira",
    provincia_id: 27
  },
  {
    id: 7226,
    cp: 27247,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7227,
    cp: 27248,
    name: "A Pastoriza",
    provincia_id: 27
  },
  {
    id: 7228,
    cp: 27250,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7229,
    cp: 27256,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7230,
    cp: 27257,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7231,
    cp: 27258,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7232,
    cp: 27259,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7233,
    cp: 27260,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7234,
    cp: 27266,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7235,
    cp: 27267,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7236,
    cp: 27268,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7237,
    cp: 27269,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7238,
    cp: 27270,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7239,
    cp: 27271,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7240,
    cp: 27272,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7241,
    cp: 27273,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7242,
    cp: 27274,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7243,
    cp: 27275,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7244,
    cp: 27276,
    name: "Baleira",
    provincia_id: 27
  },
  {
    id: 7245,
    cp: 27277,
    name: "Baleira",
    provincia_id: 27
  },
  {
    id: 7246,
    cp: 27278,
    name: "Baleira",
    provincia_id: 27
  },
  {
    id: 7247,
    cp: 27279,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7248,
    cp: 27280,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7249,
    cp: 27283,
    name: "Pol",
    provincia_id: 27
  },
  {
    id: 7250,
    cp: 27286,
    name: "A Pastoriza",
    provincia_id: 27
  },
  {
    id: 7251,
    cp: 27287,
    name: "A Pastoriza",
    provincia_id: 27
  },
  {
    id: 7252,
    cp: 27289,
    name: "Castro de Rei",
    provincia_id: 27
  },
  {
    id: 7253,
    cp: 27289,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7254,
    cp: 27290,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7255,
    cp: 27293,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7256,
    cp: 27293,
    name: "Castroverde",
    provincia_id: 27
  },
  {
    id: 7257,
    cp: 27294,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7258,
    cp: 27296,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7259,
    cp: 27297,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7260,
    cp: 27298,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7261,
    cp: 27299,
    name: "Friol",
    provincia_id: 27
  },
  {
    id: 7262,
    cp: 27299,
    name: "Lugo",
    provincia_id: 27
  },
  {
    id: 7263,
    cp: 27300,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7264,
    cp: 27305,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7265,
    cp: 27306,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7266,
    cp: 27307,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7267,
    cp: 27308,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7268,
    cp: 27309,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7269,
    cp: 27310,
    name: "Ribas de Sil",
    provincia_id: 27
  },
  {
    id: 7270,
    cp: 27317,
    name: "Ribas de Sil",
    provincia_id: 27
  },
  {
    id: 7271,
    cp: 27318,
    name: "Ribas de Sil",
    provincia_id: 27
  },
  {
    id: 7272,
    cp: 27320,
    name: "Quiroga",
    provincia_id: 27
  },
  {
    id: 7273,
    cp: 27324,
    name: "Folgoso do Courel",
    provincia_id: 27
  },
  {
    id: 7274,
    cp: 27325,
    name: "Folgoso do Courel",
    provincia_id: 27
  },
  {
    id: 7275,
    cp: 27326,
    name: "Folgoso do Courel",
    provincia_id: 27
  },
  {
    id: 7276,
    cp: 27327,
    name: "Folgoso do Courel",
    provincia_id: 27
  },
  {
    id: 7277,
    cp: 27328,
    name: "Folgoso do Courel",
    provincia_id: 27
  },
  {
    id: 7278,
    cp: 27328,
    name: "Quiroga",
    provincia_id: 27
  },
  {
    id: 7279,
    cp: 27329,
    name: "Quiroga",
    provincia_id: 27
  },
  {
    id: 7280,
    cp: 27330,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7281,
    cp: 27331,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7282,
    cp: 27332,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7283,
    cp: 27333,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7284,
    cp: 27334,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7285,
    cp: 27335,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7286,
    cp: 27336,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7287,
    cp: 27338,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7288,
    cp: 27339,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7289,
    cp: 27339,
    name: "Folgoso do Courel",
    provincia_id: 27
  },
  {
    id: 7290,
    cp: 27340,
    name: "Bóveda",
    provincia_id: 27
  },
  {
    id: 7291,
    cp: 27341,
    name: "O Incio",
    provincia_id: 27
  },
  {
    id: 7292,
    cp: 27342,
    name: "O Incio",
    provincia_id: 27
  },
  {
    id: 7293,
    cp: 27343,
    name: "Bóveda",
    provincia_id: 27
  },
  {
    id: 7294,
    cp: 27344,
    name: "Bóveda",
    provincia_id: 27
  },
  {
    id: 7295,
    cp: 27345,
    name: "O Incio",
    provincia_id: 27
  },
  {
    id: 7296,
    cp: 27346,
    name: "O Incio",
    provincia_id: 27
  },
  {
    id: 7297,
    cp: 27347,
    name: "O Incio",
    provincia_id: 27
  },
  {
    id: 7298,
    cp: 27347,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7299,
    cp: 27348,
    name: "O Incio",
    provincia_id: 27
  },
  {
    id: 7300,
    cp: 27349,
    name: "Bóveda",
    provincia_id: 27
  },
  {
    id: 7301,
    cp: 27350,
    name: "Bóveda",
    provincia_id: 27
  },
  {
    id: 7302,
    cp: 27359,
    name: "Bóveda",
    provincia_id: 27
  },
  {
    id: 7303,
    cp: 27360,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7304,
    cp: 27362,
    name: "O Páramo",
    provincia_id: 27
  },
  {
    id: 7305,
    cp: 27363,
    name: "O Páramo",
    provincia_id: 27
  },
  {
    id: 7306,
    cp: 27364,
    name: "O Páramo",
    provincia_id: 27
  },
  {
    id: 7307,
    cp: 27366,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7308,
    cp: 27367,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7309,
    cp: 27368,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7310,
    cp: 27369,
    name: "O Páramo",
    provincia_id: 27
  },
  {
    id: 7311,
    cp: 27369,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7312,
    cp: 27370,
    name: "Begonte",
    provincia_id: 27
  },
  {
    id: 7313,
    cp: 27370,
    name: "Rábade",
    provincia_id: 27
  },
  {
    id: 7314,
    cp: 27372,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7315,
    cp: 27372,
    name: "Begonte",
    provincia_id: 27
  },
  {
    id: 7316,
    cp: 27373,
    name: "Begonte",
    provincia_id: 27
  },
  {
    id: 7317,
    cp: 27373,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7318,
    cp: 27374,
    name: "Outeiro de Rei",
    provincia_id: 27
  },
  {
    id: 7319,
    cp: 27375,
    name: "Begonte",
    provincia_id: 27
  },
  {
    id: 7320,
    cp: 27375,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7321,
    cp: 27375,
    name: "Cospeito",
    provincia_id: 27
  },
  {
    id: 7322,
    cp: 27376,
    name: "Cospeito",
    provincia_id: 27
  },
  {
    id: 7323,
    cp: 27377,
    name: "Cospeito",
    provincia_id: 27
  },
  {
    id: 7324,
    cp: 27378,
    name: "Cospeito",
    provincia_id: 27
  },
  {
    id: 7325,
    cp: 27379,
    name: "Cospeito",
    provincia_id: 27
  },
  {
    id: 7326,
    cp: 27380,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7327,
    cp: 27388,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7328,
    cp: 27389,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7329,
    cp: 27390,
    name: "Quiroga",
    provincia_id: 27
  },
  {
    id: 7330,
    cp: 27391,
    name: "Quiroga",
    provincia_id: 27
  },
  {
    id: 7331,
    cp: 27391,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7332,
    cp: 27392,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7333,
    cp: 27400,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7334,
    cp: 27400,
    name: "Guitiriz",
    provincia_id: 27
  },
  {
    id: 7335,
    cp: 27410,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7336,
    cp: 27411,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7337,
    cp: 27412,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7338,
    cp: 27413,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7339,
    cp: 27413,
    name: "A Pobra do Brollón",
    provincia_id: 27
  },
  {
    id: 7340,
    cp: 27414,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7341,
    cp: 27415,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7342,
    cp: 27416,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7343,
    cp: 27417,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7344,
    cp: 27418,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7345,
    cp: 27419,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7346,
    cp: 27419,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7347,
    cp: 27420,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7348,
    cp: 27421,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7349,
    cp: 27422,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7350,
    cp: 27423,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7351,
    cp: 27424,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7352,
    cp: 27425,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7353,
    cp: 27430,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7354,
    cp: 27437,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7355,
    cp: 27438,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7356,
    cp: 27439,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7357,
    cp: 27440,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7358,
    cp: 27450,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7359,
    cp: 27460,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7360,
    cp: 27466,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7361,
    cp: 27468,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7362,
    cp: 27469,
    name: "Sober",
    provincia_id: 27
  },
  {
    id: 7363,
    cp: 27470,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7364,
    cp: 27500,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7365,
    cp: 27510,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7366,
    cp: 27511,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7367,
    cp: 27512,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7368,
    cp: 27513,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7369,
    cp: 27514,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7370,
    cp: 27515,
    name: "Monterroso",
    provincia_id: 27
  },
  {
    id: 7371,
    cp: 27515,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7372,
    cp: 27516,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7373,
    cp: 27517,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7374,
    cp: 27518,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7375,
    cp: 27519,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7376,
    cp: 27520,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7377,
    cp: 27527,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7378,
    cp: 27528,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7379,
    cp: 27529,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7380,
    cp: 27530,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7381,
    cp: 27531,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7382,
    cp: 27532,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7383,
    cp: 27532,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7384,
    cp: 27533,
    name: "Carballedo",
    provincia_id: 27
  },
  {
    id: 7385,
    cp: 27533,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7386,
    cp: 27540,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7387,
    cp: 27543,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7388,
    cp: 27544,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7389,
    cp: 27545,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7390,
    cp: 27546,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7391,
    cp: 27547,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7392,
    cp: 27548,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7393,
    cp: 27549,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7394,
    cp: 27549,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7395,
    cp: 27550,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7396,
    cp: 27554,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7397,
    cp: 27555,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7398,
    cp: 27556,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7399,
    cp: 27557,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7400,
    cp: 27558,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7401,
    cp: 27559,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7402,
    cp: 27560,
    name: "Monterroso",
    provincia_id: 27
  },
  {
    id: 7403,
    cp: 27568,
    name: "Monterroso",
    provincia_id: 27
  },
  {
    id: 7404,
    cp: 27569,
    name: "Monterroso",
    provincia_id: 27
  },
  {
    id: 7405,
    cp: 27570,
    name: "Antas de Ulla",
    provincia_id: 27
  },
  {
    id: 7406,
    cp: 27576,
    name: "Antas de Ulla",
    provincia_id: 27
  },
  {
    id: 7407,
    cp: 27577,
    name: "Antas de Ulla",
    provincia_id: 27
  },
  {
    id: 7408,
    cp: 27578,
    name: "Antas de Ulla",
    provincia_id: 27
  },
  {
    id: 7409,
    cp: 27579,
    name: "Antas de Ulla",
    provincia_id: 27
  },
  {
    id: 7410,
    cp: 27590,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7411,
    cp: 27591,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7412,
    cp: 27592,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7413,
    cp: 27592,
    name: "Monforte de Lemos",
    provincia_id: 27
  },
  {
    id: 7414,
    cp: 27593,
    name: "Pantón",
    provincia_id: 27
  },
  {
    id: 7415,
    cp: 27594,
    name: "O Savi?ao",
    provincia_id: 27
  },
  {
    id: 7416,
    cp: 27595,
    name: "Chantada",
    provincia_id: 27
  },
  {
    id: 7417,
    cp: 27596,
    name: "Taboada",
    provincia_id: 27
  },
  {
    id: 7418,
    cp: 27600,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7419,
    cp: 27610,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7420,
    cp: 27611,
    name: "Paradela",
    provincia_id: 27
  },
  {
    id: 7421,
    cp: 27612,
    name: "Paradela",
    provincia_id: 27
  },
  {
    id: 7422,
    cp: 27612,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7423,
    cp: 27613,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7424,
    cp: 27614,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7425,
    cp: 27614,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7426,
    cp: 27615,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7427,
    cp: 27615,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7428,
    cp: 27616,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7429,
    cp: 27617,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7430,
    cp: 27618,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7431,
    cp: 27619,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7432,
    cp: 27620,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7433,
    cp: 27623,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7434,
    cp: 27624,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7435,
    cp: 27625,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7436,
    cp: 27626,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7437,
    cp: 27627,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7438,
    cp: 27628,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7439,
    cp: 27630,
    name: "Triacastela",
    provincia_id: 27
  },
  {
    id: 7440,
    cp: 27631,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7441,
    cp: 27631,
    name: "Triacastela",
    provincia_id: 27
  },
  {
    id: 7442,
    cp: 27632,
    name: "Triacastela",
    provincia_id: 27
  },
  {
    id: 7443,
    cp: 27633,
    name: "O Páramo",
    provincia_id: 27
  },
  {
    id: 7444,
    cp: 27633,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7445,
    cp: 27634,
    name: "Triacastela",
    provincia_id: 27
  },
  {
    id: 7446,
    cp: 27635,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7447,
    cp: 27636,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7448,
    cp: 27637,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7449,
    cp: 27638,
    name: "Samos",
    provincia_id: 27
  },
  {
    id: 7450,
    cp: 27639,
    name: "Triacastela",
    provincia_id: 27
  },
  {
    id: 7451,
    cp: 27640,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7452,
    cp: 27646,
    name: "As Nogais",
    provincia_id: 27
  },
  {
    id: 7453,
    cp: 27647,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7454,
    cp: 27648,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7455,
    cp: 27649,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7456,
    cp: 27650,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7457,
    cp: 27650,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7458,
    cp: 27651,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7459,
    cp: 27652,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7460,
    cp: 27653,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7461,
    cp: 27654,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7462,
    cp: 27655,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7463,
    cp: 27656,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7464,
    cp: 27657,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7465,
    cp: 27658,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7466,
    cp: 27659,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7467,
    cp: 27659,
    name: "Navia de Suarna",
    provincia_id: 27
  },
  {
    id: 7468,
    cp: 27660,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7469,
    cp: 27661,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7470,
    cp: 27661,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7471,
    cp: 27662,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7472,
    cp: 27663,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7473,
    cp: 27664,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7474,
    cp: 27664,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7475,
    cp: 27665,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7476,
    cp: 27666,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7477,
    cp: 27667,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7478,
    cp: 27668,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7479,
    cp: 27670,
    name: "Pedrafita do Cebreiro",
    provincia_id: 27
  },
  {
    id: 7480,
    cp: 27671,
    name: "Pedrafita do Cebreiro",
    provincia_id: 27
  },
  {
    id: 7481,
    cp: 27672,
    name: "Pedrafita do Cebreiro",
    provincia_id: 27
  },
  {
    id: 7482,
    cp: 27673,
    name: "Pedrafita do Cebreiro",
    provincia_id: 27
  },
  {
    id: 7483,
    cp: 27675,
    name: "As Nogais",
    provincia_id: 27
  },
  {
    id: 7484,
    cp: 27676,
    name: "As Nogais",
    provincia_id: 27
  },
  {
    id: 7485,
    cp: 27677,
    name: "Cervantes",
    provincia_id: 27
  },
  {
    id: 7486,
    cp: 27677,
    name: "As Nogais",
    provincia_id: 27
  },
  {
    id: 7487,
    cp: 27677,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7488,
    cp: 27678,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7489,
    cp: 27679,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7490,
    cp: 27680,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7491,
    cp: 27685,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7492,
    cp: 27686,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7493,
    cp: 27687,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7494,
    cp: 27688,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7495,
    cp: 27689,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7496,
    cp: 27690,
    name: "Sarria",
    provincia_id: 27
  },
  {
    id: 7497,
    cp: 27691,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7498,
    cp: 27692,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7499,
    cp: 27693,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7500,
    cp: 27694,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7501,
    cp: 27695,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7502,
    cp: 27695,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7503,
    cp: 27696,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7504,
    cp: 27697,
    name: "Baralla",
    provincia_id: 27
  },
  {
    id: 7505,
    cp: 27698,
    name: "Becerreá",
    provincia_id: 27
  },
  {
    id: 7506,
    cp: 27699,
    name: "Láncara",
    provincia_id: 27
  },
  {
    id: 7507,
    cp: 27700,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7508,
    cp: 27700,
    name: "O Valadouro",
    provincia_id: 27
  },
  {
    id: 7509,
    cp: 27710,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7510,
    cp: 27711,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7511,
    cp: 27712,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7512,
    cp: 27713,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7513,
    cp: 27714,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7514,
    cp: 27715,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7515,
    cp: 27720,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7516,
    cp: 27721,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7517,
    cp: 27722,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7518,
    cp: 27723,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7519,
    cp: 27724,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7520,
    cp: 27725,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7521,
    cp: 27726,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7522,
    cp: 27727,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7523,
    cp: 27728,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7524,
    cp: 27729,
    name: "A Pontenova",
    provincia_id: 27
  },
  {
    id: 7525,
    cp: 27730,
    name: "Abadín",
    provincia_id: 27
  },
  {
    id: 7526,
    cp: 27737,
    name: "Abadín",
    provincia_id: 27
  },
  {
    id: 7527,
    cp: 27738,
    name: "Abadín",
    provincia_id: 27
  },
  {
    id: 7528,
    cp: 27740,
    name: "Mondo?edo",
    provincia_id: 27
  },
  {
    id: 7529,
    cp: 27742,
    name: "Mondo?edo",
    provincia_id: 27
  },
  {
    id: 7530,
    cp: 27743,
    name: "Riotorto",
    provincia_id: 27
  },
  {
    id: 7531,
    cp: 27744,
    name: "Riotorto",
    provincia_id: 27
  },
  {
    id: 7532,
    cp: 27745,
    name: "Riotorto",
    provincia_id: 27
  },
  {
    id: 7533,
    cp: 27747,
    name: "Mondo?edo",
    provincia_id: 27
  },
  {
    id: 7534,
    cp: 27748,
    name: "Mondo?edo",
    provincia_id: 27
  },
  {
    id: 7535,
    cp: 27749,
    name: "Mondo?edo",
    provincia_id: 27
  },
  {
    id: 7536,
    cp: 27750,
    name: "Lourenzá",
    provincia_id: 27
  },
  {
    id: 7537,
    cp: 27751,
    name: "Lourenzá",
    provincia_id: 27
  },
  {
    id: 7538,
    cp: 27752,
    name: "Mondo?edo",
    provincia_id: 27
  },
  {
    id: 7539,
    cp: 27760,
    name: "Lourenzá",
    provincia_id: 27
  },
  {
    id: 7540,
    cp: 27765,
    name: "Trabada",
    provincia_id: 27
  },
  {
    id: 7541,
    cp: 27766,
    name: "Trabada",
    provincia_id: 27
  },
  {
    id: 7542,
    cp: 27767,
    name: "Trabada",
    provincia_id: 27
  },
  {
    id: 7543,
    cp: 27768,
    name: "Trabada",
    provincia_id: 27
  },
  {
    id: 7544,
    cp: 27770,
    name: "O Valadouro",
    provincia_id: 27
  },
  {
    id: 7545,
    cp: 27773,
    name: "Alfoz",
    provincia_id: 27
  },
  {
    id: 7546,
    cp: 27774,
    name: "Alfoz",
    provincia_id: 27
  },
  {
    id: 7547,
    cp: 27775,
    name: "Alfoz",
    provincia_id: 27
  },
  {
    id: 7548,
    cp: 27776,
    name: "Alfoz",
    provincia_id: 27
  },
  {
    id: 7549,
    cp: 27777,
    name: "O Valadouro",
    provincia_id: 27
  },
  {
    id: 7550,
    cp: 27778,
    name: "Alfoz",
    provincia_id: 27
  },
  {
    id: 7551,
    cp: 27778,
    name: "O Valadouro",
    provincia_id: 27
  },
  {
    id: 7552,
    cp: 27779,
    name: "O Valadouro",
    provincia_id: 27
  },
  {
    id: 7553,
    cp: 27780,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7554,
    cp: 27785,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7555,
    cp: 27786,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7556,
    cp: 27787,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7557,
    cp: 27788,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7558,
    cp: 27789,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7559,
    cp: 27790,
    name: "Barreiros",
    provincia_id: 27
  },
  {
    id: 7560,
    cp: 27791,
    name: "Mondo?edo",
    provincia_id: 27
  },
  {
    id: 7561,
    cp: 27792,
    name: "Barreiros",
    provincia_id: 27
  },
  {
    id: 7562,
    cp: 27793,
    name: "Barreiros",
    provincia_id: 27
  },
  {
    id: 7563,
    cp: 27794,
    name: "Barreiros",
    provincia_id: 27
  },
  {
    id: 7564,
    cp: 27796,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7565,
    cp: 27797,
    name: "Ribadeo",
    provincia_id: 27
  },
  {
    id: 7566,
    cp: 27798,
    name: "Barreiros",
    provincia_id: 27
  },
  {
    id: 7567,
    cp: 27800,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7568,
    cp: 27810,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7569,
    cp: 27811,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7570,
    cp: 27812,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7571,
    cp: 27813,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7572,
    cp: 27814,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7573,
    cp: 27815,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7574,
    cp: 27816,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7575,
    cp: 27817,
    name: "Muras",
    provincia_id: 27
  },
  {
    id: 7576,
    cp: 27818,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7577,
    cp: 27820,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7578,
    cp: 27821,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7579,
    cp: 27822,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7580,
    cp: 27823,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7581,
    cp: 27824,
    name: "Xermade",
    provincia_id: 27
  },
  {
    id: 7582,
    cp: 27825,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7583,
    cp: 27826,
    name: "Xermade",
    provincia_id: 27
  },
  {
    id: 7584,
    cp: 27830,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7585,
    cp: 27832,
    name: "Xermade",
    provincia_id: 27
  },
  {
    id: 7586,
    cp: 27833,
    name: "Xermade",
    provincia_id: 27
  },
  {
    id: 7587,
    cp: 27834,
    name: "Xermade",
    provincia_id: 27
  },
  {
    id: 7588,
    cp: 27835,
    name: "Xermade",
    provincia_id: 27
  },
  {
    id: 7589,
    cp: 27836,
    name: "Muras",
    provincia_id: 27
  },
  {
    id: 7590,
    cp: 27837,
    name: "Muras",
    provincia_id: 27
  },
  {
    id: 7591,
    cp: 27840,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7592,
    cp: 27841,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7593,
    cp: 27842,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7594,
    cp: 27843,
    name: "Vilalba",
    provincia_id: 27
  },
  {
    id: 7595,
    cp: 27843,
    name: "Abadín",
    provincia_id: 27
  },
  {
    id: 7596,
    cp: 27845,
    name: "Abadín",
    provincia_id: 27
  },
  {
    id: 7597,
    cp: 27849,
    name: "Abadín",
    provincia_id: 27
  },
  {
    id: 7598,
    cp: 27850,
    name: "Viveiro",
    provincia_id: 27
  },
  {
    id: 7599,
    cp: 27860,
    name: "O Vicedo",
    provincia_id: 27
  },
  {
    id: 7600,
    cp: 27861,
    name: "Viveiro",
    provincia_id: 27
  },
  {
    id: 7601,
    cp: 27861,
    name: "O Vicedo",
    provincia_id: 27
  },
  {
    id: 7602,
    cp: 27863,
    name: "Viveiro",
    provincia_id: 27
  },
  {
    id: 7603,
    cp: 27864,
    name: "Viveiro",
    provincia_id: 27
  },
  {
    id: 7604,
    cp: 27865,
    name: "Muras",
    provincia_id: 27
  },
  {
    id: 7605,
    cp: 27865,
    name: "Ourol",
    provincia_id: 27
  },
  {
    id: 7606,
    cp: 27866,
    name: "Viveiro",
    provincia_id: 27
  },
  {
    id: 7607,
    cp: 27866,
    name: "Ourol",
    provincia_id: 27
  },
  {
    id: 7608,
    cp: 27867,
    name: "Viveiro",
    provincia_id: 27
  },
  {
    id: 7609,
    cp: 27867,
    name: "Ourol",
    provincia_id: 27
  },
  {
    id: 7610,
    cp: 27868,
    name: "O Vicedo",
    provincia_id: 27
  },
  {
    id: 7611,
    cp: 27869,
    name: "Viveiro",
    provincia_id: 27
  },
  {
    id: 7612,
    cp: 27870,
    name: "Xove",
    provincia_id: 27
  },
  {
    id: 7613,
    cp: 27876,
    name: "Xove",
    provincia_id: 27
  },
  {
    id: 7614,
    cp: 27877,
    name: "Xove",
    provincia_id: 27
  },
  {
    id: 7615,
    cp: 27878,
    name: "Xove",
    provincia_id: 27
  },
  {
    id: 7616,
    cp: 27879,
    name: "Xove",
    provincia_id: 27
  },
  {
    id: 7617,
    cp: 27880,
    name: "Burela",
    provincia_id: 27
  },
  {
    id: 7618,
    cp: 27888,
    name: "Cervo",
    provincia_id: 27
  },
  {
    id: 7619,
    cp: 27889,
    name: "Cervo",
    provincia_id: 27
  },
  {
    id: 7620,
    cp: 27890,
    name: "Cervo",
    provincia_id: 27
  },
  {
    id: 7621,
    cp: 27891,
    name: "Cervo",
    provincia_id: 27
  },
  {
    id: 7622,
    cp: 27892,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7623,
    cp: 27893,
    name: "Foz",
    provincia_id: 27
  },
  {
    id: 7624,
    cp: 28000,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7625,
    cp: 28001,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7626,
    cp: 28002,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7627,
    cp: 28003,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7628,
    cp: 28004,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7629,
    cp: 28005,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7630,
    cp: 28006,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7631,
    cp: 28007,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7632,
    cp: 28008,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7633,
    cp: 28009,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7634,
    cp: 28010,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7635,
    cp: 28011,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7636,
    cp: 28012,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7637,
    cp: 28013,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7638,
    cp: 28014,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7639,
    cp: 28015,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7640,
    cp: 28016,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7641,
    cp: 28017,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7642,
    cp: 28018,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7643,
    cp: 28019,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7644,
    cp: 28020,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7645,
    cp: 28021,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7646,
    cp: 28022,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7647,
    cp: 28023,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7648,
    cp: 28024,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7649,
    cp: 28025,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7650,
    cp: 28026,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7651,
    cp: 28027,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7652,
    cp: 28028,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7653,
    cp: 28029,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7654,
    cp: 28030,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7655,
    cp: 28031,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7656,
    cp: 28032,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7657,
    cp: 28033,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7658,
    cp: 28034,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7659,
    cp: 28035,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7660,
    cp: 28036,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7661,
    cp: 28037,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7662,
    cp: 28038,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7663,
    cp: 28039,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7664,
    cp: 28040,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7665,
    cp: 28041,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7666,
    cp: 28042,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7667,
    cp: 28043,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7668,
    cp: 28044,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7669,
    cp: 28045,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7670,
    cp: 28046,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7671,
    cp: 28047,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7672,
    cp: 28048,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7673,
    cp: 28049,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7674,
    cp: 28050,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7675,
    cp: 28051,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7676,
    cp: 28052,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7677,
    cp: 28053,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7678,
    cp: 28054,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7679,
    cp: 28055,
    name: "Madrid",
    provincia_id: 28
  },
  {
    id: 7680,
    cp: 28100,
    name: "Alcobendas",
    provincia_id: 28
  },
  {
    id: 7681,
    cp: 28108,
    name: "Alcobendas",
    provincia_id: 28
  },
  {
    id: 7682,
    cp: 28109,
    name: "Alcobendas",
    provincia_id: 28
  },
  {
    id: 7683,
    cp: 28110,
    name: "Algete",
    provincia_id: 28
  },
  {
    id: 7684,
    cp: 28120,
    name: "Colmenar Viejo",
    provincia_id: 28
  },
  {
    id: 7685,
    cp: 28120,
    name: "Algete",
    provincia_id: 28
  },
  {
    id: 7686,
    cp: 28130,
    name: "Valdeolmos-Alalpardo",
    provincia_id: 28
  },
  {
    id: 7687,
    cp: 28140,
    name: "Fuente el Saz de Jarama",
    provincia_id: 28
  },
  {
    id: 7688,
    cp: 28150,
    name: "Valdetorres de Jarama",
    provincia_id: 28
  },
  {
    id: 7689,
    cp: 28160,
    name: "Talamanca de Jarama",
    provincia_id: 28
  },
  {
    id: 7690,
    cp: 28170,
    name: "Valdepiélagos",
    provincia_id: 28
  },
  {
    id: 7691,
    cp: 28180,
    name: "Torrelaguna",
    provincia_id: 28
  },
  {
    id: 7692,
    cp: 28189,
    name: "Torremocha de Jarama",
    provincia_id: 28
  },
  {
    id: 7693,
    cp: 28189,
    name: "Patones",
    provincia_id: 28
  },
  {
    id: 7694,
    cp: 28189,
    name: "El Atazar",
    provincia_id: 28
  },
  {
    id: 7695,
    cp: 28190,
    name: "Montejo de la Sierra",
    provincia_id: 28
  },
  {
    id: 7696,
    cp: 28190,
    name: "El Cardoso de la Sierra",
    provincia_id: 19
  },
  {
    id: 7697,
    cp: 28190,
    name: "Puebla de la Sierra",
    provincia_id: 28
  },
  {
    id: 7698,
    cp: 28191,
    name: "Prádena del Rincón",
    provincia_id: 28
  },
  {
    id: 7699,
    cp: 28191,
    name: "Horcajuelo de la Sierra",
    provincia_id: 28
  },
  {
    id: 7700,
    cp: 28191,
    name: "La Hiruela",
    provincia_id: 28
  },
  {
    id: 7701,
    cp: 28192,
    name: "El Berrueco",
    provincia_id: 28
  },
  {
    id: 7702,
    cp: 28193,
    name: "Cervera de Buitrago",
    provincia_id: 28
  },
  {
    id: 7703,
    cp: 28194,
    name: "Robledillo de la Jara",
    provincia_id: 28
  },
  {
    id: 7704,
    cp: 28194,
    name: "Berzosa del Lozoya",
    provincia_id: 28
  },
  {
    id: 7705,
    cp: 28195,
    name: "Puentes Viejas",
    provincia_id: 28
  },
  {
    id: 7706,
    cp: 28196,
    name: "Puentes Viejas",
    provincia_id: 28
  },
  {
    id: 7707,
    cp: 28200,
    name: "San Lorenzo de El Escorial",
    provincia_id: 28
  },
  {
    id: 7708,
    cp: 28210,
    name: "Navalagamella",
    provincia_id: 28
  },
  {
    id: 7709,
    cp: 28210,
    name: "Valdemorillo",
    provincia_id: 28
  },
  {
    id: 7710,
    cp: 28211,
    name: "El Escorial",
    provincia_id: 28
  },
  {
    id: 7711,
    cp: 28212,
    name: "El Escorial",
    provincia_id: 28
  },
  {
    id: 7712,
    cp: 28212,
    name: "Navalagamella",
    provincia_id: 28
  },
  {
    id: 7713,
    cp: 28213,
    name: "Colmenar del Arroyo",
    provincia_id: 28
  },
  {
    id: 7714,
    cp: 28214,
    name: "Fresnedillas de la Oliva",
    provincia_id: 28
  },
  {
    id: 7715,
    cp: 28219,
    name: "El Escorial",
    provincia_id: 28
  },
  {
    id: 7716,
    cp: 28220,
    name: "Majadahonda",
    provincia_id: 28
  },
  {
    id: 7717,
    cp: 28221,
    name: "Majadahonda",
    provincia_id: 28
  },
  {
    id: 7718,
    cp: 28222,
    name: "Majadahonda",
    provincia_id: 28
  },
  {
    id: 7719,
    cp: 28223,
    name: "Pozuelo de Alarcón",
    provincia_id: 28
  },
  {
    id: 7720,
    cp: 28224,
    name: "Pozuelo de Alarcón",
    provincia_id: 28
  },
  {
    id: 7721,
    cp: 28229,
    name: "Villanueva del Pardillo",
    provincia_id: 28
  },
  {
    id: 7722,
    cp: 28231,
    name: "Las Rozas de Madrid",
    provincia_id: 28
  },
  {
    id: 7723,
    cp: 28232,
    name: "Las Rozas de Madrid",
    provincia_id: 28
  },
  {
    id: 7724,
    cp: 28240,
    name: "Hoyo de Manzanares",
    provincia_id: 28
  },
  {
    id: 7725,
    cp: 28248,
    name: "Hoyo de Manzanares",
    provincia_id: 28
  },
  {
    id: 7726,
    cp: 28250,
    name: "Galapagar",
    provincia_id: 28
  },
  {
    id: 7727,
    cp: 28250,
    name: "Torrelodones",
    provincia_id: 28
  },
  {
    id: 7728,
    cp: 28260,
    name: "Galapagar",
    provincia_id: 28
  },
  {
    id: 7729,
    cp: 28270,
    name: "Galapagar",
    provincia_id: 28
  },
  {
    id: 7730,
    cp: 28270,
    name: "Colmenarejo",
    provincia_id: 28
  },
  {
    id: 7731,
    cp: 28279,
    name: "Colmenarejo",
    provincia_id: 28
  },
  {
    id: 7732,
    cp: 28280,
    name: "El Escorial",
    provincia_id: 28
  },
  {
    id: 7733,
    cp: 28290,
    name: "Las Rozas de Madrid",
    provincia_id: 28
  },
  {
    id: 7734,
    cp: 28292,
    name: "El Escorial",
    provincia_id: 28
  },
  {
    id: 7735,
    cp: 28292,
    name: "Galapagar",
    provincia_id: 28
  },
  {
    id: 7736,
    cp: 28293,
    name: "Zarzalejo",
    provincia_id: 28
  },
  {
    id: 7737,
    cp: 28294,
    name: "Robledo de Chavela",
    provincia_id: 28
  },
  {
    id: 7738,
    cp: 28295,
    name: "Valdemaqueda",
    provincia_id: 28
  },
  {
    id: 7739,
    cp: 28296,
    name: "Santa María de la Alameda",
    provincia_id: 28
  },
  {
    id: 7740,
    cp: 28297,
    name: "Santa María de la Alameda",
    provincia_id: 28
  },
  {
    id: 7741,
    cp: 28300,
    name: "Aranjuez",
    provincia_id: 28
  },
  {
    id: 7742,
    cp: 28320,
    name: "Pinto",
    provincia_id: 28
  },
  {
    id: 7743,
    cp: 28330,
    name: "San Martín de la Vega",
    provincia_id: 28
  },
  {
    id: 7744,
    cp: 28340,
    name: "Valdemoro",
    provincia_id: 28
  },
  {
    id: 7745,
    cp: 28350,
    name: "Ciempozuelos",
    provincia_id: 28
  },
  {
    id: 7746,
    cp: 28359,
    name: "Titulcia",
    provincia_id: 28
  },
  {
    id: 7747,
    cp: 28360,
    name: "Villaconejos",
    provincia_id: 28
  },
  {
    id: 7748,
    cp: 28370,
    name: "Chinchón",
    provincia_id: 28
  },
  {
    id: 7749,
    cp: 28380,
    name: "Colmenar de Oreja",
    provincia_id: 28
  },
  {
    id: 7750,
    cp: 28390,
    name: "Belmonte de Tajo",
    provincia_id: 28
  },
  {
    id: 7751,
    cp: 28391,
    name: "Valdelaguna",
    provincia_id: 28
  },
  {
    id: 7752,
    cp: 28400,
    name: "Collado Villalba",
    provincia_id: 28
  },
  {
    id: 7753,
    cp: 28400,
    name: "Galapagar",
    provincia_id: 28
  },
  {
    id: 7754,
    cp: 28409,
    name: "Alpedrete",
    provincia_id: 28
  },
  {
    id: 7755,
    cp: 28410,
    name: "Manzanares el Real",
    provincia_id: 28
  },
  {
    id: 7756,
    cp: 28411,
    name: "Moralzarzal",
    provincia_id: 28
  },
  {
    id: 7757,
    cp: 28412,
    name: "El Boalo",
    provincia_id: 28
  },
  {
    id: 7758,
    cp: 28413,
    name: "El Boalo",
    provincia_id: 28
  },
  {
    id: 7759,
    cp: 28420,
    name: "Galapagar",
    provincia_id: 28
  },
  {
    id: 7760,
    cp: 28430,
    name: "Alpedrete",
    provincia_id: 28
  },
  {
    id: 7761,
    cp: 28430,
    name: "Guadarrama",
    provincia_id: 28
  },
  {
    id: 7762,
    cp: 28440,
    name: "Guadarrama",
    provincia_id: 28
  },
  {
    id: 7763,
    cp: 28450,
    name: "Collado Mediano",
    provincia_id: 28
  },
  {
    id: 7764,
    cp: 28460,
    name: "Los Molinos",
    provincia_id: 28
  },
  {
    id: 7765,
    cp: 28470,
    name: "Manzanares el Real",
    provincia_id: 28
  },
  {
    id: 7766,
    cp: 28470,
    name: "Cercedilla",
    provincia_id: 28
  },
  {
    id: 7767,
    cp: 28480,
    name: "Guadarrama",
    provincia_id: 28
  },
  {
    id: 7768,
    cp: 28490,
    name: "Becerril de la Sierra",
    provincia_id: 28
  },
  {
    id: 7769,
    cp: 28491,
    name: "Navacerrada",
    provincia_id: 28
  },
  {
    id: 7770,
    cp: 28492,
    name: "El Boalo",
    provincia_id: 28
  },
  {
    id: 7771,
    cp: 28492,
    name: "Manzanares el Real",
    provincia_id: 28
  },
  {
    id: 7772,
    cp: 28500,
    name: "Arganda del Rey",
    provincia_id: 28
  },
  {
    id: 7773,
    cp: 28510,
    name: "Campo Real",
    provincia_id: 28
  },
  {
    id: 7774,
    cp: 28511,
    name: "Valdilecha",
    provincia_id: 28
  },
  {
    id: 7775,
    cp: 28512,
    name: "Villar del Olmo",
    provincia_id: 28
  },
  {
    id: 7776,
    cp: 28514,
    name: "Nuevo Baztán",
    provincia_id: 28
  },
  {
    id: 7777,
    cp: 28514,
    name: "Villar del Olmo",
    provincia_id: 28
  },
  {
    id: 7778,
    cp: 28515,
    name: "Olmeda de las Fuentes",
    provincia_id: 28
  },
  {
    id: 7779,
    cp: 28521,
    name: "Rivas-Vaciamadrid",
    provincia_id: 28
  },
  {
    id: 7780,
    cp: 28522,
    name: "Rivas-Vaciamadrid",
    provincia_id: 28
  },
  {
    id: 7781,
    cp: 28523,
    name: "Rivas-Vaciamadrid",
    provincia_id: 28
  },
  {
    id: 7782,
    cp: 28524,
    name: "Rivas-Vaciamadrid",
    provincia_id: 28
  },
  {
    id: 7783,
    cp: 28529,
    name: "Rivas-Vaciamadrid",
    provincia_id: 28
  },
  {
    id: 7784,
    cp: 28530,
    name: "Morata de Taju?a",
    provincia_id: 28
  },
  {
    id: 7785,
    cp: 28540,
    name: "Perales de Taju?a",
    provincia_id: 28
  },
  {
    id: 7786,
    cp: 28550,
    name: "Tielmes",
    provincia_id: 28
  },
  {
    id: 7787,
    cp: 28560,
    name: "Caraba?a",
    provincia_id: 28
  },
  {
    id: 7788,
    cp: 28570,
    name: "Orusco de Taju?a",
    provincia_id: 28
  },
  {
    id: 7789,
    cp: 28580,
    name: "Ambite",
    provincia_id: 28
  },
  {
    id: 7790,
    cp: 28590,
    name: "Villarejo de Salvanés",
    provincia_id: 28
  },
  {
    id: 7791,
    cp: 28594,
    name: "Valdaracete",
    provincia_id: 28
  },
  {
    id: 7792,
    cp: 28595,
    name: "Estremera",
    provincia_id: 28
  },
  {
    id: 7793,
    cp: 28596,
    name: "Brea de Tajo",
    provincia_id: 28
  },
  {
    id: 7794,
    cp: 28597,
    name: "Fuentidue?a de Tajo",
    provincia_id: 28
  },
  {
    id: 7795,
    cp: 28598,
    name: "Villamanrique de Tajo",
    provincia_id: 28
  },
  {
    id: 7796,
    cp: 28600,
    name: "Navalcarnero",
    provincia_id: 28
  },
  {
    id: 7797,
    cp: 28607,
    name: "El Álamo",
    provincia_id: 28
  },
  {
    id: 7798,
    cp: 28609,
    name: "Villanueva de Perales",
    provincia_id: 28
  },
  {
    id: 7799,
    cp: 28609,
    name: "Sevilla la Nueva",
    provincia_id: 28
  },
  {
    id: 7800,
    cp: 28609,
    name: "Villamantilla",
    provincia_id: 28
  },
  {
    id: 7801,
    cp: 28610,
    name: "Villamanta",
    provincia_id: 28
  },
  {
    id: 7802,
    cp: 28620,
    name: "Aldea del Fresno",
    provincia_id: 28
  },
  {
    id: 7803,
    cp: 28630,
    name: "Villa del Prado",
    provincia_id: 28
  },
  {
    id: 7804,
    cp: 28635,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7805,
    cp: 28640,
    name: "Cadalso de los Vidrios",
    provincia_id: 28
  },
  {
    id: 7806,
    cp: 28648,
    name: "Cadalso de los Vidrios",
    provincia_id: 28
  },
  {
    id: 7807,
    cp: 28649,
    name: "Rozas de Puerto Real",
    provincia_id: 28
  },
  {
    id: 7808,
    cp: 28650,
    name: "Cenicientos",
    provincia_id: 28
  },
  {
    id: 7809,
    cp: 28660,
    name: "Boadilla del Monte",
    provincia_id: 28
  },
  {
    id: 7810,
    cp: 28670,
    name: "Villaviciosa de Odón",
    provincia_id: 28
  },
  {
    id: 7811,
    cp: 28680,
    name: "San Martín de Valdeiglesias",
    provincia_id: 28
  },
  {
    id: 7812,
    cp: 28690,
    name: "Brunete",
    provincia_id: 28
  },
  {
    id: 7813,
    cp: 28691,
    name: "Villanueva de la Ca?ada",
    provincia_id: 28
  },
  {
    id: 7814,
    cp: 28692,
    name: "Villanueva de la Ca?ada",
    provincia_id: 28
  },
  {
    id: 7815,
    cp: 28693,
    name: "Quijorna",
    provincia_id: 28
  },
  {
    id: 7816,
    cp: 28694,
    name: "Chapinería",
    provincia_id: 28
  },
  {
    id: 7817,
    cp: 28695,
    name: "Navas del Rey",
    provincia_id: 28
  },
  {
    id: 7818,
    cp: 28696,
    name: "Pelayos de la Presa",
    provincia_id: 28
  },
  {
    id: 7819,
    cp: 28700,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7820,
    cp: 28701,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7821,
    cp: 28702,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7822,
    cp: 28703,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7823,
    cp: 28706,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7824,
    cp: 28707,
    name: "Colmenar Viejo",
    provincia_id: 28
  },
  {
    id: 7825,
    cp: 28707,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7826,
    cp: 28708,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7827,
    cp: 28709,
    name: "San Sebastián de los Reyes",
    provincia_id: 28
  },
  {
    id: 7828,
    cp: 28720,
    name: "Bustarviejo",
    provincia_id: 28
  },
  {
    id: 7829,
    cp: 28721,
    name: "Redue?a",
    provincia_id: 28
  },
  {
    id: 7830,
    cp: 28721,
    name: "Cabanillas de la Sierra",
    provincia_id: 28
  },
  {
    id: 7831,
    cp: 28722,
    name: "El Vellón",
    provincia_id: 28
  },
  {
    id: 7832,
    cp: 28723,
    name: "Pedrezuela",
    provincia_id: 28
  },
  {
    id: 7833,
    cp: 28729,
    name: "Valdemanco",
    provincia_id: 28
  },
  {
    id: 7834,
    cp: 28729,
    name: "Venturada",
    provincia_id: 28
  },
  {
    id: 7835,
    cp: 28729,
    name: "Navalafuente",
    provincia_id: 28
  },
  {
    id: 7836,
    cp: 28730,
    name: "Buitrago del Lozoya",
    provincia_id: 28
  },
  {
    id: 7837,
    cp: 28737,
    name: "Pi?uécar-Gandullas",
    provincia_id: 28
  },
  {
    id: 7838,
    cp: 28737,
    name: "La Serna del Monte",
    provincia_id: 28
  },
  {
    id: 7839,
    cp: 28737,
    name: "Gascones",
    provincia_id: 28
  },
  {
    id: 7840,
    cp: 28737,
    name: "Braojos",
    provincia_id: 28
  },
  {
    id: 7841,
    cp: 28739,
    name: "Gargantilla del Lozoya y Pinilla de Buitrago",
    provincia_id: 28
  },
  {
    id: 7842,
    cp: 28739,
    name: "Garganta de los Montes",
    provincia_id: 28
  },
  {
    id: 7843,
    cp: 28739,
    name: "Navarredonda y San Mamés",
    provincia_id: 28
  },
  {
    id: 7844,
    cp: 28739,
    name: "Villavieja del Lozoya",
    provincia_id: 28
  },
  {
    id: 7845,
    cp: 28740,
    name: "Rascafría",
    provincia_id: 28
  },
  {
    id: 7846,
    cp: 28742,
    name: "Alameda del Valle",
    provincia_id: 28
  },
  {
    id: 7847,
    cp: 28742,
    name: "Lozoya",
    provincia_id: 28
  },
  {
    id: 7848,
    cp: 28743,
    name: "Canencia",
    provincia_id: 28
  },
  {
    id: 7849,
    cp: 28743,
    name: "Garganta de los Montes",
    provincia_id: 28
  },
  {
    id: 7850,
    cp: 28749,
    name: "Rascafría",
    provincia_id: 28
  },
  {
    id: 7851,
    cp: 28749,
    name: "Pinilla del Valle",
    provincia_id: 28
  },
  {
    id: 7852,
    cp: 28750,
    name: "Colmenar Viejo",
    provincia_id: 28
  },
  {
    id: 7853,
    cp: 28750,
    name: "San Agustín del Guadalix",
    provincia_id: 28
  },
  {
    id: 7854,
    cp: 28750,
    name: "San Lorenzo de El Escorial",
    provincia_id: 28
  },
  {
    id: 7855,
    cp: 28751,
    name: "La Cabrera",
    provincia_id: 28
  },
  {
    id: 7856,
    cp: 28752,
    name: "Lozoyuela-Navas-Sieteiglesias",
    provincia_id: 28
  },
  {
    id: 7857,
    cp: 28753,
    name: "Lozoyuela-Navas-Sieteiglesias",
    provincia_id: 28
  },
  {
    id: 7858,
    cp: 28754,
    name: "Lozoyuela-Navas-Sieteiglesias",
    provincia_id: 28
  },
  {
    id: 7859,
    cp: 28754,
    name: "Puentes Viejas",
    provincia_id: 28
  },
  {
    id: 7860,
    cp: 28755,
    name: "La Acebeda",
    provincia_id: 28
  },
  {
    id: 7861,
    cp: 28755,
    name: "Horcajo de la Sierra-Aoslos",
    provincia_id: 28
  },
  {
    id: 7862,
    cp: 28755,
    name: "Madarcos",
    provincia_id: 28
  },
  {
    id: 7863,
    cp: 28755,
    name: "Robregordo",
    provincia_id: 28
  },
  {
    id: 7864,
    cp: 28756,
    name: "Somosierra",
    provincia_id: 28
  },
  {
    id: 7865,
    cp: 28760,
    name: "Tres Cantos",
    provincia_id: 28
  },
  {
    id: 7866,
    cp: 28761,
    name: "Tres Cantos",
    provincia_id: 28
  },
  {
    id: 7867,
    cp: 28770,
    name: "Colmenar Viejo",
    provincia_id: 28
  },
  {
    id: 7868,
    cp: 28791,
    name: "Soto del Real",
    provincia_id: 28
  },
  {
    id: 7869,
    cp: 28792,
    name: "Miraflores de la Sierra",
    provincia_id: 28
  },
  {
    id: 7870,
    cp: 28794,
    name: "Guadalix de la Sierra",
    provincia_id: 28
  },
  {
    id: 7871,
    cp: 28801,
    name: "Alcalá de Henares",
    provincia_id: 28
  },
  {
    id: 7872,
    cp: 28802,
    name: "Alcalá de Henares",
    provincia_id: 28
  },
  {
    id: 7873,
    cp: 28803,
    name: "Alcalá de Henares",
    provincia_id: 28
  },
  {
    id: 7874,
    cp: 28804,
    name: "Alcalá de Henares",
    provincia_id: 28
  },
  {
    id: 7875,
    cp: 28805,
    name: "Alcalá de Henares",
    provincia_id: 28
  },
  {
    id: 7876,
    cp: 28806,
    name: "Alcalá de Henares",
    provincia_id: 28
  },
  {
    id: 7877,
    cp: 28807,
    name: "Alcalá de Henares",
    provincia_id: 28
  },
  {
    id: 7878,
    cp: 28807,
    name: "El Álamo",
    provincia_id: 28
  },
  {
    id: 7879,
    cp: 28810,
    name: "Villalbilla",
    provincia_id: 28
  },
  {
    id: 7880,
    cp: 28811,
    name: "Corpa",
    provincia_id: 28
  },
  {
    id: 7881,
    cp: 28812,
    name: "Valverde de Alcalá",
    provincia_id: 28
  },
  {
    id: 7882,
    cp: 28812,
    name: "Pezuela de las Torres",
    provincia_id: 28
  },
  {
    id: 7883,
    cp: 28813,
    name: "Pozuelo del Rey",
    provincia_id: 28
  },
  {
    id: 7884,
    cp: 28813,
    name: "Torres de la Alameda",
    provincia_id: 28
  },
  {
    id: 7885,
    cp: 28814,
    name: "Daganzo de Arriba",
    provincia_id: 28
  },
  {
    id: 7886,
    cp: 28815,
    name: "Fresno de Torote",
    provincia_id: 28
  },
  {
    id: 7887,
    cp: 28815,
    name: "Ribatejada",
    provincia_id: 28
  },
  {
    id: 7888,
    cp: 28816,
    name: "Camarma de Esteruelas",
    provincia_id: 28
  },
  {
    id: 7889,
    cp: 28816,
    name: "Valdeavero",
    provincia_id: 28
  },
  {
    id: 7890,
    cp: 28817,
    name: "Los Santos de la Humosa",
    provincia_id: 28
  },
  {
    id: 7891,
    cp: 28818,
    name: "Anchuelo",
    provincia_id: 28
  },
  {
    id: 7892,
    cp: 28818,
    name: "Santorcaz",
    provincia_id: 28
  },
  {
    id: 7893,
    cp: 28820,
    name: "Coslada",
    provincia_id: 28
  },
  {
    id: 7894,
    cp: 28821,
    name: "Coslada",
    provincia_id: 28
  },
  {
    id: 7895,
    cp: 28822,
    name: "Coslada",
    provincia_id: 28
  },
  {
    id: 7896,
    cp: 28823,
    name: "Coslada",
    provincia_id: 28
  },
  {
    id: 7897,
    cp: 28830,
    name: "San Fernando de Henares",
    provincia_id: 28
  },
  {
    id: 7898,
    cp: 28840,
    name: "Mejorada del Campo",
    provincia_id: 28
  },
  {
    id: 7899,
    cp: 28850,
    name: "Torrejón de Ardoz",
    provincia_id: 28
  },
  {
    id: 7900,
    cp: 28860,
    name: "Paracuellos de Jarama",
    provincia_id: 28
  },
  {
    id: 7901,
    cp: 28861,
    name: "Paracuellos de Jarama",
    provincia_id: 28
  },
  {
    id: 7902,
    cp: 28862,
    name: "Paracuellos de Jarama",
    provincia_id: 28
  },
  {
    id: 7903,
    cp: 28863,
    name: "Cobe?a",
    provincia_id: 28
  },
  {
    id: 7904,
    cp: 28864,
    name: "Ajalvir",
    provincia_id: 28
  },
  {
    id: 7905,
    cp: 28880,
    name: "Meco",
    provincia_id: 28
  },
  {
    id: 7906,
    cp: 28890,
    name: "Loeches",
    provincia_id: 28
  },
  {
    id: 7907,
    cp: 28891,
    name: "Velilla de San Antonio",
    provincia_id: 28
  },
  {
    id: 7908,
    cp: 28901,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7909,
    cp: 28902,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7910,
    cp: 28903,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7911,
    cp: 28904,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7912,
    cp: 28905,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7913,
    cp: 28906,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7914,
    cp: 28907,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7915,
    cp: 28909,
    name: "Getafe",
    provincia_id: 28
  },
  {
    id: 7916,
    cp: 28911,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7917,
    cp: 28912,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7918,
    cp: 28913,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7919,
    cp: 28914,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7920,
    cp: 28915,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7921,
    cp: 28916,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7922,
    cp: 28917,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7923,
    cp: 28918,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7924,
    cp: 28919,
    name: "Leganés",
    provincia_id: 28
  },
  {
    id: 7925,
    cp: 28921,
    name: "Alcorcón",
    provincia_id: 28
  },
  {
    id: 7926,
    cp: 28922,
    name: "Alcorcón",
    provincia_id: 28
  },
  {
    id: 7927,
    cp: 28923,
    name: "Alcorcón",
    provincia_id: 28
  },
  {
    id: 7928,
    cp: 28924,
    name: "Alcorcón",
    provincia_id: 28
  },
  {
    id: 7929,
    cp: 28925,
    name: "Alcorcón",
    provincia_id: 28
  },
  {
    id: 7930,
    cp: 28931,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7931,
    cp: 28932,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7932,
    cp: 28933,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7933,
    cp: 28934,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7934,
    cp: 28935,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7935,
    cp: 28936,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7936,
    cp: 28937,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7937,
    cp: 28938,
    name: "Móstoles",
    provincia_id: 28
  },
  {
    id: 7938,
    cp: 28939,
    name: "Arroyomolinos",
    provincia_id: 28
  },
  {
    id: 7939,
    cp: 28939,
    name: "Batres",
    provincia_id: 28
  },
  {
    id: 7940,
    cp: 28941,
    name: "Fuenlabrada",
    provincia_id: 28
  },
  {
    id: 7941,
    cp: 28942,
    name: "Fuenlabrada",
    provincia_id: 28
  },
  {
    id: 7942,
    cp: 28943,
    name: "Fuenlabrada",
    provincia_id: 28
  },
  {
    id: 7943,
    cp: 28944,
    name: "Fuenlabrada",
    provincia_id: 28
  },
  {
    id: 7944,
    cp: 28945,
    name: "Fuenlabrada",
    provincia_id: 28
  },
  {
    id: 7945,
    cp: 28946,
    name: "Fuenlabrada",
    provincia_id: 28
  },
  {
    id: 7946,
    cp: 28947,
    name: "Fuenlabrada",
    provincia_id: 28
  },
  {
    id: 7947,
    cp: 28950,
    name: "Moraleja de Enmedio",
    provincia_id: 28
  },
  {
    id: 7948,
    cp: 28954,
    name: "Navalagamella",
    provincia_id: 28
  },
  {
    id: 7949,
    cp: 28970,
    name: "Humanes de Madrid",
    provincia_id: 28
  },
  {
    id: 7950,
    cp: 28971,
    name: "Gri?ón",
    provincia_id: 28
  },
  {
    id: 7951,
    cp: 28976,
    name: "Batres",
    provincia_id: 28
  },
  {
    id: 7952,
    cp: 28977,
    name: "Casarrubuelos",
    provincia_id: 28
  },
  {
    id: 7953,
    cp: 28978,
    name: "Cubas de la Sagra",
    provincia_id: 28
  },
  {
    id: 7954,
    cp: 28979,
    name: "Serranillos del Valle",
    provincia_id: 28
  },
  {
    id: 7955,
    cp: 28980,
    name: "Parla",
    provincia_id: 28
  },
  {
    id: 7956,
    cp: 28981,
    name: "Parla",
    provincia_id: 28
  },
  {
    id: 7957,
    cp: 28982,
    name: "Parla",
    provincia_id: 28
  },
  {
    id: 7958,
    cp: 28983,
    name: "Parla",
    provincia_id: 28
  },
  {
    id: 7959,
    cp: 28984,
    name: "Parla",
    provincia_id: 28
  },
  {
    id: 7960,
    cp: 28990,
    name: "Torrejón de Velasco",
    provincia_id: 28
  },
  {
    id: 7961,
    cp: 28991,
    name: "Torrejón de la Calzada",
    provincia_id: 28
  },
  {
    id: 7962,
    cp: 29001,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7963,
    cp: 29002,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7964,
    cp: 29003,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7965,
    cp: 29004,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7966,
    cp: 29005,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7967,
    cp: 29006,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7968,
    cp: 29007,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7969,
    cp: 29008,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7970,
    cp: 29009,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7971,
    cp: 29010,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7972,
    cp: 29010,
    name: "Cártama",
    provincia_id: 29
  },
  {
    id: 7973,
    cp: 29011,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7974,
    cp: 29012,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7975,
    cp: 29013,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7976,
    cp: 29014,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7977,
    cp: 29015,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7978,
    cp: 29016,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7979,
    cp: 29017,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7980,
    cp: 29018,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7981,
    cp: 29100,
    name: "Coín",
    provincia_id: 29
  },
  {
    id: 7982,
    cp: 29108,
    name: "Guaro",
    provincia_id: 29
  },
  {
    id: 7983,
    cp: 29109,
    name: "Tolox",
    provincia_id: 29
  },
  {
    id: 7984,
    cp: 29110,
    name: "Monda",
    provincia_id: 29
  },
  {
    id: 7985,
    cp: 29120,
    name: "Alhaurín el Grande",
    provincia_id: 29
  },
  {
    id: 7986,
    cp: 29130,
    name: "Alhaurín de la Torre",
    provincia_id: 29
  },
  {
    id: 7987,
    cp: 29140,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7988,
    cp: 29150,
    name: "Almogía",
    provincia_id: 29
  },
  {
    id: 7989,
    cp: 29160,
    name: "Casabermeja",
    provincia_id: 29
  },
  {
    id: 7990,
    cp: 29170,
    name: "Colmenar",
    provincia_id: 29
  },
  {
    id: 7991,
    cp: 29180,
    name: "Riogordo",
    provincia_id: 29
  },
  {
    id: 7992,
    cp: 29190,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7993,
    cp: 29191,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7994,
    cp: 29194,
    name: "Alfarnatejo",
    provincia_id: 29
  },
  {
    id: 7995,
    cp: 29194,
    name: "Alfarnate",
    provincia_id: 29
  },
  {
    id: 7996,
    cp: 29195,
    name: "Comares",
    provincia_id: 29
  },
  {
    id: 7997,
    cp: 29196,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 7998,
    cp: 29197,
    name: "Totalán",
    provincia_id: 29
  },
  {
    id: 7999,
    cp: 29197,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 8000,
    cp: 29200,
    name: "Antequera",
    provincia_id: 29
  },
  {
    id: 8001,
    cp: 29210,
    name: "Cuevas de San Marcos",
    provincia_id: 29
  },
  {
    id: 8002,
    cp: 29220,
    name: "Cuevas Bajas",
    provincia_id: 29
  },
  {
    id: 8003,
    cp: 29230,
    name: "Villanueva de la Concepción",
    provincia_id: 29
  },
  {
    id: 8004,
    cp: 29230,
    name: "Antequera",
    provincia_id: 29
  },
  {
    id: 8005,
    cp: 29240,
    name: "Valle de Abdalajís",
    provincia_id: 29
  },
  {
    id: 8006,
    cp: 29250,
    name: "Antequera",
    provincia_id: 29
  },
  {
    id: 8007,
    cp: 29260,
    name: "Antequera",
    provincia_id: 29
  },
  {
    id: 8008,
    cp: 29300,
    name: "Archidona",
    provincia_id: 29
  },
  {
    id: 8009,
    cp: 29309,
    name: "Archidona",
    provincia_id: 29
  },
  {
    id: 8010,
    cp: 29310,
    name: "Villanueva de Algaidas",
    provincia_id: 29
  },
  {
    id: 8011,
    cp: 29311,
    name: "Villanueva de Algaidas",
    provincia_id: 29
  },
  {
    id: 8012,
    cp: 29312,
    name: "Villanueva del Rosario",
    provincia_id: 29
  },
  {
    id: 8013,
    cp: 29313,
    name: "Villanueva del Trabuco",
    provincia_id: 29
  },
  {
    id: 8014,
    cp: 29314,
    name: "Archidona",
    provincia_id: 29
  },
  {
    id: 8015,
    cp: 29314,
    name: "Antequera",
    provincia_id: 29
  },
  {
    id: 8016,
    cp: 29315,
    name: "Villanueva de Tapia",
    provincia_id: 29
  },
  {
    id: 8017,
    cp: 29315,
    name: "Archidona",
    provincia_id: 29
  },
  {
    id: 8018,
    cp: 29315,
    name: "Villanueva del Trabuco",
    provincia_id: 29
  },
  {
    id: 8019,
    cp: 29320,
    name: "Campillos",
    provincia_id: 29
  },
  {
    id: 8020,
    cp: 29327,
    name: "Teba",
    provincia_id: 29
  },
  {
    id: 8021,
    cp: 29328,
    name: "Sierra de Yeguas",
    provincia_id: 29
  },
  {
    id: 8022,
    cp: 29329,
    name: "Sierra de Yeguas",
    provincia_id: 29
  },
  {
    id: 8023,
    cp: 29330,
    name: "Almargen",
    provincia_id: 29
  },
  {
    id: 8024,
    cp: 29340,
    name: "Ca?ete la Real",
    provincia_id: 29
  },
  {
    id: 8025,
    cp: 29350,
    name: "Arriate",
    provincia_id: 29
  },
  {
    id: 8026,
    cp: 29360,
    name: "Montejaque",
    provincia_id: 29
  },
  {
    id: 8027,
    cp: 29370,
    name: "Benaoján",
    provincia_id: 29
  },
  {
    id: 8028,
    cp: 29380,
    name: "Cortes de la Frontera",
    provincia_id: 29
  },
  {
    id: 8029,
    cp: 29391,
    name: "Cortes de la Frontera",
    provincia_id: 29
  },
  {
    id: 8030,
    cp: 29392,
    name: "Jimera de Líbar",
    provincia_id: 29
  },
  {
    id: 8031,
    cp: 29394,
    name: "Ronda",
    provincia_id: 29
  },
  {
    id: 8032,
    cp: 29400,
    name: "Ronda",
    provincia_id: 29
  },
  {
    id: 8033,
    cp: 29410,
    name: "Yunquera",
    provincia_id: 29
  },
  {
    id: 8034,
    cp: 29420,
    name: "El Burgo",
    provincia_id: 29
  },
  {
    id: 8035,
    cp: 29430,
    name: "Ronda",
    provincia_id: 29
  },
  {
    id: 8036,
    cp: 29440,
    name: "Igualeja",
    provincia_id: 29
  },
  {
    id: 8037,
    cp: 29450,
    name: "Pujerra",
    provincia_id: 29
  },
  {
    id: 8038,
    cp: 29451,
    name: "Parauta",
    provincia_id: 29
  },
  {
    id: 8039,
    cp: 29452,
    name: "Cartajima",
    provincia_id: 29
  },
  {
    id: 8040,
    cp: 29460,
    name: "Alpandeire",
    provincia_id: 29
  },
  {
    id: 8041,
    cp: 29461,
    name: "Faraján",
    provincia_id: 29
  },
  {
    id: 8042,
    cp: 29462,
    name: "Júzcar",
    provincia_id: 29
  },
  {
    id: 8043,
    cp: 29470,
    name: "Cuevas del Becerro",
    provincia_id: 29
  },
  {
    id: 8044,
    cp: 29470,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 8045,
    cp: 29471,
    name: "Ronda",
    provincia_id: 29
  },
  {
    id: 8046,
    cp: 29480,
    name: "Gaucín",
    provincia_id: 29
  },
  {
    id: 8047,
    cp: 29490,
    name: "Benarrabá",
    provincia_id: 29
  },
  {
    id: 8048,
    cp: 29490,
    name: "Cortes de la Frontera",
    provincia_id: 29
  },
  {
    id: 8049,
    cp: 29491,
    name: "Benalauría",
    provincia_id: 29
  },
  {
    id: 8050,
    cp: 29491,
    name: "Algatocín",
    provincia_id: 29
  },
  {
    id: 8051,
    cp: 29492,
    name: "Genalguacil",
    provincia_id: 29
  },
  {
    id: 8052,
    cp: 29492,
    name: "Jubrique",
    provincia_id: 29
  },
  {
    id: 8053,
    cp: 29493,
    name: "Benadalid",
    provincia_id: 29
  },
  {
    id: 8054,
    cp: 29494,
    name: "Atajate",
    provincia_id: 29
  },
  {
    id: 8055,
    cp: 29500,
    name: "Álora",
    provincia_id: 29
  },
  {
    id: 8056,
    cp: 29510,
    name: "Álora",
    provincia_id: 29
  },
  {
    id: 8057,
    cp: 29520,
    name: "Fuente de Piedra",
    provincia_id: 29
  },
  {
    id: 8058,
    cp: 29530,
    name: "Alameda",
    provincia_id: 29
  },
  {
    id: 8059,
    cp: 29531,
    name: "Humilladero",
    provincia_id: 29
  },
  {
    id: 8060,
    cp: 29532,
    name: "Mollina",
    provincia_id: 29
  },
  {
    id: 8061,
    cp: 29533,
    name: "Humilladero",
    provincia_id: 29
  },
  {
    id: 8062,
    cp: 29540,
    name: "Antequera",
    provincia_id: 29
  },
  {
    id: 8063,
    cp: 29550,
    name: "Ardales",
    provincia_id: 29
  },
  {
    id: 8064,
    cp: 29551,
    name: "Carratraca",
    provincia_id: 29
  },
  {
    id: 8065,
    cp: 29552,
    name: "Álora",
    provincia_id: 29
  },
  {
    id: 8066,
    cp: 29552,
    name: "Ardales",
    provincia_id: 29
  },
  {
    id: 8067,
    cp: 29560,
    name: "Pizarra",
    provincia_id: 29
  },
  {
    id: 8068,
    cp: 29566,
    name: "Casarabonela",
    provincia_id: 29
  },
  {
    id: 8069,
    cp: 29567,
    name: "Alozaina",
    provincia_id: 29
  },
  {
    id: 8070,
    cp: 29568,
    name: "Pizarra",
    provincia_id: 29
  },
  {
    id: 8071,
    cp: 29569,
    name: "Cártama",
    provincia_id: 29
  },
  {
    id: 8072,
    cp: 29569,
    name: "Pizarra",
    provincia_id: 29
  },
  {
    id: 8073,
    cp: 29570,
    name: "Cártama",
    provincia_id: 29
  },
  {
    id: 8074,
    cp: 29580,
    name: "Cártama",
    provincia_id: 29
  },
  {
    id: 8075,
    cp: 29590,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 8076,
    cp: 29591,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 8077,
    cp: 29592,
    name: "Cártama",
    provincia_id: 29
  },
  {
    id: 8078,
    cp: 29593,
    name: "Álora",
    provincia_id: 29
  },
  {
    id: 8079,
    cp: 29601,
    name: "Marbella",
    provincia_id: 29
  },
  {
    id: 8080,
    cp: 29602,
    name: "Marbella",
    provincia_id: 29
  },
  {
    id: 8081,
    cp: 29603,
    name: "Marbella",
    provincia_id: 29
  },
  {
    id: 8082,
    cp: 29604,
    name: "Marbella",
    provincia_id: 29
  },
  {
    id: 8083,
    cp: 29610,
    name: "Ojén",
    provincia_id: 29
  },
  {
    id: 8084,
    cp: 29611,
    name: "Istán",
    provincia_id: 29
  },
  {
    id: 8085,
    cp: 29620,
    name: "Torremolinos",
    provincia_id: 29
  },
  {
    id: 8086,
    cp: 29620,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 8087,
    cp: 29620,
    name: "Ojén",
    provincia_id: 29
  },
  {
    id: 8088,
    cp: 29630,
    name: "Benalmádena",
    provincia_id: 29
  },
  {
    id: 8089,
    cp: 29631,
    name: "Benalmádena",
    provincia_id: 29
  },
  {
    id: 8090,
    cp: 29639,
    name: "Benalmádena",
    provincia_id: 29
  },
  {
    id: 8091,
    cp: 29640,
    name: "Fuengirola",
    provincia_id: 29
  },
  {
    id: 8092,
    cp: 29647,
    name: "Mijas",
    provincia_id: 29
  },
  {
    id: 8093,
    cp: 29648,
    name: "Mijas",
    provincia_id: 29
  },
  {
    id: 8094,
    cp: 29649,
    name: "Mijas",
    provincia_id: 29
  },
  {
    id: 8095,
    cp: 29650,
    name: "Mijas",
    provincia_id: 29
  },
  {
    id: 8096,
    cp: 29651,
    name: "Mijas",
    provincia_id: 29
  },
  {
    id: 8097,
    cp: 29660,
    name: "Marbella",
    provincia_id: 29
  },
  {
    id: 8098,
    cp: 29670,
    name: "Marbella",
    provincia_id: 29
  },
  {
    id: 8099,
    cp: 29679,
    name: "Benahavís",
    provincia_id: 29
  },
  {
    id: 8100,
    cp: 29680,
    name: "Estepona",
    provincia_id: 29
  },
  {
    id: 8101,
    cp: 29688,
    name: "Estepona",
    provincia_id: 29
  },
  {
    id: 8102,
    cp: 29689,
    name: "Estepona",
    provincia_id: 29
  },
  {
    id: 8103,
    cp: 29690,
    name: "Casares",
    provincia_id: 29
  },
  {
    id: 8104,
    cp: 29691,
    name: "Manilva",
    provincia_id: 29
  },
  {
    id: 8105,
    cp: 29692,
    name: "Manilva",
    provincia_id: 29
  },
  {
    id: 8106,
    cp: 29692,
    name: "Casares",
    provincia_id: 29
  },
  {
    id: 8107,
    cp: 29693,
    name: "Estepona",
    provincia_id: 29
  },
  {
    id: 8108,
    cp: 29698,
    name: "Estepona",
    provincia_id: 29
  },
  {
    id: 8109,
    cp: 29700,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8110,
    cp: 29710,
    name: "Periana",
    provincia_id: 29
  },
  {
    id: 8111,
    cp: 29711,
    name: "Alcaucín",
    provincia_id: 29
  },
  {
    id: 8112,
    cp: 29712,
    name: "Vi?uela",
    provincia_id: 29
  },
  {
    id: 8113,
    cp: 29713,
    name: "Alcaucín",
    provincia_id: 29
  },
  {
    id: 8114,
    cp: 29713,
    name: "Vi?uela",
    provincia_id: 29
  },
  {
    id: 8115,
    cp: 29714,
    name: "Salares",
    provincia_id: 29
  },
  {
    id: 8116,
    cp: 29715,
    name: "Sedella",
    provincia_id: 29
  },
  {
    id: 8117,
    cp: 29716,
    name: "Canillas de Aceituno",
    provincia_id: 29
  },
  {
    id: 8118,
    cp: 29717,
    name: "Arenas",
    provincia_id: 29
  },
  {
    id: 8119,
    cp: 29718,
    name: "Benamargosa",
    provincia_id: 29
  },
  {
    id: 8120,
    cp: 29718,
    name: "Cútar",
    provincia_id: 29
  },
  {
    id: 8121,
    cp: 29718,
    name: "Almáchar",
    provincia_id: 29
  },
  {
    id: 8122,
    cp: 29718,
    name: "El Borge",
    provincia_id: 29
  },
  {
    id: 8123,
    cp: 29718,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8124,
    cp: 29719,
    name: "Canillas de Aceituno",
    provincia_id: 29
  },
  {
    id: 8125,
    cp: 29719,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8126,
    cp: 29719,
    name: "Vi?uela",
    provincia_id: 29
  },
  {
    id: 8127,
    cp: 29719,
    name: "Benamocarra",
    provincia_id: 29
  },
  {
    id: 8128,
    cp: 29719,
    name: "Sedella",
    provincia_id: 29
  },
  {
    id: 8129,
    cp: 29720,
    name: "Rincón de la Victoria",
    provincia_id: 29
  },
  {
    id: 8130,
    cp: 29720,
    name: "Málaga",
    provincia_id: 29
  },
  {
    id: 8131,
    cp: 29730,
    name: "Rincón de la Victoria",
    provincia_id: 29
  },
  {
    id: 8132,
    cp: 29738,
    name: "Rincón de la Victoria",
    provincia_id: 29
  },
  {
    id: 8133,
    cp: 29738,
    name: "Moclinejo",
    provincia_id: 29
  },
  {
    id: 8134,
    cp: 29740,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8135,
    cp: 29749,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8136,
    cp: 29750,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8137,
    cp: 29750,
    name: "Algarrobo",
    provincia_id: 29
  },
  {
    id: 8138,
    cp: 29751,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8139,
    cp: 29752,
    name: "Sayalonga",
    provincia_id: 29
  },
  {
    id: 8140,
    cp: 29753,
    name: "Sayalonga",
    provincia_id: 29
  },
  {
    id: 8141,
    cp: 29753,
    name: "Árchez",
    provincia_id: 29
  },
  {
    id: 8142,
    cp: 29753,
    name: "Arenas",
    provincia_id: 29
  },
  {
    id: 8143,
    cp: 29754,
    name: "Cómpeta",
    provincia_id: 29
  },
  {
    id: 8144,
    cp: 29755,
    name: "Canillas de Albaida",
    provincia_id: 29
  },
  {
    id: 8145,
    cp: 29760,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8146,
    cp: 29770,
    name: "Torrox",
    provincia_id: 29
  },
  {
    id: 8147,
    cp: 29780,
    name: "Nerja",
    provincia_id: 29
  },
  {
    id: 8148,
    cp: 29787,
    name: "Nerja",
    provincia_id: 29
  },
  {
    id: 8149,
    cp: 29788,
    name: "Frigiliana",
    provincia_id: 29
  },
  {
    id: 8150,
    cp: 29789,
    name: "Frigiliana",
    provincia_id: 29
  },
  {
    id: 8151,
    cp: 29790,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8152,
    cp: 29791,
    name: "Macharaviaya",
    provincia_id: 29
  },
  {
    id: 8153,
    cp: 29792,
    name: "Iznate",
    provincia_id: 29
  },
  {
    id: 8154,
    cp: 29792,
    name: "Vélez-Málaga",
    provincia_id: 29
  },
  {
    id: 8155,
    cp: 29793,
    name: "Torrox",
    provincia_id: 29
  },
  {
    id: 8156,
    cp: 29796,
    name: "Torrox",
    provincia_id: 29
  },
  {
    id: 8157,
    cp: 30000,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8158,
    cp: 30001,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8159,
    cp: 30002,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8160,
    cp: 30003,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8161,
    cp: 30004,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8162,
    cp: 30005,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8163,
    cp: 30006,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8164,
    cp: 30007,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8165,
    cp: 30008,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8166,
    cp: 30009,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8167,
    cp: 30010,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8168,
    cp: 30011,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8169,
    cp: 30012,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8170,
    cp: 30017,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8171,
    cp: 30100,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8172,
    cp: 30107,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8173,
    cp: 30108,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8174,
    cp: 30110,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8175,
    cp: 30120,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8176,
    cp: 30130,
    name: "Beniel",
    provincia_id: 30
  },
  {
    id: 8177,
    cp: 30139,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8178,
    cp: 30140,
    name: "Santomera",
    provincia_id: 30
  },
  {
    id: 8179,
    cp: 30148,
    name: "Santomera",
    provincia_id: 30
  },
  {
    id: 8180,
    cp: 30149,
    name: "Santomera",
    provincia_id: 30
  },
  {
    id: 8181,
    cp: 30150,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8182,
    cp: 30151,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8183,
    cp: 30152,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8184,
    cp: 30153,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8185,
    cp: 30154,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8186,
    cp: 30155,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8187,
    cp: 30156,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8188,
    cp: 30157,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8189,
    cp: 30158,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8190,
    cp: 30160,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8191,
    cp: 30161,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8192,
    cp: 30162,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8193,
    cp: 30163,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8194,
    cp: 30164,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8195,
    cp: 30165,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8196,
    cp: 30166,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8197,
    cp: 30167,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8198,
    cp: 30168,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8199,
    cp: 30169,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8200,
    cp: 30170,
    name: "Mula",
    provincia_id: 30
  },
  {
    id: 8201,
    cp: 30176,
    name: "Pliego",
    provincia_id: 30
  },
  {
    id: 8202,
    cp: 30178,
    name: "Mula",
    provincia_id: 30
  },
  {
    id: 8203,
    cp: 30179,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8204,
    cp: 30180,
    name: "Bullas",
    provincia_id: 30
  },
  {
    id: 8205,
    cp: 30189,
    name: "Cehegín",
    provincia_id: 30
  },
  {
    id: 8206,
    cp: 30189,
    name: "Bullas",
    provincia_id: 30
  },
  {
    id: 8207,
    cp: 30190,
    name: "Albudeite",
    provincia_id: 30
  },
  {
    id: 8208,
    cp: 30191,
    name: "Campos del Río",
    provincia_id: 30
  },
  {
    id: 8209,
    cp: 30192,
    name: "Campos del Río",
    provincia_id: 30
  },
  {
    id: 8210,
    cp: 30193,
    name: "Mula",
    provincia_id: 30
  },
  {
    id: 8211,
    cp: 30194,
    name: "Mula",
    provincia_id: 30
  },
  {
    id: 8212,
    cp: 30195,
    name: "Caravaca de la Cruz",
    provincia_id: 30
  },
  {
    id: 8213,
    cp: 30196,
    name: "Pliego",
    provincia_id: 30
  },
  {
    id: 8214,
    cp: 30201,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8215,
    cp: 30202,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8216,
    cp: 30203,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8217,
    cp: 30204,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8218,
    cp: 30205,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8219,
    cp: 30300,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8220,
    cp: 30310,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8221,
    cp: 30319,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8222,
    cp: 30320,
    name: "Fuente Álamo de Murcia",
    provincia_id: 30
  },
  {
    id: 8223,
    cp: 30330,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8224,
    cp: 30331,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8225,
    cp: 30332,
    name: "Fuente Álamo de Murcia",
    provincia_id: 30
  },
  {
    id: 8226,
    cp: 30333,
    name: "Fuente Álamo de Murcia",
    provincia_id: 30
  },
  {
    id: 8227,
    cp: 30334,
    name: "Fuente Álamo de Murcia",
    provincia_id: 30
  },
  {
    id: 8228,
    cp: 30335,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8229,
    cp: 30335,
    name: "Fuente Álamo de Murcia",
    provincia_id: 30
  },
  {
    id: 8230,
    cp: 30338,
    name: "Fuente Álamo de Murcia",
    provincia_id: 30
  },
  {
    id: 8231,
    cp: 30350,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8232,
    cp: 30351,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8233,
    cp: 30360,
    name: "La Unión",
    provincia_id: 30
  },
  {
    id: 8234,
    cp: 30362,
    name: "La Unión",
    provincia_id: 30
  },
  {
    id: 8235,
    cp: 30364,
    name: "La Unión",
    provincia_id: 30
  },
  {
    id: 8236,
    cp: 30365,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8237,
    cp: 30366,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8238,
    cp: 30367,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8239,
    cp: 30368,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8240,
    cp: 30369,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8241,
    cp: 30369,
    name: "La Unión",
    provincia_id: 30
  },
  {
    id: 8242,
    cp: 30370,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8243,
    cp: 30370,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8244,
    cp: 30379,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8245,
    cp: 30380,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8246,
    cp: 30380,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8247,
    cp: 30381,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8248,
    cp: 30382,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8249,
    cp: 30383,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8250,
    cp: 30384,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8251,
    cp: 30385,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8252,
    cp: 30387,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8253,
    cp: 30387,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8254,
    cp: 30389,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8255,
    cp: 30390,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8256,
    cp: 30391,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8257,
    cp: 30392,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8258,
    cp: 30393,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8259,
    cp: 30394,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8260,
    cp: 30395,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8261,
    cp: 30396,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8262,
    cp: 30397,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8263,
    cp: 30398,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8264,
    cp: 30399,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8265,
    cp: 30400,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8266,
    cp: 30400,
    name: "Caravaca de la Cruz",
    provincia_id: 30
  },
  {
    id: 8267,
    cp: 30410,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8268,
    cp: 30410,
    name: "Caravaca de la Cruz",
    provincia_id: 30
  },
  {
    id: 8269,
    cp: 30411,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8270,
    cp: 30411,
    name: "Caravaca de la Cruz",
    provincia_id: 30
  },
  {
    id: 8271,
    cp: 30412,
    name: "Caravaca de la Cruz",
    provincia_id: 30
  },
  {
    id: 8272,
    cp: 30413,
    name: "Caravaca de la Cruz",
    provincia_id: 30
  },
  {
    id: 8273,
    cp: 30413,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8274,
    cp: 30420,
    name: "Cehegín",
    provincia_id: 30
  },
  {
    id: 8275,
    cp: 30420,
    name: "Calasparra",
    provincia_id: 30
  },
  {
    id: 8276,
    cp: 30430,
    name: "Cehegín",
    provincia_id: 30
  },
  {
    id: 8277,
    cp: 30438,
    name: "Cehegín",
    provincia_id: 30
  },
  {
    id: 8278,
    cp: 30439,
    name: "Cehegín",
    provincia_id: 30
  },
  {
    id: 8279,
    cp: 30440,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8280,
    cp: 30441,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8281,
    cp: 30442,
    name: "Moratalla",
    provincia_id: 30
  },
  {
    id: 8282,
    cp: 30500,
    name: "Molina de Segura",
    provincia_id: 30
  },
  {
    id: 8283,
    cp: 30506,
    name: "Molina de Segura",
    provincia_id: 30
  },
  {
    id: 8284,
    cp: 30507,
    name: "Molina de Segura",
    provincia_id: 30
  },
  {
    id: 8285,
    cp: 30508,
    name: "Molina de Segura",
    provincia_id: 30
  },
  {
    id: 8286,
    cp: 30509,
    name: "Molina de Segura",
    provincia_id: 30
  },
  {
    id: 8287,
    cp: 30510,
    name: "Yecla",
    provincia_id: 30
  },
  {
    id: 8288,
    cp: 30520,
    name: "Jumilla",
    provincia_id: 30
  },
  {
    id: 8289,
    cp: 30528,
    name: "Jumilla",
    provincia_id: 30
  },
  {
    id: 8290,
    cp: 30529,
    name: "Jumilla",
    provincia_id: 30
  },
  {
    id: 8291,
    cp: 30540,
    name: "Blanca",
    provincia_id: 30
  },
  {
    id: 8292,
    cp: 30550,
    name: "Abarán",
    provincia_id: 30
  },
  {
    id: 8293,
    cp: 30559,
    name: "Abarán",
    provincia_id: 30
  },
  {
    id: 8294,
    cp: 30560,
    name: "Alguazas",
    provincia_id: 30
  },
  {
    id: 8295,
    cp: 30561,
    name: "Alguazas",
    provincia_id: 30
  },
  {
    id: 8296,
    cp: 30562,
    name: "Ceutí",
    provincia_id: 30
  },
  {
    id: 8297,
    cp: 30563,
    name: "Ceutí",
    provincia_id: 30
  },
  {
    id: 8298,
    cp: 30564,
    name: "Lorquí",
    provincia_id: 30
  },
  {
    id: 8299,
    cp: 30565,
    name: "Las Torres de Cotillas",
    provincia_id: 30
  },
  {
    id: 8300,
    cp: 30570,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8301,
    cp: 30579,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8302,
    cp: 30580,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8303,
    cp: 30588,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8304,
    cp: 30589,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8305,
    cp: 30590,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8306,
    cp: 30590,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8307,
    cp: 30591,
    name: "Torre-Pacheco",
    provincia_id: 30
  },
  {
    id: 8308,
    cp: 30592,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8309,
    cp: 30592,
    name: "Torre-Pacheco",
    provincia_id: 30
  },
  {
    id: 8310,
    cp: 30592,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8311,
    cp: 30593,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8312,
    cp: 30594,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8313,
    cp: 30600,
    name: "Archena",
    provincia_id: 30
  },
  {
    id: 8314,
    cp: 30609,
    name: "Archena",
    provincia_id: 30
  },
  {
    id: 8315,
    cp: 30610,
    name: "Ricote",
    provincia_id: 30
  },
  {
    id: 8316,
    cp: 30611,
    name: "Ojós",
    provincia_id: 30
  },
  {
    id: 8317,
    cp: 30612,
    name: "Ulea",
    provincia_id: 30
  },
  {
    id: 8318,
    cp: 30613,
    name: "Villanueva del Río Segura",
    provincia_id: 30
  },
  {
    id: 8319,
    cp: 30620,
    name: "Fortuna",
    provincia_id: 30
  },
  {
    id: 8320,
    cp: 30626,
    name: "Fortuna",
    provincia_id: 30
  },
  {
    id: 8321,
    cp: 30626,
    name: "Abanilla",
    provincia_id: 30
  },
  {
    id: 8322,
    cp: 30628,
    name: "Fortuna",
    provincia_id: 30
  },
  {
    id: 8323,
    cp: 30629,
    name: "Santomera",
    provincia_id: 30
  },
  {
    id: 8324,
    cp: 30629,
    name: "Fortuna",
    provincia_id: 30
  },
  {
    id: 8325,
    cp: 30640,
    name: "Abanilla",
    provincia_id: 30
  },
  {
    id: 8326,
    cp: 30648,
    name: "Abanilla",
    provincia_id: 30
  },
  {
    id: 8327,
    cp: 30649,
    name: "Abanilla",
    provincia_id: 30
  },
  {
    id: 8328,
    cp: 30700,
    name: "Torre-Pacheco",
    provincia_id: 30
  },
  {
    id: 8329,
    cp: 30708,
    name: "Torre-Pacheco",
    provincia_id: 30
  },
  {
    id: 8330,
    cp: 30709,
    name: "Torre-Pacheco",
    provincia_id: 30
  },
  {
    id: 8331,
    cp: 30710,
    name: "Los Alcázares",
    provincia_id: 30
  },
  {
    id: 8332,
    cp: 30710,
    name: "Torre-Pacheco",
    provincia_id: 30
  },
  {
    id: 8333,
    cp: 30720,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8334,
    cp: 30729,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8335,
    cp: 30730,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8336,
    cp: 30739,
    name: "Torre-Pacheco",
    provincia_id: 30
  },
  {
    id: 8337,
    cp: 30739,
    name: "San Javier",
    provincia_id: 30
  },
  {
    id: 8338,
    cp: 30740,
    name: "San Pedro del Pinatar",
    provincia_id: 30
  },
  {
    id: 8339,
    cp: 30749,
    name: "San Pedro del Pinatar",
    provincia_id: 30
  },
  {
    id: 8340,
    cp: 30750,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8341,
    cp: 30800,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8342,
    cp: 30810,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8343,
    cp: 30811,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8344,
    cp: 30812,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8345,
    cp: 30813,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8346,
    cp: 30814,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8347,
    cp: 30815,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8348,
    cp: 30816,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8349,
    cp: 30817,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8350,
    cp: 30818,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8351,
    cp: 30820,
    name: "Alcantarilla",
    provincia_id: 30
  },
  {
    id: 8352,
    cp: 30826,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8353,
    cp: 30830,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8354,
    cp: 30831,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8355,
    cp: 30832,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8356,
    cp: 30833,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8357,
    cp: 30834,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8358,
    cp: 30834,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8359,
    cp: 30835,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8360,
    cp: 30835,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8361,
    cp: 30836,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8362,
    cp: 30837,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8363,
    cp: 30840,
    name: "Alhama de Murcia",
    provincia_id: 30
  },
  {
    id: 8364,
    cp: 30850,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8365,
    cp: 30850,
    name: "Totana",
    provincia_id: 30
  },
  {
    id: 8366,
    cp: 30858,
    name: "Totana",
    provincia_id: 30
  },
  {
    id: 8367,
    cp: 30858,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8368,
    cp: 30859,
    name: "Aledo",
    provincia_id: 30
  },
  {
    id: 8369,
    cp: 30859,
    name: "Totana",
    provincia_id: 30
  },
  {
    id: 8370,
    cp: 30860,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8371,
    cp: 30868,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8372,
    cp: 30868,
    name: "Cartagena",
    provincia_id: 30
  },
  {
    id: 8373,
    cp: 30870,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8374,
    cp: 30875,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8375,
    cp: 30876,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8376,
    cp: 30876,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8377,
    cp: 30877,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8378,
    cp: 30878,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8379,
    cp: 30878,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8380,
    cp: 30879,
    name: "Mazarrón",
    provincia_id: 30
  },
  {
    id: 8381,
    cp: 30880,
    name: "Águilas",
    provincia_id: 30
  },
  {
    id: 8382,
    cp: 30883,
    name: "Murcia",
    provincia_id: 30
  },
  {
    id: 8383,
    cp: 30889,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8384,
    cp: 30889,
    name: "Águilas",
    provincia_id: 30
  },
  {
    id: 8385,
    cp: 30890,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8386,
    cp: 30890,
    name: "Puerto Lumbreras",
    provincia_id: 30
  },
  {
    id: 8387,
    cp: 30891,
    name: "Puerto Lumbreras",
    provincia_id: 30
  },
  {
    id: 8388,
    cp: 30892,
    name: "Librilla",
    provincia_id: 30
  },
  {
    id: 8389,
    cp: 30893,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8390,
    cp: 31001,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8391,
    cp: 31002,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8392,
    cp: 31003,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8393,
    cp: 31004,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8394,
    cp: 31005,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8395,
    cp: 31006,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8396,
    cp: 31007,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8397,
    cp: 31008,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8398,
    cp: 31009,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8399,
    cp: 31010,
    name: "Bara?áin Bara?ain",
    provincia_id: 31
  },
  {
    id: 8400,
    cp: 31010,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8401,
    cp: 31011,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8402,
    cp: 31012,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8403,
    cp: 31013,
    name: "Berriozar",
    provincia_id: 31
  },
  {
    id: 8404,
    cp: 31013,
    name: "Ansoáin Antsoain",
    provincia_id: 31
  },
  {
    id: 8405,
    cp: 31013,
    name: "Berrioplano Berriobeiti",
    provincia_id: 31
  },
  {
    id: 8406,
    cp: 31014,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8407,
    cp: 31015,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8408,
    cp: 31016,
    name: "Pamplona Iru?a",
    provincia_id: 31
  },
  {
    id: 8409,
    cp: 31100,
    name: "Puente la Reina Gares",
    provincia_id: 31
  },
  {
    id: 8410,
    cp: 31109,
    name: "Artazu",
    provincia_id: 31
  },
  {
    id: 8411,
    cp: 31110,
    name: "Noáin (Valle de Elorz) Noain (Elortzibar)",
    provincia_id: 31
  },
  {
    id: 8412,
    cp: 31119,
    name: "Noáin (Valle de Elorz) Noain (Elortzibar)",
    provincia_id: 31
  },
  {
    id: 8413,
    cp: 31130,
    name: "Ma?eru",
    provincia_id: 31
  },
  {
    id: 8414,
    cp: 31131,
    name: "Cirauqui Zirauki",
    provincia_id: 31
  },
  {
    id: 8415,
    cp: 31132,
    name: "Villatuerta",
    provincia_id: 31
  },
  {
    id: 8416,
    cp: 31133,
    name: "Uterga",
    provincia_id: 31
  },
  {
    id: 8417,
    cp: 31133,
    name: "Legarda",
    provincia_id: 31
  },
  {
    id: 8418,
    cp: 31140,
    name: "Artajona",
    provincia_id: 31
  },
  {
    id: 8419,
    cp: 31150,
    name: "Mendigorría",
    provincia_id: 31
  },
  {
    id: 8420,
    cp: 31151,
    name: "Obanos",
    provincia_id: 31
  },
  {
    id: 8421,
    cp: 31152,
    name: "Muruzábal",
    provincia_id: 31
  },
  {
    id: 8422,
    cp: 31153,
    name: "Enériz Eneritz",
    provincia_id: 31
  },
  {
    id: 8423,
    cp: 31153,
    name: "Adiós",
    provincia_id: 31
  },
  {
    id: 8424,
    cp: 31154,
    name: "Tirapu",
    provincia_id: 31
  },
  {
    id: 8425,
    cp: 31154,
    name: "Ucar",
    provincia_id: 31
  },
  {
    id: 8426,
    cp: 31154,
    name: "A?orbe",
    provincia_id: 31
  },
  {
    id: 8427,
    cp: 31160,
    name: "Orkoien",
    provincia_id: 31
  },
  {
    id: 8428,
    cp: 31170,
    name: "Cendea de Olza Oltza Zendea",
    provincia_id: 31
  },
  {
    id: 8429,
    cp: 31170,
    name: "Iza Itza",
    provincia_id: 31
  },
  {
    id: 8430,
    cp: 31171,
    name: "Cendea de Olza Oltza Zendea",
    provincia_id: 31
  },
  {
    id: 8431,
    cp: 31172,
    name: "Iza Itza",
    provincia_id: 31
  },
  {
    id: 8432,
    cp: 31172,
    name: "Valle de Ollo Ollaran",
    provincia_id: 31
  },
  {
    id: 8433,
    cp: 31172,
    name: "Go?i",
    provincia_id: 31
  },
  {
    id: 8434,
    cp: 31173,
    name: "Cendea de Olza Oltza Zendea",
    provincia_id: 31
  },
  {
    id: 8435,
    cp: 31174,
    name: "Belascoáin",
    provincia_id: 31
  },
  {
    id: 8436,
    cp: 31174,
    name: "Bidaurreta",
    provincia_id: 31
  },
  {
    id: 8437,
    cp: 31174,
    name: "Ciriza Ziritza",
    provincia_id: 31
  },
  {
    id: 8438,
    cp: 31174,
    name: "Etxauri",
    provincia_id: 31
  },
  {
    id: 8439,
    cp: 31174,
    name: "Zabalza Zabaltza",
    provincia_id: 31
  },
  {
    id: 8440,
    cp: 31174,
    name: "Guirguillano",
    provincia_id: 31
  },
  {
    id: 8441,
    cp: 31174,
    name: "Echarri Etxarri",
    provincia_id: 31
  },
  {
    id: 8442,
    cp: 31174,
    name: "Cizur",
    provincia_id: 31
  },
  {
    id: 8443,
    cp: 31175,
    name: "Salinas de Oro Jaitz",
    provincia_id: 31
  },
  {
    id: 8444,
    cp: 31175,
    name: "Guesálaz Gesalatz",
    provincia_id: 31
  },
  {
    id: 8445,
    cp: 31176,
    name: "Valle de Yerri Deierri",
    provincia_id: 31
  },
  {
    id: 8446,
    cp: 31176,
    name: "Guesálaz Gesalatz",
    provincia_id: 31
  },
  {
    id: 8447,
    cp: 31177,
    name: "Lezáun",
    provincia_id: 31
  },
  {
    id: 8448,
    cp: 31177,
    name: "Valle de Yerri Deierri",
    provincia_id: 31
  },
  {
    id: 8449,
    cp: 31178,
    name: "Abárzuza Abartzuza",
    provincia_id: 31
  },
  {
    id: 8450,
    cp: 31179,
    name: "Valle de Yerri Deierri",
    provincia_id: 31
  },
  {
    id: 8451,
    cp: 31180,
    name: "Zizur Mayor Zizur Nagusia",
    provincia_id: 31
  },
  {
    id: 8452,
    cp: 31190,
    name: "Cizur",
    provincia_id: 31
  },
  {
    id: 8453,
    cp: 31191,
    name: "Galar",
    provincia_id: 31
  },
  {
    id: 8454,
    cp: 31191,
    name: "Beriáin",
    provincia_id: 31
  },
  {
    id: 8455,
    cp: 31192,
    name: "Valle de Egüés Eguesibar",
    provincia_id: 31
  },
  {
    id: 8456,
    cp: 31192,
    name: "Aranguren",
    provincia_id: 31
  },
  {
    id: 8457,
    cp: 31193,
    name: "Atez Atetz",
    provincia_id: 31
  },
  {
    id: 8458,
    cp: 31193,
    name: "Juslape?a",
    provincia_id: 31
  },
  {
    id: 8459,
    cp: 31194,
    name: "Juslape?a",
    provincia_id: 31
  },
  {
    id: 8460,
    cp: 31194,
    name: "Ezcabarte",
    provincia_id: 31
  },
  {
    id: 8461,
    cp: 31195,
    name: "Berriozar",
    provincia_id: 31
  },
  {
    id: 8462,
    cp: 31195,
    name: "Berrioplano Berriobeiti",
    provincia_id: 31
  },
  {
    id: 8463,
    cp: 31200,
    name: "Estella-Lizarra",
    provincia_id: 31
  },
  {
    id: 8464,
    cp: 31208,
    name: "Ayegui Aiegi",
    provincia_id: 31
  },
  {
    id: 8465,
    cp: 31210,
    name: "Los Arcos",
    provincia_id: 31
  },
  {
    id: 8466,
    cp: 31219,
    name: "Sorlada",
    provincia_id: 31
  },
  {
    id: 8467,
    cp: 31219,
    name: "Mirafuentes",
    provincia_id: 31
  },
  {
    id: 8468,
    cp: 31219,
    name: "Torralba del Río",
    provincia_id: 31
  },
  {
    id: 8469,
    cp: 31219,
    name: "Mendaza",
    provincia_id: 31
  },
  {
    id: 8470,
    cp: 31219,
    name: "Mues",
    provincia_id: 31
  },
  {
    id: 8471,
    cp: 31219,
    name: "Piedramillera",
    provincia_id: 31
  },
  {
    id: 8472,
    cp: 31220,
    name: "Sansol",
    provincia_id: 31
  },
  {
    id: 8473,
    cp: 31227,
    name: "Genevilla",
    provincia_id: 31
  },
  {
    id: 8474,
    cp: 31227,
    name: "Lapoblación",
    provincia_id: 31
  },
  {
    id: 8475,
    cp: 31227,
    name: "Mara?ón",
    provincia_id: 31
  },
  {
    id: 8476,
    cp: 31227,
    name: "Cabredo",
    provincia_id: 31
  },
  {
    id: 8477,
    cp: 31228,
    name: "Azuelo",
    provincia_id: 31
  },
  {
    id: 8478,
    cp: 31228,
    name: "Arma?anzas",
    provincia_id: 31
  },
  {
    id: 8479,
    cp: 31228,
    name: "Torralba del Río",
    provincia_id: 31
  },
  {
    id: 8480,
    cp: 31228,
    name: "Aguilar de Codés",
    provincia_id: 31
  },
  {
    id: 8481,
    cp: 31228,
    name: "Espronceda",
    provincia_id: 31
  },
  {
    id: 8482,
    cp: 31229,
    name: "Torres del Río",
    provincia_id: 31
  },
  {
    id: 8483,
    cp: 31229,
    name: "El Busto",
    provincia_id: 31
  },
  {
    id: 8484,
    cp: 31229,
    name: "Desojo",
    provincia_id: 31
  },
  {
    id: 8485,
    cp: 31229,
    name: "Bargota",
    provincia_id: 31
  },
  {
    id: 8486,
    cp: 31230,
    name: "Viana",
    provincia_id: 31
  },
  {
    id: 8487,
    cp: 31239,
    name: "Aras",
    provincia_id: 31
  },
  {
    id: 8488,
    cp: 31240,
    name: "Ayegui Aiegi",
    provincia_id: 31
  },
  {
    id: 8489,
    cp: 31241,
    name: "Metauten",
    provincia_id: 31
  },
  {
    id: 8490,
    cp: 31241,
    name: "Allín Allin",
    provincia_id: 31
  },
  {
    id: 8491,
    cp: 31241,
    name: "Igúzquiza",
    provincia_id: 31
  },
  {
    id: 8492,
    cp: 31242,
    name: "Villamayor de Monjardín",
    provincia_id: 31
  },
  {
    id: 8493,
    cp: 31243,
    name: "Luquin",
    provincia_id: 31
  },
  {
    id: 8494,
    cp: 31243,
    name: "Igúzquiza",
    provincia_id: 31
  },
  {
    id: 8495,
    cp: 31243,
    name: "Barbarin",
    provincia_id: 31
  },
  {
    id: 8496,
    cp: 31243,
    name: "Arróniz",
    provincia_id: 31
  },
  {
    id: 8497,
    cp: 31250,
    name: "Oteiza",
    provincia_id: 31
  },
  {
    id: 8498,
    cp: 31251,
    name: "Larraga",
    provincia_id: 31
  },
  {
    id: 8499,
    cp: 31252,
    name: "Berbinzana",
    provincia_id: 31
  },
  {
    id: 8500,
    cp: 31253,
    name: "Miranda de Arga",
    provincia_id: 31
  },
  {
    id: 8501,
    cp: 31260,
    name: "Lerín",
    provincia_id: 31
  },
  {
    id: 8502,
    cp: 31261,
    name: "Andosilla",
    provincia_id: 31
  },
  {
    id: 8503,
    cp: 31262,
    name: "Allo",
    provincia_id: 31
  },
  {
    id: 8504,
    cp: 31263,
    name: "Arellano",
    provincia_id: 31
  },
  {
    id: 8505,
    cp: 31263,
    name: "Dicastillo",
    provincia_id: 31
  },
  {
    id: 8506,
    cp: 31264,
    name: "Morentin",
    provincia_id: 31
  },
  {
    id: 8507,
    cp: 31264,
    name: "Aberin",
    provincia_id: 31
  },
  {
    id: 8508,
    cp: 31270,
    name: "Larraona",
    provincia_id: 31
  },
  {
    id: 8509,
    cp: 31271,
    name: "Aranarache Aranaratxe",
    provincia_id: 31
  },
  {
    id: 8510,
    cp: 31271,
    name: "Eulate",
    provincia_id: 31
  },
  {
    id: 8511,
    cp: 31272,
    name: "Améscoa Baja",
    provincia_id: 31
  },
  {
    id: 8512,
    cp: 31280,
    name: "Murieta",
    provincia_id: 31
  },
  {
    id: 8513,
    cp: 31280,
    name: "Ancín Antzin",
    provincia_id: 31
  },
  {
    id: 8514,
    cp: 31280,
    name: "Abáigar",
    provincia_id: 31
  },
  {
    id: 8515,
    cp: 31281,
    name: "Olejua",
    provincia_id: 31
  },
  {
    id: 8516,
    cp: 31281,
    name: "Legaria",
    provincia_id: 31
  },
  {
    id: 8517,
    cp: 31281,
    name: "Oco",
    provincia_id: 31
  },
  {
    id: 8518,
    cp: 31281,
    name: "Etayo",
    provincia_id: 31
  },
  {
    id: 8519,
    cp: 31281,
    name: "Ancín Antzin",
    provincia_id: 31
  },
  {
    id: 8520,
    cp: 31282,
    name: "Nazar",
    provincia_id: 31
  },
  {
    id: 8521,
    cp: 31282,
    name: "Mendaza",
    provincia_id: 31
  },
  {
    id: 8522,
    cp: 31283,
    name: "Lana",
    provincia_id: 31
  },
  {
    id: 8523,
    cp: 31284,
    name: "Zú?iga",
    provincia_id: 31
  },
  {
    id: 8524,
    cp: 31290,
    name: "Allín Allin",
    provincia_id: 31
  },
  {
    id: 8525,
    cp: 31290,
    name: "Valle de Yerri Deierri",
    provincia_id: 31
  },
  {
    id: 8526,
    cp: 31291,
    name: "Guirguillano",
    provincia_id: 31
  },
  {
    id: 8527,
    cp: 31291,
    name: "Guesálaz Gesalatz",
    provincia_id: 31
  },
  {
    id: 8528,
    cp: 31292,
    name: "Villatuerta",
    provincia_id: 31
  },
  {
    id: 8529,
    cp: 31292,
    name: "Aberin",
    provincia_id: 31
  },
  {
    id: 8530,
    cp: 31292,
    name: "Valle de Yerri Deierri",
    provincia_id: 31
  },
  {
    id: 8531,
    cp: 31293,
    name: "Sesma",
    provincia_id: 31
  },
  {
    id: 8532,
    cp: 31300,
    name: "Tafalla",
    provincia_id: 31
  },
  {
    id: 8533,
    cp: 31310,
    name: "Carcastillo",
    provincia_id: 31
  },
  {
    id: 8534,
    cp: 31311,
    name: "Carcastillo",
    provincia_id: 31
  },
  {
    id: 8535,
    cp: 31312,
    name: "Cáseda",
    provincia_id: 31
  },
  {
    id: 8536,
    cp: 31313,
    name: "Murillo el Fruto",
    provincia_id: 31
  },
  {
    id: 8537,
    cp: 31314,
    name: "Santacara",
    provincia_id: 31
  },
  {
    id: 8538,
    cp: 31315,
    name: "Murillo el Cuende",
    provincia_id: 31
  },
  {
    id: 8539,
    cp: 31320,
    name: "Milagro",
    provincia_id: 31
  },
  {
    id: 8540,
    cp: 31330,
    name: "Villafranca",
    provincia_id: 31
  },
  {
    id: 8541,
    cp: 31340,
    name: "Marcilla",
    provincia_id: 31
  },
  {
    id: 8542,
    cp: 31350,
    name: "Peralta Azkoien",
    provincia_id: 31
  },
  {
    id: 8543,
    cp: 31360,
    name: "Funes",
    provincia_id: 31
  },
  {
    id: 8544,
    cp: 31370,
    name: "Falces",
    provincia_id: 31
  },
  {
    id: 8545,
    cp: 31380,
    name: "Caparroso",
    provincia_id: 31
  },
  {
    id: 8546,
    cp: 31381,
    name: "Caparroso",
    provincia_id: 31
  },
  {
    id: 8547,
    cp: 31382,
    name: "Mélida",
    provincia_id: 31
  },
  {
    id: 8548,
    cp: 31383,
    name: "Murillo el Cuende",
    provincia_id: 31
  },
  {
    id: 8549,
    cp: 31390,
    name: "Olite Erriberri",
    provincia_id: 31
  },
  {
    id: 8550,
    cp: 31391,
    name: "Murillo el Cuende",
    provincia_id: 31
  },
  {
    id: 8551,
    cp: 31392,
    name: "Pitillas",
    provincia_id: 31
  },
  {
    id: 8552,
    cp: 31393,
    name: "Beire",
    provincia_id: 31
  },
  {
    id: 8553,
    cp: 31394,
    name: "Pueyo",
    provincia_id: 31
  },
  {
    id: 8554,
    cp: 31395,
    name: "Barásoain",
    provincia_id: 31
  },
  {
    id: 8555,
    cp: 31395,
    name: "Garínoain",
    provincia_id: 31
  },
  {
    id: 8556,
    cp: 31395,
    name: "Leoz Leotz",
    provincia_id: 31
  },
  {
    id: 8557,
    cp: 31395,
    name: "Olóriz Oloritz",
    provincia_id: 31
  },
  {
    id: 8558,
    cp: 31395,
    name: "Orísoain",
    provincia_id: 31
  },
  {
    id: 8559,
    cp: 31396,
    name: "Olóriz Oloritz",
    provincia_id: 31
  },
  {
    id: 8560,
    cp: 31396,
    name: "Unzué Untzue",
    provincia_id: 31
  },
  {
    id: 8561,
    cp: 31397,
    name: "Tiebas-Muruarte de Reta",
    provincia_id: 31
  },
  {
    id: 8562,
    cp: 31398,
    name: "Biurrun-Olcoz",
    provincia_id: 31
  },
  {
    id: 8563,
    cp: 31398,
    name: "Tiebas-Muruarte de Reta",
    provincia_id: 31
  },
  {
    id: 8564,
    cp: 31400,
    name: "Sangüesa Zangoza",
    provincia_id: 31
  },
  {
    id: 8565,
    cp: 31409,
    name: "Sangüesa Zangoza",
    provincia_id: 31
  },
  {
    id: 8566,
    cp: 31409,
    name: "Javier",
    provincia_id: 31
  },
  {
    id: 8567,
    cp: 31410,
    name: "Yesa",
    provincia_id: 31
  },
  {
    id: 8568,
    cp: 31411,
    name: "Javier",
    provincia_id: 31
  },
  {
    id: 8569,
    cp: 31412,
    name: "Burgui Burgi",
    provincia_id: 31
  },
  {
    id: 8570,
    cp: 31413,
    name: "Vidángoz Bidankoze",
    provincia_id: 31
  },
  {
    id: 8571,
    cp: 31414,
    name: "Garde",
    provincia_id: 31
  },
  {
    id: 8572,
    cp: 31415,
    name: "Roncal Erronkari",
    provincia_id: 31
  },
  {
    id: 8573,
    cp: 31416,
    name: "Urzainqui Urzainki",
    provincia_id: 31
  },
  {
    id: 8574,
    cp: 31417,
    name: "Isaba Izaba",
    provincia_id: 31
  },
  {
    id: 8575,
    cp: 31418,
    name: "Uztárroz Uztarroze",
    provincia_id: 31
  },
  {
    id: 8576,
    cp: 31420,
    name: "Urroz-Villa",
    provincia_id: 31
  },
  {
    id: 8577,
    cp: 31421,
    name: "Izagaondoa",
    provincia_id: 31
  },
  {
    id: 8578,
    cp: 31422,
    name: "Unciti",
    provincia_id: 31
  },
  {
    id: 8579,
    cp: 31430,
    name: "Aoiz Agoitz",
    provincia_id: 31
  },
  {
    id: 8580,
    cp: 31438,
    name: "Arce Artzi",
    provincia_id: 31
  },
  {
    id: 8581,
    cp: 31438,
    name: "Lónguida Longida",
    provincia_id: 31
  },
  {
    id: 8582,
    cp: 31439,
    name: "Lónguida Longida",
    provincia_id: 31
  },
  {
    id: 8583,
    cp: 31439,
    name: "Arce Artzi",
    provincia_id: 31
  },
  {
    id: 8584,
    cp: 31439,
    name: "Oroz-Betelu Orotz-Betelu",
    provincia_id: 31
  },
  {
    id: 8585,
    cp: 31440,
    name: "Lumbier",
    provincia_id: 31
  },
  {
    id: 8586,
    cp: 31448,
    name: "Urraul Alto",
    provincia_id: 31
  },
  {
    id: 8587,
    cp: 31448,
    name: "Urraul Bajo",
    provincia_id: 31
  },
  {
    id: 8588,
    cp: 31449,
    name: "Urraul Bajo",
    provincia_id: 31
  },
  {
    id: 8589,
    cp: 31450,
    name: "Navascués Nabaskoze",
    provincia_id: 31
  },
  {
    id: 8590,
    cp: 31451,
    name: "Sarriés Sartze",
    provincia_id: 31
  },
  {
    id: 8591,
    cp: 31451,
    name: "Gallués Galoze",
    provincia_id: 31
  },
  {
    id: 8592,
    cp: 31451,
    name: "Oronz Orontze",
    provincia_id: 31
  },
  {
    id: 8593,
    cp: 31451,
    name: "Navascués Nabaskoze",
    provincia_id: 31
  },
  {
    id: 8594,
    cp: 31452,
    name: "Güesa Gorza",
    provincia_id: 31
  },
  {
    id: 8595,
    cp: 31453,
    name: "Esparza de Salazar Espartza Zaraitzu",
    provincia_id: 31
  },
  {
    id: 8596,
    cp: 31454,
    name: "Castillonuevo",
    provincia_id: 31
  },
  {
    id: 8597,
    cp: 31454,
    name: "Navascués Nabaskoze",
    provincia_id: 31
  },
  {
    id: 8598,
    cp: 31454,
    name: "Urraul Alto",
    provincia_id: 31
  },
  {
    id: 8599,
    cp: 31454,
    name: "Romanzado",
    provincia_id: 31
  },
  {
    id: 8600,
    cp: 31460,
    name: "Aibar Oibar",
    provincia_id: 31
  },
  {
    id: 8601,
    cp: 31460,
    name: "Leache Leatxe",
    provincia_id: 31
  },
  {
    id: 8602,
    cp: 31470,
    name: "Noáin (Valle de Elorz) Noain (Elortzibar)",
    provincia_id: 31
  },
  {
    id: 8603,
    cp: 31471,
    name: "Monreal Elo",
    provincia_id: 31
  },
  {
    id: 8604,
    cp: 31472,
    name: "Unciti",
    provincia_id: 31
  },
  {
    id: 8605,
    cp: 31472,
    name: "Ibargoiti",
    provincia_id: 31
  },
  {
    id: 8606,
    cp: 31473,
    name: "Ibargoiti",
    provincia_id: 31
  },
  {
    id: 8607,
    cp: 31480,
    name: "Urraul Bajo",
    provincia_id: 31
  },
  {
    id: 8608,
    cp: 31481,
    name: "Lónguida Longida",
    provincia_id: 31
  },
  {
    id: 8609,
    cp: 31481,
    name: "Arce Artzi",
    provincia_id: 31
  },
  {
    id: 8610,
    cp: 31482,
    name: "Lizoáin-Arriasgoiti",
    provincia_id: 31
  },
  {
    id: 8611,
    cp: 31483,
    name: "Lizoáin-Arriasgoiti",
    provincia_id: 31
  },
  {
    id: 8612,
    cp: 31484,
    name: "Lizoáin-Arriasgoiti",
    provincia_id: 31
  },
  {
    id: 8613,
    cp: 31485,
    name: "Lizoáin-Arriasgoiti",
    provincia_id: 31
  },
  {
    id: 8614,
    cp: 31486,
    name: "Valle de Egüés Eguesibar",
    provincia_id: 31
  },
  {
    id: 8615,
    cp: 31487,
    name: "Liédena",
    provincia_id: 31
  },
  {
    id: 8616,
    cp: 31490,
    name: "Cáseda",
    provincia_id: 31
  },
  {
    id: 8617,
    cp: 31491,
    name: "Ezprogui",
    provincia_id: 31
  },
  {
    id: 8618,
    cp: 31492,
    name: "Ezprogui",
    provincia_id: 31
  },
  {
    id: 8619,
    cp: 31493,
    name: "Gallipienzo Galipentzu",
    provincia_id: 31
  },
  {
    id: 8620,
    cp: 31494,
    name: "Leoz Leotz",
    provincia_id: 31
  },
  {
    id: 8621,
    cp: 31494,
    name: "Eslava",
    provincia_id: 31
  },
  {
    id: 8622,
    cp: 31494,
    name: "Lerga",
    provincia_id: 31
  },
  {
    id: 8623,
    cp: 31495,
    name: "San Martín de Unx",
    provincia_id: 31
  },
  {
    id: 8624,
    cp: 31496,
    name: "Ujué",
    provincia_id: 31
  },
  {
    id: 8625,
    cp: 31500,
    name: "Tudela",
    provincia_id: 31
  },
  {
    id: 8626,
    cp: 31510,
    name: "Fusti?ana",
    provincia_id: 31
  },
  {
    id: 8627,
    cp: 31511,
    name: "Cabanillas",
    provincia_id: 31
  },
  {
    id: 8628,
    cp: 31512,
    name: "Fontellas",
    provincia_id: 31
  },
  {
    id: 8629,
    cp: 31513,
    name: "Arguedas",
    provincia_id: 31
  },
  {
    id: 8630,
    cp: 31514,
    name: "Valtierra",
    provincia_id: 31
  },
  {
    id: 8631,
    cp: 31515,
    name: "Cadreita",
    provincia_id: 31
  },
  {
    id: 8632,
    cp: 31520,
    name: "Cascante",
    provincia_id: 31
  },
  {
    id: 8633,
    cp: 31521,
    name: "Murchante",
    provincia_id: 31
  },
  {
    id: 8634,
    cp: 31522,
    name: "Monteagudo",
    provincia_id: 31
  },
  {
    id: 8635,
    cp: 31522,
    name: "Tulebras",
    provincia_id: 31
  },
  {
    id: 8636,
    cp: 31523,
    name: "Ablitas",
    provincia_id: 31
  },
  {
    id: 8637,
    cp: 31523,
    name: "Miranda de Arga",
    provincia_id: 31
  },
  {
    id: 8638,
    cp: 31523,
    name: "Barillas",
    provincia_id: 31
  },
  {
    id: 8639,
    cp: 31530,
    name: "Cortes",
    provincia_id: 31
  },
  {
    id: 8640,
    cp: 31540,
    name: "Bu?uel",
    provincia_id: 31
  },
  {
    id: 8641,
    cp: 31550,
    name: "Ribaforada",
    provincia_id: 31
  },
  {
    id: 8642,
    cp: 31560,
    name: "Azagra",
    provincia_id: 31
  },
  {
    id: 8643,
    cp: 31570,
    name: "San Adrián",
    provincia_id: 31
  },
  {
    id: 8644,
    cp: 31579,
    name: "Cárcar",
    provincia_id: 31
  },
  {
    id: 8645,
    cp: 31580,
    name: "Lodosa",
    provincia_id: 31
  },
  {
    id: 8646,
    cp: 31587,
    name: "Mendavia",
    provincia_id: 31
  },
  {
    id: 8647,
    cp: 31588,
    name: "Lazagurría",
    provincia_id: 31
  },
  {
    id: 8648,
    cp: 31589,
    name: "Sartaguda",
    provincia_id: 31
  },
  {
    id: 8649,
    cp: 31590,
    name: "Castejón",
    provincia_id: 31
  },
  {
    id: 8650,
    cp: 31591,
    name: "Corella",
    provincia_id: 31
  },
  {
    id: 8651,
    cp: 31592,
    name: "Cintruénigo",
    provincia_id: 31
  },
  {
    id: 8652,
    cp: 31593,
    name: "Fitero",
    provincia_id: 31
  },
  {
    id: 8653,
    cp: 31600,
    name: "Burlada Burlata",
    provincia_id: 31
  },
  {
    id: 8654,
    cp: 31610,
    name: "Villava Atarrabia",
    provincia_id: 31
  },
  {
    id: 8655,
    cp: 31620,
    name: "Huarte Uharte",
    provincia_id: 31
  },
  {
    id: 8656,
    cp: 31620,
    name: "Valle de Egüés Eguesibar",
    provincia_id: 31
  },
  {
    id: 8657,
    cp: 31621,
    name: "Valle de Egüés Eguesibar",
    provincia_id: 31
  },
  {
    id: 8658,
    cp: 31630,
    name: "Esteribar",
    provincia_id: 31
  },
  {
    id: 8659,
    cp: 31638,
    name: "Esteribar",
    provincia_id: 31
  },
  {
    id: 8660,
    cp: 31638,
    name: "Erro",
    provincia_id: 31
  },
  {
    id: 8661,
    cp: 31639,
    name: "Esteribar",
    provincia_id: 31
  },
  {
    id: 8662,
    cp: 31639,
    name: "Erro",
    provincia_id: 31
  },
  {
    id: 8663,
    cp: 31640,
    name: "Auritz Burguete",
    provincia_id: 31
  },
  {
    id: 8664,
    cp: 31650,
    name: "Orreaga Roncesvalles",
    provincia_id: 31
  },
  {
    id: 8665,
    cp: 31660,
    name: "Luzaide Valcarlos",
    provincia_id: 31
  },
  {
    id: 8666,
    cp: 31669,
    name: "Luzaide Valcarlos",
    provincia_id: 31
  },
  {
    id: 8667,
    cp: 31670,
    name: "Orbaizeta",
    provincia_id: 31
  },
  {
    id: 8668,
    cp: 31671,
    name: "Aribe",
    provincia_id: 31
  },
  {
    id: 8669,
    cp: 31671,
    name: "Orbara",
    provincia_id: 31
  },
  {
    id: 8670,
    cp: 31671,
    name: "Hiriberri Villanueva de Aezkoa",
    provincia_id: 31
  },
  {
    id: 8671,
    cp: 31671,
    name: "Aria",
    provincia_id: 31
  },
  {
    id: 8672,
    cp: 31680,
    name: "Ochagavía Otsagabia",
    provincia_id: 31
  },
  {
    id: 8673,
    cp: 31689,
    name: "Izalzu Itzaltzu",
    provincia_id: 31
  },
  {
    id: 8674,
    cp: 31690,
    name: "Ezcároz Ezkaroze",
    provincia_id: 31
  },
  {
    id: 8675,
    cp: 31691,
    name: "Jaurrieta",
    provincia_id: 31
  },
  {
    id: 8676,
    cp: 31692,
    name: "Abaurregaina Abaurrea Alta",
    provincia_id: 31
  },
  {
    id: 8677,
    cp: 31692,
    name: "Garaioa",
    provincia_id: 31
  },
  {
    id: 8678,
    cp: 31692,
    name: "Abaurrepea Abaurrea Baja",
    provincia_id: 31
  },
  {
    id: 8679,
    cp: 31693,
    name: "Garralda",
    provincia_id: 31
  },
  {
    id: 8680,
    cp: 31694,
    name: "Erro",
    provincia_id: 31
  },
  {
    id: 8681,
    cp: 31695,
    name: "Erro",
    provincia_id: 31
  },
  {
    id: 8682,
    cp: 31696,
    name: "Erro",
    provincia_id: 31
  },
  {
    id: 8683,
    cp: 31697,
    name: "Erro",
    provincia_id: 31
  },
  {
    id: 8684,
    cp: 31698,
    name: "Esteribar",
    provincia_id: 31
  },
  {
    id: 8685,
    cp: 31699,
    name: "Esteribar",
    provincia_id: 31
  },
  {
    id: 8686,
    cp: 31699,
    name: "Erro",
    provincia_id: 31
  },
  {
    id: 8687,
    cp: 31700,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8688,
    cp: 31710,
    name: "Zugarramurdi",
    provincia_id: 31
  },
  {
    id: 8689,
    cp: 31711,
    name: "Urdazubi Urdax",
    provincia_id: 31
  },
  {
    id: 8690,
    cp: 31712,
    name: "Urdazubi Urdax",
    provincia_id: 31
  },
  {
    id: 8691,
    cp: 31713,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8692,
    cp: 31714,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8693,
    cp: 31715,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8694,
    cp: 31720,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8695,
    cp: 31720,
    name: "Bertizarana",
    provincia_id: 31
  },
  {
    id: 8696,
    cp: 31730,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8697,
    cp: 31740,
    name: "Doneztebe Santesteban",
    provincia_id: 31
  },
  {
    id: 8698,
    cp: 31744,
    name: "Elgorriaga",
    provincia_id: 31
  },
  {
    id: 8699,
    cp: 31745,
    name: "Ituren",
    provincia_id: 31
  },
  {
    id: 8700,
    cp: 31746,
    name: "Zubieta",
    provincia_id: 31
  },
  {
    id: 8701,
    cp: 31747,
    name: "Saldías",
    provincia_id: 31
  },
  {
    id: 8702,
    cp: 31748,
    name: "Eratsun",
    provincia_id: 31
  },
  {
    id: 8703,
    cp: 31749,
    name: "Ezkurra",
    provincia_id: 31
  },
  {
    id: 8704,
    cp: 31750,
    name: "Donamaria",
    provincia_id: 31
  },
  {
    id: 8705,
    cp: 31751,
    name: "Oiz",
    provincia_id: 31
  },
  {
    id: 8706,
    cp: 31752,
    name: "Urroz",
    provincia_id: 31
  },
  {
    id: 8707,
    cp: 31753,
    name: "Beintza-Labaien",
    provincia_id: 31
  },
  {
    id: 8708,
    cp: 31754,
    name: "Goizueta",
    provincia_id: 31
  },
  {
    id: 8709,
    cp: 31754,
    name: "Arano",
    provincia_id: 31
  },
  {
    id: 8710,
    cp: 31760,
    name: "Etxalar",
    provincia_id: 31
  },
  {
    id: 8711,
    cp: 31770,
    name: "Lesaka",
    provincia_id: 31
  },
  {
    id: 8712,
    cp: 31780,
    name: "Bera",
    provincia_id: 31
  },
  {
    id: 8713,
    cp: 31789,
    name: "Bera",
    provincia_id: 31
  },
  {
    id: 8714,
    cp: 31789,
    name: "Lesaka",
    provincia_id: 31
  },
  {
    id: 8715,
    cp: 31790,
    name: "Igantzi",
    provincia_id: 31
  },
  {
    id: 8716,
    cp: 31790,
    name: "Arantza",
    provincia_id: 31
  },
  {
    id: 8717,
    cp: 31791,
    name: "Sunbilla",
    provincia_id: 31
  },
  {
    id: 8718,
    cp: 31792,
    name: "Bertizarana",
    provincia_id: 31
  },
  {
    id: 8719,
    cp: 31793,
    name: "Bertizarana",
    provincia_id: 31
  },
  {
    id: 8720,
    cp: 31794,
    name: "Ezkurra",
    provincia_id: 31
  },
  {
    id: 8721,
    cp: 31794,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8722,
    cp: 31795,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8723,
    cp: 31796,
    name: "Baztan",
    provincia_id: 31
  },
  {
    id: 8724,
    cp: 31797,
    name: "Ultzama",
    provincia_id: 31
  },
  {
    id: 8725,
    cp: 31798,
    name: "Anue",
    provincia_id: 31
  },
  {
    id: 8726,
    cp: 31798,
    name: "Lantz",
    provincia_id: 31
  },
  {
    id: 8727,
    cp: 31799,
    name: "Odieta",
    provincia_id: 31
  },
  {
    id: 8728,
    cp: 31799,
    name: "Olaibar",
    provincia_id: 31
  },
  {
    id: 8729,
    cp: 31799,
    name: "Ultzama",
    provincia_id: 31
  },
  {
    id: 8730,
    cp: 31799,
    name: "Ezcabarte",
    provincia_id: 31
  },
  {
    id: 8731,
    cp: 31800,
    name: "Altsasu Alsasua",
    provincia_id: 31
  },
  {
    id: 8732,
    cp: 31809,
    name: "Olazti Olazagutía",
    provincia_id: 31
  },
  {
    id: 8733,
    cp: 31809,
    name: "Ziordia",
    provincia_id: 31
  },
  {
    id: 8734,
    cp: 31810,
    name: "Iturmendi",
    provincia_id: 31
  },
  {
    id: 8735,
    cp: 31810,
    name: "Urdiain",
    provincia_id: 31
  },
  {
    id: 8736,
    cp: 31810,
    name: "Bakaiku",
    provincia_id: 31
  },
  {
    id: 8737,
    cp: 31820,
    name: "Etxarri Aranatz",
    provincia_id: 31
  },
  {
    id: 8738,
    cp: 31829,
    name: "Ergoiena",
    provincia_id: 31
  },
  {
    id: 8739,
    cp: 31830,
    name: "Lakuntza",
    provincia_id: 31
  },
  {
    id: 8740,
    cp: 31839,
    name: "Arbizu",
    provincia_id: 31
  },
  {
    id: 8741,
    cp: 31840,
    name: "Arruazu",
    provincia_id: 31
  },
  {
    id: 8742,
    cp: 31840,
    name: "Uharte Arakil",
    provincia_id: 31
  },
  {
    id: 8743,
    cp: 31849,
    name: "Ira?eta",
    provincia_id: 31
  },
  {
    id: 8744,
    cp: 31849,
    name: "Arakil",
    provincia_id: 31
  },
  {
    id: 8745,
    cp: 31850,
    name: "Arakil",
    provincia_id: 31
  },
  {
    id: 8746,
    cp: 31860,
    name: "Irurtzun",
    provincia_id: 31
  },
  {
    id: 8747,
    cp: 31866,
    name: "Basaburua",
    provincia_id: 31
  },
  {
    id: 8748,
    cp: 31867,
    name: "Odieta",
    provincia_id: 31
  },
  {
    id: 8749,
    cp: 31867,
    name: "Arakil",
    provincia_id: 31
  },
  {
    id: 8750,
    cp: 31867,
    name: "Imotz",
    provincia_id: 31
  },
  {
    id: 8751,
    cp: 31867,
    name: "Iza Itza",
    provincia_id: 31
  },
  {
    id: 8752,
    cp: 31867,
    name: "Atez Atetz",
    provincia_id: 31
  },
  {
    id: 8753,
    cp: 31868,
    name: "Arakil",
    provincia_id: 31
  },
  {
    id: 8754,
    cp: 31868,
    name: "Iza Itza",
    provincia_id: 31
  },
  {
    id: 8755,
    cp: 31869,
    name: "Imotz",
    provincia_id: 31
  },
  {
    id: 8756,
    cp: 31869,
    name: "Basaburua",
    provincia_id: 31
  },
  {
    id: 8757,
    cp: 31870,
    name: "Lekunberri",
    provincia_id: 31
  },
  {
    id: 8758,
    cp: 31876,
    name: "Areso",
    provincia_id: 31
  },
  {
    id: 8759,
    cp: 31877,
    name: "Larraun",
    provincia_id: 31
  },
  {
    id: 8760,
    cp: 31878,
    name: "Larraun",
    provincia_id: 31
  },
  {
    id: 8761,
    cp: 31879,
    name: "Larraun",
    provincia_id: 31
  },
  {
    id: 8762,
    cp: 31880,
    name: "Leitza",
    provincia_id: 31
  },
  {
    id: 8763,
    cp: 31890,
    name: "Betelu",
    provincia_id: 31
  },
  {
    id: 8764,
    cp: 31891,
    name: "Araitz",
    provincia_id: 31
  },
  {
    id: 8765,
    cp: 31891,
    name: "Larraun",
    provincia_id: 31
  },
  {
    id: 8766,
    cp: 31892,
    name: "Iza Itza",
    provincia_id: 31
  },
  {
    id: 8767,
    cp: 31892,
    name: "Juslape?a",
    provincia_id: 31
  },
  {
    id: 8768,
    cp: 32001,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8769,
    cp: 32002,
    name: "Barbadás",
    provincia_id: 32
  },
  {
    id: 8770,
    cp: 32002,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8771,
    cp: 32003,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8772,
    cp: 32004,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8773,
    cp: 32005,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8774,
    cp: 32005,
    name: "San Cibrao das Vi?as",
    provincia_id: 32
  },
  {
    id: 8775,
    cp: 32005,
    name: "Barbadás",
    provincia_id: 32
  },
  {
    id: 8776,
    cp: 32100,
    name: "Coles",
    provincia_id: 32
  },
  {
    id: 8777,
    cp: 32101,
    name: "Vilamarín",
    provincia_id: 32
  },
  {
    id: 8778,
    cp: 32102,
    name: "Vilamarín",
    provincia_id: 32
  },
  {
    id: 8779,
    cp: 32103,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8780,
    cp: 32110,
    name: "Paderne de Allariz",
    provincia_id: 32
  },
  {
    id: 8781,
    cp: 32111,
    name: "Paderne de Allariz",
    provincia_id: 32
  },
  {
    id: 8782,
    cp: 32120,
    name: "A Peroxa",
    provincia_id: 32
  },
  {
    id: 8783,
    cp: 32120,
    name: "Vilamarín",
    provincia_id: 32
  },
  {
    id: 8784,
    cp: 32130,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8785,
    cp: 32131,
    name: "Lorca",
    provincia_id: 30
  },
  {
    id: 8786,
    cp: 32133,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8787,
    cp: 32134,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8788,
    cp: 32135,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8789,
    cp: 32135,
    name: "Pi?or",
    provincia_id: 32
  },
  {
    id: 8790,
    cp: 32136,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8791,
    cp: 32137,
    name: "Pi?or",
    provincia_id: 32
  },
  {
    id: 8792,
    cp: 32137,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8793,
    cp: 32138,
    name: "Pi?or",
    provincia_id: 32
  },
  {
    id: 8794,
    cp: 32139,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8795,
    cp: 32140,
    name: "Vilamarín",
    provincia_id: 32
  },
  {
    id: 8796,
    cp: 32141,
    name: "Vilamarín",
    provincia_id: 32
  },
  {
    id: 8797,
    cp: 32141,
    name: "San Cristovo de Cea",
    provincia_id: 32
  },
  {
    id: 8798,
    cp: 32150,
    name: "A Peroxa",
    provincia_id: 32
  },
  {
    id: 8799,
    cp: 32151,
    name: "A Peroxa",
    provincia_id: 32
  },
  {
    id: 8800,
    cp: 32152,
    name: "Coles",
    provincia_id: 32
  },
  {
    id: 8801,
    cp: 32153,
    name: "A Peroxa",
    provincia_id: 32
  },
  {
    id: 8802,
    cp: 32153,
    name: "Coles",
    provincia_id: 32
  },
  {
    id: 8803,
    cp: 32160,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 8804,
    cp: 32161,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 8805,
    cp: 32162,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 8806,
    cp: 32163,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 8807,
    cp: 32164,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 8808,
    cp: 32170,
    name: "Amoeiro",
    provincia_id: 32
  },
  {
    id: 8809,
    cp: 32171,
    name: "Amoeiro",
    provincia_id: 32
  },
  {
    id: 8810,
    cp: 32172,
    name: "Amoeiro",
    provincia_id: 32
  },
  {
    id: 8811,
    cp: 32172,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8812,
    cp: 32200,
    name: "Cortegada",
    provincia_id: 32
  },
  {
    id: 8813,
    cp: 32211,
    name: "Cortegada",
    provincia_id: 32
  },
  {
    id: 8814,
    cp: 32212,
    name: "Gomesende",
    provincia_id: 32
  },
  {
    id: 8815,
    cp: 32213,
    name: "Cortegada",
    provincia_id: 32
  },
  {
    id: 8816,
    cp: 32220,
    name: "Padrenda",
    provincia_id: 32
  },
  {
    id: 8817,
    cp: 32226,
    name: "Padrenda",
    provincia_id: 32
  },
  {
    id: 8818,
    cp: 32227,
    name: "Padrenda",
    provincia_id: 32
  },
  {
    id: 8819,
    cp: 32228,
    name: "Padrenda",
    provincia_id: 32
  },
  {
    id: 8820,
    cp: 32229,
    name: "Padrenda",
    provincia_id: 32
  },
  {
    id: 8821,
    cp: 32235,
    name: "Pontedeva",
    provincia_id: 32
  },
  {
    id: 8822,
    cp: 32236,
    name: "Padrenda",
    provincia_id: 32
  },
  {
    id: 8823,
    cp: 32300,
    name: "O Barco de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8824,
    cp: 32310,
    name: "Rubiá",
    provincia_id: 32
  },
  {
    id: 8825,
    cp: 32311,
    name: "Rubiá",
    provincia_id: 32
  },
  {
    id: 8826,
    cp: 32312,
    name: "Rubiá",
    provincia_id: 32
  },
  {
    id: 8827,
    cp: 32313,
    name: "O Barco de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8828,
    cp: 32314,
    name: "O Barco de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8829,
    cp: 32315,
    name: "Vilamartín de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8830,
    cp: 32315,
    name: "O Barco de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8831,
    cp: 32316,
    name: "Vilamartín de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8832,
    cp: 32317,
    name: "O Barco de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8833,
    cp: 32318,
    name: "O Barco de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8834,
    cp: 32320,
    name: "Rubiá",
    provincia_id: 32
  },
  {
    id: 8835,
    cp: 32329,
    name: "Rubiá",
    provincia_id: 32
  },
  {
    id: 8836,
    cp: 32329,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8837,
    cp: 32330,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8838,
    cp: 32334,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8839,
    cp: 32335,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8840,
    cp: 32336,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8841,
    cp: 32337,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8842,
    cp: 32338,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8843,
    cp: 32339,
    name: "Carballeda de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8844,
    cp: 32340,
    name: "Vilamartín de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8845,
    cp: 32348,
    name: "Vilamartín de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8846,
    cp: 32349,
    name: "Vilamartín de Valdeorras",
    provincia_id: 32
  },
  {
    id: 8847,
    cp: 32350,
    name: "A Rúa",
    provincia_id: 32
  },
  {
    id: 8848,
    cp: 32356,
    name: "Petín",
    provincia_id: 32
  },
  {
    id: 8849,
    cp: 32357,
    name: "Larouco",
    provincia_id: 32
  },
  {
    id: 8850,
    cp: 32357,
    name: "O Bolo",
    provincia_id: 32
  },
  {
    id: 8851,
    cp: 32357,
    name: "Petín",
    provincia_id: 32
  },
  {
    id: 8852,
    cp: 32357,
    name: "A Veiga",
    provincia_id: 32
  },
  {
    id: 8853,
    cp: 32357,
    name: "A Rúa",
    provincia_id: 32
  },
  {
    id: 8854,
    cp: 32358,
    name: "Larouco",
    provincia_id: 32
  },
  {
    id: 8855,
    cp: 32359,
    name: "A Rúa",
    provincia_id: 32
  },
  {
    id: 8856,
    cp: 32360,
    name: "A Veiga",
    provincia_id: 32
  },
  {
    id: 8857,
    cp: 32365,
    name: "A Veiga",
    provincia_id: 32
  },
  {
    id: 8858,
    cp: 32366,
    name: "A Veiga",
    provincia_id: 32
  },
  {
    id: 8859,
    cp: 32367,
    name: "A Veiga",
    provincia_id: 32
  },
  {
    id: 8860,
    cp: 32368,
    name: "A Veiga",
    provincia_id: 32
  },
  {
    id: 8861,
    cp: 32369,
    name: "A Veiga",
    provincia_id: 32
  },
  {
    id: 8862,
    cp: 32370,
    name: "Petín",
    provincia_id: 32
  },
  {
    id: 8863,
    cp: 32370,
    name: "Larouco",
    provincia_id: 32
  },
  {
    id: 8864,
    cp: 32371,
    name: "Petín",
    provincia_id: 32
  },
  {
    id: 8865,
    cp: 32371,
    name: "Larouco",
    provincia_id: 32
  },
  {
    id: 8866,
    cp: 32372,
    name: "O Bolo",
    provincia_id: 32
  },
  {
    id: 8867,
    cp: 32373,
    name: "O Bolo",
    provincia_id: 32
  },
  {
    id: 8868,
    cp: 32374,
    name: "O Bolo",
    provincia_id: 32
  },
  {
    id: 8869,
    cp: 32375,
    name: "O Bolo",
    provincia_id: 32
  },
  {
    id: 8870,
    cp: 32375,
    name: "Manzaneda",
    provincia_id: 32
  },
  {
    id: 8871,
    cp: 32400,
    name: "Ribadavia",
    provincia_id: 32
  },
  {
    id: 8872,
    cp: 32410,
    name: "Melón",
    provincia_id: 32
  },
  {
    id: 8873,
    cp: 32411,
    name: "Melón",
    provincia_id: 32
  },
  {
    id: 8874,
    cp: 32412,
    name: "Carballeda de Avia",
    provincia_id: 32
  },
  {
    id: 8875,
    cp: 32413,
    name: "Carballeda de Avia",
    provincia_id: 32
  },
  {
    id: 8876,
    cp: 32414,
    name: "Ribadavia",
    provincia_id: 32
  },
  {
    id: 8877,
    cp: 32415,
    name: "Ribadavia",
    provincia_id: 32
  },
  {
    id: 8878,
    cp: 32416,
    name: "Carballeda de Avia",
    provincia_id: 32
  },
  {
    id: 8879,
    cp: 32416,
    name: "Ribadavia",
    provincia_id: 32
  },
  {
    id: 8880,
    cp: 32417,
    name: "Ribadavia",
    provincia_id: 32
  },
  {
    id: 8881,
    cp: 32417,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 8882,
    cp: 32417,
    name: "A Arnoia",
    provincia_id: 32
  },
  {
    id: 8883,
    cp: 32418,
    name: "Ribadavia",
    provincia_id: 32
  },
  {
    id: 8884,
    cp: 32420,
    name: "Leiro",
    provincia_id: 32
  },
  {
    id: 8885,
    cp: 32425,
    name: "Leiro",
    provincia_id: 32
  },
  {
    id: 8886,
    cp: 32426,
    name: "Leiro",
    provincia_id: 32
  },
  {
    id: 8887,
    cp: 32427,
    name: "Leiro",
    provincia_id: 32
  },
  {
    id: 8888,
    cp: 32428,
    name: "Leiro",
    provincia_id: 32
  },
  {
    id: 8889,
    cp: 32429,
    name: "Leiro",
    provincia_id: 32
  },
  {
    id: 8890,
    cp: 32430,
    name: "Castrelo de Mi?o",
    provincia_id: 32
  },
  {
    id: 8891,
    cp: 32431,
    name: "Beade",
    provincia_id: 32
  },
  {
    id: 8892,
    cp: 32432,
    name: "Beade",
    provincia_id: 32
  },
  {
    id: 8893,
    cp: 32433,
    name: "Carballeda de Avia",
    provincia_id: 32
  },
  {
    id: 8894,
    cp: 32434,
    name: "Carballeda de Avia",
    provincia_id: 32
  },
  {
    id: 8895,
    cp: 32440,
    name: "A Peroxa",
    provincia_id: 32
  },
  {
    id: 8896,
    cp: 32448,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 8897,
    cp: 32449,
    name: "A Peroxa",
    provincia_id: 32
  },
  {
    id: 8898,
    cp: 32450,
    name: "Cenlle",
    provincia_id: 32
  },
  {
    id: 8899,
    cp: 32452,
    name: "Punxín",
    provincia_id: 32
  },
  {
    id: 8900,
    cp: 32453,
    name: "San Amaro",
    provincia_id: 32
  },
  {
    id: 8901,
    cp: 32454,
    name: "Cenlle",
    provincia_id: 32
  },
  {
    id: 8902,
    cp: 32455,
    name: "San Amaro",
    provincia_id: 32
  },
  {
    id: 8903,
    cp: 32456,
    name: "Punxín",
    provincia_id: 32
  },
  {
    id: 8904,
    cp: 32456,
    name: "A Gudi?a",
    provincia_id: 32
  },
  {
    id: 8905,
    cp: 32457,
    name: "Punxín",
    provincia_id: 32
  },
  {
    id: 8906,
    cp: 32459,
    name: "Cenlle",
    provincia_id: 32
  },
  {
    id: 8907,
    cp: 32499,
    name: "A Mezquita",
    provincia_id: 32
  },
  {
    id: 8908,
    cp: 32500,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8909,
    cp: 32510,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8910,
    cp: 32511,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8911,
    cp: 32512,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8912,
    cp: 32513,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8913,
    cp: 32514,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8914,
    cp: 32515,
    name: "San Amaro",
    provincia_id: 32
  },
  {
    id: 8915,
    cp: 32515,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8916,
    cp: 32516,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8917,
    cp: 32520,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8918,
    cp: 32520,
    name: "Beariz",
    provincia_id: 32
  },
  {
    id: 8919,
    cp: 32520,
    name: "Avión",
    provincia_id: 32
  },
  {
    id: 8920,
    cp: 32521,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8921,
    cp: 32522,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8922,
    cp: 32523,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8923,
    cp: 32524,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8924,
    cp: 32525,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8925,
    cp: 32526,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8926,
    cp: 32526,
    name: "O Irixo",
    provincia_id: 32
  },
  {
    id: 8927,
    cp: 32530,
    name: "O Irixo",
    provincia_id: 32
  },
  {
    id: 8928,
    cp: 32530,
    name: "Boborás",
    provincia_id: 32
  },
  {
    id: 8929,
    cp: 32534,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8930,
    cp: 32535,
    name: "O Irixo",
    provincia_id: 32
  },
  {
    id: 8931,
    cp: 32536,
    name: "O Irixo",
    provincia_id: 32
  },
  {
    id: 8932,
    cp: 32537,
    name: "O Irixo",
    provincia_id: 32
  },
  {
    id: 8933,
    cp: 32538,
    name: "O Irixo",
    provincia_id: 32
  },
  {
    id: 8934,
    cp: 32539,
    name: "O Irixo",
    provincia_id: 32
  },
  {
    id: 8935,
    cp: 32540,
    name: "A Gudi?a",
    provincia_id: 32
  },
  {
    id: 8936,
    cp: 32545,
    name: "A Gudi?a",
    provincia_id: 32
  },
  {
    id: 8937,
    cp: 32546,
    name: "A Gudi?a",
    provincia_id: 32
  },
  {
    id: 8938,
    cp: 32547,
    name: "A Gudi?a",
    provincia_id: 32
  },
  {
    id: 8939,
    cp: 32547,
    name: "Vilari?o de Conso",
    provincia_id: 32
  },
  {
    id: 8940,
    cp: 32548,
    name: "A Mezquita",
    provincia_id: 32
  },
  {
    id: 8941,
    cp: 32549,
    name: "A Mezquita",
    provincia_id: 32
  },
  {
    id: 8942,
    cp: 32550,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8943,
    cp: 32554,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8944,
    cp: 32555,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8945,
    cp: 32556,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8946,
    cp: 32557,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8947,
    cp: 32557,
    name: "Vilari?o de Conso",
    provincia_id: 32
  },
  {
    id: 8948,
    cp: 32558,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8949,
    cp: 32560,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8950,
    cp: 32562,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8951,
    cp: 32563,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 8952,
    cp: 32570,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8953,
    cp: 32572,
    name: "Punxín",
    provincia_id: 32
  },
  {
    id: 8954,
    cp: 32572,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8955,
    cp: 32574,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8956,
    cp: 32574,
    name: "O Carballi?o",
    provincia_id: 32
  },
  {
    id: 8957,
    cp: 32575,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8958,
    cp: 32576,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8959,
    cp: 32577,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8960,
    cp: 32578,
    name: "Punxín",
    provincia_id: 32
  },
  {
    id: 8961,
    cp: 32578,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8962,
    cp: 32579,
    name: "Maside",
    provincia_id: 32
  },
  {
    id: 8963,
    cp: 32590,
    name: "A Mezquita",
    provincia_id: 32
  },
  {
    id: 8964,
    cp: 32591,
    name: "Vilari?o de Conso",
    provincia_id: 32
  },
  {
    id: 8965,
    cp: 32591,
    name: "Castrelo do Val",
    provincia_id: 32
  },
  {
    id: 8966,
    cp: 32592,
    name: "Paderne de Allariz",
    provincia_id: 32
  },
  {
    id: 8967,
    cp: 32592,
    name: "Ba?os de Molgas",
    provincia_id: 32
  },
  {
    id: 8968,
    cp: 32593,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 8969,
    cp: 32600,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 8970,
    cp: 32610,
    name: "Riós",
    provincia_id: 32
  },
  {
    id: 8971,
    cp: 32610,
    name: "Vilardevós",
    provincia_id: 32
  },
  {
    id: 8972,
    cp: 32611,
    name: "Riós",
    provincia_id: 32
  },
  {
    id: 8973,
    cp: 32611,
    name: "Monterrei",
    provincia_id: 32
  },
  {
    id: 8974,
    cp: 32612,
    name: "Riós",
    provincia_id: 32
  },
  {
    id: 8975,
    cp: 32612,
    name: "Castrelo do Val",
    provincia_id: 32
  },
  {
    id: 8976,
    cp: 32613,
    name: "Oímbra",
    provincia_id: 32
  },
  {
    id: 8977,
    cp: 32614,
    name: "Vilardevós",
    provincia_id: 32
  },
  {
    id: 8978,
    cp: 32615,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 8979,
    cp: 32616,
    name: "Vilardevós",
    provincia_id: 32
  },
  {
    id: 8980,
    cp: 32617,
    name: "Vilardevós",
    provincia_id: 32
  },
  {
    id: 8981,
    cp: 32618,
    name: "Monterrei",
    provincia_id: 32
  },
  {
    id: 8982,
    cp: 32619,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 8983,
    cp: 32620,
    name: "Laza",
    provincia_id: 32
  },
  {
    id: 8984,
    cp: 32621,
    name: "Laza",
    provincia_id: 32
  },
  {
    id: 8985,
    cp: 32622,
    name: "Laza",
    provincia_id: 32
  },
  {
    id: 8986,
    cp: 32623,
    name: "Laza",
    provincia_id: 32
  },
  {
    id: 8987,
    cp: 32624,
    name: "Monterrei",
    provincia_id: 32
  },
  {
    id: 8988,
    cp: 32624,
    name: "Castrelo do Val",
    provincia_id: 32
  },
  {
    id: 8989,
    cp: 32625,
    name: "Castrelo do Val",
    provincia_id: 32
  },
  {
    id: 8990,
    cp: 32626,
    name: "Castrelo do Val",
    provincia_id: 32
  },
  {
    id: 8991,
    cp: 32630,
    name: "Xinzo de Limia",
    provincia_id: 32
  },
  {
    id: 8992,
    cp: 32631,
    name: "Xinzo de Limia",
    provincia_id: 32
  },
  {
    id: 8993,
    cp: 32631,
    name: "Sarreaus",
    provincia_id: 32
  },
  {
    id: 8994,
    cp: 32631,
    name: "Trasmiras",
    provincia_id: 32
  },
  {
    id: 8995,
    cp: 32632,
    name: "Baltar",
    provincia_id: 32
  },
  {
    id: 8996,
    cp: 32632,
    name: "Xinzo de Limia",
    provincia_id: 32
  },
  {
    id: 8997,
    cp: 32632,
    name: "Os Blancos",
    provincia_id: 32
  },
  {
    id: 8998,
    cp: 32633,
    name: "Baltar",
    provincia_id: 32
  },
  {
    id: 8999,
    cp: 32634,
    name: "Os Blancos",
    provincia_id: 32
  },
  {
    id: 9000,
    cp: 32635,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 9001,
    cp: 32635,
    name: "Xinzo de Limia",
    provincia_id: 32
  },
  {
    id: 9002,
    cp: 32636,
    name: "Xinzo de Limia",
    provincia_id: 32
  },
  {
    id: 9003,
    cp: 32636,
    name: "Sarreaus",
    provincia_id: 32
  },
  {
    id: 9004,
    cp: 32637,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 9005,
    cp: 32637,
    name: "Xinzo de Limia",
    provincia_id: 32
  },
  {
    id: 9006,
    cp: 32640,
    name: "Xinzo de Limia",
    provincia_id: 32
  },
  {
    id: 9007,
    cp: 32641,
    name: "Porqueira",
    provincia_id: 32
  },
  {
    id: 9008,
    cp: 32643,
    name: "Porqueira",
    provincia_id: 32
  },
  {
    id: 9009,
    cp: 32644,
    name: "Calvos de Randín",
    provincia_id: 32
  },
  {
    id: 9010,
    cp: 32644,
    name: "Porqueira",
    provincia_id: 32
  },
  {
    id: 9011,
    cp: 32645,
    name: "Porqueira",
    provincia_id: 32
  },
  {
    id: 9012,
    cp: 32645,
    name: "Calvos de Randín",
    provincia_id: 32
  },
  {
    id: 9013,
    cp: 32646,
    name: "Calvos de Randín",
    provincia_id: 32
  },
  {
    id: 9014,
    cp: 32646,
    name: "Baltar",
    provincia_id: 32
  },
  {
    id: 9015,
    cp: 32647,
    name: "Calvos de Randín",
    provincia_id: 32
  },
  {
    id: 9016,
    cp: 32648,
    name: "Calvos de Randín",
    provincia_id: 32
  },
  {
    id: 9017,
    cp: 32650,
    name: "Vilar de Santos",
    provincia_id: 32
  },
  {
    id: 9018,
    cp: 32651,
    name: "Vilar de Santos",
    provincia_id: 32
  },
  {
    id: 9019,
    cp: 32652,
    name: "Rairiz de Veiga",
    provincia_id: 32
  },
  {
    id: 9020,
    cp: 32653,
    name: "Rairiz de Veiga",
    provincia_id: 32
  },
  {
    id: 9021,
    cp: 32654,
    name: "Rairiz de Veiga",
    provincia_id: 32
  },
  {
    id: 9022,
    cp: 32655,
    name: "Rairiz de Veiga",
    provincia_id: 32
  },
  {
    id: 9023,
    cp: 32660,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9024,
    cp: 32664,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9025,
    cp: 32665,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9026,
    cp: 32666,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9027,
    cp: 32667,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9028,
    cp: 32668,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9029,
    cp: 32669,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9030,
    cp: 32670,
    name: "Xunqueira de Ambía",
    provincia_id: 32
  },
  {
    id: 9031,
    cp: 32678,
    name: "Xunqueira de Ambía",
    provincia_id: 32
  },
  {
    id: 9032,
    cp: 32679,
    name: "Xunqueira de Ambía",
    provincia_id: 32
  },
  {
    id: 9033,
    cp: 32680,
    name: "Cualedro",
    provincia_id: 32
  },
  {
    id: 9034,
    cp: 32688,
    name: "Cualedro",
    provincia_id: 32
  },
  {
    id: 9035,
    cp: 32689,
    name: "Cualedro",
    provincia_id: 32
  },
  {
    id: 9036,
    cp: 32690,
    name: "Taboadela",
    provincia_id: 32
  },
  {
    id: 9037,
    cp: 32690,
    name: "Allariz",
    provincia_id: 32
  },
  {
    id: 9038,
    cp: 32691,
    name: "Taboadela",
    provincia_id: 32
  },
  {
    id: 9039,
    cp: 32692,
    name: "Sandiás",
    provincia_id: 32
  },
  {
    id: 9040,
    cp: 32693,
    name: "Sandiás",
    provincia_id: 32
  },
  {
    id: 9041,
    cp: 32694,
    name: "Trasmiras",
    provincia_id: 32
  },
  {
    id: 9042,
    cp: 32695,
    name: "Trasmiras",
    provincia_id: 32
  },
  {
    id: 9043,
    cp: 32696,
    name: "Trasmiras",
    provincia_id: 32
  },
  {
    id: 9044,
    cp: 32696,
    name: "Sarreaus",
    provincia_id: 32
  },
  {
    id: 9045,
    cp: 32697,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 9046,
    cp: 32698,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 9047,
    cp: 32698,
    name: "Oímbra",
    provincia_id: 32
  },
  {
    id: 9048,
    cp: 32699,
    name: "Verín",
    provincia_id: 32
  },
  {
    id: 9049,
    cp: 32700,
    name: "Maceda",
    provincia_id: 32
  },
  {
    id: 9050,
    cp: 32701,
    name: "Ba?os de Molgas",
    provincia_id: 32
  },
  {
    id: 9051,
    cp: 32702,
    name: "Ba?os de Molgas",
    provincia_id: 32
  },
  {
    id: 9052,
    cp: 32702,
    name: "Vilar de Barrio",
    provincia_id: 32
  },
  {
    id: 9053,
    cp: 32703,
    name: "Maceda",
    provincia_id: 32
  },
  {
    id: 9054,
    cp: 32704,
    name: "Ba?os de Molgas",
    provincia_id: 32
  },
  {
    id: 9055,
    cp: 32705,
    name: "Vilar de Barrio",
    provincia_id: 32
  },
  {
    id: 9056,
    cp: 32705,
    name: "Ba?os de Molgas",
    provincia_id: 32
  },
  {
    id: 9057,
    cp: 32706,
    name: "Maceda",
    provincia_id: 32
  },
  {
    id: 9058,
    cp: 32707,
    name: "Maceda",
    provincia_id: 32
  },
  {
    id: 9059,
    cp: 32708,
    name: "Maceda",
    provincia_id: 32
  },
  {
    id: 9060,
    cp: 32708,
    name: "Xunqueira de Espadanedo",
    provincia_id: 32
  },
  {
    id: 9061,
    cp: 32710,
    name: "O Pereiro de Aguiar",
    provincia_id: 32
  },
  {
    id: 9062,
    cp: 32711,
    name: "O Pereiro de Aguiar",
    provincia_id: 32
  },
  {
    id: 9063,
    cp: 32720,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 9064,
    cp: 32720,
    name: "Esgos",
    provincia_id: 32
  },
  {
    id: 9065,
    cp: 32720,
    name: "Maceda",
    provincia_id: 32
  },
  {
    id: 9066,
    cp: 32720,
    name: "Xunqueira de Espadanedo",
    provincia_id: 32
  },
  {
    id: 9067,
    cp: 32730,
    name: "Xunqueira de Espadanedo",
    provincia_id: 32
  },
  {
    id: 9068,
    cp: 32740,
    name: "Parada de Sil",
    provincia_id: 32
  },
  {
    id: 9069,
    cp: 32746,
    name: "Parada de Sil",
    provincia_id: 32
  },
  {
    id: 9070,
    cp: 32747,
    name: "Parada de Sil",
    provincia_id: 32
  },
  {
    id: 9071,
    cp: 32748,
    name: "Parada de Sil",
    provincia_id: 32
  },
  {
    id: 9072,
    cp: 32749,
    name: "Parada de Sil",
    provincia_id: 32
  },
  {
    id: 9073,
    cp: 32750,
    name: "Montederramo",
    provincia_id: 32
  },
  {
    id: 9074,
    cp: 32751,
    name: "Montederramo",
    provincia_id: 32
  },
  {
    id: 9075,
    cp: 32760,
    name: "Castro Caldelas",
    provincia_id: 32
  },
  {
    id: 9076,
    cp: 32764,
    name: "A Teixeira",
    provincia_id: 32
  },
  {
    id: 9077,
    cp: 32764,
    name: "Castro Caldelas",
    provincia_id: 32
  },
  {
    id: 9078,
    cp: 32765,
    name: "A Teixeira",
    provincia_id: 32
  },
  {
    id: 9079,
    cp: 32766,
    name: "Castro Caldelas",
    provincia_id: 32
  },
  {
    id: 9080,
    cp: 32767,
    name: "Chandrexa de Queixa",
    provincia_id: 32
  },
  {
    id: 9081,
    cp: 32768,
    name: "Chandrexa de Queixa",
    provincia_id: 32
  },
  {
    id: 9082,
    cp: 32768,
    name: "Castro Caldelas",
    provincia_id: 32
  },
  {
    id: 9083,
    cp: 32769,
    name: "Montederramo",
    provincia_id: 32
  },
  {
    id: 9084,
    cp: 32769,
    name: "Castro Caldelas",
    provincia_id: 32
  },
  {
    id: 9085,
    cp: 32770,
    name: "San Xoán de Río",
    provincia_id: 32
  },
  {
    id: 9086,
    cp: 32774,
    name: "Castro Caldelas",
    provincia_id: 32
  },
  {
    id: 9087,
    cp: 32779,
    name: "San Xoán de Río",
    provincia_id: 32
  },
  {
    id: 9088,
    cp: 32780,
    name: "A Pobra de Trives",
    provincia_id: 32
  },
  {
    id: 9089,
    cp: 32781,
    name: "Manzaneda",
    provincia_id: 32
  },
  {
    id: 9090,
    cp: 32782,
    name: "Manzaneda",
    provincia_id: 32
  },
  {
    id: 9091,
    cp: 32782,
    name: "A Pobra de Trives",
    provincia_id: 32
  },
  {
    id: 9092,
    cp: 32783,
    name: "Manzaneda",
    provincia_id: 32
  },
  {
    id: 9093,
    cp: 32784,
    name: "Manzaneda",
    provincia_id: 32
  },
  {
    id: 9094,
    cp: 32785,
    name: "Manzaneda",
    provincia_id: 32
  },
  {
    id: 9095,
    cp: 32786,
    name: "Chandrexa de Queixa",
    provincia_id: 32
  },
  {
    id: 9096,
    cp: 32787,
    name: "A Pobra de Trives",
    provincia_id: 32
  },
  {
    id: 9097,
    cp: 32787,
    name: "Chandrexa de Queixa",
    provincia_id: 32
  },
  {
    id: 9098,
    cp: 32788,
    name: "A Pobra de Trives",
    provincia_id: 32
  },
  {
    id: 9099,
    cp: 32789,
    name: "Viana do Bolo",
    provincia_id: 32
  },
  {
    id: 9100,
    cp: 32789,
    name: "A Pobra de Trives",
    provincia_id: 32
  },
  {
    id: 9101,
    cp: 32790,
    name: "Montederramo",
    provincia_id: 32
  },
  {
    id: 9102,
    cp: 32790,
    name: "Parada de Sil",
    provincia_id: 32
  },
  {
    id: 9103,
    cp: 32790,
    name: "Maceda",
    provincia_id: 32
  },
  {
    id: 9104,
    cp: 32791,
    name: "Nogueira de Ramuín",
    provincia_id: 32
  },
  {
    id: 9105,
    cp: 32792,
    name: "O Pereiro de Aguiar",
    provincia_id: 32
  },
  {
    id: 9106,
    cp: 32793,
    name: "Esgos",
    provincia_id: 32
  },
  {
    id: 9107,
    cp: 32793,
    name: "O Pereiro de Aguiar",
    provincia_id: 32
  },
  {
    id: 9108,
    cp: 32794,
    name: "Chandrexa de Queixa",
    provincia_id: 32
  },
  {
    id: 9109,
    cp: 32794,
    name: "Castro Caldelas",
    provincia_id: 32
  },
  {
    id: 9110,
    cp: 32794,
    name: "San Xoán de Río",
    provincia_id: 32
  },
  {
    id: 9111,
    cp: 32800,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9112,
    cp: 32810,
    name: "Ramirás",
    provincia_id: 32
  },
  {
    id: 9113,
    cp: 32811,
    name: "Ramirás",
    provincia_id: 32
  },
  {
    id: 9114,
    cp: 32812,
    name: "A Bola",
    provincia_id: 32
  },
  {
    id: 9115,
    cp: 32812,
    name: "Ribadavia",
    provincia_id: 32
  },
  {
    id: 9116,
    cp: 32813,
    name: "Verea",
    provincia_id: 32
  },
  {
    id: 9117,
    cp: 32814,
    name: "Quintela de Leirado",
    provincia_id: 32
  },
  {
    id: 9118,
    cp: 32815,
    name: "Ramirás",
    provincia_id: 32
  },
  {
    id: 9119,
    cp: 32815,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9120,
    cp: 32816,
    name: "A Merca",
    provincia_id: 32
  },
  {
    id: 9121,
    cp: 32816,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9122,
    cp: 32817,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9123,
    cp: 32820,
    name: "Cartelle",
    provincia_id: 32
  },
  {
    id: 9124,
    cp: 32821,
    name: "Cartelle",
    provincia_id: 32
  },
  {
    id: 9125,
    cp: 32822,
    name: "Cartelle",
    provincia_id: 32
  },
  {
    id: 9126,
    cp: 32823,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9127,
    cp: 32823,
    name: "Cartelle",
    provincia_id: 32
  },
  {
    id: 9128,
    cp: 32824,
    name: "Cartelle",
    provincia_id: 32
  },
  {
    id: 9129,
    cp: 32825,
    name: "Cartelle",
    provincia_id: 32
  },
  {
    id: 9130,
    cp: 32826,
    name: "Cartelle",
    provincia_id: 32
  },
  {
    id: 9131,
    cp: 32827,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9132,
    cp: 32828,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9133,
    cp: 32829,
    name: "Celanova",
    provincia_id: 32
  },
  {
    id: 9134,
    cp: 32830,
    name: "A Merca",
    provincia_id: 32
  },
  {
    id: 9135,
    cp: 32838,
    name: "A Merca",
    provincia_id: 32
  },
  {
    id: 9136,
    cp: 32839,
    name: "A Merca",
    provincia_id: 32
  },
  {
    id: 9137,
    cp: 32840,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9138,
    cp: 32845,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9139,
    cp: 32846,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9140,
    cp: 32846,
    name: "Lobeira",
    provincia_id: 32
  },
  {
    id: 9141,
    cp: 32847,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9142,
    cp: 32848,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9143,
    cp: 32849,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9144,
    cp: 32850,
    name: "Lobeira",
    provincia_id: 32
  },
  {
    id: 9145,
    cp: 32857,
    name: "Lobeira",
    provincia_id: 32
  },
  {
    id: 9146,
    cp: 32858,
    name: "Lobeira",
    provincia_id: 32
  },
  {
    id: 9147,
    cp: 32859,
    name: "Lobeira",
    provincia_id: 32
  },
  {
    id: 9148,
    cp: 32859,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9149,
    cp: 32860,
    name: "Entrimo",
    provincia_id: 32
  },
  {
    id: 9150,
    cp: 32867,
    name: "Entrimo",
    provincia_id: 32
  },
  {
    id: 9151,
    cp: 32868,
    name: "Entrimo",
    provincia_id: 32
  },
  {
    id: 9152,
    cp: 32869,
    name: "Lobios",
    provincia_id: 32
  },
  {
    id: 9153,
    cp: 32869,
    name: "Entrimo",
    provincia_id: 32
  },
  {
    id: 9154,
    cp: 32870,
    name: "Lobios",
    provincia_id: 32
  },
  {
    id: 9155,
    cp: 32879,
    name: "Lobios",
    provincia_id: 32
  },
  {
    id: 9156,
    cp: 32880,
    name: "Muí?os",
    provincia_id: 32
  },
  {
    id: 9157,
    cp: 32890,
    name: "Barbadás",
    provincia_id: 32
  },
  {
    id: 9158,
    cp: 32891,
    name: "Bande",
    provincia_id: 32
  },
  {
    id: 9159,
    cp: 32892,
    name: "Lobios",
    provincia_id: 32
  },
  {
    id: 9160,
    cp: 32893,
    name: "Parada de Sil",
    provincia_id: 32
  },
  {
    id: 9161,
    cp: 32893,
    name: "Lobios",
    provincia_id: 32
  },
  {
    id: 9162,
    cp: 32894,
    name: "Lobios",
    provincia_id: 32
  },
  {
    id: 9163,
    cp: 32895,
    name: "Lobios",
    provincia_id: 32
  },
  {
    id: 9164,
    cp: 32896,
    name: "Muí?os",
    provincia_id: 32
  },
  {
    id: 9165,
    cp: 32897,
    name: "Lobeira",
    provincia_id: 32
  },
  {
    id: 9166,
    cp: 32898,
    name: "Muí?os",
    provincia_id: 32
  },
  {
    id: 9167,
    cp: 32899,
    name: "Muí?os",
    provincia_id: 32
  },
  {
    id: 9168,
    cp: 32900,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9169,
    cp: 32900,
    name: "San Cibrao das Vi?as",
    provincia_id: 32
  },
  {
    id: 9170,
    cp: 32901,
    name: "San Cibrao das Vi?as",
    provincia_id: 32
  },
  {
    id: 9171,
    cp: 32910,
    name: "San Cibrao das Vi?as",
    provincia_id: 32
  },
  {
    id: 9172,
    cp: 32911,
    name: "San Cibrao das Vi?as",
    provincia_id: 32
  },
  {
    id: 9173,
    cp: 32920,
    name: "Barbadás",
    provincia_id: 32
  },
  {
    id: 9174,
    cp: 32920,
    name: "Toén",
    provincia_id: 32
  },
  {
    id: 9175,
    cp: 32930,
    name: "Toén",
    provincia_id: 32
  },
  {
    id: 9176,
    cp: 32930,
    name: "Barbadás",
    provincia_id: 32
  },
  {
    id: 9177,
    cp: 32940,
    name: "Barbadás",
    provincia_id: 32
  },
  {
    id: 9178,
    cp: 32940,
    name: "Toén",
    provincia_id: 32
  },
  {
    id: 9179,
    cp: 32940,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9180,
    cp: 32941,
    name: "Toén",
    provincia_id: 32
  },
  {
    id: 9181,
    cp: 32950,
    name: "Coles",
    provincia_id: 32
  },
  {
    id: 9182,
    cp: 32960,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9183,
    cp: 32970,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9184,
    cp: 32971,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9185,
    cp: 32980,
    name: "Amoeiro",
    provincia_id: 32
  },
  {
    id: 9186,
    cp: 32980,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9187,
    cp: 32981,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9188,
    cp: 32990,
    name: "Ourense",
    provincia_id: 32
  },
  {
    id: 9189,
    cp: 33001,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9190,
    cp: 33002,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9191,
    cp: 33003,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9192,
    cp: 33004,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9193,
    cp: 33005,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9194,
    cp: 33006,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9195,
    cp: 33007,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9196,
    cp: 33008,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9197,
    cp: 33009,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9198,
    cp: 33010,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9199,
    cp: 33010,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9200,
    cp: 33011,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9201,
    cp: 33012,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9202,
    cp: 33013,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9203,
    cp: 33060,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9204,
    cp: 33069,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9205,
    cp: 33110,
    name: "Teverga",
    provincia_id: 33
  },
  {
    id: 9206,
    cp: 33111,
    name: "Teverga",
    provincia_id: 33
  },
  {
    id: 9207,
    cp: 33112,
    name: "Proaza",
    provincia_id: 33
  },
  {
    id: 9208,
    cp: 33114,
    name: "Proaza",
    provincia_id: 33
  },
  {
    id: 9209,
    cp: 33115,
    name: "Santo Adriano",
    provincia_id: 33
  },
  {
    id: 9210,
    cp: 33115,
    name: "Quirós",
    provincia_id: 33
  },
  {
    id: 9211,
    cp: 33116,
    name: "Quirós",
    provincia_id: 33
  },
  {
    id: 9212,
    cp: 33116,
    name: "Proaza",
    provincia_id: 33
  },
  {
    id: 9213,
    cp: 33117,
    name: "Quirós",
    provincia_id: 33
  },
  {
    id: 9214,
    cp: 33118,
    name: "Quirós",
    provincia_id: 33
  },
  {
    id: 9215,
    cp: 33119,
    name: "Grado",
    provincia_id: 33
  },
  {
    id: 9216,
    cp: 33119,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9217,
    cp: 33120,
    name: "Pravia",
    provincia_id: 33
  },
  {
    id: 9218,
    cp: 33125,
    name: "Soto del Barco",
    provincia_id: 33
  },
  {
    id: 9219,
    cp: 33126,
    name: "Soto del Barco",
    provincia_id: 33
  },
  {
    id: 9220,
    cp: 33127,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9221,
    cp: 33127,
    name: "Pravia",
    provincia_id: 33
  },
  {
    id: 9222,
    cp: 33127,
    name: "Soto del Barco",
    provincia_id: 33
  },
  {
    id: 9223,
    cp: 33128,
    name: "Pravia",
    provincia_id: 33
  },
  {
    id: 9224,
    cp: 33129,
    name: "Pravia",
    provincia_id: 33
  },
  {
    id: 9225,
    cp: 33130,
    name: "Muros de Nalón",
    provincia_id: 33
  },
  {
    id: 9226,
    cp: 33138,
    name: "Muros de Nalón",
    provincia_id: 33
  },
  {
    id: 9227,
    cp: 33140,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9228,
    cp: 33150,
    name: "Cudillero",
    provincia_id: 33
  },
  {
    id: 9229,
    cp: 33155,
    name: "Cudillero",
    provincia_id: 33
  },
  {
    id: 9230,
    cp: 33156,
    name: "Cudillero",
    provincia_id: 33
  },
  {
    id: 9231,
    cp: 33157,
    name: "Cudillero",
    provincia_id: 33
  },
  {
    id: 9232,
    cp: 33159,
    name: "Cudillero",
    provincia_id: 33
  },
  {
    id: 9233,
    cp: 33160,
    name: "Riosa",
    provincia_id: 33
  },
  {
    id: 9234,
    cp: 33161,
    name: "Morcín",
    provincia_id: 33
  },
  {
    id: 9235,
    cp: 33162,
    name: "Morcín",
    provincia_id: 33
  },
  {
    id: 9236,
    cp: 33163,
    name: "Morcín",
    provincia_id: 33
  },
  {
    id: 9237,
    cp: 33170,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9238,
    cp: 33170,
    name: "Ribera de Arriba",
    provincia_id: 33
  },
  {
    id: 9239,
    cp: 33171,
    name: "Ribera de Arriba",
    provincia_id: 33
  },
  {
    id: 9240,
    cp: 33171,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9241,
    cp: 33172,
    name: "Ribera de Arriba",
    provincia_id: 33
  },
  {
    id: 9242,
    cp: 33173,
    name: "Ribera de Arriba",
    provincia_id: 33
  },
  {
    id: 9243,
    cp: 33174,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9244,
    cp: 33180,
    name: "Nore?a",
    provincia_id: 33
  },
  {
    id: 9245,
    cp: 33186,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9246,
    cp: 33187,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9247,
    cp: 33188,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9248,
    cp: 33189,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9249,
    cp: 33190,
    name: "Las Regueras",
    provincia_id: 33
  },
  {
    id: 9250,
    cp: 33191,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9251,
    cp: 33191,
    name: "Las Regueras",
    provincia_id: 33
  },
  {
    id: 9252,
    cp: 33192,
    name: "Las Regueras",
    provincia_id: 33
  },
  {
    id: 9253,
    cp: 33192,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9254,
    cp: 33193,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9255,
    cp: 33194,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9256,
    cp: 33195,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9257,
    cp: 33196,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9258,
    cp: 33199,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9259,
    cp: 33199,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9260,
    cp: 33201,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9261,
    cp: 33202,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9262,
    cp: 33203,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9263,
    cp: 33204,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9264,
    cp: 33205,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9265,
    cp: 33206,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9266,
    cp: 33207,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9267,
    cp: 33208,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9268,
    cp: 33209,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9269,
    cp: 33210,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9270,
    cp: 33211,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9271,
    cp: 33212,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9272,
    cp: 33213,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9273,
    cp: 33290,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9274,
    cp: 33299,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9275,
    cp: 33300,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9276,
    cp: 33310,
    name: "Cabranes",
    provincia_id: 33
  },
  {
    id: 9277,
    cp: 33310,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9278,
    cp: 33311,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9279,
    cp: 33312,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9280,
    cp: 33313,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9281,
    cp: 33314,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9282,
    cp: 33315,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9283,
    cp: 33316,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9284,
    cp: 33317,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9285,
    cp: 33318,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9286,
    cp: 33320,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9287,
    cp: 33324,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9288,
    cp: 33325,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9289,
    cp: 33326,
    name: "Villaviciosa",
    provincia_id: 33
  },
  {
    id: 9290,
    cp: 33326,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9291,
    cp: 33327,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9292,
    cp: 33328,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9293,
    cp: 33329,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9294,
    cp: 33330,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9295,
    cp: 33340,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9296,
    cp: 33341,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9297,
    cp: 33342,
    name: "Colunga",
    provincia_id: 33
  },
  {
    id: 9298,
    cp: 33343,
    name: "Caravia",
    provincia_id: 33
  },
  {
    id: 9299,
    cp: 33344,
    name: "Caravia",
    provincia_id: 33
  },
  {
    id: 9300,
    cp: 33345,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9301,
    cp: 33346,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9302,
    cp: 33347,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9303,
    cp: 33350,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9304,
    cp: 33390,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9305,
    cp: 33391,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9306,
    cp: 33392,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9307,
    cp: 33393,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9308,
    cp: 33394,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9309,
    cp: 33401,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9310,
    cp: 33401,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9311,
    cp: 33402,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9312,
    cp: 33403,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9313,
    cp: 33404,
    name: "Corvera de Asturias",
    provincia_id: 33
  },
  {
    id: 9314,
    cp: 33405,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9315,
    cp: 33410,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9316,
    cp: 33410,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9317,
    cp: 33411,
    name: "Illas",
    provincia_id: 33
  },
  {
    id: 9318,
    cp: 33412,
    name: "Illas",
    provincia_id: 33
  },
  {
    id: 9319,
    cp: 33412,
    name: "Corvera de Asturias",
    provincia_id: 33
  },
  {
    id: 9320,
    cp: 33412,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9321,
    cp: 33414,
    name: "Illas",
    provincia_id: 33
  },
  {
    id: 9322,
    cp: 33414,
    name: "Las Regueras",
    provincia_id: 33
  },
  {
    id: 9323,
    cp: 33414,
    name: "Candamo",
    provincia_id: 33
  },
  {
    id: 9324,
    cp: 33416,
    name: "Corvera de Asturias",
    provincia_id: 33
  },
  {
    id: 9325,
    cp: 33417,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9326,
    cp: 33417,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9327,
    cp: 33418,
    name: "Gozón",
    provincia_id: 33
  },
  {
    id: 9328,
    cp: 33418,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9329,
    cp: 33419,
    name: "Gozón",
    provincia_id: 33
  },
  {
    id: 9330,
    cp: 33420,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9331,
    cp: 33423,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9332,
    cp: 33424,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9333,
    cp: 33425,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9334,
    cp: 33426,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9335,
    cp: 33427,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9336,
    cp: 33428,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9337,
    cp: 33429,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9338,
    cp: 33430,
    name: "Carre?o",
    provincia_id: 33
  },
  {
    id: 9339,
    cp: 33438,
    name: "Carre?o",
    provincia_id: 33
  },
  {
    id: 9340,
    cp: 33439,
    name: "Carre?o",
    provincia_id: 33
  },
  {
    id: 9341,
    cp: 33440,
    name: "Gozón",
    provincia_id: 33
  },
  {
    id: 9342,
    cp: 33448,
    name: "Gozón",
    provincia_id: 33
  },
  {
    id: 9343,
    cp: 33449,
    name: "Gozón",
    provincia_id: 33
  },
  {
    id: 9344,
    cp: 33450,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9345,
    cp: 33456,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9346,
    cp: 33456,
    name: "Candamo",
    provincia_id: 33
  },
  {
    id: 9347,
    cp: 33457,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9348,
    cp: 33458,
    name: "Soto del Barco",
    provincia_id: 33
  },
  {
    id: 9349,
    cp: 33459,
    name: "Castrillón",
    provincia_id: 33
  },
  {
    id: 9350,
    cp: 33460,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9351,
    cp: 33468,
    name: "Gozón",
    provincia_id: 33
  },
  {
    id: 9352,
    cp: 33468,
    name: "Corvera de Asturias",
    provincia_id: 33
  },
  {
    id: 9353,
    cp: 33469,
    name: "Carre?o",
    provincia_id: 33
  },
  {
    id: 9354,
    cp: 33470,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9355,
    cp: 33470,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9356,
    cp: 33470,
    name: "Corvera de Asturias",
    provincia_id: 33
  },
  {
    id: 9357,
    cp: 33476,
    name: "Tapia de Casariego",
    provincia_id: 33
  },
  {
    id: 9358,
    cp: 33480,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9359,
    cp: 33490,
    name: "Avilés",
    provincia_id: 33
  },
  {
    id: 9360,
    cp: 33491,
    name: "Carre?o",
    provincia_id: 33
  },
  {
    id: 9361,
    cp: 33492,
    name: "Carre?o",
    provincia_id: 33
  },
  {
    id: 9362,
    cp: 33500,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9363,
    cp: 33507,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9364,
    cp: 33509,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9365,
    cp: 33509,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9366,
    cp: 33510,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9367,
    cp: 33518,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9368,
    cp: 33518,
    name: "Sariego",
    provincia_id: 33
  },
  {
    id: 9369,
    cp: 33519,
    name: "Cudillero",
    provincia_id: 33
  },
  {
    id: 9370,
    cp: 33519,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9371,
    cp: 33520,
    name: "Nava",
    provincia_id: 33
  },
  {
    id: 9372,
    cp: 33520,
    name: "Ribadedeva",
    provincia_id: 33
  },
  {
    id: 9373,
    cp: 33527,
    name: "Bimenes",
    provincia_id: 33
  },
  {
    id: 9374,
    cp: 33528,
    name: "Bimenes",
    provincia_id: 33
  },
  {
    id: 9375,
    cp: 33528,
    name: "Nava",
    provincia_id: 33
  },
  {
    id: 9376,
    cp: 33529,
    name: "Cabranes",
    provincia_id: 33
  },
  {
    id: 9377,
    cp: 33529,
    name: "Nava",
    provincia_id: 33
  },
  {
    id: 9378,
    cp: 33530,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9379,
    cp: 33534,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9380,
    cp: 33535,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9381,
    cp: 33535,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9382,
    cp: 33536,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9383,
    cp: 33537,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9384,
    cp: 33538,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9385,
    cp: 33539,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9386,
    cp: 33540,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9387,
    cp: 33546,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9388,
    cp: 33547,
    name: "Cangas de Onís",
    provincia_id: 33
  },
  {
    id: 9389,
    cp: 33548,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9390,
    cp: 33549,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9391,
    cp: 33550,
    name: "Cangas de Onís",
    provincia_id: 33
  },
  {
    id: 9392,
    cp: 33554,
    name: "Cabrales",
    provincia_id: 33
  },
  {
    id: 9393,
    cp: 33555,
    name: "Cabrales",
    provincia_id: 33
  },
  {
    id: 9394,
    cp: 33556,
    name: "Cangas de Onís",
    provincia_id: 33
  },
  {
    id: 9395,
    cp: 33556,
    name: "Onís",
    provincia_id: 33
  },
  {
    id: 9396,
    cp: 33557,
    name: "Amieva",
    provincia_id: 33
  },
  {
    id: 9397,
    cp: 33557,
    name: "Ponga",
    provincia_id: 33
  },
  {
    id: 9398,
    cp: 33558,
    name: "Amieva",
    provincia_id: 33
  },
  {
    id: 9399,
    cp: 33558,
    name: "Ponga",
    provincia_id: 33
  },
  {
    id: 9400,
    cp: 33559,
    name: "Cangas de Onís",
    provincia_id: 33
  },
  {
    id: 9401,
    cp: 33559,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9402,
    cp: 33560,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9403,
    cp: 33566,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9404,
    cp: 33567,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9405,
    cp: 33568,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9406,
    cp: 33569,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9407,
    cp: 33576,
    name: "Pe?amellera Alta",
    provincia_id: 33
  },
  {
    id: 9408,
    cp: 33577,
    name: "Pe?amellera Alta",
    provincia_id: 33
  },
  {
    id: 9409,
    cp: 33578,
    name: "Pe?amellera Alta",
    provincia_id: 33
  },
  {
    id: 9410,
    cp: 33579,
    name: "Pe?amellera Baja",
    provincia_id: 33
  },
  {
    id: 9411,
    cp: 33580,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9412,
    cp: 33581,
    name: "Nava",
    provincia_id: 33
  },
  {
    id: 9413,
    cp: 33582,
    name: "Nava",
    provincia_id: 33
  },
  {
    id: 9414,
    cp: 33583,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9415,
    cp: 33584,
    name: "Pilo?a",
    provincia_id: 33
  },
  {
    id: 9416,
    cp: 33585,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9417,
    cp: 33586,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9418,
    cp: 33587,
    name: "Parres",
    provincia_id: 33
  },
  {
    id: 9419,
    cp: 33588,
    name: "Ribadesella",
    provincia_id: 33
  },
  {
    id: 9420,
    cp: 33589,
    name: "Cangas de Onís",
    provincia_id: 33
  },
  {
    id: 9421,
    cp: 33590,
    name: "Ribadedeva",
    provincia_id: 33
  },
  {
    id: 9422,
    cp: 33592,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9423,
    cp: 33593,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9424,
    cp: 33594,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9425,
    cp: 33595,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9426,
    cp: 33596,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9427,
    cp: 33598,
    name: "Llanes",
    provincia_id: 33
  },
  {
    id: 9428,
    cp: 33600,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9429,
    cp: 33610,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9430,
    cp: 33611,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9431,
    cp: 33612,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9432,
    cp: 33614,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9433,
    cp: 33615,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9434,
    cp: 33616,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9435,
    cp: 33616,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9436,
    cp: 33617,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9437,
    cp: 33618,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9438,
    cp: 33619,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9439,
    cp: 33620,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9440,
    cp: 33627,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9441,
    cp: 33628,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9442,
    cp: 33629,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9443,
    cp: 33630,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9444,
    cp: 33637,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9445,
    cp: 33638,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9446,
    cp: 33639,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9447,
    cp: 33640,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9448,
    cp: 33650,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9449,
    cp: 33660,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9450,
    cp: 33669,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9451,
    cp: 33670,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9452,
    cp: 33675,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9453,
    cp: 33676,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9454,
    cp: 33677,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9455,
    cp: 33678,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9456,
    cp: 33679,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9457,
    cp: 33680,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9458,
    cp: 33681,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9459,
    cp: 33682,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9460,
    cp: 33683,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9461,
    cp: 33683,
    name: "Mieres",
    provincia_id: 33
  },
  {
    id: 9462,
    cp: 33684,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9463,
    cp: 33685,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9464,
    cp: 33686,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9465,
    cp: 33687,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9466,
    cp: 33688,
    name: "Aller",
    provincia_id: 33
  },
  {
    id: 9467,
    cp: 33690,
    name: "Llanera",
    provincia_id: 33
  },
  {
    id: 9468,
    cp: 33691,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9469,
    cp: 33692,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9470,
    cp: 33693,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9471,
    cp: 33694,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9472,
    cp: 33695,
    name: "Lena",
    provincia_id: 33
  },
  {
    id: 9473,
    cp: 33696,
    name: "Ribera de Arriba",
    provincia_id: 33
  },
  {
    id: 9474,
    cp: 33696,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9475,
    cp: 33697,
    name: "Gijón",
    provincia_id: 33
  },
  {
    id: 9476,
    cp: 33700,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9477,
    cp: 33707,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9478,
    cp: 33708,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9479,
    cp: 33709,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9480,
    cp: 33710,
    name: "Navia",
    provincia_id: 33
  },
  {
    id: 9481,
    cp: 33716,
    name: "Coa?a",
    provincia_id: 33
  },
  {
    id: 9482,
    cp: 33717,
    name: "Villayón",
    provincia_id: 33
  },
  {
    id: 9483,
    cp: 33718,
    name: "Villayón",
    provincia_id: 33
  },
  {
    id: 9484,
    cp: 33719,
    name: "Navia",
    provincia_id: 33
  },
  {
    id: 9485,
    cp: 33719,
    name: "Coa?a",
    provincia_id: 33
  },
  {
    id: 9486,
    cp: 33720,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9487,
    cp: 33724,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9488,
    cp: 33725,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9489,
    cp: 33726,
    name: "Coa?a",
    provincia_id: 33
  },
  {
    id: 9490,
    cp: 33726,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9491,
    cp: 33727,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9492,
    cp: 33728,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9493,
    cp: 33729,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9494,
    cp: 33730,
    name: "Grandas de Salime",
    provincia_id: 33
  },
  {
    id: 9495,
    cp: 33731,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9496,
    cp: 33732,
    name: "Illano",
    provincia_id: 33
  },
  {
    id: 9497,
    cp: 33733,
    name: "Illano",
    provincia_id: 33
  },
  {
    id: 9498,
    cp: 33734,
    name: "Illano",
    provincia_id: 33
  },
  {
    id: 9499,
    cp: 33735,
    name: "Pesoz",
    provincia_id: 33
  },
  {
    id: 9500,
    cp: 33736,
    name: "Pesoz",
    provincia_id: 33
  },
  {
    id: 9501,
    cp: 33740,
    name: "Tapia de Casariego",
    provincia_id: 33
  },
  {
    id: 9502,
    cp: 33746,
    name: "Tapia de Casariego",
    provincia_id: 33
  },
  {
    id: 9503,
    cp: 33746,
    name: "El Franco",
    provincia_id: 33
  },
  {
    id: 9504,
    cp: 33747,
    name: "Tapia de Casariego",
    provincia_id: 33
  },
  {
    id: 9505,
    cp: 33749,
    name: "Tapia de Casariego",
    provincia_id: 33
  },
  {
    id: 9506,
    cp: 33750,
    name: "El Franco",
    provincia_id: 33
  },
  {
    id: 9507,
    cp: 33757,
    name: "El Franco",
    provincia_id: 33
  },
  {
    id: 9508,
    cp: 33758,
    name: "El Franco",
    provincia_id: 33
  },
  {
    id: 9509,
    cp: 33759,
    name: "El Franco",
    provincia_id: 33
  },
  {
    id: 9510,
    cp: 33760,
    name: "Castropol",
    provincia_id: 33
  },
  {
    id: 9511,
    cp: 33768,
    name: "Castropol",
    provincia_id: 33
  },
  {
    id: 9512,
    cp: 33769,
    name: "Castropol",
    provincia_id: 33
  },
  {
    id: 9513,
    cp: 33770,
    name: "Vegadeo",
    provincia_id: 33
  },
  {
    id: 9514,
    cp: 33774,
    name: "San Tirso de Abres",
    provincia_id: 33
  },
  {
    id: 9515,
    cp: 33775,
    name: "Taramundi",
    provincia_id: 33
  },
  {
    id: 9516,
    cp: 33776,
    name: "Vegadeo",
    provincia_id: 33
  },
  {
    id: 9517,
    cp: 33776,
    name: "Santa Eulalia de Oscos",
    provincia_id: 33
  },
  {
    id: 9518,
    cp: 33777,
    name: "San Martín de Oscos",
    provincia_id: 33
  },
  {
    id: 9519,
    cp: 33777,
    name: "Pesoz",
    provincia_id: 33
  },
  {
    id: 9520,
    cp: 33777,
    name: "Villanueva de Oscos",
    provincia_id: 33
  },
  {
    id: 9521,
    cp: 33778,
    name: "Vegadeo",
    provincia_id: 33
  },
  {
    id: 9522,
    cp: 33778,
    name: "Castropol",
    provincia_id: 33
  },
  {
    id: 9523,
    cp: 33779,
    name: "Santa Eulalia de Oscos",
    provincia_id: 33
  },
  {
    id: 9524,
    cp: 33779,
    name: "Vegadeo",
    provincia_id: 33
  },
  {
    id: 9525,
    cp: 33780,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9526,
    cp: 33781,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9527,
    cp: 33782,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9528,
    cp: 33782,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9529,
    cp: 33783,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9530,
    cp: 33784,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9531,
    cp: 33785,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9532,
    cp: 33787,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9533,
    cp: 33788,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9534,
    cp: 33789,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9535,
    cp: 33790,
    name: "Navia",
    provincia_id: 33
  },
  {
    id: 9536,
    cp: 33791,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9537,
    cp: 33792,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9538,
    cp: 33793,
    name: "Navia",
    provincia_id: 33
  },
  {
    id: 9539,
    cp: 33794,
    name: "Castropol",
    provincia_id: 33
  },
  {
    id: 9540,
    cp: 33795,
    name: "Coa?a",
    provincia_id: 33
  },
  {
    id: 9541,
    cp: 33796,
    name: "Coa?a",
    provincia_id: 33
  },
  {
    id: 9542,
    cp: 33797,
    name: "Coa?a",
    provincia_id: 33
  },
  {
    id: 9543,
    cp: 33798,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9544,
    cp: 33799,
    name: "Boal",
    provincia_id: 33
  },
  {
    id: 9545,
    cp: 33800,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9546,
    cp: 33810,
    name: "Ibias",
    provincia_id: 33
  },
  {
    id: 9547,
    cp: 33811,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9548,
    cp: 33811,
    name: "Ibias",
    provincia_id: 33
  },
  {
    id: 9549,
    cp: 33812,
    name: "Ibias",
    provincia_id: 33
  },
  {
    id: 9550,
    cp: 33812,
    name: "Dega?a",
    provincia_id: 33
  },
  {
    id: 9551,
    cp: 33813,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9552,
    cp: 33813,
    name: "Dega?a",
    provincia_id: 33
  },
  {
    id: 9553,
    cp: 33814,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9554,
    cp: 33815,
    name: "Allande",
    provincia_id: 33
  },
  {
    id: 9555,
    cp: 33815,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9556,
    cp: 33816,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9557,
    cp: 33817,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9558,
    cp: 33818,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9559,
    cp: 33819,
    name: "Cangas del Narcea",
    provincia_id: 33
  },
  {
    id: 9560,
    cp: 33820,
    name: "Grado",
    provincia_id: 33
  },
  {
    id: 9561,
    cp: 33825,
    name: "Grado",
    provincia_id: 33
  },
  {
    id: 9562,
    cp: 33826,
    name: "Yernes y Tameza",
    provincia_id: 33
  },
  {
    id: 9563,
    cp: 33826,
    name: "Grado",
    provincia_id: 33
  },
  {
    id: 9564,
    cp: 33827,
    name: "Grado",
    provincia_id: 33
  },
  {
    id: 9565,
    cp: 33827,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9566,
    cp: 33828,
    name: "Candamo",
    provincia_id: 33
  },
  {
    id: 9567,
    cp: 33829,
    name: "Candamo",
    provincia_id: 33
  },
  {
    id: 9568,
    cp: 33829,
    name: "Grado",
    provincia_id: 33
  },
  {
    id: 9569,
    cp: 33830,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9570,
    cp: 33836,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9571,
    cp: 33836,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9572,
    cp: 33837,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9573,
    cp: 33838,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9574,
    cp: 33839,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9575,
    cp: 33840,
    name: "Somiedo",
    provincia_id: 33
  },
  {
    id: 9576,
    cp: 33841,
    name: "Somiedo",
    provincia_id: 33
  },
  {
    id: 9577,
    cp: 33842,
    name: "Somiedo",
    provincia_id: 33
  },
  {
    id: 9578,
    cp: 33842,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9579,
    cp: 33843,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9580,
    cp: 33844,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9581,
    cp: 33845,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9582,
    cp: 33846,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9583,
    cp: 33846,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9584,
    cp: 33847,
    name: "Belmonte de Miranda",
    provincia_id: 33
  },
  {
    id: 9585,
    cp: 33848,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9586,
    cp: 33850,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9587,
    cp: 33857,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9588,
    cp: 33858,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9589,
    cp: 33859,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9590,
    cp: 33860,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9591,
    cp: 33866,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9592,
    cp: 33867,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9593,
    cp: 33868,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9594,
    cp: 33869,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9595,
    cp: 33870,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9596,
    cp: 33873,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9597,
    cp: 33874,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9598,
    cp: 33874,
    name: "Valdés",
    provincia_id: 33
  },
  {
    id: 9599,
    cp: 33875,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9600,
    cp: 33876,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9601,
    cp: 33877,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9602,
    cp: 33878,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9603,
    cp: 33879,
    name: "Tineo",
    provincia_id: 33
  },
  {
    id: 9604,
    cp: 33880,
    name: "Allande",
    provincia_id: 33
  },
  {
    id: 9605,
    cp: 33885,
    name: "Allande",
    provincia_id: 33
  },
  {
    id: 9606,
    cp: 33887,
    name: "Allande",
    provincia_id: 33
  },
  {
    id: 9607,
    cp: 33888,
    name: "Allande",
    provincia_id: 33
  },
  {
    id: 9608,
    cp: 33889,
    name: "Allande",
    provincia_id: 33
  },
  {
    id: 9609,
    cp: 33890,
    name: "Allande",
    provincia_id: 33
  },
  {
    id: 9610,
    cp: 33891,
    name: "Salas",
    provincia_id: 33
  },
  {
    id: 9611,
    cp: 33900,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9612,
    cp: 33909,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9613,
    cp: 33910,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9614,
    cp: 33919,
    name: "Oviedo",
    provincia_id: 33
  },
  {
    id: 9615,
    cp: 33920,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9616,
    cp: 33929,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9617,
    cp: 33930,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9618,
    cp: 33934,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9619,
    cp: 33935,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9620,
    cp: 33936,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9621,
    cp: 33937,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9622,
    cp: 33938,
    name: "Siero",
    provincia_id: 33
  },
  {
    id: 9623,
    cp: 33939,
    name: "Langreo",
    provincia_id: 33
  },
  {
    id: 9624,
    cp: 33940,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9625,
    cp: 33945,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9626,
    cp: 33946,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9627,
    cp: 33947,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9628,
    cp: 33948,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9629,
    cp: 33950,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9630,
    cp: 33957,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9631,
    cp: 33958,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9632,
    cp: 33959,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9633,
    cp: 33960,
    name: "San Martín del Rey Aurelio",
    provincia_id: 33
  },
  {
    id: 9634,
    cp: 33970,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9635,
    cp: 33979,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9636,
    cp: 33980,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9637,
    cp: 33986,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9638,
    cp: 33987,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9639,
    cp: 33989,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9640,
    cp: 33990,
    name: "Caso",
    provincia_id: 33
  },
  {
    id: 9641,
    cp: 33991,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9642,
    cp: 33992,
    name: "Laviana",
    provincia_id: 33
  },
  {
    id: 9643,
    cp: 33993,
    name: "Sobrescobio",
    provincia_id: 33
  },
  {
    id: 9644,
    cp: 33995,
    name: "Caso",
    provincia_id: 33
  },
  {
    id: 9645,
    cp: 33996,
    name: "Caso",
    provincia_id: 33
  },
  {
    id: 9646,
    cp: 34001,
    name: "Palencia",
    provincia_id: 34
  },
  {
    id: 9647,
    cp: 34002,
    name: "Palencia",
    provincia_id: 34
  },
  {
    id: 9648,
    cp: 34003,
    name: "Palencia",
    provincia_id: 34
  },
  {
    id: 9649,
    cp: 34004,
    name: "Palencia",
    provincia_id: 34
  },
  {
    id: 9650,
    cp: 34005,
    name: "Palencia",
    provincia_id: 34
  },
  {
    id: 9651,
    cp: 34006,
    name: "Palencia",
    provincia_id: 34
  },
  {
    id: 9652,
    cp: 34100,
    name: "Salda?a",
    provincia_id: 34
  },
  {
    id: 9653,
    cp: 34110,
    name: "Pino del Río",
    provincia_id: 34
  },
  {
    id: 9654,
    cp: 34111,
    name: "Villota del Páramo",
    provincia_id: 34
  },
  {
    id: 9655,
    cp: 34111,
    name: "Poza de la Vega",
    provincia_id: 34
  },
  {
    id: 9656,
    cp: 34111,
    name: "Pino del Río",
    provincia_id: 34
  },
  {
    id: 9657,
    cp: 34111,
    name: "Villaluenga de la Vega",
    provincia_id: 34
  },
  {
    id: 9658,
    cp: 34111,
    name: "Salda?a",
    provincia_id: 34
  },
  {
    id: 9659,
    cp: 34112,
    name: "Villaluenga de la Vega",
    provincia_id: 34
  },
  {
    id: 9660,
    cp: 34112,
    name: "Villota del Páramo",
    provincia_id: 34
  },
  {
    id: 9661,
    cp: 34112,
    name: "Santervás de la Vega",
    provincia_id: 34
  },
  {
    id: 9662,
    cp: 34113,
    name: "Villarrabé",
    provincia_id: 34
  },
  {
    id: 9663,
    cp: 34113,
    name: "Villaluenga de la Vega",
    provincia_id: 34
  },
  {
    id: 9664,
    cp: 34113,
    name: "Pedrosa de la Vega",
    provincia_id: 34
  },
  {
    id: 9665,
    cp: 34114,
    name: "Quintanilla de Onso?a",
    provincia_id: 34
  },
  {
    id: 9666,
    cp: 34115,
    name: "Valderrábano",
    provincia_id: 34
  },
  {
    id: 9667,
    cp: 34115,
    name: "Salda?a",
    provincia_id: 34
  },
  {
    id: 9668,
    cp: 34116,
    name: "Villarrabé",
    provincia_id: 34
  },
  {
    id: 9669,
    cp: 34116,
    name: "Bustillo de la Vega",
    provincia_id: 34
  },
  {
    id: 9670,
    cp: 34116,
    name: "Pedrosa de la Vega",
    provincia_id: 34
  },
  {
    id: 9671,
    cp: 34117,
    name: "Salda?a",
    provincia_id: 34
  },
  {
    id: 9672,
    cp: 34118,
    name: "Loma de Ucieza",
    provincia_id: 34
  },
  {
    id: 9673,
    cp: 34120,
    name: "Carrión de los Condes",
    provincia_id: 34
  },
  {
    id: 9674,
    cp: 34126,
    name: "Renedo de la Vega",
    provincia_id: 34
  },
  {
    id: 9675,
    cp: 34126,
    name: "Villamoronta",
    provincia_id: 34
  },
  {
    id: 9676,
    cp: 34127,
    name: "Loma de Ucieza",
    provincia_id: 34
  },
  {
    id: 9677,
    cp: 34127,
    name: "Valde-Ucieza",
    provincia_id: 34
  },
  {
    id: 9678,
    cp: 34128,
    name: "Loma de Ucieza",
    provincia_id: 34
  },
  {
    id: 9679,
    cp: 34128,
    name: "Quintanilla de Onso?a",
    provincia_id: 34
  },
  {
    id: 9680,
    cp: 34128,
    name: "La Serna",
    provincia_id: 34
  },
  {
    id: 9681,
    cp: 34128,
    name: "Nogal de las Huertas",
    provincia_id: 34
  },
  {
    id: 9682,
    cp: 34129,
    name: "Villaturde",
    provincia_id: 34
  },
  {
    id: 9683,
    cp: 34129,
    name: "Bustillo del Páramo de Carrión",
    provincia_id: 34
  },
  {
    id: 9684,
    cp: 34129,
    name: "Calzada de los Molinos",
    provincia_id: 34
  },
  {
    id: 9685,
    cp: 34131,
    name: "Carrión de los Condes",
    provincia_id: 34
  },
  {
    id: 9686,
    cp: 34131,
    name: "Villoldo",
    provincia_id: 34
  },
  {
    id: 9687,
    cp: 34132,
    name: "Villasarracino",
    provincia_id: 34
  },
  {
    id: 9688,
    cp: 34159,
    name: "Ampudia",
    provincia_id: 34
  },
  {
    id: 9689,
    cp: 34160,
    name: "Ampudia",
    provincia_id: 34
  },
  {
    id: 9690,
    cp: 34170,
    name: "Pedraza de Campos",
    provincia_id: 34
  },
  {
    id: 9691,
    cp: 34170,
    name: "Mazariegos",
    provincia_id: 34
  },
  {
    id: 9692,
    cp: 34170,
    name: "Villaumbrales",
    provincia_id: 34
  },
  {
    id: 9693,
    cp: 34170,
    name: "Villamartín de Campos",
    provincia_id: 34
  },
  {
    id: 9694,
    cp: 34190,
    name: "Villamuriel de Cerrato",
    provincia_id: 34
  },
  {
    id: 9695,
    cp: 34191,
    name: "Autilla del Pino",
    provincia_id: 34
  },
  {
    id: 9696,
    cp: 34191,
    name: "Palencia",
    provincia_id: 34
  },
  {
    id: 9697,
    cp: 34191,
    name: "Santa Cecilia del Alcor",
    provincia_id: 34
  },
  {
    id: 9698,
    cp: 34191,
    name: "Ampudia",
    provincia_id: 34
  },
  {
    id: 9699,
    cp: 34192,
    name: "Grijota",
    provincia_id: 34
  },
  {
    id: 9700,
    cp: 34192,
    name: "Villaumbrales",
    provincia_id: 34
  },
  {
    id: 9701,
    cp: 34200,
    name: "Venta de Ba?os",
    provincia_id: 34
  },
  {
    id: 9702,
    cp: 34208,
    name: "Due?as",
    provincia_id: 34
  },
  {
    id: 9703,
    cp: 34208,
    name: "Venta de Ba?os",
    provincia_id: 34
  },
  {
    id: 9704,
    cp: 34208,
    name: "Reinoso de Cerrato",
    provincia_id: 34
  },
  {
    id: 9705,
    cp: 34209,
    name: "Hontoria de Cerrato",
    provincia_id: 34
  },
  {
    id: 9706,
    cp: 34209,
    name: "Valle de Cerrato",
    provincia_id: 34
  },
  {
    id: 9707,
    cp: 34209,
    name: "Soto de Cerrato",
    provincia_id: 34
  },
  {
    id: 9708,
    cp: 34209,
    name: "Tariego de Cerrato",
    provincia_id: 34
  },
  {
    id: 9709,
    cp: 34210,
    name: "Due?as",
    provincia_id: 34
  },
  {
    id: 9710,
    cp: 34218,
    name: "Cevico de la Torre",
    provincia_id: 34
  },
  {
    id: 9711,
    cp: 34219,
    name: "Alba de Cerrato",
    provincia_id: 34
  },
  {
    id: 9712,
    cp: 34219,
    name: "Cubillas de Cerrato",
    provincia_id: 34
  },
  {
    id: 9713,
    cp: 34219,
    name: "Castrillo de Onielo",
    provincia_id: 34
  },
  {
    id: 9714,
    cp: 34219,
    name: "Vertavillo",
    provincia_id: 34
  },
  {
    id: 9715,
    cp: 34219,
    name: "Población de Cerrato",
    provincia_id: 34
  },
  {
    id: 9716,
    cp: 34220,
    name: "Magaz de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9717,
    cp: 34230,
    name: "Torquemada",
    provincia_id: 34
  },
  {
    id: 9718,
    cp: 34239,
    name: "Villamediana",
    provincia_id: 34
  },
  {
    id: 9719,
    cp: 34239,
    name: "Valdeolmillos",
    provincia_id: 34
  },
  {
    id: 9720,
    cp: 34240,
    name: "Baltanás",
    provincia_id: 34
  },
  {
    id: 9721,
    cp: 34246,
    name: "Castrillo de Don Juan",
    provincia_id: 34
  },
  {
    id: 9722,
    cp: 34247,
    name: "Villaconancio",
    provincia_id: 34
  },
  {
    id: 9723,
    cp: 34247,
    name: "Hérmedes de Cerrato",
    provincia_id: 34
  },
  {
    id: 9724,
    cp: 34247,
    name: "Cevico Navero",
    provincia_id: 34
  },
  {
    id: 9725,
    cp: 34248,
    name: "Espinosa de Cerrato",
    provincia_id: 34
  },
  {
    id: 9726,
    cp: 34248,
    name: "Cobos de Cerrato",
    provincia_id: 34
  },
  {
    id: 9727,
    cp: 34248,
    name: "Antigüedad",
    provincia_id: 34
  },
  {
    id: 9728,
    cp: 34249,
    name: "Villaviudas",
    provincia_id: 34
  },
  {
    id: 9729,
    cp: 34249,
    name: "Hornillos de Cerrato",
    provincia_id: 34
  },
  {
    id: 9730,
    cp: 34249,
    name: "Baltanás",
    provincia_id: 34
  },
  {
    id: 9731,
    cp: 34250,
    name: "Quintana del Puente",
    provincia_id: 34
  },
  {
    id: 9732,
    cp: 34257,
    name: "Villodrigo",
    provincia_id: 34
  },
  {
    id: 9733,
    cp: 34257,
    name: "Palenzuela",
    provincia_id: 34
  },
  {
    id: 9734,
    cp: 34257,
    name: "Tabanera de Cerrato",
    provincia_id: 34
  },
  {
    id: 9735,
    cp: 34257,
    name: "Villahán",
    provincia_id: 34
  },
  {
    id: 9736,
    cp: 34259,
    name: "Cordovilla la Real",
    provincia_id: 34
  },
  {
    id: 9737,
    cp: 34259,
    name: "Herrera de Valdeca?as",
    provincia_id: 34
  },
  {
    id: 9738,
    cp: 34259,
    name: "Villalaco",
    provincia_id: 34
  },
  {
    id: 9739,
    cp: 34260,
    name: "Vallejera",
    provincia_id: 9
  },
  {
    id: 9740,
    cp: 34260,
    name: "Villamedianilla",
    provincia_id: 9
  },
  {
    id: 9741,
    cp: 34260,
    name: "Revilla Vallejera",
    provincia_id: 9
  },
  {
    id: 9742,
    cp: 34300,
    name: "Paredes de Nava",
    provincia_id: 34
  },
  {
    id: 9743,
    cp: 34304,
    name: "Belmonte de Campos",
    provincia_id: 34
  },
  {
    id: 9744,
    cp: 34305,
    name: "Capillas",
    provincia_id: 34
  },
  {
    id: 9745,
    cp: 34305,
    name: "Castromocho",
    provincia_id: 34
  },
  {
    id: 9746,
    cp: 34305,
    name: "Boada de Campos",
    provincia_id: 34
  },
  {
    id: 9747,
    cp: 34305,
    name: "Torremormojón",
    provincia_id: 34
  },
  {
    id: 9748,
    cp: 34305,
    name: "Meneses de Campos",
    provincia_id: 34
  },
  {
    id: 9749,
    cp: 34305,
    name: "Villerías de Campos",
    provincia_id: 34
  },
  {
    id: 9750,
    cp: 34305,
    name: "Baquerín de Campos",
    provincia_id: 34
  },
  {
    id: 9751,
    cp: 34306,
    name: "Frechilla",
    provincia_id: 34
  },
  {
    id: 9752,
    cp: 34306,
    name: "Castil de Vela",
    provincia_id: 34
  },
  {
    id: 9753,
    cp: 34306,
    name: "Mazuecos de Valdeginate",
    provincia_id: 34
  },
  {
    id: 9754,
    cp: 34306,
    name: "Guaza de Campos",
    provincia_id: 34
  },
  {
    id: 9755,
    cp: 34307,
    name: "Valle del Retortillo",
    provincia_id: 34
  },
  {
    id: 9756,
    cp: 34309,
    name: "Villamuera de la Cueza",
    provincia_id: 34
  },
  {
    id: 9757,
    cp: 34309,
    name: "Riberos de la Cueza",
    provincia_id: 34
  },
  {
    id: 9758,
    cp: 34309,
    name: "Carde?osa de Volpejera",
    provincia_id: 34
  },
  {
    id: 9759,
    cp: 34309,
    name: "Villanueva del Rebollar",
    provincia_id: 34
  },
  {
    id: 9760,
    cp: 34309,
    name: "Cervatos de la Cueza",
    provincia_id: 34
  },
  {
    id: 9761,
    cp: 34310,
    name: "Becerril de Campos",
    provincia_id: 34
  },
  {
    id: 9762,
    cp: 34310,
    name: "Perales",
    provincia_id: 34
  },
  {
    id: 9763,
    cp: 34320,
    name: "Cisneros",
    provincia_id: 34
  },
  {
    id: 9764,
    cp: 34337,
    name: "Fuentes de Nava",
    provincia_id: 34
  },
  {
    id: 9765,
    cp: 34338,
    name: "Abarca de Campos",
    provincia_id: 34
  },
  {
    id: 9766,
    cp: 34338,
    name: "Autillo de Campos",
    provincia_id: 34
  },
  {
    id: 9767,
    cp: 34340,
    name: "Villada",
    provincia_id: 34
  },
  {
    id: 9768,
    cp: 34347,
    name: "San Román de la Cuba",
    provincia_id: 34
  },
  {
    id: 9769,
    cp: 34347,
    name: "Población de Arroyo",
    provincia_id: 34
  },
  {
    id: 9770,
    cp: 34347,
    name: "Ledigos",
    provincia_id: 34
  },
  {
    id: 9771,
    cp: 34347,
    name: "Pozo de Urama",
    provincia_id: 34
  },
  {
    id: 9772,
    cp: 34347,
    name: "Lagartos",
    provincia_id: 34
  },
  {
    id: 9773,
    cp: 34347,
    name: "Villalcón",
    provincia_id: 34
  },
  {
    id: 9774,
    cp: 34348,
    name: "Villacidaler",
    provincia_id: 34
  },
  {
    id: 9775,
    cp: 34349,
    name: "Lagartos",
    provincia_id: 34
  },
  {
    id: 9776,
    cp: 34349,
    name: "Moratinos",
    provincia_id: 34
  },
  {
    id: 9777,
    cp: 34349,
    name: "Boadilla de Rioseco",
    provincia_id: 34
  },
  {
    id: 9778,
    cp: 34349,
    name: "Villacidaler",
    provincia_id: 34
  },
  {
    id: 9779,
    cp: 34349,
    name: "Villada",
    provincia_id: 34
  },
  {
    id: 9780,
    cp: 34350,
    name: "Villarramiel",
    provincia_id: 34
  },
  {
    id: 9781,
    cp: 34400,
    name: "Herrera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9782,
    cp: 34404,
    name: "Dehesa de Montejo",
    provincia_id: 34
  },
  {
    id: 9783,
    cp: 34405,
    name: "Herrera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9784,
    cp: 34405,
    name: "Espinosa de Villagonzalo",
    provincia_id: 34
  },
  {
    id: 9785,
    cp: 34405,
    name: "Santa Cruz de Boedo",
    provincia_id: 34
  },
  {
    id: 9786,
    cp: 34406,
    name: "Herrera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9787,
    cp: 34406,
    name: "Collazos de Boedo",
    provincia_id: 34
  },
  {
    id: 9788,
    cp: 34406,
    name: "Báscones de Ojeda",
    provincia_id: 34
  },
  {
    id: 9789,
    cp: 34406,
    name: "Dehesa de Romanos",
    provincia_id: 34
  },
  {
    id: 9790,
    cp: 34407,
    name: "Páramo de Boedo",
    provincia_id: 34
  },
  {
    id: 9791,
    cp: 34407,
    name: "Olea de Boedo",
    provincia_id: 34
  },
  {
    id: 9792,
    cp: 34407,
    name: "Revilla de Collazos",
    provincia_id: 34
  },
  {
    id: 9793,
    cp: 34407,
    name: "Calahorra de Boedo",
    provincia_id: 34
  },
  {
    id: 9794,
    cp: 34407,
    name: "Villameriel",
    provincia_id: 34
  },
  {
    id: 9795,
    cp: 34407,
    name: "Collazos de Boedo",
    provincia_id: 34
  },
  {
    id: 9796,
    cp: 34407,
    name: "Sotoba?ado y Priorato",
    provincia_id: 34
  },
  {
    id: 9797,
    cp: 34408,
    name: "Villameriel",
    provincia_id: 34
  },
  {
    id: 9798,
    cp: 34409,
    name: "Villameriel",
    provincia_id: 34
  },
  {
    id: 9799,
    cp: 34410,
    name: "Monzón de Campos",
    provincia_id: 34
  },
  {
    id: 9800,
    cp: 34419,
    name: "Villalobón",
    provincia_id: 34
  },
  {
    id: 9801,
    cp: 34419,
    name: "Fuentes de Valdepero",
    provincia_id: 34
  },
  {
    id: 9802,
    cp: 34419,
    name: "Monzón de Campos",
    provincia_id: 34
  },
  {
    id: 9803,
    cp: 34419,
    name: "Husillos",
    provincia_id: 34
  },
  {
    id: 9804,
    cp: 34419,
    name: "Amusco",
    provincia_id: 34
  },
  {
    id: 9805,
    cp: 34420,
    name: "Amusco",
    provincia_id: 34
  },
  {
    id: 9806,
    cp: 34429,
    name: "San Cebrián de Campos",
    provincia_id: 34
  },
  {
    id: 9807,
    cp: 34429,
    name: "Manquillos",
    provincia_id: 34
  },
  {
    id: 9808,
    cp: 34429,
    name: "Amayuelas de Arriba",
    provincia_id: 34
  },
  {
    id: 9809,
    cp: 34429,
    name: "Perales",
    provincia_id: 34
  },
  {
    id: 9810,
    cp: 34429,
    name: "Mantinos",
    provincia_id: 34
  },
  {
    id: 9811,
    cp: 34429,
    name: "Ribas de Campos",
    provincia_id: 34
  },
  {
    id: 9812,
    cp: 34430,
    name: "Pi?a de Campos",
    provincia_id: 34
  },
  {
    id: 9813,
    cp: 34439,
    name: "Támara de Campos",
    provincia_id: 34
  },
  {
    id: 9814,
    cp: 34440,
    name: "Frómista",
    provincia_id: 34
  },
  {
    id: 9815,
    cp: 34447,
    name: "Revenga de Campos",
    provincia_id: 34
  },
  {
    id: 9816,
    cp: 34447,
    name: "Villarmentero de Campos",
    provincia_id: 34
  },
  {
    id: 9817,
    cp: 34449,
    name: "Arconada",
    provincia_id: 34
  },
  {
    id: 9818,
    cp: 34449,
    name: "Población de Campos",
    provincia_id: 34
  },
  {
    id: 9819,
    cp: 34449,
    name: "Lomas",
    provincia_id: 34
  },
  {
    id: 9820,
    cp: 34449,
    name: "Villalcázar de Sirga",
    provincia_id: 34
  },
  {
    id: 9821,
    cp: 34449,
    name: "Villovieco",
    provincia_id: 34
  },
  {
    id: 9822,
    cp: 34450,
    name: "Astudillo",
    provincia_id: 34
  },
  {
    id: 9823,
    cp: 34460,
    name: "Osorno la Mayor",
    provincia_id: 34
  },
  {
    id: 9824,
    cp: 34465,
    name: "Valbuena de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9825,
    cp: 34466,
    name: "Villodre",
    provincia_id: 34
  },
  {
    id: 9826,
    cp: 34467,
    name: "Melgar de Yuso",
    provincia_id: 34
  },
  {
    id: 9827,
    cp: 34468,
    name: "Itero de la Vega",
    provincia_id: 34
  },
  {
    id: 9828,
    cp: 34468,
    name: "Lantadilla",
    provincia_id: 34
  },
  {
    id: 9829,
    cp: 34468,
    name: "Osornillo",
    provincia_id: 34
  },
  {
    id: 9830,
    cp: 34468,
    name: "Boadilla del Camino",
    provincia_id: 34
  },
  {
    id: 9831,
    cp: 34469,
    name: "Marcilla de Campos",
    provincia_id: 34
  },
  {
    id: 9832,
    cp: 34469,
    name: "Villaherreros",
    provincia_id: 34
  },
  {
    id: 9833,
    cp: 34469,
    name: "Requena de Campos",
    provincia_id: 34
  },
  {
    id: 9834,
    cp: 34469,
    name: "Osorno la Mayor",
    provincia_id: 34
  },
  {
    id: 9835,
    cp: 34470,
    name: "Buenavista de Valdavia",
    provincia_id: 34
  },
  {
    id: 9836,
    cp: 34470,
    name: "La Puebla de Valdavia",
    provincia_id: 34
  },
  {
    id: 9837,
    cp: 34473,
    name: "Tabanera de Valdavia",
    provincia_id: 34
  },
  {
    id: 9838,
    cp: 34473,
    name: "Buenavista de Valdavia",
    provincia_id: 34
  },
  {
    id: 9839,
    cp: 34473,
    name: "Valderrábano",
    provincia_id: 34
  },
  {
    id: 9840,
    cp: 34473,
    name: "Ayuela",
    provincia_id: 34
  },
  {
    id: 9841,
    cp: 34475,
    name: "Villabasta de Valdavia",
    provincia_id: 34
  },
  {
    id: 9842,
    cp: 34475,
    name: "Villaeles de Valdavia",
    provincia_id: 34
  },
  {
    id: 9843,
    cp: 34475,
    name: "Villasila de Valdavia",
    provincia_id: 34
  },
  {
    id: 9844,
    cp: 34477,
    name: "Bárcena de Campos",
    provincia_id: 34
  },
  {
    id: 9845,
    cp: 34477,
    name: "Villanu?o de Valdavia",
    provincia_id: 34
  },
  {
    id: 9846,
    cp: 34477,
    name: "Loma de Ucieza",
    provincia_id: 34
  },
  {
    id: 9847,
    cp: 34478,
    name: "Castrillo de Villavega",
    provincia_id: 34
  },
  {
    id: 9848,
    cp: 34480,
    name: "Alar del Rey",
    provincia_id: 34
  },
  {
    id: 9849,
    cp: 34484,
    name: "Dehesa de Montejo",
    provincia_id: 34
  },
  {
    id: 9850,
    cp: 34485,
    name: "Olmos de Ojeda",
    provincia_id: 34
  },
  {
    id: 9851,
    cp: 34485,
    name: "Payo de Ojeda",
    provincia_id: 34
  },
  {
    id: 9852,
    cp: 34485,
    name: "La Vid de Ojeda",
    provincia_id: 34
  },
  {
    id: 9853,
    cp: 34485,
    name: "Micieces de Ojeda",
    provincia_id: 34
  },
  {
    id: 9854,
    cp: 34486,
    name: "Cervera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9855,
    cp: 34486,
    name: "Aguilar de Campoo",
    provincia_id: 34
  },
  {
    id: 9856,
    cp: 34486,
    name: "Prádanos de Ojeda",
    provincia_id: 34
  },
  {
    id: 9857,
    cp: 34486,
    name: "Santibá?ez de Ecla",
    provincia_id: 34
  },
  {
    id: 9858,
    cp: 34486,
    name: "Olmos de Ojeda",
    provincia_id: 34
  },
  {
    id: 9859,
    cp: 34487,
    name: "Alar del Rey",
    provincia_id: 34
  },
  {
    id: 9860,
    cp: 34487,
    name: "Olmos de Ojeda",
    provincia_id: 34
  },
  {
    id: 9861,
    cp: 34490,
    name: "Santoyo",
    provincia_id: 34
  },
  {
    id: 9862,
    cp: 34490,
    name: "Astudillo",
    provincia_id: 34
  },
  {
    id: 9863,
    cp: 34491,
    name: "Santa Cruz de Boedo",
    provincia_id: 34
  },
  {
    id: 9864,
    cp: 34491,
    name: "San Cristóbal de Boedo",
    provincia_id: 34
  },
  {
    id: 9865,
    cp: 34491,
    name: "Villaherreros",
    provincia_id: 34
  },
  {
    id: 9866,
    cp: 34491,
    name: "Villaprovedo",
    provincia_id: 34
  },
  {
    id: 9867,
    cp: 34491,
    name: "Espinosa de Villagonzalo",
    provincia_id: 34
  },
  {
    id: 9868,
    cp: 34491,
    name: "Abia de las Torres",
    provincia_id: 34
  },
  {
    id: 9869,
    cp: 34492,
    name: "Rebolledo de la Torre",
    provincia_id: 9
  },
  {
    id: 9870,
    cp: 34492,
    name: "Aguilar de Campoo",
    provincia_id: 34
  },
  {
    id: 9871,
    cp: 34492,
    name: "Alar del Rey",
    provincia_id: 34
  },
  {
    id: 9872,
    cp: 34492,
    name: "Sotresgudo",
    provincia_id: 9
  },
  {
    id: 9873,
    cp: 34570,
    name: "La Aldea de San Nicolás",
    provincia_id: 35
  },
  {
    id: 9874,
    cp: 34800,
    name: "Aguilar de Campoo",
    provincia_id: 34
  },
  {
    id: 9875,
    cp: 34810,
    name: "Salinas de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9876,
    cp: 34810,
    name: "Aguilar de Campoo",
    provincia_id: 34
  },
  {
    id: 9877,
    cp: 34811,
    name: "Pomar de Valdivia",
    provincia_id: 34
  },
  {
    id: 9878,
    cp: 34811,
    name: "Aguilar de Campoo",
    provincia_id: 34
  },
  {
    id: 9879,
    cp: 34813,
    name: "Pomar de Valdivia",
    provincia_id: 34
  },
  {
    id: 9880,
    cp: 34813,
    name: "Aguilar de Campoo",
    provincia_id: 34
  },
  {
    id: 9881,
    cp: 34814,
    name: "Pomar de Valdivia",
    provincia_id: 34
  },
  {
    id: 9882,
    cp: 34814,
    name: "Berzosilla",
    provincia_id: 34
  },
  {
    id: 9883,
    cp: 34815,
    name: "Aguilar de Campoo",
    provincia_id: 34
  },
  {
    id: 9884,
    cp: 34815,
    name: "Pomar de Valdivia",
    provincia_id: 34
  },
  {
    id: 9885,
    cp: 34820,
    name: "Barruelo de Santullán",
    provincia_id: 34
  },
  {
    id: 9886,
    cp: 34828,
    name: "Salinas de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9887,
    cp: 34828,
    name: "San Cebrián de Mudá",
    provincia_id: 34
  },
  {
    id: 9888,
    cp: 34828,
    name: "Barruelo de Santullán",
    provincia_id: 34
  },
  {
    id: 9889,
    cp: 34829,
    name: "Barruelo de Santullán",
    provincia_id: 34
  },
  {
    id: 9890,
    cp: 34829,
    name: "Bra?osera",
    provincia_id: 34
  },
  {
    id: 9891,
    cp: 34830,
    name: "San Mamés de Campos",
    provincia_id: 34
  },
  {
    id: 9892,
    cp: 34830,
    name: "Salinas de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9893,
    cp: 34839,
    name: "Mudá",
    provincia_id: 34
  },
  {
    id: 9894,
    cp: 34839,
    name: "Cervera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9895,
    cp: 34839,
    name: "San Cebrián de Mudá",
    provincia_id: 34
  },
  {
    id: 9896,
    cp: 34840,
    name: "Cervera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9897,
    cp: 34844,
    name: "Cervera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9898,
    cp: 34844,
    name: "Dehesa de Montejo",
    provincia_id: 34
  },
  {
    id: 9899,
    cp: 34844,
    name: "Triollo",
    provincia_id: 34
  },
  {
    id: 9900,
    cp: 34846,
    name: "Polentinos",
    provincia_id: 34
  },
  {
    id: 9901,
    cp: 34846,
    name: "Cervera de Pisuerga",
    provincia_id: 34
  },
  {
    id: 9902,
    cp: 34847,
    name: "La Pernía",
    provincia_id: 34
  },
  {
    id: 9903,
    cp: 34848,
    name: "La Pernía",
    provincia_id: 34
  },
  {
    id: 9904,
    cp: 34849,
    name: "La Pernía",
    provincia_id: 34
  },
  {
    id: 9905,
    cp: 34850,
    name: "Castrejón de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9906,
    cp: 34858,
    name: "Castrejón de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9907,
    cp: 34859,
    name: "Castrejón de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9908,
    cp: 34869,
    name: "Santibá?ez de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9909,
    cp: 34870,
    name: "Santibá?ez de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9910,
    cp: 34870,
    name: "Respenda de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9911,
    cp: 34874,
    name: "Respenda de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9912,
    cp: 34878,
    name: "Santibá?ez de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9913,
    cp: 34878,
    name: "Congosto de Valdavia",
    provincia_id: 34
  },
  {
    id: 9914,
    cp: 34878,
    name: "Respenda de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9915,
    cp: 34879,
    name: "Santibá?ez de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9916,
    cp: 34879,
    name: "Guardo",
    provincia_id: 34
  },
  {
    id: 9917,
    cp: 34880,
    name: "Guardo",
    provincia_id: 34
  },
  {
    id: 9918,
    cp: 34882,
    name: "Guardo",
    provincia_id: 34
  },
  {
    id: 9919,
    cp: 34882,
    name: "Congosto de Valdavia",
    provincia_id: 34
  },
  {
    id: 9920,
    cp: 34884,
    name: "Santibá?ez de la Pe?a",
    provincia_id: 34
  },
  {
    id: 9921,
    cp: 34886,
    name: "Velilla del Río Carrión",
    provincia_id: 34
  },
  {
    id: 9922,
    cp: 34888,
    name: "Velilla del Río Carrión",
    provincia_id: 34
  },
  {
    id: 9923,
    cp: 34889,
    name: "Villalba de Guardo",
    provincia_id: 34
  },
  {
    id: 9924,
    cp: 34889,
    name: "Velilla del Río Carrión",
    provincia_id: 34
  },
  {
    id: 9925,
    cp: 34889,
    name: "Fresno del Río",
    provincia_id: 34
  },
  {
    id: 9926,
    cp: 34889,
    name: "Guardo",
    provincia_id: 34
  },
  {
    id: 9927,
    cp: 35000,
    name: "Santa Lucía de Tirajana",
    provincia_id: 35
  },
  {
    id: 9928,
    cp: 35000,
    name: "Valleseco",
    provincia_id: 35
  },
  {
    id: 9929,
    cp: 35000,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 9930,
    cp: 35000,
    name: "Ingenio",
    provincia_id: 35
  },
  {
    id: 9931,
    cp: 35000,
    name: "Teror",
    provincia_id: 35
  },
  {
    id: 9932,
    cp: 35001,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9933,
    cp: 35002,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9934,
    cp: 35003,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9935,
    cp: 35004,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9936,
    cp: 35005,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9937,
    cp: 35006,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9938,
    cp: 35007,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9939,
    cp: 35008,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9940,
    cp: 35009,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9941,
    cp: 35010,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9942,
    cp: 35011,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9943,
    cp: 35012,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9944,
    cp: 35013,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9945,
    cp: 35014,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9946,
    cp: 35015,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9947,
    cp: 35016,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9948,
    cp: 35017,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9949,
    cp: 35018,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9950,
    cp: 35019,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9951,
    cp: 35100,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9952,
    cp: 35106,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9953,
    cp: 35107,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9954,
    cp: 35108,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9955,
    cp: 35109,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9956,
    cp: 35110,
    name: "Santa Lucía de Tirajana",
    provincia_id: 35
  },
  {
    id: 9957,
    cp: 35118,
    name: "Agüimes",
    provincia_id: 35
  },
  {
    id: 9958,
    cp: 35119,
    name: "Agüimes",
    provincia_id: 35
  },
  {
    id: 9959,
    cp: 35119,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9960,
    cp: 35120,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9961,
    cp: 35120,
    name: "Mogán",
    provincia_id: 35
  },
  {
    id: 9962,
    cp: 35128,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9963,
    cp: 35129,
    name: "Mogán",
    provincia_id: 35
  },
  {
    id: 9964,
    cp: 35130,
    name: "Mogán",
    provincia_id: 35
  },
  {
    id: 9965,
    cp: 35138,
    name: "Mogán",
    provincia_id: 35
  },
  {
    id: 9966,
    cp: 35139,
    name: "Mogán",
    provincia_id: 35
  },
  {
    id: 9967,
    cp: 35140,
    name: "Mogán",
    provincia_id: 35
  },
  {
    id: 9968,
    cp: 35149,
    name: "Mogán",
    provincia_id: 35
  },
  {
    id: 9969,
    cp: 35188,
    name: "Gáldar",
    provincia_id: 35
  },
  {
    id: 9970,
    cp: 35200,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9971,
    cp: 35210,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9972,
    cp: 35211,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9973,
    cp: 35212,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9974,
    cp: 35213,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9975,
    cp: 35214,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9976,
    cp: 35215,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9977,
    cp: 35216,
    name: "Valsequillo de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9978,
    cp: 35217,
    name: "Valsequillo de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9979,
    cp: 35218,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9980,
    cp: 35219,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9981,
    cp: 35220,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9982,
    cp: 35220,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9983,
    cp: 35229,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9984,
    cp: 35229,
    name: "Las Palmas de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 9985,
    cp: 35240,
    name: "Ingenio",
    provincia_id: 35
  },
  {
    id: 9986,
    cp: 35250,
    name: "Ingenio",
    provincia_id: 35
  },
  {
    id: 9987,
    cp: 35259,
    name: "Telde",
    provincia_id: 35
  },
  {
    id: 9988,
    cp: 35259,
    name: "Ingenio",
    provincia_id: 35
  },
  {
    id: 9989,
    cp: 35260,
    name: "Agüimes",
    provincia_id: 35
  },
  {
    id: 9990,
    cp: 35269,
    name: "Agüimes",
    provincia_id: 35
  },
  {
    id: 9991,
    cp: 35270,
    name: "Agüimes",
    provincia_id: 35
  },
  {
    id: 9992,
    cp: 35280,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9993,
    cp: 35280,
    name: "Santa Lucía de Tirajana",
    provincia_id: 35
  },
  {
    id: 9994,
    cp: 35290,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9995,
    cp: 35299,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 9996,
    cp: 35300,
    name: "Santa Brígida",
    provincia_id: 35
  },
  {
    id: 9997,
    cp: 35307,
    name: "Santa Brígida",
    provincia_id: 35
  },
  {
    id: 9998,
    cp: 35308,
    name: "Santa Brígida",
    provincia_id: 35
  },
  {
    id: 9999,
    cp: 35309,
    name: "Santa Brígida",
    provincia_id: 35
  },
  {
    id: 10000,
    cp: 35310,
    name: "Santa Brígida",
    provincia_id: 35
  },
  {
    id: 10001,
    cp: 35320,
    name: "Vega de San Mateo",
    provincia_id: 35
  },
  {
    id: 10002,
    cp: 35328,
    name: "Vega de San Mateo",
    provincia_id: 35
  },
  {
    id: 10003,
    cp: 35329,
    name: "Vega de San Mateo",
    provincia_id: 35
  },
  {
    id: 10004,
    cp: 35330,
    name: "Teror",
    provincia_id: 35
  },
  {
    id: 10005,
    cp: 35333,
    name: "Teror",
    provincia_id: 35
  },
  {
    id: 10006,
    cp: 35338,
    name: "Teror",
    provincia_id: 35
  },
  {
    id: 10007,
    cp: 35339,
    name: "Teror",
    provincia_id: 35
  },
  {
    id: 10008,
    cp: 35340,
    name: "Valleseco",
    provincia_id: 35
  },
  {
    id: 10009,
    cp: 35349,
    name: "Valleseco",
    provincia_id: 35
  },
  {
    id: 10010,
    cp: 35350,
    name: "Artenara",
    provincia_id: 35
  },
  {
    id: 10011,
    cp: 35360,
    name: "Tejeda",
    provincia_id: 35
  },
  {
    id: 10012,
    cp: 35368,
    name: "Tejeda",
    provincia_id: 35
  },
  {
    id: 10013,
    cp: 35369,
    name: "San Bartolomé de Tirajana",
    provincia_id: 35
  },
  {
    id: 10014,
    cp: 35369,
    name: "Antigua",
    provincia_id: 35
  },
  {
    id: 10015,
    cp: 35370,
    name: "Yaiza",
    provincia_id: 35
  },
  {
    id: 10016,
    cp: 35400,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10017,
    cp: 35404,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10018,
    cp: 35411,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10019,
    cp: 35412,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10020,
    cp: 35413,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10021,
    cp: 35413,
    name: "Moya",
    provincia_id: 35
  },
  {
    id: 10022,
    cp: 35414,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10023,
    cp: 35415,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10024,
    cp: 35418,
    name: "Arucas",
    provincia_id: 35
  },
  {
    id: 10025,
    cp: 35420,
    name: "Moya",
    provincia_id: 35
  },
  {
    id: 10026,
    cp: 35420,
    name: "Gáldar",
    provincia_id: 35
  },
  {
    id: 10027,
    cp: 35421,
    name: "Moya",
    provincia_id: 35
  },
  {
    id: 10028,
    cp: 35422,
    name: "Moya",
    provincia_id: 35
  },
  {
    id: 10029,
    cp: 35423,
    name: "Moya",
    provincia_id: 35
  },
  {
    id: 10030,
    cp: 35430,
    name: "Firgas",
    provincia_id: 35
  },
  {
    id: 10031,
    cp: 35431,
    name: "Firgas",
    provincia_id: 35
  },
  {
    id: 10032,
    cp: 35432,
    name: "Firgas",
    provincia_id: 35
  },
  {
    id: 10033,
    cp: 35435,
    name: "Firgas",
    provincia_id: 35
  },
  {
    id: 10034,
    cp: 35450,
    name: "Santa María de Guía de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 10035,
    cp: 35457,
    name: "Santa María de Guía de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 10036,
    cp: 35458,
    name: "Santa María de Guía de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 10037,
    cp: 35460,
    name: "Gáldar",
    provincia_id: 35
  },
  {
    id: 10038,
    cp: 35468,
    name: "Gáldar",
    provincia_id: 35
  },
  {
    id: 10039,
    cp: 35469,
    name: "Gáldar",
    provincia_id: 35
  },
  {
    id: 10040,
    cp: 35469,
    name: "La Oliva",
    provincia_id: 35
  },
  {
    id: 10041,
    cp: 35470,
    name: "La Aldea de San Nicolás",
    provincia_id: 35
  },
  {
    id: 10042,
    cp: 35478,
    name: "La Aldea de San Nicolás",
    provincia_id: 35
  },
  {
    id: 10043,
    cp: 35479,
    name: "La Aldea de San Nicolás",
    provincia_id: 35
  },
  {
    id: 10044,
    cp: 35480,
    name: "Agaete",
    provincia_id: 35
  },
  {
    id: 10045,
    cp: 35488,
    name: "Gáldar",
    provincia_id: 35
  },
  {
    id: 10046,
    cp: 35489,
    name: "Agaete",
    provincia_id: 35
  },
  {
    id: 10047,
    cp: 35500,
    name: "Arrecife",
    provincia_id: 35
  },
  {
    id: 10048,
    cp: 35507,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10049,
    cp: 35508,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10050,
    cp: 35509,
    name: "San Bartolomé",
    provincia_id: 35
  },
  {
    id: 10051,
    cp: 35509,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10052,
    cp: 35510,
    name: "Tías",
    provincia_id: 35
  },
  {
    id: 10053,
    cp: 35520,
    name: "Haría",
    provincia_id: 35
  },
  {
    id: 10054,
    cp: 35530,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10055,
    cp: 35539,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10056,
    cp: 35540,
    name: "Santa María de Guía de Gran Canaria",
    provincia_id: 35
  },
  {
    id: 10057,
    cp: 35540,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10058,
    cp: 35541,
    name: "Haría",
    provincia_id: 35
  },
  {
    id: 10059,
    cp: 35542,
    name: "Haría",
    provincia_id: 35
  },
  {
    id: 10060,
    cp: 35543,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10061,
    cp: 35543,
    name: "Haría",
    provincia_id: 35
  },
  {
    id: 10062,
    cp: 35544,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10063,
    cp: 35550,
    name: "San Bartolomé",
    provincia_id: 35
  },
  {
    id: 10064,
    cp: 35550,
    name: "Tinajo",
    provincia_id: 35
  },
  {
    id: 10065,
    cp: 35558,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10066,
    cp: 35560,
    name: "Tinajo",
    provincia_id: 35
  },
  {
    id: 10067,
    cp: 35561,
    name: "Teguise",
    provincia_id: 35
  },
  {
    id: 10068,
    cp: 35570,
    name: "Yaiza",
    provincia_id: 35
  },
  {
    id: 10069,
    cp: 35571,
    name: "Tías",
    provincia_id: 35
  },
  {
    id: 10070,
    cp: 35572,
    name: "Tías",
    provincia_id: 35
  },
  {
    id: 10071,
    cp: 35579,
    name: "La Aldea de San Nicolás",
    provincia_id: 35
  },
  {
    id: 10072,
    cp: 35580,
    name: "Yaiza",
    provincia_id: 35
  },
  {
    id: 10073,
    cp: 35600,
    name: "Puerto del Rosario",
    provincia_id: 35
  },
  {
    id: 10074,
    cp: 35610,
    name: "Antigua",
    provincia_id: 35
  },
  {
    id: 10075,
    cp: 35610,
    name: "Puerto del Rosario",
    provincia_id: 35
  },
  {
    id: 10076,
    cp: 35611,
    name: "Puerto del Rosario",
    provincia_id: 35
  },
  {
    id: 10077,
    cp: 35612,
    name: "Puerto del Rosario",
    provincia_id: 35
  },
  {
    id: 10078,
    cp: 35613,
    name: "Puerto del Rosario",
    provincia_id: 35
  },
  {
    id: 10079,
    cp: 35620,
    name: "Tuineje",
    provincia_id: 35
  },
  {
    id: 10080,
    cp: 35625,
    name: "Pájara",
    provincia_id: 35
  },
  {
    id: 10081,
    cp: 35626,
    name: "Pájara",
    provincia_id: 35
  },
  {
    id: 10082,
    cp: 35627,
    name: "Pájara",
    provincia_id: 35
  },
  {
    id: 10083,
    cp: 35627,
    name: "Tuineje",
    provincia_id: 35
  },
  {
    id: 10084,
    cp: 35628,
    name: "Tuineje",
    provincia_id: 35
  },
  {
    id: 10085,
    cp: 35628,
    name: "Pájara",
    provincia_id: 35
  },
  {
    id: 10086,
    cp: 35629,
    name: "Tuineje",
    provincia_id: 35
  },
  {
    id: 10087,
    cp: 35630,
    name: "Antigua",
    provincia_id: 35
  },
  {
    id: 10088,
    cp: 35637,
    name: "Betancuria",
    provincia_id: 35
  },
  {
    id: 10089,
    cp: 35637,
    name: "Puerto del Rosario",
    provincia_id: 35
  },
  {
    id: 10090,
    cp: 35638,
    name: "Antigua",
    provincia_id: 35
  },
  {
    id: 10091,
    cp: 35639,
    name: "Antigua",
    provincia_id: 35
  },
  {
    id: 10092,
    cp: 35640,
    name: "La Oliva",
    provincia_id: 35
  },
  {
    id: 10093,
    cp: 35640,
    name: "Gáldar",
    provincia_id: 35
  },
  {
    id: 10094,
    cp: 35649,
    name: "La Oliva",
    provincia_id: 35
  },
  {
    id: 10095,
    cp: 35650,
    name: "La Oliva",
    provincia_id: 35
  },
  {
    id: 10096,
    cp: 35660,
    name: "Tuineje",
    provincia_id: 35
  },
  {
    id: 10097,
    cp: 35660,
    name: "La Oliva",
    provincia_id: 35
  },
  {
    id: 10098,
    cp: 36001,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10099,
    cp: 36002,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10100,
    cp: 36003,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10101,
    cp: 36004,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10102,
    cp: 36005,
    name: "Poio",
    provincia_id: 36
  },
  {
    id: 10103,
    cp: 36005,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10104,
    cp: 36110,
    name: "Campo Lameiro",
    provincia_id: 36
  },
  {
    id: 10105,
    cp: 36116,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10106,
    cp: 36117,
    name: "Campo Lameiro",
    provincia_id: 36
  },
  {
    id: 10107,
    cp: 36118,
    name: "Campo Lameiro",
    provincia_id: 36
  },
  {
    id: 10108,
    cp: 36119,
    name: "Campo Lameiro",
    provincia_id: 36
  },
  {
    id: 10109,
    cp: 36120,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10110,
    cp: 36121,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10111,
    cp: 36139,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10112,
    cp: 36140,
    name: "Vilaboa",
    provincia_id: 36
  },
  {
    id: 10113,
    cp: 36141,
    name: "Vilaboa",
    provincia_id: 36
  },
  {
    id: 10114,
    cp: 36142,
    name: "Vilaboa",
    provincia_id: 36
  },
  {
    id: 10115,
    cp: 36143,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10116,
    cp: 36150,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10117,
    cp: 36151,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10118,
    cp: 36152,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10119,
    cp: 36153,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10120,
    cp: 36154,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10121,
    cp: 36155,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10122,
    cp: 36156,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10123,
    cp: 36157,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10124,
    cp: 36158,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10125,
    cp: 36160,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10126,
    cp: 36161,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10127,
    cp: 36162,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10128,
    cp: 36163,
    name: "Poio",
    provincia_id: 36
  },
  {
    id: 10129,
    cp: 36164,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10130,
    cp: 36190,
    name: "Barro",
    provincia_id: 36
  },
  {
    id: 10131,
    cp: 36191,
    name: "Barro",
    provincia_id: 36
  },
  {
    id: 10132,
    cp: 36192,
    name: "Meis",
    provincia_id: 36
  },
  {
    id: 10133,
    cp: 36193,
    name: "Portas",
    provincia_id: 36
  },
  {
    id: 10134,
    cp: 36193,
    name: "Barro",
    provincia_id: 36
  },
  {
    id: 10135,
    cp: 36194,
    name: "Barro",
    provincia_id: 36
  },
  {
    id: 10136,
    cp: 36201,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10137,
    cp: 36202,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10138,
    cp: 36203,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10139,
    cp: 36204,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10140,
    cp: 36205,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10141,
    cp: 36206,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10142,
    cp: 36207,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10143,
    cp: 36208,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10144,
    cp: 36209,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10145,
    cp: 36210,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10146,
    cp: 36211,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10147,
    cp: 36212,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10148,
    cp: 36213,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10149,
    cp: 36214,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10150,
    cp: 36215,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10151,
    cp: 36216,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10152,
    cp: 36300,
    name: "Baiona",
    provincia_id: 36
  },
  {
    id: 10153,
    cp: 36307,
    name: "Baiona",
    provincia_id: 36
  },
  {
    id: 10154,
    cp: 36308,
    name: "Baiona",
    provincia_id: 36
  },
  {
    id: 10155,
    cp: 36309,
    name: "Baiona",
    provincia_id: 36
  },
  {
    id: 10156,
    cp: 36309,
    name: "Oia",
    provincia_id: 36
  },
  {
    id: 10157,
    cp: 36310,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10158,
    cp: 36311,
    name: "Mos",
    provincia_id: 36
  },
  {
    id: 10159,
    cp: 36312,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10160,
    cp: 36313,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10161,
    cp: 36314,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10162,
    cp: 36315,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10163,
    cp: 36316,
    name: "Gondomar",
    provincia_id: 36
  },
  {
    id: 10164,
    cp: 36317,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10165,
    cp: 36318,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10166,
    cp: 36320,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10167,
    cp: 36330,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10168,
    cp: 36331,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10169,
    cp: 36340,
    name: "Nigrán",
    provincia_id: 36
  },
  {
    id: 10170,
    cp: 36350,
    name: "Nigrán",
    provincia_id: 36
  },
  {
    id: 10171,
    cp: 36360,
    name: "Nigrán",
    provincia_id: 36
  },
  {
    id: 10172,
    cp: 36370,
    name: "Nigrán",
    provincia_id: 36
  },
  {
    id: 10173,
    cp: 36378,
    name: "Gondomar",
    provincia_id: 36
  },
  {
    id: 10174,
    cp: 36379,
    name: "Nigrán",
    provincia_id: 36
  },
  {
    id: 10175,
    cp: 36380,
    name: "Gondomar",
    provincia_id: 36
  },
  {
    id: 10176,
    cp: 36388,
    name: "Gondomar",
    provincia_id: 36
  },
  {
    id: 10177,
    cp: 36389,
    name: "Gondomar",
    provincia_id: 36
  },
  {
    id: 10178,
    cp: 36390,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10179,
    cp: 36391,
    name: "Nigrán",
    provincia_id: 36
  },
  {
    id: 10180,
    cp: 36392,
    name: "Vigo",
    provincia_id: 36
  },
  {
    id: 10181,
    cp: 36393,
    name: "Baiona",
    provincia_id: 36
  },
  {
    id: 10182,
    cp: 36400,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10183,
    cp: 36410,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10184,
    cp: 36411,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10185,
    cp: 36412,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10186,
    cp: 36413,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10187,
    cp: 36414,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10188,
    cp: 36415,
    name: "Mos",
    provincia_id: 36
  },
  {
    id: 10189,
    cp: 36416,
    name: "Mos",
    provincia_id: 36
  },
  {
    id: 10190,
    cp: 36417,
    name: "Mos",
    provincia_id: 36
  },
  {
    id: 10191,
    cp: 36418,
    name: "Mos",
    provincia_id: 36
  },
  {
    id: 10192,
    cp: 36418,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10193,
    cp: 36419,
    name: "Mos",
    provincia_id: 36
  },
  {
    id: 10194,
    cp: 36420,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10195,
    cp: 36428,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10196,
    cp: 36429,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10197,
    cp: 36430,
    name: "Arbo",
    provincia_id: 36
  },
  {
    id: 10198,
    cp: 36435,
    name: "Arbo",
    provincia_id: 36
  },
  {
    id: 10199,
    cp: 36436,
    name: "Arbo",
    provincia_id: 36
  },
  {
    id: 10200,
    cp: 36437,
    name: "Arbo",
    provincia_id: 36
  },
  {
    id: 10201,
    cp: 36438,
    name: "Arbo",
    provincia_id: 36
  },
  {
    id: 10202,
    cp: 36439,
    name: "Arbo",
    provincia_id: 36
  },
  {
    id: 10203,
    cp: 36440,
    name: "As Neves",
    provincia_id: 36
  },
  {
    id: 10204,
    cp: 36446,
    name: "As Neves",
    provincia_id: 36
  },
  {
    id: 10205,
    cp: 36447,
    name: "As Neves",
    provincia_id: 36
  },
  {
    id: 10206,
    cp: 36448,
    name: "As Neves",
    provincia_id: 36
  },
  {
    id: 10207,
    cp: 36449,
    name: "As Neves",
    provincia_id: 36
  },
  {
    id: 10208,
    cp: 36450,
    name: "Salvaterra de Mi?o",
    provincia_id: 36
  },
  {
    id: 10209,
    cp: 36455,
    name: "Salvaterra de Mi?o",
    provincia_id: 36
  },
  {
    id: 10210,
    cp: 36456,
    name: "Salvaterra de Mi?o",
    provincia_id: 36
  },
  {
    id: 10211,
    cp: 36457,
    name: "Salvaterra de Mi?o",
    provincia_id: 36
  },
  {
    id: 10212,
    cp: 36458,
    name: "Salvaterra de Mi?o",
    provincia_id: 36
  },
  {
    id: 10213,
    cp: 36459,
    name: "Salvaterra de Mi?o",
    provincia_id: 36
  },
  {
    id: 10214,
    cp: 36460,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10215,
    cp: 36460,
    name: "Salceda de Caselas",
    provincia_id: 36
  },
  {
    id: 10216,
    cp: 36470,
    name: "Salceda de Caselas",
    provincia_id: 36
  },
  {
    id: 10217,
    cp: 36470,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10218,
    cp: 36471,
    name: "Salceda de Caselas",
    provincia_id: 36
  },
  {
    id: 10219,
    cp: 36472,
    name: "Salceda de Caselas",
    provincia_id: 36
  },
  {
    id: 10220,
    cp: 36473,
    name: "Salceda de Caselas",
    provincia_id: 36
  },
  {
    id: 10221,
    cp: 36474,
    name: "Salceda de Caselas",
    provincia_id: 36
  },
  {
    id: 10222,
    cp: 36475,
    name: "Salceda de Caselas",
    provincia_id: 36
  },
  {
    id: 10223,
    cp: 36475,
    name: "O Porri?o",
    provincia_id: 36
  },
  {
    id: 10224,
    cp: 36490,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10225,
    cp: 36491,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10226,
    cp: 36492,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10227,
    cp: 36493,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10228,
    cp: 36494,
    name: "Arbo",
    provincia_id: 36
  },
  {
    id: 10229,
    cp: 36500,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10230,
    cp: 36510,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10231,
    cp: 36511,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10232,
    cp: 36511,
    name: "Rodeiro",
    provincia_id: 36
  },
  {
    id: 10233,
    cp: 36512,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10234,
    cp: 36514,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10235,
    cp: 36514,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10236,
    cp: 36515,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10237,
    cp: 36516,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10238,
    cp: 36516,
    name: "Dozón",
    provincia_id: 36
  },
  {
    id: 10239,
    cp: 36517,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10240,
    cp: 36518,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10241,
    cp: 36518,
    name: "Dozón",
    provincia_id: 36
  },
  {
    id: 10242,
    cp: 36519,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10243,
    cp: 36520,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10244,
    cp: 36524,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10245,
    cp: 36525,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10246,
    cp: 36526,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10247,
    cp: 36527,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10248,
    cp: 36528,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10249,
    cp: 36529,
    name: "Agolada",
    provincia_id: 36
  },
  {
    id: 10250,
    cp: 36530,
    name: "Rodeiro",
    provincia_id: 36
  },
  {
    id: 10251,
    cp: 36537,
    name: "Rodeiro",
    provincia_id: 36
  },
  {
    id: 10252,
    cp: 36538,
    name: "Rodeiro",
    provincia_id: 36
  },
  {
    id: 10253,
    cp: 36539,
    name: "Rodeiro",
    provincia_id: 36
  },
  {
    id: 10254,
    cp: 36540,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10255,
    cp: 36543,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10256,
    cp: 36544,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10257,
    cp: 36545,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10258,
    cp: 36546,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10259,
    cp: 36547,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10260,
    cp: 36548,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10261,
    cp: 36549,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10262,
    cp: 36549,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10263,
    cp: 36550,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10264,
    cp: 36555,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10265,
    cp: 36556,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10266,
    cp: 36557,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10267,
    cp: 36558,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10268,
    cp: 36559,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10269,
    cp: 36560,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10270,
    cp: 36567,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10271,
    cp: 36569,
    name: "Forcarei",
    provincia_id: 36
  },
  {
    id: 10272,
    cp: 36570,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10273,
    cp: 36579,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10274,
    cp: 36580,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10275,
    cp: 36581,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10276,
    cp: 36582,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10277,
    cp: 36583,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10278,
    cp: 36583,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10279,
    cp: 36584,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10280,
    cp: 36585,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10281,
    cp: 36586,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10282,
    cp: 36587,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10283,
    cp: 36587,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10284,
    cp: 36588,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10285,
    cp: 36589,
    name: "Silleda",
    provincia_id: 36
  },
  {
    id: 10286,
    cp: 36590,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10287,
    cp: 36596,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10288,
    cp: 36596,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10289,
    cp: 36597,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10290,
    cp: 36598,
    name: "Lalín",
    provincia_id: 36
  },
  {
    id: 10291,
    cp: 36598,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10292,
    cp: 36599,
    name: "Vila de Cruces",
    provincia_id: 36
  },
  {
    id: 10293,
    cp: 36600,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10294,
    cp: 36610,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10295,
    cp: 36611,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10296,
    cp: 36612,
    name: "Catoira",
    provincia_id: 36
  },
  {
    id: 10297,
    cp: 36613,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10298,
    cp: 36614,
    name: "Vilanova de Arousa",
    provincia_id: 36
  },
  {
    id: 10299,
    cp: 36615,
    name: "Caldas de Reis",
    provincia_id: 36
  },
  {
    id: 10300,
    cp: 36616,
    name: "Meis",
    provincia_id: 36
  },
  {
    id: 10301,
    cp: 36616,
    name: "Vilanova de Arousa",
    provincia_id: 36
  },
  {
    id: 10302,
    cp: 36617,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10303,
    cp: 36618,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10304,
    cp: 36619,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10305,
    cp: 36620,
    name: "Vilanova de Arousa",
    provincia_id: 36
  },
  {
    id: 10306,
    cp: 36626,
    name: "A Illa de Arousa",
    provincia_id: 36
  },
  {
    id: 10307,
    cp: 36627,
    name: "Vilanova de Arousa",
    provincia_id: 36
  },
  {
    id: 10308,
    cp: 36628,
    name: "Vilanova de Arousa",
    provincia_id: 36
  },
  {
    id: 10309,
    cp: 36629,
    name: "Vilanova de Arousa",
    provincia_id: 36
  },
  {
    id: 10310,
    cp: 36629,
    name: "Vilagarcía de Arousa",
    provincia_id: 36
  },
  {
    id: 10311,
    cp: 36630,
    name: "Cambados",
    provincia_id: 36
  },
  {
    id: 10312,
    cp: 36633,
    name: "Cambados",
    provincia_id: 36
  },
  {
    id: 10313,
    cp: 36634,
    name: "Cambados",
    provincia_id: 36
  },
  {
    id: 10314,
    cp: 36635,
    name: "Cambados",
    provincia_id: 36
  },
  {
    id: 10315,
    cp: 36635,
    name: "Ribadumia",
    provincia_id: 36
  },
  {
    id: 10316,
    cp: 36636,
    name: "Ribadumia",
    provincia_id: 36
  },
  {
    id: 10317,
    cp: 36637,
    name: "Meis",
    provincia_id: 36
  },
  {
    id: 10318,
    cp: 36638,
    name: "Ribadumia",
    provincia_id: 36
  },
  {
    id: 10319,
    cp: 36638,
    name: "Mea?o",
    provincia_id: 36
  },
  {
    id: 10320,
    cp: 36639,
    name: "Cambados",
    provincia_id: 36
  },
  {
    id: 10321,
    cp: 36640,
    name: "Pontecesures",
    provincia_id: 36
  },
  {
    id: 10322,
    cp: 36645,
    name: "Valga",
    provincia_id: 36
  },
  {
    id: 10323,
    cp: 36646,
    name: "Valga",
    provincia_id: 36
  },
  {
    id: 10324,
    cp: 36647,
    name: "Valga",
    provincia_id: 36
  },
  {
    id: 10325,
    cp: 36649,
    name: "Pontecesures",
    provincia_id: 36
  },
  {
    id: 10326,
    cp: 36650,
    name: "Caldas de Reis",
    provincia_id: 36
  },
  {
    id: 10327,
    cp: 36653,
    name: "Caldas de Reis",
    provincia_id: 36
  },
  {
    id: 10328,
    cp: 36654,
    name: "Caldas de Reis",
    provincia_id: 36
  },
  {
    id: 10329,
    cp: 36655,
    name: "Caldas de Reis",
    provincia_id: 36
  },
  {
    id: 10330,
    cp: 36656,
    name: "Caldas de Reis",
    provincia_id: 36
  },
  {
    id: 10331,
    cp: 36657,
    name: "Portas",
    provincia_id: 36
  },
  {
    id: 10332,
    cp: 36658,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10333,
    cp: 36658,
    name: "Portas",
    provincia_id: 36
  },
  {
    id: 10334,
    cp: 36659,
    name: "Caldas de Reis",
    provincia_id: 36
  },
  {
    id: 10335,
    cp: 36660,
    name: "Mora?a",
    provincia_id: 36
  },
  {
    id: 10336,
    cp: 36668,
    name: "Mora?a",
    provincia_id: 36
  },
  {
    id: 10337,
    cp: 36669,
    name: "Mora?a",
    provincia_id: 36
  },
  {
    id: 10338,
    cp: 36670,
    name: "Cuntis",
    provincia_id: 36
  },
  {
    id: 10339,
    cp: 36675,
    name: "Cuntis",
    provincia_id: 36
  },
  {
    id: 10340,
    cp: 36676,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10341,
    cp: 36677,
    name: "Cuntis",
    provincia_id: 36
  },
  {
    id: 10342,
    cp: 36678,
    name: "Cuntis",
    provincia_id: 36
  },
  {
    id: 10343,
    cp: 36679,
    name: "Cuntis",
    provincia_id: 36
  },
  {
    id: 10344,
    cp: 36680,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10345,
    cp: 36681,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10346,
    cp: 36682,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10347,
    cp: 36683,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10348,
    cp: 36684,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10349,
    cp: 36685,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10350,
    cp: 36685,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10351,
    cp: 36686,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10352,
    cp: 36687,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10353,
    cp: 36688,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10354,
    cp: 36689,
    name: "A Estrada",
    provincia_id: 36
  },
  {
    id: 10355,
    cp: 36690,
    name: "Soutomaior",
    provincia_id: 36
  },
  {
    id: 10356,
    cp: 36690,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10357,
    cp: 36691,
    name: "Soutomaior",
    provincia_id: 36
  },
  {
    id: 10358,
    cp: 36692,
    name: "Barro",
    provincia_id: 36
  },
  {
    id: 10359,
    cp: 36693,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10360,
    cp: 36700,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10361,
    cp: 36710,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10362,
    cp: 36711,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10363,
    cp: 36712,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10364,
    cp: 36713,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10365,
    cp: 36714,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10366,
    cp: 36715,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10367,
    cp: 36720,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10368,
    cp: 36729,
    name: "Tui",
    provincia_id: 36
  },
  {
    id: 10369,
    cp: 36730,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10370,
    cp: 36739,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10371,
    cp: 36740,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10372,
    cp: 36746,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10373,
    cp: 36747,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10374,
    cp: 36748,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10375,
    cp: 36749,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10376,
    cp: 36750,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10377,
    cp: 36760,
    name: "O Rosal",
    provincia_id: 36
  },
  {
    id: 10378,
    cp: 36770,
    name: "O Rosal",
    provincia_id: 36
  },
  {
    id: 10379,
    cp: 36778,
    name: "O Rosal",
    provincia_id: 36
  },
  {
    id: 10380,
    cp: 36779,
    name: "Oia",
    provincia_id: 36
  },
  {
    id: 10381,
    cp: 36780,
    name: "A Guarda",
    provincia_id: 36
  },
  {
    id: 10382,
    cp: 36788,
    name: "A Guarda",
    provincia_id: 36
  },
  {
    id: 10383,
    cp: 36789,
    name: "A Guarda",
    provincia_id: 36
  },
  {
    id: 10384,
    cp: 36790,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10385,
    cp: 36791,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10386,
    cp: 36792,
    name: "Tomi?o",
    provincia_id: 36
  },
  {
    id: 10387,
    cp: 36794,
    name: "Oia",
    provincia_id: 36
  },
  {
    id: 10388,
    cp: 36800,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10389,
    cp: 36810,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10390,
    cp: 36811,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10391,
    cp: 36812,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10392,
    cp: 36813,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10393,
    cp: 36814,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10394,
    cp: 36815,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10395,
    cp: 36816,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10396,
    cp: 36817,
    name: "Pazos de Borbén",
    provincia_id: 36
  },
  {
    id: 10397,
    cp: 36817,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10398,
    cp: 36818,
    name: "Redondela",
    provincia_id: 36
  },
  {
    id: 10399,
    cp: 36820,
    name: "Ponte Caldelas",
    provincia_id: 36
  },
  {
    id: 10400,
    cp: 36826,
    name: "Ponte Caldelas",
    provincia_id: 36
  },
  {
    id: 10401,
    cp: 36827,
    name: "Ponte Caldelas",
    provincia_id: 36
  },
  {
    id: 10402,
    cp: 36828,
    name: "Ponte Caldelas",
    provincia_id: 36
  },
  {
    id: 10403,
    cp: 36829,
    name: "Ponte Caldelas",
    provincia_id: 36
  },
  {
    id: 10404,
    cp: 36830,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10405,
    cp: 36835,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10406,
    cp: 36836,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10407,
    cp: 36837,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10408,
    cp: 36838,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10409,
    cp: 36839,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10410,
    cp: 36840,
    name: "Pazos de Borbén",
    provincia_id: 36
  },
  {
    id: 10411,
    cp: 36841,
    name: "Pazos de Borbén",
    provincia_id: 36
  },
  {
    id: 10412,
    cp: 36842,
    name: "Pazos de Borbén",
    provincia_id: 36
  },
  {
    id: 10413,
    cp: 36843,
    name: "Pazos de Borbén",
    provincia_id: 36
  },
  {
    id: 10414,
    cp: 36844,
    name: "Pazos de Borbén",
    provincia_id: 36
  },
  {
    id: 10415,
    cp: 36845,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10416,
    cp: 36846,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10417,
    cp: 36847,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10418,
    cp: 36848,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10419,
    cp: 36849,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10420,
    cp: 36850,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10421,
    cp: 36851,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10422,
    cp: 36852,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10423,
    cp: 36853,
    name: "A Lama",
    provincia_id: 36
  },
  {
    id: 10424,
    cp: 36853,
    name: "Ponte Caldelas",
    provincia_id: 36
  },
  {
    id: 10425,
    cp: 36854,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10426,
    cp: 36855,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10427,
    cp: 36856,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10428,
    cp: 36857,
    name: "Ponte Caldelas",
    provincia_id: 36
  },
  {
    id: 10429,
    cp: 36857,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10430,
    cp: 36858,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10431,
    cp: 36859,
    name: "Cerdedo-Cotobade",
    provincia_id: 36
  },
  {
    id: 10432,
    cp: 36860,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10433,
    cp: 36861,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10434,
    cp: 36862,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10435,
    cp: 36863,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10436,
    cp: 36864,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10437,
    cp: 36865,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10438,
    cp: 36866,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10439,
    cp: 36867,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10440,
    cp: 36868,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10441,
    cp: 36869,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10442,
    cp: 36870,
    name: "Mondariz",
    provincia_id: 36
  },
  {
    id: 10443,
    cp: 36872,
    name: "Covelo",
    provincia_id: 36
  },
  {
    id: 10444,
    cp: 36873,
    name: "Covelo",
    provincia_id: 36
  },
  {
    id: 10445,
    cp: 36874,
    name: "Mondariz",
    provincia_id: 36
  },
  {
    id: 10446,
    cp: 36875,
    name: "Mondariz",
    provincia_id: 36
  },
  {
    id: 10447,
    cp: 36875,
    name: "Fornelos de Montes",
    provincia_id: 36
  },
  {
    id: 10448,
    cp: 36876,
    name: "Covelo",
    provincia_id: 36
  },
  {
    id: 10449,
    cp: 36876,
    name: "Mondariz",
    provincia_id: 36
  },
  {
    id: 10450,
    cp: 36877,
    name: "Covelo",
    provincia_id: 36
  },
  {
    id: 10451,
    cp: 36877,
    name: "Mondariz",
    provincia_id: 36
  },
  {
    id: 10452,
    cp: 36878,
    name: "Covelo",
    provincia_id: 36
  },
  {
    id: 10453,
    cp: 36878,
    name: "Mondariz",
    provincia_id: 36
  },
  {
    id: 10454,
    cp: 36879,
    name: "Mondariz",
    provincia_id: 36
  },
  {
    id: 10455,
    cp: 36880,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10456,
    cp: 36883,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10457,
    cp: 36884,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10458,
    cp: 36885,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10459,
    cp: 36885,
    name: "Crecente",
    provincia_id: 36
  },
  {
    id: 10460,
    cp: 36886,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10461,
    cp: 36887,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10462,
    cp: 36888,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10463,
    cp: 36889,
    name: "Covelo",
    provincia_id: 36
  },
  {
    id: 10464,
    cp: 36889,
    name: "A Ca?iza",
    provincia_id: 36
  },
  {
    id: 10465,
    cp: 36890,
    name: "Mondariz-Balneario",
    provincia_id: 36
  },
  {
    id: 10466,
    cp: 36891,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10467,
    cp: 36892,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10468,
    cp: 36893,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10469,
    cp: 36895,
    name: "Ponteareas",
    provincia_id: 36
  },
  {
    id: 10470,
    cp: 36900,
    name: "Marín",
    provincia_id: 36
  },
  {
    id: 10471,
    cp: 36910,
    name: "Pontevedra",
    provincia_id: 36
  },
  {
    id: 10472,
    cp: 36911,
    name: "Marín",
    provincia_id: 36
  },
  {
    id: 10473,
    cp: 36912,
    name: "Marín",
    provincia_id: 36
  },
  {
    id: 10474,
    cp: 36913,
    name: "Marín",
    provincia_id: 36
  },
  {
    id: 10475,
    cp: 36914,
    name: "Marín",
    provincia_id: 36
  },
  {
    id: 10476,
    cp: 36915,
    name: "Marín",
    provincia_id: 36
  },
  {
    id: 10477,
    cp: 36920,
    name: "Marín",
    provincia_id: 36
  },
  {
    id: 10478,
    cp: 36930,
    name: "Bueu",
    provincia_id: 36
  },
  {
    id: 10479,
    cp: 36937,
    name: "Bueu",
    provincia_id: 36
  },
  {
    id: 10480,
    cp: 36938,
    name: "Bueu",
    provincia_id: 36
  },
  {
    id: 10481,
    cp: 36939,
    name: "Bueu",
    provincia_id: 36
  },
  {
    id: 10482,
    cp: 36940,
    name: "Cangas",
    provincia_id: 36
  },
  {
    id: 10483,
    cp: 36945,
    name: "Cangas",
    provincia_id: 36
  },
  {
    id: 10484,
    cp: 36946,
    name: "Cangas",
    provincia_id: 36
  },
  {
    id: 10485,
    cp: 36947,
    name: "Cangas",
    provincia_id: 36
  },
  {
    id: 10486,
    cp: 36948,
    name: "Cangas",
    provincia_id: 36
  },
  {
    id: 10487,
    cp: 36950,
    name: "Moa?a",
    provincia_id: 36
  },
  {
    id: 10488,
    cp: 36954,
    name: "Moa?a",
    provincia_id: 36
  },
  {
    id: 10489,
    cp: 36955,
    name: "Moa?a",
    provincia_id: 36
  },
  {
    id: 10490,
    cp: 36957,
    name: "Moa?a",
    provincia_id: 36
  },
  {
    id: 10491,
    cp: 36958,
    name: "Moa?a",
    provincia_id: 36
  },
  {
    id: 10492,
    cp: 36959,
    name: "Moa?a",
    provincia_id: 36
  },
  {
    id: 10493,
    cp: 36960,
    name: "Sanxenxo",
    provincia_id: 36
  },
  {
    id: 10494,
    cp: 36966,
    name: "Sanxenxo",
    provincia_id: 36
  },
  {
    id: 10495,
    cp: 36967,
    name: "Mea?o",
    provincia_id: 36
  },
  {
    id: 10496,
    cp: 36968,
    name: "Mea?o",
    provincia_id: 36
  },
  {
    id: 10497,
    cp: 36969,
    name: "Sanxenxo",
    provincia_id: 36
  },
  {
    id: 10498,
    cp: 36969,
    name: "Mea?o",
    provincia_id: 36
  },
  {
    id: 10499,
    cp: 36970,
    name: "Sanxenxo",
    provincia_id: 36
  },
  {
    id: 10500,
    cp: 36979,
    name: "Sanxenxo",
    provincia_id: 36
  },
  {
    id: 10501,
    cp: 36980,
    name: "O Grove",
    provincia_id: 36
  },
  {
    id: 10502,
    cp: 36988,
    name: "O Grove",
    provincia_id: 36
  },
  {
    id: 10503,
    cp: 36989,
    name: "O Grove",
    provincia_id: 36
  },
  {
    id: 10504,
    cp: 36990,
    name: "Sanxenxo",
    provincia_id: 36
  },
  {
    id: 10505,
    cp: 36991,
    name: "O Grove",
    provincia_id: 36
  },
  {
    id: 10506,
    cp: 36992,
    name: "Poio",
    provincia_id: 36
  },
  {
    id: 10507,
    cp: 36993,
    name: "Poio",
    provincia_id: 36
  },
  {
    id: 10508,
    cp: 36995,
    name: "Poio",
    provincia_id: 36
  },
  {
    id: 10509,
    cp: 37001,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10510,
    cp: 37002,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10511,
    cp: 37003,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10512,
    cp: 37004,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10513,
    cp: 37005,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10514,
    cp: 37006,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10515,
    cp: 37007,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10516,
    cp: 37008,
    name: "Salamanca",
    provincia_id: 37
  },
  {
    id: 10517,
    cp: 37008,
    name: "Carbajosa de la Sagrada",
    provincia_id: 37
  },
  {
    id: 10518,
    cp: 37100,
    name: "Ledesma",
    provincia_id: 37
  },
  {
    id: 10519,
    cp: 37110,
    name: "Santiz",
    provincia_id: 37
  },
  {
    id: 10520,
    cp: 37110,
    name: "San Pelayo de Guare?a",
    provincia_id: 37
  },
  {
    id: 10521,
    cp: 37110,
    name: "Aldearrodrigo",
    provincia_id: 37
  },
  {
    id: 10522,
    cp: 37110,
    name: "Torresmenudas",
    provincia_id: 37
  },
  {
    id: 10523,
    cp: 37110,
    name: "Zamayón",
    provincia_id: 37
  },
  {
    id: 10524,
    cp: 37110,
    name: "El Arco",
    provincia_id: 37
  },
  {
    id: 10525,
    cp: 37111,
    name: "A?over de Tormes",
    provincia_id: 37
  },
  {
    id: 10526,
    cp: 37111,
    name: "Ledesma",
    provincia_id: 37
  },
  {
    id: 10527,
    cp: 37111,
    name: "San Pelayo de Guare?a",
    provincia_id: 37
  },
  {
    id: 10528,
    cp: 37111,
    name: "Palacios del Arzobispo",
    provincia_id: 37
  },
  {
    id: 10529,
    cp: 37114,
    name: "Gejuelo del Barro",
    provincia_id: 37
  },
  {
    id: 10530,
    cp: 37114,
    name: "Encina de San Silvestre",
    provincia_id: 37
  },
  {
    id: 10531,
    cp: 37114,
    name: "Villaseco de los Gamitos",
    provincia_id: 37
  },
  {
    id: 10532,
    cp: 37115,
    name: "Valverdón",
    provincia_id: 37
  },
  {
    id: 10533,
    cp: 37115,
    name: "Vega de Tirados",
    provincia_id: 37
  },
  {
    id: 10534,
    cp: 37115,
    name: "Almenara de Tormes",
    provincia_id: 37
  },
  {
    id: 10535,
    cp: 37115,
    name: "Villarmayor",
    provincia_id: 37
  },
  {
    id: 10536,
    cp: 37115,
    name: "Juzbado",
    provincia_id: 37
  },
  {
    id: 10537,
    cp: 37116,
    name: "Ledesma",
    provincia_id: 37
  },
  {
    id: 10538,
    cp: 37117,
    name: "Do?inos de Salamanca",
    provincia_id: 37
  },
  {
    id: 10539,
    cp: 37120,
    name: "Carrascal de Barregas",
    provincia_id: 37
  },
  {
    id: 10540,
    cp: 37120,
    name: "Do?inos de Salamanca",
    provincia_id: 37
  },
  {
    id: 10541,
    cp: 37129,
    name: "Florida de Liébana",
    provincia_id: 37
  },
  {
    id: 10542,
    cp: 37129,
    name: "Galindo y Perahuy",
    provincia_id: 37
  },
  {
    id: 10543,
    cp: 37129,
    name: "Carrascal de Barregas",
    provincia_id: 37
  },
  {
    id: 10544,
    cp: 37129,
    name: "Do?inos de Salamanca",
    provincia_id: 37
  },
  {
    id: 10545,
    cp: 37129,
    name: "Parada de Arriba",
    provincia_id: 37
  },
  {
    id: 10546,
    cp: 37130,
    name: "La Mata de Ledesma",
    provincia_id: 37
  },
  {
    id: 10547,
    cp: 37130,
    name: "Villarmayor",
    provincia_id: 37
  },
  {
    id: 10548,
    cp: 37130,
    name: "Tabera de Abajo",
    provincia_id: 37
  },
  {
    id: 10549,
    cp: 37130,
    name: "Canillas de Abajo",
    provincia_id: 37
  },
  {
    id: 10550,
    cp: 37130,
    name: "Robliza de Cojos",
    provincia_id: 37
  },
  {
    id: 10551,
    cp: 37130,
    name: "Do?inos de Ledesma",
    provincia_id: 37
  },
  {
    id: 10552,
    cp: 37139,
    name: "Do?inos de Ledesma",
    provincia_id: 37
  },
  {
    id: 10553,
    cp: 37139,
    name: "La Mata de Ledesma",
    provincia_id: 37
  },
  {
    id: 10554,
    cp: 37140,
    name: "Villaseco de los Reyes",
    provincia_id: 37
  },
  {
    id: 10555,
    cp: 37147,
    name: "Villar de Peralonso",
    provincia_id: 37
  },
  {
    id: 10556,
    cp: 37148,
    name: "Tremedal de Tormes",
    provincia_id: 37
  },
  {
    id: 10557,
    cp: 37148,
    name: "Villar de Peralonso",
    provincia_id: 37
  },
  {
    id: 10558,
    cp: 37148,
    name: "Villaseco de los Reyes",
    provincia_id: 37
  },
  {
    id: 10559,
    cp: 37148,
    name: "Espada?a",
    provincia_id: 37
  },
  {
    id: 10560,
    cp: 37149,
    name: "Villaseco de los Reyes",
    provincia_id: 37
  },
  {
    id: 10561,
    cp: 37149,
    name: "Tremedal de Tormes",
    provincia_id: 37
  },
  {
    id: 10562,
    cp: 37149,
    name: "Ledesma",
    provincia_id: 37
  },
  {
    id: 10563,
    cp: 37150,
    name: "Villaseco de los Reyes",
    provincia_id: 37
  },
  {
    id: 10564,
    cp: 37159,
    name: "Villaseco de los Reyes",
    provincia_id: 37
  },
  {
    id: 10565,
    cp: 37159,
    name: "Puertas",
    provincia_id: 37
  },
  {
    id: 10566,
    cp: 37160,
    name: "Villarino de los Aires",
    provincia_id: 37
  },
  {
    id: 10567,
    cp: 37169,
    name: "Villarino de los Aires",
    provincia_id: 37
  },
  {
    id: 10568,
    cp: 37170,
    name: "Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10569,
    cp: 37170,
    name: "Villarmayor",
    provincia_id: 37
  },
  {
    id: 10570,
    cp: 37170,
    name: "Golpejas",
    provincia_id: 37
  },
  {
    id: 10571,
    cp: 37170,
    name: "San Pedro del Valle",
    provincia_id: 37
  },
  {
    id: 10572,
    cp: 37170,
    name: "La Mata de Ledesma",
    provincia_id: 37
  },
  {
    id: 10573,
    cp: 37170,
    name: "El Pino de Tormes",
    provincia_id: 37
  },
  {
    id: 10574,
    cp: 37170,
    name: "Vega de Tirados",
    provincia_id: 37
  },
  {
    id: 10575,
    cp: 37170,
    name: "Zarapicos",
    provincia_id: 37
  },
  {
    id: 10576,
    cp: 37170,
    name: "Carrascal de Barregas",
    provincia_id: 37
  },
  {
    id: 10577,
    cp: 37171,
    name: "Monleras",
    provincia_id: 37
  },
  {
    id: 10578,
    cp: 37171,
    name: "El Manzano",
    provincia_id: 37
  },
  {
    id: 10579,
    cp: 37172,
    name: "Sardón de los Frailes",
    provincia_id: 37
  },
  {
    id: 10580,
    cp: 37173,
    name: "Ahigal de Villarino",
    provincia_id: 37
  },
  {
    id: 10581,
    cp: 37173,
    name: "Trabanca",
    provincia_id: 37
  },
  {
    id: 10582,
    cp: 37174,
    name: "Villarino de los Aires",
    provincia_id: 37
  },
  {
    id: 10583,
    cp: 37175,
    name: "Pere?a de la Ribera",
    provincia_id: 37
  },
  {
    id: 10584,
    cp: 37176,
    name: "Almendra",
    provincia_id: 37
  },
  {
    id: 10585,
    cp: 37181,
    name: "Pelabravo",
    provincia_id: 37
  },
  {
    id: 10586,
    cp: 37181,
    name: "Calvarrasa de Abajo",
    provincia_id: 37
  },
  {
    id: 10587,
    cp: 37183,
    name: "San Pedro de Rozados",
    provincia_id: 37
  },
  {
    id: 10588,
    cp: 37183,
    name: "Morille",
    provincia_id: 37
  },
  {
    id: 10589,
    cp: 37183,
    name: "Mozárbez",
    provincia_id: 37
  },
  {
    id: 10590,
    cp: 37183,
    name: "Arapiles",
    provincia_id: 37
  },
  {
    id: 10591,
    cp: 37183,
    name: "Aldeatejada",
    provincia_id: 37
  },
  {
    id: 10592,
    cp: 37184,
    name: "Villares de la Reina",
    provincia_id: 37
  },
  {
    id: 10593,
    cp: 37185,
    name: "Villamayor",
    provincia_id: 37
  },
  {
    id: 10594,
    cp: 37185,
    name: "Valverdón",
    provincia_id: 37
  },
  {
    id: 10595,
    cp: 37185,
    name: "Do?inos de Ledesma",
    provincia_id: 37
  },
  {
    id: 10596,
    cp: 37185,
    name: "Castellanos de Villiquera",
    provincia_id: 37
  },
  {
    id: 10597,
    cp: 37186,
    name: "Aldeatejada",
    provincia_id: 37
  },
  {
    id: 10598,
    cp: 37186,
    name: "Barbadillo",
    provincia_id: 37
  },
  {
    id: 10599,
    cp: 37186,
    name: "San Pedro de Rozados",
    provincia_id: 37
  },
  {
    id: 10600,
    cp: 37186,
    name: "Mozárbez",
    provincia_id: 37
  },
  {
    id: 10601,
    cp: 37187,
    name: "Miranda de Azán",
    provincia_id: 37
  },
  {
    id: 10602,
    cp: 37187,
    name: "Aldeatejada",
    provincia_id: 37
  },
  {
    id: 10603,
    cp: 37188,
    name: "Arapiles",
    provincia_id: 37
  },
  {
    id: 10604,
    cp: 37188,
    name: "Carbajosa de la Sagrada",
    provincia_id: 37
  },
  {
    id: 10605,
    cp: 37189,
    name: "Villares de la Reina",
    provincia_id: 37
  },
  {
    id: 10606,
    cp: 37190,
    name: "Terradillos",
    provincia_id: 37
  },
  {
    id: 10607,
    cp: 37191,
    name: "Carbajosa de la Sagrada",
    provincia_id: 37
  },
  {
    id: 10608,
    cp: 37191,
    name: "Calvarrasa de Arriba",
    provincia_id: 37
  },
  {
    id: 10609,
    cp: 37192,
    name: "Carrascal de Barregas",
    provincia_id: 37
  },
  {
    id: 10610,
    cp: 37192,
    name: "Aldeatejada",
    provincia_id: 37
  },
  {
    id: 10611,
    cp: 37193,
    name: "Cabrerizos",
    provincia_id: 37
  },
  {
    id: 10612,
    cp: 37193,
    name: "San Pedro de Rozados",
    provincia_id: 37
  },
  {
    id: 10613,
    cp: 37194,
    name: "Santa Marta de Tormes",
    provincia_id: 37
  },
  {
    id: 10614,
    cp: 37197,
    name: "Mozárbez",
    provincia_id: 37
  },
  {
    id: 10615,
    cp: 37198,
    name: "Carbajosa de la Sagrada",
    provincia_id: 37
  },
  {
    id: 10616,
    cp: 37200,
    name: "La Fuente de San Esteban",
    provincia_id: 37
  },
  {
    id: 10617,
    cp: 37207,
    name: "La Fuente de San Esteban",
    provincia_id: 37
  },
  {
    id: 10618,
    cp: 37208,
    name: "La Fuente de San Esteban",
    provincia_id: 37
  },
  {
    id: 10619,
    cp: 37208,
    name: "San Mu?oz",
    provincia_id: 37
  },
  {
    id: 10620,
    cp: 37209,
    name: "Garcirrey",
    provincia_id: 37
  },
  {
    id: 10621,
    cp: 37209,
    name: "El Cubo de Don Sancho",
    provincia_id: 37
  },
  {
    id: 10622,
    cp: 37209,
    name: "Buenamadre",
    provincia_id: 37
  },
  {
    id: 10623,
    cp: 37209,
    name: "Pelarrodríguez",
    provincia_id: 37
  },
  {
    id: 10624,
    cp: 37210,
    name: "Vitigudino",
    provincia_id: 37
  },
  {
    id: 10625,
    cp: 37214,
    name: "La Pe?a",
    provincia_id: 37
  },
  {
    id: 10626,
    cp: 37214,
    name: "Valsalabroso",
    provincia_id: 37
  },
  {
    id: 10627,
    cp: 37214,
    name: "La Vídola",
    provincia_id: 37
  },
  {
    id: 10628,
    cp: 37214,
    name: "Cabeza del Caballo",
    provincia_id: 37
  },
  {
    id: 10629,
    cp: 37216,
    name: "Peralejos de Arriba",
    provincia_id: 37
  },
  {
    id: 10630,
    cp: 37216,
    name: "Pozos de Hinojo",
    provincia_id: 37
  },
  {
    id: 10631,
    cp: 37216,
    name: "Moronta",
    provincia_id: 37
  },
  {
    id: 10632,
    cp: 37216,
    name: "Cipérez",
    provincia_id: 37
  },
  {
    id: 10633,
    cp: 37216,
    name: "Peralejos de Abajo",
    provincia_id: 37
  },
  {
    id: 10634,
    cp: 37217,
    name: "Brincones",
    provincia_id: 37
  },
  {
    id: 10635,
    cp: 37217,
    name: "Valsalabroso",
    provincia_id: 37
  },
  {
    id: 10636,
    cp: 37217,
    name: "Barceo",
    provincia_id: 37
  },
  {
    id: 10637,
    cp: 37217,
    name: "Villar de Samaniego",
    provincia_id: 37
  },
  {
    id: 10638,
    cp: 37217,
    name: "Sanchón de la Ribera",
    provincia_id: 37
  },
  {
    id: 10639,
    cp: 37217,
    name: "Villarmuerto",
    provincia_id: 37
  },
  {
    id: 10640,
    cp: 37217,
    name: "Iruelos",
    provincia_id: 37
  },
  {
    id: 10641,
    cp: 37219,
    name: "Guadramiro",
    provincia_id: 37
  },
  {
    id: 10642,
    cp: 37219,
    name: "Retortillo",
    provincia_id: 37
  },
  {
    id: 10643,
    cp: 37219,
    name: "Cabrerizos",
    provincia_id: 37
  },
  {
    id: 10644,
    cp: 37219,
    name: "Moronta",
    provincia_id: 37
  },
  {
    id: 10645,
    cp: 37219,
    name: "Yecla de Yeltes",
    provincia_id: 37
  },
  {
    id: 10646,
    cp: 37220,
    name: "La Fregeneda",
    provincia_id: 37
  },
  {
    id: 10647,
    cp: 37230,
    name: "Hinojosa de Duero",
    provincia_id: 37
  },
  {
    id: 10648,
    cp: 37240,
    name: "Lumbrales",
    provincia_id: 37
  },
  {
    id: 10649,
    cp: 37246,
    name: "Sobradillo",
    provincia_id: 37
  },
  {
    id: 10650,
    cp: 37247,
    name: "La Redonda",
    provincia_id: 37
  },
  {
    id: 10651,
    cp: 37248,
    name: "Ahigal de los Aceiteros",
    provincia_id: 37
  },
  {
    id: 10652,
    cp: 37250,
    name: "Vitigudino",
    provincia_id: 37
  },
  {
    id: 10653,
    cp: 37250,
    name: "Aldeadávila de la Ribera",
    provincia_id: 37
  },
  {
    id: 10654,
    cp: 37251,
    name: "Aldeadávila de la Ribera",
    provincia_id: 37
  },
  {
    id: 10655,
    cp: 37251,
    name: "Masueco",
    provincia_id: 37
  },
  {
    id: 10656,
    cp: 37253,
    name: "La Zarza de Pumareda",
    provincia_id: 37
  },
  {
    id: 10657,
    cp: 37253,
    name: "Aldeadávila de la Ribera",
    provincia_id: 37
  },
  {
    id: 10658,
    cp: 37253,
    name: "Cerezal de Pe?ahorcada",
    provincia_id: 37
  },
  {
    id: 10659,
    cp: 37254,
    name: "Mieza",
    provincia_id: 37
  },
  {
    id: 10660,
    cp: 37255,
    name: "Barruecopardo",
    provincia_id: 37
  },
  {
    id: 10661,
    cp: 37256,
    name: "El Milano",
    provincia_id: 37
  },
  {
    id: 10662,
    cp: 37256,
    name: "Villasbuenas",
    provincia_id: 37
  },
  {
    id: 10663,
    cp: 37256,
    name: "Encinasola de los Comendadores",
    provincia_id: 37
  },
  {
    id: 10664,
    cp: 37256,
    name: "Valderrodrigo",
    provincia_id: 37
  },
  {
    id: 10665,
    cp: 37257,
    name: "Saucelle",
    provincia_id: 37
  },
  {
    id: 10666,
    cp: 37258,
    name: "Moronta",
    provincia_id: 37
  },
  {
    id: 10667,
    cp: 37258,
    name: "Vilvestre",
    provincia_id: 37
  },
  {
    id: 10668,
    cp: 37259,
    name: "Saldeana",
    provincia_id: 37
  },
  {
    id: 10669,
    cp: 37260,
    name: "Villavieja de Yeltes",
    provincia_id: 37
  },
  {
    id: 10670,
    cp: 37267,
    name: "Villares de Yeltes",
    provincia_id: 37
  },
  {
    id: 10671,
    cp: 37270,
    name: "San Felices de los Gallegos",
    provincia_id: 37
  },
  {
    id: 10672,
    cp: 37271,
    name: "Ba?obárez",
    provincia_id: 37
  },
  {
    id: 10673,
    cp: 37273,
    name: "Cerralbo",
    provincia_id: 37
  },
  {
    id: 10674,
    cp: 37281,
    name: "El Cubo de Don Sancho",
    provincia_id: 37
  },
  {
    id: 10675,
    cp: 37290,
    name: "Boada",
    provincia_id: 37
  },
  {
    id: 10676,
    cp: 37291,
    name: "Bogajo",
    provincia_id: 37
  },
  {
    id: 10677,
    cp: 37291,
    name: "Bermellar",
    provincia_id: 37
  },
  {
    id: 10678,
    cp: 37291,
    name: "Cerralbo",
    provincia_id: 37
  },
  {
    id: 10679,
    cp: 37291,
    name: "Fuenteliante",
    provincia_id: 37
  },
  {
    id: 10680,
    cp: 37291,
    name: "Olmedo de Camaces",
    provincia_id: 37
  },
  {
    id: 10681,
    cp: 37292,
    name: "Olmedo de Camaces",
    provincia_id: 37
  },
  {
    id: 10682,
    cp: 37300,
    name: "Pe?aranda de Bracamonte",
    provincia_id: 37
  },
  {
    id: 10683,
    cp: 37310,
    name: "Macotera",
    provincia_id: 37
  },
  {
    id: 10684,
    cp: 37311,
    name: "Santiago de la Puebla",
    provincia_id: 37
  },
  {
    id: 10685,
    cp: 37312,
    name: "Alaraz",
    provincia_id: 37
  },
  {
    id: 10686,
    cp: 37313,
    name: "Malpartida",
    provincia_id: 37
  },
  {
    id: 10687,
    cp: 37314,
    name: "Salmoral",
    provincia_id: 37
  },
  {
    id: 10688,
    cp: 37315,
    name: "Mancera de Abajo",
    provincia_id: 37
  },
  {
    id: 10689,
    cp: 37316,
    name: "Bóveda del Río Almar",
    provincia_id: 37
  },
  {
    id: 10690,
    cp: 37317,
    name: "Aldeaseca de la Frontera",
    provincia_id: 37
  },
  {
    id: 10691,
    cp: 37317,
    name: "El Campo de Pe?aranda",
    provincia_id: 37
  },
  {
    id: 10692,
    cp: 37318,
    name: "Paradinas de San Juan",
    provincia_id: 37
  },
  {
    id: 10693,
    cp: 37318,
    name: "Rágama",
    provincia_id: 37
  },
  {
    id: 10694,
    cp: 37319,
    name: "Cantaracillo",
    provincia_id: 37
  },
  {
    id: 10695,
    cp: 37320,
    name: "Villar de Gallimazo",
    provincia_id: 37
  },
  {
    id: 10696,
    cp: 37329,
    name: "Ventosa del Río Almar",
    provincia_id: 37
  },
  {
    id: 10697,
    cp: 37329,
    name: "Alconada",
    provincia_id: 37
  },
  {
    id: 10698,
    cp: 37330,
    name: "Babilafuente",
    provincia_id: 37
  },
  {
    id: 10699,
    cp: 37337,
    name: "Cordovilla",
    provincia_id: 37
  },
  {
    id: 10700,
    cp: 37337,
    name: "Morí?igo",
    provincia_id: 37
  },
  {
    id: 10701,
    cp: 37338,
    name: "Huerta",
    provincia_id: 37
  },
  {
    id: 10702,
    cp: 37338,
    name: "Villoruela",
    provincia_id: 37
  },
  {
    id: 10703,
    cp: 37339,
    name: "Villoria",
    provincia_id: 37
  },
  {
    id: 10704,
    cp: 37340,
    name: "San Morales",
    provincia_id: 37
  },
  {
    id: 10705,
    cp: 37340,
    name: "Aldearrubia",
    provincia_id: 37
  },
  {
    id: 10706,
    cp: 37350,
    name: "Aldealengua",
    provincia_id: 37
  },
  {
    id: 10707,
    cp: 37400,
    name: "Cantalapiedra",
    provincia_id: 37
  },
  {
    id: 10708,
    cp: 37405,
    name: "Cantalpino",
    provincia_id: 37
  },
  {
    id: 10709,
    cp: 37406,
    name: "Villaflores",
    provincia_id: 37
  },
  {
    id: 10710,
    cp: 37406,
    name: "Palaciosrubios",
    provincia_id: 37
  },
  {
    id: 10711,
    cp: 37406,
    name: "Poveda de las Cintas",
    provincia_id: 37
  },
  {
    id: 10712,
    cp: 37408,
    name: "Zorita de la Frontera",
    provincia_id: 37
  },
  {
    id: 10713,
    cp: 37409,
    name: "Tarazona de Guare?a",
    provincia_id: 37
  },
  {
    id: 10714,
    cp: 37410,
    name: "El Pedroso de la Armu?a",
    provincia_id: 37
  },
  {
    id: 10715,
    cp: 37418,
    name: "Arabayona de Mógica",
    provincia_id: 37
  },
  {
    id: 10716,
    cp: 37419,
    name: "Espino de la Orbada",
    provincia_id: 37
  },
  {
    id: 10717,
    cp: 37419,
    name: "Parada de Rubiales",
    provincia_id: 37
  },
  {
    id: 10718,
    cp: 37420,
    name: "Gomecello",
    provincia_id: 37
  },
  {
    id: 10719,
    cp: 37427,
    name: "La Orbada",
    provincia_id: 37
  },
  {
    id: 10720,
    cp: 37427,
    name: "Pedrosillo el Ralo",
    provincia_id: 37
  },
  {
    id: 10721,
    cp: 37427,
    name: "La Vellés",
    provincia_id: 37
  },
  {
    id: 10722,
    cp: 37428,
    name: "Pajares de la Laguna",
    provincia_id: 37
  },
  {
    id: 10723,
    cp: 37428,
    name: "Villaverde de Guare?a",
    provincia_id: 37
  },
  {
    id: 10724,
    cp: 37428,
    name: "La Orbada",
    provincia_id: 37
  },
  {
    id: 10725,
    cp: 37429,
    name: "Arcediano",
    provincia_id: 37
  },
  {
    id: 10726,
    cp: 37429,
    name: "Aldeanueva de Figueroa",
    provincia_id: 37
  },
  {
    id: 10727,
    cp: 37429,
    name: "Tardáguila",
    provincia_id: 37
  },
  {
    id: 10728,
    cp: 37430,
    name: "Moriscos",
    provincia_id: 37
  },
  {
    id: 10729,
    cp: 37439,
    name: "Castellanos de Moriscos",
    provincia_id: 37
  },
  {
    id: 10730,
    cp: 37439,
    name: "San Cristóbal de la Cuesta",
    provincia_id: 37
  },
  {
    id: 10731,
    cp: 37440,
    name: "Calzada de Don Diego",
    provincia_id: 37
  },
  {
    id: 10732,
    cp: 37440,
    name: "Barbadillo",
    provincia_id: 37
  },
  {
    id: 10733,
    cp: 37447,
    name: "Rollán",
    provincia_id: 37
  },
  {
    id: 10734,
    cp: 37448,
    name: "Canillas de Abajo",
    provincia_id: 37
  },
  {
    id: 10735,
    cp: 37448,
    name: "Calzada de Don Diego",
    provincia_id: 37
  },
  {
    id: 10736,
    cp: 37449,
    name: "Parada de Arriba",
    provincia_id: 37
  },
  {
    id: 10737,
    cp: 37449,
    name: "Carrascal de Barregas",
    provincia_id: 37
  },
  {
    id: 10738,
    cp: 37449,
    name: "Galindo y Perahuy",
    provincia_id: 37
  },
  {
    id: 10739,
    cp: 37450,
    name: "Matilla de los Ca?os del Río",
    provincia_id: 37
  },
  {
    id: 10740,
    cp: 37450,
    name: "Las Veguillas",
    provincia_id: 37
  },
  {
    id: 10741,
    cp: 37450,
    name: "Vecinos",
    provincia_id: 37
  },
  {
    id: 10742,
    cp: 37451,
    name: "Carrascal de Barregas",
    provincia_id: 37
  },
  {
    id: 10743,
    cp: 37451,
    name: "Carrascal del Obispo",
    provincia_id: 37
  },
  {
    id: 10744,
    cp: 37451,
    name: "Villalba de los Llanos",
    provincia_id: 37
  },
  {
    id: 10745,
    cp: 37452,
    name: "Narros de Matalayegua",
    provincia_id: 37
  },
  {
    id: 10746,
    cp: 37452,
    name: "Las Veguillas",
    provincia_id: 37
  },
  {
    id: 10747,
    cp: 37452,
    name: "Vecinos",
    provincia_id: 37
  },
  {
    id: 10748,
    cp: 37453,
    name: "Vecinos",
    provincia_id: 37
  },
  {
    id: 10749,
    cp: 37453,
    name: "San Pedro de Rozados",
    provincia_id: 37
  },
  {
    id: 10750,
    cp: 37453,
    name: "Matilla de los Ca?os del Río",
    provincia_id: 37
  },
  {
    id: 10751,
    cp: 37454,
    name: "Las Veguillas",
    provincia_id: 37
  },
  {
    id: 10752,
    cp: 37458,
    name: "Pedrosillo de los Aires",
    provincia_id: 37
  },
  {
    id: 10753,
    cp: 37460,
    name: "Aldehuela de la Bóveda",
    provincia_id: 37
  },
  {
    id: 10754,
    cp: 37460,
    name: "Tabera de Abajo",
    provincia_id: 37
  },
  {
    id: 10755,
    cp: 37460,
    name: "Garcirrey",
    provincia_id: 37
  },
  {
    id: 10756,
    cp: 37460,
    name: "Sando",
    provincia_id: 37
  },
  {
    id: 10757,
    cp: 37465,
    name: "La Sagrada",
    provincia_id: 37
  },
  {
    id: 10758,
    cp: 37466,
    name: "Sanchón de la Sagrada",
    provincia_id: 37
  },
  {
    id: 10759,
    cp: 37466,
    name: "Aldehuela de la Bóveda",
    provincia_id: 37
  },
  {
    id: 10760,
    cp: 37467,
    name: "Sando",
    provincia_id: 37
  },
  {
    id: 10761,
    cp: 37468,
    name: "Santa María de Sando",
    provincia_id: 37
  },
  {
    id: 10762,
    cp: 37468,
    name: "Villasdardo",
    provincia_id: 37
  },
  {
    id: 10763,
    cp: 37468,
    name: "Sando",
    provincia_id: 37
  },
  {
    id: 10764,
    cp: 37468,
    name: "Cipérez",
    provincia_id: 37
  },
  {
    id: 10765,
    cp: 37470,
    name: "Sancti-Spíritus",
    provincia_id: 37
  },
  {
    id: 10766,
    cp: 37478,
    name: "Dios le Guarde",
    provincia_id: 37
  },
  {
    id: 10767,
    cp: 37478,
    name: "Aldehuela de Yeltes",
    provincia_id: 37
  },
  {
    id: 10768,
    cp: 37478,
    name: "Alba de Yeltes",
    provincia_id: 37
  },
  {
    id: 10769,
    cp: 37479,
    name: "Sancti-Spíritus",
    provincia_id: 37
  },
  {
    id: 10770,
    cp: 37479,
    name: "Castillejo de Martín Viejo",
    provincia_id: 37
  },
  {
    id: 10771,
    cp: 37480,
    name: "Fuentes de O?oro",
    provincia_id: 37
  },
  {
    id: 10772,
    cp: 37481,
    name: "Fuentes de O?oro",
    provincia_id: 37
  },
  {
    id: 10773,
    cp: 37488,
    name: "Puerto Seguro",
    provincia_id: 37
  },
  {
    id: 10774,
    cp: 37488,
    name: "Villar de la Yegua",
    provincia_id: 37
  },
  {
    id: 10775,
    cp: 37488,
    name: "Villar de Ciervo",
    provincia_id: 37
  },
  {
    id: 10776,
    cp: 37488,
    name: "La Bouza",
    provincia_id: 37
  },
  {
    id: 10777,
    cp: 37488,
    name: "San Pedro de Rozados",
    provincia_id: 37
  },
  {
    id: 10778,
    cp: 37488,
    name: "Aldea del Obispo",
    provincia_id: 37
  },
  {
    id: 10779,
    cp: 37490,
    name: "Cabezabellosa de la Calzada",
    provincia_id: 37
  },
  {
    id: 10780,
    cp: 37490,
    name: "Pitiegua",
    provincia_id: 37
  },
  {
    id: 10781,
    cp: 37491,
    name: "Tabera de Abajo",
    provincia_id: 37
  },
  {
    id: 10782,
    cp: 37491,
    name: "Canillas de Abajo",
    provincia_id: 37
  },
  {
    id: 10783,
    cp: 37492,
    name: "Robliza de Cojos",
    provincia_id: 37
  },
  {
    id: 10784,
    cp: 37493,
    name: "La Fuente de San Esteban",
    provincia_id: 37
  },
  {
    id: 10785,
    cp: 37493,
    name: "Buenamadre",
    provincia_id: 37
  },
  {
    id: 10786,
    cp: 37493,
    name: "Pelarrodríguez",
    provincia_id: 37
  },
  {
    id: 10787,
    cp: 37494,
    name: "Castraz",
    provincia_id: 37
  },
  {
    id: 10788,
    cp: 37494,
    name: "Martín de Yeltes",
    provincia_id: 37
  },
  {
    id: 10789,
    cp: 37495,
    name: "Retortillo",
    provincia_id: 37
  },
  {
    id: 10790,
    cp: 37496,
    name: "Martín de Yeltes",
    provincia_id: 37
  },
  {
    id: 10791,
    cp: 37497,
    name: "Villar de Arga?án",
    provincia_id: 37
  },
  {
    id: 10792,
    cp: 37497,
    name: "La Alameda de Gardón",
    provincia_id: 37
  },
  {
    id: 10793,
    cp: 37497,
    name: "Espeja",
    provincia_id: 37
  },
  {
    id: 10794,
    cp: 37497,
    name: "Gallegos de Arga?án",
    provincia_id: 37
  },
  {
    id: 10795,
    cp: 37497,
    name: "Villar de la Yegua",
    provincia_id: 37
  },
  {
    id: 10796,
    cp: 37497,
    name: "Carpio de Azaba",
    provincia_id: 37
  },
  {
    id: 10797,
    cp: 37500,
    name: "Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10798,
    cp: 37510,
    name: "Agallas",
    provincia_id: 37
  },
  {
    id: 10799,
    cp: 37510,
    name: "Martiago",
    provincia_id: 37
  },
  {
    id: 10800,
    cp: 37510,
    name: "Pastores",
    provincia_id: 37
  },
  {
    id: 10801,
    cp: 37510,
    name: "Herguijuela de Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10802,
    cp: 37510,
    name: "El Sahugo",
    provincia_id: 37
  },
  {
    id: 10803,
    cp: 37515,
    name: "La Encina",
    provincia_id: 37
  },
  {
    id: 10804,
    cp: 37516,
    name: "Herguijuela de Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10805,
    cp: 37520,
    name: "El Bodón",
    provincia_id: 37
  },
  {
    id: 10806,
    cp: 37521,
    name: "Robleda",
    provincia_id: 37
  },
  {
    id: 10807,
    cp: 37522,
    name: "Villasrubias",
    provincia_id: 37
  },
  {
    id: 10808,
    cp: 37523,
    name: "Pe?aparda",
    provincia_id: 37
  },
  {
    id: 10809,
    cp: 37524,
    name: "El Payo",
    provincia_id: 37
  },
  {
    id: 10810,
    cp: 37530,
    name: "Serradilla del Llano",
    provincia_id: 37
  },
  {
    id: 10811,
    cp: 37531,
    name: "Serradilla del Arroyo",
    provincia_id: 37
  },
  {
    id: 10812,
    cp: 37532,
    name: "Monsagro",
    provincia_id: 37
  },
  {
    id: 10813,
    cp: 37540,
    name: "Fuenteguinaldo",
    provincia_id: 37
  },
  {
    id: 10814,
    cp: 37541,
    name: "Casillas de Flores",
    provincia_id: 37
  },
  {
    id: 10815,
    cp: 37542,
    name: "Navasfrías",
    provincia_id: 37
  },
  {
    id: 10816,
    cp: 37550,
    name: "Campillo de Azaba",
    provincia_id: 37
  },
  {
    id: 10817,
    cp: 37551,
    name: "Ituero de Azaba",
    provincia_id: 37
  },
  {
    id: 10818,
    cp: 37552,
    name: "Puebla de Azaba",
    provincia_id: 37
  },
  {
    id: 10819,
    cp: 37553,
    name: "Puebla de Azaba",
    provincia_id: 37
  },
  {
    id: 10820,
    cp: 37554,
    name: "La Alamedilla",
    provincia_id: 37
  },
  {
    id: 10821,
    cp: 37555,
    name: "La Alberguería de Arga?án",
    provincia_id: 37
  },
  {
    id: 10822,
    cp: 37590,
    name: "Serradilla del Arroyo",
    provincia_id: 37
  },
  {
    id: 10823,
    cp: 37590,
    name: "Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10824,
    cp: 37590,
    name: "Tenebrón",
    provincia_id: 37
  },
  {
    id: 10825,
    cp: 37590,
    name: "Morasverdes",
    provincia_id: 37
  },
  {
    id: 10826,
    cp: 37591,
    name: "Zamarra",
    provincia_id: 37
  },
  {
    id: 10827,
    cp: 37591,
    name: "Aldeatejada",
    provincia_id: 37
  },
  {
    id: 10828,
    cp: 37591,
    name: "La Atalaya",
    provincia_id: 37
  },
  {
    id: 10829,
    cp: 37591,
    name: "Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10830,
    cp: 37592,
    name: "Castillejo de Martín Viejo",
    provincia_id: 37
  },
  {
    id: 10831,
    cp: 37592,
    name: "Saelices el Chico",
    provincia_id: 37
  },
  {
    id: 10832,
    cp: 37593,
    name: "Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10833,
    cp: 37594,
    name: "Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10834,
    cp: 37595,
    name: "Ciudad Rodrigo",
    provincia_id: 37
  },
  {
    id: 10835,
    cp: 37600,
    name: "Tamames",
    provincia_id: 37
  },
  {
    id: 10836,
    cp: 37606,
    name: "Puebla de Yeltes",
    provincia_id: 37
  },
  {
    id: 10837,
    cp: 37607,
    name: "Barbalos",
    provincia_id: 37
  },
  {
    id: 10838,
    cp: 37607,
    name: "Navarredonda de la Rinconada",
    provincia_id: 37
  },
  {
    id: 10839,
    cp: 37607,
    name: "Tejeda y Segoyuela",
    provincia_id: 37
  },
  {
    id: 10840,
    cp: 37607,
    name: "La Rinconada de la Sierra",
    provincia_id: 37
  },
  {
    id: 10841,
    cp: 37608,
    name: "Tamames",
    provincia_id: 37
  },
  {
    id: 10842,
    cp: 37609,
    name: "Las Veguillas",
    provincia_id: 37
  },
  {
    id: 10843,
    cp: 37609,
    name: "Narros de Matalayegua",
    provincia_id: 37
  },
  {
    id: 10844,
    cp: 37609,
    name: "Berrocal de Huebra",
    provincia_id: 37
  },
  {
    id: 10845,
    cp: 37609,
    name: "Carrascal del Obispo",
    provincia_id: 37
  },
  {
    id: 10846,
    cp: 37609,
    name: "San Pedro de Rozados",
    provincia_id: 37
  },
  {
    id: 10847,
    cp: 37609,
    name: "Tamames",
    provincia_id: 37
  },
  {
    id: 10848,
    cp: 37610,
    name: "Mogarraz",
    provincia_id: 37
  },
  {
    id: 10849,
    cp: 37617,
    name: "Herguijuela de la Sierra",
    provincia_id: 37
  },
  {
    id: 10850,
    cp: 37618,
    name: "Monforte de la Sierra",
    provincia_id: 37
  },
  {
    id: 10851,
    cp: 37619,
    name: "Madro?al",
    provincia_id: 37
  },
  {
    id: 10852,
    cp: 37619,
    name: "Herguijuela de la Sierra",
    provincia_id: 37
  },
  {
    id: 10853,
    cp: 37621,
    name: "Cereceda de la Sierra",
    provincia_id: 37
  },
  {
    id: 10854,
    cp: 37621,
    name: "Cilleros de la Bastida",
    provincia_id: 37
  },
  {
    id: 10855,
    cp: 37621,
    name: "La Bastida",
    provincia_id: 37
  },
  {
    id: 10856,
    cp: 37621,
    name: "El Maíllo",
    provincia_id: 37
  },
  {
    id: 10857,
    cp: 37621,
    name: "El Cabaco",
    provincia_id: 37
  },
  {
    id: 10858,
    cp: 37621,
    name: "Aldeanueva de la Sierra",
    provincia_id: 37
  },
  {
    id: 10859,
    cp: 37624,
    name: "La Alberca",
    provincia_id: 37
  },
  {
    id: 10860,
    cp: 37630,
    name: "Cabrillas",
    provincia_id: 37
  },
  {
    id: 10861,
    cp: 37638,
    name: "Horcajo Medianero",
    provincia_id: 37
  },
  {
    id: 10862,
    cp: 37638,
    name: "Sepulcro-Hilario",
    provincia_id: 37
  },
  {
    id: 10863,
    cp: 37639,
    name: "Aldehuela de Yeltes",
    provincia_id: 37
  },
  {
    id: 10864,
    cp: 37640,
    name: "San Mu?oz",
    provincia_id: 37
  },
  {
    id: 10865,
    cp: 37640,
    name: "Abusejo",
    provincia_id: 37
  },
  {
    id: 10866,
    cp: 37650,
    name: "Sequeros",
    provincia_id: 37
  },
  {
    id: 10867,
    cp: 37656,
    name: "Cepeda",
    provincia_id: 37
  },
  {
    id: 10868,
    cp: 37657,
    name: "Sotoserrano",
    provincia_id: 37
  },
  {
    id: 10869,
    cp: 37658,
    name: "Garcibuey",
    provincia_id: 37
  },
  {
    id: 10870,
    cp: 37658,
    name: "Villanueva del Conde",
    provincia_id: 37
  },
  {
    id: 10871,
    cp: 37659,
    name: "San Miguel del Robledo",
    provincia_id: 37
  },
  {
    id: 10872,
    cp: 37659,
    name: "Nava de Francia",
    provincia_id: 37
  },
  {
    id: 10873,
    cp: 37659,
    name: "Las Casas del Conde",
    provincia_id: 37
  },
  {
    id: 10874,
    cp: 37659,
    name: "San Martín del Casta?ar",
    provincia_id: 37
  },
  {
    id: 10875,
    cp: 37660,
    name: "Miranda del Casta?ar",
    provincia_id: 37
  },
  {
    id: 10876,
    cp: 37670,
    name: "Santibá?ez de la Sierra",
    provincia_id: 37
  },
  {
    id: 10877,
    cp: 37671,
    name: "San Esteban de la Sierra",
    provincia_id: 37
  },
  {
    id: 10878,
    cp: 37680,
    name: "Valdefuentes de Sangusín",
    provincia_id: 37
  },
  {
    id: 10879,
    cp: 37682,
    name: "Santibá?ez de la Sierra",
    provincia_id: 37
  },
  {
    id: 10880,
    cp: 37683,
    name: "Molinillo",
    provincia_id: 37
  },
  {
    id: 10881,
    cp: 37684,
    name: "Cristóbal",
    provincia_id: 37
  },
  {
    id: 10882,
    cp: 37690,
    name: "La Fuente de San Esteban",
    provincia_id: 37
  },
  {
    id: 10883,
    cp: 37694,
    name: "San Miguel del Robledo",
    provincia_id: 37
  },
  {
    id: 10884,
    cp: 37700,
    name: "Béjar",
    provincia_id: 37
  },
  {
    id: 10885,
    cp: 37700,
    name: "Guijuelo",
    provincia_id: 37
  },
  {
    id: 10886,
    cp: 37710,
    name: "Candelario",
    provincia_id: 37
  },
  {
    id: 10887,
    cp: 37711,
    name: "Colmenar de Montemayor",
    provincia_id: 37
  },
  {
    id: 10888,
    cp: 37712,
    name: "Pinedas",
    provincia_id: 37
  },
  {
    id: 10889,
    cp: 37712,
    name: "Horcajo de Montemayor",
    provincia_id: 37
  },
  {
    id: 10890,
    cp: 37713,
    name: "Valdehijaderos",
    provincia_id: 37
  },
  {
    id: 10891,
    cp: 37714,
    name: "La Calzada de Béjar",
    provincia_id: 37
  },
  {
    id: 10892,
    cp: 37716,
    name: "La Hoya",
    provincia_id: 37
  },
  {
    id: 10893,
    cp: 37716,
    name: "Navacarros",
    provincia_id: 37
  },
  {
    id: 10894,
    cp: 37716,
    name: "Cantagallo",
    provincia_id: 37
  },
  {
    id: 10895,
    cp: 37717,
    name: "Béjar",
    provincia_id: 37
  },
  {
    id: 10896,
    cp: 37717,
    name: "Vallejera de Riofrío",
    provincia_id: 37
  },
  {
    id: 10897,
    cp: 37718,
    name: "Aldeacipreste",
    provincia_id: 37
  },
  {
    id: 10898,
    cp: 37720,
    name: "Puerto de Béjar",
    provincia_id: 37
  },
  {
    id: 10899,
    cp: 37720,
    name: "El Cerro",
    provincia_id: 37
  },
  {
    id: 10900,
    cp: 37724,
    name: "Lagunilla",
    provincia_id: 37
  },
  {
    id: 10901,
    cp: 37724,
    name: "El Cerro",
    provincia_id: 37
  },
  {
    id: 10902,
    cp: 37724,
    name: "Valdelageve",
    provincia_id: 37
  },
  {
    id: 10903,
    cp: 37726,
    name: "El Cerro",
    provincia_id: 37
  },
  {
    id: 10904,
    cp: 37727,
    name: "Pe?acaballera",
    provincia_id: 37
  },
  {
    id: 10905,
    cp: 37727,
    name: "Montemayor del Río",
    provincia_id: 37
  },
  {
    id: 10906,
    cp: 37729,
    name: "Puerto de Béjar",
    provincia_id: 37
  },
  {
    id: 10907,
    cp: 37730,
    name: "Ledrada",
    provincia_id: 37
  },
  {
    id: 10908,
    cp: 37740,
    name: "Santibá?ez de Béjar",
    provincia_id: 37
  },
  {
    id: 10909,
    cp: 37748,
    name: "Puente del Congosto",
    provincia_id: 37
  },
  {
    id: 10910,
    cp: 37749,
    name: "Navamorales",
    provincia_id: 37
  },
  {
    id: 10911,
    cp: 37749,
    name: "El Tejado",
    provincia_id: 37
  },
  {
    id: 10912,
    cp: 37750,
    name: "Puente del Congosto",
    provincia_id: 37
  },
  {
    id: 10913,
    cp: 37750,
    name: "Cespedosa de Tormes",
    provincia_id: 37
  },
  {
    id: 10914,
    cp: 37751,
    name: "Gallegos de Solmirón",
    provincia_id: 37
  },
  {
    id: 10915,
    cp: 37752,
    name: "La Tala",
    provincia_id: 37
  },
  {
    id: 10916,
    cp: 37753,
    name: "Armenteros",
    provincia_id: 37
  },
  {
    id: 10917,
    cp: 37754,
    name: "Armenteros",
    provincia_id: 37
  },
  {
    id: 10918,
    cp: 37755,
    name: "Armenteros",
    provincia_id: 37
  },
  {
    id: 10919,
    cp: 37756,
    name: "Armenteros",
    provincia_id: 37
  },
  {
    id: 10920,
    cp: 37760,
    name: "Linares de Riofrío",
    provincia_id: 37
  },
  {
    id: 10921,
    cp: 37762,
    name: "Escurial de la Sierra",
    provincia_id: 37
  },
  {
    id: 10922,
    cp: 37762,
    name: "La Sierpe",
    provincia_id: 37
  },
  {
    id: 10923,
    cp: 37762,
    name: "Herguijuela del Campo",
    provincia_id: 37
  },
  {
    id: 10924,
    cp: 37763,
    name: "San Miguel de Valero",
    provincia_id: 37
  },
  {
    id: 10925,
    cp: 37764,
    name: "Valero",
    provincia_id: 37
  },
  {
    id: 10926,
    cp: 37765,
    name: "El Tornadizo",
    provincia_id: 37
  },
  {
    id: 10927,
    cp: 37765,
    name: "Monleón",
    provincia_id: 37
  },
  {
    id: 10928,
    cp: 37765,
    name: "Endrinal",
    provincia_id: 37
  },
  {
    id: 10929,
    cp: 37766,
    name: "Endrinal",
    provincia_id: 37
  },
  {
    id: 10930,
    cp: 37766,
    name: "Membribe de la Sierra",
    provincia_id: 37
  },
  {
    id: 10931,
    cp: 37766,
    name: "Pedrosillo de los Aires",
    provincia_id: 37
  },
  {
    id: 10932,
    cp: 37766,
    name: "Frades de la Sierra",
    provincia_id: 37
  },
  {
    id: 10933,
    cp: 37767,
    name: "Casafranca",
    provincia_id: 37
  },
  {
    id: 10934,
    cp: 37768,
    name: "Los Santos",
    provincia_id: 37
  },
  {
    id: 10935,
    cp: 37768,
    name: "Fuenterroble de Salvatierra",
    provincia_id: 37
  },
  {
    id: 10936,
    cp: 37770,
    name: "Guijuelo",
    provincia_id: 37
  },
  {
    id: 10937,
    cp: 37774,
    name: "Guijo de Ávila",
    provincia_id: 37
  },
  {
    id: 10938,
    cp: 37775,
    name: "Fresnedoso",
    provincia_id: 37
  },
  {
    id: 10939,
    cp: 37776,
    name: "Nava de Béjar",
    provincia_id: 37
  },
  {
    id: 10940,
    cp: 37777,
    name: "La Cabeza de Béjar",
    provincia_id: 37
  },
  {
    id: 10941,
    cp: 37777,
    name: "Sorihuela",
    provincia_id: 37
  },
  {
    id: 10942,
    cp: 37778,
    name: "Guijuelo",
    provincia_id: 37
  },
  {
    id: 10943,
    cp: 37779,
    name: "Salvatierra de Tormes",
    provincia_id: 37
  },
  {
    id: 10944,
    cp: 37779,
    name: "Aldeavieja de Tormes",
    provincia_id: 37
  },
  {
    id: 10945,
    cp: 37780,
    name: "La Maya",
    provincia_id: 37
  },
  {
    id: 10946,
    cp: 37785,
    name: "Galinduste",
    provincia_id: 37
  },
  {
    id: 10947,
    cp: 37786,
    name: "Galinduste",
    provincia_id: 37
  },
  {
    id: 10948,
    cp: 37787,
    name: "Pelayos",
    provincia_id: 37
  },
  {
    id: 10949,
    cp: 37788,
    name: "Monterrubio de la Sierra",
    provincia_id: 37
  },
  {
    id: 10950,
    cp: 37788,
    name: "Pedrosillo de los Aires",
    provincia_id: 37
  },
  {
    id: 10951,
    cp: 37789,
    name: "Buenavista",
    provincia_id: 37
  },
  {
    id: 10952,
    cp: 37789,
    name: "Bele?a",
    provincia_id: 37
  },
  {
    id: 10953,
    cp: 37789,
    name: "Fresno Alhándiga",
    provincia_id: 37
  },
  {
    id: 10954,
    cp: 37790,
    name: "Fuentes de Béjar",
    provincia_id: 37
  },
  {
    id: 10955,
    cp: 37791,
    name: "Peromingo",
    provincia_id: 37
  },
  {
    id: 10956,
    cp: 37791,
    name: "Valdelacasa",
    provincia_id: 37
  },
  {
    id: 10957,
    cp: 37791,
    name: "Puebla de San Medel",
    provincia_id: 37
  },
  {
    id: 10958,
    cp: 37791,
    name: "Valverde de Valdelacasa",
    provincia_id: 37
  },
  {
    id: 10959,
    cp: 37792,
    name: "Pedrosillo de los Aires",
    provincia_id: 37
  },
  {
    id: 10960,
    cp: 37793,
    name: "Béjar",
    provincia_id: 37
  },
  {
    id: 10961,
    cp: 37793,
    name: "Arapiles",
    provincia_id: 37
  },
  {
    id: 10962,
    cp: 37794,
    name: "Sanchotello",
    provincia_id: 37
  },
  {
    id: 10963,
    cp: 37794,
    name: "Navalmoral de Béjar",
    provincia_id: 37
  },
  {
    id: 10964,
    cp: 37795,
    name: "Guijuelo",
    provincia_id: 37
  },
  {
    id: 10965,
    cp: 37795,
    name: "Montejo",
    provincia_id: 37
  },
  {
    id: 10966,
    cp: 37795,
    name: "Pizarral",
    provincia_id: 37
  },
  {
    id: 10967,
    cp: 37795,
    name: "Berrocal de Salvatierra",
    provincia_id: 37
  },
  {
    id: 10968,
    cp: 37796,
    name: "Mozárbez",
    provincia_id: 37
  },
  {
    id: 10969,
    cp: 37796,
    name: "Arapiles",
    provincia_id: 37
  },
  {
    id: 10970,
    cp: 37797,
    name: "Calzada de Valdunciel",
    provincia_id: 37
  },
  {
    id: 10971,
    cp: 37797,
    name: "Castellanos de Villiquera",
    provincia_id: 37
  },
  {
    id: 10972,
    cp: 37798,
    name: "Monterrubio de Armu?a",
    provincia_id: 37
  },
  {
    id: 10973,
    cp: 37798,
    name: "Castellanos de Villiquera",
    provincia_id: 37
  },
  {
    id: 10974,
    cp: 37798,
    name: "Villares de la Reina",
    provincia_id: 37
  },
  {
    id: 10975,
    cp: 37798,
    name: "Valdunciel",
    provincia_id: 37
  },
  {
    id: 10976,
    cp: 37799,
    name: "San Pelayo de Guare?a",
    provincia_id: 37
  },
  {
    id: 10977,
    cp: 37799,
    name: "Negrilla de Palencia",
    provincia_id: 37
  },
  {
    id: 10978,
    cp: 37799,
    name: "Topas",
    provincia_id: 37
  },
  {
    id: 10979,
    cp: 37799,
    name: "Valdunciel",
    provincia_id: 37
  },
  {
    id: 10980,
    cp: 37799,
    name: "Forfoleda",
    provincia_id: 37
  },
  {
    id: 10981,
    cp: 37799,
    name: "Palencia de Negrilla",
    provincia_id: 37
  },
  {
    id: 10982,
    cp: 37799,
    name: "Valdelosa",
    provincia_id: 37
  },
  {
    id: 10983,
    cp: 37800,
    name: "Alba de Tormes",
    provincia_id: 37
  },
  {
    id: 10984,
    cp: 37810,
    name: "Garcihernández",
    provincia_id: 37
  },
  {
    id: 10985,
    cp: 37820,
    name: "Pe?arandilla",
    provincia_id: 37
  },
  {
    id: 10986,
    cp: 37830,
    name: "Coca de Alba",
    provincia_id: 37
  },
  {
    id: 10987,
    cp: 37840,
    name: "Tordillos",
    provincia_id: 37
  },
  {
    id: 10988,
    cp: 37850,
    name: "Nava de Sotrobal",
    provincia_id: 37
  },
  {
    id: 10989,
    cp: 37860,
    name: "Horcajo Medianero",
    provincia_id: 37
  },
  {
    id: 10990,
    cp: 37861,
    name: "Chagarcía Medianero",
    provincia_id: 37
  },
  {
    id: 10991,
    cp: 37862,
    name: "Horcajo Medianero",
    provincia_id: 37
  },
  {
    id: 10992,
    cp: 37863,
    name: "Anaya de Alba",
    provincia_id: 37
  },
  {
    id: 10993,
    cp: 37864,
    name: "Anaya de Alba",
    provincia_id: 37
  },
  {
    id: 10994,
    cp: 37865,
    name: "Larrodrigo",
    provincia_id: 37
  },
  {
    id: 10995,
    cp: 37870,
    name: "Aldeaseca de Alba",
    provincia_id: 37
  },
  {
    id: 10996,
    cp: 37871,
    name: "Pedrosillo de Alba",
    provincia_id: 37
  },
  {
    id: 10997,
    cp: 37872,
    name: "Gajates",
    provincia_id: 37
  },
  {
    id: 10998,
    cp: 37873,
    name: "Gajates",
    provincia_id: 37
  },
  {
    id: 10999,
    cp: 37874,
    name: "Gajates",
    provincia_id: 37
  },
  {
    id: 11000,
    cp: 37874,
    name: "Encinas de Abajo",
    provincia_id: 37
  },
  {
    id: 11001,
    cp: 37874,
    name: "Garcihernández",
    provincia_id: 37
  },
  {
    id: 11002,
    cp: 37881,
    name: "Valdecarros",
    provincia_id: 37
  },
  {
    id: 11003,
    cp: 37882,
    name: "Pedraza de Alba",
    provincia_id: 37
  },
  {
    id: 11004,
    cp: 37882,
    name: "Navales",
    provincia_id: 37
  },
  {
    id: 11005,
    cp: 37882,
    name: "Terradillos",
    provincia_id: 37
  },
  {
    id: 11006,
    cp: 37890,
    name: "Alba de Tormes",
    provincia_id: 37
  },
  {
    id: 11007,
    cp: 37891,
    name: "Galisancho",
    provincia_id: 37
  },
  {
    id: 11008,
    cp: 37891,
    name: "Éjeme",
    provincia_id: 37
  },
  {
    id: 11009,
    cp: 37891,
    name: "Valdemierque",
    provincia_id: 37
  },
  {
    id: 11010,
    cp: 37891,
    name: "Martinamor",
    provincia_id: 37
  },
  {
    id: 11011,
    cp: 37891,
    name: "Pelayos",
    provincia_id: 37
  },
  {
    id: 11012,
    cp: 37892,
    name: "Encinas de Arriba",
    provincia_id: 37
  },
  {
    id: 11013,
    cp: 37892,
    name: "Alba de Tormes",
    provincia_id: 37
  },
  {
    id: 11014,
    cp: 37892,
    name: "Sieteiglesias de Tormes",
    provincia_id: 37
  },
  {
    id: 11015,
    cp: 37893,
    name: "Alba de Tormes",
    provincia_id: 37
  },
  {
    id: 11016,
    cp: 37893,
    name: "Villagonzalo de Tormes",
    provincia_id: 37
  },
  {
    id: 11017,
    cp: 37893,
    name: "Encinas de Abajo",
    provincia_id: 37
  },
  {
    id: 11018,
    cp: 37893,
    name: "Machacón",
    provincia_id: 37
  },
  {
    id: 11019,
    cp: 37893,
    name: "Terradillos",
    provincia_id: 37
  },
  {
    id: 11020,
    cp: 37900,
    name: "Santa Marta de Tormes",
    provincia_id: 37
  },
  {
    id: 11021,
    cp: 38001,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11022,
    cp: 38002,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11023,
    cp: 38003,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11024,
    cp: 38004,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11025,
    cp: 38005,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11026,
    cp: 38006,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11027,
    cp: 38007,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11028,
    cp: 38008,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11029,
    cp: 38009,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11030,
    cp: 38010,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11031,
    cp: 38107,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11032,
    cp: 38108,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11033,
    cp: 38108,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11034,
    cp: 38109,
    name: "El Rosario",
    provincia_id: 38
  },
  {
    id: 11035,
    cp: 38110,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11036,
    cp: 38111,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11037,
    cp: 38120,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11038,
    cp: 38129,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11039,
    cp: 38130,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11040,
    cp: 38139,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11041,
    cp: 38140,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11042,
    cp: 38150,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11043,
    cp: 38160,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11044,
    cp: 38170,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11045,
    cp: 38180,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11046,
    cp: 38190,
    name: "El Rosario",
    provincia_id: 38
  },
  {
    id: 11047,
    cp: 38201,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11048,
    cp: 38202,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11049,
    cp: 38203,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11050,
    cp: 38204,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11051,
    cp: 38205,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11052,
    cp: 38206,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11053,
    cp: 38207,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11054,
    cp: 38208,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11055,
    cp: 38240,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11056,
    cp: 38250,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11057,
    cp: 38260,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11058,
    cp: 38270,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11059,
    cp: 38280,
    name: "Tegueste",
    provincia_id: 38
  },
  {
    id: 11060,
    cp: 38289,
    name: "Tegueste",
    provincia_id: 38
  },
  {
    id: 11061,
    cp: 38290,
    name: "El Rosario",
    provincia_id: 38
  },
  {
    id: 11062,
    cp: 38291,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11063,
    cp: 38292,
    name: "Tegueste",
    provincia_id: 38
  },
  {
    id: 11064,
    cp: 38293,
    name: "Tegueste",
    provincia_id: 38
  },
  {
    id: 11065,
    cp: 38293,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11066,
    cp: 38294,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11067,
    cp: 38294,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11068,
    cp: 38296,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11069,
    cp: 38297,
    name: "Tegueste",
    provincia_id: 38
  },
  {
    id: 11070,
    cp: 38297,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11071,
    cp: 38300,
    name: "La Orotava",
    provincia_id: 38
  },
  {
    id: 11072,
    cp: 38310,
    name: "La Orotava",
    provincia_id: 38
  },
  {
    id: 11073,
    cp: 38311,
    name: "La Orotava",
    provincia_id: 38
  },
  {
    id: 11074,
    cp: 38312,
    name: "La Orotava",
    provincia_id: 38
  },
  {
    id: 11075,
    cp: 38313,
    name: "La Orotava",
    provincia_id: 38
  },
  {
    id: 11076,
    cp: 38314,
    name: "La Orotava",
    provincia_id: 38
  },
  {
    id: 11077,
    cp: 38315,
    name: "La Orotava",
    provincia_id: 38
  },
  {
    id: 11078,
    cp: 38320,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11079,
    cp: 38320,
    name: "Santa Cruz de Tenerife",
    provincia_id: 38
  },
  {
    id: 11080,
    cp: 38329,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11081,
    cp: 38330,
    name: "San Cristóbal de La Laguna",
    provincia_id: 38
  },
  {
    id: 11082,
    cp: 38340,
    name: "Tacoronte",
    provincia_id: 38
  },
  {
    id: 11083,
    cp: 38350,
    name: "Tacoronte",
    provincia_id: 38
  },
  {
    id: 11084,
    cp: 38355,
    name: "Tacoronte",
    provincia_id: 38
  },
  {
    id: 11085,
    cp: 38356,
    name: "Tacoronte",
    provincia_id: 38
  },
  {
    id: 11086,
    cp: 38357,
    name: "Tacoronte",
    provincia_id: 38
  },
  {
    id: 11087,
    cp: 38358,
    name: "Tacoronte",
    provincia_id: 38
  },
  {
    id: 11088,
    cp: 38359,
    name: "El Sauzal",
    provincia_id: 38
  },
  {
    id: 11089,
    cp: 38360,
    name: "El Sauzal",
    provincia_id: 38
  },
  {
    id: 11090,
    cp: 38370,
    name: "La Matanza de Acentejo",
    provincia_id: 38
  },
  {
    id: 11091,
    cp: 38379,
    name: "La Matanza de Acentejo",
    provincia_id: 38
  },
  {
    id: 11092,
    cp: 38380,
    name: "La Victoria de Acentejo",
    provincia_id: 38
  },
  {
    id: 11093,
    cp: 38389,
    name: "La Victoria de Acentejo",
    provincia_id: 38
  },
  {
    id: 11094,
    cp: 38390,
    name: "Santa Úrsula",
    provincia_id: 38
  },
  {
    id: 11095,
    cp: 38398,
    name: "Santa Úrsula",
    provincia_id: 38
  },
  {
    id: 11096,
    cp: 38399,
    name: "Santa Úrsula",
    provincia_id: 38
  },
  {
    id: 11097,
    cp: 38400,
    name: "Puerto de la Cruz",
    provincia_id: 38
  },
  {
    id: 11098,
    cp: 38410,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11099,
    cp: 38412,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11100,
    cp: 38413,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11101,
    cp: 38414,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11102,
    cp: 38415,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11103,
    cp: 38416,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11104,
    cp: 38417,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11105,
    cp: 38418,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11106,
    cp: 38419,
    name: "Los Realejos",
    provincia_id: 38
  },
  {
    id: 11107,
    cp: 38420,
    name: "San Juan de la Rambla",
    provincia_id: 38
  },
  {
    id: 11108,
    cp: 38428,
    name: "San Juan de la Rambla",
    provincia_id: 38
  },
  {
    id: 11109,
    cp: 38429,
    name: "San Juan de la Rambla",
    provincia_id: 38
  },
  {
    id: 11110,
    cp: 38430,
    name: "Icod de los Vinos",
    provincia_id: 38
  },
  {
    id: 11111,
    cp: 38434,
    name: "Icod de los Vinos",
    provincia_id: 38
  },
  {
    id: 11112,
    cp: 38435,
    name: "El Tanque",
    provincia_id: 38
  },
  {
    id: 11113,
    cp: 38435,
    name: "Los Silos",
    provincia_id: 38
  },
  {
    id: 11114,
    cp: 38438,
    name: "Icod de los Vinos",
    provincia_id: 38
  },
  {
    id: 11115,
    cp: 38439,
    name: "Icod de los Vinos",
    provincia_id: 38
  },
  {
    id: 11116,
    cp: 38440,
    name: "La Guancha",
    provincia_id: 38
  },
  {
    id: 11117,
    cp: 38441,
    name: "La Guancha",
    provincia_id: 38
  },
  {
    id: 11118,
    cp: 38449,
    name: "La Guancha",
    provincia_id: 38
  },
  {
    id: 11119,
    cp: 38450,
    name: "Garachico",
    provincia_id: 38
  },
  {
    id: 11120,
    cp: 38458,
    name: "Garachico",
    provincia_id: 38
  },
  {
    id: 11121,
    cp: 38459,
    name: "Garachico",
    provincia_id: 38
  },
  {
    id: 11122,
    cp: 38460,
    name: "Garachico",
    provincia_id: 38
  },
  {
    id: 11123,
    cp: 38460,
    name: "Los Silos",
    provincia_id: 38
  },
  {
    id: 11124,
    cp: 38470,
    name: "Los Silos",
    provincia_id: 38
  },
  {
    id: 11125,
    cp: 38479,
    name: "Buenavista del Norte",
    provincia_id: 38
  },
  {
    id: 11126,
    cp: 38479,
    name: "Los Silos",
    provincia_id: 38
  },
  {
    id: 11127,
    cp: 38480,
    name: "Buenavista del Norte",
    provincia_id: 38
  },
  {
    id: 11128,
    cp: 38489,
    name: "Buenavista del Norte",
    provincia_id: 38
  },
  {
    id: 11129,
    cp: 38500,
    name: "Güímar",
    provincia_id: 38
  },
  {
    id: 11130,
    cp: 38508,
    name: "Güímar",
    provincia_id: 38
  },
  {
    id: 11131,
    cp: 38509,
    name: "Güímar",
    provincia_id: 38
  },
  {
    id: 11132,
    cp: 38509,
    name: "Candelaria",
    provincia_id: 38
  },
  {
    id: 11133,
    cp: 38509,
    name: "Arafo",
    provincia_id: 38
  },
  {
    id: 11134,
    cp: 38510,
    name: "El Rosario",
    provincia_id: 38
  },
  {
    id: 11135,
    cp: 38510,
    name: "Candelaria",
    provincia_id: 38
  },
  {
    id: 11136,
    cp: 38520,
    name: "Candelaria",
    provincia_id: 38
  },
  {
    id: 11137,
    cp: 38530,
    name: "Candelaria",
    provincia_id: 38
  },
  {
    id: 11138,
    cp: 38540,
    name: "Candelaria",
    provincia_id: 38
  },
  {
    id: 11139,
    cp: 38550,
    name: "Arafo",
    provincia_id: 38
  },
  {
    id: 11140,
    cp: 38560,
    name: "Güímar",
    provincia_id: 38
  },
  {
    id: 11141,
    cp: 38570,
    name: "Fasnia",
    provincia_id: 38
  },
  {
    id: 11142,
    cp: 38579,
    name: "Fasnia",
    provincia_id: 38
  },
  {
    id: 11143,
    cp: 38580,
    name: "Arico",
    provincia_id: 38
  },
  {
    id: 11144,
    cp: 38588,
    name: "Arico",
    provincia_id: 38
  },
  {
    id: 11145,
    cp: 38589,
    name: "Arico",
    provincia_id: 38
  },
  {
    id: 11146,
    cp: 38590,
    name: "Güímar",
    provincia_id: 38
  },
  {
    id: 11147,
    cp: 38591,
    name: "Güímar",
    provincia_id: 38
  },
  {
    id: 11148,
    cp: 38592,
    name: "Arico",
    provincia_id: 38
  },
  {
    id: 11149,
    cp: 38593,
    name: "Arico",
    provincia_id: 38
  },
  {
    id: 11150,
    cp: 38594,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11151,
    cp: 38595,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11152,
    cp: 38600,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11153,
    cp: 38611,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11154,
    cp: 38612,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11155,
    cp: 38613,
    name: "Vilaflor de Chasna",
    provincia_id: 38
  },
  {
    id: 11156,
    cp: 38614,
    name: "Vilaflor de Chasna",
    provincia_id: 38
  },
  {
    id: 11157,
    cp: 38615,
    name: "Adeje",
    provincia_id: 38
  },
  {
    id: 11158,
    cp: 38615,
    name: "Vilaflor de Chasna",
    provincia_id: 38
  },
  {
    id: 11159,
    cp: 38616,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11160,
    cp: 38617,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11161,
    cp: 38618,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11162,
    cp: 38620,
    name: "San Miguel de Abona",
    provincia_id: 38
  },
  {
    id: 11163,
    cp: 38626,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11164,
    cp: 38627,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11165,
    cp: 38628,
    name: "San Miguel de Abona",
    provincia_id: 38
  },
  {
    id: 11166,
    cp: 38629,
    name: "San Miguel de Abona",
    provincia_id: 38
  },
  {
    id: 11167,
    cp: 38629,
    name: "Vilaflor de Chasna",
    provincia_id: 38
  },
  {
    id: 11168,
    cp: 38630,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11169,
    cp: 38631,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11170,
    cp: 38632,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11171,
    cp: 38639,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11172,
    cp: 38639,
    name: "Granadilla de Abona",
    provincia_id: 38
  },
  {
    id: 11173,
    cp: 38639,
    name: "San Miguel de Abona",
    provincia_id: 38
  },
  {
    id: 11174,
    cp: 38640,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11175,
    cp: 38649,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11176,
    cp: 38650,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11177,
    cp: 38652,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11178,
    cp: 38660,
    name: "Arona",
    provincia_id: 38
  },
  {
    id: 11179,
    cp: 38660,
    name: "Adeje",
    provincia_id: 38
  },
  {
    id: 11180,
    cp: 38670,
    name: "Adeje",
    provincia_id: 38
  },
  {
    id: 11181,
    cp: 38677,
    name: "Adeje",
    provincia_id: 38
  },
  {
    id: 11182,
    cp: 38678,
    name: "Adeje",
    provincia_id: 38
  },
  {
    id: 11183,
    cp: 38679,
    name: "Adeje",
    provincia_id: 38
  },
  {
    id: 11184,
    cp: 38680,
    name: "Guía de Isora",
    provincia_id: 38
  },
  {
    id: 11185,
    cp: 38683,
    name: "Santiago del Teide",
    provincia_id: 38
  },
  {
    id: 11186,
    cp: 38684,
    name: "Santiago del Teide",
    provincia_id: 38
  },
  {
    id: 11187,
    cp: 38685,
    name: "Guía de Isora",
    provincia_id: 38
  },
  {
    id: 11188,
    cp: 38686,
    name: "Guía de Isora",
    provincia_id: 38
  },
  {
    id: 11189,
    cp: 38687,
    name: "Guía de Isora",
    provincia_id: 38
  },
  {
    id: 11190,
    cp: 38688,
    name: "Guía de Isora",
    provincia_id: 38
  },
  {
    id: 11191,
    cp: 38689,
    name: "Guía de Isora",
    provincia_id: 38
  },
  {
    id: 11192,
    cp: 38690,
    name: "Santiago del Teide",
    provincia_id: 38
  },
  {
    id: 11193,
    cp: 38700,
    name: "Santa Cruz de la Palma",
    provincia_id: 38
  },
  {
    id: 11194,
    cp: 38710,
    name: "Bre?a Alta",
    provincia_id: 38
  },
  {
    id: 11195,
    cp: 38711,
    name: "Bre?a Baja",
    provincia_id: 38
  },
  {
    id: 11196,
    cp: 38712,
    name: "Bre?a Alta",
    provincia_id: 38
  },
  {
    id: 11197,
    cp: 38712,
    name: "Santa Cruz de la Palma",
    provincia_id: 38
  },
  {
    id: 11198,
    cp: 38712,
    name: "Bre?a Baja",
    provincia_id: 38
  },
  {
    id: 11199,
    cp: 38713,
    name: "Bre?a Alta",
    provincia_id: 38
  },
  {
    id: 11200,
    cp: 38713,
    name: "Santa Cruz de la Palma",
    provincia_id: 38
  },
  {
    id: 11201,
    cp: 38714,
    name: "Puntallana",
    provincia_id: 38
  },
  {
    id: 11202,
    cp: 38714,
    name: "Santa Cruz de la Palma",
    provincia_id: 38
  },
  {
    id: 11203,
    cp: 38715,
    name: "Puntallana",
    provincia_id: 38
  },
  {
    id: 11204,
    cp: 38715,
    name: "Santa Cruz de la Palma",
    provincia_id: 38
  },
  {
    id: 11205,
    cp: 38720,
    name: "San Andrés y Sauces",
    provincia_id: 38
  },
  {
    id: 11206,
    cp: 38726,
    name: "Barlovento",
    provincia_id: 38
  },
  {
    id: 11207,
    cp: 38727,
    name: "Barlovento",
    provincia_id: 38
  },
  {
    id: 11208,
    cp: 38728,
    name: "Garafía",
    provincia_id: 38
  },
  {
    id: 11209,
    cp: 38729,
    name: "San Andrés y Sauces",
    provincia_id: 38
  },
  {
    id: 11210,
    cp: 38730,
    name: "Villa de Mazo",
    provincia_id: 38
  },
  {
    id: 11211,
    cp: 38738,
    name: "Villa de Mazo",
    provincia_id: 38
  },
  {
    id: 11212,
    cp: 38739,
    name: "Villa de Mazo",
    provincia_id: 38
  },
  {
    id: 11213,
    cp: 38740,
    name: "Fuencaliente de la Palma",
    provincia_id: 38
  },
  {
    id: 11214,
    cp: 38749,
    name: "Fuencaliente de la Palma",
    provincia_id: 38
  },
  {
    id: 11215,
    cp: 38750,
    name: "El Paso",
    provincia_id: 38
  },
  {
    id: 11216,
    cp: 38758,
    name: "El Paso",
    provincia_id: 38
  },
  {
    id: 11217,
    cp: 38759,
    name: "Los Llanos de Aridane",
    provincia_id: 38
  },
  {
    id: 11218,
    cp: 38759,
    name: "El Paso",
    provincia_id: 38
  },
  {
    id: 11219,
    cp: 38760,
    name: "Los Llanos de Aridane",
    provincia_id: 38
  },
  {
    id: 11220,
    cp: 38767,
    name: "Los Llanos de Aridane",
    provincia_id: 38
  },
  {
    id: 11221,
    cp: 38768,
    name: "Los Llanos de Aridane",
    provincia_id: 38
  },
  {
    id: 11222,
    cp: 38768,
    name: "El Paso",
    provincia_id: 38
  },
  {
    id: 11223,
    cp: 38769,
    name: "El Paso",
    provincia_id: 38
  },
  {
    id: 11224,
    cp: 38769,
    name: "Los Llanos de Aridane",
    provincia_id: 38
  },
  {
    id: 11225,
    cp: 38770,
    name: "Tazacorte",
    provincia_id: 38
  },
  {
    id: 11226,
    cp: 38779,
    name: "Tazacorte",
    provincia_id: 38
  },
  {
    id: 11227,
    cp: 38780,
    name: "Tijarafe",
    provincia_id: 38
  },
  {
    id: 11228,
    cp: 38787,
    name: "Garafía",
    provincia_id: 38
  },
  {
    id: 11229,
    cp: 38788,
    name: "Garafía",
    provincia_id: 38
  },
  {
    id: 11230,
    cp: 38789,
    name: "Tijarafe",
    provincia_id: 38
  },
  {
    id: 11231,
    cp: 38789,
    name: "Puntagorda",
    provincia_id: 38
  },
  {
    id: 11232,
    cp: 38800,
    name: "San Sebastián de la Gomera",
    provincia_id: 38
  },
  {
    id: 11233,
    cp: 38801,
    name: "San Sebastián de la Gomera",
    provincia_id: 38
  },
  {
    id: 11234,
    cp: 38810,
    name: "Alajeró",
    provincia_id: 38
  },
  {
    id: 11235,
    cp: 38811,
    name: "San Sebastián de la Gomera",
    provincia_id: 38
  },
  {
    id: 11236,
    cp: 38811,
    name: "Alajeró",
    provincia_id: 38
  },
  {
    id: 11237,
    cp: 38812,
    name: "Alajeró",
    provincia_id: 38
  },
  {
    id: 11238,
    cp: 38813,
    name: "Alajeró",
    provincia_id: 38
  },
  {
    id: 11239,
    cp: 38820,
    name: "Hermigua",
    provincia_id: 38
  },
  {
    id: 11240,
    cp: 38829,
    name: "Hermigua",
    provincia_id: 38
  },
  {
    id: 11241,
    cp: 38830,
    name: "Agulo",
    provincia_id: 38
  },
  {
    id: 11242,
    cp: 38840,
    name: "Vallehermoso",
    provincia_id: 38
  },
  {
    id: 11243,
    cp: 38849,
    name: "Vallehermoso",
    provincia_id: 38
  },
  {
    id: 11244,
    cp: 38850,
    name: "Vallehermoso",
    provincia_id: 38
  },
  {
    id: 11245,
    cp: 38852,
    name: "Vallehermoso",
    provincia_id: 38
  },
  {
    id: 11246,
    cp: 38852,
    name: "Valle Gran Rey",
    provincia_id: 38
  },
  {
    id: 11247,
    cp: 38860,
    name: "Vallehermoso",
    provincia_id: 38
  },
  {
    id: 11248,
    cp: 38869,
    name: "Vallehermoso",
    provincia_id: 38
  },
  {
    id: 11249,
    cp: 38869,
    name: "Hermigua",
    provincia_id: 38
  },
  {
    id: 11250,
    cp: 38870,
    name: "Valle Gran Rey",
    provincia_id: 38
  },
  {
    id: 11251,
    cp: 38879,
    name: "Valle Gran Rey",
    provincia_id: 38
  },
  {
    id: 11252,
    cp: 38890,
    name: "Agulo",
    provincia_id: 38
  },
  {
    id: 11253,
    cp: 38890,
    name: "Hermigua",
    provincia_id: 38
  },
  {
    id: 11254,
    cp: 38891,
    name: "Vallehermoso",
    provincia_id: 38
  },
  {
    id: 11255,
    cp: 38892,
    name: "Valle Gran Rey",
    provincia_id: 38
  },
  {
    id: 11256,
    cp: 38900,
    name: "Valverde",
    provincia_id: 38
  },
  {
    id: 11257,
    cp: 38910,
    name: "Valverde",
    provincia_id: 38
  },
  {
    id: 11258,
    cp: 38911,
    name: "Frontera",
    provincia_id: 38
  },
  {
    id: 11259,
    cp: 38912,
    name: "Frontera",
    provincia_id: 38
  },
  {
    id: 11260,
    cp: 38913,
    name: "Frontera",
    provincia_id: 38
  },
  {
    id: 11261,
    cp: 38914,
    name: "El Pinar de El Hierro",
    provincia_id: 38
  },
  {
    id: 11262,
    cp: 38915,
    name: "Valverde",
    provincia_id: 38
  },
  {
    id: 11263,
    cp: 38916,
    name: "Valverde",
    provincia_id: 38
  },
  {
    id: 11264,
    cp: 38917,
    name: "El Pinar de El Hierro",
    provincia_id: 38
  },
  {
    id: 11265,
    cp: 39001,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11266,
    cp: 39002,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11267,
    cp: 39003,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11268,
    cp: 39004,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11269,
    cp: 39005,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11270,
    cp: 39006,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11271,
    cp: 39007,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11272,
    cp: 39008,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11273,
    cp: 39009,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11274,
    cp: 39010,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11275,
    cp: 39011,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11276,
    cp: 39012,
    name: "Santander",
    provincia_id: 39
  },
  {
    id: 11277,
    cp: 39100,
    name: "Santa Cruz de Bezana",
    provincia_id: 39
  },
  {
    id: 11278,
    cp: 39108,
    name: "Santa Cruz de Bezana",
    provincia_id: 39
  },
  {
    id: 11279,
    cp: 39110,
    name: "Santa Cruz de Bezana",
    provincia_id: 39
  },
  {
    id: 11280,
    cp: 39120,
    name: "Piélagos",
    provincia_id: 39
  },
  {
    id: 11281,
    cp: 39130,
    name: "Marina de Cudeyo",
    provincia_id: 39
  },
  {
    id: 11282,
    cp: 39140,
    name: "Ribamontán al Mar",
    provincia_id: 39
  },
  {
    id: 11283,
    cp: 39146,
    name: "Ribamontán al Mar",
    provincia_id: 39
  },
  {
    id: 11284,
    cp: 39150,
    name: "Ribamontán al Mar",
    provincia_id: 39
  },
  {
    id: 11285,
    cp: 39160,
    name: "Ribamontán al Mar",
    provincia_id: 39
  },
  {
    id: 11286,
    cp: 39170,
    name: "Bareyo",
    provincia_id: 39
  },
  {
    id: 11287,
    cp: 39180,
    name: "Noja",
    provincia_id: 39
  },
  {
    id: 11288,
    cp: 39190,
    name: "Bareyo",
    provincia_id: 39
  },
  {
    id: 11289,
    cp: 39191,
    name: "Bareyo",
    provincia_id: 39
  },
  {
    id: 11290,
    cp: 39192,
    name: "Meruelo",
    provincia_id: 39
  },
  {
    id: 11291,
    cp: 39193,
    name: "Arnuero",
    provincia_id: 39
  },
  {
    id: 11292,
    cp: 39193,
    name: "Escalante",
    provincia_id: 39
  },
  {
    id: 11293,
    cp: 39195,
    name: "Arnuero",
    provincia_id: 39
  },
  {
    id: 11294,
    cp: 39197,
    name: "Santo?a",
    provincia_id: 39
  },
  {
    id: 11295,
    cp: 39197,
    name: "Argo?os",
    provincia_id: 39
  },
  {
    id: 11296,
    cp: 39200,
    name: "Reinosa",
    provincia_id: 39
  },
  {
    id: 11297,
    cp: 39200,
    name: "Campoo de Enmedio",
    provincia_id: 39
  },
  {
    id: 11298,
    cp: 39210,
    name: "Hermandad de Campoo de Suso",
    provincia_id: 39
  },
  {
    id: 11299,
    cp: 39211,
    name: "Hermandad de Campoo de Suso",
    provincia_id: 39
  },
  {
    id: 11300,
    cp: 39212,
    name: "Campoo de Enmedio",
    provincia_id: 39
  },
  {
    id: 11301,
    cp: 39212,
    name: "Hermandad de Campoo de Suso",
    provincia_id: 39
  },
  {
    id: 11302,
    cp: 39213,
    name: "Hermandad de Campoo de Suso",
    provincia_id: 39
  },
  {
    id: 11303,
    cp: 39213,
    name: "Campoo de Enmedio",
    provincia_id: 39
  },
  {
    id: 11304,
    cp: 39220,
    name: "Valderredible",
    provincia_id: 39
  },
  {
    id: 11305,
    cp: 39229,
    name: "Valderredible",
    provincia_id: 39
  },
  {
    id: 11306,
    cp: 39230,
    name: "Valderredible",
    provincia_id: 39
  },
  {
    id: 11307,
    cp: 39232,
    name: "Alfoz de Bricia",
    provincia_id: 9
  },
  {
    id: 11308,
    cp: 39232,
    name: "Valderredible",
    provincia_id: 39
  },
  {
    id: 11309,
    cp: 39248,
    name: "Valdeprado del Río",
    provincia_id: 39
  },
  {
    id: 11310,
    cp: 39250,
    name: "Berzosilla",
    provincia_id: 34
  },
  {
    id: 11311,
    cp: 39250,
    name: "Valderredible",
    provincia_id: 39
  },
  {
    id: 11312,
    cp: 39290,
    name: "Campoo de Yuso",
    provincia_id: 39
  },
  {
    id: 11313,
    cp: 39291,
    name: "Campoo de Enmedio",
    provincia_id: 39
  },
  {
    id: 11314,
    cp: 39291,
    name: "Campoo de Yuso",
    provincia_id: 39
  },
  {
    id: 11315,
    cp: 39292,
    name: "Campoo de Yuso",
    provincia_id: 39
  },
  {
    id: 11316,
    cp: 39293,
    name: "Campoo de Yuso",
    provincia_id: 39
  },
  {
    id: 11317,
    cp: 39294,
    name: "Campoo de Yuso",
    provincia_id: 39
  },
  {
    id: 11318,
    cp: 39300,
    name: "Torrelavega",
    provincia_id: 39
  },
  {
    id: 11319,
    cp: 39310,
    name: "Miengo",
    provincia_id: 39
  },
  {
    id: 11320,
    cp: 39311,
    name: "Cartes",
    provincia_id: 39
  },
  {
    id: 11321,
    cp: 39312,
    name: "Polanco",
    provincia_id: 39
  },
  {
    id: 11322,
    cp: 39312,
    name: "Miengo",
    provincia_id: 39
  },
  {
    id: 11323,
    cp: 39313,
    name: "Polanco",
    provincia_id: 39
  },
  {
    id: 11324,
    cp: 39314,
    name: "Santillana del Mar",
    provincia_id: 39
  },
  {
    id: 11325,
    cp: 39315,
    name: "Torrelavega",
    provincia_id: 39
  },
  {
    id: 11326,
    cp: 39316,
    name: "Torrelavega",
    provincia_id: 39
  },
  {
    id: 11327,
    cp: 39317,
    name: "Torrelavega",
    provincia_id: 39
  },
  {
    id: 11328,
    cp: 39318,
    name: "Miengo",
    provincia_id: 39
  },
  {
    id: 11329,
    cp: 39320,
    name: "Alfoz de Lloredo",
    provincia_id: 39
  },
  {
    id: 11330,
    cp: 39329,
    name: "Alfoz de Lloredo",
    provincia_id: 39
  },
  {
    id: 11331,
    cp: 39330,
    name: "Santillana del Mar",
    provincia_id: 39
  },
  {
    id: 11332,
    cp: 39340,
    name: "Suances",
    provincia_id: 39
  },
  {
    id: 11333,
    cp: 39350,
    name: "Suances",
    provincia_id: 39
  },
  {
    id: 11334,
    cp: 39360,
    name: "Santillana del Mar",
    provincia_id: 39
  },
  {
    id: 11335,
    cp: 39360,
    name: "Suances",
    provincia_id: 39
  },
  {
    id: 11336,
    cp: 39390,
    name: "Santillana del Mar",
    provincia_id: 39
  },
  {
    id: 11337,
    cp: 39400,
    name: "Los Corrales de Buelna",
    provincia_id: 39
  },
  {
    id: 11338,
    cp: 39407,
    name: "Cieza",
    provincia_id: 39
  },
  {
    id: 11339,
    cp: 39408,
    name: "Los Corrales de Buelna",
    provincia_id: 39
  },
  {
    id: 11340,
    cp: 39409,
    name: "San Felices de Buelna",
    provincia_id: 39
  },
  {
    id: 11341,
    cp: 39410,
    name: "Valdeolea",
    provincia_id: 39
  },
  {
    id: 11342,
    cp: 39416,
    name: "Las Rozas de Valdearroyo",
    provincia_id: 39
  },
  {
    id: 11343,
    cp: 39417,
    name: "Valdeprado del Río",
    provincia_id: 39
  },
  {
    id: 11344,
    cp: 39417,
    name: "Las Rozas de Valdearroyo",
    provincia_id: 39
  },
  {
    id: 11345,
    cp: 39418,
    name: "Valdeolea",
    provincia_id: 39
  },
  {
    id: 11346,
    cp: 39419,
    name: "Valderredible",
    provincia_id: 39
  },
  {
    id: 11347,
    cp: 39419,
    name: "Valdeprado del Río",
    provincia_id: 39
  },
  {
    id: 11348,
    cp: 39420,
    name: "Molledo",
    provincia_id: 39
  },
  {
    id: 11349,
    cp: 39420,
    name: "Bárcena de Pie de Concha",
    provincia_id: 39
  },
  {
    id: 11350,
    cp: 39430,
    name: "Molledo",
    provincia_id: 39
  },
  {
    id: 11351,
    cp: 39438,
    name: "Molledo",
    provincia_id: 39
  },
  {
    id: 11352,
    cp: 39439,
    name: "Molledo",
    provincia_id: 39
  },
  {
    id: 11353,
    cp: 39450,
    name: "Arenas de Igu?a",
    provincia_id: 39
  },
  {
    id: 11354,
    cp: 39451,
    name: "Arenas de Igu?a",
    provincia_id: 39
  },
  {
    id: 11355,
    cp: 39451,
    name: "Anievas",
    provincia_id: 39
  },
  {
    id: 11356,
    cp: 39460,
    name: "Los Corrales de Buelna",
    provincia_id: 39
  },
  {
    id: 11357,
    cp: 39460,
    name: "Cartes",
    provincia_id: 39
  },
  {
    id: 11358,
    cp: 39470,
    name: "Piélagos",
    provincia_id: 39
  },
  {
    id: 11359,
    cp: 39477,
    name: "Piélagos",
    provincia_id: 39
  },
  {
    id: 11360,
    cp: 39478,
    name: "Piélagos",
    provincia_id: 39
  },
  {
    id: 11361,
    cp: 39479,
    name: "Piélagos",
    provincia_id: 39
  },
  {
    id: 11362,
    cp: 39490,
    name: "Santiurde de Reinosa",
    provincia_id: 39
  },
  {
    id: 11363,
    cp: 39491,
    name: "Campoo de Enmedio",
    provincia_id: 39
  },
  {
    id: 11364,
    cp: 39491,
    name: "Santiurde de Reinosa",
    provincia_id: 39
  },
  {
    id: 11365,
    cp: 39491,
    name: "Pesquera",
    provincia_id: 39
  },
  {
    id: 11366,
    cp: 39491,
    name: "San Miguel de Aguayo",
    provincia_id: 39
  },
  {
    id: 11367,
    cp: 39500,
    name: "Cabezón de la Sal",
    provincia_id: 39
  },
  {
    id: 11368,
    cp: 39506,
    name: "Cabezón de la Sal",
    provincia_id: 39
  },
  {
    id: 11369,
    cp: 39507,
    name: "Cabezón de la Sal",
    provincia_id: 39
  },
  {
    id: 11370,
    cp: 39507,
    name: "Udías",
    provincia_id: 39
  },
  {
    id: 11371,
    cp: 39509,
    name: "Mazcuerras",
    provincia_id: 39
  },
  {
    id: 11372,
    cp: 39509,
    name: "Cabezón de la Sal",
    provincia_id: 39
  },
  {
    id: 11373,
    cp: 39510,
    name: "Ruente",
    provincia_id: 39
  },
  {
    id: 11374,
    cp: 39510,
    name: "Cabuérniga",
    provincia_id: 39
  },
  {
    id: 11375,
    cp: 39511,
    name: "Cabuérniga",
    provincia_id: 39
  },
  {
    id: 11376,
    cp: 39513,
    name: "Ruente",
    provincia_id: 39
  },
  {
    id: 11377,
    cp: 39517,
    name: "Los Tojos",
    provincia_id: 39
  },
  {
    id: 11378,
    cp: 39518,
    name: "Los Tojos",
    provincia_id: 39
  },
  {
    id: 11379,
    cp: 39518,
    name: "Cabuérniga",
    provincia_id: 39
  },
  {
    id: 11380,
    cp: 39520,
    name: "Comillas",
    provincia_id: 39
  },
  {
    id: 11381,
    cp: 39525,
    name: "Alfoz de Lloredo",
    provincia_id: 39
  },
  {
    id: 11382,
    cp: 39526,
    name: "Alfoz de Lloredo",
    provincia_id: 39
  },
  {
    id: 11383,
    cp: 39527,
    name: "Ruiloba",
    provincia_id: 39
  },
  {
    id: 11384,
    cp: 39528,
    name: "Valdáliga",
    provincia_id: 39
  },
  {
    id: 11385,
    cp: 39528,
    name: "Comillas",
    provincia_id: 39
  },
  {
    id: 11386,
    cp: 39530,
    name: "Reocín",
    provincia_id: 39
  },
  {
    id: 11387,
    cp: 39530,
    name: "Santillana del Mar",
    provincia_id: 39
  },
  {
    id: 11388,
    cp: 39538,
    name: "Reocín",
    provincia_id: 39
  },
  {
    id: 11389,
    cp: 39539,
    name: "Reocín",
    provincia_id: 39
  },
  {
    id: 11390,
    cp: 39539,
    name: "Alfoz de Lloredo",
    provincia_id: 39
  },
  {
    id: 11391,
    cp: 39540,
    name: "San Vicente de la Barquera",
    provincia_id: 39
  },
  {
    id: 11392,
    cp: 39547,
    name: "San Vicente de la Barquera",
    provincia_id: 39
  },
  {
    id: 11393,
    cp: 39548,
    name: "Val de San Vicente",
    provincia_id: 39
  },
  {
    id: 11394,
    cp: 39548,
    name: "San Vicente de la Barquera",
    provincia_id: 39
  },
  {
    id: 11395,
    cp: 39549,
    name: "San Vicente de la Barquera",
    provincia_id: 39
  },
  {
    id: 11396,
    cp: 39549,
    name: "Herrerías",
    provincia_id: 39
  },
  {
    id: 11397,
    cp: 39549,
    name: "Val de San Vicente",
    provincia_id: 39
  },
  {
    id: 11398,
    cp: 39550,
    name: "Lamasón",
    provincia_id: 39
  },
  {
    id: 11399,
    cp: 39550,
    name: "Herrerías",
    provincia_id: 39
  },
  {
    id: 11400,
    cp: 39551,
    name: "Herrerías",
    provincia_id: 39
  },
  {
    id: 11401,
    cp: 39553,
    name: "Rionansa",
    provincia_id: 39
  },
  {
    id: 11402,
    cp: 39554,
    name: "Rionansa",
    provincia_id: 39
  },
  {
    id: 11403,
    cp: 39555,
    name: "Tudanca",
    provincia_id: 39
  },
  {
    id: 11404,
    cp: 39556,
    name: "Polaciones",
    provincia_id: 39
  },
  {
    id: 11405,
    cp: 39557,
    name: "Polaciones",
    provincia_id: 39
  },
  {
    id: 11406,
    cp: 39558,
    name: "Cabuérniga",
    provincia_id: 39
  },
  {
    id: 11407,
    cp: 39559,
    name: "Rionansa",
    provincia_id: 39
  },
  {
    id: 11408,
    cp: 39560,
    name: "Val de San Vicente",
    provincia_id: 39
  },
  {
    id: 11409,
    cp: 39569,
    name: "Val de San Vicente",
    provincia_id: 39
  },
  {
    id: 11410,
    cp: 39570,
    name: "Potes",
    provincia_id: 39
  },
  {
    id: 11411,
    cp: 39571,
    name: "Cabezón de Liébana",
    provincia_id: 39
  },
  {
    id: 11412,
    cp: 39572,
    name: "Pesaguero",
    provincia_id: 39
  },
  {
    id: 11413,
    cp: 39573,
    name: "Cabezón de Liébana",
    provincia_id: 39
  },
  {
    id: 11414,
    cp: 39574,
    name: "Pesaguero",
    provincia_id: 39
  },
  {
    id: 11415,
    cp: 39574,
    name: "Cabezón de Liébana",
    provincia_id: 39
  },
  {
    id: 11416,
    cp: 39575,
    name: "Vega de Liébana",
    provincia_id: 39
  },
  {
    id: 11417,
    cp: 39577,
    name: "Vega de Liébana",
    provincia_id: 39
  },
  {
    id: 11418,
    cp: 39580,
    name: "Tresviso",
    provincia_id: 39
  },
  {
    id: 11419,
    cp: 39580,
    name: "Pe?arrubia",
    provincia_id: 39
  },
  {
    id: 11420,
    cp: 39580,
    name: "Cillorigo de Liébana",
    provincia_id: 39
  },
  {
    id: 11421,
    cp: 39582,
    name: "Camale?o",
    provincia_id: 39
  },
  {
    id: 11422,
    cp: 39583,
    name: "Cillorigo de Liébana",
    provincia_id: 39
  },
  {
    id: 11423,
    cp: 39584,
    name: "Cillorigo de Liébana",
    provincia_id: 39
  },
  {
    id: 11424,
    cp: 39585,
    name: "Cillorigo de Liébana",
    provincia_id: 39
  },
  {
    id: 11425,
    cp: 39586,
    name: "Camale?o",
    provincia_id: 39
  },
  {
    id: 11426,
    cp: 39587,
    name: "Camale?o",
    provincia_id: 39
  },
  {
    id: 11427,
    cp: 39588,
    name: "Camale?o",
    provincia_id: 39
  },
  {
    id: 11428,
    cp: 39589,
    name: "Camale?o",
    provincia_id: 39
  },
  {
    id: 11429,
    cp: 39590,
    name: "Reocín",
    provincia_id: 39
  },
  {
    id: 11430,
    cp: 39590,
    name: "Alfoz de Lloredo",
    provincia_id: 39
  },
  {
    id: 11431,
    cp: 39591,
    name: "Reocín",
    provincia_id: 39
  },
  {
    id: 11432,
    cp: 39591,
    name: "Cabezón de la Sal",
    provincia_id: 39
  },
  {
    id: 11433,
    cp: 39592,
    name: "Cabezón de la Sal",
    provincia_id: 39
  },
  {
    id: 11434,
    cp: 39592,
    name: "Mazcuerras",
    provincia_id: 39
  },
  {
    id: 11435,
    cp: 39592,
    name: "Valdáliga",
    provincia_id: 39
  },
  {
    id: 11436,
    cp: 39593,
    name: "Valdáliga",
    provincia_id: 39
  },
  {
    id: 11437,
    cp: 39594,
    name: "Val de San Vicente",
    provincia_id: 39
  },
  {
    id: 11438,
    cp: 39594,
    name: "Herrerías",
    provincia_id: 39
  },
  {
    id: 11439,
    cp: 39600,
    name: "Camargo",
    provincia_id: 39
  },
  {
    id: 11440,
    cp: 39608,
    name: "Camargo",
    provincia_id: 39
  },
  {
    id: 11441,
    cp: 39609,
    name: "Camargo",
    provincia_id: 39
  },
  {
    id: 11442,
    cp: 39610,
    name: "El Astillero",
    provincia_id: 39
  },
  {
    id: 11443,
    cp: 39611,
    name: "El Astillero",
    provincia_id: 39
  },
  {
    id: 11444,
    cp: 39612,
    name: "Piélagos",
    provincia_id: 39
  },
  {
    id: 11445,
    cp: 39613,
    name: "El Astillero",
    provincia_id: 39
  },
  {
    id: 11446,
    cp: 39618,
    name: "Marina de Cudeyo",
    provincia_id: 39
  },
  {
    id: 11447,
    cp: 39619,
    name: "Medio Cudeyo",
    provincia_id: 39
  },
  {
    id: 11448,
    cp: 39620,
    name: "Santa María de Cayón",
    provincia_id: 39
  },
  {
    id: 11449,
    cp: 39626,
    name: "Santa María de Cayón",
    provincia_id: 39
  },
  {
    id: 11450,
    cp: 39627,
    name: "Penagos",
    provincia_id: 39
  },
  {
    id: 11451,
    cp: 39627,
    name: "Santa María de Cayón",
    provincia_id: 39
  },
  {
    id: 11452,
    cp: 39630,
    name: "Villafufre",
    provincia_id: 39
  },
  {
    id: 11453,
    cp: 39638,
    name: "Villafufre",
    provincia_id: 39
  },
  {
    id: 11454,
    cp: 39639,
    name: "Villacarriedo",
    provincia_id: 39
  },
  {
    id: 11455,
    cp: 39639,
    name: "Saro",
    provincia_id: 39
  },
  {
    id: 11456,
    cp: 39640,
    name: "Villacarriedo",
    provincia_id: 39
  },
  {
    id: 11457,
    cp: 39649,
    name: "Villacarriedo",
    provincia_id: 39
  },
  {
    id: 11458,
    cp: 39650,
    name: "Santa María de Cayón",
    provincia_id: 39
  },
  {
    id: 11459,
    cp: 39650,
    name: "Casta?eda",
    provincia_id: 39
  },
  {
    id: 11460,
    cp: 39660,
    name: "Casta?eda",
    provincia_id: 39
  },
  {
    id: 11461,
    cp: 39670,
    name: "Puente Viesgo",
    provincia_id: 39
  },
  {
    id: 11462,
    cp: 39679,
    name: "Puente Viesgo",
    provincia_id: 39
  },
  {
    id: 11463,
    cp: 39680,
    name: "Corvera de Toranzo",
    provincia_id: 39
  },
  {
    id: 11464,
    cp: 39682,
    name: "Vega de Pas",
    provincia_id: 39
  },
  {
    id: 11465,
    cp: 39682,
    name: "Luena",
    provincia_id: 39
  },
  {
    id: 11466,
    cp: 39682,
    name: "Corvera de Toranzo",
    provincia_id: 39
  },
  {
    id: 11467,
    cp: 39683,
    name: "San Pedro del Romeral",
    provincia_id: 39
  },
  {
    id: 11468,
    cp: 39683,
    name: "Vega de Pas",
    provincia_id: 39
  },
  {
    id: 11469,
    cp: 39685,
    name: "Vega de Pas",
    provincia_id: 39
  },
  {
    id: 11470,
    cp: 39686,
    name: "San Pedro del Romeral",
    provincia_id: 39
  },
  {
    id: 11471,
    cp: 39687,
    name: "Luena",
    provincia_id: 39
  },
  {
    id: 11472,
    cp: 39688,
    name: "Luena",
    provincia_id: 39
  },
  {
    id: 11473,
    cp: 39689,
    name: "Santiurde de Toranzo",
    provincia_id: 39
  },
  {
    id: 11474,
    cp: 39691,
    name: "Santiurde de Toranzo",
    provincia_id: 39
  },
  {
    id: 11475,
    cp: 39694,
    name: "Santa María de Cayón",
    provincia_id: 39
  },
  {
    id: 11476,
    cp: 39696,
    name: "Selaya",
    provincia_id: 39
  },
  {
    id: 11477,
    cp: 39697,
    name: "Corvera de Toranzo",
    provincia_id: 39
  },
  {
    id: 11478,
    cp: 39698,
    name: "Santiurde de Toranzo",
    provincia_id: 39
  },
  {
    id: 11479,
    cp: 39699,
    name: "Corvera de Toranzo",
    provincia_id: 39
  },
  {
    id: 11480,
    cp: 39700,
    name: "Castro-Urdiales",
    provincia_id: 39
  },
  {
    id: 11481,
    cp: 39706,
    name: "Castro-Urdiales",
    provincia_id: 39
  },
  {
    id: 11482,
    cp: 39707,
    name: "Castro-Urdiales",
    provincia_id: 39
  },
  {
    id: 11483,
    cp: 39708,
    name: "Castro-Urdiales",
    provincia_id: 39
  },
  {
    id: 11484,
    cp: 39709,
    name: "Castro-Urdiales",
    provincia_id: 39
  },
  {
    id: 11485,
    cp: 39710,
    name: "Medio Cudeyo",
    provincia_id: 39
  },
  {
    id: 11486,
    cp: 39715,
    name: "Entrambasaguas",
    provincia_id: 39
  },
  {
    id: 11487,
    cp: 39716,
    name: "Entrambasaguas",
    provincia_id: 39
  },
  {
    id: 11488,
    cp: 39717,
    name: "Solórzano",
    provincia_id: 39
  },
  {
    id: 11489,
    cp: 39718,
    name: "Liérganes",
    provincia_id: 39
  },
  {
    id: 11490,
    cp: 39718,
    name: "Medio Cudeyo",
    provincia_id: 39
  },
  {
    id: 11491,
    cp: 39719,
    name: "Marina de Cudeyo",
    provincia_id: 39
  },
  {
    id: 11492,
    cp: 39719,
    name: "Entrambasaguas",
    provincia_id: 39
  },
  {
    id: 11493,
    cp: 39720,
    name: "Riotuerto",
    provincia_id: 39
  },
  {
    id: 11494,
    cp: 39722,
    name: "Liérganes",
    provincia_id: 39
  },
  {
    id: 11495,
    cp: 39723,
    name: "Miera",
    provincia_id: 39
  },
  {
    id: 11496,
    cp: 39723,
    name: "Riotuerto",
    provincia_id: 39
  },
  {
    id: 11497,
    cp: 39724,
    name: "Medio Cudeyo",
    provincia_id: 39
  },
  {
    id: 11498,
    cp: 39725,
    name: "Miera",
    provincia_id: 39
  },
  {
    id: 11499,
    cp: 39726,
    name: "San Roque de Riomiera",
    provincia_id: 39
  },
  {
    id: 11500,
    cp: 39727,
    name: "Liérganes",
    provincia_id: 39
  },
  {
    id: 11501,
    cp: 39728,
    name: "Ruesga",
    provincia_id: 39
  },
  {
    id: 11502,
    cp: 39728,
    name: "San Roque de Riomiera",
    provincia_id: 39
  },
  {
    id: 11503,
    cp: 39728,
    name: "Soba",
    provincia_id: 39
  },
  {
    id: 11504,
    cp: 39728,
    name: "Miera",
    provincia_id: 39
  },
  {
    id: 11505,
    cp: 39730,
    name: "Hazas de Cesto",
    provincia_id: 39
  },
  {
    id: 11506,
    cp: 39738,
    name: "Solórzano",
    provincia_id: 39
  },
  {
    id: 11507,
    cp: 39738,
    name: "Hazas de Cesto",
    provincia_id: 39
  },
  {
    id: 11508,
    cp: 39739,
    name: "Hazas de Cesto",
    provincia_id: 39
  },
  {
    id: 11509,
    cp: 39740,
    name: "Santo?a",
    provincia_id: 39
  },
  {
    id: 11510,
    cp: 39749,
    name: "Santo?a",
    provincia_id: 39
  },
  {
    id: 11511,
    cp: 39750,
    name: "Colindres",
    provincia_id: 39
  },
  {
    id: 11512,
    cp: 39760,
    name: "Bárcena de Cicero",
    provincia_id: 39
  },
  {
    id: 11513,
    cp: 39761,
    name: "Bárcena de Cicero",
    provincia_id: 39
  },
  {
    id: 11514,
    cp: 39761,
    name: "Voto",
    provincia_id: 39
  },
  {
    id: 11515,
    cp: 39762,
    name: "Voto",
    provincia_id: 39
  },
  {
    id: 11516,
    cp: 39764,
    name: "Voto",
    provincia_id: 39
  },
  {
    id: 11517,
    cp: 39766,
    name: "Voto",
    provincia_id: 39
  },
  {
    id: 11518,
    cp: 39770,
    name: "Laredo",
    provincia_id: 39
  },
  {
    id: 11519,
    cp: 39776,
    name: "Liendo",
    provincia_id: 39
  },
  {
    id: 11520,
    cp: 39777,
    name: "Laredo",
    provincia_id: 39
  },
  {
    id: 11521,
    cp: 39778,
    name: "Guriezo",
    provincia_id: 39
  },
  {
    id: 11522,
    cp: 39778,
    name: "Limpias",
    provincia_id: 39
  },
  {
    id: 11523,
    cp: 39780,
    name: "Guriezo",
    provincia_id: 39
  },
  {
    id: 11524,
    cp: 39780,
    name: "Castro-Urdiales",
    provincia_id: 39
  },
  {
    id: 11525,
    cp: 39786,
    name: "Guriezo",
    provincia_id: 39
  },
  {
    id: 11526,
    cp: 39787,
    name: "Guriezo",
    provincia_id: 39
  },
  {
    id: 11527,
    cp: 39788,
    name: "Guriezo",
    provincia_id: 39
  },
  {
    id: 11528,
    cp: 39790,
    name: "Bárcena de Cicero",
    provincia_id: 39
  },
  {
    id: 11529,
    cp: 39791,
    name: "Bárcena de Cicero",
    provincia_id: 39
  },
  {
    id: 11530,
    cp: 39791,
    name: "Solórzano",
    provincia_id: 39
  },
  {
    id: 11531,
    cp: 39792,
    name: "Medio Cudeyo",
    provincia_id: 39
  },
  {
    id: 11532,
    cp: 39792,
    name: "Marina de Cudeyo",
    provincia_id: 39
  },
  {
    id: 11533,
    cp: 39793,
    name: "Ribamontán al Monte",
    provincia_id: 39
  },
  {
    id: 11534,
    cp: 39794,
    name: "Ribamontán al Monte",
    provincia_id: 39
  },
  {
    id: 11535,
    cp: 39795,
    name: "Escalante",
    provincia_id: 39
  },
  {
    id: 11536,
    cp: 39796,
    name: "Bárcena de Cicero",
    provincia_id: 39
  },
  {
    id: 11537,
    cp: 39798,
    name: "Castro-Urdiales",
    provincia_id: 39
  },
  {
    id: 11538,
    cp: 39800,
    name: "Ramales de la Victoria",
    provincia_id: 39
  },
  {
    id: 11539,
    cp: 39805,
    name: "Ramales de la Victoria",
    provincia_id: 39
  },
  {
    id: 11540,
    cp: 39805,
    name: "Soba",
    provincia_id: 39
  },
  {
    id: 11541,
    cp: 39806,
    name: "Soba",
    provincia_id: 39
  },
  {
    id: 11542,
    cp: 39807,
    name: "Soba",
    provincia_id: 39
  },
  {
    id: 11543,
    cp: 39808,
    name: "Soba",
    provincia_id: 39
  },
  {
    id: 11544,
    cp: 39809,
    name: "Ramales de la Victoria",
    provincia_id: 39
  },
  {
    id: 11545,
    cp: 39811,
    name: "Ramales de la Victoria",
    provincia_id: 39
  },
  {
    id: 11546,
    cp: 39812,
    name: "Ruesga",
    provincia_id: 39
  },
  {
    id: 11547,
    cp: 39813,
    name: "Soba",
    provincia_id: 39
  },
  {
    id: 11548,
    cp: 39813,
    name: "Arredondo",
    provincia_id: 39
  },
  {
    id: 11549,
    cp: 39815,
    name: "Ramales de la Victoria",
    provincia_id: 39
  },
  {
    id: 11550,
    cp: 39815,
    name: "Ruesga",
    provincia_id: 39
  },
  {
    id: 11551,
    cp: 39820,
    name: "Limpias",
    provincia_id: 39
  },
  {
    id: 11552,
    cp: 39840,
    name: "Ampuero",
    provincia_id: 39
  },
  {
    id: 11553,
    cp: 39849,
    name: "Ampuero",
    provincia_id: 39
  },
  {
    id: 11554,
    cp: 39850,
    name: "Ampuero",
    provincia_id: 39
  },
  {
    id: 11555,
    cp: 39860,
    name: "Rasines",
    provincia_id: 39
  },
  {
    id: 11556,
    cp: 39880,
    name: "Valle de Villaverde",
    provincia_id: 39
  },
  {
    id: 11557,
    cp: 39880,
    name: "Guriezo",
    provincia_id: 39
  },
  {
    id: 11558,
    cp: 40001,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11559,
    cp: 40002,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11560,
    cp: 40003,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11561,
    cp: 40004,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11562,
    cp: 40005,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11563,
    cp: 40006,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11564,
    cp: 40100,
    name: "Real Sitio de San Ildefonso",
    provincia_id: 40
  },
  {
    id: 11565,
    cp: 40109,
    name: "Real Sitio de San Ildefonso",
    provincia_id: 40
  },
  {
    id: 11566,
    cp: 40120,
    name: "Garcillán",
    provincia_id: 40
  },
  {
    id: 11567,
    cp: 40121,
    name: "Anaya",
    provincia_id: 40
  },
  {
    id: 11568,
    cp: 40122,
    name: "Santa María la Real de Nieva",
    provincia_id: 40
  },
  {
    id: 11569,
    cp: 40123,
    name: "Santa María la Real de Nieva",
    provincia_id: 40
  },
  {
    id: 11570,
    cp: 40130,
    name: "Martín Miguel",
    provincia_id: 40
  },
  {
    id: 11571,
    cp: 40131,
    name: "Juarros de Riomoros",
    provincia_id: 40
  },
  {
    id: 11572,
    cp: 40132,
    name: "Marazoleja",
    provincia_id: 40
  },
  {
    id: 11573,
    cp: 40133,
    name: "Marazuela",
    provincia_id: 40
  },
  {
    id: 11574,
    cp: 40134,
    name: "Sangarcía",
    provincia_id: 40
  },
  {
    id: 11575,
    cp: 40135,
    name: "Santa María la Real de Nieva",
    provincia_id: 40
  },
  {
    id: 11576,
    cp: 40136,
    name: "Santa María la Real de Nieva",
    provincia_id: 40
  },
  {
    id: 11577,
    cp: 40140,
    name: "Valverde del Majano",
    provincia_id: 40
  },
  {
    id: 11578,
    cp: 40141,
    name: "Abades",
    provincia_id: 40
  },
  {
    id: 11579,
    cp: 40141,
    name: "Santiuste de Pedraza",
    provincia_id: 40
  },
  {
    id: 11580,
    cp: 40142,
    name: "Lastras del Pozo",
    provincia_id: 40
  },
  {
    id: 11581,
    cp: 40142,
    name: "Marugán",
    provincia_id: 40
  },
  {
    id: 11582,
    cp: 40142,
    name: "Monterrubio",
    provincia_id: 40
  },
  {
    id: 11583,
    cp: 40144,
    name: "Bercial",
    provincia_id: 40
  },
  {
    id: 11584,
    cp: 40144,
    name: "Sangarcía",
    provincia_id: 40
  },
  {
    id: 11585,
    cp: 40145,
    name: "Mu?opedro",
    provincia_id: 40
  },
  {
    id: 11586,
    cp: 40146,
    name: "Labajos",
    provincia_id: 40
  },
  {
    id: 11587,
    cp: 40150,
    name: "Villacastín",
    provincia_id: 40
  },
  {
    id: 11588,
    cp: 40151,
    name: "Ituero y Lama",
    provincia_id: 40
  },
  {
    id: 11589,
    cp: 40152,
    name: "Zarzuela del Monte",
    provincia_id: 40
  },
  {
    id: 11590,
    cp: 40153,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11591,
    cp: 40154,
    name: "Segovia",
    provincia_id: 40
  },
  {
    id: 11592,
    cp: 40156,
    name: "Fresno de Cantespino",
    provincia_id: 40
  },
  {
    id: 11593,
    cp: 40160,
    name: "Torrecaballeros",
    provincia_id: 40
  },
  {
    id: 11594,
    cp: 40161,
    name: "Navafría",
    provincia_id: 40
  },
  {
    id: 11595,
    cp: 40162,
    name: "Aldealengua de Pedraza",
    provincia_id: 40
  },
  {
    id: 11596,
    cp: 40162,
    name: "Gallegos",
    provincia_id: 40
  },
  {
    id: 11597,
    cp: 40163,
    name: "Matabuena",
    provincia_id: 40
  },
  {
    id: 11598,
    cp: 40164,
    name: "Arcones",
    provincia_id: 40
  },
  {
    id: 11599,
    cp: 40165,
    name: "Prádena",
    provincia_id: 40
  },
  {
    id: 11600,
    cp: 40165,
    name: "Ventosilla y Tejadilla",
    provincia_id: 40
  },
  {
    id: 11601,
    cp: 40170,
    name: "Sotosalbos",
    provincia_id: 40
  },
  {
    id: 11602,
    cp: 40170,
    name: "Collado Hermoso",
    provincia_id: 40
  },
  {
    id: 11603,
    cp: 40170,
    name: "Pelayos del Arroyo",
    provincia_id: 40
  },
  {
    id: 11604,
    cp: 40171,
    name: "Torre Val de San Pedro",
    provincia_id: 40
  },
  {
    id: 11605,
    cp: 40171,
    name: "Santiuste de Pedraza",
    provincia_id: 40
  },
  {
    id: 11606,
    cp: 40172,
    name: "Pedraza",
    provincia_id: 40
  },
  {
    id: 11607,
    cp: 40173,
    name: "Pedraza",
    provincia_id: 40
  },
  {
    id: 11608,
    cp: 40173,
    name: "Santiuste de Pedraza",
    provincia_id: 40
  },
  {
    id: 11609,
    cp: 40173,
    name: "Arahuetes",
    provincia_id: 40
  },
  {
    id: 11610,
    cp: 40174,
    name: "Valleruela de Pedraza",
    provincia_id: 40
  },
  {
    id: 11611,
    cp: 40175,
    name: "La Matilla",
    provincia_id: 40
  },
  {
    id: 11612,
    cp: 40176,
    name: "Valleruela de Sepúlveda",
    provincia_id: 40
  },
  {
    id: 11613,
    cp: 40176,
    name: "Orejana",
    provincia_id: 40
  },
  {
    id: 11614,
    cp: 40180,
    name: "Brieva",
    provincia_id: 40
  },
  {
    id: 11615,
    cp: 40180,
    name: "Santo Domingo de Pirón",
    provincia_id: 40
  },
  {
    id: 11616,
    cp: 40180,
    name: "Basardilla",
    provincia_id: 40
  },
  {
    id: 11617,
    cp: 40180,
    name: "Pelayos del Arroyo",
    provincia_id: 40
  },
  {
    id: 11618,
    cp: 40181,
    name: "Turégano",
    provincia_id: 40
  },
  {
    id: 11619,
    cp: 40182,
    name: "Caballar",
    provincia_id: 40
  },
  {
    id: 11620,
    cp: 40183,
    name: "Mu?overos",
    provincia_id: 40
  },
  {
    id: 11621,
    cp: 40184,
    name: "Arahuetes",
    provincia_id: 40
  },
  {
    id: 11622,
    cp: 40184,
    name: "Rebollo",
    provincia_id: 40
  },
  {
  },
