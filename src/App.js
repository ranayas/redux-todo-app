import Title from "./components/Title";
import TodoTextInput from "./components/TodoTextInput";
import TodoList from "./components/TodoList";
import Actions from "./components/Actions";
import "./App.css";

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
    </div>
  );
};

export default App;
