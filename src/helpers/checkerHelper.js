export const checkLikeHelper = (likedByArray, loggedInUser) => {
  return likedByArray?.find(user => user?.username === loggedInUser?.username)
}
// CHECK _ID LOGIC
export const checkBookmarkHelper = (_id , bookmarkPosts) => {
  return bookmarkPosts?.find(bookmarkPostId => bookmarkPostId === _id)
}
