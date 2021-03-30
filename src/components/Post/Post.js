import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByIdApi, getPostsApi } from '../../redux/actionCreators';
import Vote from './Vote';
import Comments from './Comments';
import '../../styles/Post.css';

const Post = () => {
  const { id } = useParams();
  const isLoading = useSelector(state => state.isLoading);
  const isErrorThrown = useSelector(state => state.errorThrown);
  const errors = useSelector(state => state.errors);
  const post = useSelector(state => state.currentPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsApi());
    dispatch(getPostByIdApi(id));
  }, [dispatch, id]);

  useEffect(() => {
  }, [post])

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  else if (isErrorThrown) {
    return (
      <>
        {errors.map(err => <h1 key={err}>{err}</h1>)}
      </>
    )
  }

  else if (post !== null) {
    return (
      <div className="Post">
        <Vote post={post} />
        <div className="Post-Title">
          <h1>{post.title}</h1>
        </div>
        <div className="Post-Description">
          <p>{post.description}</p>
        </div>
        <div className="Post-Body">
          <p>{post.body}</p>
        </div>
        <Comments post={post} postId={post.id} comments={post.comments} />
      </div>
    )
  }

  else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default Post;