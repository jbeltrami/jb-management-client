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

module.exports = {
  addService
}
