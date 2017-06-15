'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const addService = require('../templates/add-service.hbs')

const onAddService = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.addService(data)
  .then(() => {
    api.getServiceIndex(data)
      .then(ui.getServiceIndexSuccess)
      .catch(ui.getServiceIndexFailure)
  })
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
  console.log(data)
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

const toAddService = () => {
  $('.render-page').empty()
  $('.render-page').append(addService)
  $('.clientId').val(event.target.dataset.id)
  $('.clientId').css('display', 'none')
}

const addHandlers = () => {
  $('.render-page').on('submit', '#add-service', onAddService)
  $('.render-page').on('submit', '#get-service', onGetService)
  $('.navbar').on('click', '#get-service-index', onGetServiceIndex)
  $('.render-page').on('submit', '#update-service', onUpdateService)
  $('.render-page').on('click', '.add-service', toAddService)
}

module.exports = {
  addHandlers
}
