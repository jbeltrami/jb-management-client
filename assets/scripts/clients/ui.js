'use strict'

const resetFields = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('changepw').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('add-client').reset()
  document.getElementById('get-client').reset()
  document.getElementById('get-client-index').reset()
  document.getElementById('update-client').reset()
  document.getElementById('destroy-client').reset()
}

const addClientSuccess = (data) => {
  console.log(data)
  resetFields()
}

const addClientFailure = (data) => {
  console.log(data)
  resetFields()
}

const getClientSuccess = (data) => {
  console.log(data)
  resetFields()
}

const getClientFailure = (data) => {
  console.log(data)
  resetFields()
}

const getClientIndexSuccess = (data) => {
  console.log(data)
  resetFields()
}

const getClientIndexFailure = (data) => {
  console.log(data)
  resetFields()
}

const updateClientSuccess = (data) => {
  console.log(data)
  resetFields()
}

const updateClientFailure = (data) => {
  console.log(data)
  resetFields()
}

const destroyClientSuccess = (data) => {
  console.log(data)
  resetFields()
}

const destroyClientFailure = (data) => {
  console.log(data)
  resetFields()
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
