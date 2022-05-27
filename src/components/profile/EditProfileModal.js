import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Dialog,
  Typography,
  DialogActions,
  DialogTitle,
  Input,
  TextField,
  IconButton
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfile, getAllUsers } from '../../features/userSlice'

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
        className=' profile-modal-align'
      >
        <div>
          <DialogTitle class='subheading'>Edit Profile</DialogTitle>

          <form className='commentForm'>
            <Input
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              placeholder='Update image'
              onChange={e => setUploadImgFile(e.target.files[0])}
            />

            <div className='mt-16 flex-column-center-center '>
              <label htmlFor='bio' className='mt-10'>
                <span className='content text-center'> Bio :</span>
                <TextField
                  id='bio'
                  label='enter your bio'
                  placeholder='bio'
                  multiline
                  type='text'
                  // className='input-item'
                  value={editProfileData.bio}
                  placeholder='enter portfolio detail'
                  onChange={e =>
                    setEditProfileData({
                      ...editProfileData,
                      bio: e.target.value
                    })
                  }
                />
              </label>
              <label htmlFor='portfolio ' className='mt-10'>
                Portfolio
                <TextField
                  id='portfolio'
                  label='enter  portfolio detail'
                  placeholder='portfolio'
                  multiline
                  type='text'
                  className='input-item'
                  value={editProfileData.portfolio}
                  onChange={e =>
                    setEditProfileData({
                      ...editProfileData,
                      portfolio: e.target.value
                    })
                  }
                />
              </label>
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
