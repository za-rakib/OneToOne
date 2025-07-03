// Import necessary functions and types
import { call, put, takeEvery } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import { getPostsList } from '../services/post.services';

// Define TypeScript interfaces for posts and actions
interface Post {
  id?: number;
  title: string;
  body: string;
}

// interface Action<T = any> {
//   type: string;
//   payload?: T;
// }

// Mock API calls
const fetchPostsApi = async (): Promise<Post[]> => {
  return getPostsList()
    .then((response: any) => {
      const post = response;
      console.log('posts', response);
      return post;
    })
    .catch(error => {
      throw error;
    });
};

// const addPostApi = async (newPost: Post): Promise<Post> => {
//   return fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       throw error;
//     });
// };

// Worker saga: Fetch posts
function* handleGetPosts(): Generator<any, void, Post[]> {
  try {
    const posts: Post[] = yield call(fetchPostsApi);
    yield put({ type: actionTypes.GET_POSTS_SUCCESS, payload: posts });
  } catch (error: any) {
    yield put({ type: actionTypes.GET_POSTS_FAILURE, payload: error.message });
  }
}

// Worker saga: Add a new post
// function* handleAddPost(action: Action<Post>): Generator<any, void, Post> {
//   try {
//     const newPost: Post = yield call(addPostApi, action.payload!);
//     yield put({ type: actionTypes.GET_POSTS }); // Refetch posts after adding
//   } catch (error: any) {
//     console.error('Failed to add post:', error.message);
//   }
// }

// Watcher saga
export default function* postSaga(): Generator {
  yield takeEvery(actionTypes.GET_POSTS, handleGetPosts);
  // yield takeEvery(actionTypes.ADD_POST, handleAddPost);
}
