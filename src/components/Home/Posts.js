import React from 'react';
import MiniPost from './MiniPost';
import '../../styles/Posts.css';
import { useSelector } from 'react-redux';

const Posts = () => {

  const posts = useSelector(state => state.posts);

  return (
    <div className="Posts">
      {posts.map(post => (
        <MiniPost
          key={post.id}
          post={post} />
      ))}
    </div>
  )
}

export default Posts;