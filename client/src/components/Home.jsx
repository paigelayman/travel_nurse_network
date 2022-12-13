import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {
const [cities, showCities] = useState([])


useEffect(() => {  
  const apiCall = async () => {
  let response = await axios.get('http://localhost:3001/api/cities')
    showCities(response.data)
    }
    apiCall()
  }, [])
  

return (
  <div className="Home">
    <h1>Travel Nurse Network</h1>
    <h2>start your adventure today</h2>      
    {cities ? cities.map((city) => (
      <div className='cities'>
        <h4>{city.name}, {city.state}</h4>
        <button value={city.id}onClick={f}>Facilities</button>
        <button>Experiences</button>
      </div>
    )): ''}  
  </div>
  )
}


export default Home
