import { combineReducers } from "redux";
import PostsReducer from "./posts_reducer";
import { reducer as form } from "redux-form";

export default combineReducers({
  posts: PostsReducer,
  form
});
