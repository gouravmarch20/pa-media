export const getHomePost = (posts, loggedInUser, filterType) => {
  let filterPost = posts?.filter(
    post =>
      post?.username === loggedInUser?.username ||
      loggedInUser?.following?.find(
        followingPost => post?.username === followingPost?.username
      )
  )
  return filterPost.reverse()
}
