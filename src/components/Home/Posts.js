import React, { useEffect } from 'react';
import MiniPost from './MiniPost';
import '../../styles/Posts.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsApi } from '../../redux/actionCreators';

const Posts = () => {
  const posts = useSelector(state => state.posts);
  const isLoading = useSelector(state => state.isLoading);
  const isErrorThrown = useSelector(state => state.errorThrown)
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsApi());
  }, [dispatch])

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  else if (isErrorThrown) {
    console.log(errors);
    return (
      <>
        {errors.map(err => <h1 key={err}>{err}</h1>)}
      </>
    )
  }

  posts.sort((a, b) => (a.votes <= b.votes) ? 1 : -1);

  return (
    <div className="Posts">
      <MiniPost
        key={'start sharing'}
        post={{}}
        demo={true} />
      {posts.map(post => (
        <MiniPost
          key={post.id}
          post={post} />
      ))}
    </div>
  )
}

export default Posts;