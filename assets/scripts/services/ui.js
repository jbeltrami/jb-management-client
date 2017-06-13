'use strict'

const resetFields = require('../reset-fields.js')

const addServiceSuccess = (data) => {
  console.log(data)
  resetFields()
}

const addServiceFailure = (data) => {
  console.log(data)
  resetFields()
}

const getServiceSuccess = (data) => {
  console.log(data)
  resetFields()
}

const getServiceFailure = (data) => {
  console.log(data)
  resetFields()
}

const getServiceIndexSuccess = (data) => {
  console.log(data)
  resetFields()
}

const getServiceIndexFailure = (data) => {
  console.log(data)
  resetFields()
}

const updateServiceSuccess = (data) => {
  console.log(data)
  resetFields()
}

const updateServiceFailure = (data) => {
  console.log(data)
  resetFields()
}

module.exports = {
  addServiceSuccess,
  addServiceFailure,
  getServiceSuccess,
  getServiceFailure,
  getServiceIndexSuccess,
  getServiceIndexFailure,
  updateServiceSuccess,
  updateServiceFailure
}
