import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteCommentApi } from '../../redux/actionCreators';

const Comment = ({ postId, commentId, text }) => {
  const dispatch = useDispatch();

  const removeComment = () => {
    dispatch(deleteCommentApi(postId, commentId))
  }

  return (
    <div className="Comment">
      <button className="Comment-Delete" onClick={removeComment}>X</button>
      <p className="Comment-Text">{text}</p>
    </div>
  )
}

export default Comment;