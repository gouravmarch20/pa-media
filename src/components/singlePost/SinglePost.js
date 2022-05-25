import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../features/postSlice'
import { ComentVote } from './ComentVote'
import './singlePost.css'
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
    <div className='singlePost'>
      {singlePostStatus === 'success' && (
        <>
          <div className='flex-row-center-center'>
            <div>
              <img
                className='singlePostAvatar'
                src={singlePost?.avatar}
                alt=''
              />
            </div>
            <div>
              <p> {singlePost?.firstName}</p>
              <p>@ {singlePost?.username}</p>
            </div>
          </div>

          <p className='post-content'>{singlePost?.content}</p>
          <hr />
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
