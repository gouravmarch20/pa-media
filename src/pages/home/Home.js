import React from 'react'
import './home.css'
import { NavLeft, HomePosts, OtherUsers } from '../../components'
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
        {/* <OtherUsers /> */}
      </div>
    </div>
  )
}
