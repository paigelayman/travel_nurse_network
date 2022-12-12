import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 



const Experience = () => {
  const [experiences, showExperiences] = useState([])
  useEffect(() => {
    const apiCall = async () => {
    let response = await axios.get(`http://localhost:3001/api/experiences`)
    showExperiences(response.data)
    }
    apiCall()
  }, [])  
  
return (
  <div className="experiences">
  <h1>Things To Do</h1>
  {experiences ? experiences.map((experience) => (
  <div className="experiences" key={experience._id}>
    <img src={experience.photoLink} id="experience-image" alt="experience" />
    <h3>Description: {experience.comment}</h3>
    <h3>Price: ${experience.price}</h3>  
  </div>
  )): "" }
   <button className='link-button'> <Link className='link' to='/'>Back to Home</Link></button>
  </div>
)
}


export default Experience
