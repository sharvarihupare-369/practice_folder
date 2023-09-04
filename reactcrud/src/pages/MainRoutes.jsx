import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import Admins from './Admins'
import Login from './Login'
import PrivateRoute from '../components/PrivateRoute'


const MainRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={
         <PrivateRoute>
            <Admins/>
         </PrivateRoute>
        } />
     </Routes>
  )
}

export default MainRoutes