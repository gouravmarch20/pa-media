import React from 'react'
import { NavLeft, Explore } from '../../components'
export const ExplorePage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='bookmark-container'>
        <Explore />
      </div>
    </div>
  )
}
