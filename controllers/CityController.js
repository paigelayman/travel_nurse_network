const { City } = require('../models')

const getCities = async (req, res) => {
  try {
    const cities = await City.findAll()
    res.send(cities)
  } catch (error) {
    throw error
  }
}

const getOneCity = async (req, res) => {
  try {
    const city = await City.findByPk(req.params.city_id)
    res.send(city)
  } catch (error) {
    throw error
  }
}

// const getCityHospitals = async (req, res) => {
//   try {
//     let cityId = parseInt(req.params.city_id)
//     const hospital = await City.findAll({ where: { cityId: cityId } })
//     res.send(hospital)
//   } catch (error) {
//     throw error
//   }
// }

const addCity = async (req, res) => {
  try {
    const cityInfo = req.body
    let city = await City.create(cityInfo)
    res.send(city)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCities,
  getOneCity,
  addCity
  //   getCityHospitals
}
