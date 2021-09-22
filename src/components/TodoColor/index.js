import "./TodoColor.css";

const TodoColor = ({ name, color, checked }) => {
  const id = `${color}Todo`;

  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={color}
        className="todo-color__radio"
        checked={checked}
        readOnly
      />
      <label
        htmlFor={id}
        className={`todo-color__color todo-color__color--${color}`}
      ></label>
    </div>
  );
};

export default TodoColor;
