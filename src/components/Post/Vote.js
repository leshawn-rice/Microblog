import React from 'react';
import { upvotePost, downvotePost, deletePost } from '../../redux/actionCreators';
import { useDispatch } from 'react-redux';
import '../../styles/Vote.css'
import { useHistory } from 'react-router';

const Vote = ({ post }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const giveUpvote = () => {
    dispatch(upvotePost(post));
  }

  const giveDownvote = () => {
    dispatch(downvotePost(post));
  }

  const editPost = () => {
    history.push(`/posts/${post.id}/edit`);
  }

  const removePost = () => {
    dispatch(deletePost(post));
  }

  return (
    <>
      <div className="Vote">
        <button className="Vote-Up" onClick={giveUpvote}>
          <i className="fas fa-thumbs-up fa-xs"></i>
        </button>
        <button className="Vote-Down" onClick={giveDownvote}>
          <i className="fas fa-thumbs-down fa-xs"></i>
        </button>
        <span style={post.score > 0 ? { color: 'green' } : { color: 'red' }}>{post.score} votes</span>
      </div>
      <div className="Edit">
        <button className="Edit-Edit" onClick={editPost}>
          <i className="fas fa-edit fa-xs"></i>
        </button>
        <button className="Edit-Delete" onClick={removePost}>
          <i className="fas fa-trash fa-xs"></i>
        </button>
      </div>
    </>
  )
}

export default Vote;