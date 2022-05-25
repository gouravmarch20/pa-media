import React from 'react'
import './css/navLeft.css'
import { NavLink } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai'
import { MdHome, MdWatchLater, MdOutlinePlaylistPlay,MdTrendingUp } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'
import { FaHistory } from 'react-icons/fa'

export const NavLeft = () => {
  return (
    // <div className=''>
    <div className='navLeft-fixed'>
      <hr />
      <NavLink
        to='/bookmarks'
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link-sleep'
        }
      >
        <i className='navLeft-icon'>
          <BsBookmark />
        </i>
        {/* <span className='navLeft-link-span'>Bookmark</span> */}
      </NavLink>
      <hr />
      <NavLink
        to='/explore'
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link-sleep'
        }
      >
        <i className='navLeft-icon'>
          <MdTrendingUp />
        </i>
        {/* <span className='navLeft-link-span'>Liked</span> */}
      </NavLink>
      <hr />

      <hr />
    </div>
    // </div>
  )
}
