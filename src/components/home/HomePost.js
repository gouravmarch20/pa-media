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
import './css/homePost.css'
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
import { useSelector, useDispatch } from 'react-redux'

import {
  checkLikeHelper,
  checkBookmarkHelper
} from '../../helpers/checkerHelper'
import { likePost, dislikePost } from '../../features/postSlice'
// import CommentCard from '../card/CommentCard'

export const HomePost = ({ postData }) => {
  const [commentToggle, setCommentToggle] = useState(false)
  const { userInfo, token } = useSelector(state => state.auth)
  const { bookmarkPosts } = useSelector(state => state.posts)
  const addCommentHandler = () => {
    ''
  }
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
  } = postData
  const isPostAlreadyLiked = checkLikeHelper(likes.likedBy, userInfo)
  const isPostAlreadyBookmarked = checkBookmarkHelper(_id, bookmarkPosts)
  return (
    <div className='post'>
      <div className='postHeader'>
        <h1>sdaf</h1>
        <p>
          {' '}
          {firstName} {lastName}
        </p>
      </div>
      <span>@{username}</span>
      <hr />
      <p>{content}</p>

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

        {/* {isPostAlreadyBookmarked ? (
          <Button>
            {' '}
            <MdBookmarkAdded
              onClick={() => dispatch(likePost({ postId: _id, token }))}
            />{' '}
            <Favorite style={{ color: 'red' }} />
          </Button>
        ) : (
          <Button>
            <MdBookmarkBorder
              onClick={() => dispatch(likePost({ postId: _id, token }))}
            />
          </Button>
        )} */}

        {/* <Button onClick={() => setCommentToggle(!commentToggle)}>
          <ChatBubbleOutline />
        </Button> */}
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
                // value={commentValue}
                // onChange={e => setCommentValue(e.target.value)}
                placeholder='Comment Here...'
                required
              />

              <Button type='submit' variant='contained'>
                Add
              </Button>
            </form>
            {/* ADD KEY */}
            {/* {comments?.length > 0 ? (
              comments.map(item  => (
                <CommentCard
                
                />
              ))
            ) : (
              <Typography>No comments Yet</Typography>
            )} */}
          </div>
        </Dialog>
      </div>
    </div>
  )
}
