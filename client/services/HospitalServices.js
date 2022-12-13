import Client from './api'

export const GetHospitals = async (id) => {
  try {
    const res = await Client.get(`/hospital/${city.id}`)
  } catch (error) {
    throw error
  }
}
