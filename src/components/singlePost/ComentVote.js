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
import './commentVote.css'
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
      <div className='mt-1'>
        <div className='flex-row-center-center'>
          <img className='img-avatar-follow' src={avatar} alt='' />
          <div className=''>
            <h5>@{username}</h5>
            <p>{firstName} </p>
          </div>
        </div>

   

        <div className='flex-row-center-center'>
          {alreadyUpvoted ? (
            <Button
              onClick={() =>
                dispatch(downvoteComment({ postId, commentId: _id, token }))
              }
            >
              <BsFillArrowUpCircleFill className='btn' />
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch(upvoteComment({ postId, commentId: _id, token }))
              }
            >
              <BsArrowUpCircle className='btn' />
            </Button>
          )}
          {alreadyDownvoted ? (
            <Button
              onClick={() =>
                dispatch(upvoteComment({ postId, commentId: _id, token }))
              }
            >
              <BsFillArrowDownCircleFill className='btn' />
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch(downvoteComment({ postId, commentId: _id, token }))
              }
            >
              <BsArrowDownCircle className='btn' />
            </Button>
          )}
        </div>
        <hr />
      </div>
    </>
  )
}
