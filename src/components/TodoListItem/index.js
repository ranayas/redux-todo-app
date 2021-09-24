import { useDispatch, useSelector } from "react-redux";
import * as todosSelectors from "../../store/todos/todosSelectors";
import "./TodoListItem.css";
import * as todosThunks from "../../store/todos/todosThunks";
import { useState } from "react";
import CenteredModal from "../CenteredModal";
import ChangeColor from "../ChangeColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoListItem = ({ todoId, color }) => {
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

  const getClassNameColor = (modifier) => `todo-list-item--${modifier}`;

  return (
    <li
      className={`todo-list-item  ${
        todo.color ? getClassNameColor(todo.color) : ""
      }`}
    >
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
          <FontAwesomeIcon icon={faPalette} className="todo-list-item__icon" />
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
          <FontAwesomeIcon icon={faTrash} className="todo-list-item__icon" />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
