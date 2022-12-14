import { useEffect, useState } from 'react'
import { GetReviews } from '../services/ReviewServices'
import { useParams, Link } from 'react-router-dom'


const HospitalPage = () => {
  let { id } = useParams()
  const [reviews, setReviews] = useState([])
  const [formState, setFormState] = useState({ author: '', unit: '', patientLoad: '', review: '', rating: ''})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  useEffect(() => {
  const handleReviews = async () => {
  const data = await GetReviews(`${id}`)
    setReviews(data)
  }
    handleReviews()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedReview = await axios
      .post(`http://localhost:3001/api/reviews/${id}`, formState)
      .then((response) => {
        console.log(response)
        return response
      })
      .catch((error) => {
        return error
      })
    setHospitals([...reviews, addedReview.data])
    setFormState({ author: '', unit: '', patientLoad: '', review: '', rating: ''})
    }


  return (
    <div className="ReviewPage">
      {reviews ? reviews.map((review) => (
      <div className="reviews" key={review._id}>
      <h3>Review by: {review.author}</h3>
        <h3>Unit: {review.unit}</h3>
        <h3>Comments: {review.review}</h3>
        <h3>Typical Patient Load: {review.patientLoad}</h3>
        <h3>Overall Rating:{review.rating}/5</h3>
    </div>
    )): "" }
    <button><Link className='link' to='/'>Back to Home</Link></button>
    </div>
    )
}
export default HospitalPage

