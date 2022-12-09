const { Hospital } = require('../models')

const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.findAll()
    res.send(hospitals)
  } catch (error) {
    throw error
  }
}

const getOneHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByPk(req.params.hospital_id)
    res.send(hospital)
  } catch (error) {
    throw error
  }
}

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
  getOneHospital,
  addHospital
}
