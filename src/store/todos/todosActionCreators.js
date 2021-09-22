import * as todosActionTypes from "./todosActionTypes";

export const todosLoading = () => ({ type: todosActionTypes.todosLoading });

export const todosLoaded = (todos) => ({
  type: todosActionTypes.todosLoaded,
  payload: todos,
});

export const todoAdded = (todo) => ({
  type: todosActionTypes.todoAdded,
  payload: todo,
});

export const todoToggled = (id) => ({
  type: todosActionTypes.todoToggled,
  payload: id,
});
