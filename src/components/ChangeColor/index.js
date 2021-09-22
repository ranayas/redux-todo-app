import "./ChangeColor.css";
import * as TodoColors from "../../shared/TodoColor";
import TodoColor from "../TodoColor";
import { useDispatch, useSelector } from "react-redux";
import * as todosThunks from "../../store/todos/todosThunks";
import * as todosSelectors from "../../store/todos/todosSelectors";

const ChangeColor = ({ onClose, todoId }) => {
  const dispatch = useDispatch();

  const todoColor = useSelector(todosSelectors.selectTodoColor(todoId));

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "todoColor") {
      dispatch(todosThunks.changeColor({ id: todoId, color: value }));
    }
  };

  return (
    <div className="change-color">
      <div className="change-color__title-bar">
        <button className="change-color__close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <p className="change-color__title">Select color</p>
      </div>
      <div className="change-color__colors" onChange={handleChange}>
        <TodoColor
          name="todoColor"
          color={TodoColors.blue}
          checked={todoColor === TodoColors.blue}
        />
        <TodoColor
          name="todoColor"
          color={TodoColors.red}
          checked={todoColor === TodoColors.red}
        />
        <TodoColor
          name="todoColor"
          color={TodoColors.orange}
          checked={todoColor === TodoColors.orange}
        />
        <TodoColor
          name="todoColor"
          color={TodoColors.purple}
          checked={todoColor === TodoColors.purple}
        />
        <TodoColor
          name="todoColor"
          color={TodoColors.green}
          checked={todoColor === TodoColors.green}
        />
      </div>
    </div>
  );
};

export default ChangeColor;
