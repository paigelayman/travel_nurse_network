import { useEffect, useState } from 'react'
import { GetHospitals } from '../services/HospitalServices'
import { GetReviews } from '../services/ReviewServices'
import { useParams, Link } from 'react-router-dom'


const HospitalPage = () => {
  let { id } = useParams()
  const [hospitals, setHospitals] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const handleHospitals = async () => {
      const data = await GetHospitals(`${id}`)
      setHospitals(data)
    }
    handleHospitals()
  }, [])

  useEffect(() => {
    const handleReviews = async () => {
      const data = await GetReviews(`${id}`)
      setReviews(data)
    }
    handleReviews()
  }, [])


  return (
    <div className="hospitals">
    {hospitals ? hospitals.map((hospital) => (
    <div className="hospitals" key={hospital._id}>
      <h2>Facility Name: {hospital.name}</h2>
      {reviews ? reviews.map((review) => (
      <div className="reviews" key={review._id}>
      <h3>Review by: {review.name}</h3>
        <h3>Unit: {review.unit}</h3>
        <h3>Comments: {review.review}</h3>
        <h3>Typical Patient Load: {review.patientLoad}</h3>
        <h3>Overall Rating:{review.rating}/5</h3>
    </div>
    )): "" }
    </div>
    )): "" }
    <button className='link-button'><Link className='link' to='/'>Back to Home</Link></button>
    </div>
    )
}
export default HospitalPage

