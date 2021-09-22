import * as todosActionCreators from "./todosActionCreators";

const url = "http://localhost:3000/api/todos";

export const fetchTodos = () => async (dispatch) => {
  dispatch(todosActionCreators.todosLoading());
  const response = await fetch(url);
  const jsonResponse = await response.json();
  dispatch(todosActionCreators.todosLoaded(jsonResponse.todos));
};

export const saveNewTodo = (text) => async (dispatch) => {
  const response = await fetch(url, {
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  const jsonResponse = await response.json(response);
  dispatch(todosActionCreators.todoAdded(jsonResponse.todo));
};

const fetchTodo = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const jsonResponse = await response.json();
  return jsonResponse.todo;
};

export const toggleTodo = (id) => async (dispatch) => {
  dispatch(todosActionCreators.todoToggled(id));

  const todo = await Promise.resolve(fetchTodo(id));

  await fetch(`${url}/${todo.id}`, {
    body: JSON.stringify({ completed: !todo.completed }),
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
  });
};

export const changeColor =
  ({ id, color }) =>
  async (dispatch) => {
    dispatch(todosActionCreators.todoColorChanged({ id, color }));
    await fetch(`${url}/${id}`, {
      body: JSON.stringify({ color }),
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    });
  };

export const removeTodo = (id) => async (dispatch) => {
  dispatch(todosActionCreators.todoRemoved(id));

  await fetch(`${url}/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });
};

export const markTodosAsCompleted = () => async (dispatch) => {
  dispatch(todosActionCreators.todosMarkedAsCompleted());

  await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
    body: JSON.stringify({ completed: true }),
  });
};

export const completedTodosCleared = () => async (dispatch) => {
  dispatch(todosActionCreators.completedTodosCleared());

  await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
    body: JSON.stringify({ completed: true }),
  });
};
