'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onAddClient = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.addClient(data)
    .then(ui.addClientSuccess)
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
    .then(ui.updateClientSuccess)
    .catch(ui.updateClientFailure)
}

const onDestroyClient = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.destroyClient(data)
    .then(ui.destroyClientSuccess)
    .catch(ui.destroyClientFailure)
}

const addHandlers = () => {
  $('#add-client').on('submit', onAddClient)
  $('#get-client').on('submit', onGetClient)
  $('#get-client-index').on('submit', onGetClientIndex)
  $('#update-client').on('submit', onUpdateClient)
  $('#destroy-client').on('submit', onDestroyClient)
}

module.exports = {
  addHandlers
}
