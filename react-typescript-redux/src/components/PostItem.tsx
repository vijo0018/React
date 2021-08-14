import React from 'react'
import { Post } from '../types/PostType'

type PostItemProps = {
  post: Post
}

const PostItem = ({post}: PostItemProps) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem
