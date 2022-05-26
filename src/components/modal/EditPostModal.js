import React, { useState } from 'react'
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle
} from '@mui/material'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { deletePost, editPost } from '../../features/postSlice'
import { useDispatch, useSelector } from 'react-redux'

export const EditPostModal = ({ postData }) => {
  const [updatePostToggle, setUpdatePostToggle] = useState(false)
  const [postContent, setPostContent] = useState(postData.content)
  const dispatch = useDispatch()
  const postId = postData?._id

  const { token } = useSelector(state => state.auth)

  const editPostHandler = editData => {
    console.log('handler')
    let postData = { ...editData, content: postContent }
    dispatch(editPost({ postData, token }))

    dispatch(setUpdatePostToggle(false))
    setPostContent('')
    setUpdatePostToggle(false)
  }
  return (
    <div>
      <Button
        variant='outlined'
        startIcon={<MdDelete />}
        onClick={() => dispatch(deletePost({ postId, token }))}
      >
        Delete
      </Button>
      <Button
        variant='outlined'
        startIcon={<MdModeEdit />}
        onClick={() => {
          setUpdatePostToggle(!updatePostToggle)
        }}
      >
        Edit
      </Button>

      <Dialog
        open={updatePostToggle}
        onClose={() => setUpdatePostToggle(!updatePostToggle)}
      >
        <div className='flex-column'>
          <DialogTitle>Edit Profile</DialogTitle>

          <input
            type='text'
            name=''
            id=''
            placeholder='edit post'
            value={postContent}
            onChange={e => setPostContent(e.target.value)}
          />
          {console.log(postContent)}
          <DialogActions>
            <Button onClick={() => setUpdatePostToggle(false)}>Cancel</Button>
            <Button
              onClick={() => {
                editPostHandler(postData)
              }}
            >
              Save
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}
