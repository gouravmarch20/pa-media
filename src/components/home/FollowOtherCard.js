import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { followUser } from '../../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export const FollowOtherCard = ({ userData }) => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  const { avatar, firstName, username } = userData
  return (
    <div className=''>
      <div className='display-flex-row'>
        <Link to={`/profile/${userData?.username}`}>
          <>
            <img src={avatar} className='img-avatar-follow' alt='avatar' />
          </>
          <div className='flex-column-center-center'>
            <p>{firstName}</p>
            <p>@{username}</p>
          </div>
        </Link>

        <Button
          onClick={() =>
            dispatch(followUser({ followUserId: userData?._id, token }))
          }
          className='follow-other-btn'
        >
          <div>Follow</div>
        </Button>
      </div>
    </div>
  )
}
