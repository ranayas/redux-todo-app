import { createSelector } from "reselect";

const selectTodoEntities = (state) => state.todos.entities;

const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

export const selectTodoIds = createSelector(selectTodos, (todos) =>
  todos.map((todo) => todo.id)
);

export const selectTodo = (id) => (state) => selectTodoEntities(state)[id];

export const selectTodoColor = (id) => (state) => selectTodoEntities(state)[id].color;
