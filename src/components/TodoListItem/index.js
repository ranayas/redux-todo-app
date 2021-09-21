import { useSelector } from "react-redux";
import * as todosSelectors from "../../store/todos/todosSelectors";
import "./TodoListItem.css";

const TodoListItem = ({ todoId }) => {
  const todo = useSelector(todosSelectors.selectTodo(todoId));
  return (
    <li className="todo-list-item">
      <div className="todo-list-item__right">
        <input
          className="todo-list-item__checkbox"
          type="checkbox"
          name={`todoListItem${todoId}`}
          id={`todoListItem${todoId}`}
        />
        <label
          htmlFor={`todoListItem${todoId}`}
          className="todo-list-item__text"
        >
          {todo.text}
        </label>
      </div>
      <i className="fas fa-palette todo-list-item__color"></i>
    </li>
  );
};

export default TodoListItem;
