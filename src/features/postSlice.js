import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

import { getAllPostsService } from '../services'
import { dislikePostService, likePostService } from '../services/postsServices'
const initialState = {
  allPosts: [],
  singlePost: {},
  userPosts: [],
  bookmarkPosts: [],
  postStatus: 'idle',
  postError: null,
  isPostModalOpen: false,
  editPostData: {}
}
export const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllPostsService()
      return response.data.posts
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const likePost = createAsyncThunk(
  'posts/likePost',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await likePostService(postId, token)
      return response.data.posts
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const dislikePost = createAsyncThunk(
  'posts/dislikePost',
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await dislikePostService(postId, token)
      return response.data.posts
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: state => {
      state.postStatus = 'loading'
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.postStatus = 'success'
      state.allPosts = payload
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.postStatus = 'failed'
      state.postError = payload.errors
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload
      toast.success('You liked the post')
    },
    [likePost.rejected]: (state, { payload }) => {
      state.postError = payload
      toast.error('Some error occured. Try Again.')
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload
      toast.success('You disliked the post')
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.postError = payload
      toast.error('Some error occured. Try Again.')
    }
  }
})
export default postSlice.reducer
