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
    const experience = await Experience.findByPk(req.params.city_id)
    res.send(experience)
  } catch (error) {
    throw error
  }
}

const addExperience = async (req, res) => {
  try {
    const experienceInfo = req.body
    let experience = await Experience.create(experienceInfo)
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

module.exports = {
  getExperiences,
  getOneExperience,
  addExperience,
  updateExperience
}
