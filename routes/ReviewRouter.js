const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.getReviews)
Router.get('/:hospital_id', controller.getHospitalReviews)
Router.post('/:hospital_id', controller.addReview)
Router.put('/:review_id', controller.updateReview)
Router.delete('/:review_id', controller.deleteReview)

module.exports = Router
