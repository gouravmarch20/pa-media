import React from 'react'
import {
  BsFillArrowUpCircleFill,
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsFillArrowDownCircleFill
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material'
import { downvoteComment, upvoteComment } from '../../features/postSlice'
export const ComentVote = ({ commentData, postId }) => {
  const dispatch = useDispatch()

  const { _id, avatar, firstName, text, username, votes } = commentData
  const { token, userInfo } = useSelector(state => state.auth)

  const alreadyUpvoted = votes.upvotedBy?.find(
    user => user.username === userInfo.username
  )
  const alreadyDownvoted = votes.downvotedBy?.find(
    user => user.username === userInfo.username
  )

  return (
    <>
      <hr />
      <h5>{username}</h5>
      <h3>{text} </h3>
      <p>{firstName} </p>
      {alreadyUpvoted ? (
        <Button>
          <BsFillArrowUpCircleFill
            onClick={() =>
              dispatch(downvoteComment({ postId, commentId: _id, token }))
            }
          />
        </Button>
      ) : (
        <Button>
          <BsArrowUpCircle
            onClick={() =>
              dispatch(upvoteComment({ postId, commentId: _id, token }))
            }
          />
        </Button>
      )}
      {alreadyDownvoted ? (
        <Button>
          <BsFillArrowDownCircleFill
            onClick={() =>
              dispatch(upvoteComment({ postId, commentId: _id, token }))
            }
          />
        </Button>
      ) : (
        <Button>
          <BsArrowDownCircle
            onClick={() =>
              dispatch(downvoteComment({ postId, commentId: _id, token }))
            }
          />
        </Button>
      )}
      <hr />
    </>
  )
}
