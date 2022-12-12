import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Experience from './components/Experience'
import Hospital from './components/Hospital'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/hospitals" element={<Hospital />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
