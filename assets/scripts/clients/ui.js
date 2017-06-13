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
  resetFields()
}

const addClientFailure = (data) => {
  resetFields()
}

const getClientSuccess = (data) => {
  resetFields()
}

const getClientFailure = (data) => {
  resetFields()
}

const getClientIndexSuccess = (data) => {
  resetFields()
}

const getClientIndexFailure = (data) => {
  resetFields()
}

const updateClientSuccess = (data) => {
  resetFields()
}

const updateClientFailure = (data) => {
  resetFields()
}

const destroyClientSuccess = (data) => {
  resetFields()
}

const destroyClientFailure = (data) => {
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
