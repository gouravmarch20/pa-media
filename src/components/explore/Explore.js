import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HomePost } from '../index'

import { getAllBookmarkPosts, getAllPosts } from '../../features/postSlice'
import { getSortedPosts } from '../../helpers/getSortedPosts'
export const Explore = () => {
  const { allPosts } = useSelector(state => state.posts)
  const { userInfo, token } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllBookmarkPosts(token))
  }, [])
  const homeShortedPosts = getSortedPosts(allPosts, userInfo)
  return (
    <div className=''>
      {homeShortedPosts ? (
        homeShortedPosts?.map((post, id) => {
          return (
            <div key={id}>
              <HomePost postData={post} />
            </div>
          )
        })
      ) : (
        <h2 className='heading'>nothing to explore</h2>
      )}
    </div>
  )
}
