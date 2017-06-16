'use strict'

const store = require('../store.js')

const dashboard = require('../templates/dashboard.hbs')
const signUpScreen = require('../templates/sign-up-screen.hbs')
const signInScreen = require('../templates/sign-in-screen.hbs')
const recentServicesTable = require('../templates/recent-services.hbs')

// Functions to handle responses
const userMessage = (message) => {
  $('#temp-message').text(message)
  $('#temp-message').show()
  setTimeout(function () {
    $('#temp-message').hide()
  }, 2000)
}

const signUpFailure = (data) => {
  userMessage('Please try again with a different e-mail.')
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  store.user = data.user
  $('.navbar').css('display', 'block')
  $('.render-page').empty()
  $('.render-page').append(dashboard)
  $('.recent-services-table').append(recentServicesTable)
}

const signInFailure = (data) => {
  userMessage('Please try again with different credentials. Have you signed-up yet?')
}

const changePWSuccess = (data) => {
  $('.render-page').empty()
  $('.render-page').append(dashboard)
  $('.recent-services-table').append(recentServicesTable)
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
}

const signOutFailure = (data) => {
  console.log(data)
}

module.exports = {
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
}
