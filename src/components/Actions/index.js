import { useDispatch } from "react-redux";
import "./Actions.css";
import * as todosThunks from "../../store/todos/todosThunks";

const Actions = () => {
  const dispatch = useDispatch();

  const handleMarkAllCompletedButtonClick = () =>
    dispatch(todosThunks.markTodosAsCompleted());

  const handleClearCompletedButtonClick = () =>
    dispatch(todosThunks.completedTodosCleared());

  return (
    <div className="actions">
      <p className="action__title">Actions</p>
      <div className="action__buttons">
        <button
          className="action__button"
          onClick={handleMarkAllCompletedButtonClick}
        >
          Mark all completed
        </button>
        <button
          className="action__button"
          onClick={handleClearCompletedButtonClick}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default Actions;
