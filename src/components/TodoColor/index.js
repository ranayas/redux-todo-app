import "./TodoColor.css";

const TodoColor = ({ id, name, color, checked, type, onChange }) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type={type}
        value={color}
        className="todo-color__radio"
        checked={checked}
        readOnly
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`todo-color__color todo-color__color--${color}`}
      ></label>
    </div>
  );
};

export default TodoColor;
