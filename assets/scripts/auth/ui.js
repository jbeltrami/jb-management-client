'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {

}

const signUpFailure = (data) => {

}

// makes all the buttons appear.
const signInSuccess = (data) => {
  store.user = data.user
}

const signInFailure = (data) => {

}

const changePWSuccess = (data) => {

}

const changePWFailure = (data) => {

}

const signOutSuccess = (data) => {

}

const signOutFailure = (data) => {

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
