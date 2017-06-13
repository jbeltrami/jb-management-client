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

const onGetService = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getService(data)
    .then(ui.getServiceSuccess)
    .catch(ui.getServiceFailure)
}

const onGetServiceIndex = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getServiceIndex(data)
    .then(ui.getServiceIndexSuccess)
    .catch(ui.getServiceIndexFailure)
}

const onUpdateService = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.updateService(data)
    .then(ui.updateServiceSuccess)
    .catch(ui.updateServiceFailure)
}

const onDestroyService = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.destroyService(data)
    .then(ui.destroyServiceSuccess)
    .catch(ui.destroyServiceFailure)
}

const addHandlers = () => {
  $('#add-service').on('submit', onAddService)
  $('#get-service').on('submit', onGetService)
  $('#get-service-index').on('submit', onGetServiceIndex)
  $('#update-service').on('submit', onUpdateService)
  $('#destroy-service').on('submit', onDestroyService)
}

module.exports = {
  addHandlers
}
