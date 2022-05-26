import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'
export const User = ({ firstName, username, avatar, setModalClose }) => {
  return (
    <Link to={`/profile/${username}`} className='homeUser '>
      <img src={avatar} alt={'no img'} />
      <Typography>{firstName}</Typography>
    </Link>
  )
}
