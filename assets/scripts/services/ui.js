'use strict'

const showServices = require('../templates/show-services.hbs')
const api = require('./api.js')

const addServiceSuccess = (data) => {
  console.log(data)
}

const addServiceFailure = (data) => {
  console.log(data)
}

const getServiceSuccess = (data) => {
  console.log(data)
}

const getServiceFailure = (data) => {
  console.log(data)
}

const getServiceIndexSuccess = (data) => {
  console.log(data.services)
  const indexServices = showServices({
    services: data.services
  })
  $('.render-page').empty()
  $('.render-page').append(indexServices)
  $('.destroy-service').on('click', function () {
    $(this).parent().parent().css({
      'display': 'none'
    })
    api.destroyService(this.dataset.id)
  })
}

const getServiceIndexFailure = (data) => {
  console.log(data)
}

const updateServiceSuccess = (data) => {
  console.log(data)
}

const updateServiceFailure = (data) => {
  console.log(data)
}
const destroyServiceSuccess = (data) => {
  console.log(data)
}

const destroyServiceFailure = (data) => {
  console.log(data)
}

module.exports = {
  addServiceSuccess,
  addServiceFailure,
  getServiceSuccess,
  getServiceFailure,
  getServiceIndexSuccess,
  getServiceIndexFailure,
  updateServiceSuccess,
  updateServiceFailure,
  destroyServiceSuccess,
  destroyServiceFailure
}
