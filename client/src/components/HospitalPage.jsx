import { useEffect, useState } from 'react'
import { GetHospitals } from '../services/HospitalServices'
import { useParams } from 'react-router-dom'
import Hospital from '../components/Hospital'

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
    <div>
      
      {hospitals?.map((hospital) => (
      <div className="hospitals">
        {/* <HospitalPage name={hospital.name} /> */}
        <h2>{hospital.name}</h2>
        </div>
      ))}
    
    </div>
  )
}

export default HospitalPage

