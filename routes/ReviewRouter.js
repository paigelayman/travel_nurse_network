const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

// Router.get('/', controller.getReviews)
// Router.get('/:review_id', controller.getOneReview)
Router.get('/:city_id/:hospital_id', controller.getHospitalReviews)
Router.post('/', controller.addReview)
Router.put('/:review_id', controller.updateReview)
Router.delete('/:review_id', controller.deleteReview)

module.exports = Router
