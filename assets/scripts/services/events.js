'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const addService = require('../templates/add-service.hbs')
const updateService = require('../templates/update-service.hbs')

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
  event.preventDefault()
  api.getServiceIndex(data)
    .then(ui.getServiceIndexSuccess)
    .catch(ui.getServiceIndexFailure)
}

const onUpdateService = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.updateService(data)
  .then(() => {
    api.getServiceIndex(data)
      .then(ui.getServiceIndexSuccess)
      .catch(ui.getServiceIndexFailure)
  })
    .catch(ui.updateServiceFailure)
}

const toAddService = () => {
  $('.render-page').empty()
  $('.render-page').append(addService)
  $('.clientId').val(event.target.dataset.id)
  $('.clientId').css('display', 'none')
}

const toUpdateService = () => {
  $('.render-page').empty()
  $('.render-page').append(updateService)
  // $('.serviceId').val(event.target.dataset.id)
  // $('.serviceId').css('display', 'none')
  api.getService(event.target.dataset.id)
    .then((value) => {
      $('.serviceId').val(value.service.id)
      $('.clientId').val(value.service.client.id)
      $('.clientId').css('display', 'none')
      $('.serviceId').css('display', 'none')
      $('.service_description').val(value.service.description)
      $('.service_date').val(value.service.service_date)
      $('.price').val(value.service.price)
    })
    .catch(console.error())
}

const onGetRecentServices = () => {
  event.preventDefault()
  api.getServiceIndex()
    .then(ui.getRecentServicesSuccess)
    .catch(ui.getRecentServicesFailure)
}

const addHandlers = () => {
  $('.render-page').on('submit', '#add-service', onAddService)
  $('.render-page').on('submit', '#get-service', onGetService)
  $('.navbar').on('click', '#get-service-index', onGetServiceIndex)
  $('.render-page').on('submit', '#update-service', onUpdateService)
  $('.render-page').on('click', '.add-service', toAddService)
  $('.render-page').on('click', '.update-service', toUpdateService)
  $('#dashboard').on('click', onGetRecentServices)
}

module.exports = {
  addHandlers
}
