'use strict'

const Servicios = use("App/Models/Servicio")
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with servicios
 */

class ServicioController {
  /**
   * Show a list of all servicios.
   * GET servicios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async index ({ request, response, view }) {
    let data = (await Servicios.query().where({}).fetch()).toJSON()
    data = data.filter(v => v.isDeleted !== true)
    response.send(data)
  }

  /**
   * Render a form to be used for creating a new servicio.
   * GET servicios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    var data = request.all()
    const newServicio = await Servicios.create(data)
    response.send(newServicio)
  }

  /**
   * Create/save a new servicio.
   * POST servicios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single servicio.
   * GET servicios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing servicio.
   * GET servicios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update servicio details.
   * PUT or PATCH servicios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let servicio_id = params.id
    let body = request.all()
    let editar = await Servicios.query().where('_id', servicio_id).update(body)
    response.send(editar)
  }

  /**
   * Delete a servicio with id.
   * DELETE servicios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params;
    const servicio = await Servicios.find(id);
    let paymentMethodDeleted = await Servicios.query().where('_id', id).update({ isDeleted: true })
    response.send(true)
  }
}

module.exports = ServicioController
