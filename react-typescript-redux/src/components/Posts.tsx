import { Post } from "../types/PostType"
import PostItem from "./PostItem"

type PostsProps = {
  posts: Post[]
}

const Posts = ({posts}: PostsProps) => {

  return (
    <div>
      {posts.map(post => <PostItem key={post.id} post={post}/>)}
    </div>
  )
}

export default Posts
