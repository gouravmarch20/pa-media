import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/navHeader.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'

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

import { logOut } from '../../features/authSlice'

export const NavHeader = () => {
  const [tab, setTab] = useState(window.location.pathname)
  const { userInfo } = useSelector(state => state.auth)
  const { token } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOutHandler = () => {
    dispatch(logOut())
    navigate('/login')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
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
          {token && (
            // <Button variant='contained' onClick={() => logOutHandler()}>
            //   Signout
            // </Button>

            <button
              className='p-temp btn-danger-light'
              onClick={() => logOutHandler()}
            >
              Signout
            </button>
          )}
        </div>
      </div>
    </>
  )
}
