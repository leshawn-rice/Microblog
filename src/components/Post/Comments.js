import React from 'react';
import { useDispatch } from 'react-redux';
import { addCommentApi } from '../../redux/actionCreators';
import Comment from './Comment';
import Form from '../Forms/Form';
import '../../styles/Comments.css';

const Comments = ({ post }) => {
  const INITIAL_DATA = {
    text: ''
  }
  const inputs = [
    { name: 'text', label: 'Add Comment', placeholder: 'Put a comment here' }
  ]
  const buttonLabel = 'Add Comment'

  const dispatch = useDispatch();

  const createComment = (formData) => {
    dispatch(addCommentApi(post.id, formData));
  }

  return (
    <div className="Comments">
      <div className="Comments-Content">
        <h1>Comments</h1>
        {post.comments.map(comment => (
          <Comment key={comment.id} postId={post.id} commentId={comment.id} text={comment.text} />
        ))}
      </div>
      <div className="Comments-Form">
        <Form
          INITIAL_DATA={INITIAL_DATA}
          inputs={inputs}
          buttonLabel={buttonLabel}
          submit={createComment} />
      </div>
    </div>
  )
}

export default Comments;