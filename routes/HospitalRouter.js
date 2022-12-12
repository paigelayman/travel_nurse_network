const Router = require('express').Router()
const controller = require('../controllers/HospitalController')

Router.get('/', controller.getHospitals)
// Router.get('/:hospital_id', controller.getOneHospital)
Router.get('/:hospital_id', controller.getHospitalReviews)
Router.post('/', controller.addHospital)

module.exports = Router
