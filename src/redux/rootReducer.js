import { ADD_POST, ADD_COMMENT, DELETE_COMMENT, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST, EDIT_POST } from "./actionTypes";

const INITIAL_STATE = {
  posts: [],
  errorThrown: false,
  error: ''
}

const rootReducer = (state = INITIAL_STATE, action) => {
  let newPosts;
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post]
      }
    case EDIT_POST:
      newPosts = state.posts.map(post => {
        if (post.id === action.payload.post.id) {
          post.title = action.payload.post.title;
          post.description = action.payload.post.description;
          post.body = action.payload.post.body;
        }
        return post;
      })
      return {
        posts: newPosts
      }
    case DELETE_POST:
      newPosts = [...state.posts];
      newPosts.splice(state.posts.findIndex(post => post.id === action.payload.post.id), 1);
      return {
        ...state,
        posts: newPosts
      }
    case UPVOTE_POST:
      newPosts = state.posts.map(post => {
        if (post.id === action.payload.post.id) {
          post.score++;
        }
        return post
      })
      return {
        ...state,
        posts: newPosts
      }
    case DOWNVOTE_POST:
      newPosts = state.posts.map(post => {
        if (post.id === action.payload.post.id) {
          post.score--;
        }
        return post
      })
      return {
        ...state,
        posts: newPosts
      }
    case ADD_COMMENT:
      newPosts = state.posts.map(post => {
        if (post.id === action.payload.postId) {
          post.comments.push(action.payload.comment);
        }
        return post;
      });
      return {
        ...state,
        posts: newPosts
      }
    case DELETE_COMMENT:
      return {
        ...state,
        posts: state.posts.filter(post => post.comments.splice(post.comments.findIndex(c => c.id === action.payload.commentId), 1))
      }
    default:
      return state;
  }
}

export default rootReducer;