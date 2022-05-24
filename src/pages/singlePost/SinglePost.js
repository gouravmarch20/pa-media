import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../features/postSlice'
import { ComentVote } from './ComentVote'
import './commentVote.css'
export const SinglePost = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { singlePost, singlePostStatus, allPosts } = useSelector(
    state => state.posts
  )

  useEffect(() => {
    dispatch(getSinglePost(postId))
  }, [postId])
  const currentPost = allPosts?.find(post => post.id === postId)
  const updatedPost = currentPost ?? singlePost

  // const updatedPost = currentPost ?? singlePost;
  return (
    <div>
      SinglePost
      {singlePostStatus === 'success' && (
        <>
          <h2>{singlePost?.content}</h2>
          {/* <img src={singlePost?.avatar} alt='' /> */}
          <p> {singlePost?.username}</p>
          {/* <img src={singlePost?.firstName} alt='' /> */}
          <p> {singlePost?.firstName}</p>
          {updatedPost.comments.map(comment => {
            return (
              <div key={comment._id}>
                <ComentVote commentData={comment} postId={updatedPost._id} />
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
