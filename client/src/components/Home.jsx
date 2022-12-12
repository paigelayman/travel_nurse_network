import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'


const Home = () => {

const [cities, showCities] = useState([])

useEffect(() => {  
  const apiCall = async () => {
  let response = await axios.get('http://localhost:3001/api/cities')
    showCities(response.data.cities)
    }
  apiCall()
  }, [])
  
  
return (
  <div className="Home">
    <h1>Travel Nurse Network</h1>
    <h2>start your adventure today</h2>      
    {cities ? cities.map((city) => (
      <div className='cities'>
        <h4>{city.name}</h4>
      </div>
    )): ''}  
  </div>
  )
}


export default Home
