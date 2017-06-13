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
  document.getElementById('add-service').reset()
  document.getElementById('get-service').reset()
  document.getElementById('get-service-index').reset()
  document.getElementById('update-service').reset()
  document.getElementById('destroy-service').reset()
}

module.exports = resetFields
