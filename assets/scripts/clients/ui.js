'use strict'

const api = require('./api.js')
const showClients = require('../templates/show-clients.hbs')
const addClient = require('../templates/add-client.hbs')
const updateClient = require('../templates/update-client.hbs')

const addClientSuccess = (data) => {
  // console.log(data)
}

const addClientFailure = (data) => {
  // console.log(data)
}

const getClientSuccess = (data) => {
  // console.log(data)
}

const getClientFailure = (data) => {
  // console.log(data)
}

const toAddClient = () => {
  $('.render-page').empty()
  $('.render-page').append(addClient)
}

const getClientIndexSuccess = (data) => {
  // console.log(data.clients)
  const indexClients = showClients({
    clients: data.clients
  })
  $('.render-page').empty()
  $('.render-page').append(indexClients)
  // Render add client interface
  $('.add-client').on('click', toAddClient)
  // Add destroy-client function based on button id that matches client id
  $('.destroy-client').on('click', function () {
    $(this).parent().parent().css({
      'display': 'none'
    })
    api.destroyClient(this.dataset.id)
  })
}

const getClientIndexFailure = (data) => {
  // console.log(data)
}

const updateClientSuccess = (data) => {
  // console.log(data)
}

const updateClientFailure = (data) => {
  // console.log(data)
}

const destroyClientSuccess = (data) => {
  // console.log(data)
}

const destroyClientFailure = (data) => {
  // console.log(data)
}

const toUpdateClientSuccess = (data) => {
  // console.log(data.client)
  $('.render-page').empty()
  $('.render-page').append(updateClient)
  $('.clientId').val(data.client.id)
  $('.clientId').css('display', 'none')
  $('.first_name').val(data.client.first_name)
  $('.family_name').val(data.client.family_name)
  $('.born_on').val(data.client.born_on)
  $('.email').val(data.client.email)
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
  destroyClientFailure,
  toUpdateClientSuccess
}
