import React from 'react'
import './css/navLeft.css'
import { NavLink } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai'
import { MdHome, MdWatchLater, MdOutlinePlaylistPlay } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'
import { FaHistory } from 'react-icons/fa'

export const NavLeft = () => {
  return (
    // <div className=''>
    <div className='navLeft-fixed'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link-sleep'
        }
      >
        <i className='navLeft-icon'>
          <MdHome />
        </i>
        <span className='navLeft-link-span'>Home</span>
      </NavLink>
      <hr />
      <NavLink
        to='/explore'
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link-sleep'
        }
      >
        <i className='navLeft-icon'>
          <BsBookmark />
        </i>
        <span className='navLeft-link-span'>Trending</span>
      </NavLink>
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
        <span className='navLeft-link-span'>Bookmark</span>
      </NavLink>
      <hr />
      <NavLink
        to='/liked'
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link-sleep'
        }
      >
        <i className='navLeft-icon'>
          <AiFillLike />
        </i>
        <span className='navLeft-link-span'>Liked</span>
      </NavLink>
      <hr />
      <NavLink
        to='/watch-later'
        className={({ isActive }) =>
          isActive ? 'nav-link-active' : 'nav-link-sleep'
        }
      >
        {/* <i className='navLeft-icon'>
          <MdWatchLater />
        </i> */}

        <span className='navLeft-link-span'>Create Post</span>
      </NavLink>
      <hr />

      <hr />
    </div>
    // </div>
  )
}
