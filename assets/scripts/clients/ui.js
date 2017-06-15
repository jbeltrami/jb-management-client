'use strict'

const showClients = require('../templates/show-clients.hbs')
const api = require('./api.js')

const addClientSuccess = (data) => {
  console.log(data)
}

const addClientFailure = (data) => {
  console.log(data)
}

const getClientSuccess = (data) => {
  console.log(data)
}

const getClientFailure = (data) => {
  console.log(data)
}

const getClientIndexSuccess = (data) => {
  console.log(data.clients)
  const indexClients = showClients({
    clients: data.clients
  })
  $('.render-page').empty()
  $('.render-page').append(indexClients)
  $('.destroy-client').on('click', function () {
    $(this).parent().parent().css({
      'display': 'none'
    })
    api.destroyClient(this.dataset.id)
  })
}

const getClientIndexFailure = (data) => {
  console.log(data)
}

const updateClientSuccess = (data) => {
  console.log(data)
}

const updateClientFailure = (data) => {
  console.log(data)
}

const destroyClientSuccess = (data) => {
  console.log(data)
}

const destroyClientFailure = (data) => {
  console.log(data)
}

module.exports = {
  addClientSuccess,
  addClientFailure,
  getClientSuccess,
  getClientFailure,
  getClientIndexSuccess,
  getClientIndexFailure,
  updateClientSuccess,
  updateClientFailure,
  destroyClientSuccess,
  destroyClientFailure
}
