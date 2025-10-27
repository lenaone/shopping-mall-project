import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails.jsx'
import ProductAll from './pages/ProductAll.jsx'
import Login from './pages/Login.jsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/" element={<ProductAll />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
