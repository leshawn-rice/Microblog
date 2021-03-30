import { ADD_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST, SHOW_ERROR, GET_POSTS, SHOW_LOADING, CLEAR_POST, GET_POST, UPDATE_POST, CLEAR_ERRORS } from "./actionTypes";

const INITIAL_STATE = {
  posts: [],
  currentPost: null,
  isLoading: false,
  errorThrown: false,
  errors: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
  let newPosts;
  let newCurrent;
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case SHOW_ERROR:
      return {
        ...state,
        isLoading: false,
        errorThrown: true,
        errors: action.payload.errors
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        errorThrown: false,
        errors: []
      }
    case CLEAR_POST:
      return {
        ...state,
        currentPost: null
      }
    case GET_POST:
      return {
        ...state,
        isLoading: false,
        currentPost: action.payload.post
      }
    case GET_POSTS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts
      }
    case UPDATE_POST:
      newPosts = state.posts.map(post => {
        if (post.id === action.payload.id) {
          post = {
            ...post,
            ...action.payload.post
          }
        }
        return post
      });

      const updatedCurrent = newPosts.filter(post => post.id === action.payload.id)[0];

      newCurrent = state.currentPost ? {
        ...state.currentPost,
        ...updatedCurrent
      } : null;


      return {
        ...state,
        posts: newPosts,
        currentPost: newCurrent
      }
    case DELETE_POST:
      newPosts = state.posts.filter(post => post.id !== action.payload.id)
      newCurrent = newPosts.filter(post => post.id === action.payload.id)[0] || null;
      return {
        ...state,
        posts: newPosts,
        currentPost: newCurrent
      }

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post]
      }
    case ADD_COMMENT:
      newCurrent = {
        ...state.currentPost,
        comments: [...state.currentPost.comments, action.payload.comment]
      }
      return {
        ...state,
        currentPost: newCurrent
      }
    case DELETE_COMMENT:
      newCurrent = {
        ...state.currentPost,
        comments: state.currentPost.comments.filter(comment => comment.id !== action.payload.id)
      }
      return {
        ...state,
        currentPost: newCurrent
      }
    default:
      return state;
  }
}

export default rootReducer;