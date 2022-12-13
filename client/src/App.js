import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Experience from './components/Experience'
import Hospital from './components/Hospital'
import HospitalPage from './pages/HospitalPage'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/hospitals" element={<Hospital />} />
          <Route path="/hospitals/:city.id" element={<HospitalPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
