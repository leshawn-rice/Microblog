import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { upvotePostApi, downvotePostApi, deletePostApi } from '../../redux/actionCreators';
import '../../styles/Vote.css'

const Vote = ({ post, mini = false }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const giveUpvote = () => {
    dispatch(upvotePostApi(post.id));
  }

  const giveDownvote = () => {
    dispatch(downvotePostApi(post.id));
  }

  const editPost = () => {
    history.push(`/posts/${post.id}/edit`);
  }

  const removePost = () => {
    dispatch(deletePostApi(post.id));
    history.push('/');
  }

  if (mini) {
    return (
      <>
        <div className="Vote">
          <span style={post.votes > 0 ? { color: 'green' } : { color: 'red' }}>{post.votes} votes</span>
          <button className="Vote-Up" onClick={giveUpvote}>
            <i className="fas fa-thumbs-up fa-xs"></i>
          </button>
          <button className="Vote-Down" onClick={giveDownvote}>
            <i className="fas fa-thumbs-down fa-xs"></i>
          </button>
        </div>
      </>
    )
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
      </div>
      <div className="Edit">
        <span style={post.votes > 0 ? { color: 'green' } : { color: 'red' }}>{post.votes} votes</span>
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