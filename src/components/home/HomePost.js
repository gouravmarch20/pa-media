import React, { useState } from 'react'
import { Button, Typography, Dialog } from '@mui/material'
import { EditPostModal } from '../index'
import './css/homePost.css'
import {
  MdThumbUpOffAlt,
  MdThumbUp,
  MdBookmarkBorder,
  MdBookmarkAdded
} from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'

import { ChatBubbleOutline } from '@mui/icons-material'

import { useSelector, useDispatch } from 'react-redux'

import { checkLikeHelper } from '../../helpers/checkerHelper'
import {
  removeBookmarkPost,
  bookmarkPost,
  likePost,
  dislikePost
} from '../../features/postSlice'
import CommentCard from '../card/CommentCard'
import { addComment } from '../../features/postSlice'
import { Link, useNavigate } from 'react-router-dom'

export const HomePost = ({ postData, homeposts }) => {
  const [commentToggle, setCommentToggle] = useState(false)
  const [editPostToggle, setEditPostToggle] = useState(false)
  const { userInfo, token } = useSelector(state => state.auth)
  const { bookmarkPosts } = useSelector(state => state.posts)
  const [commentData, setCommentData] = useState({ text: '' })
  const isLoginUserPost = postData.username === userInfo.username

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
  } = postData

  const addCommentHandler = e => {
    e.preventDefault()
    dispatch(addComment({ postId: _id, commentData, token }))
    setCommentData({ text: '' })
    navigate(`/post/${id}`)
  }

  const isPostAlreadyLiked = checkLikeHelper(likes.likedBy, userInfo)

  const isPostAlreadyBookmarked = bookmarkPosts?.find(
    bookmarkPostId => bookmarkPostId === _id
  )

  return (
    <div className='post post-home'>
      <div className='postHeader'>
        <Link to={`/profile/${username}`} className=''>
          <img src={avatar} className='img-avatar-follow ' />{' '}
        </Link>

        <div>
          {' '}
          <Link to={`/profile/${username}`} className=''>
            {firstName} {lastName}
          </Link>
          <div>@{username}</div>
        </div>
        {isLoginUserPost && (
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setEditPostToggle(!editPostToggle)}
          >
            <BsThreeDots className='relative' />
          </Button>
        )}
      </div>
      <hr />
      <p className='post-content' onClick={() => navigate(`/post/${id}`)}>
        {content}
      </p>

      <div className='postFooter'>
        {isPostAlreadyLiked ? (
          <>
            <Button>
              <MdThumbUp
                onClick={() => dispatch(dislikePost({ postId: _id, token }))}
              />
            </Button>
            <span>{likes?.likeCount} </span>
          </>
        ) : (
          <>
            <Button>
              <MdThumbUpOffAlt
                onClick={() => dispatch(likePost({ postId: _id, token }))}
              />
            </Button>
            <span>{likes?.likeCount} </span>
          </>
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
      <div>
        <Dialog
          className='absolure'
          open={editPostToggle}
          onClose={() => setEditPostToggle(!setEditPostToggle)}
        >
          <EditPostModal postData={postData} />
        </Dialog>
      </div>
    </div>
  )
}
