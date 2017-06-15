'use strict'

const store = require('../store.js')

// const resetFields = require('../reset-fields.js')
const dashboard = require('../templates/dashboard.hbs')
const signUpScreen = require('../templates/sign-up-screen.hbs')
const signInScreen = require('../templates/sign-in-screen.hbs')

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

const toSignIn = function () {
  $('.render-page').empty()
  $('.render-page').append(signInScreen)
  $('.go-to-signup').on('click', toSignUpPage)
}

const toSignUpPage = function () {
  $('.render-page').empty()
  $('.render-page').append(signUpScreen)
  $('.go-to-signin').on('click', toSignIn)
}

const signOutSuccess = (data) => {
  $('.navbar').css('display', 'none')
  toSignIn()
  // $('.render-page').empty()
  // $('.render-page').append(signInScreen)
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
