import {  Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './commentCard.css'

const CommentCard = ({ commmentData }) => {


  return (
    <div className='commentUser'>
      {commmentData.map((comment, index) => {
        const { firstName, avatar, text, username } = comment

        return (
          <div className='commentUser' key={index}>
            <Link to={`/profile/${username}`}>
              <img src={avatar} alt={'avatar'} />

              <Typography style={{ minWidth: '6vmax' }}>{firstName}</Typography>
            </Link>
            <div className='commentUser-text'>
              <span className=''>{text}</span>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default CommentCard
