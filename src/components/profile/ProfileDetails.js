import React, { useEffect, useState } from 'react'
import { Button, Dialog, Typography } from '@mui/material'

import { User } from './User'
import { useSelector, useDispatch } from 'react-redux'
import { followUser, unfollowUser } from '../../features/userSlice'
import { getAllPosts } from '../../features/postSlice'
import { EditProfileModal } from './EditProfileModal'

export const ProfileDetails = ({ userDetails }) => {
  const [followersToggle, setFollowersToggle] = useState(false)
  const [followingToggle, setFollowingToggle] = useState(false)
  const { userInfo, token } = useSelector(state => state.auth)
  const [profileEditToggle, setProfileEditToggle] = useState(false)
  const dispatch = useDispatch()

  const {
    _id,
    avatar,
    bio,

    firstName,
    followers,
    following,
    portfolio,
    username,
    lastName
  } = userDetails || {}

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])
  const isUserAlreadyFollowing = () =>
    followers?.find(user => user.username === userInfo.username)
  return (
    <div>
      <div>
        <img
          className='avatar-icon img-avatar-profile'
          src={avatar}
          alt='please upload image'
        />
        {userInfo.username === username ? (
          <Button
            color='primary'
            variant='outlined'
            onClick={() => setProfileEditToggle(!profileEditToggle)}
          >
            Edit Profile
          </Button>
        ) : isUserAlreadyFollowing() ? (
          <Button
            color='primary'
            onClick={() => dispatch(unfollowUser({ followUserId: _id, token }))}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            color='primary'
            onClick={() => dispatch(followUser({ followUserId: _id, token }))}
          >
            Follow
          </Button>
        )}
      </div>

      <p className='p-10'>
        {firstName} {lastName}
      </p>
      <p className='text-sm mb-10'> @ {username} </p>
      <a href={portfolio} target='_blank' className='text-decore-none text-sm'>
        {' '}
        <span className='content '> Portfolio : </span>{' '}
        {portfolio === '' ? 'please  fill portfolio link ' : portfolio}
      </a>

      <p className='p-10'>
        {' '}
        <span className='content '>Bio:</span>{' '}
        {bio === '' ? 'please  fill bio ' : bio}{' '}
      </p>

      <Button
        color='primary'
        variant='contained'
        onClick={() => setFollowingToggle(!followingToggle)}
        className='ml-3'
      >
        <span>Following &nbsp;</span> {following.length}
      </Button>
      <Button
        color='secondary'
        variant='contained'
        onClick={() => setFollowersToggle(!profileEditToggle)}
      >
        <span>Followers &nbsp;</span> {followers.length}
      </Button>

      <Button variant='text'>
        {' '}
        {/* <span> Posts &nbsp; </span> {userPosts.length} */}
      </Button>

      <Dialog
        open={followingToggle}
        onClose={() => setFollowingToggle(!followingToggle)}
      >
        <div className='DialogBox'>
          <Typography variant='h4'>Following</Typography>

          {following && following.length > 0 ? (
            following.map(follow => (
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

          {followers && followers.length > 0 ? (
            followers.map(follow => (
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

      {profileEditToggle && (
        <EditProfileModal
          isEditModalOpen={profileEditToggle}
          setIsEditModalOpen={setProfileEditToggle}
          profileData={userDetails}
        />
      )}
    </div>
  )
}
