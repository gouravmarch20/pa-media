import React, { useState } from 'react'
import {
  Button,
  TextareaAutosize,
  Dialog,
  DialogActions,
  DialogTitle
} from '@mui/material'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { deletePost, editPost } from '../../features/postSlice'
import { useDispatch, useSelector } from 'react-redux'

export const EditPostModal = ({ postData, setEditPostToggle }) => {
  const [updatePostToggle, setUpdatePostToggle] = useState(false)
  const [postContent, setPostContent] = useState(postData.content)
  const dispatch = useDispatch()
  const postId = postData?._id

  const { token } = useSelector(state => state.auth)
  const editPostHandler = editData => {
    let postData = { ...editData, content: postContent }
    dispatch(editPost({ postData, token }))

    setPostContent('')
    setUpdatePostToggle(false)
    setEditPostToggle(false)
  }
  return (
    <div>
      <Button
        variant='outlined'
        startIcon={<MdDelete />}
        onClick={() =>
          dispatch(deletePost({ postId, token }), setEditPostToggle(false))
        }
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
        onClose={() => (
          setUpdatePostToggle(!updatePostToggle), setEditPostToggle(false)
        )}
      >
        <div className='flex-column'>
          <DialogTitle>Edit Profile</DialogTitle>
          <TextareaAutosize
            aria-label='minimum height'
            // maxRows={4}
            value={postContent}
            placeholder='edit post'
            style={{ width: 400 }}
            onChange={e => setPostContent(e.target.value)}
          />

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
