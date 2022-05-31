import React from 'react'
import './styles/App.css'
import { Button, Typography } from '@mui/material'
import { ToasterWrapper } from './utils'
import { Route, Routes, Navigate } from 'react-router-dom'
import Mockman from 'mockman-js'
import { useSelector } from 'react-redux'
import { NavHeader, NewPost, Search, Account } from './components/'
import {
  BookmarkPage,
  ExplorePage,
  Home,
  Login,
  ProfilePage,
  Signup,
  SinglePostPage,
  LikedPage
} from './pages'
import { PrivateRoute } from './routes/PrivateRoute'

const App = () => {
  const user = useSelector(state => state)
  return (
    <div>
      <ToasterWrapper />
      <NavHeader />
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/post/:postId' element={<SinglePostPage />} />
          <Route path='/profile/:username' element={<ProfilePage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/bookmarks' element={<BookmarkPage />} />
          <Route path='newpost' element={<NewPost />} />
          <Route path='search' element={<Search />} />
          {/* <Route path='/liked' element={<LikedPage />} /> */}
          <Route path='/mock' element={<Mockman />} />
        </Route>{' '}
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  )
}

export default App
