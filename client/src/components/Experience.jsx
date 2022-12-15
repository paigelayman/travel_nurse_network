import { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom' 
import { GetExperiences } from '../services/ExperienceServices'
import axios from 'axios'

const Experience = () => {
  let { id } = useParams()
  const [experiences, setExperiences] = useState([])
  const [formState, setFormState] = useState({photoLink: "", comment: "", price: ""})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })  
  }

  useEffect(() => {
  const handleExperiences = async () => {
  const data = await GetExperiences(`${id}`)
    setExperiences(data)
  }
    handleExperiences()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedExperience = await axios
      .post(`http://localhost:3001/api/experiences/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    setExperiences([...experiences, addedExperience.data])
    setFormState({ comment: '', photoLink: '', price: ''})
    }
  
return (
  <div className='ExperiencePage'>
  <h1>Things To Do</h1>
    {experiences ? experiences.map((experience) => (
    <div className="experiences" key={experience.id}>
      <img src={experience.photoLink} id="experience-image" alt="experience" />
      <h3>Description: {experience.comment}</h3>
      <h3>Price: ${experience.price}</h3>  
    </div>
  )): "" }
  <button className='link-button'><Link className='link' to='/'>Back to Home</Link></button>


  <form onSubmit={handleSubmit}>
    <h3>Add Experience: </h3>
    <label htmlFor="photoLink">Link Photo Here: </label>
    <input id="photoLink" value={formState.photoLink} onChange={handleChange} />
    <label htmlFor="comment">Comment: </label>
    <input id="comment" value={formState.comment} onChange={handleChange} />
    <label htmlFor="price">Price: </label>
    <input id="price" value={formState.price} onChange={handleChange} />
    <button className='submit' type="submit">Submit</button>
  </form>
  </div>
)
}


export default Experience
