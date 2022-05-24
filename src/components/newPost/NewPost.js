import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { createNewPost, editPost } from '../../features/postSlice'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'

import './newPost.css'
export const NewPost = ({ editPostData }) => {
  const navigate = useNavigate()

  const [postContent, setPostContent] = useState({
    content: editPostData?.content || ''
  })

  const { token, userInfo } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  const { allUsers } = useSelector(state => state.users)

  const dispatch = useDispatch()

  const createPostHandler = () => {
    console.log('createPostHandler')
    let postData = postContent
    dispatch(createNewPost({ postData, token }))
    setPostContent({ content: '' })
    navigate('/')
  }

  const editPostHandler = () => {
    console.log('handler')
    let postData = { ...editPostData, content: postContent.content }
    dispatch(editPost({ postData, token }))
    setPostContent({ content: '' })
  }
  const currentUser = allUsers?.find(
    user => user.username === userInfo.username
  )
  // const handleImageChange = e => {
  //   const file = e.target.files[0]

  //   const Reader = new FileReader()
  //   Reader.readAsDataURL(file)

  //   Reader.onload = () => {
  //     if (Reader.readyState === 2) {
  //       setImage(Reader.result)
  //     }
  //   }
  // }

  const submitHandler = async e => {
    e.preventDefault()
  }

  return (
    <div className='newPost'>
      <form className='newPostForm' onSubmit={submitHandler}>
        <Typography variant='h3'>New Post</Typography>

        {/* {image && <img src={image} alt='post' />}
        <input type='file' accept='image/*' onChange={handleImageChange} /> */}
        <input
          type='text'
          placeholder='enter content...'
          value={postContent.content}
          onChange={e => setPostContent({ content: e.target.value })}
        />
        <Button
          type='submit'
          disabled={postContent.content === ''}
          onClick={editPostData ? editPostHandler : createPostHandler}
        >
          {/* <Button disabled={loading} type='submit'> */}
          Post
        </Button>
      </form>
    </div>
  )
}
