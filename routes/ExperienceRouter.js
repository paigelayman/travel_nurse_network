const Router = require('express').Router()
const controller = require('../controllers/ExperienceController')

Router.get('/', controller.getExperiences)
Router.get('/:experience_id', controller.getOneExperience)
Router.post('/', controller.addExperience)
Router.put('/:experience_id', controller.updateExperience)

module.exports = Router
