import TodosRequestStatus from "./todosRequestStatus";
import * as todosActionTypes from "./todosActionTypes";

const initialState = {
  status: TodosRequestStatus.idle,
  entities: {},
};

const todosReducer = (state, action) => {
  if (!state) {
    state = initialState;
  }

  switch (action.type) {
    case todosActionTypes.todosLoading: {
      return { ...state, status: TodosRequestStatus.loading };
    }
    case todosActionTypes.todosLoaded: {
      const entities = {};
      action.payload.forEach((todo) => (entities[todo.id] = todo));
      return { ...state, status: TodosRequestStatus.idle, entities };
    }
    case todosActionTypes.todoAdded: {
      const todo = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [todo.id]: todo },
      };
    }
    case todosActionTypes.todoToggled: {
      const todoId = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: {
            ...state.entities[todoId],
            completed: !state.entities[todoId].completed,
          },
        },
      };
    }
    case todosActionTypes.todoColorChanged: {
      const { id, color } = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: {
            ...state.entities[id],
            color,
          },
        },
      };
    }
    case todosActionTypes.todoRemoved: {
      const todoId = action.payload;
      const entities = { ...state.entities };
      delete entities[todoId];
      return {
        ...state,
        entities,
      };
    }
    case todosActionTypes.todosMarkedAsCompleted: {
      const entities = { ...state.entities };
      Object.values(entities).forEach((todo) => {
        entities[todo.id] = {
          ...todo,
          completed: true,
        };
      });
      return {
        ...state,
        entities,
      };
    }
    case todosActionTypes.completedTodosCleared: {
      const entities = { ...state.entities };

      Object.values(entities).forEach((todo) => {
        if (todo.completed) {
          delete entities[todo.id];
        }
      });

      return { ...state, entities };
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
