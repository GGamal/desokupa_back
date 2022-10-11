const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const fs = require('fs')

exports.uploadFile = async (file, path, name) => {
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