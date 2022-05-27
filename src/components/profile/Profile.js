import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  getSingleUser,
  getUserPostsByUsername,
  resetUserProfile
} from '../../features/userSlice'
import { PostCard } from '../card/PostCard'
import './profile.css'
import { getAllUsers } from '../../features/userSlice'
import { ProfileDetails } from './ProfileDetails'
import {  Typography } from '@mui/material'

export const Profile = () => {
  const { username } = useParams()
  const dispatch = useDispatch()
  let location = useLocation()
  const { singleUser, userPosts, allUsers, singleUserStatus } = useSelector(
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
      {currentUser && (
        <div>
          <ProfileDetails userDetails={currentUser} />
          <div className='profile-posts'>
            {userPosts && userPosts.length > 0 ? (
              userPosts.map(userpost => {
                return <PostCard userpost={userpost} key={userpost._id} />
              })
            ) : (
              <Typography variant='h5' style={{ margin: '2vmax' }}>
                Not any post did by him.
              </Typography>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
