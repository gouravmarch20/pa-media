import React from 'react'
import './styles/App.css'
import { ToasterWrapper } from './utils'
import { Route, Routes, Navigate } from 'react-router-dom'
import Mockman from 'mockman-js'
import { NavHeader, NewPost, Search } from './components/'
import {
  BookmarkPage,
  ExplorePage,
  HomePage,
  Login,
  ProfilePage,
  Signup,
  SinglePostPage
} from './pages'
import { PrivateRoute } from './routes/PrivateRoute'

const App = () => {
  return (
    <div>
      <ToasterWrapper />
      <NavHeader />
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/post/:postId' element={<SinglePostPage />} />
          <Route path='/profile/:username' element={<ProfilePage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/bookmarks' element={<BookmarkPage />} />
          <Route path='newpost' element={<NewPost />} />
          <Route path='search' element={<Search />} />
          <Route path='/mock' element={<Mockman />} />
        </Route>{' '}
        <Route path='/signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  )
}

export default App
