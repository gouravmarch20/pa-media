import axios from 'axios'

export const getAllPostsService = () => axios.get('/api/posts')

export const getSinglePostService = postId => axios.get(`/api/posts/${postId}`)

export const getPostByUsernameService = username =>
  axios.get(`/api/posts/user/${username}`)

export const createNewPostService = (postData, token) =>
  axios.post(
    '/api/posts',
    { postData },
    {
      headers: {
        authorization: token
      }
    }
  )

export const deletePostService = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token
    }
  })

export const editPostService = (postData, token) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    {
      headers: {
        authorization: token
      }
    }
  )

export const likePostService = (postId, token) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  )

export const dislikePostService = (postId, token) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  )

export const getAllCommentsService = postId =>
  axios.get(`/api/comments/${postId}`)

export const addCommentService = (postId, commentData, token) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData
    },
    {
      headers: {
        authorization: token
      }
    }
  )

export const deleteCommentService = (postId, commentId, token) =>
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  )

