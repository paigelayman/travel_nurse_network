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
    <h3 className='tagline'>start your adventure today by browsing cities below</h3>      
    {cities ? cities.map((city) => (
      <div className='cities' key={city.id}>
        <h4>{city.name}, {city.state}</h4>
        <button><Link to={`hospitals/${city.id}`}>Facilities</Link></button>
        <button><Link to={`experiences/${city.id}`}>Things To Do</Link></button>
      </div>
    )): ''}  
  </div>
  )
}


export default Home
