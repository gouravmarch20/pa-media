import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Dialog,
  Typography,
  DialogActions,
  DialogTitle,
  Input,
  IconButton
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfile, getAllUsers } from '../../features/userSlice'

import Stack from '@mui/material/Stack'

export const EditProfileModal = ({
  profileData,
  setIsEditModalOpen,
  isEditModalOpen
}) => {
  const [editProfileData, setEditProfileData] = useState({
    bio: profileData?.bio,
    portfolio: profileData?.portfolio
  })
  const [uploadImgFile, setUploadImgFile] = useState('')
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  const saveProfileDataHandler = () => {
    if (uploadImgFile) {
      console.log('upload')
      const file = uploadImgFile
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch(
            editUserProfile({
              userData: {
                bio: editProfileData.bio,
                portfolio: editProfileData.portfolio,
                avatar: reader.result
              },
              token
            })
          )
          dispatch(getAllUsers())
        }
      }
    } else {
      console.log('kkk')
      dispatch(
        editUserProfile({
          userData: {
            bio: editProfileData.bio,
            portfolio: editProfileData.portfolio
          },
          token
        })
      )
      dispatch(getAllUsers())
    }
    setIsEditModalOpen(false)
  }
  return (
    <div>
      <Dialog
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(!isEditModalOpen)}
      >
        <div className='flex-column'>
          <DialogTitle>Edit Profile</DialogTitle>

          <form className='commentForm' className='flex-column-center-center'>
            <Stack direction='row' alignItems='center' spacing={2}>
              <label htmlFor='contained-button-file'>
                <Input
                  accept='image/*'
                  id='contained-button-file'
                  multiple
                  type='file'
                  placeholder='Update image'
                  onChange={e => setUploadImgFile(e.target.files[0])}
                />

                <Button variant='contained' component='span'>
                  Upload
                </Button>
              </label>
            </Stack>

            <div>
              <input
                type='text'
                value={editProfileData.portfolio}
                onChange={e =>
                  setEditProfileData({
                    ...editProfileData,
                    portfolio: e.target.value
                  })
                }
              />
              <input
                type='text'
                value={editProfileData.bio}
                placeholder='Bio'
                onChange={e =>
                  setEditProfileData({
                    ...editProfileData,
                    bio: e.target.value
                  })
                }
              />
            </div>
          </form>
          <DialogActions>
            <Button onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
            <Button
              onClick={() => (
                saveProfileDataHandler(), setIsEditModalOpen(false)
              )}
            >
              Save
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}
