import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import Comments from './Comments';
import '../../styles/Post.css';
import Vote from './Vote';

const Post = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts);

  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Redirect to="/" />
  }

  return (
    <div className="Post">
      <Vote post={post} />
      <div className="Post-Title">
        <h1>{post.title}</h1>
      </div>
      <div className="Post-Description">
        <p>{post.description}</p>
      </div>
      <div className="Post-Body">
        <p>{post.body}</p>
      </div>
      <Comments postId={post.id} comments={post.comments} />
    </div>
  )
}

export default Post;