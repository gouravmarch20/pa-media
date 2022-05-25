import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSingleUser,
  getUserPostsByUsername,
  resetUserProfile
} from '../../features/userSlice'

import './profile.css'
import { getAllUsers } from '../../features/userSlice'
import { ProfilePost } from './ProfilePost'
import { Avatar, Button, Dialog, Typography } from '@mui/material'
import { User } from './User'
export const Profile = () => {
  const [followersToggle, setFollowersToggle] = useState(false)
  const [followingToggle, setFollowingToggle] = useState(false)

  const { username } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getSingleUser({ username }))
    dispatch(getAllUsers())

    return () => {
      dispatch(resetUserProfile())
    }
  }, [dispatch, username])

  useEffect(() => {
    dispatch(getUserPostsByUsername({ username }))
  }, [dispatch])
  const { singleUser, userPosts, allUsers, singleUserStatus } = useSelector(
    state => state.users
  )
  const currentUser = allUsers.find(
    user => user.username === singleUser.username
  )

  return (
    <div className=''>
      {currentUser && (
        <div>
          <div>
            <img
              className='avatar-icon img-avatar-profile'
              src={currentUser?.avatar}
              alt=''
            />
            <Button color='primary'>Edit Profile</Button>
          </div>

          <p className='p-10'>
            {currentUser?.firstName} {currentUser?.lastName}
          </p>
          <p className='p-10'> @ {currentUser?.username} </p>
          <a href={currentUser?.portfolio} target='_blank'>
            {' '}
            <span className='content'> Portfolio : </span>{' '}
            {currentUser?.portfolio}
          </a>
          <p className='p-10'>
            {' '}
            <span className='content'>Bio:</span> {currentUser?.bio}{' '}
          </p>

          <Button
            color='primary'
            onClick={() => setFollowingToggle(!followingToggle)}
          >
            <span>Following &nbsp;</span> {currentUser?.following.length}
          </Button>
          <Button
            color='secondary'
            onClick={() => setFollowersToggle(!followersToggle)}
          >
            <span>Followers &nbsp;</span> {currentUser?.followers.length}
          </Button>

          <div className='profile-posts'>
            {userPosts ? (
              userPosts.map((userpost, id) => {
                return (
                  <div key={id}>
                    <ProfilePost userpost={userpost} />
                  </div>
                )
              })
            ) : (
              <h2>no post found</h2>
            )}
          </div>
          <Dialog
            open={followingToggle}
            onClose={() => setFollowingToggle(!followingToggle)}
          >
            <div className='DialogBox'>
              <Typography variant='h4'>Following</Typography>

              {currentUser && currentUser.following.length > 0 ? (
                currentUser.following.map(follow => (
                  <User
                    key={follow._id}
                    firstName={follow.firstName}
                    username={follow.username}
                    avatar={follow.avatar}
                  />
                ))
              ) : (
                <Typography style={{ margin: '2vmax' }}>
                  You're not following anyone
                </Typography>
              )}
            </div>
          </Dialog>

          <Dialog
            open={followersToggle}
            onClose={() => setFollowersToggle(!followersToggle)}
          >
            <div className='DialogBox'>
              <Typography variant='h4'>Followers</Typography>

              {currentUser && currentUser.followers.length > 0 ? (
                currentUser.followers.map(follow => (
                  <User
                    key={follow._id}
                    firstName={follow.firstName}
                    username={follow.username}
                    avatar={follow.avatar}
                    setModalClose={setFollowersToggle}
                  />
                ))
              ) : (
                <Typography style={{ margin: '2vmax' }}>
                  You have no followers
                </Typography>
              )}
            </div>
          </Dialog>
        </div>
      )}
    </div>
  )
}
