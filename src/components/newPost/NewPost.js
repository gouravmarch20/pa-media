import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewPost, editPost } from '../../features/postSlice'
import { getAllUsers } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'

import './newPost.css'
export const NewPost = ({ editPostData }) => {
  const navigate = useNavigate()

  const [postContent, setPostContent] = useState({
    content: editPostData?.content || ''
  })

  const { token } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const dispatch = useDispatch()

  const createPostHandler = () => {
    let postData = postContent
    dispatch(createNewPost({ postData, token }))
    setPostContent({ content: '' })
    navigate('/')
  }

  // const editPostHandler = () => {
  //   let postData = { ...editPostData, content: postContent.content }
  //   dispatch(editPost({ postData, token }))
  //   setPostContent({ content: '' })
  // }

  const submitHandler = async e => {
    e.preventDefault()
  }

  return (
    <div className='newPost'>
      <form className='newPostForm' onSubmit={submitHandler}>
        <Typography variant='h3'>New Post</Typography>
        <input
          type='text'
          placeholder='enter content...'
          value={postContent.content}
          onChange={e => setPostContent({ content: e.target.value })}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={postContent.content === ''}
          onClick={() => createPostHandler()}
        >
          Post
        </Button>
      </form>
    </div>
  )
}
