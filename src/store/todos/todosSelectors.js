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
  (todos, filters) => {
    const filtersStatusIsAll = filters.status === StatusFilters.all;
    const filtersColorsIsEmpty = filters.colors.length === 0;

    if (filtersStatusIsAll && filtersColorsIsEmpty) {
      return todos;
    }

    const filtersStatusIsCompleted = filters.status === StatusFilters.completed;

    return todos.filter((todo) => {
      const matchesWithStatus =
        filtersStatusIsAll || todo.completed === filtersStatusIsCompleted;

      const matchesWithColors =
        filtersColorsIsEmpty || filters.colors.includes(todo.color);

      return matchesWithStatus && matchesWithColors;
    });
  }
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
