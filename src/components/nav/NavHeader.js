import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/navHeader.css'
import {  useSelector } from "react-redux";

import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined
} from '@mui/icons-material'

export const NavHeader = () => {
  // TODO: REPLACE SETTAB USING USEEFFECT
  const [tab, setTab] = useState(window.location.pathname)
  const { userInfo } = useSelector(state => state.auth);

  return (
    <>
      <div className='header-wrapper'>
        <div className='header'>
          <Link to='/' onClick={() => setTab('/')}>
            {tab === '/' ? (
              <Home style={{ color: 'black' }} />
            ) : (
              <HomeOutlined />
            )}
          </Link>

          <Link to='/newpost' onClick={() => setTab('/newpost')}>
            {tab === '/newpost' ? (
              <Add style={{ color: 'black' }} />
            ) : (
              <AddOutlined />
            )}
          </Link>

          <Link to='/search' onClick={() => setTab('/search')}>
            {tab === '/search' ? (
              <Search style={{ color: 'black' }} />
            ) : (
              <SearchOutlined />
            )}
          </Link>

          <Link
            to={`/profile/${userInfo?.username}`}
            onClick={() => setTab('/account')}
          >
            {tab === '/account' ? (
              <AccountCircle style={{ color: 'black' }} />
            ) : (
              <AccountCircleOutlined />
            )}
          </Link>

          <Link to='/login' onClick={() => setTab('/login')}>
            {tab === '/login' ? (
              <button className='auth-btn'>Signin</button>
            ) : (
              <button className='auth-btn'>Signin</button>
            )}
          </Link>
        </div>
      </div>
    </>
  )
}
