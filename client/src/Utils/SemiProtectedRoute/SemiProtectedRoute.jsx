import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const SemiProtectedRoute = () => {
    const {isAuth , user} = useSelector((state) => state.auth)
    return (
        !isAuth ? <Navigate to='/' /> : isAuth && !user.activated ? <Outlet /> : <Navigate to='/rooms' />
    )
}

export default SemiProtectedRoute
