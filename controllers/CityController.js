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

const addCity = async (req, res) => {
  try {
    const cityInfo = req.body
    let city = await City.create(cityInfo)
    res.send(city)
  } catch (error) {
    throw error
  }
}

const deleteCity = async (req, res) => {
  try {
    let cityId = parseInt(req.params.city_id)
    await City.destroy({ where: { id: cityId } })
    res.send(`The city with ID ${cityId} has been deleted.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCities,
  getOneCity,
  addCity,
  deleteCity
}
