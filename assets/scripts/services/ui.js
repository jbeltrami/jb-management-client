'use strict'

const showServices = require('../templates/show-services.hbs')
const recentServices = require('../templates/recent-services.hbs')
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

const getRecentServicesSuccess = (data) => {
  const sortedArray = data.services.sort().slice(0, 4)
  console.log('sortedArray is: ', sortedArray)
  const recentIndexServices = recentServices({
    services: data.services
  })
  $('.recent-services-table').empty()
  $('.recent-services-table').append(recentIndexServices)
}
const getRecentServicesFailure = (data) => {
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
  destroyServiceFailure,
  getRecentServicesSuccess,
  getRecentServicesFailure
}
