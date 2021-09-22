import { createSelector } from "reselect";
import * as StatusFilters from "../../shared/StatusFilters";

const selectTodoEntities = (state) => state.todos.entities;

const selectTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

export const selectTodoIds = createSelector(selectTodos, (todos) =>
  todos.map((todo) => todo.id)
);

export const selectTodo = (id) => (state) => selectTodoEntities(state)[id];

export const selectTodoColor = (id) => (state) =>
  selectTodoEntities(state)[id].color;

export const selectRemainingTodosCount = (state) =>
  selectTodos(state).filter((todo) => !todo.completed).length;

const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filters,
  (todos, filters) =>
    todos.filter((todo) => {
      if (filters.status === StatusFilters.completed) {
        return todo.completed;
      }
      if (filters.status === StatusFilters.active) {
        return !todo.completed;
      }
      return true;
    })
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
