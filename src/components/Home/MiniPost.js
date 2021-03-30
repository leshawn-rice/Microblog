import React from 'react';
import { NavLink } from 'react-router-dom';
import Vote from '../Post/Vote';
import '../../styles/MiniPost.css';

const MiniPost = ({ post, demo = false }) => {

  if (demo) {
    return (
      <div className="MiniPost" style={{ border: 'none', alignItems: 'center', width: '100%' }}>
        <NavLink className="MiniPost-Title" exact to={`/new`}>
          Start Sharing
        </NavLink>
      </div>
    )
  }

  return (
    <div className="MiniPost">
      <Vote post={post} mini={true} />
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