import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost, getAllPosts } from '../../features/postSlice'
import { ComentVote } from './ComentVote'
import './singlePost.css'
import { HomePost } from '../home/HomePost'

export const SinglePost = () => {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { singlePost, singlePostStatus, allPosts } = useSelector(
    state => state.posts
  )

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getSinglePost(postId))
  }, [postId])
  const currentPost = allPosts?.find(post => post.id === postId)
  const updatedPost = currentPost ?? singlePost

  return (
    <div className='singlePost post-home'>
      {singlePostStatus === 'success' && (
        <>
          <div>{<HomePost postData={currentPost} singlePost />}</div>

          {updatedPost.comments.length >= 1 ? (
            updatedPost.comments.map(comment => {
              return (
                <ComentVote
                  commentData={comment}
                  postId={updatedPost._id}
                  key={comment._id}
                />
              )
            })
          ) : (
            <h2 className='subheading ' style={{ padding: '1rem' }}>
              no comment added{' '}
            </h2>
          )}
        </>
      )}
    </div>
  )
}
