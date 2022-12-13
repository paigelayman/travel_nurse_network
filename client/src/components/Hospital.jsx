import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 


const Hospital = () => {
  const [hospitals, showHospitals] = useState([])
  useEffect(() => {
    const apiCall = async () => {
    let response = await axios.get(`http://localhost:3001/api/hospitals`)
    showHospitals(response.data)
    }
    apiCall()
  }, [])  

  const [reviews, showReviews] = useState([])
  useEffect(() => {
    const apiCall = async () => {
    let response = await axios.get(`http://localhost:3001/api/reviews`)
    showReviews(response.data)
    }
    apiCall()
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
  <button className='link-button'> <Link className='link' to='/'>Back to Home</Link></button>
  </div>
  )
}


export default Hospital
