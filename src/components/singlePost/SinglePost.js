import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

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
              <Link to={`/profile/${singlePost?.username}`}>
                <img
                  className='singlePostAvatar'
                  src={singlePost?.avatar}
                  alt=''
                />
              </Link>
            </div>
            <div>
              <p> {singlePost?.firstName}</p>
              <p>@ {singlePost?.username}</p>
            </div>
          </div>

          <p className='post-content cursor-pointer-none'>
            {singlePost?.content}
          </p>
          <hr />
          {updatedPost.comments.map(comment => {
            return (
              <ComentVote
                commentData={comment}
                postId={updatedPost._id}
                key={comment._id}
              />
            )
          })}
        </>
      )}
    </div>
  )
}
