import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HomePost } from '../index'
import { Oval } from 'react-loader-spinner'

import { getAllBookmarkPosts, getAllPosts } from '../../features/postSlice'
import { getSortedPosts } from '../../helpers/getSortedPosts'
export const ExplorePosts = () => {
  const { allPosts, postStatus } = useSelector(state => state.posts)
  const { userInfo, token } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllBookmarkPosts(token))
  }, [])
  const homeShortedPosts = getSortedPosts(allPosts, userInfo)
  return (
    <div className=''>
      {postStatus === 'loading' && (
        <div className='loader-alignment'>
          <Oval
            ariaLabel='loading-indicator'
            height={100}
            width={100}
            strokeWidth={5}
            color='red'
            secondaryColor='yellow'
          />
        </div>
      )}
      {console.log(homeShortedPosts)}
      {postStatus !== 'loading' && homeShortedPosts ? (
        homeShortedPosts?.map((post, id) => {
          return (
            <div key={id}>
              <HomePost postData={post} />
            </div>
          )
        })
      ) : (
        <>
          {postStatus !== 'loading' && (
            <h2 className='heading'>nothing to explore</h2>
          )}
        </>
      )}
    </div>
  )
}
