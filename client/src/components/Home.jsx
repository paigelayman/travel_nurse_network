import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import {useParams,useNavigate } from 'react-router-dom'



const Home = () => {
const navigate = useNavigate()
const [cities, showCities] = useState([])

// const handleChange = (event) => {
//   setFormState({ ...formState, [event.target.id]: event.target.value })
// }

useEffect(() => {  
  const apiCall = async () => {
  let response = await axios.get('http://localhost:3001/api/cities')
    showCities(response.data)
    }
    apiCall()
  }, [])

  const getHospitals = (id) => {
    navigate(`hospitals/${id}`)
  }

return (
  <div className="Home">
    <h1>Travel Nurse Network</h1>
    <h2>start your adventure today</h2>      
    {cities ? cities.map((city) => (
      <div className='cities' key={city.id}>
        <h4>{city.name}, {city.state}</h4>
        <button value={city.id} onClick={()=>{getHospitals(city.id)}}>Facilities</button>
        <button>Experiences</button>
      </div>
    )): ''}  
  </div>
  )
}


export default Home
