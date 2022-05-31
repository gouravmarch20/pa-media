import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../features/userSlice'
import { User } from '../index'
import './search.css'

export const Search = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const [name, setName] = useState()
  const { allUsers, userStatus } = useSelector(state => state.users)
  console.log(userStatus)

  const [userSuggestions, setUserSuggestions] = useState(allUsers)

  const submitHandler = e => {
    e.preventDefault()
  }
  const userSuggestion = () => {
    const suggestions = []
    allUsers?.forEach(user => {
      if (user.username.includes(name?.toLowerCase())) {
        suggestions.push(user)
      }
    })
    setUserSuggestions(suggestions)
  }
  const handleChange = e => {
    setName(e.target.value)

    userSuggestion()
  }
  return (
    <div className='search'>
      <form className='searchForm' onSubmit={submitHandler}>
        <h2 className='heading text-lg'>Pa-media</h2>

        <input
          type='text'
          value={name}
          placeholder='search by username'
          required
          onChange={e => {
            handleChange(e)
          }}
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
      </form>
    </div>
  )
}
