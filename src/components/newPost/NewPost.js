import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
// import { createNewPost } from '../../Actions/Post'
// import { loadUser } from '../../Actions/User'
import './newPost.css'
export const NewPost = () => {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')

  // const { loading, error, message } = useSelector(state => state.like)
  const dispatch = useDispatch()
  // const alert = useAlert()

  const handleImageChange = e => {
    const file = e.target.files[0]

    const Reader = new FileReader()
    Reader.readAsDataURL(file)

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result)
      }
    }
  }

  const submitHandler = async e => {
    e.preventDefault()
  }

  useEffect(() => {}, [dispatch])

  return (
    <div className='newPost'>
      <form className='newPostForm' onSubmit={submitHandler}>
        <Typography variant='h3'>New Post</Typography>

        {image && <img src={image} alt='post' />}
        <input type='file' accept='image/*' onChange={handleImageChange} />
        <input
          type='text'
          placeholder='Caption...'
          value={caption}
          onChange={e => setCaption(e.target.value)}
        />
        <Button type='submit'>
          {/* best tow dispa */}
          {/* <Button disabled={loading} type='submit'> */}
          Post
        </Button>
      </form>
    </div>
  )
}
