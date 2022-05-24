import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBookmarkPosts, getAllPosts } from '../../features/postSlice'
import { BookmarkCard } from './BookmarkCard'
import {
  getBookmarkPostsHelper,
  getSortedPosts,
  getUserFeedPosts
} from '../../helpers'
import { getAllUsers } from '../../features/userSlice'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, token])

  const currentUser = allUsers?.find(
    user => user.username === userInfo.username
  )
  const bookmarkFeedPosts = getBookmarkPostsHelper(allPosts, bookmarkPosts)

  return (
    <div>
     { console.log(bookmarkFeedPosts)}
      {bookmarkFeedPosts.length === 0 ? (
        <div className=''>No Bookmark Posts.</div>
      ) : (
        bookmarkFeedPosts?.map((post, id) => {
          return (
            <div key={id}>
              <BookmarkCard postData={post} />
            </div>
          )
        })
      )}
    </div>
  )
}
