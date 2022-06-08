export const getHomePost = (posts, loggedInUser, filterType) => {
  let filterPost = posts?.filter(
    post =>
      post?.username === loggedInUser?.username ||
      loggedInUser?.following?.find(
        followingPost => post?.username === followingPost?.username
      )
  )
  if (filterType === 'Recent') {
    return filterPost.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
  }
  if (filterType === 'Trending') {
    return filterPost.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
  }
  if (filterType === 'Oldest') {
    return filterPost.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    )
  }
  return filterPost.reverse()
}
