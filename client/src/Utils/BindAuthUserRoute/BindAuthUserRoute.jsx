import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const BindAuthUserRoute = () => {
    const {isAuth , user} = useSelector((state) => state.auth)
    return (
        isAuth && user.activated ? <Navigate to='/rooms' /> : isAuth && !user.activated ? <Navigate to='/activate' /> : <Outlet />
    )
}

export default BindAuthUserRoute
