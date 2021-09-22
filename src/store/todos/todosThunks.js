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

  let jsonResponse;

  try {
    const todo = await Promise.resolve(fetchTodo(id));

    const response = await fetch(`${url}/${todo.id}`, {
      body: JSON.stringify({ completed: !todo.completed }),
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    });

    jsonResponse = await response.json(response);
  } catch (error) {
    dispatch(todosActionCreators.todoToggled(id));
  }
  return jsonResponse.todo;
};

export const changeColor =
  ({ id, color }) =>
  async (dispatch, getState) => {
    const previousColor = getState().todos.entities[id].color;

    dispatch(todosActionCreators.todoColorChanged({ id, color }));

    let jsonResponse;

    try {
      const response = await fetch(`${url}/${id}`, {
        body: JSON.stringify({ color }),
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
      });

      jsonResponse = await response.json();
    } catch (error) {
      dispatch(
        todosActionCreators.todoColorChanged({ id, color: previousColor })
      );
      return;
    }

    return jsonResponse.todo;
  };
