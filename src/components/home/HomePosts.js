import React, { useEffect } from 'react'

import './css/posts.css'
import { useSelector, useDispatch } from 'react-redux'
import { HomePost } from './HomePost'
import { Oval } from 'react-loader-spinner'
import { HomeChip } from './HomeChip'
import { getAllBookmarkPosts, getAllPosts } from '../../features/postSlice'
import { getHomePost } from '../../helpers/'
export const HomePosts = () => {
  const { allPosts, postStatus, filterText } = useSelector(state => state.posts)
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

  const homePosts = getHomePost(allPosts, currentUser, filterText)
  return (
    <div>
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
      {postStatus !== 'loading' && homePosts && homePosts.length >= 1 ? (
        <div>
          <HomeChip postData={homePosts} />
          {homePosts?.map((post, id) => {
            return <HomePost postData={post} key={id} homeposts />
          })}
        </div>
      ) : (
        <>
          {postStatus !== 'loading' && (
            <h2
              className='subheading'
              style={{
                width: '70%',
                fontSize: '2.8rem',
                textShadow: '  0 0 1px #FF0000'
              }}
            >
              {' '}
              Your follower not have any post
            </h2>
          )}
        </>
      )}
    </div>
  )
}
