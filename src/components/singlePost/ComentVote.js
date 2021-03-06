import React from 'react'
import {
  BsFillArrowUpCircleFill,
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsFillArrowDownCircleFill
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'

import { Delete } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import './commentVote.css'
import {
  downvoteComment,
  upvoteComment,
  deleteComment
} from '../../features/postSlice'
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

  const isCurrentUserComment = username === userInfo.username

  return (
    <>
      <div className='mt-10 post-home '>
        <div className='flex-row-center-center'>
          <Link to={`/profile/${username}`}>
            <img className='img-avatar-follow' src={avatar} alt='' />
          </Link>
          <div className='cursor-pointer-none'>
            <p className='text-sm content'>@{username}</p>

            <p className='text-sm '>{firstName} </p>
          </div>
        </div>

        <div className='flex-row-center-center'>
          {alreadyUpvoted ? (
            <Button
              onClick={() =>
                dispatch(downvoteComment({ postId, commentId: _id, token }))
              }
            >
              <i className='p-16 btn '>
                <BsFillArrowUpCircleFill />
              </i>

              <span className='text-sm'> {votes?.upvotedBy.length}</span>
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch(upvoteComment({ postId, commentId: _id, token }))
              }
            >
              <i className='p-16 btn '>
                <BsArrowUpCircle />{' '}
              </i>
              <span> {votes?.upvotedBy.length}</span>
            </Button>
          )}
          <p
            className='  text-sm text-center '
            style={{
              width: '50vmin'
            }}
          >
            {text}
          </p>
          {alreadyDownvoted ? (
            <Button
              onClick={() =>
                dispatch(upvoteComment({ postId, commentId: _id, token }))
              }
            >
              {' '}
              <i className='p-16 btn '>
                <BsFillArrowDownCircleFill />
              </i>
              <span className='text-sm '> {votes?.downvotedBy.length}</span>
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch(downvoteComment({ postId, commentId: _id, token }))
              }
            >
              {' '}
              <i className='p-16 btn'>
                <BsArrowDownCircle />
              </i>
              <span> {votes?.downvotedBy.length}</span>
            </Button>
          )}

          {isCurrentUserComment && (
            <Button
              variant='text'
              size='small'
              onClick={() => {
                dispatch(deleteComment({ postId, commentId: _id, token }))
              }}
            >
              <Delete />
            </Button>
          )}
        </div>

        <hr />
      </div>
    </>
  )
}
