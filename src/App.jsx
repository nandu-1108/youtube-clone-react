import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './COMPONANTS/Index'
import Home from './pages/Home'
import Watch from './pages/Watch'

const App = () => {
  return (
    <div>
      <Index />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </div>
  )
}

export default App