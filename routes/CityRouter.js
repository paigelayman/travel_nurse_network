const Router = require('express').Router()
const controller = require('../controllers/CityController')

Router.get('/', controller.getCities)

Router.post('/', controller.addCity)

module.exports = Router
