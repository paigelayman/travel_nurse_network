import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'



const Review = () => {
  const [reviews, showReviews] = useState([])
  useEffect(() => {
    const apiCall = async () => {
    let response = await axios.get(`http://localhost:3001/api/reviews`)
    showReviews(response.data)
    }
    apiCall()
  }, [])  
  
return (
  <div className="reviews">
  <h1>Reviews</h1>
  {reviews ? reviews.map((review) => (
  <div className="reviews" key={review._id}>
    <h2>Posted by: {review.name}</h2>
      <h3>Unit: {review.unit}</h3>
      <h3>Comments: {review.review}</h3>
      <h3>Typical Patient Load: {review.patientLoad}</h3>
      <h3>Overall Rating:{review.rating}/5</h3>
      
  </div>
  )): "" }
  </div>
  )
}


export default Review
