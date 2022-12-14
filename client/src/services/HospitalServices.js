import Client from './api'

export const GetHospitals = async (cityId) => {
  try {
    const res = await Client.get(`api/hospitals/${cityId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
