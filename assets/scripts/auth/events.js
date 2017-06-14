'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const signUpScreen = require('../templates/sign-up-screen.hbs')
const signInScreen = require('../templates/sign-in-screen.hbs')

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePW = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const toSignIn = function () {
  $('.render-page').empty()
  $('.render-page').append(signInScreen)
  $('#sign-in').on('submit', onSignIn)
  $('.go-to-signup').on('click', toSignUpPage)
}

const toSignUpPage = function () {
  $('.render-page').empty()
  $('.render-page').append(signUpScreen)
  $('#sign-up').on('submit', onSignUp)
  $('.go-to-signin').on('click', toSignIn)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#changepw').on('submit', onChangePW)
  $('#sign-out').on('submit', onSignOut)
  $('.go-to-signup').on('click', toSignUpPage)
}

module.exports = {
  addHandlers
}
