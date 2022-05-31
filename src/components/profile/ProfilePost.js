import React, { useEffect, useState } from 'react'
import { Button, Typography, Dialog } from '@mui/material'

import {
  MdThumbUpOffAlt,
  MdThumbUp,
  MdBookmarkBorder,
  MdBookmarkAdded
} from 'react-icons/md'
import { ChatBubbleOutline } from '@mui/icons-material'

import { checkLikeHelper } from '../../helpers/checkerHelper'
import {
  removeBookmarkPost,
  bookmarkPost,
  likePost,
  dislikePost,
  addComment
} from '../../features/postSlice'
import CommentCard from '../card/CommentCard'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

export const ProfilePost = ({ userpost }) => {
  const [commentToggle, setCommentToggle] = useState(false)
  const { userInfo, token } = useSelector(state => state.auth)
  const { bookmarkPosts } = useSelector(state => state.posts)
  const [commentData, setCommentData] = useState({ text: '' })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    _id,
    id,
    firstName,
    lastName,
    username,
    avatar,
    content,
    likes,
    comments
  } = userpost

  const addCommentHandler = e => {
    e.preventDefault()
    dispatch(addComment({ postId: _id, commentData, token }))
    setCommentData({ text: '' })
    // commentToggle(false)
    navigate(`/post/${id}`)
  }
  // FIXME: NOT WOKING

  const isPostAlreadyLiked = checkLikeHelper(likes.likedBy, userInfo)

  const isPostAlreadyBookmarked = bookmarkPosts?.find(
    bookmarkPostId => bookmarkPostId === _id
  )
  return (
    <>
      <div className='post'>
        <div className='postHeader'>
          <Link to={`/profile/${username}`} className='mr-auto'>
            <img src={avatar} className='img-avatar-follow ' />{' '}
          </Link>
          <p>
            {' '}
            {firstName} {lastName}
            <Link to={`/profile/${username}`}>
              <p>@{username}</p>{' '}
            </Link>
          </p>
        </div>

        <hr />
        <p className='post-content'>{content}</p>
        <div className='postFooter'>
          {isPostAlreadyLiked ? (
            <Button>
              <MdThumbUp
                onClick={() => dispatch(dislikePost({ postId: _id, token }))}
              />
            </Button>
          ) : (
            <Button>
              <MdThumbUpOffAlt
                onClick={() => dispatch(likePost({ postId: _id, token }))}
              />
            </Button>
          )}

          {isPostAlreadyBookmarked ? (
            <Button>
              {' '}
              <MdBookmarkAdded
                onClick={() =>
                  dispatch(removeBookmarkPost({ postId: _id, token }))
                }
              />{' '}
            </Button>
          ) : (
            <Button>
              <MdBookmarkBorder
                onClick={() => {
                  dispatch(bookmarkPost({ postId: _id, token }))
                }}
              />
            </Button>
          )}

          <Button onClick={() => setCommentToggle(!commentToggle)}>
            <ChatBubbleOutline />
          </Button>
          {/* comment componnet as modal */}
          <Dialog
            open={commentToggle}
            onClose={() => setCommentToggle(!commentToggle)}
          >
            <div className='DialogBox'>
              <Typography variant='h4'>Comments</Typography>

              <form className='commentForm' onSubmit={addCommentHandler}>
                <input
                  type='text'
                  value={commentData.text}
                  onChange={e => setCommentData({ text: e.target.value })}
                  placeholder='Comment Here...'
                  required
                />

                <Button type='submit' variant='contained'>
                  Add
                </Button>
              </form>
              {/* ADD KEY */}

              {comments?.length > 0 ? (
                <CommentCard commmentData={comments} />
              ) : (
                <Typography>No comments Yet</Typography>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </>
  )
}
