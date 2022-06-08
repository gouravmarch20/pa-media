import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner'

import {
  getSingleUser,
  getUserPostsByUsername,
  resetUserProfile
} from '../../features/userSlice'
import { PostCard } from '../card/PostCard'
import './profile.css'
import { getAllUsers } from '../../features/userSlice'
import { ProfileDetails } from './ProfileDetails'
import { Typography } from '@mui/material'

export const Profile = () => {
  const { username } = useParams()
  const dispatch = useDispatch()
  let location = useLocation()
  const { singleUser, userPosts, allUsers, userStatus } = useSelector(
    state => state.users
  )
  useEffect(() => {
    dispatch(getSingleUser({ username }))
    dispatch(getAllUsers())

    return () => {
      dispatch(resetUserProfile())
    }
  }, [dispatch, username])

  useEffect(() => {
    dispatch(getUserPostsByUsername({ username }))
  }, [dispatch, location.pathname])

  const currentUser = allUsers.find(
    user => user.username === singleUser?.username
  )

  return (
    <div className=''>
      {console.log(userStatus)}

      {userStatus === 'loading' && (
        <div className='loader-alignment'>
          <Oval
            ariaLabel='loading-indicator'
            height={100}
            width={100}
            strokeWidth={5}
            color='red'
            secondaryColor='yellow'
          />
        </div>
      )}
      {userStatus !== 'loading' && currentUser && (
        <div>
          <ProfileDetails userDetails={currentUser} />
          <div className='profile-posts'>
            {userPosts && userPosts.length > 0 ? (
              userPosts.map(userpost => {
                return <PostCard userpost={userpost} key={userpost._id} />
              })
            ) : (
              <p className='subheading' style={{ margin: '2vmax' }}>
                Not uploaded any post .
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
