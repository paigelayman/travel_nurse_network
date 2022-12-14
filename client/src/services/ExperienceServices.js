import Client from './api'

export const GetExperiences = async (cityId) => {
  try {
    const res = await Client.get(`api/experiences/${cityId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
