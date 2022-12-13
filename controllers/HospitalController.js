const { Hospital } = require('../models')
const { City } = require('../models')

const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.findAll()
    res.send(hospitals)
  } catch (error) {
    throw error
  }
}

// const getOneHospital = async (req, res) => {
//   try {
//     const hospital = await Hospital.findByPk(req.params.hospital_id)
//     res.send(hospital)
//   } catch (error) {
//     throw error
//   }
// }

const getCityHospitals = async (req, res) => {
  try {
    let cityId = parseInt(req.params.city_id)
    const hospital = await Hospital.findAll({ where: { cityId: cityId } })
    res.send(hospital)
  } catch (error) {
    throw error
  }
}

// const getHospitalReviews = async (req, res) => {
//   try {
//     let cityId = parseInt(req.params.city_id)
//     const review = await City.findAll({ where: { cityId: cityId } })
//     res.send(review)
//   } catch (error) {
//     throw error
//   }
// }

const addHospital = async (req, res) => {
  try {
    const hospitalInfo = req.body
    let hospital = await Hospital.create(hospitalInfo)
    res.send(hospital)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getHospitals,
  // getOneHospital,
  addHospital,
  // getHospitalReviews,
  getCityHospitals
}
