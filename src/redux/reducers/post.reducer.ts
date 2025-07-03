
import actionTypes from '../constants/actionTypes';


const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case actionTypes.GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
