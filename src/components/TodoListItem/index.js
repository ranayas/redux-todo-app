import { useDispatch, useSelector } from "react-redux";
import * as todosSelectors from "../../store/todos/todosSelectors";
import "./TodoListItem.css";
import * as todosThunks from "../../store/todos/todosThunks";

const TodoListItem = ({ todoId }) => {
  const todo = useSelector(todosSelectors.selectTodo(todoId));
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(todosThunks.toggleTodo(todo.id));
  };

  return (
    <li className="todo-list-item">
      <div className="todo-list-item__right">
        <input
          className="todo-list-item__checkbox"
          type="checkbox"
          name={`todoListItem${todoId}`}
          id={`todoListItem${todoId}`}
          checked={todo.completed ? true : false}
          onChange={handleCheckboxChange}
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
