import "./FilterByColor.css";
import * as TodoColor from "../../shared/TodoColor";
import TodoColorComponent from "../TodoColor";
import { useSelector, useDispatch } from "react-redux";
import * as filtersSelectors from "../../store/filters/filtersSelectors";
import * as filterThunks from "../../store/filters/filtersThunks";

const FilterByColor = () => {
  const filterColors = useSelector(filtersSelectors.selectFilterColors);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      dispatch(filterThunks.colorFilterAdded(value));
    } else {
      dispatch(filterThunks.colorFilterRemoved(value));
    }
  };

  const renderColors = Object.keys(TodoColor).map((key) => {
    const todoColor = TodoColor[key];
    const id = `${todoColor}Todos`;
    return (
      <TodoColorComponent
        key={key}
        id={id}
        name={"todoColorFilter"}
        type="checkbox"
        color={todoColor}
        onChange={handleChange}
        checked={filterColors.includes(todoColor)}
      />
    );
  });

  return (
    <div className="filter-by-color">
      <p className="filter-by-color__title">Filter by color</p>
      <div className="filter-by-color__colors-wrapper">
        <div className="filter-by-color__colors">{renderColors}</div>
      </div>
    </div>
  );
};

export default FilterByColor;
