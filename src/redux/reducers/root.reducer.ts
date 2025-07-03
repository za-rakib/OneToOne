import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import postsReducer from "./post.reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer
});

export default rootReducer