const { Review } = require('../models')

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const getOneReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.review_id)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const addReview = async (req, res) => {
  try {
    let hospitalId = parseInt(req.params.hospital_id)
    let reviewContent = {
      hospitalId,
      ...req.body
    }
    let review = await Review.create(reviewContent)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const updateReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.review_id)
    let updatedReview = await Review.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const getHospitalReviews = async (req, res) => {
  try {
    let hospitalId = parseInt(req.params.hospital_id)
    const review = await Review.findAll({ where: { hospitalId: hospitalId } })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const deleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send(`The review with ID ${reviewId} has been deleted.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getReviews,
  getOneReview,
  addReview,
  updateReview,
  deleteReview,
  getHospitalReviews
}
