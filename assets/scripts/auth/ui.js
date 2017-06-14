'use strict'

const store = require('../store.js')

// const resetFields = require('../reset-fields.js')
const dashboard = require('../templates/dashboard.hbs')

const signUpSuccess = (data) => {
  // resetFields()
}

const signUpFailure = (data) => {
  // resetFields()
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  store.user = data.user
  $('.navbar').css('display', 'block')
  $('.render-page').empty()
  $('.render-page').append(dashboard)
}

const signInFailure = (data) => {
  console.log(data)
  // resetFields()
}

const changePWSuccess = (data) => {
  console.log(data)
  // resetFields()
}

const changePWFailure = (data) => {
  console.log(data)
  // resetFields()
}

const signOutSuccess = (data) => {
  console.log(data)
  $('.navbar').css('display', 'none')
  // resetFields()
}

const signOutFailure = (data) => {
  console.log(data)
  // resetFields()
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
