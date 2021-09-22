import { useDispatch, useSelector } from "react-redux";
import * as todosSelectors from "../../store/todos/todosSelectors";
import "./TodoListItem.css";
import * as todosThunks from "../../store/todos/todosThunks";
import { useState } from "react";
import CenteredModal from "../CenteredModal";
import ChangeColor from "../ChangeColor";

const TodoListItem = ({ todoId }) => {
  const todo = useSelector(todosSelectors.selectTodo(todoId));
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = () => {
    dispatch(todosThunks.toggleTodo(todo.id));
  };

  const handleChangeColorButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => setShowModal(false);

  const handleDeleteButtonClick = () => {
    dispatch(todosThunks.removeTodo(todoId));
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
      <div className="todo-list-item__buttons">
        <button
          onClick={handleChangeColorButtonClick}
          className="todo-list-item__button"
        >
          <i className="fas fa-palette todo-list-item__icon"></i>
        </button>
        {showModal && (
          <CenteredModal>
            <ChangeColor onClose={handleClose} todoId={todoId} />
          </CenteredModal>
        )}
        <button
          onClick={handleDeleteButtonClick}
          className="todo-list-item__button"
        >
          <i className="fas fa-trash todo-list-item__icon"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
