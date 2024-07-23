



import React from 'react'
import Layout from '../Layout/Layout'
import HomePage from '../Home/HomePage'
import { Route, Routes } from 'react-router-dom'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes