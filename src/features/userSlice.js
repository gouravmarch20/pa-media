import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

import {
  editUserProfileService,
  followUserService,
  getAllUsersService,
  getPostByUsernameService,
  getSingleUserService,
  unfollowUserService
} from '../services'

const initialState = {
  allUsers: [],
  singleUser: {},
  userPosts: [],
  userStatus: 'idle',
  userError: null,
  isPostModalOpen: false,
  editUserData: {}
}
export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersService()
      return response.data.users
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
export const getUserPostsByUsername = createAsyncThunk(
  'users/getUserPostsByUsername',
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await getPostByUsernameService(username)
      return response.data.posts
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
export const getSingleUser = createAsyncThunk(
  'users/getSingleUser',
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await getSingleUserService(username)
      return response.data.user
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUserProfile: state => {
      state.singleUser = {}
      state.userPosts = []
    }
  },
  extraReducers: {
    [getAllUsers.pending]: state => {
      state.userStatus = 'loading'
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.userStatus = 'success'
      state.allUsers = payload
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.userStatus = 'failed'
      state.userError = payload.errors
    },
    [getSingleUser.pending]: state => {
      state.singleUserStatus = 'loading'
    },
    [getSingleUser.fulfilled]: (state, { payload }) => {
      state.singleUserStatus = 'success'
      state.singleUser = payload
    },
    [getSingleUser.rejected]: (state, { payload }) => {
      state.singleUserStatus = 'failed'
      state.userError = payload.errors
    },
    [getUserPostsByUsername.pending]: state => {
      state.userPostsStatus = 'loading'
    },
    [getUserPostsByUsername.fulfilled]: (state, { payload }) => {
      state.userPostsStatus = 'success'
      state.userPosts = payload
    },
    [getUserPostsByUsername.rejected]: (state, { payload }) => {
      state.userPostsStatus = 'failed'
      state.userPostsError = payload.errors
    }
  }
})
export const { resetUserProfile } = userSlice.actions
export default userSlice.reducer
