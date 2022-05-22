import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { getAllPostsService } from '../services'

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
      console.log(response)
      return response.data.posts
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //   setPostModalOpen: (state, { payload }) => {
    //     state.isPostModalOpen = payload.isOpen;
    //     state.editPostData = payload.editPostData;
    //   },
  },
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
    }
  }
})
export default postSlice.reducer
