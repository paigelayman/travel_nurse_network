const Router = require('express').Router()
const controller = require('../controllers/HospitalController')

Router.get('/', controller.getHospitals)
// Router.get('/:hospital_id', controller.getOneHospital)
// Router.get('/:hospital_id/:city_id', controller.getHospitalReviews)
Router.get('/:city_id', controller.getCityHospitals)
Router.post('/', controller.addHospital)

module.exports = Router
