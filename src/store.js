import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
// import postReducer from '../features/posts/postSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
    // posts: postReducer
  }
})
