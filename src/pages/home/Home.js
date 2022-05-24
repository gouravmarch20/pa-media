import React from 'react'
import './home.css'
import { NavLeft, HomePosts, FollowOther } from '../../components'
export const Home = () => {
  return (
    <div className='navbarLeft-container-wrapper'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='home-posts'>
        <HomePosts />
      </div>
      <div className='home-otherUser'>
        <FollowOther />

      </div>
    </div>
  )
}
