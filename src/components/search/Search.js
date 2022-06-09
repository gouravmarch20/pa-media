import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../features/userSlice'
import { User } from '../index'
import './search.css'
import { Oval } from 'react-loader-spinner'

export const Search = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const [name, setName] = useState()
  const { allUsers, userStatus } = useSelector(state => state.users)
  //FIXME: INITIAL SEARCH --> no user found
  const [userSuggestions, setUserSuggestions] = useState(allUsers)

  useEffect(() => {
    const result = allUsers?.filter(user =>
      user.username.includes(name?.toLowerCase())
    )
    setUserSuggestions(result)
  }, [name, allUsers])

  return (
    <div className='search'>
      <form className='searchForm' onSubmit={e => e.preventDefault()}>
        {userStatus === 'loading' ? (
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
        ) : (
          <>
            <h2 className='heading text-lg'>Pa-media</h2>

            <input
              type='text'
              value={name}
              placeholder='search by username'
              required
              onChange={e => setName(e.target.value)}
              onKeyUp={e => {
                // if (e.key === 'Enter') submitSearch(name)
              }}
            />
            <div className='searchResults'>
              {userSuggestions && userSuggestions.length !== 0 ? (
                userSuggestions.map(user => (
                  <User
                    key={user._id}
                    firstName={user.firstName}
                    username={user.username}
                    avatar={user.avatar}
                  />
                ))
              ) : (
                <>
                  <h2 className='heading text-lg'>No user found</h2>
                </>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  )
}
