import "./Actions.css";

const Actions = () => {
  return (
    <div className="actions">
      <p className="action__title">Actions</p>
      <div className="action__buttons">
        <button className="action__button">Mark all completed</button>
        <button className="action__button">Clear completed</button>
      </div>
    </div>
  );
};

export default Actions;
