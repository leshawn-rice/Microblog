import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, DOWNVOTE_POST, EDIT_POST, UPVOTE_POST } from "./actionTypes"


const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: { post }
  }
}

const editPost = (post) => {
  return {
    type: EDIT_POST,
    payload: { post }
  }
}

const deletePost = (post) => {
  return {
    type: DELETE_POST,
    payload: { post }
  }
}

const upvotePost = (post) => {
  return {
    type: UPVOTE_POST,
    payload: { post }
  }
}

const downvotePost = (post) => {
  return {
    type: DOWNVOTE_POST,
    payload: { post }
  }
}

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    payload: { postId, comment }
  }
}

const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: { commentId }
  }
}

export { addPost, addComment, deleteComment, upvotePost, downvotePost, deletePost, editPost }