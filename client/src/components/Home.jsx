import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {
const [cities, showCities] = useState([])
const [formState, setFormState] = useState({name: "", state: ""})


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
        <h3>{city.name}, {city.state}</h3>
        <h4 className='motto'>"{city.description}"</h4>
        <button><Link className="link" to={`hospitals/${city.id}`}>Facilities</Link></button>
        <button><Link className="link" to={`experiences/${city.id}`}>Things To Do</Link></button>
      </div>
    )): ''}  
  </div>
  )
}


export default Home
