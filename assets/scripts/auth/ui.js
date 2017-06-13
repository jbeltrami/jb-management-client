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
  console.log(data)
  store.user = data.user
  resetFields()
}

const signInFailure = (data) => {
  console.log(data)
  resetFields()
}

const changePWSuccess = (data) => {
  console.log(data)
  resetFields()
}

const changePWFailure = (data) => {
  console.log(data)
  resetFields()
}

const signOutSuccess = (data) => {
  console.log(data)
  resetFields()
}

const signOutFailure = (data) => {
  console.log(data)
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
