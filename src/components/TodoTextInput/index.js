import { useState } from "react";
import { useDispatch } from "react-redux";
import "./TodoTextInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import * as todosThunks from "../../store/todos/todosThunks";

const TodoTextInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleTextChange = (event) => setText(event.target.value);

  const handleTextKeyDown = (event) => {
    const trimmedText = text.trim();
    if (event.key === "Enter" && trimmedText) {
      dispatch(todosThunks.saveNewTodo(text));
      setText("");
    }
  };

  const handleButtonClick = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      dispatch(todosThunks.saveNewTodo(text));
      setText("");
    }
  };

  return (
    <div className="todo-text-input">
      <input
        id="newTodo"
        className="todo-text-input__inner-text"
        type="text"
        placeholder="What needs to be done"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleTextKeyDown}
      />
      <button onClick={handleButtonClick} className="todo-text-input__button">
        {/*         <i className="fas fa-plus todo-text-input__icon"></i> */}
        <FontAwesomeIcon icon={faPlus} className="todo-text-input__icon" />
      </button>
    </div>
  );
};

export default TodoTextInput;
