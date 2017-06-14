'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const clientEvents = require('./clients/events.js')
const serviceEvents = require('./services/events.js')
const signInScreen = require('./templates/sign-in-screen.hbs')

$(() => {
  setAPIOrigin(location, config)
  $('.render-page').append(signInScreen())
  authEvents.addHandlers()
  clientEvents.addHandlers()
  serviceEvents.addHandlers()
})

// $(() => {
//   authEvents.addHandlers()
// })
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
