const Router = require('express').Router()
const controller = require('../controllers/CityController')

Router.get('/', controller.getCities)
// Router.get('/:city_id', controller.getOneCity)

Router.post('/', controller.addCity)

module.exports = Router
