const router = require('express').Router()
const userController = require('../userController/userController')

module.exports = (router) => {

    router.post('/saveUserProfile', userController.saveUserProfile)
    router.get('/getDetails', userController.getDetails)

}
