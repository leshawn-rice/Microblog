import React, { useEffect } from 'react';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByIdApi, updatePostApi } from '../../redux/actionCreators';
import { useHistory, useParams } from 'react-router';
import '../../styles/PostForm.css';

const NewPostForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const post = useSelector(state => state.currentPost);
  const isLoading = useSelector(state => state.isLoading);
  const isErrorThrown = useSelector(state => state.isErrorThrown);
  const errors = useSelector(state => state.errors);

  let INITIAL_DATA = {
    title: '',
    description: '',
    body: ''
  }

  useEffect(() => {
    dispatch(getPostByIdApi(id))
  }, [dispatch, id])

  if (post) {
    INITIAL_DATA = {
      title: post.title,
      description: post.description,
      body: post.body
    }
  }


  const changePost = (formData) => {
    formData.id = id;
    dispatch(updatePostApi(id, formData));
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

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  else if (isErrorThrown) {
    console.log('Error thrown')
    console.log(errors);
    return (
      <>
        {errors.map(err => <h1 key={err}>{err}</h1>)}
      </>
    )
  }

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