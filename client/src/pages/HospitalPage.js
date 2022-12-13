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
      setHospitals(data.data)
    }
    handleHospitals()
  }, [])

  return (
    <div className="hospitals">
      {hospitals?.map((hospital) => (
        <Hospital name={hospital.name} />
      ))}
    </div>
  )
}

export default HospitalPage
