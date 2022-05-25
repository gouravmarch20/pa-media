import React, { useEffect } from 'react'
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
import { Button } from '@mui/material'

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
  console.log(currentUser)

  //   {
  //     "_id": "fe35864a-396c-4fff-90b1-b2b5e8bd8422",
  //     "firstName": "Admin",
  //     "lastName": "Kumar",
  //     "username": "adminkumar",
  //     "email": "adminkumar@gmail.com",
  //     "password": "admin@123",
  //     "createdAt": "2022-05-25T14:33:09+05:30",
  //     "updatedAt": "2022-05-25T14:33:09+05:30",
  //     "avatar": "https://joeschmoe.io/api/v1/jai",
  //     "bio": "Frontend Engineer @Razorpay",
  //     "portfolio": "https://github.com",
  //     "following": [
  //         {
  //             "_id": "6165483c-4174-4d9c-b98e-4ee18ace1284",
  //             "firstName": "Adarsh",
  //             "lastName": "Balika",
  //             "username": "adarshbalika",
  //             "avatar": "https://joeschmoe.io/api/v1/jeane"
  //         },
  //         {
  //             "_id": "cbf1ed92-af42-470c-8d4c-ac5467679774",
  //             "firstName": "Abhishek",
  //             "lastName": "Gautam",
  //             "username": "abhishekgautam",
  //             "avatar": "https://joeschmoe.io/api/v1/james"
  //         }
  //     ],
  //     "followers": [
  //         {
  //             "_id": "248c0d80-75be-493a-bd06-672fbbf12a1c",
  //             "firstName": "Adarsh",
  //             "lastName": "Balika",
  //             "username": "adarshbalika",
  //             "avatar": "https://joeschmoe.io/api/v1/jeane"
  //         }
  //     ],
  //     "bookmarks": [],
  //     "id": "2"
  // }
  return (
    <div className='bg-white profile-align'>
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

          <p>
            {currentUser?.firstName} {currentUser?.lastName}
          </p>
          <p> @ {currentUser?.username} </p>
          <h2> {currentUser?.username} </h2>
          <a href={currentUser?.portfolio} target='_blank'>
            {' '}
            <span> Portfolio : </span> {currentUser?.portfolio}
          </a>
          <p>
            {' '}
            <span>Bio:</span> {currentUser?.bio}{' '}
          </p>
          <Button color='primary'>
            <span>Following &nbsp;</span> {currentUser?.following.length}
          </Button>
          <Button color='secondary'>
            <span>Followers &nbsp;</span> {currentUser?.followers.length}
          </Button>

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
