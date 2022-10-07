'use strict'

/*
|--------------------------------------------------------------------------
| MonedaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Moneda = use("App/Models/Moneda")
const MonedaData = [
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
   }
]

class MonedaSeeder {
  async run () {
    for (let i of MonedaData) {
      let cat = await Moneda.findBy('id', i.id)
      if (!cat) {
        await Moneda.create(i)
      }
    }
    console.log('Finished Monedas')
  }
}

module.exports = MonedaSeeder
