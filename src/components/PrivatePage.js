import React from 'react'
import isLogin from '../utiles'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivatePage = () => {
    let isUserLogin = isLogin("Farnaz")
  return (
    <div>
        {isUserLogin ? (<Outlet />):(<Navigate to="/" />)}
    </div>
  )
}
