'use strict'

// const resetFields = require('../reset-fields.js')
const showServices = require('../templates/show-services.hbs')
const api = require('./api.js')

const addServiceSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const addServiceFailure = (data) => {
  console.log(data)
  // resetFields()
}

const getServiceSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const getServiceFailure = (data) => {
  console.log(data)
  // resetFields()
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
  // resetFields()
}

const updateServiceSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const updateServiceFailure = (data) => {
  console.log(data)
  // resetFields()
}
const destroyServiceSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const destroyServiceFailure = (data) => {
  console.log(data)
  // resetFields()
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
