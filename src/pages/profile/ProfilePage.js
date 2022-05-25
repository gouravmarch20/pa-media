import React from 'react'
import './profilePage.css'
import { Profile, NavLeft } from '../../components'
export const ProfilePage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='profile-container'>
        <Profile />
      </div>
    </div>
  )
}
