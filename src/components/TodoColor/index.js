import "./TodoColor.css";

const TodoColor = ({ name, color, checked}) => {
  return (
    <>
      <input
        name={name}
        id={`${color}Todo`}
        type="radio"
        value={color}
        className="todo-color__radio"
        checked={checked}
        readOnly
      />
      <label
        htmlFor={`${color}Todo`}
        className={`todo-color__color todo-color__color--${color}`}
      ></label>
    </>
  );
};

export default TodoColor;
