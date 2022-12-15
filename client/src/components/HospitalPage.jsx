import { useEffect, useState } from 'react'
import { GetHospitals } from '../services/HospitalServices'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const HospitalPage = () => {
  let { id } = useParams()
  const [hospitals, setHospitals] = useState([])
  const [formState, setFormState] = useState({ name: '', description: ''})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  
  useEffect(() => {
    const handleHospitals = async () => {
      const data = await GetHospitals(`${id}`)
      setHospitals(data)
    }
    handleHospitals()
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedHospital = await axios
      .post(`https://travel-nurse-network.herokuapp.com/api/hospitals/${id}`, formState)
      .then((response) => {
        console.log(response)
        return response
      })
      .catch((error) => {
        return error
      })
    setHospitals([...hospitals, addedHospital.data])
    setFormState({ name: '', description: ''})
    }

  return (
    <div className="HospitalPage">
    {hospitals ? hospitals.map((hospital) => (
    <div className="hospitals" key={hospital._id}>
      <h2>Facility Name: {hospital.name}</h2>
      <h3>{hospital.description}</h3>
    <button><Link className="link" to={`/reviews/${hospital.id}`}>See Reviews</Link></button>
    </div>
    )): "" }
    <div>
    <form onSubmit={handleSubmit}>
      <h3>Add Hospital: </h3>
      <label htmlFor="name">Name: </label>
      <input id="name" value={formState.name} onChange={handleChange} />
      <label htmlFor="description">Description:</label>
      <input id="description" value={formState.description} onChange={handleChange} />
      <button className='submit' type="submit">Submit</button>
    </form>
    </div>

    <button><Link className='link' to='/'>Back to Home</Link></button>
    </div>
    )
}
export default HospitalPage

