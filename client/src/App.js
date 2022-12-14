import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Experience from './components/Experience'
// import Hospital from './components/Hospital'
import HospitalPage from './components/HospitalPage'
import ReviewPage from './components/ReviewPage'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experience />} />
          {/* <Route path="/hospitals/:id" element={<Hospital />} /> */}
          <Route path="/hospitals/:id" element={<HospitalPage />} />
          <Route path="/reviews/:id" element={<ReviewPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
