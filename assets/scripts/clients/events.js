'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const updateClient = require('../templates/update-client.hbs')

const onAddClient = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.addClient(data)
    .then(() => {
      api.getClientIndex(data)
        .then(ui.getClientIndexSuccess)
        .catch(ui.getClientIndexFailure)
    })
    .catch(ui.addClientFailure)
}

const onGetClient = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getClient(data)
    .then(ui.getClientSuccess)
    .catch(ui.getClientFailure)
}

const onGetClientIndex = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getClientIndex(data)
    .then(ui.getClientIndexSuccess)
    .catch(ui.getClientIndexFailure)
}

const onUpdateClient = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.updateClient(data)
  .then(() => {
    api.getClientIndex(data)
      .then(ui.getClientIndexSuccess)
      .catch(ui.getClientIndexFailure)
  })
    .catch(ui.updateClientFailure)
}

const toUpdateClient = () => {
  $('.render-page').empty()
  $('.render-page').append(updateClient)
  $('.clientId').val(event.target.dataset.id)
  $('.clientId').css('display', 'none')
}

const addHandlers = () => {
  $('.render-page').on('submit', '#add-client', onAddClient)
  $('.render-page').on('submit', '#get-client', onGetClient)
  $('.navbar').on('click', '#get-client-index', onGetClientIndex)
  $('.render-page').on('submit', '#update-client', onUpdateClient)
  $('.render-page').on('click', '.update-client', toUpdateClient)
}

module.exports = {
  addHandlers
}
