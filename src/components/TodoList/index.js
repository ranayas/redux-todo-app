import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as todosThunks from "../../store/todos/todosThunks";
import * as todosSelectors from "../../store/todos/todosSelectors";
import * as filtersSelectors from "../../store/filters/filtersSelectors";
import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoIds = useSelector(todosSelectors.selectFilteredTodoIds);

  useEffect(() => {
    dispatch(todosThunks.fetchTodos());
  }, [dispatch]);

  return (
    <ul className="todo-list">
      {todoIds.map((todoId) => (
        <TodoListItem key={todoId} todoId={todoId} />
      ))}
    </ul>
  );
};

export default TodoList;
