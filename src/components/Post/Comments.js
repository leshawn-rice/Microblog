import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Form from '../Forms/Form';
import { addComment, deleteComment } from '../../redux/actionCreators';
import '../../styles/Comments.css';

const Comments = ({ postId, comments }) => {
  const INITIAL_DATA = {
    comment: ''
  }
  const inputs = [
    { name: 'comment', label: 'Comment', placeholder: 'Put a comment here' }
  ]
  const buttonLabel = 'Add Comment'

  const dispatch = useDispatch();

  const createComment = (formData) => {
    const commentId = uuid();
    formData.id = commentId;
    dispatch(addComment(postId, formData));
  }

  const removeComment = (evt) => {
    const { id } = evt.target.dataset;
    dispatch(deleteComment(id))
  }

  return (
    <div className="Comments">
      {comments.map(comment => (
        <div key={comment.id} className="Comment">
          <button className="Comment-Delete" data-id={comment.id} onClick={removeComment}>X</button>
          <p className="Comment-Text">{comment.comment}</p>
        </div>
      ))}
      <Form
        INITIAL_DATA={INITIAL_DATA}
        inputs={inputs}
        buttonLabel={buttonLabel}
        submit={createComment} />
    </div>
  )
}

export default Comments;