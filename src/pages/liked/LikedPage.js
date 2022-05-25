import React from 'react'
import { NavLeft, Like } from '../../components'

export const LikedPage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='bookmark-container'>
        <Like />
      </div>
    </div>
  )
}
