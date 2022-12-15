import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {
const [cities, showCities] = useState([])
const [formState, setFormState] = useState({name: "", state: "", description: ""})

const handleChange = (event) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })  
}

useEffect(() => {  
  const apiCall = async () => {
  let response = await axios.get('http://localhost:3001/api/cities')
    showCities(response.data)
    }
    apiCall()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedCity = await axios
      .post(`http://localhost:3001/api/`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    showCities([...cities, addedCity.data])
    setFormState({name: "", state: "", description: ""})
    }
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
  <form onSubmit={handleSubmit}>
      <h3>Add a City: </h3>
      <label htmlFor="name">City: </label>
      <input id="name" value={formState.name} onChange={handleChange} />
      <label htmlFor="state">State: </label>
      <input id="state" value={formState.state} onChange={handleChange} />
      <label htmlFor="description">City Motto: </label>
      <input id="description" value={formState.price} onChange={handleChange} />
      <button className='submit' type="submit">Submit</button>
  </form>
  </div>
  )
}


export default Home
