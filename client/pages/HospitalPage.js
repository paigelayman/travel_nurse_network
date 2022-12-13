import { useEffect, useState } from 'react'
import { GetHospitals } from '../services/HospitalServices'
import { useParams } from 'react-router-dom'
import Hospital from '../src/components/Hospital'

const HospitalPage = () => {
  let { id } = useParams()
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    const handleHospitals = async () => {
      const data = await GetHospitals(city.id)
      setHospitals(data)
    }
    handleHospitals
  }, [])

  return (
    <div className="hospitals">
      {hospitals.map((hospital) => (
        <Hospital key={hospital.id} name={hospital.name} />
      ))}
    </div>
  )
}

export default HospitalPage
