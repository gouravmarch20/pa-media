import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase
} from '@mui/material'
import {
  MdThumbUpOffAlt,
  MdThumbUp,
  MdDeleteOutline,
  MdDelete,
  MdBookmarkBorder,
  MdBookmarkAdded
} from 'react-icons/md'

import { useSelector, useDispatch } from 'react-redux'

import {
  checkLikeHelper,
  checkBookmarkHelper
} from '../../helpers/checkerHelper'

export const HomePost = ({ postData }) => {
  const { userInfo, token } = useSelector(state => state.auth)
  const { bookmarkPosts } = useSelector(state => state.posts)

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
    <div>
      <h1>sdaf</h1>
      <p>
        {' '}
        {firstName} {lastName}
      </p>
      <span>@{username}</span>
      <hr />
      <p>{content}</p>
      <div>{isPostAlreadyLiked ? <MdThumbUp /> : <MdThumbUpOffAlt />}</div>
      <div>
        {isPostAlreadyBookmarked ? <MdBookmarkBorder /> : <MdBookmarkAdded />}
      </div>
      <div>
        {/* comment componnet as modal */}
      </div>
    </div>
  )
}
