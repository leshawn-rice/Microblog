import React from 'react';
import { v4 as uuid } from 'uuid';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actionCreators';
import { useHistory } from 'react-router';
import '../../styles/PostForm.css';

const NewPostForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const INITIAL_DATA = {
    title: '',
    description: '',
    body: ''
  }

  const createPost = (formData) => {
    const postId = uuid();
    formData.id = postId;
    formData.comments = [];
    formData.score = 0;
    dispatch(addPost(formData));
    history.push('/');
  }

  const inputs = [
    { name: 'title', label: 'Title', placeholder: 'Post Title' },
    { name: 'description', label: 'Description', placeholder: 'Post Description' },
  ]

  const messages = [
    { name: 'body', label: 'Body', placeholder: 'Post Body' }
  ]

  const buttonLabel = 'Create New Post'

  return (
    <div className="PostForm">
      <div className="PostForm-Title">
        <h1>Create a New Post</h1>
      </div>
      <Form
        INITIAL_DATA={INITIAL_DATA}
        inputs={inputs}
        buttonLabel={buttonLabel}
        messages={messages}
        submit={createPost} />
    </div>
  )
}

export default NewPostForm;