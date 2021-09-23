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

const filterByStatus = (status) => (todo) => {
  if (StatusFilters.active === status) {
    return !todo.completed;
  }
  if (StatusFilters.completed === status) {
    return todo.completed;
  }
  if (StatusFilters.all === status) {
    return true;
  }
};

const filterByColors = (colors) => (todo) =>
  colors.length ? colors.includes(todo.color) : true;

const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filters,
  (todos, filters) =>
    todos
      .filter(filterByStatus(filters.status))
      .filter(filterByColors(filters.colors))
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
