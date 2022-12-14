const Router = require('express').Router()
const controller = require('../controllers/HospitalController')

Router.get('/', controller.getHospitals)
Router.get('/:city_id', controller.getCityHospitals)
Router.post('/', controller.addHospital)

module.exports = Router
