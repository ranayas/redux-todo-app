import "./FilterByStatus.css";
import * as StatusFilters from "../../shared/StatusFilters";
import { useDispatch, useSelector } from "react-redux";
import * as filtersThunks from "../../store/filters/filtersThunks";
import * as filtersSelectors from "../../store/filters/filtersSelectors";

const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

const inputName = "todoStatusFilter";

const FilterByStatus = () => {
  const dispatch = useDispatch();
  const filterStatus = useSelector(filtersSelectors.selectFilterStatus);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(filtersThunks.changeStatusFilter(value));
  };

  const renderStatuses = Object.keys(StatusFilters).map((key) => {
    const statusFilter = StatusFilters[key];
    const id = `${statusFilter}Todos`;
    return (
      <div key={key}>
        <input
          className="filter-status__input"
          type="radio"
          id={id}
          name={inputName}
          value={statusFilter}
          checked={filterStatus === statusFilter}
          onChange={handleChange}
        />
        <label className="filter-status__label" htmlFor={id}>
          {capitalize(statusFilter)}
        </label>
      </div>
    );
  });

  return (
    <div className="filter-status">
      <p className="filter-status__title">Filter Status</p>
      <div className="filter-status__statuses-wrapper">
        <div className="filter-status__statuses">{renderStatuses}</div>
      </div>
    </div>
  );
};

export default FilterByStatus;
