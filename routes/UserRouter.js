const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getUsers)
Router.get('/:user_id', controller.getOneUser)

module.exports = Router
