import React from 'react'
import { SinglePost, NavLeft } from '../../components'
export const SinglePostPage = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='bookmark-container'>
        <SinglePost />
      </div>
    </div>
  )
}
