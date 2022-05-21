import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const { token } = useSelector(state => state.auth)
  const location = useLocation()
  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location?.pathname }} replace />
  )
}
