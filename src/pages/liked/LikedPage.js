import React from 'react'
import { NavLeft } from '../../components'

export const LikedPage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='bookmark-container'>{/* <Bookmark /> */}</div>
    </div>
  )
}
