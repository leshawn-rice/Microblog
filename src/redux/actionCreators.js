import {
  ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, SHOW_ERROR, GET_POSTS, SHOW_LOADING, GET_POST, CLEAR_POST, UPDATE_POST, CLEAR_ERRORS
} from "./actionTypes";
import MicroblogApi from '../api';

const deletePostApi = (id) => {
  return async function (dispatch) {
    try {
      dispatch(clearErrors())
      await MicroblogApi.deletePost(id);
      dispatch(deletePost(id));
    }
    catch (errs) {
      dispatch(showErrors(errs))
    }
  }
}

const updatePostApi = (id, newPost) => {
  return async function (dispatch) {
    try {
      dispatch(clearErrors())
      let post = await MicroblogApi.updatePost(id, newPost);
      dispatch(updatePost(post));
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const upvotePostApi = (id) => {
  return async function (dispatch) {
    try {
      dispatch(clearErrors())
      let post = await MicroblogApi.upvotePost(id);
      dispatch(updatePost(id, post));
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const downvotePostApi = (id) => {
  return async function (dispatch) {
    try {
      dispatch(clearErrors())
      let post = await MicroblogApi.downvotePost(id);
      dispatch(updatePost(id, post))
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const getPostsApi = () => {
  return async function (dispatch) {
    try {
      dispatch(clearErrors())
      dispatch(showLoading())
      let posts = await MicroblogApi.getPosts();
      dispatch(getPosts(posts))
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const getPostByIdApi = (id) => {
  return async function (dispatch) {
    try {
      dispatch(clearErrors())
      dispatch(clearPost())
      dispatch(showLoading())
      let post = await MicroblogApi.getPost(id);
      dispatch(getPost(post))
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const addCommentApi = (id, data) => {
  return async function (dispatch) {
    try {
      let comment = await MicroblogApi.addComment(id, data);
      dispatch(addComment(id, comment));
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const deleteCommentApi = (postId, commentId) => {
  return async function (dispatch) {
    try {
      await MicroblogApi.deleteComment(postId, commentId);
      dispatch(deleteComment(commentId));
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const addPostApi = (newPost) => {
  return async function (dispatch) {
    try {
      dispatch(clearErrors())
      let post = await MicroblogApi.addPost(newPost);
      dispatch(addPost(post))
    }
    catch (errs) {
      dispatch(showErrors(errs));
    }
  }
}

const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: { id }
  }
}

const updatePost = (id, post) => {
  return {
    type: UPDATE_POST,
    payload: { id, post }
  }
}

const getPost = (post) => {
  return {
    type: GET_POST,
    payload: { post }
  }
}

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    payload: { posts }
  }
}

const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: { post }
  }
}


const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    payload: { postId, comment }
  }
}

const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    payload: { id }
  }
}

const showErrors = (errors) => {
  return {
    type: SHOW_ERROR,
    payload: { errors }
  }
}

const showLoading = () => {
  return {
    type: SHOW_LOADING
  }
}

const clearPost = () => {
  return {
    type: CLEAR_POST
  }
}

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}


export { addPostApi, getPostsApi, getPostByIdApi, upvotePostApi, downvotePostApi, deletePostApi, updatePostApi, addCommentApi, deleteCommentApi }