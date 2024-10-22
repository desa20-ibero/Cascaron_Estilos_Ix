import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '..'


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/*" element={<Login />} /> 
    </Routes>

  )
}
