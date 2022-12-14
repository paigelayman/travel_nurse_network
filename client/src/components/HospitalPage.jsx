import { useEffect, useState } from 'react'
import { GetHospitals } from '../services/HospitalServices'
import { useParams, Link } from 'react-router-dom'


const HospitalPage = () => {
  let { id } = useParams()
  const [hospitals, setHospitals] = useState([])


  useEffect(() => {
    const handleHospitals = async () => {
      const data = await GetHospitals(`${id}`)
      setHospitals(data)
    }
    handleHospitals()
  }, [])



  return (
    <div className="hospitals">
    {hospitals ? hospitals.map((hospital) => (
    <div className="hospitals" key={hospital._id}>
      <h2>Facility Name: {hospital.name}</h2>
    <button><Link to={`/reviews/${hospital.id}`}>See Reviews</Link></button>
    </div>
    )): "" }
    <button className='link-button'><Link className='link' to='/'>Back to Home</Link></button>
    </div>
    )
}
export default HospitalPage

