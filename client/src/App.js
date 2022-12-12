import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Review from './components/Review'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/experiences" element={<Experience />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
