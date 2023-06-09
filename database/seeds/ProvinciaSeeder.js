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
const Provincia = use("App/Models/Provincia")
const ProvinciasData = [
  {
    id: 1,
    name: "Chile"
   },
   {
    id: 2,
    name: "España"
   },
   {
    id: 3,
    name: "Argentina"
   },
   {
    id: 4,
    name: "Colombia"
   },
   {
    id: 5,
    name: "Estados Unidos"
   },
   {
    id: 6,
    name: "República Dominicana"
   },
   {
    id: 7,
    name: "México"
   },
   {
    id: 8,
    name: "Perú"
   },
   {
    id: 9,
    name: "Uruguay"
   },
   {
    id: 10,
    name: "Ecuador"
   },
   {
    id: 11,
    name: "Otro"
   }
]

class ProvinciaSeeder {
  async run () {
    for (let i of ProvinciasData) {
      let cat = await Provincia.findBy('id', i.id)
      if (!cat) {
        await Provincia.create(i)
      }
    }
    console.log('Finished Provincias')
  }
}

module.exports = ProvinciaSeeder
