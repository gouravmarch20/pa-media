import React, { useEffect } from 'react'

import './css/posts.css'
import { useSelector, useDispatch } from 'react-redux'
import { HomePost } from './HomePost'

import { getAllPosts } from '../../features/postSlice'
import { getSortedPosts } from '../../helpers/getSortedPosts'
export const HomePosts = () => {
  const { allPosts, bookmarkPosts } = useSelector(state => state.posts)
  const { userInfo, token } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
  }, [])
  const homeShortedPosts = getSortedPosts(allPosts, userInfo)

  return (
    <div className='posts'>
      {homeShortedPosts ? (
        homeShortedPosts?.map((post, id) => {
          return (
            <div key={id}>
              <HomePost postData={post} />
            </div>
          )
        })
      ) : (
        <h2>no post found</h2>
      )}
    </div>
  )
}
