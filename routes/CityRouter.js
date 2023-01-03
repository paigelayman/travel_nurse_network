const Router = require('express').Router()
const controller = require('../controllers/CityController')

Router.get('/', controller.getCities)
Router.post('/', controller.addCity)
Router.delete('/:city_id', controller.deleteCity)

module.exports = Router
