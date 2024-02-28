import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) { // children = component
  const role = 'student';  // hard code, fetch user role from api 
  if (role === 'student') {
    alert('You are not allowed to this Route')
    return <Navigate to='/home' replace />
  }
  return children;
}
