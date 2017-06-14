'use strict'

// const resetFields = require('../reset-fields.js')
const showClients = require('../templates/show-clients.hbs')
const api = require('./api.js')

const addClientSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const addClientFailure = (data) => {
  console.log(data)
  // resetFields()
}

const getClientSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const getClientFailure = (data) => {
  console.log(data)
  // resetFields()
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
  // resetFields()
}

const updateClientSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const updateClientFailure = (data) => {
  console.log(data)
  // resetFields()
}

const destroyClientSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const destroyClientFailure = (data) => {
  console.log(data)
  // resetFields()
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
