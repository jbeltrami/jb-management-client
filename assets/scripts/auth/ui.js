'use strict'

const store = require('../store.js')

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

const signUpSuccess = (data) => {
  resetFields()
}

const signUpFailure = (data) => {
  resetFields()
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  resetFields()
  store.user = data.user
}

const signInFailure = (data) => {
  resetFields()
}

const changePWSuccess = (data) => {
  resetFields()
}

const changePWFailure = (data) => {
  resetFields()
}

const signOutSuccess = (data) => {
  resetFields()
}

const signOutFailure = (data) => {
  resetFields()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
}
