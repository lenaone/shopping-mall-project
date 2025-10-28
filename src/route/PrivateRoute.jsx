import React from 'react'
import ProductDetails from '../pages/ProductDetails'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ authenticate }) => {
  return (
    authenticate ? <ProductDetails /> : <Navigate to="/login" />
  )
}

export default PrivateRoute