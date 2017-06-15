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
    .then(() => {
      api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
    })
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
  $('.go-to-signup').on('click', toSignUpPage)
}

const toSignUpPage = function () {
  $('.render-page').empty()
  $('.render-page').append(signUpScreen)
  $('.go-to-signin').on('click', toSignIn)
}

const addHandlers = () => {
  $('.render-page').on('submit', '#sign-up', onSignUp)
  $('.render-page').on('submit', '#sign-in', onSignIn)
  $('.render-page').on('submit', '#changepw', onChangePW)
  $('.navbar').on('click', '#sign-out', onSignOut)
  $('.go-to-signup').on('click', toSignUpPage)
}

module.exports = {
  addHandlers,
  toSignIn,
  toSignUpPage
}
