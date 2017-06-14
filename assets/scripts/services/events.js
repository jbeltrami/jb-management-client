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
  $('.render-view').on('submit', '#add-service', onAddService)
  $('.render-view').on('submit', '#get-service', onGetService)
  $('.navbar').on('click', '#get-service-index', onGetServiceIndex)
  $('.render-view').on('submit', '#update-service', onUpdateService)
  $('.render-view').on('submit', '#destroy-service', onDestroyService)
}

module.exports = {
  addHandlers
}
