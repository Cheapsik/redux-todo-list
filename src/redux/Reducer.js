import { combineReducers } from "redux";
import { todoReducer } from "./reducers/TodoReducer";
import { visibilityReducer } from "./reducers/VisibilityReducer";

export default combineReducers({ todoReducer, visibilityReducer });
