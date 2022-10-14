// checking like status

export const isLikedPost = (user, likes) => {
    return likes?.likedBy?.some(({username }) => username === user?.username)
}

// checking bookmark status

export const isBookmarkedPost = (postid, bookmarks) => {
    return bookmarks.some(({ _id }) => _id === postid);
}