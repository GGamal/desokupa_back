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
    name: "CLP",
    provincia_id: 1
  },
  {
    id: 2,
    cp: 548,
    name: "USD",
    provincia_id: 1
  },
  {
    id: 3,
    cp: 1001,
    name: "EUR",
    provincia_id: 1
  },
  {
    id: 4,
    cp: 1002,
    name: "USDT",
    provincia_id: 1
  },
  {
    id: 5,
    cp: 1003,
    name: "BTC",
    provincia_id: 1
  },
  {
    id: 6,
    cp: 1004,
    name: "ETH",
    provincia_id: 1
  }
]

class LocalidadSeeder {
  async run () {
    for (let i of data) {
      await Localidad.create(i)
    }
    console.log('Finished Localidades')
  }
}

module.exports = LocalidadSeeder
