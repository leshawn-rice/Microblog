import React from 'react';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/actionCreators';
import { Redirect, useHistory, useParams } from 'react-router';
import '../../styles/PostForm.css';

const NewPostForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Redirect to="/" />
  }

  const INITIAL_DATA = {
    title: post.title,
    description: post.description,
    body: post.body
  }

  const changePost = (formData) => {
    formData.id = id;
    dispatch(editPost(formData));
    history.push('/');
  }

  const inputs = [
    { name: 'title', label: 'Title', placeholder: 'Post Title' },
    { name: 'description', label: 'Description', placeholder: 'Post Description' },
  ]

  const messages = [
    { name: 'body', label: 'Body', placeholder: 'Post Body' }
  ]

  const buttonLabel = 'Edit Post'

  return (
    <div className="PostForm">
      <div className="PostForm-Title">
        <h1>Edit Post</h1>
      </div>
      <Form
        INITIAL_DATA={INITIAL_DATA}
        inputs={inputs}
        buttonLabel={buttonLabel}
        messages={messages}
        submit={changePost} />
    </div>
  )
}

export default NewPostForm;