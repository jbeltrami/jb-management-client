'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onAddService = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.addService(data)
    .then(ui.addServiceSuccess)
    .catch(ui.addServiceFailure)
}

const addHandlers = () => {
  $('#add-service').on('submit', onAddService)
}

module.exports = {
  addHandlers
}
