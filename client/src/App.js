import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import Hospital from './components/Hospital'
import HospitalPage from './components/HospitalPage'
import ReviewPage from './components/ReviewPage'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hospitals/:id" element={<Hospital />} /> */}
          <Route path="/hospitals/:id" element={<HospitalPage />} />
          <Route path="/reviews/:id" element={<ReviewPage />} />
          <Route path="/experiences/:id" element={<Experience />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
