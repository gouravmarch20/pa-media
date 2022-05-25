// !  map/filter working test
export const getBookmarkPostsHelper = (allPosts, bookmarkPosts) => {
  return bookmarkPosts
    .map(id => allPosts.find(post => post._id === id))
    .reverse()
}
