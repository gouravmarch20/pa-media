import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import { HomePost } from '../index'
import { getSortedPosts } from '../../helpers'

import {
  getSingleUser,
  getUserPostsByUsername,
  resetUserProfile
} from '../../features/userSlice'
import { getAllUsers } from '../../features/userSlice'
import { PostCard } from '../card/PostCard'
import './profile.css'
import { ProfileDetails } from './ProfileDetails'

export const Profile = () => {
  const { username } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const { allPosts } = useSelector(state => state.posts)
  const { userInfo } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getUserPostsByUsername({ username }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, allPosts])
  const currentUser = allUsers?.find(
    user => user.username === singleUser?.username
  )
  const sortedUserPosts = getSortedPosts(userPosts)

  return (
    <div className=''>
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
      {console.log(currentUser)}
      {userStatus !== 'loading' && currentUser && (
        <div>
          <ProfileDetails userDetails={currentUser} />
       <div className='profile-posts'>
            {sortedUserPosts && sortedUserPosts.length > 0 ? (
              sortedUserPosts.map((userpost, id) => {
                return (
                  <div key={id}>
                    <HomePost postData={userpost} />
                  </div>
                )
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
