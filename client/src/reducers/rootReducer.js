import { combineReducers } from "redux";
import PostsReducer from "./posts_reducer";
import authReducer from "./auth_reducer";
import errorsReducer from "./errors_reducer";
import { reducer as form } from "redux-form";

export default combineReducers({
  posts: PostsReducer,
  form,
  errors: errorsReducer,
  auth: authReducer
});
