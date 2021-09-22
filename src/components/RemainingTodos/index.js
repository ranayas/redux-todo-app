import { useSelector } from "react-redux";
import "./RemainingTodos.css";
import * as todosSelectors from "../../store/todos/todosSelectors";

const RemainingTodos = () => {
  const remainingTodosCount = useSelector(
    todosSelectors.selectRemainingTodosCount
  );
  return (
    <div className="remaining-todos">
      <p className="remaining-todos__title">Remaining Todos</p>
      <p className="remaining-todos__count">{remainingTodosCount}</p>
    </div>
  );
};

export default RemainingTodos;
