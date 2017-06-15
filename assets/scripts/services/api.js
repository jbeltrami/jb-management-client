'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addService = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/services/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getService = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/services/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getServiceIndex = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/services/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateService = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/services/' + data.service.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyService = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/services/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addService,
  getService,
  getServiceIndex,
  updateService,
  destroyService
}
