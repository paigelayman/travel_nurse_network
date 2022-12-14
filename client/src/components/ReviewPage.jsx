import { useEffect, useState } from 'react'
import { GetReviews } from '../services/ReviewServices'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios' 

const ReviewPage = () => {
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
    setReviews([...reviews, addedReview.data])
    setFormState({ author: '', unit: '', patientLoad: '', review: '', rating: ''})
    }

    // const handleUpdate 


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
      <div>
    <form onSubmit={handleSubmit}>
      <h3>Add Review: </h3>
      <label htmlFor="author">Your Name: </label>
      <input id="author" value={formState.name} onChange={handleChange} />
      <label htmlFor="unit">Unit:</label>
      <input id="unit" value={formState.description} onChange={handleChange} />
      <label htmlFor="patientLoad">Patient Load: </label>
      <input id="patientLoad" value={formState.name} onChange={handleChange} />
      <label htmlFor="review">Review:</label>
      <input id="review" value={formState.description} onChange={handleChange} />
      <label htmlFor="rating">Rating (out of 5): </label>
      <input id="rating" value={formState.name} onChange={handleChange} />
      <button className='submit' type="submit">Submit</button>
    </form>
    </div>
    <button><Link className='link' to='/'>Back to Home</Link></button>
    </div>
    )
}
export default ReviewPage

