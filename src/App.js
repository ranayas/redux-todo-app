import Title from "./components/Title";
import TodoTextInput from "./components/TodoTextInput";
import TodoList from "./components/TodoList";
import Actions from "./components/Actions";
import RemainingTodos from "./components/RemainingTodos";
import "./App.css";
import FilterByStatus from "./components/FilterByStatus";

const App = () => {
  return (
    <div className="wrapper">
      <Title />
      <div className="app__todo-input-text-wrapper">
        <TodoTextInput />
      </div>
      <TodoList />
      <div className="app__actions-wrapper">
        <Actions />
      </div>
      <div className="app__remaining-todos-wrapper">
        <RemainingTodos />
      </div>
      <div className="app__filter-by-status-wrapper">
        <FilterByStatus />
      </div>
    </div>
  );
};

export default App;
