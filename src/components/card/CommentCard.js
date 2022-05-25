import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './commentCard.css'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
// import { deleteCommentOnPost } from '../../Actions/Post'
// import { getFollowingPosts, getMyPosts } from '../../Actions/User'

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
      {/* {console.log(commmentData)} */}
      {commmentData.map((comment, index) => {
        const { firstName, avatar, text, username } = comment

        return (
          <>
            <Link to={`/profile/${username}`} key={index}>
              <img src={avatar} alt={'avatar'} />
              <Typography style={{ minWidth: '6vmax' }}>{firstName}</Typography>
              <Typography>{text}</Typography>
            </Link>
          </>
        )
      })}

      {/* <Typography>{text}</Typography> */}

      {/* {true ? (
        <Delete />
      ) : 
          <Button onClick={deleteCommentHandle}>
        </Button>
        ) : userId === user._id ? (
          <Button onClick={deleteCommentHandle}>
            <Delete />
          </Button>
        )
      null} */}
    </div>
  )
}

export default CommentCard
