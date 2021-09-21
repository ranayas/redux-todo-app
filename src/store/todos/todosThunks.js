import * as todosActionCreators from "./todosActionCreators";

const url = "http://localhost:3000/api/todos";

export const fetchTodos = () => async (dispatch) => {
  dispatch(todosActionCreators.todosLoading());
  const response = await fetch(url);
  const jsonResponse = await response.json();
  dispatch(todosActionCreators.todosLoaded(jsonResponse.todos));
};

export const newTodo = (text) => async (dispatch) => {
  const response = await fetch(url, {
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  const jsonResponse = await response.json(response);
  dispatch(todosActionCreators.todoAdded(jsonResponse.todo));
};
