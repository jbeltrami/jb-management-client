'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addClient = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/clients/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getClient = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/clients/' + data.client.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getClientIndex = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/clients/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateClient = (data) => {
  console.log('update client data is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/clients/' + data.client.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyClient = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/clients/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  addClient,
  getClient,
  getClientIndex,
  updateClient,
  destroyClient
}
