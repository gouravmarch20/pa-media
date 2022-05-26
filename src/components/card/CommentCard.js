import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './commentCard.css'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'

const CommentCard = ({ commmentData }) => {
  //   const { user } = useSelector(state => state.user)

  const deleteCommentHandle = () => {
    // dispatch(deleteCommentOnPost(postId, commentId))

    if (true) {
      //   dispatch(getMyPosts())
    } else {
      //   dispatch(getFollowingPosts())
    }
  }

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
            <div>
              <span className='content text-xmd mr-10'>{text}</span>
            </div>
          </div>
        )
      })}

      {/* // : userId === user._id ? ( //{' '}
      <Button onClick={'deleteCommentHandle'}>
        // <Delete />
        //{' '}
      </Button>
      // ) : null} */}
    </div>
  )
}

export default CommentCard
