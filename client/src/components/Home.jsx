import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const Home = ({city}) => {

const [cities, showCities] = useState([])
const navigate=useNavigate()


const handleClick = () => {
  navigate(`/${city.id}`)
}

useEffect(() => {  
  const apiCall = async () => {
  let response = await axios.get('http://localhost:3001/api/cities')
    showCities(response.data)
    }
    const getCityHospitals = async(cityId) => {
      let response = await axios.get(`http://localhost:3001/api/hospitals/${cityId}`)
      return response.data
    }
    apiCall()
    getCityHospitals()
  }, [])
  

  

return (
  <div className="Home">
    <h1>Travel Nurse Network</h1>
    <h2>start your adventure today</h2>      
    {cities ? cities.map((city) => (
      <div className='cities'>
        <h4>{city.name}, {city.state}</h4>
        <button onClick={handleClick}>Facilities</button>
        <button>Experiences</button>
      </div>
    )): ''}  
  </div>
  )
}


export default Home
