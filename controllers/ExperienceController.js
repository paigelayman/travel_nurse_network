const { Experience } = require('../models')

const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll()
    res.send(experiences)
  } catch (error) {
    throw error
  }
}

const getOneExperience = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.experience_id)
    res.send(experience)
  } catch (error) {
    throw error
  }
}

const getCityExperiences = async (req, res) => {
  try {
    let cityId = parseInt(req.params.city_id)
    const experience = await Experience.findAll({
      where: { cityId: cityId }
    })
    res.send(experience)
  } catch (error) {
    throw error
  }
}

const addExperience = async (req, res) => {
  try {
    let cityId = parseInt(req.params.city_id)
    let experienceContent = {
      cityId,
      ...req.body
    }
    let experience = await Experience.create(experienceContent)
    res.send(experience)
  } catch (error) {
    throw error
  }
}

const updateExperience = async (req, res) => {
  try {
    const experienceId = parseInt(req.params.experience_id)
    let updatedExperience = await Experience.update(req.body, {
      where: { id: experienceId },
      returning: true
    })
    res.send(updatedExperience)
  } catch (error) {
    throw error
  }
}

const deleteExperience = async (req, res) => {
  try {
    let experienceId = parseInt(req.params.experience_id)
    await Experience.destroy({ where: { id: experienceId } })
    res.send(`The experience with ID ${experienceId} has been deleted.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getExperiences,
  getOneExperience,
  addExperience,
  updateExperience,
  deleteExperience,
  getCityExperiences
}
