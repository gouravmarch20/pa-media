import React, { useEffect } from 'react'

import './css/posts.css'
import { useSelector, useDispatch } from 'react-redux'
import { HomePost } from './HomePost'

import { getAllBookmarkPosts, getAllPosts } from '../../features/postSlice'
import { getHomePost } from '../../helpers/'
export const HomePosts = () => {
  const { allPosts } = useSelector(state => state.posts)
  const { allUsers } = useSelector(state => state.users)

  const { userInfo, token } = useSelector(state => state.auth)
  const currentUser = allUsers?.find(
    user => user.username === userInfo.username
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllBookmarkPosts(token))
  }, [])

  const homePosts = getHomePost(allPosts, currentUser, 'latest')
  return (
    <div>
      {homePosts && homePosts.length >= 1 ? (
        <div>
          {/* <HomeChip postData={homePosts} /> */}
          {homePosts?.map((post, id) => {
            return <HomePost postData={post} key={id} homeposts />
          })}
        </div>
      ) : (
        <div>
          <h2
            className='subheading'
            style={{
              width: '70%',
              fontSize: '2.5rem',
              textShadow: '  0 0 1px #FF0000'
            }}
          >
            {' '}
            Your follower not have any post
          </h2>
        </div>
      )}
    </div>
  )
}
