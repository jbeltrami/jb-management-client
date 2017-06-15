'use strict'

const store = require('../store.js')

const dashboard = require('../templates/dashboard.hbs')
const signUpScreen = require('../templates/sign-up-screen.hbs')
const signInScreen = require('../templates/sign-in-screen.hbs')

// Functions to handle responses
const userMessage = (message) => {
  $('#temp-message').text(message)
  $('#temp-message').show()
  setTimeout(function () {
    $('#temp-message').hide()
  }, 2000)
}

const signUpSuccess = (data) => {
}

const signUpFailure = (data) => {
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
}

const changePWSuccess = (data) => {
  $('.render-page').empty()
  $('.render-page').append(dashboard)
  userMessage('Password changed!')
}

const changePWFailure = (data) => {
  console.log(data)
  userMessage('Changing password failed. Please, try again.')
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
}

const signOutFailure = (data) => {
  console.log(data)
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
