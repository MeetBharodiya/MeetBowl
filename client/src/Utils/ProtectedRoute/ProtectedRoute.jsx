import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoute = () => {
    const {isAuth , user} = useSelector((state) => state.auth)
    return (
        !isAuth ? <Navigate to='/' /> : isAuth && !user.activated ? <Navigate to='/activate' /> : <Outlet />
    )
}

export default ProtectedRoute
