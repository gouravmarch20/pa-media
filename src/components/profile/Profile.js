
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSingleUser,
  getUserPostsByUsername,
  resetUserProfile
} from '../../features/userSlice'
import { getAllUsers } from '../../features/userSlice'
import { ProfilePost } from './ProfilePost'
export const Profile = () => {
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
    <div>
      {currentUser && (
        <div>
          <h2>
            {' '}
            {currentUser?.firstName} {currentUser?.lastName}
          </h2>
          <h2> {currentUser?.username} </h2>
          <h2> {currentUser?.avatar} </h2>
          <h2> {currentUser?.bio} </h2>
          <h2> {currentUser?.followers.length} </h2>
          <h2> {currentUser?.following.length} </h2>
          {/* {console.log(userPosts)} */}
          <div className='posts'>
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
        </div>
      )}
    </div>
  )
}
