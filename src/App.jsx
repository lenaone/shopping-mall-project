import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails.jsx'
import ProductAll from './pages/ProductAll.jsx'
import Login from './pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
import PrivateRoute from './route/PrivateRoute.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log('Authentication status changed:', authenticate);
  }, [authenticate]);
  return (
  <div>
    <Navbar />
    <Routes>
      <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      <Route path="/" element={<ProductAll />} />
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
    </Routes>
  </div>
  )
}

export default App
