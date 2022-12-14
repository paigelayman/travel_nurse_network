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
    // event.preventDefault()
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

    const handleUpdate = async (event) => {
      // event.preventDefault()
      let fixedReview = await axios.put(`http://localhost:3001/api/reviews/${event.target.id}`, formState)
      console.log(event)
      setReviews([reviews, fixedReview.data])
      setFormState({ author: '', unit: '', patientLoad: '', review: '', rating: ''})
    }

    const handleDelete = async (event) => {
      // event.preventDefault()
      let deletedReview = await axios.delete(`http://localhost:3001/api/reviews/${event.target.id}`, formState)
      setReviews([reviews, deletedReview.data])
    }


  return (
    <div className="ReviewPage" id="reviewCard">
      {reviews ? reviews.map((review) => (
      <div className="reviews" key={review.id}>
      <h3>Review by: {review.author}</h3>
        <h4>Review ID: {review.id}</h4>
        <h4>Unit: {review.unit}</h4>
        <h4>Comments: {review.review}</h4>
        <h4>Typical Patient Load: {review.patientLoad}</h4>
        <h4>Overall Rating:{review.rating}/5</h4>
        <form className='update'>
        <h3>Update Review: </h3>
        <label htmlFor="review">Review:</label>
        <input id="review" value={formState.description} onChange={handleChange} />
        <label htmlFor="rating">Rating (out of 5): </label>
        <input id="rating" value={formState.name} onChange={handleChange} />
        {/* <label htmlFor="id">ID: </label>  */}
      {/* <input id="id" value={formState.id} onChange={handleChange} /> */}
        <button id={review.id} className='update' onClick={handleUpdate}>Update</button>
        <button className='delete' id={review.id} onClick={handleDelete}>Delete</button>
      </form> 
    </div>
    )): "" }
    <form className='form' onSubmit={handleSubmit}>
      <h3>Add a New Review: </h3>
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
    <button><Link className='link' to='/'>Back to Home</Link></button>
    </div>
    )
}
export default ReviewPage

