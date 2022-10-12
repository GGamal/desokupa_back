'use strict'

const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const fs = require('fs')

const Productos = use("App/Models/Producto")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with servicios
 */
 const uploadFile = async (file, path, name) => {
  if (Helpers.appRoot('storage/uploads')) {
    await file.move(Helpers.appRoot('storage/uploads/' + path), {
      name: name,
      overwrite: true
    })
  } else {
    mkdirp.sync(`${__dirname}/storage/Excel`)
  }

  const fileName = file.fileName

  if (!file.moved()) {
    return file.error()
  }

  return fileName
}

class ProductoController {
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
    let data = (await Productos.query().where({}).fetch()).toJSON()
    data = data.filter(v => v.isDeleted !== true)
    response.send(data)
  }

  /**
   * Render a form to be used for creating a new producto.
   * GET productos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    var data = request.only(['form'])
    data = JSON.parse(data.form)
    let imgSave = request.file('imagen', {
      types: ['image'],
      size: '50mb'
    })
    await uploadFile(imgSave, `productos/${data.name.toString()}/perfil`, 'perfil')
    const newProducto = await Productos.create(data)
    response.send(newProducto)
  }

  /**
   * Create/save a new producto.
   * POST productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single producto.
   * GET productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing producto.
   * GET producto/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update producto details.
   * PUT or PATCH productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let producto_id = params.id
    let body = request.all()
    let editar = await Productos.query().where('_id', producto_id).update(body)
    response.send(editar)
  }

  /**
   * Delete a producto with id.
   * DELETE productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params;
    const producto = await Productos.find(id);
    let paymentMethodDeleted = await Productos.query().where('_id', id).update({ isDeleted: true })
    response.send(true)
  }
}

module.exports = ProductoController
