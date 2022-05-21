import React from 'react'
import './styles/App.css'
import { Button, Typography } from '@mui/material'
import { PrivateRoute } from './routes/PrivateRoute'
import { ToasterWrapper } from './utils'
import { Route, Routes, Navigate } from 'react-router-dom'
import Mockman from 'mockman-js'
import { useSelector } from 'react-redux'
import {
  Bookmark,
  Explore,
  Home,
  Signin,
  Profile,
  Signup,
  SinglePost
} from './pages'
const App = () => {
  // const { token } = useSelector(state => state.auth)
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<PrivateRoute />}> */}
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId' element={<SinglePost />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/bookmarks' element={<Bookmark />} />
        <Route path='/mock' element={<Mockman />} />
        <Route path='*' element={<Navigate replace to='/' />} />
        {/* </Route>{' '} */}
      </Routes>
    </div>
  )
}

export default App
