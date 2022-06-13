// !  map/filter working test
export const getBookmarkPostsHelper = (allPosts, bookmarkPosts) => {
  if (bookmarkPosts.length === 0) {
    return []
  }
  return bookmarkPosts
    .map(id => allPosts.find(post => post._id === id))
    .reverse()
}
