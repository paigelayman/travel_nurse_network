import Client from './api'

export const GetHospitals = async ({ city }) => {
  try {
    const res = await Client.get(`/hospitals/${city.id}`)
  } catch (error) {
    throw error
  }
}
