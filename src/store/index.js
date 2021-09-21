import * as redux from "redux";
import * as reduxDevtoolsExtension from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import todosReducer from "./todos/todosReducer";

const composedEnhancer = reduxDevtoolsExtension.composeWithDevTools(
  redux.applyMiddleware(thunkMiddleware)
);

const store = redux.createStore(
  redux.combineReducers({ todos: todosReducer }),
  composedEnhancer
);

export default store;
