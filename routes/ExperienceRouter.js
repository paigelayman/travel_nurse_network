const Router = require('express').Router()
const controller = require('../controllers/ExperienceController')

Router.get('/', controller.getExperiences)
Router.get('/:experience_id', controller.getOneExperience)
Router.get('/:city_id', controller.getCityExperiences)
Router.post('/', controller.addExperience)
Router.put('/:experience_id', controller.updateExperience)
Router.delete('/:experience_id', controller.deleteExperience)

module.exports = Router
