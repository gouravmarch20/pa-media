import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBookmarkPosts, getAllPosts } from '../../features/postSlice'
import { HomePost } from '../index'
import { getBookmarkPostsHelper } from '../../helpers'
import { getAllUsers } from '../../features/userSlice'
import { Oval } from 'react-loader-spinner'

export const Bookmark = () => {
  const { allPosts, bookmarkPosts, filterText, postStatus } = useSelector(
    state => state.posts
  )
  const { userInfo, token } = useSelector(state => state.auth)
  const { allUsers } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllUsers())
    dispatch(getAllBookmarkPosts(token))
  }, [dispatch, token])

  const currentUser = allUsers?.find(
    user => user.username === userInfo.username
  )
  const bookmarkFeedPosts = getBookmarkPostsHelper(allPosts, bookmarkPosts)

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

      { postStatus !== 'loading' && bookmarkFeedPosts.length === 0 ? (
        <h1 className='heading'>Not any Bookmark Posts.</h1>
      ) : (
        bookmarkFeedPosts?.map((post, id) => {
          return (
            <div key={id}>
              <HomePost postData={post} />
            </div>
          )
        })
      )}
    </div>
  )
}
