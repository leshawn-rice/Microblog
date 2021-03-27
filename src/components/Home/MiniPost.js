import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/MiniPost.css';
import Vote from '../Post/Vote';

const MiniPost = ({ post, id, title, description, score }) => {
  return (
    <div className="MiniPost">
      <Vote post={post} />
      <NavLink className="MiniPost-Title" exact to={`/posts/${post.id}`}>
        {post.title}
      </NavLink>
      <p className="MiniPost-Description">
        {post.description}
      </p>
    </div>
  )
}

export default MiniPost;