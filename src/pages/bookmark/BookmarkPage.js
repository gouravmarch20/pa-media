import React from 'react'
import { NavLeft, Bookmark } from '../../components'
import './bookmarkPage.css'
export const BookmarkPage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='bookmark-container'>
        <Bookmark />
      </div>
    </div>
  )
}
