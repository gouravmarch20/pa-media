import React, { useState } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Dialog,
  Avatar
} from '@mui/material'

import {
  MdThumbUpOffAlt,
  MdThumbUp,
  MdDeleteOutline,
  MdDelete,
  MdBookmarkBorder,
  MdBookmarkAdded
} from 'react-icons/md'
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  DeleteOutline
} from '@mui/icons-material'

import {
  checkLikeHelper,
  checkBookmarkHelper
} from '../../helpers/checkerHelper'
import {
  removeBookmarkPost,
  bookmarkPost,
  likePost,
  dislikePost,
  addComment
} from '../../features/postSlice'
import { useNavigate } from 'react-router-dom'
import CommentCard from '../card/CommentCard'
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
    comments,
    createdAt
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
          <p>
            {' '}
            {firstName} {lastName}
          </p>
        </div>
        <span>@{username}</span>
        <hr />
        <p>{content}</p>
        <div className='postFooter'>
          {/* {isPostAlreadyLiked ? (
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
          )} */}

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
                // comments.map((item, index) => {
                // return (
                // <div key={index}>
                <CommentCard commmentData={comments} />
              ) : (
                // </div>
                // )
                // })

                <Typography>No comments Yet</Typography>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </>
  )
}
