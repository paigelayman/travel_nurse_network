import Client from './api'

export const GetReviews = async (hospitalId) => {
  try {
    const res = await Client.get(`api/reviews/${hospitalId}`)
    console.log(hospitalId)
    return res.data
  } catch (error) {
    throw error
  }
}
