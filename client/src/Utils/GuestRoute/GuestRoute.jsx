import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const GuestRoute = () => {
  const {isAuth} = useSelector((state) => state.auth)
  return (
    isAuth ? <Outlet /> : <Navigate to='/authenticate' />
  )
}

export default GuestRoute
