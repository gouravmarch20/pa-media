import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getAllUsers } from '../../Actions/User'
// import User from '../User/User'
import './search.css'

export const Search = () => {
  const [name, setName] = useState()

  const submitHandler = e => {
    e.preventDefault()
  }
  return (
    <div className='search'>
      <form className='searchForm' onSubmit={submitHandler}>
        <Typography variant='h3' style={{ padding: '2vmax' }}>
          Social Aap
        </Typography>

        <input
          type='text'
          value={name}
          placeholder='Name'
          required
          onChange={e => setName(e.target.value)}
        />

        {/* <Button disabled={loading} type='submit'> */}
        <Button type='submit'>Search</Button>
        {/* FIXME */}
        {/* <div className='searchResults'>
          {users &&
            users.map(user => (
              <User
                key={user._id}
                userId={user._id}
                name={user.name}
                avatar={user.avatar?.url}
              />
            ))}
        </div> */}
      </form>
    </div>
  )
}
