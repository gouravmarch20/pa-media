import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllUsers } from '../../features/userSlice'
import { FollowOtherCard } from './FollowOtherCard'
import './css/followOther.css'
export const FollowOther = () => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector(state => state.auth)
  const { allUsers } = useSelector(state => state.users)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const currentUser = allUsers?.find(
    user => user.username === userInfo.username
  )
  const followOtherSuggestion = allUsers
    ?.filter(
      user =>
        !currentUser?.following.find(
          followedUser => followedUser.username === user?.username
        )
    )
    ?.filter(user => user.username !== userInfo?.username)
  return (
    <div>
      <h2>Other to follow</h2>
      {followOtherSuggestion && followOtherSuggestion?.length !== 0 ? (
        <>
          {followOtherSuggestion.map((user, id) => {
            return (
              <div key={id} className="bg-red">
                <FollowOtherCard userData={user} />
              </div>
            )
          })}
        </>
      ) : (
        <>
          <h1>No suggestion found</h1>
        </>
      )}
    </div>
  )
}
