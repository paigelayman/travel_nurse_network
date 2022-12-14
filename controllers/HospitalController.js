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

const getCityHospitals = async (req, res) => {
  try {
    let cityId = parseInt(req.params.city_id)
    const hospital = await Hospital.findAll({
      where: { cityId: cityId }
    })
    res.send(hospital)
  } catch (error) {
    throw error
  }
}

const addHospital = async (req, res) => {
  try {
    let cityId = parseInt(req.params.city_id)
    let hospitalContent = {
      cityId,
      ...req.body
    }
    let hospital = await Hospital.create(hospitalContent)
    res.send(hospital)
  } catch (error) {
    throw error
  }
}

const updateHospital = async (req, res) => {
  try {
    const hospitalId = parseInt(req.params.hospital_id)
    let updatedHospital = await Hospital.update(req.body, {
      where: { id: hospitalId },
      returning: true
    })
    res.send(updatedHospital)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getHospitals,
  addHospital,
  getCityHospitals,
  updateHospital
}
