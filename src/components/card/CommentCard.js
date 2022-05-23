import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './commentCard.css'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
// import { deleteCommentOnPost } from '../../Actions/Post'
// import { getFollowingPosts, getMyPosts } from '../../Actions/User'

const CommentCard = ({
  userId,
  name,
  avatar,
  comment,
  commentId,
  postId,
  isAccount
}) => {
//   const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

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
      <Link to={`/user/$1`}>
        <img src='./' alt={'avatar'} />
        <Typography style={{ minWidth: '6vmax' }}>name</Typography>
      </Link>
      <Typography>comment</Typography>

      {true ? (
        <Delete />
      ) : //     <Button onClick={deleteCommentHandle}>
      //     </Button>
      //   ) : userId === user._id ? (
      //     <Button onClick={deleteCommentHandle}>
      //       <Delete />
      //     </Button>
      //   )
      null}
    </div>
  )
}

export default CommentCard
